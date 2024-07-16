var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,m,g,v,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=function(e){return e&&e.Math===Math&&e};w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||k("object"==typeof self&&self)||k("object"==typeof y&&y)||k("object"==typeof w&&w)||function(){return this}()||Function("return this")();var S={},E={};S=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var F={},$={};$=!E(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;F=$?j.bind(j):function(){return j.apply(j,arguments)};var O={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;o=L&&!O.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:O;var x={};x=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},P={},M={},D=Function.prototype,q=D.call,I=$&&D.bind.bind(q,q),A={},C=(M=$?I:function(e){return function(){return q.apply(e,arguments)}})({}.toString),H=M("".slice);A=function(e){return H(C(e),8,-1)};var N=Object,R=M("".split);P=E(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?R(e,""):N(e)}:N;var U={},z={};z=function(e){return null==e};var W=TypeError;U=function(e){if(z(e))throw new W("Can't call method on "+e);return e},T=function(e){return P(U(e))};var B={},G={},Q={},Y={},J="object"==typeof document&&document.all;Y=void 0===J&&void 0!==J?function(e){return"function"==typeof e||e===J}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:Y(e)};var V={},K={};K=function(e,t){var r;return arguments.length<2?(r=w[e],Y(r)?r:void 0):w[e]&&w[e][t]};var X={};X=M({}.isPrototypeOf);var Z={},ee={},et={},er={};er="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var en=w.process,ei=w.Deno,eo=en&&en.versions||ei&&ei.version,ea=eo&&eo.v8;ea&&(s=(a=ea.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&er&&(!(a=er.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=er.match(/Chrome\/(\d+)/))&&(s=+a[1]),et=s;var es=w.String;Z=(ee=!!Object.getOwnPropertySymbols&&!E(function(){var e=Symbol("symbol detection");return!es(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&et&&et<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;V=Z?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return Y(t)&&X(t.prototype,ec(e))};var eu={},el={},ed={},ep=String;ed=function(e){try{return ep(e)}catch(e){return"Object"}};var ef=TypeError;el=function(e){if(Y(e))return e;throw new ef(ed(e)+" is not a function")},eu=function(e,t){var r=e[t];return z(r)?void 0:el(r)};var eh={},em=TypeError;eh=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!Q(n=F(r,e))||Y(r=e.valueOf)&&!Q(n=F(r,e))||"string"!==t&&Y(r=e.toString)&&!Q(n=F(r,e)))return n;throw new em("Can't convert object to primitive value")};var eg={},ev={},ey={};ey=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var ew="__core-js_shared__",ek=ev=w[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.36.0",mode:ey?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ev[e]||(ev[e]=t||{})};var eS={},eE={},eF=Object;eE=function(e){return eF(U(e))};var e$=M({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return e$(eE(e),t)};var ej={},eO=0,eL=Math.random(),ex=M(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eO+eL,36)};var eT=w.Symbol,eP=eg("wks"),eM=Z?eT.for||eT:eT&&eT.withoutSetter||ej,eD=TypeError,eq=(eS(eP,e="toPrimitive")||(eP[e]=ee&&eS(eT,e)?eT[e]:eM("Symbol."+e)),eP[e]);G=function(e,t){if(!Q(e)||V(e))return e;var r,n=eu(e,eq);if(n){if(void 0===t&&(t="default"),r=F(n,e,t),!Q(r)||V(r))return r;throw new eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},B=function(e){var t=G(e,"string");return V(t)?t:t+""};var eI={},eA={},eC=w.document,eH=Q(eC)&&Q(eC.createElement);eA=function(e){return eH?eC.createElement(e):{}},eI=!S&&!E(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;i=S?eN:function(e,t){if(e=T(e),t=B(t),eI)try{return eN(e,t)}catch(e){}if(eS(e,t))return x(!F(o,e,t),e[t])};var eR={},eU={};eU=S&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eW=String,eB=TypeError;ez=function(e){if(Q(e))return e;throw new eB(eW(e)+" is not an object")};var eG=TypeError,eQ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eJ="enumerable",eV="configurable",eK="writable";c=S?eU?function(e,t,r){if(ez(e),t=B(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(ez(e),t=B(t),ez(r),eI)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=S?function(e,t,r){return c(e,t,x(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=S&&Object.getOwnPropertyDescriptor,e2=eS(e0,"name")&&(!S||S&&e1(e0,"name").configurable),e3={},e8=M(Function.toString);Y(ev.inspectSource)||(ev.inspectSource=function(e){return e8(e)}),e3=ev.inspectSource;var e4={},e5={},e9=w.WeakMap;e5=Y(e9)&&/native code/.test(String(e9));var e7={},e6=eg("keys");e7=function(e){return e6[e]||(e6[e]=ej(e))};var te={};te={};var tt="Object already initialized",tr=w.TypeError,tn=w.WeakMap;if(e5||ev.state){var ti=ev.state||(ev.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,u=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},l=function(e){return ti.get(e)||{}},d=function(e){return ti.has(e)}}else{var to=e7("state");te[to]=!0,u=function(e,t){if(eS(e,to))throw new tr(tt);return t.facade=e,eR(e,to,t),t},l=function(e){return eS(e,to)?e[to]:{}},d=function(e){return eS(e,to)}}var ta=(e4={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=l(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e4.get,tc=String,tu=Object.defineProperty,tl=M("".slice),tp=M("".replace),tf=M([].join),th=S&&!E(function(){return 8!==tu(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tg=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tp(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e2&&e.name!==t)&&(S?tu(e,"name",{value:t,configurable:!0}):e.name=t),th&&r&&eS(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?S&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eS(n,"source")||(n.source=tf(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return Y(this)&&ts(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Y(r)&&eZ(r,o,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},ty={},tb={},t_={},tw={},tk={},tS=Math.ceil,tE=Math.floor;tk=Math.trunc||function(e){var t=+e;return(t>0?tE:tS)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tk(t)};var tF=Math.max,t$=Math.min;t_=function(e,t){var r=tw(e);return r<0?tF(r+t,0):t$(r,t)};var tj={},tO={},tL=Math.min;tO=function(e){var t=tw(e);return t>0?tL(t,9007199254740991):0},tj=function(e){return tO(e.length)};var tx=function(e){return function(t,r,n){var i,o=T(t),a=tj(o);if(0===a)return!e&&-1;var s=t_(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tT={includes:tx(!0),indexOf:tx(!1)}.indexOf,tP=M([].push);tb=function(e,t){var r,n=T(e),i=0,o=[];for(r in n)!eS(te,r)&&eS(n,r)&&tP(o,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tT(o,r)||tP(o,r));return o};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tb(e,tM)},f=Object.getOwnPropertySymbols;var tD=M([].concat);ty=K("Reflect","ownKeys")||function(e){var t=p(ez(e));return f?tD(t,f(e)):t},tv=function(e,t,r){for(var n=ty(t),o=0;o<n.length;o++){var a=n[o];eS(e,a)||r&&eS(r,a)||c(e,a,i(t,a))}};var tq={},tI=/#|\.prototype\./,tA=function(e,t){var r=tH[tC(e)];return r===tR||r!==tN&&(Y(t)?E(t):!!t)},tC=tA.normalize=function(e){return String(e).replace(tI,".").toLowerCase()},tH=tA.data={},tN=tA.NATIVE="N",tR=tA.POLYFILL="P";tq=tA,_=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[c]||eb(c,{}):w[c]&&w[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tq(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eR(a,"sham",!0),eX(r,n,a,e)}};var tU={},tz={},tW=Function.prototype,tB=tW.apply,tG=tW.call;tz="object"==typeof Reflect&&Reflect.apply||($?tG.bind(tB):function(){return tG.apply(tB,arguments)});var tQ={},tY={},tJ=(tY=function(e){if("Function"===A(e))return M(e)})(tY.bind);tQ=function(e,t){return el(e),void 0===t?e:$?tJ(e,t):function(){return e.apply(t,arguments)}};var tV={};tV=K("document","documentElement");var tK={};tK=M([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/(?:ipad|iphone|ipod).*applewebkit/i.test(er);var t1={};t1="process"===A(w.process);var t2=w.setImmediate,t3=w.clearImmediate,t8=w.process,t4=w.Dispatch,t5=w.Function,t9=w.MessageChannel,t7=w.String,t6=0,re={},rt="onreadystatechange";E(function(){h=w.location});var rr=function(e){if(eS(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ro=function(e){w.postMessage(t7(e),h.protocol+"//"+h.host)};t2&&t3||(t2=function(e){tX(arguments.length,1);var t=Y(e)?e:t5(e),r=tK(arguments,1);return re[++t6]=function(){tz(t,void 0,r)},m(t6),t6},t3=function(e){delete re[e]},t1?m=function(e){t8.nextTick(rn(e))}:t4&&t4.now?m=function(e){t4.now(rn(e))}:t9&&!t0?(v=(g=new t9).port2,g.port1.onmessage=ri,m=tQ(v.postMessage,v)):w.addEventListener&&Y(w.postMessage)&&!w.importScripts&&h&&"file:"!==h.protocol&&!E(ro)?(m=ro,w.addEventListener("message",ri,!1)):m=rt in eA("script")?function(e){tV.appendChild(eA("script"))[rt]=function(){tV.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ra=(tU={set:t2,clear:t3}).clear;_({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==ra},{clearImmediate:ra});var rs=tU.set,rc={},ru={};ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=w.Function,rd=/MSIE .\./.test(er)||ru&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rc=function(e,t){var r=t?2:1;return rd?function(n,i){var o=tX(arguments.length,1)>r,a=Y(n)?n:rl(n),s=o?tK(arguments,r):[],c=o?function(){tz(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rp=w.setImmediate?rc(rs,!1):rs;_({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rp},{setImmediate:rp});var rf=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),m;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,m)}(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===m)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function O(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},S(E.prototype),u(E.prototype,s,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}({});try{regeneratorRuntime=rf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}var rh={};rh=new URL("icons.c14567a0.svg",import.meta.url).toString();class rm{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];!e.isEqualNode(r)&&e.firstChild?.nodeValue.trim()&&(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderError(e=this._errorMessage){let t=`<div class="error">
                       <div>
                         <svg>
                          <use href="${b(rh)}icons.svg#icon-alert-triangle"></use>
                         </svg>
                       </div>
                      <p>${e}</p>
                    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
                      <div>
                       <svg>
                        <use href="${b(rh)}#icon-smile"></use>
                       </svg>
                      </div>
                      <p>${e}</p>
                   </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){this._clear();let e=`<div class="spinner">
    <svg>
    <use href="${b(rh)}g#icon-loader"></use>
    </svg>
    </div>`;this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rg extends rm{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe please try another one";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmarks")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src='${this._data.image}' alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>

            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${b(rh)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${b(rh)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                        <use href="${b(rh)}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                        <use href="${b(rh)}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>

                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${b(rh)}#icon-user"></use>
                </svg>
                </div>
                <button class="btn--round btn--bookmarks">
                <svg class="">
                    <use href="${b(rh)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(e=>` <li class="recipe__ingredient">
                            <svg class="recipe__icon">
                                <use href="${b(rh)}#icon-check"></use>
                            </svg>
                            <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
                            <div class="recipe__description">
                                <span class="recipe__unit">${e.unit}</span>
                                ${e.description}
                            </div>
                            </li>`).join("")}
                </ul>
            </div>

            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href=${this._data.sourceUrl}
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${b(rh)}#icon-arrow-right"></use>
                </svg>
                </a>
            </div>`}}var rv=new rg;const ry="https://forkify-api.herokuapp.com/api/v2/recipes",rb="9af9d384-0384-462a-a8ec-5cbeb44f505d";class r_ extends rm{_parentElement=document.querySelector(".search");_errorMessage="No recipe found for your query. Try Again!";getQuery(){return document.querySelector(".search__field").value}addHandlerSearch(e){document.querySelector(".search").addEventListener("submit",function(t){t.preventDefault(),e()})}clearInputField(){document.querySelector(".search__field").value=""}}var rw=new r_;const rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise((e,t)=>{setTimeout(t,11e3,Error("Request took too long! Timeout after 11 second"))})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}};(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},Fraction;const rS={recipe:{},search:{results:[],page:1,query:"",resultsPerPage:10,totalPage:1},bookmarks:[]},rE=function(e){let{recipe:t}=e.data;return{id:t.id,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,title:t.title,cookingTime:t.cooking_time,...t.key&&{key:t.key}}},rF=async function(e){try{let t=await rk(`${e}?key=${rb}`);rS.recipe=rE(t),rS.bookmarks.some(e=>e.id===rS.recipe.id)?rS.recipe.bookmarked=!0:rS.recipe.bookmarked=!1}catch(e){throw e}},r$=async function(e){try{rS.search.query=e;let t=await rk(`${ry}?search=${e}&key=${rb}`);rS.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),rS.search.page=1,rS.search.totalPage=Math.ceil(rS.search.results.length/10)}catch(e){throw e}},rj=function(e=rS.search.page){rS.search.page=e;let t=(e-1)*rS.search.resultsPerPage,r=e*rS.search.resultsPerPage;return rS.search.results.slice(t,r)},rO=function(e){rS.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rS.recipe.servings}),rS.recipe.servings=e},rL=function(){localStorage.setItem("bookmarks",JSON.stringify(rS.bookmarks))},rx=function(e){rS.bookmarks.push(e),rS.recipe.bookmarked=!0,rL()},rT=function(e){let t=rS.bookmarks.findIndex(t=>t.id===e);rS.bookmarks.splice(t,1),rS.recipe.bookmarked=!1,rL()};!function(){let e=localStorage.getItem("bookmarks");e&&(rS.bookmarks=JSON.parse(e))}();const rP=function(){rS.bookmarks=[],rS.recipe.bookmarked=!1,localStorage.clear("bookmarks")},rM=async function(e){let t=Object.entries(e).filter(([e,t])=>e.startsWith("ingredient")&&t).map(([,e],t)=>{let r=e.replaceAll(" ","").split(",").map(e=>e.trim());if(3!==r.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[n,i,o]=r;return{quantity:n?+n:null,unit:i,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${ry}?key=${rb}`,r);rS.recipe=rE(n),rx(rS.recipe)};var rD={};rD=new URL("icons.c14567a0.svg",import.meta.url).toString();var rq=new class extends rm{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return` <li class="preview">
                <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                    <img src="${this._data.image}" alt="Test" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                          <svg>
                           <use href="${b(rD)}#icon-user"></use>
                          </svg>
                        </div>
                     </div>
                </a>
            </li>`}};class rI extends rm{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rA=new rI;class rC extends rm{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goToPage)})}_generateMarkup(){let{page:e,totalPage:t}=this._data;return 1===e&&e===t?"":e===t&&1!==e?`<button class="btn--inline pagination__btn--prev" 
                data-go-to-page="${e-1}">
                <svg class="search__icon">
                <use href="${b(rD)}#icon-arrow-left"></use>
                </svg>
            <span>Page ${e-1}</span>
            </button>
            <div class="pagination-page_display">
            <span>${e} / ${t}</span>
            </div>
            `:1!==e&&e!==t?`<button class="btn--inline pagination__btn--prev" 
                data-go-to-page="${e-1}">
                <svg class="search__icon">
                <use href="${b(rD)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
               </button>
               <div class="pagination-page_display">
              <span>${e} / ${t}</span>
              </div>
               <button class="btn--inline pagination__btn--next"  
               data-go-to-page="${e+1}">
               <span>Page ${e+1}</span>
                <svg class="search__icon">
                <use href="${b(rD)}#icon-arrow-right"></use>
                </svg>
               </button>`:1===e&&e!==t?`<div class="pagination-page_display">
              <span>${e} / ${t}</span>
              </div>
              <button class="btn--inline pagination__btn--next" 
                        data-go-to-page="${e+1}">
                        <span>Page ${e+1}</span>
                         <svg class="search__icon">
                         <use href="${b(rD)}#icon-arrow-right"></use>
                         </svg>
              </button>`:void 0}}var rH=new rC;class rN extends rm{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a recipe and bookmark it ;(";_message="";addHandlerRender(e){window.addEventListener("load",e)}addHandlerClearBookmarks(e){document.querySelector(".clr_btn").addEventListener("click",t=>{e()})}_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rR=new rN;class rU extends rm{_parentElement=document.querySelector(".upload");_submitHandler;_message="Recipe was uploaded successfully";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerToggleWindow(),this._saveInitialForm()}_saveInitialForm(){this._cloneParentElement=this._parentElement.cloneNode(!0)}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerToggleWindow(){[this._btnClose,this._overlay,this._btnOpen].forEach(e=>{e.addEventListener("click",this.toggleWindow.bind(this))})}displayDefaultForm(){console.log("Changing to default Form"),this._parentElement.innerHTML=this._generateMarkup()}addHandlerUpload(e){document.querySelector(".upload").addEventListener("submit",t=>{t.preventDefault(),console.log("Submit event emitted");let r=Object.fromEntries([...new FormData(this._parentElement)]);this._submitHandler||(this._submitHandler=e),e(r)})}_generateMarkup(){return`<button class="btn--close-modal">&times;</button>
    <form class="upload">
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="pongal " required name="title" type="text" />
        <label>URL</label>
        <input value="TESTS" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="TESTS" required name="image" type="text" />
        <label>Publisher</label>
        <input value="TESTS" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value=",,description"
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value=""
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=""
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>`}}var rz=new rU;document.querySelector(".recipe");const rW=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rv.renderSpinner(),rA.update(rj()),rR.update(rS.bookmarks),await rF(`${ry}/${e}`),rv.render(rS.recipe)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5",e),rv.renderError()}},rB=async function(){try{let e=rw.getQuery();if(!e)return;rA.renderSpinner(),await r$(e);let t=rj();rA.render(t),rH.render(rS.search),rw.clearInputField()}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5",e),rA.renderError()}},rG=async function(e){try{rz.renderSpinner(),await rM(e),rv.render(rS.recipe),rz.renderMessage(),window.history.pushState(null,"",`#${rS.recipe.id}`),rR.render(rS.bookmarks),setTimeout(function(){rz.toggleWindow(),setTimeout(e=>{rz.displayDefaultForm()},1500)},2500)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5",e),rz.renderError(e.message),setTimeout(function(){rz.toggleWindow(),rz.displayDefaultForm()},2500)}};rR.addHandlerRender(function(){rR.render(rS.bookmarks)}),rR.addHandlerClearBookmarks(function(){try{rP(),rR.render(rS.bookmarks),rv.update(rS.recipe)}catch(e){console.log("\uD83D\uDCA5\uD83D\uDCA5 No Bookmarks Yet")}}),rv.addHandlerRender(rW),rv.addHandlerUpdateServings(function(e){rO(e),rv.update(rS.recipe)}),rv.addHandlerAddBookmark(function(){rS.recipe.bookmarked?rT(rS.recipe.id):rx(rS.recipe),rv.update(rS.recipe),rR.render(rS.bookmarks)}),rw.addHandlerSearch(rB),rH.addHandlerClick(function(e){let t=rj(e);rA.render(t),rH.render(rS.search)}),rz.addHandlerUpload(rG);
//# sourceMappingURL=index.cdb2e852.js.map
