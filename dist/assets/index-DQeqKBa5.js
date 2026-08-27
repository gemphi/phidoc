(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))p(_);new MutationObserver(_=>{for(const x of _)if(x.type==="childList")for(const w of x.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&p(w)}).observe(document,{childList:!0,subtree:!0});function a(_){const x={};return _.integrity&&(x.integrity=_.integrity),_.referrerPolicy&&(x.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?x.credentials="include":_.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(_){if(_.ep)return;_.ep=!0;const x=a(_);fetch(_.href,x)}})();function Hp(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ra={exports:{}},Br={},ia={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function Vp(){if(dc)return ie;dc=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),F=Symbol.iterator;function M(m){return m===null||typeof m!="object"?null:(m=F&&m[F]||m["@@iterator"],typeof m=="function"?m:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function R(m,S,te){this.props=m,this.context=S,this.refs=W,this.updater=te||O}R.prototype.isReactComponent={},R.prototype.setState=function(m,S){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,S,"setState")},R.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Z(){}Z.prototype=R.prototype;function H(m,S,te){this.props=m,this.context=S,this.refs=W,this.updater=te||O}var $=H.prototype=new Z;$.constructor=H,X($,R.prototype),$.isPureReactComponent=!0;var I=Array.isArray,re=Object.prototype.hasOwnProperty,fe={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function V(m,S,te){var oe,ae={},le=null,ye=null;if(S!=null)for(oe in S.ref!==void 0&&(ye=S.ref),S.key!==void 0&&(le=""+S.key),S)re.call(S,oe)&&!ee.hasOwnProperty(oe)&&(ae[oe]=S[oe]);var de=arguments.length-2;if(de===1)ae.children=te;else if(1<de){for(var ke=Array(de),sn=0;sn<de;sn++)ke[sn]=arguments[sn+2];ae.children=ke}if(m&&m.defaultProps)for(oe in de=m.defaultProps,de)ae[oe]===void 0&&(ae[oe]=de[oe]);return{$$typeof:l,type:m,key:le,ref:ye,props:ae,_owner:fe.current}}function ce(m,S){return{$$typeof:l,type:m.type,key:S,ref:m.ref,props:m.props,_owner:m._owner}}function Pe(m){return typeof m=="object"&&m!==null&&m.$$typeof===l}function Ue(m){var S={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(te){return S[te]})}var qe=/\/+/g;function Me(m,S){return typeof m=="object"&&m!==null&&m.key!=null?Ue(""+m.key):S.toString(36)}function We(m,S,te,oe,ae){var le=typeof m;(le==="undefined"||le==="boolean")&&(m=null);var ye=!1;if(m===null)ye=!0;else switch(le){case"string":case"number":ye=!0;break;case"object":switch(m.$$typeof){case l:case u:ye=!0}}if(ye)return ye=m,ae=ae(ye),m=oe===""?"."+Me(ye,0):oe,I(ae)?(te="",m!=null&&(te=m.replace(qe,"$&/")+"/"),We(ae,S,te,"",function(sn){return sn})):ae!=null&&(Pe(ae)&&(ae=ce(ae,te+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(qe,"$&/")+"/")+m)),S.push(ae)),1;if(ye=0,oe=oe===""?".":oe+":",I(m))for(var de=0;de<m.length;de++){le=m[de];var ke=oe+Me(le,de);ye+=We(le,S,te,ke,ae)}else if(ke=M(m),typeof ke=="function")for(m=ke.call(m),de=0;!(le=m.next()).done;)le=le.value,ke=oe+Me(le,de++),ye+=We(le,S,te,ke,ae);else if(le==="object")throw S=String(m),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ye}function He(m,S,te){if(m==null)return m;var oe=[],ae=0;return We(m,oe,"","",function(le){return S.call(te,le,ae++)}),oe}function ge(m){if(m._status===-1){var S=m._result;S=S(),S.then(function(te){(m._status===0||m._status===-1)&&(m._status=1,m._result=te)},function(te){(m._status===0||m._status===-1)&&(m._status=2,m._result=te)}),m._status===-1&&(m._status=0,m._result=S)}if(m._status===1)return m._result.default;throw m._result}var Ne={current:null},D={transition:null},G={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:D,ReactCurrentOwner:fe};function A(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:He,forEach:function(m,S,te){He(m,function(){S.apply(this,arguments)},te)},count:function(m){var S=0;return He(m,function(){S++}),S},toArray:function(m){return He(m,function(S){return S})||[]},only:function(m){if(!Pe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},ie.Component=R,ie.Fragment=a,ie.Profiler=_,ie.PureComponent=H,ie.StrictMode=p,ie.Suspense=N,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ie.act=A,ie.cloneElement=function(m,S,te){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var oe=X({},m.props),ae=m.key,le=m.ref,ye=m._owner;if(S!=null){if(S.ref!==void 0&&(le=S.ref,ye=fe.current),S.key!==void 0&&(ae=""+S.key),m.type&&m.type.defaultProps)var de=m.type.defaultProps;for(ke in S)re.call(S,ke)&&!ee.hasOwnProperty(ke)&&(oe[ke]=S[ke]===void 0&&de!==void 0?de[ke]:S[ke])}var ke=arguments.length-2;if(ke===1)oe.children=te;else if(1<ke){de=Array(ke);for(var sn=0;sn<ke;sn++)de[sn]=arguments[sn+2];oe.children=de}return{$$typeof:l,type:m.type,key:ae,ref:le,props:oe,_owner:ye}},ie.createContext=function(m){return m={$$typeof:w,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:x,_context:m},m.Consumer=m},ie.createElement=V,ie.createFactory=function(m){var S=V.bind(null,m);return S.type=m,S},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:E,render:m}},ie.isValidElement=Pe,ie.lazy=function(m){return{$$typeof:q,_payload:{_status:-1,_result:m},_init:ge}},ie.memo=function(m,S){return{$$typeof:z,type:m,compare:S===void 0?null:S}},ie.startTransition=function(m){var S=D.transition;D.transition={};try{m()}finally{D.transition=S}},ie.unstable_act=A,ie.useCallback=function(m,S){return Ne.current.useCallback(m,S)},ie.useContext=function(m){return Ne.current.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m){return Ne.current.useDeferredValue(m)},ie.useEffect=function(m,S){return Ne.current.useEffect(m,S)},ie.useId=function(){return Ne.current.useId()},ie.useImperativeHandle=function(m,S,te){return Ne.current.useImperativeHandle(m,S,te)},ie.useInsertionEffect=function(m,S){return Ne.current.useInsertionEffect(m,S)},ie.useLayoutEffect=function(m,S){return Ne.current.useLayoutEffect(m,S)},ie.useMemo=function(m,S){return Ne.current.useMemo(m,S)},ie.useReducer=function(m,S,te){return Ne.current.useReducer(m,S,te)},ie.useRef=function(m){return Ne.current.useRef(m)},ie.useState=function(m){return Ne.current.useState(m)},ie.useSyncExternalStore=function(m,S,te){return Ne.current.useSyncExternalStore(m,S,te)},ie.useTransition=function(){return Ne.current.useTransition()},ie.version="18.3.1",ie}var pc;function pa(){return pc||(pc=1,ia.exports=Vp()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function Kp(){if(fc)return Br;fc=1;var l=pa(),u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,_=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function w(E,N,z){var q,F={},M=null,O=null;z!==void 0&&(M=""+z),N.key!==void 0&&(M=""+N.key),N.ref!==void 0&&(O=N.ref);for(q in N)p.call(N,q)&&!x.hasOwnProperty(q)&&(F[q]=N[q]);if(E&&E.defaultProps)for(q in N=E.defaultProps,N)F[q]===void 0&&(F[q]=N[q]);return{$$typeof:u,type:E,key:M,ref:O,props:F,_owner:_.current}}return Br.Fragment=a,Br.jsx=w,Br.jsxs=w,Br}var hc;function Qp(){return hc||(hc=1,ra.exports=Kp()),ra.exports}var d=Qp(),ne=pa();const jt=Hp(ne);var io={},oa={exports:{}},on={},sa={exports:{}},aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Gp(){return mc||(mc=1,(function(l){function u(D,G){var A=D.length;D.push(G);e:for(;0<A;){var m=A-1>>>1,S=D[m];if(0<_(S,G))D[m]=G,D[A]=S,A=m;else break e}}function a(D){return D.length===0?null:D[0]}function p(D){if(D.length===0)return null;var G=D[0],A=D.pop();if(A!==G){D[0]=A;e:for(var m=0,S=D.length,te=S>>>1;m<te;){var oe=2*(m+1)-1,ae=D[oe],le=oe+1,ye=D[le];if(0>_(ae,A))le<S&&0>_(ye,ae)?(D[m]=ye,D[le]=A,m=le):(D[m]=ae,D[oe]=A,m=oe);else if(le<S&&0>_(ye,A))D[m]=ye,D[le]=A,m=le;else break e}}return G}function _(D,G){var A=D.sortIndex-G.sortIndex;return A!==0?A:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;l.unstable_now=function(){return x.now()}}else{var w=Date,E=w.now();l.unstable_now=function(){return w.now()-E}}var N=[],z=[],q=1,F=null,M=3,O=!1,X=!1,W=!1,R=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(D){for(var G=a(z);G!==null;){if(G.callback===null)p(z);else if(G.startTime<=D)p(z),G.sortIndex=G.expirationTime,u(N,G);else break;G=a(z)}}function I(D){if(W=!1,$(D),!X)if(a(N)!==null)X=!0,ge(re);else{var G=a(z);G!==null&&Ne(I,G.startTime-D)}}function re(D,G){X=!1,W&&(W=!1,Z(V),V=-1),O=!0;var A=M;try{for($(G),F=a(N);F!==null&&(!(F.expirationTime>G)||D&&!Ue());){var m=F.callback;if(typeof m=="function"){F.callback=null,M=F.priorityLevel;var S=m(F.expirationTime<=G);G=l.unstable_now(),typeof S=="function"?F.callback=S:F===a(N)&&p(N),$(G)}else p(N);F=a(N)}if(F!==null)var te=!0;else{var oe=a(z);oe!==null&&Ne(I,oe.startTime-G),te=!1}return te}finally{F=null,M=A,O=!1}}var fe=!1,ee=null,V=-1,ce=5,Pe=-1;function Ue(){return!(l.unstable_now()-Pe<ce)}function qe(){if(ee!==null){var D=l.unstable_now();Pe=D;var G=!0;try{G=ee(!0,D)}finally{G?Me():(fe=!1,ee=null)}}else fe=!1}var Me;if(typeof H=="function")Me=function(){H(qe)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,He=We.port2;We.port1.onmessage=qe,Me=function(){He.postMessage(null)}}else Me=function(){R(qe,0)};function ge(D){ee=D,fe||(fe=!0,Me())}function Ne(D,G){V=R(function(){D(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_continueExecution=function(){X||O||(X=!0,ge(re))},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_getFirstCallbackNode=function(){return a(N)},l.unstable_next=function(D){switch(M){case 1:case 2:case 3:var G=3;break;default:G=M}var A=M;M=G;try{return D()}finally{M=A}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var A=M;M=D;try{return G()}finally{M=A}},l.unstable_scheduleCallback=function(D,G,A){var m=l.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?m+A:m):A=m,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=A+S,D={id:q++,callback:G,priorityLevel:D,startTime:A,expirationTime:S,sortIndex:-1},A>m?(D.sortIndex=A,u(z,D),a(N)===null&&D===a(z)&&(W?(Z(V),V=-1):W=!0,Ne(I,A-m))):(D.sortIndex=S,u(N,D),X||O||(X=!0,ge(re))),D},l.unstable_shouldYield=Ue,l.unstable_wrapCallback=function(D){var G=M;return function(){var A=M;M=G;try{return D.apply(this,arguments)}finally{M=A}}}})(aa)),aa}var gc;function Yp(){return gc||(gc=1,sa.exports=Gp()),sa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc;function Xp(){if(yc)return on;yc=1;var l=pa(),u=Yp();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,_={};function x(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(_[e]=n,e=0;e<n.length;e++)p.add(n[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},F={};function M(e){return N.call(F,e)?!0:N.call(q,e)?!1:z.test(e)?F[e]=!0:(q[e]=!0,!1)}function O(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,n,t,r){if(n===null||typeof n>"u"||O(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function W(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new W(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Z,H);R[n]=new W(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Z,H);R[n]=new W(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Z,H);R[n]=new W(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,n,t,r){var i=R.hasOwnProperty(n)?R[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(X(n,t,i,r)&&(t=null),r||i===null?M(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var I=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),fe=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Ue=Symbol.for("react.context"),qe=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,m;function S(e){if(m===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);m=n&&n[1]||""}return`
`+m+e}var te=!1;function oe(e,n){if(!e||te)return"";te=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var r=v}Reflect.construct(e,[],n)}else{try{n.call()}catch(v){r=v}e.call(n.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var i=v.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,c=o.length-1;1<=s&&0<=c&&i[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(i[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||i[s]!==o[c]){var f=`
`+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=s&&0<=c);break}}}finally{te=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?S(e):""}function ae(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case fe:return"Portal";case ce:return"Profiler";case V:return"StrictMode";case Me:return"Suspense";case We:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ue:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case qe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case ge:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}function ye(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e){var n=ke(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qr(e){e._valueTracker||(e._valueTracker=sn(e))}function ya(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ke(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uo(e,n){var t=n.checked;return A({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function va(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=de(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function _a(e,n){n=n.checked,n!=null&&$(e,"checked",n,!1)}function co(e,n){_a(e,n);var t=de(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?po(e,n.type,t):n.hasOwnProperty("defaultValue")&&po(e,n.type,de(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function po(e,n,t){(n!=="number"||Gr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var tr=Array.isArray;function Nt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+de(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function fo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return A({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(tr(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:de(t)}}function ka(e,n){var t=de(n.value),r=de(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Sa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Ca=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Gc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function Ea(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function ja(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ea(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Yc=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,n){if(n){if(Yc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function go(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,Rt=null,Dt=null;function Na(e){if(e=Er(e)){if(typeof _o!="function")throw Error(a(280));var n=e.stateNode;n&&(n=_i(n),_o(e.stateNode,e.type,n))}}function Ra(e){Rt?Dt?Dt.push(e):Dt=[e]:Rt=e}function Da(){if(Rt){var e=Rt,n=Dt;if(Dt=Rt=null,Na(e),n)for(e=0;e<n.length;e++)Na(n[e])}}function Ta(e,n){return e(n)}function za(){}var xo=!1;function La(e,n,t){if(xo)return e(n,t);xo=!0;try{return Ta(e,n,t)}finally{xo=!1,(Rt!==null||Dt!==null)&&(za(),Da())}}function or(e,n){var t=e.stateNode;if(t===null)return null;var r=_i(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var wo=!1;if(E)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{wo=!1}function Xc(e,n,t,r,i,o,s,c,f){var v=Array.prototype.slice.call(arguments,3);try{n.apply(t,v)}catch(P){this.onError(P)}}var ar=!1,Xr=null,Zr=!1,ko=null,Zc={onError:function(e){ar=!0,Xr=e}};function Jc(e,n,t,r,i,o,s,c,f){ar=!1,Xr=null,Xc.apply(Zc,arguments)}function ed(e,n,t,r,i,o,s,c,f){if(Jc.apply(this,arguments),ar){if(ar){var v=Xr;ar=!1,Xr=null}else throw Error(a(198));Zr||(Zr=!0,ko=v)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ma(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ia(e){if(dt(e)!==e)throw Error(a(188))}function nd(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ia(i),e;if(o===r)return Ia(i),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,r=o;break}if(c===r){s=!0,r=i,t=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===t){s=!0,t=o,r=i;break}if(c===r){s=!0,r=o,t=i;break}c=c.sibling}if(!s)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function Aa(e){return e=nd(e),e!==null?Oa(e):null}function Oa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Oa(e);if(n!==null)return n;e=e.sibling}return null}var ba=u.unstable_scheduleCallback,Fa=u.unstable_cancelCallback,td=u.unstable_shouldYield,rd=u.unstable_requestPaint,De=u.unstable_now,id=u.unstable_getCurrentPriorityLevel,So=u.unstable_ImmediatePriority,Ua=u.unstable_UserBlockingPriority,Jr=u.unstable_NormalPriority,od=u.unstable_LowPriority,Ba=u.unstable_IdlePriority,ei=null,Cn=null;function sd(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:ud,ad=Math.log,ld=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(ad(e)/ld|0)|0}var ni=64,ti=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var c=s&~i;c!==0?r=lr(c):(o&=s,o!==0&&(r=lr(o)))}else s=t&~i,s!==0?r=lr(s):o!==0&&(r=lr(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),i=1<<t,r|=e[t],n&=~i;return r}function cd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-yn(o),c=1<<s,f=i[s];f===-1?((c&t)===0||(c&r)!==0)&&(i[s]=cd(c,n)):f<=n&&(e.expiredLanes|=c),o&=~c}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $a(){var e=ni;return ni<<=1,(ni&4194240)===0&&(ni=64),e}function Co(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function pd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-yn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Eo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var pe=0;function qa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wa,jo,Ha,Va,Ka,No=!1,ii=[],$n=null,qn=null,Wn=null,cr=new Map,dr=new Map,Hn=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(n.pointerId)}}function pr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Er(n),n!==null&&jo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function hd(e,n,t,r,i){switch(n){case"focusin":return $n=pr($n,e,n,t,r,i),!0;case"dragenter":return qn=pr(qn,e,n,t,r,i),!0;case"mouseover":return Wn=pr(Wn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return cr.set(o,pr(cr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,dr.set(o,pr(dr.get(o)||null,e,n,t,r,i)),!0}return!1}function Ga(e){var n=pt(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ma(t),n!==null){e.blockedOn=n,Ka(e.priority,function(){Ha(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Do(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);yo=r,t.target.dispatchEvent(r),yo=null}else return n=Er(t),n!==null&&jo(n),e.blockedOn=t,!1;n.shift()}return!0}function Ya(e,n,t){oi(e)&&t.delete(n)}function md(){No=!1,$n!==null&&oi($n)&&($n=null),qn!==null&&oi(qn)&&(qn=null),Wn!==null&&oi(Wn)&&(Wn=null),cr.forEach(Ya),dr.forEach(Ya)}function fr(e,n){e.blockedOn===n&&(e.blockedOn=null,No||(No=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,md)))}function hr(e){function n(i){return fr(i,e)}if(0<ii.length){fr(ii[0],e);for(var t=1;t<ii.length;t++){var r=ii[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&fr($n,e),qn!==null&&fr(qn,e),Wn!==null&&fr(Wn,e),cr.forEach(n),dr.forEach(n),t=0;t<Hn.length;t++)r=Hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(t=Hn[0],t.blockedOn===null);)Ga(t),t.blockedOn===null&&Hn.shift()}var Tt=I.ReactCurrentBatchConfig,si=!0;function gd(e,n,t,r){var i=pe,o=Tt.transition;Tt.transition=null;try{pe=1,Ro(e,n,t,r)}finally{pe=i,Tt.transition=o}}function yd(e,n,t,r){var i=pe,o=Tt.transition;Tt.transition=null;try{pe=4,Ro(e,n,t,r)}finally{pe=i,Tt.transition=o}}function Ro(e,n,t,r){if(si){var i=Do(e,n,t,r);if(i===null)Ko(e,n,r,ai,t),Qa(e,r);else if(hd(i,e,n,t,r))r.stopPropagation();else if(Qa(e,r),n&4&&-1<fd.indexOf(e)){for(;i!==null;){var o=Er(i);if(o!==null&&Wa(o),o=Do(e,n,t,r),o===null&&Ko(e,n,r,ai,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ko(e,n,r,null,t)}}var ai=null;function Do(e,n,t,r){if(ai=null,e=vo(r),e=pt(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ma(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ai=e,null}function Xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(id()){case So:return 1;case Ua:return 4;case Jr:case od:return 16;case Ba:return 536870912;default:return 16}default:return 16}}var Vn=null,To=null,li=null;function Za(){if(li)return li;var e,n=To,t=n.length,r,i="value"in Vn?Vn.value:Vn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return li=i.slice(e,1<r?1-r:void 0)}function ui(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Ja(){return!1}function an(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ci:Ja,this.isPropagationStopped=Ja,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=an(zt),mr=A({},zt,{view:0,detail:0}),vd=an(mr),Lo,Mo,gr,di=A({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Lo=e.screenX-gr.screenX,Mo=e.screenY-gr.screenY):Mo=Lo=0,gr=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),el=an(di),_d=A({},di,{dataTransfer:0}),xd=an(_d),wd=A({},mr,{relatedTarget:0}),Io=an(wd),kd=A({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Sd=an(kd),Pd=A({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cd=an(Pd),Ed=A({},zt,{data:0}),nl=an(Ed),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rd[e])?!!n[e]:!1}function Ao(){return Dd}var Td=A({},mr,{key:function(e){if(e.key){var n=jd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=an(Td),Ld=A({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=an(Ld),Md=A({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),Id=an(Md),Ad=A({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=an(Ad),bd=A({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=an(bd),Ud=[9,13,27,32],Oo=E&&"CompositionEvent"in window,yr=null;E&&"documentMode"in document&&(yr=document.documentMode);var Bd=E&&"TextEvent"in window&&!yr,rl=E&&(!Oo||yr&&8<yr&&11>=yr),il=" ",ol=!1;function sl(e,n){switch(e){case"keyup":return Ud.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function al(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function $d(e,n){switch(e){case"compositionend":return al(n);case"keypress":return n.which!==32?null:(ol=!0,il);case"textInput":return e=n.data,e===il&&ol?null:e;default:return null}}function qd(e,n){if(Lt)return e==="compositionend"||!Oo&&sl(e,n)?(e=Za(),li=To=Vn=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rl&&n.locale!=="ko"?null:n.data;default:return null}}var Wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wd[e.type]:n==="textarea"}function ul(e,n,t,r){Ra(r),n=gi(n,"onChange"),0<n.length&&(t=new zo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var vr=null,_r=null;function Hd(e){jl(e,0)}function pi(e){var n=bt(e);if(ya(n))return e}function Vd(e,n){if(e==="change")return n}var cl=!1;if(E){var bo;if(E){var Fo="oninput"in document;if(!Fo){var dl=document.createElement("div");dl.setAttribute("oninput","return;"),Fo=typeof dl.oninput=="function"}bo=Fo}else bo=!1;cl=bo&&(!document.documentMode||9<document.documentMode)}function pl(){vr&&(vr.detachEvent("onpropertychange",fl),_r=vr=null)}function fl(e){if(e.propertyName==="value"&&pi(_r)){var n=[];ul(n,_r,e,vo(e)),La(Hd,n)}}function Kd(e,n,t){e==="focusin"?(pl(),vr=n,_r=t,vr.attachEvent("onpropertychange",fl)):e==="focusout"&&pl()}function Qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(_r)}function Gd(e,n){if(e==="click")return pi(n)}function Yd(e,n){if(e==="input"||e==="change")return pi(n)}function Xd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:Xd;function xr(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!N.call(n,i)||!vn(e[i],n[i]))return!1}return!0}function hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,n){var t=hl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hl(t)}}function gl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yl(){for(var e=window,n=Gr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Gr(e.document)}return n}function Uo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zd(e){var n=yl(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gl(t.ownerDocument.documentElement,t)){if(r!==null&&Uo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ml(t,o);var s=ml(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=E&&"documentMode"in document&&11>=document.documentMode,Mt=null,Bo=null,wr=null,$o=!1;function vl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$o||Mt==null||Mt!==Gr(r)||(r=Mt,"selectionStart"in r&&Uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&xr(wr,r)||(wr=r,r=gi(Bo,"onSelect"),0<r.length&&(n=new zo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mt)))}function fi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var It={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},qo={},_l={};E&&(_l=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function hi(e){if(qo[e])return qo[e];if(!It[e])return e;var n=It[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _l)return qo[e]=n[t];return e}var xl=hi("animationend"),wl=hi("animationiteration"),kl=hi("animationstart"),Sl=hi("transitionend"),Pl=new Map,Cl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){Pl.set(e,n),x(n,[e])}for(var Wo=0;Wo<Cl.length;Wo++){var Ho=Cl[Wo],ep=Ho.toLowerCase(),np=Ho[0].toUpperCase()+Ho.slice(1);Kn(ep,"on"+np)}Kn(xl,"onAnimationEnd"),Kn(wl,"onAnimationIteration"),Kn(kl,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Sl,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function El(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ed(r,n,void 0,e),e.currentTarget=null}function jl(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var c=r[s],f=c.instance,v=c.currentTarget;if(c=c.listener,f!==o&&i.isPropagationStopped())break e;El(i,c,v),o=f}else for(s=0;s<r.length;s++){if(c=r[s],f=c.instance,v=c.currentTarget,c=c.listener,f!==o&&i.isPropagationStopped())break e;El(i,c,v),o=f}}}if(Zr)throw e=ko,Zr=!1,ko=null,e}function _e(e,n){var t=n[Jo];t===void 0&&(t=n[Jo]=new Set);var r=e+"__bubble";t.has(r)||(Nl(n,e,2,!1),t.add(r))}function Vo(e,n,t){var r=0;n&&(r|=4),Nl(t,e,r,n)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[mi]){e[mi]=!0,p.forEach(function(t){t!=="selectionchange"&&(tp.has(t)||Vo(t,!1,e),Vo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mi]||(n[mi]=!0,Vo("selectionchange",!1,n))}}function Nl(e,n,t,r){switch(Xa(n)){case 1:var i=gd;break;case 4:i=yd;break;default:i=Ro}t=i.bind(null,n,t,e),i=void 0,!wo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ko(e,n,t,r,i){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;s=s.return}for(;c!==null;){if(s=pt(c),s===null)return;if(f=s.tag,f===5||f===6){r=o=s;continue e}c=c.parentNode}}r=r.return}La(function(){var v=o,P=vo(t),C=[];e:{var k=Pl.get(e);if(k!==void 0){var T=zo,b=e;switch(e){case"keypress":if(ui(t)===0)break e;case"keydown":case"keyup":T=zd;break;case"focusin":b="focus",T=Io;break;case"focusout":b="blur",T=Io;break;case"beforeblur":case"afterblur":T=Io;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=el;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Id;break;case xl:case wl:case kl:T=Sd;break;case Sl:T=Od;break;case"scroll":T=vd;break;case"wheel":T=Fd;break;case"copy":case"cut":case"paste":T=Cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=tl}var U=(n&4)!==0,Te=!U&&e==="scroll",g=U?k!==null?k+"Capture":null:k;U=[];for(var h=v,y;h!==null;){y=h;var j=y.stateNode;if(y.tag===5&&j!==null&&(y=j,g!==null&&(j=or(h,g),j!=null&&U.push(Pr(h,j,y)))),Te)break;h=h.return}0<U.length&&(k=new T(k,b,null,t,P),C.push({event:k,listeners:U}))}}if((n&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",k&&t!==yo&&(b=t.relatedTarget||t.fromElement)&&(pt(b)||b[zn]))break e;if((T||k)&&(k=P.window===P?P:(k=P.ownerDocument)?k.defaultView||k.parentWindow:window,T?(b=t.relatedTarget||t.toElement,T=v,b=b?pt(b):null,b!==null&&(Te=dt(b),b!==Te||b.tag!==5&&b.tag!==6)&&(b=null)):(T=null,b=v),T!==b)){if(U=el,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(U=tl,j="onPointerLeave",g="onPointerEnter",h="pointer"),Te=T==null?k:bt(T),y=b==null?k:bt(b),k=new U(j,h+"leave",T,t,P),k.target=Te,k.relatedTarget=y,j=null,pt(P)===v&&(U=new U(g,h+"enter",b,t,P),U.target=y,U.relatedTarget=Te,j=U),Te=j,T&&b)n:{for(U=T,g=b,h=0,y=U;y;y=At(y))h++;for(y=0,j=g;j;j=At(j))y++;for(;0<h-y;)U=At(U),h--;for(;0<y-h;)g=At(g),y--;for(;h--;){if(U===g||g!==null&&U===g.alternate)break n;U=At(U),g=At(g)}U=null}else U=null;T!==null&&Rl(C,k,T,U,!1),b!==null&&Te!==null&&Rl(C,Te,b,U,!0)}}e:{if(k=v?bt(v):window,T=k.nodeName&&k.nodeName.toLowerCase(),T==="select"||T==="input"&&k.type==="file")var B=Vd;else if(ll(k))if(cl)B=Yd;else{B=Qd;var K=Kd}else(T=k.nodeName)&&T.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(B=Gd);if(B&&(B=B(e,v))){ul(C,B,t,P);break e}K&&K(e,k,v),e==="focusout"&&(K=k._wrapperState)&&K.controlled&&k.type==="number"&&po(k,"number",k.value)}switch(K=v?bt(v):window,e){case"focusin":(ll(K)||K.contentEditable==="true")&&(Mt=K,Bo=v,wr=null);break;case"focusout":wr=Bo=Mt=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,vl(C,t,P);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":vl(C,t,P)}var Q;if(Oo)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Lt?sl(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(rl&&t.locale!=="ko"&&(Lt||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Lt&&(Q=Za()):(Vn=P,To="value"in Vn?Vn.value:Vn.textContent,Lt=!0)),K=gi(v,Y),0<K.length&&(Y=new nl(Y,e,null,t,P),C.push({event:Y,listeners:K}),Q?Y.data=Q:(Q=al(t),Q!==null&&(Y.data=Q)))),(Q=Bd?$d(e,t):qd(e,t))&&(v=gi(v,"onBeforeInput"),0<v.length&&(P=new nl("onBeforeInput","beforeinput",null,t,P),C.push({event:P,listeners:v}),P.data=Q))}jl(C,n)})}function Pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function gi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=or(e,t),o!=null&&r.unshift(Pr(e,o,i)),o=or(e,n),o!=null&&r.push(Pr(e,o,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rl(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var c=t,f=c.alternate,v=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&v!==null&&(c=v,i?(f=or(t,o),f!=null&&s.unshift(Pr(t,f,c))):i||(f=or(t,o),f!=null&&s.push(Pr(t,f,c)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var rp=/\r\n?/g,ip=/\u0000|\uFFFD/g;function Dl(e){return(typeof e=="string"?e:""+e).replace(rp,`
`).replace(ip,"")}function yi(e,n,t){if(n=Dl(n),Dl(e)!==n&&t)throw Error(a(425))}function vi(){}var Qo=null,Go=null;function Yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,Tl=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tl<"u"?function(e){return Tl.resolve(null).then(e).catch(ap)}:Xo;function ap(e){setTimeout(function(){throw e})}function Zo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),hr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);hr(n)}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function zl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ot=Math.random().toString(36).slice(2),En="__reactFiber$"+Ot,Cr="__reactProps$"+Ot,zn="__reactContainer$"+Ot,Jo="__reactEvents$"+Ot,lp="__reactListeners$"+Ot,up="__reactHandles$"+Ot;function pt(e){var n=e[En];if(n)return n;for(var t=e.parentNode;t;){if(n=t[zn]||t[En]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=zl(e);e!==null;){if(t=e[En])return t;e=zl(e)}return n}e=t,t=e.parentNode}return null}function Er(e){return e=e[En]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function _i(e){return e[Cr]||null}var es=[],Ft=-1;function Gn(e){return{current:e}}function xe(e){0>Ft||(e.current=es[Ft],es[Ft]=null,Ft--)}function ve(e,n){Ft++,es[Ft]=e.current,e.current=n}var Yn={},Ve=Gn(Yn),Je=Gn(!1),ft=Yn;function Ut(e,n){var t=e.type.contextTypes;if(!t)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function en(e){return e=e.childContextTypes,e!=null}function xi(){xe(Je),xe(Ve)}function Ll(e,n,t){if(Ve.current!==Yn)throw Error(a(168));ve(Ve,n),ve(Je,t)}function Ml(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(a(108,ye(e)||"Unknown",i));return A({},t,r)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,ft=Ve.current,ve(Ve,e),ve(Je,Je.current),!0}function Il(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=Ml(e,n,ft),r.__reactInternalMemoizedMergedChildContext=e,xe(Je),xe(Ve),ve(Ve,e)):xe(Je),ve(Je,t)}var Ln=null,ki=!1,ns=!1;function Al(e){Ln===null?Ln=[e]:Ln.push(e)}function cp(e){ki=!0,Al(e)}function Xn(){if(!ns&&Ln!==null){ns=!0;var e=0,n=pe;try{var t=Ln;for(pe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ln=null,ki=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(e+1)),ba(So,Xn),i}finally{pe=n,ns=!1}}return null}var Bt=[],$t=0,Si=null,Pi=0,dn=[],pn=0,ht=null,Mn=1,In="";function mt(e,n){Bt[$t++]=Pi,Bt[$t++]=Si,Si=e,Pi=n}function Ol(e,n,t){dn[pn++]=Mn,dn[pn++]=In,dn[pn++]=ht,ht=e;var r=Mn;e=In;var i=32-yn(r)-1;r&=~(1<<i),t+=1;var o=32-yn(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Mn=1<<32-yn(n)+i|t<<i|r,In=o+e}else Mn=1<<o|t<<i|r,In=e}function ts(e){e.return!==null&&(mt(e,1),Ol(e,1,0))}function rs(e){for(;e===Si;)Si=Bt[--$t],Bt[$t]=null,Pi=Bt[--$t],Bt[$t]=null;for(;e===ht;)ht=dn[--pn],dn[pn]=null,In=dn[--pn],dn[pn]=null,Mn=dn[--pn],dn[pn]=null}var ln=null,un=null,Se=!1,_n=null;function bl(e,n){var t=gn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ln=e,un=Qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ln=e,un=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:Mn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=gn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ln=e,un=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function os(e){if(Se){var n=un;if(n){var t=n;if(!Fl(e,n)){if(is(e))throw Error(a(418));n=Qn(t.nextSibling);var r=ln;n&&Fl(e,n)?bl(r,t):(e.flags=e.flags&-4097|2,Se=!1,ln=e)}}else{if(is(e))throw Error(a(418));e.flags=e.flags&-4097|2,Se=!1,ln=e}}}function Ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ln=e}function Ci(e){if(e!==ln)return!1;if(!Se)return Ul(e),Se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yo(e.type,e.memoizedProps)),n&&(n=un)){if(is(e))throw Bl(),Error(a(418));for(;n;)bl(e,n),n=Qn(n.nextSibling)}if(Ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){un=Qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}un=null}}else un=ln?Qn(e.stateNode.nextSibling):null;return!0}function Bl(){for(var e=un;e;)e=Qn(e.nextSibling)}function qt(){un=ln=null,Se=!1}function ss(e){_n===null?_n=[e]:_n.push(e)}var dp=I.ReactCurrentBatchConfig;function jr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var c=i.refs;s===null?delete c[o]:c[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function Ei(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $l(e){var n=e._init;return n(e._payload)}function ql(e){function n(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function t(g,h){if(!e)return null;for(;h!==null;)n(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=ot(g,h),g.index=0,g.sibling=null,g}function o(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,h,y,j){return h===null||h.tag!==6?(h=Xs(y,g.mode,j),h.return=g,h):(h=i(h,y),h.return=g,h)}function f(g,h,y,j){var B=y.type;return B===ee?P(g,h,y.props.children,j,y.key):h!==null&&(h.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ge&&$l(B)===h.type)?(j=i(h,y.props),j.ref=jr(g,h,y),j.return=g,j):(j=Yi(y.type,y.key,y.props,null,g.mode,j),j.ref=jr(g,h,y),j.return=g,j)}function v(g,h,y,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Zs(y,g.mode,j),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function P(g,h,y,j,B){return h===null||h.tag!==7?(h=St(y,g.mode,j,B),h.return=g,h):(h=i(h,y),h.return=g,h)}function C(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Xs(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case re:return y=Yi(h.type,h.key,h.props,null,g.mode,y),y.ref=jr(g,null,h),y.return=g,y;case fe:return h=Zs(h,g.mode,y),h.return=g,h;case ge:var j=h._init;return C(g,j(h._payload),y)}if(tr(h)||G(h))return h=St(h,g.mode,y,null),h.return=g,h;Ei(g,h)}return null}function k(g,h,y,j){var B=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return B!==null?null:c(g,h,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case re:return y.key===B?f(g,h,y,j):null;case fe:return y.key===B?v(g,h,y,j):null;case ge:return B=y._init,k(g,h,B(y._payload),j)}if(tr(y)||G(y))return B!==null?null:P(g,h,y,j,null);Ei(g,y)}return null}function T(g,h,y,j,B){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(y)||null,c(h,g,""+j,B);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case re:return g=g.get(j.key===null?y:j.key)||null,f(h,g,j,B);case fe:return g=g.get(j.key===null?y:j.key)||null,v(h,g,j,B);case ge:var K=j._init;return T(g,h,y,K(j._payload),B)}if(tr(j)||G(j))return g=g.get(y)||null,P(h,g,j,B,null);Ei(h,j)}return null}function b(g,h,y,j){for(var B=null,K=null,Q=h,Y=h=0,Fe=null;Q!==null&&Y<y.length;Y++){Q.index>Y?(Fe=Q,Q=null):Fe=Q.sibling;var ue=k(g,Q,y[Y],j);if(ue===null){Q===null&&(Q=Fe);break}e&&Q&&ue.alternate===null&&n(g,Q),h=o(ue,h,Y),K===null?B=ue:K.sibling=ue,K=ue,Q=Fe}if(Y===y.length)return t(g,Q),Se&&mt(g,Y),B;if(Q===null){for(;Y<y.length;Y++)Q=C(g,y[Y],j),Q!==null&&(h=o(Q,h,Y),K===null?B=Q:K.sibling=Q,K=Q);return Se&&mt(g,Y),B}for(Q=r(g,Q);Y<y.length;Y++)Fe=T(Q,g,Y,y[Y],j),Fe!==null&&(e&&Fe.alternate!==null&&Q.delete(Fe.key===null?Y:Fe.key),h=o(Fe,h,Y),K===null?B=Fe:K.sibling=Fe,K=Fe);return e&&Q.forEach(function(st){return n(g,st)}),Se&&mt(g,Y),B}function U(g,h,y,j){var B=G(y);if(typeof B!="function")throw Error(a(150));if(y=B.call(y),y==null)throw Error(a(151));for(var K=B=null,Q=h,Y=h=0,Fe=null,ue=y.next();Q!==null&&!ue.done;Y++,ue=y.next()){Q.index>Y?(Fe=Q,Q=null):Fe=Q.sibling;var st=k(g,Q,ue.value,j);if(st===null){Q===null&&(Q=Fe);break}e&&Q&&st.alternate===null&&n(g,Q),h=o(st,h,Y),K===null?B=st:K.sibling=st,K=st,Q=Fe}if(ue.done)return t(g,Q),Se&&mt(g,Y),B;if(Q===null){for(;!ue.done;Y++,ue=y.next())ue=C(g,ue.value,j),ue!==null&&(h=o(ue,h,Y),K===null?B=ue:K.sibling=ue,K=ue);return Se&&mt(g,Y),B}for(Q=r(g,Q);!ue.done;Y++,ue=y.next())ue=T(Q,g,Y,ue.value,j),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?Y:ue.key),h=o(ue,h,Y),K===null?B=ue:K.sibling=ue,K=ue);return e&&Q.forEach(function(Wp){return n(g,Wp)}),Se&&mt(g,Y),B}function Te(g,h,y,j){if(typeof y=="object"&&y!==null&&y.type===ee&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case re:e:{for(var B=y.key,K=h;K!==null;){if(K.key===B){if(B=y.type,B===ee){if(K.tag===7){t(g,K.sibling),h=i(K,y.props.children),h.return=g,g=h;break e}}else if(K.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ge&&$l(B)===K.type){t(g,K.sibling),h=i(K,y.props),h.ref=jr(g,K,y),h.return=g,g=h;break e}t(g,K);break}else n(g,K);K=K.sibling}y.type===ee?(h=St(y.props.children,g.mode,j,y.key),h.return=g,g=h):(j=Yi(y.type,y.key,y.props,null,g.mode,j),j.ref=jr(g,h,y),j.return=g,g=j)}return s(g);case fe:e:{for(K=y.key;h!==null;){if(h.key===K)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){t(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{t(g,h);break}else n(g,h);h=h.sibling}h=Zs(y,g.mode,j),h.return=g,g=h}return s(g);case ge:return K=y._init,Te(g,h,K(y._payload),j)}if(tr(y))return b(g,h,y,j);if(G(y))return U(g,h,y,j);Ei(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(t(g,h.sibling),h=i(h,y),h.return=g,g=h):(t(g,h),h=Xs(y,g.mode,j),h.return=g,g=h),s(g)):t(g,h)}return Te}var Wt=ql(!0),Wl=ql(!1),ji=Gn(null),Ni=null,Ht=null,as=null;function ls(){as=Ht=Ni=null}function us(e){var n=ji.current;xe(ji),e._currentValue=n}function cs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Vt(e,n){Ni=e,as=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(nn=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Ni===null)throw Error(a(308));Ht=e,Ni.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var gt=null;function ds(e){gt===null?gt=[e]:gt.push(e)}function Hl(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ds(n)):(t.next=i.next,i.next=t),n.interleaved=t,An(e,r)}function An(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Zn=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,An(e,t)}return i=r.interleaved,i===null?(n.next=n,ds(r)):(n.next=i.next,i.next=n),r.interleaved=n,An(e,t)}function Ri(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Eo(e,t)}}function Kl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Di(e,n,t,r){var i=e.updateQueue;Zn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,v=f.next;f.next=null,s===null?o=v:s.next=v,s=f;var P=e.alternate;P!==null&&(P=P.updateQueue,c=P.lastBaseUpdate,c!==s&&(c===null?P.firstBaseUpdate=v:c.next=v,P.lastBaseUpdate=f))}if(o!==null){var C=i.baseState;s=0,P=v=f=null,c=o;do{var k=c.lane,T=c.eventTime;if((r&k)===k){P!==null&&(P=P.next={eventTime:T,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,U=c;switch(k=n,T=t,U.tag){case 1:if(b=U.payload,typeof b=="function"){C=b.call(T,C,k);break e}C=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=U.payload,k=typeof b=="function"?b.call(T,C,k):b,k==null)break e;C=A({},C,k);break e;case 2:Zn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[c]:k.push(c))}else T={eventTime:T,lane:k,tag:c.tag,payload:c.payload,callback:c.callback,next:null},P===null?(v=P=T,f=C):P=P.next=T,s|=k;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;k=c,c=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(P===null&&(f=C),i.baseState=f,i.firstBaseUpdate=v,i.lastBaseUpdate=P,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);_t|=s,e.lanes=s,e.memoizedState=C}}function Ql(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var Nr={},jn=Gn(Nr),Rr=Gn(Nr),Dr=Gn(Nr);function yt(e){if(e===Nr)throw Error(a(174));return e}function fs(e,n){switch(ve(Dr,n),ve(Rr,e),ve(jn,Nr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ho(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ho(n,e)}xe(jn),ve(jn,n)}function Kt(){xe(jn),xe(Rr),xe(Dr)}function Gl(e){yt(Dr.current);var n=yt(jn.current),t=ho(n,e.type);n!==t&&(ve(Rr,e),ve(jn,t))}function hs(e){Rr.current===e&&(xe(jn),xe(Rr))}var Ce=Gn(0);function Ti(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ms=[];function gs(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var zi=I.ReactCurrentDispatcher,ys=I.ReactCurrentBatchConfig,vt=0,Ee=null,Ie=null,Oe=null,Li=!1,Tr=!1,zr=0,pp=0;function Ke(){throw Error(a(321))}function vs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function _s(e,n,t,r,i,o){if(vt=o,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zi.current=e===null||e.memoizedState===null?gp:yp,e=t(r,i),Tr){o=0;do{if(Tr=!1,zr=0,25<=o)throw Error(a(301));o+=1,Oe=Ie=null,n.updateQueue=null,zi.current=vp,e=t(r,i)}while(Tr)}if(zi.current=Ai,n=Ie!==null&&Ie.next!==null,vt=0,Oe=Ie=Ee=null,Li=!1,n)throw Error(a(300));return e}function xs(){var e=zr!==0;return zr=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ee.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function hn(){if(Ie===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Oe===null?Ee.memoizedState:Oe.next;if(n!==null)Oe=n,Ie=e;else{if(e===null)throw Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Oe===null?Ee.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Lr(e,n){return typeof n=="function"?n(e):n}function ws(e){var n=hn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=s=null,f=null,v=o;do{var P=v.lane;if((vt&P)===P)f!==null&&(f=f.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var C={lane:P,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};f===null?(c=f=C,s=r):f=f.next=C,Ee.lanes|=P,_t|=P}v=v.next}while(v!==null&&v!==o);f===null?s=r:f.next=c,vn(r,n.memoizedState)||(nn=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=f,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,_t|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ks(e){var n=hn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);vn(o,n.memoizedState)||(nn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Yl(){}function Xl(e,n){var t=Ee,r=hn(),i=n(),o=!vn(r.memoizedState,i);if(o&&(r.memoizedState=i,nn=!0),r=r.queue,Ss(eu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Oe!==null&&Oe.memoizedState.tag&1){if(t.flags|=2048,Mr(9,Jl.bind(null,t,r,i,n),void 0,null),be===null)throw Error(a(349));(vt&30)!==0||Zl(t,n,i)}return i}function Zl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jl(e,n,t,r){n.value=t,n.getSnapshot=r,nu(n)&&tu(e)}function eu(e,n,t){return t(function(){nu(n)&&tu(e)})}function nu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function tu(e){var n=An(e,1);n!==null&&Sn(n,e,1,-1)}function ru(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=mp.bind(null,Ee,e),[n.memoizedState,e]}function Mr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function iu(){return hn().memoizedState}function Mi(e,n,t,r){var i=Nn();Ee.flags|=e,i.memoizedState=Mr(1|n,t,void 0,r===void 0?null:r)}function Ii(e,n,t,r){var i=hn();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var s=Ie.memoizedState;if(o=s.destroy,r!==null&&vs(r,s.deps)){i.memoizedState=Mr(n,t,o,r);return}}Ee.flags|=e,i.memoizedState=Mr(1|n,t,o,r)}function ou(e,n){return Mi(8390656,8,e,n)}function Ss(e,n){return Ii(2048,8,e,n)}function su(e,n){return Ii(4,2,e,n)}function au(e,n){return Ii(4,4,e,n)}function lu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function uu(e,n,t){return t=t!=null?t.concat([e]):null,Ii(4,4,lu.bind(null,n,e),t)}function Ps(){}function cu(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function du(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function pu(e,n,t){return(vt&21)===0?(e.baseState&&(e.baseState=!1,nn=!0),e.memoizedState=t):(vn(t,n)||(t=$a(),Ee.lanes|=t,_t|=t,e.baseState=!0),n)}function fp(e,n){var t=pe;pe=t!==0&&4>t?t:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),n()}finally{pe=t,ys.transition=r}}function fu(){return hn().memoizedState}function hp(e,n,t){var r=rt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},hu(e))mu(n,t);else if(t=Hl(e,n,t,r),t!==null){var i=Ze();Sn(t,e,r,i),gu(t,n,r)}}function mp(e,n,t){var r=rt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(hu(e))mu(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,c=o(s,t);if(i.hasEagerState=!0,i.eagerState=c,vn(c,s)){var f=n.interleaved;f===null?(i.next=i,ds(n)):(i.next=f.next,f.next=i),n.interleaved=i;return}}catch{}finally{}t=Hl(e,n,i,r),t!==null&&(i=Ze(),Sn(t,e,r,i),gu(t,n,r))}}function hu(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function mu(e,n){Tr=Li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gu(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Eo(e,t)}}var Ai={readContext:fn,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},gp={readContext:fn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:ou,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mi(4194308,4,lu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mi(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=hp.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:ru,useDebugValue:Ps,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=ru(!1),n=e[0];return e=fp.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ee,i=Nn();if(Se){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),be===null)throw Error(a(349));(vt&30)!==0||Zl(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ou(eu.bind(null,r,o,e),[e]),r.flags|=2048,Mr(9,Jl.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Nn(),n=be.identifierPrefix;if(Se){var t=In,r=Mn;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=pp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yp={readContext:fn,useCallback:cu,useContext:fn,useEffect:Ss,useImperativeHandle:uu,useInsertionEffect:su,useLayoutEffect:au,useMemo:du,useReducer:ws,useRef:iu,useState:function(){return ws(Lr)},useDebugValue:Ps,useDeferredValue:function(e){var n=hn();return pu(n,Ie.memoizedState,e)},useTransition:function(){var e=ws(Lr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Yl,useSyncExternalStore:Xl,useId:fu,unstable_isNewReconciler:!1},vp={readContext:fn,useCallback:cu,useContext:fn,useEffect:Ss,useImperativeHandle:uu,useInsertionEffect:su,useLayoutEffect:au,useMemo:du,useReducer:ks,useRef:iu,useState:function(){return ks(Lr)},useDebugValue:Ps,useDeferredValue:function(e){var n=hn();return Ie===null?n.memoizedState=e:pu(n,Ie.memoizedState,e)},useTransition:function(){var e=ks(Lr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Yl,useSyncExternalStore:Xl,useId:fu,unstable_isNewReconciler:!1};function xn(e,n){if(e&&e.defaultProps){n=A({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:A({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Oi={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ze(),i=rt(e),o=On(r,i);o.payload=n,t!=null&&(o.callback=t),n=Jn(e,o,i),n!==null&&(Sn(n,e,i,r),Ri(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ze(),i=rt(e),o=On(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Jn(e,o,i),n!==null&&(Sn(n,e,i,r),Ri(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ze(),r=rt(e),i=On(t,r);i.tag=2,n!=null&&(i.callback=n),n=Jn(e,i,r),n!==null&&(Sn(n,e,r,t),Ri(n,e,r))}};function yu(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(i,o):!0}function vu(e,n,t){var r=!1,i=Yn,o=n.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=en(n)?ft:Ve.current,r=n.contextTypes,o=(r=r!=null)?Ut(e,i):Yn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Oi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function _u(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Oi.enqueueReplaceState(n,n.state,null)}function Es(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ps(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=en(n)?ft:Ve.current,i.context=Ut(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Cs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Oi.enqueueReplaceState(i,i.state,null),Di(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qt(e,n){try{var t="",r=n;do t+=ae(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function js(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ns(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function xu(e,n,t){t=On(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Wi||(Wi=!0,qs=r),Ns(e,n)},t}function wu(e,n,t){t=On(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ns(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ns(e,n),typeof r!="function"&&(nt===null?nt=new Set([this]):nt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ku(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Lp.bind(null,e,n,t),n.then(e,e))}function Su(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pu(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=On(-1,1),n.tag=2,Jn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xp=I.ReactCurrentOwner,nn=!1;function Xe(e,n,t,r){n.child=e===null?Wl(n,null,t,r):Wt(n,e.child,t,r)}function Cu(e,n,t,r,i){t=t.render;var o=n.ref;return Vt(n,i),r=_s(e,n,t,r,o,i),t=xs(),e!==null&&!nn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bn(e,n,i)):(Se&&t&&ts(n),n.flags|=1,Xe(e,n,r,i),n.child)}function Eu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ys(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ju(e,n,o,r,i)):(e=Yi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(s,r)&&e.ref===n.ref)return bn(e,n,i)}return n.flags|=1,e=ot(o,r),e.ref=n.ref,e.return=n,n.child=e}function ju(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(xr(o,r)&&e.ref===n.ref)if(nn=!1,n.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(nn=!0);else return n.lanes=e.lanes,bn(e,n,i)}return Rs(e,n,t,r,i)}function Nu(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Yt,cn),cn|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ve(Yt,cn),cn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ve(Yt,cn),cn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ve(Yt,cn),cn|=r;return Xe(e,n,i,t),n.child}function Ru(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Rs(e,n,t,r,i){var o=en(t)?ft:Ve.current;return o=Ut(n,o),Vt(n,i),t=_s(e,n,t,r,o,i),r=xs(),e!==null&&!nn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bn(e,n,i)):(Se&&r&&ts(n),n.flags|=1,Xe(e,n,t,i),n.child)}function Du(e,n,t,r,i){if(en(t)){var o=!0;wi(n)}else o=!1;if(Vt(n,i),n.stateNode===null)Fi(e,n),vu(n,t,r),Es(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,c=n.memoizedProps;s.props=c;var f=s.context,v=t.contextType;typeof v=="object"&&v!==null?v=fn(v):(v=en(t)?ft:Ve.current,v=Ut(n,v));var P=t.getDerivedStateFromProps,C=typeof P=="function"||typeof s.getSnapshotBeforeUpdate=="function";C||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||f!==v)&&_u(n,s,r,v),Zn=!1;var k=n.memoizedState;s.state=k,Di(n,r,s,i),f=n.memoizedState,c!==r||k!==f||Je.current||Zn?(typeof P=="function"&&(Cs(n,t,P,r),f=n.memoizedState),(c=Zn||yu(n,t,c,r,k,f,v))?(C||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=f),s.props=r,s.state=f,s.context=v,r=c):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Vl(e,n),c=n.memoizedProps,v=n.type===n.elementType?c:xn(n.type,c),s.props=v,C=n.pendingProps,k=s.context,f=t.contextType,typeof f=="object"&&f!==null?f=fn(f):(f=en(t)?ft:Ve.current,f=Ut(n,f));var T=t.getDerivedStateFromProps;(P=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==C||k!==f)&&_u(n,s,r,f),Zn=!1,k=n.memoizedState,s.state=k,Di(n,r,s,i);var b=n.memoizedState;c!==C||k!==b||Je.current||Zn?(typeof T=="function"&&(Cs(n,t,T,r),b=n.memoizedState),(v=Zn||yu(n,t,v,r,k,b,f)||!1)?(P||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,f)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=b),s.props=r,s.state=b,s.context=f,r=v):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),r=!1)}return Ds(e,n,t,r,o,i)}function Ds(e,n,t,r,i,o){Ru(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Il(n,t,!1),bn(e,n,o);r=n.stateNode,xp.current=n;var c=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Wt(n,e.child,null,o),n.child=Wt(n,null,c,o)):Xe(e,n,c,o),n.memoizedState=r.state,i&&Il(n,t,!0),n.child}function Tu(e){var n=e.stateNode;n.pendingContext?Ll(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ll(e,n.context,!1),fs(e,n.containerInfo)}function zu(e,n,t,r,i){return qt(),ss(i),n.flags|=256,Xe(e,n,t,r),n.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,n,t){var r=n.pendingProps,i=Ce.current,o=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return os(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xi(s,r,0,null),e=St(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=zs(t),n.memoizedState=Ts,e):Ls(n,s));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return wp(e,n,s,r,c,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,c=i.sibling;var f={mode:"hidden",children:r.children};return(s&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=f,n.deletions=null):(r=ot(i,f),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=ot(c,o):(o=St(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?zs(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Ts,r}return o=e.child,e=o.sibling,r=ot(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ls(e,n){return n=Xi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function bi(e,n,t,r){return r!==null&&ss(r),Wt(n,e.child,null,t),e=Ls(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wp(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=js(Error(a(422))),bi(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Xi({mode:"visible",children:r.children},i,0,null),o=St(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&Wt(n,e.child,null,s),n.child.memoizedState=zs(s),n.memoizedState=Ts,o);if((n.mode&1)===0)return bi(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(a(419)),r=js(o,r,void 0),bi(e,n,s,r)}if(c=(s&e.childLanes)!==0,nn||c){if(r=be,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,An(e,i),Sn(r,e,i,-1))}return Gs(),r=js(Error(a(421))),bi(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Mp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,un=Qn(i.nextSibling),ln=n,Se=!0,_n=null,e!==null&&(dn[pn++]=Mn,dn[pn++]=In,dn[pn++]=ht,Mn=e.id,In=e.overflow,ht=n),n=Ls(n,r.children),n.flags|=4096,n)}function Mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),cs(e.return,n,t)}function Ms(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Iu(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,n,r.children,t),r=Ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,t,n);else if(e.tag===19)Mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ti(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ms(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ti(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ms(n,!0,t,null,o);break;case"together":Ms(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function kp(e,n,t){switch(n.tag){case 3:Tu(n),qt();break;case 5:Gl(n);break;case 1:en(n.type)&&wi(n);break;case 4:fs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ve(ji,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Lu(e,n,t):(ve(Ce,Ce.current&1),e=bn(e,n,t),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Iu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return n.lanes=0,Nu(e,n,t)}return bn(e,n,t)}var Au,Is,Ou,bu;Au=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Is=function(){},Ou=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,yt(jn.current);var o=null;switch(t){case"input":i=uo(e,i),r=uo(e,r),o=[];break;case"select":i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case"textarea":i=fo(e,i),r=fo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}mo(t,r);var s;t=null;for(v in i)if(!r.hasOwnProperty(v)&&i.hasOwnProperty(v)&&i[v]!=null)if(v==="style"){var c=i[v];for(s in c)c.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(_.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in r){var f=r[v];if(c=i!=null?i[v]:void 0,r.hasOwnProperty(v)&&f!==c&&(f!=null||c!=null))if(v==="style")if(c){for(s in c)!c.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in f)f.hasOwnProperty(s)&&c[s]!==f[s]&&(t||(t={}),t[s]=f[s])}else t||(o||(o=[]),o.push(v,t)),t=f;else v==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(o=o||[]).push(v,f)):v==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(v,""+f):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(_.hasOwnProperty(v)?(f!=null&&v==="onScroll"&&_e("scroll",e),o||c===f||(o=[])):(o=o||[]).push(v,f))}t&&(o=o||[]).push("style",t);var v=o;(n.updateQueue=v)&&(n.flags|=4)}},bu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ir(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Sp(e,n,t){var r=n.pendingProps;switch(rs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return en(n.type)&&xi(),Qe(n),null;case 3:return r=n.stateNode,Kt(),xe(Je),xe(Ve),gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_n!==null&&(Vs(_n),_n=null))),Is(e,n),Qe(n),null;case 5:hs(n);var i=yt(Dr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ou(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Qe(n),null}if(e=yt(jn.current),Ci(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[En]=n,r[Cr]=o,e=(n.mode&1)!==0,t){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)_e(kr[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":va(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":wa(r,o),_e("invalid",r)}mo(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&yi(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&yi(r.textContent,c,e),i=["children",""+c]):_.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&_e("scroll",r)}switch(t){case"input":Qr(r),xa(r,o,!0);break;case"textarea":Qr(r),Sa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[En]=n,e[Cr]=r,Au(e,n,!1,!1),n.stateNode=e;e:{switch(s=go(t,r),t){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)_e(kr[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":va(e,r),i=uo(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=A({},r,{value:void 0}),_e("invalid",e);break;case"textarea":wa(e,r),i=fo(e,r),_e("invalid",e);break;default:i=r}mo(t,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var f=c[o];o==="style"?ja(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ca(e,f)):o==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&rr(e,f):typeof f=="number"&&rr(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_.hasOwnProperty(o)?f!=null&&o==="onScroll"&&_e("scroll",e):f!=null&&$(e,o,f,s))}switch(t){case"input":Qr(e),xa(e,r,!1);break;case"textarea":Qr(e),Sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Nt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Nt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Qe(n),null;case 6:if(e&&n.stateNode!=null)bu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=yt(Dr.current),yt(jn.current),Ci(n)){if(r=n.stateNode,t=n.memoizedProps,r[En]=n,(o=r.nodeValue!==t)&&(e=ln,e!==null))switch(e.tag){case 3:yi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=n,n.stateNode=r}return Qe(n),null;case 13:if(xe(Ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&un!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Bl(),qt(),n.flags|=98560,o=!1;else if(o=Ci(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[En]=n}else qt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),o=!1}else _n!==null&&(Vs(_n),_n=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Ae===0&&(Ae=3):Gs())),n.updateQueue!==null&&(n.flags|=4),Qe(n),null);case 4:return Kt(),Is(e,n),e===null&&Sr(n.stateNode.containerInfo),Qe(n),null;case 10:return us(n.type._context),Qe(n),null;case 17:return en(n.type)&&xi(),Qe(n),null;case 19:if(xe(Ce),o=n.memoizedState,o===null)return Qe(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Ir(o,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=Ti(e),s!==null){for(n.flags|=128,Ir(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ve(Ce,Ce.current&1|2),n.child}e=e.sibling}o.tail!==null&&De()>Xt&&(n.flags|=128,r=!0,Ir(o,!1),n.lanes=4194304)}else{if(!r)if(e=Ti(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Se)return Qe(n),null}else 2*De()-o.renderingStartTime>Xt&&t!==1073741824&&(n.flags|=128,r=!0,Ir(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=De(),n.sibling=null,t=Ce.current,ve(Ce,r?t&1|2:t&1),n):(Qe(n),null);case 22:case 23:return Qs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(cn&1073741824)!==0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function Pp(e,n){switch(rs(n),n.tag){case 1:return en(n.type)&&xi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kt(),xe(Je),xe(Ve),gs(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return hs(n),null;case 13:if(xe(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xe(Ce),null;case 4:return Kt(),null;case 10:return us(n.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var Ui=!1,Ge=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,L=null;function Gt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Re(e,n,r)}else t.current=null}function As(e,n,t){try{t()}catch(r){Re(e,n,r)}}var Fu=!1;function Ep(e,n){if(Qo=si,e=yl(),Uo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,c=-1,f=-1,v=0,P=0,C=e,k=null;n:for(;;){for(var T;C!==t||i!==0&&C.nodeType!==3||(c=s+i),C!==o||r!==0&&C.nodeType!==3||(f=s+r),C.nodeType===3&&(s+=C.nodeValue.length),(T=C.firstChild)!==null;)k=C,C=T;for(;;){if(C===e)break n;if(k===t&&++v===i&&(c=s),k===o&&++P===r&&(f=s),(T=C.nextSibling)!==null)break;C=k,k=C.parentNode}C=T}t=c===-1||f===-1?null:{start:c,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(Go={focusedElem:e,selectionRange:t},si=!1,L=n;L!==null;)if(n=L,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,L=e;else for(;L!==null;){n=L;try{var b=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var U=b.memoizedProps,Te=b.memoizedState,g=n.stateNode,h=g.getSnapshotBeforeUpdate(n.elementType===n.type?U:xn(n.type,U),Te);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(j){Re(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,L=e;break}L=n.return}return b=Fu,Fu=!1,b}function Ar(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&As(n,t,o)}i=i.next}while(i!==r)}}function Bi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Os(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Uu(e){var n=e.alternate;n!==null&&(e.alternate=null,Uu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[En],delete n[Cr],delete n[Jo],delete n[lp],delete n[up])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(bs(e,n,t),e=e.sibling;e!==null;)bs(e,n,t),e=e.sibling}function Fs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fs(e,n,t),e=e.sibling;e!==null;)Fs(e,n,t),e=e.sibling}var Be=null,wn=!1;function et(e,n,t){for(t=t.child;t!==null;)qu(e,n,t),t=t.sibling}function qu(e,n,t){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ei,t)}catch{}switch(t.tag){case 5:Ge||Gt(t,n);case 6:var r=Be,i=wn;Be=null,et(e,n,t),Be=r,wn=i,Be!==null&&(wn?(e=Be,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Be.removeChild(t.stateNode));break;case 18:Be!==null&&(wn?(e=Be,t=t.stateNode,e.nodeType===8?Zo(e.parentNode,t):e.nodeType===1&&Zo(e,t),hr(e)):Zo(Be,t.stateNode));break;case 4:r=Be,i=wn,Be=t.stateNode.containerInfo,wn=!0,et(e,n,t),Be=r,wn=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&As(t,n,s),i=i.next}while(i!==r)}et(e,n,t);break;case 1:if(!Ge&&(Gt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(c){Re(t,n,c)}et(e,n,t);break;case 21:et(e,n,t);break;case 22:t.mode&1?(Ge=(r=Ge)||t.memoizedState!==null,et(e,n,t),Ge=r):et(e,n,t);break;default:et(e,n,t)}}function Wu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Cp),n.forEach(function(r){var i=Ip.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function kn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 5:Be=c.stateNode,wn=!1;break e;case 3:Be=c.stateNode.containerInfo,wn=!0;break e;case 4:Be=c.stateNode.containerInfo,wn=!0;break e}c=c.return}if(Be===null)throw Error(a(160));qu(o,s,i),Be=null,wn=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(v){Re(i,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hu(n,e),n=n.sibling}function Hu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kn(n,e),Rn(e),r&4){try{Ar(3,e,e.return),Bi(3,e)}catch(U){Re(e,e.return,U)}try{Ar(5,e,e.return)}catch(U){Re(e,e.return,U)}}break;case 1:kn(n,e),Rn(e),r&512&&t!==null&&Gt(t,t.return);break;case 5:if(kn(n,e),Rn(e),r&512&&t!==null&&Gt(t,t.return),e.flags&32){var i=e.stateNode;try{rr(i,"")}catch(U){Re(e,e.return,U)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,c=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&_a(i,o),go(c,s);var v=go(c,o);for(s=0;s<f.length;s+=2){var P=f[s],C=f[s+1];P==="style"?ja(i,C):P==="dangerouslySetInnerHTML"?Ca(i,C):P==="children"?rr(i,C):$(i,P,C,v)}switch(c){case"input":co(i,o);break;case"textarea":ka(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?Nt(i,!!o.multiple,T,!1):k!==!!o.multiple&&(o.defaultValue!=null?Nt(i,!!o.multiple,o.defaultValue,!0):Nt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Cr]=o}catch(U){Re(e,e.return,U)}}break;case 6:if(kn(n,e),Rn(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(U){Re(e,e.return,U)}}break;case 3:if(kn(n,e),Rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(U){Re(e,e.return,U)}break;case 4:kn(n,e),Rn(e);break;case 13:kn(n,e),Rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($s=De())),r&4&&Wu(e);break;case 22:if(P=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(v=Ge)||P,kn(n,e),Ge=v):kn(n,e),Rn(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!P&&(e.mode&1)!==0)for(L=e,P=e.child;P!==null;){for(C=L=P;L!==null;){switch(k=L,T=k.child,k.tag){case 0:case 11:case 14:case 15:Ar(4,k,k.return);break;case 1:Gt(k,k.return);var b=k.stateNode;if(typeof b.componentWillUnmount=="function"){r=k,t=k.return;try{n=r,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(U){Re(r,t,U)}}break;case 5:Gt(k,k.return);break;case 22:if(k.memoizedState!==null){Qu(C);continue}}T!==null?(T.return=k,L=T):Qu(C)}P=P.sibling}e:for(P=null,C=e;;){if(C.tag===5){if(P===null){P=C;try{i=C.stateNode,v?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=C.stateNode,f=C.memoizedProps.style,s=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=Ea("display",s))}catch(U){Re(e,e.return,U)}}}else if(C.tag===6){if(P===null)try{C.stateNode.nodeValue=v?"":C.memoizedProps}catch(U){Re(e,e.return,U)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;P===C&&(P=null),C=C.return}P===C&&(P=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:kn(n,e),Rn(e),r&4&&Wu(e);break;case 21:break;default:kn(n,e),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bu(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rr(i,""),r.flags&=-33);var o=$u(e);Fs(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,c=$u(e);bs(e,c,s);break;default:throw Error(a(161))}}catch(f){Re(e,e.return,f)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jp(e,n,t){L=e,Vu(e)}function Vu(e,n,t){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ui;if(!s){var c=i.alternate,f=c!==null&&c.memoizedState!==null||Ge;c=Ui;var v=Ge;if(Ui=s,(Ge=f)&&!v)for(L=i;L!==null;)s=L,f=s.child,s.tag===22&&s.memoizedState!==null?Gu(i):f!==null?(f.return=s,L=f):Gu(i);for(;o!==null;)L=o,Vu(o),o=o.sibling;L=i,Ui=c,Ge=v}Ku(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,L=o):Ku(e)}}function Ku(e){for(;L!==null;){var n=L;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ge||Bi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:xn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ql(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ql(n,s,t)}break;case 5:var c=n.stateNode;if(t===null&&n.flags&4){t=c;var f=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var P=v.memoizedState;if(P!==null){var C=P.dehydrated;C!==null&&hr(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ge||n.flags&512&&Os(n)}catch(k){Re(n,n.return,k)}}if(n===e){L=null;break}if(t=n.sibling,t!==null){t.return=n.return,L=t;break}L=n.return}}function Qu(e){for(;L!==null;){var n=L;if(n===e){L=null;break}var t=n.sibling;if(t!==null){t.return=n.return,L=t;break}L=n.return}}function Gu(e){for(;L!==null;){var n=L;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Bi(4,n)}catch(f){Re(n,t,f)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(f){Re(n,i,f)}}var o=n.return;try{Os(n)}catch(f){Re(n,o,f)}break;case 5:var s=n.return;try{Os(n)}catch(f){Re(n,s,f)}}}catch(f){Re(n,n.return,f)}if(n===e){L=null;break}var c=n.sibling;if(c!==null){c.return=n.return,L=c;break}L=n.return}}var Np=Math.ceil,$i=I.ReactCurrentDispatcher,Us=I.ReactCurrentOwner,mn=I.ReactCurrentBatchConfig,se=0,be=null,ze=null,$e=0,cn=0,Yt=Gn(0),Ae=0,Or=null,_t=0,qi=0,Bs=0,br=null,tn=null,$s=0,Xt=1/0,Fn=null,Wi=!1,qs=null,nt=null,Hi=!1,tt=null,Vi=0,Fr=0,Ws=null,Ki=-1,Qi=0;function Ze(){return(se&6)!==0?De():Ki!==-1?Ki:Ki=De()}function rt(e){return(e.mode&1)===0?1:(se&2)!==0&&$e!==0?$e&-$e:dp.transition!==null?(Qi===0&&(Qi=$a()),Qi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Xa(e.type)),e)}function Sn(e,n,t,r){if(50<Fr)throw Fr=0,Ws=null,Error(a(185));ur(e,t,r),((se&2)===0||e!==be)&&(e===be&&((se&2)===0&&(qi|=t),Ae===4&&it(e,$e)),rn(e,r),t===1&&se===0&&(n.mode&1)===0&&(Xt=De()+500,ki&&Xn()))}function rn(e,n){var t=e.callbackNode;dd(e,n);var r=ri(e,e===be?$e:0);if(r===0)t!==null&&Fa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Fa(t),n===1)e.tag===0?cp(Xu.bind(null,e)):Al(Xu.bind(null,e)),sp(function(){(se&6)===0&&Xn()}),t=null;else{switch(qa(r)){case 1:t=So;break;case 4:t=Ua;break;case 16:t=Jr;break;case 536870912:t=Ba;break;default:t=Jr}t=oc(t,Yu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yu(e,n){if(Ki=-1,Qi=0,(se&6)!==0)throw Error(a(327));var t=e.callbackNode;if(Zt()&&e.callbackNode!==t)return null;var r=ri(e,e===be?$e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Gi(e,r);else{n=r;var i=se;se|=2;var o=Ju();(be!==e||$e!==n)&&(Fn=null,Xt=De()+500,wt(e,n));do try{Tp();break}catch(c){Zu(e,c)}while(!0);ls(),$i.current=o,se=i,ze!==null?n=0:(be=null,$e=0,n=Ae)}if(n!==0){if(n===2&&(i=Po(e),i!==0&&(r=i,n=Hs(e,i))),n===1)throw t=Or,wt(e,0),it(e,r),rn(e,De()),t;if(n===6)it(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Rp(i)&&(n=Gi(e,r),n===2&&(o=Po(e),o!==0&&(r=o,n=Hs(e,o))),n===1))throw t=Or,wt(e,0),it(e,r),rn(e,De()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:kt(e,tn,Fn);break;case 3:if(it(e,r),(r&130023424)===r&&(n=$s+500-De(),10<n)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xo(kt.bind(null,e,tn,Fn),n);break}kt(e,tn,Fn);break;case 4:if(it(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-yn(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=Xo(kt.bind(null,e,tn,Fn),r);break}kt(e,tn,Fn);break;case 5:kt(e,tn,Fn);break;default:throw Error(a(329))}}}return rn(e,De()),e.callbackNode===t?Yu.bind(null,e):null}function Hs(e,n){var t=br;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=Gi(e,n),e!==2&&(n=tn,tn=t,n!==null&&Vs(n)),e}function Vs(e){tn===null?tn=e:tn.push.apply(tn,e)}function Rp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!vn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~Bs,n&=~qi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function Xu(e){if((se&6)!==0)throw Error(a(327));Zt();var n=ri(e,0);if((n&1)===0)return rn(e,De()),null;var t=Gi(e,n);if(e.tag!==0&&t===2){var r=Po(e);r!==0&&(n=r,t=Hs(e,r))}if(t===1)throw t=Or,wt(e,0),it(e,n),rn(e,De()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kt(e,tn,Fn),rn(e,De()),null}function Ks(e,n){var t=se;se|=1;try{return e(n)}finally{se=t,se===0&&(Xt=De()+500,ki&&Xn())}}function xt(e){tt!==null&&tt.tag===0&&(se&6)===0&&Zt();var n=se;se|=1;var t=mn.transition,r=pe;try{if(mn.transition=null,pe=1,e)return e()}finally{pe=r,mn.transition=t,se=n,(se&6)===0&&Xn()}}function Qs(){cn=Yt.current,xe(Yt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,op(t)),ze!==null)for(t=ze.return;t!==null;){var r=t;switch(rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:Kt(),xe(Je),xe(Ve),gs();break;case 5:hs(r);break;case 4:Kt();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:us(r.type._context);break;case 22:case 23:Qs()}t=t.return}if(be=e,ze=e=ot(e.current,null),$e=cn=n,Ae=0,Or=null,Bs=qi=_t=0,tn=br=null,gt!==null){for(n=0;n<gt.length;n++)if(t=gt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}gt=null}return e}function Zu(e,n){do{var t=ze;try{if(ls(),zi.current=Ai,Li){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Li=!1}if(vt=0,Oe=Ie=Ee=null,Tr=!1,zr=0,Us.current=null,t===null||t.return===null){Ae=1,Or=n,ze=null;break}e:{var o=e,s=t.return,c=t,f=n;if(n=$e,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var v=f,P=c,C=P.tag;if((P.mode&1)===0&&(C===0||C===11||C===15)){var k=P.alternate;k?(P.updateQueue=k.updateQueue,P.memoizedState=k.memoizedState,P.lanes=k.lanes):(P.updateQueue=null,P.memoizedState=null)}var T=Su(s);if(T!==null){T.flags&=-257,Pu(T,s,c,o,n),T.mode&1&&ku(o,v,n),n=T,f=v;var b=n.updateQueue;if(b===null){var U=new Set;U.add(f),n.updateQueue=U}else b.add(f);break e}else{if((n&1)===0){ku(o,v,n),Gs();break e}f=Error(a(426))}}else if(Se&&c.mode&1){var Te=Su(s);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),Pu(Te,s,c,o,n),ss(Qt(f,c));break e}}o=f=Qt(f,c),Ae!==4&&(Ae=2),br===null?br=[o]:br.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=xu(o,f,n);Kl(o,g);break e;case 1:c=f;var h=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nt===null||!nt.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var j=wu(o,c,n);Kl(o,j);break e}}o=o.return}while(o!==null)}nc(t)}catch(B){n=B,ze===t&&t!==null&&(ze=t=t.return);continue}break}while(!0)}function Ju(){var e=$i.current;return $i.current=Ai,e===null?Ai:e}function Gs(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),be===null||(_t&268435455)===0&&(qi&268435455)===0||it(be,$e)}function Gi(e,n){var t=se;se|=2;var r=Ju();(be!==e||$e!==n)&&(Fn=null,wt(e,n));do try{Dp();break}catch(i){Zu(e,i)}while(!0);if(ls(),se=t,$i.current=r,ze!==null)throw Error(a(261));return be=null,$e=0,Ae}function Dp(){for(;ze!==null;)ec(ze)}function Tp(){for(;ze!==null&&!td();)ec(ze)}function ec(e){var n=ic(e.alternate,e,cn);e.memoizedProps=e.pendingProps,n===null?nc(e):ze=n,Us.current=null}function nc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Sp(t,n,cn),t!==null){ze=t;return}}else{if(t=Pp(t,n),t!==null){t.flags&=32767,ze=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,ze=null;return}}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Ae===0&&(Ae=5)}function kt(e,n,t){var r=pe,i=mn.transition;try{mn.transition=null,pe=1,zp(e,n,t,r)}finally{mn.transition=i,pe=r}return null}function zp(e,n,t,r){do Zt();while(tt!==null);if((se&6)!==0)throw Error(a(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(pd(e,o),e===be&&(ze=be=null,$e=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Hi||(Hi=!0,oc(Jr,function(){return Zt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=mn.transition,mn.transition=null;var s=pe;pe=1;var c=se;se|=4,Us.current=null,Ep(e,t),Hu(t,e),Zd(Go),si=!!Qo,Go=Qo=null,e.current=t,jp(t),rd(),se=c,pe=s,mn.transition=o}else e.current=t;if(Hi&&(Hi=!1,tt=e,Vi=i),o=e.pendingLanes,o===0&&(nt=null),sd(t.stateNode),rn(e,De()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wi)throw Wi=!1,e=qs,qs=null,e;return(Vi&1)!==0&&e.tag!==0&&Zt(),o=e.pendingLanes,(o&1)!==0?e===Ws?Fr++:(Fr=0,Ws=e):Fr=0,Xn(),null}function Zt(){if(tt!==null){var e=qa(Vi),n=mn.transition,t=pe;try{if(mn.transition=null,pe=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Vi=0,(se&6)!==0)throw Error(a(331));var i=se;for(se|=4,L=e.current;L!==null;){var o=L,s=o.child;if((L.flags&16)!==0){var c=o.deletions;if(c!==null){for(var f=0;f<c.length;f++){var v=c[f];for(L=v;L!==null;){var P=L;switch(P.tag){case 0:case 11:case 15:Ar(8,P,o)}var C=P.child;if(C!==null)C.return=P,L=C;else for(;L!==null;){P=L;var k=P.sibling,T=P.return;if(Uu(P),P===v){L=null;break}if(k!==null){k.return=T,L=k;break}L=T}}}var b=o.alternate;if(b!==null){var U=b.child;if(U!==null){b.child=null;do{var Te=U.sibling;U.sibling=null,U=Te}while(U!==null)}}L=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var h=e.current;for(L=h;L!==null;){s=L;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,L=y;else e:for(s=h;L!==null;){if(c=L,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Bi(9,c)}}catch(B){Re(c,c.return,B)}if(c===s){L=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,L=j;break e}L=c.return}}if(se=i,Xn(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{pe=t,mn.transition=n}}return!1}function tc(e,n,t){n=Qt(t,n),n=xu(e,n,1),e=Jn(e,n,1),n=Ze(),e!==null&&(ur(e,1,n),rn(e,n))}function Re(e,n,t){if(e.tag===3)tc(e,e,t);else for(;n!==null;){if(n.tag===3){tc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nt===null||!nt.has(r))){e=Qt(t,e),e=wu(n,e,1),n=Jn(n,e,1),e=Ze(),n!==null&&(ur(n,1,e),rn(n,e));break}}n=n.return}}function Lp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ze(),e.pingedLanes|=e.suspendedLanes&t,be===e&&($e&t)===t&&(Ae===4||Ae===3&&($e&130023424)===$e&&500>De()-$s?wt(e,0):Bs|=t),rn(e,n)}function rc(e,n){n===0&&((e.mode&1)===0?n=1:(n=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var t=Ze();e=An(e,n),e!==null&&(ur(e,n,t),rn(e,t))}function Mp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rc(e,t)}function Ip(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),rc(e,t)}var ic;ic=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Je.current)nn=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return nn=!1,kp(e,n,t);nn=(e.flags&131072)!==0}else nn=!1,Se&&(n.flags&1048576)!==0&&Ol(n,Pi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fi(e,n),e=n.pendingProps;var i=Ut(n,Ve.current);Vt(n,t),i=_s(null,n,r,e,i,t);var o=xs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,en(r)?(o=!0,wi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(n),i.updater=Oi,n.stateNode=i,i._reactInternals=n,Es(n,r,e,t),n=Ds(null,n,r,!0,o,t)):(n.tag=0,Se&&o&&ts(n),Xe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Op(r),e=xn(r,e),i){case 0:n=Rs(null,n,r,e,t);break e;case 1:n=Du(null,n,r,e,t);break e;case 11:n=Cu(null,n,r,e,t);break e;case 14:n=Eu(null,n,r,xn(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Rs(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Du(e,n,r,i,t);case 3:e:{if(Tu(n),e===null)throw Error(a(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Vl(e,n),Di(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Qt(Error(a(423)),n),n=zu(e,n,r,t,i);break e}else if(r!==i){i=Qt(Error(a(424)),n),n=zu(e,n,r,t,i);break e}else for(un=Qn(n.stateNode.containerInfo.firstChild),ln=n,Se=!0,_n=null,t=Wl(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qt(),r===i){n=bn(e,n,t);break e}Xe(e,n,r,t)}n=n.child}return n;case 5:return Gl(n),e===null&&os(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Yo(r,i)?s=null:o!==null&&Yo(r,o)&&(n.flags|=32),Ru(e,n),Xe(e,n,s,t),n.child;case 6:return e===null&&os(n),null;case 13:return Lu(e,n,t);case 4:return fs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Wt(n,null,r,t):Xe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Cu(e,n,r,i,t);case 7:return Xe(e,n,n.pendingProps,t),n.child;case 8:return Xe(e,n,n.pendingProps.children,t),n.child;case 12:return Xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,ve(ji,r._currentValue),r._currentValue=s,o!==null)if(vn(o.value,s)){if(o.children===i.children&&!Je.current){n=bn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(o.tag===1){f=On(-1,t&-t),f.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var P=v.pending;P===null?f.next=f:(f.next=P.next,P.next=f),v.pending=f}}o.lanes|=t,f=o.alternate,f!==null&&(f.lanes|=t),cs(o.return,t,n),c.lanes|=t;break}f=f.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(a(341));s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),cs(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Vt(n,t),i=fn(i),r=r(i),n.flags|=1,Xe(e,n,r,t),n.child;case 14:return r=n.type,i=xn(r,n.pendingProps),i=xn(r.type,i),Eu(e,n,r,i,t);case 15:return ju(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Fi(e,n),n.tag=1,en(r)?(e=!0,wi(n)):e=!1,Vt(n,t),vu(n,r,i),Es(n,r,i,t),Ds(null,n,r,!0,e,t);case 19:return Iu(e,n,t);case 22:return Nu(e,n,t)}throw Error(a(156,n.tag))};function oc(e,n){return ba(e,n)}function Ap(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,n,t,r){return new Ap(e,n,t,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qe)return 11;if(e===He)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=gn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yi(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Ys(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ee:return St(t.children,i,o,n);case V:s=8,i|=8;break;case ce:return e=gn(12,t,n,i|2),e.elementType=ce,e.lanes=o,e;case Me:return e=gn(13,t,n,i),e.elementType=Me,e.lanes=o,e;case We:return e=gn(19,t,n,i),e.elementType=We,e.lanes=o,e;case Ne:return Xi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:s=10;break e;case Ue:s=9;break e;case qe:s=11;break e;case He:s=14;break e;case ge:s=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=gn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function St(e,n,t,r){return e=gn(7,e,r,n),e.lanes=t,e}function Xi(e,n,t,r){return e=gn(22,e,r,n),e.elementType=Ne,e.lanes=t,e.stateNode={isHidden:!1},e}function Xs(e,n,t){return e=gn(6,e,null,n),e.lanes=t,e}function Zs(e,n,t){return n=gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function bp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Js(e,n,t,r,i,o,s,c,f){return e=new bp(e,n,t,c,f),n===1?(n=1,o===!0&&(n|=8)):n=0,o=gn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(o),e}function Fp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function sc(e){if(!e)return Yn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(en(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(en(t))return Ml(e,t,n)}return n}function ac(e,n,t,r,i,o,s,c,f){return e=Js(t,r,!0,e,i,o,s,c,f),e.context=sc(null),t=e.current,r=Ze(),i=rt(t),o=On(r,i),o.callback=n??null,Jn(t,o,i),e.current.lanes=i,ur(e,i,r),rn(e,r),e}function Zi(e,n,t,r){var i=n.current,o=Ze(),s=rt(i);return t=sc(t),n.context===null?n.context=t:n.pendingContext=t,n=On(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Jn(i,n,s),e!==null&&(Sn(e,i,s,o),Ri(e,i,s)),s}function Ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ea(e,n){lc(e,n),(e=e.alternate)&&lc(e,n)}function Up(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}eo.prototype.render=na.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Zi(e,n,null,null)},eo.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){Zi(null,e,null,null)}),n[zn]=null}};function eo(e){this._internalRoot=e}eo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Va();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Hn.length&&n!==0&&n<Hn[t].priority;t++);Hn.splice(t,0,e),t===0&&Ga(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function Bp(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var v=Ji(s);o.call(v)}}var s=ac(n,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=s,e[zn]=s.current,Sr(e.nodeType===8?e.parentNode:e),xt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var v=Ji(f);c.call(v)}}var f=Js(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=f,e[zn]=f.current,Sr(e.nodeType===8?e.parentNode:e),xt(function(){Zi(n,f,t,r)}),f}function to(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var c=i;i=function(){var f=Ji(s);c.call(f)}}Zi(n,s,e,i)}else s=Bp(t,n,e,i,r);return Ji(s)}Wa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=lr(n.pendingLanes);t!==0&&(Eo(n,t|1),rn(n,De()),(se&6)===0&&(Xt=De()+500,Xn()))}break;case 13:xt(function(){var r=An(e,1);if(r!==null){var i=Ze();Sn(r,e,1,i)}}),ea(e,1)}},jo=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var t=Ze();Sn(n,e,134217728,t)}ea(e,134217728)}},Ha=function(e){if(e.tag===13){var n=rt(e),t=An(e,n);if(t!==null){var r=Ze();Sn(t,e,n,r)}ea(e,n)}},Va=function(){return pe},Ka=function(e,n){var t=pe;try{return pe=e,n()}finally{pe=t}},_o=function(e,n,t){switch(n){case"input":if(co(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=_i(r);if(!i)throw Error(a(90));ya(r),co(r,i)}}}break;case"textarea":ka(e,t);break;case"select":n=t.value,n!=null&&Nt(e,!!t.multiple,n,!1)}},Ta=Ks,za=xt;var $p={usingClientEntryPoint:!1,Events:[Er,bt,_i,Ra,Da,Ks]},Ur={findFiberByHostInstance:pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Aa(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{ei=ro.inject(qp),Cn=ro}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p,on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(n))throw Error(a(200));return Fp(e,n,null,t)},on.createRoot=function(e,n){if(!ta(e))throw Error(a(299));var t=!1,r="",i=uc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Js(e,1,!1,null,null,t,!1,r,i),e[zn]=n.current,Sr(e.nodeType===8?e.parentNode:e),new na(n)},on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Aa(n),e=e===null?null:e.stateNode,e},on.flushSync=function(e){return xt(e)},on.hydrate=function(e,n,t){if(!no(n))throw Error(a(200));return to(null,e,n,!0,t)},on.hydrateRoot=function(e,n,t){if(!ta(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=uc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=ac(n,null,e,1,t??null,i,!1,o,s),e[zn]=n.current,Sr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new eo(n)},on.render=function(e,n,t){if(!no(n))throw Error(a(200));return to(null,e,n,!1,t)},on.unmountComponentAtNode=function(e){if(!no(e))throw Error(a(40));return e._reactRootContainer?(xt(function(){to(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1},on.unstable_batchedUpdates=Ks,on.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!no(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return to(e,n,t,!1,r)},on.version="18.3.1-next-f1338f8080-20240426",on}var vc;function Zp(){if(vc)return oa.exports;vc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),oa.exports=Xp(),oa.exports}var _c;function Jp(){if(_c)return io;_c=1;var l=Zp();return io.createRoot=l.createRoot,io.hydrateRoot=l.hydrateRoot,io}var ef=Jp();const nf={config:{title:"PhiDoc",description:"Configuration-driven documentation sites for the GemPhi ecosystem.",version:"v0.1.0",brandId:"phidoc",docs:{path:"docs",routeBasePath:"docs",include:["**/*.md","**/*.mdx"],exclude:["**/node_modules/**","**/.git/**","**/_*/**"]},home:{title:"PhiDoc",tagline:"Automated, theme-driven documentation sites powered by puijs.",actions:[{label:"Read the PhiDoc guide",href:"/docs/phidoc/quickstart",variant:"primary"},{label:"Explore GemPhi docs",href:"/docs/shared/diem-standards",variant:"outline"}],features:[{title:"Configuration First",description:"Define the site, content path, landing page, navigation, and sidebar mode in one typed config.",icon:"settings",href:"/docs/phidoc/configuration"},{title:"Markdown Automation",description:"Scan Markdown and MDX files, parse frontmatter, infer slugs, and exclude drafts automatically.",icon:"code",href:"/docs/phidoc/content-model"},{title:"Generated Sidebars",description:"Build navigation from the filesystem, number prefixes, category metadata, and frontmatter order.",icon:"grid",href:"/docs/phidoc/sidebars"},{title:"puijs Themes",description:"Use puijs brand themes, dark mode, spacing, and components without application CSS.",icon:"palette",href:"/docs/phidoc/branding"},{title:"Reusable Sites",description:"Point any phi* project at its docs directory and reuse the same production docs shell.",icon:"layers",href:"/docs/phidoc/site-integration"},{title:"Vite Runtime",description:"Ship a fast React documentation app through a small Vite plugin and virtual content module.",icon:"rocket",href:"/docs/phidoc/deployment"}]},nav:[{label:"Docs",href:"/docs/phidoc/quickstart"},{label:"GitHub",href:"https://github.com/gemphi/phidoc",external:!0}],sidebar:{mode:"auto"},layout:{navbarVariant:"default",navbarSticky:!0,sidebarCollapsed:!1},blog:{path:"blog",routeBasePath:"blog",include:["**/*.md","**/*.mdx"],exclude:["**/node_modules/**","**/.git/**","**/_*/**"]},blogSidebar:{mode:"auto"}},items:[{id:"docs-phi-crates-appkit",slug:"/docs/phi/crates/appkit",title:"AppKit",category:"Phi",badge:"Phi",summary:"Rust bindings for Apple's AppKit framework - the primary UI framework for macOS applications.",citations:[],position:9999,hidden:!1,draft:!1,content:`# AppKit

Rust bindings for Apple's AppKit framework - the primary UI framework for macOS applications.

## Overview

AppKit provides the window and view architecture for macOS apps, event handling, and the main run loop. The \`appkit\` crate exposes these APIs to Rust with idiomatic wrappers.

## Key Components

- **NSApplication** - Main application object and event loop
- **NSWindow** - Window management and rendering
- **NSView** - View hierarchy and layout
- **NSResponder** - Event response chain

## Integration

The AppKit crate integrates with:

- **PUIKit** - Cross-platform UI kit that abstracts AppKit on macOS
- **KitPro** - Professional component library built on top of PUIKit
- **PhiFly** - Rendering pipeline integration for GPU-accelerated UI
`},{id:"docs-phi-sdk-arkit",slug:"/docs/phi/sdk/arkit",title:"ARKit",category:"Phi",badge:"Phi",summary:"Construct and manage immersive augmented reality experiences in your app.",citations:[],position:9999,hidden:!1,draft:!1,content:`# ARKit

Construct and manage immersive augmented reality experiences in your app.

## Overview

ARKit provides world tracking, plane detection, image recognition, body tracking, hand tracking, scene reconstruction, and more. The Phi workspace mirrors Apple's ARKit documentation structure for Rust bindings.

## Key APIs

- **ARSession** - Manages the AR experience lifecycle
- **ARWorldTrackingConfiguration** - 6-DOF world tracking with feature points
- **ARPlaneAnchor** - Detected surfaces for placing virtual content
- **ARMeshAnchor** - Scene reconstruction mesh geometry
- **ARHandAnchor** - Hand skeleton tracking for visionOS

## C API (visionOS)

ARKit exposes a C API for visionOS with provider-based data delivery:

\`\`\`c
ar_world_tracking_provider_t provider =
    ar_world_tracking_provider_create(configuration);
ar_world_tracking_provider_set_update_handler_f(
    provider, my_update_handler, NULL);
\`\`\`

## Phi Integration

The \`arkit\` crate in \`phi/crates/phidoc/arkit/\` contains detailed documentation for every ARKit symbol, organized by framework version and platform.
`},{id:"docs-phi-sdk-foundation",slug:"/docs/phi/sdk/foundation",title:"Foundation",category:"Phi",badge:"Phi",summary:"Access essential data types, collections, and operating-system services to define the base layer of functionality for your app.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Foundation

Access essential data types, collections, and operating-system services to define the base layer of functionality for your app.

## Overview

The Foundation framework provides a base layer of functionality for apps and frameworks, including data storage and persistence, text processing, date and time calculations, sorting and filtering, and networking. The classes, protocols, and data types defined by Foundation are used throughout the macOS, iOS, watchOS, and tvOS SDKs.

## Key Types

- **Data** - Byte buffer management
- **Date** - Date and time representation
- **URL / URLRequest** - Networking primitives
- **JSONEncoder / JSONDecoder** - JSON serialization
- **NotificationCenter** - Pub/sub event dispatch
- **Operation / OperationQueue** - Concurrency abstraction

## Swift Standard Library Overlap

Many Foundation types have Swift-native equivalents. The Phi \`swift\` documentation covers Swift protocol conformances and bridging behavior.
`},{id:"docs-phi-architecture-gpu-pipeline",slug:"/docs/phi/architecture/gpu-pipeline",title:"GPU Pipeline",category:"Phi",badge:"Phi",summary:"The rendering pipeline for Phi applications - Metal-backed GPU rendering with optimization for 60 FPS.",citations:[],position:9999,hidden:!1,draft:!1,content:`# GPU Pipeline

The rendering pipeline for Phi applications - Metal-backed GPU rendering with optimization for 60 FPS.

## Pipeline Stages

1. **Vertex Transform** - Model → View → Projection
2. **Fragment Shading** - Material + lighting computation
3. **Post-Processing** - Tone mapping, bloom, color grading
4. **Composite** - UI overlay + 3D scene composition

## Performance Optimizations

- **f32 hot path** - Geometry and lighting computed in f32 for throughput
- **Batched draws** - Minimize draw calls by batching by material
- **Depth pre-pass** - Z-only pass to reduce overdraw in fragment shading
- **GPU memory pools** - Pre-allocated buffers to avoid runtime allocation

## Performance Targets

| Metric | Target |
|--------|--------|
| Frame time | < 16.6ms (60 FPS) |
| Draw calls | < 100 per frame |
| GPU memory | < 512 MB |
| Texture uploads | Zero per frame (pre-loaded) |
`},{id:"docs-phi-crates-kitpro",slug:"/docs/phi/crates/kitpro",title:"KitPro",category:"Phi",badge:"Phi",summary:"Professional UI component library built on top of PUIKit - providing polished, production-ready components for desktop and mobile applications.",citations:[],position:9999,hidden:!1,draft:!1,content:`# KitPro

Professional UI component library built on top of PUIKit - providing polished, production-ready components for desktop and mobile applications.

## Components

- **Panel system** - Collapsible, dockable panels with drag-and-drop reordering
- **Icon gallery** - SVG icon rendering with theme support
- **Data tables** - Sortable, filterable table views with virtualization
- **Forms** - Validated form components with inline error display
- **Charts** - Real-time data visualization (line, bar, candlestick)

## Theming

KitPro supports light and dark themes via CSS-like custom properties:

\`\`\`rust
theme.set_color("primary", Color::from_hex("#2e8555"));
theme.set_spacing("default", 16.0);
\`\`\`
`},{id:"docs-phi-architecture-layer-architecture",slug:"/docs/phi/architecture/layer-architecture",title:"Layer Architecture",category:"Phi",badge:"Phi",summary:"The Phi workspace follows a layered architecture with clear separation between platform bindings, UI frameworks, and application logic.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Layer Architecture

The Phi workspace follows a layered architecture with clear separation between platform bindings, UI frameworks, and application logic.

## Layers

\`\`\`
┌──────────────────────────────────────────┐
│         Application Layer                │
│   (PhiFly apps, Botanist, Showcases)     │
├──────────────────────────────────────────┤
│         UI Framework Layer               │
│   PUIKit → KitPro → Panel System         │
├──────────────────────────────────────────┤
│         Platform Binding Layer            │
│   AppKit, UIKit, RealityKit, ARKit       │
├──────────────────────────────────────────┤
│         Core / ML Layer                  │
│   phi-oml, phifly, phigum, phical        │
├──────────────────────────────────────────┤
│         System Layer                     │
│   Metal, Foundation, Core ML             │
└──────────────────────────────────────────┘
\`\`\`

## Dependency Rules

1. **Application Layer** depends on UI Framework Layer only
2. **UI Framework Layer** depends on Platform Binding Layer
3. **Platform Binding Layer** depends on Core/ML Layer
4. **Core/ML Layer** is self-contained (no upward dependencies)
5. **System Layer** wraps Apple SDK C/Objective-C APIs

## Crate Ownership

Each layer is owned by a specific team boundary. Crates within the same layer may depend on each other, but cross-layer dependencies must flow downward only.
`},{id:"docs-phi-architecture-layout-system",slug:"/docs/phi/architecture/layout-system",title:"Layout System",category:"Phi",badge:"Phi",summary:"The unified layout system for PUIKit and KitPro - supporting both constraint-based and frame-based layout.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Layout System

The unified layout system for PUIKit and KitPro - supporting both constraint-based and frame-based layout.

## Overview

The layout system handles:

- **View hierarchy** - Parent-child relationships with automatic invalidation
- **Constraint solver** - Auto Layout-style constraints for macOS/iOS
- **Frame-based layout** - Manual frame assignment for custom views
- **Split panes** - Resizable dividers with persistent state

## Startup Sequence

A critical fix was applied to the winit startup sequence: when the window initially reports a smaller size before maximizing, the layout rebuild now dynamically reads the current \`root_view\` bounds when the pending action executes, rather than using stale captured dimensions.

\`\`\`rust
app.pending_actions.push(Box::new(move |root_view| {
    if let Some(rebuild) = rebuild_fn {
        let frame = root_view.frame();
        rebuild(root_view, frame.width(), frame.height());
        root_view.layout_subviews();
    }
}));
\`\`\`

This ensures the startup layout always aligns with the maximized window dimensions.

## Panel System

The panel system uses the layout engine for:

- **Dock areas** - Left, right, bottom, center panel regions
- **Collapsible panels** - Expand/collapse with animated transitions
- **Drag reordering** - Panels can be dragged between dock areas
- **Persistent state** - Panel layout saved and restored across sessions
`},{id:"docs-phi-intro",slug:"/docs/phi/intro",title:"Phi",category:"Phi",badge:"Phi",summary:"Phi is a Rust-native workspace providing Apple SDK bindings, machine learning models, and UI frameworks for building cross-platform applications.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Phi

Phi is a Rust-native workspace providing Apple SDK bindings, machine learning models, and UI frameworks for building cross-platform applications.

## Overview

The Phi workspace contains:

- **phi-oml** - Machine learning crate with PhiFly resonance engine, Phigum NLP resolver, and various ML primitives
- **phifly** - Quantum semantic resonance model using phase alignment (no backpropagation, no transformers)
- **phigum** - Linguistic entity resolver that learns "relations of worlds" like a child
- **appkit** - Rust bindings for Apple's AppKit framework
- **puikit** - Cross-platform UI kit for Rust applications
- **kitpro** - Professional UI component library
- **phidoc** - Apple SDK documentation mirror (ARKit, UIKit, Foundation, RealityKit, Swift)

## Quick Start

\`\`\`bash
# Build all crates
cargo build --release

# Run tests
cargo test --workspace

# Run the Phigum example
cargo run --example elon_brain --features nlp -p phi-oml
\`\`\`

## Crate Graph

\`\`\`
phi-oml
  ├── phifly (PhiFly resonance engine)
  │     ├── phiton (quantum types)
  │     ├── gemgum (temporal fusion)
  │     └── resonance (CPU resonance engine)
  ├── nlp
  │     ├── phigum (linguistic entity resolver)
  │     ├── text_classifier
  │     ├── word_tagger
  │     └── word_embedding
  └── phical (quantum types: PhiTon, Q64)
\`\`\`

## Design Principles

1. **No Backpropagation** - The PhiFly model uses structural phase alignment, not gradient descent
2. **Child-like Learning** - Phigum learns through world relations, not massive statistical encoding
3. **Minimal Data** - Proven on concentrated datasets (e.g., Elon Musk first-principles demo)
4. **Rust-Native** - All crates are pure Rust with no external LLM dependencies
`},{id:"docs-phi-crates-phi-oml",slug:"/docs/phi/crates/phi-oml",title:"phi-oml",category:"Phi",badge:"Phi",summary:"The Phi Open Machine Learning crate - a self-contained ML library with quantum resonance models, NLP, and traditional ML primitives.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phi-oml

The Phi Open Machine Learning crate - a self-contained ML library with quantum resonance models, NLP, and traditional ML primitives.

## Features

- **PhiFly Engine** - Quantum semantic resonance using PhiTon types (frequency + phase)
- **Phigum Resolver** - Linguistic entity resolver learning world relations without LLMs
- **NLP Modules** - Text classifier, word tagger, word embedding, gazetteer, GloVe trainer
- **Phical Integration** - Quantum types (PhiTon, Q64) from the \`phical\` crate

## PhiFly Resonance Model

The PhiFly engine computes resonance between quantum states using phase difference:

\`\`\`rust
pub fn calculate_resonance(state: &PhiTon, signal: &PhiTon) -> f64 {
    let diff = (state.phase - signal.phase) as f64;
    diff.cos() * (state.frequency * signal.frequency) as f64
}
\`\`\`

- **Constructive interference** - States with aligned phases amplify (learning)
- **Destructive interference** - States with anti-phase cancel (contradiction)
- **No gradients** - Learning happens through phase alignment, not backpropagation

## Phigum NLP Resolver

The Phigum resolver builds a graph of concepts and relations:

\`\`\`rust
let mut brain = PhigumResolver::new();
brain.add_concept("Rocket-Physics", PI / 2.0, "First-principles rocket mechanics");
brain.add_concept("Mass-Production", 0.0, "High-rate production optimization");
brain.learn_fact("Rocket-Physics supports Mass-Production")?;
let answer = brain.resolve("How does rocket physics relate to production?")?;
\`\`\`

## Cargo Features

| Feature | Description |
|---------|-------------|
| \`nlp\` | NLP modules (Phigum, text classifier, word tagger, etc.) |
| \`training\` | Model training utilities |
| \`vision\` | Computer vision modules |
| \`gpu\` | GPU acceleration |
| \`quantum\` | Quantum computing primitives |
| \`compute\` | Parallel compute backends |
`},{id:"docs-phi-crates-phifly",slug:"/docs/phi/crates/phifly",title:"PhiFly",category:"Phi",badge:"Phi",summary:"The PhiFly resonance engine - a quantum semantic resonance model that learns through structural phase alignment without backpropagation or transformers.",citations:[],position:9999,hidden:!1,draft:!1,content:`# PhiFly

The PhiFly resonance engine - a quantum semantic resonance model that learns through structural phase alignment without backpropagation or transformers.

## Architecture

\`\`\`
PhiFlyEngine
  ├── PhiTon (quantum state: frequency + phase)
  ├── Gemgum (temporal decay + foveal weighting)
  ├── ResonanceEngine (CPU resonance computation)
  └── StateHistory (temporal state buffer)
\`\`\`

## PhiTon

The fundamental quantum type:

\`\`\`rust
pub struct PhiTon {
    pub frequency: f32,
    pub phase: f32,
}
\`\`\`

- **Frequency** - Represents the "energy" or "amplitude" of a concept
- **Phase** - Represents the "position" or "perspective" of a concept

## Resonance Calculation

Resonance between two PhiTon states is computed as:

\`\`\`rust
let diff = (state.phase - signal.phase) as f64;
diff.cos() * (state.frequency * signal.frequency) as f64
\`\`\`

- Phase-aligned states (diff ≈ 0) → maximum positive resonance (constructive)
- Anti-phase states (diff ≈ π) → maximum negative resonance (destructive)
- Orthogonal states (diff ≈ π/2) → zero resonance

## Gemgum Layer

The Gemgum layer provides:

- **Temporal Decay Adhesion** - Recent states influence current resonance more than distant ones
- **Foveal Weighting** - Central elements in a sequence receive higher weight

## Examples

\`\`\`bash
# Elon Musk first-principles brain demo
cargo run --example elon_brain --features nlp -p phi-oml

# Basic resonance demo
cargo run --example basic_resonance -p phi-oml
\`\`\`
`},{id:"docs-phi-crates-phigum",slug:"/docs/phi/crates/phigum",title:"Phigum",category:"Phi",badge:"Phi",summary:"The Phigum Linguistic Entity & World Relations Resolver - a self-contained, phase-resonant natural language model that learns through world relations instead of massive statistics and backpropagation.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Phigum

The Phigum Linguistic Entity & World Relations Resolver - a self-contained, phase-resonant natural language model that learns through world relations instead of massive statistics and backpropagation.

## Design Philosophy

- **No LLMs** - Does not use or depend on any large language model
- **No Backpropagation** - Learning is through phase alignment, not gradient descent
- **Child-like Learning** - Learns "relations of worlds" through associative concepts
- **Minimal Data** - Proven on concentrated datasets (e.g., a single persona's first principles)

## Concept Graph

Each concept has:

\`\`\`rust
pub struct PhigumConcept {
    pub name: String,
    pub description: String,
    pub phase: f32,      // Position in semantic space
    pub amplitude: f32,  // Strength/confidence
}
\`\`\`

## Relation Types

| Relation | Description |
|----------|-------------|
| \`Supports\` | Constructive interference - concepts reinforce each other |
| \`Contradicts\` | Destructive phase cancellation - concepts oppose |
| \`IsA\` | Sub-class or instance relationship |
| \`Causes\` | Causal relationship |
| \`PartOf\` | Compositional relationship |

## Usage

\`\`\`rust
use phi_oml::nlp::PhigumResolver;

let mut brain = PhigumResolver::new();

// Register concepts with their semantic phase
brain.add_concept("Aerospace-Physics", PI / 2.0, "Rocket mechanics and thermal limits");
brain.add_concept("Mass-Production", 0.0, "Production line optimization");

// Learn relations between concepts
brain.learn_fact("Aerospace-Physics supports Mass-Production")?;
brain.learn_fact("Mass-Production causes Cost-Reduction")?;

// Query the graph
let answer = brain.resolve("How does aerospace physics relate to cost reduction?")?;
\`\`\`

## Teaching Strategy

1. **Register base domains** - Add core concepts with explicit descriptions and reference phases
2. **Learn facts** - Feed simple subject-verb-object facts to build the relation graph
3. **Resolve queries** - The resolver traces the strongest resonance path through the graph
4. **Iterate** - Add more concepts and facts to expand the knowledge graph incrementally
`},{id:"docs-phi-crates-puikit",slug:"/docs/phi/crates/puikit",title:"PUIKit",category:"Phi",badge:"Phi",summary:"Cross-platform UI kit for Rust applications - abstracts platform-specific UI frameworks (AppKit on macOS, UIKit on iOS) behind a unified API.",citations:[],position:9999,hidden:!1,draft:!1,content:`# PUIKit

Cross-platform UI kit for Rust applications - abstracts platform-specific UI frameworks (AppKit on macOS, UIKit on iOS) behind a unified API.

## Overview

PUIKit provides:

- **View hierarchy** - Composable view trees with automatic layout
- **Event handling** - Unified touch/mouse/keyboard event abstraction
- **Layout system** - Constraint-based and frame-based layout
- **Rendering** - Metal-backed GPU rendering pipeline

## Architecture

\`\`\`
PUIKit
  ├── View (base view type)
  ├── ScrollView (scrollable container)
  ├── SplitView (resizable panes)
  ├── Button, TextField, Label (controls)
  └── LayoutEngine (constraint solver)
\`\`\`

## Platform Backends

| Platform | Backend |
|----------|---------|
| macOS | AppKit (NSView) |
| iOS | UIKit (UIView) |
| visionOS | RealityKit (Entity) |
`},{id:"docs-phi-sdk-realitykit",slug:"/docs/phi/sdk/realitykit",title:"RealityKit",category:"Phi",badge:"Phi",summary:"A Swift framework for building augmented reality experiences with 3D content.",citations:[],position:9999,hidden:!1,draft:!1,content:`# RealityKit

A Swift framework for building augmented reality experiences with 3D content.

## Overview

RealityKit provides high-performance 3D simulation and rendering for AR applications. It integrates with ARKit for world tracking and scene understanding.

## Key Components

- **Entity** - The fundamental unit of 3D content
- **AnchorEntity** - Anchors content to real-world positions
- **ModelEntity** - Renderable 3D model with materials
- **BodyTrackedEntity** - Rigged character with motion capture
- **Scene** - Container for entities and anchors

## Phi Integration

The \`realitykit\` crate provides Rust bindings for RealityKit entities, anchors, and the scene graph. The \`reality-foundation\` crate covers the supporting types (transforms, bounding boxes, materials).
`},{id:"docs-phi-sdk-swift",slug:"/docs/phi/sdk/swift",title:"Swift",category:"Phi",badge:"Phi",summary:"Swift standard library protocols and types used across the Phi SDK bindings.",citations:[],position:9999,hidden:!1,draft:!1,content:"# Swift\n\nSwift standard library protocols and types used across the Phi SDK bindings.\n\n## Documented Protocols\n\n| Protocol | Description |\n|----------|-------------|\n| `IteratorProtocol` | Sequence iteration contract |\n| `Sequence` | Lazy/sequential access to elements |\n| `RangeReplaceableCollection` | Mutable collection with range replacement |\n| `RawRepresentable` | Bridging between Swift enums and raw values |\n| `OptionSet` | Bitmask-style set of options |\n| `Sendable` | Thread-safe value type marker |\n| `String` | Unicode string manipulation |\n\n## Memory Management\n\n| Topic | Description |\n|-------|-------------|\n| `Manual Memory Management` | `UnsafeMutablePointer`, `UnsafeBufferPointer` |\n| `OpaquePointer` | Type-erased C pointer bridging |\n\n## Phi Usage\n\nThese Swift protocols inform the design of Rust traits in the Phi crates. For example, `Sequence` maps to `Iterator` in Rust, and `OptionSet` maps to bitflag structs.\n"},{id:"docs-phi-sdk-uikit",slug:"/docs/phi/sdk/uikit",title:"UIKit",category:"Phi",badge:"Phi",summary:"Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.",citations:[],position:9999,hidden:!1,draft:!1,content:`# UIKit

Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.

## Overview

UIKit provides the window and view architecture for implementing your UI, the event-handling infrastructure for delivering Multi-Touch and other types of input to your app, and the main run loop for managing interactions between the user, the system, and your app.

## Key Components

- **UIView** - Base view class for rendering and layout
- **UIViewController** - Manages a view hierarchy and coordinate events
- **UIWindow** - Top-level container for the UI
- **UIEvent / UITouch** - Touch and motion event handling
- **UITableView / UICollectionView** - Data-driven scrollable views

## Integration with Phi

UIKit is bound in the \`phi/crates/uikit/\` crate and abstracted by PUIKit for cross-platform use.
`},{id:"phidoc-quickstart",slug:"/docs/phidoc/quickstart",title:"PhiDoc Quickstart",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Create a configuration-driven documentation site with PhiDoc, Vite, and puijs.",citations:[],position:1,hidden:!1,draft:!1,content:`
# PhiDoc Quickstart

PhiDoc is a standalone documentation engine that turns a typed configuration and a directory of Markdown files into a complete puijs-powered site.

## Install

\`\`\`bash
npm install @phiace/phidoc @phiace/puijs react react-dom
npm install -D vite @vitejs/plugin-react typescript sass
\`\`\`

## Create the site config

Create \`phidoc.config.ts\` and define the site, content path, landing page, navigation, and sidebar mode.

\`\`\`ts
import { definePhiDocConfig } from '@phiace/phidoc';

export default definePhiDocConfig({
  title: 'My Project',
  description: 'Project documentation.',
  brandId: 'phidoc',
  docs: {
    path: 'docs',
    routeBasePath: 'docs',
  },
  sidebar: {
    mode: 'auto',
  },
});
\`\`\`

## Add the Vite plugin

\`\`\`ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import phidoc from '@phiace/phidoc/vite';
import siteConfig from './phidoc.config';

export default defineConfig({
  plugins: [react(), phidoc(siteConfig)],
});
\`\`\`

## Render the generated site

\`\`\`tsx
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from '@phiace/phidoc';
import '@phiace/puijs/styles';

export function App() {
  return <PhiDocSite data={docsData} />;
}
\`\`\`

PhiDoc derives the home page, document routes, sidebar sections, active document, previous/next links, and theme from this contract.
`},{id:"phidoc-configuration",slug:"/docs/phidoc/configuration",title:"Configuration",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Configure the PhiDoc site shell, content source, landing page, navigation, and layout.",citations:[],position:2,hidden:!1,draft:!1,content:`
# Configuration

PhiDoc uses one serializable site configuration. The config is the equivalent of a Docusaurus site config, a VitePress theme config, and a Starlight sidebar config.

## Site metadata

\`\`\`ts
export default definePhiDocConfig({
  title: 'Phixum',
  description: 'Rust-native options trading engine.',
  version: 'v0.1.0',
  brandId: 'phixum',
});
\`\`\`

## Docs source

\`\`\`ts
docs: {
  path: 'docs',
  routeBasePath: 'docs',
  include: ['**/*.md', '**/*.mdx'],
  exclude: ['**/_*/**', '**/drafts/**'],
}
\`\`\`

- **path** sets the content directory.
- **routeBasePath** sets the URL prefix.
- **include** and **exclude** control the file glob.
- Number-prefixed filenames such as \`01-intro.md\` control order without appearing in URLs.

## Landing page

\`\`\`ts
home: {
  title: 'Phixum',
  tagline: 'Production-grade options infrastructure.',
  actions: [
    { label: 'Read docs', href: '/docs/intro', variant: 'primary' },
  ],
  features: [
    {
      title: 'Architecture',
      description: 'Engine boundaries and runtime invariants.',
      icon: 'layers',
      href: '/docs/architecture',
    },
  ],
}
\`\`\`

When features are omitted, PhiDoc derives landing cards from the generated sidebar categories.

## Navigation

\`\`\`ts
nav: [
  { label: 'Docs', href: '/docs/intro' },
  { label: 'GitHub', href: 'https://github.com/example/project', external: true },
]
\`\`\`

Navigation is rendered by puijs. Sites do not create a custom navbar.
`},{id:"phidoc-content-model",slug:"/docs/phidoc/content-model",title:"Content Model",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Use Markdown files and frontmatter to define routes, titles, summaries, categories, and visibility.",citations:[],position:3,hidden:!1,draft:!1,content:`
# Content Model

PhiDoc treats the filesystem as the source of truth. Every Markdown or MDX file matched by the docs glob becomes a document.

## Frontmatter

\`\`\`md
---
id: options-pricing
title: Options Pricing
description: Black-Scholes, Greeks, and volatility surfaces.
category: Concepts
badge: Quant
sidebar_position: 4
slug: /docs/concepts/options-pricing
citations:
  - Black, F. and Scholes, M. (1973)
---

# Options Pricing
\`\`\`

## Supported fields

- **id** overrides the generated document ID.
- **title** overrides the first Markdown heading.
- **description** or **summary** feeds landing cards and article metadata.
- **category** overrides the directory-derived category.
- **badge** controls the article badge label.
- **sidebar_position** controls ordering inside a category.
- **slug** overrides the route.
- **hidden: true** keeps a route available but removes it from navigation.
- **draft: true** keeps the document in development and excludes it from production builds.
- **citations** renders academic or source references through the docs article UI.

## Defaults

PhiDoc infers missing values from the file path, first heading, first paragraph, and filename order. Frontmatter is optional for simple content and explicit when navigation needs control.
`},{id:"phidoc-sidebars",slug:"/docs/phidoc/sidebars",title:"Sidebars",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Generate sidebars from the filesystem or provide manual sections.",citations:[],position:4,hidden:!1,draft:!1,content:`
# Sidebars

PhiDoc follows the Docusaurus and Starlight convention: the docs directory mirrors the navigation tree.

## Automatic sidebars

\`\`\`ts
sidebar: {
  mode: 'auto',
}
\`\`\`

A directory becomes a section. Each Markdown file becomes a link. Numeric prefixes order files without leaking into route URLs.

\`\`\`text
docs/
  00-quickstart.md
  concepts/
    01-pricing.md
    02-risk.md
\`\`\`

## Category metadata

Add \`_category_.json\` to control a directory label and section position.

\`\`\`json
{
  "label": "Core Concepts",
  "position": 2,
  "collapsed": false
}
\`\`\`

## Manual sidebars

Use manual mode when the route order must differ from the filesystem.

\`\`\`ts
sidebar: {
  mode: 'manual',
  sections: [
    {
      title: 'Start Here',
      items: [
        {
          id: 'docs-quickstart',
          title: 'Quickstart',
          slug: '/docs/quickstart',
          category: 'Start Here',
          position: 1,
        },
      ],
    },
  ],
}
\`\`\`

The generated sidebar model also controls previous and next navigation in \`DocsPortal\`.
`},{id:"phidoc-branding",slug:"/docs/phidoc/branding",title:"Branding and Themes",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Drive PhiDoc with puijs brand themes and the Apple theme style.",citations:[],position:5,hidden:!1,draft:!1,content:"\n# Branding and Themes\n\nPhiDoc does not define application CSS. It renders through puijs and `PuiProvider`.\n\n## Brand selection\n\n```ts\nbrandId: 'phixum'\n```\n\nThe provider resolves the brand palette, gradients, surfaces, borders, typography, and state colors. The site config selects the brand; pages do not restyle it.\n\n## Theme style\n\n`PhiDocSite` defaults to the Apple theme style:\n\n- rounded controls and cards\n- layered gradients\n- soft borders and shadows\n- system-aware light and dark mode\n\n## Component contract\n\nUse puijs layout and display primitives:\n\n- `Page`, `Section`, `Container`, `Stack`, and `Grid`\n- `Navbar`, `Sidebar`, `MenuItem`, and `Tabs`\n- `Card`, `Badge`, `Callout`, `List`, and `Table`\n- `Title`, `Text`, `Button`, and `Icon`\n\nApplication-level CSS files, hardcoded gradients, inline style objects, and custom wrappers are intentionally outside the PhiDoc model.\n"},{id:"phidoc-site-integration",slug:"/docs/phidoc/site-integration",title:"Add PhiDoc to Any Site",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Reuse PhiDoc across phi* projects with a config, Markdown directory, Vite plugin, and one render call.",citations:[],position:6,hidden:!1,draft:!1,content:`
# Add PhiDoc to Any Site

Every site follows the same four-step setup.

## 1. Add dependencies

\`\`\`bash
npm install @phiace/phidoc @phiace/puijs
\`\`\`

## 2. Create \`phidoc.config.ts\`

\`\`\`ts
import { definePhiDocConfig } from '@phiace/phidoc';

export default definePhiDocConfig({
  title: 'Phiano',
  description: 'Phiano documentation.',
  brandId: 'phiano',
  docs: {
    path: 'docs',
    routeBasePath: 'docs',
  },
  sidebar: {
    mode: 'auto',
  },
});
\`\`\`

## 3. Register the Vite plugin

\`\`\`ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import phidoc from '@phiace/phidoc/vite';
import siteConfig from './phidoc.config';

export default defineConfig({
  plugins: [react(), phidoc(siteConfig)],
});
\`\`\`

## 4. Render the site

\`\`\`tsx
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from '@phiace/phidoc';
import '@phiace/puijs/styles';

export function App() {
  return <PhiDocSite data={docsData} />;
}
\`\`\`

No project should recreate navbar, sidebar, article, landing-page, theme, or routing code. Project-specific information belongs in the config and Markdown files.
`},{id:"phidoc-deployment",slug:"/docs/phidoc/deployment",title:"Build and Deployment",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Build a PhiDoc site with Vite and serve it as a static single-page application.",citations:[],position:7,hidden:!1,draft:!1,content:`
# Build and Deployment

PhiDoc uses Vite for development and production builds.

## Scripts

\`\`\`json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  }
}
\`\`\`

## Production behavior

- Markdown content is loaded through the PhiDoc Vite plugin.
- Draft documents are excluded from production content.
- Hidden documents remain addressable but stay out of navigation.
- Routes are handled by the browser history runtime.
- Static hosts should rewrite unknown paths to \`index.html\`.

## Verification

\`\`\`bash
npm run typecheck
npm run build
npm run preview
\`\`\`

The resulting \`dist\` directory can be deployed to any static host.
`},{id:"docs-phixum-architecture-overview",slug:"/docs/phixum/architecture/overview",title:"Architecture Overview",category:"Phixum",badge:"Phixum",summary:"phixum follows a single DAG compilation tree rooted at `phixum-model` and a single async runtime supervisor tree rooted at `phixum-node`.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Architecture Overview

phixum follows a single DAG compilation tree rooted at \`phixum-model\` and a single async runtime supervisor tree rooted at \`phixum-node\`.

## Crate Dependency Graph

\`\`\`
                         ┌─────────────────┐
                         │  phixum-node    │  (Binary entry point)
                         └────────┬────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────┐      ┌──────────────────┐     ┌──────────────────┐
│phixum-strategy│      │phixum-execution  │     │phixum-deribit    │
│               │      │                  │     │                  │
│ QuoteEngine   │      │ OrderManager     │     │ ExchangeAdapter  │
│ ChainManager  │      │ MatchingEngine   │     │ WS/HTTP Client   │
│ Block-STM     │      └────────┬─────────┘     └────────┬─────────┘
└───────┬───────┘               │                        │
        │                       │                        │
   ┌────┴────┐                  │                 ┌──────┴──────┐
   │         │                  │                 │             │
   ▼         ▼                  ▼                 ▼             ▼
┌──────┐ ┌──────┐      ┌─────────────┐  ┌──────────────┐ ┌────────────┐
│model │ │risk  │      │   model     │  │    model     │ │  network   │
└──────┘ └──────┘      └─────────────┘  └──────────────┘ └────────────┘
   │         │               │                 │              │
   └─────────┴───────────────┴─────────────────┴──────────────
                             │
                      ┌──────┴──────┐
                      │ phixum-model │  (Shared vocabulary)
                      │             │
                      │ No internal │
                      │ dependencies│
                      └─────────────┘
\`\`\`

## Key Design Decisions

- **Single Tree Rule** - All crates form a single DAG, no circular dependencies
- **Concurrency/Lock-free** - Hot path uses ArcSwap, infallible mutexes, Rayon parallelism
- **200-Line Limit** - Implementation files kept under 200 lines for auditability
- **Diem Standards** - READMEs follow Diem frontmatter format
`},{id:"docs-phixum-infra-ci-cd",slug:"/docs/phixum/infra/ci-cd",title:"CI/CD Pipeline",category:"Phixum",badge:"Phixum",summary:"phixum uses GitHub Actions for continuous integration and deployment.",citations:[],position:9999,hidden:!1,draft:!1,content:`# CI/CD Pipeline

phixum uses GitHub Actions for continuous integration and deployment.

## Workflows

### CI (\`ci.yml\`)
Triggered on pull requests:
- \`cargo fmt --check\`
- \`cargo clippy -- -D warnings\`
- \`cargo test --workspace\`
- \`cargo tarpaulin --workspace\` (coverage)

### Staging Deploy (\`deploy-staging.yml\`)
Triggered on push to \`main\`:
- Build Docker image
- Push to ECR
- \`helm upgrade --install\` to staging EKS

### Production Deploy (\`deploy-production.yml\`)
Manual dispatch with approval gate:
- Promote image from staging ECR
- \`helm upgrade --install\` to production EKS
- Verify rollout status

## Self-Hosted Runners

Runners are provisioned on dedicated Linux VMs with:
- Docker Engine
- kubectl, helm
- Rust toolchain
- AWS CLI

KUBECONFIG is stored as GitHub Actions encrypted secrets.
`},{id:"docs-phixum-architecture-concurrency-model",slug:"/docs/phixum/architecture/concurrency-model",title:"Concurrency Model",category:"Phixum",badge:"Phixum",summary:"phixum uses a lock-free architecture to keep the Tokio async event loop completely unblocked.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Concurrency Model

phixum uses a lock-free architecture to keep the Tokio async event loop completely unblocked.

## Core Principles

### 1. Lock-Free Reads via ArcSwap

All hot-path reads use \`ArcSwap\` snapshots - no mutex acquisition on the quote path:

\`\`\`rust
let snapshot = self.market_data.load_full();  // Lock-free read
let quotes = snapshot.quotes();
\`\`\`

### 2. Infallible Locking

\`InfallibleMutex\` and \`InfallibleRwLock\` crash-fast on poison - no silent corruption:

\`\`\`rust
let guard = self.state.lock_infallible();  // Panics if poisoned
\`\`\`

### 3. Rayon Parallel Reductions

CPU-intensive work (Greeks computation, risk aggregation) is dispatched to Rayon, keeping the Tokio runtime free:

\`\`\`rust
let total_delta: f64 = positions
    .par_iter()
    .map(|p| p.delta())
    .sum();
\`\`\`

### 4. SPSC Channels

Market data flows through Single-Producer Single-Consumer channels with pre-allocated buffers - zero allocation on the hot path.

## Thread Topology

\`\`\`
Tokio Runtime (async I/O)
  ├── Market Data Receiver (WS → SPSC)
  ├── Quote Engine (SPSC → ArcSwap snapshot)
  ├── Order Manager (async gRPC)
  └── Risk Gateway (periodic Rayon batch)

Rayon Pool (CPU-bound)
  ├── Greeks Computation
  ├── Risk Aggregation
  └── ML Inference
\`\`\`
`},{id:"docs-phixum-architecture-crate-graph",slug:"/docs/phixum/architecture/crate-graph",title:"Crate Graph",category:"Phixum",badge:"Phixum",summary:"Detailed dependency relationships between phixum crates.",citations:[],position:9999,hidden:!1,draft:!1,content:"# Crate Graph\n\nDetailed dependency relationships between phixum crates.\n\n## Dependency Table\n\n| Crate | Depends On | Description |\n|-------|-----------|-------------|\n| `phixum-model` | (none) | Core domain types, no internal deps |\n| `phixum-pricing` | model | Black-Scholes engine, IV solver |\n| `phixum-network` | model | InfallibleMutex, ExchangeAdapter trait |\n| `phixum-risk` | model, pricing | Risk gateway, position limits |\n| `phixum-execution` | model, network | Order manager, matching engine |\n| `phixum-deribit` | model, network | Deribit HTTP + WebSocket adapter |\n| `phixum-strategy` | model, pricing, risk, ml | Quote engine, chain manager |\n| `phixum-persistence` | model | PostgreSQL persistence, HotStuff commit |\n| `phixum-grpc` | model, strategy | tonic gRPC server |\n| `phixum-ml` | model | RegimeClassifier, SpreadOptimiser |\n| `phixum-research` | model, pricing, strategy | Backtest CLI, model training |\n| `phixum-node` | all | Binary entry point, supervisor tree |\n\n## Build Order\n\n```\nphixum-model → phixum-pricing → phixum-network → phixum-risk\n            → phixum-ml → phixum-execution → phixum-deribit\n            → phixum-strategy → phixum-persistence → phixum-grpc\n            → phixum-research → phixum-node\n```\n"},{id:"docs-phixum-flows-flow-01",slug:"/docs/phixum/flows/flow-01",title:"Flow 01 - Market Data Ingestion",category:"Phixum",badge:"Phixum",summary:"",citations:[],position:9999,hidden:!1,draft:!1,content:`# Flow 01 - Market Data Ingestion

## Trigger
WebSocket message received from Deribit exchange.

## Preconditions
- phixum-node is running
- Deribit WebSocket connection is established
- SPSC channel buffer is allocated

## Steps
1. WebSocket receiver thread reads message frame
2. Message is deserialized into \`MarketData\` struct
3. \`MarketData\` is pushed to SPSC channel (non-blocking)
4. Quote engine consumer reads from channel
5. ArcSwap snapshot is updated with new market data (lock-free)

## Postconditions
- Latest market data is available via \`ArcSwap::load_full()\` to all readers
- No mutex acquisition occurred on the hot path

## Error Handling
- If SPSC channel is full, message is dropped (logged at WARN level)
- If deserialization fails, raw message is logged at ERROR level and dropped
`},{id:"docs-phixum-flows-flow-02",slug:"/docs/phixum/flows/flow-02",title:"Flow 02 - Quote Generation",category:"Phixum",badge:"Phixum",summary:"",citations:[],position:9999,hidden:!1,draft:!1,content:`# Flow 02 - Quote Generation

## Trigger
Market data snapshot updated (Flow 01 postcondition).

## Preconditions
- Fresh market data in ArcSwap snapshot
- Option chain is initialized
- Risk gateway has current positions

## Steps
1. Quote engine reads latest ArcSwap snapshot (lock-free)
2. Black-Scholes pricing computes fair value for each option (f32 hot path)
3. Greeks are computed for portfolio risk assessment
4. ML module classifies regime and adjusts spread
5. Risk gateway validates position limits
6. Quote is published to order manager via async channel

## Postconditions
- Quotes are sent to order manager for execution
- Risk metrics are updated for monitoring

## Error Handling
- If risk gateway rejects, quote is suppressed and logged
- If ML model is unavailable, default spread is used
`},{id:"docs-phixum-flows-flow-overview",slug:"/docs/phixum/flows/flow-overview",title:"Flow Overview",category:"Phixum",badge:"Phixum",summary:"phixum documents 32 operational flows covering the complete trading lifecycle.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Flow Overview

phixum documents 32 operational flows covering the complete trading lifecycle.

## Flow Categories

- **Flows 01–10** - Market data ingestion, pricing, and quote generation
- **Flows 11–20** - Order management, execution, and fill processing
- **Flows 21–28** - Risk management, position limits, and margin checks
- **Flows 29–32** - Persistence, recovery, and graceful shutdown

Each flow document follows a standard template: trigger, preconditions, steps, postconditions, and error handling.

See the [full flow index](https://github.com/gemphi/phixum/tree/main/docs) in the phixum repository for individual flow documents.
`},{id:"docs-phixum-infra-kubernetes",slug:"/docs/phixum/infra/kubernetes",title:"Kubernetes Deployment",category:"Phixum",badge:"Phixum",summary:"phixum deploys to Kubernetes via Helm charts with the following topology.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Kubernetes Deployment

phixum deploys to Kubernetes via Helm charts with the following topology.

## Deployments

| Deployment | Replicas | Purpose |
|-----------|----------|---------|
| phixum-node | 3 | Trading engine (horizontal scaling) |
| phixum-worker | 2 | Background workers (persistence, ML) |
| postgres-proxy | 1 | Connection pooler (PgBouncer) |

## Services

- **phixum-grpc** - gRPC API (port 50051)
- **phixum-metrics** - Prometheus metrics (port 9090)

## Helm

\`\`\`bash
helm upgrade --install phixum ./helm/phixum \\
  --set image.tag=latest \\
  --namespace phixum
\`\`\`

## Autoscaling

Horizontal Pod Autoscaler targets:
- CPU: 70% utilization
- Memory: 80% utilization
- Custom: quotes/sec metric
`},{id:"docs-phixum-intro",slug:"/docs/phixum/intro",title:"phixum",category:"Phixum",badge:"Phixum",summary:"A production-grade, Rust-native options trading engine for crypto derivatives.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum

A production-grade, Rust-native options trading engine for crypto derivatives.

## Overview

phixum is a systematic options market-making platform demonstrating mastery of lock-free architecture, Black-Scholes pricing, multi-exchange adapters, and ML integration - built as a single, cohesive Rust workspace.

## Features

- **Real-time Black-Scholes Pricing** - f32 hot-path for Greeks, f64 exact for risk aggregation
- **Implied Volatility Solver** - Halley iteration with full convergence fallback
- **Multi-Exchange Adapter** - Deribit adapter with trait-based extensibility
- **Lock-Free Architecture** - ArcSwap snapshots, SPSC channels, zero-lock reads on hot path
- **Risk Gateway** - Position limits, margin checks, non-copyable CollateralResource
- **ML Integration** - RegimeClassifier, SpreadOptimiser, ModelRegistry, ShadowMode
- **Full DevOps** - Terraform (EKS/RDS/ECR), Helm charts, GitHub Actions CI/CD

## Quick Start

\`\`\`bash
git clone https://github.com/phixum/phixum.git
cd phixum
cargo build --release
cargo test --workspace
cargo run --release --bin phixum-node
\`\`\`

## Design Principles

1. **Lock-Free Reads** - All hot-path reads use ArcSwap snapshots
2. **Type-Safe Resources** - CollateralResource cannot be copied (Move-VM pattern)
3. **f32 Hot Path** - Greeks compute in f32 (~4x faster), f64 for risk aggregation
4. **Zero-Allocation Events** - SPSC channels, pre-allocated buffers
5. **Team Ownership Boundaries** - Each crate = one team, clear interface contracts

## Performance Targets

| Metric | Target |
|--------|--------|
| Quote latency | < 1ms (P99) |
| Greeks computation | < 10ms for 500 positions |
| Memory per connection | < 10 MB |
| Throughput | 10k quotes/sec |
`},{id:"docs-phixum-crates-phixum-execution",slug:"/docs/phixum/crates/phixum-execution",title:"phixum-execution",category:"Phixum",badge:"Phixum",summary:"Order management and matching engine for executing trades.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-execution

Order management and matching engine for executing trades.

## Components

- **OrderManager** - Tracks active orders, handles acknowledgments and fills
- **InMemoryMatchingEngine** - Price-time priority matching for internal testing

## Order States

\`\`\`
Pending → Acknowledged → PartiallyFilled → Filled
                     ↘ → Rejected
                     ↘ → Cancelled
\`\`\`
`},{id:"docs-phixum-crates-phixum-ml",slug:"/docs/phixum/crates/phixum-ml",title:"phixum-ml",category:"Phixum",badge:"Phixum",summary:"Machine learning integration for regime classification and spread optimization.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-ml

Machine learning integration for regime classification and spread optimization.

## Components

- **RegimeClassifier** - Classifies market regime (trending, mean-reverting, volatile)
- **SpreadOptimiser** - Adjusts bid-ask spread based on regime and inventory
- **ModelRegistry** - Manages multiple ML models with versioning
- **ShadowMode** - Runs models in parallel without affecting live quotes

## Architecture

ML inference runs on the Rayon thread pool to avoid blocking the Tokio runtime. Models are loaded from serialized weights and updated via the ModelRegistry without restart.
`},{id:"docs-phixum-crates-phixum-model",slug:"/docs/phixum/crates/phixum-model",title:"phixum-model",category:"Phixum",badge:"Phixum",summary:"Core domain types with no internal dependencies - the shared vocabulary for all phixum crates.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-model

Core domain types with no internal dependencies - the shared vocabulary for all phixum crates.

## Key Types

- \`OptionType\` - Call/Put enum
- \`OptionContract\` - Strike, expiry, underlying, option type
- \`Position\` - Quantity, average price, contract
- \`Order\` - Side, price, quantity, status
- \`Trade\` - Executed order details
- \`MarketData\` - Bid/ask, last price, volume

## Design Rules

- No dependencies on other phixum crates
- All types are \`Clone + Send + Sync\`
- No business logic - pure data definitions
- Serde serialization for all types
`},{id:"docs-phixum-crates-phixum-node",slug:"/docs/phixum/crates/phixum-node",title:"phixum-node",category:"Phixum",badge:"Phixum",summary:"Binary entry point and async runtime supervisor tree root.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-node

Binary entry point and async runtime supervisor tree root.

## Responsibilities

- Initializes the Tokio runtime
- Starts all subsystems (market data, strategy, execution, risk, persistence)
- Manages graceful shutdown
- Exposes gRPC API for external clients

## Startup Sequence

1. Load configuration from TOML
2. Initialize persistence layer (PostgreSQL connection pool)
3. Start market data receiver (WebSocket to Deribit)
4. Initialize pricing engine and option chain
5. Start risk gateway with current positions
6. Launch quote engine
7. Start gRPC server
8. Enter main event loop

## Shutdown

On \`SIGTERM\` or \`Ctrl+C\`:
1. Stop accepting new orders
2. Cancel all open quotes
3. Flush pending state to PostgreSQL
4. Close WebSocket connections
5. Exit cleanly
`},{id:"docs-phixum-crates-phixum-pricing",slug:"/docs/phixum/crates/phixum-pricing",title:"phixum-pricing",category:"Phixum",badge:"Phixum",summary:"Black-Scholes pricing engine and implied volatility solver.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-pricing

Black-Scholes pricing engine and implied volatility solver.

## Features

- **Black-Scholes** - European option pricing with f32 hot path
- **Greeks** - Delta, Gamma, Vega, Theta, Rho
- **IV Solver** - Halley's method with convergence fallback
- **f32/f64 Split** - f32 for per-quote Greeks, f64 for portfolio aggregation

## Usage

\`\`\`rust
use phixum_pricing::BlackScholes;

let bs = BlackScholes::new(spot, strike, vol, r, t);
let price = bs.price(OptionType::Call);
let delta = bs.delta(OptionType::Call);
let iv = bs.implied_vol(market_price, OptionType::Call);
\`\`\`
`},{id:"docs-phixum-crates-phixum-risk",slug:"/docs/phixum/crates/phixum-risk",title:"phixum-risk",category:"Phixum",badge:"Phixum",summary:"Risk gateway enforcing position limits, margin checks, and collateral management.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-risk

Risk gateway enforcing position limits, margin checks, and collateral management.

## Key Concepts

- **CollateralResource** - Non-copyable type (Move-VM pattern) preventing double-spend
- **PositionLimits** - Max position per underlying, per expiry, per strike
- **MarginChecks** - Pre-trade margin validation against available collateral
- **RiskGateway** - Central gate that all orders must pass through before execution

## Design

The risk gateway runs on a periodic Rayon batch, aggregating portfolio risk in f64 precision while the hot path operates in f32.
`},{id:"docs-phixum-crates-phixum-strategy",slug:"/docs/phixum/crates/phixum-strategy",title:"phixum-strategy",category:"Phixum",badge:"Phixum",summary:"Quote engine and option chain manager - the brain of the market-making system.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-strategy

Quote engine and option chain manager - the brain of the market-making system.

## Components

- **QuoteEngine** - Generates bid/ask quotes based on pricing, risk, and ML signals
- **OptionChainManager** - Maintains the full option chain with real-time Greeks
- **Block-STM Greeks** - Parallel Greeks computation inspired by Diem's Block-STM

## Quote Lifecycle

1. Market data arrives via SPSC channel
2. ArcSwap snapshot is updated (lock-free)
3. QuoteEngine reads snapshot, computes fair value
4. Risk gateway validates position limits
5. ML module adjusts spread based on regime
6. Quote is published to order manager
`},{id:"docs-phixum-infra-terraform",slug:"/docs/phixum/infra/terraform",title:"Terraform Infrastructure",category:"Phixum",badge:"Phixum",summary:"phixum uses Terraform to provision AWS infrastructure for production deployment.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Terraform Infrastructure

phixum uses Terraform to provision AWS infrastructure for production deployment.

## Resources

| Resource | Type | Purpose |
|----------|------|---------|
| EKS Cluster | \`aws_eks_cluster\` | Kubernetes control plane |
| EKS Node Group | \`aws_eks_node_group\` | Worker nodes |
| RDS PostgreSQL | \`aws_db_instance\` | Managed database |
| ECR Repository | \`aws_ecr_repository\` | Container registry |
| IAM Roles | \`aws_iam_role\` | Service permissions |
| VPC / Subnets | \`aws_vpc\`, \`aws_subnet\` | Network topology |

## Environments

- **staging** - \`environments/staging.tfvars\`
- **production** - \`environments/production.tfvars\`

## Deployment

\`\`\`bash
cd infra/terraform
terraform init
terraform apply -var-file=environments/staging.tfvars
\`\`\`
`},{id:"docs-shared-contributing",slug:"/docs/shared/contributing",title:"Contributing",category:"Shared Standards",badge:"Shared Standards",summary:"Guidelines for contributing to the gemphi workspace.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Contributing

Guidelines for contributing to the gemphi workspace.

## Development Setup

\`\`\`bash
# Clone the workspace
git clone https://github.com/gemphi/gemphi.git
cd gemphi

# Build Phi crates
cd phi && cargo build --release

# Build Phixum crates
cd ../phixum && cargo build --release

# Run docs site
cd ../phidoc && npm install && npm start
\`\`\`

## Pull Request Process

1. Create a feature branch from \`main\`
2. Ensure \`cargo fmt --check\` passes
3. Ensure \`cargo clippy -- -D warnings\` passes
4. Ensure \`cargo test --workspace\` passes
5. Write/update tests for changed code
6. Request review from at least one maintainer
7. Squash merge after approval

## Code Style

- Follow Rust idioms - no unnecessary \`clone()\`, prefer borrows
- Keep files under 200 lines - split into modules
- Document public APIs with \`///\` doc comments
- Use meaningful variable names - no single letters except in tight loops
`},{id:"docs-shared-diem-standards",slug:"/docs/shared/diem-standards",title:"Diem Standards",category:"Shared Standards",badge:"Shared Standards",summary:"The gemphi workspace follows Diem-inspired standards for crate organization, README formatting, and code quality.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Diem Standards

The gemphi workspace follows Diem-inspired standards for crate organization, README formatting, and code quality.

## README Frontmatter

Every crate README must include YAML frontmatter:

\`\`\`markdown
---
id: crate-name
title: Crate Name
custom_edit_url: https://github.com/gemphi/workspace/edit/main/crates/crate-name/README.md
---

# Crate Name

Description...
\`\`\`

## Crate Conventions

1. **Single Tree Rule** - All crates form a single DAG compilation tree
2. **200-Line Limit** - Implementation files kept under 200 lines
3. **Lock-Free Hot Path** - ArcSwap snapshots, infallible mutexes, Rayon parallelism
4. **Consistent READMEs** - Every crate has a formatted README with frontmatter

## Code Quality

- \`cargo fmt --check\` - No formatting deviations
- \`cargo clippy -- -D warnings\` - No lint warnings
- \`cargo test --workspace\` - All tests pass
- Code reviews required for all merges to \`main\`
`},{id:"docs-shared-readme-format",slug:"/docs/shared/readme-format",title:"README Format",category:"Shared Standards",badge:"Shared Standards",summary:"Standardized README template for all crates in the gemphi workspace.",citations:[],position:9999,hidden:!1,draft:!1,content:`# README Format

Standardized README template for all crates in the gemphi workspace.

## Template

\`\`\`markdown
---
id: crate-name
title: Crate Name
custom_edit_url: https://github.com/gemphi/workspace/edit/main/crates/crate-name/README.md
---

# Crate Name

Brief one-line description.

## Overview

2-3 paragraph description of what the crate does and why it exists.

## Features

- Feature 1
- Feature 2

## Quick Start

\\\`\\\`\\\`bash
cargo build -p crate-name
cargo test -p crate-name
\\\`\\\`\\\`

## Architecture

Brief description of internal structure.

## Dependencies

List of key external dependencies.

## License

MIT
\`\`\`

## Rules

- Frontmatter is mandatory
- \`id\` must match the crate name (kebab-case)
- \`title\` should be human-readable
- \`custom_edit_url\` should point to the correct GitHub edit URL
- Keep READMEs concise - link to detailed docs in PhiDoc for deep dives
`},{id:"docs-shared-intro",slug:"/docs/shared/intro",title:"Shared Documentation",category:"Shared Standards",badge:"Shared Standards",summary:"Cross-workspace conventions, standards, and guidelines shared across Phi and Phixum.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Shared Documentation

Cross-workspace conventions, standards, and guidelines shared across Phi and Phixum.

## Topics

- **Diem Standards** - README frontmatter format and crate conventions
- **Contributing** - Development guidelines for all gemphi projects
- **README Format** - Standardized README template with frontmatter
`}],sidebars:[{title:"PhiDoc Engine",items:[{id:"phidoc-quickstart",title:"PhiDoc Quickstart",slug:"/docs/phidoc/quickstart",category:"PhiDoc Engine",position:1},{id:"phidoc-configuration",title:"Configuration",slug:"/docs/phidoc/configuration",category:"PhiDoc Engine",position:2},{id:"phidoc-content-model",title:"Content Model",slug:"/docs/phidoc/content-model",category:"PhiDoc Engine",position:3},{id:"phidoc-sidebars",title:"Sidebars",slug:"/docs/phidoc/sidebars",category:"PhiDoc Engine",position:4},{id:"phidoc-branding",title:"Branding and Themes",slug:"/docs/phidoc/branding",category:"PhiDoc Engine",position:5},{id:"phidoc-site-integration",title:"Add PhiDoc to Any Site",slug:"/docs/phidoc/site-integration",category:"PhiDoc Engine",position:6},{id:"phidoc-deployment",title:"Build and Deployment",slug:"/docs/phidoc/deployment",category:"PhiDoc Engine",position:7}]},{title:"Phi",items:[{id:"docs-phi-crates-appkit",title:"AppKit",slug:"/docs/phi/crates/appkit",category:"Phi",position:9999},{id:"docs-phi-sdk-arkit",title:"ARKit",slug:"/docs/phi/sdk/arkit",category:"Phi",position:9999},{id:"docs-phi-sdk-foundation",title:"Foundation",slug:"/docs/phi/sdk/foundation",category:"Phi",position:9999},{id:"docs-phi-architecture-gpu-pipeline",title:"GPU Pipeline",slug:"/docs/phi/architecture/gpu-pipeline",category:"Phi",position:9999},{id:"docs-phi-crates-kitpro",title:"KitPro",slug:"/docs/phi/crates/kitpro",category:"Phi",position:9999},{id:"docs-phi-architecture-layer-architecture",title:"Layer Architecture",slug:"/docs/phi/architecture/layer-architecture",category:"Phi",position:9999},{id:"docs-phi-architecture-layout-system",title:"Layout System",slug:"/docs/phi/architecture/layout-system",category:"Phi",position:9999},{id:"docs-phi-intro",title:"Phi",slug:"/docs/phi/intro",category:"Phi",position:9999},{id:"docs-phi-crates-phi-oml",title:"phi-oml",slug:"/docs/phi/crates/phi-oml",category:"Phi",position:9999},{id:"docs-phi-crates-phifly",title:"PhiFly",slug:"/docs/phi/crates/phifly",category:"Phi",position:9999},{id:"docs-phi-crates-phigum",title:"Phigum",slug:"/docs/phi/crates/phigum",category:"Phi",position:9999},{id:"docs-phi-crates-puikit",title:"PUIKit",slug:"/docs/phi/crates/puikit",category:"Phi",position:9999},{id:"docs-phi-sdk-realitykit",title:"RealityKit",slug:"/docs/phi/sdk/realitykit",category:"Phi",position:9999},{id:"docs-phi-sdk-swift",title:"Swift",slug:"/docs/phi/sdk/swift",category:"Phi",position:9999},{id:"docs-phi-sdk-uikit",title:"UIKit",slug:"/docs/phi/sdk/uikit",category:"Phi",position:9999}]},{title:"Phixum",items:[{id:"docs-phixum-architecture-overview",title:"Architecture Overview",slug:"/docs/phixum/architecture/overview",category:"Phixum",position:9999},{id:"docs-phixum-infra-ci-cd",title:"CI/CD Pipeline",slug:"/docs/phixum/infra/ci-cd",category:"Phixum",position:9999},{id:"docs-phixum-architecture-concurrency-model",title:"Concurrency Model",slug:"/docs/phixum/architecture/concurrency-model",category:"Phixum",position:9999},{id:"docs-phixum-architecture-crate-graph",title:"Crate Graph",slug:"/docs/phixum/architecture/crate-graph",category:"Phixum",position:9999},{id:"docs-phixum-flows-flow-01",title:"Flow 01 - Market Data Ingestion",slug:"/docs/phixum/flows/flow-01",category:"Phixum",position:9999},{id:"docs-phixum-flows-flow-02",title:"Flow 02 - Quote Generation",slug:"/docs/phixum/flows/flow-02",category:"Phixum",position:9999},{id:"docs-phixum-flows-flow-overview",title:"Flow Overview",slug:"/docs/phixum/flows/flow-overview",category:"Phixum",position:9999},{id:"docs-phixum-infra-kubernetes",title:"Kubernetes Deployment",slug:"/docs/phixum/infra/kubernetes",category:"Phixum",position:9999},{id:"docs-phixum-intro",title:"phixum",slug:"/docs/phixum/intro",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-execution",title:"phixum-execution",slug:"/docs/phixum/crates/phixum-execution",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-ml",title:"phixum-ml",slug:"/docs/phixum/crates/phixum-ml",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-model",title:"phixum-model",slug:"/docs/phixum/crates/phixum-model",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-node",title:"phixum-node",slug:"/docs/phixum/crates/phixum-node",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-pricing",title:"phixum-pricing",slug:"/docs/phixum/crates/phixum-pricing",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-risk",title:"phixum-risk",slug:"/docs/phixum/crates/phixum-risk",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-strategy",title:"phixum-strategy",slug:"/docs/phixum/crates/phixum-strategy",category:"Phixum",position:9999},{id:"docs-phixum-infra-terraform",title:"Terraform Infrastructure",slug:"/docs/phixum/infra/terraform",category:"Phixum",position:9999}]},{title:"Shared Standards",items:[{id:"docs-shared-contributing",title:"Contributing",slug:"/docs/shared/contributing",category:"Shared Standards",position:9999},{id:"docs-shared-diem-standards",title:"Diem Standards",slug:"/docs/shared/diem-standards",category:"Shared Standards",position:9999},{id:"docs-shared-readme-format",title:"README Format",slug:"/docs/shared/readme-format",category:"Shared Standards",position:9999},{id:"docs-shared-intro",title:"Shared Documentation",slug:"/docs/shared/intro",category:"Shared Standards",position:9999}]}],blogItems:[],blogSidebars:[]};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=(...l)=>l.filter((u,a,p)=>!!u&&u.trim()!==""&&p.indexOf(u)===a).join(" ").trim();/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,a,p)=>p?p.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=l=>{const u=rf(l);return u.charAt(0).toUpperCase()+u.slice(1)};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var la={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=l=>{for(const u in l)if(u.startsWith("aria-")||u==="role"||u==="title")return!0;return!1},sf=ne.createContext({}),af=()=>ne.useContext(sf),lf=ne.forwardRef(({color:l,size:u,strokeWidth:a,absoluteStrokeWidth:p,className:_="",children:x,iconNode:w,...E},N)=>{const{size:z=24,strokeWidth:q=2,absoluteStrokeWidth:F=!1,color:M="currentColor",className:O=""}=af()??{},X=p??F?Number(a??q)*24/Number(u??z):a??q;return ne.createElement("svg",{ref:N,...la,width:u??z??la.width,height:u??z??la.height,stroke:l??M,strokeWidth:X,className:zc("lucide",O,_),...!x&&!of(E)&&{"aria-hidden":"true"},...E},[...w.map(([W,R])=>ne.createElement(W,R)),...Array.isArray(x)?x:[x]])});/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(l,u)=>{const a=ne.forwardRef(({className:p,..._},x)=>ne.createElement(lf,{ref:x,iconNode:u,className:zc(`lucide-${tf(xc(l))}`,`lucide-${l}`,p),..._}));return a.displayName=xc(l),a};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lc=je("arrow-left",uf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],df=je("arrow-right",cf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],fa=je("book-open",pf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hf=je("check",ff);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gf=je("circle-alert",mf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vf=je("circle-check",yf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],xf=je("code-xml",_f);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],kf=je("copy",wf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Pf=je("graduation-cap",Sf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],wc=je("info",Cf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],jf=je("layers",Ef);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Rf=je("layout-grid",Nf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Tf=je("loader-circle",Df);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Lf=je("moon",zf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],If=je("palette",Mf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],Of=je("rocket",Af);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Mc=je("search",bf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Uf=je("settings",Ff);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],$f=je("shield",Bf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Wf=je("sparkles",qf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Vf=je("sun",Hf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Qf=je("terminal",Kf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Yf=je("triangle-alert",Gf);function J(...l){const u=[];for(const a of l)if(a){if(typeof a=="string"||typeof a=="number")u.push(String(a));else if(Array.isArray(a)){const p=J(...a);p&&u.push(p)}else if(typeof a=="object")for(const[p,_]of Object.entries(a))_&&u.push(p)}return u.join(" ")}const kc={PRIMARY:"primary",ICON:"icon"},$r={SM:"sm",MD:"md",LG:"lg"},Xf="_button_1bscs_1",Zf="_sm_1bscs_17",Jf="_md_1bscs_22",eh="_lg_1bscs_26",nh="_iconSm_1bscs_31",th="_iconMd_1bscs_36",rh="_iconLg_1bscs_41",ih="_primary_1bscs_46",oh="_disabled_1bscs_50",sh="_secondary_1bscs_54",ah="_outline_1bscs_62",lh="_ghost_1bscs_71",uh="_danger_1bscs_79",ch="_icon_1bscs_31",dh="_fullWidth_1bscs_92",ph="_loading_1bscs_96",fh="_spin_1bscs_106",Un={button:Xf,sm:Zf,md:Jf,lg:eh,iconSm:nh,iconMd:th,iconLg:rh,primary:ih,disabled:oh,secondary:sh,outline:ah,ghost:lh,danger:uh,icon:ch,fullWidth:dh,loading:ph,spin:fh},ut=({variant:l=kc.PRIMARY,size:u=$r.MD,fullWidth:a=!1,loading:p=!1,loadingText:_,icon:x,iconLeft:w,iconRight:E,className:N="",children:z,...q})=>{const F=l===kc.ICON,M=u===$r.SM?14:u===$r.LG?20:16,O=u===$r.SM?16:u===$r.LG?24:20,X=J(Un.button,!F&&Un[u],F&&Un[`icon${u.charAt(0).toUpperCase()+u.slice(1)}`],Un[l],a&&Un.fullWidth,p&&Un.loading,"disabled"in q&&q.disabled&&Un.disabled,N),W=w,R=E,Z=p?d.jsxs(d.Fragment,{children:[d.jsx(Tf,{className:Un.spin,"aria-hidden":!0,size:F?O:M}),!F&&d.jsx("span",{children:_||z})]}):d.jsxs(d.Fragment,{children:[x&&d.jsx("span",{className:Un.iconNode,children:x}),!F&&W&&d.jsx(W,{"aria-hidden":!0,size:M}),!F&&z&&d.jsx("span",{children:z}),!F&&R&&d.jsx(R,{"aria-hidden":!0,size:M}),F&&W&&d.jsx(W,{"aria-hidden":!0,size:O})]});if("href"in q&&q.href){const{href:I,...re}=q;return d.jsx("a",{href:I,className:X,...re,children:Z})}const{disabled:H,...$}=q;return d.jsx("button",{className:X,disabled:H||p,...$,children:Z})},hh="_icon_rhtm4_1",mh={icon:hh},gh={MD:"md"},yh={xs:12,sm:14,md:16,lg:20,xl:24},Ic=({name:l,icon:u,size:a=gh.MD,className:p=""})=>{const _=u||l;if(!_)return null;const x=typeof a=="number"?a:yh[a]||16;return d.jsx(_,{className:J(mh.icon,p),size:x,color:"currentColor"})},vh="_badge_1oncu_1",_h="_primary_1oncu_14",xh="_secondary_1oncu_19",wh="_success_1oncu_24",kh="_warning_1oncu_29",Sh="_info_1oncu_34",Ph="_error_1oncu_39",Ch="_count_1oncu_44",Sc={badge:vh,primary:_h,secondary:xh,success:wh,warning:kh,info:Sh,error:Ph,count:Ch},Eh={PRIMARY:"primary"},so=({children:l,variant:u=Eh.PRIMARY,className:a="",...p})=>d.jsx("span",{className:J(Sc.badge,Sc[u],a),...p,children:l});function jh(l){if(l)return l==="transparent"?"transparent":l==="inherit"?"inherit":l.startsWith("gradient-")||l.startsWith("brand-")?`var(--phi-${l})`:l}function Nh(l){return l?l==="inherit"?"inherit":{primary:"var(--phi-color-primary)","primary-hover":"var(--phi-color-primary-hover)",secondary:"var(--phi-color-secondary)","text-primary":"var(--phi-color-text-primary)","text-secondary":"var(--phi-color-text-secondary)","text-muted":"var(--phi-color-text-muted)","text-inverse":"var(--phi-color-text-inverse)",success:"var(--phi-color-success)",warning:"var(--phi-color-warning)",error:"var(--phi-color-error)",info:"var(--phi-color-info)"}[l]||l:void 0}function Pn(l){if(l!==void 0)return`${l*.25}rem`}function Rh(l){return l?{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}[l]||l:void 0}function ct(l){const u={};l.background&&(u.background=jh(l.background)),l.color&&(u.color=Nh(l.color));const a=l.paddingY??l.padding,p=l.paddingX??l.padding;return a!==void 0&&(u.paddingTop=u.paddingTop||Pn(a),u.paddingBottom=u.paddingBottom||Pn(a)),p!==void 0&&(u.paddingLeft=u.paddingLeft||Pn(p),u.paddingRight=u.paddingRight||Pn(p)),l.paddingTop!==void 0&&(u.paddingTop=Pn(l.paddingTop)),l.paddingBottom!==void 0&&(u.paddingBottom=Pn(l.paddingBottom)),l.paddingLeft!==void 0&&(u.paddingLeft=Pn(l.paddingLeft)),l.paddingRight!==void 0&&(u.paddingRight=Pn(l.paddingRight)),l.margin!==void 0&&(u.margin=Pn(l.margin)),l.marginTop!==void 0&&(u.marginTop=Pn(l.marginTop)),l.marginBottom!==void 0&&(u.marginBottom=Pn(l.marginBottom)),l.maxWidth&&(u.maxWidth=Rh(l.maxWidth)),l.minWidth&&(u.minWidth=l.minWidth),l.minHeight&&(u.minHeight=l.minHeight),l.align&&(u.textAlign=l.align),l.textDecoration&&(u.textDecoration=l.textDecoration),l.opacity!==void 0&&(u.opacity=l.opacity),l.textTransform&&(u.textTransform=l.textTransform),l.letterSpacing&&(u.letterSpacing=l.letterSpacing),u}const Dh="_title_1v901_1",Th="_h1_1v901_10",zh="_h2_1v901_15",Lh="_h3_1v901_20",Mh="_h4_1v901_24",Ih="_h5_1v901_28",Ah="_h6_1v901_32",ua={title:Dh,h1:Th,h2:zh,h3:Lh,h4:Mh,h5:Ih,h6:Ah,"size-sm":"_size-sm_1v901_36","size-md":"_size-md_1v901_40","size-lg":"_size-lg_1v901_44","size-xl":"_size-xl_1v901_48","size-2xl":"_size-2xl_1v901_52","size-3xl":"_size-3xl_1v901_56"},Et=({variant:l,level:u,size:a,className:p="",style:_,children:x,...w})=>{const E=l||(u?`h${u}`:"h1"),N=E,z=a?ua[`size-${a}`]:"",F={...ct(w),..._},{background:M,padding:O,paddingTop:X,paddingBottom:W,paddingLeft:R,paddingRight:Z,paddingX:H,paddingY:$,margin:I,marginTop:re,marginBottom:fe,color:ee,maxWidth:V,minWidth:ce,minHeight:Pe,align:Ue,textDecoration:qe,opacity:Me,textTransform:We,letterSpacing:He,...ge}=w;return d.jsx(N,{className:J(ua.title,ua[E],z,p),style:F,...ge,children:x})},Oh="_text_4clpe_1",qr={text:Oh,"intent-default":"_intent-default_4clpe_10","intent-muted":"_intent-muted_4clpe_14","intent-secondary":"_intent-secondary_4clpe_18","intent-primary":"_intent-primary_4clpe_22","intent-success":"_intent-success_4clpe_26","intent-warning":"_intent-warning_4clpe_30","intent-danger":"_intent-danger_4clpe_34","size-xs":"_size-xs_4clpe_39","size-sm":"_size-sm_4clpe_44","size-md":"_size-md_4clpe_49","size-lg":"_size-lg_4clpe_54","size-xl":"_size-xl_4clpe_59","size-2xl":"_size-2xl_4clpe_64","weight-normal":"_weight-normal_4clpe_70","weight-medium":"_weight-medium_4clpe_74","weight-semibold":"_weight-semibold_4clpe_78","weight-bold":"_weight-bold_4clpe_82","align-left":"_align-left_4clpe_87","align-center":"_align-center_4clpe_91","align-right":"_align-right_4clpe_95"},me=({intent:l,variant:u,size:a="md",weight:p="normal",align:_="left",as:x="p",className:w="",style:E,children:N,...z})=>{const q=l||u||"default",M={...ct(z),...E},{background:O,padding:X,paddingTop:W,paddingBottom:R,paddingLeft:Z,paddingRight:H,paddingX:$,paddingY:I,margin:re,marginTop:fe,marginBottom:ee,color:V,maxWidth:ce,minWidth:Pe,minHeight:Ue,textDecoration:qe,opacity:Me,textTransform:We,letterSpacing:He,...ge}=z;return jt.createElement(x,{className:J(qr.text,qr[`intent-${q}`],qr[`size-${a}`],qr[`weight-${p}`],qr[`align-${_}`],w),style:M,...ge},N)},bh="_span_16q3c_1",Fh="_bold_16q3c_10",Uh="_muted_16q3c_14",Bh="_sm_16q3c_18",Pc={span:bh,default:"_default_16q3c_6",bold:Fh,muted:Uh,sm:Bh},$h={DEFAULT:"default"},Vr=({variant:l=$h.DEFAULT,className:u="",children:a,...p})=>d.jsx("span",{className:J(Pc.span,Pc[l],u),...p,children:a}),qh="_divider_1uyvq_1",Wh="_horizontal_1uyvq_8",Hh="_vertical_1uyvq_13",Cc={divider:qh,horizontal:Wh,vertical:Hh},Vh=({orientation:l="horizontal",className:u="",...a})=>d.jsx("hr",{className:J(Cc.divider,Cc[l],u),...a}),Kh=["xs","sm","md","lg","xl"];function Qh(l){return typeof l=="object"&&l!==null}function Dn(l,u,a=String){const p={};if(u===void 0)return p;if(!Qh(u))return p[`--${l}`]=a(u),p;for(const _ of Kh){const x=u[_];if(x!==void 0){const w=_==="xs"?"":`-${_}`;p[`--${l}${w}`]=a(x)}}return p}const Gh="_stack_9w53o_1",Yh={stack:Gh},Xh={start:"flex-start",center:"center",end:"flex-end",between:"space-between",around:"space-around",evenly:"space-evenly"},Zh={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch",baseline:"baseline"},we=jt.forwardRef(({children:l,direction:u="column",gap:a=2,align:p="stretch",justify:_="start",wrap:x=!1,className:w="",style:E,...N},z)=>{const q=ct(N),F={...Dn("stack-direction",u),...Dn("stack-align",p,ge=>Zh[ge]),...Dn("stack-justify",_,ge=>Xh[ge]),...Dn("stack-wrap",x,ge=>ge?"wrap":"nowrap"),...Dn("stack-gap",a,ge=>`${ge*.25}rem`),...q,...E},{background:M,padding:O,paddingTop:X,paddingBottom:W,paddingLeft:R,paddingRight:Z,paddingX:H,paddingY:$,margin:I,marginTop:re,marginBottom:fe,color:ee,maxWidth:V,minWidth:ce,minHeight:Pe,textDecoration:Ue,opacity:qe,textTransform:Me,letterSpacing:We,...He}=N;return d.jsx("div",{ref:z,className:J(Yh.stack,w),style:F,...He,children:l})});we.displayName="Stack";const Jh="_container_1uouw_1",em="_xs_1uouw_30",nm="_sm_1uouw_34",tm="_md_1uouw_38",rm="_lg_1uouw_42",im="_xl_1uouw_46",om="_full_1uouw_50",ca={container:Jh,xs:em,sm:nm,md:tm,lg:rm,xl:im,full:om},Hr=jt.forwardRef(({size:l,fluid:u=!1,className:a="",style:p,children:_,...x},w)=>{const E=u||!l?ca.full:typeof l=="object"?"":ca[l],N=ct(x),z={...Dn("container-max-width",u?"full":l,He=>({xs:"576px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",full:"none"})[He]),...N,...p},{background:q,padding:F,paddingTop:M,paddingBottom:O,paddingLeft:X,paddingRight:W,paddingX:R,paddingY:Z,margin:H,marginTop:$,marginBottom:I,color:re,maxWidth:fe,minWidth:ee,minHeight:V,align:ce,textDecoration:Pe,opacity:Ue,textTransform:qe,letterSpacing:Me,...We}=x;return d.jsx("div",{ref:w,className:J(ca.container,E,a),style:z,...We,children:_})});Hr.displayName="Container";const sm="_grid_3e5qy_1",Ec={grid:sm,"grid-cols-1":"_grid-cols-1_3e5qy_33","grid-cols-2":"_grid-cols-2_3e5qy_37","grid-cols-3":"_grid-cols-3_3e5qy_41","grid-cols-4":"_grid-cols-4_3e5qy_45","grid-cols-5":"_grid-cols-5_3e5qy_49","grid-cols-6":"_grid-cols-6_3e5qy_53","grid-cols-7":"_grid-cols-7_3e5qy_57","grid-cols-8":"_grid-cols-8_3e5qy_61","grid-cols-9":"_grid-cols-9_3e5qy_65","grid-cols-10":"_grid-cols-10_3e5qy_69","grid-cols-11":"_grid-cols-11_3e5qy_73","grid-cols-12":"_grid-cols-12_3e5qy_77","grid-cols-sm-1":"_grid-cols-sm-1_3e5qy_83","grid-cols-sm-2":"_grid-cols-sm-2_3e5qy_86","grid-cols-sm-3":"_grid-cols-sm-3_3e5qy_89","grid-cols-sm-4":"_grid-cols-sm-4_3e5qy_92","grid-cols-sm-5":"_grid-cols-sm-5_3e5qy_95","grid-cols-sm-6":"_grid-cols-sm-6_3e5qy_98","grid-cols-sm-7":"_grid-cols-sm-7_3e5qy_101","grid-cols-sm-8":"_grid-cols-sm-8_3e5qy_104","grid-cols-sm-9":"_grid-cols-sm-9_3e5qy_107","grid-cols-sm-10":"_grid-cols-sm-10_3e5qy_110","grid-cols-sm-11":"_grid-cols-sm-11_3e5qy_113","grid-cols-sm-12":"_grid-cols-sm-12_3e5qy_116","grid-cols-md-1":"_grid-cols-md-1_3e5qy_121","grid-cols-md-2":"_grid-cols-md-2_3e5qy_124","grid-cols-md-3":"_grid-cols-md-3_3e5qy_127","grid-cols-md-4":"_grid-cols-md-4_3e5qy_130","grid-cols-md-5":"_grid-cols-md-5_3e5qy_133","grid-cols-md-6":"_grid-cols-md-6_3e5qy_136","grid-cols-md-7":"_grid-cols-md-7_3e5qy_139","grid-cols-md-8":"_grid-cols-md-8_3e5qy_142","grid-cols-md-9":"_grid-cols-md-9_3e5qy_145","grid-cols-md-10":"_grid-cols-md-10_3e5qy_148","grid-cols-md-11":"_grid-cols-md-11_3e5qy_151","grid-cols-md-12":"_grid-cols-md-12_3e5qy_154","grid-cols-lg-1":"_grid-cols-lg-1_3e5qy_159","grid-cols-lg-2":"_grid-cols-lg-2_3e5qy_162","grid-cols-lg-3":"_grid-cols-lg-3_3e5qy_165","grid-cols-lg-4":"_grid-cols-lg-4_3e5qy_168","grid-cols-lg-5":"_grid-cols-lg-5_3e5qy_171","grid-cols-lg-6":"_grid-cols-lg-6_3e5qy_174","grid-cols-lg-7":"_grid-cols-lg-7_3e5qy_177","grid-cols-lg-8":"_grid-cols-lg-8_3e5qy_180","grid-cols-lg-9":"_grid-cols-lg-9_3e5qy_183","grid-cols-lg-10":"_grid-cols-lg-10_3e5qy_186","grid-cols-lg-11":"_grid-cols-lg-11_3e5qy_189","grid-cols-lg-12":"_grid-cols-lg-12_3e5qy_192","grid-cols-xl-1":"_grid-cols-xl-1_3e5qy_197","grid-cols-xl-2":"_grid-cols-xl-2_3e5qy_200","grid-cols-xl-3":"_grid-cols-xl-3_3e5qy_203","grid-cols-xl-4":"_grid-cols-xl-4_3e5qy_206","grid-cols-xl-5":"_grid-cols-xl-5_3e5qy_209","grid-cols-xl-6":"_grid-cols-xl-6_3e5qy_212","grid-cols-xl-7":"_grid-cols-xl-7_3e5qy_215","grid-cols-xl-8":"_grid-cols-xl-8_3e5qy_218","grid-cols-xl-9":"_grid-cols-xl-9_3e5qy_221","grid-cols-xl-10":"_grid-cols-xl-10_3e5qy_224","grid-cols-xl-11":"_grid-cols-xl-11_3e5qy_227","grid-cols-xl-12":"_grid-cols-xl-12_3e5qy_230"},am=["xs","sm","md","lg","xl"],Ac=jt.forwardRef(({columns:l,gap:u,className:a="",style:p,children:_,xs:x,sm:w,md:E,lg:N,xl:z,...q},F)=>{const M={xs:x,sm:w,md:E,lg:N,xl:z},O=[],X=u??4;for(const R of am){const Z=M[R];if(Z!=null){const H=R==="xs"?"":`-${R}`;O.push(Ec[`grid-cols${H}-${Z}`])}}const W={...Dn("grid-columns",l,R=>`repeat(${R}, minmax(0, 1fr))`),...Dn("grid-gap",X,R=>`${R*.25}rem`),...p};return d.jsx("div",{ref:F,className:J(Ec.grid,...O,a),style:W,...q,children:_})});Ac.displayName="Grid";const lm="_section_1xirn_1",um={section:lm},Ye=({as:l="section",className:u="",style:a,children:p,..._})=>{const w={...ct(_),...a},{background:E,padding:N,paddingTop:z,paddingBottom:q,paddingLeft:F,paddingRight:M,paddingX:O,paddingY:X,margin:W,marginTop:R,marginBottom:Z,color:H,maxWidth:$,minWidth:I,minHeight:re,align:fe,textDecoration:ee,opacity:V,textTransform:ce,letterSpacing:Pe,...Ue}=_;return d.jsx(l,{className:J(um.section,u),style:w,...Ue,children:p})},cm="_page_1mmw5_1",dm="_sidebarWrapper_1mmw5_8",pm="_contentWrapper_1mmw5_14",fm="_header_1mmw5_23",hm="_main_1mmw5_30",mm="_footer_1mmw5_34",Jt={page:cm,sidebarWrapper:dm,contentWrapper:pm,header:fm,main:hm,footer:mm},gm=({header:l,sidebar:u,footer:a,direction:p="row",gap:_=2,mainProps:x,className:w="",children:E,...N})=>{const{className:z,...q}=x??{};return d.jsxs(we,{direction:p,gap:_,className:J(Jt.page,w),...N,children:[u&&d.jsx(Ye,{as:"aside",className:Jt.sidebarWrapper,children:u}),d.jsxs(we,{direction:"column",className:Jt.contentWrapper,children:[l&&d.jsx(Ye,{as:"header",className:Jt.header,children:l}),d.jsx(Ye,{as:"main",...q,className:J(Jt.main,z),children:E}),a&&d.jsx(Ye,{as:"footer",className:Jt.footer,children:a})]})]})},ym="_sticky_1quh2_1",vm={sticky:ym},Oc=({children:l,top:u,bottom:a,offset:p=0,zIndex:_=100,className:x=""})=>{const w={zIndex:_,...Dn("sticky-top",u,E=>`${E+p}px`),...Dn("sticky-bottom",a,E=>`${E+p}px`)};return d.jsx("div",{className:J(vm.sticky,x),style:w,children:l})};Oc.displayName="Sticky";const _m="_footer_1fwua_1",xm={footer:_m},wm=({className:l="",style:u,children:a,...p})=>{const x={...ct(p),...u},{background:w,padding:E,paddingTop:N,paddingBottom:z,paddingLeft:q,paddingRight:F,paddingX:M,paddingY:O,margin:X,marginTop:W,marginBottom:R,color:Z,maxWidth:H,minWidth:$,minHeight:I,align:re,textDecoration:fe,opacity:ee,textTransform:V,letterSpacing:ce,...Pe}=p;return d.jsx("footer",{className:J(xm.footer,l),style:x,...Pe,children:a})},km="_header_1tt6z_1",Sm="_sticky_1tt6z_9",jc={header:km,sticky:Sm},Pm=({sticky:l=!1,className:u="",style:a,children:p,..._})=>{const w={...ct(_),...a},{background:E,padding:N,paddingTop:z,paddingBottom:q,paddingLeft:F,paddingRight:M,paddingX:O,paddingY:X,margin:W,marginTop:R,marginBottom:Z,color:H,maxWidth:$,minWidth:I,minHeight:re,align:fe,textDecoration:ee,opacity:V,textTransform:ce,letterSpacing:Pe,...Ue}=_;return d.jsx("header",{className:J(jc.header,l&&jc.sticky,u),style:w,...Ue,children:p})},Cm="_main_hbhq6_1",Em={main:Cm},jm=({className:l="",style:u,children:a,...p})=>{const x={...ct(p),...u},{background:w,padding:E,paddingTop:N,paddingBottom:z,paddingLeft:q,paddingRight:F,paddingX:M,paddingY:O,margin:X,marginTop:W,marginBottom:R,color:Z,maxWidth:H,minWidth:$,minHeight:I,align:re,textDecoration:fe,opacity:ee,textTransform:V,letterSpacing:ce,...Pe}=p;return d.jsx("main",{className:J(Em.main,l),style:x,...Pe,children:a})},Nm="_portal_4khjw_1",Rm="_header_4khjw_5",Dm="_footer_4khjw_6",Tm="_main_4khjw_10",zm="_contentGrid_4khjw_14",Lm="_sidebar_4khjw_21",Mm="_content_4khjw_14",Im="_aside_4khjw_23",at={portal:Nm,header:Rm,footer:Dm,main:Tm,contentGrid:zm,sidebar:Lm,content:Mm,aside:Im},bc=({variant:l="app",header:u,sidebar:a,aside:p,footer:_,children:x,className:w="",contentClassName:E="",sidebarClassName:N="",asideClassName:z=""})=>d.jsxs(we,{direction:"column",gap:0,className:J(at.portal,w),"data-portal-variant":l,children:[u&&d.jsx(Pm,{className:at.header,children:u}),d.jsx(jm,{background:"gradient-main",minHeight:"100vh",className:at.main,children:d.jsxs(Ye,{as:"section",className:at.contentGrid,padding:0,children:[a&&d.jsx(Ye,{as:"aside",className:J(at.sidebar,N),padding:0,children:a}),d.jsx(Ye,{as:"section",className:J(at.content,E),padding:0,children:x}),p&&d.jsx(Ye,{as:"aside",className:J(at.aside,z),padding:0,children:p})]})}),_&&d.jsx(wm,{className:at.footer,children:_})]}),Am="_wrapper_1p7d6_1",Om="_input_1p7d6_8",bm="_withIcon_1p7d6_26",Fm="_icon_1p7d6_30",Um="_error_1p7d6_38",Wr={wrapper:Am,input:Om,withIcon:bm,icon:Fm,error:Um},Fc=jt.forwardRef(({icon:l,error:u,className:a="",...p},_)=>d.jsxs(we,{direction:"row",align:"center",className:Wr.wrapper,children:[l&&d.jsx(Vr,{className:Wr.icon,children:l}),d.jsx("input",{ref:_,className:J(Wr.input,l&&Wr.withIcon,u&&Wr.error,a),...p})]}));Fc.displayName="Input";const Bm="_navbar_fz0eq_1",$m="_top_fz0eq_11",qm="_bottom_fz0eq_15",Wm="_sticky_fz0eq_21",Hm="_transparent_fz0eq_29",Vm="_solid_fz0eq_34",Km="_section_fz0eq_39",Qm="_item_fz0eq_56",Gm="_itemActive_fz0eq_77",Tn={navbar:Bm,top:$m,bottom:qm,sticky:Wm,default:"_default_fz0eq_25",transparent:Hm,solid:Vm,section:Km,"align-start":"_align-start_fz0eq_43","align-center":"_align-center_fz0eq_47","align-end":"_align-end_fz0eq_52",item:Qm,itemActive:Gm},ha=({children:l,sticky:u=!1,position:a="top",variant:p="default",height:_=56,className:x=""})=>d.jsx(we,{direction:"row",align:"center",justify:"between",className:J(Tn.navbar,Tn[a],Tn[p],u&&Tn.sticky,x),style:{height:`${_}px`},children:l});ha.displayName="Navbar";const er=({children:l,align:u="start",className:a=""})=>d.jsx(we,{direction:"row",align:"center",gap:2,className:J(Tn.section,Tn[`align-${u}`],a),children:l});er.displayName="NavbarSection";const ao=({children:l,active:u=!1,onClick:a,href:p,className:_=""})=>p?d.jsx("a",{href:p,onClick:a,className:J(Tn.item,u&&Tn.itemActive,_),children:l}):d.jsx("button",{type:"button",onClick:a,className:J(Tn.item,u&&Tn.itemActive,_),children:l});ao.displayName="NavbarItem";const Uc=({brandTitle:l,version:u,searchQuery:a,searchPlaceholder:p="Search...",onSearchChange:_,onHome:x,onBackToApp:w,backToAppLabel:E="Open App",dark:N,onToggleDark:z})=>d.jsxs(ha,{sticky:!0,variant:"default",height:65,children:[d.jsxs(er,{align:"start",children:[d.jsx(ao,{onClick:x,children:d.jsxs(we,{direction:"row",align:"center",gap:2,children:[d.jsx(Ic,{icon:fa,size:"md"}),d.jsx(me,{as:"span",weight:"semibold",children:l})]})}),u&&d.jsx(so,{variant:"secondary",children:u})]}),_&&d.jsx(er,{align:"center",children:d.jsx(Fc,{icon:d.jsx(Mc,{size:15}),placeholder:p,value:a||"",onChange:q=>_(q.target.value)})}),d.jsxs(er,{align:"end",children:[w&&d.jsxs(ut,{variant:"outline",size:"sm",onClick:w,children:[d.jsx(Lc,{size:15}),d.jsx("span",{children:E})]}),z&&d.jsx(ut,{variant:"icon",size:"sm",onClick:z,"aria-label":"Toggle theme mode",children:N?d.jsx(Vf,{size:17}):d.jsx(Lf,{size:17})})]})]}),Ym="_item_1iu7j_49",Xm="_active_1iu7j_69",Nc={item:Ym,active:Xm},Zm=({active:l=!1,className:u="",children:a,...p})=>d.jsx("button",{type:"button",className:J(Nc.item,l&&Nc.active,u),...p,children:a}),Jm="_card_1q4tx_1",eg="_hoverable_1q4tx_11",ng="_selected_1q4tx_16",tg="_flat_1q4tx_21",rg="_compact_1q4tx_27",ig="_body_1q4tx_27",og="_hero_1q4tx_31",sg="_image_1q4tx_31",ag="_header_1q4tx_35",lg="_headerContent_1q4tx_44",ug="_headerAction_1q4tx_52",cg="_footer_1q4tx_63",Bn={card:Jm,hoverable:eg,selected:ng,flat:tg,compact:rg,body:ig,hero:og,image:sg,header:ag,headerContent:lg,headerAction:ug,footer:cg},dg={DEFAULT:"default"},Kr=({variant:l=dg.DEFAULT,hoverable:u=!0,compact:a=!1,selected:p=!1,className:_="",children:x,...w})=>d.jsx("article",{className:J("pui-card",Bn.card,Bn[l],a&&Bn.compact,u&&Bn.hoverable,p&&Bn.selected,_),...w,children:x}),ma=({action:l,className:u="",children:a,...p})=>d.jsxs("header",{className:J("pui-card-header",Bn.header,u),...p,children:[d.jsx(we,{direction:"row",align:"center",gap:2,className:Bn.headerContent,children:a}),l&&d.jsx(we,{direction:"row",align:"center",className:Bn.headerAction,children:l})]}),ga=({className:l="",children:u,...a})=>d.jsx("section",{className:J("pui-card-body",Bn.body,l),...a,children:u}),pg="_sidebarSpacerCollapsed_yba54_1",fg="_sidebarSpacerExpanded_yba54_7",hg="_sidebar_yba54_1",mg="_sidebarExpanded_yba54_31",gg="_sidebarCollapsed_yba54_36",yg="_sidebarHeader_yba54_41",vg="_sidebarBody_yba54_48",Ct={sidebarSpacerCollapsed:pg,sidebarSpacerExpanded:fg,sidebar:hg,sidebarExpanded:mg,sidebarCollapsed:gg,sidebarHeader:yg,sidebarBody:vg},_g=ne.createContext(void 0),xg=({children:l,defaultCollapsed:u=!1,className:a})=>{const[p,_]=ne.useState(u);return d.jsxs(_g.Provider,{value:{sidebarCollapsed:p,setSidebarCollapsed:_,sidebarHovered:!1,setSidebarHovered:()=>{}},children:[d.jsx(we,{className:p?Ct.sidebarSpacerCollapsed:Ct.sidebarSpacerExpanded}),d.jsx(Kr,{hoverable:!1,variant:"flat",className:J("pui-sidebar",Ct.sidebar,p?Ct.sidebarCollapsed:Ct.sidebarExpanded,a),children:l})]})},wg=({children:l,className:u})=>d.jsx(ma,{className:J("pui-sidebar-header",Ct.sidebarHeader,u),children:l}),kg=({children:l,className:u})=>d.jsx(ga,{className:J("pui-sidebar-body",Ct.sidebarBody,u),children:l}),Bc=({title:l,sections:u,activeItemId:a,onSelectItem:p,className:_=""})=>d.jsxs(xg,{defaultCollapsed:!1,className:_,children:[d.jsx(wg,{children:d.jsx(me,{size:"sm",weight:"semibold",children:l})}),d.jsx(kg,{children:d.jsx(we,{direction:"column",gap:4,children:u.map(x=>d.jsxs(Ye,{as:"nav",padding:0,children:[d.jsx(me,{as:"span",size:"xs",weight:"bold",color:"text-secondary",textTransform:"uppercase",letterSpacing:"0.06em",children:x.title}),d.jsx(we,{direction:"column",gap:1,children:x.items.map(w=>d.jsx(Zm,{active:w.id===a,onClick:()=>p(w.id),children:d.jsx(me,{as:"span",size:"sm",children:w.title})},w.id))})]},x.title))})})]}),Sg=({posts:l,initialPostId:u,activePostId:a,onPostChange:p,brandTitle:_,version:x,dark:w,onToggleDark:E,className:N=""})=>{var fe;const[z,q]=ne.useState(u||((fe=l[0])==null?void 0:fe.id)||""),[F,M]=ne.useState(""),O=a??z,X=ne.useMemo(()=>l.filter(ee=>!ee.hidden&&!ee.draft),[l]),W=ne.useMemo(()=>{const ee=F.trim().toLowerCase();return ee?X.filter(V=>[V.title,V.category,V.summary,V.content,...V.tags||[]].filter(Boolean).some(ce=>ce.toLowerCase().includes(ee))):X},[X,F]),R=X.find(ee=>ee.id===O)||X[0],Z=X.findIndex(ee=>ee.id===(R==null?void 0:R.id)),H=Z>0?X[Z-1]:void 0,$=Z>=0&&Z<X.length-1?X[Z+1]:void 0,I=ne.useMemo(()=>{const ee=new Map;for(const V of W)ee.set(V.category,[...ee.get(V.category)||[],V]);return[...ee.entries()].map(([V,ce])=>({title:V,items:ce.map(({id:Pe,title:Ue,slug:qe,position:Me})=>({id:Pe,title:Ue,slug:qe,position:Me}))}))},[W]),re=ee=>{a===void 0&&q(ee),p==null||p(ee)};return R?d.jsx(bc,{variant:"blog",className:N,header:d.jsx(Uc,{brandTitle:_,version:x,searchQuery:F,searchPlaceholder:"Search posts...",onSearchChange:M,onHome:()=>re(X[0].id),dark:w,onToggleDark:E}),sidebar:d.jsx(Bc,{title:"Posts",sections:I,activeItemId:R.id,onSelectItem:re}),children:d.jsxs(we,{direction:"column",gap:6,padding:8,children:[d.jsxs(we,{direction:"row",gap:2,align:"center",wrap:!0,children:[d.jsx(so,{variant:"primary",children:R.category}),R.date&&d.jsx(me,{size:"sm",color:"text-secondary",children:R.date}),R.author&&d.jsxs(me,{size:"sm",color:"text-secondary",children:["by ",R.author]})]}),d.jsxs(we,{direction:"column",gap:3,children:[d.jsx(Et,{level:1,children:R.title}),R.summary&&d.jsx(me,{size:"lg",color:"text-secondary",children:R.summary})]}),d.jsx(Kr,{variant:"default",children:d.jsx(me,{as:"p",children:R.content})}),d.jsxs(we,{direction:"row",justify:"between",align:"center",children:[H?d.jsxs(ut,{variant:"outline",onClick:()=>re(H.id),children:[d.jsx(Lc,{size:16}),d.jsx("span",{children:H.title})]}):d.jsx(me,{as:"span"}),$&&d.jsxs(ut,{variant:"outline",onClick:()=>re($.id),children:[d.jsx("span",{children:$.title}),d.jsx(df,{size:16})]})]})]})}):null},Pg="_callout_p30c8_1",Cg="_compact_p30c8_14",Eg="_iconWrapper_p30c8_22",jg="_title_p30c8_25",Ng="_content_p30c8_71",Rg="_body_p30c8_82",Pt={callout:Pg,compact:Cg,"intent-primary":"_intent-primary_p30c8_17",iconWrapper:Eg,title:jg,"intent-success":"_intent-success_p30c8_28","intent-warning":"_intent-warning_p30c8_39","intent-error":"_intent-error_p30c8_50",content:Ng,body:Rg},Dg={primary:d.jsx(wc,{size:18}),success:d.jsx(vf,{size:18}),warning:d.jsx(Yf,{size:18}),error:d.jsx(gf,{size:18}),none:d.jsx(wc,{size:18})},$c=({intent:l="none",title:u,icon:a,compact:p=!1,children:_,className:x,...w})=>{const E=a!==void 0?a:Dg[l];return d.jsxs("div",{className:J(Pt.callout,Pt[`intent-${l}`],p&&Pt.compact,x),role:"region",...w,children:[E&&d.jsx("div",{className:Pt.iconWrapper,children:E}),d.jsxs("div",{className:Pt.content,children:[u&&d.jsx("h5",{className:Pt.title,children:u}),_&&d.jsx("div",{className:Pt.body,children:_})]})]})},Tg="_list_1k40q_1",zg="_item_1k40q_7",qc={list:Tg,item:zg},Wc=({ordered:l=!1,className:u="",children:a,...p})=>{const _=l?"ol":"ul";return d.jsx(_,{className:J(qc.list,u),...p,children:a})},Hc=({className:l="",children:u,...a})=>d.jsx("li",{className:J(qc.item,l),...a,children:u}),Lg="_table_1tzty_1",Mg="_th_1tzty_8",Ig="_td_1tzty_9",Ag="_tr_1tzty_21",nr={table:Lg,th:Mg,td:Ig,tr:Ag},Og=({className:l="",children:u,...a})=>d.jsx("table",{className:J(nr.table,l),...a,children:u}),bg=({className:l="",children:u,...a})=>d.jsx("thead",{className:J(nr.thead,l),...a,children:u}),Fg=({className:l="",children:u,...a})=>d.jsx("tbody",{className:J(nr.tbody,l),...a,children:u}),Rc=({className:l="",children:u,...a})=>d.jsx("tr",{className:J(nr.tr,l),...a,children:u}),Ug=({className:l="",children:u,...a})=>d.jsx("th",{className:J(nr.th,l),...a,children:u}),Bg=({className:l="",children:u,...a})=>d.jsx("td",{className:J(nr.td,l),...a,children:u}),$g="_article_13ezd_1",qg="_breadcrumb_13ezd_8",Wg="_header_13ezd_12",Hg="_titleRow_13ezd_18",Vg="_citationList_13ezd_22",Kg="_body_13ezd_26",Qg="_pagination_13ezd_31",Gg="_prevNext_13ezd_39",Yg="_ellipsis_13ezd_47",Xg="_pre_13ezd_39",Zg="_h2_13ezd_62",Jg="_h3_13ezd_67",ey="_h4_13ezd_72",ny="_blockquote_13ezd_77",ty="_divider_13ezd_81",ry="_inlineCode_13ezd_85",iy="_strong_13ezd_95",oy="_math_13ezd_99",he={article:$g,breadcrumb:qg,header:Wg,titleRow:Hg,citationList:Vg,body:Kg,pagination:Qg,prevNext:Gg,ellipsis:Yg,pre:Xg,h2:Zg,h3:Jg,h4:ey,blockquote:ny,divider:ty,inlineCode:ry,strong:iy,math:oy},sy=({guide:l,prevGuide:u,nextGuide:a,onSelectGuide:p})=>{const[_,x]=ne.useState(!1),w=()=>{navigator.clipboard.writeText(l.content).then(()=>{x(!0),setTimeout(()=>x(!1),2e3)})};return d.jsx(Hr,{size:"lg",className:he.article,children:d.jsxs(we,{direction:"column",gap:6,children:[d.jsxs(we,{direction:"row",align:"center",gap:2,className:he.breadcrumb,children:[d.jsx(me,{as:"span",size:"xs",variant:"primary",weight:"bold",textTransform:"uppercase",letterSpacing:"0.05em",children:l.category}),d.jsx(me,{as:"span",size:"xs",variant:"secondary",children:"/"}),d.jsx(me,{as:"span",size:"xs",variant:"secondary",weight:"semibold",children:l.badge})]}),d.jsxs(Ye,{as:"header",className:he.header,children:[d.jsxs(we,{direction:"row",align:"start",justify:"between",gap:4,className:he.titleRow,children:[d.jsx(Et,{variant:"h1",size:"2xl",className:he.title,children:l.title}),d.jsx(ut,{variant:"outline",size:"sm",onClick:w,icon:_?d.jsx(hf,{size:15}):d.jsx(kf,{size:15}),children:_?"Copied":"Copy Guide"})]}),d.jsx(me,{size:"md",variant:"secondary",className:he.summary,children:l.summary})]}),l.citations&&l.citations.length>0&&d.jsx($c,{intent:"primary",title:"Foundational Literature & Academic References:",icon:d.jsx(Pf,{size:18}),children:d.jsx(Wc,{className:he.citationList,children:l.citations.map((E,N)=>d.jsx(Hc,{children:E},N))})}),d.jsx(Ye,{as:"article",className:he.body,children:d.jsx(ay,{content:l.content})}),d.jsxs(Ye,{as:"footer",className:he.pagination,children:[u?d.jsxs(ut,{variant:"outline",size:"sm",onClick:()=>p(u.id),className:he.prevNext,children:[d.jsx(me,{as:"span",size:"xs",variant:"secondary",weight:"semibold",children:"← PREVIOUS"}),d.jsx(me,{as:"span",size:"sm",variant:"primary",weight:"bold",className:he.ellipsis,children:u.title})]}):d.jsx(Vr,{"aria-hidden":"true"}),a?d.jsxs(ut,{variant:"outline",size:"sm",onClick:()=>p(a.id),className:he.prevNext,children:[d.jsx(me,{as:"span",size:"xs",variant:"secondary",weight:"semibold",children:"NEXT →"}),d.jsx(me,{as:"span",size:"sm",variant:"primary",weight:"bold",className:he.ellipsis,children:a.title})]}):d.jsx(Vr,{"aria-hidden":"true"})]})]})})};function ay({content:l}){const u=ly(l);return d.jsx(we,{direction:"column",gap:5,children:u.map((a,p)=>{switch(a.type){case"code":return d.jsxs(Kr,{variant:"flat",className:he.codeBlock,children:[d.jsx(ma,{className:he.codeHeader,children:d.jsxs(we,{direction:"row",align:"center",gap:2,children:[d.jsx(Qf,{size:13}),d.jsx(me,{as:"span",size:"xs",variant:"secondary",textTransform:"uppercase",letterSpacing:"0.05em",children:a.lang||"text"})]})}),d.jsx(ga,{children:d.jsx("pre",{className:he.pre,children:d.jsx("code",{children:a.content})})})]},p);case"table":return d.jsx(Kr,{variant:"flat",className:he.tableCard,children:d.jsxs(Og,{children:[d.jsx(bg,{children:d.jsx(Rc,{children:a.headers.map((_,x)=>d.jsx(Ug,{children:d.jsx(lt,{text:_})},x))})}),d.jsx(Fg,{children:a.rows.map((_,x)=>d.jsx(Rc,{children:_.map((w,E)=>d.jsx(Bg,{children:d.jsx(lt,{text:w})},E))},x))})]})},p);case"h2":return d.jsx(Et,{variant:"h2",size:"xl",className:he.h2,children:d.jsx(lt,{text:a.content})},p);case"h3":return d.jsx(Et,{variant:"h3",size:"lg",className:he.h3,children:d.jsx(lt,{text:a.content})},p);case"h4":return d.jsx(Et,{variant:"h4",size:"md",className:he.h4,children:d.jsx(lt,{text:a.content})},p);case"blockquote":return d.jsx($c,{intent:"none",className:he.blockquote,children:d.jsx(lt,{text:a.content})},p);case"list":return d.jsx(Wc,{className:he.list,children:a.items.map((_,x)=>d.jsx(Hc,{children:d.jsx(lt,{text:_})},x))},p);case"hr":return d.jsx(Vh,{className:he.divider},p);case"paragraph":default:return d.jsx(me,{size:"md",className:he.paragraph,children:d.jsx(lt,{text:a.content})},p)}})})}function lt({text:l}){if(!l)return null;const u=l.split(/(`[^`]+`|\*\*[^*]+\*\*|\$[^\$]+\$)/g);return d.jsx(d.Fragment,{children:u.map((a,p)=>a.startsWith("`")&&a.endsWith("`")&&a.length>1?d.jsx("code",{className:he.inlineCode,children:a.slice(1,-1)},p):a.startsWith("**")&&a.endsWith("**")&&a.length>3?d.jsx(Vr,{variant:"bold",className:he.strong,children:a.slice(2,-2)},p):a.startsWith("$")&&a.endsWith("$")&&a.length>1?d.jsx(Vr,{className:he.math,children:a.slice(1,-1)},p):d.jsx(jt.Fragment,{children:a},p))})}function ly(l){const u=l.split(`
`),a=[];let p=0;for(;p<u.length;){const x=u[p].trim();if(!x){p++;continue}if(x.startsWith("```")){const E=x.replace("```","").trim(),N=[];for(p++;p<u.length&&!u[p].trim().startsWith("```");)N.push(u[p]),p++;p++,a.push({type:"code",lang:E,content:N.join(`
`)});continue}if(x==="---"||x==="***"){a.push({type:"hr"}),p++;continue}if(x.startsWith("## ")){a.push({type:"h2",content:x.replace(/^##\s+/,"")}),p++;continue}if(x.startsWith("### ")){a.push({type:"h3",content:x.replace(/^###\s+/,"")}),p++;continue}if(x.startsWith("#### ")){a.push({type:"h4",content:x.replace(/^####\s+/,"")}),p++;continue}if(x.startsWith(">")){const E=[];for(;p<u.length&&u[p].trim().startsWith(">");)E.push(u[p].trim().replace(/^>\s*/,"")),p++;a.push({type:"blockquote",content:E.join(" ")});continue}if(x.startsWith("|")&&x.endsWith("|")){const E=[];for(;p<u.length&&u[p].trim().startsWith("|")&&u[p].trim().endsWith("|");)E.push(u[p].trim()),p++;if(E.length>=2){const z=E[0].split("|").slice(1,-1).map(M=>M.trim()),F=E.slice(1).filter(M=>!/^[\|\s\-:]+$/.test(M)).map(M=>M.split("|").slice(1,-1).map(O=>O.trim()));a.push({type:"table",headers:z,rows:F});continue}}if(x.startsWith("- ")||x.startsWith("* ")||/^\d+\.\s/.test(x)){const E=[];for(;p<u.length&&(u[p].trim().startsWith("- ")||u[p].trim().startsWith("* ")||/^\d+\.\s/.test(u[p].trim()));)E.push(u[p].trim().replace(/^[-*]|\d+\.\s*/,"").trim()),p++;a.push({type:"list",items:E});continue}const w=[];for(;p<u.length&&u[p].trim()&&!u[p].trim().startsWith("#")&&!u[p].trim().startsWith("```")&&!u[p].trim().startsWith("|")&&!u[p].trim().startsWith(">")&&!u[p].trim().startsWith("- ")&&!u[p].trim().startsWith("* ")&&u[p].trim()!=="---";)w.push(u[p].trim()),p++;a.push({type:"paragraph",content:w.join(" ")})}return a}const uy=({brandTitle:l,version:u,searchQuery:a,onSearchChange:p,onHome:_,onBackToApp:x,backToAppLabel:w="Open App",dark:E,onToggleDark:N})=>d.jsx(Uc,{brandTitle:l,version:u,searchQuery:a,searchPlaceholder:"Search guides, APIs...",onSearchChange:p,onHome:_,onBackToApp:x,backToAppLabel:w,dark:E,onToggleDark:N}),cy="_sidebar_y31ss_1",dy={sidebar:cy},py=({categories:l,activeGuideId:u,onSelectGuide:a})=>{const p=ne.useMemo(()=>Object.entries(l).map(([_,x])=>({title:_,items:x.map(({id:w,title:E,slug:N,position:z})=>({id:w,title:E,slug:N,position:z}))})),[l]);return d.jsx(Bc,{title:"Documentation",sections:p,activeItemId:u,onSelectItem:a,className:dy.sidebar})},fy="_toc_1xbyv_1",hy="_title_1xbyv_17",my="_list_1xbyv_22",da={toc:fy,title:hy,list:my},gy=()=>d.jsx(Oc,{top:65,children:d.jsxs(Ye,{as:"aside",className:da.toc,children:[d.jsx(me,{as:"span",size:"xs",variant:"secondary",className:da.title,children:"On This Page"}),d.jsxs(Ye,{as:"nav",className:da.list,children:[d.jsx(me,{as:"span",size:"sm",variant:"primary",weight:"semibold",children:"Overview & Setup"}),d.jsx(me,{as:"span",size:"sm",variant:"secondary",children:"Mathematical Equations"}),d.jsx(me,{as:"span",size:"sm",variant:"secondary",children:"Production Examples"}),d.jsx(me,{as:"span",size:"sm",variant:"secondary",children:"API Specifications"})]})]})}),yy="_portal_7nvk9_1",vy="_contentGrid_7nvk9_7",Dc={portal:yy,contentGrid:vy},_y=({guides:l,initialGuideId:u="quickstart",activeGuideId:a,onGuideChange:p,version:_,brandTitle:x="Docs",onBackToApp:w,backToAppLabel:E="Open App",dark:N,onToggleDark:z,className:q=""})=>{const[F,M]=ne.useState(u),[O,X]=ne.useState(""),W=a??F;ne.useEffect(()=>{a===void 0&&M(u)},[a,u]);const R=V=>{a===void 0&&M(V),p==null||p(V)},Z=ne.useMemo(()=>l.filter(V=>!V.hidden&&!V.draft),[l]),H=ne.useMemo(()=>{const V=O.trim().toLowerCase();return V?Z.filter(ce=>[ce.title,ce.category,ce.summary,ce.content].filter(Boolean).some(Pe=>Pe.toLowerCase().includes(V))):Z},[Z,O]),$=ne.useMemo(()=>{const V={};return H.forEach(ce=>{V[ce.category]=[...V[ce.category]||[],ce]}),V},[H]),I=ne.useMemo(()=>Z.find(V=>V.id===W)||Z[0],[Z,W]),re=Z.findIndex(V=>V.id===(I==null?void 0:I.id)),fe=re>0?Z[re-1]:void 0,ee=re>=0&&re<Z.length-1?Z[re+1]:void 0;return I?d.jsx(bc,{variant:"docs",className:J(Dc.portal,q),contentClassName:Dc.contentGrid,header:d.jsx(uy,{brandTitle:x,version:_,searchQuery:O,onSearchChange:X,onHome:()=>{var V;return R(((V=Z[0])==null?void 0:V.id)||u)},onBackToApp:w,backToAppLabel:E,dark:N,onToggleDark:z}),sidebar:d.jsx(py,{categories:$,activeGuideId:I.id,onSelectGuide:R}),aside:d.jsx(gy,{}),children:d.jsx(sy,{guide:I,prevGuide:fe,nextGuide:ee,onSelectGuide:R})}):null},Le=l=>({primary:"#3b82f6",primaryHover:"#2563eb",primaryLight:"#eff6ff",primaryLightDark:"#1e3a8a",secondary:"#475569",secondaryHover:"#334155",success:"#10b981",successLight:"#ecfdf5",successLightDark:"#064e3b",warning:"#f59e0b",warningLight:"#fffbeb",warningLightDark:"#78350f",error:"#ef4444",errorHover:"#dc2626",errorLight:"#fef2f2",errorLightDark:"#450a0a",info:"#0ea5e9",infoHover:"#0284c7",infoLight:"#f0f9ff",infoLightDark:"#0c4a6e",...l}),lo=[{id:"phi",name:"Phi Core",colors:Le({primary:"#6366f1",primaryHover:"#4f46e5",secondary:"#06b6d4"}),gradient:"linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",gradientDark:"linear-gradient(135deg, #6366f1 0%, #164e63 100%)"},{id:"phiace",name:"PhiAce",colors:Le({primary:"#0ea5e9",primaryHover:"#0284c7",secondary:"#6366f1"}),gradient:"linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",gradientDark:"linear-gradient(135deg, #0ea5e9 0%, #312e81 100%)"},{id:"phiano",name:"Phiano Phase",colors:Le({primary:"#8b5cf6",primaryHover:"#7c3aed",secondary:"#ec4899"}),gradient:"linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",gradientDark:"linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)"},{id:"phidoc",name:"PhiDoc",colors:Le({primary:"#14b8a6",primaryHover:"#0d9488",secondary:"#0f766e"}),gradient:"linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",gradientDark:"linear-gradient(135deg, #14b8a6 0%, #134e4a 100%)"},{id:"phient",name:"Phient",colors:Le({primary:"#d946ef",primaryHover:"#c026d3",secondary:"#8b5cf6"}),gradient:"linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)",gradientDark:"linear-gradient(135deg, #d946ef 0%, #581c87 100%)"},{id:"phixum",name:"Phixum Options",colors:Le({primary:"#0284c7",primaryHover:"#0369a1",secondary:"#0f172a"}),gradient:"linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",gradientDark:"linear-gradient(135deg, #0284c7 0%, #082f49 100%)"},{id:"edx",name:"edX Paragon",colors:Le({primary:"#00262b",primaryHover:"#00525d",secondary:"#c40026"}),gradient:"linear-gradient(135deg, #00262b 0%, #007382 100%)",gradientDark:"linear-gradient(135deg, #00262b 0%, #001518 100%)"},{id:"foundry",name:"Palantir Foundry",colors:Le({primary:"#3b82f6",primaryHover:"#2563eb"}),gradient:"linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",gradientDark:"linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)"},{id:"blueprint",name:"Blueprint Slate",colors:Le({primary:"#2d72d2",primaryHover:"#1f53a3",secondary:"#5c7080"}),gradient:"linear-gradient(135deg, #2d72d2 0%, #106ba3 100%)",gradientDark:"linear-gradient(135deg, #2d72d2 0%, #182026 100%)"},{id:"emerald",name:"Emerald Foundry",colors:Le({primary:"#10b981",primaryHover:"#059669"}),gradient:"linear-gradient(135deg, #10b981 0%, #34d399 100%)",gradientDark:"linear-gradient(135deg, #10b981 0%, #065f46 100%)"},{id:"midnight",name:"Midnight Indigo",colors:Le({primary:"#4f46e5",primaryHover:"#4338ca"}),gradient:"linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",gradientDark:"linear-gradient(135deg, #4f46e5 0%, #312e81 100%)"},{id:"amber",name:"Amber Gold",colors:Le({primary:"#d97706",primaryHover:"#b45309"}),gradient:"linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",gradientDark:"linear-gradient(135deg, #d97706 0%, #78350f 100%)"},{id:"sapphire",name:"Sapphire Deep",colors:Le({primary:"#2563eb",primaryHover:"#1d4ed8"}),gradient:"linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",gradientDark:"linear-gradient(135deg, #2563eb 0%, #172554 100%)"},{id:"crimson",name:"Scarlet Crimson",colors:Le({primary:"#e11d48",primaryHover:"#be123c"}),gradient:"linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",gradientDark:"linear-gradient(135deg, #e11d48 0%, #881337 100%)"},{id:"amethyst",name:"Amethyst Mystic",colors:Le({primary:"#9333ea",primaryHover:"#7e22ce"}),gradient:"linear-gradient(135deg, #9333ea 0%, #a855f7 100%)",gradientDark:"linear-gradient(135deg, #9333ea 0%, #581c87 100%)"},{id:"obsidian",name:"Obsidian Pure",colors:Le({primary:"#52525b",primaryHover:"#3f3f46",secondary:"#18181b"}),gradient:"linear-gradient(135deg, #52525b 0%, #71717a 100%)",gradientDark:"linear-gradient(135deg, #27272a 0%, #09090b 100%)"},{id:"coral",name:"Sunset Coral",colors:Le({primary:"#f97316",primaryHover:"#ea580c"}),gradient:"linear-gradient(135deg, #f97316 0%, #fb923c 100%)",gradientDark:"linear-gradient(135deg, #f97316 0%, #7c2d12 100%)"},{id:"titanium",name:"Titanium Platinum",colors:Le({primary:"#64748b",primaryHover:"#475569"}),gradient:"linear-gradient(135deg, #64748b 0%, #94a3b8 100%)",gradientDark:"linear-gradient(135deg, #64748b 0%, #1e293b 100%)"},{id:"aurora",name:"Aurora Borealis",colors:Le({primary:"#14b8a6",primaryHover:"#0d9488"}),gradient:"linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",gradientDark:"linear-gradient(135deg, #14b8a6 0%, #134e4a 100%)"},{id:"zenith",name:"Solar Zenith",colors:Le({primary:"#eab308",primaryHover:"#ca8a04"}),gradient:"linear-gradient(135deg, #eab308 0%, #facc15 100%)",gradientDark:"linear-gradient(135deg, #eab308 0%, #713f12 100%)"}];class Vc{constructor(){Object.defineProperty(this,"descriptors",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}register(u,a,p="singleton"){return this.descriptors.set(u,{identifier:u,factory:a,lifetime:p}),this}registerInstance(u,a){return this.descriptors.set(u,{identifier:u,factory:()=>a,lifetime:"singleton",instance:a}),this}resolve(u){const a=this.descriptors.get(u);if(!a){if(typeof u=="function"){const p=new u;return this.registerInstance(u,p),p}throw new Error(`[ServiceContainer] Service not registered: ${String(u)}`)}return a.lifetime==="singleton"?(a.instance||(a.instance=a.factory(this)),a.instance):a.factory(this)}has(u){return this.descriptors.has(u)}async dispose(){for(const u of this.descriptors.values())u.instance&&typeof u.instance.dispose=="function"&&await u.instance.dispose();this.descriptors.clear()}}const Kc=new Vc,xy=ne.createContext(Kc),wy=({container:l,children:u})=>{const a=ne.useMemo(()=>l||new Vc,[l]);return ne.useEffect(()=>()=>{l!==Kc&&a.dispose().catch(console.error)},[a,l]),d.jsx(xy.Provider,{value:a,children:u})},Qc=ne.createContext({theme:"system",setTheme:()=>{},themeStyle:"apple",setThemeStyle:()=>{},brandId:"foundry",setBrandId:()=>{},preferences:{theme:"system",themeStyle:"apple",brandId:"foundry"},setPreferences:()=>{},brands:lo,isDark:!1}),ky=()=>ne.useContext(Qc),Sy=l=>typeof window>"u"?!1:l==="dark"||l==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches,Py=(l,u,a)=>{if(typeof document>"u")return;const p=document.documentElement,_=Sy(l);p.classList.toggle("dark",_),p.setAttribute("data-theme",_?"dark":"light"),p.setAttribute("data-theme-style",a);const x=lo.find(N=>N.id===u)||lo[0],{colors:w}=x,E=_?x.gradientDark:x.gradient;p.setAttribute("data-brand",x.id),p.style.setProperty("--phi-color-primary",w.primary),p.style.setProperty("--phi-color-primary-hover",w.primaryHover),p.style.setProperty("--phi-color-primary-light",_?w.primaryLightDark:w.primaryLight),p.style.setProperty("--phi-color-primary-dark",_?w.primary:w.primaryHover),p.style.setProperty("--phi-color-secondary",w.secondary),p.style.setProperty("--phi-color-secondary-hover",w.secondaryHover),p.style.setProperty("--phi-color-success",w.success),p.style.setProperty("--phi-color-success-light",_?w.successLightDark:w.successLight),p.style.setProperty("--phi-color-warning",w.warning),p.style.setProperty("--phi-color-warning-light",_?w.warningLightDark:w.warningLight),p.style.setProperty("--phi-color-error",w.error),p.style.setProperty("--phi-color-error-hover",w.errorHover),p.style.setProperty("--phi-color-error-light",_?w.errorLightDark:w.errorLight),p.style.setProperty("--phi-color-info",w.info),p.style.setProperty("--phi-color-info-hover",w.infoHover),p.style.setProperty("--phi-color-info-light",_?w.infoLightDark:w.infoLight),p.style.setProperty("--phi-brand-gradient",E),p.style.setProperty("--phi-gradient-brand",E)},Cy=({children:l,defaultTheme:u="system",defaultThemeStyle:a="apple",defaultBrand:p="foundry",container:_})=>{const[x,w]=ne.useState(()=>typeof window<"u"&&localStorage.getItem("phi-theme")||u),[E,N]=ne.useState(()=>typeof window<"u"&&localStorage.getItem("phi-style")||a),[z,q]=ne.useState(()=>typeof window<"u"&&localStorage.getItem("phi-brand")||p),[F,M]=ne.useState(()=>typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1),O=x==="dark"||x==="system"&&F;ne.useEffect(()=>{const $=window.matchMedia("(prefers-color-scheme: dark)"),I=re=>M(re.matches);return M($.matches),$.addEventListener("change",I),()=>$.removeEventListener("change",I)},[]),ne.useEffect(()=>{Py(x,z,E)},[x,z,E,F]);const X=$=>{w($),localStorage.setItem("phi-theme",$)},W=$=>{N($),localStorage.setItem("phi-style",$)},R=$=>{q($),localStorage.setItem("phi-brand",$)},Z=$=>{$.theme&&X($.theme),$.themeStyle&&W($.themeStyle),$.brandId&&R($.brandId)},H=ne.useMemo(()=>({theme:x,themeStyle:E,brandId:z}),[x,E,z]);return d.jsx(Qc.Provider,{value:{theme:x,setTheme:X,themeStyle:E,setThemeStyle:W,brandId:z,setBrandId:R,preferences:H,setPreferences:Z,brands:lo,isDark:O},children:d.jsx(wy,{container:_,children:l})})},Ey={book:fa,code:xf,grid:Rf,layers:jf,palette:If,rocket:Of,search:Mc,settings:Uf,shield:$f,sparkles:Wf};function jy(l){const u=new Map;for(const a of l)u.has(a.category)||u.set(a.category,a);return[...u.entries()].slice(0,6).map(([a,p])=>({title:a,description:p.summary||`Read the ${a} documentation.`,href:p.slug,icon:"book"}))}function Ny({config:l,items:u,onNavigate:a}){var N,z,q,F,M;const p=l.home||{},_=u[0],x=(N=p.features)!=null&&N.length?p.features:jy(u),w=(z=p.actions)!=null&&z.length?p.actions:[{label:"Read the documentation",href:(_==null?void 0:_.slug)||"/docs",variant:"primary"}],E=(q=l.nav)!=null&&q.length?l.nav:[{label:"Docs",href:(_==null?void 0:_.slug)||"/docs"}];return d.jsxs(gm,{gap:0,header:d.jsxs(ha,{sticky:((F=l.layout)==null?void 0:F.navbarSticky)??!0,variant:((M=l.layout)==null?void 0:M.navbarVariant)||"default",height:65,children:[d.jsxs(er,{align:"start",children:[d.jsx(ao,{onClick:()=>a("/"),children:l.title}),l.version&&d.jsx(so,{variant:"secondary",children:l.version})]}),d.jsx(er,{align:"end",children:E.map(O=>d.jsx(ao,{onClick:()=>a(O.href,O.external),children:O.label},O.href))})]}),footer:d.jsx(Hr,{size:"lg",paddingY:4,children:d.jsxs(me,{size:"sm",color:"text-muted",align:"center",children:[l.title," documentation powered by PhiDoc and puijs."]})}),children:[d.jsx(Ye,{background:"brand-gradient",color:"text-inverse",align:"center",paddingY:20,children:d.jsx(Hr,{size:"lg",children:d.jsxs(we,{direction:"column",align:"center",gap:4,children:[l.version&&d.jsx(so,{variant:"secondary",children:l.version}),d.jsx(Et,{level:1,size:"3xl",align:"center",children:p.title||l.title}),d.jsx(me,{size:"lg",align:"center",maxWidth:"720px",opacity:.9,children:p.tagline||l.description}),d.jsx(we,{direction:"row",justify:"center",align:"center",gap:3,wrap:!0,marginTop:4,children:w.map(O=>d.jsx(ut,{variant:O.variant||"primary",size:"lg",onClick:()=>a(O.href,O.external),children:O.label},O.href))})]})})}),d.jsx(Ye,{background:"gradient-main",paddingY:16,children:d.jsx(Hr,{size:"lg",children:d.jsx(Ac,{columns:{xs:1,md:2,xl:3},gap:4,children:x.map(O=>d.jsxs(Kr,{hoverable:!!O.href,onClick:O.href?()=>a(O.href):void 0,children:[d.jsx(ma,{children:d.jsxs(we,{direction:"row",align:"center",gap:3,children:[d.jsx(Ic,{icon:Ey[O.icon||"book"]||fa,size:"xl"}),d.jsx(Et,{level:3,size:"md",children:O.title})]})}),d.jsx(ga,{children:d.jsx(me,{size:"sm",color:"text-secondary",children:O.description})})]},O.title))})})})]})}function oo(l){return l.replace(/\/+$/,"")||"/"}function Tc(){return typeof window>"u"?"/":oo(window.location.pathname)}function Ry({data:l}){var X,W,R,Z;const{isDark:u,setTheme:a}=ky(),[p,_]=ne.useState(Tc),x=`/${(((X=l.config.docs)==null?void 0:X.routeBasePath)||"docs").replace(/^\/+|\/+$/g,"")}`,w=`/${(((W=l.config.blog)==null?void 0:W.routeBasePath)||"blog").replace(/^\/+|\/+$/g,"")}`,E=ne.useMemo(()=>{const H=l.items.filter(I=>!I.hidden&&!I.draft);if(!l.sidebars.length)return H;const $=new Map(H.map(I=>[I.id,I]));return l.sidebars.flatMap(I=>I.items.map(re=>$.get(re.id))).filter(I=>!!I)},[l.items,l.sidebars]),N=ne.useMemo(()=>{const H=l.blogItems.filter(I=>!I.hidden&&!I.draft);if(!l.blogSidebars.length)return H;const $=new Map(H.map(I=>[I.id,I]));return l.blogSidebars.flatMap(I=>I.items.map(re=>$.get(re.id))).filter(I=>!!I)},[l.blogItems,l.blogSidebars]);ne.useEffect(()=>{const H=()=>_(Tc());return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[]);const z=ne.useCallback((H,$)=>{if($||/^https?:\/\//.test(H)){window.location.assign(H);return}const I=oo(H);window.history.pushState({},"",I),_(I),window.scrollTo({top:0})},[]),q=p===x||p.startsWith(`${x}/`),F=p===w||p.startsWith(`${w}/`),M=q?E.find(H=>oo(H.slug)===p)||E[0]:void 0,O=F?N.find(H=>oo(H.slug)===p)||N[0]:void 0;return F&&N.length?d.jsx(Sg,{posts:N,initialPostId:(O==null?void 0:O.id)||((R=N[0])==null?void 0:R.id)||"",activePostId:O==null?void 0:O.id,onPostChange:H=>{const $=N.find(I=>I.id===H);$&&z($.slug)},brandTitle:l.config.title,version:l.config.version,dark:u,onToggleDark:()=>a(u?"light":"dark")}):q?d.jsx(_y,{guides:E,initialGuideId:(M==null?void 0:M.id)||((Z=E[0])==null?void 0:Z.id)||"",activeGuideId:M==null?void 0:M.id,onGuideChange:H=>{const $=E.find(I=>I.id===H);$&&z($.slug)},version:l.config.version||"",brandTitle:l.config.title,onBackToApp:()=>z("/"),backToAppLabel:"Home",dark:u,onToggleDark:()=>a(u?"light":"dark")}):d.jsx(Ny,{config:l.config,items:E,onNavigate:z})}function Dy({data:l}){return d.jsx(Cy,{defaultTheme:"system",defaultThemeStyle:"apple",defaultBrand:l.config.brandId,children:d.jsx(Ry,{data:l})})}ef.createRoot(document.getElementById("root")).render(d.jsx(jt.StrictMode,{children:d.jsx(Dy,{data:nf})}));
