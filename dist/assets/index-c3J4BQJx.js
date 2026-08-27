(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))p(_);new MutationObserver(_=>{for(const v of _)if(v.type==="childList")for(const w of v.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&p(w)}).observe(document,{childList:!0,subtree:!0});function a(_){const v={};return _.integrity&&(v.integrity=_.integrity),_.referrerPolicy&&(v.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?v.credentials="include":_.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function p(_){if(_.ep)return;_.ep=!0;const v=a(_);fetch(_.href,v)}})();function Vp(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ra={exports:{}},$r={},ia={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function Kp(){if(dc)return ie;dc=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),F=Symbol.iterator;function M(m){return m===null||typeof m!="object"?null:(m=F&&m[F]||m["@@iterator"],typeof m=="function"?m:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,q={};function N(m,S,te){this.props=m,this.context=S,this.refs=q,this.updater=te||b}N.prototype.isReactComponent={},N.prototype.setState=function(m,S){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,S,"setState")},N.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Z(){}Z.prototype=N.prototype;function H(m,S,te){this.props=m,this.context=S,this.refs=q,this.updater=te||b}var B=H.prototype=new Z;B.constructor=H,X(B,N.prototype),B.isPureReactComponent=!0;var I=Array.isArray,re=Object.prototype.hasOwnProperty,fe={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function V(m,S,te){var oe,ae={},le=null,ye=null;if(S!=null)for(oe in S.ref!==void 0&&(ye=S.ref),S.key!==void 0&&(le=""+S.key),S)re.call(S,oe)&&!ne.hasOwnProperty(oe)&&(ae[oe]=S[oe]);var de=arguments.length-2;if(de===1)ae.children=te;else if(1<de){for(var ke=Array(de),sn=0;sn<de;sn++)ke[sn]=arguments[sn+2];ae.children=ke}if(m&&m.defaultProps)for(oe in de=m.defaultProps,de)ae[oe]===void 0&&(ae[oe]=de[oe]);return{$$typeof:l,type:m,key:le,ref:ye,props:ae,_owner:fe.current}}function ce(m,S){return{$$typeof:l,type:m.type,key:S,ref:m.ref,props:m.props,_owner:m._owner}}function Pe(m){return typeof m=="object"&&m!==null&&m.$$typeof===l}function Ue(m){var S={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(te){return S[te]})}var We=/\/+/g;function Me(m,S){return typeof m=="object"&&m!==null&&m.key!=null?Ue(""+m.key):S.toString(36)}function qe(m,S,te,oe,ae){var le=typeof m;(le==="undefined"||le==="boolean")&&(m=null);var ye=!1;if(m===null)ye=!0;else switch(le){case"string":case"number":ye=!0;break;case"object":switch(m.$$typeof){case l:case c:ye=!0}}if(ye)return ye=m,ae=ae(ye),m=oe===""?"."+Me(ye,0):oe,I(ae)?(te="",m!=null&&(te=m.replace(We,"$&/")+"/"),qe(ae,S,te,"",function(sn){return sn})):ae!=null&&(Pe(ae)&&(ae=ce(ae,te+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(We,"$&/")+"/")+m)),S.push(ae)),1;if(ye=0,oe=oe===""?".":oe+":",I(m))for(var de=0;de<m.length;de++){le=m[de];var ke=oe+Me(le,de);ye+=qe(le,S,te,ke,ae)}else if(ke=M(m),typeof ke=="function")for(m=ke.call(m),de=0;!(le=m.next()).done;)le=le.value,ke=oe+Me(le,de++),ye+=qe(le,S,te,ke,ae);else if(le==="object")throw S=String(m),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ye}function He(m,S,te){if(m==null)return m;var oe=[],ae=0;return qe(m,oe,"","",function(le){return S.call(te,le,ae++)}),oe}function ge(m){if(m._status===-1){var S=m._result;S=S(),S.then(function(te){(m._status===0||m._status===-1)&&(m._status=1,m._result=te)},function(te){(m._status===0||m._status===-1)&&(m._status=2,m._result=te)}),m._status===-1&&(m._status=0,m._result=S)}if(m._status===1)return m._result.default;throw m._result}var Re={current:null},T={transition:null},G={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:T,ReactCurrentOwner:fe};function A(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:He,forEach:function(m,S,te){He(m,function(){S.apply(this,arguments)},te)},count:function(m){var S=0;return He(m,function(){S++}),S},toArray:function(m){return He(m,function(S){return S})||[]},only:function(m){if(!Pe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},ie.Component=N,ie.Fragment=a,ie.Profiler=_,ie.PureComponent=H,ie.StrictMode=p,ie.Suspense=R,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ie.act=A,ie.cloneElement=function(m,S,te){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var oe=X({},m.props),ae=m.key,le=m.ref,ye=m._owner;if(S!=null){if(S.ref!==void 0&&(le=S.ref,ye=fe.current),S.key!==void 0&&(ae=""+S.key),m.type&&m.type.defaultProps)var de=m.type.defaultProps;for(ke in S)re.call(S,ke)&&!ne.hasOwnProperty(ke)&&(oe[ke]=S[ke]===void 0&&de!==void 0?de[ke]:S[ke])}var ke=arguments.length-2;if(ke===1)oe.children=te;else if(1<ke){de=Array(ke);for(var sn=0;sn<ke;sn++)de[sn]=arguments[sn+2];oe.children=de}return{$$typeof:l,type:m.type,key:ae,ref:le,props:oe,_owner:ye}},ie.createContext=function(m){return m={$$typeof:w,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:v,_context:m},m.Consumer=m},ie.createElement=V,ie.createFactory=function(m){var S=V.bind(null,m);return S.type=m,S},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:C,render:m}},ie.isValidElement=Pe,ie.lazy=function(m){return{$$typeof:W,_payload:{_status:-1,_result:m},_init:ge}},ie.memo=function(m,S){return{$$typeof:z,type:m,compare:S===void 0?null:S}},ie.startTransition=function(m){var S=T.transition;T.transition={};try{m()}finally{T.transition=S}},ie.unstable_act=A,ie.useCallback=function(m,S){return Re.current.useCallback(m,S)},ie.useContext=function(m){return Re.current.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m){return Re.current.useDeferredValue(m)},ie.useEffect=function(m,S){return Re.current.useEffect(m,S)},ie.useId=function(){return Re.current.useId()},ie.useImperativeHandle=function(m,S,te){return Re.current.useImperativeHandle(m,S,te)},ie.useInsertionEffect=function(m,S){return Re.current.useInsertionEffect(m,S)},ie.useLayoutEffect=function(m,S){return Re.current.useLayoutEffect(m,S)},ie.useMemo=function(m,S){return Re.current.useMemo(m,S)},ie.useReducer=function(m,S,te){return Re.current.useReducer(m,S,te)},ie.useRef=function(m){return Re.current.useRef(m)},ie.useState=function(m){return Re.current.useState(m)},ie.useSyncExternalStore=function(m,S,te){return Re.current.useSyncExternalStore(m,S,te)},ie.useTransition=function(){return Re.current.useTransition()},ie.version="18.3.1",ie}var pc;function pa(){return pc||(pc=1,ia.exports=Kp()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function Qp(){if(fc)return $r;fc=1;var l=pa(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,_=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function w(C,R,z){var W,F={},M=null,b=null;z!==void 0&&(M=""+z),R.key!==void 0&&(M=""+R.key),R.ref!==void 0&&(b=R.ref);for(W in R)p.call(R,W)&&!v.hasOwnProperty(W)&&(F[W]=R[W]);if(C&&C.defaultProps)for(W in R=C.defaultProps,R)F[W]===void 0&&(F[W]=R[W]);return{$$typeof:c,type:C,key:M,ref:b,props:F,_owner:_.current}}return $r.Fragment=a,$r.jsx=w,$r.jsxs=w,$r}var hc;function Gp(){return hc||(hc=1,ra.exports=Qp()),ra.exports}var u=Gp(),J=pa();const jt=Vp(J);var io={},oa={exports:{}},on={},sa={exports:{}},aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Yp(){return mc||(mc=1,(function(l){function c(T,G){var A=T.length;T.push(G);e:for(;0<A;){var m=A-1>>>1,S=T[m];if(0<_(S,G))T[m]=G,T[A]=S,A=m;else break e}}function a(T){return T.length===0?null:T[0]}function p(T){if(T.length===0)return null;var G=T[0],A=T.pop();if(A!==G){T[0]=A;e:for(var m=0,S=T.length,te=S>>>1;m<te;){var oe=2*(m+1)-1,ae=T[oe],le=oe+1,ye=T[le];if(0>_(ae,A))le<S&&0>_(ye,ae)?(T[m]=ye,T[le]=A,m=le):(T[m]=ae,T[oe]=A,m=oe);else if(le<S&&0>_(ye,A))T[m]=ye,T[le]=A,m=le;else break e}}return G}function _(T,G){var A=T.sortIndex-G.sortIndex;return A!==0?A:T.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;l.unstable_now=function(){return v.now()}}else{var w=Date,C=w.now();l.unstable_now=function(){return w.now()-C}}var R=[],z=[],W=1,F=null,M=3,b=!1,X=!1,q=!1,N=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(T){for(var G=a(z);G!==null;){if(G.callback===null)p(z);else if(G.startTime<=T)p(z),G.sortIndex=G.expirationTime,c(R,G);else break;G=a(z)}}function I(T){if(q=!1,B(T),!X)if(a(R)!==null)X=!0,ge(re);else{var G=a(z);G!==null&&Re(I,G.startTime-T)}}function re(T,G){X=!1,q&&(q=!1,Z(V),V=-1),b=!0;var A=M;try{for(B(G),F=a(R);F!==null&&(!(F.expirationTime>G)||T&&!Ue());){var m=F.callback;if(typeof m=="function"){F.callback=null,M=F.priorityLevel;var S=m(F.expirationTime<=G);G=l.unstable_now(),typeof S=="function"?F.callback=S:F===a(R)&&p(R),B(G)}else p(R);F=a(R)}if(F!==null)var te=!0;else{var oe=a(z);oe!==null&&Re(I,oe.startTime-G),te=!1}return te}finally{F=null,M=A,b=!1}}var fe=!1,ne=null,V=-1,ce=5,Pe=-1;function Ue(){return!(l.unstable_now()-Pe<ce)}function We(){if(ne!==null){var T=l.unstable_now();Pe=T;var G=!0;try{G=ne(!0,T)}finally{G?Me():(fe=!1,ne=null)}}else fe=!1}var Me;if(typeof H=="function")Me=function(){H(We)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,He=qe.port2;qe.port1.onmessage=We,Me=function(){He.postMessage(null)}}else Me=function(){N(We,0)};function ge(T){ne=T,fe||(fe=!0,Me())}function Re(T,G){V=N(function(){T(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){X||b||(X=!0,ge(re))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_getFirstCallbackNode=function(){return a(R)},l.unstable_next=function(T){switch(M){case 1:case 2:case 3:var G=3;break;default:G=M}var A=M;M=G;try{return T()}finally{M=A}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,G){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=M;M=T;try{return G()}finally{M=A}},l.unstable_scheduleCallback=function(T,G,A){var m=l.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?m+A:m):A=m,T){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=A+S,T={id:W++,callback:G,priorityLevel:T,startTime:A,expirationTime:S,sortIndex:-1},A>m?(T.sortIndex=A,c(z,T),a(R)===null&&T===a(z)&&(q?(Z(V),V=-1):q=!0,Re(I,A-m))):(T.sortIndex=S,c(R,T),X||b||(X=!0,ge(re))),T},l.unstable_shouldYield=Ue,l.unstable_wrapCallback=function(T){var G=M;return function(){var A=M;M=G;try{return T.apply(this,arguments)}finally{M=A}}}})(aa)),aa}var gc;function Xp(){return gc||(gc=1,sa.exports=Yp()),sa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc;function Zp(){if(yc)return on;yc=1;var l=pa(),c=Xp();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,_={};function v(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(_[e]=n,e=0;e<n.length;e++)p.add(n[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},F={};function M(e){return R.call(F,e)?!0:R.call(W,e)?!1:z.test(e)?F[e]=!0:(W[e]=!0,!1)}function b(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,n,t,r){if(n===null||typeof n>"u"||b(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function q(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];N[n]=new q(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Z,H);N[n]=new q(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Z,H);N[n]=new q(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Z,H);N[n]=new q(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function B(e,n,t,r){var i=N.hasOwnProperty(n)?N[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(X(n,t,i,r)&&(t=null),r||i===null?M(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var I=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),fe=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Ue=Symbol.for("react.context"),We=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),T=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,m;function S(e){if(m===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);m=n&&n[1]||""}return`
`+m+e}var te=!1;function oe(e,n){if(!e||te)return"";te=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(x){var r=x}Reflect.construct(e,[],n)}else{try{n.call()}catch(x){r=x}e.call(n.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,d=o.length-1;1<=s&&0<=d&&i[s]!==o[d];)d--;for(;1<=s&&0<=d;s--,d--)if(i[s]!==o[d]){if(s!==1||d!==1)do if(s--,d--,0>d||i[s]!==o[d]){var f=`
`+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=s&&0<=d);break}}}finally{te=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?S(e):""}function ae(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case fe:return"Portal";case ce:return"Profiler";case V:return"StrictMode";case Me:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ue:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case We:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case ge:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}function ye(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e){var n=ke(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qr(e){e._valueTracker||(e._valueTracker=sn(e))}function ya(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ke(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uo(e,n){var t=n.checked;return A({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function va(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=de(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function xa(e,n){n=n.checked,n!=null&&B(e,"checked",n,!1)}function co(e,n){xa(e,n);var t=de(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?po(e,n.type,t):n.hasOwnProperty("defaultValue")&&po(e,n.type,de(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _a(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function po(e,n,t){(n!=="number"||Gr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var tr=Array.isArray;function Rt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+de(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function fo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return A({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(tr(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:de(t)}}function ka(e,n){var t=de(n.value),r=de(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Sa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Ca=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yc=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Yc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function Ea(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function ja(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ea(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Xc=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,n){if(n){if(Xc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function go(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,Nt=null,Tt=null;function Ra(e){if(e=Er(e)){if(typeof xo!="function")throw Error(a(280));var n=e.stateNode;n&&(n=xi(n),xo(e.stateNode,e.type,n))}}function Na(e){Nt?Tt?Tt.push(e):Tt=[e]:Nt=e}function Ta(){if(Nt){var e=Nt,n=Tt;if(Tt=Nt=null,Ra(e),n)for(e=0;e<n.length;e++)Ra(n[e])}}function Da(e,n){return e(n)}function za(){}var _o=!1;function La(e,n,t){if(_o)return e(n,t);_o=!0;try{return Da(e,n,t)}finally{_o=!1,(Nt!==null||Tt!==null)&&(za(),Ta())}}function or(e,n){var t=e.stateNode;if(t===null)return null;var r=xi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var wo=!1;if(C)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{wo=!1}function Zc(e,n,t,r,i,o,s,d,f){var x=Array.prototype.slice.call(arguments,3);try{n.apply(t,x)}catch(P){this.onError(P)}}var ar=!1,Xr=null,Zr=!1,ko=null,Jc={onError:function(e){ar=!0,Xr=e}};function ed(e,n,t,r,i,o,s,d,f){ar=!1,Xr=null,Zc.apply(Jc,arguments)}function nd(e,n,t,r,i,o,s,d,f){if(ed.apply(this,arguments),ar){if(ar){var x=Xr;ar=!1,Xr=null}else throw Error(a(198));Zr||(Zr=!0,ko=x)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ma(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ia(e){if(dt(e)!==e)throw Error(a(188))}function td(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ia(i),e;if(o===r)return Ia(i),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,d=i.child;d;){if(d===t){s=!0,t=i,r=o;break}if(d===r){s=!0,r=i,t=o;break}d=d.sibling}if(!s){for(d=o.child;d;){if(d===t){s=!0,t=o,r=i;break}if(d===r){s=!0,r=o,t=i;break}d=d.sibling}if(!s)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function Aa(e){return e=td(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ba(e);if(n!==null)return n;e=e.sibling}return null}var Oa=c.unstable_scheduleCallback,Fa=c.unstable_cancelCallback,rd=c.unstable_shouldYield,id=c.unstable_requestPaint,Te=c.unstable_now,od=c.unstable_getCurrentPriorityLevel,So=c.unstable_ImmediatePriority,Ua=c.unstable_UserBlockingPriority,Jr=c.unstable_NormalPriority,sd=c.unstable_LowPriority,$a=c.unstable_IdlePriority,ei=null,Cn=null;function ad(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:cd,ld=Math.log,ud=Math.LN2;function cd(e){return e>>>=0,e===0?32:31-(ld(e)/ud|0)|0}var ni=64,ti=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var d=s&~i;d!==0?r=lr(d):(o&=s,o!==0&&(r=lr(o)))}else s=t&~i,s!==0?r=lr(s):o!==0&&(r=lr(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),i=1<<t,r|=e[t],n&=~i;return r}function dd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-yn(o),d=1<<s,f=i[s];f===-1?((d&t)===0||(d&r)!==0)&&(i[s]=dd(d,n)):f<=n&&(e.expiredLanes|=d),o&=~d}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ba(){var e=ni;return ni<<=1,(ni&4194240)===0&&(ni=64),e}function Co(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function fd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-yn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Eo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var pe=0;function Wa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qa,jo,Ha,Va,Ka,Ro=!1,ii=[],Bn=null,Wn=null,qn=null,cr=new Map,dr=new Map,Hn=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,n){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(n.pointerId)}}function pr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Er(n),n!==null&&jo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function md(e,n,t,r,i){switch(n){case"focusin":return Bn=pr(Bn,e,n,t,r,i),!0;case"dragenter":return Wn=pr(Wn,e,n,t,r,i),!0;case"mouseover":return qn=pr(qn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return cr.set(o,pr(cr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,dr.set(o,pr(dr.get(o)||null,e,n,t,r,i)),!0}return!1}function Ga(e){var n=pt(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ma(t),n!==null){e.blockedOn=n,Ka(e.priority,function(){Ha(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=To(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);yo=r,t.target.dispatchEvent(r),yo=null}else return n=Er(t),n!==null&&jo(n),e.blockedOn=t,!1;n.shift()}return!0}function Ya(e,n,t){oi(e)&&t.delete(n)}function gd(){Ro=!1,Bn!==null&&oi(Bn)&&(Bn=null),Wn!==null&&oi(Wn)&&(Wn=null),qn!==null&&oi(qn)&&(qn=null),cr.forEach(Ya),dr.forEach(Ya)}function fr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ro||(Ro=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,gd)))}function hr(e){function n(i){return fr(i,e)}if(0<ii.length){fr(ii[0],e);for(var t=1;t<ii.length;t++){var r=ii[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Bn!==null&&fr(Bn,e),Wn!==null&&fr(Wn,e),qn!==null&&fr(qn,e),cr.forEach(n),dr.forEach(n),t=0;t<Hn.length;t++)r=Hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(t=Hn[0],t.blockedOn===null);)Ga(t),t.blockedOn===null&&Hn.shift()}var Dt=I.ReactCurrentBatchConfig,si=!0;function yd(e,n,t,r){var i=pe,o=Dt.transition;Dt.transition=null;try{pe=1,No(e,n,t,r)}finally{pe=i,Dt.transition=o}}function vd(e,n,t,r){var i=pe,o=Dt.transition;Dt.transition=null;try{pe=4,No(e,n,t,r)}finally{pe=i,Dt.transition=o}}function No(e,n,t,r){if(si){var i=To(e,n,t,r);if(i===null)Ko(e,n,r,ai,t),Qa(e,r);else if(md(i,e,n,t,r))r.stopPropagation();else if(Qa(e,r),n&4&&-1<hd.indexOf(e)){for(;i!==null;){var o=Er(i);if(o!==null&&qa(o),o=To(e,n,t,r),o===null&&Ko(e,n,r,ai,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ko(e,n,r,null,t)}}var ai=null;function To(e,n,t,r){if(ai=null,e=vo(r),e=pt(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ma(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ai=e,null}function Xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case So:return 1;case Ua:return 4;case Jr:case sd:return 16;case $a:return 536870912;default:return 16}default:return 16}}var Vn=null,Do=null,li=null;function Za(){if(li)return li;var e,n=Do,t=n.length,r,i="value"in Vn?Vn.value:Vn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return li=i.slice(e,1<r?1-r:void 0)}function ui(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Ja(){return!1}function an(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ci:Ja,this.isPropagationStopped=Ja,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=an(zt),mr=A({},zt,{view:0,detail:0}),xd=an(mr),Lo,Mo,gr,di=A({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Lo=e.screenX-gr.screenX,Mo=e.screenY-gr.screenY):Mo=Lo=0,gr=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),el=an(di),_d=A({},di,{dataTransfer:0}),wd=an(_d),kd=A({},mr,{relatedTarget:0}),Io=an(kd),Sd=A({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=an(Sd),Cd=A({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ed=an(Cd),jd=A({},zt,{data:0}),nl=an(jd),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Td[e])?!!n[e]:!1}function Ao(){return Dd}var zd=A({},mr,{key:function(e){if(e.key){var n=Rd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=an(zd),Md=A({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=an(Md),Id=A({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),Ad=an(Id),bd=A({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=an(bd),Fd=A({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=an(Fd),$d=[9,13,27,32],bo=C&&"CompositionEvent"in window,yr=null;C&&"documentMode"in document&&(yr=document.documentMode);var Bd=C&&"TextEvent"in window&&!yr,rl=C&&(!bo||yr&&8<yr&&11>=yr),il=" ",ol=!1;function sl(e,n){switch(e){case"keyup":return $d.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function al(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function Wd(e,n){switch(e){case"compositionend":return al(n);case"keypress":return n.which!==32?null:(ol=!0,il);case"textInput":return e=n.data,e===il&&ol?null:e;default:return null}}function qd(e,n){if(Lt)return e==="compositionend"||!bo&&sl(e,n)?(e=Za(),li=Do=Vn=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rl&&n.locale!=="ko"?null:n.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hd[e.type]:n==="textarea"}function ul(e,n,t,r){Na(r),n=gi(n,"onChange"),0<n.length&&(t=new zo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var vr=null,xr=null;function Vd(e){jl(e,0)}function pi(e){var n=Ot(e);if(ya(n))return e}function Kd(e,n){if(e==="change")return n}var cl=!1;if(C){var Oo;if(C){var Fo="oninput"in document;if(!Fo){var dl=document.createElement("div");dl.setAttribute("oninput","return;"),Fo=typeof dl.oninput=="function"}Oo=Fo}else Oo=!1;cl=Oo&&(!document.documentMode||9<document.documentMode)}function pl(){vr&&(vr.detachEvent("onpropertychange",fl),xr=vr=null)}function fl(e){if(e.propertyName==="value"&&pi(xr)){var n=[];ul(n,xr,e,vo(e)),La(Vd,n)}}function Qd(e,n,t){e==="focusin"?(pl(),vr=n,xr=t,vr.attachEvent("onpropertychange",fl)):e==="focusout"&&pl()}function Gd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(xr)}function Yd(e,n){if(e==="click")return pi(n)}function Xd(e,n){if(e==="input"||e==="change")return pi(n)}function Zd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:Zd;function _r(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!R.call(n,i)||!vn(e[i],n[i]))return!1}return!0}function hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,n){var t=hl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hl(t)}}function gl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yl(){for(var e=window,n=Gr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Gr(e.document)}return n}function Uo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Jd(e){var n=yl(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gl(t.ownerDocument.documentElement,t)){if(r!==null&&Uo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ml(t,o);var s=ml(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ep=C&&"documentMode"in document&&11>=document.documentMode,Mt=null,$o=null,wr=null,Bo=!1;function vl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bo||Mt==null||Mt!==Gr(r)||(r=Mt,"selectionStart"in r&&Uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&_r(wr,r)||(wr=r,r=gi($o,"onSelect"),0<r.length&&(n=new zo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mt)))}function fi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var It={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Wo={},xl={};C&&(xl=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function hi(e){if(Wo[e])return Wo[e];if(!It[e])return e;var n=It[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in xl)return Wo[e]=n[t];return e}var _l=hi("animationend"),wl=hi("animationiteration"),kl=hi("animationstart"),Sl=hi("transitionend"),Pl=new Map,Cl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){Pl.set(e,n),v(n,[e])}for(var qo=0;qo<Cl.length;qo++){var Ho=Cl[qo],np=Ho.toLowerCase(),tp=Ho[0].toUpperCase()+Ho.slice(1);Kn(np,"on"+tp)}Kn(_l,"onAnimationEnd"),Kn(wl,"onAnimationIteration"),Kn(kl,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Sl,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function El(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,nd(r,n,void 0,e),e.currentTarget=null}function jl(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var d=r[s],f=d.instance,x=d.currentTarget;if(d=d.listener,f!==o&&i.isPropagationStopped())break e;El(i,d,x),o=f}else for(s=0;s<r.length;s++){if(d=r[s],f=d.instance,x=d.currentTarget,d=d.listener,f!==o&&i.isPropagationStopped())break e;El(i,d,x),o=f}}}if(Zr)throw e=ko,Zr=!1,ko=null,e}function xe(e,n){var t=n[Jo];t===void 0&&(t=n[Jo]=new Set);var r=e+"__bubble";t.has(r)||(Rl(n,e,2,!1),t.add(r))}function Vo(e,n,t){var r=0;n&&(r|=4),Rl(t,e,r,n)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[mi]){e[mi]=!0,p.forEach(function(t){t!=="selectionchange"&&(rp.has(t)||Vo(t,!1,e),Vo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mi]||(n[mi]=!0,Vo("selectionchange",!1,n))}}function Rl(e,n,t,r){switch(Xa(n)){case 1:var i=yd;break;case 4:i=vd;break;default:i=No}t=i.bind(null,n,t,e),i=void 0,!wo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ko(e,n,t,r,i){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;s=s.return}for(;d!==null;){if(s=pt(d),s===null)return;if(f=s.tag,f===5||f===6){r=o=s;continue e}d=d.parentNode}}r=r.return}La(function(){var x=o,P=vo(t),E=[];e:{var k=Pl.get(e);if(k!==void 0){var D=zo,O=e;switch(e){case"keypress":if(ui(t)===0)break e;case"keydown":case"keyup":D=Ld;break;case"focusin":O="focus",D=Io;break;case"focusout":O="blur",D=Io;break;case"beforeblur":case"afterblur":D=Io;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=el;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Ad;break;case _l:case wl:case kl:D=Pd;break;case Sl:D=Od;break;case"scroll":D=xd;break;case"wheel":D=Ud;break;case"copy":case"cut":case"paste":D=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=tl}var U=(n&4)!==0,De=!U&&e==="scroll",g=U?k!==null?k+"Capture":null:k;U=[];for(var h=x,y;h!==null;){y=h;var j=y.stateNode;if(y.tag===5&&j!==null&&(y=j,g!==null&&(j=or(h,g),j!=null&&U.push(Pr(h,j,y)))),De)break;h=h.return}0<U.length&&(k=new D(k,O,null,t,P),E.push({event:k,listeners:U}))}}if((n&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",k&&t!==yo&&(O=t.relatedTarget||t.fromElement)&&(pt(O)||O[zn]))break e;if((D||k)&&(k=P.window===P?P:(k=P.ownerDocument)?k.defaultView||k.parentWindow:window,D?(O=t.relatedTarget||t.toElement,D=x,O=O?pt(O):null,O!==null&&(De=dt(O),O!==De||O.tag!==5&&O.tag!==6)&&(O=null)):(D=null,O=x),D!==O)){if(U=el,j="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(U=tl,j="onPointerLeave",g="onPointerEnter",h="pointer"),De=D==null?k:Ot(D),y=O==null?k:Ot(O),k=new U(j,h+"leave",D,t,P),k.target=De,k.relatedTarget=y,j=null,pt(P)===x&&(U=new U(g,h+"enter",O,t,P),U.target=y,U.relatedTarget=De,j=U),De=j,D&&O)n:{for(U=D,g=O,h=0,y=U;y;y=At(y))h++;for(y=0,j=g;j;j=At(j))y++;for(;0<h-y;)U=At(U),h--;for(;0<y-h;)g=At(g),y--;for(;h--;){if(U===g||g!==null&&U===g.alternate)break n;U=At(U),g=At(g)}U=null}else U=null;D!==null&&Nl(E,k,D,U,!1),O!==null&&De!==null&&Nl(E,De,O,U,!0)}}e:{if(k=x?Ot(x):window,D=k.nodeName&&k.nodeName.toLowerCase(),D==="select"||D==="input"&&k.type==="file")var $=Kd;else if(ll(k))if(cl)$=Xd;else{$=Gd;var K=Qd}else(D=k.nodeName)&&D.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&($=Yd);if($&&($=$(e,x))){ul(E,$,t,P);break e}K&&K(e,k,x),e==="focusout"&&(K=k._wrapperState)&&K.controlled&&k.type==="number"&&po(k,"number",k.value)}switch(K=x?Ot(x):window,e){case"focusin":(ll(K)||K.contentEditable==="true")&&(Mt=K,$o=x,wr=null);break;case"focusout":wr=$o=Mt=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,vl(E,t,P);break;case"selectionchange":if(ep)break;case"keydown":case"keyup":vl(E,t,P)}var Q;if(bo)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Lt?sl(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(rl&&t.locale!=="ko"&&(Lt||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Lt&&(Q=Za()):(Vn=P,Do="value"in Vn?Vn.value:Vn.textContent,Lt=!0)),K=gi(x,Y),0<K.length&&(Y=new nl(Y,e,null,t,P),E.push({event:Y,listeners:K}),Q?Y.data=Q:(Q=al(t),Q!==null&&(Y.data=Q)))),(Q=Bd?Wd(e,t):qd(e,t))&&(x=gi(x,"onBeforeInput"),0<x.length&&(P=new nl("onBeforeInput","beforeinput",null,t,P),E.push({event:P,listeners:x}),P.data=Q))}jl(E,n)})}function Pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function gi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=or(e,t),o!=null&&r.unshift(Pr(e,o,i)),o=or(e,n),o!=null&&r.push(Pr(e,o,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nl(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var d=t,f=d.alternate,x=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&x!==null&&(d=x,i?(f=or(t,o),f!=null&&s.unshift(Pr(t,f,d))):i||(f=or(t,o),f!=null&&s.push(Pr(t,f,d)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var ip=/\r\n?/g,op=/\u0000|\uFFFD/g;function Tl(e){return(typeof e=="string"?e:""+e).replace(ip,`
`).replace(op,"")}function yi(e,n,t){if(n=Tl(n),Tl(e)!==n&&t)throw Error(a(425))}function vi(){}var Qo=null,Go=null;function Yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,Dl=typeof Promise=="function"?Promise:void 0,ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Dl<"u"?function(e){return Dl.resolve(null).then(e).catch(lp)}:Xo;function lp(e){setTimeout(function(){throw e})}function Zo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),hr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);hr(n)}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function zl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),En="__reactFiber$"+bt,Cr="__reactProps$"+bt,zn="__reactContainer$"+bt,Jo="__reactEvents$"+bt,up="__reactListeners$"+bt,cp="__reactHandles$"+bt;function pt(e){var n=e[En];if(n)return n;for(var t=e.parentNode;t;){if(n=t[zn]||t[En]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=zl(e);e!==null;){if(t=e[En])return t;e=zl(e)}return n}e=t,t=e.parentNode}return null}function Er(e){return e=e[En]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function xi(e){return e[Cr]||null}var es=[],Ft=-1;function Gn(e){return{current:e}}function _e(e){0>Ft||(e.current=es[Ft],es[Ft]=null,Ft--)}function ve(e,n){Ft++,es[Ft]=e.current,e.current=n}var Yn={},Ve=Gn(Yn),Je=Gn(!1),ft=Yn;function Ut(e,n){var t=e.type.contextTypes;if(!t)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function en(e){return e=e.childContextTypes,e!=null}function _i(){_e(Je),_e(Ve)}function Ll(e,n,t){if(Ve.current!==Yn)throw Error(a(168));ve(Ve,n),ve(Je,t)}function Ml(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(a(108,ye(e)||"Unknown",i));return A({},t,r)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,ft=Ve.current,ve(Ve,e),ve(Je,Je.current),!0}function Il(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=Ml(e,n,ft),r.__reactInternalMemoizedMergedChildContext=e,_e(Je),_e(Ve),ve(Ve,e)):_e(Je),ve(Je,t)}var Ln=null,ki=!1,ns=!1;function Al(e){Ln===null?Ln=[e]:Ln.push(e)}function dp(e){ki=!0,Al(e)}function Xn(){if(!ns&&Ln!==null){ns=!0;var e=0,n=pe;try{var t=Ln;for(pe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ln=null,ki=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(e+1)),Oa(So,Xn),i}finally{pe=n,ns=!1}}return null}var $t=[],Bt=0,Si=null,Pi=0,dn=[],pn=0,ht=null,Mn=1,In="";function mt(e,n){$t[Bt++]=Pi,$t[Bt++]=Si,Si=e,Pi=n}function bl(e,n,t){dn[pn++]=Mn,dn[pn++]=In,dn[pn++]=ht,ht=e;var r=Mn;e=In;var i=32-yn(r)-1;r&=~(1<<i),t+=1;var o=32-yn(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Mn=1<<32-yn(n)+i|t<<i|r,In=o+e}else Mn=1<<o|t<<i|r,In=e}function ts(e){e.return!==null&&(mt(e,1),bl(e,1,0))}function rs(e){for(;e===Si;)Si=$t[--Bt],$t[Bt]=null,Pi=$t[--Bt],$t[Bt]=null;for(;e===ht;)ht=dn[--pn],dn[pn]=null,In=dn[--pn],dn[pn]=null,Mn=dn[--pn],dn[pn]=null}var ln=null,un=null,Se=!1,xn=null;function Ol(e,n){var t=gn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ln=e,un=Qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ln=e,un=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:Mn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=gn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ln=e,un=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function os(e){if(Se){var n=un;if(n){var t=n;if(!Fl(e,n)){if(is(e))throw Error(a(418));n=Qn(t.nextSibling);var r=ln;n&&Fl(e,n)?Ol(r,t):(e.flags=e.flags&-4097|2,Se=!1,ln=e)}}else{if(is(e))throw Error(a(418));e.flags=e.flags&-4097|2,Se=!1,ln=e}}}function Ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ln=e}function Ci(e){if(e!==ln)return!1;if(!Se)return Ul(e),Se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yo(e.type,e.memoizedProps)),n&&(n=un)){if(is(e))throw $l(),Error(a(418));for(;n;)Ol(e,n),n=Qn(n.nextSibling)}if(Ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){un=Qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}un=null}}else un=ln?Qn(e.stateNode.nextSibling):null;return!0}function $l(){for(var e=un;e;)e=Qn(e.nextSibling)}function Wt(){un=ln=null,Se=!1}function ss(e){xn===null?xn=[e]:xn.push(e)}var pp=I.ReactCurrentBatchConfig;function jr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var d=i.refs;s===null?delete d[o]:d[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function Ei(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bl(e){var n=e._init;return n(e._payload)}function Wl(e){function n(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function t(g,h){if(!e)return null;for(;h!==null;)n(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=ot(g,h),g.index=0,g.sibling=null,g}function o(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function d(g,h,y,j){return h===null||h.tag!==6?(h=Xs(y,g.mode,j),h.return=g,h):(h=i(h,y),h.return=g,h)}function f(g,h,y,j){var $=y.type;return $===ne?P(g,h,y.props.children,j,y.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ge&&Bl($)===h.type)?(j=i(h,y.props),j.ref=jr(g,h,y),j.return=g,j):(j=Yi(y.type,y.key,y.props,null,g.mode,j),j.ref=jr(g,h,y),j.return=g,j)}function x(g,h,y,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Zs(y,g.mode,j),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function P(g,h,y,j,$){return h===null||h.tag!==7?(h=St(y,g.mode,j,$),h.return=g,h):(h=i(h,y),h.return=g,h)}function E(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Xs(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case re:return y=Yi(h.type,h.key,h.props,null,g.mode,y),y.ref=jr(g,null,h),y.return=g,y;case fe:return h=Zs(h,g.mode,y),h.return=g,h;case ge:var j=h._init;return E(g,j(h._payload),y)}if(tr(h)||G(h))return h=St(h,g.mode,y,null),h.return=g,h;Ei(g,h)}return null}function k(g,h,y,j){var $=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:d(g,h,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case re:return y.key===$?f(g,h,y,j):null;case fe:return y.key===$?x(g,h,y,j):null;case ge:return $=y._init,k(g,h,$(y._payload),j)}if(tr(y)||G(y))return $!==null?null:P(g,h,y,j,null);Ei(g,y)}return null}function D(g,h,y,j,$){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(y)||null,d(h,g,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case re:return g=g.get(j.key===null?y:j.key)||null,f(h,g,j,$);case fe:return g=g.get(j.key===null?y:j.key)||null,x(h,g,j,$);case ge:var K=j._init;return D(g,h,y,K(j._payload),$)}if(tr(j)||G(j))return g=g.get(y)||null,P(h,g,j,$,null);Ei(h,j)}return null}function O(g,h,y,j){for(var $=null,K=null,Q=h,Y=h=0,Fe=null;Q!==null&&Y<y.length;Y++){Q.index>Y?(Fe=Q,Q=null):Fe=Q.sibling;var ue=k(g,Q,y[Y],j);if(ue===null){Q===null&&(Q=Fe);break}e&&Q&&ue.alternate===null&&n(g,Q),h=o(ue,h,Y),K===null?$=ue:K.sibling=ue,K=ue,Q=Fe}if(Y===y.length)return t(g,Q),Se&&mt(g,Y),$;if(Q===null){for(;Y<y.length;Y++)Q=E(g,y[Y],j),Q!==null&&(h=o(Q,h,Y),K===null?$=Q:K.sibling=Q,K=Q);return Se&&mt(g,Y),$}for(Q=r(g,Q);Y<y.length;Y++)Fe=D(Q,g,Y,y[Y],j),Fe!==null&&(e&&Fe.alternate!==null&&Q.delete(Fe.key===null?Y:Fe.key),h=o(Fe,h,Y),K===null?$=Fe:K.sibling=Fe,K=Fe);return e&&Q.forEach(function(st){return n(g,st)}),Se&&mt(g,Y),$}function U(g,h,y,j){var $=G(y);if(typeof $!="function")throw Error(a(150));if(y=$.call(y),y==null)throw Error(a(151));for(var K=$=null,Q=h,Y=h=0,Fe=null,ue=y.next();Q!==null&&!ue.done;Y++,ue=y.next()){Q.index>Y?(Fe=Q,Q=null):Fe=Q.sibling;var st=k(g,Q,ue.value,j);if(st===null){Q===null&&(Q=Fe);break}e&&Q&&st.alternate===null&&n(g,Q),h=o(st,h,Y),K===null?$=st:K.sibling=st,K=st,Q=Fe}if(ue.done)return t(g,Q),Se&&mt(g,Y),$;if(Q===null){for(;!ue.done;Y++,ue=y.next())ue=E(g,ue.value,j),ue!==null&&(h=o(ue,h,Y),K===null?$=ue:K.sibling=ue,K=ue);return Se&&mt(g,Y),$}for(Q=r(g,Q);!ue.done;Y++,ue=y.next())ue=D(Q,g,Y,ue.value,j),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?Y:ue.key),h=o(ue,h,Y),K===null?$=ue:K.sibling=ue,K=ue);return e&&Q.forEach(function(Hp){return n(g,Hp)}),Se&&mt(g,Y),$}function De(g,h,y,j){if(typeof y=="object"&&y!==null&&y.type===ne&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case re:e:{for(var $=y.key,K=h;K!==null;){if(K.key===$){if($=y.type,$===ne){if(K.tag===7){t(g,K.sibling),h=i(K,y.props.children),h.return=g,g=h;break e}}else if(K.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ge&&Bl($)===K.type){t(g,K.sibling),h=i(K,y.props),h.ref=jr(g,K,y),h.return=g,g=h;break e}t(g,K);break}else n(g,K);K=K.sibling}y.type===ne?(h=St(y.props.children,g.mode,j,y.key),h.return=g,g=h):(j=Yi(y.type,y.key,y.props,null,g.mode,j),j.ref=jr(g,h,y),j.return=g,g=j)}return s(g);case fe:e:{for(K=y.key;h!==null;){if(h.key===K)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){t(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{t(g,h);break}else n(g,h);h=h.sibling}h=Zs(y,g.mode,j),h.return=g,g=h}return s(g);case ge:return K=y._init,De(g,h,K(y._payload),j)}if(tr(y))return O(g,h,y,j);if(G(y))return U(g,h,y,j);Ei(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(t(g,h.sibling),h=i(h,y),h.return=g,g=h):(t(g,h),h=Xs(y,g.mode,j),h.return=g,g=h),s(g)):t(g,h)}return De}var qt=Wl(!0),ql=Wl(!1),ji=Gn(null),Ri=null,Ht=null,as=null;function ls(){as=Ht=Ri=null}function us(e){var n=ji.current;_e(ji),e._currentValue=n}function cs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Vt(e,n){Ri=e,as=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(nn=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Ri===null)throw Error(a(308));Ht=e,Ri.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var gt=null;function ds(e){gt===null?gt=[e]:gt.push(e)}function Hl(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ds(n)):(t.next=i.next,i.next=t),n.interleaved=t,An(e,r)}function An(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Zn=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,An(e,t)}return i=r.interleaved,i===null?(n.next=n,ds(r)):(n.next=i.next,i.next=n),r.interleaved=n,An(e,t)}function Ni(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Eo(e,t)}}function Kl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ti(e,n,t,r){var i=e.updateQueue;Zn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var f=d,x=f.next;f.next=null,s===null?o=x:s.next=x,s=f;var P=e.alternate;P!==null&&(P=P.updateQueue,d=P.lastBaseUpdate,d!==s&&(d===null?P.firstBaseUpdate=x:d.next=x,P.lastBaseUpdate=f))}if(o!==null){var E=i.baseState;s=0,P=x=f=null,d=o;do{var k=d.lane,D=d.eventTime;if((r&k)===k){P!==null&&(P=P.next={eventTime:D,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var O=e,U=d;switch(k=n,D=t,U.tag){case 1:if(O=U.payload,typeof O=="function"){E=O.call(D,E,k);break e}E=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=U.payload,k=typeof O=="function"?O.call(D,E,k):O,k==null)break e;E=A({},E,k);break e;case 2:Zn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[d]:k.push(d))}else D={eventTime:D,lane:k,tag:d.tag,payload:d.payload,callback:d.callback,next:null},P===null?(x=P=D,f=E):P=P.next=D,s|=k;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;k=d,d=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(P===null&&(f=E),i.baseState=f,i.firstBaseUpdate=x,i.lastBaseUpdate=P,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);xt|=s,e.lanes=s,e.memoizedState=E}}function Ql(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var Rr={},jn=Gn(Rr),Nr=Gn(Rr),Tr=Gn(Rr);function yt(e){if(e===Rr)throw Error(a(174));return e}function fs(e,n){switch(ve(Tr,n),ve(Nr,e),ve(jn,Rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ho(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ho(n,e)}_e(jn),ve(jn,n)}function Kt(){_e(jn),_e(Nr),_e(Tr)}function Gl(e){yt(Tr.current);var n=yt(jn.current),t=ho(n,e.type);n!==t&&(ve(Nr,e),ve(jn,t))}function hs(e){Nr.current===e&&(_e(jn),_e(Nr))}var Ce=Gn(0);function Di(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ms=[];function gs(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var zi=I.ReactCurrentDispatcher,ys=I.ReactCurrentBatchConfig,vt=0,Ee=null,Ie=null,be=null,Li=!1,Dr=!1,zr=0,fp=0;function Ke(){throw Error(a(321))}function vs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function xs(e,n,t,r,i,o){if(vt=o,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zi.current=e===null||e.memoizedState===null?yp:vp,e=t(r,i),Dr){o=0;do{if(Dr=!1,zr=0,25<=o)throw Error(a(301));o+=1,be=Ie=null,n.updateQueue=null,zi.current=xp,e=t(r,i)}while(Dr)}if(zi.current=Ai,n=Ie!==null&&Ie.next!==null,vt=0,be=Ie=Ee=null,Li=!1,n)throw Error(a(300));return e}function _s(){var e=zr!==0;return zr=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?Ee.memoizedState=be=e:be=be.next=e,be}function hn(){if(Ie===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=be===null?Ee.memoizedState:be.next;if(n!==null)be=n,Ie=e;else{if(e===null)throw Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},be===null?Ee.memoizedState=be=e:be=be.next=e}return be}function Lr(e,n){return typeof n=="function"?n(e):n}function ws(e){var n=hn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var d=s=null,f=null,x=o;do{var P=x.lane;if((vt&P)===P)f!==null&&(f=f.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var E={lane:P,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};f===null?(d=f=E,s=r):f=f.next=E,Ee.lanes|=P,xt|=P}x=x.next}while(x!==null&&x!==o);f===null?s=r:f.next=d,vn(r,n.memoizedState)||(nn=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=f,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,xt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ks(e){var n=hn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);vn(o,n.memoizedState)||(nn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Yl(){}function Xl(e,n){var t=Ee,r=hn(),i=n(),o=!vn(r.memoizedState,i);if(o&&(r.memoizedState=i,nn=!0),r=r.queue,Ss(eu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||be!==null&&be.memoizedState.tag&1){if(t.flags|=2048,Mr(9,Jl.bind(null,t,r,i,n),void 0,null),Oe===null)throw Error(a(349));(vt&30)!==0||Zl(t,n,i)}return i}function Zl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jl(e,n,t,r){n.value=t,n.getSnapshot=r,nu(n)&&tu(e)}function eu(e,n,t){return t(function(){nu(n)&&tu(e)})}function nu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function tu(e){var n=An(e,1);n!==null&&Sn(n,e,1,-1)}function ru(e){var n=Rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=gp.bind(null,Ee,e),[n.memoizedState,e]}function Mr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function iu(){return hn().memoizedState}function Mi(e,n,t,r){var i=Rn();Ee.flags|=e,i.memoizedState=Mr(1|n,t,void 0,r===void 0?null:r)}function Ii(e,n,t,r){var i=hn();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var s=Ie.memoizedState;if(o=s.destroy,r!==null&&vs(r,s.deps)){i.memoizedState=Mr(n,t,o,r);return}}Ee.flags|=e,i.memoizedState=Mr(1|n,t,o,r)}function ou(e,n){return Mi(8390656,8,e,n)}function Ss(e,n){return Ii(2048,8,e,n)}function su(e,n){return Ii(4,2,e,n)}function au(e,n){return Ii(4,4,e,n)}function lu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function uu(e,n,t){return t=t!=null?t.concat([e]):null,Ii(4,4,lu.bind(null,n,e),t)}function Ps(){}function cu(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function du(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function pu(e,n,t){return(vt&21)===0?(e.baseState&&(e.baseState=!1,nn=!0),e.memoizedState=t):(vn(t,n)||(t=Ba(),Ee.lanes|=t,xt|=t,e.baseState=!0),n)}function hp(e,n){var t=pe;pe=t!==0&&4>t?t:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),n()}finally{pe=t,ys.transition=r}}function fu(){return hn().memoizedState}function mp(e,n,t){var r=rt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},hu(e))mu(n,t);else if(t=Hl(e,n,t,r),t!==null){var i=Ze();Sn(t,e,r,i),gu(t,n,r)}}function gp(e,n,t){var r=rt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(hu(e))mu(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,d=o(s,t);if(i.hasEagerState=!0,i.eagerState=d,vn(d,s)){var f=n.interleaved;f===null?(i.next=i,ds(n)):(i.next=f.next,f.next=i),n.interleaved=i;return}}catch{}finally{}t=Hl(e,n,i,r),t!==null&&(i=Ze(),Sn(t,e,r,i),gu(t,n,r))}}function hu(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function mu(e,n){Dr=Li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gu(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Eo(e,t)}}var Ai={readContext:fn,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},yp={readContext:fn,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:ou,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mi(4194308,4,lu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mi(4,2,e,n)},useMemo:function(e,n){var t=Rn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Rn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=mp.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:ru,useDebugValue:Ps,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=ru(!1),n=e[0];return e=hp.bind(null,e[1]),Rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ee,i=Rn();if(Se){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Oe===null)throw Error(a(349));(vt&30)!==0||Zl(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ou(eu.bind(null,r,o,e),[e]),r.flags|=2048,Mr(9,Jl.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Rn(),n=Oe.identifierPrefix;if(Se){var t=In,r=Mn;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=fp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vp={readContext:fn,useCallback:cu,useContext:fn,useEffect:Ss,useImperativeHandle:uu,useInsertionEffect:su,useLayoutEffect:au,useMemo:du,useReducer:ws,useRef:iu,useState:function(){return ws(Lr)},useDebugValue:Ps,useDeferredValue:function(e){var n=hn();return pu(n,Ie.memoizedState,e)},useTransition:function(){var e=ws(Lr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Yl,useSyncExternalStore:Xl,useId:fu,unstable_isNewReconciler:!1},xp={readContext:fn,useCallback:cu,useContext:fn,useEffect:Ss,useImperativeHandle:uu,useInsertionEffect:su,useLayoutEffect:au,useMemo:du,useReducer:ks,useRef:iu,useState:function(){return ks(Lr)},useDebugValue:Ps,useDeferredValue:function(e){var n=hn();return Ie===null?n.memoizedState=e:pu(n,Ie.memoizedState,e)},useTransition:function(){var e=ks(Lr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Yl,useSyncExternalStore:Xl,useId:fu,unstable_isNewReconciler:!1};function _n(e,n){if(e&&e.defaultProps){n=A({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:A({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bi={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ze(),i=rt(e),o=bn(r,i);o.payload=n,t!=null&&(o.callback=t),n=Jn(e,o,i),n!==null&&(Sn(n,e,i,r),Ni(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ze(),i=rt(e),o=bn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Jn(e,o,i),n!==null&&(Sn(n,e,i,r),Ni(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ze(),r=rt(e),i=bn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Jn(e,i,r),n!==null&&(Sn(n,e,r,t),Ni(n,e,r))}};function yu(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!_r(t,r)||!_r(i,o):!0}function vu(e,n,t){var r=!1,i=Yn,o=n.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=en(n)?ft:Ve.current,r=n.contextTypes,o=(r=r!=null)?Ut(e,i):Yn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function xu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bi.enqueueReplaceState(n,n.state,null)}function Es(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ps(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=en(n)?ft:Ve.current,i.context=Ut(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Cs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&bi.enqueueReplaceState(i,i.state,null),Ti(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qt(e,n){try{var t="",r=n;do t+=ae(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function js(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Rs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function _u(e,n,t){t=bn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qi||(qi=!0,Ws=r),Rs(e,n)},t}function wu(e,n,t){t=bn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Rs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Rs(e,n),typeof r!="function"&&(nt===null?nt=new Set([this]):nt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ku(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Mp.bind(null,e,n,t),n.then(e,e))}function Su(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pu(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=bn(-1,1),n.tag=2,Jn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var wp=I.ReactCurrentOwner,nn=!1;function Xe(e,n,t,r){n.child=e===null?ql(n,null,t,r):qt(n,e.child,t,r)}function Cu(e,n,t,r,i){t=t.render;var o=n.ref;return Vt(n,i),r=xs(e,n,t,r,o,i),t=_s(),e!==null&&!nn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,On(e,n,i)):(Se&&t&&ts(n),n.flags|=1,Xe(e,n,r,i),n.child)}function Eu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ys(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ju(e,n,o,r,i)):(e=Yi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:_r,t(s,r)&&e.ref===n.ref)return On(e,n,i)}return n.flags|=1,e=ot(o,r),e.ref=n.ref,e.return=n,n.child=e}function ju(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(_r(o,r)&&e.ref===n.ref)if(nn=!1,n.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(nn=!0);else return n.lanes=e.lanes,On(e,n,i)}return Ns(e,n,t,r,i)}function Ru(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Yt,cn),cn|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ve(Yt,cn),cn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ve(Yt,cn),cn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ve(Yt,cn),cn|=r;return Xe(e,n,i,t),n.child}function Nu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ns(e,n,t,r,i){var o=en(t)?ft:Ve.current;return o=Ut(n,o),Vt(n,i),t=xs(e,n,t,r,o,i),r=_s(),e!==null&&!nn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,On(e,n,i)):(Se&&r&&ts(n),n.flags|=1,Xe(e,n,t,i),n.child)}function Tu(e,n,t,r,i){if(en(t)){var o=!0;wi(n)}else o=!1;if(Vt(n,i),n.stateNode===null)Fi(e,n),vu(n,t,r),Es(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,d=n.memoizedProps;s.props=d;var f=s.context,x=t.contextType;typeof x=="object"&&x!==null?x=fn(x):(x=en(t)?ft:Ve.current,x=Ut(n,x));var P=t.getDerivedStateFromProps,E=typeof P=="function"||typeof s.getSnapshotBeforeUpdate=="function";E||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==r||f!==x)&&xu(n,s,r,x),Zn=!1;var k=n.memoizedState;s.state=k,Ti(n,r,s,i),f=n.memoizedState,d!==r||k!==f||Je.current||Zn?(typeof P=="function"&&(Cs(n,t,P,r),f=n.memoizedState),(d=Zn||yu(n,t,d,r,k,f,x))?(E||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=f),s.props=r,s.state=f,s.context=x,r=d):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Vl(e,n),d=n.memoizedProps,x=n.type===n.elementType?d:_n(n.type,d),s.props=x,E=n.pendingProps,k=s.context,f=t.contextType,typeof f=="object"&&f!==null?f=fn(f):(f=en(t)?ft:Ve.current,f=Ut(n,f));var D=t.getDerivedStateFromProps;(P=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==E||k!==f)&&xu(n,s,r,f),Zn=!1,k=n.memoizedState,s.state=k,Ti(n,r,s,i);var O=n.memoizedState;d!==E||k!==O||Je.current||Zn?(typeof D=="function"&&(Cs(n,t,D,r),O=n.memoizedState),(x=Zn||yu(n,t,x,r,k,O,f)||!1)?(P||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,O,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,O,f)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=O),s.props=r,s.state=O,s.context=f,r=x):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),r=!1)}return Ts(e,n,t,r,o,i)}function Ts(e,n,t,r,i,o){Nu(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Il(n,t,!1),On(e,n,o);r=n.stateNode,wp.current=n;var d=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=qt(n,e.child,null,o),n.child=qt(n,null,d,o)):Xe(e,n,d,o),n.memoizedState=r.state,i&&Il(n,t,!0),n.child}function Du(e){var n=e.stateNode;n.pendingContext?Ll(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ll(e,n.context,!1),fs(e,n.containerInfo)}function zu(e,n,t,r,i){return Wt(),ss(i),n.flags|=256,Xe(e,n,t,r),n.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,n,t){var r=n.pendingProps,i=Ce.current,o=!1,s=(n.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return os(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xi(s,r,0,null),e=St(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=zs(t),n.memoizedState=Ds,e):Ls(n,s));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return kp(e,n,s,r,d,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,d=i.sibling;var f={mode:"hidden",children:r.children};return(s&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=f,n.deletions=null):(r=ot(i,f),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?o=ot(d,o):(o=St(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?zs(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Ds,r}return o=e.child,e=o.sibling,r=ot(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ls(e,n){return n=Xi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Oi(e,n,t,r){return r!==null&&ss(r),qt(n,e.child,null,t),e=Ls(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kp(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=js(Error(a(422))),Oi(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Xi({mode:"visible",children:r.children},i,0,null),o=St(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&qt(n,e.child,null,s),n.child.memoizedState=zs(s),n.memoizedState=Ds,o);if((n.mode&1)===0)return Oi(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,o=Error(a(419)),r=js(o,r,void 0),Oi(e,n,s,r)}if(d=(s&e.childLanes)!==0,nn||d){if(r=Oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,An(e,i),Sn(r,e,i,-1))}return Gs(),r=js(Error(a(421))),Oi(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ip.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,un=Qn(i.nextSibling),ln=n,Se=!0,xn=null,e!==null&&(dn[pn++]=Mn,dn[pn++]=In,dn[pn++]=ht,Mn=e.id,In=e.overflow,ht=n),n=Ls(n,r.children),n.flags|=4096,n)}function Mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),cs(e.return,n,t)}function Ms(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Iu(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,n,r.children,t),r=Ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,t,n);else if(e.tag===19)Mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Di(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ms(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Di(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ms(n,!0,t,null,o);break;case"together":Ms(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function On(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sp(e,n,t){switch(n.tag){case 3:Du(n),Wt();break;case 5:Gl(n);break;case 1:en(n.type)&&wi(n);break;case 4:fs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ve(ji,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Lu(e,n,t):(ve(Ce,Ce.current&1),e=On(e,n,t),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Iu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return n.lanes=0,Ru(e,n,t)}return On(e,n,t)}var Au,Is,bu,Ou;Au=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Is=function(){},bu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,yt(jn.current);var o=null;switch(t){case"input":i=uo(e,i),r=uo(e,r),o=[];break;case"select":i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case"textarea":i=fo(e,i),r=fo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}mo(t,r);var s;t=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var d=i[x];for(s in d)d.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(_.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in r){var f=r[x];if(d=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&f!==d&&(f!=null||d!=null))if(x==="style")if(d){for(s in d)!d.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in f)f.hasOwnProperty(s)&&d[s]!==f[s]&&(t||(t={}),t[s]=f[s])}else t||(o||(o=[]),o.push(x,t)),t=f;else x==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(o=o||[]).push(x,f)):x==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(x,""+f):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(_.hasOwnProperty(x)?(f!=null&&x==="onScroll"&&xe("scroll",e),o||d===f||(o=[])):(o=o||[]).push(x,f))}t&&(o=o||[]).push("style",t);var x=o;(n.updateQueue=x)&&(n.flags|=4)}},Ou=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ir(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Pp(e,n,t){var r=n.pendingProps;switch(rs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return en(n.type)&&_i(),Qe(n),null;case 3:return r=n.stateNode,Kt(),_e(Je),_e(Ve),gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xn!==null&&(Vs(xn),xn=null))),Is(e,n),Qe(n),null;case 5:hs(n);var i=yt(Tr.current);if(t=n.type,e!==null&&n.stateNode!=null)bu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Qe(n),null}if(e=yt(jn.current),Ci(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[En]=n,r[Cr]=o,e=(n.mode&1)!==0,t){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)xe(kr[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":va(r,o),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},xe("invalid",r);break;case"textarea":wa(r,o),xe("invalid",r)}mo(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var d=o[s];s==="children"?typeof d=="string"?r.textContent!==d&&(o.suppressHydrationWarning!==!0&&yi(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&yi(r.textContent,d,e),i=["children",""+d]):_.hasOwnProperty(s)&&d!=null&&s==="onScroll"&&xe("scroll",r)}switch(t){case"input":Qr(r),_a(r,o,!0);break;case"textarea":Qr(r),Sa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[En]=n,e[Cr]=r,Au(e,n,!1,!1),n.stateNode=e;e:{switch(s=go(t,r),t){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)xe(kr[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":va(e,r),i=uo(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=A({},r,{value:void 0}),xe("invalid",e);break;case"textarea":wa(e,r),i=fo(e,r),xe("invalid",e);break;default:i=r}mo(t,i),d=i;for(o in d)if(d.hasOwnProperty(o)){var f=d[o];o==="style"?ja(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ca(e,f)):o==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&rr(e,f):typeof f=="number"&&rr(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_.hasOwnProperty(o)?f!=null&&o==="onScroll"&&xe("scroll",e):f!=null&&B(e,o,f,s))}switch(t){case"input":Qr(e),_a(e,r,!1);break;case"textarea":Qr(e),Sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Qe(n),null;case 6:if(e&&n.stateNode!=null)Ou(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=yt(Tr.current),yt(jn.current),Ci(n)){if(r=n.stateNode,t=n.memoizedProps,r[En]=n,(o=r.nodeValue!==t)&&(e=ln,e!==null))switch(e.tag){case 3:yi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=n,n.stateNode=r}return Qe(n),null;case 13:if(_e(Ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&un!==null&&(n.mode&1)!==0&&(n.flags&128)===0)$l(),Wt(),n.flags|=98560,o=!1;else if(o=Ci(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[En]=n}else Wt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),o=!1}else xn!==null&&(Vs(xn),xn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Ae===0&&(Ae=3):Gs())),n.updateQueue!==null&&(n.flags|=4),Qe(n),null);case 4:return Kt(),Is(e,n),e===null&&Sr(n.stateNode.containerInfo),Qe(n),null;case 10:return us(n.type._context),Qe(n),null;case 17:return en(n.type)&&_i(),Qe(n),null;case 19:if(_e(Ce),o=n.memoizedState,o===null)return Qe(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Ir(o,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=Di(e),s!==null){for(n.flags|=128,Ir(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ve(Ce,Ce.current&1|2),n.child}e=e.sibling}o.tail!==null&&Te()>Xt&&(n.flags|=128,r=!0,Ir(o,!1),n.lanes=4194304)}else{if(!r)if(e=Di(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Se)return Qe(n),null}else 2*Te()-o.renderingStartTime>Xt&&t!==1073741824&&(n.flags|=128,r=!0,Ir(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Te(),n.sibling=null,t=Ce.current,ve(Ce,r?t&1|2:t&1),n):(Qe(n),null);case 22:case 23:return Qs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(cn&1073741824)!==0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function Cp(e,n){switch(rs(n),n.tag){case 1:return en(n.type)&&_i(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kt(),_e(Je),_e(Ve),gs(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return hs(n),null;case 13:if(_e(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _e(Ce),null;case 4:return Kt(),null;case 10:return us(n.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var Ui=!1,Ge=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,L=null;function Gt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ne(e,n,r)}else t.current=null}function As(e,n,t){try{t()}catch(r){Ne(e,n,r)}}var Fu=!1;function jp(e,n){if(Qo=si,e=yl(),Uo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,d=-1,f=-1,x=0,P=0,E=e,k=null;n:for(;;){for(var D;E!==t||i!==0&&E.nodeType!==3||(d=s+i),E!==o||r!==0&&E.nodeType!==3||(f=s+r),E.nodeType===3&&(s+=E.nodeValue.length),(D=E.firstChild)!==null;)k=E,E=D;for(;;){if(E===e)break n;if(k===t&&++x===i&&(d=s),k===o&&++P===r&&(f=s),(D=E.nextSibling)!==null)break;E=k,k=E.parentNode}E=D}t=d===-1||f===-1?null:{start:d,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(Go={focusedElem:e,selectionRange:t},si=!1,L=n;L!==null;)if(n=L,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,L=e;else for(;L!==null;){n=L;try{var O=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var U=O.memoizedProps,De=O.memoizedState,g=n.stateNode,h=g.getSnapshotBeforeUpdate(n.elementType===n.type?U:_n(n.type,U),De);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(j){Ne(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,L=e;break}L=n.return}return O=Fu,Fu=!1,O}function Ar(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&As(n,t,o)}i=i.next}while(i!==r)}}function $i(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function bs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Uu(e){var n=e.alternate;n!==null&&(e.alternate=null,Uu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[En],delete n[Cr],delete n[Jo],delete n[up],delete n[cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(Os(e,n,t),e=e.sibling;e!==null;)Os(e,n,t),e=e.sibling}function Fs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fs(e,n,t),e=e.sibling;e!==null;)Fs(e,n,t),e=e.sibling}var $e=null,wn=!1;function et(e,n,t){for(t=t.child;t!==null;)Wu(e,n,t),t=t.sibling}function Wu(e,n,t){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ei,t)}catch{}switch(t.tag){case 5:Ge||Gt(t,n);case 6:var r=$e,i=wn;$e=null,et(e,n,t),$e=r,wn=i,$e!==null&&(wn?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(wn?(e=$e,t=t.stateNode,e.nodeType===8?Zo(e.parentNode,t):e.nodeType===1&&Zo(e,t),hr(e)):Zo($e,t.stateNode));break;case 4:r=$e,i=wn,$e=t.stateNode.containerInfo,wn=!0,et(e,n,t),$e=r,wn=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&As(t,n,s),i=i.next}while(i!==r)}et(e,n,t);break;case 1:if(!Ge&&(Gt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(d){Ne(t,n,d)}et(e,n,t);break;case 21:et(e,n,t);break;case 22:t.mode&1?(Ge=(r=Ge)||t.memoizedState!==null,et(e,n,t),Ge=r):et(e,n,t);break;default:et(e,n,t)}}function qu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ep),n.forEach(function(r){var i=Ap.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function kn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,d=s;e:for(;d!==null;){switch(d.tag){case 5:$e=d.stateNode,wn=!1;break e;case 3:$e=d.stateNode.containerInfo,wn=!0;break e;case 4:$e=d.stateNode.containerInfo,wn=!0;break e}d=d.return}if($e===null)throw Error(a(160));Wu(o,s,i),$e=null,wn=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(x){Ne(i,n,x)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hu(n,e),n=n.sibling}function Hu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kn(n,e),Nn(e),r&4){try{Ar(3,e,e.return),$i(3,e)}catch(U){Ne(e,e.return,U)}try{Ar(5,e,e.return)}catch(U){Ne(e,e.return,U)}}break;case 1:kn(n,e),Nn(e),r&512&&t!==null&&Gt(t,t.return);break;case 5:if(kn(n,e),Nn(e),r&512&&t!==null&&Gt(t,t.return),e.flags&32){var i=e.stateNode;try{rr(i,"")}catch(U){Ne(e,e.return,U)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&xa(i,o),go(d,s);var x=go(d,o);for(s=0;s<f.length;s+=2){var P=f[s],E=f[s+1];P==="style"?ja(i,E):P==="dangerouslySetInnerHTML"?Ca(i,E):P==="children"?rr(i,E):B(i,P,E,x)}switch(d){case"input":co(i,o);break;case"textarea":ka(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var D=o.value;D!=null?Rt(i,!!o.multiple,D,!1):k!==!!o.multiple&&(o.defaultValue!=null?Rt(i,!!o.multiple,o.defaultValue,!0):Rt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Cr]=o}catch(U){Ne(e,e.return,U)}}break;case 6:if(kn(n,e),Nn(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(U){Ne(e,e.return,U)}}break;case 3:if(kn(n,e),Nn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(U){Ne(e,e.return,U)}break;case 4:kn(n,e),Nn(e);break;case 13:kn(n,e),Nn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bs=Te())),r&4&&qu(e);break;case 22:if(P=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(x=Ge)||P,kn(n,e),Ge=x):kn(n,e),Nn(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!P&&(e.mode&1)!==0)for(L=e,P=e.child;P!==null;){for(E=L=P;L!==null;){switch(k=L,D=k.child,k.tag){case 0:case 11:case 14:case 15:Ar(4,k,k.return);break;case 1:Gt(k,k.return);var O=k.stateNode;if(typeof O.componentWillUnmount=="function"){r=k,t=k.return;try{n=r,O.props=n.memoizedProps,O.state=n.memoizedState,O.componentWillUnmount()}catch(U){Ne(r,t,U)}}break;case 5:Gt(k,k.return);break;case 22:if(k.memoizedState!==null){Qu(E);continue}}D!==null?(D.return=k,L=D):Qu(E)}P=P.sibling}e:for(P=null,E=e;;){if(E.tag===5){if(P===null){P=E;try{i=E.stateNode,x?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=E.stateNode,f=E.memoizedProps.style,s=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=Ea("display",s))}catch(U){Ne(e,e.return,U)}}}else if(E.tag===6){if(P===null)try{E.stateNode.nodeValue=x?"":E.memoizedProps}catch(U){Ne(e,e.return,U)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;P===E&&(P=null),E=E.return}P===E&&(P=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:kn(n,e),Nn(e),r&4&&qu(e);break;case 21:break;default:kn(n,e),Nn(e)}}function Nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($u(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rr(i,""),r.flags&=-33);var o=Bu(e);Fs(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,d=Bu(e);Os(e,d,s);break;default:throw Error(a(161))}}catch(f){Ne(e,e.return,f)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rp(e,n,t){L=e,Vu(e)}function Vu(e,n,t){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ui;if(!s){var d=i.alternate,f=d!==null&&d.memoizedState!==null||Ge;d=Ui;var x=Ge;if(Ui=s,(Ge=f)&&!x)for(L=i;L!==null;)s=L,f=s.child,s.tag===22&&s.memoizedState!==null?Gu(i):f!==null?(f.return=s,L=f):Gu(i);for(;o!==null;)L=o,Vu(o),o=o.sibling;L=i,Ui=d,Ge=x}Ku(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,L=o):Ku(e)}}function Ku(e){for(;L!==null;){var n=L;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ge||$i(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:_n(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ql(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ql(n,s,t)}break;case 5:var d=n.stateNode;if(t===null&&n.flags&4){t=d;var f=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var x=n.alternate;if(x!==null){var P=x.memoizedState;if(P!==null){var E=P.dehydrated;E!==null&&hr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ge||n.flags&512&&bs(n)}catch(k){Ne(n,n.return,k)}}if(n===e){L=null;break}if(t=n.sibling,t!==null){t.return=n.return,L=t;break}L=n.return}}function Qu(e){for(;L!==null;){var n=L;if(n===e){L=null;break}var t=n.sibling;if(t!==null){t.return=n.return,L=t;break}L=n.return}}function Gu(e){for(;L!==null;){var n=L;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{$i(4,n)}catch(f){Ne(n,t,f)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(f){Ne(n,i,f)}}var o=n.return;try{bs(n)}catch(f){Ne(n,o,f)}break;case 5:var s=n.return;try{bs(n)}catch(f){Ne(n,s,f)}}}catch(f){Ne(n,n.return,f)}if(n===e){L=null;break}var d=n.sibling;if(d!==null){d.return=n.return,L=d;break}L=n.return}}var Np=Math.ceil,Bi=I.ReactCurrentDispatcher,Us=I.ReactCurrentOwner,mn=I.ReactCurrentBatchConfig,se=0,Oe=null,ze=null,Be=0,cn=0,Yt=Gn(0),Ae=0,br=null,xt=0,Wi=0,$s=0,Or=null,tn=null,Bs=0,Xt=1/0,Fn=null,qi=!1,Ws=null,nt=null,Hi=!1,tt=null,Vi=0,Fr=0,qs=null,Ki=-1,Qi=0;function Ze(){return(se&6)!==0?Te():Ki!==-1?Ki:Ki=Te()}function rt(e){return(e.mode&1)===0?1:(se&2)!==0&&Be!==0?Be&-Be:pp.transition!==null?(Qi===0&&(Qi=Ba()),Qi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Xa(e.type)),e)}function Sn(e,n,t,r){if(50<Fr)throw Fr=0,qs=null,Error(a(185));ur(e,t,r),((se&2)===0||e!==Oe)&&(e===Oe&&((se&2)===0&&(Wi|=t),Ae===4&&it(e,Be)),rn(e,r),t===1&&se===0&&(n.mode&1)===0&&(Xt=Te()+500,ki&&Xn()))}function rn(e,n){var t=e.callbackNode;pd(e,n);var r=ri(e,e===Oe?Be:0);if(r===0)t!==null&&Fa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Fa(t),n===1)e.tag===0?dp(Xu.bind(null,e)):Al(Xu.bind(null,e)),ap(function(){(se&6)===0&&Xn()}),t=null;else{switch(Wa(r)){case 1:t=So;break;case 4:t=Ua;break;case 16:t=Jr;break;case 536870912:t=$a;break;default:t=Jr}t=oc(t,Yu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yu(e,n){if(Ki=-1,Qi=0,(se&6)!==0)throw Error(a(327));var t=e.callbackNode;if(Zt()&&e.callbackNode!==t)return null;var r=ri(e,e===Oe?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Gi(e,r);else{n=r;var i=se;se|=2;var o=Ju();(Oe!==e||Be!==n)&&(Fn=null,Xt=Te()+500,wt(e,n));do try{zp();break}catch(d){Zu(e,d)}while(!0);ls(),Bi.current=o,se=i,ze!==null?n=0:(Oe=null,Be=0,n=Ae)}if(n!==0){if(n===2&&(i=Po(e),i!==0&&(r=i,n=Hs(e,i))),n===1)throw t=br,wt(e,0),it(e,r),rn(e,Te()),t;if(n===6)it(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Tp(i)&&(n=Gi(e,r),n===2&&(o=Po(e),o!==0&&(r=o,n=Hs(e,o))),n===1))throw t=br,wt(e,0),it(e,r),rn(e,Te()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:kt(e,tn,Fn);break;case 3:if(it(e,r),(r&130023424)===r&&(n=Bs+500-Te(),10<n)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xo(kt.bind(null,e,tn,Fn),n);break}kt(e,tn,Fn);break;case 4:if(it(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-yn(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=Xo(kt.bind(null,e,tn,Fn),r);break}kt(e,tn,Fn);break;case 5:kt(e,tn,Fn);break;default:throw Error(a(329))}}}return rn(e,Te()),e.callbackNode===t?Yu.bind(null,e):null}function Hs(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=Gi(e,n),e!==2&&(n=tn,tn=t,n!==null&&Vs(n)),e}function Vs(e){tn===null?tn=e:tn.push.apply(tn,e)}function Tp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!vn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~$s,n&=~Wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function Xu(e){if((se&6)!==0)throw Error(a(327));Zt();var n=ri(e,0);if((n&1)===0)return rn(e,Te()),null;var t=Gi(e,n);if(e.tag!==0&&t===2){var r=Po(e);r!==0&&(n=r,t=Hs(e,r))}if(t===1)throw t=br,wt(e,0),it(e,n),rn(e,Te()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kt(e,tn,Fn),rn(e,Te()),null}function Ks(e,n){var t=se;se|=1;try{return e(n)}finally{se=t,se===0&&(Xt=Te()+500,ki&&Xn())}}function _t(e){tt!==null&&tt.tag===0&&(se&6)===0&&Zt();var n=se;se|=1;var t=mn.transition,r=pe;try{if(mn.transition=null,pe=1,e)return e()}finally{pe=r,mn.transition=t,se=n,(se&6)===0&&Xn()}}function Qs(){cn=Yt.current,_e(Yt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,sp(t)),ze!==null)for(t=ze.return;t!==null;){var r=t;switch(rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:Kt(),_e(Je),_e(Ve),gs();break;case 5:hs(r);break;case 4:Kt();break;case 13:_e(Ce);break;case 19:_e(Ce);break;case 10:us(r.type._context);break;case 22:case 23:Qs()}t=t.return}if(Oe=e,ze=e=ot(e.current,null),Be=cn=n,Ae=0,br=null,$s=Wi=xt=0,tn=Or=null,gt!==null){for(n=0;n<gt.length;n++)if(t=gt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}gt=null}return e}function Zu(e,n){do{var t=ze;try{if(ls(),zi.current=Ai,Li){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Li=!1}if(vt=0,be=Ie=Ee=null,Dr=!1,zr=0,Us.current=null,t===null||t.return===null){Ae=1,br=n,ze=null;break}e:{var o=e,s=t.return,d=t,f=n;if(n=Be,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=f,P=d,E=P.tag;if((P.mode&1)===0&&(E===0||E===11||E===15)){var k=P.alternate;k?(P.updateQueue=k.updateQueue,P.memoizedState=k.memoizedState,P.lanes=k.lanes):(P.updateQueue=null,P.memoizedState=null)}var D=Su(s);if(D!==null){D.flags&=-257,Pu(D,s,d,o,n),D.mode&1&&ku(o,x,n),n=D,f=x;var O=n.updateQueue;if(O===null){var U=new Set;U.add(f),n.updateQueue=U}else O.add(f);break e}else{if((n&1)===0){ku(o,x,n),Gs();break e}f=Error(a(426))}}else if(Se&&d.mode&1){var De=Su(s);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),Pu(De,s,d,o,n),ss(Qt(f,d));break e}}o=f=Qt(f,d),Ae!==4&&(Ae=2),Or===null?Or=[o]:Or.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=_u(o,f,n);Kl(o,g);break e;case 1:d=f;var h=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nt===null||!nt.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var j=wu(o,d,n);Kl(o,j);break e}}o=o.return}while(o!==null)}nc(t)}catch($){n=$,ze===t&&t!==null&&(ze=t=t.return);continue}break}while(!0)}function Ju(){var e=Bi.current;return Bi.current=Ai,e===null?Ai:e}function Gs(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Oe===null||(xt&268435455)===0&&(Wi&268435455)===0||it(Oe,Be)}function Gi(e,n){var t=se;se|=2;var r=Ju();(Oe!==e||Be!==n)&&(Fn=null,wt(e,n));do try{Dp();break}catch(i){Zu(e,i)}while(!0);if(ls(),se=t,Bi.current=r,ze!==null)throw Error(a(261));return Oe=null,Be=0,Ae}function Dp(){for(;ze!==null;)ec(ze)}function zp(){for(;ze!==null&&!rd();)ec(ze)}function ec(e){var n=ic(e.alternate,e,cn);e.memoizedProps=e.pendingProps,n===null?nc(e):ze=n,Us.current=null}function nc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Pp(t,n,cn),t!==null){ze=t;return}}else{if(t=Cp(t,n),t!==null){t.flags&=32767,ze=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,ze=null;return}}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Ae===0&&(Ae=5)}function kt(e,n,t){var r=pe,i=mn.transition;try{mn.transition=null,pe=1,Lp(e,n,t,r)}finally{mn.transition=i,pe=r}return null}function Lp(e,n,t,r){do Zt();while(tt!==null);if((se&6)!==0)throw Error(a(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(fd(e,o),e===Oe&&(ze=Oe=null,Be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Hi||(Hi=!0,oc(Jr,function(){return Zt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=mn.transition,mn.transition=null;var s=pe;pe=1;var d=se;se|=4,Us.current=null,jp(e,t),Hu(t,e),Jd(Go),si=!!Qo,Go=Qo=null,e.current=t,Rp(t),id(),se=d,pe=s,mn.transition=o}else e.current=t;if(Hi&&(Hi=!1,tt=e,Vi=i),o=e.pendingLanes,o===0&&(nt=null),ad(t.stateNode),rn(e,Te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=Ws,Ws=null,e;return(Vi&1)!==0&&e.tag!==0&&Zt(),o=e.pendingLanes,(o&1)!==0?e===qs?Fr++:(Fr=0,qs=e):Fr=0,Xn(),null}function Zt(){if(tt!==null){var e=Wa(Vi),n=mn.transition,t=pe;try{if(mn.transition=null,pe=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Vi=0,(se&6)!==0)throw Error(a(331));var i=se;for(se|=4,L=e.current;L!==null;){var o=L,s=o.child;if((L.flags&16)!==0){var d=o.deletions;if(d!==null){for(var f=0;f<d.length;f++){var x=d[f];for(L=x;L!==null;){var P=L;switch(P.tag){case 0:case 11:case 15:Ar(8,P,o)}var E=P.child;if(E!==null)E.return=P,L=E;else for(;L!==null;){P=L;var k=P.sibling,D=P.return;if(Uu(P),P===x){L=null;break}if(k!==null){k.return=D,L=k;break}L=D}}}var O=o.alternate;if(O!==null){var U=O.child;if(U!==null){O.child=null;do{var De=U.sibling;U.sibling=null,U=De}while(U!==null)}}L=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var h=e.current;for(L=h;L!==null;){s=L;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,L=y;else e:for(s=h;L!==null;){if(d=L,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:$i(9,d)}}catch($){Ne(d,d.return,$)}if(d===s){L=null;break e}var j=d.sibling;if(j!==null){j.return=d.return,L=j;break e}L=d.return}}if(se=i,Xn(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{pe=t,mn.transition=n}}return!1}function tc(e,n,t){n=Qt(t,n),n=_u(e,n,1),e=Jn(e,n,1),n=Ze(),e!==null&&(ur(e,1,n),rn(e,n))}function Ne(e,n,t){if(e.tag===3)tc(e,e,t);else for(;n!==null;){if(n.tag===3){tc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nt===null||!nt.has(r))){e=Qt(t,e),e=wu(n,e,1),n=Jn(n,e,1),e=Ze(),n!==null&&(ur(n,1,e),rn(n,e));break}}n=n.return}}function Mp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ze(),e.pingedLanes|=e.suspendedLanes&t,Oe===e&&(Be&t)===t&&(Ae===4||Ae===3&&(Be&130023424)===Be&&500>Te()-Bs?wt(e,0):$s|=t),rn(e,n)}function rc(e,n){n===0&&((e.mode&1)===0?n=1:(n=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var t=Ze();e=An(e,n),e!==null&&(ur(e,n,t),rn(e,t))}function Ip(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rc(e,t)}function Ap(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),rc(e,t)}var ic;ic=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Je.current)nn=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return nn=!1,Sp(e,n,t);nn=(e.flags&131072)!==0}else nn=!1,Se&&(n.flags&1048576)!==0&&bl(n,Pi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fi(e,n),e=n.pendingProps;var i=Ut(n,Ve.current);Vt(n,t),i=xs(null,n,r,e,i,t);var o=_s();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,en(r)?(o=!0,wi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(n),i.updater=bi,n.stateNode=i,i._reactInternals=n,Es(n,r,e,t),n=Ts(null,n,r,!0,o,t)):(n.tag=0,Se&&o&&ts(n),Xe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Op(r),e=_n(r,e),i){case 0:n=Ns(null,n,r,e,t);break e;case 1:n=Tu(null,n,r,e,t);break e;case 11:n=Cu(null,n,r,e,t);break e;case 14:n=Eu(null,n,r,_n(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Ns(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Tu(e,n,r,i,t);case 3:e:{if(Du(n),e===null)throw Error(a(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Vl(e,n),Ti(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Qt(Error(a(423)),n),n=zu(e,n,r,t,i);break e}else if(r!==i){i=Qt(Error(a(424)),n),n=zu(e,n,r,t,i);break e}else for(un=Qn(n.stateNode.containerInfo.firstChild),ln=n,Se=!0,xn=null,t=ql(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),r===i){n=On(e,n,t);break e}Xe(e,n,r,t)}n=n.child}return n;case 5:return Gl(n),e===null&&os(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Yo(r,i)?s=null:o!==null&&Yo(r,o)&&(n.flags|=32),Nu(e,n),Xe(e,n,s,t),n.child;case 6:return e===null&&os(n),null;case 13:return Lu(e,n,t);case 4:return fs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):Xe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Cu(e,n,r,i,t);case 7:return Xe(e,n,n.pendingProps,t),n.child;case 8:return Xe(e,n,n.pendingProps.children,t),n.child;case 12:return Xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,ve(ji,r._currentValue),r._currentValue=s,o!==null)if(vn(o.value,s)){if(o.children===i.children&&!Je.current){n=On(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var d=o.dependencies;if(d!==null){s=o.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(o.tag===1){f=bn(-1,t&-t),f.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var P=x.pending;P===null?f.next=f:(f.next=P.next,P.next=f),x.pending=f}}o.lanes|=t,f=o.alternate,f!==null&&(f.lanes|=t),cs(o.return,t,n),d.lanes|=t;break}f=f.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(a(341));s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),cs(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Vt(n,t),i=fn(i),r=r(i),n.flags|=1,Xe(e,n,r,t),n.child;case 14:return r=n.type,i=_n(r,n.pendingProps),i=_n(r.type,i),Eu(e,n,r,i,t);case 15:return ju(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Fi(e,n),n.tag=1,en(r)?(e=!0,wi(n)):e=!1,Vt(n,t),vu(n,r,i),Es(n,r,i,t),Ts(null,n,r,!0,e,t);case 19:return Iu(e,n,t);case 22:return Ru(e,n,t)}throw Error(a(156,n.tag))};function oc(e,n){return Oa(e,n)}function bp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,n,t,r){return new bp(e,n,t,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===We)return 11;if(e===He)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=gn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yi(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Ys(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ne:return St(t.children,i,o,n);case V:s=8,i|=8;break;case ce:return e=gn(12,t,n,i|2),e.elementType=ce,e.lanes=o,e;case Me:return e=gn(13,t,n,i),e.elementType=Me,e.lanes=o,e;case qe:return e=gn(19,t,n,i),e.elementType=qe,e.lanes=o,e;case Re:return Xi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:s=10;break e;case Ue:s=9;break e;case We:s=11;break e;case He:s=14;break e;case ge:s=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=gn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function St(e,n,t,r){return e=gn(7,e,r,n),e.lanes=t,e}function Xi(e,n,t,r){return e=gn(22,e,r,n),e.elementType=Re,e.lanes=t,e.stateNode={isHidden:!1},e}function Xs(e,n,t){return e=gn(6,e,null,n),e.lanes=t,e}function Zs(e,n,t){return n=gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Fp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Js(e,n,t,r,i,o,s,d,f){return e=new Fp(e,n,t,d,f),n===1?(n=1,o===!0&&(n|=8)):n=0,o=gn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(o),e}function Up(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function sc(e){if(!e)return Yn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(en(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(en(t))return Ml(e,t,n)}return n}function ac(e,n,t,r,i,o,s,d,f){return e=Js(t,r,!0,e,i,o,s,d,f),e.context=sc(null),t=e.current,r=Ze(),i=rt(t),o=bn(r,i),o.callback=n??null,Jn(t,o,i),e.current.lanes=i,ur(e,i,r),rn(e,r),e}function Zi(e,n,t,r){var i=n.current,o=Ze(),s=rt(i);return t=sc(t),n.context===null?n.context=t:n.pendingContext=t,n=bn(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Jn(i,n,s),e!==null&&(Sn(e,i,s,o),Ni(e,i,s)),s}function Ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ea(e,n){lc(e,n),(e=e.alternate)&&lc(e,n)}function $p(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}eo.prototype.render=na.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Zi(e,n,null,null)},eo.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){Zi(null,e,null,null)}),n[zn]=null}};function eo(e){this._internalRoot=e}eo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Va();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Hn.length&&n!==0&&n<Hn[t].priority;t++);Hn.splice(t,0,e),t===0&&Ga(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function Bp(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var x=Ji(s);o.call(x)}}var s=ac(n,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=s,e[zn]=s.current,Sr(e.nodeType===8?e.parentNode:e),_t(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var x=Ji(f);d.call(x)}}var f=Js(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=f,e[zn]=f.current,Sr(e.nodeType===8?e.parentNode:e),_t(function(){Zi(n,f,t,r)}),f}function to(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var d=i;i=function(){var f=Ji(s);d.call(f)}}Zi(n,s,e,i)}else s=Bp(t,n,e,i,r);return Ji(s)}qa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=lr(n.pendingLanes);t!==0&&(Eo(n,t|1),rn(n,Te()),(se&6)===0&&(Xt=Te()+500,Xn()))}break;case 13:_t(function(){var r=An(e,1);if(r!==null){var i=Ze();Sn(r,e,1,i)}}),ea(e,1)}},jo=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var t=Ze();Sn(n,e,134217728,t)}ea(e,134217728)}},Ha=function(e){if(e.tag===13){var n=rt(e),t=An(e,n);if(t!==null){var r=Ze();Sn(t,e,n,r)}ea(e,n)}},Va=function(){return pe},Ka=function(e,n){var t=pe;try{return pe=e,n()}finally{pe=t}},xo=function(e,n,t){switch(n){case"input":if(co(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(a(90));ya(r),co(r,i)}}}break;case"textarea":ka(e,t);break;case"select":n=t.value,n!=null&&Rt(e,!!t.multiple,n,!1)}},Da=Ks,za=_t;var Wp={usingClientEntryPoint:!1,Events:[Er,Ot,xi,Na,Ta,Ks]},Ur={findFiberByHostInstance:pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Aa(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||$p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{ei=ro.inject(qp),Cn=ro}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp,on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(n))throw Error(a(200));return Up(e,n,null,t)},on.createRoot=function(e,n){if(!ta(e))throw Error(a(299));var t=!1,r="",i=uc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Js(e,1,!1,null,null,t,!1,r,i),e[zn]=n.current,Sr(e.nodeType===8?e.parentNode:e),new na(n)},on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Aa(n),e=e===null?null:e.stateNode,e},on.flushSync=function(e){return _t(e)},on.hydrate=function(e,n,t){if(!no(n))throw Error(a(200));return to(null,e,n,!0,t)},on.hydrateRoot=function(e,n,t){if(!ta(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=uc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=ac(n,null,e,1,t??null,i,!1,o,s),e[zn]=n.current,Sr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new eo(n)},on.render=function(e,n,t){if(!no(n))throw Error(a(200));return to(null,e,n,!1,t)},on.unmountComponentAtNode=function(e){if(!no(e))throw Error(a(40));return e._reactRootContainer?(_t(function(){to(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1},on.unstable_batchedUpdates=Ks,on.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!no(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return to(e,n,t,!1,r)},on.version="18.3.1-next-f1338f8080-20240426",on}var vc;function Jp(){if(vc)return oa.exports;vc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),oa.exports=Zp(),oa.exports}var xc;function ef(){if(xc)return io;xc=1;var l=Jp();return io.createRoot=l.createRoot,io.hydrateRoot=l.hydrateRoot,io}var nf=ef();const tf={config:{title:"PhiDoc",description:"Configuration-driven documentation sites for the GemPhi ecosystem.",version:"v0.1.0",brandId:"phidoc",docs:{path:"docs",routeBasePath:"docs",include:["**/*.md","**/*.mdx"],exclude:["**/node_modules/**","**/.git/**","**/_*/**"]},home:{title:"PhiDoc",tagline:"Automated, theme-driven documentation sites powered by puijs.",actions:[{label:"Read the PhiDoc guide",href:"/docs/phidoc/quickstart",variant:"primary"},{label:"Explore GemPhi docs",href:"/docs/shared/diem-standards",variant:"outline"}],features:[{title:"Configuration First",description:"Define the site, content path, landing page, navigation, and sidebar mode in one typed config.",icon:"settings",href:"/docs/phidoc/configuration"},{title:"Markdown Automation",description:"Scan Markdown and MDX files, parse frontmatter, infer slugs, and exclude drafts automatically.",icon:"code",href:"/docs/phidoc/content-model"},{title:"Generated Sidebars",description:"Build navigation from the filesystem, number prefixes, category metadata, and frontmatter order.",icon:"grid",href:"/docs/phidoc/sidebars"},{title:"puijs Themes",description:"Use puijs brand themes, dark mode, spacing, and components without application CSS.",icon:"palette",href:"/docs/phidoc/branding"},{title:"Reusable Sites",description:"Point any phi* project at its docs directory and reuse the same production docs shell.",icon:"layers",href:"/docs/phidoc/site-integration"},{title:"Vite Runtime",description:"Ship a fast React documentation app through a small Vite plugin and virtual content module.",icon:"rocket",href:"/docs/phidoc/deployment"}]},nav:[{label:"Docs",href:"/docs/phidoc/quickstart"},{label:"GitHub",href:"https://github.com/gemphi/phidoc",external:!0}],sidebar:{mode:"auto"},layout:{navbarVariant:"default",navbarSticky:!0,sidebarCollapsed:!1},blog:{path:"blog",routeBasePath:"blog",include:["**/*.md","**/*.mdx"],exclude:["**/node_modules/**","**/.git/**","**/_*/**"]},blogSidebar:{mode:"auto"}},items:[{id:"docs-phi-crates-appkit",slug:"/docs/phi/crates/appkit",title:"AppKit",category:"Phi",badge:"Phi",summary:"Rust bindings for Apple's AppKit framework - the primary UI framework for macOS applications.",citations:[],position:9999,hidden:!1,draft:!1,content:`# AppKit\r
\r
Rust bindings for Apple's AppKit framework - the primary UI framework for macOS applications.\r
\r
## Overview\r
\r
AppKit provides the window and view architecture for macOS apps, event handling, and the main run loop. The \`appkit\` crate exposes these APIs to Rust with idiomatic wrappers.\r
\r
## Key Components\r
\r
- **NSApplication** - Main application object and event loop\r
- **NSWindow** - Window management and rendering\r
- **NSView** - View hierarchy and layout\r
- **NSResponder** - Event response chain\r
\r
## Integration\r
\r
The AppKit crate integrates with:\r
\r
- **PUIKit** - Cross-platform UI kit that abstracts AppKit on macOS\r
- **KitPro** - Professional component library built on top of PUIKit\r
- **PhiFly** - Rendering pipeline integration for GPU-accelerated UI\r
`},{id:"docs-phi-sdk-arkit",slug:"/docs/phi/sdk/arkit",title:"ARKit",category:"Phi",badge:"Phi",summary:"Construct and manage immersive augmented reality experiences in your app.",citations:[],position:9999,hidden:!1,draft:!1,content:`# ARKit\r
\r
Construct and manage immersive augmented reality experiences in your app.\r
\r
## Overview\r
\r
ARKit provides world tracking, plane detection, image recognition, body tracking, hand tracking, scene reconstruction, and more. The Phi workspace mirrors Apple's ARKit documentation structure for Rust bindings.\r
\r
## Key APIs\r
\r
- **ARSession** - Manages the AR experience lifecycle\r
- **ARWorldTrackingConfiguration** - 6-DOF world tracking with feature points\r
- **ARPlaneAnchor** - Detected surfaces for placing virtual content\r
- **ARMeshAnchor** - Scene reconstruction mesh geometry\r
- **ARHandAnchor** - Hand skeleton tracking for visionOS\r
\r
## C API (visionOS)\r
\r
ARKit exposes a C API for visionOS with provider-based data delivery:\r
\r
\`\`\`c\r
ar_world_tracking_provider_t provider =\r
    ar_world_tracking_provider_create(configuration);\r
ar_world_tracking_provider_set_update_handler_f(\r
    provider, my_update_handler, NULL);\r
\`\`\`\r
\r
## Phi Integration\r
\r
The \`arkit\` crate in \`phi/crates/phidoc/arkit/\` contains detailed documentation for every ARKit symbol, organized by framework version and platform.\r
`},{id:"docs-phi-sdk-foundation",slug:"/docs/phi/sdk/foundation",title:"Foundation",category:"Phi",badge:"Phi",summary:"Access essential data types, collections, and operating-system services to define the base layer of functionality for your app.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Foundation\r
\r
Access essential data types, collections, and operating-system services to define the base layer of functionality for your app.\r
\r
## Overview\r
\r
The Foundation framework provides a base layer of functionality for apps and frameworks, including data storage and persistence, text processing, date and time calculations, sorting and filtering, and networking. The classes, protocols, and data types defined by Foundation are used throughout the macOS, iOS, watchOS, and tvOS SDKs.\r
\r
## Key Types\r
\r
- **Data** - Byte buffer management\r
- **Date** - Date and time representation\r
- **URL / URLRequest** - Networking primitives\r
- **JSONEncoder / JSONDecoder** - JSON serialization\r
- **NotificationCenter** - Pub/sub event dispatch\r
- **Operation / OperationQueue** - Concurrency abstraction\r
\r
## Swift Standard Library Overlap\r
\r
Many Foundation types have Swift-native equivalents. The Phi \`swift\` documentation covers Swift protocol conformances and bridging behavior.\r
`},{id:"docs-phi-architecture-gpu-pipeline",slug:"/docs/phi/architecture/gpu-pipeline",title:"GPU Pipeline",category:"Phi",badge:"Phi",summary:"The rendering pipeline for Phi applications - Metal-backed GPU rendering with optimization for 60 FPS.",citations:[],position:9999,hidden:!1,draft:!1,content:`# GPU Pipeline\r
\r
The rendering pipeline for Phi applications - Metal-backed GPU rendering with optimization for 60 FPS.\r
\r
## Pipeline Stages\r
\r
1. **Vertex Transform** - Model → View → Projection\r
2. **Fragment Shading** - Material + lighting computation\r
3. **Post-Processing** - Tone mapping, bloom, color grading\r
4. **Composite** - UI overlay + 3D scene composition\r
\r
## Performance Optimizations\r
\r
- **f32 hot path** - Geometry and lighting computed in f32 for throughput\r
- **Batched draws** - Minimize draw calls by batching by material\r
- **Depth pre-pass** - Z-only pass to reduce overdraw in fragment shading\r
- **GPU memory pools** - Pre-allocated buffers to avoid runtime allocation\r
\r
## Performance Targets\r
\r
| Metric | Target |\r
|--------|--------|\r
| Frame time | < 16.6ms (60 FPS) |\r
| Draw calls | < 100 per frame |\r
| GPU memory | < 512 MB |\r
| Texture uploads | Zero per frame (pre-loaded) |\r
`},{id:"docs-phi-crates-kitpro",slug:"/docs/phi/crates/kitpro",title:"KitPro",category:"Phi",badge:"Phi",summary:"Professional UI component library built on top of PUIKit - providing polished, production-ready components for desktop and mobile applications.",citations:[],position:9999,hidden:!1,draft:!1,content:`# KitPro\r
\r
Professional UI component library built on top of PUIKit - providing polished, production-ready components for desktop and mobile applications.\r
\r
## Components\r
\r
- **Panel system** - Collapsible, dockable panels with drag-and-drop reordering\r
- **Icon gallery** - SVG icon rendering with theme support\r
- **Data tables** - Sortable, filterable table views with virtualization\r
- **Forms** - Validated form components with inline error display\r
- **Charts** - Real-time data visualization (line, bar, candlestick)\r
\r
## Theming\r
\r
KitPro supports light and dark themes via CSS-like custom properties:\r
\r
\`\`\`rust\r
theme.set_color("primary", Color::from_hex("#2e8555"));\r
theme.set_spacing("default", 16.0);\r
\`\`\`\r
`},{id:"docs-phi-architecture-layer-architecture",slug:"/docs/phi/architecture/layer-architecture",title:"Layer Architecture",category:"Phi",badge:"Phi",summary:"The Phi workspace follows a layered architecture with clear separation between platform bindings, UI frameworks, and application logic.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Layer Architecture\r
\r
The Phi workspace follows a layered architecture with clear separation between platform bindings, UI frameworks, and application logic.\r
\r
## Layers\r
\r
\`\`\`\r
┌──────────────────────────────────────────┐\r
│         Application Layer                │\r
│   (PhiFly apps, Botanist, Showcases)     │\r
├──────────────────────────────────────────┤\r
│         UI Framework Layer               │\r
│   PUIKit → KitPro → Panel System         │\r
├──────────────────────────────────────────┤\r
│         Platform Binding Layer            │\r
│   AppKit, UIKit, RealityKit, ARKit       │\r
├──────────────────────────────────────────┤\r
│         Core / ML Layer                  │\r
│   phi-oml, phifly, phigum, phical        │\r
├──────────────────────────────────────────┤\r
│         System Layer                     │\r
│   Metal, Foundation, Core ML             │\r
└──────────────────────────────────────────┘\r
\`\`\`\r
\r
## Dependency Rules\r
\r
1. **Application Layer** depends on UI Framework Layer only\r
2. **UI Framework Layer** depends on Platform Binding Layer\r
3. **Platform Binding Layer** depends on Core/ML Layer\r
4. **Core/ML Layer** is self-contained (no upward dependencies)\r
5. **System Layer** wraps Apple SDK C/Objective-C APIs\r
\r
## Crate Ownership\r
\r
Each layer is owned by a specific team boundary. Crates within the same layer may depend on each other, but cross-layer dependencies must flow downward only.\r
`},{id:"docs-phi-architecture-layout-system",slug:"/docs/phi/architecture/layout-system",title:"Layout System",category:"Phi",badge:"Phi",summary:"The unified layout system for PUIKit and KitPro - supporting both constraint-based and frame-based layout.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Layout System\r
\r
The unified layout system for PUIKit and KitPro - supporting both constraint-based and frame-based layout.\r
\r
## Overview\r
\r
The layout system handles:\r
\r
- **View hierarchy** - Parent-child relationships with automatic invalidation\r
- **Constraint solver** - Auto Layout-style constraints for macOS/iOS\r
- **Frame-based layout** - Manual frame assignment for custom views\r
- **Split panes** - Resizable dividers with persistent state\r
\r
## Startup Sequence\r
\r
A critical fix was applied to the winit startup sequence: when the window initially reports a smaller size before maximizing, the layout rebuild now dynamically reads the current \`root_view\` bounds when the pending action executes, rather than using stale captured dimensions.\r
\r
\`\`\`rust\r
app.pending_actions.push(Box::new(move |root_view| {\r
    if let Some(rebuild) = rebuild_fn {\r
        let frame = root_view.frame();\r
        rebuild(root_view, frame.width(), frame.height());\r
        root_view.layout_subviews();\r
    }\r
}));\r
\`\`\`\r
\r
This ensures the startup layout always aligns with the maximized window dimensions.\r
\r
## Panel System\r
\r
The panel system uses the layout engine for:\r
\r
- **Dock areas** - Left, right, bottom, center panel regions\r
- **Collapsible panels** - Expand/collapse with animated transitions\r
- **Drag reordering** - Panels can be dragged between dock areas\r
- **Persistent state** - Panel layout saved and restored across sessions\r
`},{id:"docs-phi-intro",slug:"/docs/phi/intro",title:"Phi",category:"Phi",badge:"Phi",summary:"Phi is a Rust-native workspace providing Apple SDK bindings, machine learning models, and UI frameworks for building cross-platform applications.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Phi\r
\r
Phi is a Rust-native workspace providing Apple SDK bindings, machine learning models, and UI frameworks for building cross-platform applications.\r
\r
## Overview\r
\r
The Phi workspace contains:\r
\r
- **phi-oml** - Machine learning crate with PhiFly resonance engine, Phigum NLP resolver, and various ML primitives\r
- **phifly** - Quantum semantic resonance model using phase alignment (no backpropagation, no transformers)\r
- **phigum** - Linguistic entity resolver that learns "relations of worlds" like a child\r
- **appkit** - Rust bindings for Apple's AppKit framework\r
- **puikit** - Cross-platform UI kit for Rust applications\r
- **kitpro** - Professional UI component library\r
- **phidoc** - Apple SDK documentation mirror (ARKit, UIKit, Foundation, RealityKit, Swift)\r
\r
## Quick Start\r
\r
\`\`\`bash\r
# Build all crates\r
cargo build --release\r
\r
# Run tests\r
cargo test --workspace\r
\r
# Run the Phigum example\r
cargo run --example elon_brain --features nlp -p phi-oml\r
\`\`\`\r
\r
## Crate Graph\r
\r
\`\`\`\r
phi-oml\r
  ├── phifly (PhiFly resonance engine)\r
  │     ├── phiton (quantum types)\r
  │     ├── gemgum (temporal fusion)\r
  │     └── resonance (CPU resonance engine)\r
  ├── nlp\r
  │     ├── phigum (linguistic entity resolver)\r
  │     ├── text_classifier\r
  │     ├── word_tagger\r
  │     └── word_embedding\r
  └── phical (quantum types: PhiTon, Q64)\r
\`\`\`\r
\r
## Design Principles\r
\r
1. **No Backpropagation** - The PhiFly model uses structural phase alignment, not gradient descent\r
2. **Child-like Learning** - Phigum learns through world relations, not massive statistical encoding\r
3. **Minimal Data** - Proven on concentrated datasets (e.g., Elon Musk first-principles demo)\r
4. **Rust-Native** - All crates are pure Rust with no external LLM dependencies\r
`},{id:"docs-phi-crates-phi-oml",slug:"/docs/phi/crates/phi-oml",title:"phi-oml",category:"Phi",badge:"Phi",summary:"The Phi Open Machine Learning crate - a self-contained ML library with quantum resonance models, NLP, and traditional ML primitives.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phi-oml\r
\r
The Phi Open Machine Learning crate - a self-contained ML library with quantum resonance models, NLP, and traditional ML primitives.\r
\r
## Features\r
\r
- **PhiFly Engine** - Quantum semantic resonance using PhiTon types (frequency + phase)\r
- **Phigum Resolver** - Linguistic entity resolver learning world relations without LLMs\r
- **NLP Modules** - Text classifier, word tagger, word embedding, gazetteer, GloVe trainer\r
- **Phical Integration** - Quantum types (PhiTon, Q64) from the \`phical\` crate\r
\r
## PhiFly Resonance Model\r
\r
The PhiFly engine computes resonance between quantum states using phase difference:\r
\r
\`\`\`rust\r
pub fn calculate_resonance(state: &PhiTon, signal: &PhiTon) -> f64 {\r
    let diff = (state.phase - signal.phase) as f64;\r
    diff.cos() * (state.frequency * signal.frequency) as f64\r
}\r
\`\`\`\r
\r
- **Constructive interference** - States with aligned phases amplify (learning)\r
- **Destructive interference** - States with anti-phase cancel (contradiction)\r
- **No gradients** - Learning happens through phase alignment, not backpropagation\r
\r
## Phigum NLP Resolver\r
\r
The Phigum resolver builds a graph of concepts and relations:\r
\r
\`\`\`rust\r
let mut brain = PhigumResolver::new();\r
brain.add_concept("Rocket-Physics", PI / 2.0, "First-principles rocket mechanics");\r
brain.add_concept("Mass-Production", 0.0, "High-rate production optimization");\r
brain.learn_fact("Rocket-Physics supports Mass-Production")?;\r
let answer = brain.resolve("How does rocket physics relate to production?")?;\r
\`\`\`\r
\r
## Cargo Features\r
\r
| Feature | Description |\r
|---------|-------------|\r
| \`nlp\` | NLP modules (Phigum, text classifier, word tagger, etc.) |\r
| \`training\` | Model training utilities |\r
| \`vision\` | Computer vision modules |\r
| \`gpu\` | GPU acceleration |\r
| \`quantum\` | Quantum computing primitives |\r
| \`compute\` | Parallel compute backends |\r
`},{id:"docs-phi-crates-phifly",slug:"/docs/phi/crates/phifly",title:"PhiFly",category:"Phi",badge:"Phi",summary:"The PhiFly resonance engine - a quantum semantic resonance model that learns through structural phase alignment without backpropagation or transformers.",citations:[],position:9999,hidden:!1,draft:!1,content:`# PhiFly\r
\r
The PhiFly resonance engine - a quantum semantic resonance model that learns through structural phase alignment without backpropagation or transformers.\r
\r
## Architecture\r
\r
\`\`\`\r
PhiFlyEngine\r
  ├── PhiTon (quantum state: frequency + phase)\r
  ├── Gemgum (temporal decay + foveal weighting)\r
  ├── ResonanceEngine (CPU resonance computation)\r
  └── StateHistory (temporal state buffer)\r
\`\`\`\r
\r
## PhiTon\r
\r
The fundamental quantum type:\r
\r
\`\`\`rust\r
pub struct PhiTon {\r
    pub frequency: f32,\r
    pub phase: f32,\r
}\r
\`\`\`\r
\r
- **Frequency** - Represents the "energy" or "amplitude" of a concept\r
- **Phase** - Represents the "position" or "perspective" of a concept\r
\r
## Resonance Calculation\r
\r
Resonance between two PhiTon states is computed as:\r
\r
\`\`\`rust\r
let diff = (state.phase - signal.phase) as f64;\r
diff.cos() * (state.frequency * signal.frequency) as f64\r
\`\`\`\r
\r
- Phase-aligned states (diff ≈ 0) → maximum positive resonance (constructive)\r
- Anti-phase states (diff ≈ π) → maximum negative resonance (destructive)\r
- Orthogonal states (diff ≈ π/2) → zero resonance\r
\r
## Gemgum Layer\r
\r
The Gemgum layer provides:\r
\r
- **Temporal Decay Adhesion** - Recent states influence current resonance more than distant ones\r
- **Foveal Weighting** - Central elements in a sequence receive higher weight\r
\r
## Examples\r
\r
\`\`\`bash\r
# Elon Musk first-principles brain demo\r
cargo run --example elon_brain --features nlp -p phi-oml\r
\r
# Basic resonance demo\r
cargo run --example basic_resonance -p phi-oml\r
\`\`\`\r
`},{id:"docs-phi-crates-phigum",slug:"/docs/phi/crates/phigum",title:"Phigum",category:"Phi",badge:"Phi",summary:"The Phigum Linguistic Entity & World Relations Resolver - a self-contained, phase-resonant natural language model that learns through world relations instead of massive statistics and backpropagation.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Phigum\r
\r
The Phigum Linguistic Entity & World Relations Resolver - a self-contained, phase-resonant natural language model that learns through world relations instead of massive statistics and backpropagation.\r
\r
## Design Philosophy\r
\r
- **No LLMs** - Does not use or depend on any large language model\r
- **No Backpropagation** - Learning is through phase alignment, not gradient descent\r
- **Child-like Learning** - Learns "relations of worlds" through associative concepts\r
- **Minimal Data** - Proven on concentrated datasets (e.g., a single persona's first principles)\r
\r
## Concept Graph\r
\r
Each concept has:\r
\r
\`\`\`rust\r
pub struct PhigumConcept {\r
    pub name: String,\r
    pub description: String,\r
    pub phase: f32,      // Position in semantic space\r
    pub amplitude: f32,  // Strength/confidence\r
}\r
\`\`\`\r
\r
## Relation Types\r
\r
| Relation | Description |\r
|----------|-------------|\r
| \`Supports\` | Constructive interference - concepts reinforce each other |\r
| \`Contradicts\` | Destructive phase cancellation - concepts oppose |\r
| \`IsA\` | Sub-class or instance relationship |\r
| \`Causes\` | Causal relationship |\r
| \`PartOf\` | Compositional relationship |\r
\r
## Usage\r
\r
\`\`\`rust\r
use phi_oml::nlp::PhigumResolver;\r
\r
let mut brain = PhigumResolver::new();\r
\r
// Register concepts with their semantic phase\r
brain.add_concept("Aerospace-Physics", PI / 2.0, "Rocket mechanics and thermal limits");\r
brain.add_concept("Mass-Production", 0.0, "Production line optimization");\r
\r
// Learn relations between concepts\r
brain.learn_fact("Aerospace-Physics supports Mass-Production")?;\r
brain.learn_fact("Mass-Production causes Cost-Reduction")?;\r
\r
// Query the graph\r
let answer = brain.resolve("How does aerospace physics relate to cost reduction?")?;\r
\`\`\`\r
\r
## Teaching Strategy\r
\r
1. **Register base domains** - Add core concepts with explicit descriptions and reference phases\r
2. **Learn facts** - Feed simple subject-verb-object facts to build the relation graph\r
3. **Resolve queries** - The resolver traces the strongest resonance path through the graph\r
4. **Iterate** - Add more concepts and facts to expand the knowledge graph incrementally\r
`},{id:"docs-phi-crates-puikit",slug:"/docs/phi/crates/puikit",title:"PUIKit",category:"Phi",badge:"Phi",summary:"Cross-platform UI kit for Rust applications - abstracts platform-specific UI frameworks (AppKit on macOS, UIKit on iOS) behind a unified API.",citations:[],position:9999,hidden:!1,draft:!1,content:`# PUIKit\r
\r
Cross-platform UI kit for Rust applications - abstracts platform-specific UI frameworks (AppKit on macOS, UIKit on iOS) behind a unified API.\r
\r
## Overview\r
\r
PUIKit provides:\r
\r
- **View hierarchy** - Composable view trees with automatic layout\r
- **Event handling** - Unified touch/mouse/keyboard event abstraction\r
- **Layout system** - Constraint-based and frame-based layout\r
- **Rendering** - Metal-backed GPU rendering pipeline\r
\r
## Architecture\r
\r
\`\`\`\r
PUIKit\r
  ├── View (base view type)\r
  ├── ScrollView (scrollable container)\r
  ├── SplitView (resizable panes)\r
  ├── Button, TextField, Label (controls)\r
  └── LayoutEngine (constraint solver)\r
\`\`\`\r
\r
## Platform Backends\r
\r
| Platform | Backend |\r
|----------|---------|\r
| macOS | AppKit (NSView) |\r
| iOS | UIKit (UIView) |\r
| visionOS | RealityKit (Entity) |\r
`},{id:"docs-phi-sdk-realitykit",slug:"/docs/phi/sdk/realitykit",title:"RealityKit",category:"Phi",badge:"Phi",summary:"A Swift framework for building augmented reality experiences with 3D content.",citations:[],position:9999,hidden:!1,draft:!1,content:`# RealityKit\r
\r
A Swift framework for building augmented reality experiences with 3D content.\r
\r
## Overview\r
\r
RealityKit provides high-performance 3D simulation and rendering for AR applications. It integrates with ARKit for world tracking and scene understanding.\r
\r
## Key Components\r
\r
- **Entity** - The fundamental unit of 3D content\r
- **AnchorEntity** - Anchors content to real-world positions\r
- **ModelEntity** - Renderable 3D model with materials\r
- **BodyTrackedEntity** - Rigged character with motion capture\r
- **Scene** - Container for entities and anchors\r
\r
## Phi Integration\r
\r
The \`realitykit\` crate provides Rust bindings for RealityKit entities, anchors, and the scene graph. The \`reality-foundation\` crate covers the supporting types (transforms, bounding boxes, materials).\r
`},{id:"docs-phi-sdk-swift",slug:"/docs/phi/sdk/swift",title:"Swift",category:"Phi",badge:"Phi",summary:"Swift standard library protocols and types used across the Phi SDK bindings.",citations:[],position:9999,hidden:!1,draft:!1,content:"# Swift\r\n\r\nSwift standard library protocols and types used across the Phi SDK bindings.\r\n\r\n## Documented Protocols\r\n\r\n| Protocol | Description |\r\n|----------|-------------|\r\n| `IteratorProtocol` | Sequence iteration contract |\r\n| `Sequence` | Lazy/sequential access to elements |\r\n| `RangeReplaceableCollection` | Mutable collection with range replacement |\r\n| `RawRepresentable` | Bridging between Swift enums and raw values |\r\n| `OptionSet` | Bitmask-style set of options |\r\n| `Sendable` | Thread-safe value type marker |\r\n| `String` | Unicode string manipulation |\r\n\r\n## Memory Management\r\n\r\n| Topic | Description |\r\n|-------|-------------|\r\n| `Manual Memory Management` | `UnsafeMutablePointer`, `UnsafeBufferPointer` |\r\n| `OpaquePointer` | Type-erased C pointer bridging |\r\n\r\n## Phi Usage\r\n\r\nThese Swift protocols inform the design of Rust traits in the Phi crates. For example, `Sequence` maps to `Iterator` in Rust, and `OptionSet` maps to bitflag structs.\r\n"},{id:"docs-phi-sdk-uikit",slug:"/docs/phi/sdk/uikit",title:"UIKit",category:"Phi",badge:"Phi",summary:"Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.",citations:[],position:9999,hidden:!1,draft:!1,content:`# UIKit\r
\r
Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.\r
\r
## Overview\r
\r
UIKit provides the window and view architecture for implementing your UI, the event-handling infrastructure for delivering Multi-Touch and other types of input to your app, and the main run loop for managing interactions between the user, the system, and your app.\r
\r
## Key Components\r
\r
- **UIView** - Base view class for rendering and layout\r
- **UIViewController** - Manages a view hierarchy and coordinate events\r
- **UIWindow** - Top-level container for the UI\r
- **UIEvent / UITouch** - Touch and motion event handling\r
- **UITableView / UICollectionView** - Data-driven scrollable views\r
\r
## Integration with Phi\r
\r
UIKit is bound in the \`phi/crates/uikit/\` crate and abstracted by PUIKit for cross-platform use.\r
`},{id:"phidoc-quickstart",slug:"/docs/phidoc/quickstart",title:"PhiDoc Quickstart",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Create a configuration-driven documentation site with PhiDoc, Vite, and puijs.",citations:[],position:1,hidden:!1,draft:!1,content:`\r
# PhiDoc Quickstart\r
\r
PhiDoc is a standalone documentation engine that turns a typed configuration and a directory of Markdown files into a complete puijs-powered site.\r
\r
## Install\r
\r
\`\`\`bash\r
npm install @phiace/phidoc @phiace/puijs react react-dom\r
npm install -D vite @vitejs/plugin-react typescript sass\r
\`\`\`\r
\r
## Create the site config\r
\r
Create \`phidoc.config.ts\` and define the site, content path, landing page, navigation, and sidebar mode.\r
\r
\`\`\`ts\r
import { definePhiDocConfig } from '@phiace/phidoc';\r
\r
export default definePhiDocConfig({\r
  title: 'My Project',\r
  description: 'Project documentation.',\r
  brandId: 'phidoc',\r
  docs: {\r
    path: 'docs',\r
    routeBasePath: 'docs',\r
  },\r
  sidebar: {\r
    mode: 'auto',\r
  },\r
});\r
\`\`\`\r
\r
## Add the Vite plugin\r
\r
\`\`\`ts\r
import { defineConfig } from 'vite';\r
import react from '@vitejs/plugin-react';\r
import phidoc from '@phiace/phidoc/vite';\r
import siteConfig from './phidoc.config';\r
\r
export default defineConfig({\r
  plugins: [react(), phidoc(siteConfig)],\r
});\r
\`\`\`\r
\r
## Render the generated site\r
\r
\`\`\`tsx\r
import docsData from 'virtual:phidoc/content';\r
import { PhiDocSite } from '@phiace/phidoc';\r
import '@phiace/puijs/styles';\r
\r
export function App() {\r
  return <PhiDocSite data={docsData} />;\r
}\r
\`\`\`\r
\r
PhiDoc derives the home page, document routes, sidebar sections, active document, previous/next links, and theme from this contract.\r
`},{id:"phidoc-configuration",slug:"/docs/phidoc/configuration",title:"Configuration",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Configure the PhiDoc site shell, content source, landing page, navigation, and layout.",citations:[],position:2,hidden:!1,draft:!1,content:`\r
# Configuration\r
\r
PhiDoc uses one serializable site configuration. The config is the equivalent of a Docusaurus site config, a VitePress theme config, and a Starlight sidebar config.\r
\r
## Site metadata\r
\r
\`\`\`ts\r
export default definePhiDocConfig({\r
  title: 'Phixum',\r
  description: 'Rust-native options trading engine.',\r
  version: 'v0.1.0',\r
  brandId: 'phixum',\r
});\r
\`\`\`\r
\r
## Docs source\r
\r
\`\`\`ts\r
docs: {\r
  path: 'docs',\r
  routeBasePath: 'docs',\r
  include: ['**/*.md', '**/*.mdx'],\r
  exclude: ['**/_*/**', '**/drafts/**'],\r
}\r
\`\`\`\r
\r
- **path** sets the content directory.\r
- **routeBasePath** sets the URL prefix.\r
- **include** and **exclude** control the file glob.\r
- Number-prefixed filenames such as \`01-intro.md\` control order without appearing in URLs.\r
\r
## Landing page\r
\r
\`\`\`ts\r
home: {\r
  title: 'Phixum',\r
  tagline: 'Production-grade options infrastructure.',\r
  actions: [\r
    { label: 'Read docs', href: '/docs/intro', variant: 'primary' },\r
  ],\r
  features: [\r
    {\r
      title: 'Architecture',\r
      description: 'Engine boundaries and runtime invariants.',\r
      icon: 'layers',\r
      href: '/docs/architecture',\r
    },\r
  ],\r
}\r
\`\`\`\r
\r
When features are omitted, PhiDoc derives landing cards from the generated sidebar categories.\r
\r
## Navigation\r
\r
\`\`\`ts\r
nav: [\r
  { label: 'Docs', href: '/docs/intro' },\r
  { label: 'GitHub', href: 'https://github.com/example/project', external: true },\r
]\r
\`\`\`\r
\r
Navigation is rendered by puijs. Sites do not create a custom navbar.\r
`},{id:"phidoc-content-model",slug:"/docs/phidoc/content-model",title:"Content Model",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Use Markdown files and frontmatter to define routes, titles, summaries, categories, and visibility.",citations:[],position:3,hidden:!1,draft:!1,content:`\r
# Content Model\r
\r
PhiDoc treats the filesystem as the source of truth. Every Markdown or MDX file matched by the docs glob becomes a document.\r
\r
## Frontmatter\r
\r
\`\`\`md\r
---\r
id: options-pricing\r
title: Options Pricing\r
description: Black-Scholes, Greeks, and volatility surfaces.\r
category: Concepts\r
badge: Quant\r
sidebar_position: 4\r
slug: /docs/concepts/options-pricing\r
citations:\r
  - Black, F. and Scholes, M. (1973)\r
---\r
\r
# Options Pricing\r
\`\`\`\r
\r
## Supported fields\r
\r
- **id** overrides the generated document ID.\r
- **title** overrides the first Markdown heading.\r
- **description** or **summary** feeds landing cards and article metadata.\r
- **category** overrides the directory-derived category.\r
- **badge** controls the article badge label.\r
- **sidebar_position** controls ordering inside a category.\r
- **slug** overrides the route.\r
- **hidden: true** keeps a route available but removes it from navigation.\r
- **draft: true** keeps the document in development and excludes it from production builds.\r
- **citations** renders academic or source references through the docs article UI.\r
\r
## Defaults\r
\r
PhiDoc infers missing values from the file path, first heading, first paragraph, and filename order. Frontmatter is optional for simple content and explicit when navigation needs control.\r
`},{id:"phidoc-sidebars",slug:"/docs/phidoc/sidebars",title:"Sidebars",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Generate sidebars from the filesystem or provide manual sections.",citations:[],position:4,hidden:!1,draft:!1,content:`\r
# Sidebars\r
\r
PhiDoc follows the Docusaurus and Starlight convention: the docs directory mirrors the navigation tree.\r
\r
## Automatic sidebars\r
\r
\`\`\`ts\r
sidebar: {\r
  mode: 'auto',\r
}\r
\`\`\`\r
\r
A directory becomes a section. Each Markdown file becomes a link. Numeric prefixes order files without leaking into route URLs.\r
\r
\`\`\`text\r
docs/\r
  00-quickstart.md\r
  concepts/\r
    01-pricing.md\r
    02-risk.md\r
\`\`\`\r
\r
## Category metadata\r
\r
Add \`_category_.json\` to control a directory label and section position.\r
\r
\`\`\`json\r
{\r
  "label": "Core Concepts",\r
  "position": 2,\r
  "collapsed": false\r
}\r
\`\`\`\r
\r
## Manual sidebars\r
\r
Use manual mode when the route order must differ from the filesystem.\r
\r
\`\`\`ts\r
sidebar: {\r
  mode: 'manual',\r
  sections: [\r
    {\r
      title: 'Start Here',\r
      items: [\r
        {\r
          id: 'docs-quickstart',\r
          title: 'Quickstart',\r
          slug: '/docs/quickstart',\r
          category: 'Start Here',\r
          position: 1,\r
        },\r
      ],\r
    },\r
  ],\r
}\r
\`\`\`\r
\r
The generated sidebar model also controls previous and next navigation in \`DocsPortal\`.\r
`},{id:"phidoc-branding",slug:"/docs/phidoc/branding",title:"Branding and Themes",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Drive PhiDoc with puijs brand themes and the Apple theme style.",citations:[],position:5,hidden:!1,draft:!1,content:"\r\n# Branding and Themes\r\n\r\nPhiDoc does not define application CSS. It renders through puijs and `PuiProvider`.\r\n\r\n## Brand selection\r\n\r\n```ts\r\nbrandId: 'phixum'\r\n```\r\n\r\nThe provider resolves the brand palette, gradients, surfaces, borders, typography, and state colors. The site config selects the brand; pages do not restyle it.\r\n\r\n## Theme style\r\n\r\n`PhiDocSite` defaults to the Apple theme style:\r\n\r\n- rounded controls and cards\r\n- layered gradients\r\n- soft borders and shadows\r\n- system-aware light and dark mode\r\n\r\n## Component contract\r\n\r\nUse puijs layout and display primitives:\r\n\r\n- `Page`, `Section`, `Container`, `Stack`, and `Grid`\r\n- `Navbar`, `Sidebar`, `MenuItem`, and `Tabs`\r\n- `Card`, `Badge`, `Callout`, `List`, and `Table`\r\n- `Title`, `Text`, `Button`, and `Icon`\r\n\r\nApplication-level CSS files, hardcoded gradients, inline style objects, and custom wrappers are intentionally outside the PhiDoc model.\r\n"},{id:"phidoc-site-integration",slug:"/docs/phidoc/site-integration",title:"Add PhiDoc to Any Site",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Reuse PhiDoc across phi* projects with a config, Markdown directory, Vite plugin, and one render call.",citations:[],position:6,hidden:!1,draft:!1,content:`\r
# Add PhiDoc to Any Site\r
\r
Every site follows the same four-step setup.\r
\r
## 1. Add dependencies\r
\r
\`\`\`bash\r
npm install @phiace/phidoc @phiace/puijs\r
\`\`\`\r
\r
## 2. Create \`phidoc.config.ts\`\r
\r
\`\`\`ts\r
import { definePhiDocConfig } from '@phiace/phidoc';\r
\r
export default definePhiDocConfig({\r
  title: 'Phiano',\r
  description: 'Phiano documentation.',\r
  brandId: 'phiano',\r
  docs: {\r
    path: 'docs',\r
    routeBasePath: 'docs',\r
  },\r
  sidebar: {\r
    mode: 'auto',\r
  },\r
});\r
\`\`\`\r
\r
## 3. Register the Vite plugin\r
\r
\`\`\`ts\r
import { defineConfig } from 'vite';\r
import react from '@vitejs/plugin-react';\r
import phidoc from '@phiace/phidoc/vite';\r
import siteConfig from './phidoc.config';\r
\r
export default defineConfig({\r
  plugins: [react(), phidoc(siteConfig)],\r
});\r
\`\`\`\r
\r
## 4. Render the site\r
\r
\`\`\`tsx\r
import docsData from 'virtual:phidoc/content';\r
import { PhiDocSite } from '@phiace/phidoc';\r
import '@phiace/puijs/styles';\r
\r
export function App() {\r
  return <PhiDocSite data={docsData} />;\r
}\r
\`\`\`\r
\r
No project should recreate navbar, sidebar, article, landing-page, theme, or routing code. Project-specific information belongs in the config and Markdown files.\r
`},{id:"phidoc-deployment",slug:"/docs/phidoc/deployment",title:"Build and Deployment",category:"PhiDoc Engine",badge:"PhiDoc Engine",summary:"Build a PhiDoc site with Vite and serve it as a static single-page application.",citations:[],position:7,hidden:!1,draft:!1,content:`\r
# Build and Deployment\r
\r
PhiDoc uses Vite for development and production builds.\r
\r
## Scripts\r
\r
\`\`\`json\r
{\r
  "scripts": {\r
    "dev": "vite",\r
    "build": "tsc --noEmit && vite build",\r
    "preview": "vite preview"\r
  }\r
}\r
\`\`\`\r
\r
## Production behavior\r
\r
- Markdown content is loaded through the PhiDoc Vite plugin.\r
- Draft documents are excluded from production content.\r
- Hidden documents remain addressable but stay out of navigation.\r
- Routes are handled by the browser history runtime.\r
- Static hosts should rewrite unknown paths to \`index.html\`.\r
\r
## Verification\r
\r
\`\`\`bash\r
npm run typecheck\r
npm run build\r
npm run preview\r
\`\`\`\r
\r
The resulting \`dist\` directory can be deployed to any static host.\r
`},{id:"docs-phixum-architecture-overview",slug:"/docs/phixum/architecture/overview",title:"Architecture Overview",category:"Phixum",badge:"Phixum",summary:"phixum follows a single DAG compilation tree rooted at `phixum-model` and a single async runtime supervisor tree rooted at `phixum-node`.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Architecture Overview\r
\r
phixum follows a single DAG compilation tree rooted at \`phixum-model\` and a single async runtime supervisor tree rooted at \`phixum-node\`.\r
\r
## Crate Dependency Graph\r
\r
\`\`\`\r
                         ┌─────────────────┐\r
                         │  phixum-node    │  (Binary entry point)\r
                         └────────┬────────┘\r
                                  │\r
        ┌─────────────────────────┼─────────────────────────┐\r
        │                         │                         │\r
        ▼                         ▼                         ▼\r
┌───────────────┐      ┌──────────────────┐     ┌──────────────────┐\r
│phixum-strategy│      │phixum-execution  │     │phixum-deribit    │\r
│               │      │                  │     │                  │\r
│ QuoteEngine   │      │ OrderManager     │     │ ExchangeAdapter  │\r
│ ChainManager  │      │ MatchingEngine   │     │ WS/HTTP Client   │\r
│ Block-STM     │      └────────┬─────────┘     └────────┬─────────┘\r
└───────┬───────┘               │                        │\r
        │                       │                        │\r
   ┌────┴────┐                  │                 ┌──────┴──────┐\r
   │         │                  │                 │             │\r
   ▼         ▼                  ▼                 ▼             ▼\r
┌──────┐ ┌──────┐      ┌─────────────┐  ┌──────────────┐ ┌────────────┐\r
│model │ │risk  │      │   model     │  │    model     │ │  network   │\r
└──────┘ └──────┘      └─────────────┘  └──────────────┘ └────────────┘\r
   │         │               │                 │              │\r
   └─────────┴───────────────┴─────────────────┴──────────────\r
                             │\r
                      ┌──────┴──────┐\r
                      │ phixum-model │  (Shared vocabulary)\r
                      │             │\r
                      │ No internal │\r
                      │ dependencies│\r
                      └─────────────┘\r
\`\`\`\r
\r
## Key Design Decisions\r
\r
- **Single Tree Rule** - All crates form a single DAG, no circular dependencies\r
- **Concurrency/Lock-free** - Hot path uses ArcSwap, infallible mutexes, Rayon parallelism\r
- **200-Line Limit** - Implementation files kept under 200 lines for auditability\r
- **Diem Standards** - READMEs follow Diem frontmatter format\r
`},{id:"docs-phixum-infra-ci-cd",slug:"/docs/phixum/infra/ci-cd",title:"CI/CD Pipeline",category:"Phixum",badge:"Phixum",summary:"phixum uses GitHub Actions for continuous integration and deployment.",citations:[],position:9999,hidden:!1,draft:!1,content:`# CI/CD Pipeline\r
\r
phixum uses GitHub Actions for continuous integration and deployment.\r
\r
## Workflows\r
\r
### CI (\`ci.yml\`)\r
Triggered on pull requests:\r
- \`cargo fmt --check\`\r
- \`cargo clippy -- -D warnings\`\r
- \`cargo test --workspace\`\r
- \`cargo tarpaulin --workspace\` (coverage)\r
\r
### Staging Deploy (\`deploy-staging.yml\`)\r
Triggered on push to \`main\`:\r
- Build Docker image\r
- Push to ECR\r
- \`helm upgrade --install\` to staging EKS\r
\r
### Production Deploy (\`deploy-production.yml\`)\r
Manual dispatch with approval gate:\r
- Promote image from staging ECR\r
- \`helm upgrade --install\` to production EKS\r
- Verify rollout status\r
\r
## Self-Hosted Runners\r
\r
Runners are provisioned on dedicated Linux VMs with:\r
- Docker Engine\r
- kubectl, helm\r
- Rust toolchain\r
- AWS CLI\r
\r
KUBECONFIG is stored as GitHub Actions encrypted secrets.\r
`},{id:"docs-phixum-architecture-concurrency-model",slug:"/docs/phixum/architecture/concurrency-model",title:"Concurrency Model",category:"Phixum",badge:"Phixum",summary:"phixum uses a lock-free architecture to keep the Tokio async event loop completely unblocked.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Concurrency Model\r
\r
phixum uses a lock-free architecture to keep the Tokio async event loop completely unblocked.\r
\r
## Core Principles\r
\r
### 1. Lock-Free Reads via ArcSwap\r
\r
All hot-path reads use \`ArcSwap\` snapshots - no mutex acquisition on the quote path:\r
\r
\`\`\`rust\r
let snapshot = self.market_data.load_full();  // Lock-free read\r
let quotes = snapshot.quotes();\r
\`\`\`\r
\r
### 2. Infallible Locking\r
\r
\`InfallibleMutex\` and \`InfallibleRwLock\` crash-fast on poison - no silent corruption:\r
\r
\`\`\`rust\r
let guard = self.state.lock_infallible();  // Panics if poisoned\r
\`\`\`\r
\r
### 3. Rayon Parallel Reductions\r
\r
CPU-intensive work (Greeks computation, risk aggregation) is dispatched to Rayon, keeping the Tokio runtime free:\r
\r
\`\`\`rust\r
let total_delta: f64 = positions\r
    .par_iter()\r
    .map(|p| p.delta())\r
    .sum();\r
\`\`\`\r
\r
### 4. SPSC Channels\r
\r
Market data flows through Single-Producer Single-Consumer channels with pre-allocated buffers - zero allocation on the hot path.\r
\r
## Thread Topology\r
\r
\`\`\`\r
Tokio Runtime (async I/O)\r
  ├── Market Data Receiver (WS → SPSC)\r
  ├── Quote Engine (SPSC → ArcSwap snapshot)\r
  ├── Order Manager (async gRPC)\r
  └── Risk Gateway (periodic Rayon batch)\r
\r
Rayon Pool (CPU-bound)\r
  ├── Greeks Computation\r
  ├── Risk Aggregation\r
  └── ML Inference\r
\`\`\`\r
`},{id:"docs-phixum-architecture-crate-graph",slug:"/docs/phixum/architecture/crate-graph",title:"Crate Graph",category:"Phixum",badge:"Phixum",summary:"Detailed dependency relationships between phixum crates.",citations:[],position:9999,hidden:!1,draft:!1,content:"# Crate Graph\r\n\r\nDetailed dependency relationships between phixum crates.\r\n\r\n## Dependency Table\r\n\r\n| Crate | Depends On | Description |\r\n|-------|-----------|-------------|\r\n| `phixum-model` | (none) | Core domain types, no internal deps |\r\n| `phixum-pricing` | model | Black-Scholes engine, IV solver |\r\n| `phixum-network` | model | InfallibleMutex, ExchangeAdapter trait |\r\n| `phixum-risk` | model, pricing | Risk gateway, position limits |\r\n| `phixum-execution` | model, network | Order manager, matching engine |\r\n| `phixum-deribit` | model, network | Deribit HTTP + WebSocket adapter |\r\n| `phixum-strategy` | model, pricing, risk, ml | Quote engine, chain manager |\r\n| `phixum-persistence` | model | PostgreSQL persistence, HotStuff commit |\r\n| `phixum-grpc` | model, strategy | tonic gRPC server |\r\n| `phixum-ml` | model | RegimeClassifier, SpreadOptimiser |\r\n| `phixum-research` | model, pricing, strategy | Backtest CLI, model training |\r\n| `phixum-node` | all | Binary entry point, supervisor tree |\r\n\r\n## Build Order\r\n\r\n```\r\nphixum-model → phixum-pricing → phixum-network → phixum-risk\r\n            → phixum-ml → phixum-execution → phixum-deribit\r\n            → phixum-strategy → phixum-persistence → phixum-grpc\r\n            → phixum-research → phixum-node\r\n```\r\n"},{id:"docs-phixum-flows-flow-01",slug:"/docs/phixum/flows/flow-01",title:"Flow 01 - Market Data Ingestion",category:"Phixum",badge:"Phixum",summary:"",citations:[],position:9999,hidden:!1,draft:!1,content:`# Flow 01 - Market Data Ingestion\r
\r
## Trigger\r
WebSocket message received from Deribit exchange.\r
\r
## Preconditions\r
- phixum-node is running\r
- Deribit WebSocket connection is established\r
- SPSC channel buffer is allocated\r
\r
## Steps\r
1. WebSocket receiver thread reads message frame\r
2. Message is deserialized into \`MarketData\` struct\r
3. \`MarketData\` is pushed to SPSC channel (non-blocking)\r
4. Quote engine consumer reads from channel\r
5. ArcSwap snapshot is updated with new market data (lock-free)\r
\r
## Postconditions\r
- Latest market data is available via \`ArcSwap::load_full()\` to all readers\r
- No mutex acquisition occurred on the hot path\r
\r
## Error Handling\r
- If SPSC channel is full, message is dropped (logged at WARN level)\r
- If deserialization fails, raw message is logged at ERROR level and dropped\r
`},{id:"docs-phixum-flows-flow-02",slug:"/docs/phixum/flows/flow-02",title:"Flow 02 - Quote Generation",category:"Phixum",badge:"Phixum",summary:"",citations:[],position:9999,hidden:!1,draft:!1,content:`# Flow 02 - Quote Generation\r
\r
## Trigger\r
Market data snapshot updated (Flow 01 postcondition).\r
\r
## Preconditions\r
- Fresh market data in ArcSwap snapshot\r
- Option chain is initialized\r
- Risk gateway has current positions\r
\r
## Steps\r
1. Quote engine reads latest ArcSwap snapshot (lock-free)\r
2. Black-Scholes pricing computes fair value for each option (f32 hot path)\r
3. Greeks are computed for portfolio risk assessment\r
4. ML module classifies regime and adjusts spread\r
5. Risk gateway validates position limits\r
6. Quote is published to order manager via async channel\r
\r
## Postconditions\r
- Quotes are sent to order manager for execution\r
- Risk metrics are updated for monitoring\r
\r
## Error Handling\r
- If risk gateway rejects, quote is suppressed and logged\r
- If ML model is unavailable, default spread is used\r
`},{id:"docs-phixum-flows-flow-overview",slug:"/docs/phixum/flows/flow-overview",title:"Flow Overview",category:"Phixum",badge:"Phixum",summary:"phixum documents 32 operational flows covering the complete trading lifecycle.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Flow Overview\r
\r
phixum documents 32 operational flows covering the complete trading lifecycle.\r
\r
## Flow Categories\r
\r
- **Flows 01–10** - Market data ingestion, pricing, and quote generation\r
- **Flows 11–20** - Order management, execution, and fill processing\r
- **Flows 21–28** - Risk management, position limits, and margin checks\r
- **Flows 29–32** - Persistence, recovery, and graceful shutdown\r
\r
Each flow document follows a standard template: trigger, preconditions, steps, postconditions, and error handling.\r
\r
See the [full flow index](https://github.com/gemphi/phixum/tree/main/docs) in the phixum repository for individual flow documents.\r
`},{id:"docs-phixum-infra-kubernetes",slug:"/docs/phixum/infra/kubernetes",title:"Kubernetes Deployment",category:"Phixum",badge:"Phixum",summary:"phixum deploys to Kubernetes via Helm charts with the following topology.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Kubernetes Deployment\r
\r
phixum deploys to Kubernetes via Helm charts with the following topology.\r
\r
## Deployments\r
\r
| Deployment | Replicas | Purpose |\r
|-----------|----------|---------|\r
| phixum-node | 3 | Trading engine (horizontal scaling) |\r
| phixum-worker | 2 | Background workers (persistence, ML) |\r
| postgres-proxy | 1 | Connection pooler (PgBouncer) |\r
\r
## Services\r
\r
- **phixum-grpc** - gRPC API (port 50051)\r
- **phixum-metrics** - Prometheus metrics (port 9090)\r
\r
## Helm\r
\r
\`\`\`bash\r
helm upgrade --install phixum ./helm/phixum \\\r
  --set image.tag=latest \\\r
  --namespace phixum\r
\`\`\`\r
\r
## Autoscaling\r
\r
Horizontal Pod Autoscaler targets:\r
- CPU: 70% utilization\r
- Memory: 80% utilization\r
- Custom: quotes/sec metric\r
`},{id:"docs-phixum-intro",slug:"/docs/phixum/intro",title:"phixum",category:"Phixum",badge:"Phixum",summary:"A production-grade, Rust-native options trading engine for crypto derivatives.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum\r
\r
A production-grade, Rust-native options trading engine for crypto derivatives.\r
\r
## Overview\r
\r
phixum is a systematic options market-making platform demonstrating mastery of lock-free architecture, Black-Scholes pricing, multi-exchange adapters, and ML integration - built as a single, cohesive Rust workspace.\r
\r
## Features\r
\r
- **Real-time Black-Scholes Pricing** - f32 hot-path for Greeks, f64 exact for risk aggregation\r
- **Implied Volatility Solver** - Halley iteration with full convergence fallback\r
- **Multi-Exchange Adapter** - Deribit adapter with trait-based extensibility\r
- **Lock-Free Architecture** - ArcSwap snapshots, SPSC channels, zero-lock reads on hot path\r
- **Risk Gateway** - Position limits, margin checks, non-copyable CollateralResource\r
- **ML Integration** - RegimeClassifier, SpreadOptimiser, ModelRegistry, ShadowMode\r
- **Full DevOps** - Terraform (EKS/RDS/ECR), Helm charts, GitHub Actions CI/CD\r
\r
## Quick Start\r
\r
\`\`\`bash\r
git clone https://github.com/phixum/phixum.git\r
cd phixum\r
cargo build --release\r
cargo test --workspace\r
cargo run --release --bin phixum-node\r
\`\`\`\r
\r
## Design Principles\r
\r
1. **Lock-Free Reads** - All hot-path reads use ArcSwap snapshots\r
2. **Type-Safe Resources** - CollateralResource cannot be copied (Move-VM pattern)\r
3. **f32 Hot Path** - Greeks compute in f32 (~4x faster), f64 for risk aggregation\r
4. **Zero-Allocation Events** - SPSC channels, pre-allocated buffers\r
5. **Team Ownership Boundaries** - Each crate = one team, clear interface contracts\r
\r
## Performance Targets\r
\r
| Metric | Target |\r
|--------|--------|\r
| Quote latency | < 1ms (P99) |\r
| Greeks computation | < 10ms for 500 positions |\r
| Memory per connection | < 10 MB |\r
| Throughput | 10k quotes/sec |\r
`},{id:"docs-phixum-crates-phixum-execution",slug:"/docs/phixum/crates/phixum-execution",title:"phixum-execution",category:"Phixum",badge:"Phixum",summary:"Order management and matching engine for executing trades.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-execution\r
\r
Order management and matching engine for executing trades.\r
\r
## Components\r
\r
- **OrderManager** - Tracks active orders, handles acknowledgments and fills\r
- **InMemoryMatchingEngine** - Price-time priority matching for internal testing\r
\r
## Order States\r
\r
\`\`\`\r
Pending → Acknowledged → PartiallyFilled → Filled\r
                     ↘ → Rejected\r
                     ↘ → Cancelled\r
\`\`\`\r
`},{id:"docs-phixum-crates-phixum-ml",slug:"/docs/phixum/crates/phixum-ml",title:"phixum-ml",category:"Phixum",badge:"Phixum",summary:"Machine learning integration for regime classification and spread optimization.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-ml\r
\r
Machine learning integration for regime classification and spread optimization.\r
\r
## Components\r
\r
- **RegimeClassifier** - Classifies market regime (trending, mean-reverting, volatile)\r
- **SpreadOptimiser** - Adjusts bid-ask spread based on regime and inventory\r
- **ModelRegistry** - Manages multiple ML models with versioning\r
- **ShadowMode** - Runs models in parallel without affecting live quotes\r
\r
## Architecture\r
\r
ML inference runs on the Rayon thread pool to avoid blocking the Tokio runtime. Models are loaded from serialized weights and updated via the ModelRegistry without restart.\r
`},{id:"docs-phixum-crates-phixum-model",slug:"/docs/phixum/crates/phixum-model",title:"phixum-model",category:"Phixum",badge:"Phixum",summary:"Core domain types with no internal dependencies - the shared vocabulary for all phixum crates.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-model\r
\r
Core domain types with no internal dependencies - the shared vocabulary for all phixum crates.\r
\r
## Key Types\r
\r
- \`OptionType\` - Call/Put enum\r
- \`OptionContract\` - Strike, expiry, underlying, option type\r
- \`Position\` - Quantity, average price, contract\r
- \`Order\` - Side, price, quantity, status\r
- \`Trade\` - Executed order details\r
- \`MarketData\` - Bid/ask, last price, volume\r
\r
## Design Rules\r
\r
- No dependencies on other phixum crates\r
- All types are \`Clone + Send + Sync\`\r
- No business logic - pure data definitions\r
- Serde serialization for all types\r
`},{id:"docs-phixum-crates-phixum-node",slug:"/docs/phixum/crates/phixum-node",title:"phixum-node",category:"Phixum",badge:"Phixum",summary:"Binary entry point and async runtime supervisor tree root.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-node\r
\r
Binary entry point and async runtime supervisor tree root.\r
\r
## Responsibilities\r
\r
- Initializes the Tokio runtime\r
- Starts all subsystems (market data, strategy, execution, risk, persistence)\r
- Manages graceful shutdown\r
- Exposes gRPC API for external clients\r
\r
## Startup Sequence\r
\r
1. Load configuration from TOML\r
2. Initialize persistence layer (PostgreSQL connection pool)\r
3. Start market data receiver (WebSocket to Deribit)\r
4. Initialize pricing engine and option chain\r
5. Start risk gateway with current positions\r
6. Launch quote engine\r
7. Start gRPC server\r
8. Enter main event loop\r
\r
## Shutdown\r
\r
On \`SIGTERM\` or \`Ctrl+C\`:\r
1. Stop accepting new orders\r
2. Cancel all open quotes\r
3. Flush pending state to PostgreSQL\r
4. Close WebSocket connections\r
5. Exit cleanly\r
`},{id:"docs-phixum-crates-phixum-pricing",slug:"/docs/phixum/crates/phixum-pricing",title:"phixum-pricing",category:"Phixum",badge:"Phixum",summary:"Black-Scholes pricing engine and implied volatility solver.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-pricing\r
\r
Black-Scholes pricing engine and implied volatility solver.\r
\r
## Features\r
\r
- **Black-Scholes** - European option pricing with f32 hot path\r
- **Greeks** - Delta, Gamma, Vega, Theta, Rho\r
- **IV Solver** - Halley's method with convergence fallback\r
- **f32/f64 Split** - f32 for per-quote Greeks, f64 for portfolio aggregation\r
\r
## Usage\r
\r
\`\`\`rust\r
use phixum_pricing::BlackScholes;\r
\r
let bs = BlackScholes::new(spot, strike, vol, r, t);\r
let price = bs.price(OptionType::Call);\r
let delta = bs.delta(OptionType::Call);\r
let iv = bs.implied_vol(market_price, OptionType::Call);\r
\`\`\`\r
`},{id:"docs-phixum-crates-phixum-risk",slug:"/docs/phixum/crates/phixum-risk",title:"phixum-risk",category:"Phixum",badge:"Phixum",summary:"Risk gateway enforcing position limits, margin checks, and collateral management.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-risk\r
\r
Risk gateway enforcing position limits, margin checks, and collateral management.\r
\r
## Key Concepts\r
\r
- **CollateralResource** - Non-copyable type (Move-VM pattern) preventing double-spend\r
- **PositionLimits** - Max position per underlying, per expiry, per strike\r
- **MarginChecks** - Pre-trade margin validation against available collateral\r
- **RiskGateway** - Central gate that all orders must pass through before execution\r
\r
## Design\r
\r
The risk gateway runs on a periodic Rayon batch, aggregating portfolio risk in f64 precision while the hot path operates in f32.\r
`},{id:"docs-phixum-crates-phixum-strategy",slug:"/docs/phixum/crates/phixum-strategy",title:"phixum-strategy",category:"Phixum",badge:"Phixum",summary:"Quote engine and option chain manager - the brain of the market-making system.",citations:[],position:9999,hidden:!1,draft:!1,content:`# phixum-strategy\r
\r
Quote engine and option chain manager - the brain of the market-making system.\r
\r
## Components\r
\r
- **QuoteEngine** - Generates bid/ask quotes based on pricing, risk, and ML signals\r
- **OptionChainManager** - Maintains the full option chain with real-time Greeks\r
- **Block-STM Greeks** - Parallel Greeks computation inspired by Diem's Block-STM\r
\r
## Quote Lifecycle\r
\r
1. Market data arrives via SPSC channel\r
2. ArcSwap snapshot is updated (lock-free)\r
3. QuoteEngine reads snapshot, computes fair value\r
4. Risk gateway validates position limits\r
5. ML module adjusts spread based on regime\r
6. Quote is published to order manager\r
`},{id:"docs-phixum-infra-terraform",slug:"/docs/phixum/infra/terraform",title:"Terraform Infrastructure",category:"Phixum",badge:"Phixum",summary:"phixum uses Terraform to provision AWS infrastructure for production deployment.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Terraform Infrastructure\r
\r
phixum uses Terraform to provision AWS infrastructure for production deployment.\r
\r
## Resources\r
\r
| Resource | Type | Purpose |\r
|----------|------|---------|\r
| EKS Cluster | \`aws_eks_cluster\` | Kubernetes control plane |\r
| EKS Node Group | \`aws_eks_node_group\` | Worker nodes |\r
| RDS PostgreSQL | \`aws_db_instance\` | Managed database |\r
| ECR Repository | \`aws_ecr_repository\` | Container registry |\r
| IAM Roles | \`aws_iam_role\` | Service permissions |\r
| VPC / Subnets | \`aws_vpc\`, \`aws_subnet\` | Network topology |\r
\r
## Environments\r
\r
- **staging** - \`environments/staging.tfvars\`\r
- **production** - \`environments/production.tfvars\`\r
\r
## Deployment\r
\r
\`\`\`bash\r
cd infra/terraform\r
terraform init\r
terraform apply -var-file=environments/staging.tfvars\r
\`\`\`\r
`},{id:"docs-shared-contributing",slug:"/docs/shared/contributing",title:"Contributing",category:"Shared Standards",badge:"Shared Standards",summary:"Guidelines for contributing to the gemphi workspace.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Contributing\r
\r
Guidelines for contributing to the gemphi workspace.\r
\r
## Development Setup\r
\r
\`\`\`bash\r
# Clone the workspace\r
git clone https://github.com/gemphi/gemphi.git\r
cd gemphi\r
\r
# Build Phi crates\r
cd phi && cargo build --release\r
\r
# Build Phixum crates\r
cd ../phixum && cargo build --release\r
\r
# Run docs site\r
cd ../phidoc && npm install && npm start\r
\`\`\`\r
\r
## Pull Request Process\r
\r
1. Create a feature branch from \`main\`\r
2. Ensure \`cargo fmt --check\` passes\r
3. Ensure \`cargo clippy -- -D warnings\` passes\r
4. Ensure \`cargo test --workspace\` passes\r
5. Write/update tests for changed code\r
6. Request review from at least one maintainer\r
7. Squash merge after approval\r
\r
## Code Style\r
\r
- Follow Rust idioms - no unnecessary \`clone()\`, prefer borrows\r
- Keep files under 200 lines - split into modules\r
- Document public APIs with \`///\` doc comments\r
- Use meaningful variable names - no single letters except in tight loops\r
`},{id:"docs-shared-diem-standards",slug:"/docs/shared/diem-standards",title:"Diem Standards",category:"Shared Standards",badge:"Shared Standards",summary:"The gemphi workspace follows Diem-inspired standards for crate organization, README formatting, and code quality.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Diem Standards\r
\r
The gemphi workspace follows Diem-inspired standards for crate organization, README formatting, and code quality.\r
\r
## README Frontmatter\r
\r
Every crate README must include YAML frontmatter:\r
\r
\`\`\`markdown\r
---\r
id: crate-name\r
title: Crate Name\r
custom_edit_url: https://github.com/gemphi/workspace/edit/main/crates/crate-name/README.md\r
---\r
\r
# Crate Name\r
\r
Description...\r
\`\`\`\r
\r
## Crate Conventions\r
\r
1. **Single Tree Rule** - All crates form a single DAG compilation tree\r
2. **200-Line Limit** - Implementation files kept under 200 lines\r
3. **Lock-Free Hot Path** - ArcSwap snapshots, infallible mutexes, Rayon parallelism\r
4. **Consistent READMEs** - Every crate has a formatted README with frontmatter\r
\r
## Code Quality\r
\r
- \`cargo fmt --check\` - No formatting deviations\r
- \`cargo clippy -- -D warnings\` - No lint warnings\r
- \`cargo test --workspace\` - All tests pass\r
- Code reviews required for all merges to \`main\`\r
`},{id:"docs-shared-readme-format",slug:"/docs/shared/readme-format",title:"README Format",category:"Shared Standards",badge:"Shared Standards",summary:"Standardized README template for all crates in the gemphi workspace.",citations:[],position:9999,hidden:!1,draft:!1,content:`# README Format\r
\r
Standardized README template for all crates in the gemphi workspace.\r
\r
## Template\r
\r
\`\`\`markdown\r
---\r
id: crate-name\r
title: Crate Name\r
custom_edit_url: https://github.com/gemphi/workspace/edit/main/crates/crate-name/README.md\r
---\r
\r
# Crate Name\r
\r
Brief one-line description.\r
\r
## Overview\r
\r
2-3 paragraph description of what the crate does and why it exists.\r
\r
## Features\r
\r
- Feature 1\r
- Feature 2\r
\r
## Quick Start\r
\r
\\\`\\\`\\\`bash\r
cargo build -p crate-name\r
cargo test -p crate-name\r
\\\`\\\`\\\`\r
\r
## Architecture\r
\r
Brief description of internal structure.\r
\r
## Dependencies\r
\r
List of key external dependencies.\r
\r
## License\r
\r
MIT\r
\`\`\`\r
\r
## Rules\r
\r
- Frontmatter is mandatory\r
- \`id\` must match the crate name (kebab-case)\r
- \`title\` should be human-readable\r
- \`custom_edit_url\` should point to the correct GitHub edit URL\r
- Keep READMEs concise - link to detailed docs in PhiDoc for deep dives\r
`},{id:"docs-shared-intro",slug:"/docs/shared/intro",title:"Shared Documentation",category:"Shared Standards",badge:"Shared Standards",summary:"Cross-workspace conventions, standards, and guidelines shared across Phi and Phixum.",citations:[],position:9999,hidden:!1,draft:!1,content:`# Shared Documentation\r
\r
Cross-workspace conventions, standards, and guidelines shared across Phi and Phixum.\r
\r
## Topics\r
\r
- **Diem Standards** - README frontmatter format and crate conventions\r
- **Contributing** - Development guidelines for all gemphi projects\r
- **README Format** - Standardized README template with frontmatter\r
`}],sidebars:[{title:"PhiDoc Engine",items:[{id:"phidoc-quickstart",title:"PhiDoc Quickstart",slug:"/docs/phidoc/quickstart",category:"PhiDoc Engine",position:1},{id:"phidoc-configuration",title:"Configuration",slug:"/docs/phidoc/configuration",category:"PhiDoc Engine",position:2},{id:"phidoc-content-model",title:"Content Model",slug:"/docs/phidoc/content-model",category:"PhiDoc Engine",position:3},{id:"phidoc-sidebars",title:"Sidebars",slug:"/docs/phidoc/sidebars",category:"PhiDoc Engine",position:4},{id:"phidoc-branding",title:"Branding and Themes",slug:"/docs/phidoc/branding",category:"PhiDoc Engine",position:5},{id:"phidoc-site-integration",title:"Add PhiDoc to Any Site",slug:"/docs/phidoc/site-integration",category:"PhiDoc Engine",position:6},{id:"phidoc-deployment",title:"Build and Deployment",slug:"/docs/phidoc/deployment",category:"PhiDoc Engine",position:7}]},{title:"Phi",items:[{id:"docs-phi-crates-appkit",title:"AppKit",slug:"/docs/phi/crates/appkit",category:"Phi",position:9999},{id:"docs-phi-sdk-arkit",title:"ARKit",slug:"/docs/phi/sdk/arkit",category:"Phi",position:9999},{id:"docs-phi-sdk-foundation",title:"Foundation",slug:"/docs/phi/sdk/foundation",category:"Phi",position:9999},{id:"docs-phi-architecture-gpu-pipeline",title:"GPU Pipeline",slug:"/docs/phi/architecture/gpu-pipeline",category:"Phi",position:9999},{id:"docs-phi-crates-kitpro",title:"KitPro",slug:"/docs/phi/crates/kitpro",category:"Phi",position:9999},{id:"docs-phi-architecture-layer-architecture",title:"Layer Architecture",slug:"/docs/phi/architecture/layer-architecture",category:"Phi",position:9999},{id:"docs-phi-architecture-layout-system",title:"Layout System",slug:"/docs/phi/architecture/layout-system",category:"Phi",position:9999},{id:"docs-phi-intro",title:"Phi",slug:"/docs/phi/intro",category:"Phi",position:9999},{id:"docs-phi-crates-phi-oml",title:"phi-oml",slug:"/docs/phi/crates/phi-oml",category:"Phi",position:9999},{id:"docs-phi-crates-phifly",title:"PhiFly",slug:"/docs/phi/crates/phifly",category:"Phi",position:9999},{id:"docs-phi-crates-phigum",title:"Phigum",slug:"/docs/phi/crates/phigum",category:"Phi",position:9999},{id:"docs-phi-crates-puikit",title:"PUIKit",slug:"/docs/phi/crates/puikit",category:"Phi",position:9999},{id:"docs-phi-sdk-realitykit",title:"RealityKit",slug:"/docs/phi/sdk/realitykit",category:"Phi",position:9999},{id:"docs-phi-sdk-swift",title:"Swift",slug:"/docs/phi/sdk/swift",category:"Phi",position:9999},{id:"docs-phi-sdk-uikit",title:"UIKit",slug:"/docs/phi/sdk/uikit",category:"Phi",position:9999}]},{title:"Phixum",items:[{id:"docs-phixum-architecture-overview",title:"Architecture Overview",slug:"/docs/phixum/architecture/overview",category:"Phixum",position:9999},{id:"docs-phixum-infra-ci-cd",title:"CI/CD Pipeline",slug:"/docs/phixum/infra/ci-cd",category:"Phixum",position:9999},{id:"docs-phixum-architecture-concurrency-model",title:"Concurrency Model",slug:"/docs/phixum/architecture/concurrency-model",category:"Phixum",position:9999},{id:"docs-phixum-architecture-crate-graph",title:"Crate Graph",slug:"/docs/phixum/architecture/crate-graph",category:"Phixum",position:9999},{id:"docs-phixum-flows-flow-01",title:"Flow 01 - Market Data Ingestion",slug:"/docs/phixum/flows/flow-01",category:"Phixum",position:9999},{id:"docs-phixum-flows-flow-02",title:"Flow 02 - Quote Generation",slug:"/docs/phixum/flows/flow-02",category:"Phixum",position:9999},{id:"docs-phixum-flows-flow-overview",title:"Flow Overview",slug:"/docs/phixum/flows/flow-overview",category:"Phixum",position:9999},{id:"docs-phixum-infra-kubernetes",title:"Kubernetes Deployment",slug:"/docs/phixum/infra/kubernetes",category:"Phixum",position:9999},{id:"docs-phixum-intro",title:"phixum",slug:"/docs/phixum/intro",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-execution",title:"phixum-execution",slug:"/docs/phixum/crates/phixum-execution",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-ml",title:"phixum-ml",slug:"/docs/phixum/crates/phixum-ml",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-model",title:"phixum-model",slug:"/docs/phixum/crates/phixum-model",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-node",title:"phixum-node",slug:"/docs/phixum/crates/phixum-node",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-pricing",title:"phixum-pricing",slug:"/docs/phixum/crates/phixum-pricing",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-risk",title:"phixum-risk",slug:"/docs/phixum/crates/phixum-risk",category:"Phixum",position:9999},{id:"docs-phixum-crates-phixum-strategy",title:"phixum-strategy",slug:"/docs/phixum/crates/phixum-strategy",category:"Phixum",position:9999},{id:"docs-phixum-infra-terraform",title:"Terraform Infrastructure",slug:"/docs/phixum/infra/terraform",category:"Phixum",position:9999}]},{title:"Shared Standards",items:[{id:"docs-shared-contributing",title:"Contributing",slug:"/docs/shared/contributing",category:"Shared Standards",position:9999},{id:"docs-shared-diem-standards",title:"Diem Standards",slug:"/docs/shared/diem-standards",category:"Shared Standards",position:9999},{id:"docs-shared-readme-format",title:"README Format",slug:"/docs/shared/readme-format",category:"Shared Standards",position:9999},{id:"docs-shared-intro",title:"Shared Documentation",slug:"/docs/shared/intro",category:"Shared Standards",position:9999}]}],blogItems:[],blogSidebars:[]};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=(...l)=>l.filter((c,a,p)=>!!c&&c.trim()!==""&&p.indexOf(c)===a).join(" ").trim();/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,a,p)=>p?p.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=l=>{const c=of(l);return c.charAt(0).toUpperCase()+c.slice(1)};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var la={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=l=>{for(const c in l)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1},af=J.createContext({}),lf=()=>J.useContext(af),uf=J.forwardRef(({color:l,size:c,strokeWidth:a,absoluteStrokeWidth:p,className:_="",children:v,iconNode:w,...C},R)=>{const{size:z=24,strokeWidth:W=2,absoluteStrokeWidth:F=!1,color:M="currentColor",className:b=""}=lf()??{},X=p??F?Number(a??W)*24/Number(c??z):a??W;return J.createElement("svg",{ref:R,...la,width:c??z??la.width,height:c??z??la.height,stroke:l??M,strokeWidth:X,className:zc("lucide",b,_),...!v&&!sf(C)&&{"aria-hidden":"true"},...C},[...w.map(([q,N])=>J.createElement(q,N)),...Array.isArray(v)?v:[v]])});/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(l,c)=>{const a=J.forwardRef(({className:p,..._},v)=>J.createElement(uf,{ref:v,iconNode:c,className:zc(`lucide-${rf(_c(l))}`,`lucide-${l}`,p),..._}));return a.displayName=_c(l),a};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lc=je("arrow-left",cf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pf=je("arrow-right",df);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],fa=je("book-open",ff);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mf=je("check",hf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],yf=je("circle-alert",gf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xf=je("circle-check",vf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],wf=je("code-xml",_f);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Sf=je("copy",kf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Cf=je("graduation-cap",Pf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],wc=je("info",Ef);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Rf=je("layers",jf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Tf=je("layout-grid",Nf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],zf=je("loader-circle",Df);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Mf=je("moon",Lf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Af=je("palette",If);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],Of=je("rocket",bf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Mc=je("search",Ff);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$f=je("settings",Uf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Wf=je("shield",Bf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hf=je("sparkles",qf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Kf=je("sun",Vf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Gf=je("terminal",Qf);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xf=je("triangle-alert",Yf);function ee(...l){const c=[];for(const a of l)if(a){if(typeof a=="string"||typeof a=="number")c.push(String(a));else if(Array.isArray(a)){const p=ee(...a);p&&c.push(p)}else if(typeof a=="object")for(const[p,_]of Object.entries(a))_&&c.push(p)}return c.join(" ")}const kc={PRIMARY:"primary",ICON:"icon"},Br={SM:"sm",MD:"md",LG:"lg"},Zf="_button_1bscs_1",Jf="_sm_1bscs_17",eh="_md_1bscs_22",nh="_lg_1bscs_26",th="_iconSm_1bscs_31",rh="_iconMd_1bscs_36",ih="_iconLg_1bscs_41",oh="_primary_1bscs_46",sh="_disabled_1bscs_50",ah="_secondary_1bscs_54",lh="_outline_1bscs_62",uh="_ghost_1bscs_71",ch="_danger_1bscs_79",dh="_icon_1bscs_31",ph="_fullWidth_1bscs_92",fh="_loading_1bscs_96",hh="_spin_1bscs_106",Un={button:Zf,sm:Jf,md:eh,lg:nh,iconSm:th,iconMd:rh,iconLg:ih,primary:oh,disabled:sh,secondary:ah,outline:lh,ghost:uh,danger:ch,icon:dh,fullWidth:ph,loading:fh,spin:hh},ut=({variant:l=kc.PRIMARY,size:c=Br.MD,fullWidth:a=!1,loading:p=!1,loadingText:_,icon:v,iconLeft:w,iconRight:C,className:R="",children:z,...W})=>{const F=l===kc.ICON,M=c===Br.SM?14:c===Br.LG?20:16,b=c===Br.SM?16:c===Br.LG?24:20,X=ee(Un.button,!F&&Un[c],F&&Un[`icon${c.charAt(0).toUpperCase()+c.slice(1)}`],Un[l],a&&Un.fullWidth,p&&Un.loading,"disabled"in W&&W.disabled&&Un.disabled,R),q=w,N=C,Z=p?u.jsxs(u.Fragment,{children:[u.jsx(zf,{className:Un.spin,"aria-hidden":!0,size:F?b:M}),!F&&u.jsx("span",{children:_||z})]}):u.jsxs(u.Fragment,{children:[v&&u.jsx("span",{className:Un.iconNode,children:v}),!F&&q&&u.jsx(q,{"aria-hidden":!0,size:M}),!F&&z&&u.jsx("span",{children:z}),!F&&N&&u.jsx(N,{"aria-hidden":!0,size:M}),F&&q&&u.jsx(q,{"aria-hidden":!0,size:b})]});if("href"in W&&W.href){const{href:I,...re}=W;return u.jsx("a",{href:I,className:X,...re,children:Z})}const{disabled:H,...B}=W;return u.jsx("button",{className:X,disabled:H||p,...B,children:Z})},mh="_icon_rhtm4_1",gh={icon:mh},yh={MD:"md"},vh={xs:12,sm:14,md:16,lg:20,xl:24},Ic=({name:l,icon:c,size:a=yh.MD,className:p=""})=>{const _=c||l;if(!_)return null;const v=typeof a=="number"?a:vh[a]||16;return u.jsx(_,{className:ee(gh.icon,p),size:v,color:"currentColor"})},xh="_badge_1oncu_1",_h="_primary_1oncu_14",wh="_secondary_1oncu_19",kh="_success_1oncu_24",Sh="_warning_1oncu_29",Ph="_info_1oncu_34",Ch="_error_1oncu_39",Eh="_count_1oncu_44",Sc={badge:xh,primary:_h,secondary:wh,success:kh,warning:Sh,info:Ph,error:Ch,count:Eh},jh={PRIMARY:"primary"},so=({children:l,variant:c=jh.PRIMARY,className:a="",...p})=>u.jsx("span",{className:ee(Sc.badge,Sc[c],a),...p,children:l});function Rh(l){if(l)return l==="transparent"?"transparent":l==="inherit"?"inherit":l.startsWith("gradient-")||l.startsWith("brand-")?`var(--phi-${l})`:l}function Nh(l){return l?l==="inherit"?"inherit":{primary:"var(--phi-color-primary)","primary-hover":"var(--phi-color-primary-hover)",secondary:"var(--phi-color-secondary)","text-primary":"var(--phi-color-text-primary)","text-secondary":"var(--phi-color-text-secondary)","text-muted":"var(--phi-color-text-muted)","text-inverse":"var(--phi-color-text-inverse)",success:"var(--phi-color-success)",warning:"var(--phi-color-warning)",error:"var(--phi-color-error)",info:"var(--phi-color-info)"}[l]||l:void 0}function Pn(l){if(l!==void 0)return`${l*.25}rem`}function Th(l){return l?{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}[l]||l:void 0}function ct(l){const c={};l.background&&(c.background=Rh(l.background)),l.color&&(c.color=Nh(l.color));const a=l.paddingY??l.padding,p=l.paddingX??l.padding;return a!==void 0&&(c.paddingTop=c.paddingTop||Pn(a),c.paddingBottom=c.paddingBottom||Pn(a)),p!==void 0&&(c.paddingLeft=c.paddingLeft||Pn(p),c.paddingRight=c.paddingRight||Pn(p)),l.paddingTop!==void 0&&(c.paddingTop=Pn(l.paddingTop)),l.paddingBottom!==void 0&&(c.paddingBottom=Pn(l.paddingBottom)),l.paddingLeft!==void 0&&(c.paddingLeft=Pn(l.paddingLeft)),l.paddingRight!==void 0&&(c.paddingRight=Pn(l.paddingRight)),l.margin!==void 0&&(c.margin=Pn(l.margin)),l.marginTop!==void 0&&(c.marginTop=Pn(l.marginTop)),l.marginBottom!==void 0&&(c.marginBottom=Pn(l.marginBottom)),l.maxWidth&&(c.maxWidth=Th(l.maxWidth)),l.minWidth&&(c.minWidth=l.minWidth),l.minHeight&&(c.minHeight=l.minHeight),l.align&&(c.textAlign=l.align),l.textDecoration&&(c.textDecoration=l.textDecoration),l.opacity!==void 0&&(c.opacity=l.opacity),l.textTransform&&(c.textTransform=l.textTransform),l.letterSpacing&&(c.letterSpacing=l.letterSpacing),c}const Dh="_title_1v901_1",zh="_h1_1v901_10",Lh="_h2_1v901_15",Mh="_h3_1v901_20",Ih="_h4_1v901_24",Ah="_h5_1v901_28",bh="_h6_1v901_32",ua={title:Dh,h1:zh,h2:Lh,h3:Mh,h4:Ih,h5:Ah,h6:bh,"size-sm":"_size-sm_1v901_36","size-md":"_size-md_1v901_40","size-lg":"_size-lg_1v901_44","size-xl":"_size-xl_1v901_48","size-2xl":"_size-2xl_1v901_52","size-3xl":"_size-3xl_1v901_56"},Et=({variant:l,level:c,size:a,className:p="",style:_,children:v,...w})=>{const C=l||(c?`h${c}`:"h1"),R=C,z=a?ua[`size-${a}`]:"",F={...ct(w),..._},{background:M,padding:b,paddingTop:X,paddingBottom:q,paddingLeft:N,paddingRight:Z,paddingX:H,paddingY:B,margin:I,marginTop:re,marginBottom:fe,color:ne,maxWidth:V,minWidth:ce,minHeight:Pe,align:Ue,textDecoration:We,opacity:Me,textTransform:qe,letterSpacing:He,...ge}=w;return u.jsx(R,{className:ee(ua.title,ua[C],z,p),style:F,...ge,children:v})},Oh="_text_4clpe_1",Wr={text:Oh,"intent-default":"_intent-default_4clpe_10","intent-muted":"_intent-muted_4clpe_14","intent-secondary":"_intent-secondary_4clpe_18","intent-primary":"_intent-primary_4clpe_22","intent-success":"_intent-success_4clpe_26","intent-warning":"_intent-warning_4clpe_30","intent-danger":"_intent-danger_4clpe_34","size-xs":"_size-xs_4clpe_39","size-sm":"_size-sm_4clpe_44","size-md":"_size-md_4clpe_49","size-lg":"_size-lg_4clpe_54","size-xl":"_size-xl_4clpe_59","size-2xl":"_size-2xl_4clpe_64","weight-normal":"_weight-normal_4clpe_70","weight-medium":"_weight-medium_4clpe_74","weight-semibold":"_weight-semibold_4clpe_78","weight-bold":"_weight-bold_4clpe_82","align-left":"_align-left_4clpe_87","align-center":"_align-center_4clpe_91","align-right":"_align-right_4clpe_95"},me=({intent:l,variant:c,size:a="md",weight:p="normal",align:_="left",as:v="p",className:w="",style:C,children:R,...z})=>{const W=l||c||"default",M={...ct(z),...C},{background:b,padding:X,paddingTop:q,paddingBottom:N,paddingLeft:Z,paddingRight:H,paddingX:B,paddingY:I,margin:re,marginTop:fe,marginBottom:ne,color:V,maxWidth:ce,minWidth:Pe,minHeight:Ue,textDecoration:We,opacity:Me,textTransform:qe,letterSpacing:He,...ge}=z;return jt.createElement(v,{className:ee(Wr.text,Wr[`intent-${W}`],Wr[`size-${a}`],Wr[`weight-${p}`],Wr[`align-${_}`],w),style:M,...ge},R)},Fh="_span_16q3c_1",Uh="_bold_16q3c_10",$h="_muted_16q3c_14",Bh="_sm_16q3c_18",Pc={span:Fh,default:"_default_16q3c_6",bold:Uh,muted:$h,sm:Bh},Wh={DEFAULT:"default"},Vr=({variant:l=Wh.DEFAULT,className:c="",children:a,...p})=>u.jsx("span",{className:ee(Pc.span,Pc[l],c),...p,children:a}),qh="_divider_1uyvq_1",Hh="_horizontal_1uyvq_8",Vh="_vertical_1uyvq_13",Cc={divider:qh,horizontal:Hh,vertical:Vh},Kh=({orientation:l="horizontal",className:c="",...a})=>u.jsx("hr",{className:ee(Cc.divider,Cc[l],c),...a}),Qh=["xs","sm","md","lg","xl"];function Gh(l){return typeof l=="object"&&l!==null}function Tn(l,c,a=String){const p={};if(c===void 0)return p;if(!Gh(c))return p[`--${l}`]=a(c),p;for(const _ of Qh){const v=c[_];if(v!==void 0){const w=_==="xs"?"":`-${_}`;p[`--${l}${w}`]=a(v)}}return p}const Yh="_stack_9w53o_1",Xh={stack:Yh},Zh={start:"flex-start",center:"center",end:"flex-end",between:"space-between",around:"space-around",evenly:"space-evenly"},Jh={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch",baseline:"baseline"},we=jt.forwardRef(({children:l,direction:c="column",gap:a=2,align:p="stretch",justify:_="start",wrap:v=!1,className:w="",style:C,...R},z)=>{const W=ct(R),F={...Tn("stack-direction",c),...Tn("stack-align",p,ge=>Jh[ge]),...Tn("stack-justify",_,ge=>Zh[ge]),...Tn("stack-wrap",v,ge=>ge?"wrap":"nowrap"),...Tn("stack-gap",a,ge=>`${ge*.25}rem`),...W,...C},{background:M,padding:b,paddingTop:X,paddingBottom:q,paddingLeft:N,paddingRight:Z,paddingX:H,paddingY:B,margin:I,marginTop:re,marginBottom:fe,color:ne,maxWidth:V,minWidth:ce,minHeight:Pe,textDecoration:Ue,opacity:We,textTransform:Me,letterSpacing:qe,...He}=R;return u.jsx("div",{ref:z,className:ee(Xh.stack,w),style:F,...He,children:l})});we.displayName="Stack";const em="_container_1uouw_1",nm="_xs_1uouw_30",tm="_sm_1uouw_34",rm="_md_1uouw_38",im="_lg_1uouw_42",om="_xl_1uouw_46",sm="_full_1uouw_50",ca={container:em,xs:nm,sm:tm,md:rm,lg:im,xl:om,full:sm},Hr=jt.forwardRef(({size:l,fluid:c=!1,className:a="",style:p,children:_,...v},w)=>{const C=c||!l?ca.full:typeof l=="object"?"":ca[l],R=ct(v),z={...Tn("container-max-width",c?"full":l,He=>({xs:"576px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",full:"none"})[He]),...R,...p},{background:W,padding:F,paddingTop:M,paddingBottom:b,paddingLeft:X,paddingRight:q,paddingX:N,paddingY:Z,margin:H,marginTop:B,marginBottom:I,color:re,maxWidth:fe,minWidth:ne,minHeight:V,align:ce,textDecoration:Pe,opacity:Ue,textTransform:We,letterSpacing:Me,...qe}=v;return u.jsx("div",{ref:w,className:ee(ca.container,C,a),style:z,...qe,children:_})});Hr.displayName="Container";const am="_grid_3e5qy_1",Ec={grid:am,"grid-cols-1":"_grid-cols-1_3e5qy_33","grid-cols-2":"_grid-cols-2_3e5qy_37","grid-cols-3":"_grid-cols-3_3e5qy_41","grid-cols-4":"_grid-cols-4_3e5qy_45","grid-cols-5":"_grid-cols-5_3e5qy_49","grid-cols-6":"_grid-cols-6_3e5qy_53","grid-cols-7":"_grid-cols-7_3e5qy_57","grid-cols-8":"_grid-cols-8_3e5qy_61","grid-cols-9":"_grid-cols-9_3e5qy_65","grid-cols-10":"_grid-cols-10_3e5qy_69","grid-cols-11":"_grid-cols-11_3e5qy_73","grid-cols-12":"_grid-cols-12_3e5qy_77","grid-cols-sm-1":"_grid-cols-sm-1_3e5qy_83","grid-cols-sm-2":"_grid-cols-sm-2_3e5qy_86","grid-cols-sm-3":"_grid-cols-sm-3_3e5qy_89","grid-cols-sm-4":"_grid-cols-sm-4_3e5qy_92","grid-cols-sm-5":"_grid-cols-sm-5_3e5qy_95","grid-cols-sm-6":"_grid-cols-sm-6_3e5qy_98","grid-cols-sm-7":"_grid-cols-sm-7_3e5qy_101","grid-cols-sm-8":"_grid-cols-sm-8_3e5qy_104","grid-cols-sm-9":"_grid-cols-sm-9_3e5qy_107","grid-cols-sm-10":"_grid-cols-sm-10_3e5qy_110","grid-cols-sm-11":"_grid-cols-sm-11_3e5qy_113","grid-cols-sm-12":"_grid-cols-sm-12_3e5qy_116","grid-cols-md-1":"_grid-cols-md-1_3e5qy_121","grid-cols-md-2":"_grid-cols-md-2_3e5qy_124","grid-cols-md-3":"_grid-cols-md-3_3e5qy_127","grid-cols-md-4":"_grid-cols-md-4_3e5qy_130","grid-cols-md-5":"_grid-cols-md-5_3e5qy_133","grid-cols-md-6":"_grid-cols-md-6_3e5qy_136","grid-cols-md-7":"_grid-cols-md-7_3e5qy_139","grid-cols-md-8":"_grid-cols-md-8_3e5qy_142","grid-cols-md-9":"_grid-cols-md-9_3e5qy_145","grid-cols-md-10":"_grid-cols-md-10_3e5qy_148","grid-cols-md-11":"_grid-cols-md-11_3e5qy_151","grid-cols-md-12":"_grid-cols-md-12_3e5qy_154","grid-cols-lg-1":"_grid-cols-lg-1_3e5qy_159","grid-cols-lg-2":"_grid-cols-lg-2_3e5qy_162","grid-cols-lg-3":"_grid-cols-lg-3_3e5qy_165","grid-cols-lg-4":"_grid-cols-lg-4_3e5qy_168","grid-cols-lg-5":"_grid-cols-lg-5_3e5qy_171","grid-cols-lg-6":"_grid-cols-lg-6_3e5qy_174","grid-cols-lg-7":"_grid-cols-lg-7_3e5qy_177","grid-cols-lg-8":"_grid-cols-lg-8_3e5qy_180","grid-cols-lg-9":"_grid-cols-lg-9_3e5qy_183","grid-cols-lg-10":"_grid-cols-lg-10_3e5qy_186","grid-cols-lg-11":"_grid-cols-lg-11_3e5qy_189","grid-cols-lg-12":"_grid-cols-lg-12_3e5qy_192","grid-cols-xl-1":"_grid-cols-xl-1_3e5qy_197","grid-cols-xl-2":"_grid-cols-xl-2_3e5qy_200","grid-cols-xl-3":"_grid-cols-xl-3_3e5qy_203","grid-cols-xl-4":"_grid-cols-xl-4_3e5qy_206","grid-cols-xl-5":"_grid-cols-xl-5_3e5qy_209","grid-cols-xl-6":"_grid-cols-xl-6_3e5qy_212","grid-cols-xl-7":"_grid-cols-xl-7_3e5qy_215","grid-cols-xl-8":"_grid-cols-xl-8_3e5qy_218","grid-cols-xl-9":"_grid-cols-xl-9_3e5qy_221","grid-cols-xl-10":"_grid-cols-xl-10_3e5qy_224","grid-cols-xl-11":"_grid-cols-xl-11_3e5qy_227","grid-cols-xl-12":"_grid-cols-xl-12_3e5qy_230"},lm=["xs","sm","md","lg","xl"],Ac=jt.forwardRef(({columns:l,gap:c,className:a="",style:p,children:_,xs:v,sm:w,md:C,lg:R,xl:z,...W},F)=>{const M={xs:v,sm:w,md:C,lg:R,xl:z},b=[],X=c??4;for(const N of lm){const Z=M[N];if(Z!=null){const H=N==="xs"?"":`-${N}`;b.push(Ec[`grid-cols${H}-${Z}`])}}const q={...Tn("grid-columns",l,N=>`repeat(${N}, minmax(0, 1fr))`),...Tn("grid-gap",X,N=>`${N*.25}rem`),...p};return u.jsx("div",{ref:F,className:ee(Ec.grid,...b,a),style:q,...W,children:_})});Ac.displayName="Grid";const um="_section_1xirn_1",cm={section:um},Ye=({as:l="section",className:c="",style:a,children:p,..._})=>{const w={...ct(_),...a},{background:C,padding:R,paddingTop:z,paddingBottom:W,paddingLeft:F,paddingRight:M,paddingX:b,paddingY:X,margin:q,marginTop:N,marginBottom:Z,color:H,maxWidth:B,minWidth:I,minHeight:re,align:fe,textDecoration:ne,opacity:V,textTransform:ce,letterSpacing:Pe,...Ue}=_;return u.jsx(l,{className:ee(cm.section,c),style:w,...Ue,children:p})},dm="_page_1mmw5_1",pm="_sidebarWrapper_1mmw5_8",fm="_contentWrapper_1mmw5_14",hm="_header_1mmw5_23",mm="_main_1mmw5_30",gm="_footer_1mmw5_34",Jt={page:dm,sidebarWrapper:pm,contentWrapper:fm,header:hm,main:mm,footer:gm},ym=({header:l,sidebar:c,footer:a,direction:p="row",gap:_=2,mainProps:v,className:w="",children:C,...R})=>{const{className:z,...W}=v??{};return u.jsxs(we,{direction:p,gap:_,className:ee(Jt.page,w),...R,children:[c&&u.jsx(Ye,{as:"aside",className:Jt.sidebarWrapper,children:c}),u.jsxs(we,{direction:"column",className:Jt.contentWrapper,children:[l&&u.jsx(Ye,{as:"header",className:Jt.header,children:l}),u.jsx(Ye,{as:"main",...W,className:ee(Jt.main,z),children:C}),a&&u.jsx(Ye,{as:"footer",className:Jt.footer,children:a})]})]})},vm="_sticky_1quh2_1",xm={sticky:vm},bc=({children:l,top:c,bottom:a,offset:p=0,zIndex:_=100,className:v=""})=>{const w={zIndex:_,...Tn("sticky-top",c,C=>`${C+p}px`),...Tn("sticky-bottom",a,C=>`${C+p}px`)};return u.jsx("div",{className:ee(xm.sticky,v),style:w,children:l})};bc.displayName="Sticky";const _m="_footer_1fwua_1",wm={footer:_m},km=({className:l="",style:c,children:a,...p})=>{const v={...ct(p),...c},{background:w,padding:C,paddingTop:R,paddingBottom:z,paddingLeft:W,paddingRight:F,paddingX:M,paddingY:b,margin:X,marginTop:q,marginBottom:N,color:Z,maxWidth:H,minWidth:B,minHeight:I,align:re,textDecoration:fe,opacity:ne,textTransform:V,letterSpacing:ce,...Pe}=p;return u.jsx("footer",{className:ee(wm.footer,l),style:v,...Pe,children:a})},Sm="_header_1tt6z_1",Pm="_sticky_1tt6z_9",jc={header:Sm,sticky:Pm},Cm=({sticky:l=!1,className:c="",style:a,children:p,..._})=>{const w={...ct(_),...a},{background:C,padding:R,paddingTop:z,paddingBottom:W,paddingLeft:F,paddingRight:M,paddingX:b,paddingY:X,margin:q,marginTop:N,marginBottom:Z,color:H,maxWidth:B,minWidth:I,minHeight:re,align:fe,textDecoration:ne,opacity:V,textTransform:ce,letterSpacing:Pe,...Ue}=_;return u.jsx("header",{className:ee(jc.header,l&&jc.sticky,c),style:w,...Ue,children:p})},Em="_main_hbhq6_1",jm={main:Em},Rm=({className:l="",style:c,children:a,...p})=>{const v={...ct(p),...c},{background:w,padding:C,paddingTop:R,paddingBottom:z,paddingLeft:W,paddingRight:F,paddingX:M,paddingY:b,margin:X,marginTop:q,marginBottom:N,color:Z,maxWidth:H,minWidth:B,minHeight:I,align:re,textDecoration:fe,opacity:ne,textTransform:V,letterSpacing:ce,...Pe}=p;return u.jsx("main",{className:ee(jm.main,l),style:v,...Pe,children:a})},Nm="_portal_4khjw_1",Tm="_header_4khjw_5",Dm="_footer_4khjw_6",zm="_main_4khjw_10",Lm="_contentGrid_4khjw_14",Mm="_sidebar_4khjw_21",Im="_content_4khjw_14",Am="_aside_4khjw_23",at={portal:Nm,header:Tm,footer:Dm,main:zm,contentGrid:Lm,sidebar:Mm,content:Im,aside:Am},Oc=({variant:l="app",header:c,sidebar:a,aside:p,footer:_,children:v,className:w="",contentClassName:C="",sidebarClassName:R="",asideClassName:z=""})=>u.jsxs(we,{direction:"column",gap:0,className:ee(at.portal,w),"data-portal-variant":l,children:[c&&u.jsx(Cm,{className:at.header,children:c}),u.jsx(Rm,{background:"gradient-main",minHeight:"100vh",className:at.main,children:u.jsxs(Ye,{as:"section",className:at.contentGrid,padding:0,children:[a&&u.jsx(Ye,{as:"aside",className:ee(at.sidebar,R),padding:0,children:a}),u.jsx(Ye,{as:"section",className:ee(at.content,C),padding:0,children:v}),p&&u.jsx(Ye,{as:"aside",className:ee(at.aside,z),padding:0,children:p})]})}),_&&u.jsx(km,{className:at.footer,children:_})]}),bm="_wrapper_1p7d6_1",Om="_input_1p7d6_8",Fm="_withIcon_1p7d6_26",Um="_icon_1p7d6_30",$m="_error_1p7d6_38",qr={wrapper:bm,input:Om,withIcon:Fm,icon:Um,error:$m},Fc=jt.forwardRef(({icon:l,error:c,className:a="",...p},_)=>u.jsxs(we,{direction:"row",align:"center",className:qr.wrapper,children:[l&&u.jsx(Vr,{className:qr.icon,children:l}),u.jsx("input",{ref:_,className:ee(qr.input,l&&qr.withIcon,c&&qr.error,a),...p})]}));Fc.displayName="Input";const Bm="_navbar_fz0eq_1",Wm="_top_fz0eq_11",qm="_bottom_fz0eq_15",Hm="_sticky_fz0eq_21",Vm="_transparent_fz0eq_29",Km="_solid_fz0eq_34",Qm="_section_fz0eq_39",Gm="_item_fz0eq_56",Ym="_itemActive_fz0eq_77",Dn={navbar:Bm,top:Wm,bottom:qm,sticky:Hm,default:"_default_fz0eq_25",transparent:Vm,solid:Km,section:Qm,"align-start":"_align-start_fz0eq_43","align-center":"_align-center_fz0eq_47","align-end":"_align-end_fz0eq_52",item:Gm,itemActive:Ym},ha=({children:l,sticky:c=!1,position:a="top",variant:p="default",height:_=56,className:v=""})=>u.jsx(we,{direction:"row",align:"center",justify:"between",className:ee(Dn.navbar,Dn[a],Dn[p],c&&Dn.sticky,v),style:{height:`${_}px`},children:l});ha.displayName="Navbar";const er=({children:l,align:c="start",className:a=""})=>u.jsx(we,{direction:"row",align:"center",gap:2,className:ee(Dn.section,Dn[`align-${c}`],a),children:l});er.displayName="NavbarSection";const ao=({children:l,active:c=!1,onClick:a,href:p,className:_=""})=>p?u.jsx("a",{href:p,onClick:a,className:ee(Dn.item,c&&Dn.itemActive,_),children:l}):u.jsx("button",{type:"button",onClick:a,className:ee(Dn.item,c&&Dn.itemActive,_),children:l});ao.displayName="NavbarItem";const Uc=({brandTitle:l,version:c,searchQuery:a,searchPlaceholder:p="Search...",onSearchChange:_,onHome:v,onBackToApp:w,backToAppLabel:C="Open App",dark:R,onToggleDark:z})=>u.jsxs(ha,{sticky:!0,variant:"default",height:65,children:[u.jsxs(er,{align:"start",children:[u.jsx(ao,{onClick:v,children:u.jsxs(we,{direction:"row",align:"center",gap:2,children:[u.jsx(Ic,{icon:fa,size:"md"}),u.jsx(me,{as:"span",weight:"semibold",children:l})]})}),c&&u.jsx(so,{variant:"secondary",children:c})]}),_&&u.jsx(er,{align:"center",children:u.jsx(Fc,{icon:u.jsx(Mc,{size:15}),placeholder:p,value:a||"",onChange:W=>_(W.target.value)})}),u.jsxs(er,{align:"end",children:[w&&u.jsxs(ut,{variant:"outline",size:"sm",onClick:w,children:[u.jsx(Lc,{size:15}),u.jsx("span",{children:C})]}),z&&u.jsx(ut,{variant:"icon",size:"sm",onClick:z,"aria-label":"Toggle theme mode",children:R?u.jsx(Kf,{size:17}):u.jsx(Mf,{size:17})})]})]}),Xm="_item_1iu7j_49",Zm="_active_1iu7j_69",Rc={item:Xm,active:Zm},Jm=({active:l=!1,className:c="",children:a,...p})=>u.jsx("button",{type:"button",className:ee(Rc.item,l&&Rc.active,c),...p,children:a}),eg="_card_1q4tx_1",ng="_hoverable_1q4tx_11",tg="_selected_1q4tx_16",rg="_flat_1q4tx_21",ig="_compact_1q4tx_27",og="_body_1q4tx_27",sg="_hero_1q4tx_31",ag="_image_1q4tx_31",lg="_header_1q4tx_35",ug="_headerContent_1q4tx_44",cg="_headerAction_1q4tx_52",dg="_footer_1q4tx_63",$n={card:eg,hoverable:ng,selected:tg,flat:rg,compact:ig,body:og,hero:sg,image:ag,header:lg,headerContent:ug,headerAction:cg,footer:dg},pg={DEFAULT:"default"},Kr=({variant:l=pg.DEFAULT,hoverable:c=!0,compact:a=!1,selected:p=!1,className:_="",children:v,...w})=>u.jsx("article",{className:ee("pui-card",$n.card,$n[l],a&&$n.compact,c&&$n.hoverable,p&&$n.selected,_),...w,children:v}),ma=({action:l,className:c="",children:a,...p})=>u.jsxs("header",{className:ee("pui-card-header",$n.header,c),...p,children:[u.jsx(we,{direction:"row",align:"center",gap:2,className:$n.headerContent,children:a}),l&&u.jsx(we,{direction:"row",align:"center",className:$n.headerAction,children:l})]}),ga=({className:l="",children:c,...a})=>u.jsx("section",{className:ee("pui-card-body",$n.body,l),...a,children:c}),fg="_sidebarSpacerCollapsed_yba54_1",hg="_sidebarSpacerExpanded_yba54_7",mg="_sidebar_yba54_1",gg="_sidebarExpanded_yba54_31",yg="_sidebarCollapsed_yba54_36",vg="_sidebarHeader_yba54_41",xg="_sidebarBody_yba54_48",Ct={sidebarSpacerCollapsed:fg,sidebarSpacerExpanded:hg,sidebar:mg,sidebarExpanded:gg,sidebarCollapsed:yg,sidebarHeader:vg,sidebarBody:xg},_g=J.createContext(void 0),wg=({children:l,defaultCollapsed:c=!1,className:a})=>{const[p,_]=J.useState(c);return u.jsxs(_g.Provider,{value:{sidebarCollapsed:p,setSidebarCollapsed:_,sidebarHovered:!1,setSidebarHovered:()=>{}},children:[u.jsx(we,{className:p?Ct.sidebarSpacerCollapsed:Ct.sidebarSpacerExpanded}),u.jsx(Kr,{hoverable:!1,variant:"flat",className:ee("pui-sidebar",Ct.sidebar,p?Ct.sidebarCollapsed:Ct.sidebarExpanded,a),children:l})]})},kg=({children:l,className:c})=>u.jsx(ma,{className:ee("pui-sidebar-header",Ct.sidebarHeader,c),children:l}),Sg=({children:l,className:c})=>u.jsx(ga,{className:ee("pui-sidebar-body",Ct.sidebarBody,c),children:l}),$c=({title:l,sections:c,activeItemId:a,onSelectItem:p,className:_=""})=>u.jsxs(wg,{defaultCollapsed:!1,className:_,children:[u.jsx(kg,{children:u.jsx(me,{size:"sm",weight:"semibold",children:l})}),u.jsx(Sg,{children:u.jsx(we,{direction:"column",gap:4,children:c.map(v=>u.jsxs(Ye,{as:"nav",padding:0,children:[u.jsx(me,{as:"span",size:"xs",weight:"bold",color:"text-secondary",textTransform:"uppercase",letterSpacing:"0.06em",children:v.title}),u.jsx(we,{direction:"column",gap:1,children:v.items.map(w=>u.jsx(Jm,{active:w.id===a,onClick:()=>p(w.id),children:u.jsx(me,{as:"span",size:"sm",children:w.title})},w.id))})]},v.title))})})]}),Pg=({posts:l,initialPostId:c,activePostId:a,onPostChange:p,brandTitle:_,version:v,dark:w,onToggleDark:C,className:R=""})=>{var fe;const[z,W]=J.useState(c||((fe=l[0])==null?void 0:fe.id)||""),[F,M]=J.useState(""),b=a??z,X=J.useMemo(()=>l.filter(ne=>!ne.hidden&&!ne.draft),[l]),q=J.useMemo(()=>{const ne=F.trim().toLowerCase();return ne?X.filter(V=>[V.title,V.category,V.summary,V.content,...V.tags||[]].filter(Boolean).some(ce=>ce.toLowerCase().includes(ne))):X},[X,F]),N=X.find(ne=>ne.id===b)||X[0],Z=X.findIndex(ne=>ne.id===(N==null?void 0:N.id)),H=Z>0?X[Z-1]:void 0,B=Z>=0&&Z<X.length-1?X[Z+1]:void 0,I=J.useMemo(()=>{const ne=new Map;for(const V of q)ne.set(V.category,[...ne.get(V.category)||[],V]);return[...ne.entries()].map(([V,ce])=>({title:V,items:ce.map(({id:Pe,title:Ue,slug:We,position:Me})=>({id:Pe,title:Ue,slug:We,position:Me}))}))},[q]),re=ne=>{a===void 0&&W(ne),p==null||p(ne)};return N?u.jsx(Oc,{variant:"blog",className:R,header:u.jsx(Uc,{brandTitle:_,version:v,searchQuery:F,searchPlaceholder:"Search posts...",onSearchChange:M,onHome:()=>re(X[0].id),dark:w,onToggleDark:C}),sidebar:u.jsx($c,{title:"Posts",sections:I,activeItemId:N.id,onSelectItem:re}),children:u.jsxs(we,{direction:"column",gap:6,padding:8,children:[u.jsxs(we,{direction:"row",gap:2,align:"center",wrap:!0,children:[u.jsx(so,{variant:"primary",children:N.category}),N.date&&u.jsx(me,{size:"sm",color:"text-secondary",children:N.date}),N.author&&u.jsxs(me,{size:"sm",color:"text-secondary",children:["by ",N.author]})]}),u.jsxs(we,{direction:"column",gap:3,children:[u.jsx(Et,{level:1,children:N.title}),N.summary&&u.jsx(me,{size:"lg",color:"text-secondary",children:N.summary})]}),u.jsx(Kr,{variant:"default",children:u.jsx(me,{as:"p",children:N.content})}),u.jsxs(we,{direction:"row",justify:"between",align:"center",children:[H?u.jsxs(ut,{variant:"outline",onClick:()=>re(H.id),children:[u.jsx(Lc,{size:16}),u.jsx("span",{children:H.title})]}):u.jsx(me,{as:"span"}),B&&u.jsxs(ut,{variant:"outline",onClick:()=>re(B.id),children:[u.jsx("span",{children:B.title}),u.jsx(pf,{size:16})]})]})]})}):null},Cg="_callout_p30c8_1",Eg="_compact_p30c8_14",jg="_iconWrapper_p30c8_22",Rg="_title_p30c8_25",Ng="_content_p30c8_71",Tg="_body_p30c8_82",Pt={callout:Cg,compact:Eg,"intent-primary":"_intent-primary_p30c8_17",iconWrapper:jg,title:Rg,"intent-success":"_intent-success_p30c8_28","intent-warning":"_intent-warning_p30c8_39","intent-error":"_intent-error_p30c8_50",content:Ng,body:Tg},Dg={primary:u.jsx(wc,{size:18}),success:u.jsx(xf,{size:18}),warning:u.jsx(Xf,{size:18}),error:u.jsx(yf,{size:18}),none:u.jsx(wc,{size:18})},Bc=({intent:l="none",title:c,icon:a,compact:p=!1,children:_,className:v,...w})=>{const C=a!==void 0?a:Dg[l];return u.jsxs("div",{className:ee(Pt.callout,Pt[`intent-${l}`],p&&Pt.compact,v),role:"region",...w,children:[C&&u.jsx("div",{className:Pt.iconWrapper,children:C}),u.jsxs("div",{className:Pt.content,children:[c&&u.jsx("h5",{className:Pt.title,children:c}),_&&u.jsx("div",{className:Pt.body,children:_})]})]})},zg="_list_1k40q_1",Lg="_item_1k40q_7",Wc={list:zg,item:Lg},qc=({ordered:l=!1,className:c="",children:a,...p})=>{const _=l?"ol":"ul";return u.jsx(_,{className:ee(Wc.list,c),...p,children:a})},Hc=({className:l="",children:c,...a})=>u.jsx("li",{className:ee(Wc.item,l),...a,children:c}),Mg="_table_1tzty_1",Ig="_th_1tzty_8",Ag="_td_1tzty_9",bg="_tr_1tzty_21",nr={table:Mg,th:Ig,td:Ag,tr:bg},Og=({className:l="",children:c,...a})=>u.jsx("table",{className:ee(nr.table,l),...a,children:c}),Fg=({className:l="",children:c,...a})=>u.jsx("thead",{className:ee(nr.thead,l),...a,children:c}),Ug=({className:l="",children:c,...a})=>u.jsx("tbody",{className:ee(nr.tbody,l),...a,children:c}),Nc=({className:l="",children:c,...a})=>u.jsx("tr",{className:ee(nr.tr,l),...a,children:c}),$g=({className:l="",children:c,...a})=>u.jsx("th",{className:ee(nr.th,l),...a,children:c}),Bg=({className:l="",children:c,...a})=>u.jsx("td",{className:ee(nr.td,l),...a,children:c}),Wg="_article_13ezd_1",qg="_breadcrumb_13ezd_8",Hg="_header_13ezd_12",Vg="_titleRow_13ezd_18",Kg="_citationList_13ezd_22",Qg="_body_13ezd_26",Gg="_pagination_13ezd_31",Yg="_prevNext_13ezd_39",Xg="_ellipsis_13ezd_47",Zg="_pre_13ezd_39",Jg="_h2_13ezd_62",ey="_h3_13ezd_67",ny="_h4_13ezd_72",ty="_blockquote_13ezd_77",ry="_divider_13ezd_81",iy="_inlineCode_13ezd_85",oy="_strong_13ezd_95",sy="_math_13ezd_99",he={article:Wg,breadcrumb:qg,header:Hg,titleRow:Vg,citationList:Kg,body:Qg,pagination:Gg,prevNext:Yg,ellipsis:Xg,pre:Zg,h2:Jg,h3:ey,h4:ny,blockquote:ty,divider:ry,inlineCode:iy,strong:oy,math:sy},ay=({guide:l,prevGuide:c,nextGuide:a,onSelectGuide:p})=>{const[_,v]=J.useState(!1),w=()=>{navigator.clipboard.writeText(l.content).then(()=>{v(!0),setTimeout(()=>v(!1),2e3)})};return u.jsx(Hr,{size:"lg",className:he.article,children:u.jsxs(we,{direction:"column",gap:6,children:[u.jsxs(we,{direction:"row",align:"center",gap:2,className:he.breadcrumb,children:[u.jsx(me,{as:"span",size:"xs",variant:"primary",weight:"bold",textTransform:"uppercase",letterSpacing:"0.05em",children:l.category}),u.jsx(me,{as:"span",size:"xs",variant:"secondary",children:"/"}),u.jsx(me,{as:"span",size:"xs",variant:"secondary",weight:"semibold",children:l.badge})]}),u.jsxs(Ye,{as:"header",className:he.header,children:[u.jsxs(we,{direction:"row",align:"start",justify:"between",gap:4,className:he.titleRow,children:[u.jsx(Et,{variant:"h1",size:"2xl",className:he.title,children:l.title}),u.jsx(ut,{variant:"outline",size:"sm",onClick:w,icon:_?u.jsx(mf,{size:15}):u.jsx(Sf,{size:15}),children:_?"Copied":"Copy Guide"})]}),u.jsx(me,{size:"md",variant:"secondary",className:he.summary,children:l.summary})]}),l.citations&&l.citations.length>0&&u.jsx(Bc,{intent:"primary",title:"Foundational Literature & Academic References:",icon:u.jsx(Cf,{size:18}),children:u.jsx(qc,{className:he.citationList,children:l.citations.map((C,R)=>u.jsx(Hc,{children:C},R))})}),u.jsx(Ye,{as:"article",className:he.body,children:u.jsx(ly,{content:l.content})}),u.jsxs(Ye,{as:"footer",className:he.pagination,children:[c?u.jsxs(ut,{variant:"outline",size:"sm",onClick:()=>p(c.id),className:he.prevNext,children:[u.jsx(me,{as:"span",size:"xs",variant:"secondary",weight:"semibold",children:"← PREVIOUS"}),u.jsx(me,{as:"span",size:"sm",variant:"primary",weight:"bold",className:he.ellipsis,children:c.title})]}):u.jsx(Vr,{"aria-hidden":"true"}),a?u.jsxs(ut,{variant:"outline",size:"sm",onClick:()=>p(a.id),className:he.prevNext,children:[u.jsx(me,{as:"span",size:"xs",variant:"secondary",weight:"semibold",children:"NEXT →"}),u.jsx(me,{as:"span",size:"sm",variant:"primary",weight:"bold",className:he.ellipsis,children:a.title})]}):u.jsx(Vr,{"aria-hidden":"true"})]})]})})};function ly({content:l}){const c=uy(l);return u.jsx(we,{direction:"column",gap:5,children:c.map((a,p)=>{switch(a.type){case"code":return u.jsxs(Kr,{variant:"flat",className:he.codeBlock,children:[u.jsx(ma,{className:he.codeHeader,children:u.jsxs(we,{direction:"row",align:"center",gap:2,children:[u.jsx(Gf,{size:13}),u.jsx(me,{as:"span",size:"xs",variant:"secondary",textTransform:"uppercase",letterSpacing:"0.05em",children:a.lang||"text"})]})}),u.jsx(ga,{children:u.jsx("pre",{className:he.pre,children:u.jsx("code",{children:a.content})})})]},p);case"table":return u.jsx(Kr,{variant:"flat",className:he.tableCard,children:u.jsxs(Og,{children:[u.jsx(Fg,{children:u.jsx(Nc,{children:a.headers.map((_,v)=>u.jsx($g,{children:u.jsx(lt,{text:_})},v))})}),u.jsx(Ug,{children:a.rows.map((_,v)=>u.jsx(Nc,{children:_.map((w,C)=>u.jsx(Bg,{children:u.jsx(lt,{text:w})},C))},v))})]})},p);case"h2":return u.jsx(Et,{variant:"h2",size:"xl",className:he.h2,children:u.jsx(lt,{text:a.content})},p);case"h3":return u.jsx(Et,{variant:"h3",size:"lg",className:he.h3,children:u.jsx(lt,{text:a.content})},p);case"h4":return u.jsx(Et,{variant:"h4",size:"md",className:he.h4,children:u.jsx(lt,{text:a.content})},p);case"blockquote":return u.jsx(Bc,{intent:"none",className:he.blockquote,children:u.jsx(lt,{text:a.content})},p);case"list":return u.jsx(qc,{className:he.list,children:a.items.map((_,v)=>u.jsx(Hc,{children:u.jsx(lt,{text:_})},v))},p);case"hr":return u.jsx(Kh,{className:he.divider},p);case"paragraph":default:return u.jsx(me,{size:"md",className:he.paragraph,children:u.jsx(lt,{text:a.content})},p)}})})}function lt({text:l}){if(!l)return null;const c=l.split(/(`[^`]+`|\*\*[^*]+\*\*|\$[^\$]+\$)/g);return u.jsx(u.Fragment,{children:c.map((a,p)=>a.startsWith("`")&&a.endsWith("`")&&a.length>1?u.jsx("code",{className:he.inlineCode,children:a.slice(1,-1)},p):a.startsWith("**")&&a.endsWith("**")&&a.length>3?u.jsx(Vr,{variant:"bold",className:he.strong,children:a.slice(2,-2)},p):a.startsWith("$")&&a.endsWith("$")&&a.length>1?u.jsx(Vr,{className:he.math,children:a.slice(1,-1)},p):u.jsx(jt.Fragment,{children:a},p))})}function uy(l){const c=l.split(`
`),a=[];let p=0;for(;p<c.length;){const v=c[p].trim();if(!v){p++;continue}if(v.startsWith("```")){const C=v.replace("```","").trim(),R=[];for(p++;p<c.length&&!c[p].trim().startsWith("```");)R.push(c[p]),p++;p++,a.push({type:"code",lang:C,content:R.join(`
`)});continue}if(v==="---"||v==="***"){a.push({type:"hr"}),p++;continue}if(v.startsWith("## ")){a.push({type:"h2",content:v.replace(/^##\s+/,"")}),p++;continue}if(v.startsWith("### ")){a.push({type:"h3",content:v.replace(/^###\s+/,"")}),p++;continue}if(v.startsWith("#### ")){a.push({type:"h4",content:v.replace(/^####\s+/,"")}),p++;continue}if(v.startsWith(">")){const C=[];for(;p<c.length&&c[p].trim().startsWith(">");)C.push(c[p].trim().replace(/^>\s*/,"")),p++;a.push({type:"blockquote",content:C.join(" ")});continue}if(v.startsWith("|")&&v.endsWith("|")){const C=[];for(;p<c.length&&c[p].trim().startsWith("|")&&c[p].trim().endsWith("|");)C.push(c[p].trim()),p++;if(C.length>=2){const z=C[0].split("|").slice(1,-1).map(M=>M.trim()),F=C.slice(1).filter(M=>!/^[\|\s\-:]+$/.test(M)).map(M=>M.split("|").slice(1,-1).map(b=>b.trim()));a.push({type:"table",headers:z,rows:F});continue}}if(v.startsWith("- ")||v.startsWith("* ")||/^\d+\.\s/.test(v)){const C=[];for(;p<c.length&&(c[p].trim().startsWith("- ")||c[p].trim().startsWith("* ")||/^\d+\.\s/.test(c[p].trim()));)C.push(c[p].trim().replace(/^[-*]|\d+\.\s*/,"").trim()),p++;a.push({type:"list",items:C});continue}const w=[];for(;p<c.length&&c[p].trim()&&!c[p].trim().startsWith("#")&&!c[p].trim().startsWith("```")&&!c[p].trim().startsWith("|")&&!c[p].trim().startsWith(">")&&!c[p].trim().startsWith("- ")&&!c[p].trim().startsWith("* ")&&c[p].trim()!=="---";)w.push(c[p].trim()),p++;a.push({type:"paragraph",content:w.join(" ")})}return a}const cy=({brandTitle:l,version:c,searchQuery:a,onSearchChange:p,onHome:_,onBackToApp:v,backToAppLabel:w="Open App",dark:C,onToggleDark:R})=>u.jsx(Uc,{brandTitle:l,version:c,searchQuery:a,searchPlaceholder:"Search guides, APIs...",onSearchChange:p,onHome:_,onBackToApp:v,backToAppLabel:w,dark:C,onToggleDark:R}),dy="_sidebar_y31ss_1",py={sidebar:dy},fy=({categories:l,activeGuideId:c,onSelectGuide:a})=>{const p=J.useMemo(()=>Object.entries(l).map(([_,v])=>({title:_,items:v.map(({id:w,title:C,slug:R,position:z})=>({id:w,title:C,slug:R,position:z}))})),[l]);return u.jsx($c,{title:"Documentation",sections:p,activeItemId:c,onSelectItem:a,className:py.sidebar})},hy="_toc_1xbyv_1",my="_title_1xbyv_17",gy="_list_1xbyv_22",da={toc:hy,title:my,list:gy},yy=()=>u.jsx(bc,{top:65,children:u.jsxs(Ye,{as:"aside",className:da.toc,children:[u.jsx(me,{as:"span",size:"xs",variant:"secondary",className:da.title,children:"On This Page"}),u.jsxs(Ye,{as:"nav",className:da.list,children:[u.jsx(me,{as:"span",size:"sm",variant:"primary",weight:"semibold",children:"Overview & Setup"}),u.jsx(me,{as:"span",size:"sm",variant:"secondary",children:"Mathematical Equations"}),u.jsx(me,{as:"span",size:"sm",variant:"secondary",children:"Production Examples"}),u.jsx(me,{as:"span",size:"sm",variant:"secondary",children:"API Specifications"})]})]})}),vy="_portal_7nvk9_1",xy="_contentGrid_7nvk9_7",Tc={portal:vy,contentGrid:xy},_y=({guides:l,initialGuideId:c="quickstart",activeGuideId:a,onGuideChange:p,version:_,brandTitle:v="Docs",onBackToApp:w,backToAppLabel:C="Open App",dark:R,onToggleDark:z,className:W=""})=>{const[F,M]=J.useState(c),[b,X]=J.useState(""),q=a??F;J.useEffect(()=>{a===void 0&&M(c)},[a,c]);const N=V=>{a===void 0&&M(V),p==null||p(V)},Z=J.useMemo(()=>l.filter(V=>!V.hidden&&!V.draft),[l]),H=J.useMemo(()=>{const V=b.trim().toLowerCase();return V?Z.filter(ce=>[ce.title,ce.category,ce.summary,ce.content].filter(Boolean).some(Pe=>Pe.toLowerCase().includes(V))):Z},[Z,b]),B=J.useMemo(()=>{const V={};return H.forEach(ce=>{V[ce.category]=[...V[ce.category]||[],ce]}),V},[H]),I=J.useMemo(()=>Z.find(V=>V.id===q)||Z[0],[Z,q]),re=Z.findIndex(V=>V.id===(I==null?void 0:I.id)),fe=re>0?Z[re-1]:void 0,ne=re>=0&&re<Z.length-1?Z[re+1]:void 0;return I?u.jsx(Oc,{variant:"docs",className:ee(Tc.portal,W),contentClassName:Tc.contentGrid,header:u.jsx(cy,{brandTitle:v,version:_,searchQuery:b,onSearchChange:X,onHome:()=>{var V;return N(((V=Z[0])==null?void 0:V.id)||c)},onBackToApp:w,backToAppLabel:C,dark:R,onToggleDark:z}),sidebar:u.jsx(fy,{categories:B,activeGuideId:I.id,onSelectGuide:N}),aside:u.jsx(yy,{}),children:u.jsx(ay,{guide:I,prevGuide:fe,nextGuide:ne,onSelectGuide:N})}):null},Le=l=>({primary:"#3b82f6",primaryHover:"#2563eb",primaryLight:"#eff6ff",primaryLightDark:"#1e3a8a",secondary:"#475569",secondaryHover:"#334155",success:"#10b981",successLight:"#ecfdf5",successLightDark:"#064e3b",warning:"#f59e0b",warningLight:"#fffbeb",warningLightDark:"#78350f",error:"#ef4444",errorHover:"#dc2626",errorLight:"#fef2f2",errorLightDark:"#450a0a",info:"#0ea5e9",infoHover:"#0284c7",infoLight:"#f0f9ff",infoLightDark:"#0c4a6e",...l}),lo=[{id:"phi",name:"Phi Core",colors:Le({primary:"#6366f1",primaryHover:"#4f46e5",secondary:"#06b6d4"}),gradient:"linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",gradientDark:"linear-gradient(135deg, #6366f1 0%, #164e63 100%)"},{id:"phiace",name:"PhiAce",colors:Le({primary:"#0ea5e9",primaryHover:"#0284c7",secondary:"#6366f1"}),gradient:"linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",gradientDark:"linear-gradient(135deg, #0ea5e9 0%, #312e81 100%)"},{id:"phiano",name:"Phiano Phase",colors:Le({primary:"#8b5cf6",primaryHover:"#7c3aed",secondary:"#ec4899"}),gradient:"linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",gradientDark:"linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)"},{id:"phidoc",name:"PhiDoc",colors:Le({primary:"#14b8a6",primaryHover:"#0d9488",secondary:"#0f766e"}),gradient:"linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",gradientDark:"linear-gradient(135deg, #14b8a6 0%, #134e4a 100%)"},{id:"phient",name:"Phient",colors:Le({primary:"#d946ef",primaryHover:"#c026d3",secondary:"#8b5cf6"}),gradient:"linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)",gradientDark:"linear-gradient(135deg, #d946ef 0%, #581c87 100%)"},{id:"phixum",name:"Phixum Options",colors:Le({primary:"#0284c7",primaryHover:"#0369a1",secondary:"#0f172a"}),gradient:"linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",gradientDark:"linear-gradient(135deg, #0284c7 0%, #082f49 100%)"},{id:"edx",name:"edX Paragon",colors:Le({primary:"#00262b",primaryHover:"#00525d",secondary:"#c40026"}),gradient:"linear-gradient(135deg, #00262b 0%, #007382 100%)",gradientDark:"linear-gradient(135deg, #00262b 0%, #001518 100%)"},{id:"foundry",name:"Palantir Foundry",colors:Le({primary:"#3b82f6",primaryHover:"#2563eb"}),gradient:"linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",gradientDark:"linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)"},{id:"blueprint",name:"Blueprint Slate",colors:Le({primary:"#2d72d2",primaryHover:"#1f53a3",secondary:"#5c7080"}),gradient:"linear-gradient(135deg, #2d72d2 0%, #106ba3 100%)",gradientDark:"linear-gradient(135deg, #2d72d2 0%, #182026 100%)"},{id:"emerald",name:"Emerald Foundry",colors:Le({primary:"#10b981",primaryHover:"#059669"}),gradient:"linear-gradient(135deg, #10b981 0%, #34d399 100%)",gradientDark:"linear-gradient(135deg, #10b981 0%, #065f46 100%)"},{id:"midnight",name:"Midnight Indigo",colors:Le({primary:"#4f46e5",primaryHover:"#4338ca"}),gradient:"linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",gradientDark:"linear-gradient(135deg, #4f46e5 0%, #312e81 100%)"},{id:"amber",name:"Amber Gold",colors:Le({primary:"#d97706",primaryHover:"#b45309"}),gradient:"linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",gradientDark:"linear-gradient(135deg, #d97706 0%, #78350f 100%)"},{id:"sapphire",name:"Sapphire Deep",colors:Le({primary:"#2563eb",primaryHover:"#1d4ed8"}),gradient:"linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",gradientDark:"linear-gradient(135deg, #2563eb 0%, #172554 100%)"},{id:"crimson",name:"Scarlet Crimson",colors:Le({primary:"#e11d48",primaryHover:"#be123c"}),gradient:"linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",gradientDark:"linear-gradient(135deg, #e11d48 0%, #881337 100%)"},{id:"amethyst",name:"Amethyst Mystic",colors:Le({primary:"#9333ea",primaryHover:"#7e22ce"}),gradient:"linear-gradient(135deg, #9333ea 0%, #a855f7 100%)",gradientDark:"linear-gradient(135deg, #9333ea 0%, #581c87 100%)"},{id:"obsidian",name:"Obsidian Pure",colors:Le({primary:"#52525b",primaryHover:"#3f3f46",secondary:"#18181b"}),gradient:"linear-gradient(135deg, #52525b 0%, #71717a 100%)",gradientDark:"linear-gradient(135deg, #27272a 0%, #09090b 100%)"},{id:"coral",name:"Sunset Coral",colors:Le({primary:"#f97316",primaryHover:"#ea580c"}),gradient:"linear-gradient(135deg, #f97316 0%, #fb923c 100%)",gradientDark:"linear-gradient(135deg, #f97316 0%, #7c2d12 100%)"},{id:"titanium",name:"Titanium Platinum",colors:Le({primary:"#64748b",primaryHover:"#475569"}),gradient:"linear-gradient(135deg, #64748b 0%, #94a3b8 100%)",gradientDark:"linear-gradient(135deg, #64748b 0%, #1e293b 100%)"},{id:"aurora",name:"Aurora Borealis",colors:Le({primary:"#14b8a6",primaryHover:"#0d9488"}),gradient:"linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",gradientDark:"linear-gradient(135deg, #14b8a6 0%, #134e4a 100%)"},{id:"zenith",name:"Solar Zenith",colors:Le({primary:"#eab308",primaryHover:"#ca8a04"}),gradient:"linear-gradient(135deg, #eab308 0%, #facc15 100%)",gradientDark:"linear-gradient(135deg, #eab308 0%, #713f12 100%)"}];class Vc{constructor(){Object.defineProperty(this,"descriptors",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}register(c,a,p="singleton"){return this.descriptors.set(c,{identifier:c,factory:a,lifetime:p}),this}registerInstance(c,a){return this.descriptors.set(c,{identifier:c,factory:()=>a,lifetime:"singleton",instance:a}),this}resolve(c){const a=this.descriptors.get(c);if(!a){if(typeof c=="function"){const p=new c;return this.registerInstance(c,p),p}throw new Error(`[ServiceContainer] Service not registered: ${String(c)}`)}return a.lifetime==="singleton"?(a.instance||(a.instance=a.factory(this)),a.instance):a.factory(this)}has(c){return this.descriptors.has(c)}async dispose(){for(const c of this.descriptors.values())c.instance&&typeof c.instance.dispose=="function"&&await c.instance.dispose();this.descriptors.clear()}}const Kc=new Vc,wy=J.createContext(Kc),ky=({container:l,children:c})=>{const a=J.useMemo(()=>l||new Vc,[l]);return J.useEffect(()=>()=>{l!==Kc&&a.dispose().catch(console.error)},[a,l]),u.jsx(wy.Provider,{value:a,children:c})},Qc=J.createContext({theme:"system",setTheme:()=>{},themeStyle:"apple",setThemeStyle:()=>{},brandId:"foundry",setBrandId:()=>{},preferences:{theme:"system",themeStyle:"apple",brandId:"foundry"},setPreferences:()=>{},brands:lo,isDark:!1}),Sy=()=>J.useContext(Qc),Py=l=>typeof window>"u"?!1:l==="dark"||l==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches,Cy=(l,c,a)=>{if(typeof document>"u")return;const p=document.documentElement,_=Py(l);p.classList.toggle("dark",_),p.setAttribute("data-theme",_?"dark":"light"),p.setAttribute("data-theme-style",a);const v=lo.find(R=>R.id===c)||lo[0],{colors:w}=v,C=_?v.gradientDark:v.gradient;p.setAttribute("data-brand",v.id),p.style.setProperty("--phi-color-primary",w.primary),p.style.setProperty("--phi-color-primary-hover",w.primaryHover),p.style.setProperty("--phi-color-primary-light",_?w.primaryLightDark:w.primaryLight),p.style.setProperty("--phi-color-primary-dark",_?w.primary:w.primaryHover),p.style.setProperty("--phi-color-secondary",w.secondary),p.style.setProperty("--phi-color-secondary-hover",w.secondaryHover),p.style.setProperty("--phi-color-success",w.success),p.style.setProperty("--phi-color-success-light",_?w.successLightDark:w.successLight),p.style.setProperty("--phi-color-warning",w.warning),p.style.setProperty("--phi-color-warning-light",_?w.warningLightDark:w.warningLight),p.style.setProperty("--phi-color-error",w.error),p.style.setProperty("--phi-color-error-hover",w.errorHover),p.style.setProperty("--phi-color-error-light",_?w.errorLightDark:w.errorLight),p.style.setProperty("--phi-color-info",w.info),p.style.setProperty("--phi-color-info-hover",w.infoHover),p.style.setProperty("--phi-color-info-light",_?w.infoLightDark:w.infoLight),p.style.setProperty("--phi-brand-gradient",C),p.style.setProperty("--phi-gradient-brand",C)},Ey=({children:l,defaultTheme:c="system",defaultThemeStyle:a="apple",defaultBrand:p="foundry",container:_})=>{const[v,w]=J.useState(()=>typeof window<"u"&&localStorage.getItem("phi-theme")||c),[C,R]=J.useState(()=>typeof window<"u"&&localStorage.getItem("phi-style")||a),[z,W]=J.useState(()=>typeof window<"u"&&localStorage.getItem("phi-brand")||p),[F,M]=J.useState(()=>typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1),b=v==="dark"||v==="system"&&F;J.useEffect(()=>{const B=window.matchMedia("(prefers-color-scheme: dark)"),I=re=>M(re.matches);return M(B.matches),B.addEventListener("change",I),()=>B.removeEventListener("change",I)},[]),J.useEffect(()=>{Cy(v,z,C)},[v,z,C,F]);const X=B=>{w(B),localStorage.setItem("phi-theme",B)},q=B=>{R(B),localStorage.setItem("phi-style",B)},N=B=>{W(B),localStorage.setItem("phi-brand",B)},Z=B=>{B.theme&&X(B.theme),B.themeStyle&&q(B.themeStyle),B.brandId&&N(B.brandId)},H=J.useMemo(()=>({theme:v,themeStyle:C,brandId:z}),[v,C,z]);return u.jsx(Qc.Provider,{value:{theme:v,setTheme:X,themeStyle:C,setThemeStyle:q,brandId:z,setBrandId:N,preferences:H,setPreferences:Z,brands:lo,isDark:b},children:u.jsx(ky,{container:_,children:l})})},jy={book:fa,code:wf,grid:Tf,layers:Rf,palette:Af,rocket:Of,search:Mc,settings:$f,shield:Wf,sparkles:Hf};function Ry(l){const c=new Map;for(const a of l)c.has(a.category)||c.set(a.category,a);return[...c.entries()].slice(0,6).map(([a,p])=>({title:a,description:p.summary||`Read the ${a} documentation.`,href:p.slug,icon:"book"}))}function Ny({config:l,items:c,onNavigate:a}){var R,z,W,F,M;const p=l.home||{},_=c[0],v=(R=p.features)!=null&&R.length?p.features:Ry(c),w=(z=p.actions)!=null&&z.length?p.actions:[{label:"Read the documentation",href:(_==null?void 0:_.slug)||"/docs",variant:"primary"}],C=(W=l.nav)!=null&&W.length?l.nav:[{label:"Docs",href:(_==null?void 0:_.slug)||"/docs"}];return u.jsxs(ym,{gap:0,header:u.jsxs(ha,{sticky:((F=l.layout)==null?void 0:F.navbarSticky)??!0,variant:((M=l.layout)==null?void 0:M.navbarVariant)||"default",height:65,children:[u.jsxs(er,{align:"start",children:[u.jsx(ao,{onClick:()=>a("/"),children:l.title}),l.version&&u.jsx(so,{variant:"secondary",children:l.version})]}),u.jsx(er,{align:"end",children:C.map(b=>u.jsx(ao,{onClick:()=>a(b.href,b.external),children:b.label},b.href))})]}),footer:u.jsx(Hr,{size:"lg",paddingY:4,children:u.jsxs(me,{size:"sm",color:"text-muted",align:"center",children:[l.title," documentation powered by PhiDoc and puijs."]})}),children:[u.jsx(Ye,{background:"brand-gradient",color:"text-inverse",align:"center",paddingY:20,children:u.jsx(Hr,{size:"lg",children:u.jsxs(we,{direction:"column",align:"center",gap:4,children:[l.version&&u.jsx(so,{variant:"secondary",children:l.version}),u.jsx(Et,{level:1,size:"3xl",align:"center",children:p.title||l.title}),u.jsx(me,{size:"lg",align:"center",maxWidth:"720px",opacity:.9,children:p.tagline||l.description}),u.jsx(we,{direction:"row",justify:"center",align:"center",gap:3,wrap:!0,marginTop:4,children:w.map(b=>u.jsx(ut,{variant:b.variant||"primary",size:"lg",onClick:()=>a(b.href,b.external),children:b.label},b.href))})]})})}),u.jsx(Ye,{background:"gradient-main",paddingY:16,children:u.jsx(Hr,{size:"lg",children:u.jsx(Ac,{columns:{xs:1,md:2,xl:3},gap:4,children:v.map(b=>u.jsxs(Kr,{hoverable:!!b.href,onClick:b.href?()=>a(b.href):void 0,children:[u.jsx(ma,{children:u.jsxs(we,{direction:"row",align:"center",gap:3,children:[u.jsx(Ic,{icon:jy[b.icon||"book"]||fa,size:"xl"}),u.jsx(Et,{level:3,size:"md",children:b.title})]})}),u.jsx(ga,{children:u.jsx(me,{size:"sm",color:"text-secondary",children:b.description})})]},b.title))})})})]})}function oo(l){return l.replace(/\/+$/,"")||"/"}function Dc(){return typeof window>"u"?"/":oo(window.location.pathname)}function Ty({data:l}){var X,q,N,Z;const{isDark:c,setTheme:a}=Sy(),[p,_]=J.useState(Dc),v=`/${(((X=l.config.docs)==null?void 0:X.routeBasePath)||"docs").replace(/^\/+|\/+$/g,"")}`,w=`/${(((q=l.config.blog)==null?void 0:q.routeBasePath)||"blog").replace(/^\/+|\/+$/g,"")}`,C=J.useMemo(()=>{const H=l.items.filter(I=>!I.hidden&&!I.draft);if(!l.sidebars.length)return H;const B=new Map(H.map(I=>[I.id,I]));return l.sidebars.flatMap(I=>I.items.map(re=>B.get(re.id))).filter(I=>!!I)},[l.items,l.sidebars]),R=J.useMemo(()=>{const H=l.blogItems.filter(I=>!I.hidden&&!I.draft);if(!l.blogSidebars.length)return H;const B=new Map(H.map(I=>[I.id,I]));return l.blogSidebars.flatMap(I=>I.items.map(re=>B.get(re.id))).filter(I=>!!I)},[l.blogItems,l.blogSidebars]);J.useEffect(()=>{const H=()=>_(Dc());return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[]);const z=J.useCallback((H,B)=>{if(B||/^https?:\/\//.test(H)){window.location.assign(H);return}const I=oo(H);window.history.pushState({},"",I),_(I),window.scrollTo({top:0})},[]),W=p===v||p.startsWith(`${v}/`),F=p===w||p.startsWith(`${w}/`),M=W?C.find(H=>oo(H.slug)===p)||C[0]:void 0,b=F?R.find(H=>oo(H.slug)===p)||R[0]:void 0;return F&&R.length?u.jsx(Pg,{posts:R,initialPostId:(b==null?void 0:b.id)||((N=R[0])==null?void 0:N.id)||"",activePostId:b==null?void 0:b.id,onPostChange:H=>{const B=R.find(I=>I.id===H);B&&z(B.slug)},brandTitle:l.config.title,version:l.config.version,dark:c,onToggleDark:()=>a(c?"light":"dark")}):W?u.jsx(_y,{guides:C,initialGuideId:(M==null?void 0:M.id)||((Z=C[0])==null?void 0:Z.id)||"",activeGuideId:M==null?void 0:M.id,onGuideChange:H=>{const B=C.find(I=>I.id===H);B&&z(B.slug)},version:l.config.version||"",brandTitle:l.config.title,onBackToApp:()=>z("/"),backToAppLabel:"Home",dark:c,onToggleDark:()=>a(c?"light":"dark")}):u.jsx(Ny,{config:l.config,items:C,onNavigate:z})}function Dy({data:l}){return u.jsx(Ey,{defaultTheme:"system",defaultThemeStyle:"apple",defaultBrand:l.config.brandId,children:u.jsx(Ty,{data:l})})}const zy=[{id:"phi",name:"Phi Core",color:"#6366f1",accent:"#06b6d4",blurb:"Base mark: left stem through the horizontal U bowl with a cyan core dot."},{id:"puijs",name:"PUI.js",color:"#0ea5e9",accent:"#6366f1",blurb:"Component library: chevron accent inside the bowl signals code and composition."},{id:"phidoc",name:"PhiDoc",color:"#14b8a6",accent:"#0f766e",blurb:"Documentation engine: two text lines sit inside the bowl like a page."},{id:"phixum",name:"Phixum",color:"#0284c7",accent:"#0f172a",blurb:"Options engine: an x-mark accent for strikes, crosses, and payoff math."},{id:"phiano",name:"Phiano",color:"#8b5cf6",accent:"#ec4899",blurb:"Phase instrument: a sine wave oscillates through the bowl."},{id:"phient",name:"Phient",color:"#d946ef",accent:"#8b5cf6",blurb:"Agentic ecosystem: three connected nodes form a minimal agent mesh."}],Gc="phidoc.icon-comments";function Ly(){try{return JSON.parse(window.localStorage.getItem(Gc)||"{}")}catch{return{}}}function My(){const[l,c]=J.useState(()=>typeof window>"u"?{}:Ly()),[a,p]=J.useState(null);J.useEffect(()=>{window.localStorage.setItem(Gc,JSON.stringify(l))},[l]);const _=v=>{var C;const w=`/icons/${v}.svg`;(C=navigator.clipboard)==null||C.writeText(w).then(()=>{p(v),setTimeout(()=>p(R=>R===v?null:R),1200)})};return u.jsx("div",{style:{minHeight:"100vh",background:"#0b1020",color:"#e5e7eb",fontFamily:"Inter, system-ui, sans-serif",padding:"48px 24px"},children:u.jsxs("div",{style:{maxWidth:1080,margin:"0 auto"},children:[u.jsxs("header",{style:{marginBottom:40},children:[u.jsx("h1",{style:{fontSize:32,fontWeight:700,letterSpacing:"-0.02em",margin:0},children:"Product Icon System"}),u.jsx("p",{style:{color:"#9ca3af",marginTop:8,maxWidth:640},children:"One shared glyph — a left stem through a horizontal U bowl (the phi mark) — with a product-specific accent. Review each mark and leave a comment; notes are stored locally in your browser."})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:20},children:zy.map(v=>u.jsxs("section",{style:{background:"#111832",border:"1px solid #1f2a4d",borderRadius:12,padding:20},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[u.jsx("img",{src:`/icons/${v.id}.svg`,alt:`${v.name} icon`,width:64,height:64}),u.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:12},children:[u.jsx("img",{src:`/icons/${v.id}.svg`,alt:"",width:32,height:32}),u.jsx("img",{src:`/icons/${v.id}.svg`,alt:"",width:16,height:16})]})]}),u.jsx("h2",{style:{fontSize:18,fontWeight:600,margin:"16px 0 4px",color:v.color},children:v.name}),u.jsx("p",{style:{fontSize:14,color:"#9ca3af",margin:"0 0 12px",lineHeight:1.5},children:v.blurb}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:12,color:"#6b7280",marginBottom:12},children:[u.jsx("span",{style:{display:"inline-block",width:12,height:12,borderRadius:3,background:v.color}}),u.jsx("code",{children:v.color}),u.jsx("span",{style:{display:"inline-block",width:12,height:12,borderRadius:3,background:v.accent}}),u.jsx("code",{children:v.accent}),u.jsx("button",{onClick:()=>_(v.id),style:{marginLeft:"auto",background:"none",border:"1px solid #1f2a4d",color:"#9ca3af",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:a===v.id?"Copied":"Copy path"})]}),u.jsx("textarea",{value:l[v.id]||"",onChange:w=>c(C=>({...C,[v.id]:w.target.value})),placeholder:`Comment on the ${v.name} mark...`,rows:2,style:{width:"100%",boxSizing:"border-box",background:"#0b1020",border:"1px solid #1f2a4d",borderRadius:8,color:"#e5e7eb",padding:"8px 10px",fontSize:13,resize:"vertical"}})]},v.id))})]})})}const Iy=window.location.pathname.replace(/\/+$/,"")==="/icons";nf.createRoot(document.getElementById("root")).render(u.jsx(jt.StrictMode,{children:Iy?u.jsx(My,{}):u.jsx(Dy,{data:tf})}));
