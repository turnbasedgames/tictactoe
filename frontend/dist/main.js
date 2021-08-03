(()=>{var e={234:(e,t,n)=>{const{connectToParent:o}=n(989),r=new(n(299)),i=o({methods:{stateChanged(e){r.emit("stateChanged",e)}}});e.exports={getStates:async function(){return(await i.promise).getStates()},getLatestState:async function(){return(await i.promise).getLatestState()},makeMove:async function(e){return(await i.promise).makeMove(e)},on:r.on,off:r.off}},299:e=>{e.exports=class{constructor(){this.listeners={}}on(e,t){this.listeners[e]?this.listeners[e].add(t):this.listeners[e]=new Set([t])}off(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e])}emit(e,t){this.listeners[e]&&this.listeners[e].forEach((e=>{try{e(t)}catch{}}))}}},989:(e,t,n)=>{"use strict";var o,r,i,s,a;n.r(t),n.d(t,{ErrorCode:()=>i,connectToChild:()=>w,connectToParent:()=>C}),function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(o||(o={})),function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(r||(r={})),function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NotInIframe="NotInIframe",e.NoIframeSrc="NoIframeSrc"}(i||(i={})),function(e){e.DataCloneError="DataCloneError"}(s||(s={})),function(e){e.Message="message"}(a||(a={}));const c=()=>{const e=[];let t=!1;return{destroy(n){t=!0,e.forEach((e=>{e(n)}))},onDestroy(n){t?n():e.push(n)}}},d=e=>(...t)=>{e&&console.log("[Penpal]",...t)},l={"http:":"80","https:":"443"},u=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,m=["file:","data:"],p=({name:e,message:t,stack:n})=>({name:e,message:t,stack:n}),g=(e,t,n)=>{const{localName:i,local:c,remote:d,originForSending:l,originForReceiving:u}=e;let m=!1;const g=e=>{if(e.source!==d||e.data.penpal!==o.Call)return;if(e.origin!==u)return void n(`${i} received message from origin ${e.origin} which did not match expected origin ${u}`);const a=e.data,{methodName:c,args:g,id:h}=a;n(`${i}: Received ${c}() call`);const f=e=>t=>{if(n(`${i}: Sending ${c}() reply`),m)return void n(`${i}: Unable to send ${c}() reply due to destroyed connection`);const a={penpal:o.Reply,id:h,resolution:e,returnValue:t};e===r.Rejected&&t instanceof Error&&(a.returnValue=p(t),a.returnValueIsError=!0);try{d.postMessage(a,l)}catch(e){if(e.name===s.DataCloneError){const t={penpal:o.Reply,id:h,resolution:r.Rejected,returnValue:p(e),returnValueIsError:!0};d.postMessage(t,l)}throw e}};new Promise((e=>e(t[c].apply(t,g)))).then(f(r.Fulfilled),f(r.Rejected))};return c.addEventListener(a.Message,g),()=>{m=!0,c.removeEventListener(a.Message,g)}};let h=0;const f=()=>++h,y=(e,t,n,s,c)=>{const{localName:d,local:l,remote:u,originForSending:m,originForReceiving:p}=t;let g=!1;c(`${d}: Connecting call sender`);return n.reduce(((e,t)=>(e[t]=(e=>(...t)=>{let n;c(`${d}: Sending ${e}() call`);try{u.closed&&(n=!0)}catch(e){n=!0}if(n&&s(),g){const t=new Error(`Unable to send ${e}() call due to destroyed connection`);throw t.code=i.ConnectionDestroyed,t}return new Promise(((n,i)=>{const s=f(),g=t=>{if(t.source!==u||t.data.penpal!==o.Reply||t.data.id!==s)return;if(t.origin!==p)return void c(`${d} received message from origin ${t.origin} which did not match expected origin ${p}`);const m=t.data;c(`${d}: Received ${e}() reply`),l.removeEventListener(a.Message,g);let h=m.returnValue;m.returnValueIsError&&(h=(e=>{const t=new Error;return Object.keys(e).forEach((n=>t[n]=e[n])),t})(h)),(m.resolution===r.Fulfilled?n:i)(h)};l.addEventListener(a.Message,g);const h={penpal:o.Call,id:s,methodName:e,args:t};u.postMessage(h,m)}))})(t),e)),e),()=>{g=!0}},v=(e,t)=>{let n;return void 0!==e&&(n=window.setTimeout((()=>{const n=new Error(`Connection timed out after ${e}ms`);n.code=i.ConnectionTimeout,t(n)}),e)),()=>{clearTimeout(n)}},w=e=>{let{iframe:t,methods:n={},childOrigin:r,timeout:s,debug:p=!1}=e;const h=d(p),f=c(),{onDestroy:w,destroy:C}=f;r||((e=>{if(!e.src&&!e.srcdoc){const e=new Error("Iframe must have src or srcdoc property defined.");throw e.code=i.NoIframeSrc,e}})(t),r=(e=>{if(e&&m.find((t=>e.startsWith(t))))return"null";const t=document.location,n=u.exec(e);let o,r,i;return n?(o=n[1]?n[1]:t.protocol,r=n[2],i=n[4]):(o=t.protocol,r=t.hostname,i=t.port),`${o}//${r}${i&&i!==l[o]?`:${i}`:""}`})(t.src));const E="null"===r?"*":r,S=((e,t,n,r)=>i=>{if(i.origin!==n)return void e(`Parent: Handshake - Received SYN message from origin ${i.origin} which did not match expected origin ${n}`);e("Parent: Handshake - Received SYN, responding with SYN-ACK");const s={penpal:o.SynAck,methodNames:Object.keys(t)};i.source.postMessage(s,r)})(h,n,r,E),$=((e,t,n,o,r)=>{const{destroy:i,onDestroy:s}=o;let a,c;const d={};return o=>{if(o.origin!==t)return void r(`Parent: Handshake - Received ACK message from origin ${o.origin} which did not match expected origin ${t}`);r("Parent: Handshake - Received ACK");const l={localName:"Parent",local:window,remote:o.source,originForSending:n,originForReceiving:t};a&&a(),a=g(l,e,r),s(a),c&&c.forEach((e=>{delete d[e]})),c=o.data.methodNames;const u=y(d,l,c,i,r);return s(u),d}})(n,r,E,f,h);return{promise:new Promise(((e,n)=>{const r=v(s,C),c=n=>{if(n.source===t.contentWindow&&n.data)if(n.data.penpal!==o.Syn)if(n.data.penpal!==o.Ack);else{const t=$(n);t&&(r(),e(t))}else S(n)};window.addEventListener(a.Message,c),h("Parent: Awaiting handshake"),((e,t)=>{const{destroy:n,onDestroy:o}=t,r=setInterval((()=>{e.isConnected||(clearInterval(r),n())}),6e4);o((()=>{clearInterval(r)}))})(t,f),w((e=>{window.removeEventListener(a.Message,c),e||((e=new Error("Connection destroyed")).code=i.ConnectionDestroyed),n(e)}))})),destroy(){C()}}},C=(e={})=>{const{parentOrigin:t="*",methods:n={},timeout:r,debug:s=!1}=e,l=d(s),u=c(),{destroy:m,onDestroy:p}=u;(()=>{if(window===window.top){const e=new Error("connectToParent() must be called within an iframe");throw e.code=i.NotInIframe,e}})();const h=((e,t,n,r)=>{const{destroy:i,onDestroy:s}=n;return n=>{if(!(e instanceof RegExp?e.test(n.origin):"*"===e||e===n.origin))return void r(`Child: Handshake - Received SYN-ACK from origin ${n.origin} which did not match expected origin ${e}`);r("Child: Handshake - Received SYN-ACK, responding with ACK");const a="null"===n.origin?"*":n.origin,c={penpal:o.Ack,methodNames:Object.keys(t)};window.parent.postMessage(c,a);const d={localName:"Child",local:window,remote:window.parent,originForSending:a,originForReceiving:n.origin},l=g(d,t,r);s(l);const u={},m=y(u,d,n.data.methodNames,i,r);return s(m),u}})(t,n,u,l);return{promise:new Promise(((e,n)=>{const s=v(r,m),c=t=>{if((()=>{try{clearTimeout()}catch(e){return!1}return!0})()&&t.source===parent&&t.data&&t.data.penpal===o.SynAck){const n=h(t);n&&(window.removeEventListener(a.Message,c),s(),e(n))}};window.addEventListener(a.Message,c),(()=>{l("Child: Handshake - Sending SYN");const e={penpal:o.Syn},n=t instanceof RegExp?"*":t;window.parent.postMessage(e,n)})(),p((e=>{window.removeEventListener(a.Message,c),e||((e=new Error("Connection destroyed")).code=i.ConnectionDestroyed),n(e)}))})),destroy(){m()}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=n(234);n.n(e)().on("stateChanged",(e=>{console.log("state changed!",e)})),document.body.appendChild(function(){const e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("input");return t.innerHTML="Make Move:",n.type="text",n.id="move",o.type="submit",o.value="Submit",e.appendChild(t),e.appendChild(document.createElement("br")),e.appendChild(n),e.appendChild(document.createElement("br")),e.appendChild(document.createElement("br")),e.appendChild(o),e.onsubmit=e=>{e.preventDefault();const t=JSON.parse(n.value);console.log("making move",t)},e}())})()})();