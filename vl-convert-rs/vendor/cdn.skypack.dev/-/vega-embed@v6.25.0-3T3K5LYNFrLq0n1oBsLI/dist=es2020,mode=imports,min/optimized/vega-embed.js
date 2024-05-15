import{applyPatch as ct}from"/-/fast-json-patch@v3.1.1-IjacxII42OC4A6OXhkDe/dist=es2020,mode=imports,min/optimized/fast-json-patch.js";import Ie from"/-/json-stringify-pretty-compact@v3.0.0-RM0i5NMwoiFhg7YNuXef/dist=es2020,mode=imports,min/optimized/json-stringify-pretty-compact.js";import*as ut from"/-/vega@v5.29.0-gABgAlTvpyWuLs0vmpeG/dist=es2020,mode=imports,min/optimized/vega.js";import{isString as ue,mergeConfig as De,isBoolean as ht,isObject as ft,writeConfig as pt}from"/-/vega@v5.29.0-gABgAlTvpyWuLs0vmpeG/dist=es2020,mode=imports,min/optimized/vega.js";import{expressionInterpreter as dt}from"/-/vega-interpreter@v1.0.5-xGayK8haM1EVgaoW7oOi/dist=es2020,mode=imports,min/optimized/vega-interpreter.js";import*as mt from"/-/vega-lite@v5.18.0-FtLrd9Ks5cFttxoTAph7/dist=es2020,mode=imports,min/optimized/vega-lite.js";import Pe from"/-/vega-schema-url-parser@v2.2.0-YmXJGRcKOXOac3VG4xfw/dist=es2020,mode=imports,min/optimized/vega-schema-url-parser.js";import*as vt from"/-/vega-themes@v2.14.0-RvUmNETlVH2y3yQM1y36/dist=es2020,mode=imports,min/optimized/vega-themes.js";import{Handler as Et}from"/-/vega-tooltip@v0.34.0-YVV3uKnnOnCt2kW7Vclb/dist=es2020,mode=imports,min/optimized/vega-tooltip.js";function _e(){throw new Error("setTimeout has not been defined")}function Fe(){throw new Error("clearTimeout has not been defined")}var W=_e,q=Fe,Q;typeof window!="undefined"?Q=window:typeof self!="undefined"?Q=self:Q={},typeof Q.setTimeout=="function"&&(W=setTimeout),typeof Q.clearTimeout=="function"&&(q=clearTimeout);function je(t){if(W===setTimeout)return setTimeout(t,0);if((W===_e||!W)&&setTimeout)return W=setTimeout,setTimeout(t,0);try{return W(t,0)}catch(e){try{return W.call(null,t,0)}catch(r){return W.call(this,t,0)}}}function gt(t){if(q===clearTimeout)return clearTimeout(t);if((q===Fe||!q)&&clearTimeout)return q=clearTimeout,clearTimeout(t);try{return q(t)}catch(e){try{return q.call(null,t)}catch(r){return q.call(this,t)}}}var z=[],Z=!1,Y,he=-1;function $t(){if(!Z||!Y)return;Z=!1,Y.length?z=Y.concat(z):he=-1,z.length&&Ge()}function Ge(){if(Z)return;var t=je($t);Z=!0;for(var e=z.length;e;){for(Y=z,z=[];++he<e;)Y&&Y[he].run();he=-1,e=z.length}Y=null,Z=!1,gt(t)}function Rt(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];z.push(new Ue(t,e)),z.length===1&&!Z&&je(Ge)}function Ue(t,e){this.fun=t,this.array=e}Ue.prototype.run=function(){this.fun.apply(null,this.array)};var yt="browser",It="browser",Lt=!0,bt=[],Nt="",Ot={},Tt={},At={};function B(){}var St=B,wt=B,xt=B,Ct=B,Dt=B,Pt=B,_t=B;function Ft(t){throw new Error("process.binding is not supported")}function jt(){return"/"}function Gt(t){throw new Error("process.chdir is not supported")}function Ut(){return 0}var ee=Q.performance||{},Xt=ee.now||ee.mozNow||ee.msNow||ee.oNow||ee.webkitNow||function(){return new Date().getTime()};function Vt(t){var e=Xt.call(ee)*.001,r=Math.floor(e),i=Math.floor(e%1*1e9);return t&&(r=r-t[0],i=i-t[1],i<0&&(r--,i+=1e9)),[r,i]}var zt=new Date;function Ht(){var t=new Date,e=t-zt;return e/1e3}var fe={nextTick:Rt,title:yt,browser:Lt,env:{NODE_ENV:"production"},argv:bt,version:Nt,versions:Ot,on:St,addListener:wt,once:xt,off:Ct,removeListener:Dt,removeAllListeners:Pt,emit:_t,binding:Ft,cwd:jt,chdir:Gt,umask:Ut,hrtime:Vt,platform:It,release:Tt,config:At,uptime:Ht};function Mt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Le,Xe;function Wt(){return Xe||(Xe=1,Le=function(t){t.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}),Le}var qt=R;R.Node=k,R.create=R;function R(t){var e=this;if(e instanceof R||(e=new R),e.tail=null,e.head=null,e.length=0,t&&typeof t.forEach=="function")t.forEach(function(n){e.push(n)});else if(arguments.length>0)for(var r=0,i=arguments.length;r<i;r++)e.push(arguments[r]);return e}R.prototype.removeNode=function(t){if(t.list!==this)throw new Error("removing node which does not belong to this list");var e=t.next,r=t.prev;return e&&(e.prev=r),r&&(r.next=e),t===this.head&&(this.head=e),t===this.tail&&(this.tail=r),t.list.length--,t.next=null,t.prev=null,t.list=null,e},R.prototype.unshiftNode=function(t){if(t===this.head)return;t.list&&t.list.removeNode(t);var e=this.head;t.list=this,t.next=e,e&&(e.prev=t),this.head=t,this.tail||(this.tail=t),this.length++},R.prototype.pushNode=function(t){if(t===this.tail)return;t.list&&t.list.removeNode(t);var e=this.tail;t.list=this,t.prev=e,e&&(e.next=t),this.tail=t,this.head||(this.head=t),this.length++},R.prototype.push=function(){for(var t=0,e=arguments.length;t<e;t++)Bt(this,arguments[t]);return this.length},R.prototype.unshift=function(){for(var t=0,e=arguments.length;t<e;t++)kt(this,arguments[t]);return this.length},R.prototype.pop=function(){if(!this.tail)return;var t=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,t},R.prototype.shift=function(){if(!this.head)return;var t=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,t},R.prototype.forEach=function(t,e){e=e||this;for(var r=this.head,i=0;r!==null;i++)t.call(e,r.value,i,this),r=r.next},R.prototype.forEachReverse=function(t,e){e=e||this;for(var r=this.tail,i=this.length-1;r!==null;i--)t.call(e,r.value,i,this),r=r.prev},R.prototype.get=function(t){for(var e=0,r=this.head;r!==null&&e<t;e++)r=r.next;if(e===t&&r!==null)return r.value},R.prototype.getReverse=function(t){for(var e=0,r=this.tail;r!==null&&e<t;e++)r=r.prev;if(e===t&&r!==null)return r.value},R.prototype.map=function(t,e){e=e||this;for(var r=new R,i=this.head;i!==null;)r.push(t.call(e,i.value,this)),i=i.next;return r},R.prototype.mapReverse=function(t,e){e=e||this;for(var r=new R,i=this.tail;i!==null;)r.push(t.call(e,i.value,this)),i=i.prev;return r},R.prototype.reduce=function(t,e){var r,i=this.head;if(arguments.length>1)r=e;else if(this.head)i=this.head.next,r=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var n=0;i!==null;n++)r=t(r,i.value,n),i=i.next;return r},R.prototype.reduceReverse=function(t,e){var r,i=this.tail;if(arguments.length>1)r=e;else if(this.tail)i=this.tail.prev,r=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var n=this.length-1;i!==null;n--)r=t(r,i.value,n),i=i.prev;return r},R.prototype.toArray=function(){for(var t=new Array(this.length),e=0,r=this.head;r!==null;e++)t[e]=r.value,r=r.next;return t},R.prototype.toArrayReverse=function(){for(var t=new Array(this.length),e=0,r=this.tail;r!==null;e++)t[e]=r.value,r=r.prev;return t},R.prototype.slice=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var r=new R;if(e<t||e<0)return r;t<0&&(t=0),e>this.length&&(e=this.length);for(var i=0,n=this.head;n!==null&&i<t;i++)n=n.next;for(;n!==null&&i<e;i++,n=n.next)r.push(n.value);return r},R.prototype.sliceReverse=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var r=new R;if(e<t||e<0)return r;t<0&&(t=0),e>this.length&&(e=this.length);for(var i=this.length,n=this.tail;n!==null&&i>e;i--)n=n.prev;for(;n!==null&&i>t;i--,n=n.prev)r.push(n.value);return r},R.prototype.splice=function(t,e,...r){t>this.length&&(t=this.length-1),t<0&&(t=this.length+t);for(var i=0,n=this.head;n!==null&&i<t;i++)n=n.next;for(var a=[],i=0;n&&i<e;i++)a.push(n.value),n=this.removeNode(n);n===null&&(n=this.tail),n!==this.head&&n!==this.tail&&(n=n.prev);for(var i=0;i<r.length;i++)n=Yt(this,n,r[i]);return a},R.prototype.reverse=function(){for(var t=this.head,e=this.tail,r=t;r!==null;r=r.prev){var i=r.prev;r.prev=r.next,r.next=i}return this.head=e,this.tail=t,this};function Yt(t,e,r){var i=e===t.head?new k(r,null,e,t):new k(r,e,e.next,t);return i.next===null&&(t.tail=i),i.prev===null&&(t.head=i),t.length++,i}function Bt(t,e){t.tail=new k(e,t.tail,null,t),t.head||(t.head=t.tail),t.length++}function kt(t,e){t.head=new k(e,null,t.head,t),t.tail||(t.tail=t.head),t.length++}function k(t,e,r,i){if(!(this instanceof k))return new k(t,e,r,i);this.list=i,this.value=t,e?(e.next=this,this.prev=e):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}try{Wt()(R)}catch(t){}const Kt=qt,K=Symbol("max"),H=Symbol("length"),te=Symbol("lengthCalculator"),oe=Symbol("allowStale"),J=Symbol("maxAge"),M=Symbol("dispose"),Ve=Symbol("noDisposeOnSet"),C=Symbol("lruList"),U=Symbol("cache"),ze=Symbol("updateAgeOnGet"),be=()=>1;class Jt{constructor(e){if(typeof e=="number"&&(e={max:e}),e||(e={}),e.max&&(typeof e.max!="number"||e.max<0))throw new TypeError("max must be a non-negative number");this[K]=e.max||Infinity;const r=e.length||be;if(this[te]=typeof r!="function"?be:r,this[oe]=e.stale||!1,e.maxAge&&typeof e.maxAge!="number")throw new TypeError("maxAge must be a number");this[J]=e.maxAge||0,this[M]=e.dispose,this[Ve]=e.noDisposeOnSet||!1,this[ze]=e.updateAgeOnGet||!1,this.reset()}set max(e){if(typeof e!="number"||e<0)throw new TypeError("max must be a non-negative number");this[K]=e||Infinity,le(this)}get max(){return this[K]}set allowStale(e){this[oe]=!!e}get allowStale(){return this[oe]}set maxAge(e){if(typeof e!="number")throw new TypeError("maxAge must be a non-negative number");this[J]=e,le(this)}get maxAge(){return this[J]}set lengthCalculator(e){typeof e!="function"&&(e=be),e!==this[te]&&(this[te]=e,this[H]=0,this[C].forEach(r=>{r.length=this[te](r.value,r.key),this[H]+=r.length})),le(this)}get lengthCalculator(){return this[te]}get length(){return this[H]}get itemCount(){return this[C].length}rforEach(e,r){r=r||this;for(let i=this[C].tail;i!==null;){const n=i.prev;He(this,e,i,r),i=n}}forEach(e,r){r=r||this;for(let i=this[C].head;i!==null;){const n=i.next;He(this,e,i,r),i=n}}keys(){return this[C].toArray().map(e=>e.key)}values(){return this[C].toArray().map(e=>e.value)}reset(){this[M]&&this[C]&&this[C].length&&this[C].forEach(e=>this[M](e.key,e.value)),this[U]=new Map,this[C]=new Kt,this[H]=0}dump(){return this[C].map(e=>pe(this,e)?!1:{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[C]}set(e,r,i){if(i=i||this[J],i&&typeof i!="number")throw new TypeError("maxAge must be a number");const n=i?Date.now():0,a=this[te](r,e);if(this[U].has(e)){if(a>this[K])return re(this,this[U].get(e)),!1;const y=this[U].get(e),s=y.value;return this[M]&&(this[Ve]||this[M](e,s.value)),s.now=n,s.maxAge=i,s.value=r,this[H]+=a-s.length,s.length=a,this.get(e),le(this),!0}const I=new Qt(e,r,a,n,i);return I.length>this[K]?(this[M]&&this[M](e,r),!1):(this[H]+=I.length,this[C].unshift(I),this[U].set(e,this[C].head),le(this),!0)}has(e){if(!this[U].has(e))return!1;const r=this[U].get(e).value;return!pe(this,r)}get(e){return Ne(this,e,!0)}peek(e){return Ne(this,e,!1)}pop(){const e=this[C].tail;return e?(re(this,e),e.value):null}del(e){re(this,this[U].get(e))}load(e){this.reset();const r=Date.now();for(let i=e.length-1;i>=0;i--){const n=e[i],a=n.e||0;if(a===0)this.set(n.k,n.v);else{const I=a-r;I>0&&this.set(n.k,n.v,I)}}}prune(){this[U].forEach((e,r)=>Ne(this,r,!1))}}const Ne=(t,e,r)=>{const i=t[U].get(e);if(i){const n=i.value;if(pe(t,n)){if(re(t,i),!t[oe])return}else r&&(t[ze]&&(i.value.now=Date.now()),t[C].unshiftNode(i));return n.value}},pe=(t,e)=>{if(!e||!e.maxAge&&!t[J])return!1;const r=Date.now()-e.now;return e.maxAge?r>e.maxAge:t[J]&&r>t[J]},le=t=>{if(t[H]>t[K])for(let e=t[C].tail;t[H]>t[K]&&e!==null;){const r=e.prev;re(t,e),e=r}},re=(t,e)=>{if(e){const r=e.value;t[M]&&t[M](r.key,r.value),t[H]-=r.length,t[U].delete(r.key),t[C].removeNode(e)}};class Qt{constructor(e,r,i,n,a){this.key=e,this.value=r,this.length=i,this.now=n,this.maxAge=a||0}}const He=(t,e,r,i)=>{let n=r.value;pe(t,n)&&(re(t,r),t[oe]||(n=void 0)),n&&e.call(i,n.value,n.key,t)};var Zt=Jt;const er=Object.freeze({loose:!0}),tr=Object.freeze({}),rr=t=>t?typeof t!="object"?er:t:tr;var Oe=rr,Te={exports:{}};const ir="2.0.0",Me=256,nr=Number.MAX_SAFE_INTEGER||9007199254740991,sr=16,ar=Me-6,or=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var Ae={MAX_LENGTH:Me,MAX_SAFE_COMPONENT_LENGTH:sr,MAX_SAFE_BUILD_LENGTH:ar,MAX_SAFE_INTEGER:nr,RELEASE_TYPES:or,SEMVER_SPEC_VERSION:ir,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2};const lr=typeof fe=="object"&&fe.env&&fe.env.NODE_DEBUG&&/\bsemver\b/i.test(fe.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var de=lr;(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:n}=Ae,a=de;e=t.exports={};const I=e.re=[],y=e.safeRe=[],s=e.src=[],o=e.t={};let h=0;const $="[a-zA-Z0-9-]",w=[["\\s",1],["\\d",n],[$,i]],_=G=>{for(const[D,x]of w)G=G.split(`${D}*`).join(`${D}{0,${x}}`).split(`${D}+`).join(`${D}{1,${x}}`);return G},f=(G,D,x)=>{const O=_(D),F=h++;a(G,F,D),o[G]=F,s[F]=D,I[F]=new RegExp(D,x?"g":void 0),y[F]=new RegExp(O,x?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${$}*`),f("MAINVERSION",`(${s[o.NUMERICIDENTIFIER]})\\.(${s[o.NUMERICIDENTIFIER]})\\.(${s[o.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${s[o.NUMERICIDENTIFIERLOOSE]})\\.(${s[o.NUMERICIDENTIFIERLOOSE]})\\.(${s[o.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${s[o.NUMERICIDENTIFIER]}|${s[o.NONNUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${s[o.NUMERICIDENTIFIERLOOSE]}|${s[o.NONNUMERICIDENTIFIER]})`),f("PRERELEASE",`(?:-(${s[o.PRERELEASEIDENTIFIER]}(?:\\.${s[o.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${s[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[o.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${$}+`),f("BUILD",`(?:\\+(${s[o.BUILDIDENTIFIER]}(?:\\.${s[o.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${s[o.MAINVERSION]}${s[o.PRERELEASE]}?${s[o.BUILD]}?`),f("FULL",`^${s[o.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${s[o.MAINVERSIONLOOSE]}${s[o.PRERELEASELOOSE]}?${s[o.BUILD]}?`),f("LOOSE",`^${s[o.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${s[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${s[o.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${s[o.XRANGEIDENTIFIER]})(?:\\.(${s[o.XRANGEIDENTIFIER]})(?:\\.(${s[o.XRANGEIDENTIFIER]})(?:${s[o.PRERELEASE]})?${s[o.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${s[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[o.XRANGEIDENTIFIERLOOSE]})(?:${s[o.PRERELEASELOOSE]})?${s[o.BUILD]}?)?)?`),f("XRANGE",`^${s[o.GTLT]}\\s*${s[o.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${s[o.GTLT]}\\s*${s[o.XRANGEPLAINLOOSE]}$`),f("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),f("COERCE",`${s[o.COERCEPLAIN]}(?:$|[^\\d])`),f("COERCEFULL",s[o.COERCEPLAIN]+`(?:${s[o.PRERELEASE]})?(?:${s[o.BUILD]})?(?:$|[^\\d])`),f("COERCERTL",s[o.COERCE],!0),f("COERCERTLFULL",s[o.COERCEFULL],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${s[o.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",f("TILDE",`^${s[o.LONETILDE]}${s[o.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${s[o.LONETILDE]}${s[o.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${s[o.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",f("CARET",`^${s[o.LONECARET]}${s[o.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${s[o.LONECARET]}${s[o.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${s[o.GTLT]}\\s*(${s[o.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${s[o.GTLT]}\\s*(${s[o.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${s[o.GTLT]}\\s*(${s[o.LOOSEPLAIN]}|${s[o.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${s[o.XRANGEPLAIN]})\\s+-\\s+(${s[o.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${s[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[o.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Te,Te.exports);var Se=Te.exports;const We=/^[0-9]+$/,qe=(t,e)=>{const r=We.test(t),i=We.test(e);return r&&i&&(t=+t,e=+e),t===e?0:r&&!i?-1:i&&!r?1:t<e?-1:1},cr=(t,e)=>qe(e,t);var ur={compareIdentifiers:qe,rcompareIdentifiers:cr};const me=de,{MAX_LENGTH:Ye,MAX_SAFE_INTEGER:ve}=Ae,{safeRe:Be,t:ke}=Se,hr=Oe,{compareIdentifiers:ie}=ur;let fr=class V{constructor(e,r){if(r=hr(r),e instanceof V){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Ye)throw new TypeError(`version is longer than ${Ye} characters`);me("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const i=e.trim().match(r.loose?Be[ke.LOOSE]:Be[ke.FULL]);if(!i)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>ve||this.major<0)throw new TypeError("Invalid major version");if(this.minor>ve||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>ve||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(n=>{if(/^[0-9]+$/.test(n)){const a=+n;if(a>=0&&a<ve)return a}return n}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(me("SemVer.compare",this.version,this.options,e),!(e instanceof V)){if(typeof e=="string"&&e===this.version)return 0;e=new V(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof V||(e=new V(e,this.options)),ie(this.major,e.major)||ie(this.minor,e.minor)||ie(this.patch,e.patch)}comparePre(e){if(e instanceof V||(e=new V(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const i=this.prerelease[r],n=e.prerelease[r];if(me("prerelease compare",r,i,n),i===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(i===void 0)return-1;if(i===n)continue;return ie(i,n)}while(++r)}compareBuild(e){e instanceof V||(e=new V(e,this.options));let r=0;do{const i=this.build[r],n=e.build[r];if(me("prerelease compare",r,i,n),i===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(i===void 0)return-1;if(i===n)continue;return ie(i,n)}while(++r)}inc(e,r,i){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,i),this.inc("pre",r,i);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,i),this.inc("pre",r,i);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const n=Number(i)?1:0;if(!r&&i===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[n];else{let a=this.prerelease.length;for(;--a>=0;)typeof this.prerelease[a]=="number"&&(this.prerelease[a]++,a=-2);if(a===-1){if(r===this.prerelease.join(".")&&i===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(n)}}if(r){let a=[r,n];i===!1&&(a=[r]),ie(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=a):this.prerelease=a}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var we=fr;const Ke=we,pr=(t,e,r)=>new Ke(t,r).compare(new Ke(e,r));var ne=pr;const dr=ne,mr=(t,e,r)=>dr(t,e,r)===0;var vr=mr;const Er=ne,gr=(t,e,r)=>Er(t,e,r)!==0;var $r=gr;const Rr=ne,yr=(t,e,r)=>Rr(t,e,r)>0;var Ir=yr;const Lr=ne,br=(t,e,r)=>Lr(t,e,r)>=0;var Nr=br;const Or=ne,Tr=(t,e,r)=>Or(t,e,r)<0;var Ar=Tr;const Sr=ne,wr=(t,e,r)=>Sr(t,e,r)<=0;var xr=wr;const Cr=vr,Dr=$r,Pr=Ir,_r=Nr,Fr=Ar,jr=xr,Gr=(t,e,r,i)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return Cr(t,r,i);case"!=":return Dr(t,r,i);case">":return Pr(t,r,i);case">=":return _r(t,r,i);case"<":return Fr(t,r,i);case"<=":return jr(t,r,i);default:throw new TypeError(`Invalid operator: ${e}`)}};var Ur=Gr,xe,Je;function Xr(){if(Je)return xe;Je=1;const t=Symbol("SemVer ANY");class e{static get ANY(){return t}constructor(h,$){if($=r($),h instanceof e){if(h.loose===!!$.loose)return h;h=h.value}h=h.trim().split(/\s+/).join(" "),I("comparator",h,$),this.options=$,this.loose=!!$.loose,this.parse(h),this.semver===t?this.value="":this.value=this.operator+this.semver.version,I("comp",this)}parse(h){const $=this.options.loose?i[n.COMPARATORLOOSE]:i[n.COMPARATOR],w=h.match($);if(!w)throw new TypeError(`Invalid comparator: ${h}`);this.operator=w[1]!==void 0?w[1]:"",this.operator==="="&&(this.operator=""),w[2]?this.semver=new y(w[2],this.options.loose):this.semver=t}toString(){return this.value}test(h){if(I("Comparator.test",h,this.options.loose),this.semver===t||h===t)return!0;if(typeof h=="string")try{h=new y(h,this.options)}catch($){return!1}return a(h,this.operator,this.semver,this.options)}intersects(h,$){if(!(h instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new s(h.value,$).test(this.value):h.operator===""?h.value===""?!0:new s(this.value,$).test(h.semver):($=r($),$.includePrerelease&&(this.value==="<0.0.0-0"||h.value==="<0.0.0-0")||!$.includePrerelease&&(this.value.startsWith("<0.0.0")||h.value.startsWith("<0.0.0"))?!1:this.operator.startsWith(">")&&h.operator.startsWith(">")||(this.operator.startsWith("<")&&h.operator.startsWith("<")||(this.semver.version===h.semver.version&&this.operator.includes("=")&&h.operator.includes("=")||a(this.semver,"<",h.semver,$)&&this.operator.startsWith(">")&&h.operator.startsWith("<")))?!0:!!(a(this.semver,">",h.semver,$)&&this.operator.startsWith("<")&&h.operator.startsWith(">")))}}xe=e;const r=Oe,{safeRe:i,t:n}=Se,a=Ur,I=de,y=we,s=Ze();return xe}var Ce,Qe;function Ze(){if(Qe)return Ce;Qe=1;class t{constructor(l,m){if(m=i(m),l instanceof t)return l.loose===!!m.loose&&l.includePrerelease===!!m.includePrerelease?l:new t(l.raw,m);if(l instanceof n)return this.raw=l.value,this.set=[[l]],this.format(),this;if(this.options=m,this.loose=!!m.loose,this.includePrerelease=!!m.includePrerelease,this.raw=l.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(p=>this.parseRange(p.trim())).filter(p=>p.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const p=this.set[0];if(this.set=this.set.filter(d=>!f(d[0])),this.set.length===0)this.set=[p];else if(this.set.length>1){for(const d of this.set)if(d.length===1&&G(d[0])){this.set=[d];break}}}this.format()}format(){return this.range=this.set.map(l=>l.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(l){const m=(this.options.includePrerelease&&w)|(this.options.loose&&_),p=m+":"+l,d=r.get(p);if(d)return d;const u=this.options.loose,v=u?y[s.HYPHENRANGELOOSE]:y[s.HYPHENRANGE];l=l.replace(v,Re(this.options.includePrerelease)),a("hyphen replace",l),l=l.replace(y[s.COMPARATORTRIM],o),a("comparator trim",l),l=l.replace(y[s.TILDETRIM],h),a("tilde trim",l),l=l.replace(y[s.CARETTRIM],$),a("caret trim",l);let L=l.split(" ").map(S=>x(S,this.options)).join(" ").split(/\s+/).map(S=>$e(S,this.options));u&&(L=L.filter(S=>(a("loose invalid filter",S,this.options),!!S.match(y[s.COMPARATORLOOSE])))),a("range list",L);const E=new Map,T=L.map(S=>new n(S,this.options));for(const S of T){if(f(S))return[S];E.set(S.value,S)}E.size>1&&E.has("")&&E.delete("");const P=[...E.values()];return r.set(p,P),P}intersects(l,m){if(!(l instanceof t))throw new TypeError("a Range is required");return this.set.some(p=>D(p,m)&&l.set.some(d=>D(d,m)&&p.every(u=>d.every(v=>u.intersects(v,m)))))}test(l){if(!l)return!1;if(typeof l=="string")try{l=new I(l,this.options)}catch(m){return!1}for(let m=0;m<this.set.length;m++)if(ye(this.set[m],l,this.options))return!0;return!1}}Ce=t;const e=Zt,r=new e({max:1e3}),i=Oe,n=Xr(),a=de,I=we,{safeRe:y,t:s,comparatorTrimReplace:o,tildeTrimReplace:h,caretTrimReplace:$}=Se,{FLAG_INCLUDE_PRERELEASE:w,FLAG_LOOSE:_}=Ae,f=c=>c.value==="<0.0.0-0",G=c=>c.value==="",D=(c,l)=>{let m=!0;const p=c.slice();let d=p.pop();for(;m&&p.length;)m=p.every(u=>d.intersects(u,l)),d=p.pop();return m},x=(c,l)=>(a("comp",c,l),c=b(c,l),a("caret",c),c=F(c,l),a("tildes",c),c=g(c,l),a("xrange",c),c=j(c,l),a("stars",c),c),O=c=>!c||c.toLowerCase()==="x"||c==="*",F=(c,l)=>c.trim().split(/\s+/).map(m=>ge(m,l)).join(" "),ge=(c,l)=>{const m=l.loose?y[s.TILDELOOSE]:y[s.TILDE];return c.replace(m,(p,d,u,v,L)=>{a("tilde",c,p,d,u,v,L);let E;return O(d)?E="":O(u)?E=`>=${d}.0.0 <${+d+1}.0.0-0`:O(v)?E=`>=${d}.${u}.0 <${d}.${+u+1}.0-0`:L?(a("replaceTilde pr",L),E=`>=${d}.${u}.${v}-${L} <${d}.${+u+1}.0-0`):E=`>=${d}.${u}.${v} <${d}.${+u+1}.0-0`,a("tilde return",E),E})},b=(c,l)=>c.trim().split(/\s+/).map(m=>N(m,l)).join(" "),N=(c,l)=>{a("caret",c,l);const m=l.loose?y[s.CARETLOOSE]:y[s.CARET],p=l.includePrerelease?"-0":"";return c.replace(m,(d,u,v,L,E)=>{a("caret",c,d,u,v,L,E);let T;return O(u)?T="":O(v)?T=`>=${u}.0.0${p} <${+u+1}.0.0-0`:O(L)?u==="0"?T=`>=${u}.${v}.0${p} <${u}.${+v+1}.0-0`:T=`>=${u}.${v}.0${p} <${+u+1}.0.0-0`:E?(a("replaceCaret pr",E),u==="0"?v==="0"?T=`>=${u}.${v}.${L}-${E} <${u}.${v}.${+L+1}-0`:T=`>=${u}.${v}.${L}-${E} <${u}.${+v+1}.0-0`:T=`>=${u}.${v}.${L}-${E} <${+u+1}.0.0-0`):(a("no pr"),u==="0"?v==="0"?T=`>=${u}.${v}.${L}${p} <${u}.${v}.${+L+1}-0`:T=`>=${u}.${v}.${L}${p} <${u}.${+v+1}.0-0`:T=`>=${u}.${v}.${L} <${+u+1}.0.0-0`),a("caret return",T),T})},g=(c,l)=>(a("replaceXRanges",c,l),c.split(/\s+/).map(m=>A(m,l)).join(" ")),A=(c,l)=>{c=c.trim();const m=l.loose?y[s.XRANGELOOSE]:y[s.XRANGE];return c.replace(m,(p,d,u,v,L,E)=>{a("xRange",c,p,d,u,v,L,E);const T=O(u),P=T||O(v),S=P||O(L),ae=S;return d==="="&&ae&&(d=""),E=l.includePrerelease?"-0":"",T?d===">"||d==="<"?p="<0.0.0-0":p="*":d&&ae?(P&&(v=0),L=0,d===">"?(d=">=",P?(u=+u+1,v=0,L=0):(v=+v+1,L=0)):d==="<="&&(d="<",P?u=+u+1:v=+v+1),d==="<"&&(E="-0"),p=`${d+u}.${v}.${L}${E}`):P?p=`>=${u}.0.0${E} <${+u+1}.0.0-0`:S&&(p=`>=${u}.${v}.0${E} <${u}.${+v+1}.0-0`),a("xRange return",p),p})},j=(c,l)=>(a("replaceStars",c,l),c.trim().replace(y[s.STAR],"")),$e=(c,l)=>(a("replaceGTE0",c,l),c.trim().replace(y[l.includePrerelease?s.GTE0PRE:s.GTE0],"")),Re=c=>(l,m,p,d,u,v,L,E,T,P,S,ae,bi)=>(O(p)?m="":O(d)?m=`>=${p}.0.0${c?"-0":""}`:O(u)?m=`>=${p}.${d}.0${c?"-0":""}`:v?m=`>=${m}`:m=`>=${m}${c?"-0":""}`,O(T)?E="":O(P)?E=`<${+T+1}.0.0-0`:O(S)?E=`<${T}.${+P+1}.0-0`:ae?E=`<=${T}.${P}.${S}-${ae}`:c?E=`<${T}.${P}.${+S+1}-0`:E=`<=${E}`,`${m} ${E}`.trim()),ye=(c,l,m)=>{for(let p=0;p<c.length;p++)if(!c[p].test(l))return!1;if(l.prerelease.length&&!m.includePrerelease){for(let p=0;p<c.length;p++){if(a(c[p].semver),c[p].semver===n.ANY)continue;if(c[p].semver.prerelease.length>0){const d=c[p].semver;if(d.major===l.major&&d.minor===l.minor&&d.patch===l.patch)return!0}}return!1}return!0};return Ce}const Vr=Ze(),zr=(t,e,r)=>{try{e=new Vr(e,r)}catch(i){return!1}return e.test(t)};var Hr=zr,et=Mt(Hr);function Mr(t,e,r){const i=t.open(e),n=1e4,a=250,{origin:I}=new URL(e);let y=~~(n/a);function s(h){h.source===i&&(y=0,t.removeEventListener("message",s,!1))}t.addEventListener("message",s,!1);function o(){if(y<=0)return;i.postMessage(r,I),setTimeout(o,a),y-=1}setTimeout(o,a)}var Wr=`.vega-embed {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
}
.vega-embed.has-actions {
  padding-right: 38px;
}
.vega-embed details:not([open]) > :not(summary) {
  display: none !important;
}
.vega-embed summary {
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
  z-index: 1000;
  background: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  color: #1b1e23;
  border: 1px solid #aaa;
  border-radius: 999px;
  opacity: 0.2;
  transition: opacity 0.4s ease-in;
  cursor: pointer;
  line-height: 0px;
}
.vega-embed summary::-webkit-details-marker {
  display: none;
}
.vega-embed summary:active {
  box-shadow: #aaa 0px 0px 0px 1px inset;
}
.vega-embed summary svg {
  width: 14px;
  height: 14px;
}
.vega-embed details[open] summary {
  opacity: 0.7;
}
.vega-embed:hover summary, .vega-embed:focus-within summary {
  opacity: 1 !important;
  transition: opacity 0.2s ease;
}
.vega-embed .vega-actions {
  position: absolute;
  z-index: 1001;
  top: 35px;
  right: -9px;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  padding-top: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #d9d9d9;
  background: white;
  animation-duration: 0.15s;
  animation-name: scale-in;
  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);
  text-align: left;
}
.vega-embed .vega-actions a {
  padding: 8px 16px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: #434a56;
  text-decoration: none;
}
.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {
  background-color: #f7f7f9;
  color: black;
}
.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {
  content: "";
  display: inline-block;
  position: absolute;
}
.vega-embed .vega-actions::before {
  left: auto;
  right: 14px;
  top: -16px;
  border: 8px solid rgba(0, 0, 0, 0);
  border-bottom-color: #d9d9d9;
}
.vega-embed .vega-actions::after {
  left: auto;
  right: 15px;
  top: -14px;
  border: 7px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
}
.vega-embed .chart-wrapper.fit-x {
  width: 100%;
}
.vega-embed .chart-wrapper.fit-y {
  height: 100%;
}

.vega-embed-wrapper {
  max-width: 100%;
  overflow: auto;
  padding-right: 14px;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`;function tt(t,...e){for(const r of e)qr(t,r);return t}function qr(t,e){for(const r of Object.keys(e))pt(t,r,e[r],!0)}var Yr="vega-embed",Br="6.25.0",kr="Publish Vega visualizations as embedded web components.",Kr=["vega","data","visualization","component","embed"],Jr={type:"git",url:"http://github.com/vega/vega-embed.git"},Qr={name:"UW Interactive Data Lab",url:"http://idl.cs.washington.edu"},Zr=[{name:"Dominik Moritz",url:"https://www.domoritz.de"}],ei={url:"https://github.com/vega/vega-embed/issues"},ti="https://github.com/vega/vega-embed#readme",ri="BSD-3-Clause",ii="build/vega-embed.js",ni="build/vega-embed.module.js",si="build/vega-embed.min.js",ai="build/vega-embed.min.js",oi="build/vega-embed.module.d.ts",li=["src","build"],ci={"@babel/core":"^7.24.4","@babel/plugin-transform-runtime":"^7.24.3","@babel/preset-env":"^7.24.4","@babel/preset-typescript":"^7.24.1","@release-it/conventional-changelog":"^8.0.1","@rollup/plugin-commonjs":"25.0.7","@rollup/plugin-json":"^6.1.0","@rollup/plugin-node-resolve":"^15.2.3","@rollup/plugin-terser":"^0.4.4","@types/jest":"^29.5.12","@types/semver":"^7.5.8","@typescript-eslint/eslint-plugin":"^7.6.0","@typescript-eslint/parser":"^7.6.0","browser-sync":"^3.0.2",concurrently:"^8.2.2","del-cli":"^5.1.0",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-jest":"^28.2.0","eslint-plugin-prettier":"^5.1.3",jest:"^29.7.0","jest-canvas-mock":"^2.5.2","jest-environment-jsdom":"^29.7.0","postinstall-postinstall":"^2.1.0",prettier:"^3.2.5","release-it":"^17.1.1",rollup:"4.14.1","rollup-plugin-bundle-size":"^1.0.3","rollup-plugin-ts":"^3.4.5",sass:"^1.74.1",typescript:"^5.4.5",vega:"^5.22.1","vega-lite":"^5.2.0"},ui={vega:"^5.21.0","vega-lite":"*"},hi={"fast-json-patch":"^3.1.1","json-stringify-pretty-compact":"^3.0.0",semver:"^7.6.0",tslib:"^2.6.2","vega-interpreter":"^1.0.5","vega-schema-url-parser":"^2.2.0","vega-themes":"^2.14.0","vega-tooltip":"^0.34.0"},fi={prebuild:"yarn clean && yarn build:style",build:"rollup -c","build:style":"./build-style.sh",clean:"del-cli build src/style.ts",prepublishOnly:"yarn clean && yarn build",preversion:"yarn lint && yarn test",serve:"browser-sync start --directory -s -f build *.html",start:"yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",pretest:"yarn build:style",test:"jest","test:inspect":"node --inspect-brk ./node_modules/.bin/jest --runInBand",prettierbase:"prettier '*.{css,scss,html}'",format:"eslint . --fix && yarn prettierbase --write",lint:"eslint . && yarn prettierbase --check",release:"release-it"},pi={name:Yr,version:Br,description:kr,keywords:Kr,repository:Jr,author:Qr,contributors:Zr,bugs:ei,homepage:ti,license:ri,main:ii,module:ni,unpkg:si,jsdelivr:ai,types:oi,files:li,devDependencies:ci,peerDependencies:ui,dependencies:hi,scripts:fi};const di=pi.version,X=ut;let se=mt;const rt=typeof window!="undefined"?window:void 0;se===void 0&&rt?.vl?.compile&&(se=rt.vl);const it={export:{svg:!0,png:!0},source:!0,compiled:!0,editor:!0},mi={CLICK_TO_VIEW_ACTIONS:"Click to view actions",COMPILED_ACTION:"View Compiled Vega",EDITOR_ACTION:"Open in Vega Editor",PNG_ACTION:"Save as PNG",SOURCE_ACTION:"View Source",SVG_ACTION:"Save as SVG"},ce={vega:"Vega","vega-lite":"Vega-Lite"},Ee={vega:X.version,"vega-lite":se?se.version:"not available"},vi={vega:t=>t,"vega-lite":(t,e)=>se.compile(t,{config:e}).spec},Ei=`
<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <circle r="2" cy="8" cx="2"></circle>
  <circle r="2" cy="8" cx="8"></circle>
  <circle r="2" cy="8" cx="14"></circle>
</svg>`,gi="chart-wrapper";function $i(t){return typeof t=="function"}function nt(t,e,r,i){const n=`<html><head>${e}</head><body><pre><code class="json">`,a=`</code></pre>${r}</body></html>`,I=window.open("");I.document.write(n+t+a),I.document.title=`${ce[i]} JSON Source`}function st(t,e){if(t.$schema){const r=Pe(t.$schema);e&&e!==r.library&&console.warn(`The given visualization spec is written in ${ce[r.library]}, but mode argument sets ${ce[e]??e}.`);const i=r.library;return et(Ee[i],`^${r.version.slice(1)}`)||console.warn(`The input spec uses ${ce[i]} ${r.version}, but the current version of ${ce[i]} is v${Ee[i]}.`),i}return"mark"in t||"encoding"in t||"layer"in t||"hconcat"in t||"vconcat"in t||"facet"in t||"repeat"in t?"vega-lite":"marks"in t||"signals"in t||"scales"in t||"axes"in t?"vega":e??"vega"}function at(t){return!!(t&&"load"in t)}function ot(t){return at(t)?t:X.loader(t)}function Ri(t){const e=t.usermeta?.embedOptions??{};return ue(e.defaultStyle)&&(e.defaultStyle=!1),e}async function yi(t,e,r={}){let i,n;ue(e)?(n=ot(r.loader),i=JSON.parse(await n.load(e))):i=e;const a=Ri(i),I=a.loader;(!n||I)&&(n=ot(r.loader??I));const y=await lt(a,n),s=await lt(r,n),o={...tt(s,y),config:De(s.config??{},y.config??{})};return await Li(t,i,o,n)}async function lt(t,e){const r=ue(t.config)?JSON.parse(await e.load(t.config)):t.config??{},i=ue(t.patch)?JSON.parse(await e.load(t.patch)):t.patch;return{...t,...i?{patch:i}:{},...r?{config:r}:{}}}function Ii(t){const e=t.getRootNode?t.getRootNode():document;return e instanceof ShadowRoot?{root:e,rootContainer:e}:{root:document,rootContainer:document.head??document.body}}async function Li(t,e,r={},i){const n=r.theme?De(vt[r.theme],r.config??{}):r.config,a=ht(r.actions)?r.actions:tt({},it,r.actions??{}),I={...mi,...r.i18n},y=r.renderer??"canvas",s=r.logLevel??X.Warn,o=r.downloadFileName??"visualization",h=typeof t=="string"?document.querySelector(t):t;if(!h)throw new Error(`${t} does not exist`);if(r.defaultStyle!==!1){const b="vega-embed-style",{root:N,rootContainer:g}=Ii(h);if(!N.getElementById(b)){const A=document.createElement("style");A.id=b,A.innerHTML=r.defaultStyle===void 0||r.defaultStyle===!0?Wr.toString():r.defaultStyle,g.appendChild(A)}}const $=st(e,r.mode);let w=vi[$](e,n);if($==="vega-lite"&&w.$schema){const b=Pe(w.$schema);et(Ee.vega,`^${b.version.slice(1)}`)||console.warn(`The compiled spec uses Vega ${b.version}, but current version is v${Ee.vega}.`)}h.classList.add("vega-embed"),a&&h.classList.add("has-actions"),h.innerHTML="";let _=h;if(a){const b=document.createElement("div");b.classList.add(gi),h.appendChild(b),_=b}const f=r.patch;if(f&&(w=f instanceof Function?f(w):ct(w,f,!0,!1).newDocument),r.formatLocale&&X.formatLocale(r.formatLocale),r.timeFormatLocale&&X.timeFormatLocale(r.timeFormatLocale),r.expressionFunctions)for(const b in r.expressionFunctions){const N=r.expressionFunctions[b];"fn"in N?X.expressionFunction(b,N.fn,N.visitor):N instanceof Function&&X.expressionFunction(b,N)}const{ast:G}=r,D=X.parse(w,$==="vega-lite"?{}:n,{ast:G}),x=new(r.viewClass||X.View)(D,{loader:i,logLevel:s,renderer:y,...G?{expr:X.expressionInterpreter??r.expr??dt}:{}});if(x.addSignalListener("autosize",(b,N)=>{const{type:g}=N;g=="fit-x"?(_.classList.add("fit-x"),_.classList.remove("fit-y")):g=="fit-y"?(_.classList.remove("fit-x"),_.classList.add("fit-y")):g=="fit"?_.classList.add("fit-x","fit-y"):_.classList.remove("fit-x","fit-y")}),r.tooltip!==!1){const{loader:b,tooltip:N}=r,g=b&&!at(b)?b?.baseURL:void 0,A=$i(N)?N:new Et({baseURL:g,...N===!0?{}:N}).call;x.tooltip(A)}let{hover:O}=r;if(O===void 0&&(O=$==="vega"),O){const{hoverSet:b,updateSet:N}=typeof O=="boolean"?{}:O;x.hover(b,N)}r&&(r.width!=null&&x.width(r.width),r.height!=null&&x.height(r.height),r.padding!=null&&x.padding(r.padding)),await x.initialize(_,r.bind).runAsync();let F;if(a!==!1){let b=h;if(r.defaultStyle!==!1||r.forceActionsMenu){const g=document.createElement("details");g.title=I.CLICK_TO_VIEW_ACTIONS,h.append(g),b=g;const A=document.createElement("summary");A.innerHTML=Ei,g.append(A),F=j=>{g.contains(j.target)||g.removeAttribute("open")},document.addEventListener("click",F)}const N=document.createElement("div");if(b.append(N),N.classList.add("vega-actions"),a===!0||a.export!==!1){for(const g of["svg","png"])if(a===!0||a.export===!0||a.export[g]){const A=I[`${g.toUpperCase()}_ACTION`],j=document.createElement("a"),$e=ft(r.scaleFactor)?r.scaleFactor[g]:r.scaleFactor;j.text=A,j.href="#",j.target="_blank",j.download=`${o}.${g}`,j.addEventListener("mousedown",async function(Re){Re.preventDefault();const ye=await x.toImageURL(g,$e);this.href=ye}),N.append(j)}}if(a===!0||a.source!==!1){const g=document.createElement("a");g.text=I.SOURCE_ACTION,g.href="#",g.addEventListener("click",function(A){nt(Ie(e),r.sourceHeader??"",r.sourceFooter??"",$),A.preventDefault()}),N.append(g)}if($==="vega-lite"&&(a===!0||a.compiled!==!1)){const g=document.createElement("a");g.text=I.COMPILED_ACTION,g.href="#",g.addEventListener("click",function(A){nt(Ie(w),r.sourceHeader??"",r.sourceFooter??"","vega"),A.preventDefault()}),N.append(g)}if(a===!0||a.editor!==!1){const g=r.editorUrl??"https://vega.github.io/editor/",A=document.createElement("a");A.text=I.EDITOR_ACTION,A.href="#",A.addEventListener("click",function(j){Mr(window,g,{config:n,mode:$,renderer:y,spec:Ie(e)}),j.preventDefault()}),N.append(A)}}function ge(){F&&document.removeEventListener("click",F),x.finalize()}return{view:x,spec:e,vgSpec:w,finalize:ge,embedOptions:r}}export default yi;export{it as DEFAULT_ACTIONS,st as guessMode,X as vega,se as vegaLite,di as version};
