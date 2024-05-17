import './style.css';

import "firebase/firestore";

import {initializeApp} from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    updateDoc,
    getDoc,
    setDoc,
    getDocs,
    deleteDoc,
    onSnapshot
} from "firebase/firestore";
import * as url from "node:url";

function jsSnippetToJson(jsSnippet) {
    const noComments = jsSnippet.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, '');
    const noTrailingCommas = noComments.replace(/,(\s*[}\]])/g, '$1');
    const obj = eval('(' + noTrailingCommas + ')');
    const jsonString = JSON.stringify(obj);

    return JSON.parse(jsonString);
}

let servers = null;
let firebaseConfig = null;
let app = null;
let db = null;
let localStream = null;
let remoteStream = null;

const urlParams = new URLSearchParams(window.location.search);
const fconfig = urlParams.get('fconfig');
const sconfig = urlParams.get('sconfig');

function initializeFirebase() {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
}

if (fconfig) {
    firebaseConfig = jsSnippetToJson(urlParams.get('fconfig'));
    initializeFirebase();
} else {
    console.log('No Firebase config found in URL, put it in fconfig query parameter.');
}

if (sconfig) {
    servers = jsSnippetToJson(sconfig);
} else {
    console.log('No WebRTC config found in URL, put it in sconfig query parameter.');
}


// Global State
function createPc() {
    const pc = new RTCPeerConnection(servers);
    window.pc = pc;
    pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
    };
    pc.onconnectionstatechange = (event) => {
        if (pc.connectionState === 'connected') {
            console.log('Connected!');
            remoteVideo.srcObject = remoteStream;
        }
    };
// Listen for incoming data channels
    pc.ondatachannel = (event) => {
        const chatChannel = event.channel;
        chatChannel.onmessage = (event) => {
            console.log('Received Message:', event.data);
        };
        chatChannel.onopen = () => {
            console.log('Chat Channel Opened!');
        };
        chatChannel.onclose = () => {
            console.log('Chat Channel Closed!');
        };
    };
    pc.oniceconnectionstatechange = (event) => console.log('ICE connection state change:', event);
    window.stream = remoteStream;
}

// HTML elements
const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const hangupButton = document.getElementById('hangupButton');
const initializeButton = document.getElementById('initialize');
const serversInput = document.getElementById('peer-connection-config');
const initForm = document.getElementById('init-form');


initForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // servers = jsSnippetToJson(e.target.elements['peer-connection-config'].value);
    createPc();
});

// 1. Setup media sources

webcamButton.onclick = async () => {
    callButton.disabled = false;
    answerButton.disabled = false;
    webcamButton.disabled = true;

    try {

        localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        remoteStream = new MediaStream();
        const chatChannel = pc.createDataChannel('chat');
        chatChannel.onmessage = (event) => {
            console.log('Received Message:', event.data);
        };
        chatChannel.onopen = () => {
            console.log('Chat Channel Opened!');
        };
        chatChannel.onclose = () => {
            console.log('Chat Channel Closed!');
        };
    } catch (e) {
        console.error('Error accessing media devices.', e);
    }

    // Push tracks from local stream to peer connection
    localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
    });


    webcamVideo.srcObject = localStream;

};

// 2. Create an offer
callButton.onclick = async () => {
    // Reference Firestore collections for signaling
    const myCollection = collection(db, 'calls');
    const callDoc = doc(myCollection, 'webrtc');
    // const callDoc = firestore.collection('calls').doc();
    const offerCandidates = collection(callDoc, 'offerCandidates');
    // const offerCandidates = callDoc.collection('offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');
    // const answerCandidates = callDoc.collection('answerCandidates');
    await setDoc(callDoc, {offer: null, answer: null});
    await getDocs(offerCandidates).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    })

    callInput.value = callDoc.id;

    // Get candidates for caller, save to db
    pc.onicecandidate = async (event) => {
        if (event.candidate) await addDoc(offerCandidates, event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
    };

    await updateDoc(callDoc, {offer});

    // Listen for remote answer
    onSnapshot(callDoc, (doc) => {
        const data = doc.data();
        if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }
    });

    // When answered, add candidate to peer connection
    onSnapshot(answerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                const candidate = new RTCIceCandidate(change.doc.data());
                pc.addIceCandidate(candidate);
            }
        });
    });

    hangupButton.disabled = false;
};

// 3. Answer the call with the unique ID
answerButton.onclick = async () => {
    const callId = callInput.value;
    const myCollection = collection(db, 'calls');
    const callDoc = doc(myCollection, callId);
    const answerCandidates = collection(callDoc, 'answerCandidates');
    const offerCandidates = collection(callDoc, 'offerCandidates');

    pc.onicecandidate = async (event) => {
        if (event.candidate) await addDoc(answerCandidates, event.candidate.toJSON());
    };

    const callData = await getDoc(callDoc);

    const data = callData.data();
    console.log(data.offer)
    await pc.setRemoteDescription(new RTCSessionDescription(data.offer));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
    };

    await updateDoc(callDoc, {answer});

    onSnapshot(offerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                let data = change.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(data));
            }
        });
    });
};
