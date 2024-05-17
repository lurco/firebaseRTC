(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var define_process_env_default={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const stringToByteArray$1=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},byteArrayToString=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,P=(o&3)<<4|u>>4;let R=(u&15)<<2|d>>6,w=d&63;h||(w=64,a||(R=64)),r.push(t[m],t[P],t[R],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(stringToByteArray$1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):byteArrayToString(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const P=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||P==null)throw new DecodeBase64StringError;const R=o<<2|u>>4;if(r.push(R),d!==64){const w=u<<4&240|d>>2;if(r.push(w),P!==64){const L=d<<6&192|P;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const base64Encode=function(n){const e=stringToByteArray$1(n);return base64.encodeByteArray(e,!0)},base64urlEncodeWithoutPadding=function(n){return base64Encode(n).replace(/\./g,"")},base64Decode=function(n){try{return base64.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getGlobal(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(typeof process>"u"||typeof define_process_env_default>"u")return;const n=define_process_env_default.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},getDefaultsFromCookie=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&base64Decode(n[1]);return e&&JSON.parse(e)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},getDefaultEmulatorHost=n=>{var e,t;return(t=(e=getDefaults())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},getDefaultEmulatorHostnameAndPort=n=>{const e=getDefaultEmulatorHost(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},getDefaultAppConfig=()=>{var n;return(n=getDefaults())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[base64urlEncodeWithoutPadding(JSON.stringify(t)),base64urlEncodeWithoutPadding(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isNode(){var n;const e=(n=getDefaults())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function isSafari(){return!isNode()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function isIndexedDBAvailable(){try{return typeof indexedDB=="object"}catch{return!1}}function validateIndexedDBOpenable(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?replaceTemplate(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new FirebaseError(s,u,r)}}function replaceTemplate(n,e){return n.replace(PATTERN,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PATTERN=/\{\$([^}]+)}/g;function deepEqual(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(isObject(o)&&isObject(a)){if(!deepEqual(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function isObject(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(n){return n&&n._delegate?n._delegate:n}class Component{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Provider{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Deferred;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(isComponentEager(e))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=DEFAULT_ENTRY_NAME$1){return this.instances.has(e)}getOptions(e=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?e:DEFAULT_ENTRY_NAME$1:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(n){return n===DEFAULT_ENTRY_NAME$1?void 0:n}function isComponentEager(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Provider(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var LogLevel;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ConsoleMethod[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Logger{constructor(e){this.name=e,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?levelStringToEnum[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...e),this._logHandler(this,LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...e),this._logHandler(this,LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...e),this._logHandler(this,LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...e),this._logHandler(this,LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...e),this._logHandler(this,LogLevel.ERROR,...e)}}const instanceOfAny=(n,e)=>e.some(t=>n instanceof t);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(wrap(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cursorRequestMap.set(t,n)}).catch(()=>{}),reverseTransformCache.set(e,n),e}function cacheDonePromiseForTransaction(n){if(transactionDoneMap.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});transactionDoneMap.set(n,e)}let idbProxyTraps={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return transactionDoneMap.get(n);if(e==="objectStoreNames")return n.objectStoreNames||transactionStoreNamesMap.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wrap(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function replaceTraps(n){idbProxyTraps=n(idbProxyTraps)}function wrapFunction(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(unwrap(this),e,...t);return transactionStoreNamesMap.set(r,e.sort?e.sort():[e]),wrap(r)}:getCursorAdvanceMethods().includes(n)?function(...e){return n.apply(unwrap(this),e),wrap(cursorRequestMap.get(this))}:function(...e){return wrap(n.apply(unwrap(this),e))}}function transformCachableValue(n){return typeof n=="function"?wrapFunction(n):(n instanceof IDBTransaction&&cacheDonePromiseForTransaction(n),instanceOfAny(n,getIdbProxyableTypes())?new Proxy(n,idbProxyTraps):n)}function wrap(n){if(n instanceof IDBRequest)return promisifyRequest(n);if(transformCache.has(n))return transformCache.get(n);const e=transformCachableValue(n);return e!==n&&(transformCache.set(n,e),reverseTransformCache.set(e,n)),e}const unwrap=n=>reverseTransformCache.get(n);function openDB(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=wrap(a);return r&&a.addEventListener("upgradeneeded",h=>{r(wrap(a.result),h.oldVersion,h.newVersion,wrap(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cachedMethods.get(e))return cachedMethods.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=writeMethods.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||readMethods.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return cachedMethods.set(e,o),o}replaceTraps(n=>({...n,get:(e,t,r)=>getMethod(e,t)||n.get(e,t,r),has:(e,t)=>!!getMethod(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(isVersionServiceProvider(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function isVersionServiceProvider(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const name$p="@firebase/app",version$1="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger=new Logger("@firebase/app"),name$o="@firebase/app-compat",name$n="@firebase/analytics-compat",name$m="@firebase/analytics",name$l="@firebase/app-check-compat",name$k="@firebase/app-check",name$j="@firebase/auth",name$i="@firebase/auth-compat",name$h="@firebase/database",name$g="@firebase/database-compat",name$f="@firebase/functions",name$e="@firebase/functions-compat",name$d="@firebase/installations",name$c="@firebase/installations-compat",name$b="@firebase/messaging",name$a="@firebase/messaging-compat",name$9="@firebase/performance",name$8="@firebase/performance-compat",name$7="@firebase/remote-config",name$6="@firebase/remote-config-compat",name$5="@firebase/storage",name$4="@firebase/storage-compat",name$3="@firebase/firestore",name$2="@firebase/vertexai-preview",name$1="@firebase/firestore-compat",name$q="firebase",version$2="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$p]:"fire-core",[name$o]:"fire-core-compat",[name$m]:"fire-analytics",[name$n]:"fire-analytics-compat",[name$k]:"fire-app-check",[name$l]:"fire-app-check-compat",[name$j]:"fire-auth",[name$i]:"fire-auth-compat",[name$h]:"fire-rtdb",[name$g]:"fire-rtdb-compat",[name$f]:"fire-fn",[name$e]:"fire-fn-compat",[name$d]:"fire-iid",[name$c]:"fire-iid-compat",[name$b]:"fire-fcm",[name$a]:"fire-fcm-compat",[name$9]:"fire-perf",[name$8]:"fire-perf-compat",[name$7]:"fire-rc",[name$6]:"fire-rc-compat",[name$5]:"fire-gcs",[name$4]:"fire-gcs-compat",[name$3]:"fire-fst",[name$1]:"fire-fst-compat",[name$2]:"fire-vertex","fire-js":"fire-js",[name$q]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _apps=new Map,_serverApps=new Map,_components=new Map;function _addComponent(n,e){try{n.container.addComponent(e)}catch(t){logger.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _registerComponent(n){const e=n.name;if(_components.has(e))return logger.debug(`There were multiple attempts to register component ${e}.`),!1;_components.set(e,n);for(const t of _apps.values())_addComponent(t,n);for(const t of _serverApps.values())_addComponent(t,n);return!0}function _getProvider(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ERROR_FACTORY=new ErrorFactory("app","Firebase",ERRORS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAppImpl{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SDK_VERSION=version$2;function initializeApp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ERROR_FACTORY.create("bad-app-name",{appName:String(s)});if(t||(t=getDefaultAppConfig()),!t)throw ERROR_FACTORY.create("no-options");const o=_apps.get(s);if(o){if(deepEqual(t,o.options)&&deepEqual(r,o.config))return o;throw ERROR_FACTORY.create("duplicate-app",{appName:s})}const a=new ComponentContainer(s);for(const h of _components.values())a.addComponent(h);const u=new FirebaseAppImpl(t,r,a);return _apps.set(s,u),u}function getApp(n=DEFAULT_ENTRY_NAME){const e=_apps.get(n);if(!e&&n===DEFAULT_ENTRY_NAME&&getDefaultAppConfig())return initializeApp();if(!e)throw ERROR_FACTORY.create("no-app",{appName:n});return e}function registerVersion(n,e,t){var r;let s=(r=PLATFORM_LOG_STRING[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),logger.warn(u.join(" "));return}_registerComponent(new Component(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME="firebase-heartbeat-database",DB_VERSION=1,STORE_NAME="firebase-heartbeat-store";let dbPromise=null;function getDbPromise(){return dbPromise||(dbPromise=openDB(DB_NAME,DB_VERSION,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(STORE_NAME)}catch(t){console.warn(t)}}}}).catch(n=>{throw ERROR_FACTORY.create("idb-open",{originalErrorMessage:n.message})})),dbPromise}async function readHeartbeatsFromIndexedDB(n){try{const t=(await getDbPromise()).transaction(STORE_NAME),r=await t.objectStore(STORE_NAME).get(computeKey(n));return await t.done,r}catch(e){if(e instanceof FirebaseError)logger.warn(e.message);else{const t=ERROR_FACTORY.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});logger.warn(t.message)}}}async function writeHeartbeatsToIndexedDB(n,e){try{const r=(await getDbPromise()).transaction(STORE_NAME,"readwrite");await r.objectStore(STORE_NAME).put(e,computeKey(n)),await r.done}catch(t){if(t instanceof FirebaseError)logger.warn(t.message);else{const r=ERROR_FACTORY.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});logger.warn(r.message)}}}function computeKey(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=getUTCDateString();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=getUTCDateString(),{heartbeatsToSend:r,unsentEntries:s}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),o=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(n,e=MAX_HEADER_BYTES){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),countBytes(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),countBytes(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await readHeartbeatsFromIndexedDB(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function countBytes(n){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerCoreComponents(n){_registerComponent(new Component("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new Component("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(name$p,version$1,n),registerVersion(name$p,version$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents("");var commonjsGlobal$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Integer,Md5;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,f){function g(){}g.prototype=f.prototype,I.D=f.prototype,I.prototype=new g,I.prototype.constructor=I,I.C=function(E,T,A){for(var p=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)p[ie-2]=arguments[ie];return f.prototype[T].apply(E,p)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,f,g){g||(g=0);var E=Array(16);if(typeof f=="string")for(var T=0;16>T;++T)E[T]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(T=0;16>T;++T)E[T]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=I.g[0],g=I.g[1],T=I.g[2];var A=I.g[3],p=f+(A^g&(T^A))+E[0]+3614090360&4294967295;f=g+(p<<7&4294967295|p>>>25),p=A+(T^f&(g^T))+E[1]+3905402710&4294967295,A=f+(p<<12&4294967295|p>>>20),p=T+(g^A&(f^g))+E[2]+606105819&4294967295,T=A+(p<<17&4294967295|p>>>15),p=g+(f^T&(A^f))+E[3]+3250441966&4294967295,g=T+(p<<22&4294967295|p>>>10),p=f+(A^g&(T^A))+E[4]+4118548399&4294967295,f=g+(p<<7&4294967295|p>>>25),p=A+(T^f&(g^T))+E[5]+1200080426&4294967295,A=f+(p<<12&4294967295|p>>>20),p=T+(g^A&(f^g))+E[6]+2821735955&4294967295,T=A+(p<<17&4294967295|p>>>15),p=g+(f^T&(A^f))+E[7]+4249261313&4294967295,g=T+(p<<22&4294967295|p>>>10),p=f+(A^g&(T^A))+E[8]+1770035416&4294967295,f=g+(p<<7&4294967295|p>>>25),p=A+(T^f&(g^T))+E[9]+2336552879&4294967295,A=f+(p<<12&4294967295|p>>>20),p=T+(g^A&(f^g))+E[10]+4294925233&4294967295,T=A+(p<<17&4294967295|p>>>15),p=g+(f^T&(A^f))+E[11]+2304563134&4294967295,g=T+(p<<22&4294967295|p>>>10),p=f+(A^g&(T^A))+E[12]+1804603682&4294967295,f=g+(p<<7&4294967295|p>>>25),p=A+(T^f&(g^T))+E[13]+4254626195&4294967295,A=f+(p<<12&4294967295|p>>>20),p=T+(g^A&(f^g))+E[14]+2792965006&4294967295,T=A+(p<<17&4294967295|p>>>15),p=g+(f^T&(A^f))+E[15]+1236535329&4294967295,g=T+(p<<22&4294967295|p>>>10),p=f+(T^A&(g^T))+E[1]+4129170786&4294967295,f=g+(p<<5&4294967295|p>>>27),p=A+(g^T&(f^g))+E[6]+3225465664&4294967295,A=f+(p<<9&4294967295|p>>>23),p=T+(f^g&(A^f))+E[11]+643717713&4294967295,T=A+(p<<14&4294967295|p>>>18),p=g+(A^f&(T^A))+E[0]+3921069994&4294967295,g=T+(p<<20&4294967295|p>>>12),p=f+(T^A&(g^T))+E[5]+3593408605&4294967295,f=g+(p<<5&4294967295|p>>>27),p=A+(g^T&(f^g))+E[10]+38016083&4294967295,A=f+(p<<9&4294967295|p>>>23),p=T+(f^g&(A^f))+E[15]+3634488961&4294967295,T=A+(p<<14&4294967295|p>>>18),p=g+(A^f&(T^A))+E[4]+3889429448&4294967295,g=T+(p<<20&4294967295|p>>>12),p=f+(T^A&(g^T))+E[9]+568446438&4294967295,f=g+(p<<5&4294967295|p>>>27),p=A+(g^T&(f^g))+E[14]+3275163606&4294967295,A=f+(p<<9&4294967295|p>>>23),p=T+(f^g&(A^f))+E[3]+4107603335&4294967295,T=A+(p<<14&4294967295|p>>>18),p=g+(A^f&(T^A))+E[8]+1163531501&4294967295,g=T+(p<<20&4294967295|p>>>12),p=f+(T^A&(g^T))+E[13]+2850285829&4294967295,f=g+(p<<5&4294967295|p>>>27),p=A+(g^T&(f^g))+E[2]+4243563512&4294967295,A=f+(p<<9&4294967295|p>>>23),p=T+(f^g&(A^f))+E[7]+1735328473&4294967295,T=A+(p<<14&4294967295|p>>>18),p=g+(A^f&(T^A))+E[12]+2368359562&4294967295,g=T+(p<<20&4294967295|p>>>12),p=f+(g^T^A)+E[5]+4294588738&4294967295,f=g+(p<<4&4294967295|p>>>28),p=A+(f^g^T)+E[8]+2272392833&4294967295,A=f+(p<<11&4294967295|p>>>21),p=T+(A^f^g)+E[11]+1839030562&4294967295,T=A+(p<<16&4294967295|p>>>16),p=g+(T^A^f)+E[14]+4259657740&4294967295,g=T+(p<<23&4294967295|p>>>9),p=f+(g^T^A)+E[1]+2763975236&4294967295,f=g+(p<<4&4294967295|p>>>28),p=A+(f^g^T)+E[4]+1272893353&4294967295,A=f+(p<<11&4294967295|p>>>21),p=T+(A^f^g)+E[7]+4139469664&4294967295,T=A+(p<<16&4294967295|p>>>16),p=g+(T^A^f)+E[10]+3200236656&4294967295,g=T+(p<<23&4294967295|p>>>9),p=f+(g^T^A)+E[13]+681279174&4294967295,f=g+(p<<4&4294967295|p>>>28),p=A+(f^g^T)+E[0]+3936430074&4294967295,A=f+(p<<11&4294967295|p>>>21),p=T+(A^f^g)+E[3]+3572445317&4294967295,T=A+(p<<16&4294967295|p>>>16),p=g+(T^A^f)+E[6]+76029189&4294967295,g=T+(p<<23&4294967295|p>>>9),p=f+(g^T^A)+E[9]+3654602809&4294967295,f=g+(p<<4&4294967295|p>>>28),p=A+(f^g^T)+E[12]+3873151461&4294967295,A=f+(p<<11&4294967295|p>>>21),p=T+(A^f^g)+E[15]+530742520&4294967295,T=A+(p<<16&4294967295|p>>>16),p=g+(T^A^f)+E[2]+3299628645&4294967295,g=T+(p<<23&4294967295|p>>>9),p=f+(T^(g|~A))+E[0]+4096336452&4294967295,f=g+(p<<6&4294967295|p>>>26),p=A+(g^(f|~T))+E[7]+1126891415&4294967295,A=f+(p<<10&4294967295|p>>>22),p=T+(f^(A|~g))+E[14]+2878612391&4294967295,T=A+(p<<15&4294967295|p>>>17),p=g+(A^(T|~f))+E[5]+4237533241&4294967295,g=T+(p<<21&4294967295|p>>>11),p=f+(T^(g|~A))+E[12]+1700485571&4294967295,f=g+(p<<6&4294967295|p>>>26),p=A+(g^(f|~T))+E[3]+2399980690&4294967295,A=f+(p<<10&4294967295|p>>>22),p=T+(f^(A|~g))+E[10]+4293915773&4294967295,T=A+(p<<15&4294967295|p>>>17),p=g+(A^(T|~f))+E[1]+2240044497&4294967295,g=T+(p<<21&4294967295|p>>>11),p=f+(T^(g|~A))+E[8]+1873313359&4294967295,f=g+(p<<6&4294967295|p>>>26),p=A+(g^(f|~T))+E[15]+4264355552&4294967295,A=f+(p<<10&4294967295|p>>>22),p=T+(f^(A|~g))+E[6]+2734768916&4294967295,T=A+(p<<15&4294967295|p>>>17),p=g+(A^(T|~f))+E[13]+1309151649&4294967295,g=T+(p<<21&4294967295|p>>>11),p=f+(T^(g|~A))+E[4]+4149444226&4294967295,f=g+(p<<6&4294967295|p>>>26),p=A+(g^(f|~T))+E[11]+3174756917&4294967295,A=f+(p<<10&4294967295|p>>>22),p=T+(f^(A|~g))+E[2]+718787259&4294967295,T=A+(p<<15&4294967295|p>>>17),p=g+(A^(T|~f))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+f&4294967295,I.g[1]=I.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,f){f===void 0&&(f=I.length);for(var g=f-this.blockSize,E=this.B,T=this.h,A=0;A<f;){if(T==0)for(;A<=g;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<f;)if(E[T++]=I.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<f;)if(E[T++]=I[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=f},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var f=1;f<I.length-8;++f)I[f]=0;var g=8*this.o;for(f=I.length-8;f<I.length;++f)I[f]=g&255,g/=256;for(this.u(I),I=Array(16),f=g=0;4>f;++f)for(var E=0;32>E;E+=8)I[g++]=this.g[f]>>>E&255;return I};function o(I,f){var g=u;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=f(I)}function a(I,f){this.h=f;for(var g=[],E=!0,T=I.length-1;0<=T;T--){var A=I[T]|0;E&&A==f||(g[T]=A,E=!1)}this.g=g}var u={};function h(I){return-128<=I&&128>I?o(I,function(f){return new a([f|0],0>f?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return P;if(0>I)return N(d(-I));for(var f=[],g=1,E=0;I>=g;E++)f[E]=I/g|0,g*=4294967296;return new a(f,0)}function m(I,f){if(I.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(I.charAt(0)=="-")return N(m(I.substring(1),f));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(f,8)),E=P,T=0;T<I.length;T+=8){var A=Math.min(8,I.length-T),p=parseInt(I.substring(T,T+A),f);8>A?(A=d(Math.pow(f,A)),E=E.j(A).add(d(p))):(E=E.j(g),E=E.add(d(p)))}return E}var P=h(0),R=h(1),w=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-N(this).m();for(var I=0,f=1,g=0;g<this.g.length;g++){var E=this.i(g);I+=(0<=E?E:4294967296+E)*f,f*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(L(this))return"0";if(O(this))return"-"+N(this).toString(I);for(var f=d(Math.pow(I,6)),g=this,E="";;){var T=K(g,f).g;g=x(g,T.j(f));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(I);if(g=T,L(g))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function L(I){if(I.h!=0)return!1;for(var f=0;f<I.g.length;f++)if(I.g[f]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=x(this,I),O(I)?-1:L(I)?0:1};function N(I){for(var f=I.g.length,g=[],E=0;E<f;E++)g[E]=~I.g[E];return new a(g,~I.h).add(R)}n.abs=function(){return O(this)?N(this):this},n.add=function(I){for(var f=Math.max(this.g.length,I.g.length),g=[],E=0,T=0;T<=f;T++){var A=E+(this.i(T)&65535)+(I.i(T)&65535),p=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=p>>>16,A&=65535,p&=65535,g[T]=p<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function x(I,f){return I.add(N(f))}n.j=function(I){if(L(this)||L(I))return P;if(O(this))return O(I)?N(this).j(N(I)):N(N(this).j(I));if(O(I))return N(this.j(N(I)));if(0>this.l(w)&&0>I.l(w))return d(this.m()*I.m());for(var f=this.g.length+I.g.length,g=[],E=0;E<2*f;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var A=this.i(E)>>>16,p=this.i(E)&65535,ie=I.i(T)>>>16,xe=I.i(T)&65535;g[2*E+2*T]+=p*xe,B(g,2*E+2*T),g[2*E+2*T+1]+=A*xe,B(g,2*E+2*T+1),g[2*E+2*T+1]+=p*ie,B(g,2*E+2*T+1),g[2*E+2*T+2]+=A*ie,B(g,2*E+2*T+2)}for(E=0;E<f;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=f;E<2*f;E++)g[E]=0;return new a(g,0)};function B(I,f){for(;(I[f]&65535)!=I[f];)I[f+1]+=I[f]>>>16,I[f]&=65535,f++}function q(I,f){this.g=I,this.h=f}function K(I,f){if(L(f))throw Error("division by zero");if(L(I))return new q(P,P);if(O(I))return f=K(N(I),f),new q(N(f.g),N(f.h));if(O(f))return f=K(I,N(f)),new q(N(f.g),f.h);if(30<I.g.length){if(O(I)||O(f))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=f;0>=E.l(I);)g=te(g),E=te(E);var T=z(g,1),A=z(E,1);for(E=z(E,2),g=z(g,2);!L(E);){var p=A.add(E);0>=p.l(I)&&(T=T.add(g),A=p),E=z(E,1),g=z(g,1)}return f=x(I,T.j(f)),new q(T,f)}for(T=P;0<=I.l(f);){for(g=Math.max(1,Math.floor(I.m()/f.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(g),p=A.j(f);O(p)||0<p.l(I);)g-=E,A=d(g),p=A.j(f);L(A)&&(A=R),T=T.add(A),I=x(I,p)}return new q(T,I)}n.A=function(I){return K(this,I).h},n.and=function(I){for(var f=Math.max(this.g.length,I.g.length),g=[],E=0;E<f;E++)g[E]=this.i(E)&I.i(E);return new a(g,this.h&I.h)},n.or=function(I){for(var f=Math.max(this.g.length,I.g.length),g=[],E=0;E<f;E++)g[E]=this.i(E)|I.i(E);return new a(g,this.h|I.h)},n.xor=function(I){for(var f=Math.max(this.g.length,I.g.length),g=[],E=0;E<f;E++)g[E]=this.i(E)^I.i(E);return new a(g,this.h^I.h)};function te(I){for(var f=I.g.length+1,g=[],E=0;E<f;E++)g[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(g,I.h)}function z(I,f){var g=f>>5;f%=32;for(var E=I.g.length-g,T=[],A=0;A<E;A++)T[A]=0<f?I.i(A+g)>>>f|I.i(A+g+1)<<32-f:I.i(A+g);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Integer=a}).apply(typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:typeof window<"u"?window:{});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XhrIo,FetchXmlHttpFactory,WebChannel,EventType,ErrorCode,Stat,Event,getStatEventTarget,createWebChannelTransport;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof commonjsGlobal=="object"&&commonjsGlobal];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var l=r;i=i.split(".");for(var _=0;_<i.length-1;_++){var y=i[_];if(!(y in l))break e;l=l[y]}i=i[i.length-1],_=l[i],c=c(_),c!=_&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,_=!1,y={next:function(){if(!_&&l<i.length){var V=l++;return{value:c(V,i[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,l){return i.call.apply(i.bind,arguments)}function P(i,c,l){if(!i)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,_),i.apply(c,y)}}return function(){return i.apply(c,arguments)}}function R(i,c,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:P,R.apply(null,arguments)}function w(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var _=l.slice();return _.push.apply(_,arguments),i.apply(this,_)}}function L(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(_,y,V){for(var M=Array(arguments.length-2),U=2;U<arguments.length;U++)M[U-2]=arguments[U];return c.prototype[y].apply(_,M)}}function O(i){const c=i.length;if(0<c){const l=Array(c);for(let _=0;_<c;_++)l[_]=i[_];return l}return[]}function N(i,c){for(let l=1;l<arguments.length;l++){const _=arguments[l];if(h(_)){const y=i.length||0,V=_.length||0;i.length=y+V;for(let M=0;M<V;M++)i[y+M]=_[M]}else i.push(_)}}class x{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function K(i){return K[" "](i),i}K[" "]=function(){};var te=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function z(i,c,l){for(const _ in i)c.call(l,i[_],_,i)}function I(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function f(i){const c={};for(const l in i)c[l]=i[l];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let l,_;for(let y=1;y<arguments.length;y++){_=arguments[y];for(l in _)i[l]=_[l];for(let V=0;V<g.length;V++)l=g[V],Object.prototype.hasOwnProperty.call(_,l)&&(i[l]=_[l])}}function T(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function A(i){u.setTimeout(()=>{throw i},0)}function p(){var i=It;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class ie{constructor(){this.h=this.g=null}add(c,l){const _=xe.get();_.set(c,l),this.h?this.h.next=_:this.g=_,this.h=_}}var xe=new x(()=>new zn,i=>i.reset());class zn{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Ue=!1,It=new ie,Kt=()=>{const i=u.Promise.resolve(void 0);Be=()=>{i.then(Wn)}};var Wn=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){A(l)}var c=xe;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Ue=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var Qn=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function qe(i,c){if(Q.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,_=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(te){e:{try{K(c.nodeName);var y=!0;break e}catch{}y=!1}y||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Gn[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&qe.aa.h.call(this)}}L(qe,Q);var Gn={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),Hn=0;function Yn(i,c,l,_,y){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!_,this.ha=y,this.key=++Hn,this.da=this.fa=!1}function rt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function it(i){this.src=i,this.g={},this.h=0}it.prototype.add=function(i,c,l,_,y){var V=i.toString();i=this.g[V],i||(i=this.g[V]=[],this.h++);var M=At(i,c,_,y);return-1<M?(c=i[M],l||(c.fa=!1)):(c=new Yn(c,this.src,V,!!_,y),c.fa=l,i.push(c)),c};function yt(i,c){var l=c.type;if(l in i.g){var _=i.g[l],y=Array.prototype.indexOf.call(_,c,void 0),V;(V=0<=y)&&Array.prototype.splice.call(_,y,1),V&&(rt(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function At(i,c,l,_){for(var y=0;y<i.length;++y){var V=i[y];if(!V.da&&V.listener==c&&V.capture==!!l&&V.ha==_)return y}return-1}var Pt="closure_lm_"+(1e6*Math.random()|0),Rt={};function zt(i,c,l,_,y){if(Array.isArray(c)){for(var V=0;V<c.length;V++)zt(i,c[V],l,_,y);return null}return l=Gt(l),i&&i[nt]?i.K(c,l,d(_)?!!_.capture:!!_,y):Xn(i,c,l,!1,_,y)}function Xn(i,c,l,_,y,V){if(!c)throw Error("Invalid event type");var M=d(y)?!!y.capture:!!y,U=vt(i);if(U||(i[Pt]=U=new it(i)),l=U.add(c,l,_,M,V),l.proxy)return l;if(_=Jn(),l.proxy=_,_.src=i,_.listener=l,i.addEventListener)Qn||(y=M),y===void 0&&(y=!1),i.addEventListener(c.toString(),_,y);else if(i.attachEvent)i.attachEvent(Qt(c.toString()),_);else if(i.addListener&&i.removeListener)i.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Jn(){function i(l){return c.call(i.src,i.listener,l)}const c=Zn;return i}function Wt(i,c,l,_,y){if(Array.isArray(c))for(var V=0;V<c.length;V++)Wt(i,c[V],l,_,y);else _=d(_)?!!_.capture:!!_,l=Gt(l),i&&i[nt]?(i=i.i,c=String(c).toString(),c in i.g&&(V=i.g[c],l=At(V,l,_,y),-1<l&&(rt(V[l]),Array.prototype.splice.call(V,l,1),V.length==0&&(delete i.g[c],i.h--)))):i&&(i=vt(i))&&(c=i.g[c.toString()],i=-1,c&&(i=At(c,l,_,y)),(l=-1<i?c[i]:null)&&Vt(l))}function Vt(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[nt])yt(c.i,i);else{var l=i.type,_=i.proxy;c.removeEventListener?c.removeEventListener(l,_,i.capture):c.detachEvent?c.detachEvent(Qt(l),_):c.addListener&&c.removeListener&&c.removeListener(_),(l=vt(c))?(yt(l,i),l.h==0&&(l.src=null,c[Pt]=null)):rt(i)}}}function Qt(i){return i in Rt?Rt[i]:Rt[i]="on"+i}function Zn(i,c){if(i.da)i=!0;else{c=new qe(c,this);var l=i.listener,_=i.ha||i.src;i.fa&&Vt(i),i=l.call(_,c)}return i}function vt(i){return i=i[Pt],i instanceof it?i:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gt(i){return typeof i=="function"?i:(i[wt]||(i[wt]=function(c){return i.handleEvent(c)}),i[wt])}function G(){Ae.call(this),this.i=new it(this),this.M=this,this.F=null}L(G,Ae),G.prototype[nt]=!0,G.prototype.removeEventListener=function(i,c,l,_){Wt(this,i,c,l,_)};function X(i,c){var l,_=i.F;if(_)for(l=[];_;_=_.F)l.push(_);if(i=i.M,_=c.type||c,typeof c=="string")c=new Q(c,i);else if(c instanceof Q)c.target=c.target||i;else{var y=c;c=new Q(_,i),E(c,y)}if(y=!0,l)for(var V=l.length-1;0<=V;V--){var M=c.g=l[V];y=st(M,_,!0,c)&&y}if(M=c.g=i,y=st(M,_,!0,c)&&y,y=st(M,_,!1,c)&&y,l)for(V=0;V<l.length;V++)M=c.g=l[V],y=st(M,_,!1,c)&&y}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],_=0;_<l.length;_++)rt(l[_]);delete i.g[c],i.h--}}this.F=null},G.prototype.K=function(i,c,l,_){return this.i.add(String(i),c,!1,l,_)},G.prototype.L=function(i,c,l,_){return this.i.add(String(i),c,!0,l,_)};function st(i,c,l,_){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var y=!0,V=0;V<c.length;++V){var M=c[V];if(M&&!M.da&&M.capture==l){var U=M.listener,W=M.ha||M.src;M.fa&&yt(i.i,M),y=U.call(W,_)!==!1&&y}}return y&&!_.defaultPrevented}function Ht(i,c,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function Yt(i){i.g=Ht(()=>{i.g=null,i.i&&(i.i=!1,Yt(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class er extends Ae{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Yt(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(i){Ae.call(this),this.h=i,this.g={}}L(je,Ae);var Xt=[];function Jt(i){z(i.g,function(c,l){this.g.hasOwnProperty(l)&&Vt(c)},i),i.g={}}je.prototype.N=function(){je.aa.N.call(this),Jt(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=u.JSON.stringify,tr=u.JSON.parse,nr=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ct(){}Ct.prototype.h=null;function Zt(i){return i.h||(i.h=i.i())}function en(){}var $e={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bt(){Q.call(this,"d")}L(bt,Q);function Dt(){Q.call(this,"c")}L(Dt,Q);var Ce={},tn=null;function ot(){return tn=tn||new G}Ce.La="serverreachability";function nn(i){Q.call(this,Ce.La,i)}L(nn,Q);function Ke(i){const c=ot();X(c,new nn(c))}Ce.STAT_EVENT="statevent";function rn(i,c){Q.call(this,Ce.STAT_EVENT,i),this.stat=c}L(rn,Q);function J(i){const c=ot();X(c,new rn(c,i))}Ce.Ma="timingevent";function sn(i,c){Q.call(this,Ce.Ma,i),this.size=c}L(sn,Q);function ze(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function We(){this.g=!0}We.prototype.xa=function(){this.g=!1};function rr(i,c,l,_,y,V){i.info(function(){if(i.g)if(V)for(var M="",U=V.split("&"),W=0;W<U.length;W++){var k=U[W].split("=");if(1<k.length){var H=k[0];k=k[1];var Y=H.split("_");M=2<=Y.length&&Y[1]=="type"?M+(H+"="+k+"&"):M+(H+"=redacted&")}}else M=null;else M=V;return"XMLHTTP REQ ("+_+") [attempt "+y+"]: "+c+`
`+l+`
`+M})}function ir(i,c,l,_,y,V,M){i.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+y+"]: "+c+`
`+l+`
`+V+" "+M})}function Ne(i,c,l,_){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+or(i,l)+(_?" "+_:"")})}function sr(i,c){i.info(function(){return"TIMEOUT: "+c})}We.prototype.info=function(){};function or(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var _=l[i];if(!(2>_.length)){var y=_[1];if(Array.isArray(y)&&!(1>y.length)){var V=y[0];if(V!="noop"&&V!="stop"&&V!="close")for(var M=1;M<y.length;M++)y[M]=""}}}}return St(l)}catch{return c}}var at={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},on={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mt;function ct(){}L(ct,Ct),ct.prototype.g=function(){return new XMLHttpRequest},ct.prototype.i=function(){return{}},Mt=new ct;function Re(i,c,l,_){this.j=i,this.i=c,this.l=l,this.R=_||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new an}function an(){this.i=null,this.g="",this.h=!1}var cn={},Ft={};function Nt(i,c,l){i.L=1,i.v=_t(he(c)),i.m=l,i.P=!0,ln(i,null)}function ln(i,c){i.F=Date.now(),lt(i),i.A=he(i.v);var l=i.A,_=i.R;Array.isArray(_)||(_=[String(_)]),Pn(l.i,"t",_),i.C=0,l=i.j.J,i.h=new an,i.g=qn(i.j,l?c:null,!i.m),0<i.O&&(i.M=new er(R(i.Y,i,i.g),i.O)),c=i.U,l=i.g,_=i.ca;var y="readystatechange";Array.isArray(y)||(y&&(Xt[0]=y.toString()),y=Xt);for(var V=0;V<y.length;V++){var M=zt(l,y[V],_||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=i.H?f(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Ke(),rr(i.i,i.u,i.A,i.l,i.R,i.m)}Re.prototype.ca=function(i){i=i.target;const c=this.M;c&&de(i)==3?c.j():this.Y(i)},Re.prototype.Y=function(i){try{if(i==this.g)e:{const Y=de(this.g);var c=this.g.Ba();const ke=this.g.Z();if(!(3>Y)&&(Y!=3||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||Y!=4||c==7||(c==8||0>=ke?Ke(3):Ke(2)),Lt(this);var l=this.g.Z();this.X=l;t:if(un(this)){var _=bn(this.g);i="";var y=_.length,V=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){De(this),Qe(this);var M="";break t}this.h.i=new u.TextDecoder}for(c=0;c<y;c++)this.h.h=!0,i+=this.h.i.decode(_[c],{stream:!(V&&c==y-1)});_.length=0,this.h.g+=i,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=l==200,ir(this.i,this.u,this.A,this.l,this.R,Y,l),this.o){if(this.T&&!this.K){t:{if(this.g){var U,W=this.g;if((U=W.g?W.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(U)){var k=U;break t}}k=null}if(l=k)Ne(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,l);else{this.o=!1,this.s=3,J(12),De(this),Qe(this);break e}}if(this.P){l=!0;let ee;for(;!this.J&&this.C<M.length;)if(ee=ar(this,M),ee==Ft){Y==4&&(this.s=4,J(14),l=!1),Ne(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==cn){this.s=4,J(15),Ne(this.i,this.l,M,"[Invalid Chunk]"),l=!1;break}else Ne(this.i,this.l,ee,null),Ot(this,ee);if(un(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||M.length!=0||this.h.h||(this.s=1,J(16),l=!1),this.o=this.o&&l,!l)Ne(this.i,this.l,M,"[Invalid Chunked Response]"),De(this),Qe(this);else if(0<M.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),jt(H),H.M=!0,J(11))}}else Ne(this.i,this.l,M,null),Ot(this,M);Y==4&&De(this),this.o&&!this.J&&(Y==4?kn(this.j,this):(this.o=!1,lt(this)))}else Rr(this.g),l==400&&0<M.indexOf("Unknown SID")?(this.s=3,J(12)):(this.s=0,J(13)),De(this),Qe(this)}}}catch{}finally{}};function un(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ar(i,c){var l=i.C,_=c.indexOf(`
`,l);return _==-1?Ft:(l=Number(c.substring(l,_)),isNaN(l)?cn:(_+=1,_+l>c.length?Ft:(c=c.slice(_,_+l),i.C=_+l,c)))}Re.prototype.cancel=function(){this.J=!0,De(this)};function lt(i){i.S=Date.now()+i.I,hn(i,i.I)}function hn(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ze(R(i.ba,i),c)}function Lt(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Re.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(sr(this.i,this.A),this.L!=2&&(Ke(),J(17)),De(this),this.s=2,Qe(this)):hn(this,this.S-i)};function Qe(i){i.j.G==0||i.J||kn(i.j,i)}function De(i){Lt(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Jt(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Ot(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||kt(l.h,i))){if(!i.K&&kt(l.h,i)&&l.G==3){try{var _=l.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var y=_;if(y[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)gt(l),mt(l);else break e;qt(l),J(18)}}else l.za=y[1],0<l.za-l.T&&37500>y[2]&&l.F&&l.v==0&&!l.C&&(l.C=ze(R(l.Za,l),6e3));if(1>=fn(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Fe(l,11)}else if((i.K||l.g==i)&&gt(l),!B(c))for(y=l.Da.g.parse(c),c=0;c<y.length;c++){let k=y[c];if(l.T=k[0],k=k[1],l.G==2)if(k[0]=="c"){l.K=k[1],l.ia=k[2];const H=k[3];H!=null&&(l.la=H,l.j.info("VER="+l.la));const Y=k[4];Y!=null&&(l.Aa=Y,l.j.info("SVER="+l.Aa));const ke=k[5];ke!=null&&typeof ke=="number"&&0<ke&&(_=1.5*ke,l.L=_,l.j.info("backChannelRequestTimeoutMs_="+_)),_=l;const ee=i.g;if(ee){const Tt=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tt){var V=_.h;V.g||Tt.indexOf("spdy")==-1&&Tt.indexOf("quic")==-1&&Tt.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xt(V,V.h),V.h=null))}if(_.D){const $t=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;$t&&(_.ya=$t,j(_.I,_.D,$t))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),_=l;var M=i;if(_.qa=Un(_,_.J?_.ia:null,_.W),M.K){mn(_.h,M);var U=M,W=_.L;W&&(U.I=W),U.B&&(Lt(U),lt(U)),_.g=M}else Ln(_);0<l.i.length&&pt(l)}else k[0]!="stop"&&k[0]!="close"||Fe(l,7);else l.G==3&&(k[0]=="stop"||k[0]=="close"?k[0]=="stop"?Fe(l,7):Ut(l):k[0]!="noop"&&l.l&&l.l.ta(k),l.v=0)}}Ke(4)}catch{}}var cr=class{constructor(i,c){this.g=i,this.map=c}};function _n(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dn(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function fn(i){return i.h?1:i.g?i.g.size:0}function kt(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function xt(i,c){i.g?i.g.add(c):i.h=c}function mn(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}_n.prototype.cancel=function(){if(this.i=pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function pn(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return O(i.i)}function lr(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,_=0;_<l;_++)c.push(i[_]);return c}c=[],l=0;for(_ in i)c[l++]=i[_];return c}function ur(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const _ in i)c[l++]=_;return c}}}function gn(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=ur(i),_=lr(i),y=_.length,V=0;V<y;V++)c.call(void 0,_[V],l&&l[V],i)}var En=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hr(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var _=i[l].indexOf("="),y=null;if(0<=_){var V=i[l].substring(0,_);y=i[l].substring(_+1)}else V=i[l];c(V,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Me(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Me){this.h=i.h,ut(this,i.j),this.o=i.o,this.g=i.g,ht(this,i.s),this.l=i.l;var c=i.i,l=new Ye;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Tn(this,l),this.m=i.m}else i&&(c=String(i).match(En))?(this.h=!1,ut(this,c[1]||"",!0),this.o=Ge(c[2]||""),this.g=Ge(c[3]||"",!0),ht(this,c[4]),this.l=Ge(c[5]||"",!0),Tn(this,c[6]||"",!0),this.m=Ge(c[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}Me.prototype.toString=function(){var i=[],c=this.j;c&&i.push(He(c,In,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(He(c,In,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(He(l,l.charAt(0)=="/"?fr:dr,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",He(l,pr)),i.join("")};function he(i){return new Me(i)}function ut(i,c,l){i.j=l?Ge(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function ht(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Tn(i,c,l){c instanceof Ye?(i.i=c,gr(i.i,i.h)):(l||(c=He(c,mr)),i.i=new Ye(c,i.h))}function j(i,c,l){i.i.set(c,l)}function _t(i){return j(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ge(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function He(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,_r),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function _r(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var In=/[#\/\?@]/g,dr=/[#\?:]/g,fr=/[#\?]/g,mr=/[#\?@]/g,pr=/#/g;function Ye(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function ve(i){i.g||(i.g=new Map,i.h=0,i.i&&hr(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Ye.prototype,n.add=function(i,c){ve(this),this.i=null,i=Le(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function yn(i,c){ve(i),c=Le(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function An(i,c){return ve(i),c=Le(i,c),i.g.has(c)}n.forEach=function(i,c){ve(this),this.g.forEach(function(l,_){l.forEach(function(y){i.call(c,y,_,this)},this)},this)},n.na=function(){ve(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let _=0;_<c.length;_++){const y=i[_];for(let V=0;V<y.length;V++)l.push(c[_])}return l},n.V=function(i){ve(this);let c=[];if(typeof i=="string")An(this,i)&&(c=c.concat(this.g.get(Le(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return ve(this),this.i=null,i=Le(this,i),An(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Pn(i,c,l){yn(i,c),0<l.length&&(i.i=null,i.g.set(Le(i,c),O(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var _=c[l];const V=encodeURIComponent(String(_)),M=this.V(_);for(_=0;_<M.length;_++){var y=V;M[_]!==""&&(y+="="+encodeURIComponent(String(M[_]))),i.push(y)}}return this.i=i.join("&")};function Le(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function gr(i,c){c&&!i.j&&(ve(i),i.i=null,i.g.forEach(function(l,_){var y=_.toLowerCase();_!=y&&(yn(this,_),Pn(this,y,l))},i)),i.j=c}function Er(i,c){const l=new We;if(u.Image){const _=new Image;_.onload=w(we,l,"TestLoadImage: loaded",!0,c,_),_.onerror=w(we,l,"TestLoadImage: error",!1,c,_),_.onabort=w(we,l,"TestLoadImage: abort",!1,c,_),_.ontimeout=w(we,l,"TestLoadImage: timeout",!1,c,_),u.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=i}else c(!1)}function Tr(i,c){const l=new We,_=new AbortController,y=setTimeout(()=>{_.abort(),we(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:_.signal}).then(V=>{clearTimeout(y),V.ok?we(l,"TestPingServer: ok",!0,c):we(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(y),we(l,"TestPingServer: error",!1,c)})}function we(i,c,l,_,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),_(l)}catch{}}function Ir(){this.g=new nr}function yr(i,c,l){const _=l||"";try{gn(i,function(y,V){let M=y;d(y)&&(M=St(y)),c.push(_+V+"="+encodeURIComponent(M))})}catch(y){throw c.push(_+"type="+encodeURIComponent("_badmap")),y}}function Xe(i){this.l=i.Ub||null,this.j=i.eb||!1}L(Xe,Ct),Xe.prototype.g=function(){return new dt(this.l,this.j)},Xe.prototype.i=function(i){return function(){return i}}({});function dt(i,c){G.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(dt,G),n=dt.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Ze(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Je(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rn(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rn(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Je(this):Ze(this),this.readyState==3&&Rn(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Je(this))},n.Qa=function(i){this.g&&(this.response=i,Je(this))},n.ga=function(){this.g&&Je(this)};function Je(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ze(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Ze(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(dt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Vn(i){let c="";return z(i,function(l,_){c+=_,c+=":",c+=l,c+=`\r
`}),c}function Bt(i,c,l){e:{for(_ in l){var _=!1;break e}_=!0}_||(l=Vn(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):j(i,c,l))}function $(i){G.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L($,G);var Ar=/^https?$/i,Pr=["POST","PUT"];n=$.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mt.g(),this.v=this.o?Zt(this.o):Zt(Mt),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(V){vn(this,V);return}if(i=l||"",l=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var y in _)l.set(y,_[y]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())l.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(l.keys()).find(V=>V.toLowerCase()=="content-type"),y=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Pr,c,void 0))||_||y||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,M]of l)this.g.setRequestHeader(V,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cn(this),this.u=!0,this.g.send(i),this.u=!1}catch(V){vn(this,V)}};function vn(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,wn(i),ft(i)}function wn(i){i.A||(i.A=!0,X(i,"complete"),X(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,X(this,"complete"),X(this,"abort"),ft(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ft(this,!0)),$.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sn(this):this.bb())},n.bb=function(){Sn(this)};function Sn(i){if(i.h&&typeof a<"u"&&(!i.v[1]||de(i)!=4||i.Z()!=2)){if(i.u&&de(i)==4)Ht(i.Ea,0,i);else if(X(i,"readystatechange"),de(i)==4){i.h=!1;try{const M=i.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var _;if(_=M===0){var y=String(i.D).match(En)[1]||null;!y&&u.self&&u.self.location&&(y=u.self.location.protocol.slice(0,-1)),_=!Ar.test(y?y.toLowerCase():"")}l=_}if(l)X(i,"complete"),X(i,"success");else{i.m=6;try{var V=2<de(i)?i.g.statusText:""}catch{V=""}i.l=V+" ["+i.Z()+"]",wn(i)}}finally{ft(i)}}}}function ft(i,c){if(i.g){Cn(i);const l=i.g,_=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||X(i,"ready");try{l.onreadystatechange=_}catch{}}}function Cn(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function de(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),tr(c)}};function bn(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Rr(i){const c={};i=(i.g&&2<=de(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<i.length;_++){if(B(i[_]))continue;var l=T(i[_]);const y=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const V=c[y]||[];c[y]=V,V.push(l)}I(c,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function et(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Dn(i){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=et("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=et("baseRetryDelayMs",5e3,i),this.cb=et("retryDelaySeedMs",1e4,i),this.Wa=et("forwardChannelMaxRetries",2,i),this.wa=et("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new _n(i&&i.concurrentRequestLimit),this.Da=new Ir,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Dn.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,_){J(0),this.W=i,this.H=c||{},l&&_!==void 0&&(this.H.OSID=l,this.H.OAID=_),this.F=this.X,this.I=Un(this,null,this.W),pt(this)};function Ut(i){if(Mn(i),i.G==3){var c=i.U++,l=he(i.I);if(j(l,"SID",i.K),j(l,"RID",c),j(l,"TYPE","terminate"),tt(i,l),c=new Re(i,i.j,c),c.L=2,c.v=_t(he(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=qn(c.j,null),c.g.ea(c.v)),c.F=Date.now(),lt(c)}Bn(i)}function mt(i){i.g&&(jt(i),i.g.cancel(),i.g=null)}function Mn(i){mt(i),i.u&&(u.clearTimeout(i.u),i.u=null),gt(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function pt(i){if(!dn(i.h)&&!i.s){i.s=!0;var c=i.Ga;Be||Kt(),Ue||(Be(),Ue=!0),It.add(c,i),i.B=0}}function Vr(i,c){return fn(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ze(R(i.Ga,i,c),xn(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const y=new Re(this,this.j,i);let V=this.o;if(this.S&&(V?(V=f(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(y.H=V,V=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var _=this.i[l];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Nn(this,y,c),l=he(this.I),j(l,"RID",i),j(l,"CVER",22),this.D&&j(l,"X-HTTP-Session-Id",this.D),tt(this,l),V&&(this.O?c="headers="+encodeURIComponent(String(Vn(V)))+"&"+c:this.m&&Bt(l,this.m,V)),xt(this.h,y),this.Ua&&j(l,"TYPE","init"),this.P?(j(l,"$req",c),j(l,"SID","null"),y.T=!0,Nt(y,l,null)):Nt(y,l,c),this.G=2}}else this.G==3&&(i?Fn(this,i):this.i.length==0||dn(this.h)||Fn(this))};function Fn(i,c){var l;c?l=c.l:l=i.U++;const _=he(i.I);j(_,"SID",i.K),j(_,"RID",l),j(_,"AID",i.T),tt(i,_),i.m&&i.o&&Bt(_,i.m,i.o),l=new Re(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Nn(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),xt(i.h,l),Nt(l,_,c)}function tt(i,c){i.H&&z(i.H,function(l,_){j(c,_,l)}),i.l&&gn({},function(l,_){j(c,_,l)})}function Nn(i,c,l){l=Math.min(i.i.length,l);var _=i.l?R(i.l.Na,i.l,i):null;e:{var y=i.i;let V=-1;for(;;){const M=["count="+l];V==-1?0<l?(V=y[0].g,M.push("ofs="+V)):V=0:M.push("ofs="+V);let U=!0;for(let W=0;W<l;W++){let k=y[W].g;const H=y[W].map;if(k-=V,0>k)V=Math.max(0,y[W].g-100),U=!1;else try{yr(H,M,"req"+k+"_")}catch{_&&_(H)}}if(U){_=M.join("&");break e}}}return i=i.i.splice(0,l),c.D=i,_}function Ln(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;Be||Kt(),Ue||(Be(),Ue=!0),It.add(c,i),i.v=0}}function qt(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ze(R(i.Fa,i),xn(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,On(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ze(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,J(10),mt(this),On(this))};function jt(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function On(i){i.g=new Re(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=he(i.qa);j(c,"RID","rpc"),j(c,"SID",i.K),j(c,"AID",i.T),j(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&j(c,"TO",i.ja),j(c,"TYPE","xmlhttp"),tt(i,c),i.m&&i.o&&Bt(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=_t(he(c)),l.m=null,l.P=!0,ln(l,i)}n.Za=function(){this.C!=null&&(this.C=null,mt(this),qt(this),J(19))};function gt(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function kn(i,c){var l=null;if(i.g==c){gt(i),jt(i),i.g=null;var _=2}else if(kt(i.h,c))l=c.D,mn(i.h,c),_=1;else return;if(i.G!=0){if(c.o)if(_==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var y=i.B;_=ot(),X(_,new sn(_,l)),pt(i)}else Ln(i);else if(y=c.s,y==3||y==0&&0<c.X||!(_==1&&Vr(i,c)||_==2&&qt(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),y){case 1:Fe(i,5);break;case 4:Fe(i,10);break;case 3:Fe(i,6);break;default:Fe(i,2)}}}function xn(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function Fe(i,c){if(i.j.info("Error code "+c),c==2){var l=R(i.fb,i),_=i.Xa;const y=!_;_=new Me(_||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ut(_,"https"),_t(_),y?Er(_.toString(),l):Tr(_.toString(),l)}else J(2);i.G=0,i.l&&i.l.sa(c),Bn(i),Mn(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Bn(i){if(i.G=0,i.ka=[],i.l){const c=pn(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ka,c),N(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Un(i,c,l){var _=l instanceof Me?he(l):new Me(l);if(_.g!="")c&&(_.g=c+"."+_.g),ht(_,_.s);else{var y=u.location;_=y.protocol,c=c?c+"."+y.hostname:y.hostname,y=+y.port;var V=new Me(null);_&&ut(V,_),c&&(V.g=c),y&&ht(V,y),l&&(V.l=l),_=V}return l=i.D,c=i.ya,l&&c&&j(_,l,c),j(_,"VER",i.la),tt(i,_),_}function qn(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new $(new Xe({eb:l})):new $(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jn(){}n=jn.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Et(){}Et.prototype.g=function(i,c){return new Z(i,c)};function Z(i,c){G.call(this),this.g=new Dn(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!B(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!B(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Oe(this)}L(Z,G),Z.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Z.prototype.close=function(){Ut(this.g)},Z.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=St(i),i=l);c.i.push(new cr(c.Ya++,i)),c.G==3&&pt(c)},Z.prototype.N=function(){this.g.l=null,delete this.j,Ut(this.g),delete this.g,Z.aa.N.call(this)};function $n(i){bt.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}L($n,bt);function Kn(){Dt.call(this),this.status=1}L(Kn,Dt);function Oe(i){this.g=i}L(Oe,jn),Oe.prototype.ua=function(){X(this.g,"a")},Oe.prototype.ta=function(i){X(this.g,new $n(i))},Oe.prototype.sa=function(i){X(this.g,new Kn)},Oe.prototype.ra=function(){X(this.g,"b")},Et.prototype.createWebChannel=Et.prototype.g,Z.prototype.send=Z.prototype.o,Z.prototype.open=Z.prototype.m,Z.prototype.close=Z.prototype.close,createWebChannelTransport=function(){return new Et},getStatEventTarget=function(){return ot()},Event=Ce,Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ErrorCode=at,on.COMPLETE="complete",EventType=on,en.EventType=$e,$e.OPEN="a",$e.CLOSE="b",$e.ERROR="c",$e.MESSAGE="d",G.prototype.listen=G.prototype.K,WebChannel=en,FetchXmlHttpFactory=Xe,$.prototype.listenOnce=$.prototype.L,$.prototype.getLastError=$.prototype.Ka,$.prototype.getLastErrorCode=$.prototype.Ba,$.prototype.getStatus=$.prototype.Z,$.prototype.getResponseJson=$.prototype.Oa,$.prototype.getResponseText=$.prototype.oa,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Ha,XhrIo=$}).apply(typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{});const S="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class User{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}User.UNAUTHENTICATED=new User(null),User.GOOGLE_CREDENTIALS=new User("google-credentials-uid"),User.FIRST_PARTY=new User("first-party-uid"),User.MOCK_USER=new User("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=new Logger("@firebase/firestore");function __PRIVATE_getLogLevel(){return D.logLevel}function __PRIVATE_logDebug(n,...e){if(D.logLevel<=LogLevel.DEBUG){const t=e.map(__PRIVATE_argToString);D.debug(`Firestore (${b}): ${n}`,...t)}}function __PRIVATE_logError(n,...e){if(D.logLevel<=LogLevel.ERROR){const t=e.map(__PRIVATE_argToString);D.error(`Firestore (${b}): ${n}`,...t)}}function __PRIVATE_logWarn(n,...e){if(D.logLevel<=LogLevel.WARN){const t=e.map(__PRIVATE_argToString);D.warn(`Firestore (${b}): ${n}`,...t)}}function __PRIVATE_argToString(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fail(n="Unexpected state"){const e=`FIRESTORE (${b}) INTERNAL ASSERTION FAILED: `+n;throw __PRIVATE_logError(e),new Error(e)}function __PRIVATE_hardAssert(n,e){n||fail()}function __PRIVATE_debugCast(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class FirestoreError extends FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_Deferred{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_OAuthToken{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class __PRIVATE_EmptyAuthCredentialsProvider{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(User.UNAUTHENTICATED))}shutdown(){}}class __PRIVATE_EmulatorAuthCredentialsProvider{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class __PRIVATE_FirebaseAuthCredentialsProvider{constructor(e){this.t=e,this.currentUser=User.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new __PRIVATE_Deferred;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new __PRIVATE_Deferred,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new __PRIVATE_Deferred)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(__PRIVATE_hardAssert(typeof r.accessToken=="string"),new __PRIVATE_OAuthToken(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return __PRIVATE_hardAssert(e===null||typeof e=="string"),new User(e)}}class __PRIVATE_FirstPartyToken{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=User.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class __PRIVATE_FirstPartyAuthCredentialsProvider{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(User.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AppCheckToken{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class __PRIVATE_FirebaseAppCheckTokenProvider{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=o=>{o.error!=null&&__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(__PRIVATE_hardAssert(typeof t.token=="string"),this.R=t.token,new AppCheckToken(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_randomBytes(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_AutoId{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=__PRIVATE_randomBytes(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function __PRIVATE_primitiveComparator(n,e){return n<e?-1:n>e?1:0}function __PRIVATE_arrayEquals(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Timestamp{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new FirestoreError(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new FirestoreError(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new FirestoreError(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new FirestoreError(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Timestamp.fromMillis(Date.now())}static fromDate(e){return Timestamp.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Timestamp(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?__PRIVATE_primitiveComparator(this.nanoseconds,e.nanoseconds):__PRIVATE_primitiveComparator(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SnapshotVersion{constructor(e){this.timestamp=e}static fromTimestamp(e){return new SnapshotVersion(e)}static min(){return new SnapshotVersion(new Timestamp(0,0))}static max(){return new SnapshotVersion(new Timestamp(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BasePath{constructor(e,t,r){t===void 0?t=0:t>e.length&&fail(),r===void 0?r=e.length-t:r>e.length-t&&fail(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return BasePath.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof BasePath?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ResourcePath extends BasePath{construct(e,t,r){return new ResourcePath(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new FirestoreError(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ResourcePath(t)}static emptyPath(){return new ResourcePath([])}}const v=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class FieldPath$1 extends BasePath{construct(e,t,r){return new FieldPath$1(e,t,r)}static isValidIdentifier(e){return v.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),FieldPath$1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new FieldPath$1(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new FirestoreError(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new FirestoreError(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new FirestoreError(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new FirestoreError(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new FieldPath$1(t)}static emptyPath(){return new FieldPath$1([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DocumentKey{constructor(e){this.path=e}static fromPath(e){return new DocumentKey(ResourcePath.fromString(e))}static fromName(e){return new DocumentKey(ResourcePath.fromString(e).popFirst(5))}static empty(){return new DocumentKey(ResourcePath.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ResourcePath.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ResourcePath.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new DocumentKey(new ResourcePath(e.slice()))}}function __PRIVATE_newIndexOffsetSuccessorFromReadTime(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=SnapshotVersion.fromTimestamp(r===1e9?new Timestamp(t+1,0):new Timestamp(t,r));return new IndexOffset(s,DocumentKey.empty(),e)}function __PRIVATE_newIndexOffsetFromDocument(n){return new IndexOffset(n.readTime,n.key,-1)}class IndexOffset{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new IndexOffset(SnapshotVersion.min(),DocumentKey.empty(),-1)}static max(){return new IndexOffset(SnapshotVersion.max(),DocumentKey.empty(),-1)}}function __PRIVATE_indexOffsetComparator(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=DocumentKey.comparator(n.documentKey,e.documentKey),t!==0?t:__PRIVATE_primitiveComparator(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PersistenceTransaction{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __PRIVATE_ignoreIfPrimaryLeaseLoss(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==F)throw n;__PRIVATE_logDebug("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PersistencePromise{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fail(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new PersistencePromise((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof PersistencePromise?t:PersistencePromise.resolve(t)}catch(t){return PersistencePromise.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):PersistencePromise.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):PersistencePromise.reject(t)}static resolve(e){return new PersistencePromise((t,r)=>{t(e)})}static reject(e){return new PersistencePromise((t,r)=>{r(e)})}static waitFor(e){return new PersistencePromise((t,r)=>{let s=0,o=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=PersistencePromise.resolve(!1);for(const r of e)t=t.next(s=>s?PersistencePromise.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new PersistencePromise((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new PersistencePromise((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function __PRIVATE_getAndroidVersion(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function __PRIVATE_isIndexedDbTransactionError(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_ListenSequence{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}__PRIVATE_ListenSequence.oe=-1;function __PRIVATE_isNullOrUndefined(n){return n==null}function __PRIVATE_isNegativeZero(n){return n===0&&1/n==-1/0}function isSafeInteger(n){return typeof n=="number"&&Number.isInteger(n)&&!__PRIVATE_isNegativeZero(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_objectSize(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function forEach(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function isEmpty(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SortedMap{constructor(e,t){this.comparator=e,this.root=t||LLRBNode.EMPTY}insert(e,t){return new SortedMap(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}remove(e){return new SortedMap(this.comparator,this.root.remove(e,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new SortedMapIterator(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!1)}getReverseIterator(){return new SortedMapIterator(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!0)}}class SortedMapIterator{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class LLRBNode{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??LLRBNode.RED,this.left=s??LLRBNode.EMPTY,this.right=o??LLRBNode.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new LLRBNode(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return LLRBNode.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return LLRBNode.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fail();const e=this.left.check();if(e!==this.right.check())throw fail();return e+(this.isRed()?0:1)}}LLRBNode.EMPTY=null,LLRBNode.RED=!0,LLRBNode.BLACK=!1;LLRBNode.EMPTY=new class{constructor(){this.size=0}get key(){throw fail()}get value(){throw fail()}get color(){throw fail()}get left(){throw fail()}get right(){throw fail()}copy(e,t,r,s,o){return this}insert(e,t,r){return new LLRBNode(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SortedSet{constructor(e){this.comparator=e,this.data=new SortedMap(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new SortedSetIterator(this.data.getIterator())}getIteratorFrom(e){return new SortedSetIterator(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof SortedSet)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new SortedSet(this.comparator);return t.data=e,t}}class SortedSetIterator{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FieldMask{constructor(e){this.fields=e,e.sort(FieldPath$1.comparator)}static empty(){return new FieldMask([])}unionWith(e){let t=new SortedSet(FieldPath$1.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new FieldMask(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return __PRIVATE_arrayEquals(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_Base64DecodeError extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ByteString{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new __PRIVATE_Base64DecodeError("Invalid base64 string: "+o):o}}(e);return new ByteString(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ByteString(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return __PRIVATE_primitiveComparator(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ByteString.EMPTY_BYTE_STRING=new ByteString("");const ne=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function __PRIVATE_normalizeTimestamp(n){if(__PRIVATE_hardAssert(!!n),typeof n=="string"){let e=0;const t=ne.exec(n);if(__PRIVATE_hardAssert(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:__PRIVATE_normalizeNumber(n.seconds),nanos:__PRIVATE_normalizeNumber(n.nanos)}}function __PRIVATE_normalizeNumber(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function __PRIVATE_normalizeByteString(n){return typeof n=="string"?ByteString.fromBase64String(n):ByteString.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_isServerTimestamp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function __PRIVATE_getPreviousValue(n){const e=n.mapValue.fields.__previous_value__;return __PRIVATE_isServerTimestamp(e)?__PRIVATE_getPreviousValue(e):e}function __PRIVATE_getLocalWriteTime(n){const e=__PRIVATE_normalizeTimestamp(n.mapValue.fields.__local_write_time__.timestampValue);return new Timestamp(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DatabaseInfo{constructor(e,t,r,s,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class DatabaseId{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new DatabaseId("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof DatabaseId&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function __PRIVATE_typeOrder(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?__PRIVATE_isServerTimestamp(n)?4:__PRIVATE_isMaxValue(n)?9007199254740991:10:fail()}function __PRIVATE_valueEquals(n,e){if(n===e)return!0;const t=__PRIVATE_typeOrder(n);if(t!==__PRIVATE_typeOrder(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return __PRIVATE_getLocalWriteTime(n).isEqual(__PRIVATE_getLocalWriteTime(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=__PRIVATE_normalizeTimestamp(s.timestampValue),u=__PRIVATE_normalizeTimestamp(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return __PRIVATE_normalizeByteString(s.bytesValue).isEqual(__PRIVATE_normalizeByteString(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return __PRIVATE_normalizeNumber(s.geoPointValue.latitude)===__PRIVATE_normalizeNumber(o.geoPointValue.latitude)&&__PRIVATE_normalizeNumber(s.geoPointValue.longitude)===__PRIVATE_normalizeNumber(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return __PRIVATE_normalizeNumber(s.integerValue)===__PRIVATE_normalizeNumber(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=__PRIVATE_normalizeNumber(s.doubleValue),u=__PRIVATE_normalizeNumber(o.doubleValue);return a===u?__PRIVATE_isNegativeZero(a)===__PRIVATE_isNegativeZero(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return __PRIVATE_arrayEquals(n.arrayValue.values||[],e.arrayValue.values||[],__PRIVATE_valueEquals);case 10:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(__PRIVATE_objectSize(a)!==__PRIVATE_objectSize(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!__PRIVATE_valueEquals(a[h],u[h])))return!1;return!0}(n,e);default:return fail()}}function __PRIVATE_arrayValueContains(n,e){return(n.values||[]).find(t=>__PRIVATE_valueEquals(t,e))!==void 0}function __PRIVATE_valueCompare(n,e){if(n===e)return 0;const t=__PRIVATE_typeOrder(n),r=__PRIVATE_typeOrder(e);if(t!==r)return __PRIVATE_primitiveComparator(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return __PRIVATE_primitiveComparator(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=__PRIVATE_normalizeNumber(o.integerValue||o.doubleValue),h=__PRIVATE_normalizeNumber(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return __PRIVATE_compareTimestamps(n.timestampValue,e.timestampValue);case 4:return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(n),__PRIVATE_getLocalWriteTime(e));case 5:return __PRIVATE_primitiveComparator(n.stringValue,e.stringValue);case 6:return function(o,a){const u=__PRIVATE_normalizeByteString(o),h=__PRIVATE_normalizeByteString(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=__PRIVATE_primitiveComparator(u[d],h[d]);if(m!==0)return m}return __PRIVATE_primitiveComparator(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(o.latitude),__PRIVATE_normalizeNumber(a.latitude));return u!==0?u:__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(o.longitude),__PRIVATE_normalizeNumber(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(o,a){const u=o.values||[],h=a.values||[];for(let d=0;d<u.length&&d<h.length;++d){const m=__PRIVATE_valueCompare(u[d],h[d]);if(m)return m}return __PRIVATE_primitiveComparator(u.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(o,a){if(o===re.mapValue&&a===re.mapValue)return 0;if(o===re.mapValue)return 1;if(a===re.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let P=0;P<h.length&&P<m.length;++P){const R=__PRIVATE_primitiveComparator(h[P],m[P]);if(R!==0)return R;const w=__PRIVATE_valueCompare(u[h[P]],d[m[P]]);if(w!==0)return w}return __PRIVATE_primitiveComparator(h.length,m.length)}(n.mapValue,e.mapValue);default:throw fail()}}function __PRIVATE_compareTimestamps(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return __PRIVATE_primitiveComparator(n,e);const t=__PRIVATE_normalizeTimestamp(n),r=__PRIVATE_normalizeTimestamp(e),s=__PRIVATE_primitiveComparator(t.seconds,r.seconds);return s!==0?s:__PRIVATE_primitiveComparator(t.nanos,r.nanos)}function canonicalId(n){return __PRIVATE_canonifyValue(n)}function __PRIVATE_canonifyValue(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=__PRIVATE_normalizeTimestamp(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return __PRIVATE_normalizeByteString(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return DocumentKey.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=__PRIVATE_canonifyValue(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${__PRIVATE_canonifyValue(t.fields[a])}`;return s+"}"}(n.mapValue):fail()}function isInteger(n){return!!n&&"integerValue"in n}function isArray(n){return!!n&&"arrayValue"in n}function __PRIVATE_isNullValue(n){return!!n&&"nullValue"in n}function __PRIVATE_isNanValue(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function __PRIVATE_isMapValue(n){return!!n&&"mapValue"in n}function __PRIVATE_deepClone(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return forEach(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=__PRIVATE_deepClone(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=__PRIVATE_deepClone(n.arrayValue.values[t]);return e}return Object.assign({},n)}function __PRIVATE_isMaxValue(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ObjectValue{constructor(e){this.value=e}static empty(){return new ObjectValue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!__PRIVATE_isMapValue(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=__PRIVATE_deepClone(t)}setAll(e){let t=FieldPath$1.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=__PRIVATE_deepClone(a):s.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());__PRIVATE_isMapValue(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return __PRIVATE_valueEquals(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];__PRIVATE_isMapValue(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){forEach(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new ObjectValue(__PRIVATE_deepClone(this.value))}}function __PRIVATE_extractFieldMask(n){const e=[];return forEach(n.fields,(t,r)=>{const s=new FieldPath$1([t]);if(__PRIVATE_isMapValue(r)){const o=__PRIVATE_extractFieldMask(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new FieldMask(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MutableDocument{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new MutableDocument(e,0,SnapshotVersion.min(),SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newFoundDocument(e,t,r,s){return new MutableDocument(e,1,t,SnapshotVersion.min(),r,s,0)}static newNoDocument(e,t){return new MutableDocument(e,2,t,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newUnknownDocument(e,t){return new MutableDocument(e,3,t,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(SnapshotVersion.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ObjectValue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ObjectValue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=SnapshotVersion.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof MutableDocument&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new MutableDocument(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bound{constructor(e,t){this.position=e,this.inclusive=t}}function __PRIVATE_boundCompareToDocument(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=DocumentKey.comparator(DocumentKey.fromName(a.referenceValue),t.key):r=__PRIVATE_valueCompare(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function __PRIVATE_boundEquals(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!__PRIVATE_valueEquals(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OrderBy{constructor(e,t="asc"){this.field=e,this.dir=t}}function __PRIVATE_orderByEquals(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Filter{}class FieldFilter extends Filter{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new __PRIVATE_KeyFieldFilter(e,t,r):t==="array-contains"?new __PRIVATE_ArrayContainsFilter(e,r):t==="in"?new __PRIVATE_InFilter(e,r):t==="not-in"?new __PRIVATE_NotInFilter(e,r):t==="array-contains-any"?new __PRIVATE_ArrayContainsAnyFilter(e,r):new FieldFilter(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new __PRIVATE_KeyFieldInFilter(e,r):new __PRIVATE_KeyFieldNotInFilter(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(__PRIVATE_valueCompare(t,this.value)):t!==null&&__PRIVATE_typeOrder(this.value)===__PRIVATE_typeOrder(t)&&this.matchesComparison(__PRIVATE_valueCompare(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fail()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class CompositeFilter extends Filter{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new CompositeFilter(e,t)}matches(e){return __PRIVATE_compositeFilterIsConjunction(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function __PRIVATE_compositeFilterIsConjunction(n){return n.op==="and"}function __PRIVATE_compositeFilterIsFlatConjunction(n){return __PRIVATE_compositeFilterIsFlat(n)&&__PRIVATE_compositeFilterIsConjunction(n)}function __PRIVATE_compositeFilterIsFlat(n){for(const e of n.filters)if(e instanceof CompositeFilter)return!1;return!0}function __PRIVATE_canonifyFilter(n){if(n instanceof FieldFilter)return n.field.canonicalString()+n.op.toString()+canonicalId(n.value);if(__PRIVATE_compositeFilterIsFlatConjunction(n))return n.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");{const e=n.filters.map(t=>__PRIVATE_canonifyFilter(t)).join(",");return`${n.op}(${e})`}}function __PRIVATE_filterEquals(n,e){return n instanceof FieldFilter?function(r,s){return s instanceof FieldFilter&&r.op===s.op&&r.field.isEqual(s.field)&&__PRIVATE_valueEquals(r.value,s.value)}(n,e):n instanceof CompositeFilter?function(r,s){return s instanceof CompositeFilter&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&__PRIVATE_filterEquals(a,s.filters[u]),!0):!1}(n,e):void fail()}function __PRIVATE_stringifyFilter(n){return n instanceof FieldFilter?function(t){return`${t.field.canonicalString()} ${t.op} ${canonicalId(t.value)}`}(n):n instanceof CompositeFilter?function(t){return t.op.toString()+" {"+t.getFilters().map(__PRIVATE_stringifyFilter).join(" ,")+"}"}(n):"Filter"}class __PRIVATE_KeyFieldFilter extends FieldFilter{constructor(e,t,r){super(e,t,r),this.key=DocumentKey.fromName(r.referenceValue)}matches(e){const t=DocumentKey.comparator(e.key,this.key);return this.matchesComparison(t)}}class __PRIVATE_KeyFieldInFilter extends FieldFilter{constructor(e,t){super(e,"in",t),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class __PRIVATE_KeyFieldNotInFilter extends FieldFilter{constructor(e,t){super(e,"not-in",t),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function __PRIVATE_extractDocumentKeysFromArrayValue(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>DocumentKey.fromName(r.referenceValue))}class __PRIVATE_ArrayContainsFilter extends FieldFilter{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return isArray(t)&&__PRIVATE_arrayValueContains(t.arrayValue,this.value)}}class __PRIVATE_InFilter extends FieldFilter{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&__PRIVATE_arrayValueContains(this.value.arrayValue,t)}}class __PRIVATE_NotInFilter extends FieldFilter{constructor(e,t){super(e,"not-in",t)}matches(e){if(__PRIVATE_arrayValueContains(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!__PRIVATE_arrayValueContains(this.value.arrayValue,t)}}class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!isArray(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>__PRIVATE_arrayValueContains(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_TargetImpl{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function __PRIVATE_newTarget(n,e=null,t=[],r=[],s=null,o=null,a=null){return new __PRIVATE_TargetImpl(n,e,t,r,s,o,a)}function __PRIVATE_canonifyTarget(n){const e=__PRIVATE_debugCast(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>__PRIVATE_canonifyFilter(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),__PRIVATE_isNullOrUndefined(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>canonicalId(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>canonicalId(r)).join(",")),e.ue=t}return e.ue}function __PRIVATE_targetEquals(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!__PRIVATE_orderByEquals(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!__PRIVATE_filterEquals(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!__PRIVATE_boundEquals(n.startAt,e.startAt)&&__PRIVATE_boundEquals(n.endAt,e.endAt)}function __PRIVATE_targetIsDocumentTarget(n){return DocumentKey.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_QueryImpl{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function __PRIVATE_newQuery(n,e,t,r,s,o,a,u){return new __PRIVATE_QueryImpl(n,e,t,r,s,o,a,u)}function __PRIVATE_newQueryForPath(n){return new __PRIVATE_QueryImpl(n)}function __PRIVATE_queryMatchesAllDocuments(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function __PRIVATE_isCollectionGroupQuery(n){return n.collectionGroup!==null}function __PRIVATE_queryNormalizedOrderBy(n){const e=__PRIVATE_debugCast(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new SortedSet(FieldPath$1.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new OrderBy(o,r))}),t.has(FieldPath$1.keyField().canonicalString())||e.ce.push(new OrderBy(FieldPath$1.keyField(),r))}return e.ce}function __PRIVATE_queryToTarget(n){const e=__PRIVATE_debugCast(n);return e.le||(e.le=__PRIVATE__queryToTarget(e,__PRIVATE_queryNormalizedOrderBy(n))),e.le}function __PRIVATE__queryToTarget(n,e){if(n.limitType==="F")return __PRIVATE_newTarget(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new OrderBy(s.field,o)});const t=n.endAt?new Bound(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bound(n.startAt.position,n.startAt.inclusive):null;return __PRIVATE_newTarget(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function __PRIVATE_queryWithLimit(n,e,t){return new __PRIVATE_QueryImpl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function __PRIVATE_queryEquals(n,e){return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(n),__PRIVATE_queryToTarget(e))&&n.limitType===e.limitType}function __PRIVATE_canonifyQuery(n){return`${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(n))}|lt:${n.limitType}`}function __PRIVATE_stringifyQuery(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>__PRIVATE_stringifyFilter(s)).join(", ")}]`),__PRIVATE_isNullOrUndefined(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>canonicalId(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>canonicalId(s)).join(",")),`Target(${r})`}(__PRIVATE_queryToTarget(n))}; limitType=${n.limitType})`}function __PRIVATE_queryMatches(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):DocumentKey.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of __PRIVATE_queryNormalizedOrderBy(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=__PRIVATE_boundCompareToDocument(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,__PRIVATE_queryNormalizedOrderBy(r),s)||r.endAt&&!function(a,u,h){const d=__PRIVATE_boundCompareToDocument(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,__PRIVATE_queryNormalizedOrderBy(r),s))}(n,e)}function __PRIVATE_queryCollectionGroup(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function __PRIVATE_newQueryComparator(n){return(e,t)=>{let r=!1;for(const s of __PRIVATE_queryNormalizedOrderBy(n)){const o=__PRIVATE_compareDocs(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function __PRIVATE_compareDocs(n,e,t){const r=n.field.isKeyField()?DocumentKey.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?__PRIVATE_valueCompare(h,d):fail()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return fail()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ObjectMap{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){forEach(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return isEmpty(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new SortedMap(DocumentKey.comparator);function __PRIVATE_mutableDocumentMap(){return se}const oe=new SortedMap(DocumentKey.comparator);function documentMap(...n){let e=oe;for(const t of n)e=e.insert(t.key,t);return e}function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(n){let e=oe;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function __PRIVATE_newOverlayMap(){return __PRIVATE_newDocumentKeyMap()}function __PRIVATE_newMutationMap(){return __PRIVATE_newDocumentKeyMap()}function __PRIVATE_newDocumentKeyMap(){return new ObjectMap(n=>n.toString(),(n,e)=>n.isEqual(e))}const _e=new SortedMap(DocumentKey.comparator),ae=new SortedSet(DocumentKey.comparator);function __PRIVATE_documentKeySet(...n){let e=ae;for(const t of n)e=e.add(t);return e}const ue=new SortedSet(__PRIVATE_primitiveComparator);function __PRIVATE_targetIdSet(){return ue}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_toDouble(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:__PRIVATE_isNegativeZero(e)?"-0":e}}function __PRIVATE_toInteger(n){return{integerValue:""+n}}function toNumber(n,e){return isSafeInteger(e)?__PRIVATE_toInteger(e):__PRIVATE_toDouble(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TransformOperation{constructor(){this._=void 0}}function __PRIVATE_applyTransformOperationToLocalView(n,e,t){return n instanceof __PRIVATE_ServerTimestampTransform?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&__PRIVATE_isServerTimestamp(o)&&(o=__PRIVATE_getPreviousValue(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(n,e):n instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(n,e):function(s,o){const a=__PRIVATE_computeTransformOperationBaseValue(s,o),u=asNumber(a)+asNumber(s.Pe);return isInteger(a)&&isInteger(s.Pe)?__PRIVATE_toInteger(u):__PRIVATE_toDouble(s.serializer,u)}(n,e)}function __PRIVATE_applyTransformOperationToRemoteDocument(n,e,t){return n instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(n,e):n instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(n,e):t}function __PRIVATE_computeTransformOperationBaseValue(n,e){return n instanceof __PRIVATE_NumericIncrementTransformOperation?function(r){return isInteger(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class __PRIVATE_ServerTimestampTransform extends TransformOperation{}class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}}function __PRIVATE_applyArrayUnionTransformOperation(n,e){const t=__PRIVATE_coercedFieldValuesArray(e);for(const r of n.elements)t.some(s=>__PRIVATE_valueEquals(s,r))||t.push(r);return{arrayValue:{values:t}}}class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}}function __PRIVATE_applyArrayRemoveTransformOperation(n,e){let t=__PRIVATE_coercedFieldValuesArray(e);for(const r of n.elements)t=t.filter(s=>!__PRIVATE_valueEquals(s,r));return{arrayValue:{values:t}}}class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function asNumber(n){return __PRIVATE_normalizeNumber(n.integerValue||n.doubleValue)}function __PRIVATE_coercedFieldValuesArray(n){return isArray(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function __PRIVATE_fieldTransformEquals(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof __PRIVATE_ArrayUnionTransformOperation&&s instanceof __PRIVATE_ArrayUnionTransformOperation||r instanceof __PRIVATE_ArrayRemoveTransformOperation&&s instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_arrayEquals(r.elements,s.elements,__PRIVATE_valueEquals):r instanceof __PRIVATE_NumericIncrementTransformOperation&&s instanceof __PRIVATE_NumericIncrementTransformOperation?__PRIVATE_valueEquals(r.Pe,s.Pe):r instanceof __PRIVATE_ServerTimestampTransform&&s instanceof __PRIVATE_ServerTimestampTransform}(n.transform,e.transform)}class MutationResult{constructor(e,t){this.version=e,this.transformResults=t}}class Precondition{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Precondition}static exists(e){return new Precondition(void 0,e)}static updateTime(e){return new Precondition(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function __PRIVATE_preconditionIsValidForDocument(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mutation{}function __PRIVATE_calculateOverlayMutation(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new __PRIVATE_DeleteMutation(n.key,Precondition.none()):new __PRIVATE_SetMutation(n.key,n.data,Precondition.none());{const t=n.data,r=ObjectValue.empty();let s=new SortedSet(FieldPath$1.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new __PRIVATE_PatchMutation(n.key,r,new FieldMask(s.toArray()),Precondition.none())}}function __PRIVATE_mutationApplyToRemoteDocument(n,e,t){n instanceof __PRIVATE_SetMutation?function(s,o,a){const u=s.value.clone(),h=__PRIVATE_serverTransformResults(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof __PRIVATE_PatchMutation?function(s,o,a){if(!__PRIVATE_preconditionIsValidForDocument(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=__PRIVATE_serverTransformResults(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(__PRIVATE_getPatch(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function __PRIVATE_mutationApplyToLocalView(n,e,t,r){return n instanceof __PRIVATE_SetMutation?function(o,a,u,h){if(!__PRIVATE_preconditionIsValidForDocument(o.precondition,a))return u;const d=o.value.clone(),m=__PRIVATE_localTransformResults(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof __PRIVATE_PatchMutation?function(o,a,u,h){if(!__PRIVATE_preconditionIsValidForDocument(o.precondition,a))return u;const d=__PRIVATE_localTransformResults(o.fieldTransforms,h,a),m=a.data;return m.setAll(__PRIVATE_getPatch(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(P=>P.field))}(n,e,t,r):function(o,a,u){return __PRIVATE_preconditionIsValidForDocument(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function __PRIVATE_mutationExtractBaseValue(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=__PRIVATE_computeTransformOperationBaseValue(r.transform,s||null);o!=null&&(t===null&&(t=ObjectValue.empty()),t.set(r.field,o))}return t||null}function __PRIVATE_mutationEquals(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&__PRIVATE_arrayEquals(r,s,(o,a)=>__PRIVATE_fieldTransformEquals(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class __PRIVATE_SetMutation extends Mutation{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class __PRIVATE_PatchMutation extends Mutation{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function __PRIVATE_getPatch(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function __PRIVATE_serverTransformResults(n,e,t){const r=new Map;__PRIVATE_hardAssert(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,__PRIVATE_applyTransformOperationToRemoteDocument(a,u,t[s]))}return r}function __PRIVATE_localTransformResults(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,__PRIVATE_applyTransformOperationToLocalView(o,a,e))}return r}class __PRIVATE_DeleteMutation extends Mutation{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class __PRIVATE_VerifyMutation extends Mutation{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MutationBatch{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&__PRIVATE_mutationApplyToRemoteDocument(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=__PRIVATE_mutationApplyToLocalView(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=__PRIVATE_mutationApplyToLocalView(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=__PRIVATE_newMutationMap();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=__PRIVATE_calculateOverlayMutation(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(SnapshotVersion.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),__PRIVATE_documentKeySet())}isEqual(e){return this.batchId===e.batchId&&__PRIVATE_arrayEquals(this.mutations,e.mutations,(t,r)=>__PRIVATE_mutationEquals(t,r))&&__PRIVATE_arrayEquals(this.baseMutations,e.baseMutations,(t,r)=>__PRIVATE_mutationEquals(t,r))}}class MutationBatchResult{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){__PRIVATE_hardAssert(e.mutations.length===r.length);let s=function(){return _e}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new MutationBatchResult(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Overlay{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ExistenceFilter{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,le;function __PRIVATE_isPermanentError(n){switch(n){default:return fail();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function __PRIVATE_mapCodeFromRpcCode(n){if(n===void 0)return __PRIVATE_logError("GRPC error has no .code"),C.UNKNOWN;switch(n){case ce.OK:return C.OK;case ce.CANCELLED:return C.CANCELLED;case ce.UNKNOWN:return C.UNKNOWN;case ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ce.INTERNAL:return C.INTERNAL;case ce.UNAVAILABLE:return C.UNAVAILABLE;case ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ce.NOT_FOUND:return C.NOT_FOUND;case ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ce.ABORTED:return C.ABORTED;case ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ce.DATA_LOSS:return C.DATA_LOSS;default:return fail()}}(le=ce||(ce={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newTextEncoder(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Integer([4294967295,4294967295],0);function __PRIVATE_getMd5HashValue(n){const e=__PRIVATE_newTextEncoder().encode(n),t=new Md5;return t.update(e),new Uint8Array(t.digest())}function __PRIVATE_get64BitUints(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Integer([t,r],0),new Integer([s,o],0)]}class BloomFilter{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t}`);if(r<0)throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Integer.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Integer.fromNumber(r)));return s.compare(Pe)===1&&(s=new Integer([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=__PRIVATE_getMd5HashValue(e),[r,s]=__PRIVATE_get64BitUints(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new BloomFilter(o,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=__PRIVATE_getMd5HashValue(e),[r,s]=__PRIVATE_get64BitUints(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class __PRIVATE_BloomFilterError extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RemoteEvent{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,TargetChange.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new RemoteEvent(SnapshotVersion.min(),s,new SortedMap(__PRIVATE_primitiveComparator),__PRIVATE_mutableDocumentMap(),__PRIVATE_documentKeySet())}}class TargetChange{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new TargetChange(r,t,__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_DocumentWatchChange{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class __PRIVATE_ExistenceFilterChange{constructor(e,t){this.targetId=e,this.me=t}}class __PRIVATE_WatchTargetChange{constructor(e,t,r=ByteString.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class __PRIVATE_TargetState{constructor(){this.fe=0,this.ge=__PRIVATE_snapshotChangesMap(),this.pe=ByteString.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=__PRIVATE_documentKeySet(),t=__PRIVATE_documentKeySet(),r=__PRIVATE_documentKeySet();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:fail()}}),new TargetChange(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=__PRIVATE_snapshotChangesMap()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,__PRIVATE_hardAssert(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class __PRIVATE_WatchChangeAggregator{constructor(e){this.Le=e,this.Be=new Map,this.ke=__PRIVATE_mutableDocumentMap(),this.qe=__PRIVATE_documentTargetMap(),this.Qe=new SortedMap(__PRIVATE_primitiveComparator)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:fail()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const o=s.target;if(__PRIVATE_targetIsDocumentTarget(o))if(r===0){const a=new DocumentKey(o.path);this.Ue(t,a,MutableDocument.newNoDocument(a,SnapshotVersion.min()))}else __PRIVATE_hardAssert(r===1);else{const a=this.Ye(t);if(a!==r){const u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=__PRIVATE_normalizeByteString(r).toUint8Array()}catch(h){if(h instanceof __PRIVATE_Base64DecodeError)return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new BloomFilter(a,s,o)}catch(h){return __PRIVATE_logWarn(h instanceof __PRIVATE_BloomFilterError?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&__PRIVATE_targetIsDocumentTarget(u.target)){const h=new DocumentKey(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,MutableDocument.newNoDocument(h,e))}o.be&&(t.set(a,o.Ce()),o.ve())}});let r=__PRIVATE_documentKeySet();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new RemoteEvent(e,t,this.Qe,this.ke,r);return this.ke=__PRIVATE_mutableDocumentMap(),this.qe=__PRIVATE_documentTargetMap(),this.Qe=new SortedMap(__PRIVATE_primitiveComparator),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new __PRIVATE_TargetState,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new SortedSet(__PRIVATE_primitiveComparator),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||__PRIVATE_logDebug("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new __PRIVATE_TargetState),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function __PRIVATE_documentTargetMap(){return new SortedMap(DocumentKey.comparator)}function __PRIVATE_snapshotChangesMap(){return new SortedMap(DocumentKey.comparator)}const Ie={asc:"ASCENDING",desc:"DESCENDING"},Te={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ee={and:"AND",or:"OR"};class JsonProtoSerializer{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function __PRIVATE_toInt32Proto(n,e){return n.useProto3Json||__PRIVATE_isNullOrUndefined(e)?e:{value:e}}function toTimestamp(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function __PRIVATE_toBytes(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function __PRIVATE_toVersion(n,e){return toTimestamp(n,e.toTimestamp())}function __PRIVATE_fromVersion(n){return __PRIVATE_hardAssert(!!n),SnapshotVersion.fromTimestamp(function(t){const r=__PRIVATE_normalizeTimestamp(t);return new Timestamp(r.seconds,r.nanos)}(n))}function __PRIVATE_toResourceName(n,e){return __PRIVATE_toResourcePath(n,e).canonicalString()}function __PRIVATE_toResourcePath(n,e){const t=function(s){return new ResourcePath(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function __PRIVATE_fromResourceName(n){const e=ResourcePath.fromString(n);return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(e)),e}function __PRIVATE_toName(n,e){return __PRIVATE_toResourceName(n.databaseId,e.path)}function fromName(n,e){const t=__PRIVATE_fromResourceName(e);if(t.get(1)!==n.databaseId.projectId)throw new FirestoreError(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new FirestoreError(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(t))}function __PRIVATE_toQueryPath(n,e){return __PRIVATE_toResourceName(n.databaseId,e)}function __PRIVATE_fromQueryPath(n){const e=__PRIVATE_fromResourceName(n);return e.length===4?ResourcePath.emptyPath():__PRIVATE_extractLocalPathFromResourceName(e)}function __PRIVATE_getEncodedDatabaseId(n){return new ResourcePath(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function __PRIVATE_extractLocalPathFromResourceName(n){return __PRIVATE_hardAssert(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function __PRIVATE_toMutationDocument(n,e,t){return{name:__PRIVATE_toName(n,e),fields:t.value.mapValue.fields}}function __PRIVATE_fromWatchChange(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:fail()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(__PRIVATE_hardAssert(m===void 0||typeof m=="string"),ByteString.fromBase64String(m||"")):(__PRIVATE_hardAssert(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ByteString.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const m=d.code===void 0?C.UNKNOWN:__PRIVATE_mapCodeFromRpcCode(d.code);return new FirestoreError(m,d.message||"")}(a);t=new __PRIVATE_WatchTargetChange(r,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fromName(n,r.document.name),o=__PRIVATE_fromVersion(r.document.updateTime),a=r.document.createTime?__PRIVATE_fromVersion(r.document.createTime):SnapshotVersion.min(),u=new ObjectValue({mapValue:{fields:r.document.fields}}),h=MutableDocument.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];t=new __PRIVATE_DocumentWatchChange(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fromName(n,r.document),o=r.readTime?__PRIVATE_fromVersion(r.readTime):SnapshotVersion.min(),a=MutableDocument.newNoDocument(s,o),u=r.removedTargetIds||[];t=new __PRIVATE_DocumentWatchChange([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fromName(n,r.document),o=r.removedTargetIds||[];t=new __PRIVATE_DocumentWatchChange([],o,s,null)}else{if(!("filter"in e))return fail();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new ExistenceFilter(s,o),u=r.targetId;t=new __PRIVATE_ExistenceFilterChange(u,a)}}return t}function toMutation(n,e){let t;if(e instanceof __PRIVATE_SetMutation)t={update:__PRIVATE_toMutationDocument(n,e.key,e.value)};else if(e instanceof __PRIVATE_DeleteMutation)t={delete:__PRIVATE_toName(n,e.key)};else if(e instanceof __PRIVATE_PatchMutation)t={update:__PRIVATE_toMutationDocument(n,e.key,e.data),updateMask:__PRIVATE_toDocumentMask(e.fieldMask)};else{if(!(e instanceof __PRIVATE_VerifyMutation))return fail();t={verify:__PRIVATE_toName(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof __PRIVATE_ServerTimestampTransform)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof __PRIVATE_ArrayUnionTransformOperation)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof __PRIVATE_ArrayRemoveTransformOperation)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof __PRIVATE_NumericIncrementTransformOperation)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw fail()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:__PRIVATE_toVersion(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:fail()}(n,e.precondition)),t}function __PRIVATE_fromWriteResults(n,e){return n&&n.length>0?(__PRIVATE_hardAssert(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?__PRIVATE_fromVersion(s.updateTime):__PRIVATE_fromVersion(o);return a.isEqual(SnapshotVersion.min())&&(a=__PRIVATE_fromVersion(o)),new MutationResult(a,s.transformResults||[])}(t,e))):[]}function __PRIVATE_toDocumentsTarget(n,e){return{documents:[__PRIVATE_toQueryPath(n,e.path)]}}function __PRIVATE_toQueryTarget(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=__PRIVATE_toQueryPath(n,s);const o=function(d){if(d.length!==0)return __PRIVATE_toFilter(CompositeFilter.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(R){return{field:__PRIVATE_toFieldPathReference(R.field),direction:__PRIVATE_toDirection(R.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=__PRIVATE_toInt32Proto(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function __PRIVATE_convertQueryTargetToQuery(n){let e=__PRIVATE_fromQueryPath(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){__PRIVATE_hardAssert(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(P){const R=__PRIVATE_fromFilter(P);return R instanceof CompositeFilter&&__PRIVATE_compositeFilterIsFlatConjunction(R)?R.getFilters():[R]}(t.where));let a=[];t.orderBy&&(a=function(P){return P.map(R=>function(L){return new OrderBy(__PRIVATE_fromFieldPathReference(L.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(R))}(t.orderBy));let u=null;t.limit&&(u=function(P){let R;return R=typeof P=="object"?P.value:P,__PRIVATE_isNullOrUndefined(R)?null:R}(t.limit));let h=null;t.startAt&&(h=function(P){const R=!!P.before,w=P.values||[];return new Bound(w,R)}(t.startAt));let d=null;return t.endAt&&(d=function(P){const R=!P.before,w=P.values||[];return new Bound(w,R)}(t.endAt)),__PRIVATE_newQuery(e,s,a,o,u,"F",h,d)}function __PRIVATE_toListenRequestLabels(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fail()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function __PRIVATE_fromFilter(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=__PRIVATE_fromFieldPathReference(t.unaryFilter.field);return FieldFilter.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=__PRIVATE_fromFieldPathReference(t.unaryFilter.field);return FieldFilter.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=__PRIVATE_fromFieldPathReference(t.unaryFilter.field);return FieldFilter.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=__PRIVATE_fromFieldPathReference(t.unaryFilter.field);return FieldFilter.create(a,"!=",{nullValue:"NULL_VALUE"});default:return fail()}}(n):n.fieldFilter!==void 0?function(t){return FieldFilter.create(__PRIVATE_fromFieldPathReference(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fail()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return CompositeFilter.create(t.compositeFilter.filters.map(r=>__PRIVATE_fromFilter(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fail()}}(t.compositeFilter.op))}(n):fail()}function __PRIVATE_toDirection(n){return Ie[n]}function __PRIVATE_toOperatorName(n){return Te[n]}function __PRIVATE_toCompositeOperatorName(n){return Ee[n]}function __PRIVATE_toFieldPathReference(n){return{fieldPath:n.canonicalString()}}function __PRIVATE_fromFieldPathReference(n){return FieldPath$1.fromServerFormat(n.fieldPath)}function __PRIVATE_toFilter(n){return n instanceof FieldFilter?function(t){if(t.op==="=="){if(__PRIVATE_isNanValue(t.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(t.field),op:"IS_NAN"}};if(__PRIVATE_isNullValue(t.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(__PRIVATE_isNanValue(t.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(t.field),op:"IS_NOT_NAN"}};if(__PRIVATE_isNullValue(t.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:__PRIVATE_toFieldPathReference(t.field),op:__PRIVATE_toOperatorName(t.op),value:t.value}}}(n):n instanceof CompositeFilter?function(t){const r=t.getFilters().map(s=>__PRIVATE_toFilter(s));return r.length===1?r[0]:{compositeFilter:{op:__PRIVATE_toCompositeOperatorName(t.op),filters:r}}}(n):fail()}function __PRIVATE_toDocumentMask(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function __PRIVATE_isValidResourceName(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TargetData{constructor(e,t,r,s,o=SnapshotVersion.min(),a=SnapshotVersion.min(),u=ByteString.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new TargetData(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_LocalSerializer{constructor(e){this.ct=e}}function __PRIVATE_fromBundledQuery(n){const e=__PRIVATE_convertQueryTargetToQuery({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?__PRIVATE_queryWithLimit(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryIndexManager{constructor(){this._n=new __PRIVATE_MemoryCollectionParentIndex}addToCollectionParentIndex(e,t){return this._n.add(t),PersistencePromise.resolve()}getCollectionParents(e,t){return PersistencePromise.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return PersistencePromise.resolve()}deleteFieldIndex(e,t){return PersistencePromise.resolve()}deleteAllFieldIndexes(e){return PersistencePromise.resolve()}createTargetIndexes(e,t){return PersistencePromise.resolve()}getDocumentsMatchingTarget(e,t){return PersistencePromise.resolve(null)}getIndexType(e,t){return PersistencePromise.resolve(0)}getFieldIndexes(e,t){return PersistencePromise.resolve([])}getNextCollectionGroupToUpdate(e){return PersistencePromise.resolve(null)}getMinOffset(e,t){return PersistencePromise.resolve(IndexOffset.min())}getMinOffsetFromCollectionGroup(e,t){return PersistencePromise.resolve(IndexOffset.min())}updateCollectionGroup(e,t,r){return PersistencePromise.resolve()}updateIndexEntries(e,t){return PersistencePromise.resolve()}}class __PRIVATE_MemoryCollectionParentIndex{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new SortedSet(ResourcePath.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new SortedSet(ResourcePath.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_TargetIdGenerator{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new __PRIVATE_TargetIdGenerator(0)}static Ln(){return new __PRIVATE_TargetIdGenerator(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RemoteDocumentChangeBuffer{constructor(){this.changes=new ObjectMap(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,MutableDocument.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?PersistencePromise.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OverlayedDocument{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LocalDocumentsView{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&__PRIVATE_mutationApplyToLocalView(r.mutation,s,FieldMask.empty(),Timestamp.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,__PRIVATE_documentKeySet()).next(()=>r))}getLocalViewOfDocuments(e,t,r=__PRIVATE_documentKeySet()){const s=__PRIVATE_newOverlayMap();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=documentMap();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=__PRIVATE_newOverlayMap();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,__PRIVATE_documentKeySet()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let o=__PRIVATE_mutableDocumentMap();const a=__PRIVATE_newDocumentKeyMap(),u=function(){return __PRIVATE_newDocumentKeyMap()}();return t.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof __PRIVATE_PatchMutation)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),__PRIVATE_mutationApplyToLocalView(m.mutation,d,m.mutation.getFieldMask(),Timestamp.now())):a.set(d.key,FieldMask.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var P;return u.set(d,new OverlayedDocument(m,(P=a.get(d))!==null&&P!==void 0?P:null))}),u))}recalculateAndSaveOverlays(e,t){const r=__PRIVATE_newDocumentKeyMap();let s=new SortedMap((a,u)=>a-u),o=__PRIVATE_documentKeySet();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||FieldMask.empty();m=u.applyToLocalView(d,m),r.set(h,m);const P=(s.get(u.batchId)||__PRIVATE_documentKeySet()).add(h);s=s.insert(u.batchId,P)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,P=__PRIVATE_newMutationMap();m.forEach(R=>{if(!o.has(R)){const w=__PRIVATE_calculateOverlayMutation(t.get(R),r.get(R));w!==null&&P.set(R,w),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,P))}return PersistencePromise.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return DocumentKey.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):__PRIVATE_isCollectionGroupQuery(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):PersistencePromise.resolve(__PRIVATE_newOverlayMap());let u=-1,h=o;return a.next(d=>PersistencePromise.forEach(d,(m,P)=>(u<P.largestBatchId&&(u=P.largestBatchId),o.get(m)?PersistencePromise.resolve():this.remoteDocumentCache.getEntry(e,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,__PRIVATE_documentKeySet())).next(m=>({batchId:u,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new DocumentKey(t)).next(r=>{let s=documentMap();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=documentMap();return this.indexManager.getCollectionParents(e,o).next(u=>PersistencePromise.forEach(u,h=>{const d=function(P,R){return new __PRIVATE_QueryImpl(R,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((P,R)=>{a=a.insert(P,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,MutableDocument.newInvalidDocument(m)))});let u=documentMap();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&__PRIVATE_mutationApplyToLocalView(m.mutation,d,FieldMask.empty(),Timestamp.now()),__PRIVATE_queryMatches(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryBundleCache{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return PersistencePromise.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:__PRIVATE_fromVersion(s.createTime)}}(t)),PersistencePromise.resolve()}getNamedQuery(e,t){return PersistencePromise.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:__PRIVATE_fromBundledQuery(s.bundledQuery),readTime:__PRIVATE_fromVersion(s.readTime)}}(t)),PersistencePromise.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryDocumentOverlayCache{constructor(){this.overlays=new SortedMap(DocumentKey.comparator),this.hr=new Map}getOverlay(e,t){return PersistencePromise.resolve(this.overlays.get(t))}getOverlays(e,t){const r=__PRIVATE_newOverlayMap();return PersistencePromise.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.ht(e,t,o)}),PersistencePromise.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),PersistencePromise.resolve()}getOverlaysForCollection(e,t,r){const s=__PRIVATE_newOverlayMap(),o=t.length+1,a=new DocumentKey(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return PersistencePromise.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new SortedMap((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=__PRIVATE_newOverlayMap(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=__PRIVATE_newOverlayMap(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return PersistencePromise.resolve(u)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Overlay(t,r));let o=this.hr.get(t);o===void 0&&(o=__PRIVATE_documentKeySet(),this.hr.set(t,o)),this.hr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_ReferenceSet{constructor(){this.Pr=new SortedSet(__PRIVATE_DocReference.Ir),this.Tr=new SortedSet(__PRIVATE_DocReference.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new __PRIVATE_DocReference(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new __PRIVATE_DocReference(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new DocumentKey(new ResourcePath([])),r=new __PRIVATE_DocReference(t,e),s=new __PRIVATE_DocReference(t,e+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new DocumentKey(new ResourcePath([])),r=new __PRIVATE_DocReference(t,e),s=new __PRIVATE_DocReference(t,e+1);let o=__PRIVATE_documentKeySet();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new __PRIVATE_DocReference(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class __PRIVATE_DocReference{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return DocumentKey.comparator(e.key,t.key)||__PRIVATE_primitiveComparator(e.pr,t.pr)}static Er(e,t){return __PRIVATE_primitiveComparator(e.pr,t.pr)||DocumentKey.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryMutationQueue{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new SortedSet(__PRIVATE_DocReference.Ir)}checkEmpty(e){return PersistencePromise.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new MutationBatch(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.wr=this.wr.add(new __PRIVATE_DocReference(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return PersistencePromise.resolve(a)}lookupMutationBatch(e,t){return PersistencePromise.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),o=s<0?0:s;return PersistencePromise.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return PersistencePromise.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return PersistencePromise.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new __PRIVATE_DocReference(t,0),s=new __PRIVATE_DocReference(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const u=this.Sr(a.pr);o.push(u)}),PersistencePromise.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new SortedSet(__PRIVATE_primitiveComparator);return t.forEach(s=>{const o=new __PRIVATE_DocReference(s,0),a=new __PRIVATE_DocReference(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],u=>{r=r.add(u.pr)})}),PersistencePromise.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;DocumentKey.isDocumentKey(o)||(o=o.child(""));const a=new __PRIVATE_DocReference(new DocumentKey(o),0);let u=new SortedSet(__PRIVATE_primitiveComparator);return this.wr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.pr)),!0)},a),PersistencePromise.resolve(this.Dr(u))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){__PRIVATE_hardAssert(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return PersistencePromise.forEach(t.mutations,s=>{const o=new __PRIVATE_DocReference(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new __PRIVATE_DocReference(t,0),s=this.wr.firstAfterOrEqual(r);return PersistencePromise.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,PersistencePromise.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryRemoteDocumentCacheImpl{constructor(e){this.vr=e,this.docs=function(){return new SortedMap(DocumentKey.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return PersistencePromise.resolve(r?r.document.mutableCopy():MutableDocument.newInvalidDocument(t))}getEntries(e,t){let r=__PRIVATE_mutableDocumentMap();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():MutableDocument.newInvalidDocument(s))}),PersistencePromise.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=__PRIVATE_mutableDocumentMap();const a=t.path,u=new DocumentKey(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(m),r)<=0||(s.has(m.key)||__PRIVATE_queryMatches(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return PersistencePromise.resolve(o)}getAllFromCollectionGroup(e,t,r,s){fail()}Fr(e,t){return PersistencePromise.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this)}getSize(e){return PersistencePromise.resolve(this.size)}}class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),PersistencePromise.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryTargetCache{constructor(e){this.persistence=e,this.Mr=new ObjectMap(t=>__PRIVATE_canonifyTarget(t),__PRIVATE_targetEquals),this.lastRemoteSnapshotVersion=SnapshotVersion.min(),this.highestTargetId=0,this.Or=0,this.Nr=new __PRIVATE_ReferenceSet,this.targetCount=0,this.Lr=__PRIVATE_TargetIdGenerator.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),PersistencePromise.resolve()}getLastRemoteSnapshotVersion(e){return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return PersistencePromise.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),PersistencePromise.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),PersistencePromise.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new __PRIVATE_TargetIdGenerator(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,PersistencePromise.resolve()}updateTargetData(e,t){return this.qn(t),PersistencePromise.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,PersistencePromise.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),PersistencePromise.waitFor(o).next(()=>s)}getTargetCount(e){return PersistencePromise.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return PersistencePromise.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),PersistencePromise.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),PersistencePromise.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),PersistencePromise.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return PersistencePromise.resolve(r)}containsKey(e,t){return PersistencePromise.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_MemoryPersistence{constructor(e,t){this.Br={},this.overlays={},this.kr=new __PRIVATE_ListenSequence(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new __PRIVATE_MemoryTargetCache(this),this.indexManager=new __PRIVATE_MemoryIndexManager,this.remoteDocumentCache=function(s){return new __PRIVATE_MemoryRemoteDocumentCacheImpl(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new __PRIVATE_LocalSerializer(t),this.$r=new __PRIVATE_MemoryBundleCache(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new __PRIVATE_MemoryDocumentOverlayCache,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new __PRIVATE_MemoryMutationQueue(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){__PRIVATE_logDebug("MemoryPersistence","Starting transaction:",e);const s=new __PRIVATE_MemoryTransaction(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(e,t){return PersistencePromise.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class __PRIVATE_MemoryTransaction extends PersistenceTransaction{constructor(e){super(),this.currentSequenceNumber=e}}class __PRIVATE_MemoryEagerDelegate{constructor(e){this.persistence=e,this.zr=new __PRIVATE_ReferenceSet,this.jr=null}static Hr(e){return new __PRIVATE_MemoryEagerDelegate(e)}get Jr(){if(this.jr)return this.jr;throw fail()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),PersistencePromise.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),PersistencePromise.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),PersistencePromise.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return PersistencePromise.forEach(this.Jr,r=>{const s=DocumentKey.fromPath(r);return this.Yr(e,s).next(o=>{o||t.removeEntry(s,SnapshotVersion.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return PersistencePromise.or([()=>PersistencePromise.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_LocalViewChanges{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=__PRIVATE_documentKeySet(),s=__PRIVATE_documentKeySet();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new __PRIVATE_LocalViewChanges(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QueryContext{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_QueryEngine{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return isSafari()?8:__PRIVATE_getAndroidVersion(getUA())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ji(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new QueryContext;return this.Ji(e,t,a).next(u=>{if(o.result=u,this.Ui)return this.Yi(e,t,a,u.size)})}).next(()=>o.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(__PRIVATE_getLogLevel()<=LogLevel.DEBUG&&__PRIVATE_logDebug("QueryEngine","SDK will not create cache indexes for query:",__PRIVATE_stringifyQuery(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),PersistencePromise.resolve()):(__PRIVATE_getLogLevel()<=LogLevel.DEBUG&&__PRIVATE_logDebug("QueryEngine","Query:",__PRIVATE_stringifyQuery(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(__PRIVATE_getLogLevel()<=LogLevel.DEBUG&&__PRIVATE_logDebug("QueryEngine","The SDK decides to create cache indexes for query:",__PRIVATE_stringifyQuery(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,__PRIVATE_queryToTarget(t))):PersistencePromise.resolve())}ji(e,t){if(__PRIVATE_queryMatchesAllDocuments(t))return PersistencePromise.resolve(null);let r=__PRIVATE_queryToTarget(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=__PRIVATE_queryWithLimit(t,null,"F"),r=__PRIVATE_queryToTarget(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=__PRIVATE_documentKeySet(...o);return this.zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Zi(t,u);return this.Xi(t,d,a,h.readTime)?this.ji(e,__PRIVATE_queryWithLimit(t,null,"F")):this.es(e,d,t,h)}))})))}Hi(e,t,r,s){return __PRIVATE_queryMatchesAllDocuments(t)||s.isEqual(SnapshotVersion.min())?PersistencePromise.resolve(null):this.zi.getDocuments(e,r).next(o=>{const a=this.Zi(t,o);return this.Xi(t,a,r,s)?PersistencePromise.resolve(null):(__PRIVATE_getLogLevel()<=LogLevel.DEBUG&&__PRIVATE_logDebug("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),__PRIVATE_stringifyQuery(t)),this.es(e,a,t,__PRIVATE_newIndexOffsetSuccessorFromReadTime(s,-1)).next(u=>u))})}Zi(e,t){let r=new SortedSet(__PRIVATE_newQueryComparator(e));return t.forEach((s,o)=>{__PRIVATE_queryMatches(e,o)&&(r=r.add(o))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(e,t,r){return __PRIVATE_getLogLevel()<=LogLevel.DEBUG&&__PRIVATE_logDebug("QueryEngine","Using full collection scan to execute query:",__PRIVATE_stringifyQuery(t)),this.zi.getDocumentsMatchingQuery(e,t,IndexOffset.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_LocalStoreImpl{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new SortedMap(__PRIVATE_primitiveComparator),this.rs=new ObjectMap(o=>__PRIVATE_canonifyTarget(o),__PRIVATE_targetEquals),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LocalDocumentsView(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function __PRIVATE_newLocalStore(n,e,t,r){return new __PRIVATE_LocalStoreImpl(n,e,t,r)}async function __PRIVATE_localStoreHandleUserChange(n,e){const t=__PRIVATE_debugCast(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=__PRIVATE_documentKeySet();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function __PRIVATE_localStoreAcknowledgeBatch(n,e){const t=__PRIVATE_debugCast(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const P=d.batch,R=P.keys();let w=PersistencePromise.resolve();return R.forEach(L=>{w=w.next(()=>m.getEntry(h,L)).next(O=>{const N=d.docVersions.get(L);__PRIVATE_hardAssert(N!==null),O.version.compareTo(N)<0&&(P.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))})}),w.next(()=>u.mutationQueue.removeMutationBatch(h,P))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=__PRIVATE_documentKeySet();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(n){const e=__PRIVATE_debugCast(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function __PRIVATE_localStoreApplyRemoteEventToLocalCache(n,e){const t=__PRIVATE_debugCast(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const u=[];e.targetChanges.forEach((m,P)=>{const R=s.get(P);if(!R)return;u.push(t.Qr.removeMatchingKeys(o,m.removedDocuments,P).next(()=>t.Qr.addMatchingKeys(o,m.addedDocuments,P)));let w=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(P)!==null?w=w.withResumeToken(ByteString.EMPTY_BYTE_STRING,SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()):m.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(m.resumeToken,r)),s=s.insert(P,w),function(O,N,x){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(R,w,m)&&u.push(t.Qr.updateTargetData(o,w))});let h=__PRIVATE_mutableDocumentMap(),d=__PRIVATE_documentKeySet();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(__PRIVATE_populateDocumentChangeBuffer(o,a,e.documentUpdates).next(m=>{h=m.cs,d=m.ls})),!r.isEqual(SnapshotVersion.min())){const m=t.Qr.getLastRemoteSnapshotVersion(o).next(P=>t.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return PersistencePromise.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.ns=s,o))}function __PRIVATE_populateDocumentChangeBuffer(n,e,t){let r=__PRIVATE_documentKeySet(),s=__PRIVATE_documentKeySet();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=__PRIVATE_mutableDocumentMap();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(SnapshotVersion.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):__PRIVATE_logDebug("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{cs:a,ls:s}})}function __PRIVATE_localStoreGetNextMutationBatch(n,e){const t=__PRIVATE_debugCast(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function __PRIVATE_localStoreAllocateTarget(n,e){const t=__PRIVATE_debugCast(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(o=>o?(s=o,PersistencePromise.resolve(s)):t.Qr.allocateTargetId(r).next(a=>(s=new TargetData(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function __PRIVATE_localStoreReleaseTarget(n,e,t){const r=__PRIVATE_debugCast(n),s=r.ns.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!__PRIVATE_isIndexedDbTransactionError(a))throw a;__PRIVATE_logDebug("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function __PRIVATE_localStoreExecuteQuery(n,e,t){const r=__PRIVATE_debugCast(n);let s=SnapshotVersion.min(),o=__PRIVATE_documentKeySet();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const P=__PRIVATE_debugCast(h),R=P.rs.get(m);return R!==void 0?PersistencePromise.resolve(P.ns.get(R)):P.Qr.getTargetData(d,m)}(r,a,__PRIVATE_queryToTarget(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?s:SnapshotVersion.min(),t?o:__PRIVATE_documentKeySet())).next(u=>(__PRIVATE_setMaxReadTime(r,__PRIVATE_queryCollectionGroup(e),u),{documents:u,hs:o})))}function __PRIVATE_setMaxReadTime(n,e,t){let r=n.ss.get(e)||SnapshotVersion.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(e,r)}class __PRIVATE_LocalClientState{constructor(){this.activeTargetIds=__PRIVATE_targetIdSet()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class __PRIVATE_MemorySharedClientState{constructor(){this.no=new __PRIVATE_LocalClientState,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new __PRIVATE_LocalClientState,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_NoopConnectivityMonitor{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_BrowserConnectivityMonitor{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve=null;function __PRIVATE_generateUniqueDebugId(){return Ve===null?Ve=function(){return 268435456+Math.round(2147483648*Math.random())}():Ve++,"0x"+Ve.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_StreamBridge{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="WebChannelConnection";class __PRIVATE_WebChannelConnection extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(t,r,s,o,a){const u=__PRIVATE_generateUniqueDebugId(),h=this.vo(t,r.toUriEncodedString());__PRIVATE_logDebug("RestConnection",`Sending RPC '${t}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(t,h,d,s).then(m=>(__PRIVATE_logDebug("RestConnection",`Received RPC '${t}' ${u}: `,m),m),m=>{throw __PRIVATE_logWarn("RestConnection",`RPC '${t}' ${u} failed with error: `,m,"url: ",h,"request:",s),m})}xo(t,r,s,o,a,u){return this.Co(t,r,s,o,a)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+b}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}vo(t,r){const s=me[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const o=__PRIVATE_generateUniqueDebugId();return new Promise((a,u)=>{const h=new XhrIo;h.setWithCredentials(!0),h.listenOnce(EventType.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ErrorCode.NO_ERROR:const m=h.getResponseJson();__PRIVATE_logDebug(fe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case ErrorCode.TIMEOUT:__PRIVATE_logDebug(fe,`RPC '${e}' ${o} timed out`),u(new FirestoreError(C.DEADLINE_EXCEEDED,"Request time out"));break;case ErrorCode.HTTP_ERROR:const P=h.getStatus();if(__PRIVATE_logDebug(fe,`RPC '${e}' ${o} failed with status:`,P,"response text:",h.getResponseText()),P>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const w=R==null?void 0:R.error;if(w&&w.status&&w.message){const L=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(x)>=0?x:C.UNKNOWN}(w.status);u(new FirestoreError(L,w.message))}else u(new FirestoreError(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new FirestoreError(C.UNAVAILABLE,"Connection failed."));break;default:fail()}}finally{__PRIVATE_logDebug(fe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);__PRIVATE_logDebug(fe,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",d,r,15)})}Oo(e,t,r){const s=__PRIVATE_generateUniqueDebugId(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=createWebChannelTransport(),u=getStatEventTarget(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new FetchXmlHttpFactory({})),this.Fo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");__PRIVATE_logDebug(fe,`Creating RPC '${e}' stream ${s}: ${m}`,h);const P=a.createWebChannel(m,h);let R=!1,w=!1;const L=new __PRIVATE_StreamBridge({lo:N=>{w?__PRIVATE_logDebug(fe,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(R||(__PRIVATE_logDebug(fe,`Opening RPC '${e}' stream ${s} transport.`),P.open(),R=!0),__PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} sending:`,N),P.send(N))},ho:()=>P.close()}),O=(N,x,B)=>{N.listen(x,q=>{try{B(q)}catch(K){setTimeout(()=>{throw K},0)}})};return O(P,WebChannel.EventType.OPEN,()=>{w||(__PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} transport opened.`),L.mo())}),O(P,WebChannel.EventType.CLOSE,()=>{w||(w=!0,__PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} transport closed`),L.po())}),O(P,WebChannel.EventType.ERROR,N=>{w||(w=!0,__PRIVATE_logWarn(fe,`RPC '${e}' stream ${s} transport errored:`,N),L.po(new FirestoreError(C.UNAVAILABLE,"The operation could not be completed")))}),O(P,WebChannel.EventType.MESSAGE,N=>{var x;if(!w){const B=N.data[0];__PRIVATE_hardAssert(!!B);const q=B,K=q.error||((x=q[0])===null||x===void 0?void 0:x.error);if(K){__PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} received error:`,K);const te=K.status;let z=function(g){const E=ce[g];if(E!==void 0)return __PRIVATE_mapCodeFromRpcCode(E)}(te),I=K.message;z===void 0&&(z=C.INTERNAL,I="Unknown error status: "+te+" with message "+K.message),w=!0,L.po(new FirestoreError(z,I)),P.close()}else __PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} received:`,B),L.yo(B)}}),O(u,Event.STAT_EVENT,N=>{N.stat===Stat.PROXY?__PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Stat.NOPROXY&&__PRIVATE_logDebug(fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{L.fo()},0),L}}function getDocument(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newSerializer(n){return new JsonProtoSerializer(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_ExponentialBackoff{constructor(e,t,r=1e3,s=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&__PRIVATE_logDebug("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_PersistentStream{constructor(e,t,r,s,o,a,u,h){this.oi=e,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new __PRIVATE_ExponentialBackoff(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(__PRIVATE_logError(t.toString()),__PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new FirestoreError(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return __PRIVATE_logDebug("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(__PRIVATE_logDebug("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=__PRIVATE_fromWatchChange(this.serializer,e),r=function(o){if(!("targetChange"in o))return SnapshotVersion.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?SnapshotVersion.min():a.readTime?__PRIVATE_fromVersion(a.readTime):SnapshotVersion.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=__PRIVATE_getEncodedDatabaseId(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=__PRIVATE_targetIsDocumentTarget(h)?{documents:__PRIVATE_toDocumentsTarget(o,h)}:{query:__PRIVATE_toQueryTarget(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=__PRIVATE_toBytes(o,a.resumeToken);const d=__PRIVATE_toInt32Proto(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(SnapshotVersion.min())>0){u.readTime=toTimestamp(o,a.snapshotVersion.toTimestamp());const d=__PRIVATE_toInt32Proto(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=__PRIVATE_toListenRequestLabels(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=__PRIVATE_getEncodedDatabaseId(this.serializer),t.removeTarget=e,this.i_(t)}}class __PRIVATE_PersistentWriteStream extends __PRIVATE_PersistentStream{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(__PRIVATE_hardAssert(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=__PRIVATE_fromWriteResults(e.writeResults,e.commitTime),r=__PRIVATE_fromVersion(e.commitTime);return this.listener.A_(r,t)}return __PRIVATE_hardAssert(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=__PRIVATE_getEncodedDatabaseId(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>toMutation(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_DatastoreImpl extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new FirestoreError(C.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,__PRIVATE_toResourcePath(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new FirestoreError(C.UNKNOWN,o.toString())})}xo(e,t,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(e,__PRIVATE_toResourcePath(t,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new FirestoreError(C.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class __PRIVATE_OnlineStateTracker{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(__PRIVATE_logError(t),this.y_=!1):__PRIVATE_logDebug("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_RemoteStoreImpl{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{__PRIVATE_canUseNetwork(this)&&(__PRIVATE_logDebug("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=__PRIVATE_debugCast(h);d.M_.add(4),await __PRIVATE_disableNetworkInternal(d),d.N_.set("Unknown"),d.M_.delete(4),await __PRIVATE_enableNetworkInternal(d)}(this))})}),this.N_=new __PRIVATE_OnlineStateTracker(r,s)}}async function __PRIVATE_enableNetworkInternal(n){if(__PRIVATE_canUseNetwork(n))for(const e of n.x_)await e(!0)}async function __PRIVATE_disableNetworkInternal(n){for(const e of n.x_)await e(!1)}function __PRIVATE_remoteStoreListen(n,e){const t=__PRIVATE_debugCast(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),__PRIVATE_shouldStartWatchStream(t)?__PRIVATE_startWatchStream(t):__PRIVATE_ensureWatchStream(t).Xo()&&__PRIVATE_sendWatchRequest(t,e))}function __PRIVATE_remoteStoreUnlisten(n,e){const t=__PRIVATE_debugCast(n),r=__PRIVATE_ensureWatchStream(t);t.F_.delete(e),r.Xo()&&__PRIVATE_sendUnwatchRequest(t,e),t.F_.size===0&&(r.Xo()?r.n_():__PRIVATE_canUseNetwork(t)&&t.N_.set("Unknown"))}function __PRIVATE_sendWatchRequest(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(SnapshotVersion.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}__PRIVATE_ensureWatchStream(n).P_(e)}function __PRIVATE_sendUnwatchRequest(n,e){n.L_.xe(e),__PRIVATE_ensureWatchStream(n).I_(e)}function __PRIVATE_startWatchStream(n){n.L_=new __PRIVATE_WatchChangeAggregator({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),__PRIVATE_ensureWatchStream(n).start(),n.N_.w_()}function __PRIVATE_shouldStartWatchStream(n){return __PRIVATE_canUseNetwork(n)&&!__PRIVATE_ensureWatchStream(n).Zo()&&n.F_.size>0}function __PRIVATE_canUseNetwork(n){return __PRIVATE_debugCast(n).M_.size===0}function __PRIVATE_cleanUpWatchStreamState(n){n.L_=void 0}async function __PRIVATE_onWatchStreamConnected(n){n.N_.set("Online")}async function __PRIVATE_onWatchStreamOpen(n){n.F_.forEach((e,t)=>{__PRIVATE_sendWatchRequest(n,e)})}async function __PRIVATE_onWatchStreamClose(n,e){__PRIVATE_cleanUpWatchStreamState(n),__PRIVATE_shouldStartWatchStream(n)?(n.N_.D_(e),__PRIVATE_startWatchStream(n)):n.N_.set("Unknown")}async function __PRIVATE_onWatchStreamChange(n,e,t){if(n.N_.set("Online"),e instanceof __PRIVATE_WatchTargetChange&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.F_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.F_.delete(u),s.L_.removeTarget(u))}(n,e)}catch(r){__PRIVATE_logDebug("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await __PRIVATE_disableNetworkUntilRecovery(n,r)}else if(e instanceof __PRIVATE_DocumentWatchChange?n.L_.Ke(e):e instanceof __PRIVATE_ExistenceFilterChange?n.L_.He(e):n.L_.We(e),!t.isEqual(SnapshotVersion.min()))try{const r=await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.L_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.F_.get(d);m&&o.F_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.F_.get(h);if(!m)return;o.F_.set(h,m.withResumeToken(ByteString.EMPTY_BYTE_STRING,m.snapshotVersion)),__PRIVATE_sendUnwatchRequest(o,h);const P=new TargetData(m.target,h,d,m.sequenceNumber);__PRIVATE_sendWatchRequest(o,P)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){__PRIVATE_logDebug("RemoteStore","Failed to raise snapshot:",r),await __PRIVATE_disableNetworkUntilRecovery(n,r)}}async function __PRIVATE_disableNetworkUntilRecovery(n,e,t){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;n.M_.add(1),await __PRIVATE_disableNetworkInternal(n),n.N_.set("Offline"),t||(t=()=>__PRIVATE_localStoreGetLastRemoteSnapshotVersion(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{__PRIVATE_logDebug("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await __PRIVATE_enableNetworkInternal(n)})}function __PRIVATE_executeWithRecovery(n,e){return e().catch(t=>__PRIVATE_disableNetworkUntilRecovery(n,t,e))}async function __PRIVATE_fillWritePipeline(n){const e=__PRIVATE_debugCast(n),t=__PRIVATE_ensureWriteStream(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;__PRIVATE_canAddToWritePipeline(e);)try{const s=await __PRIVATE_localStoreGetNextMutationBatch(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,__PRIVATE_addToWritePipeline(e,s)}catch(s){await __PRIVATE_disableNetworkUntilRecovery(e,s)}__PRIVATE_shouldStartWriteStream(e)&&__PRIVATE_startWriteStream(e)}function __PRIVATE_canAddToWritePipeline(n){return __PRIVATE_canUseNetwork(n)&&n.v_.length<10}function __PRIVATE_addToWritePipeline(n,e){n.v_.push(e);const t=__PRIVATE_ensureWriteStream(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function __PRIVATE_shouldStartWriteStream(n){return __PRIVATE_canUseNetwork(n)&&!__PRIVATE_ensureWriteStream(n).Zo()&&n.v_.length>0}function __PRIVATE_startWriteStream(n){__PRIVATE_ensureWriteStream(n).start()}async function __PRIVATE_onWriteStreamOpen(n){__PRIVATE_ensureWriteStream(n).V_()}async function __PRIVATE_onWriteHandshakeComplete(n){const e=__PRIVATE_ensureWriteStream(n);for(const t of n.v_)e.d_(t.mutations)}async function __PRIVATE_onMutationResult(n,e,t){const r=n.v_.shift(),s=MutationBatchResult.from(r,e,t);await __PRIVATE_executeWithRecovery(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await __PRIVATE_fillWritePipeline(n)}async function __PRIVATE_onWriteStreamClose(n,e){e&&__PRIVATE_ensureWriteStream(n).E_&&await async function(r,s){if(function(a){return __PRIVATE_isPermanentError(a)&&a!==C.ABORTED}(s.code)){const o=r.v_.shift();__PRIVATE_ensureWriteStream(r).t_(),await __PRIVATE_executeWithRecovery(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await __PRIVATE_fillWritePipeline(r)}}(n,e),__PRIVATE_shouldStartWriteStream(n)&&__PRIVATE_startWriteStream(n)}async function __PRIVATE_remoteStoreHandleCredentialChange(n,e){const t=__PRIVATE_debugCast(n);t.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("RemoteStore","RemoteStore received new credentials");const r=__PRIVATE_canUseNetwork(t);t.M_.add(3),await __PRIVATE_disableNetworkInternal(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await __PRIVATE_enableNetworkInternal(t)}async function __PRIVATE_remoteStoreApplyPrimaryState(n,e){const t=__PRIVATE_debugCast(n);e?(t.M_.delete(2),await __PRIVATE_enableNetworkInternal(t)):e||(t.M_.add(2),await __PRIVATE_disableNetworkInternal(t),t.N_.set("Unknown"))}function __PRIVATE_ensureWatchStream(n){return n.B_||(n.B_=function(t,r,s){const o=__PRIVATE_debugCast(t);return o.f_(),new __PRIVATE_PersistentListenStream(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:__PRIVATE_onWatchStreamConnected.bind(null,n),To:__PRIVATE_onWatchStreamOpen.bind(null,n),Ao:__PRIVATE_onWatchStreamClose.bind(null,n),h_:__PRIVATE_onWatchStreamChange.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),__PRIVATE_shouldStartWatchStream(n)?__PRIVATE_startWatchStream(n):n.N_.set("Unknown")):(await n.B_.stop(),__PRIVATE_cleanUpWatchStreamState(n))})),n.B_}function __PRIVATE_ensureWriteStream(n){return n.k_||(n.k_=function(t,r,s){const o=__PRIVATE_debugCast(t);return o.f_(),new __PRIVATE_PersistentWriteStream(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:__PRIVATE_onWriteStreamOpen.bind(null,n),Ao:__PRIVATE_onWriteStreamClose.bind(null,n),R_:__PRIVATE_onWriteHandshakeComplete.bind(null,n),A_:__PRIVATE_onMutationResult.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await __PRIVATE_fillWritePipeline(n)):(await n.k_.stop(),n.v_.length>0&&(__PRIVATE_logDebug("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DelayedOperation{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new __PRIVATE_Deferred,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new DelayedOperation(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new FirestoreError(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function __PRIVATE_wrapInUserErrorIfRecoverable(n,e){if(__PRIVATE_logError("AsyncQueue",`${e}: ${n}`),__PRIVATE_isIndexedDbTransactionError(n))return new FirestoreError(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DocumentSet{constructor(e){this.comparator=e?(t,r)=>e(t,r)||DocumentKey.comparator(t.key,r.key):(t,r)=>DocumentKey.comparator(t.key,r.key),this.keyedMap=documentMap(),this.sortedSet=new SortedMap(this.comparator)}static emptySet(e){return new DocumentSet(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof DocumentSet)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new DocumentSet;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_DocumentChangeSet{constructor(){this.q_=new SortedMap(DocumentKey.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):fail():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ViewSnapshot{constructor(e,t,r,s,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new ViewSnapshot(e,t,DocumentSet.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&__PRIVATE_queryEquals(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_QueryListenersInfo{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class __PRIVATE_EventManagerImpl{constructor(){this.queries=new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals),this.onlineState="Unknown",this.z_=new Set}}async function __PRIVATE_eventManagerListen(n,e){const t=__PRIVATE_debugCast(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.W_()&&e.G_()&&(r=2):(o=new __PRIVATE_QueryListenersInfo,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await t.onListen(s,!0);break;case 1:o.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=__PRIVATE_wrapInUserErrorIfRecoverable(a,`Initialization of query '${__PRIVATE_stringifyQuery(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.U_.push(e),e.j_(t.onlineState),o.K_&&e.H_(o.K_)&&__PRIVATE_raiseSnapshotsInSyncEvent(t)}async function __PRIVATE_eventManagerUnlisten(n,e){const t=__PRIVATE_debugCast(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.U_.indexOf(e);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=e.G_()?0:1:!o.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function __PRIVATE_eventManagerOnWatchChange(n,e){const t=__PRIVATE_debugCast(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.U_)u.H_(s)&&(r=!0);a.K_=s}}r&&__PRIVATE_raiseSnapshotsInSyncEvent(t)}function __PRIVATE_eventManagerOnWatchError(n,e,t){const r=__PRIVATE_debugCast(n),s=r.queries.get(e);if(s)for(const o of s.U_)o.onError(t);r.queries.delete(e)}function __PRIVATE_raiseSnapshotsInSyncEvent(n){n.z_.forEach(e=>{e.next()})}var ge,pe;(pe=ge||(ge={})).J_="default",pe.Cache="cache";class __PRIVATE_QueryListener{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ViewSnapshot(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=ViewSnapshot.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ge.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_AddedLimboDocument{constructor(e){this.key=e}}class __PRIVATE_RemovedLimboDocument{constructor(e){this.key=e}}class __PRIVATE_View{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=__PRIVATE_documentKeySet(),this.mutatedKeys=__PRIVATE_documentKeySet(),this.Ia=__PRIVATE_newQueryComparator(e),this.Ta=new DocumentSet(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new __PRIVATE_DocumentChangeSet,s=t?t.Ta:this.Ta;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,P)=>{const R=s.get(m),w=__PRIVATE_queryMatches(this.query,P)?P:null,L=!!R&&this.mutatedKeys.has(R.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;R&&w?R.data.isEqual(w.data)?L!==O&&(r.track({type:3,doc:w}),N=!0):this.Ra(R,w)||(r.track({type:2,doc:w}),N=!0,(h&&this.Ia(w,h)>0||d&&this.Ia(w,d)<0)&&(u=!0)):!R&&w?(r.track({type:0,doc:w}),N=!0):R&&!w&&(r.track({type:1,doc:R}),N=!0,(h||d)&&(u=!0)),N&&(w?(a=a.add(w),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:o}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((m,P)=>function(w,L){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fail()}};return O(w)-O(L)}(m.type,P.type)||this.Ia(m.doc,P.doc)),this.Va(r),s=s!=null&&s;const u=t&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,d=h!==this.ha;return this.ha=h,a.length!==0||d?{snapshot:new ViewSnapshot(this.query,e.Ta,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new __PRIVATE_DocumentChangeSet,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=__PRIVATE_documentKeySet(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new __PRIVATE_RemovedLimboDocument(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new __PRIVATE_AddedLimboDocument(r))}),t}pa(e){this.la=e.hs,this.Pa=__PRIVATE_documentKeySet();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return ViewSnapshot.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class __PRIVATE_QueryView{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class LimboResolution{constructor(e){this.key=e,this.wa=!1}}class __PRIVATE_SyncEngineImpl{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new ObjectMap(u=>__PRIVATE_canonifyQuery(u),__PRIVATE_queryEquals),this.Da=new Map,this.Ca=new Set,this.va=new SortedMap(DocumentKey.comparator),this.Fa=new Map,this.Ma=new __PRIVATE_ReferenceSet,this.xa={},this.Oa=new Map,this.Na=__PRIVATE_TargetIdGenerator.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function __PRIVATE_syncEngineListen(n,e,t=!0){const r=__PRIVATE_ensureWatchCallbacks(n);let s;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await __PRIVATE_allocateTargetAndMaybeListen(r,e,t,!0),s}async function __PRIVATE_triggerRemoteStoreListen(n,e){const t=__PRIVATE_ensureWatchCallbacks(n);await __PRIVATE_allocateTargetAndMaybeListen(t,e,!0,!1)}async function __PRIVATE_allocateTargetAndMaybeListen(n,e,t,r){const s=await __PRIVATE_localStoreAllocateTarget(n.localStore,__PRIVATE_queryToTarget(e)),o=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(o):"not-current";let u;return r&&(u=await __PRIVATE_initializeViewAndComputeSnapshot(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&__PRIVATE_remoteStoreListen(n.remoteStore,s),u}async function __PRIVATE_initializeViewAndComputeSnapshot(n,e,t,r,s){n.Ba=(P,R,w)=>async function(O,N,x,B){let q=N.view.da(x);q.Xi&&(q=await __PRIVATE_localStoreExecuteQuery(O.localStore,N.query,!1).then(({documents:I})=>N.view.da(I,q)));const K=B&&B.targetChanges.get(N.targetId),te=B&&B.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(q,O.isPrimaryClient,K,te);return __PRIVATE_updateTrackedLimbos(O,N.targetId,z.fa),z.snapshot}(n,P,R,w);const o=await __PRIVATE_localStoreExecuteQuery(n.localStore,e,!0),a=new __PRIVATE_View(e,o.hs),u=a.da(o.documents),h=TargetChange.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);__PRIVATE_updateTrackedLimbos(n,t,d.fa);const m=new __PRIVATE_QueryView(e,t,a);return n.ba.set(e,m),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function __PRIVATE_syncEngineUnlisten(n,e,t){const r=__PRIVATE_debugCast(n),s=r.ba.get(e),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!__PRIVATE_queryEquals(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await __PRIVATE_localStoreReleaseTarget(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&__PRIVATE_remoteStoreUnlisten(r.remoteStore,s.targetId),__PRIVATE_removeAndCleanupTarget(r,s.targetId)}).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)):(__PRIVATE_removeAndCleanupTarget(r,s.targetId),await __PRIVATE_localStoreReleaseTarget(r.localStore,s.targetId,!0))}async function __PRIVATE_triggerRemoteStoreUnlisten(n,e){const t=__PRIVATE_debugCast(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),__PRIVATE_remoteStoreUnlisten(t.remoteStore,r.targetId))}async function __PRIVATE_syncEngineWrite(n,e,t){const r=__PRIVATE_syncEngineEnsureWriteCallbacks(n);try{const s=await function(a,u){const h=__PRIVATE_debugCast(a),d=Timestamp.now(),m=u.reduce((w,L)=>w.add(L.key),__PRIVATE_documentKeySet());let P,R;return h.persistence.runTransaction("Locally write mutations","readwrite",w=>{let L=__PRIVATE_mutableDocumentMap(),O=__PRIVATE_documentKeySet();return h.os.getEntries(w,m).next(N=>{L=N,L.forEach((x,B)=>{B.isValidDocument()||(O=O.add(x))})}).next(()=>h.localDocuments.getOverlayedDocuments(w,L)).next(N=>{P=N;const x=[];for(const B of u){const q=__PRIVATE_mutationExtractBaseValue(B,P.get(B.key).overlayedDocument);q!=null&&x.push(new __PRIVATE_PatchMutation(B.key,q,__PRIVATE_extractFieldMask(q.value.mapValue),Precondition.exists(!0)))}return h.mutationQueue.addMutationBatch(w,d,x,u)}).next(N=>{R=N;const x=N.applyToLocalDocumentSet(P,O);return h.documentOverlayCache.saveOverlays(w,N.batchId,x)})}).then(()=>({batchId:R.batchId,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(P)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.xa[a.currentUser.toKey()];d||(d=new SortedMap(__PRIVATE_primitiveComparator)),d=d.insert(u,h),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,t),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r,s.changes),await __PRIVATE_fillWritePipeline(r.remoteStore)}catch(s){const o=__PRIVATE_wrapInUserErrorIfRecoverable(s,"Failed to persist write");t.reject(o)}}async function __PRIVATE_syncEngineApplyRemoteEvent(n,e){const t=__PRIVATE_debugCast(n);try{const r=await __PRIVATE_localStoreApplyRemoteEventToLocalCache(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Fa.get(o);a&&(__PRIVATE_hardAssert(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?__PRIVATE_hardAssert(a.wa):s.removedDocuments.size>0&&(__PRIVATE_hardAssert(a.wa),a.wa=!1))}),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(t,r,e)}catch(r){await __PRIVATE_ignoreIfPrimaryLeaseLoss(r)}}function __PRIVATE_syncEngineApplyOnlineStateChange(n,e,t){const r=__PRIVATE_debugCast(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((o,a)=>{const u=a.view.j_(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=__PRIVATE_debugCast(a);h.onlineState=u;let d=!1;h.queries.forEach((m,P)=>{for(const R of P.U_)R.j_(u)&&(d=!0)}),d&&__PRIVATE_raiseSnapshotsInSyncEvent(h)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function __PRIVATE_syncEngineRejectListen(n,e,t){const r=__PRIVATE_debugCast(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),o=s&&s.key;if(o){let a=new SortedMap(DocumentKey.comparator);a=a.insert(o,MutableDocument.newNoDocument(o,SnapshotVersion.min()));const u=__PRIVATE_documentKeySet().add(o),h=new RemoteEvent(SnapshotVersion.min(),new Map,new SortedMap(__PRIVATE_primitiveComparator),a,u);await __PRIVATE_syncEngineApplyRemoteEvent(r,h),r.va=r.va.remove(o),r.Fa.delete(e),__PRIVATE_pumpEnqueuedLimboResolutions(r)}else await __PRIVATE_localStoreReleaseTarget(r.localStore,e,!1).then(()=>__PRIVATE_removeAndCleanupTarget(r,e,t)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)}async function __PRIVATE_syncEngineApplySuccessfulWrite(n,e){const t=__PRIVATE_debugCast(n),r=e.batch.batchId;try{const s=await __PRIVATE_localStoreAcknowledgeBatch(t.localStore,e);__PRIVATE_processUserCallback(t,r,null),__PRIVATE_triggerPendingWritesCallbacks(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(t,s)}catch(s){await __PRIVATE_ignoreIfPrimaryLeaseLoss(s)}}async function __PRIVATE_syncEngineRejectFailedWrite(n,e,t){const r=__PRIVATE_debugCast(n);try{const s=await function(a,u){const h=__PRIVATE_debugCast(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(P=>(__PRIVATE_hardAssert(P!==null),m=P.keys(),h.mutationQueue.removeMutationBatch(d,P))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);__PRIVATE_processUserCallback(r,e,t),__PRIVATE_triggerPendingWritesCallbacks(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r,s)}catch(s){await __PRIVATE_ignoreIfPrimaryLeaseLoss(s)}}function __PRIVATE_triggerPendingWritesCallbacks(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function __PRIVATE_processUserCallback(n,e,t){const r=__PRIVATE_debugCast(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function __PRIVATE_removeAndCleanupTarget(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||__PRIVATE_removeLimboTarget(n,r)})}function __PRIVATE_removeLimboTarget(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(__PRIVATE_remoteStoreUnlisten(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),__PRIVATE_pumpEnqueuedLimboResolutions(n))}function __PRIVATE_updateTrackedLimbos(n,e,t){for(const r of t)r instanceof __PRIVATE_AddedLimboDocument?(n.Ma.addReference(r.key,e),__PRIVATE_trackLimboChange(n,r)):r instanceof __PRIVATE_RemovedLimboDocument?(__PRIVATE_logDebug("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||__PRIVATE_removeLimboTarget(n,r.key)):fail()}function __PRIVATE_trackLimboChange(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(__PRIVATE_logDebug("SyncEngine","New document in limbo: "+t),n.Ca.add(r),__PRIVATE_pumpEnqueuedLimboResolutions(n))}function __PRIVATE_pumpEnqueuedLimboResolutions(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new DocumentKey(ResourcePath.fromString(e)),r=n.Na.next();n.Fa.set(r,new LimboResolution(t)),n.va=n.va.insert(t,r),__PRIVATE_remoteStoreListen(n.remoteStore,new TargetData(__PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(t.path)),r,"TargetPurposeLimboResolution",__PRIVATE_ListenSequence.oe))}}async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,e,t){const r=__PRIVATE_debugCast(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{a.push(r.Ba(h,e,t).then(d=>{if((d||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(h.targetId,d!=null&&d.fromCache?"not-current":"current"),d){s.push(d);const m=__PRIVATE_LocalViewChanges.Ki(h.targetId,d);o.push(m)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(h,d){const m=__PRIVATE_debugCast(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>PersistencePromise.forEach(d,R=>PersistencePromise.forEach(R.qi,w=>m.persistence.referenceDelegate.addReference(P,R.targetId,w)).next(()=>PersistencePromise.forEach(R.Qi,w=>m.persistence.referenceDelegate.removeReference(P,R.targetId,w)))))}catch(P){if(!__PRIVATE_isIndexedDbTransactionError(P))throw P;__PRIVATE_logDebug("LocalStore","Failed to update sequence numbers: "+P)}for(const P of d){const R=P.targetId;if(!P.fromCache){const w=m.ns.get(R),L=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(L);m.ns=m.ns.insert(R,O)}}}(r.localStore,o))}async function __PRIVATE_syncEngineHandleCredentialChange(n,e){const t=__PRIVATE_debugCast(n);if(!t.currentUser.isEqual(e)){__PRIVATE_logDebug("SyncEngine","User change. New user:",e.toKey());const r=await __PRIVATE_localStoreHandleUserChange(t.localStore,e);t.currentUser=e,function(o,a){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new FirestoreError(C.CANCELLED,a))})}),o.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(t,r.us)}}function __PRIVATE_syncEngineGetRemoteKeysForTarget(n,e){const t=__PRIVATE_debugCast(n),r=t.Fa.get(e);if(r&&r.wa)return __PRIVATE_documentKeySet().add(r.key);{let s=__PRIVATE_documentKeySet();const o=t.Da.get(e);if(!o)return s;for(const a of o){const u=t.ba.get(a);s=s.unionWith(u.view.Ea)}return s}}function __PRIVATE_ensureWatchCallbacks(n){const e=__PRIVATE_debugCast(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=__PRIVATE_syncEngineApplyRemoteEvent.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=__PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=__PRIVATE_syncEngineRejectListen.bind(null,e),e.Sa.h_=__PRIVATE_eventManagerOnWatchChange.bind(null,e.eventManager),e.Sa.ka=__PRIVATE_eventManagerOnWatchError.bind(null,e.eventManager),e}function __PRIVATE_syncEngineEnsureWriteCallbacks(n){const e=__PRIVATE_debugCast(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=__PRIVATE_syncEngineApplySuccessfulWrite.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=__PRIVATE_syncEngineRejectFailedWrite.bind(null,e),e}class MemoryOfflineComponentProvider{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=__PRIVATE_newSerializer(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return __PRIVATE_newLocalStore(this.persistence,new __PRIVATE_QueryEngine,e.initialUser,this.serializer)}createPersistence(e){return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Hr,this.serializer)}createSharedClientState(e){return new __PRIVATE_MemorySharedClientState}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OnlineComponentProvider{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=__PRIVATE_syncEngineHandleCredentialChange.bind(null,this.syncEngine),await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new __PRIVATE_EventManagerImpl}()}createDatastore(e){const t=__PRIVATE_newSerializer(e.databaseInfo.databaseId),r=function(o){return new __PRIVATE_WebChannelConnection(o)}(e.databaseInfo);return function(o,a,u,h){return new __PRIVATE_DatastoreImpl(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,u){return new __PRIVATE_RemoteStoreImpl(r,s,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,t,0),function(){return __PRIVATE_BrowserConnectivityMonitor.D()?new __PRIVATE_BrowserConnectivityMonitor:new __PRIVATE_NoopConnectivityMonitor}())}createSyncEngine(e,t){return function(s,o,a,u,h,d,m){const P=new __PRIVATE_SyncEngineImpl(s,o,a,u,h,d);return m&&(P.La=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=__PRIVATE_debugCast(r);__PRIVATE_logDebug("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await __PRIVATE_disableNetworkInternal(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_AsyncObserver{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):__PRIVATE_logError("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirestoreClient{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=User.UNAUTHENTICATED,this.clientId=__PRIVATE_AutoId.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{__PRIVATE_logDebug("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(__PRIVATE_logDebug("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new FirestoreError(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new __PRIVATE_Deferred;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=__PRIVATE_wrapInUserErrorIfRecoverable(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function __PRIVATE_setOfflineComponentProvider(n,e){n.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await __PRIVATE_localStoreHandleUserChange(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function __PRIVATE_setOnlineComponentProvider(n,e){n.asyncQueue.verifyOperationInProgress();const t=await __PRIVATE_ensureOfflineComponents(n);__PRIVATE_logDebug("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>__PRIVATE_remoteStoreHandleCredentialChange(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>__PRIVATE_remoteStoreHandleCredentialChange(e.remoteStore,s)),n._onlineComponents=e}function __PRIVATE_canFallbackFromIndexedDbError(n){return n.name==="FirebaseError"?n.code===C.FAILED_PRECONDITION||n.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function __PRIVATE_ensureOfflineComponents(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){__PRIVATE_logDebug("FirestoreClient","Using user provided OfflineComponentProvider");try{await __PRIVATE_setOfflineComponentProvider(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!__PRIVATE_canFallbackFromIndexedDbError(t))throw t;__PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: "+t),await __PRIVATE_setOfflineComponentProvider(n,new MemoryOfflineComponentProvider)}}else __PRIVATE_logDebug("FirestoreClient","Using default OfflineComponentProvider"),await __PRIVATE_setOfflineComponentProvider(n,new MemoryOfflineComponentProvider);return n._offlineComponents}async function __PRIVATE_ensureOnlineComponents(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(__PRIVATE_logDebug("FirestoreClient","Using user provided OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(n,n._uninitializedComponentsProvider._online)):(__PRIVATE_logDebug("FirestoreClient","Using default OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(n,new OnlineComponentProvider))),n._onlineComponents}function __PRIVATE_getSyncEngine(n){return __PRIVATE_ensureOnlineComponents(n).then(e=>e.syncEngine)}async function __PRIVATE_getEventManager(n){const e=await __PRIVATE_ensureOnlineComponents(n),t=e.eventManager;return t.onListen=__PRIVATE_syncEngineListen.bind(null,e.syncEngine),t.onUnlisten=__PRIVATE_syncEngineUnlisten.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=__PRIVATE_triggerRemoteStoreListen.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=__PRIVATE_triggerRemoteStoreUnlisten.bind(null,e.syncEngine),t}function __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(n,e,t={}){const r=new __PRIVATE_Deferred;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new __PRIVATE_AsyncObserver({next:R=>{a.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(o,P));const w=R.docs.has(u);!w&&R.fromCache?d.reject(new FirestoreError(C.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&R.fromCache&&h&&h.source==="server"?d.reject(new FirestoreError(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),P=new __PRIVATE_QueryListener(__PRIVATE_newQueryForPath(u.path),m,{includeMetadataChanges:!0,ra:!0});return __PRIVATE_eventManagerListen(o,P)}(await __PRIVATE_getEventManager(n),n.asyncQueue,e,t,r)),r.promise}function __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n,e,t={}){const r=new __PRIVATE_Deferred;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new __PRIVATE_AsyncObserver({next:R=>{a.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(o,P)),R.fromCache&&h.source==="server"?d.reject(new FirestoreError(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),P=new __PRIVATE_QueryListener(u,m,{includeMetadataChanges:!0,ra:!0});return __PRIVATE_eventManagerListen(o,P)}(await __PRIVATE_getEventManager(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_cloneLongPollingOptions(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateNonEmptyArgument(n,e,t){if(!t)throw new FirestoreError(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function __PRIVATE_validateIsNotUsedTogether(n,e,t,r){if(e===!0&&r===!0)throw new FirestoreError(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function __PRIVATE_validateDocumentPath(n){if(!DocumentKey.isDocumentKey(n))throw new FirestoreError(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function __PRIVATE_validateCollectionPath(n){if(DocumentKey.isDocumentKey(n))throw new FirestoreError(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function __PRIVATE_valueDescription(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":fail()}function __PRIVATE_cast(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new FirestoreError(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=__PRIVATE_valueDescription(n);throw new FirestoreError(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirestoreSettingsImpl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new FirestoreError(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new FirestoreError(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}__PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__PRIVATE_cloneLongPollingOptions((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new FirestoreError(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new FirestoreError(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new FirestoreError(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Firestore$1{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FirestoreSettingsImpl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new FirestoreError(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new FirestoreError(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FirestoreSettingsImpl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new __PRIVATE_EmptyAuthCredentialsProvider;switch(r.type){case"firstParty":return new __PRIVATE_FirstPartyAuthCredentialsProvider(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new FirestoreError(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ye.get(t);r&&(__PRIVATE_logDebug("ComponentProvider","Removing Datastore"),ye.delete(t),r.terminate())}(this),Promise.resolve()}}function connectFirestoreEmulator(n,e,t,r={}){var s;const o=(n=__PRIVATE_cast(n,Firestore$1))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&__PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=User.MOCK_USER;else{u=createMockUserToken(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new FirestoreError(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new User(d)}n._authCredentials=new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Query{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Query(this.firestore,e,this._query)}}class DocumentReference{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new CollectionReference(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DocumentReference(this.firestore,e,this._key)}}class CollectionReference extends Query{constructor(e,t,r){super(e,t,__PRIVATE_newQueryForPath(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new DocumentReference(this.firestore,null,new DocumentKey(e))}withConverter(e){return new CollectionReference(this.firestore,e,this._path)}}function collection(n,e,...t){if(n=getModularInstance(n),__PRIVATE_validateNonEmptyArgument("collection","path",e),n instanceof Firestore$1){const r=ResourcePath.fromString(e,...t);return __PRIVATE_validateCollectionPath(r),new CollectionReference(n,null,r)}{if(!(n instanceof DocumentReference||n instanceof CollectionReference))throw new FirestoreError(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ResourcePath.fromString(e,...t));return __PRIVATE_validateCollectionPath(r),new CollectionReference(n.firestore,null,r)}}function doc(n,e,...t){if(n=getModularInstance(n),arguments.length===1&&(e=__PRIVATE_AutoId.newId()),__PRIVATE_validateNonEmptyArgument("doc","path",e),n instanceof Firestore$1){const r=ResourcePath.fromString(e,...t);return __PRIVATE_validateDocumentPath(r),new DocumentReference(n,null,new DocumentKey(r))}{if(!(n instanceof DocumentReference||n instanceof CollectionReference))throw new FirestoreError(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ResourcePath.fromString(e,...t));return __PRIVATE_validateDocumentPath(r),new DocumentReference(n.firestore,n instanceof CollectionReference?n.converter:null,new DocumentKey(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __PRIVATE_AsyncQueueImpl{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new __PRIVATE_ExponentialBackoff(this,"async_queue_retry"),this.hu=()=>{const t=getDocument();t&&__PRIVATE_logDebug("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=getDocument();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=getDocument();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new __PRIVATE_Deferred;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=DelayedOperation.createAndSchedule(this,e,t,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&fail()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function __PRIVATE_isPartialObserver(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Firestore extends Firestore$1{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new __PRIVATE_AsyncQueueImpl}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||__PRIVATE_configureFirestore(this),this._firestoreClient.terminate()}}function getFirestore(n,e){const t=typeof n=="object"?n:getApp(),r=typeof n=="string"?n:"(default)",s=_getProvider(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=getDefaultEmulatorHostnameAndPort("firestore");o&&connectFirestoreEmulator(s,...o)}return s}function ensureFirestoreConfigured(n){return n._firestoreClient||__PRIVATE_configureFirestore(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function __PRIVATE_configureFirestore(n){var e,t,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new DatabaseInfo(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,__PRIVATE_cloneLongPollingOptions(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new FirestoreClient(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bytes{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bytes(ByteString.fromBase64String(e))}catch(t){throw new FirestoreError(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bytes(ByteString.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FieldPath{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new FirestoreError(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new FieldPath$1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FieldValue{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GeoPoint{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new FirestoreError(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new FirestoreError(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return __PRIVATE_primitiveComparator(this._lat,e._lat)||__PRIVATE_primitiveComparator(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=/^__.*__$/;class ParsedSetData{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new __PRIVATE_PatchMutation(e,this.data,this.fieldMask,t,this.fieldTransforms):new __PRIVATE_SetMutation(e,this.data,t,this.fieldTransforms)}}class ParsedUpdateData{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new __PRIVATE_PatchMutation(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function __PRIVATE_isWrite(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fail()}}class __PRIVATE_ParseContextImpl{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new __PRIVATE_ParseContextImpl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return __PRIVATE_createError(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(__PRIVATE_isWrite(this.fu)&&Se.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class __PRIVATE_UserDataReader{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||__PRIVATE_newSerializer(e)}Fu(e,t,r,s=!1){return new __PRIVATE_ParseContextImpl({fu:e,methodName:t,vu:r,path:FieldPath$1.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function __PRIVATE_newUserDataReader(n){const e=n._freezeSettings(),t=__PRIVATE_newSerializer(n._databaseId);return new __PRIVATE_UserDataReader(n._databaseId,!!e.ignoreUndefinedProperties,t)}function __PRIVATE_parseSetData(n,e,t,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,e,t,s);__PRIVATE_validatePlainObject("Data must be an object, but it was:",a,r);const u=__PRIVATE_parseObject(r,a);let h,d;if(o.merge)h=new FieldMask(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const P of o.mergeFields){const R=__PRIVATE_fieldPathFromArgument$1(e,P,t);if(!a.contains(R))throw new FirestoreError(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);__PRIVATE_fieldMaskContains(m,R)||m.push(R)}h=new FieldMask(m),d=a.fieldTransforms.filter(P=>h.covers(P.field))}else h=null,d=a.fieldTransforms;return new ParsedSetData(new ObjectValue(u),h,d)}class __PRIVATE_DeleteFieldValueImpl extends FieldValue{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof __PRIVATE_DeleteFieldValueImpl}}function __PRIVATE_parseUpdateData(n,e,t,r){const s=n.Fu(1,e,t);__PRIVATE_validatePlainObject("Data must be an object, but it was:",s,r);const o=[],a=ObjectValue.empty();forEach(r,(h,d)=>{const m=__PRIVATE_fieldPathFromDotSeparatedString(e,h,t);d=getModularInstance(d);const P=s.Su(m);if(d instanceof __PRIVATE_DeleteFieldValueImpl)o.push(m);else{const R=__PRIVATE_parseData(d,P);R!=null&&(o.push(m),a.set(m,R))}});const u=new FieldMask(o);return new ParsedUpdateData(a,u,s.fieldTransforms)}function __PRIVATE_parseUpdateVarargs(n,e,t,r,s,o){const a=n.Fu(1,e,t),u=[__PRIVATE_fieldPathFromArgument$1(e,r,t)],h=[s];if(o.length%2!=0)throw new FirestoreError(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)u.push(__PRIVATE_fieldPathFromArgument$1(e,o[R])),h.push(o[R+1]);const d=[],m=ObjectValue.empty();for(let R=u.length-1;R>=0;--R)if(!__PRIVATE_fieldMaskContains(d,u[R])){const w=u[R];let L=h[R];L=getModularInstance(L);const O=a.Su(w);if(L instanceof __PRIVATE_DeleteFieldValueImpl)d.push(w);else{const N=__PRIVATE_parseData(L,O);N!=null&&(d.push(w),m.set(w,N))}}const P=new FieldMask(d);return new ParsedUpdateData(m,P,a.fieldTransforms)}function __PRIVATE_parseData(n,e){if(__PRIVATE_looksLikeJsonObject(n=getModularInstance(n)))return __PRIVATE_validatePlainObject("Unsupported field value:",e,n),__PRIVATE_parseObject(n,e);if(n instanceof FieldValue)return function(r,s){if(!__PRIVATE_isWrite(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=__PRIVATE_parseData(u,s.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=getModularInstance(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return toNumber(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Timestamp.fromDate(r);return{timestampValue:toTimestamp(s.serializer,o)}}if(r instanceof Timestamp){const o=new Timestamp(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:toTimestamp(s.serializer,o)}}if(r instanceof GeoPoint)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bytes)return{bytesValue:__PRIVATE_toBytes(s.serializer,r._byteString)};if(r instanceof DocumentReference){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:__PRIVATE_toResourceName(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${__PRIVATE_valueDescription(r)}`)}(n,e)}function __PRIVATE_parseObject(n,e){const t={};return isEmpty(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):forEach(n,(r,s)=>{const o=__PRIVATE_parseData(s,e.pu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function __PRIVATE_looksLikeJsonObject(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Timestamp||n instanceof GeoPoint||n instanceof Bytes||n instanceof DocumentReference||n instanceof FieldValue)}function __PRIVATE_validatePlainObject(n,e,t){if(!__PRIVATE_looksLikeJsonObject(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=__PRIVATE_valueDescription(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function __PRIVATE_fieldPathFromArgument$1(n,e,t){if((e=getModularInstance(e))instanceof FieldPath)return e._internalPath;if(typeof e=="string")return __PRIVATE_fieldPathFromDotSeparatedString(n,e);throw __PRIVATE_createError("Field path arguments must be of type string or ",n,!1,void 0,t)}const be=new RegExp("[~\\*/\\[\\]]");function __PRIVATE_fieldPathFromDotSeparatedString(n,e,t){if(e.search(be)>=0)throw __PRIVATE_createError(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new FieldPath(...e.split("."))._internalPath}catch{throw __PRIVATE_createError(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function __PRIVATE_createError(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new FirestoreError(C.INVALID_ARGUMENT,u+n+h)}function __PRIVATE_fieldMaskContains(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DocumentSnapshot$1{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new DocumentReference(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QueryDocumentSnapshot$1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QueryDocumentSnapshot$1 extends DocumentSnapshot$1{data(){return super.data()}}function __PRIVATE_fieldPathFromArgument(n,e){return typeof e=="string"?__PRIVATE_fieldPathFromDotSeparatedString(n,e):e instanceof FieldPath?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateHasExplicitOrderByForLimitToLast(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new FirestoreError(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AbstractUserDataWriter{convertValue(e,t="none"){switch(__PRIVATE_typeOrder(e)){case 0:return null;case 1:return e.booleanValue;case 2:return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw fail()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return forEach(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertGeoPoint(e){return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=__PRIVATE_getPreviousValue(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));default:return null}}convertTimestamp(e){const t=__PRIVATE_normalizeTimestamp(e);return new Timestamp(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ResourcePath.fromString(e);__PRIVATE_hardAssert(__PRIVATE_isValidResourceName(r));const s=new DatabaseId(r.get(1),r.get(3)),o=new DocumentKey(r.popFirst(5));return s.isEqual(t)||__PRIVATE_logError(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_applyFirestoreDataConverter(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SnapshotMetadata{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DocumentSnapshot extends DocumentSnapshot$1{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new QueryDocumentSnapshot(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class QueryDocumentSnapshot extends DocumentSnapshot{data(e={}){return super.data(e)}}class QuerySnapshot{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new SnapshotMetadata(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new QueryDocumentSnapshot(this._firestore,this._userDataWriter,r.key,r,new SnapshotMetadata(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new FirestoreError(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new QueryDocumentSnapshot(s._firestore,s._userDataWriter,u.doc.key,u.doc,new SnapshotMetadata(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new QueryDocumentSnapshot(s._firestore,s._userDataWriter,u.doc.key,u.doc,new SnapshotMetadata(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:__PRIVATE_resultChangeType(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function __PRIVATE_resultChangeType(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fail()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getDoc(n){n=__PRIVATE_cast(n,DocumentReference);const e=__PRIVATE_cast(n.firestore,Firestore);return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(e),n._key).then(t=>__PRIVATE_convertToDocSnapshot(e,n,t))}class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bytes(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new DocumentReference(this.firestore,null,t)}}function getDocs(n){n=__PRIVATE_cast(n,Query);const e=__PRIVATE_cast(n.firestore,Firestore),t=ensureFirestoreConfigured(e),r=new __PRIVATE_ExpUserDataWriter(e);return __PRIVATE_validateHasExplicitOrderByForLimitToLast(n._query),__PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(t,n._query).then(s=>new QuerySnapshot(e,r,n,s))}function setDoc(n,e,t){n=__PRIVATE_cast(n,DocumentReference);const r=__PRIVATE_cast(n.firestore,Firestore),s=__PRIVATE_applyFirestoreDataConverter(n.converter,e);return executeWrite(r,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Precondition.none())])}function updateDoc(n,e,t,...r){n=__PRIVATE_cast(n,DocumentReference);const s=__PRIVATE_cast(n.firestore,Firestore),o=__PRIVATE_newUserDataReader(s);let a;return a=typeof(e=getModularInstance(e))=="string"||e instanceof FieldPath?__PRIVATE_parseUpdateVarargs(o,"updateDoc",n._key,e,t,r):__PRIVATE_parseUpdateData(o,"updateDoc",n._key,e),executeWrite(s,[a.toMutation(n._key,Precondition.exists(!0))])}function deleteDoc(n){return executeWrite(__PRIVATE_cast(n.firestore,Firestore),[new __PRIVATE_DeleteMutation(n._key,Precondition.none())])}function addDoc(n,e){const t=__PRIVATE_cast(n.firestore,Firestore),r=doc(n),s=__PRIVATE_applyFirestoreDataConverter(n.converter,e);return executeWrite(t,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Precondition.exists(!1))]).then(()=>r)}function onSnapshot(n,...e){var t,r,s;n=getModularInstance(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||__PRIVATE_isPartialObserver(e[a])||(o=e[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(__PRIVATE_isPartialObserver(e[a])){const P=e[a];e[a]=(t=P.next)===null||t===void 0?void 0:t.bind(P),e[a+1]=(r=P.error)===null||r===void 0?void 0:r.bind(P),e[a+2]=(s=P.complete)===null||s===void 0?void 0:s.bind(P)}let h,d,m;if(n instanceof DocumentReference)d=__PRIVATE_cast(n.firestore,Firestore),m=__PRIVATE_newQueryForPath(n._key.path),h={next:P=>{e[a]&&e[a](__PRIVATE_convertToDocSnapshot(d,n,P))},error:e[a+1],complete:e[a+2]};else{const P=__PRIVATE_cast(n,Query);d=__PRIVATE_cast(P.firestore,Firestore),m=P._query;const R=new __PRIVATE_ExpUserDataWriter(d);h={next:w=>{e[a]&&e[a](new QuerySnapshot(d,R,P,w))},error:e[a+1],complete:e[a+2]},__PRIVATE_validateHasExplicitOrderByForLimitToLast(n._query)}return function(R,w,L,O){const N=new __PRIVATE_AsyncObserver(O),x=new __PRIVATE_QueryListener(w,N,L);return R.asyncQueue.enqueueAndForget(async()=>__PRIVATE_eventManagerListen(await __PRIVATE_getEventManager(R),x)),()=>{N.$a(),R.asyncQueue.enqueueAndForget(async()=>__PRIVATE_eventManagerUnlisten(await __PRIVATE_getEventManager(R),x))}}(ensureFirestoreConfigured(d),m,u,h)}function executeWrite(n,e){return function(r,s){const o=new __PRIVATE_Deferred;return r.asyncQueue.enqueueAndForget(async()=>__PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(r),s,o)),o.promise}(ensureFirestoreConfigured(n),e)}function __PRIVATE_convertToDocSnapshot(n,e,t){const r=t.docs.get(e._key),s=new __PRIVATE_ExpUserDataWriter(n);return new DocumentSnapshot(n,s,e._key,r,new SnapshotMetadata(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){b=s})(SDK_VERSION),_registerComponent(new Component("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(r.getProvider("auth-internal")),new __PRIVATE_FirebaseAppCheckTokenProvider(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new FirestoreError(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new DatabaseId(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),registerVersion(S,"4.6.2",e),registerVersion(S,"4.6.2","esm2017")})();var name="firebase",version="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */registerVersion(name,version,"app");function jsSnippetToJson(jsSnippet){const noComments=jsSnippet.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm,""),noTrailingCommas=noComments.replace(/,(\s*[}\]])/g,"$1"),obj=eval("("+noTrailingCommas+")"),jsonString=JSON.stringify(obj);return JSON.parse(jsonString)}let firebaseConfig=null,app=null,db=null,localStream=null,remoteStream=null;const urlParams=new URLSearchParams(window.location.search),fconfig=urlParams.get("fconfig"),sconfig=urlParams.get("sconfig");function initializeFirebase(){app=initializeApp(firebaseConfig),db=getFirestore(app)}fconfig?(firebaseConfig=jsSnippetToJson(urlParams.get("fconfig")),initializeFirebase()):console.log("No Firebase config found in URL, put it in fconfig query parameter.");sconfig||console.log("No TURN server config found in URL, put it in sconfig query parameter.");async function createPc(){const e=await(await fetch(`https://starship_stargard.metered.live/api/v1/turn/credentials?apiKey=${sconfig}`)).json(),t=new RTCPeerConnection({iceServers:e});window.pc=t,t.ontrack=r=>{r.streams[0].getTracks().forEach(s=>{remoteStream.addTrack(s)})},t.onconnectionstatechange=r=>{t.connectionState==="connected"&&(console.log("Connected!"),remoteVideo.srcObject=remoteStream)},t.ondatachannel=r=>{const s=r.channel;s.onmessage=o=>{console.log("Received Message:",o.data)},s.onopen=()=>{console.log("Chat Channel Opened!")},s.onclose=()=>{console.log("Chat Channel Closed!")}},t.oniceconnectionstatechange=r=>console.log("ICE connection state change:",r),window.stream=remoteStream}const webcamButton=document.getElementById("webcamButton"),webcamVideo=document.getElementById("webcamVideo"),callButton=document.getElementById("callButton"),callInput=document.getElementById("callInput"),answerButton=document.getElementById("answerButton"),remoteVideo=document.getElementById("remoteVideo"),hangupButton=document.getElementById("hangupButton");document.getElementById("initialize");document.getElementById("peer-connection-config");const initForm=document.getElementById("init-form");initForm.addEventListener("submit",async n=>{n.preventDefault(),await createPc()});webcamButton.onclick=async()=>{callButton.disabled=!1,answerButton.disabled=!1,webcamButton.disabled=!0;try{localStream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),remoteStream=new MediaStream;const n=pc.createDataChannel("chat");n.onmessage=e=>{console.log("Received Message:",e.data)},n.onopen=()=>{console.log("Chat Channel Opened!")},n.onclose=()=>{console.log("Chat Channel Closed!")}}catch(n){console.error("Error accessing media devices.",n)}localStream.getTracks().forEach(n=>{pc.addTrack(n,localStream)}),webcamVideo.srcObject=localStream};callButton.onclick=async()=>{const n=collection(db,"calls"),e=doc(n,"webrtc"),t=collection(e,"offerCandidates"),r=collection(e,"answerCandidates");await setDoc(e,{offer:null,answer:null}),await getDocs(t).then(a=>{a.docs.forEach(u=>{deleteDoc(u.ref)})}),callInput.value=e.id,pc.onicecandidate=async a=>{a.candidate&&await addDoc(t,a.candidate.toJSON())};const s=await pc.createOffer();await pc.setLocalDescription(s);const o={sdp:s.sdp,type:s.type};await updateDoc(e,{offer:o}),onSnapshot(e,a=>{const u=a.data();if(!pc.currentRemoteDescription&&(u!=null&&u.answer)){const h=new RTCSessionDescription(u.answer);pc.setRemoteDescription(h)}}),onSnapshot(r,a=>{a.docChanges().forEach(u=>{if(u.type==="added"){const h=new RTCIceCandidate(u.doc.data());pc.addIceCandidate(h)}})}),hangupButton.disabled=!1};answerButton.onclick=async()=>{const n=callInput.value,e=collection(db,"calls"),t=doc(e,n),r=collection(t,"answerCandidates"),s=collection(t,"offerCandidates");pc.onicecandidate=async d=>{d.candidate&&await addDoc(r,d.candidate.toJSON())};const a=(await getDoc(t)).data();console.log(a.offer),await pc.setRemoteDescription(new RTCSessionDescription(a.offer));const u=await pc.createAnswer();await pc.setLocalDescription(u);const h={type:u.type,sdp:u.sdp};await updateDoc(t,{answer:h}),onSnapshot(s,d=>{d.docChanges().forEach(m=>{if(m.type==="added"){let P=m.doc.data();pc.addIceCandidate(new RTCIceCandidate(P))}})})};
