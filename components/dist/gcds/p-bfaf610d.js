const t="gcds";let n;let e;let s=false;let o=false;const i=(t,n="")=>{{return()=>{}}};const l=(t,n)=>{{return()=>{}}};const c="r";const f="o";const r="s";const u="t";const a="s-id";const d="sty-id";const h="c-id";const $="{visibility:hidden}.hydrated{visibility:inherit}";const v="slot-fb{display:contents}slot-fb[hidden]{display:none}";const p="http://www.w3.org/1999/xlink";const y=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"];const b={};const m=t=>t!=null;const g=t=>{t=typeof t;return t==="object"||t==="function"};function w(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const j=(t,n,...e)=>{let s=null;let o=null;let i=false;let l=false;const c=[];const f=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(i=typeof t!=="function"&&!g(s)){s=String(s)}if(i&&l){c[c.length-1].t+=s}else{c.push(i?k(null,s):s)}l=i}}};f(e);if(n){if(n.key){o=n.key}{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}if(typeof t==="function"){return t(n===null?{}:n,c,C)}const r=k(t,null);r.o=n;if(c.length>0){r.i=c}{r.l=o}return r};const k=(t,n)=>{const e={u:0,h:t,t:n,$:null,i:null};{e.o=null}{e.l=null}return e};const S={};const O=t=>t&&t.h===S;const C={forEach:(t,n)=>t.map(x).forEach(n),map:(t,n)=>t.map(x).map(n).map(M)};const x=t=>({vattrs:t.o,vchildren:t.i,vkey:t.l,vname:t.v,vtag:t.h,vtext:t.t});const M=t=>{if(typeof t.vtag==="function"){const n=Object.assign({},t.vattrs);if(t.vkey){n.key=t.vkey}if(t.vname){n.name=t.vname}return j(t.vtag,n,...t.vchildren||[])}const n=k(t.vtag,t.vtext);n.o=t.vattrs;n.i=t.vchildren;n.l=t.vkey;n.v=t.vname;return n};const E=(t,n,e,s)=>{const o=i("hydrateClient",n);const l=t.shadowRoot;const c=[];const f=[];const r=l?[]:null;const u=s.p=k(n,null);if(!en.m){P(tn.body,en.m=new Map)}t[a]=e;t.removeAttribute(a);N(u,c,f,r,t,t,e);c.map((t=>{const e=t.j+"."+t.k;const s=en.m.get(e);const o=t.$;if(s&&sn&&s["s-en"]===""){s.parentNode.insertBefore(o,s.nextSibling)}if(!l){o["s-hn"]=n;if(s){o["s-ol"]=s;o["s-ol"]["s-nr"]=o}}en.m.delete(e)}));if(l){r.map((t=>{if(t){l.appendChild(t)}}))}o()};const N=(t,n,e,s,o,i,l)=>{let f;let a;let d;let $;if(i.nodeType===1){f=i.getAttribute(h);if(f){a=f.split(".");if(a[0]===l||a[0]==="0"){d={u:0,j:a[0],k:a[1],S:a[2],O:a[3],h:i.tagName.toLowerCase(),$:i,o:null,i:null,l:null,v:null,t:null};n.push(d);i.removeAttribute(h);if(!t.i){t.i=[]}t.i[d.O]=d;t=d;if(s&&d.S==="0"){s[d.O]=d.$}}}for($=i.childNodes.length-1;$>=0;$--){N(t,n,e,s,o,i.childNodes[$],l)}if(i.shadowRoot){for($=i.shadowRoot.childNodes.length-1;$>=0;$--){N(t,n,e,s,o,i.shadowRoot.childNodes[$],l)}}}else if(i.nodeType===8){a=i.nodeValue.split(".");if(a[1]===l||a[1]==="0"){f=a[0];d={u:0,j:a[1],k:a[2],S:a[3],O:a[4],$:i,o:null,i:null,l:null,v:null,h:null,t:null};if(f===u){d.$=i.nextSibling;if(d.$&&d.$.nodeType===3){d.t=d.$.textContent;n.push(d);i.remove();if(!t.i){t.i=[]}t.i[d.O]=d;if(s&&d.S==="0"){s[d.O]=d.$}}}else if(d.j===l){if(f===r){d.h="slot";if(a[5]){i["s-sn"]=d.v=a[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(s){d.$=tn.createElement(d.h);if(d.v){d.$.setAttribute("name",d.v)}i.parentNode.insertBefore(d.$,i);i.remove();if(d.S==="0"){s[d.O]=d.$}}e.push(d);if(!t.i){t.i=[]}t.i[d.O]=d}else if(f===c){if(s){i.remove()}}}}}else if(t&&t.h==="style"){const n=k(null,i.textContent);n.$=i;n.O="0";t.i=[n]}};const P=(t,n)=>{if(t.nodeType===1){let e=0;for(;e<t.childNodes.length;e++){P(t.childNodes[e],n)}if(t.shadowRoot){for(e=0;e<t.shadowRoot.childNodes.length;e++){P(t.shadowRoot.childNodes[e],n)}}}else if(t.nodeType===8){const e=t.nodeValue.split(".");if(e[0]===f){n.set(e[1]+"."+e[2],t);t.nodeValue="";t["s-en"]=e[3]}}};const U=(t,n)=>{if(t!=null&&!g(t)){if(n&4){return t==="false"?false:t===""||!!t}if(n&2){return parseFloat(t)}if(n&1){return String(t)}return t}return t};const A=t=>zt(t).$hostElement$;const I=(t,n,e)=>{const s=A(t);return{emit:t=>R(s,n,{bubbles:!!(e&4),composed:!!(e&2),cancelable:!!(e&1),detail:t})}};const R=(t,n,e)=>{const s=en.ce(n,e);t.dispatchEvent(s);return s};const F=new WeakMap;const L=(t,n,e)=>{let s=Yt.get(t);if(cn&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}Yt.set(t,s)};const T=(t,n,e)=>{var s;const o=_(n);const i=Yt.get(o);t=t.nodeType===11?t:tn;if(i){if(typeof i==="string"){t=t.head||t;let e=F.get(t);let l;if(!e){F.set(t,e=new Set)}if(!e.has(o)){if(t.host&&(l=t.querySelector(`[${d}="${o}"]`))){l.innerHTML=i}else{l=tn.createElement("style");l.innerHTML=i;const n=(s=en.C)!==null&&s!==void 0?s:w(tn);if(n!=null){l.setAttribute("nonce",n)}t.insertBefore(l,t.querySelector("link"))}if(n.u&4){l.innerHTML+=v}if(e){e.add(o)}}}else if(!t.adoptedStyleSheets.includes(i)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,i]}}return o};const W=t=>{const n=t.M;const e=t.$hostElement$;const s=n.u;const o=i("attachStyles",n.N);const l=T(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=l;e.classList.add(l+"-h");if(s&2){e.classList.add(l+"-s")}}o()};const _=(t,n)=>"sc-"+t.N;const D=t=>t.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{");const q=(t,n,e,s,o,i)=>{if(e!==s){let l=Jt(t,n);let c=n.toLowerCase();if(n==="class"){const n=t.classList;const o=V(e);const i=V(s);n.remove(...o.filter((t=>t&&!i.includes(t))));n.add(...i.filter((t=>t&&!o.includes(t))))}else if(n==="style"){{for(const n in e){if(!s||s[n]==null){if(n.includes("-")){t.style.removeProperty(n)}else{t.style[n]=""}}}}for(const n in s){if(!e||s[n]!==e[n]){if(n.includes("-")){t.style.setProperty(n,s[n])}else{t.style[n]=s[n]}}}}else if(n==="key");else if(n==="ref"){if(s){s(t)}}else if(!l&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(Jt(Zt,c)){n=c.slice(2)}else{n=c[2]+n.slice(3)}if(e||s){const o=n.endsWith(z);n=n.replace(B,"");if(e){en.rel(t,n,e,o)}if(s){en.ael(t,n,s,o)}}}else{const f=g(s);if((l||f&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){l=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}let r=false;{if(c!==(c=c.replace(/^xlink\:?/,""))){n=c;r=true}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){if(r){t.removeAttributeNS(p,n)}else{t.removeAttribute(n)}}}else if((!l||i&4||o)&&!f){s=s===true?"":s;if(r){t.setAttributeNS(p,n,s)}else{t.setAttribute(n,s)}}}}};const H=/\s/;const V=t=>!t?[]:t.split(H);const z="Capture";const B=new RegExp(z+"$");const G=(t,n,e,s)=>{const o=n.$.nodeType===11&&n.$.host?n.$.host:n.$;const i=t&&t.o||b;const l=n.o||b;{for(s in i){if(!(s in l)){q(o,s,i[s],undefined,e,n.u)}}}for(s in l){q(o,s,i[s],l[s],e,n.u)}};const J=(t,o,i,l)=>{const c=o.i[i];let f=0;let r;let u;if(c.t!==null){r=c.$=tn.createTextNode(c.t)}else{r=c.$=tn.createElement(c.h);{G(null,c,s)}if(m(n)&&r["s-si"]!==n){r.classList.add(r["s-si"]=n)}if(c.i){for(f=0;f<c.i.length;++f){u=J(t,c,f);if(u){r.appendChild(u)}}}}r["s-hn"]=e;return r};const K=(t,n,s,o,i,l)=>{let c=t;let f;if(c.shadowRoot&&c.tagName===e){c=c.shadowRoot}for(;i<=l;++i){if(o[i]){f=J(null,s,i);if(f){o[i].$=f;c.insertBefore(f,n)}}}};const Q=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.$;nt(n);if(t){t.remove()}}}};const X=(t,n,e,s,o=false)=>{let i=0;let l=0;let c=0;let f=0;let r=n.length-1;let u=n[0];let a=n[r];let d=s.length-1;let h=s[0];let $=s[d];let v;let p;while(i<=r&&l<=d){if(u==null){u=n[++i]}else if(a==null){a=n[--r]}else if(h==null){h=s[++l]}else if($==null){$=s[--d]}else if(Y(u,h,o)){Z(u,h,o);u=n[++i];h=s[++l]}else if(Y(a,$,o)){Z(a,$,o);a=n[--r];$=s[--d]}else if(Y(u,$,o)){Z(u,$,o);t.insertBefore(u.$,a.$.nextSibling);u=n[++i];$=s[--d]}else if(Y(a,h,o)){Z(a,h,o);t.insertBefore(a.$,u.$);a=n[--r];h=s[++l]}else{c=-1;{for(f=i;f<=r;++f){if(n[f]&&n[f].l!==null&&n[f].l===h.l){c=f;break}}}if(c>=0){p=n[c];if(p.h!==h.h){v=J(n&&n[l],e,c)}else{Z(p,h,o);n[c]=undefined;v=p.$}h=s[++l]}else{v=J(n&&n[l],e,l);h=s[++l]}if(v){{u.$.parentNode.insertBefore(v,u.$)}}}}if(i>r){K(t,s[d+1]==null?null:s[d+1].$,e,s,l,d)}else if(l>d){Q(n,i,r)}};const Y=(t,n,e=false)=>{if(t.h===n.h){if(!e){return t.l===n.l}return true}return false};const Z=(t,n,e=false)=>{const o=n.$=t.$;const i=t.i;const l=n.i;const c=n.h;const f=n.t;if(f===null){{if(c==="slot");else{G(t,n,s)}}if(i!==null&&l!==null){X(o,i,n,l,e)}else if(l!==null){if(t.t!==null){o.textContent=""}K(o,null,n,l,0,l.length-1)}else if(i!==null){Q(i,0,i.length-1)}}else if(t.t!==f){o.data=f}};const tt=t=>{const n=t.childNodes;for(const t of n){if(t.nodeType===1){if(t["s-sr"]){const e=t["s-sn"];t.hidden=false;for(const s of n){if(s!==t){if(s["s-hn"]!==t["s-hn"]||e!==""){if(s.nodeType===1&&(e===s.getAttribute("slot")||e===s["s-sn"])){t.hidden=true;break}}else{if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){t.hidden=true;break}}}}}tt(t)}}};const nt=t=>{{t.o&&t.o.ref&&t.o.ref(null);t.i&&t.i.map(nt)}};const et=(t,s,o=false)=>{const i=t.$hostElement$;const l=t.M;const c=t.p||k(null,null);const f=O(s)?s:j(null,null,s);e=i.tagName;if(l.P){f.o=f.o||{};l.P.map((([t,n])=>f.o[n]=i[t]))}if(o&&f.o){for(const t of Object.keys(f.o)){if(i.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){f.o[t]=i[t]}}}f.h=null;f.u|=4;t.p=f;f.$=c.$=i.shadowRoot||i;{n=i["s-sc"]}Z(c,f,o)};const st=(t,n)=>{if(n&&!t.U&&n["s-p"]){n["s-p"].push(new Promise((n=>t.U=n)))}};const ot=(t,n)=>{{t.u|=16}if(t.u&4){t.u|=512;return}st(t,t.A);const e=()=>it(t,n);return $n(e)};const it=(t,n)=>{const e=i("scheduleUpdate",t.M.N);const s=t.I;let o;if(n){{t.u|=256;if(t.R){t.R.map((([t,n])=>ht(s,t,n)));t.R=undefined}}{o=ht(s,"componentWillLoad")}}else{{o=ht(s,"componentWillUpdate")}}e();return lt(o,(()=>ft(t,s,n)))};const lt=(t,n)=>ct(t)?t.then(n):n();const ct=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const ft=async(t,n,e)=>{var s;const o=t.$hostElement$;const l=i("update",t.M.N);const c=o["s-rc"];if(e){W(t)}const f=i("render",t.M.N);{rt(t,n,o,e)}if(c){c.map((t=>t()));o["s-rc"]=undefined}f();l();{const n=(s=o["s-p"])!==null&&s!==void 0?s:[];const e=()=>ut(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.u|=4;n.length=0}}};const rt=(t,n,e,s)=>{try{n=n.render();{t.u&=~16}{t.u|=2}{{{et(t,n,s)}}}}catch(n){Kt(n,t.$hostElement$)}return null};const ut=t=>{const n=t.M.N;const e=t.$hostElement$;const s=i("postUpdate",n);const o=t.I;const l=t.A;if(!(t.u&64)){t.u|=64;{$t(e)}{ht(o,"componentDidLoad")}s();{t.F(e);if(!l){dt()}}}else{{ht(o,"componentDidUpdate")}s()}{t.L(e)}{if(t.U){t.U();t.U=undefined}if(t.u&512){hn((()=>ot(t,false)))}t.u&=~(4|512)}};const at=t=>{{const n=zt(t);const e=n.$hostElement$.isConnected;if(e&&(n.u&(2|16))===2){ot(n,false)}return e}};const dt=n=>{{$t(tn.documentElement)}hn((()=>R(Zt,"appload",{detail:{namespace:t}})))};const ht=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){Kt(t)}}return undefined};const $t=t=>t.classList.add("hydrated");const vt=(t,n)=>zt(t).T.get(n);const pt=(t,n,e,s)=>{const o=zt(t);const i=o.$hostElement$;const l=o.T.get(n);const c=o.u;const f=o.I;e=U(e,s.W[n][0]);const r=Number.isNaN(l)&&Number.isNaN(e);const u=e!==l&&!r;if((!(c&8)||l===undefined)&&u){o.T.set(n,e);if(f){if(s._&&c&128){const t=s._[n];if(t){t.map((t=>{try{f[t](e,l,n)}catch(t){Kt(t,i)}}))}}if((c&(2|16))===2){ot(o,false)}}}};const yt=(t,n,e)=>{var s;const o=t.prototype;if(n.u&64&&e&1){y.forEach((t=>Object.defineProperty(o,t,{value(...n){const e=zt(this);const s=e.I;if(!s){e.D.then((e=>{const s=e[t];typeof s==="function"&&s.call(e,...n)}))}else{const e=s[t];typeof e==="function"&&e.call(s,...n)}}})))}if(n.W){if(t.watchers){n._=t.watchers}const i=Object.entries(n.W);i.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return vt(this,t)},set(e){pt(this,t,e,n)},configurable:true,enumerable:true})}else if(e&1&&s&64){Object.defineProperty(o,t,{value(...n){var e;const s=zt(this);return(e=s===null||s===void 0?void 0:s.q)===null||e===void 0?void 0:e.then((()=>{var e;return(e=s.I)===null||e===void 0?void 0:e[t](...n)}))}})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,s,i){en.jmp((()=>{var l;const c=e.get(t);if(this.hasOwnProperty(c)){i=this[c];delete this[c]}else if(o.hasOwnProperty(c)&&typeof this[c]==="number"&&this[c]==i){return}else if(c==null){const e=zt(this);const o=e===null||e===void 0?void 0:e.u;if(o&&!(o&8)&&o&128&&i!==s){const o=e.I;const c=(l=n._)===null||l===void 0?void 0:l[t];c===null||c===void 0?void 0:c.forEach((n=>{if(o[n]!=null){o[n].call(o,i,s,t)}}))}return}this[c]=i===null&&typeof this[c]==="boolean"?false:i}))};t.observedAttributes=Array.from(new Set([...Object.keys((s=n._)!==null&&s!==void 0?s:{}),...i.filter((([t,n])=>n[0]&15)).map((([t,s])=>{var o;const i=s[1]||t;e.set(i,t);if(s[0]&512){(o=n.P)===null||o===void 0?void 0:o.push([t,i])}return i}))]))}}return t};const bt=async(t,n,e,s)=>{let o;if((n.u&32)===0){n.u|=32;{o=Xt(e);if(o.then){const t=l();o=await o;t()}if(!o.isProxied){{e._=o.watchers}yt(o,e,2);o.isProxied=true}const t=i("createInstance",e.N);{n.u|=8}try{new o(n)}catch(t){Kt(t)}{n.u&=~8}{n.u|=128}t()}if(o.style){let t=o.style;const n=_(e);if(!Yt.has(n)){const s=i("registerStyles",e.N);L(n,t,!!(e.u&1));s()}}}const c=n.A;const f=()=>ot(n,true);if(c&&c["s-rc"]){c["s-rc"].push(f)}else{f()}};const mt=t=>{};const gt=t=>{if((en.u&1)===0){const n=zt(t);const e=n.M;const s=i("connectedCallback",e.N);if(!(n.u&1)){n.u|=1;let s;{s=t.getAttribute(a);if(s){if(e.u&1){const n=T(t.shadowRoot,e);t.classList.remove(n+"-h",n+"-s")}E(t,e.N,s,n)}}{let e=t;while(e=e.parentNode||e.host){if(e.nodeType===1&&e.hasAttribute("s-id")&&e["s-p"]||e["s-p"]){st(n,n.A=e);break}}}if(e.W){Object.entries(e.W).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{bt(t,n,e)}}else{Wt(t,n,e.H);if(n===null||n===void 0?void 0:n.I);else if(n===null||n===void 0?void 0:n.D){n.D.then((()=>mt()))}}s()}};const wt=t=>{};const jt=async t=>{if((en.u&1)===0){const n=zt(t);{if(n.V){n.V.map((t=>t()));n.V=undefined}}if(n===null||n===void 0?void 0:n.I);else if(n===null||n===void 0?void 0:n.D){n.D.then((()=>wt()))}}};const kt=(t,n)=>{St(t);Ot(t);Mt(t);xt(t);Pt(t);Et(t);Nt(t);Ut(t);At(t,n);Ct(t)};const St=t=>{const n=t.cloneNode;t.cloneNode=function(t){const e=this;const s=e.shadowRoot&&sn;const o=n.call(e,s?t:false);if(!s&&t){let t=0;let n,s;const i=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;t<e.childNodes.length;t++){n=e.childNodes[t]["s-nr"];s=i.every((n=>!e.childNodes[t][n]));if(n){if(o.__appendChild){o.__appendChild(n.cloneNode(true))}else{o.appendChild(n.cloneNode(true))}}if(s){o.appendChild(e.childNodes[t].cloneNode(true))}}}return o}};const Ot=t=>{t.__appendChild=t.appendChild;t.appendChild=function(t){const n=t["s-sn"]=It(t);const e=Rt(this.childNodes,n);if(e){const s=Ft(e,n);const o=s[s.length-1];const i=o.parentNode.insertBefore(t,o.nextSibling);tt(this);at(this);return i}return this.__appendChild(t)}};const Ct=t=>{t.__removeChild=t.removeChild;t.removeChild=function(t){if(t&&typeof t["s-sn"]!=="undefined"){const n=Rt(this.childNodes,t["s-sn"]);if(n){const e=Ft(n,t["s-sn"]);const s=e.find((n=>n===t));if(s){s.remove();tt(this);return}}}return this.__removeChild(t)}};const xt=t=>{const n=t.prepend;t.prepend=function(...t){t.forEach((t=>{if(typeof t==="string"){t=this.ownerDocument.createTextNode(t)}const e=t["s-sn"]=It(t);const s=Rt(this.childNodes,e);if(s){const n=document.createTextNode("");n["s-nr"]=t;s["s-cr"].parentNode.__appendChild(n);t["s-ol"]=n;const o=Ft(s,e);const i=o[0];return i.parentNode.insertBefore(t,i.nextSibling)}if(t.nodeType===1&&!!t.getAttribute("slot")){t.hidden=true}return n.call(this,t)}))}};const Mt=t=>{t.append=function(...t){t.forEach((t=>{if(typeof t==="string"){t=this.ownerDocument.createTextNode(t)}this.appendChild(t)}))}};const Et=t=>{const n=t.insertAdjacentHTML;t.insertAdjacentHTML=function(t,e){if(t!=="afterbegin"&&t!=="beforeend"){return n.call(this,t,e)}const s=this.ownerDocument.createElement("_");let o;s.innerHTML=e;if(t==="afterbegin"){while(o=s.firstChild){this.prepend(o)}}else if(t==="beforeend"){while(o=s.firstChild){this.append(o)}}}};const Nt=t=>{t.insertAdjacentText=function(t,n){this.insertAdjacentHTML(t,n)}};const Pt=t=>{const n=t.insertAdjacentElement;t.insertAdjacentElement=function(t,e){if(t!=="afterbegin"&&t!=="beforeend"){return n.call(this,t,e)}if(t==="afterbegin"){this.prepend(e);return e}else if(t==="beforeend"){this.append(e);return e}return e}};const Ut=t=>{const n=Object.getOwnPropertyDescriptor(Node.prototype,"textContent");Object.defineProperty(t,"__textContent",n);{Object.defineProperty(t,"textContent",{get(){var t;const n=Rt(this.childNodes,"");if(((t=n===null||n===void 0?void 0:n.nextSibling)===null||t===void 0?void 0:t.nodeType)===3){return n.nextSibling.textContent}else if(n){return n.textContent}else{return this.__textContent}},set(t){var n;const e=Rt(this.childNodes,"");if(((n=e===null||e===void 0?void 0:e.nextSibling)===null||n===void 0?void 0:n.nodeType)===3){e.nextSibling.textContent=t}else if(e){e.textContent=t}else{this.__textContent=t;const n=this["s-cr"];if(n){this.insertBefore(n,this.firstChild)}}}})}};const At=(t,n)=>{class e extends Array{item(t){return this[t]}}if(n.u&8){const n=t.__lookupGetter__("childNodes");Object.defineProperty(t,"children",{get(){return this.childNodes.map((t=>t.nodeType===1))}});Object.defineProperty(t,"childElementCount",{get(){return t.children.length}});Object.defineProperty(t,"childNodes",{get(){const t=n.call(this);if((en.u&1)===0&&zt(this).u&2){const n=new e;for(let e=0;e<t.length;e++){const s=t[e]["s-nr"];if(s){n.push(s)}}return n}return e.from(t)}})}};const It=t=>t["s-sn"]||t.nodeType===1&&t.getAttribute("slot")||"";const Rt=(t,n)=>{let e=0;let s;for(;e<t.length;e++){s=t[e];if(s["s-sr"]&&s["s-sn"]===n){return s}s=Rt(s.childNodes,n);if(s){return s}}return null};const Ft=(t,n)=>{const e=[t];while((t=t.nextSibling)&&t["s-sn"]===n){e.push(t)}return e};const Lt=(t,n={})=>{var e;const s=i();const o=[];const l=n.exclude||[];const c=Zt.customElements;const f=tn.head;const r=f.querySelector("meta[charset]");const u=tn.createElement("style");const a=[];const h=tn.querySelectorAll(`[${d}]`);let p;let y=true;let b=0;Object.assign(en,n);en.B=new URL(n.resourcesUrl||"./",tn.baseURI).href;{en.u|=2}{for(;b<h.length;b++){L(h[b].getAttribute(d),D(h[b].innerHTML),true)}}let m=false;t.map((t=>{t[1].map((n=>{var e;const s={u:n[0],N:n[1],W:n[2],H:n[3]};if(s.u&4){m=true}{s.W=n[2]}{s.H=n[3]}{s.P=[]}{s._=(e=n[4])!==null&&e!==void 0?e:{}}const i=s.N;const f=class extends HTMLElement{constructor(t){super(t);t=this;Gt(t,s);if(s.u&1){{{t.attachShadow({mode:"open",delegatesFocus:!!(s.u&16)})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(y){a.push(this)}else{en.jmp((()=>gt(this)))}}disconnectedCallback(){en.jmp((()=>jt(this)))}componentOnReady(){return zt(this).D}};{if(s.u&2){kt(f.prototype,s)}}if(s.u&64){f.formAssociated=true}s.G=t[0];if(!l.includes(i)&&!c.get(i)){o.push(i);c.define(i,yt(f,s,1))}}))}));if(m){u.innerHTML+=v}{u.innerHTML+=o+$}if(u.innerHTML.length){u.setAttribute("data-styles","");const t=(e=en.C)!==null&&e!==void 0?e:w(tn);if(t!=null){u.setAttribute("nonce",t)}f.insertBefore(u,r?r.nextSibling:f.firstChild)}y=false;if(a.length){a.map((t=>t.connectedCallback()))}else{{en.jmp((()=>p=setTimeout(dt,30)))}}s()};const Tt=(t,n)=>n;const Wt=(t,n,e,s)=>{if(e){e.map((([e,s,o])=>{const i=Dt(t,e);const l=_t(n,o);const c=qt(e);en.ael(i,s,l,c);(n.V=n.V||[]).push((()=>en.rel(i,s,l,c)))}))}};const _t=(t,n)=>e=>{try{{if(t.u&256){t.I[n](e)}else{(t.R=t.R||[]).push([n,e])}}}catch(t){Kt(t)}};const Dt=(t,n)=>{if(n&4)return tn;if(n&16)return tn.body;return t};const qt=t=>on?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0;const Ht=t=>en.C=t;const Vt=new WeakMap;const zt=t=>Vt.get(t);const Bt=(t,n)=>Vt.set(n.I=t,n);const Gt=(t,n)=>{const e={u:0,$hostElement$:t,M:n,T:new Map};{e.q=new Promise((t=>e.L=t))}{e.D=new Promise((t=>e.F=t));t["s-p"]=[];t["s-rc"]=[]}Wt(t,e,n.H);return Vt.set(t,e)};const Jt=(t,n)=>n in t;const Kt=(t,n)=>(0,console.error)(t,n);const Qt=new Map;const Xt=(t,n,e)=>{const s=t.N.replace(/-/g,"_");const o=t.G;const i=Qt.get(o);if(i){return i[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{Qt.set(o,t)}return t[s]}),Kt)};const Yt=new Map;const Zt=typeof window!=="undefined"?window:globalThis||{};const tn=Zt.document||{head:{}};const nn=Zt.HTMLElement||class{};const en={u:0,B:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const sn=true;const on=(()=>{let t=false;try{tn.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=true}}))}catch(t){}return t})();const ln=t=>Promise.resolve(t);const cn=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const fn=[];const rn=[];const un=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&en.u&4){hn(dn)}else{en.raf(dn)}}};const an=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){Kt(t)}}t.length=0};const dn=()=>{an(fn);{an(rn);if(o=fn.length>0){en.raf(dn)}}};const hn=t=>ln().then(t);const $n=un(rn,true);export{Tt as F,nn as H,S as a,Lt as b,I as c,A as g,j as h,ln as p,Bt as r,Ht as s};
//# sourceMappingURL=p-bfaf610d.js.map