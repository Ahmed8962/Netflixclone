(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Zh={exports:{}},ga={},ed={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function uE(){if(Um)return Ae;Um=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,W={};function z(x,$,de){this.props=x,this.context=$,this.refs=W,this.updater=de||F}z.prototype.isReactComponent={},z.prototype.setState=function(x,$){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,$,"setState")},z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function G(){}G.prototype=z.prototype;function ne(x,$,de){this.props=x,this.context=$,this.refs=W,this.updater=de||F}var J=ne.prototype=new G;J.constructor=ne,U(J,z.prototype),J.isPureReactComponent=!0;var he=Array.isArray,we=Object.prototype.hasOwnProperty,ve={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(x,$,de){var Ie,Te={},ke=null,xe=null;if($!=null)for(Ie in $.ref!==void 0&&(xe=$.ref),$.key!==void 0&&(ke=""+$.key),$)we.call($,Ie)&&!P.hasOwnProperty(Ie)&&(Te[Ie]=$[Ie]);var Le=arguments.length-2;if(Le===1)Te.children=de;else if(1<Le){for(var je=Array(Le),ft=0;ft<Le;ft++)je[ft]=arguments[ft+2];Te.children=je}if(x&&x.defaultProps)for(Ie in Le=x.defaultProps,Le)Te[Ie]===void 0&&(Te[Ie]=Le[Ie]);return{$$typeof:r,type:x,key:ke,ref:xe,props:Te,_owner:ve.current}}function A(x,$){return{$$typeof:r,type:x.type,key:$,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function D(x){var $={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(de){return $[de]})}var L=/\/+/g;function R(x,$){return typeof x=="object"&&x!==null&&x.key!=null?D(""+x.key):$.toString(36)}function nt(x,$,de,Ie,Te){var ke=typeof x;(ke==="undefined"||ke==="boolean")&&(x=null);var xe=!1;if(x===null)xe=!0;else switch(ke){case"string":case"number":xe=!0;break;case"object":switch(x.$$typeof){case r:case e:xe=!0}}if(xe)return xe=x,Te=Te(xe),x=Ie===""?"."+R(xe,0):Ie,he(Te)?(de="",x!=null&&(de=x.replace(L,"$&/")+"/"),nt(Te,$,de,"",function(ft){return ft})):Te!=null&&(k(Te)&&(Te=A(Te,de+(!Te.key||xe&&xe.key===Te.key?"":(""+Te.key).replace(L,"$&/")+"/")+x)),$.push(Te)),1;if(xe=0,Ie=Ie===""?".":Ie+":",he(x))for(var Le=0;Le<x.length;Le++){ke=x[Le];var je=Ie+R(ke,Le);xe+=nt(ke,$,de,je,Te)}else if(je=N(x),typeof je=="function")for(x=je.call(x),Le=0;!(ke=x.next()).done;)ke=ke.value,je=Ie+R(ke,Le++),xe+=nt(ke,$,de,je,Te);else if(ke==="object")throw $=String(x),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return xe}function Ot(x,$,de){if(x==null)return x;var Ie=[],Te=0;return nt(x,Ie,"","",function(ke){return $.call(de,ke,Te++)}),Ie}function Dt(x){if(x._status===-1){var $=x._result;$=$(),$.then(function(de){(x._status===0||x._status===-1)&&(x._status=1,x._result=de)},function(de){(x._status===0||x._status===-1)&&(x._status=2,x._result=de)}),x._status===-1&&(x._status=0,x._result=$)}if(x._status===1)return x._result.default;throw x._result}var Ue={current:null},re={transition:null},fe={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:re,ReactCurrentOwner:ve};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ot,forEach:function(x,$,de){Ot(x,function(){$.apply(this,arguments)},de)},count:function(x){var $=0;return Ot(x,function(){$++}),$},toArray:function(x){return Ot(x,function($){return $})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ae.Component=z,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ne,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Ae.act=se,Ae.cloneElement=function(x,$,de){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ie=U({},x.props),Te=x.key,ke=x.ref,xe=x._owner;if($!=null){if($.ref!==void 0&&(ke=$.ref,xe=ve.current),$.key!==void 0&&(Te=""+$.key),x.type&&x.type.defaultProps)var Le=x.type.defaultProps;for(je in $)we.call($,je)&&!P.hasOwnProperty(je)&&(Ie[je]=$[je]===void 0&&Le!==void 0?Le[je]:$[je])}var je=arguments.length-2;if(je===1)Ie.children=de;else if(1<je){Le=Array(je);for(var ft=0;ft<je;ft++)Le[ft]=arguments[ft+2];Ie.children=Le}return{$$typeof:r,type:x.type,key:Te,ref:ke,props:Ie,_owner:xe}},Ae.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},Ae.createElement=I,Ae.createFactory=function(x){var $=I.bind(null,x);return $.type=x,$},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(x){return{$$typeof:p,render:x}},Ae.isValidElement=k,Ae.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:Dt}},Ae.memo=function(x,$){return{$$typeof:_,type:x,compare:$===void 0?null:$}},Ae.startTransition=function(x){var $=re.transition;re.transition={};try{x()}finally{re.transition=$}},Ae.unstable_act=se,Ae.useCallback=function(x,$){return Ue.current.useCallback(x,$)},Ae.useContext=function(x){return Ue.current.useContext(x)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(x){return Ue.current.useDeferredValue(x)},Ae.useEffect=function(x,$){return Ue.current.useEffect(x,$)},Ae.useId=function(){return Ue.current.useId()},Ae.useImperativeHandle=function(x,$,de){return Ue.current.useImperativeHandle(x,$,de)},Ae.useInsertionEffect=function(x,$){return Ue.current.useInsertionEffect(x,$)},Ae.useLayoutEffect=function(x,$){return Ue.current.useLayoutEffect(x,$)},Ae.useMemo=function(x,$){return Ue.current.useMemo(x,$)},Ae.useReducer=function(x,$,de){return Ue.current.useReducer(x,$,de)},Ae.useRef=function(x){return Ue.current.useRef(x)},Ae.useState=function(x){return Ue.current.useState(x)},Ae.useSyncExternalStore=function(x,$,de){return Ue.current.useSyncExternalStore(x,$,de)},Ae.useTransition=function(){return Ue.current.useTransition()},Ae.version="18.3.1",Ae}var Fm;function Wd(){return Fm||(Fm=1,ed.exports=uE()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function cE(){if(jm)return ga;jm=1;var r=Wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var E,S={},N=null,F=null;_!==void 0&&(N=""+_),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(S[E]=g[E]);if(p&&p.defaultProps)for(E in g=p.defaultProps,g)S[E]===void 0&&(S[E]=g[E]);return{$$typeof:e,type:p,key:N,ref:F,props:S,_owner:o.current}}return ga.Fragment=t,ga.jsx=h,ga.jsxs=h,ga}var zm;function hE(){return zm||(zm=1,Zh.exports=cE()),Zh.exports}var Q=hE(),H=Wd(),mu={},td={exports:{}},Yt={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function dE(){return Bm||(Bm=1,function(r){function e(re,fe){var se=re.length;re.push(fe);e:for(;0<se;){var x=se-1>>>1,$=re[x];if(0<o($,fe))re[x]=fe,re[se]=$,se=x;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var fe=re[0],se=re.pop();if(se!==fe){re[0]=se;e:for(var x=0,$=re.length,de=$>>>1;x<de;){var Ie=2*(x+1)-1,Te=re[Ie],ke=Ie+1,xe=re[ke];if(0>o(Te,se))ke<$&&0>o(xe,Te)?(re[x]=xe,re[ke]=se,x=ke):(re[x]=Te,re[Ie]=se,x=Ie);else if(ke<$&&0>o(xe,se))re[x]=xe,re[ke]=se,x=ke;else break e}}return fe}function o(re,fe){var se=re.sortIndex-fe.sortIndex;return se!==0?se:re.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],E=1,S=null,N=3,F=!1,U=!1,W=!1,z=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(re){for(var fe=t(_);fe!==null;){if(fe.callback===null)s(_);else if(fe.startTime<=re)s(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function he(re){if(W=!1,J(re),!U)if(t(g)!==null)U=!0,Dt(we);else{var fe=t(_);fe!==null&&Ue(he,fe.startTime-re)}}function we(re,fe){U=!1,W&&(W=!1,G(I),I=-1),F=!0;var se=N;try{for(J(fe),S=t(g);S!==null&&(!(S.expirationTime>fe)||re&&!D());){var x=S.callback;if(typeof x=="function"){S.callback=null,N=S.priorityLevel;var $=x(S.expirationTime<=fe);fe=r.unstable_now(),typeof $=="function"?S.callback=$:S===t(g)&&s(g),J(fe)}else s(g);S=t(g)}if(S!==null)var de=!0;else{var Ie=t(_);Ie!==null&&Ue(he,Ie.startTime-fe),de=!1}return de}finally{S=null,N=se,F=!1}}var ve=!1,P=null,I=-1,A=5,k=-1;function D(){return!(r.unstable_now()-k<A)}function L(){if(P!==null){var re=r.unstable_now();k=re;var fe=!0;try{fe=P(!0,re)}finally{fe?R():(ve=!1,P=null)}}else ve=!1}var R;if(typeof ne=="function")R=function(){ne(L)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Ot=nt.port2;nt.port1.onmessage=L,R=function(){Ot.postMessage(null)}}else R=function(){z(L,0)};function Dt(re){P=re,ve||(ve=!0,R())}function Ue(re,fe){I=z(function(){re(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){U||F||(U=!0,Dt(we))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(re){switch(N){case 1:case 2:case 3:var fe=3;break;default:fe=N}var se=N;N=fe;try{return re()}finally{N=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=N;N=re;try{return fe()}finally{N=se}},r.unstable_scheduleCallback=function(re,fe,se){var x=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?x+se:x):se=x,re){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=se+$,re={id:E++,callback:fe,priorityLevel:re,startTime:se,expirationTime:$,sortIndex:-1},se>x?(re.sortIndex=se,e(_,re),t(g)===null&&re===t(_)&&(W?(G(I),I=-1):W=!0,Ue(he,se-x))):(re.sortIndex=$,e(g,re),U||F||(U=!0,Dt(we))),re},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(re){var fe=N;return function(){var se=N;N=fe;try{return re.apply(this,arguments)}finally{N=se}}}}(rd)),rd}var Hm;function fE(){return Hm||(Hm=1,nd.exports=dE()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function pE(){if(Wm)return Yt;Wm=1;var r=Wd(),e=fE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function N(n){return g.call(S,n)?!0:g.call(E,n)?!1:_.test(n)?S[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function U(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function W(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new W(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new W(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new W(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new W(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new W(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new W(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new W(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new W(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new W(n,5,!1,n.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function ne(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(G,ne);z[i]=new W(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(G,ne);z[i]=new W(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(G,ne);z[i]=new W(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new W(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new W(n,1,!1,n.toLowerCase(),null,!0,!0)});function J(n,i,a,c){var d=z.hasOwnProperty(i)?z[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(U(i,a,d,c)&&(a=null),c||d===null?N(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var he=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),ve=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),re=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,x;function $(n){if(x===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+n}var de=!1;function Ie(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,T=m.length-1;1<=v&&0<=T&&d[v]!==m[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==m[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==m[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Te(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case ve:return"Portal";case A:return"Profiler";case I:return"StrictMode";case R:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ot:return i=n.displayName||null,i!==null?i:ke(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return ke(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ft(n){var i=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ir(n){n._valueTracker||(n._valueTracker=ft(n))}function ds(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ii(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function fs(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Io(n,i){i=i.checked,i!=null&&J(n,"checked",i,!1)}function To(n,i){Io(n,i);var a=Le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ps(n,i.type,a):i.hasOwnProperty("defaultValue")&&ps(n,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function el(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ps(n,i,a){(i!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var sr=Array.isArray;function or(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ao(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ms(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(sr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Le(a)}}function gs(n,i){var a=Le(i.value),c=Le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function So(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ar,Ro=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ar.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ai=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(n){Ai.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ti[i]=Ti[n]})});function Co(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ti.hasOwnProperty(n)&&Ti[n]?(""+i).trim():i+"px"}function ko(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Co(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Po=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(n,i){if(i){if(Po[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Oo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function ys(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _s=null,ln=null,Un=null;function vs(n){if(n=ta(n)){if(typeof _s!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Nl(i),_s(n.stateNode,n.type,i))}}function Fn(n){ln?Un?Un.push(n):Un=[n]:ln=n}function Do(){if(ln){var n=ln,i=Un;if(Un=ln=null,vs(n),i)for(n=0;n<i.length;n++)vs(i[n])}}function Ri(n,i){return n(i)}function xo(){}var lr=!1;function Lo(n,i,a){if(lr)return n(i,a);lr=!0;try{return Ri(n,i,a)}finally{lr=!1,(ln!==null||Un!==null)&&(xo(),Do())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Nl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ws=!1;if(p)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ws=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ws=!1}function Ci(n,i,a,c,d,m,v,T,C){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(X){this.onError(X)}}var ki=!1,Es=null,vn=!1,Mo=null,Cc={onError:function(n){ki=!0,Es=n}};function Is(n,i,a,c,d,m,v,T,C){ki=!1,Es=null,Ci.apply(Cc,arguments)}function tl(n,i,a,c,d,m,v,T,C){if(Is.apply(this,arguments),ki){if(ki){var j=Es;ki=!1,Es=null}else throw Error(t(198));vn||(vn=!0,Mo=j)}}function wn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Pi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function En(n){if(wn(n)!==n)throw Error(t(188))}function nl(n){var i=n.alternate;if(!i){if(i=wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return En(d),n;if(m===c)return En(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=m;break}if(T===c){v=!0,c=d,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,c=d;break}if(T===c){v=!0,c=m,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Vo(n){return n=nl(n),n!==null?Ts(n):null}function Ts(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ts(n);if(i!==null)return i;n=n.sibling}return null}var As=e.unstable_scheduleCallback,bo=e.unstable_cancelCallback,rl=e.unstable_shouldYield,kc=e.unstable_requestPaint,ze=e.unstable_now,il=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,sl=e.unstable_IdlePriority,Oi=null,en=null;function ol(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:ll,Fo=Math.log,al=Math.LN2;function ll(n){return n>>>=0,n===0?32:31-(Fo(n)/al|0)|0}var Ss=64,Rs=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Di(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Mr(T):(m&=v,m!==0&&(c=Mr(m)))}else v=a&~d,v!==0?c=Mr(v):m!==0&&(c=Mr(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-jt(i),d=1<<a,c|=n[a],i&=~d;return c}function Pc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-jt(m),T=1<<v,C=d[v];C===-1?(!(T&a)||T&c)&&(d[v]=Pc(T,i)):C<=i&&(n.expiredLanes|=T),m&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=Ss;return Ss<<=1,!(Ss&4194240)&&(Ss=64),n}function Vr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function br(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-jt(i),n[i]=a}function Fe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Ur(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ce=0;function Fr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ul,Cs,cl,hl,dl,jo=!1,jn=[],Tt=null,In=null,Tn=null,jr=new Map,cn=new Map,zn=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":jr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(i.pointerId)}}function Wt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ta(i),i!==null&&Cs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Oc(n,i,a,c,d){switch(i){case"focusin":return Tt=Wt(Tt,n,i,a,c,d),!0;case"dragenter":return In=Wt(In,n,i,a,c,d),!0;case"mouseover":return Tn=Wt(Tn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return jr.set(m,Wt(jr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,cn.set(m,Wt(cn.get(m)||null,n,i,a,c,d)),!0}return!1}function pl(n){var i=Ui(n.target);if(i!==null){var a=wn(i);if(a!==null){if(i=a.tag,i===13){if(i=Pi(a),i!==null){n.blockedOn=i,dl(n.priority,function(){cl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Si=c,a.target.dispatchEvent(c),Si=null}else return i=ta(a),i!==null&&Cs(i),n.blockedOn=a,!1;i.shift()}return!0}function Li(n,i,a){cr(n)&&a.delete(i)}function ml(){jo=!1,Tt!==null&&cr(Tt)&&(Tt=null),In!==null&&cr(In)&&(In=null),Tn!==null&&cr(Tn)&&(Tn=null),jr.forEach(Li),cn.forEach(Li)}function An(n,i){n.blockedOn===i&&(n.blockedOn=null,jo||(jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ml)))}function Sn(n){function i(d){return An(d,n)}if(0<jn.length){An(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&An(Tt,n),In!==null&&An(In,n),Tn!==null&&An(Tn,n),jr.forEach(i),cn.forEach(i),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)pl(a),a.blockedOn===null&&zn.shift()}var hr=he.ReactCurrentBatchConfig,zr=!0;function Ke(n,i,a,c){var d=Ce,m=hr.transition;hr.transition=null;try{Ce=1,zo(n,i,a,c)}finally{Ce=d,hr.transition=m}}function Dc(n,i,a,c){var d=Ce,m=hr.transition;hr.transition=null;try{Ce=4,zo(n,i,a,c)}finally{Ce=d,hr.transition=m}}function zo(n,i,a,c){if(zr){var d=ks(n,i,a,c);if(d===null)Hc(n,i,c,Mi,a),fl(n,c);else if(Oc(d,n,i,a,c))c.stopPropagation();else if(fl(n,c),i&4&&-1<Nc.indexOf(n)){for(;d!==null;){var m=ta(d);if(m!==null&&ul(m),m=ks(n,i,a,c),m===null&&Hc(n,i,c,Mi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Hc(n,i,c,null,a)}}var Mi=null;function ks(n,i,a,c){if(Mi=null,n=ys(c),n=Ui(n),n!==null)if(i=wn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Pi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Mi=n,null}function Bo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(il()){case Ni:return 1;case Lr:return 4;case un:case Uo:return 16;case sl:return 536870912;default:return 16}default:return 16}}var nn=null,Ps=null,$t=null;function Ho(){if($t)return $t;var n,i=Ps,a=i.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function Ns(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Wo(){return!1}function At(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bn:Wo,this.isPropagationStopped=Wo,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),i}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=At(Rn),Hn=se({},Rn,{view:0,detail:0}),xc=At(Hn),Ds,dr,Br,Vi=se({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(Ds=n.screenX-Br.screenX,dr=n.screenY-Br.screenY):dr=Ds=0,Br=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:dr}}),xs=At(Vi),$o=se({},Vi,{dataTransfer:0}),gl=At($o),Ls=se({},Hn,{relatedTarget:0}),Ms=At(Ls),yl=se({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),fr=At(yl),_l=se({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vl=At(_l),wl=se({},Rn,{data:0}),Go=At(wl),Vs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},El={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=El[n])?!!i[n]:!1}function Wn(){return Il}var l=se({},Hn,{key:function(n){if(n.key){var i=Vs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ns(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(n){return n.type==="keypress"?Ns(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ns(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(l),y=se({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(y),M=se({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),B=At(M),te=se({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=At(te),ct=se({},Vi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pe=At(ct),pt=[9,13,27,32],st=p&&"CompositionEvent"in window,hn=null;p&&"documentMode"in document&&(hn=document.documentMode);var rn=p&&"TextEvent"in window&&!hn,bi=p&&(!st||hn&&8<hn&&11>=hn),bs=" ",Df=!1;function xf(n,i){switch(n){case"keyup":return pt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function aw(n,i){switch(n){case"compositionend":return Lf(i);case"keypress":return i.which!==32?null:(Df=!0,bs);case"textInput":return n=i.data,n===bs&&Df?null:n;default:return null}}function lw(n,i){if(Us)return n==="compositionend"||!st&&xf(n,i)?(n=Ho(),$t=Ps=nn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bi&&i.locale!=="ko"?null:i.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!uw[n.type]:i==="textarea"}function Vf(n,i,a,c){Fn(c),i=Cl(i,"onChange"),0<i.length&&(a=new Os("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ko=null,qo=null;function cw(n){ep(n,0)}function Tl(n){var i=Hs(n);if(ds(i))return n}function hw(n,i){if(n==="change")return i}var bf=!1;if(p){var Lc;if(p){var Mc="oninput"in document;if(!Mc){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),Mc=typeof Uf.oninput=="function"}Lc=Mc}else Lc=!1;bf=Lc&&(!document.documentMode||9<document.documentMode)}function Ff(){Ko&&(Ko.detachEvent("onpropertychange",jf),qo=Ko=null)}function jf(n){if(n.propertyName==="value"&&Tl(qo)){var i=[];Vf(i,qo,n,ys(n)),Lo(cw,i)}}function dw(n,i,a){n==="focusin"?(Ff(),Ko=i,qo=a,Ko.attachEvent("onpropertychange",jf)):n==="focusout"&&Ff()}function fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(qo)}function pw(n,i){if(n==="click")return Tl(i)}function mw(n,i){if(n==="input"||n==="change")return Tl(i)}function gw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Cn=typeof Object.is=="function"?Object.is:gw;function Qo(n,i){if(Cn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Cn(n[d],i[d]))return!1}return!0}function zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bf(n,i){var a=zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zf(a)}}function Hf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Wf(){for(var n=window,i=Dr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Dr(n.document)}return i}function Vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function yw(n){var i=Wf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hf(a.ownerDocument.documentElement,a)){if(c!==null&&Vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Bf(a,m);var v=Bf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _w=p&&"documentMode"in document&&11>=document.documentMode,Fs=null,bc=null,Xo=null,Uc=!1;function $f(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Fs==null||Fs!==Dr(c)||(c=Fs,"selectionStart"in c&&Vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xo&&Qo(Xo,c)||(Xo=c,c=Cl(bc,"onSelect"),0<c.length&&(i=new Os("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Fs)))}function Al(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var js={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},Fc={},Gf={};p&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Sl(n){if(Fc[n])return Fc[n];if(!js[n])return n;var i=js[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gf)return Fc[n]=i[a];return n}var Kf=Sl("animationend"),qf=Sl("animationiteration"),Qf=Sl("animationstart"),Xf=Sl("transitionend"),Yf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,i){Yf.set(n,i),u(i,[n])}for(var jc=0;jc<Jf.length;jc++){var zc=Jf[jc],vw=zc.toLowerCase(),ww=zc[0].toUpperCase()+zc.slice(1);Hr(vw,"on"+ww)}Hr(Kf,"onAnimationEnd"),Hr(qf,"onAnimationIteration"),Hr(Qf,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Xf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Zf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,tl(c,i,void 0,n),n.currentTarget=null}function ep(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,j=T.currentTarget;if(T=T.listener,C!==m&&d.isPropagationStopped())break e;Zf(d,T,j),m=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,j=T.currentTarget,T=T.listener,C!==m&&d.isPropagationStopped())break e;Zf(d,T,j),m=C}}}if(vn)throw n=Mo,vn=!1,Mo=null,n}function We(n,i){var a=i[Qc];a===void 0&&(a=i[Qc]=new Set);var c=n+"__bubble";a.has(c)||(tp(i,n,2,!1),a.add(c))}function Bc(n,i,a){var c=0;i&&(c|=4),tp(a,n,c,i)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Jo(n){if(!n[Rl]){n[Rl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ew.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Rl]||(i[Rl]=!0,Bc("selectionchange",!1,i))}}function tp(n,i,a,c){switch(Bo(i)){case 1:var d=Ke;break;case 4:d=Dc;break;default:d=zo}a=d.bind(null,i,a,n),d=void 0,!ws||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Hc(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Ui(T),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}T=T.parentNode}}c=c.return}Lo(function(){var j=m,X=ys(a),Y=[];e:{var q=Yf.get(n);if(q!==void 0){var ie=Os,ae=n;switch(n){case"keypress":if(Ns(a)===0)break e;case"keydown":case"keyup":ie=f;break;case"focusin":ae="focus",ie=Ms;break;case"focusout":ae="blur",ie=Ms;break;case"beforeblur":case"afterblur":ie=Ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=B;break;case Kf:case qf:case Qf:ie=fr;break;case Xf:ie=Ve;break;case"scroll":ie=xc;break;case"wheel":ie=Pe;break;case"copy":case"cut":case"paste":ie=vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var le=(i&4)!==0,it=!le&&n==="scroll",V=le?q!==null?q+"Capture":null:q;le=[];for(var O=j,b;O!==null;){b=O;var ee=b.stateNode;if(b.tag===5&&ee!==null&&(b=ee,V!==null&&(ee=rt(O,V),ee!=null&&le.push(Zo(O,ee,b)))),it)break;O=O.return}0<le.length&&(q=new ie(q,ae,null,a,X),Y.push({event:q,listeners:le}))}}if(!(i&7)){e:{if(q=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",q&&a!==Si&&(ae=a.relatedTarget||a.fromElement)&&(Ui(ae)||ae[pr]))break e;if((ie||q)&&(q=X.window===X?X:(q=X.ownerDocument)?q.defaultView||q.parentWindow:window,ie?(ae=a.relatedTarget||a.toElement,ie=j,ae=ae?Ui(ae):null,ae!==null&&(it=wn(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ie=null,ae=j),ie!==ae)){if(le=xs,ee="onMouseLeave",V="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(le=w,ee="onPointerLeave",V="onPointerEnter",O="pointer"),it=ie==null?q:Hs(ie),b=ae==null?q:Hs(ae),q=new le(ee,O+"leave",ie,a,X),q.target=it,q.relatedTarget=b,ee=null,Ui(X)===j&&(le=new le(V,O+"enter",ae,a,X),le.target=b,le.relatedTarget=it,ee=le),it=ee,ie&&ae)t:{for(le=ie,V=ae,O=0,b=le;b;b=zs(b))O++;for(b=0,ee=V;ee;ee=zs(ee))b++;for(;0<O-b;)le=zs(le),O--;for(;0<b-O;)V=zs(V),b--;for(;O--;){if(le===V||V!==null&&le===V.alternate)break t;le=zs(le),V=zs(V)}le=null}else le=null;ie!==null&&np(Y,q,ie,le,!1),ae!==null&&it!==null&&np(Y,it,ae,le,!0)}}e:{if(q=j?Hs(j):window,ie=q.nodeName&&q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&q.type==="file")var ce=hw;else if(Mf(q))if(bf)ce=mw;else{ce=fw;var pe=dw}else(ie=q.nodeName)&&ie.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ce=pw);if(ce&&(ce=ce(n,j))){Vf(Y,ce,a,X);break e}pe&&pe(n,q,j),n==="focusout"&&(pe=q._wrapperState)&&pe.controlled&&q.type==="number"&&ps(q,"number",q.value)}switch(pe=j?Hs(j):window,n){case"focusin":(Mf(pe)||pe.contentEditable==="true")&&(Fs=pe,bc=j,Xo=null);break;case"focusout":Xo=bc=Fs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,$f(Y,a,X);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":$f(Y,a,X)}var me;if(st)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Us?xf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(bi&&a.locale!=="ko"&&(Us||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Us&&(me=Ho()):(nn=X,Ps="value"in nn?nn.value:nn.textContent,Us=!0)),pe=Cl(j,_e),0<pe.length&&(_e=new Go(_e,n,null,a,X),Y.push({event:_e,listeners:pe}),me?_e.data=me:(me=Lf(a),me!==null&&(_e.data=me)))),(me=rn?aw(n,a):lw(n,a))&&(j=Cl(j,"onBeforeInput"),0<j.length&&(X=new Go("onBeforeInput","beforeinput",null,a,X),Y.push({event:X,listeners:j}),X.data=me))}ep(Y,i)})}function Zo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Cl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(n,a),m!=null&&c.unshift(Zo(n,m,d)),m=rt(n,i),m!=null&&c.push(Zo(n,m,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,j=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&j!==null&&(T=j,d?(C=rt(a,m),C!=null&&v.unshift(Zo(a,C,T))):d||(C=rt(a,m),C!=null&&v.push(Zo(a,C,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var Iw=/\r\n?/g,Tw=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(Iw,`
`).replace(Tw,"")}function kl(n,i,a){if(i=rp(i),rp(n)!==i&&a)throw Error(t(425))}function Pl(){}var Wc=null,$c=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Aw=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(n){return ip.resolve(null).then(n).catch(Rw)}:Kc;function Rw(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Sn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Sn(i)}function Wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Bs,ea="__reactProps$"+Bs,pr="__reactContainer$"+Bs,Qc="__reactEvents$"+Bs,Cw="__reactListeners$"+Bs,kw="__reactHandles$"+Bs;function Ui(n){var i=n[$n];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[$n]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=sp(n);n!==null;){if(a=n[$n])return a;n=sp(n)}return i}n=a,a=n.parentNode}return null}function ta(n){return n=n[$n]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Nl(n){return n[ea]||null}var Xc=[],Ws=-1;function $r(n){return{current:n}}function $e(n){0>Ws||(n.current=Xc[Ws],Xc[Ws]=null,Ws--)}function Be(n,i){Ws++,Xc[Ws]=n.current,n.current=i}var Gr={},xt=$r(Gr),Gt=$r(!1),Fi=Gr;function $s(n,i){var a=n.type.contextTypes;if(!a)return Gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Ol(){$e(Gt),$e(xt)}function op(n,i,a){if(xt.current!==Gr)throw Error(t(168));Be(xt,i),Be(Gt,a)}function ap(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return se({},a,c)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gr,Fi=xt.current,Be(xt,n),Be(Gt,Gt.current),!0}function lp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ap(n,i,Fi),c.__reactInternalMemoizedMergedChildContext=n,$e(Gt),$e(xt),Be(xt,n)):$e(Gt),Be(Gt,a)}var mr=null,xl=!1,Yc=!1;function up(n){mr===null?mr=[n]:mr.push(n)}function Pw(n){xl=!0,up(n)}function Kr(){if(!Yc&&mr!==null){Yc=!0;var n=0,i=Ce;try{var a=mr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}mr=null,xl=!1}catch(d){throw mr!==null&&(mr=mr.slice(n+1)),As(Ni,Kr),d}finally{Ce=i,Yc=!1}}return null}var Gs=[],Ks=0,Ll=null,Ml=0,dn=[],fn=0,ji=null,gr=1,yr="";function zi(n,i){Gs[Ks++]=Ml,Gs[Ks++]=Ll,Ll=n,Ml=i}function cp(n,i,a){dn[fn++]=gr,dn[fn++]=yr,dn[fn++]=ji,ji=n;var c=gr;n=yr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var m=32-jt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,gr=1<<32-jt(i)+d|a<<d|c,yr=m+n}else gr=1<<m|a<<d|c,yr=n}function Jc(n){n.return!==null&&(zi(n,1),cp(n,1,0))}function Zc(n){for(;n===Ll;)Ll=Gs[--Ks],Gs[Ks]=null,Ml=Gs[--Ks],Gs[Ks]=null;for(;n===ji;)ji=dn[--fn],dn[fn]=null,yr=dn[--fn],dn[fn]=null,gr=dn[--fn],dn[fn]=null}var sn=null,on=null,qe=!1,kn=null;function hp(n,i){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function dp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=Wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ji!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(qe){var i=on;if(i){var a=i;if(!dp(n,i)){if(eh(n))throw Error(t(418));i=Wr(a.nextSibling);var c=sn;i&&dp(n,i)?hp(c,a):(n.flags=n.flags&-4097|2,qe=!1,sn=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,qe=!1,sn=n}}}function fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Vl(n){if(n!==sn)return!1;if(!qe)return fp(n),qe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=on)){if(eh(n))throw pp(),Error(t(418));for(;i;)hp(n,i),i=Wr(i.nextSibling)}if(fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=Wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?Wr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=on;n;)n=Wr(n.nextSibling)}function qs(){on=sn=null,qe=!1}function nh(n){kn===null?kn=[n]:kn.push(n)}var Nw=he.ReactCurrentBatchConfig;function na(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var T=d.refs;v===null?delete T[m]:T[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function bl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mp(n){var i=n._init;return i(n._payload)}function gp(n){function i(V,O){if(n){var b=V.deletions;b===null?(V.deletions=[O],V.flags|=16):b.push(O)}}function a(V,O){if(!n)return null;for(;O!==null;)i(V,O),O=O.sibling;return null}function c(V,O){for(V=new Map;O!==null;)O.key!==null?V.set(O.key,O):V.set(O.index,O),O=O.sibling;return V}function d(V,O){return V=ti(V,O),V.index=0,V.sibling=null,V}function m(V,O,b){return V.index=b,n?(b=V.alternate,b!==null?(b=b.index,b<O?(V.flags|=2,O):b):(V.flags|=2,O)):(V.flags|=1048576,O)}function v(V){return n&&V.alternate===null&&(V.flags|=2),V}function T(V,O,b,ee){return O===null||O.tag!==6?(O=Kh(b,V.mode,ee),O.return=V,O):(O=d(O,b),O.return=V,O)}function C(V,O,b,ee){var ce=b.type;return ce===P?X(V,O,b.props.children,ee,b.key):O!==null&&(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Dt&&mp(ce)===O.type)?(ee=d(O,b.props),ee.ref=na(V,O,b),ee.return=V,ee):(ee=au(b.type,b.key,b.props,null,V.mode,ee),ee.ref=na(V,O,b),ee.return=V,ee)}function j(V,O,b,ee){return O===null||O.tag!==4||O.stateNode.containerInfo!==b.containerInfo||O.stateNode.implementation!==b.implementation?(O=qh(b,V.mode,ee),O.return=V,O):(O=d(O,b.children||[]),O.return=V,O)}function X(V,O,b,ee,ce){return O===null||O.tag!==7?(O=Qi(b,V.mode,ee,ce),O.return=V,O):(O=d(O,b),O.return=V,O)}function Y(V,O,b){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Kh(""+O,V.mode,b),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case we:return b=au(O.type,O.key,O.props,null,V.mode,b),b.ref=na(V,null,O),b.return=V,b;case ve:return O=qh(O,V.mode,b),O.return=V,O;case Dt:var ee=O._init;return Y(V,ee(O._payload),b)}if(sr(O)||fe(O))return O=Qi(O,V.mode,b,null),O.return=V,O;bl(V,O)}return null}function q(V,O,b,ee){var ce=O!==null?O.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ce!==null?null:T(V,O,""+b,ee);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case we:return b.key===ce?C(V,O,b,ee):null;case ve:return b.key===ce?j(V,O,b,ee):null;case Dt:return ce=b._init,q(V,O,ce(b._payload),ee)}if(sr(b)||fe(b))return ce!==null?null:X(V,O,b,ee,null);bl(V,b)}return null}function ie(V,O,b,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return V=V.get(b)||null,T(O,V,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case we:return V=V.get(ee.key===null?b:ee.key)||null,C(O,V,ee,ce);case ve:return V=V.get(ee.key===null?b:ee.key)||null,j(O,V,ee,ce);case Dt:var pe=ee._init;return ie(V,O,b,pe(ee._payload),ce)}if(sr(ee)||fe(ee))return V=V.get(b)||null,X(O,V,ee,ce,null);bl(O,ee)}return null}function ae(V,O,b,ee){for(var ce=null,pe=null,me=O,_e=O=0,yt=null;me!==null&&_e<b.length;_e++){me.index>_e?(yt=me,me=null):yt=me.sibling;var De=q(V,me,b[_e],ee);if(De===null){me===null&&(me=yt);break}n&&me&&De.alternate===null&&i(V,me),O=m(De,O,_e),pe===null?ce=De:pe.sibling=De,pe=De,me=yt}if(_e===b.length)return a(V,me),qe&&zi(V,_e),ce;if(me===null){for(;_e<b.length;_e++)me=Y(V,b[_e],ee),me!==null&&(O=m(me,O,_e),pe===null?ce=me:pe.sibling=me,pe=me);return qe&&zi(V,_e),ce}for(me=c(V,me);_e<b.length;_e++)yt=ie(me,V,_e,b[_e],ee),yt!==null&&(n&&yt.alternate!==null&&me.delete(yt.key===null?_e:yt.key),O=m(yt,O,_e),pe===null?ce=yt:pe.sibling=yt,pe=yt);return n&&me.forEach(function(ni){return i(V,ni)}),qe&&zi(V,_e),ce}function le(V,O,b,ee){var ce=fe(b);if(typeof ce!="function")throw Error(t(150));if(b=ce.call(b),b==null)throw Error(t(151));for(var pe=ce=null,me=O,_e=O=0,yt=null,De=b.next();me!==null&&!De.done;_e++,De=b.next()){me.index>_e?(yt=me,me=null):yt=me.sibling;var ni=q(V,me,De.value,ee);if(ni===null){me===null&&(me=yt);break}n&&me&&ni.alternate===null&&i(V,me),O=m(ni,O,_e),pe===null?ce=ni:pe.sibling=ni,pe=ni,me=yt}if(De.done)return a(V,me),qe&&zi(V,_e),ce;if(me===null){for(;!De.done;_e++,De=b.next())De=Y(V,De.value,ee),De!==null&&(O=m(De,O,_e),pe===null?ce=De:pe.sibling=De,pe=De);return qe&&zi(V,_e),ce}for(me=c(V,me);!De.done;_e++,De=b.next())De=ie(me,V,_e,De.value,ee),De!==null&&(n&&De.alternate!==null&&me.delete(De.key===null?_e:De.key),O=m(De,O,_e),pe===null?ce=De:pe.sibling=De,pe=De);return n&&me.forEach(function(lE){return i(V,lE)}),qe&&zi(V,_e),ce}function it(V,O,b,ee){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case we:e:{for(var ce=b.key,pe=O;pe!==null;){if(pe.key===ce){if(ce=b.type,ce===P){if(pe.tag===7){a(V,pe.sibling),O=d(pe,b.props.children),O.return=V,V=O;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Dt&&mp(ce)===pe.type){a(V,pe.sibling),O=d(pe,b.props),O.ref=na(V,pe,b),O.return=V,V=O;break e}a(V,pe);break}else i(V,pe);pe=pe.sibling}b.type===P?(O=Qi(b.props.children,V.mode,ee,b.key),O.return=V,V=O):(ee=au(b.type,b.key,b.props,null,V.mode,ee),ee.ref=na(V,O,b),ee.return=V,V=ee)}return v(V);case ve:e:{for(pe=b.key;O!==null;){if(O.key===pe)if(O.tag===4&&O.stateNode.containerInfo===b.containerInfo&&O.stateNode.implementation===b.implementation){a(V,O.sibling),O=d(O,b.children||[]),O.return=V,V=O;break e}else{a(V,O);break}else i(V,O);O=O.sibling}O=qh(b,V.mode,ee),O.return=V,V=O}return v(V);case Dt:return pe=b._init,it(V,O,pe(b._payload),ee)}if(sr(b))return ae(V,O,b,ee);if(fe(b))return le(V,O,b,ee);bl(V,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,O!==null&&O.tag===6?(a(V,O.sibling),O=d(O,b),O.return=V,V=O):(a(V,O),O=Kh(b,V.mode,ee),O.return=V,V=O),v(V)):a(V,O)}return it}var Qs=gp(!0),yp=gp(!1),Ul=$r(null),Fl=null,Xs=null,rh=null;function ih(){rh=Xs=Fl=null}function sh(n){var i=Ul.current;$e(Ul),n._currentValue=i}function oh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ys(n,i){Fl=n,rh=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(qt=!0),n.firstContext=null)}function pn(n){var i=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Fl===null)throw Error(t(308));Xs=n,Fl.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var Bi=null;function ah(n){Bi===null?Bi=[n]:Bi.push(n)}function _p(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ah(i)):(a.next=d.next,d.next=a),i.interleaved=a,_r(n,c)}function _r(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Qr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,_r(n,a)}return d=c.interleaved,d===null?(i.next=i,ah(c)):(i.next=d.next,d.next=i),c.interleaved=i,_r(n,a)}function jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}function wp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zl(n,i,a,c){var d=n.updateQueue;qr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,j=C.next;C.next=null,v===null?m=j:v.next=j,v=C;var X=n.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==v&&(T===null?X.firstBaseUpdate=j:T.next=j,X.lastBaseUpdate=C))}if(m!==null){var Y=d.baseState;v=0,X=j=C=null,T=m;do{var q=T.lane,ie=T.eventTime;if((c&q)===q){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ae=n,le=T;switch(q=i,ie=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(ie,Y,q);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,q=typeof ae=="function"?ae.call(ie,Y,q):ae,q==null)break e;Y=se({},Y,q);break e;case 2:qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ie={eventTime:ie,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(j=X=ie,C=Y):X=X.next=ie,v|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(X===null&&(C=Y),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=X,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);$i|=v,n.lanes=v,n.memoizedState=Y}}function Ep(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ra={},Gn=$r(ra),ia=$r(ra),sa=$r(ra);function Hi(n){if(n===ra)throw Error(t(174));return n}function uh(n,i){switch(Be(sa,i),Be(ia,n),Be(Gn,ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ut(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ut(i,n)}$e(Gn),Be(Gn,i)}function Js(){$e(Gn),$e(ia),$e(sa)}function Ip(n){Hi(sa.current);var i=Hi(Gn.current),a=ut(i,n.type);i!==a&&(Be(ia,n),Be(Gn,a))}function ch(n){ia.current===n&&($e(Gn),$e(ia))}var Xe=$r(0);function Bl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var Hl=he.ReactCurrentDispatcher,fh=he.ReactCurrentBatchConfig,Wi=0,Ye=null,ht=null,mt=null,Wl=!1,oa=!1,aa=0,Ow=0;function Lt(){throw Error(t(321))}function ph(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Cn(n[a],i[a]))return!1;return!0}function mh(n,i,a,c,d,m){if(Wi=m,Ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Hl.current=n===null||n.memoizedState===null?Mw:Vw,n=a(c,d),oa){m=0;do{if(oa=!1,aa=0,25<=m)throw Error(t(301));m+=1,mt=ht=null,i.updateQueue=null,Hl.current=bw,n=a(c,d)}while(oa)}if(Hl.current=Kl,i=ht!==null&&ht.next!==null,Wi=0,mt=ht=Ye=null,Wl=!1,i)throw Error(t(300));return n}function gh(){var n=aa!==0;return aa=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ye.memoizedState=mt=n:mt=mt.next=n,mt}function mn(){if(ht===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var i=mt===null?Ye.memoizedState:mt.next;if(i!==null)mt=i,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},mt===null?Ye.memoizedState=mt=n:mt=mt.next=n}return mt}function la(n,i){return typeof i=="function"?i(n):i}function yh(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=v=null,C=null,j=m;do{var X=j.lane;if((Wi&X)===X)C!==null&&(C=C.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:X,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};C===null?(T=C=Y,v=c):C=C.next=Y,Ye.lanes|=X,$i|=X}j=j.next}while(j!==null&&j!==m);C===null?v=c:C.next=T,Cn(c,i.memoizedState)||(qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ye.lanes|=m,$i|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function _h(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Cn(m,i.memoizedState)||(qt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Tp(){}function Ap(n,i){var a=Ye,c=mn(),d=i(),m=!Cn(c.memoizedState,d);if(m&&(c.memoizedState=d,qt=!0),c=c.queue,vh(Cp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||mt!==null&&mt.memoizedState.tag&1){if(a.flags|=2048,ua(9,Rp.bind(null,a,c,d,i),void 0,null),gt===null)throw Error(t(349));Wi&30||Sp(a,i,d)}return d}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Rp(n,i,a,c){i.value=a,i.getSnapshot=c,kp(i)&&Pp(n)}function Cp(n,i,a){return a(function(){kp(i)&&Pp(n)})}function kp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Cn(n,a)}catch{return!0}}function Pp(n){var i=_r(n,1);i!==null&&Dn(i,n,1,-1)}function Np(n){var i=Kn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},i.queue=n,n=n.dispatch=Lw.bind(null,Ye,n),[i.memoizedState,n]}function ua(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Op(){return mn().memoizedState}function $l(n,i,a,c){var d=Kn();Ye.flags|=n,d.memoizedState=ua(1|i,a,void 0,c===void 0?null:c)}function Gl(n,i,a,c){var d=mn();c=c===void 0?null:c;var m=void 0;if(ht!==null){var v=ht.memoizedState;if(m=v.destroy,c!==null&&ph(c,v.deps)){d.memoizedState=ua(i,a,m,c);return}}Ye.flags|=n,d.memoizedState=ua(1|i,a,m,c)}function Dp(n,i){return $l(8390656,8,n,i)}function vh(n,i){return Gl(2048,8,n,i)}function xp(n,i){return Gl(4,2,n,i)}function Lp(n,i){return Gl(4,4,n,i)}function Mp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Vp(n,i,a){return a=a!=null?a.concat([n]):null,Gl(4,4,Mp.bind(null,i,n),a)}function wh(){}function bp(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ph(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Up(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ph(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Fp(n,i,a){return Wi&21?(Cn(a,i)||(a=xi(),Ye.lanes|=a,$i|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a)}function Dw(n,i){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=fh.transition;fh.transition={};try{n(!1),i()}finally{Ce=a,fh.transition=c}}function jp(){return mn().memoizedState}function xw(n,i,a){var c=Zr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},zp(n))Bp(i,a);else if(a=_p(n,i,a,c),a!==null){var d=Ht();Dn(a,n,c,d),Hp(a,i,c)}}function Lw(n,i,a){var c=Zr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(zp(n))Bp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,T=m(v,a);if(d.hasEagerState=!0,d.eagerState=T,Cn(T,v)){var C=i.interleaved;C===null?(d.next=d,ah(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=_p(n,i,d,c),a!==null&&(d=Ht(),Dn(a,n,c,d),Hp(a,i,c))}}function zp(n){var i=n.alternate;return n===Ye||i!==null&&i===Ye}function Bp(n,i){oa=Wl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Hp(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}var Kl={readContext:pn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},Mw={readContext:pn,useCallback:function(n,i){return Kn().memoizedState=[n,i===void 0?null:i],n},useContext:pn,useEffect:Dp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$l(4194308,4,Mp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $l(4194308,4,n,i)},useInsertionEffect:function(n,i){return $l(4,2,n,i)},useMemo:function(n,i){var a=Kn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Kn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=xw.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var i=Kn();return n={current:n},i.memoizedState=n},useState:Np,useDebugValue:wh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=Np(!1),i=n[0];return n=Dw.bind(null,n[1]),Kn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ye,d=Kn();if(qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),gt===null)throw Error(t(349));Wi&30||Sp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Dp(Cp.bind(null,c,m,n),[n]),c.flags|=2048,ua(9,Rp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Kn(),i=gt.identifierPrefix;if(qe){var a=yr,c=gr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ow++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Vw={readContext:pn,useCallback:bp,useContext:pn,useEffect:vh,useImperativeHandle:Vp,useInsertionEffect:xp,useLayoutEffect:Lp,useMemo:Up,useReducer:yh,useRef:Op,useState:function(){return yh(la)},useDebugValue:wh,useDeferredValue:function(n){var i=mn();return Fp(i,ht.memoizedState,n)},useTransition:function(){var n=yh(la)[0],i=mn().memoizedState;return[n,i]},useMutableSource:Tp,useSyncExternalStore:Ap,useId:jp,unstable_isNewReconciler:!1},bw={readContext:pn,useCallback:bp,useContext:pn,useEffect:vh,useImperativeHandle:Vp,useInsertionEffect:xp,useLayoutEffect:Lp,useMemo:Up,useReducer:_h,useRef:Op,useState:function(){return _h(la)},useDebugValue:wh,useDeferredValue:function(n){var i=mn();return ht===null?i.memoizedState=n:Fp(i,ht.memoizedState,n)},useTransition:function(){var n=_h(la)[0],i=mn().memoizedState;return[n,i]},useMutableSource:Tp,useSyncExternalStore:Ap,useId:jp,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Eh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ql={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=Zr(n),m=vr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Qr(n,m,d),i!==null&&(Dn(i,n,d,c),jl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=Zr(n),m=vr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Qr(n,m,d),i!==null&&(Dn(i,n,d,c),jl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=Zr(n),d=vr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Qr(n,d,c),i!==null&&(Dn(i,n,c,a),jl(i,n,c))}};function Wp(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!Qo(a,c)||!Qo(d,m):!0}function $p(n,i,a){var c=!1,d=Gr,m=i.contextType;return typeof m=="object"&&m!==null?m=pn(m):(d=Kt(i)?Fi:xt.current,c=i.contextTypes,m=(c=c!=null)?$s(n,d):Gr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ql,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Gp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ql.enqueueReplaceState(i,i.state,null)}function Ih(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=pn(m):(m=Kt(i)?Fi:xt.current,d.context=$s(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Eh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ql.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Th(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ah(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,i,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){tu||(tu=!0,Fh=c),Ah(n,i)},a}function qp(n,i,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ah(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Ah(n,i),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Qp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Uw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Jw.bind(null,n,i,a),i.then(n,n))}function Xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Yp(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vr(-1,1),i.tag=2,Qr(a,i,1))),a.lanes|=1),n)}var Fw=he.ReactCurrentOwner,qt=!1;function Bt(n,i,a,c){i.child=n===null?yp(i,null,a,c):Qs(i,n.child,a,c)}function Jp(n,i,a,c,d){a=a.render;var m=i.ref;return Ys(i,d),c=mh(n,i,a,c,m,d),a=gh(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,wr(n,i,d)):(qe&&a&&Jc(i),i.flags|=1,Bt(n,i,c,d),i.child)}function Zp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Gh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,em(n,i,m,c,d)):(n=au(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(v,c)&&n.ref===i.ref)return wr(n,i,d)}return i.flags|=1,n=ti(m,c),n.ref=i.ref,n.return=i,i.child=n}function em(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Qo(m,c)&&n.ref===i.ref)if(qt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(qt=!0);else return i.lanes=n.lanes,wr(n,i,d)}return Sh(n,i,a,c,d)}function tm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(to,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Be(to,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Be(to,an),an|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Be(to,an),an|=c;return Bt(n,i,d,a),i.child}function nm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Sh(n,i,a,c,d){var m=Kt(a)?Fi:xt.current;return m=$s(i,m),Ys(i,d),a=mh(n,i,a,c,m,d),c=gh(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,wr(n,i,d)):(qe&&c&&Jc(i),i.flags|=1,Bt(n,i,a,d),i.child)}function rm(n,i,a,c,d){if(Kt(a)){var m=!0;Dl(i)}else m=!1;if(Ys(i,d),i.stateNode===null)Xl(n,i),$p(i,a,c),Ih(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var C=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=pn(j):(j=Kt(a)?Fi:xt.current,j=$s(i,j));var X=a.getDerivedStateFromProps,Y=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==j)&&Gp(i,v,c,j),qr=!1;var q=i.memoizedState;v.state=q,zl(i,c,v,d),C=i.memoizedState,T!==c||q!==C||Gt.current||qr?(typeof X=="function"&&(Eh(i,a,X,c),C=i.memoizedState),(T=qr||Wp(i,a,T,c,q,C,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=j,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,vp(n,i),T=i.memoizedProps,j=i.type===i.elementType?T:Pn(i.type,T),v.props=j,Y=i.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=pn(C):(C=Kt(a)?Fi:xt.current,C=$s(i,C));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Y||q!==C)&&Gp(i,v,c,C),qr=!1,q=i.memoizedState,v.state=q,zl(i,c,v,d);var ae=i.memoizedState;T!==Y||q!==ae||Gt.current||qr?(typeof ie=="function"&&(Eh(i,a,ie,c),ae=i.memoizedState),(j=qr||Wp(i,a,j,c,q,ae,C)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=C,c=j):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return Rh(n,i,a,c,m,d)}function Rh(n,i,a,c,d,m){nm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&lp(i,a,!1),wr(n,i,m);c=i.stateNode,Fw.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Qs(i,n.child,null,m),i.child=Qs(i,null,T,m)):Bt(n,i,T,m),i.memoizedState=c.state,d&&lp(i,a,!0),i.child}function im(n){var i=n.stateNode;i.pendingContext?op(n,i.pendingContext,i.pendingContext!==i.context):i.context&&op(n,i.context,!1),uh(n,i.containerInfo)}function sm(n,i,a,c,d){return qs(),nh(d),i.flags|=256,Bt(n,i,a,c),i.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,i,a){var c=i.pendingProps,d=Xe.current,m=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Be(Xe,d&1),n===null)return th(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=lu(v,c,0,null),n=Qi(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=kh(a),i.memoizedState=Ch,n):Ph(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return jw(n,i,v,c,T,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=ti(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=ti(T,m):(m=Qi(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?kh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Ch,c}return m=n.child,n=m.sibling,c=ti(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ph(n,i){return i=lu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ql(n,i,a,c){return c!==null&&nh(c),Qs(i,n.child,null,a),n=Ph(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function jw(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Th(Error(t(422))),Ql(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=lu({mode:"visible",children:c.children},d,0,null),m=Qi(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&Qs(i,n.child,null,v),i.child.memoizedState=kh(v),i.memoizedState=Ch,m);if(!(i.mode&1))return Ql(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=Th(m,c,void 0),Ql(n,i,v,c)}if(T=(v&n.childLanes)!==0,qt||T){if(c=gt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,_r(n,d),Dn(c,n,d,-1))}return $h(),c=Th(Error(t(421))),Ql(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Zw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,on=Wr(d.nextSibling),sn=i,qe=!0,kn=null,n!==null&&(dn[fn++]=gr,dn[fn++]=yr,dn[fn++]=ji,gr=n.id,yr=n.overflow,ji=i),i=Ph(i,c.children),i.flags|=4096,i)}function am(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),oh(n.return,i,a)}function Nh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function lm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,i,c.children,a),c=Xe.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,a,i);else if(n.tag===19)am(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Xe,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Nh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Nh(i,!0,a,null,m);break;case"together":Nh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function wr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$i|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ti(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ti(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zw(n,i,a){switch(i.tag){case 3:im(i),qs();break;case 5:Ip(i);break;case 1:Kt(i.type)&&Dl(i);break;case 4:uh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Be(Ul,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Be(Xe,Xe.current&1),i.flags|=128,null):a&i.child.childLanes?om(n,i,a):(Be(Xe,Xe.current&1),n=wr(n,i,a),n!==null?n.sibling:null);Be(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return lm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Be(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,tm(n,i,a)}return wr(n,i,a)}var um,Oh,cm,hm;um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Oh=function(){},cm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Hi(Gn.current);var m=null;switch(a){case"input":d=Ii(n,d),c=Ii(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pl)}No(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var T=d[j];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var C=c[j];if(T=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&C!==T&&(C!=null||T!=null))if(j==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(j,a)),a=C;else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(m=m||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&We("scroll",n),m||T===C||(m=[])):(m=m||[]).push(j,C))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},hm=function(n,i,a,c){a!==c&&(i.flags|=4)};function ca(n,i){if(!qe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Bw(n,i,a){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Kt(i.type)&&Ol(),Mt(i),null;case 3:return c=i.stateNode,Js(),$e(Gt),$e(xt),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,kn!==null&&(Bh(kn),kn=null))),Oh(n,i),Mt(i),null;case 5:ch(i);var d=Hi(sa.current);if(a=i.type,n!==null&&i.stateNode!=null)cm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=Hi(Gn.current),Vl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[$n]=i,c[ea]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Yo.length;d++)We(Yo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":fs(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":ms(c,m),We("invalid",c)}No(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var T=m[v];v==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&kl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&kl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":ir(c),el(c,m,!0);break;case"textarea":ir(c),So(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Pl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[$n]=i,n[ea]=c,um(n,i,!1,!1),i.stateNode=n;e:{switch(v=Oo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Yo.length;d++)We(Yo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":fs(n,c),d=Ii(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),We("invalid",n);break;case"textarea":ms(n,c),d=Ao(n,c),We("invalid",n);break;default:d=c}No(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var C=T[m];m==="style"?ko(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ro(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&xr(n,C):typeof C=="number"&&xr(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&We("scroll",n):C!=null&&J(n,m,C,v))}switch(a){case"input":ir(n),el(n,c,!1);break;case"textarea":ir(n),So(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?or(n,!!c.multiple,m,!1):c.defaultValue!=null&&or(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)hm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Hi(sa.current),Hi(Gn.current),Vl(i)){if(c=i.stateNode,a=i.memoizedProps,c[$n]=i,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:kl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&kl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=i,i.stateNode=c}return Mt(i),null;case 13:if($e(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qe&&on!==null&&i.mode&1&&!(i.flags&128))pp(),qs(),i.flags|=98560,m=!1;else if(m=Vl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[$n]=i}else qs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Mt(i),m=!1}else kn!==null&&(Bh(kn),kn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Xe.current&1?dt===0&&(dt=3):$h())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return Js(),Oh(n,i),n===null&&Jo(i.stateNode.containerInfo),Mt(i),null;case 10:return sh(i.type._context),Mt(i),null;case 17:return Kt(i.type)&&Ol(),Mt(i),null;case 19:if($e(Xe),m=i.memoizedState,m===null)return Mt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)ca(m,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=Bl(n),v!==null){for(i.flags|=128,ca(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Be(Xe,Xe.current&1|2),i.child}n=n.sibling}m.tail!==null&&ze()>no&&(i.flags|=128,c=!0,ca(m,!1),i.lanes=4194304)}else{if(!c)if(n=Bl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!qe)return Mt(i),null}else 2*ze()-m.renderingStartTime>no&&a!==1073741824&&(i.flags|=128,c=!0,ca(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ze(),i.sibling=null,a=Xe.current,Be(Xe,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return Wh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?an&1073741824&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Hw(n,i){switch(Zc(i),i.tag){case 1:return Kt(i.type)&&Ol(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Js(),$e(Gt),$e(xt),dh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return ch(i),null;case 13:if($e(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $e(Xe),null;case 4:return Js(),null;case 10:return sh(i.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Yl=!1,Vt=!1,Ww=typeof WeakSet=="function"?WeakSet:Set,oe=null;function eo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,i,c)}else a.current=null}function Dh(n,i,a){try{a()}catch(c){Ze(n,i,c)}}var dm=!1;function $w(n,i){if(Wc=zr,n=Wf(),Vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,j=0,X=0,Y=n,q=null;t:for(;;){for(var ie;Y!==a||d!==0&&Y.nodeType!==3||(T=v+d),Y!==m||c!==0&&Y.nodeType!==3||(C=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(ie=Y.firstChild)!==null;)q=Y,Y=ie;for(;;){if(Y===n)break t;if(q===a&&++j===d&&(T=v),q===m&&++X===c&&(C=v),(ie=Y.nextSibling)!==null)break;Y=q,q=Y.parentNode}Y=ie}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},zr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,it=ae.memoizedState,V=i.stateNode,O=V.getSnapshotBeforeUpdate(i.elementType===i.type?le:Pn(i.type,le),it);V.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){Ze(i,i.return,ee)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=dm,dm=!1,ae}function ha(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Dh(i,a,m)}d=d.next}while(d!==c)}}function Jl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function fm(n){var i=n.alternate;i!==null&&(n.alternate=null,fm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$n],delete i[ea],delete i[Qc],delete i[Cw],delete i[kw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Pl));else if(c!==4&&(n=n.child,n!==null))for(Lh(n,i,a),n=n.sibling;n!==null;)Lh(n,i,a),n=n.sibling}function Mh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,i,a),n=n.sibling;n!==null;)Mh(n,i,a),n=n.sibling}var St=null,Nn=!1;function Xr(n,i,a){for(a=a.child;a!==null;)gm(n,i,a),a=a.sibling}function gm(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Vt||eo(a,i);case 6:var c=St,d=Nn;St=null,Xr(n,i,a),St=c,Nn=d,St!==null&&(Nn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Nn?(n=St,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),Sn(n)):qc(St,a.stateNode));break;case 4:c=St,d=Nn,St=a.stateNode.containerInfo,Nn=!0,Xr(n,i,a),St=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&Dh(a,i,v),d=d.next}while(d!==c)}Xr(n,i,a);break;case 1:if(!Vt&&(eo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,i,T)}Xr(n,i,a);break;case 21:Xr(n,i,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Xr(n,i,a),Vt=c):Xr(n,i,a);break;default:Xr(n,i,a)}}function ym(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ww),i.forEach(function(c){var d=eE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Nn=!1;break e;case 3:St=T.stateNode.containerInfo,Nn=!0;break e;case 4:St=T.stateNode.containerInfo,Nn=!0;break e}T=T.return}if(St===null)throw Error(t(160));gm(m,v,d),St=null,Nn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(j){Ze(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_m(i,n),i=i.sibling}function _m(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(i,n),qn(n),c&4){try{ha(3,n,n.return),Jl(3,n)}catch(le){Ze(n,n.return,le)}try{ha(5,n,n.return)}catch(le){Ze(n,n.return,le)}}break;case 1:On(i,n),qn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(On(i,n),qn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(le){Ze(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&Io(d,m),Oo(T,v);var j=Oo(T,m);for(v=0;v<C.length;v+=2){var X=C[v],Y=C[v+1];X==="style"?ko(d,Y):X==="dangerouslySetInnerHTML"?Ro(d,Y):X==="children"?xr(d,Y):J(d,X,Y,j)}switch(T){case"input":To(d,m);break;case"textarea":gs(d,m);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?or(d,!!m.multiple,ie,!1):q!==!!m.multiple&&(m.defaultValue!=null?or(d,!!m.multiple,m.defaultValue,!0):or(d,!!m.multiple,m.multiple?[]:"",!1))}d[ea]=m}catch(le){Ze(n,n.return,le)}}break;case 6:if(On(i,n),qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(le){Ze(n,n.return,le)}}break;case 3:if(On(i,n),qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sn(i.containerInfo)}catch(le){Ze(n,n.return,le)}break;case 4:On(i,n),qn(n);break;case 13:On(i,n),qn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Uh=ze())),c&4&&ym(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(j=Vt)||X,On(i,n),Vt=j):On(i,n),qn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!X&&n.mode&1)for(oe=n,X=n.child;X!==null;){for(Y=oe=X;oe!==null;){switch(q=oe,ie=q.child,q.tag){case 0:case 11:case 14:case 15:ha(4,q,q.return);break;case 1:eo(q,q.return);var ae=q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=q,a=q.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){Ze(c,a,le)}}break;case 5:eo(q,q.return);break;case 22:if(q.memoizedState!==null){Em(Y);continue}}ie!==null?(ie.return=q,oe=ie):Em(Y)}X=X.sibling}e:for(X=null,Y=n;;){if(Y.tag===5){if(X===null){X=Y;try{d=Y.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=Y.stateNode,C=Y.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Co("display",v))}catch(le){Ze(n,n.return,le)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(le){Ze(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:On(i,n),qn(n),c&4&&ym(n);break;case 21:break;default:On(i,n),qn(n)}}function qn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(pm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var m=mm(n);Mh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=mm(n);Lh(n,T,v);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gw(n,i,a){oe=n,vm(n)}function vm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Yl;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Vt;T=Yl;var j=Vt;if(Yl=v,(Vt=C)&&!j)for(oe=d;oe!==null;)v=oe,C=v.child,v.tag===22&&v.memoizedState!==null?Im(d):C!==null?(C.return=v,oe=C):Im(d);for(;m!==null;)oe=m,vm(m),m=m.sibling;oe=d,Yl=T,Vt=j}wm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,oe=m):wm(n)}}function wm(n){for(;oe!==null;){var i=oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Vt||Jl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ep(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ep(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var X=j.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&Sn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||i.flags&512&&xh(i)}catch(q){Ze(i,i.return,q)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Em(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Im(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jl(4,i)}catch(C){Ze(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){Ze(i,d,C)}}var m=i.return;try{xh(i)}catch(C){Ze(i,m,C)}break;case 5:var v=i.return;try{xh(i)}catch(C){Ze(i,v,C)}}}catch(C){Ze(i,i.return,C)}if(i===n){oe=null;break}var T=i.sibling;if(T!==null){T.return=i.return,oe=T;break}oe=i.return}}var Kw=Math.ceil,Zl=he.ReactCurrentDispatcher,Vh=he.ReactCurrentOwner,gn=he.ReactCurrentBatchConfig,Oe=0,gt=null,ot=null,Rt=0,an=0,to=$r(0),dt=0,da=null,$i=0,eu=0,bh=0,fa=null,Qt=null,Uh=0,no=1/0,Er=null,tu=!1,Fh=null,Yr=null,nu=!1,Jr=null,ru=0,pa=0,jh=null,iu=-1,su=0;function Ht(){return Oe&6?ze():iu!==-1?iu:iu=ze()}function Zr(n){return n.mode&1?Oe&2&&Rt!==0?Rt&-Rt:Nw.transition!==null?(su===0&&(su=xi()),su):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Bo(n.type)),n):1}function Dn(n,i,a,c){if(50<pa)throw pa=0,jh=null,Error(t(185));br(n,a,c),(!(Oe&2)||n!==gt)&&(n===gt&&(!(Oe&2)&&(eu|=a),dt===4&&ei(n,Rt)),Xt(n,c),a===1&&Oe===0&&!(i.mode&1)&&(no=ze()+500,xl&&Kr()))}function Xt(n,i){var a=n.callbackNode;ur(n,i);var c=Di(n,n===gt?Rt:0);if(c===0)a!==null&&bo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&bo(a),i===1)n.tag===0?Pw(Am.bind(null,n)):up(Am.bind(null,n)),Sw(function(){!(Oe&6)&&Kr()}),a=null;else{switch(Fr(c)){case 1:a=Ni;break;case 4:a=Lr;break;case 16:a=un;break;case 536870912:a=sl;break;default:a=un}a=Dm(a,Tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Tm(n,i){if(iu=-1,su=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=Di(n,n===gt?Rt:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=ou(n,c);else{i=c;var d=Oe;Oe|=2;var m=Rm();(gt!==n||Rt!==i)&&(Er=null,no=ze()+500,Ki(n,i));do try{Xw();break}catch(T){Sm(n,T)}while(!0);ih(),Zl.current=m,Oe=d,ot!==null?i=0:(gt=null,Rt=0,i=dt)}if(i!==0){if(i===2&&(d=tn(n),d!==0&&(c=d,i=zh(n,d))),i===1)throw a=da,Ki(n,0),ei(n,c),Xt(n,ze()),a;if(i===6)ei(n,c);else{if(d=n.current.alternate,!(c&30)&&!qw(d)&&(i=ou(n,c),i===2&&(m=tn(n),m!==0&&(c=m,i=zh(n,m))),i===1))throw a=da,Ki(n,0),ei(n,c),Xt(n,ze()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:qi(n,Qt,Er);break;case 3:if(ei(n,c),(c&130023424)===c&&(i=Uh+500-ze(),10<i)){if(Di(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Kc(qi.bind(null,n,Qt,Er),i);break}qi(n,Qt,Er);break;case 4:if(ei(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-jt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kw(c/1960))-c,10<c){n.timeoutHandle=Kc(qi.bind(null,n,Qt,Er),c);break}qi(n,Qt,Er);break;case 5:qi(n,Qt,Er);break;default:throw Error(t(329))}}}return Xt(n,ze()),n.callbackNode===a?Tm.bind(null,n):null}function zh(n,i){var a=fa;return n.current.memoizedState.isDehydrated&&(Ki(n,i).flags|=256),n=ou(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&Bh(i)),n}function Bh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function qw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Cn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ei(n,i){for(i&=~bh,i&=~eu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-jt(i),c=1<<a;n[a]=-1,i&=~c}}function Am(n){if(Oe&6)throw Error(t(327));ro();var i=Di(n,0);if(!(i&1))return Xt(n,ze()),null;var a=ou(n,i);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(i=c,a=zh(n,c))}if(a===1)throw a=da,Ki(n,0),ei(n,i),Xt(n,ze()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,qi(n,Qt,Er),Xt(n,ze()),null}function Hh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(no=ze()+500,xl&&Kr())}}function Gi(n){Jr!==null&&Jr.tag===0&&!(Oe&6)&&ro();var i=Oe;Oe|=1;var a=gn.transition,c=Ce;try{if(gn.transition=null,Ce=1,n)return n()}finally{Ce=c,gn.transition=a,Oe=i,!(Oe&6)&&Kr()}}function Wh(){an=to.current,$e(to)}function Ki(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Aw(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ol();break;case 3:Js(),$e(Gt),$e(xt),dh();break;case 5:ch(c);break;case 4:Js();break;case 13:$e(Xe);break;case 19:$e(Xe);break;case 10:sh(c.type._context);break;case 22:case 23:Wh()}a=a.return}if(gt=n,ot=n=ti(n.current,null),Rt=an=i,dt=0,da=null,bh=eu=$i=0,Qt=fa=null,Bi!==null){for(i=0;i<Bi.length;i++)if(a=Bi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Bi=null}return n}function Sm(n,i){do{var a=ot;try{if(ih(),Hl.current=Kl,Wl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Wl=!1}if(Wi=0,mt=ht=Ye=null,oa=!1,aa=0,Vh.current=null,a===null||a.return===null){dt=1,da=i,ot=null;break}e:{var m=n,v=a.return,T=a,C=i;if(i=Rt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var j=C,X=T,Y=X.tag;if(!(X.mode&1)&&(Y===0||Y===11||Y===15)){var q=X.alternate;q?(X.updateQueue=q.updateQueue,X.memoizedState=q.memoizedState,X.lanes=q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=Xp(v);if(ie!==null){ie.flags&=-257,Yp(ie,v,T,m,i),ie.mode&1&&Qp(m,j,i),i=ie,C=j;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(C),i.updateQueue=le}else ae.add(C);break e}else{if(!(i&1)){Qp(m,j,i),$h();break e}C=Error(t(426))}}else if(qe&&T.mode&1){var it=Xp(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),Yp(it,v,T,m,i),nh(Zs(C,T));break e}}m=C=Zs(C,T),dt!==4&&(dt=2),fa===null?fa=[m]:fa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var V=Kp(m,C,i);wp(m,V);break e;case 1:T=C;var O=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof O.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yr===null||!Yr.has(b)))){m.flags|=65536,i&=-i,m.lanes|=i;var ee=qp(m,T,i);wp(m,ee);break e}}m=m.return}while(m!==null)}km(a)}catch(ce){i=ce,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function Rm(){var n=Zl.current;return Zl.current=Kl,n===null?Kl:n}function $h(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||!($i&268435455)&&!(eu&268435455)||ei(gt,Rt)}function ou(n,i){var a=Oe;Oe|=2;var c=Rm();(gt!==n||Rt!==i)&&(Er=null,Ki(n,i));do try{Qw();break}catch(d){Sm(n,d)}while(!0);if(ih(),Oe=a,Zl.current=c,ot!==null)throw Error(t(261));return gt=null,Rt=0,dt}function Qw(){for(;ot!==null;)Cm(ot)}function Xw(){for(;ot!==null&&!rl();)Cm(ot)}function Cm(n){var i=Om(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?km(n):ot=i,Vh.current=null}function km(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Hw(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ot=null;return}}else if(a=Bw(a,i,an),a!==null){ot=a;return}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);dt===0&&(dt=5)}function qi(n,i,a){var c=Ce,d=gn.transition;try{gn.transition=null,Ce=1,Yw(n,i,a,c)}finally{gn.transition=d,Ce=c}return null}function Yw(n,i,a,c){do ro();while(Jr!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Fe(n,m),n===gt&&(ot=gt=null,Rt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||nu||(nu=!0,Dm(un,function(){return ro(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=gn.transition,gn.transition=null;var v=Ce;Ce=1;var T=Oe;Oe|=4,Vh.current=null,$w(n,a),_m(a,n),yw($c),zr=!!Wc,$c=Wc=null,n.current=a,Gw(a),kc(),Oe=T,Ce=v,gn.transition=m}else n.current=a;if(nu&&(nu=!1,Jr=n,ru=d),m=n.pendingLanes,m===0&&(Yr=null),ol(a.stateNode),Xt(n,ze()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Fh,Fh=null,n;return ru&1&&n.tag!==0&&ro(),m=n.pendingLanes,m&1?n===jh?pa++:(pa=0,jh=n):pa=0,Kr(),null}function ro(){if(Jr!==null){var n=Fr(ru),i=gn.transition,a=Ce;try{if(gn.transition=null,Ce=16>n?16:n,Jr===null)var c=!1;else{if(n=Jr,Jr=null,ru=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,oe=n.current;oe!==null;){var m=oe,v=m.child;if(oe.flags&16){var T=m.deletions;if(T!==null){for(var C=0;C<T.length;C++){var j=T[C];for(oe=j;oe!==null;){var X=oe;switch(X.tag){case 0:case 11:case 15:ha(8,X,m)}var Y=X.child;if(Y!==null)Y.return=X,oe=Y;else for(;oe!==null;){X=oe;var q=X.sibling,ie=X.return;if(fm(X),X===j){oe=null;break}if(q!==null){q.return=ie,oe=q;break}oe=ie}}}var ae=m.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var it=le.sibling;le.sibling=null,le=it}while(le!==null)}}oe=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,oe=v;else e:for(;oe!==null;){if(m=oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:ha(9,m,m.return)}var V=m.sibling;if(V!==null){V.return=m.return,oe=V;break e}oe=m.return}}var O=n.current;for(oe=O;oe!==null;){v=oe;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,oe=b;else e:for(v=O;oe!==null;){if(T=oe,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:Jl(9,T)}}catch(ce){Ze(T,T.return,ce)}if(T===v){oe=null;break e}var ee=T.sibling;if(ee!==null){ee.return=T.return,oe=ee;break e}oe=T.return}}if(Oe=d,Kr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Ce=a,gn.transition=i}}return!1}function Pm(n,i,a){i=Zs(a,i),i=Kp(n,i,1),n=Qr(n,i,1),i=Ht(),n!==null&&(br(n,1,i),Xt(n,i))}function Ze(n,i,a){if(n.tag===3)Pm(n,n,a);else for(;i!==null;){if(i.tag===3){Pm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Zs(a,n),n=qp(i,n,1),i=Qr(i,n,1),n=Ht(),i!==null&&(br(i,1,n),Xt(i,n));break}}i=i.return}}function Jw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,gt===n&&(Rt&a)===a&&(dt===4||dt===3&&(Rt&130023424)===Rt&&500>ze()-Uh?Ki(n,0):bh|=a),Xt(n,i)}function Nm(n,i){i===0&&(n.mode&1?(i=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):i=1);var a=Ht();n=_r(n,i),n!==null&&(br(n,i,a),Xt(n,a))}function Zw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Nm(n,a)}function eE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Nm(n,a)}var Om;Om=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gt.current)qt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return qt=!1,zw(n,i,a);qt=!!(n.flags&131072)}else qt=!1,qe&&i.flags&1048576&&cp(i,Ml,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Xl(n,i),n=i.pendingProps;var d=$s(i,xt.current);Ys(i,a),d=mh(null,i,c,n,d,a);var m=gh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kt(c)?(m=!0,Dl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(i),d.updater=ql,i.stateNode=d,d._reactInternals=i,Ih(i,c,n,a),i=Rh(null,i,c,!0,m,a)):(i.tag=0,qe&&m&&Jc(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Xl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nE(c),n=Pn(c,n),d){case 0:i=Sh(null,i,c,n,a);break e;case 1:i=rm(null,i,c,n,a);break e;case 11:i=Jp(null,i,c,n,a);break e;case 14:i=Zp(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Sh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),rm(n,i,c,d,a);case 3:e:{if(im(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,vp(n,i),zl(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Zs(Error(t(423)),i),i=sm(n,i,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),i),i=sm(n,i,c,a,d);break e}else for(on=Wr(i.stateNode.containerInfo.firstChild),sn=i,qe=!0,kn=null,a=yp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),c===d){i=wr(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return Ip(i),n===null&&th(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Gc(c,d)?v=null:m!==null&&Gc(c,m)&&(i.flags|=32),nm(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&th(i),null;case 13:return om(n,i,a);case 4:return uh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Qs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Jp(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,Be(Ul,c._currentValue),c._currentValue=v,m!==null)if(Cn(m.value,v)){if(m.children===d.children&&!Gt.current){i=wr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var T=m.dependencies;if(T!==null){v=m.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=vr(-1,a&-a),C.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var X=j.pending;X===null?C.next=C:(C.next=X.next,X.next=C),j.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),oh(m.return,a,i),T.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),oh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ys(i,a),d=pn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=Pn(c,i.pendingProps),d=Pn(c.type,d),Zp(n,i,c,d,a);case 15:return em(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Xl(n,i),i.tag=1,Kt(c)?(n=!0,Dl(i)):n=!1,Ys(i,a),$p(i,c,d),Ih(i,c,d,a),Rh(null,i,c,!0,n,a);case 19:return lm(n,i,a);case 22:return tm(n,i,a)}throw Error(t(156,i.tag))};function Dm(n,i){return As(n,i)}function tE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,i,a,c){return new tE(n,i,a,c)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nE(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Ot)return 14}return 2}function ti(n,i){var a=n.alternate;return a===null?(a=yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Gh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return Qi(a.children,d,m,i);case I:v=8,d|=8;break;case A:return n=yn(12,a,i,d|2),n.elementType=A,n.lanes=m,n;case R:return n=yn(13,a,i,d),n.elementType=R,n.lanes=m,n;case nt:return n=yn(19,a,i,d),n.elementType=nt,n.lanes=m,n;case Ue:return lu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case D:v=9;break e;case L:v=11;break e;case Ot:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Qi(n,i,a,c){return n=yn(7,n,c,i),n.lanes=a,n}function lu(n,i,a,c){return n=yn(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Kh(n,i,a){return n=yn(6,n,null,i),n.lanes=a,n}function qh(n,i,a){return i=yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function rE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qh(n,i,a,c,d,m,v,T,C){return n=new rE(n,i,a,T,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=yn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(m),n}function iE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function xm(n){if(!n)return Gr;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return ap(n,a,i)}return i}function Lm(n,i,a,c,d,m,v,T,C){return n=Qh(a,c,!0,n,d,m,v,T,C),n.context=xm(null),a=n.current,c=Ht(),d=Zr(a),m=vr(c,d),m.callback=i??null,Qr(a,m,d),n.current.lanes=d,br(n,d,c),Xt(n,c),n}function uu(n,i,a,c){var d=i.current,m=Ht(),v=Zr(d);return a=xm(a),i.context===null?i.context=a:i.pendingContext=a,i=vr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Qr(d,i,v),n!==null&&(Dn(n,d,v,m),jl(n,d,v)),v}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xh(n,i){Mm(n,i),(n=n.alternate)&&Mm(n,i)}var Vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yh(n){this._internalRoot=n}hu.prototype.render=Yh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));uu(n,i,null,null)},hu.prototype.unmount=Yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gi(function(){uu(null,n,null,null)}),i[pr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var i=hl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<zn.length&&i!==0&&i<zn[a].priority;a++);zn.splice(a,0,n),a===0&&pl(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function sE(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=cu(v);m.call(j)}}var v=Lm(i,c,n,0,null,!1,!1,"",bm);return n._reactRootContainer=v,n[pr]=v.current,Jo(n.nodeType===8?n.parentNode:n),Gi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var j=cu(C);T.call(j)}}var C=Qh(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=C,n[pr]=C.current,Jo(n.nodeType===8?n.parentNode:n),Gi(function(){uu(i,C,a,c)}),C}function fu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var T=d;d=function(){var C=cu(v);T.call(C)}}uu(i,v,n,d)}else v=sE(a,i,n,d,c);return cu(v)}ul=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mr(i.pendingLanes);a!==0&&(Ur(i,a|1),Xt(i,ze()),!(Oe&6)&&(no=ze()+500,Kr()))}break;case 13:Gi(function(){var c=_r(n,1);if(c!==null){var d=Ht();Dn(c,n,1,d)}}),Xh(n,1)}},Cs=function(n){if(n.tag===13){var i=_r(n,134217728);if(i!==null){var a=Ht();Dn(i,n,134217728,a)}Xh(n,134217728)}},cl=function(n){if(n.tag===13){var i=Zr(n),a=_r(n,i);if(a!==null){var c=Ht();Dn(a,n,i,c)}Xh(n,i)}},hl=function(){return Ce},dl=function(n,i){var a=Ce;try{return Ce=n,i()}finally{Ce=a}},_s=function(n,i,a){switch(i){case"input":if(To(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Nl(c);if(!d)throw Error(t(90));ds(c),To(c,d)}}}break;case"textarea":gs(n,a);break;case"select":i=a.value,i!=null&&or(n,!!a.multiple,i,!1)}},Ri=Hh,xo=Gi;var oE={usingClientEntryPoint:!1,Events:[ta,Hs,Nl,Fn,Do,Hh]},ma={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aE={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vo(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Oi=pu.inject(aE),en=pu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(i))throw Error(t(200));return iE(n,i,null,a)},Yt.createRoot=function(n,i){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=Vm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Qh(n,1,!1,null,null,a,!1,c,d),n[pr]=i.current,Jo(n.nodeType===8?n.parentNode:n),new Yh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Gi(n)},Yt.hydrate=function(n,i,a){if(!du(i))throw Error(t(200));return fu(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Vm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Lm(i,null,n,1,a??null,d,!1,m,v),n[pr]=i.current,Jo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hu(i)},Yt.render=function(n,i,a){if(!du(i))throw Error(t(200));return fu(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Gi(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Hh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var $m;function mE(){if($m)return td.exports;$m=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=pE(),td.exports}var Gm;function gE(){if(Gm)return mu;Gm=1;var r=mE();return mu.createRoot=r.createRoot,mu.hydrateRoot=r.hydrateRoot,mu}var yE=gE();const Sy="/assets/logo-COGC8jhl.png",_E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='16'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e",vE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M224%200c-17.7%200-32%2014.3-32%2032V51.2C119%2066%2064%20130.6%2064%20208v25.4c0%2045.4-15.5%2089.5-43.8%20124.9L5.3%20377c-5.8%207.2-6.9%2017.1-2.9%2025.4S14.8%20416%2024%20416H424c9.2%200%2017.6-5.3%2021.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5%20322.9%20384%20278.8%20384%20233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0%2096c61.9%200%20112%2050.1%20112%20112v25.4c0%2047.9%2013.9%2094.6%2039.7%20134.6H72.3C98.1%20328%20112%20281.3%20112%20233.4V208c0-61.9%2050.1-112%20112-112zm64%20352H224%20160c0%2017%206.7%2033.3%2018.7%2045.3s28.3%2018.7%2045.3%2018.7s33.3-6.7%2045.3-18.7s18.7-28.3%2018.7-45.3z'/%3e%3c/svg%3e",wE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE+UlEQVRYw42X32scVRTHP+fMZDebbNJuEmza2jbBVtKKBQXBVsXigw99EKSI7yLFxwoiiNCXKgiCIvgi6pPaf8AnEXyqlhZBa9HSktbWQmvS/HCTdLOT3Znjw8xs7t6dbXphmHvn3vM953zPj5mRyqk7Rj4ku5sz90e+597xzvt7RZjZftijuGiNJ+gAFCruZ5j7PLtrl7A/94V9r+gFxDxDKMBy8PSBNG7FRj8ji2SK8Cw3wPXOt5wtAP2R0H8UyGihQBHNW7HjJ+aDktRxuisHBIgNtgewO4SKQGKObL/K8IGzWwKUFXYHUFNIxIHohCBXLtAEJgO4G8HsghEZbFPY8HUXhcljrQWMCIjB7KJxpwmTmuoQhxXNgVoGOwP4Z8U4/ojywUtl2gbzEYxpykwPrX7GZ2sDtissbMByDGeOlXl1l3KrbuxSaDnnwxxgUuB2w3jzYMinb01QrSivH4s48MkSkcGQQNN6Pe1JYKDsxPbPUzUOTQ+yHiW89/Uin11usa+qzMcpkGoAKlArCfxnvHZkiGpFaUYJ+/eUOX24RH3FGAvTcyqgmirorLNY5s9qCnNrxqmDIYemB4k2jEpZOXF0CJaNbWF2VtMLFWgkBiPChWsRAINlZXk15qebLRgVGlagXJ27Qu7MOkBV+OF2zL3lNuVSSs3FqxGMCk3bND4MJN2cj2GqJpw+v0Fsizyzv8R355ucWzSmqsJSGwL1qHfneXgU1g32hXBlzTj5xRJvPF/h8q0W75+L2FtT5mIINC0JGX/3bieqLWBC4caKwZrBuDJVhqUYBoqakxXMs3XL0lDcioDFBKrC9KiwFEPovE9C16sAWDWYGVMqE1BvGSsJVAIwJ8kkm5trjNeUQoH7BtODsH1fQGywEBulIDuaV0Eg0lPT9SS9EGEg6C33mqYNpmmw2k4bTGdTN+eqmSKFa1Fa82MBtG3TiDD0FPQbubcBcKVusGFQFWaGheFAMCBODMuaS5B10d82DP5NmNmhDAXC35ExomA5A2FupRUrFWdvRIU/VhJ+PjnKcFn5/Mc1vrrRhkaSpXSGlVjHzWd3BrzzcpUTL47w/S9rvHJ2lf2TAQttywwIpEtjJ9QFfT9QoCTcqyccfW6ILw8M8vFqzPU7LW7OtZirJ2y0jWpZ2D0e8vieAR7bVQLg99kmZ39tMj4R0DAIJe1WcvDMXL8Xaw8zRtrlLi0lPDGuvP10mSMzg+zdMUC1ol2icQIL9TaXrkd8e2Gdb2bbMKocLkGUEYaAPPnhvJFRbZ4p7rM8FAkwGsBiC66uJBADw8LxmrKnqgworLWMv+oJF5ey/RHhhYrQSFLl4uDLUx/Nm9vKzXVXCkscIy2zIU3X92O414abcRrDYYW9oTAepv1jPVPsh1WAMFTpm4RFYXDXjQxUFXaW4VGRzndAbOlrPMr7QlCM3b8M/a8c3xj1zpGynT8TgaCAWj/UYagF1DsKuvIg33bB+uRMB0sLnHBGGoIidlywHORhxlafbZ6OtBFtAVZUIQ/KDX+Y9fYWM8eADq1OT8/p7eAWvP1EN5kWn6ncaPdcwS9fGKik1jiHpIAVcwzr53GP7EOEI8w7Uq6k06FwaC/6D6RbrsNA9qDDntNPigwPVbspdylUcQC0F9iVEccY99+gp7qkWy4MJH015q3W/G7lrEW91symkXmiqpew4si6SZUb+j+Y7wjzSYgAMAAAAABJRU5ErkJggg==",EE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z'/%3e%3c/svg%3e";var Km={};/**
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
 */const Ry=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},IE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,S=(u&3)<<4|p>>4;let N=(p&15)<<2|_>>6,F=_&63;g||(F=64,h||(N=64)),s.push(t[E],t[S],t[N],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ry(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):IE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||S==null)throw new TE;const N=u<<2|p>>4;if(s.push(N),_!==64){const F=p<<4&240|_>>2;if(s.push(F),S!==64){const U=_<<6&192|S;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class TE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AE=function(r){const e=Ry(r);return Cy.encodeByteArray(e,!0)},Uu=function(r){return AE(r).replace(/\./g,"")},$d=function(r){try{return Cy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RE=()=>SE().__FIREBASE_DEFAULTS__,CE=()=>{if(typeof process>"u"||typeof Km>"u")return;const r=Km.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$d(r[1]);return e&&JSON.parse(e)},uc=()=>{try{return RE()||CE()||kE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ky=r=>{var e,t;return(t=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},PE=r=>{const e=ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Py=()=>{var r;return(r=uc())===null||r===void 0?void 0:r.config},Ny=r=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class NE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function OE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Uu(JSON.stringify(t)),Uu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function DE(){var r;const e=(r=uc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const r=Ge();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function LE(){return!DE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ME(){try{return typeof indexedDB=="object"}catch{return!1}}function VE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const bE="FirebaseError";class bn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=bE,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?UE(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new bn(o,p,s)}}function UE(r,e){return r.replace(FE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const FE=/\{\$([^}]+)}/g;function jE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fu(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(qm(u)&&qm(h)){if(!Fu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function qm(r){return r!==null&&typeof r=="object"}/**
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
 */function as(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ea(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ia(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function My(r,e){const t=new zE(r,e);return t.subscribe.bind(t)}class zE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");BE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=id),o.error===void 0&&(o.error=id),o.complete===void 0&&(o.complete=id);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function id(){}/**
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
 */function It(r){return r&&r._delegate?r._delegate:r}class kr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class HE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new NE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($E(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:WE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WE(r){return r===Xi?void 0:r}function $E(r){return r.instantiationMode==="EAGER"}/**
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
 */class GE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Se||(Se={}));const KE={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},qE=Se.INFO,QE={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},XE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=QE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=qE,this._logHandler=XE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const YE=(r,e)=>e.some(t=>r instanceof t);let Qm,Xm;function JE(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,vd=new WeakMap,by=new WeakMap,sd=new WeakMap,Gd=new WeakMap;function eI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ci(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Vy.set(t,r)}).catch(()=>{}),Gd.set(e,r),e}function tI(r){if(vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});vd.set(r,e)}let wd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||by.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function nI(r){wd=r(wd)}function rI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(od(this),e,...t);return by.set(s,e.sort?e.sort():[e]),ci(s)}:ZE().includes(r)?function(...e){return r.apply(od(this),e),ci(Vy.get(this))}:function(...e){return ci(r.apply(od(this),e))}}function iI(r){return typeof r=="function"?rI(r):(r instanceof IDBTransaction&&tI(r),YE(r,JE())?new Proxy(r,wd):r)}function ci(r){if(r instanceof IDBRequest)return eI(r);if(sd.has(r))return sd.get(r);const e=iI(r);return e!==r&&(sd.set(r,e),Gd.set(e,r)),e}const od=r=>Gd.get(r);function sI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=ci(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ci(h.result),g.oldVersion,g.newVersion,ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const oI=["get","getKey","getAll","getAllKeys","count"],aI=["put","add","delete","clear"],ad=new Map;function Ym(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=aI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||oI.includes(t)))return;const u=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return ad.set(e,u),u}nI(r=>({...r,get:(e,t,s)=>Ym(e,t)||r.get(e,t,s),has:(e,t)=>!!Ym(e,t)||r.has(e,t)}));/**
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
 */class lI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ed="@firebase/app",Jm="0.11.1";/**
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
 */const Pr=new cc("@firebase/app"),cI="@firebase/app-compat",hI="@firebase/analytics-compat",dI="@firebase/analytics",fI="@firebase/app-check-compat",pI="@firebase/app-check",mI="@firebase/auth",gI="@firebase/auth-compat",yI="@firebase/database",_I="@firebase/data-connect",vI="@firebase/database-compat",wI="@firebase/functions",EI="@firebase/functions-compat",II="@firebase/installations",TI="@firebase/installations-compat",AI="@firebase/messaging",SI="@firebase/messaging-compat",RI="@firebase/performance",CI="@firebase/performance-compat",kI="@firebase/remote-config",PI="@firebase/remote-config-compat",NI="@firebase/storage",OI="@firebase/storage-compat",DI="@firebase/firestore",xI="@firebase/vertexai",LI="@firebase/firestore-compat",MI="firebase",VI="11.3.1";/**
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
 */const Id="[DEFAULT]",bI={[Ed]:"fire-core",[cI]:"fire-core-compat",[dI]:"fire-analytics",[hI]:"fire-analytics-compat",[pI]:"fire-app-check",[fI]:"fire-app-check-compat",[mI]:"fire-auth",[gI]:"fire-auth-compat",[yI]:"fire-rtdb",[_I]:"fire-data-connect",[vI]:"fire-rtdb-compat",[wI]:"fire-fn",[EI]:"fire-fn-compat",[II]:"fire-iid",[TI]:"fire-iid-compat",[AI]:"fire-fcm",[SI]:"fire-fcm-compat",[RI]:"fire-perf",[CI]:"fire-perf-compat",[kI]:"fire-rc",[PI]:"fire-rc-compat",[NI]:"fire-gcs",[OI]:"fire-gcs-compat",[DI]:"fire-fst",[LI]:"fire-fst-compat",[xI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
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
 */const ju=new Map,UI=new Map,Td=new Map;function Zm(r,e){try{r.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fi(r){const e=r.name;if(Td.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,r);for(const t of ju.values())Zm(t,r);for(const t of UI.values())Zm(t,r);return!0}function Kd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function vt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const FI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new vi("app","Firebase",FI);/**
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
 */class jI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=VI;function Uy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Id,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw hi.create("bad-app-name",{appName:String(o)});if(t||(t=Py()),!t)throw hi.create("no-options");const u=ju.get(o);if(u){if(Fu(t,u.options)&&Fu(s,u.config))return u;throw hi.create("duplicate-app",{appName:o})}const h=new GE(o);for(const g of Td.values())h.addComponent(g);const p=new jI(t,s,h);return ju.set(o,p),p}function Fy(r=Id){const e=ju.get(r);if(!e&&r===Id&&Py())return Uy();if(!e)throw hi.create("no-app",{appName:r});return e}function Xn(r,e,t){var s;let o=(s=bI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(p.join(" "));return}fi(new kr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const zI="firebase-heartbeat-database",BI=1,Da="firebase-heartbeat-store";let ld=null;function jy(){return ld||(ld=sI(zI,BI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(r=>{throw hi.create("idb-open",{originalErrorMessage:r.message})})),ld}async function HI(r){try{const t=(await jy()).transaction(Da),s=await t.objectStore(Da).get(zy(r));return await t.done,s}catch(e){if(e instanceof bn)Pr.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function eg(r,e){try{const s=(await jy()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,zy(r)),await s.done}catch(t){if(t instanceof bn)Pr.warn(t.message);else{const s=hi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(s.message)}}}function zy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const WI=1024,$I=30;class GI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=tg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>$I){const h=QI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tg(),{heartbeatsToSend:s,unsentEntries:o}=KI(this._heartbeatsCache.heartbeats),u=Uu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Pr.warn(t),""}}}function tg(){return new Date().toISOString().substring(0,10)}function KI(r,e=WI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ng(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ng(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ME()?VE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return eg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return eg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ng(r){return Uu(JSON.stringify({version:2,heartbeats:r})).length}function QI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function XI(r){fi(new kr("platform-logger",e=>new lI(e),"PRIVATE")),fi(new kr("heartbeat",e=>new GI(e),"PRIVATE")),Xn(Ed,Jm,r),Xn(Ed,Jm,"esm2017"),Xn("fire-js","")}XI("");var YI="firebase",JI="11.3.1";/**
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
 */Xn(YI,JI,"app");function za(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function By(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=By,Hy=new vi("auth","Firebase",By());/**
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
 */const zu=new cc("@firebase/auth");function eT(r,...e){zu.logLevel<=Se.WARN&&zu.warn(`Auth (${Or}): ${r}`,...e)}function Au(r,...e){zu.logLevel<=Se.ERROR&&zu.error(`Auth (${Or}): ${r}`,...e)}/**
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
 */function Vn(r,...e){throw qd(r,...e)}function Yn(r,...e){return qd(r,...e)}function Wy(r,e,t){const s=Object.assign(Object.assign({},ZI()),{[e]:t});return new vi("auth","Firebase",s).create(e,{appName:r.name})}function Ar(r){return Wy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Hy.create(r,...e)}function ge(r,e,...t){if(!r)throw qd(e,...t)}function Ir(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Au(e),new Error(e)}function Nr(r,e){r||Ir(e)}/**
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
 */function Ad(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tT(){return rg()==="http:"||rg()==="https:"}function rg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function nT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tT()||xy()||"connection"in navigator)?navigator.onLine:!0}function rT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */let Ba=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=Oy()||Ly()}get(){return nT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Qd(r,e){Nr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */let $y=class{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const iT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sT=new Ba(3e4,6e4);function wi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ei(r,e,t,s,o={}){return Gy(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=as(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return Dy()||(_.referrerPolicy="no-referrer"),$y.fetch()(Ky(r,r.config.apiHost,t,p),_)})}async function Gy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},iT),e);try{const o=new aT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw gu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw gu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Wy(r,E,_);Vn(r,E)}}catch(o){if(o instanceof bn)throw o;Vn(r,"network-request-failed",{message:String(o)})}}async function Ha(r,e,t,s,o={}){const u=await Ei(r,e,t,s,o);return"mfaPendingCredential"in u&&Vn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function Ky(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Qd(r.config,o):`${r.config.apiScheme}://${o}`}function oT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let aT=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Yn(this.auth,"network-request-failed")),sT.get())})}};function gu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Yn(r,e,s);return o.customData._tokenResponse=t,o}function ig(r){return r!==void 0&&r.enterprise!==void 0}class lT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return oT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uT(r,e){return Ei(r,"GET","/v2/recaptchaConfig",wi(r,e))}/**
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
 */async function cT(r,e){return Ei(r,"POST","/v1/accounts:delete",e)}async function qy(r,e){return Ei(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(r,e=!1){const t=It(r),s=await t.getIdToken(e),o=Xd(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Sa(ud(o.auth_time)),issuedAtTime:Sa(ud(o.iat)),expirationTime:Sa(ud(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ud(r){return Number(r)*1e3}function Xd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const o=$d(t);return o?JSON.parse(o):(Au("Failed to decode base64 JWT payload"),null)}catch(o){return Au("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sg(r){const e=Xd(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof bn&&dT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function dT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */let fT=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let Sd=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sa(this.lastLoginAt),this.creationTime=Sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Bu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await xa(r,qy(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Qy(u.providerUserInfo):[],p=mT(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),E=g?_:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Sd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function pT(r){const e=It(r);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Qy(r){return r.map(e=>{var{providerId:t}=e,s=za(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function gT(r,e){const t=await Gy(r,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=Ky(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",$y.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yT(r,e){return Ei(r,"POST","/v2/accounts:revokeToken",wi(r,e))}/**
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
 */let cd=class Rd{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await gT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Rd;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rd,this.toJSON())}_performRefresh(){return Ir("not implemented")}};/**
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
 */function ri(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}let Hu=class Ta{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Sd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await xa(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ta(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await xa(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,g,_,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,N=(o=t.email)!==null&&o!==void 0?o:void 0,F=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,U=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(p=t.tenantId)!==null&&p!==void 0?p:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,G=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ne=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:J,emailVerified:he,isAnonymous:we,providerData:ve,stsTokenManager:P}=t;ge(J&&P,e,"internal-error");const I=cd.fromJSON(this.name,P);ge(typeof J=="string",e,"internal-error"),ri(S,e.name),ri(N,e.name),ge(typeof he=="boolean",e,"internal-error"),ge(typeof we=="boolean",e,"internal-error"),ri(F,e.name),ri(U,e.name),ri(W,e.name),ri(z,e.name),ri(G,e.name),ri(ne,e.name);const A=new Ta({uid:J,auth:e,email:N,emailVerified:he,displayName:S,isAnonymous:we,photoURL:U,phoneNumber:F,tenantId:W,stsTokenManager:I,createdAt:G,lastLoginAt:ne});return ve&&Array.isArray(ve)&&(A.providerData=ve.map(k=>Object.assign({},k))),z&&(A._redirectEventId=z),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new cd;o.updateFromServerResponse(t);const u=new Ta({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Qy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new cd;p.updateFromIdToken(s);const g=new Ta({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Sd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}};/**
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
 */const og=new Map;function Tr(r){Nr(r instanceof Function,"Expected a class definition");let e=og.get(r);return e?(Nr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,og.set(r,e),e)}/**
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
 */let Xy=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Xy.type="NONE";const ag=Xy;/**
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
 */function Su(r,e,t){return`firebase:${r}:${e}:${t}`}let lg=class Ru{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Su(this.userKey,o.apiKey,u),this.fullPersistenceKey=Su("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hu._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ru(Tr(ag),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Tr(ag);const h=Su(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const E=await _._get(h);if(E){const S=Hu._fromJSON(e,E);_!==u&&(p=S),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ru(u,e,s):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new Ru(u,e,s))}};/**
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
 */function ug(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(Jy(e))return"Safari";if((e.includes("chrome/")||Zy(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yy(r=Ge()){return/firefox\//i.test(r)}function Jy(r=Ge()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zy(r=Ge()){return/crios\//i.test(r)}function e_(r=Ge()){return/iemobile/i.test(r)}function t_(r=Ge()){return/android/i.test(r)}function n_(r=Ge()){return/blackberry/i.test(r)}function r_(r=Ge()){return/webos/i.test(r)}function Yd(r=Ge()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _T(r=Ge()){var e;return Yd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vT(){return xE()&&document.documentMode===10}function i_(r=Ge()){return Yd(r)||t_(r)||r_(r)||n_(r)||/windows phone/i.test(r)||e_(r)}/**
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
 */function s_(r,e=[]){let t;switch(r){case"Browser":t=ug(Ge());break;case"Worker":t=`${ug(Ge())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${s}`}/**
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
 */let wT=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}};/**
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
 */async function ET(r,e={}){return Ei(r,"GET","/v2/passwordPolicy",wi(r,e))}/**
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
 */const IT=6;let TT=class{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:IT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}};/**
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
 */let AT=class{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new wT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await lg.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qy(this,{idToken:e}),s=await Hu._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Ar(this));const t=e?It(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ET(this),t=new TT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await lg.create(this,[Tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&eT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function ls(r){return It(r)}let cg=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=My(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ST(r){hc=r}function o_(r){return hc.loadJS(r)}function RT(){return hc.recaptchaEnterpriseScript}function CT(){return hc.gapiScript}function kT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class PT{constructor(){this.enterprise=new NT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const OT="recaptcha-enterprise",a_="NO_RECAPTCHA";class DT{constructor(e){this.type=OT,this.auth=ls(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{uT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new lT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{p(g)})})}function o(u,h,p){const g=window.grecaptcha;ig(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(a_)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&ig(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=RT();g.length!==0&&(g+=p),o_(g).then(()=>{o(p,u,h)}).catch(_=>{h(_)})}}).catch(p=>{h(p)})})}}async function hg(r,e,t,s=!1,o=!1){const u=new DT(r);let h;if(o)h=a_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Cd(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await hg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await hg(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function xT(r,e){const t=Kd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Fu(u,e??{}))return o;Vn(o,"already-initialized")}return t.initialize({options:e})}function LT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MT(r,e,t){const s=ls(r);ge(s._canInitEmulator,s,"emulator-config-failed"),ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=l_(e),{host:h,port:p}=VT(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),bT()}function l_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VT(r){const e=l_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:dg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:dg(h)}}}function dg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function bT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Jd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function UT(r,e){return Ei(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function FT(r,e){return Ha(r,"POST","/v1/accounts:signInWithPassword",wi(r,e))}/**
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
 */async function jT(r,e){return Ha(r,"POST","/v1/accounts:signInWithEmailLink",wi(r,e))}async function zT(r,e){return Ha(r,"POST","/v1/accounts:signInWithEmailLink",wi(r,e))}/**
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
 */class La extends Jd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new La(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new La(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,t,"signInWithPassword",FT);case"emailLink":return jT(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,s,"signUpPassword",UT);case"emailLink":return zT(e,{idToken:t,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ao(r,e){return Ha(r,"POST","/v1/accounts:signInWithIdp",wi(r,e))}/**
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
 */const BT="http://localhost";class ts extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=za(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ts(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ao(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ao(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ao(e,t)}buildRequest(){const e={requestUri:BT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=as(t)}return e}}/**
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
 */function HT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WT(r){const e=Ea(Ia(r)).link,t=e?Ea(Ia(e)).deep_link_id:null,s=Ea(Ia(r)).deep_link_id;return(s?Ea(Ia(s)).link:null)||s||t||e||r}class Zd{constructor(e){var t,s,o,u,h,p;const g=Ea(Ia(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,S=HT((o=g.mode)!==null&&o!==void 0?o:null);ge(_&&E&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=WT(e);try{return new Zd(t)}catch{return null}}}/**
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
 */class yo{constructor(){this.providerId=yo.PROVIDER_ID}static credential(e,t){return La._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Zd.parseLink(t);return ge(s,"argument-error"),La._fromEmailAndCode(e,s.code,s.tenantId)}}yo.PROVIDER_ID="password";yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class u_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends u_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class si extends Wa{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
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
 */class oi extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
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
 */class ai extends Wa{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
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
 */class li extends Wa{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return li.credential(t,s)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
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
 */async function $T(r,e){return Ha(r,"POST","/v1/accounts:signUp",wi(r,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Hu._fromIdTokenResponse(e,s,o),h=fg(s);return new ns({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=fg(s);return new ns({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function fg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Wu extends bn{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Wu(e,t,s,o)}}function c_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(r,u,e,s):u})}async function GT(r,e,t=!1){const s=await xa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ns._forOperation(r,"link",s)}/**
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
 */async function KT(r,e,t=!1){const{auth:s}=r;if(vt(s.app))return Promise.reject(Ar(s));const o="reauthenticate";try{const u=await xa(r,c_(s,o,e,r),t);ge(u.idToken,s,"internal-error");const h=Xd(u.idToken);ge(h,s,"internal-error");const{sub:p}=h;return ge(r.uid===p,s,"user-mismatch"),ns._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Vn(s,"user-mismatch"),u}}/**
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
 */async function h_(r,e,t=!1){if(vt(r.app))return Promise.reject(Ar(r));const s="signIn",o=await c_(r,s,e),u=await ns._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function qT(r,e){return h_(ls(r),e)}/**
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
 */async function d_(r){const e=ls(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QT(r,e,t){if(vt(r.app))return Promise.reject(Ar(r));const s=ls(r),h=await Cd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$T).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&d_(r),g}),p=await ns._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function XT(r,e,t){return vt(r.app)?Promise.reject(Ar(r)):qT(It(r),yo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&d_(r),s})}function YT(r,e,t,s){return It(r).onIdTokenChanged(e,t,s)}function JT(r,e,t){return It(r).beforeAuthStateChanged(e,t)}function ZT(r,e,t,s){return It(r).onAuthStateChanged(e,t,s)}function eA(r){return It(r).signOut()}const $u="__sak";/**
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
 */class f_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tA=1e3,nA=10;class p_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=i_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);vT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const rA=p_;/**
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
 */class m_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}m_.type="SESSION";const g_=m_;/**
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
 */function iA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,u)),g=await iA(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function ef(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class sA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,g)=>{const _=ef("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const N=S;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(N.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Jn(){return window}function oA(r){Jn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function y_(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function aA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function uA(){return y_()?self:null}/**
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
 */const __="firebaseLocalStorageDb",cA=1,Gu="firebaseLocalStorage",v_="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fc(r,e){return r.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function hA(){const r=indexedDB.deleteDatabase(__);return new $a(r).toPromise()}function kd(){const r=indexedDB.open(__,cA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Gu,{keyPath:v_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Gu)?e(s):(s.close(),await hA(),e(await kd()))})})}async function pg(r,e,t){const s=fc(r,!0).put({[v_]:e,value:t});return new $a(s).toPromise()}async function dA(r,e){const t=fc(r,!1).get(e),s=await new $a(t).toPromise();return s===void 0?null:s.value}function mg(r,e){const t=fc(r,!0).delete(e);return new $a(t).toPromise()}const fA=800,pA=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>pA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(uA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aA(),!this.activeServiceWorker)return;this.sender=new sA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await pg(e,$u,"1"),await mg(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>dA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=fc(o,!1).getAll();return new $a(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const mA=w_;new Ba(3e4,6e4);/**
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
 */function gA(r,e){return e?Tr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class tf extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yA(r){return h_(r.auth,new tf(r),r.bypassAuthState)}function _A(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),KT(t,new tf(r),r.bypassAuthState)}async function vA(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),GT(t,new tf(r),r.bypassAuthState)}/**
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
 */class E_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yA;case"linkViaPopup":case"linkViaRedirect":return vA;case"reauthViaPopup":case"reauthViaRedirect":return _A;default:Vn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wA=new Ba(2e3,1e4);class oo extends E_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wA.get())};e()}}oo.currentPopupAction=null;/**
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
 */const EA="pendingRedirect",Cu=new Map;class IA extends E_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const s=await TA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TA(r,e){const t=RA(e),s=SA(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function AA(r,e){Cu.set(r._key(),e)}function SA(r){return Tr(r._redirectPersistence)}function RA(r){return Su(EA,r.config.apiKey,r.name)}async function CA(r,e,t=!1){if(vt(r.app))return Promise.reject(Ar(r));const s=ls(r),o=gA(s,e),h=await new IA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const kA=10*60*1e3;class PA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!I_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kA&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function I_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(r);default:return!1}}/**
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
 */async function OA(r,e={}){return Ei(r,"GET","/v1/projects",e)}/**
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
 */const DA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xA=/^https?/;async function LA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OA(r);for(const t of e)try{if(MA(t))return}catch{}Vn(r,"unauthorized-domain")}function MA(r){const e=Ad(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!xA.test(t))return!1;if(DA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const VA=new Ba(3e4,6e4);function yg(){const r=Jn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function bA(r){return new Promise((e,t)=>{var s,o,u;function h(){yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yg(),t(Yn(r,"network-request-failed"))},timeout:VA.get()})}if(!((o=(s=Jn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Jn().gapi)===null||u===void 0)&&u.load)h();else{const p=kT("iframefcb");return Jn()[p]=()=>{gapi.load?h():t(Yn(r,"network-request-failed"))},o_(`${CT()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw ku=null,e})}let ku=null;function UA(r){return ku=ku||bA(r),ku}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const FA=new Ba(5e3,15e3),jA="__/auth/iframe",zA="emulator/auth/iframe",BA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WA(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Qd(e,zA):`https://${r.config.authDomain}/${jA}`,s={apiKey:e.apiKey,appName:r.name,v:Or},o=HA.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${as(s).slice(1)}`}async function $A(r){const e=await UA(r),t=Jn().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:WA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Yn(r,"network-request-failed"),p=Jn().setTimeout(()=>{u(h)},FA.get());function g(){Jn().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const GA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KA=500,qA=600,QA="_blank",XA="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YA(r,e,t,s=KA,o=qA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},GA),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ge().toLowerCase();t&&(p=Zy(_)?QA:t),Yy(_)&&(e=e||XA,g.scrollbars="yes");const E=Object.entries(g).reduce((N,[F,U])=>`${N}${F}=${U},`,"");if(_T(_)&&p!=="_self")return JA(e||"",p),new _g(null);const S=window.open(e||"",p,E);ge(S,r,"popup-blocked");try{S.focus()}catch{}return new _g(S)}function JA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ZA="__/auth/handler",e0="emulator/auth/handler",t0=encodeURIComponent("fac");async function vg(r,e,t,s,o,u){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Or,eventId:o};if(e instanceof u_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",jE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof Wa){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await r._getAppCheckToken(),_=g?`#${t0}=${encodeURIComponent(g)}`:"";return`${n0(r)}?${as(p).slice(1)}${_}`}function n0({config:r}){return r.emulator?Qd(r,e0):`https://${r.authDomain}/${ZA}`}/**
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
 */const hd="webStorageSupport";class r0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=CA,this._overrideRedirectResult=AA}async _openPopup(e,t,s,o){var u;Nr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await vg(e,t,s,Ad(),o);return YA(e,h,ef())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await vg(e,t,s,Ad(),o);return oA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $A(e),s=new PA(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hd,{type:hd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[hd];h!==void 0&&t(!!h),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return i_()||Jy()||Yd()}}const i0=r0;var wg="@firebase/auth",Eg="1.9.0";/**
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
 */let s0=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function o0(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function a0(r){fi(new kr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s_(r)},_=new AT(s,o,u,g);return LT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fi(new kr("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(s=>new s0(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(wg,Eg,o0(r)),Xn(wg,Eg,"esm2017")}/**
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
 */const l0=5*60,u0=Ny("authIdTokenMaxAge")||l0;let Ig=null;const c0=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>u0)return;const o=t==null?void 0:t.token;Ig!==o&&(Ig=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function h0(r=Fy()){const e=Kd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=xT(r,{popupRedirectResolver:i0,persistence:[mA,rA,g_]}),s=Ny("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=c0(u.toString());JT(t,h,()=>h(t.currentUser)),YT(t,p=>h(p))}}const o=ky("auth");return o&&MT(t,`http://${o}`),t}function d0(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ST({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Yn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",d0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});a0("Browser");function T_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f0=T_,A_=new vi("auth","Firebase",T_());/**
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
 */const Ku=new cc("@firebase/auth");function p0(r,...e){Ku.logLevel<=Se.WARN&&Ku.warn(`Auth (${Or}): ${r}`,...e)}function Pu(r,...e){Ku.logLevel<=Se.ERROR&&Ku.error(`Auth (${Or}): ${r}`,...e)}/**
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
 */function Tg(r,...e){throw nf(r,...e)}function S_(r,...e){return nf(r,...e)}function R_(r,e,t){const s=Object.assign(Object.assign({},f0()),{[e]:t});return new vi("auth","Firebase",s).create(e,{appName:r.name})}function Nu(r){return R_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return A_.create(r,...e)}function Me(r,e,...t){if(!r)throw nf(e,...t)}function Ra(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pu(e),new Error(e)}function qu(r,e){r||Ra(e)}function m0(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function g0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m0()||xy()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class _0{constructor(e,t){this.shortDelay=e,this.longDelay=t,qu(t>e,"Short delay should be less than long delay!"),this.isMobile=Oy()||Ly()}get(){return g0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function v0(r,e){qu(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class C_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ra("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ra("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ra("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const E0=new _0(3e4,6e4);function k_(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function pc(r,e,t,s,o={}){return P_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=as(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return Dy()||(_.referrerPolicy="no-referrer"),C_.fetch()(N_(r,r.config.apiHost,t,p),_)})}async function P_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},w0),e);try{const o=new I0(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw yu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw yu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw yu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw yu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw R_(r,E,_);Tg(r,E)}}catch(o){if(o instanceof bn)throw o;Tg(r,"network-request-failed",{message:String(o)})}}function N_(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?v0(r.config,o):`${r.config.apiScheme}://${o}`}class I0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(S_(this.auth,"network-request-failed")),E0.get())})}}function yu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=S_(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function T0(r,e){return pc(r,"POST","/v1/accounts:delete",e)}async function O_(r,e){return pc(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ca(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A0(r,e=!1){const t=It(r),s=await t.getIdToken(e),o=D_(s);Me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ca(dd(o.auth_time)),issuedAtTime:Ca(dd(o.iat)),expirationTime:Ca(dd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function dd(r){return Number(r)*1e3}function D_(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=$d(t);return o?JSON.parse(o):(Pu("Failed to decode base64 JWT payload"),null)}catch(o){return Pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Sg(r){const e=D_(r);return Me(e,"internal-error"),Me(typeof e.exp<"u","internal-error"),Me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pd(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof bn&&S0(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function S0({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class R0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Pd(r,O_(t,{idToken:s}));Me(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?x_(u.providerUserInfo):[],p=k0(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),E=g?_:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Nd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function C0(r){const e=It(r);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k0(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function x_(r){return r.map(e=>{var{providerId:t}=e,s=za(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function P0(r,e){const t=await P_(r,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=N_(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",C_.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function N0(r,e){return pc(r,"POST","/v2/accounts:revokeToken",k_(r,e))}/**
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
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Me(e.idToken,"internal-error"),Me(typeof e.idToken<"u","internal-error"),Me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Me(e.length!==0,"internal-error");const t=Sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await P0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new lo;return s&&(Me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Me(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Ra("not implemented")}}/**
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
 */function ii(r,e){Me(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Nd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Pd(this,this.stsTokenManager.getToken(this.auth,e));return Me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A0(this,e)}reload(){return C0(this)}_assign(e){this!==e&&(Me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Nu(this.auth));const e=await this.getIdToken();return await Pd(this,T0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,g,_,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,N=(o=t.email)!==null&&o!==void 0?o:void 0,F=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,U=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(p=t.tenantId)!==null&&p!==void 0?p:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,G=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ne=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:J,emailVerified:he,isAnonymous:we,providerData:ve,stsTokenManager:P}=t;Me(J&&P,e,"internal-error");const I=lo.fromJSON(this.name,P);Me(typeof J=="string",e,"internal-error"),ii(S,e.name),ii(N,e.name),Me(typeof he=="boolean",e,"internal-error"),Me(typeof we=="boolean",e,"internal-error"),ii(F,e.name),ii(U,e.name),ii(W,e.name),ii(z,e.name),ii(G,e.name),ii(ne,e.name);const A=new ui({uid:J,auth:e,email:N,emailVerified:he,displayName:S,isAnonymous:we,photoURL:U,phoneNumber:F,tenantId:W,stsTokenManager:I,createdAt:G,lastLoginAt:ne});return ve&&Array.isArray(ve)&&(A.providerData=ve.map(k=>Object.assign({},k))),z&&(A._redirectEventId=z),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new lo;o.updateFromServerResponse(t);const u=new ui({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Me(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?x_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new lo;p.updateFromIdToken(s);const g=new ui({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Nd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const Rg=new Map;function Yi(r){qu(r instanceof Function,"Expected a class definition");let e=Rg.get(r);return e?(qu(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Rg.set(r,e),e)}/**
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
 */class L_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}L_.type="NONE";const Cg=L_;/**
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
 */function fd(r,e,t){return`firebase:${r}:${e}:${t}`}class uo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=fd(this.userKey,o.apiKey,u),this.fullPersistenceKey=fd("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new uo(Yi(Cg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Yi(Cg);const h=fd(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const E=await _._get(h);if(E){const S=ui._fromJSON(e,E);_!==u&&(p=S),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new uo(u,e,s):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new uo(u,e,s))}}/**
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
 */function kg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V0(e))return"Blackberry";if(b0(e))return"Webos";if(D0(e))return"Safari";if((e.includes("chrome/")||x0(e))&&!e.includes("edge/"))return"Chrome";if(M0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function O0(r=Ge()){return/firefox\//i.test(r)}function D0(r=Ge()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x0(r=Ge()){return/crios\//i.test(r)}function L0(r=Ge()){return/iemobile/i.test(r)}function M0(r=Ge()){return/android/i.test(r)}function V0(r=Ge()){return/blackberry/i.test(r)}function b0(r=Ge()){return/webos/i.test(r)}/**
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
 */function M_(r,e=[]){let t;switch(r){case"Browser":t=kg(Ge());break;case"Worker":t=`${kg(Ge())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${s}`}/**
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
 */class U0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function F0(r,e={}){return pc(r,"GET","/v2/passwordPolicy",k_(r,e))}/**
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
 */const j0=6;class z0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:j0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class B0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new U0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yi(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await O_(this,{idToken:e}),s=await ui._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Nu(this));const t=e?It(e):null;return t&&Me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Nu(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Nu(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F0(this),t=new z0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await N0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yi(e)||this._popupRedirectResolver;Me(t,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Me(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&p0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function H0(r){return It(r)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=My(t=>this.observer=t)}get next(){return Me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function W0(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Yi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}var Ng="@firebase/auth",Og="1.9.0";/**
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
 */class $0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function G0(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K0(r){fi(new kr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M_(r)},_=new B0(s,o,u,g);return W0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fi(new kr("auth-internal",e=>{const t=H0(e.getProvider("auth").getImmediate());return(s=>new $0(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Ng,Og,G0(r)),Xn(Ng,Og,"esm2017")}K0("WebExtension");var Dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function A(){}A.prototype=I.prototype,P.D=I.prototype,P.prototype=new A,P.prototype.constructor=P,P.C=function(k,D,L){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return I.prototype[D].apply(k,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)k[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)k[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=P.g[0],A=P.g[1],D=P.g[2];var L=P.g[3],R=I+(L^A&(D^L))+k[0]+3614090360&4294967295;I=A+(R<<7&4294967295|R>>>25),R=L+(D^I&(A^D))+k[1]+3905402710&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(A^L&(I^A))+k[2]+606105819&4294967295,D=L+(R<<17&4294967295|R>>>15),R=A+(I^D&(L^I))+k[3]+3250441966&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(L^A&(D^L))+k[4]+4118548399&4294967295,I=A+(R<<7&4294967295|R>>>25),R=L+(D^I&(A^D))+k[5]+1200080426&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(A^L&(I^A))+k[6]+2821735955&4294967295,D=L+(R<<17&4294967295|R>>>15),R=A+(I^D&(L^I))+k[7]+4249261313&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(L^A&(D^L))+k[8]+1770035416&4294967295,I=A+(R<<7&4294967295|R>>>25),R=L+(D^I&(A^D))+k[9]+2336552879&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(A^L&(I^A))+k[10]+4294925233&4294967295,D=L+(R<<17&4294967295|R>>>15),R=A+(I^D&(L^I))+k[11]+2304563134&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(L^A&(D^L))+k[12]+1804603682&4294967295,I=A+(R<<7&4294967295|R>>>25),R=L+(D^I&(A^D))+k[13]+4254626195&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(A^L&(I^A))+k[14]+2792965006&4294967295,D=L+(R<<17&4294967295|R>>>15),R=A+(I^D&(L^I))+k[15]+1236535329&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(D^L&(A^D))+k[1]+4129170786&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^D&(I^A))+k[6]+3225465664&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(L^I))+k[11]+643717713&4294967295,D=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(D^L))+k[0]+3921069994&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^L&(A^D))+k[5]+3593408605&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^D&(I^A))+k[10]+38016083&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(L^I))+k[15]+3634488961&4294967295,D=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(D^L))+k[4]+3889429448&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^L&(A^D))+k[9]+568446438&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^D&(I^A))+k[14]+3275163606&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(L^I))+k[3]+4107603335&4294967295,D=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(D^L))+k[8]+1163531501&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^L&(A^D))+k[13]+2850285829&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^D&(I^A))+k[2]+4243563512&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(L^I))+k[7]+1735328473&4294967295,D=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(D^L))+k[12]+2368359562&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(A^D^L)+k[5]+4294588738&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^D)+k[8]+2272392833&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^A)+k[11]+1839030562&4294967295,D=L+(R<<16&4294967295|R>>>16),R=A+(D^L^I)+k[14]+4259657740&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^L)+k[1]+2763975236&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^D)+k[4]+1272893353&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^A)+k[7]+4139469664&4294967295,D=L+(R<<16&4294967295|R>>>16),R=A+(D^L^I)+k[10]+3200236656&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^L)+k[13]+681279174&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^D)+k[0]+3936430074&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^A)+k[3]+3572445317&4294967295,D=L+(R<<16&4294967295|R>>>16),R=A+(D^L^I)+k[6]+76029189&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^L)+k[9]+3654602809&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^D)+k[12]+3873151461&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^A)+k[15]+530742520&4294967295,D=L+(R<<16&4294967295|R>>>16),R=A+(D^L^I)+k[2]+3299628645&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(D^(A|~L))+k[0]+4096336452&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~D))+k[7]+1126891415&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~A))+k[14]+2878612391&4294967295,D=L+(R<<15&4294967295|R>>>17),R=A+(L^(D|~I))+k[5]+4237533241&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~L))+k[12]+1700485571&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~D))+k[3]+2399980690&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~A))+k[10]+4293915773&4294967295,D=L+(R<<15&4294967295|R>>>17),R=A+(L^(D|~I))+k[1]+2240044497&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~L))+k[8]+1873313359&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~D))+k[15]+4264355552&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~A))+k[6]+2734768916&4294967295,D=L+(R<<15&4294967295|R>>>17),R=A+(L^(D|~I))+k[13]+1309151649&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~L))+k[4]+4149444226&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~D))+k[11]+3174756917&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~A))+k[2]+718787259&4294967295,D=L+(R<<15&4294967295|R>>>17),R=A+(L^(D|~I))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+L&4294967295}s.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var A=I-this.blockSize,k=this.B,D=this.h,L=0;L<I;){if(D==0)for(;L<=A;)o(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<I;)if(k[D++]=P.charCodeAt(L++),D==this.blockSize){o(this,k),D=0;break}}else for(;L<I;)if(k[D++]=P[L++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var A=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=A&255,A/=256;for(this.u(P),P=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)P[A++]=this.g[I]>>>k&255;return P};function u(P,I){var A=p;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=I(P)}function h(P,I){this.h=I;for(var A=[],k=!0,D=P.length-1;0<=D;D--){var L=P[D]|0;k&&L==I||(A[D]=L,k=!1)}this.g=A}var p={};function g(P){return-128<=P&&128>P?u(P,function(I){return new h([I|0],0>I?-1:0)}):new h([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return S;if(0>P)return z(_(-P));for(var I=[],A=1,k=0;P>=A;k++)I[k]=P/A|0,A*=4294967296;return new h(I,0)}function E(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return z(E(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(I,8)),k=S,D=0;D<P.length;D+=8){var L=Math.min(8,P.length-D),R=parseInt(P.substring(D,D+L),I);8>L?(L=_(Math.pow(I,L)),k=k.j(L).add(_(R))):(k=k.j(A),k=k.add(_(R)))}return k}var S=g(0),N=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(W(this))return-z(this).m();for(var P=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);P+=(0<=k?k:4294967296+k)*I,I*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(U(this))return"0";if(W(this))return"-"+z(this).toString(P);for(var I=_(Math.pow(P,6)),A=this,k="";;){var D=he(A,I).g;A=G(A,D.j(I));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(P);if(A=D,U(A))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function U(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function W(P){return P.h==-1}r.l=function(P){return P=G(this,P),W(P)?-1:U(P)?0:1};function z(P){for(var I=P.g.length,A=[],k=0;k<I;k++)A[k]=~P.g[k];return new h(A,~P.h).add(N)}r.abs=function(){return W(this)?z(this):this},r.add=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],k=0,D=0;D<=I;D++){var L=k+(this.i(D)&65535)+(P.i(D)&65535),R=(L>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);k=R>>>16,L&=65535,R&=65535,A[D]=R<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function G(P,I){return P.add(z(I))}r.j=function(P){if(U(this)||U(P))return S;if(W(this))return W(P)?z(this).j(z(P)):z(z(this).j(P));if(W(P))return z(this.j(z(P)));if(0>this.l(F)&&0>P.l(F))return _(this.m()*P.m());for(var I=this.g.length+P.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<P.g.length;D++){var L=this.i(k)>>>16,R=this.i(k)&65535,nt=P.i(D)>>>16,Ot=P.i(D)&65535;A[2*k+2*D]+=R*Ot,ne(A,2*k+2*D),A[2*k+2*D+1]+=L*Ot,ne(A,2*k+2*D+1),A[2*k+2*D+1]+=R*nt,ne(A,2*k+2*D+1),A[2*k+2*D+2]+=L*nt,ne(A,2*k+2*D+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function ne(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function J(P,I){this.g=P,this.h=I}function he(P,I){if(U(I))throw Error("division by zero");if(U(P))return new J(S,S);if(W(P))return I=he(z(P),I),new J(z(I.g),z(I.h));if(W(I))return I=he(P,z(I)),new J(z(I.g),I.h);if(30<P.g.length){if(W(P)||W(I))throw Error("slowDivide_ only works with positive integers.");for(var A=N,k=I;0>=k.l(P);)A=we(A),k=we(k);var D=ve(A,1),L=ve(k,1);for(k=ve(k,2),A=ve(A,2);!U(k);){var R=L.add(k);0>=R.l(P)&&(D=D.add(A),L=R),k=ve(k,1),A=ve(A,1)}return I=G(P,D.j(I)),new J(D,I)}for(D=S;0<=P.l(I);){for(A=Math.max(1,Math.floor(P.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=_(A),R=L.j(I);W(R)||0<R.l(P);)A-=k,L=_(A),R=L.j(I);U(L)&&(L=N),D=D.add(L),P=G(P,R)}return new J(D,P)}r.A=function(P){return he(this,P).h},r.and=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&P.i(k);return new h(A,this.h&P.h)},r.or=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|P.i(k);return new h(A,this.h|P.h)},r.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^P.i(k);return new h(A,this.h^P.h)};function we(P){for(var I=P.g.length+1,A=[],k=0;k<I;k++)A[k]=P.i(k)<<1|P.i(k-1)>>>31;return new h(A,P.h)}function ve(P,I){var A=I>>5;I%=32;for(var k=P.g.length-A,D=[],L=0;L<k;L++)D[L]=0<I?P.i(L+A)>>>I|P.i(L+A+1)<<32-I:P.i(L+A);return new h(D,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,rf=h}).apply(typeof Dg<"u"?Dg:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V_,Aa,b_,Ou,Od,U_,F_,j_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in y))break e;y=y[M]}l=l[l.length-1],w=y[l],f=f(w),f!=w&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,w=!1,M={next:function(){if(!w&&y<l.length){var B=y++;return{value:f(B,l[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,y){return l.call.apply(l.bind,arguments)}function S(l,f,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function N(l,f,y){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,N.apply(null,arguments)}function F(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function U(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,M,B){for(var te=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)te[Ve-2]=arguments[Ve];return f.prototype[M].apply(w,te)}}function W(l){const f=l.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=l[w];return y}return[]}function z(l,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const M=l.length||0,B=w.length||0;l.length=M+B;for(let te=0;te<B;te++)l[M+te]=w[te]}else l.push(w)}}class G{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ne(l){return/^[\s\xa0]*$/.test(l)}function J(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function he(l){return he[" "](l),l}he[" "]=function(){};var we=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function ve(l,f,y){for(const w in l)f.call(y,l[w],w,l)}function P(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(y in w)l[y]=w[y];for(let B=0;B<A.length;B++)y=A[B],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function L(l){p.setTimeout(()=>{throw l},0)}function R(){var l=fe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class nt{constructor(){this.h=this.g=null}add(f,y){const w=Ot.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ot=new G(()=>new Dt,l=>l.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,re=!1,fe=new nt,se=()=>{const l=p.Promise.resolve(void 0);Ue=()=>{l.then(x)}};var x=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(y){L(y)}var f=Ot;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}re=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return l}();function Te(l,f){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(we){e:{try{he(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}U(Te,de);var ke={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function je(l,f,y,w,M){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=M,this.key=++Le,this.da=this.fa=!1}function ft(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ir(l){this.src=l,this.g={},this.h=0}ir.prototype.add=function(l,f,y,w,M){var B=l.toString();l=this.g[B],l||(l=this.g[B]=[],this.h++);var te=Dr(l,f,w,M);return-1<te?(f=l[te],y||(f.fa=!1)):(f=new je(f,this.src,B,!!w,M),f.fa=y,l.push(f)),f};function ds(l,f){var y=f.type;if(y in l.g){var w=l.g[y],M=Array.prototype.indexOf.call(w,f,void 0),B;(B=0<=M)&&Array.prototype.splice.call(w,M,1),B&&(ft(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Dr(l,f,y,w){for(var M=0;M<l.length;++M){var B=l[M];if(!B.da&&B.listener==f&&B.capture==!!y&&B.ha==w)return M}return-1}var Ii="closure_lm_"+(1e6*Math.random()|0),fs={};function Io(l,f,y,w,M){if(Array.isArray(f)){for(var B=0;B<f.length;B++)Io(l,f[B],y,w,M);return null}return y=So(y),l&&l[xe]?l.K(f,y,_(w)?!!w.capture:!1,M):To(l,f,y,!1,w,M)}function To(l,f,y,w,M,B){if(!f)throw Error("Invalid event type");var te=_(M)?!!M.capture:!!M,Ve=ms(l);if(Ve||(l[Ii]=Ve=new ir(l)),y=Ve.add(f,y,w,te,B),y.proxy)return y;if(w=el(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Ie||(M=te),M===void 0&&(M=!1),l.addEventListener(f.toString(),w,M);else if(l.attachEvent)l.attachEvent(or(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function el(){function l(y){return f.call(l.src,l.listener,y)}const f=Ao;return l}function ps(l,f,y,w,M){if(Array.isArray(f))for(var B=0;B<f.length;B++)ps(l,f[B],y,w,M);else w=_(w)?!!w.capture:!!w,y=So(y),l&&l[xe]?(l=l.i,f=String(f).toString(),f in l.g&&(B=l.g[f],y=Dr(B,y,w,M),-1<y&&(ft(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete l.g[f],l.h--)))):l&&(l=ms(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Dr(f,y,w,M)),(y=-1<l?f[l]:null)&&sr(y))}function sr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[xe])ds(f.i,l);else{var y=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(y,w,l.capture):f.detachEvent?f.detachEvent(or(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=ms(f))?(ds(y,l),y.h==0&&(y.src=null,f[Ii]=null)):ft(l)}}}function or(l){return l in fs?fs[l]:fs[l]="on"+l}function Ao(l,f){if(l.da)l=!0;else{f=new Te(f,this);var y=l.listener,w=l.ha||l.src;l.fa&&sr(l),l=y.call(w,f)}return l}function ms(l){return l=l[Ii],l instanceof ir?l:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function So(l){return typeof l=="function"?l:(l[gs]||(l[gs]=function(f){return l.handleEvent(f)}),l[gs])}function lt(){$.call(this),this.i=new ir(this),this.M=this,this.F=null}U(lt,$),lt.prototype[xe]=!0,lt.prototype.removeEventListener=function(l,f,y,w){ps(this,l,f,y,w)};function ut(l,f){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new de(f,l);else if(f instanceof de)f.target=f.target||l;else{var M=f;f=new de(w,l),k(f,M)}if(M=!0,y)for(var B=y.length-1;0<=B;B--){var te=f.g=y[B];M=ar(te,w,!0,f)&&M}if(te=f.g=l,M=ar(te,w,!0,f)&&M,M=ar(te,w,!1,f)&&M,y)for(B=0;B<y.length;B++)te=f.g=y[B],M=ar(te,w,!1,f)&&M}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],w=0;w<y.length;w++)ft(y[w]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,w){return this.i.add(String(l),f,!1,y,w)},lt.prototype.L=function(l,f,y,w){return this.i.add(String(l),f,!0,y,w)};function ar(l,f,y,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,B=0;B<f.length;++B){var te=f[B];if(te&&!te.da&&te.capture==y){var Ve=te.listener,ct=te.ha||te.src;te.fa&&ds(l.i,te),M=Ve.call(ct,w)!==!1&&M}}return M&&!w.defaultPrevented}function Ro(l,f,y){if(typeof l=="function")y&&(l=N(l,y));else if(l&&typeof l.handleEvent=="function")l=N(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(l,f||0)}function xr(l){l.g=Ro(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ti extends ${constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(l){$.call(this),this.h=l,this.g={}}U(Ai,$);var Co=[];function ko(l){ve(l.g,function(f,y){this.g.hasOwnProperty(y)&&sr(f)},l),l.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),ko(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=p.JSON.stringify,No=p.JSON.parse,Oo=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Si(){}Si.prototype.h=null;function ys(l){return l.h||(l.h=l.i())}function _s(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){de.call(this,"d")}U(Un,de);function vs(){de.call(this,"c")}U(vs,de);var Fn={},Do=null;function Ri(){return Do=Do||new lt}Fn.La="serverreachability";function xo(l){de.call(this,Fn.La,l)}U(xo,de);function lr(l){const f=Ri();ut(f,new xo(f))}Fn.STAT_EVENT="statevent";function Lo(l,f){de.call(this,Fn.STAT_EVENT,l),this.stat=f}U(Lo,de);function rt(l){const f=Ri();ut(f,new Lo(f,l))}Fn.Ma="timingevent";function ws(l,f){de.call(this,Fn.Ma,l),this.size=f}U(ws,de);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},f)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function ki(l,f,y,w,M,B){l.info(function(){if(l.g)if(B)for(var te="",Ve=B.split("&"),ct=0;ct<Ve.length;ct++){var Pe=Ve[ct].split("=");if(1<Pe.length){var pt=Pe[0];Pe=Pe[1];var st=pt.split("_");te=2<=st.length&&st[1]=="type"?te+(pt+"="+Pe+"&"):te+(pt+"=redacted&")}}else te=null;else te=B;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+f+`
`+y+`
`+te})}function Es(l,f,y,w,M,B,te){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+f+`
`+y+`
`+B+" "+te})}function vn(l,f,y,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Cc(l,y)+(w?" "+w:"")})}function Mo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ci.prototype.info=function(){};function Cc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return Po(y)}catch{return f}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wn;function Pi(){}U(Pi,Si),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},wn=new Pi;function En(l,f,y,w){this.j=l,this.i=f,this.l=y,this.R=w||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var Vo={},Ts={};function As(l,f,y){l.L=1,l.v=Ur(tn(f)),l.m=y,l.P=!0,bo(l,null)}function bo(l,f){l.F=Date.now(),ze(l),l.A=tn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),jr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new nl,l.g=wl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ti(N(l.Y,l,l.g),l.O)),f=l.U,y=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Co[0]=M.toString()),M=Co);for(var B=0;B<M.length;B++){var te=Io(y,M[B],w||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),lr(),ki(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const st=$t(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Ho(this.g)))){this.J||st!=4||f==7||(f==8||0>=hn?lr(3):lr(2)),Ni(this);var y=this.g.Z();this.X=y;t:if(rl(this)){var w=Ho(this.g);l="";var M=w.length,B=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Lr(this);var te="";break t}this.h.i=new p.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(B&&f==M-1)});w.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Es(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ct=this.g;if((Ve=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Ve)){var Pe=Ve;break t}}Pe=null}if(y=Pe)vn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,y);else{this.o=!1,this.s=3,rt(12),un(this),Lr(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<te.length;)if(rn=kc(this,te),rn==Ts){st==4&&(this.s=4,rt(14),y=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Vo){this.s=4,rt(15),vn(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else vn(this.i,this.l,rn,null),Uo(this,rn);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||te.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)vn(this.i,this.l,te,"[Invalid Chunked Response]"),un(this),Lr(this);else if(0<te.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),$o(pt),pt.M=!0,rt(11))}}else vn(this.i,this.l,te,null),Uo(this,te);st==4&&un(this),this.o&&!this.J&&(st==4?Ms(this.j,this):(this.o=!1,ze(this)))}else Ns(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),un(this),Lr(this)}}}catch{}finally{}};function rl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kc(l,f){var y=l.C,w=f.indexOf(`
`,y);return w==-1?Ts:(y=Number(f.substring(y,w)),isNaN(y)?Vo:(w+=1,w+y>f.length?Ts:(f=f.slice(w,w+y),l.C=w+y,f)))}En.prototype.cancel=function(){this.J=!0,un(this)};function ze(l){l.S=Date.now()+l.I,il(l,l.I)}function il(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(N(l.ba,l),f)}function Ni(l){l.B&&(p.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mo(this.i,this.A),this.L!=2&&(lr(),rt(17)),un(this),this.s=2,Lr(this)):il(this,this.S-l)};function Lr(l){l.j.G==0||l.J||Ms(l.j,l)}function un(l){Ni(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,ko(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Uo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||jt(y.h,l))){if(!l.K&&jt(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ls(y),Rn(y);else break e;xs(y),rt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=_n(N(y.Za,y),6e3));if(1>=ol(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else fr(y,11)}else if((l.K||y.g==l)&&Ls(y),!ne(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let Pe=M[f];if(y.T=Pe[0],Pe=Pe[1],y.G==2)if(Pe[0]=="c"){y.K=Pe[1],y.ia=Pe[2];const pt=Pe[3];pt!=null&&(y.la=pt,y.j.info("VER="+y.la));const st=Pe[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const hn=Pe[5];hn!=null&&typeof hn=="number"&&0<hn&&(w=1.5*hn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const rn=l.g;if(rn){const bi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var B=w.h;B.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Fo(B,B.h),B.h=null))}if(w.D){const bs=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;bs&&(w.ya=bs,Fe(w.I,w.D,bs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var te=l;if(w.qa=vl(w,w.J?w.ia:null,w.W),te.K){al(w.h,te);var Ve=te,ct=w.L;ct&&(Ve.I=ct),Ve.B&&(Ni(Ve),ze(Ve)),w.g=te}else Vi(w);0<y.i.length&&Hn(y)}else Pe[0]!="stop"&&Pe[0]!="close"||fr(y,7);else y.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?fr(y,7):At(y):Pe[0]!="noop"&&y.l&&y.l.ta(Pe),y.v=0)}}lr(4)}catch{}}var sl=class{constructor(l,f){this.g=l,this.map=f}};function Oi(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ol(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Fo(l,f){l.g?l.g.add(f):l.h=f}function al(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Oi.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ll(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return W(l.i)}function Ss(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,w=0;w<y;w++)f.push(l[w]);return f}f=[],y=0;for(w in l)f[y++]=l[w];return f}function Rs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const w in l)f[y++]=w;return f}}}function Mr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Rs(l),w=Ss(l),M=w.length,B=0;B<M;B++)f.call(void 0,w[B],y&&y[B],l)}var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),M=null;if(0<=w){var B=l[y].substring(0,w);M=l[y].substring(w+1)}else B=l[y];f(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ur(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ur){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,y=new jn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),br(this,y),this.m=l.m}else l&&(f=String(l).match(Di))?(this.h=!1,xi(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),Vr(this,f[4]),this.l=Ce(f[5]||"",!0),br(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}ur.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Fr(f,Cs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Fr(f,Cs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Fr(y,y.charAt(0)=="/"?hl:cl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Fr(y,jo)),l.join("")};function tn(l){return new ur(l)}function xi(l,f,y){l.j=y?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function br(l,f,y){f instanceof jn?(l.i=f,zn(l.i,l.h)):(y||(f=Fr(f,dl)),l.i=new jn(f,l.h))}function Fe(l,f,y){l.i.set(f,y)}function Ur(l){return Fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ul),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ul(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,jo=/#/g;function jn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&Pc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=jn.prototype,r.add=function(l,f){Tt(this),this.i=null,l=cn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function In(l,f){Tt(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return Tt(l),f=cn(l,f),l.g.has(f)}r.forEach=function(l,f){Tt(this),this.g.forEach(function(y,w){y.forEach(function(M){l.call(f,M,w,this)},this)},this)},r.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const M=l[w];for(let B=0;B<M.length;B++)y.push(f[w])}return y},r.V=function(l){Tt(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Tt(this),this.i=null,l=cn(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function jr(l,f,y){In(l,f),0<y.length&&(l.i=null,l.g.set(cn(l,f),W(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const B=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var M=B;te[w]!==""&&(M+="="+encodeURIComponent(String(te[w]))),l.push(M)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,w){var M=w.toLowerCase();w!=M&&(In(this,w),jr(this,M,y))},l)),l.j=f}function Nc(l,f){const y=new Ci;if(p.Image){const w=new Image;w.onload=F(Wt,y,"TestLoadImage: loaded",!0,f,w),w.onerror=F(Wt,y,"TestLoadImage: error",!1,f,w),w.onabort=F(Wt,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=F(Wt,y,"TestLoadImage: timeout",!1,f,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function fl(l,f){const y=new Ci,w=new AbortController,M=setTimeout(()=>{w.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(B=>{clearTimeout(M),B.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Wt(y,"TestPingServer: error",!1,f)})}function Wt(l,f,y,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(y)}catch{}}function Oc(){this.g=new Oo}function pl(l,f,y){const w=y||"";try{Mr(l,function(M,B){let te=M;_(M)&&(te=Po(M)),f.push(w+B+"="+encodeURIComponent(te))})}catch(M){throw f.push(w+"type="+encodeURIComponent("_badmap")),M}}function cr(l){this.l=l.Ub||null,this.j=l.eb||!1}U(cr,Si),cr.prototype.g=function(){return new Li(this.l,this.j)},cr.prototype.i=function(l){return function(){return l}}({});function Li(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Li,lt),r=Li.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?An(this):Sn(this),this.readyState==3&&ml(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,An(this))},r.Qa=function(l){this.g&&(this.response=l,An(this))},r.ga=function(){this.g&&An(this)};function An(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hr(l){let f="";return ve(l,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function zr(l,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=hr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Fe(l,f,y))}function Ke(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ke,lt);var Dc=/^https?$/i,zo=["POST","PUT"];r=Ke.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?ys(this.o):ys(wn),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(B){Mi(this,B);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)y.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())y.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),M=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(zo,f,void 0))||w||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of y)this.g.setRequestHeader(B,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(B){Mi(this,B)}};function Mi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ks(l),nn(l)}function ks(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},r.bb=function(){Bo(this)};function Bo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)Ro(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=te===0){var M=String(l.D).match(Di)[1]||null;!M&&p.self&&p.self.location&&(M=p.self.location.protocol.slice(0,-1)),w=!Dc.test(M?M.toLowerCase():"")}y=w}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var B=2<$t(l)?l.g.statusText:""}catch{B=""}l.l=B+" ["+l.Z()+"]",ks(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ps(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=w}catch{}}}function Ps(l){l.I&&(p.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),No(f)}};function Ho(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ns(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ne(l[w]))continue;var y=D(l[w]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=f[M]||[];f[M]=B,B.push(y)}P(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(l&&l.concurrentRequestLimit),this.Da=new Oc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wo.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,w){rt(0),this.W=l,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=vl(this,null,this.W),Hn(this)};function At(l){if(Os(l),l.G==3){var f=l.U++,y=tn(l.I);if(Fe(y,"SID",l.K),Fe(y,"RID",f),Fe(y,"TYPE","terminate"),dr(l,y),f=new En(l,l.j,f),f.L=2,f.v=Ur(tn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=wl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ze(f)}_l(l)}function Rn(l){l.g&&($o(l),l.g.cancel(),l.g=null)}function Os(l){Rn(l),l.u&&(p.clearTimeout(l.u),l.u=null),Ls(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function Hn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||se(),re||(Ue(),re=!0),fe.add(f,l),l.B=0}}function xc(l,f){return ol(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(N(l.Ga,l,f),yl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new En(this,this.j,l);let B=this.o;if(this.S&&(B?(B=I(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Br(this,M,f),y=tn(this.I),Fe(y,"RID",l),Fe(y,"CVER",22),this.D&&Fe(y,"X-HTTP-Session-Id",this.D),dr(this,y),B&&(this.O?f="headers="+encodeURIComponent(String(hr(B)))+"&"+f:this.m&&zr(y,this.m,B)),Fo(this.h,M),this.Ua&&Fe(y,"TYPE","init"),this.P?(Fe(y,"$req",f),Fe(y,"SID","null"),M.T=!0,As(M,y,null)):As(M,y,f),this.G=2}}else this.G==3&&(l?Ds(this,l):this.i.length==0||en(this.h)||Ds(this))};function Ds(l,f){var y;f?y=f.l:y=l.U++;const w=tn(l.I);Fe(w,"SID",l.K),Fe(w,"RID",y),Fe(w,"AID",l.T),dr(l,w),l.m&&l.o&&zr(w,l.m,l.o),y=new En(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Br(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Fo(l.h,y),As(y,w,f)}function dr(l,f){l.H&&ve(l.H,function(y,w){Fe(f,w,y)}),l.l&&Mr({},function(y,w){Fe(f,w,y)})}function Br(l,f,y){y=Math.min(l.i.length,y);var w=l.l?N(l.l.Na,l.l,l):null;e:{var M=l.i;let B=-1;for(;;){const te=["count="+y];B==-1?0<y?(B=M[0].g,te.push("ofs="+B)):B=0:te.push("ofs="+B);let Ve=!0;for(let ct=0;ct<y;ct++){let Pe=M[ct].g;const pt=M[ct].map;if(Pe-=B,0>Pe)B=Math.max(0,M[ct].g-100),Ve=!1;else try{pl(pt,te,"req"+Pe+"_")}catch{w&&w(pt)}}if(Ve){w=te.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,w}function Vi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||se(),re||(Ue(),re=!0),fe.add(f,l),l.v=0}}function xs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(N(l.Fa,l),yl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(N(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Rn(this),gl(this))};function $o(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function gl(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);Fe(f,"RID","rpc"),Fe(f,"SID",l.K),Fe(f,"AID",l.T),Fe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Fe(f,"TO",l.ja),Fe(f,"TYPE","xmlhttp"),dr(l,f),l.m&&l.o&&zr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Ur(tn(f)),y.m=null,y.P=!0,bo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,Rn(this),xs(this),rt(19))};function Ls(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Ms(l,f){var y=null;if(l.g==f){Ls(l),$o(l),l.g=null;var w=2}else if(jt(l.h,f))y=f.D,al(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;w=Ri(),ut(w,new ws(w,y)),Hn(l)}else Vi(l);else if(M=f.s,M==3||M==0&&0<f.X||!(w==1&&xc(l,f)||w==2&&xs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),M){case 1:fr(l,5);break;case 4:fr(l,10);break;case 3:fr(l,6);break;default:fr(l,2)}}}function yl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function fr(l,f){if(l.j.info("Error code "+f),f==2){var y=N(l.fb,l),w=l.Xa;const M=!w;w=new ur(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||xi(w,"https"),Ur(w),M?Nc(w.toString(),y):fl(w.toString(),y)}else rt(2);l.G=0,l.l&&l.l.sa(f),_l(l),Os(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function _l(l){if(l.G=0,l.ka=[],l.l){const f=ll(l.h);(f.length!=0||l.i.length!=0)&&(z(l.ka,f),z(l.ka,l.i),l.h.i.length=0,W(l.i),l.i.length=0),l.l.ra()}}function vl(l,f,y){var w=y instanceof ur?tn(y):new ur(y);if(w.g!="")f&&(w.g=f+"."+w.g),Vr(w,w.s);else{var M=p.location;w=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var B=new ur(null);w&&xi(B,w),f&&(B.g=f),M&&Vr(B,M),y&&(B.l=y),w=B}return y=l.D,f=l.ya,y&&f&&Fe(w,y,f),Fe(w,"VER",l.la),dr(l,w),w}function wl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new cr({eb:y})):new Ke(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Go(){}r=Go.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Vs(){}Vs.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){lt.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ne(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ne(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Wn(this)}U(zt,lt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){At(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Po(l),l=y);f.i.push(new sl(f.Ya++,l)),f.G==3&&Hn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,zt.aa.N.call(this)};function El(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}U(El,Un);function Il(){vs.call(this),this.status=1}U(Il,vs);function Wn(l){this.g=l}U(Wn,Go),Wn.prototype.ua=function(){ut(this.g,"a")},Wn.prototype.ta=function(l){ut(this.g,new El(l))},Wn.prototype.sa=function(l){ut(this.g,new Il)},Wn.prototype.ra=function(){ut(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,j_=function(){return new Vs},F_=function(){return Ri()},U_=Fn,Od={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Ou=Is,tl.COMPLETE="complete",b_=tl,_s.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Aa=_s,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,V_=Ke}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const xg="@firebase/firestore",Lg="4.7.8";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let _o="11.3.1";/**
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
 */const rs=new cc("@firebase/firestore");function io(){return rs.logLevel}function ue(r,...e){if(rs.logLevel<=Se.DEBUG){const t=e.map(sf);rs.debug(`Firestore (${_o}): ${r}`,...t)}}function is(r,...e){if(rs.logLevel<=Se.ERROR){const t=e.map(sf);rs.error(`Firestore (${_o}): ${r}`,...t)}}function mc(r,...e){if(rs.logLevel<=Se.WARN){const t=e.map(sf);rs.warn(`Firestore (${_o}): ${r}`,...t)}}function sf(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function Re(r="Unexpected state"){const e=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: `+r;throw is(e),new Error(e)}function tt(r,e){r||Re()}function He(r,e){return r}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class z_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class Q0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class X0{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){tt(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Zi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Zi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string"),new z_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new Ut(e)}}class Y0{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class J0{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Y0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z0{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,vt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){tt(this.o===void 0);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Mg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(tt(typeof t.token=="string"),this.R=t.token,new Mg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class B_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=eS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function be(r,e){return r<e?-1:r>e?1:0}function ho(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const Vg=-62135596800,bg=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*bg);return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vg)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bg}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Vg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Qe{static fromTimestamp(e){return new Qe(e)}static min(){return new Qe(new Et(0,0))}static max(){return new Qe(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ug="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Re(),s===void 0?s=e.length-t:s>e.length-t&&Re(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rf.fromString(e.substring(4,e.length-2))}}class et extends Qn{construct(e,t,s){return new et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new et(t)}static emptyPath(){return new et([])}}const tS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Qn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return tS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ug}static keyField(){return new Pt([Ug])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ye(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ye(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new ye(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(et.fromString(e))}static fromName(e){return new Ee(et.fromString(e).popFirst(5))}static empty(){return new Ee(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new et(e.slice()))}}/**
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
 */const Ma=-1;function nS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Qe.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new pi(o,Ee.empty(),e)}function rS(r){return new pi(r.readTime,r.key,Ma)}class pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pi(Qe.min(),Ee.empty(),Ma)}static max(){return new pi(Qe.max(),Ee.empty(),Ma)}}function iS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(r.documentKey,e.documentKey),t!==0?t:be(r.largestBatchId,e.largestBatchId))}/**
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
 */const sS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function of(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==sS)throw r;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,s)=>{t(e)})}static reject(e){return new K((t,s)=>{s(e)})}static waitFor(e){return new K((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next(o=>o?K.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new K((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(E=>{h[_]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new K((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function aS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ga(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class af{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}af.ae=-1;/**
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
 */const lf=-1;function uf(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function lS(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const H_="";function uS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Fg(e)),e=cS(r.get(t),e);return Fg(e)}function cS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case H_:t+="";break;default:t+=u}}return t}function Fg(r){return r+H_+""}/**
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
 */function jg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function vo(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function W_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Zt{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new Zt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Re();const e=this.left.check();if(e!==this.right.check())throw Re();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Re()}get value(){throw Re()}get color(){throw Re()}get left(){throw Re()}get right(){throw Re()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new Zt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zg(this.data.getIterator())}getIteratorFrom(e){return new zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Nt(this.comparator);return t.data=e,t}}class zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new Nt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class hS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Zn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new hS("Invalid base64 string: "+u):u}}(e);return new Zn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Zn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zn.EMPTY_BYTE_STRING=new Zn("");const dS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(r){if(tt(!!r),typeof r=="string"){let e=0;const t=dS.exec(r);if(tt(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:kt(r.seconds),nanos:kt(r.nanos)}}function kt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function fo(r){return typeof r=="string"?Zn.fromBase64String(r):Zn.fromUint8Array(r)}/**
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
 */const $_="server_timestamp",G_="__type__",K_="__previous_value__",q_="__local_write_time__";function cf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[G_])===null||t===void 0?void 0:t.stringValue)===$_}function hf(r){const e=r.mapValue.fields[K_];return cf(e)?hf(e):e}function Yu(r){const e=ss(r.mapValue.fields[q_].timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */class fS{constructor(e,t,s,o,u,h,p,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_}}const Ju="(default)";class Zu{constructor(e,t){this.projectId=e,this.database=t||Ju}static empty(){return new Zu("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Zu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Q_="__type__",X_="__max__",wu={mapValue:{fields:{__type__:{stringValue:X_}}}},Y_="__vector__",Dd="value";function os(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?cf(r)?4:mS(r)?9007199254740991:pS(r)?10:11:Re()}function er(r,e){if(r===e)return!0;const t=os(r);if(t!==os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Yu(r).isEqual(Yu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ss(o.timestampValue),p=ss(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return fo(o.bytesValue).isEqual(fo(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return kt(o.geoPointValue.latitude)===kt(u.geoPointValue.latitude)&&kt(o.geoPointValue.longitude)===kt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return kt(o.integerValue)===kt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=kt(o.doubleValue),p=kt(u.doubleValue);return h===p?Xu(h)===Xu(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return ho(r.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(jg(h)!==jg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!er(h[g],p[g])))return!1;return!0}(r,e);default:return Re()}}function Va(r,e){return(r.values||[]).find(t=>er(t,e))!==void 0}function po(r,e){if(r===e)return 0;const t=os(r),s=os(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=kt(u.integerValue||u.doubleValue),g=kt(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,e);case 3:return Bg(r.timestampValue,e.timestampValue);case 4:return Bg(Yu(r),Yu(e));case 5:return be(r.stringValue,e.stringValue);case 6:return function(u,h){const p=fo(u),g=fo(h);return p.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const E=be(p[_],g[_]);if(E!==0)return E}return be(p.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=be(kt(u.latitude),kt(h.latitude));return p!==0?p:be(kt(u.longitude),kt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Hg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var p,g,_,E;const S=u.fields||{},N=h.fields||{},F=(p=S[Dd])===null||p===void 0?void 0:p.arrayValue,U=(g=N[Dd])===null||g===void 0?void 0:g.arrayValue,W=be(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((E=U==null?void 0:U.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:Hg(F,U)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===wu.mapValue&&h===wu.mapValue)return 0;if(u===wu.mapValue)return 1;if(h===wu.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const N=be(g[S],E[S]);if(N!==0)return N;const F=po(p[g[S]],_[E[S]]);if(F!==0)return F}return be(g.length,E.length)}(r.mapValue,e.mapValue);default:throw Re()}}function Bg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return be(r,e);const t=ss(r),s=ss(e),o=be(t.seconds,s.seconds);return o!==0?o:be(t.nanos,s.nanos)}function Hg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=po(t[o],s[o]);if(u)return u}return be(t.length,s.length)}function mo(r){return xd(r)}function xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=ss(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return fo(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Ee.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=xd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${xd(t.fields[h])}`;return o+"}"}(r.mapValue):Re()}function Du(r){switch(os(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hf(r);return e?16+Du(e):16;case 5:return 2*r.stringValue.length;case 6:return fo(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Du(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return vo(s.fields,(u,h)=>{o+=u.length+Du(h)}),o}(r.mapValue);default:throw Re()}}function Ld(r){return!!r&&"integerValue"in r}function df(r){return!!r&&"arrayValue"in r}function xu(r){return!!r&&"mapValue"in r}function pS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Q_])===null||t===void 0?void 0:t.stringValue)===Y_}function ka(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return vo(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ka(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ka(r.arrayValue.values[t]);return e}return Object.assign({},r)}function mS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===X_}/**
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
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=ka(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());xu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];xu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){vo(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ln(ka(this.value))}}function J_(r){const e=[];return vo(r.fields,(t,s)=>{const o=new Pt([t]);if(xu(s)){const u=J_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Mn(e)}/**
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
 */class xn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new xn(e,0,Qe.min(),Qe.min(),Qe.min(),Ln.empty(),0)}static newFoundDocument(e,t,s,o){return new xn(e,1,t,Qe.min(),s,o,0)}static newNoDocument(e,t){return new xn(e,2,t,Qe.min(),Qe.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new xn(e,3,t,Qe.min(),Qe.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function Wg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(h.referenceValue),t.key):s=po(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function $g(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!er(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function gS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Z_{}class wt extends Z_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new _S(e,t,s):t==="array-contains"?new ES(e,s):t==="in"?new IS(e,s):t==="not-in"?new TS(e,s):t==="array-contains-any"?new AS(e,s):new wt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new vS(e,s):new wS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(po(t,this.value)):t!==null&&os(this.value)===os(t)&&this.matchesComparison(po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mi extends Z_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new mi(e,t)}matches(e){return ev(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ev(r){return r.op==="and"}function tv(r){return yS(r)&&ev(r)}function yS(r){for(const e of r.filters)if(e instanceof mi)return!1;return!0}function Md(r){if(r instanceof wt)return r.field.canonicalString()+r.op.toString()+mo(r.value);if(tv(r))return r.filters.map(e=>Md(e)).join(",");{const e=r.filters.map(t=>Md(t)).join(",");return`${r.op}(${e})`}}function nv(r,e){return r instanceof wt?function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(r,e):r instanceof mi?function(s,o){return o instanceof mi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&nv(h,o.filters[p]),!0):!1}(r,e):void Re()}function rv(r){return r instanceof wt?function(t){return`${t.field.canonicalString()} ${t.op} ${mo(t.value)}`}(r):r instanceof mi?function(t){return t.op.toString()+" {"+t.getFilters().map(rv).join(" ,")+"}"}(r):"Filter"}class _S extends wt{constructor(e,t,s){super(e,t,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class vS extends wt{constructor(e,t){super(e,"in",t),this.keys=iv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wS extends wt{constructor(e,t){super(e,"not-in",t),this.keys=iv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function iv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Ee.fromName(s.referenceValue))}class ES extends wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return df(t)&&Va(t.arrayValue,this.value)}}class IS extends wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Va(this.value.arrayValue,t)}}class TS extends wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Va(this.value.arrayValue,t)}}class AS extends wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!df(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Va(this.value.arrayValue,s))}}/**
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
 */class SS{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.le=null}}function Gg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new SS(r,e,t,s,o,u,h)}function ff(r){const e=He(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Md(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),uf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>mo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>mo(s)).join(",")),e.le=t}return e.le}function pf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!gS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!nv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!$g(r.startAt,e.startAt)&&$g(r.endAt,e.endAt)}/**
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
 */class gc{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function RS(r,e,t,s,o,u,h,p){return new gc(r,e,t,s,o,u,h,p)}function CS(r){return new gc(r)}function Kg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function kS(r){return r.collectionGroup!==null}function Pa(r){const e=He(r);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Nt(Pt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new tc(u,s))}),t.has(Pt.keyField().canonicalString())||e.he.push(new tc(Pt.keyField(),s))}return e.he}function es(r){const e=He(r);return e.Pe||(e.Pe=PS(e,Pa(r))),e.Pe}function PS(r,e){if(r.limitType==="F")return Gg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new tc(o.field,u)});const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return Gg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Vd(r,e,t){return new gc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function sv(r,e){return pf(es(r),es(e))&&r.limitType===e.limitType}function ov(r){return`${ff(es(r))}|lt:${r.limitType}`}function ya(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>rv(o)).join(", ")}]`),uf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>mo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>mo(o)).join(",")),`Target(${s})`}(es(r))}; limitType=${r.limitType})`}function mf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Pa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,g){const _=Wg(h,p,g);return h.inclusive?_<=0:_<0}(s.startAt,Pa(s),o)||s.endAt&&!function(h,p,g){const _=Wg(h,p,g);return h.inclusive?_>=0:_>0}(s.endAt,Pa(s),o))}(r,e)}function NS(r){return(e,t)=>{let s=!1;for(const o of Pa(r)){const u=OS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function OS(r,e,t){const s=r.field.isKeyField()?Ee.comparator(e.key,t.key):function(u,h,p){const g=h.data.field(u),_=p.data.field(u);return g!==null&&_!==null?po(g,_):Re()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Re()}}/**
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
 */class us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){vo(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return W_(this.inner)}size(){return this.innerSize}}/**
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
 */const DS=new Zt(Ee.comparator);function nc(){return DS}const av=new Zt(Ee.comparator);function Eu(...r){let e=av;for(const t of r)e=e.insert(t.key,t);return e}function lv(r){let e=av;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ji(){return Na()}function uv(){return Na()}function Na(){return new us(r=>r.toString(),(r,e)=>r.isEqual(e))}const xS=new Zt(Ee.comparator),LS=new Nt(Ee.comparator);function Ft(...r){let e=LS;for(const t of r)e=e.add(t);return e}const MS=new Nt(be);function VS(){return MS}/**
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
 */function gf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function cv(r){return{integerValue:""+r}}function bS(r,e){return lS(e)?cv(e):gf(r,e)}/**
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
 */class yc{constructor(){this._=void 0}}function US(r,e,t){return r instanceof rc?function(o,u){const h={fields:{[G_]:{stringValue:$_},[q_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&cf(u)&&(u=hf(u)),u&&(h.fields[K_]=u),{mapValue:h}}(t,e):r instanceof ba?dv(r,e):r instanceof Ua?fv(r,e):function(o,u){const h=hv(o,u),p=qg(h)+qg(o.Ie);return Ld(h)&&Ld(o.Ie)?cv(p):gf(o.serializer,p)}(r,e)}function FS(r,e,t){return r instanceof ba?dv(r,e):r instanceof Ua?fv(r,e):t}function hv(r,e){return r instanceof ic?function(s){return Ld(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class rc extends yc{}class ba extends yc{constructor(e){super(),this.elements=e}}function dv(r,e){const t=pv(e);for(const s of r.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ua extends yc{constructor(e){super(),this.elements=e}}function fv(r,e){let t=pv(e);for(const s of r.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class ic extends yc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function qg(r){return kt(r.integerValue||r.doubleValue)}function pv(r){return df(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function jS(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof ba&&o instanceof ba||s instanceof Ua&&o instanceof Ua?ho(s.elements,o.elements,er):s instanceof ic&&o instanceof ic?er(s.Ie,o.Ie):s instanceof rc&&o instanceof rc}(r.transform,e.transform)}class zS{constructor(e,t){this.version=e,this.transformResults=t}}class Sr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Sr}static exists(e){return new Sr(void 0,e)}static updateTime(e){return new Sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class _c{}function mv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yv(r.key,Sr.none()):new Ka(r.key,r.data,Sr.none());{const t=r.data,s=Ln.empty();let o=new Nt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new cs(r.key,s,new Mn(o.toArray()),Sr.none())}}function BS(r,e,t){r instanceof Ka?function(o,u,h){const p=o.value.clone(),g=Xg(o.fieldTransforms,u,h.transformResults);p.setAll(g),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof cs?function(o,u,h){if(!Lu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=Xg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(gv(o)),g.setAll(p),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Oa(r,e,t,s){return r instanceof Ka?function(u,h,p,g){if(!Lu(u.precondition,h))return p;const _=u.value.clone(),E=Yg(u.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof cs?function(u,h,p,g){if(!Lu(u.precondition,h))return p;const _=Yg(u.fieldTransforms,g,h),E=h.data;return E.setAll(gv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,e,t,s):function(u,h,p){return Lu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function HS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=hv(s.transform,o||null);u!=null&&(t===null&&(t=Ln.empty()),t.set(s.field,u))}return t||null}function Qg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ho(s,o,(u,h)=>jS(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ka extends _c{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class cs extends _c{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function gv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Xg(r,e,t){const s=new Map;tt(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,FS(h,p,t[o]))}return s}function Yg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,US(u,h,e))}return s}class yv extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WS extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $S{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&BS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=uv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const g=mv(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Qe.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ft())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(t,s)=>Qg(t,s))&&ho(this.baseMutations,e.baseMutations,(t,s)=>Qg(t,s))}}class yf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){tt(e.mutations.length===s.length);let o=function(){return xS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new yf(e,t,s,o)}}/**
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
 */class GS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var at,Ne;function KS(r){switch(r){case Z.OK:return Re();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Re()}}function qS(r){if(r===void 0)return is("GRPC error has no .code"),Z.UNKNOWN;switch(r){case at.OK:return Z.OK;case at.CANCELLED:return Z.CANCELLED;case at.UNKNOWN:return Z.UNKNOWN;case at.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case at.INTERNAL:return Z.INTERNAL;case at.UNAVAILABLE:return Z.UNAVAILABLE;case at.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case at.NOT_FOUND:return Z.NOT_FOUND;case at.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case at.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case at.ABORTED:return Z.ABORTED;case at.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case at.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case at.DATA_LOSS:return Z.DATA_LOSS;default:return Re()}}(Ne=at||(at={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new rf([4294967295,4294967295],0);class QS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bd(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XS(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function YS(r,e){return bd(r,e.toTimestamp())}function co(r){return tt(!!r),Qe.fromTimestamp(function(t){const s=ss(t);return new Et(s.seconds,s.nanos)}(r))}function _v(r,e){return Ud(r,e).canonicalString()}function Ud(r,e){const t=function(o){return new et(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function JS(r){const e=et.fromString(r);return tt(oR(e)),e}function Fd(r,e){return _v(r.databaseId,e.path)}function ZS(r){const e=JS(r);return e.length===4?et.emptyPath():tR(e)}function eR(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tR(r){return tt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Jg(r,e,t){return{name:Fd(r,e),fields:t.value.mapValue.fields}}function nR(r,e){let t;if(e instanceof Ka)t={update:Jg(r,e.key,e.value)};else if(e instanceof yv)t={delete:Fd(r,e.key)};else if(e instanceof cs)t={update:Jg(r,e.key,e.data),updateMask:sR(e.fieldMask)};else{if(!(e instanceof WS))return Re();t={verify:Fd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof rc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ba)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ua)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ic)return{fieldPath:h.field.canonicalString(),increment:p.Ie};throw Re()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:YS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Re()}(r,e.precondition)),t}function rR(r,e){return r&&r.length>0?(tt(e!==void 0),r.map(t=>function(o,u){let h=o.updateTime?co(o.updateTime):co(u);return h.isEqual(Qe.min())&&(h=co(u)),new zS(h,o.transformResults||[])}(t,e))):[]}function iR(r){let e=ZS(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){tt(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(S){const N=vv(S);return N instanceof mi&&tv(N)?N.getFilters():[N]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(N=>function(U){return new tc(so(U.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(N))}(t.orderBy));let p=null;t.limit&&(p=function(S){let N;return N=typeof S=="object"?S.value:S,uf(N)?null:N}(t.limit));let g=null;t.startAt&&(g=function(S){const N=!!S.before,F=S.values||[];return new ec(F,N)}(t.startAt));let _=null;return t.endAt&&(_=function(S){const N=!S.before,F=S.values||[];return new ec(F,N)}(t.endAt)),RS(e,o,h,u,p,"F",g,_)}function vv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=so(t.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=so(t.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(t.unaryFilter.field);return wt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=so(t.unaryFilter.field);return wt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Re()}}(r):r.fieldFilter!==void 0?function(t){return wt.create(so(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Re()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return mi.create(t.compositeFilter.filters.map(s=>vv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Re()}}(t.compositeFilter.op))}(r):Re()}function so(r){return Pt.fromServerFormat(r.fieldPath)}function sR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function oR(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class aR{constructor(e){this.Tt=e}}function lR(r){const e=iR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vd(e,e.limit,"L"):e}/**
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
 */class uR{constructor(){this.Tn=new cR}addToCollectionParentIndex(e,t){return this.Tn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(pi.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class cR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Nt(et.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(et.comparator)).toArray()}}/**
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
 */const Zg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wv=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(wv,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class go{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new go(0)}static Un(){return new go(-1)}}/**
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
 */const ey="LruGarbageCollector",hR=1048576;function ty([r,e],[t,s]){const o=be(r,t);return o===0?be(e,s):o}class dR{constructor(e){this.Hn=e,this.buffer=new Nt(ty),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ty(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ue(ey,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ga(t)?ue(ey,"Ignoring IndexedDB error during garbage collection: ",t):await of(t)}await this.er(3e5)})}}class pR{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return K.resolve(af.ae);const s=new dR(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Zg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zg):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,p,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,p=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(_=Date.now(),io()<=Se.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function mR(r,e){return new pR(r,e)}/**
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
 */class gR{constructor(){this.changes=new us(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _R{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Oa(s.mutation,o,Mn.empty(),Et.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ft()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ft()){const o=Ji();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Eu();return u.forEach((p,g)=>{h=h.insert(p,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Ji();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ft()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=nc();const h=Na(),p=function(){return Na()}();return t.forEach((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof cs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Oa(E.mutation,_,E.mutation.getFieldMask(),Et.now())):h.set(_.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,E)=>h.set(_,E)),t.forEach((_,E)=>{var S;return p.set(_,new yR(E,(S=h.get(_))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new Zt((h,p)=>h-p),u=Ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||Mn.empty();E=p.applyToLocalView(_,E),s.set(g,E);const S=(o.get(p.batchId)||Ft()).add(g);o=o.insert(p.batchId,S)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,E=g.value,S=uv();E.forEach(N=>{if(!u.has(N)){const F=mv(t.get(N),s.get(N));F!==null&&S.set(N,F),u=u.add(N)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return K.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return Ee.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):K.resolve(Ji());let p=Ma,g=u;return h.next(_=>K.forEach(_,(E,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(N=>{g=g.insert(E,N)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Ft())).next(E=>({batchId:p,changes:lv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(s=>{let o=Eu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Eu();return this.indexManager.getCollectionParents(e,u).next(p=>K.forEach(p,g=>{const _=function(S,N){return new gc(N,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(E=>{E.forEach((S,N)=>{h=h.insert(S,N)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,xn.newInvalidDocument(E)))});let p=Eu();return h.forEach((g,_)=>{const E=u.get(g);E!==void 0&&Oa(E.mutation,_,Mn.empty(),Et.now()),mf(t,_)&&(p=p.insert(g,_))}),p})}}/**
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
 */class vR{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return K.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:co(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:lR(o.bundledQuery),readTime:co(o.readTime)}}(t)),K.resolve()}}/**
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
 */class wR{constructor(){this.overlays=new Zt(Ee.comparator),this.Rr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ji();return K.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=Ji(),u=t.length+1,h=new Ee(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Zt((_,E)=>_-E);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Ji(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const p=Ji(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,E)=>p.set(_,E)),!(p.size()>=o)););return K.resolve(p)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new GS(t,s));let u=this.Rr.get(t);u===void 0&&(u=Ft(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ER{constructor(){this.sessionToken=Zn.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class _f{constructor(){this.Vr=new Nt(_t.mr),this.gr=new Nt(_t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new _t(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new _t(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new Ee(new et([])),s=new _t(t,e),o=new _t(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ee(new et([])),s=new _t(t,e),o=new _t(t,e+1);let u=Ft();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new _t(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _t{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ee.comparator(e.key,t.key)||be(e.Cr,t.Cr)}static pr(e,t){return be(e.Cr,t.Cr)||Ee.comparator(e.key,t.key)}}/**
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
 */class IR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Nt(_t.mr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new $S(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Mr=this.Mr.add(new _t(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return K.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?lf:this.Fr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _t(t,0),o=new _t(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const p=this.Or(h.Cr);u.push(p)}),K.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Nt(be);return t.forEach(o=>{const u=new _t(o,0),h=new _t(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],p=>{s=s.add(p.Cr)})}),K.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const h=new _t(new Ee(u),0);let p=new Nt(be);return this.Mr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Cr)),!0)},h),K.resolve(this.Br(p))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){tt(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return K.forEach(t.mutations,o=>{const u=new _t(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new _t(t,0),o=this.Mr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class TR{constructor(e){this.kr=e,this.docs=function(){return new Zt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():xn.newInvalidDocument(t))}getEntries(e,t){let s=nc();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():xn.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=nc();const h=t.path,p=new Ee(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||iS(rS(E),s)<=0||(o.has(E.key)||mf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return K.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Re()}qr(e,t){return K.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new AR(this)}getSize(e){return K.resolve(this.size)}}class AR extends gR{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),K.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class SR{constructor(e){this.persistence=e,this.Qr=new us(t=>ff(t),pf),this.lastRemoteSnapshotVersion=Qe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new _f,this.targetCount=0,this.Ur=go.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),K.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new go(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.zn(t),K.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),K.waitFor(u).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.Kr.Sr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.Kr.containsKey(t))}}/**
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
 */class Ev{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new af(0),this.zr=!1,this.zr=!0,this.jr=new ER,this.referenceDelegate=e(this),this.Hr=new SR(this),this.indexManager=new uR,this.remoteDocumentCache=function(o){return new TR(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new aR(t),this.Yr=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new IR(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const o=new RR(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return K.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class RR extends oS{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.ti=new _f,this.ni=null}static ri(e){return new vf(e)}get ii(){if(this.ni)return this.ni;throw Re()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),K.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ii,s=>{const o=Ee.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,Qe.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return K.or([()=>K.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class sc{constructor(e,t){this.persistence=e,this.oi=new us(s=>uS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=mR(this,t)}static ri(e,t){return new sc(e,t)}Zr(){}Xr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return K.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?K.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Qe.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),K.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Du(e.data.value)),t}ar(e,t,s){return K.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=Ft(),o=Ft();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new wf(e,t.fromCache,s,o)}}/**
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
 */class CR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return LE()?8:aS(Ge())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new CR;return this._s(e,t,h).next(p=>{if(u.result=p,this.Xi)return this.us(e,t,h,p.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(io()<=Se.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",ya(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),K.resolve()):(io()<=Se.DEBUG&&ue("QueryEngine","Query:",ya(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(io()<=Se.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",ya(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,es(t))):K.resolve())}rs(e,t){if(Kg(t))return K.resolve(null);let s=es(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Vd(t,null,"F"),s=es(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ft(...u);return this.ns.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.cs(t,p);return this.ls(t,_,h,g.readTime)?this.rs(e,Vd(t,null,"F")):this.hs(e,_,t,g)}))})))}ss(e,t,s,o){return Kg(t)||o.isEqual(Qe.min())?K.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?K.resolve(null):(io()<=Se.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ya(t)),this.hs(e,h,t,nS(o,Ma)).next(p=>p))})}cs(e,t){let s=new Nt(NS(e));return t.forEach((o,u)=>{mf(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return io()<=Se.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",ya(t)),this.ns.getDocumentsMatchingQuery(e,t,pi.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const PR="LocalStore";class NR{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Zt(be),this.Is=new us(u=>ff(u),pf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _R(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function OR(r,e,t,s){return new NR(r,e,t,s)}async function Iv(r,e){const t=He(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let g=Ft();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){p.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Rs:_,removedBatchIds:h,addedBatchIds:p}))})})}function DR(r,e){const t=He(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(p,g,_,E){const S=_.batch,N=S.keys();let F=K.resolve();return N.forEach(U=>{F=F.next(()=>E.getEntry(g,U)).next(W=>{const z=_.docVersions.get(U);tt(z!==null),W.version.compareTo(z)<0&&(S.applyToRemoteDocument(W,_),W.isValidDocument()&&(W.setReadTime(_.commitVersion),E.addEntry(W)))})}),F.next(()=>p.mutationQueue.removeMutationBatch(g,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Ft();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function xR(r){const e=He(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function LR(r,e){const t=He(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=lf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class ny{constructor(){this.activeTargetIds=VS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MR{constructor(){this.ho=new ny,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ny,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VR{To(e){}shutdown(){}}/**
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
 */const ry="ConnectivityMonitor";class iy{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ue(ry,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ue(ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function jd(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
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
 */const pd="RestConnection",bR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,u){const h=jd(),p=this.bo(e,t.toUriEncodedString());ue(pd,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(e,p,g,s).then(_=>(ue(pd,`Received RPC '${e}' ${h}: `,_),_),_=>{throw mc(pd,`RPC '${e}' ${h} failed with error: `,_,"url: ",p,"request:",s),_})}Co(e,t,s,o,u,h){return this.So(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const s=bR[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
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
 */class FR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const bt="WebChannelConnection";class jR extends UR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=jd();return new Promise((h,p)=>{const g=new V_;g.setWithCredentials(!0),g.listenOnce(b_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Ou.NO_ERROR:const E=g.getResponseJson();ue(bt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case Ou.TIMEOUT:ue(bt,`RPC '${e}' ${u} timed out`),p(new ye(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const S=g.getStatus();if(ue(bt,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const F=N==null?void 0:N.error;if(F&&F.status&&F.message){const U=function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(G)>=0?G:Z.UNKNOWN}(F.status);p(new ye(U,F.message))}else p(new ye(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(Z.UNAVAILABLE,"Connection failed."));break;default:Re()}}finally{ue(bt,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(o);ue(bt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",_,s,15)})}Wo(e,t,s){const o=jd(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=j_(),p=F_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ue(bt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);let N=!1,F=!1;const U=new FR({Fo:z=>{F?ue(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(N||(ue(bt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),N=!0),ue(bt,`RPC '${e}' stream ${o} sending:`,z),S.send(z))},Mo:()=>S.close()}),W=(z,G,ne)=>{z.listen(G,J=>{try{ne(J)}catch(he){setTimeout(()=>{throw he},0)}})};return W(S,Aa.EventType.OPEN,()=>{F||(ue(bt,`RPC '${e}' stream ${o} transport opened.`),U.Qo())}),W(S,Aa.EventType.CLOSE,()=>{F||(F=!0,ue(bt,`RPC '${e}' stream ${o} transport closed`),U.Ko())}),W(S,Aa.EventType.ERROR,z=>{F||(F=!0,mc(bt,`RPC '${e}' stream ${o} transport errored:`,z),U.Ko(new ye(Z.UNAVAILABLE,"The operation could not be completed")))}),W(S,Aa.EventType.MESSAGE,z=>{var G;if(!F){const ne=z.data[0];tt(!!ne);const J=ne,he=(J==null?void 0:J.error)||((G=J[0])===null||G===void 0?void 0:G.error);if(he){ue(bt,`RPC '${e}' stream ${o} received error:`,he);const we=he.status;let ve=function(A){const k=at[A];if(k!==void 0)return qS(k)}(we),P=he.message;ve===void 0&&(ve=Z.INTERNAL,P="Unknown error status: "+we+" with message "+he.message),F=!0,U.Ko(new ye(ve,P)),S.close()}else ue(bt,`RPC '${e}' stream ${o} received:`,ne),U.Uo(ne)}}),W(p,U_.STAT_EVENT,z=>{z.stat===Od.PROXY?ue(bt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Od.NOPROXY&&ue(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.$o()},0),U}}function md(){return typeof document<"u"?document:null}/**
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
 */function vc(r){return new QS(r,!0)}/**
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
 */class Tv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const sy="PersistentStream";class zR{constructor(e,t,s,o,u,h,p,g){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tv(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(is(t.toString()),is("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new ye(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ue(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ue(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BR extends zR{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return tt(!!e.streamToken),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){tt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=rR(e.writeResults,e.commitTime),s=co(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=eR(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>nR(this.serializer,s))};this.I_(t)}}/**
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
 */class HR{}class WR extends HR{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,Ud(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(Z.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Co(e,Ud(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ye(Z.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class $R{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(is(t),this.N_=!1):ue("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const qa="RemoteStore";class GR{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{Xa(this)&&(ue(qa,"Restarting streams for network reachability change."),await async function(g){const _=He(g);_.W_.add(4),await Qa(_),_.j_.set("Unknown"),_.W_.delete(4),await wc(_)}(this))})}),this.j_=new $R(s,o)}}async function wc(r){if(Xa(r))for(const e of r.G_)await e(!0)}async function Qa(r){for(const e of r.G_)await e(!1)}function Xa(r){return He(r).W_.size===0}async function Av(r,e,t){if(!Ga(e))throw e;r.W_.add(1),await Qa(r),r.j_.set("Offline"),t||(t=()=>xR(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ue(qa,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await wc(r)})}function Sv(r,e){return e().catch(t=>Av(r,t,e))}async function Ec(r){const e=He(r),t=gi(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:lf;for(;KR(e);)try{const o=await LR(e.localStore,s);if(o===null){e.K_.length===0&&t.P_();break}s=o.batchId,qR(e,o)}catch(o){await Av(e,o)}Rv(e)&&Cv(e)}function KR(r){return Xa(r)&&r.K_.length<10}function qR(r,e){r.K_.push(e);const t=gi(r);t.c_()&&t.S_&&t.b_(e.mutations)}function Rv(r){return Xa(r)&&!gi(r).u_()&&r.K_.length>0}function Cv(r){gi(r).start()}async function QR(r){gi(r).C_()}async function XR(r){const e=gi(r);for(const t of r.K_)e.b_(t.mutations)}async function YR(r,e,t){const s=r.K_.shift(),o=yf.from(s,e,t);await Sv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Ec(r)}async function JR(r,e){e&&gi(r).S_&&await async function(s,o){if(function(h){return KS(h)&&h!==Z.ABORTED}(o.code)){const u=s.K_.shift();gi(s).h_(),await Sv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Ec(s)}}(r,e),Rv(r)&&Cv(r)}async function oy(r,e){const t=He(r);t.asyncQueue.verifyOperationInProgress(),ue(qa,"RemoteStore received new credentials");const s=Xa(t);t.W_.add(3),await Qa(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await wc(t)}async function ZR(r,e){const t=He(r);e?(t.W_.delete(2),await wc(t)):e||(t.W_.add(2),await Qa(t),t.j_.set("Unknown"))}function gi(r){return r.Y_||(r.Y_=function(t,s,o){const u=He(t);return u.M_(),new BR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:QR.bind(null,r),Lo:JR.bind(null,r),D_:XR.bind(null,r),v_:YR.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Ec(r)):(await r.Y_.stop(),r.K_.length>0&&(ue(qa,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class Ef{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new Ef(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kv(r,e){if(is("AsyncQueue",`${e}: ${r}`),Ga(r))return new ye(Z.UNAVAILABLE,`${e}: ${r}`);throw r}class eC{constructor(){this.queries=ay(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=He(t),u=o.queries;o.queries=ay(),u.forEach((h,p)=>{for(const g of p.ta)g.onError(s)})})(this,new ye(Z.ABORTED,"Firestore shutting down"))}}function ay(){return new us(r=>ov(r),sv)}function tC(r){r.ia.forEach(e=>{e.next()})}var ly,uy;(uy=ly||(ly={}))._a="default",uy.Cache="cache";const nC="SyncEngine";class rC{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new us(p=>ov(p),sv),this.qa=new Map,this.Qa=new Set,this.$a=new Zt(Ee.comparator),this.Ka=new Map,this.Ua=new _f,this.Wa={},this.Ga=new Map,this.za=go.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function iC(r,e,t){const s=lC(r);try{const o=await function(h,p){const g=He(h),_=Et.now(),E=p.reduce((F,U)=>F.add(U.key),Ft());let S,N;return g.persistence.runTransaction("Locally write mutations","readwrite",F=>{let U=nc(),W=Ft();return g.ds.getEntries(F,E).next(z=>{U=z,U.forEach((G,ne)=>{ne.isValidDocument()||(W=W.add(G))})}).next(()=>g.localDocuments.getOverlayedDocuments(F,U)).next(z=>{S=z;const G=[];for(const ne of p){const J=HS(ne,S.get(ne.key).overlayedDocument);J!=null&&G.push(new cs(ne.key,J,J_(J.value.mapValue),Sr.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,G,p)}).next(z=>{N=z;const G=z.applyToLocalDocumentSet(S,W);return g.documentOverlayCache.saveOverlays(F,z.batchId,G)})}).then(()=>({batchId:N.batchId,changes:lv(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,g){let _=h.Wa[h.currentUser.toKey()];_||(_=new Zt(be)),_=_.insert(p,g),h.Wa[h.currentUser.toKey()]=_}(s,o.batchId,t),await Ic(s,o.changes),await Ec(s.remoteStore)}catch(o){const u=kv(o,"Failed to persist write");t.reject(u)}}function cy(r,e,t){const s=He(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const p=h.view.sa(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const g=He(h);g.onlineState=p;let _=!1;g.queries.forEach((E,S)=>{for(const N of S.ta)N.sa(p)&&(_=!0)}),_&&tC(g)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sC(r,e){const t=He(r),s=e.batch.batchId;try{const o=await DR(t.localStore,e);Nv(t,s,null),Pv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ic(t,o)}catch(o){await of(o)}}async function oC(r,e,t){const s=He(r);try{const o=await function(h,p){const g=He(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return g.mutationQueue.lookupMutationBatch(_,p).next(S=>(tt(S!==null),E=S.keys(),g.mutationQueue.removeMutationBatch(_,S))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>g.localDocuments.getDocuments(_,E))})}(s.localStore,e);Nv(s,e,t),Pv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ic(s,o)}catch(o){await of(o)}}function Pv(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function Nv(r,e,t){const s=He(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}async function Ic(r,e,t){const s=He(r),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((p,g)=>{h.push(s.Ha(g,e,t).then(_=>{var E;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=wf.Yi(g.targetId,_);u.push(S)}}))}),await Promise.all(h),s.La.p_(o),await async function(g,_){const E=He(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>K.forEach(_,N=>K.forEach(N.Hi,F=>E.persistence.referenceDelegate.addReference(S,N.targetId,F)).next(()=>K.forEach(N.Ji,F=>E.persistence.referenceDelegate.removeReference(S,N.targetId,F)))))}catch(S){if(!Ga(S))throw S;ue(PR,"Failed to update sequence numbers: "+S)}for(const S of _){const N=S.targetId;if(!S.fromCache){const F=E.Ts.get(N),U=F.snapshotVersion,W=F.withLastLimboFreeSnapshotVersion(U);E.Ts=E.Ts.insert(N,W)}}}(s.localStore,u))}async function aC(r,e){const t=He(r);if(!t.currentUser.isEqual(e)){ue(nC,"User change. New user:",e.toKey());const s=await Iv(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(p=>{p.forEach(g=>{g.reject(new ye(Z.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ic(t,s.Rs)}}function lC(r){const e=He(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oC.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return OR(this.persistence,new kR,e.initialUser,this.serializer)}Xa(e){return new Ev(vf.ri,this.serializer)}Za(e){return new MR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class uC extends oc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){tt(this.persistence.referenceDelegate instanceof sc);const s=this.persistence.referenceDelegate.garbageCollector;return new fR(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Ev(s=>sc.ri(s,t),this.serializer)}}class zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aC.bind(null,this.syncEngine),await ZR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eC}()}createDatastore(e){const t=vc(e.databaseInfo.databaseId),s=function(u){return new jR(u)}(e.databaseInfo);return function(u,h,p,g){return new WR(u,h,p,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new GR(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>cy(this.syncEngine,t,0),function(){return iy.D()?new iy:new VR}())}createSyncEngine(e,t){return function(o,u,h,p,g,_,E){const S=new rC(o,u,h,p,g,_);return E&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=He(o);ue(qa,"RemoteStore shutting down."),u.W_.add(5),await Qa(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zd.provider={build:()=>new zd};/**
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
 */const yi="FirestoreClient";class cC{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=B_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ue(yi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ue(yi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=kv(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gd(r,e){r.asyncQueue.verifyOperationInProgress(),ue(yi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Iv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function hy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await hC(r);ue(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>oy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>oy(e.remoteStore,o)),r._onlineComponents=e}async function hC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ue(yi,"Using user provided OfflineComponentProvider");try{await gd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;mc("Error using user provided cache. Falling back to memory cache: "+t),await gd(r,new oc)}}else ue(yi,"Using default OfflineComponentProvider"),await gd(r,new uC(void 0));return r._offlineComponents}async function dC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ue(yi,"Using user provided OnlineComponentProvider"),await hy(r,r._uninitializedComponentsProvider._online)):(ue(yi,"Using default OnlineComponentProvider"),await hy(r,new zd))),r._onlineComponents}function fC(r){return dC(r).then(e=>e.syncEngine)}/**
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
 */function Ov(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const dy=new Map;/**
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
 */function Dv(r,e,t){if(!t)throw new ye(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function pC(r,e,t,s){if(e===!0&&s===!0)throw new ye(Z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function fy(r){if(!Ee.isDocumentKey(r))throw new ye(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function py(r){if(Ee.isDocumentKey(r))throw new ye(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function If(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Re()}function xv(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ye(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=If(r);throw new ye(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */const Lv="firestore.googleapis.com",my=!0;class gy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lv,this.ssl=my}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:my;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hR)throw new ye(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ov((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new q0;switch(s.type){case"firstParty":return new J0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=dy.get(t);s&&(ue("ComponentProvider","Removing Datastore"),dy.delete(t),s.terminate())}(this),Promise.resolve()}}function mC(r,e,t,s={}){var o;const u=(r=xv(r,Tc))._getSettings(),h=`${e}:${t}`;if(u.host!==Lv&&u.host!==h&&mc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Ut.MOCK_USER;else{p=OE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ye(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ut(_)}r._authCredentials=new Q0(new z_(p,g))}}/**
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
 */class Tf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tf(this.firestore,e,this._query)}}class Rr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rr(this.firestore,e,this._key)}}class di extends Tf{constructor(e,t,s){super(e,t,CS(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rr(this.firestore,null,new Ee(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function gC(r,e,...t){if(r=It(r),Dv("collection","path",e),r instanceof Tc){const s=et.fromString(e,...t);return py(s),new di(r,null,s)}{if(!(r instanceof Rr||r instanceof di))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...t));return py(s),new di(r.firestore,null,s)}}function yC(r,e,...t){if(r=It(r),arguments.length===1&&(e=B_.newId()),Dv("doc","path",e),r instanceof Tc){const s=et.fromString(e,...t);return fy(s),new Rr(r,null,new Ee(s))}{if(!(r instanceof Rr||r instanceof di))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...t));return fy(s),new Rr(r.firestore,r instanceof di?r.converter:null,new Ee(s))}}/**
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
 */const yy="AsyncQueue";class _y{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tv(this,"async_queue_retry"),this.Su=()=>{const s=md();s&&ue(yy,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Zi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ga(e))throw e;ue(yy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw is("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Ef.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Mv extends Tc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new _y,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function _C(r,e){const t=typeof r=="object"?r:Fy(),s=typeof r=="string"?r:Ju,o=Kd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=PE("firestore");u&&mC(o,...u)}return o}function vC(r){if(r._terminated)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||wC(r),r._firestoreClient}function wC(r){var e,t,s;const o=r._freezeSettings(),u=function(p,g,_,E){return new fS(p,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Ov(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new cC(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Fa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fa(Zn.fromBase64String(e))}catch(t){throw new ye(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fa(Zn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bv{constructor(e){this._methodName=e}}/**
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
 */class Uv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Fv{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const EC=/^__.*__$/;class IC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ka(e,this.data,t,this.fieldTransforms)}}function jv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re()}}class Af{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ac(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(jv(this.Lu)&&EC.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class TC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||vc(e)}ju(e,t,s,o=!1){return new Af({Lu:e,methodName:t,zu:s,path:Pt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AC(r){const e=r._freezeSettings(),t=vc(r._databaseId);return new TC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function SC(r,e,t,s,o,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,e,t,o);Wv("Data must be an object, but it was:",h,s);const p=Bv(s,h);let g,_;if(u.merge)g=new Mn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const N=RC(e,S,t);if(!h.contains(N))throw new ye(Z.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);PC(E,N)||E.push(N)}g=new Mn(E),_=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,_=h.fieldTransforms;return new IC(new Ln(p),g,_)}function zv(r,e){if(Hv(r=It(r)))return Wv("Unsupported field value:",e,r),Bv(r,e);if(r instanceof bv)return function(s,o){if(!jv(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let g=zv(p,o.Uu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=It(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Et.fromDate(s);return{timestampValue:bd(o.serializer,u)}}if(s instanceof Et){const u=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:bd(o.serializer,u)}}if(s instanceof Uv)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fa)return{bytesValue:XS(o.serializer,s._byteString)};if(s instanceof Rr){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:_v(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Fv)return function(h,p){return{mapValue:{fields:{[Q_]:{stringValue:Y_},[Dd]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw p.Wu("VectorValues must only contain numeric values.");return gf(p.serializer,_)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${If(s)}`)}(r,e)}function Bv(r,e){const t={};return W_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vo(r,(s,o)=>{const u=zv(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Hv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Et||r instanceof Uv||r instanceof Fa||r instanceof Rr||r instanceof bv||r instanceof Fv)}function Wv(r,e,t){if(!Hv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=If(t);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function RC(r,e,t){if((e=It(e))instanceof Vv)return e._internalPath;if(typeof e=="string")return kC(r,e);throw ac("Field path arguments must be of type string or ",r,!1,void 0,t)}const CC=new RegExp("[~\\*/\\[\\]]");function kC(r,e,t){if(e.search(CC)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vv(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ac(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ye(Z.INVALID_ARGUMENT,p+r+g)}function PC(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */function NC(r,e,t){let s;return s=r?r.toFirestore(e):e,s}function OC(r,e){const t=xv(r.firestore,Mv),s=yC(r),o=NC(r.converter,e);return DC(t,[SC(AC(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Sr.exists(!1))]).then(()=>s)}function DC(r,e){return function(s,o){const u=new Zi;return s.asyncQueue.enqueueAndForget(async()=>iC(await fC(s),o,u)),u.promise}(vC(r),e)}(function(e,t=!0){(function(o){_o=o})(Or),fi(new kr("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Mv(new X0(s.getProvider("auth-internal")),new Z0(h,s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ye(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zu(_.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),Xn(xg,Lg,e),Xn(xg,Lg,"esm2017")})();const xC={apiKey:"AIzaSyBaj2kDkCSrNYW5bD0yqyTrlZIfspTkNr0",authDomain:"netflix-clone-9dd7b.firebaseapp.com",projectId:"netflix-clone-9dd7b",storageBucket:"netflix-clone-9dd7b.firebasestorage.app",messagingSenderId:"95022898380",appId:"1:95022898380:web:57a17663251ab4cdc03669"},$v=Uy(xC),Ac=h0($v),LC=_C($v),MC=async(r,e,t)=>{try{const o=(await QT(Ac,e,t)).user;await OC(gC(LC,"user"),{uid:o.uid,name:r,EmailAuthProvider:"local",email:e})}catch(s){console.log(s),alert(s)}},VC=async(r,e)=>{try{await XT(Ac,r,e)}catch(t){console.log(t),alert(t)}},bC=()=>{eA(Ac)};function UC(){const r=H.useRef();return H.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=80?r.current.classList.add("nav-dark"):r.current.classList.remove("nav-dark")})},[]),Q.jsxs("div",{ref:r,className:"navbar",children:[Q.jsxs("div",{className:"navbar-left",children:[Q.jsx("img",{src:Sy,alt:""}),Q.jsxs("ul",{children:[Q.jsx("li",{children:"Home"}),Q.jsx("li",{children:"TV Shows"}),Q.jsx("li",{children:"Movies"}),Q.jsx("li",{children:"New & Popular"}),Q.jsx("li",{children:"My List"}),Q.jsx("li",{children:"Browse by Languages"})]})]}),Q.jsxs("div",{className:"navbar-right",children:[Q.jsx("img",{src:_E,alt:"",className:"icons"}),Q.jsx("p",{children:"Children"}),Q.jsx("img",{src:vE,alt:"",className:"icons"}),Q.jsxs("div",{className:"navbar-profile",children:[Q.jsx("img",{src:wE,alt:"",className:"profile"}),Q.jsx("img",{src:EE,alt:"",className:""}),Q.jsx("div",{className:"dropdown",children:Q.jsx("p",{onClick:()=>{bC()},children:"Sign Out of Netflix"})})]})]})]})}const FC="/assets/hero_banner-DUZNtQhX.jpg",jC="/assets/hero_title-CeCXMd-8.png",zC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC",BC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsUlEQVR4nO2dTYwVRRCAO5AsRuRH2HAQFMJK/DuLnBSX6M0Y4wG9CETZ6E0kIfGEeoAlxkREBSGagAQwGi+KR1CPLgLBg5IVFBA8KFzdhbCfqWxtJGa6Z95u95ue2fqSl5DZ96Zqunq6q6uqG+cMwzAMwzAMwzAMwzAMwzAMwwDuBp4H3gI+A04B54BrwKh+rum1k8AR/e5z8ltrwQ4BZgJPAnuBYaaO3OMj4AlghhnE3/D3ADuAP0iH3HtQZJkh/mv45cBOYITucR04ANw/bQ0BzNbeeIP6uKHGn+umE8CzwGXyQYamZ1zbAW4DdnfYODeB09pTB4DVOmzdCfToR/7dp38b0O/Kb8Y6lPU+MMu1EWCpupBVG/0YsB5YOAWZvcAG4LjeswonW+e+Ag9V9G5G9A1ZnkAHeUP2VJzsLwIPujYAPAJcLXngMWA/cFcX9FkMfFpheBKdV7oW9Pyyxj8LPFqDbqsrLPT+buybACwBLpQ84BfA/Bp1nAMcKtFRhs6lroHeTmjCldd/s8sEYEvJkHSiUd5Riaspi58XXGYA60oWhbtcgxZZoZ6fXeP/zwihN+FplzOypC9Z4WYz7JQMRz4uAXe4XAHeDSh/KLKsVcAm/ayKfG/JO/h42+UIcF9gDBVXc04kOfOBbwpkHAXmRXyThwOR1D6XG8AnHoXHYvr5FDf+BF9HlPN4YD7Y6zJMpkjPKGJ/5GGnjGirV+CgR8ZoVvEizWQV8U/M8AKwubT54bXIi0lf7Gi7yyiH6wu07Y4sa3MFA2yKLFNy076AXf05Zk2gF3EzdlSTLg9BKvPewFywJqas2D3kWCJ5RwON/1Uimd924w2frHK/epRbn0jePPF2iho/lhtaIPNFzzOeTSGvU+/HN/wsTCx7pS7CXgUeTixrUWAYWpJSdpliUrFWxCnXMoAznmddW6dSUgJYxE7XMoBdnmd9o06lfDGTja5lAC93I8bVqVJSQVDEY65lMB6aKOJEnUr95lFqWWK5Pbr6vqLhb6mw60ksU2qRijifUm6ZUpK0LiK1BzRYIHMwsUypMSrir5Ryy5SSoFQRqXvjlQKZfyaWOcvzrCMp5eZqgEKmowF8NT8LWmiA3hyHoLom4UKm4yT8o0ep1S00QL9H7FBKuZNdiA200ACv5LgQe7OOUAT1GMAXitiaUu5kg3GnW2iAMzkG42QPbxESuu1tiwEIh6MXp5JbVTlf/cyGFhlgo0fkz6lkdqKcbIIu4niLDPCdR+SHqWR2opzsQPdlxfqabgDCSfn+FDI7VXCGFq0WsacFBtjnESelODNdDniik2hR0+KmGoDxnLcv3rXN5YJ6Qz5FDzTYAIc9oq5nd94E8LGvYWKPlXTBAJLVC4z9SYbWKQGsCJSnD8c8j4HiTSCXI9cenQv0/uj7mKMAvBN4C44knnO2R7z/54Hn2OFyRbd9hnbEb4mYEx7UNyFqThh4PaC/FOTOdjkjp44EHkDG1HUuUxg/V8I37sv1p1wTAD4IGOFGjkZgvPFD21SbU2ym+VNfsmaiN21xmaDDTmh76g+p89ypDsX4nTBf1nxUwdyArz/Bpex8/qrIQRcVDusYlqqzGnTrD7iaE0jd0wOuyWgZeZXjag52o9RbwwtlvX6i8ZOWvXf7TRAXroxR3XHTlyiquS8QMrmVC43v+Z54kZw6UoUxjcHLzpRFU8xkvQR838H5cUO1brrognfkS277GNN87HtaIt6vvXnBLYf2LdRr/fodkfFTh4f2jelhf83ydiaDnDoSyCHUwcXGLLJiAdwuu0sqjsmpuK69Pso5Fo0EWKaNILvqu8WoHl28ou7nz22S3l7RW5oscu9trZ1kI+aY1+ixZ3LMzVT5RaoXdIKu/2iBpsF4SGOtzheH1U08p4u7if/A4apeG9LvbNXfJD+H1DAMwzAMwzAMwzAMwzAMwzBc/vwL4LImOvpUNA4AAAAASUVORK5CYII=";var _a={},vy;function HC(){if(vy)return _a;vy=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.parse=h,_a.serialize=_;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function h(N,F){const U=new u,W=N.length;if(W<2)return U;const z=(F==null?void 0:F.decode)||E;let G=0;do{const ne=N.indexOf("=",G);if(ne===-1)break;const J=N.indexOf(";",G),he=J===-1?W:J;if(ne>he){G=N.lastIndexOf(";",ne-1)+1;continue}const we=p(N,G,ne),ve=g(N,ne,we),P=N.slice(we,ve);if(U[P]===void 0){let I=p(N,ne+1,he),A=g(N,he,I);const k=z(N.slice(I,A));U[P]=k}G=he+1}while(G<W);return U}function p(N,F,U){do{const W=N.charCodeAt(F);if(W!==32&&W!==9)return F}while(++F<U);return U}function g(N,F,U){for(;F>U;){const W=N.charCodeAt(--F);if(W!==32&&W!==9)return F+1}return U}function _(N,F,U){const W=(U==null?void 0:U.encode)||encodeURIComponent;if(!r.test(N))throw new TypeError(`argument name is invalid: ${N}`);const z=W(F);if(!e.test(z))throw new TypeError(`argument val is invalid: ${F}`);let G=N+"="+z;if(!U)return G;if(U.maxAge!==void 0){if(!Number.isInteger(U.maxAge))throw new TypeError(`option maxAge is invalid: ${U.maxAge}`);G+="; Max-Age="+U.maxAge}if(U.domain){if(!t.test(U.domain))throw new TypeError(`option domain is invalid: ${U.domain}`);G+="; Domain="+U.domain}if(U.path){if(!s.test(U.path))throw new TypeError(`option path is invalid: ${U.path}`);G+="; Path="+U.path}if(U.expires){if(!S(U.expires)||!Number.isFinite(U.expires.valueOf()))throw new TypeError(`option expires is invalid: ${U.expires}`);G+="; Expires="+U.expires.toUTCString()}if(U.httpOnly&&(G+="; HttpOnly"),U.secure&&(G+="; Secure"),U.partitioned&&(G+="; Partitioned"),U.priority)switch(typeof U.priority=="string"?U.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${U.priority}`)}if(U.sameSite)switch(typeof U.sameSite=="string"?U.sameSite.toLowerCase():U.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${U.sameSite}`)}return G}function E(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function S(N){return o.call(N)==="[object Date]"}return _a}HC();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wy="popstate";function WC(r={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return Bd("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ja(o)}return GC(e,t,null,r)}function Je(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function tr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $C(){return Math.random().toString(36).substring(2,10)}function Ey(r,e){return{usr:r.state,key:r.key,idx:e}}function Bd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?wo(e):e,state:t,key:e&&e.key||s||$C()}}function ja({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function wo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function GC(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",g=null,_=E();_==null&&(_=0,h.replaceState({...h.state,idx:_},""));function E(){return(h.state||{idx:null}).idx}function S(){p="POP";let z=E(),G=z==null?null:z-_;_=z,g&&g({action:p,location:W.location,delta:G})}function N(z,G){p="PUSH";let ne=Bd(W.location,z,G);_=E()+1;let J=Ey(ne,_),he=W.createHref(ne);try{h.pushState(J,"",he)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;o.location.assign(he)}u&&g&&g({action:p,location:W.location,delta:1})}function F(z,G){p="REPLACE";let ne=Bd(W.location,z,G);_=E();let J=Ey(ne,_),he=W.createHref(ne);h.replaceState(J,"",he),u&&g&&g({action:p,location:W.location,delta:0})}function U(z){let G=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof z=="string"?z:ja(z);return ne=ne.replace(/ $/,"%20"),Je(G,`No window.location.(origin|href) available to create URL for href: ${ne}`),new URL(ne,G)}let W={get action(){return p},get location(){return r(o,h)},listen(z){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(wy,S),g=z,()=>{o.removeEventListener(wy,S),g=null}},createHref(z){return e(o,z)},createURL:U,encodeLocation(z){let G=U(z);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:N,replace:F,go(z){return h.go(z)}};return W}function Gv(r,e,t="/"){return KC(r,e,t,!1)}function KC(r,e,t,s){let o=typeof e=="string"?wo(e):e,u=_i(o.pathname||"/",t);if(u==null)return null;let h=Kv(r);qC(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let _=sk(u);p=rk(h[g],_,s)}return p}function Kv(r,e=[],t=[],s=""){let o=(u,h,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};g.relativePath.startsWith("/")&&(Je(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let _=Cr([s,g.relativePath]),E=t.concat(g);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Kv(u.children,e,E,_)),!(u.path==null&&!u.index)&&e.push({path:_,score:tk(_,u.index),routesMeta:E})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let g of qv(u.path))o(u,h,g)}),e}function qv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=qv(s.join("/")),p=[];return p.push(...h.map(g=>g===""?u:[u,g].join("/"))),o&&p.push(...h),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function qC(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:nk(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var QC=/^:[\w-]+$/,XC=3,YC=2,JC=1,ZC=10,ek=-2,Iy=r=>r==="*";function tk(r,e){let t=r.split("/"),s=t.length;return t.some(Iy)&&(s+=ek),e&&(s+=YC),t.filter(o=>!Iy(o)).reduce((o,u)=>o+(QC.test(u)?XC:u===""?JC:ZC),s)}function nk(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function rk(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],_=p===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=lc({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},E),N=g.route;if(!S&&_&&t&&!s[s.length-1].route.index&&(S=lc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Cr([u,S.pathname]),pathnameBase:uk(Cr([u,S.pathnameBase])),route:N}),S.pathnameBase!=="/"&&(u=Cr([u,S.pathnameBase]))}return h}function lc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=ik(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((_,{paramName:E,isOptional:S},N)=>{if(E==="*"){let U=p[N]||"";h=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const F=p[N];return S&&!F?_[E]=void 0:_[E]=(F||"").replace(/%2F/g,"/"),_},{}),pathname:u,pathnameBase:h,pattern:r}}function ik(r,e=!1,t=!0){tr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function sk(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function _i(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function ok(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?wo(r):r;return{pathname:t?t.startsWith("/")?t:ak(t,e):e,search:ck(s),hash:hk(o)}}function ak(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function yd(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lk(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Qv(r){let e=lk(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Xv(r,e,t,s=!1){let o;typeof r=="string"?o=wo(r):(o={...r},Je(!o.pathname||!o.pathname.includes("?"),yd("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),yd("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),yd("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let N=h.split("/");for(;N[0]==="..";)N.shift(),S-=1;o.pathname=N.join("/")}p=S>=0?e[S]:"/"}let g=ok(o,p),_=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||E)&&(g.pathname+="/"),g}var Cr=r=>r.join("/").replace(/\/\/+/g,"/"),uk=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ck=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,hk=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function dk(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Yv=["POST","PUT","PATCH","DELETE"];new Set(Yv);var fk=["GET",...Yv];new Set(fk);var Eo=H.createContext(null);Eo.displayName="DataRouter";var Sc=H.createContext(null);Sc.displayName="DataRouterState";var Jv=H.createContext({isTransitioning:!1});Jv.displayName="ViewTransition";var pk=H.createContext(new Map);pk.displayName="Fetchers";var mk=H.createContext(null);mk.displayName="Await";var nr=H.createContext(null);nr.displayName="Navigation";var Ya=H.createContext(null);Ya.displayName="Location";var rr=H.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var Sf=H.createContext(null);Sf.displayName="RouteError";function gk(r,{relative:e}={}){Je(Ja(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(nr),{hash:o,pathname:u,search:h}=Za(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:Cr([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Ja(){return H.useContext(Ya)!=null}function hs(){return Je(Ja(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Ya).location}var Zv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ew(r){H.useContext(nr).static||H.useLayoutEffect(r)}function Rf(){let{isDataRoute:r}=H.useContext(rr);return r?Nk():yk()}function yk(){Je(Ja(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(Eo),{basename:e,navigator:t}=H.useContext(nr),{matches:s}=H.useContext(rr),{pathname:o}=hs(),u=JSON.stringify(Qv(s)),h=H.useRef(!1);return ew(()=>{h.current=!0}),H.useCallback((g,_={})=>{if(tr(h.current,Zv),!h.current)return;if(typeof g=="number"){t.go(g);return}let E=Xv(g,JSON.parse(u),o,_.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Cr([e,E.pathname])),(_.replace?t.replace:t.push)(E,_.state,_)},[e,t,u,o,r])}H.createContext(null);function _k(){let{matches:r}=H.useContext(rr),e=r[r.length-1];return e?e.params:{}}function Za(r,{relative:e}={}){let{matches:t}=H.useContext(rr),{pathname:s}=hs(),o=JSON.stringify(Qv(t));return H.useMemo(()=>Xv(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function vk(r,e){return tw(r,e)}function tw(r,e,t,s){var ne;Je(Ja(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=H.useContext(nr),{matches:h}=H.useContext(rr),p=h[h.length-1],g=p?p.params:{},_=p?p.pathname:"/",E=p?p.pathnameBase:"/",S=p&&p.route;{let J=S&&S.path||"";nw(_,!S||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let N=hs(),F;if(e){let J=typeof e=="string"?wo(e):e;Je(E==="/"||((ne=J.pathname)==null?void 0:ne.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${J.pathname}" was given in the \`location\` prop.`),F=J}else F=N;let U=F.pathname||"/",W=U;if(E!=="/"){let J=E.replace(/^\//,"").split("/");W="/"+U.replace(/^\//,"").split("/").slice(J.length).join("/")}let z=!u&&t&&t.matches&&t.matches.length>0?t.matches:Gv(r,{pathname:W});tr(S||z!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),tr(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Ak(z&&z.map(J=>Object.assign({},J,{params:Object.assign({},g,J.params),pathname:Cr([E,o.encodeLocation?o.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?E:Cr([E,o.encodeLocation?o.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),h,t,s);return e&&G?H.createElement(Ya.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},G):G}function wk(){let r=Pk(),e=dk(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:u},"ErrorBoundary")," or"," ",H.createElement("code",{style:u},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var Ek=H.createElement(wk,null),Ik=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?H.createElement(rr.Provider,{value:this.props.routeContext},H.createElement(Sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Tk({routeContext:r,match:e,children:t}){let s=H.useContext(Eo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(rr.Provider,{value:r},t)}function Ak(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let g=o.findIndex(_=>_.route.id&&(u==null?void 0:u[_.route.id])!==void 0);Je(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,p=-1;if(t)for(let g=0;g<o.length;g++){let _=o[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:E,errors:S}=t,N=_.route.loader&&!E.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||N){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((g,_,E)=>{let S,N=!1,F=null,U=null;t&&(S=u&&_.route.id?u[_.route.id]:void 0,F=_.route.errorElement||Ek,h&&(p<0&&E===0?(nw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,U=null):p===E&&(N=!0,U=_.route.hydrateFallbackElement||null)));let W=e.concat(o.slice(0,E+1)),z=()=>{let G;return S?G=F:N?G=U:_.route.Component?G=H.createElement(_.route.Component,null):_.route.element?G=_.route.element:G=g,H.createElement(Tk,{match:_,routeContext:{outlet:g,matches:W,isDataRoute:t!=null},children:G})};return t&&(_.route.ErrorBoundary||_.route.errorElement||E===0)?H.createElement(Ik,{location:t.location,revalidation:t.revalidation,component:F,error:S,children:z(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):z()},null)}function Cf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sk(r){let e=H.useContext(Eo);return Je(e,Cf(r)),e}function Rk(r){let e=H.useContext(Sc);return Je(e,Cf(r)),e}function Ck(r){let e=H.useContext(rr);return Je(e,Cf(r)),e}function kf(r){let e=Ck(r),t=e.matches[e.matches.length-1];return Je(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function kk(){return kf("useRouteId")}function Pk(){var s;let r=H.useContext(Sf),e=Rk("useRouteError"),t=kf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Nk(){let{router:r}=Sk("useNavigate"),e=kf("useNavigate"),t=H.useRef(!1);return ew(()=>{t.current=!0}),H.useCallback(async(o,u={})=>{tr(t.current,Zv),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var Ty={};function nw(r,e,t){!e&&!Ty[r]&&(Ty[r]=!0,tr(!1,t))}H.memo(Ok);function Ok({routes:r,future:e,state:t}){return tw(r,void 0,t,e)}function Mu(r){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dk({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){Je(!Ja(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=H.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=wo(t));let{pathname:g="/",search:_="",hash:E="",state:S=null,key:N="default"}=t,F=H.useMemo(()=>{let U=_i(g,h);return U==null?null:{location:{pathname:U,search:_,hash:E,state:S,key:N},navigationType:s}},[h,g,_,E,S,N,s]);return tr(F!=null,`<Router basename="${h}"> is not able to match the URL "${g}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:H.createElement(nr.Provider,{value:p},H.createElement(Ya.Provider,{children:e,value:F}))}function xk({children:r,location:e}){return vk(Hd(r),e)}function Hd(r,e=[]){let t=[];return H.Children.forEach(r,(s,o)=>{if(!H.isValidElement(s))return;let u=[...e,o];if(s.type===H.Fragment){t.push.apply(t,Hd(s.props.children,u));return}Je(s.type===Mu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Hd(s.props.children,u)),t.push(h)}),t}var Vu="get",bu="application/x-www-form-urlencoded";function Rc(r){return r!=null&&typeof r.tagName=="string"}function Lk(r){return Rc(r)&&r.tagName.toLowerCase()==="button"}function Mk(r){return Rc(r)&&r.tagName.toLowerCase()==="form"}function Vk(r){return Rc(r)&&r.tagName.toLowerCase()==="input"}function bk(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Uk(r,e){return r.button===0&&(!e||e==="_self")&&!bk(r)}var Tu=null;function Fk(){if(Tu===null)try{new FormData(document.createElement("form"),0),Tu=!1}catch{Tu=!0}return Tu}var jk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(r){return r!=null&&!jk.has(r)?(tr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bu}"`),null):r}function zk(r,e){let t,s,o,u,h;if(Mk(r)){let p=r.getAttribute("action");s=p?_i(p,e):null,t=r.getAttribute("method")||Vu,o=_d(r.getAttribute("enctype"))||bu,u=new FormData(r)}else if(Lk(r)||Vk(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||p.getAttribute("action");if(s=g?_i(g,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||Vu,o=_d(r.getAttribute("formenctype"))||_d(p.getAttribute("enctype"))||bu,u=new FormData(p,r),!Fk()){let{name:_,type:E,value:S}=r;if(E==="image"){let N=_?`${_}.`:"";u.append(`${N}x`,"0"),u.append(`${N}y`,"0")}else _&&u.append(_,S)}}else{if(Rc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Vu,s=null,o=bu,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function Pf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Bk(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hk(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Wk(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await Bk(u,t);return h.links?h.links():[]}return[]}));return qk(s.flat(1).filter(Hk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ay(r,e,t,s,o,u){let h=(g,_)=>t[_]?g.route.id!==t[_].route.id:!0,p=(g,_)=>{var E;return t[_].pathname!==g.pathname||((E=t[_].route.path)==null?void 0:E.endsWith("*"))&&t[_].params["*"]!==g.params["*"]};return u==="assets"?e.filter((g,_)=>h(g,_)||p(g,_)):u==="data"?e.filter((g,_)=>{var S;let E=s.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(h(g,_)||p(g,_))return!0;if(g.route.shouldRevalidate){let N=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=t[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function $k(r,e){return Gk(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function Gk(r){return[...new Set(r)]}function Kk(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function qk(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(Kk(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function Qk(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Xk(){let r=H.useContext(Eo);return Pf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Yk(){let r=H.useContext(Sc);return Pf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Nf=H.createContext(void 0);Nf.displayName="FrameworkContext";function rw(){let r=H.useContext(Nf);return Pf(r,"You must render this element inside a <HydratedRouter> element"),r}function Jk(r,e){let t=H.useContext(Nf),[s,o]=H.useState(!1),[u,h]=H.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:_,onMouseLeave:E,onTouchStart:S}=e,N=H.useRef(null);H.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let W=G=>{G.forEach(ne=>{h(ne.isIntersecting)})},z=new IntersectionObserver(W,{threshold:.5});return N.current&&z.observe(N.current),()=>{z.disconnect()}}},[r]),H.useEffect(()=>{if(s){let W=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(W)}}},[s]);let F=()=>{o(!0)},U=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,N,{}]:[u,N,{onFocus:va(p,F),onBlur:va(g,U),onMouseEnter:va(_,F),onMouseLeave:va(E,U),onTouchStart:va(S,F)}]:[!1,N,{}]}function va(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Zk({page:r,...e}){let{router:t}=Xk(),s=H.useMemo(()=>Gv(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?H.createElement(tP,{page:r,matches:s,...e}):null}function eP(r){let{manifest:e,routeModules:t}=rw(),[s,o]=H.useState([]);return H.useEffect(()=>{let u=!1;return Wk(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function tP({page:r,matches:e,...t}){let s=hs(),{manifest:o,routeModules:u}=rw(),{loaderData:h,matches:p}=Yk(),g=H.useMemo(()=>Ay(r,e,p,o,s,"data"),[r,e,p,o,s]),_=H.useMemo(()=>Ay(r,e,p,o,s,"assets"),[r,e,p,o,s]),E=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let F=new Set,U=!1;if(e.forEach(z=>{var ne;let G=o.routes[z.route.id];!G||!G.hasLoader||(!g.some(J=>J.route.id===z.route.id)&&z.route.id in h&&((ne=u[z.route.id])!=null&&ne.shouldRevalidate)||G.hasClientLoader?U=!0:F.add(z.route.id))}),F.size===0)return[];let W=Qk(r);return U&&F.size>0&&W.searchParams.set("_routes",e.filter(z=>F.has(z.route.id)).map(z=>z.route.id).join(",")),[W.pathname+W.search]},[h,s,o,g,e,r,u]),S=H.useMemo(()=>$k(_,o),[_,o]),N=eP(_);return H.createElement(H.Fragment,null,E.map(F=>H.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...t})),S.map(F=>H.createElement("link",{key:F,rel:"modulepreload",href:F,...t})),N.map(({key:F,link:U})=>H.createElement("link",{key:F,...U})))}function nP(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iw&&(window.__reactRouterVersion="7.1.5")}catch{}function rP({basename:r,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=WC({window:t,v5Compat:!0}));let o=s.current,[u,h]=H.useState({action:o.action,location:o.location}),p=H.useCallback(g=>{H.startTransition(()=>h(g))},[h]);return H.useLayoutEffect(()=>o.listen(p),[o,p]),H.createElement(Dk,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var sw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Of=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:g,to:_,preventScrollReset:E,viewTransition:S,...N},F){let{basename:U}=H.useContext(nr),W=typeof _=="string"&&sw.test(_),z,G=!1;if(typeof _=="string"&&W&&(z=_,iw))try{let A=new URL(window.location.href),k=_.startsWith("//")?new URL(A.protocol+_):new URL(_),D=_i(k.pathname,U);k.origin===A.origin&&D!=null?_=D+k.search+k.hash:G=!0}catch{tr(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=gk(_,{relative:o}),[J,he,we]=Jk(s,N),ve=aP(_,{replace:h,state:p,target:g,preventScrollReset:E,relative:o,viewTransition:S});function P(A){e&&e(A),A.defaultPrevented||ve(A)}let I=H.createElement("a",{...N,...we,href:z||ne,onClick:G||u?e:P,ref:nP(F,he),target:g,"data-discover":!W&&t==="render"?"true":void 0});return J&&!W?H.createElement(H.Fragment,null,I,H.createElement(Zk,{page:ne})):I});Of.displayName="Link";var iP=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:g,..._},E){let S=Za(h,{relative:_.relative}),N=hs(),F=H.useContext(Sc),{navigator:U,basename:W}=H.useContext(nr),z=F!=null&&dP(S)&&p===!0,G=U.encodeLocation?U.encodeLocation(S).pathname:S.pathname,ne=N.pathname,J=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;t||(ne=ne.toLowerCase(),J=J?J.toLowerCase():null,G=G.toLowerCase()),J&&W&&(J=_i(J,W)||J);const he=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let we=ne===G||!o&&ne.startsWith(G)&&ne.charAt(he)==="/",ve=J!=null&&(J===G||!o&&J.startsWith(G)&&J.charAt(G.length)==="/"),P={isActive:we,isPending:ve,isTransitioning:z},I=we?e:void 0,A;typeof s=="function"?A=s(P):A=[s,we?"active":null,ve?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(P):u;return H.createElement(Of,{..._,"aria-current":I,className:A,ref:E,style:k,to:h,viewTransition:p},typeof g=="function"?g(P):g)});iP.displayName="NavLink";var sP=H.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Vu,action:p,onSubmit:g,relative:_,preventScrollReset:E,viewTransition:S,...N},F)=>{let U=cP(),W=hP(p,{relative:_}),z=h.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&sw.test(p),ne=J=>{if(g&&g(J),J.defaultPrevented)return;J.preventDefault();let he=J.nativeEvent.submitter,we=(he==null?void 0:he.getAttribute("formmethod"))||h;U(he||J.currentTarget,{fetcherKey:e,method:we,navigate:t,replace:o,state:u,relative:_,preventScrollReset:E,viewTransition:S})};return H.createElement("form",{ref:F,method:z,action:W,onSubmit:s?g:ne,...N,"data-discover":!G&&r==="render"?"true":void 0})});sP.displayName="Form";function oP(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ow(r){let e=H.useContext(Eo);return Je(e,oP(r)),e}function aP(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Rf(),g=hs(),_=Za(r,{relative:u});return H.useCallback(E=>{if(Uk(E,e)){E.preventDefault();let S=t!==void 0?t:ja(g)===ja(_);p(r,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[g,p,_,t,s,e,r,o,u,h])}var lP=0,uP=()=>`__${String(++lP)}__`;function cP(){let{router:r}=ow("useSubmit"),{basename:e}=H.useContext(nr),t=kk();return H.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:g,body:_}=zk(s,e);if(o.navigate===!1){let E=o.fetcherKey||uP();await r.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function hP(r,{relative:e}={}){let{basename:t}=H.useContext(nr),s=H.useContext(rr);Je(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Za(r||".",{relative:e})},h=hs();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(E=>E==="")){p.delete("index"),g.filter(S=>S).forEach(S=>p.append("index",S));let E=p.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Cr([t,u.pathname])),ja(u)}function dP(r,e={}){let t=H.useContext(Jv);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ow("useViewTransitionState"),o=Za(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=_i(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=_i(t.nextLocation.pathname,s)||t.nextLocation.pathname;return lc(o.pathname,h)!=null||lc(o.pathname,u)!=null}new TextEncoder;const wa=({title:r,category:e})=>{const[t,s]=H.useState([]),o=H.useRef(),u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWQ3ODQ1NjY5Yzc1ZDQyMTRhYmNiMzAwNTJmMTc2OCIsIm5iZiI6MTczOTE5NzkxMy4zNzY5OTk5LCJzdWIiOiI2N2FhMGRkOTJmYmFjNDBiOTA5MzgwZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qSwHesJ1zlbCN9Kgu8i61VbaDAv6gQY-m5J1wNQOqVE"}},h=p=>{p.preventDefault(),o.current.scrollLeft+=p.deltaY};return H.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${e||"now_playing"}?language=en-US&page=1`,u).then(p=>p.json()).then(p=>s(p.results)).catch(p=>console.log(res)),o.current.addEventListener("wheel",h)},[]),Q.jsxs("div",{className:"title-cards",children:[Q.jsx("h2",{children:r||"Popular on Netflix"}),Q.jsx("div",{className:"card-list",ref:o,children:t.map((p,g)=>Q.jsxs(Of,{to:`/player/${p.id}`,className:"card",children:[Q.jsx("img",{src:"https://image.tmdb.org/t/p/w500/"+p.backdrop_path,alt:""}),Q.jsx("p",{children:p.original_title})]},g))})]})},fP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQklEQVR4nO3dW4hVVRzH8WVqaEIPWUGWD13oRnSDbhQSkYGB+RCEBWFBl4fKXsqiiw/1UgZRdAGLCqGbWG81EkF0wcpoDOyGpT2oUFN0cSLKbPrGwr+0Z+agM3utPf+91/l94DwNM/P/n9+eWfvstfbaIYiIiIiIiIiIiIiIiIiITAngUOAU4GLgKuAm4E7gQeAx4HngNeBt4BNgM7Ct8hoCfrHXr4y2u/K1+Npe+b6twKfAB8CbwCvAauAh4F7gNmAZsBg4B5gHzOj8YQEcBlxkb/SjwFp7E74F/qBbRoDvgU3AG8CzwF3AFcDxwPTQJsDBwCI7st+xo7ef/Al8BrwE3Agc5RXEHOB+O3rkf38DLwMnTmUYlwA7K0XIeH/ZuDSt6TBuAPb0KEB6iycnM5sK40ob5GRyXmwijHl2Gin1LMsdyJM1C5G9fgBm5wpjdgc/P5T7VwIs9O6kEK/mCuRu704KsT1XIM95d1KQuTkCed+7i4IsyBGILo/kc2uOM6x/MxbU755ODeQE7w4K81ZqIAu8OyjMttRArnZu4FLgc8rxT5xDSgnkDs/qw94aZtjs44+Uof5cCbDKs/Iwfmr48QIu/1+WEsgznpWH3jWdZIsUuuq6lEDWeVYe9l9bHF++oHvuSQkkLsVxEw5c30zg9h7LgdrsiZRA4jomN2Hide4bX+JZTNu9nhLIN56Vh8nXe4YtR2qzD1MCiSv/3IT6dS+2lYpttCUlkDj16CYkqIwvu2iXoZSmfu5qIPsAh7dsfNkd6gKGPSsPGQFnAe/RDnPqNhFX4BURyJjx5TvPvoCjQx3eC+NCs4vEPceX0+oWXnogw06tnV63cP3LasZxdQMpaVA/u0WD+pF1m9BpbzMO6eSKk1DmB8OR2veN6NJJI4ZTjrItOAplXlzcmRLIx56Vh4nXObdll0f2ZzAlkPWelYeJjxO/0R3rUwKJt/u6CQeewv2S7lnT2TunQu+aTu74IodHUgJ5wLPyMH6ceKqAZUArUgK5xbPyMHqh3E+UYWnqpWpPi4CvKcu5KYGc6V19gerfRWXLaySfXbXDqITye8aC+t2mHIEMendRkHU5Alnj3UVBHs4RyArvLgpyc45ALvfuoiALcwQSPyFrW6Z08T08IjkQC+WjDAX1u41ZwrBAlnp3U4BrcwYy3bZ6lXoGs2/1Bxzbh9vA5hAnz07NGsaYa1uutyh0TLzV7sJGwqiEcgzwrnenHbAx7n7daBiVUKYB19i+7DLaV8D1wEFTEkaPcM6zmcUB2/S+nz6zjFjPA/YenN/45smTBcyy9VHxyQcrgRes4M0dPSkYstoHrJeV1lvscVboOrsVYD5wAbAk7mwALAfus608VtsTFeISpA12a/bWymMndox5JEV1jn3PmK/t6PG4ig32s9fa71plv3u51bLEapuftFGMiIiIiIiIiIiIiIiIiEio4z+YVM1nFEiF0QAAAABJRU5ErkJggg==",pP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF80lEQVR4nO2de6gVRRzHp0x7aGX20rKnZQ8LLchSxArtCRVUF4zwUQiZkUrRg9KCNLkZlEViEUloVlREUT7KCiLIIvMWvSy1IssemmlY5jX7xI9+wuncPffs2Z2zO7M7Hzj/3MPuzu987+zMb37z+40xgUAgEAgEAoFAIBAIBAKBQEeA3YFBwATgQeB5YJl+XgUWANOAK4CDI24RsAEwDHgc2Eh8dgIfAlNsigPsBvQwZQS4GHiP9GwDZgN9UrbnPGA5cIgpE8CRwCvYZwtwg7z6GuwRFwBv6D1ejHvhtcClxnOAy4BNNJelQK867eipY9XnVdeeGceIrsA3wFbgdOMpwE3AP2TDWqBf1fMPAMZo7/wr4pqX4xoyuuKiH6of5APAVLLne2As8BDQphOBWvwJHBPXmCVVF0tv6Ws8AbgO95kQ15iDgB0RN1gFHGYcBxgMbMdtFjRi0OWd3GhN7G6WA8De2kaXkdlVtxrt7zhbA2bWueE6YIBxEGA6brNY/mki2t0HuANojTJKLqrHZnFqjEMAvXWgdBUZ6LtW+UaTgLeAv4Gvgf2jDFsR8wEyzkw0jgC04iY/AeN1uUb8kPn641fSXtMf0fl0I8gCXPfMFejoN/2Cm8gyS2eInzTG1AJYn+ChnwIDTU4Al+AvU+sZ92XCG4snehvQJTMlFOAR/GSuqQfwfsqHyPWnmQzhvx7qGw/LQmMc456x8LAdGvDpmYEY3Wo4si4zsxEDb7X44I0a0OnWREFOwB9kNnVjowae04SGyFrY9cBeTRBkKH4g09/hSQzco8HQZiPIDO52WS+zKMj5uM+mVIuzwLwM5uZPqrNUf2DLvkfb5jtjYcU0K+R1NkMCYSQQR2Z0uM+PqQRRQ9/MoeHrZG4OXAkc2sAaVikEGVon4pUFX+jaz83ACODwqF4EbMBtVqcWRA19FPfYpkJJXOFpdbCSLPdkSZstQXp6EPDxgXesCKKinKj7jwLJWZxmr2vUO/rCGMvIgdosTCqIbHD4BLhKHMSq70YCf3Ty0EBt7kmzSWAXPwNzVIh99fuBwFedPDgQzdhEguiPHjVe7NQlbtmB95wukgXiMyyNILLjLmCX3mkEecJyY8rO5lTrdcA1eVtQMF5LLEadraSBZExLJYiKIvl1ATuMsCHI2ZYaU3Z2WMsfBN7N25oC8IEVMSpCo1llHxWVu6wJoqJIsCiQnJNsC7JPip2MZWeVVTEqRBmUQRZrEZnRFEFUlDPU4wzEZ1DTBFFRhoSeksPsqo4oRwBvx29XaRmdiSAqShfgbg8yXfNC4kh7ZiZIhTD9NHsqxEb+z/TMxagSpi9wJ/BRVcPKSLvsHcvyxx+iPaN7RWWbXsDxUqhG93G5nAnbbOZkJoYKcH/TTfKXrakigwkF6efA9tJi7SyxIMqivC13kA2RSf8ZCXJymFl1YEouYlSIMqtjm0rLyupNhXkI0gP4LO9fwgHEOT7FuABwtHqlZWaqcQnJKi2x39FWWd3HGTTTqllZuy77HKcaVwH6S9oW5WGUcR3dOd+qxbiKzCzjExpdlGL2RWRZHtWOrCDvWN24/RvFYA1woPEdDWgN1iKPz0oCpBrnUxzlW+AoU0R0yX6yRxHHdT5W9o6FJv7nUSEiKZL/3t8UDa0wNNmz9Or11nceugBwrofh3ZU+1bqPhZZe8nH6uwjYzxQB3Qs8To/x8ZHWRk7LcRLZg6RH+Mz12OfYAlxtPBbgLB2kXwB+x2+WA8caV9Cq0HIASoueYjZSa5u0aEbuJC35+pIOzr74D/WQMiG35B7tq+FJTwR+pTwscd7Z03ToOQXqAVFI2Pki4xN6rsVjBRNmtR7W5dbrKUHMfLbniTor9MQ5f4WoRvbx6qD/Mf4M1k9JaNkUHa2Xda+D4drtetrmuF21vUqHFjCWsuGv51Rpbq0GwFoKs9Rh2VkcrvV15+vrrd3yCZpLdWljlKTW5W2zd+i5Hsdp3ZTR2pvu0xncPK1Mt+uzUP/+gEYWx6vDOiDqmLlAIBAIBAKBQCBgfOZflDTp+yKPSRgAAAAASUVORK5CYII=",mP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHb0lEQVR4nO2dS48VRRSAiwUPAWME3UniIA+NoDAqD1lokAGjBGIAhWBCiKD+AQO6kLjARMAoCaiJKzEoD41oeAwSN4AxIMpO5CVEF6I4CsigPMJnTu4Z01SqZ6b7Vvft29Vfcjcw95zTdW53dZ1z6pQxFRUVFRUVFRUVTQowGngBeBf4CjgB/AlcoXhcUdtOqK3vqO2jTDMD3Ae8CfxCefgZWCPXZpoBoA/wJPA15Wc/8IRcsykiwAPAAcLjG6DVFAVgAPA2cK0boy8AO4BlwEydU24F+pqCAfRV20arrWLzTuDvbq5Prv0toH+jjR8BfB9j5HVgOzCn4Yb6++HN1R+WXJuL74C7GmXgZKAjxhGbgDGmpABjgS0xTvkDmJi3QdOBiw5jfgQeNYEATAWOOsZBxqYtLyMmxDhjAzDYBAZwE/C+Yzw6gYfzmDM6HI+ol0zgAMsdc8tZYHiWk5o9gYsBSzJR2IQASx1O+TaTlxp9tbUJ/s6w0ddkmzUmg0Wfvc74yKuSEkFtPo0iYzfeZzjkgONtapAXBSUEGAwcs8Zsvy/hEpuymepFeIkBHnHMJzN8CLYDhZu8WBwAwFZr7PbWK/B+S6B4/F4TCMAw4BONxcnnM4lxJUxB2HdJ+giG5jOibDdhOaPD8biW5NWwBHIkMBllVT1G2cmluSYQqN0ZcWxJIOcZ67un0xok4ecoF8oQte0ter1xnE8YWrFDTSN6bUhE0IuWkB0mIOjeIecSymq3vv98GoMkuR9lmQkIahN4HJsTynrZ+v66NAZJxUWUmabBAIOAx4HXgS90gdpVvdJVLXJE/0/+ZkbaBaw+skWeK99xR0JZsywZe9IYdMoS0pAyGGqRghma9PqH5Mh3PlYZfVK8aUki6rx+Nid1hsq527LppEkhRH4JUYaanAGeAg7jD4lWz27Addxm2XE2jZDLlpB+mVjr1j3cMRH6ZBfQkuP19Lf0/5tGyA1kYqlb79P6eIhDgnbrgPkSQQWGaKWIfIbqvy0A1gPHu5FzDpiX43XVN56NcAjwWszgXdWQduLiAWAS8KHKcLEim6tpcocAa2MGbLuP0hpgpCOM0cVaP1dREofE3BkXgUUZ6FqsBQi53ilN4xCdM2x+BcZlqFPmmTMOvXODdoi+TZ13OGNkFvocj7Azjom+JWSHtDseU+Oy0BWjv9Xx+NoZpEN00WezyLeeXtjxnMOOWSE6RAqTo+zyrSOBLVJAHeWw730fhXaIxpWiXG1Y1bj5P5BolzlND8khEqSL8oFP+WkANmZZd1ZYh2jNkh21zbd834EURls2XQIGmgAcIvmMKMdMAaAW5j+Z1WOryA6RxFF92bOM0G3bUVaG4BDJ5kVZYAoCsNCy7fMQHCJp1yi5LQR7uVCMcsQE4JCGZyLjAG6vO7PXhA5pWCYyl8xevOzKIUkJ1SHVI4tiT+p+dhb52ykW5YcQ7pAiv/Y+a9m2LcSF4XpTEID3QlwY2pHe46Y4oZNTlm1tIThkkAbuokzyJT8twBTLps4ggosqW+p0o2zwKT8NEm63bNroWX7TJahG+tSRohjaTlC1BeMQlX/IUtHuW0cCW3Y6irLDSeGq/Nm2DmCxbz297E9C1nthCu8Q1SFV6PZEOj4LXTH6H3S8YGSy07hZHNKixWlRzuRUKDcK+M3S/RdwZ7AOUT3zbF3UnNKa8Z1hO0OYk6HO5nCI6lrhGJxLUsSW0ZxhP6aEV33ralqH9LAdoT1JO4seXm2/jNFRbUdIcKega4SNWqrTJ2E4ZIou+uL6Cmd6Z0RsuYH8BaSEWm9ce6KP8pNWhyzUHLhsY+unn6EaQl+ogUI7NmVP4HNyvK66HdLITZ8t3ex28sH2rN6mstz02fDMHrUN93ZRdj0cakQDBF/bouXRUJTGAdN1HnC9HfVEp84/+TQ27l3jgBNlaa0xUJ2zUrJ5kmLVnlaX9dOh/7ZN/6bNZwi9Dru9tNYIuvmMT3w1n5FjfjLf6hUCwG5rLJemjfVEkfMzBmRicYmh1sCss+4GZipMzlwKssWfL7y1+FNhcgBWkE0wM0wxvFGPsDGWMGl5OtabtSWHWptdu01sfeOnp5Gl6sgZOsCnXhspq1A5Gs6majXeA8A0x7hN97VSlqPhohwN8TSd3gLc7OjVtc+nglZH+LrqAR+D9ueKcs37TjE9p89muVclJQB4xTFOq7MKIdu1VNdTNQUuKdSiG/Zb1cHMUhfS/sIRlhcDgo9zUbszbGf8nnmzTeChmGNIpXn9LSbMCXyjYzwkXDI5LyPaYs4ylI6hj5lAoDYOrs6n8oOdlrcxE/WcPhdbm+bM8fQrcHvRF31MTTCNQFv0yTl9Lq5rXlyCazeZckRt52tsKu5w4oN5Nmju7u1rTTd9cdHHW7smaiR7do82QC7MHvUutHpliNo4W23eHdPJtAu59tWFuh5Z+DjiXiGwTx5hpqjoZpy9lJ+9vrvOZYqG7ldJQobycFryGU1/VryeMr1UG+Tv0VfFrmqRonFZbTumtorNS1KnXSsqKioqKioqKkzj+Q9SwHTQdqZCRAAAAABJRU5ErkJggg==",gP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4nO3YP2rUQRzG4RFJYyeIuhewtdAbaLedvXgDCzurxcIDiK3gAWIRFnICG0ELe7FQ2EIEEQQj/nss3EKCkMBvs5OZeZ8TzO/74Q1JSomIiIiIhuEc5niAPbzGB3zx1w98wke8xRu8wkvs4yke4m7tb2kKbmIXX21I7W9qAq7h+aaOngDHhDO4j+9OyHHfMhycxZOTOnwCHAGPbMFR7xgSbm/j+AnwH7i8/hUyAWrA420dPws4BBdxkACV4N42j58FHLL+V0EC1IAL+JUAleDWto+fH0H/WP9nMwFqwbMNXP9g/Rf0DVzCTrUPag1eTDz+O1yp/R3NwvsJx/+J67W/oWn4PCHAXu33Nw/fJgS4U/v9zcPvCQGu1n5/80xzvvb7Rw+wU/v9zTNB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MF1D1iJavSE+1Zlp5oz6L0RHvmpSfaMys90ZZV6Y22LEtvtGVReqMt89IbbZmV3mjHqvRIO5alR9qxKD3SjnnpkXbMat/q1DFB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAEJMDRZQAIMTRaQAEOTBSTA0GQBCTA0WUACDE0WkABDkwUkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAERERERpU9/AMcmPt/3CYM3AAAAAElFTkSuQmCC",yP=()=>Q.jsxs("div",{className:"footer",children:[Q.jsxs("div",{className:"footer-icons",children:[Q.jsx("img",{src:fP,alt:""}),Q.jsx("img",{src:pP,alt:""}),Q.jsx("img",{src:mP,alt:""}),Q.jsx("img",{src:gP,alt:""})]}),Q.jsxs("ul",{children:[Q.jsx("li",{children:"Audio Description"}),Q.jsx("li",{children:"Help Center"}),Q.jsx("li",{children:"Gift Cards"}),Q.jsx("li",{children:"Media Centre"}),Q.jsx("li",{children:"Invester Relation"}),Q.jsx("li",{children:"Jobs"}),Q.jsx("li",{children:"Terms of Use"}),Q.jsx("li",{children:"Privacy"}),Q.jsx("li",{children:"Legal Notice"}),Q.jsx("li",{children:"Cookie Prefence"}),Q.jsx("li",{children:"Corporate information"}),Q.jsx("li",{children:"Contact Us"})]}),Q.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," Netflix, Inc. All rights reserved."]})]});function _P(){return Q.jsxs("div",{className:"home",children:[Q.jsx(UC,{}),Q.jsxs("div",{className:"hero",children:[Q.jsx("img",{src:FC,alt:"",className:"banner-img"}),Q.jsxs("div",{className:"hero-caption",children:[Q.jsx("img",{src:jC,alt:"",className:"caption-img"}),Q.jsx("p",{children:"The city lights flickered as the cold wind howled through the empty streets, shadows stretched and danced under the dim glow of streetlamps, a distant car horn echoed in the silence while she tightened her coat around her shoulders, heart pounding as she stepped forward into the unknown"}),Q.jsxs("div",{className:"hero-btns",children:[Q.jsxs("button",{className:"btn",children:[" ",Q.jsx("img",{src:zC,alt:""}),"Play "]}),Q.jsxs("button",{className:"btn dark-btn",children:[" ",Q.jsx("img",{src:BC,alt:""}),"More Info"]})]}),Q.jsx(wa,{})]})]}),Q.jsxs("div",{className:"more-cards",children:[Q.jsx(wa,{title:"Blockbuster Movies",category:"popular"}),Q.jsx(wa,{title:"Only On Netflix",category:"top_rated"}),Q.jsx(wa,{title:"Upcoming",category:"upcoming"}),Q.jsx(wa,{title:"Top Pic for you",category:"now_playing"})]}),Q.jsx(yP,{})]})}function vP(){const[r,e]=H.useState("Sign In"),[t,s]=H.useState(""),[o,u]=H.useState(""),[h,p]=H.useState(""),g=async _=>{_.preventDefault(),r==="Sign In"?await VC(o,h):await MC(t,o,h)};return Q.jsxs("div",{className:"login",children:[Q.jsx("img",{src:Sy,className:"login-logo",alt:""}),Q.jsxs("div",{className:"login-form",children:[Q.jsx("h1",{children:r}),Q.jsxs("form",{children:[r==="Sign Up"?Q.jsx("input",{value:t,onChange:_=>{s(_.target.value)},type:"text",placeholder:"Your name"}):Q.jsx(Q.Fragment,{}),Q.jsx("input",{value:o,onChange:_=>u(_.target.value),type:"email",placeholder:"Email"}),Q.jsx("input",{value:h,onChange:_=>{p(_.target.value)},type:"password",placeholder:"password"}),Q.jsx("button",{onClick:g,type:"submit",children:r}),Q.jsxs("div",{className:"form-help",children:[Q.jsxs("div",{className:"remember",children:[Q.jsx("input",{type:"checkbox"}),Q.jsx("label",{htmlFor:"",children:"Remember Me"})]}),Q.jsx("p",{children:"Need Help?"})]})]}),Q.jsx("div",{className:"form-switch",children:r==="Sign In"?Q.jsxs("p",{children:["New to Netflix? ",Q.jsx("span",{onClick:()=>{e("Sign Up")},children:"Sign Up Now"})]}):Q.jsxs("p",{children:[" Already have account?",Q.jsx("span",{onClick:()=>{e("Sign In")},children:"Sign In Now"})]})})]})]})}const wP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF20lEQVR4nO2d3W9URRTAx4hdDSqCPkjwQW18F9Bg+TTEJ5Ang9GCGPzAaFVEYnz1hW41YrCJfwNJE/ErgcYGiD4aIwIvvqgv7ZZaW0Uh1Ij9mUlPkw25M3tvd2bu3N35JZs02917zj137rlnzjkzq1QikUgkEolEIpFIJPIB3Aw8CrwIfAB8DlwAfgZmgX/kNSvvXZDPvC/feUQfI6e47gK4D3gL+Aq4TPv8CXwJHATWqG4GuA14DhgD/sMf14Gvgb3ArapbAG6XkTZBeH4D3gNWqE4FuAV4B5ihfLQOh7VOqpMAtgAXiY+fgCdU1dE+EfgEmC9ogCvAKeAIsA/YADwIrAR65LVS3tP/ex4YBEblu0XQug0DNVVFgIeAHwqccAM4Cmxq55YWF7UZ+AiYLCD/e6BXVQl9OxYI084AO3zEvhKT7wTOFggLt6sqADwtE4pWjAEbA+ql75TTOfSaA3armAEO5IiJx/XFKFHHZ8VN2dDn8LKKeCS3MvJx4M4IdF0BjOQw9u4YfbLNXVwDXlGRAbwmrsLEXDQ+W6KLyy0eMI+rSNGGzKF/bwxxsi2EmwIeVpEDrBVdbaFfeXG2TEZsIyF6I99gbNvIHlZlAGyzzPiuxewuWrgRk8/W57pZhQRYBpy3XP0DqqIAA5bzuhg0ESVZOBPHVcXBHvodCqXEHZZU53gMcbKjONs0qZnWOfUQSrxrudqlzfhcA/RbzvNwiPLTJYPwMQ/yasCQZOEm5e8e13Is8k3JqIbXspjU+Ez0eTDyyQw5dZdychQsTOzxKVhn3LI441hOj1Sxs7jkUlYOXb4x6HHKZ0uAKWm0I8BIXqThSlZOfXZhrq6v9iFQ912Y/NWyQEbWDLqQVXDOYJqev+5DoG5uyeLDgEY+WUbOAThm0OczH1dV5y6y2NTJRtYAWw06zTotwUkvXBZ/tzslJXIjN+l41aDbepeCdPNgFqOdbuRFpK0si/3KFdLVmcURTyHcIqOx9MvJZAmvcT3whUHIvm4wskaPXIOeJ5QrLCnRDZ3sLprRM1+DrueUK4BfDULu92Bk3zSkab1QzgR4wHC8Xwob1CLkd4OQux35uTIYKqj7PYbjTBc2qEWIqZWg6KiYJB4ml3A3ZjFX2KBdZujxGA3tynXUiYd6jK6jkx6GE0spIIR6GJrCu8e6KLzbGCK8SxMWwkxY0hScMFPwlFTCWMbbHyJNeqXdqjTVT5Ouc70WxJT4b7sfjciNLX2G/hP/IsyUbTvq6Pi1WI0NfOz9QdgkTC8rzmIycHG27kJWweV0puLsgA+Ba6TEnsXOLmw3+Be4N3Q556xjOT0WVzXhUlYOXb4N2kAjQvVWDPiqhucc2YMRVL81/b6bHE0ZuNMe5NUkEdWQVz1UkyNwk6UdbMJ7ma1FE/ozqkPA3tD5dtmN6I1O2HQEuMty5+pG9OWhFNGbipgYURUH+NRyfgdDKqJbxH60KPOqqijAm9EsFmpq0p6Pfmmvu6XW864jqyKK6Z1bTOjFkWtVRQDWA39ZzudYmcrVZPmuiakqGJsFI9uWKH8Xcu2MScleS2ZvcWRvV3G7C9tI/kPXC1UFlvYi/3OfgGkT4I0c21/EtdRabyKSY2OUkRjibImTbSEckkB7SsWI3h4nh7EbXvMErafVe3M08mgjv6RiRka2zY0sohdLbgmcIDLlLpqZi3YkG3y27QHZjD75J10VDzImVrssqc6sB19cPjlnNGIL/W5kSlY/bW2nXCUh5zYpP9lCtqwQLo7oYoknPbyELTOvSpGhLo0rfbI95qqmLTNXyXt98pm6fMdUrTYxLxe43DjZBSxsYWnbSKUszpc2rfYFC/7ykKQZy2Zais3OnwvRACyXk9SbqIRmSjbqrvzmLUW3ctsjq69M1XUXXJctkvtjWuVVCsBqvYBdr62W7p92mZVjDXhrCag6LLSfrQNekA7OE7oHWX4KZKbp50Fm5L1z8pkhiT70d9PPgyQSiUQikUgkEomEysn//LHzY2FxebUAAAAASUVORK5CYII=";function EP(){const{id:r}=_k(),e=Rf(),[t,s]=H.useState({name:"",key:"",published_at:"",type:""}),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWQ3ODQ1NjY5Yzc1ZDQyMTRhYmNiMzAwNTJmMTc2OCIsIm5iZiI6MTczOTE5NzkxMy4zNzY5OTk5LCJzdWIiOiI2N2FhMGRkOTJmYmFjNDBiOTA5MzgwZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qSwHesJ1zlbCN9Kgu8i61VbaDAv6gQY-m5J1wNQOqVE"}};return H.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${r}/videos?language=en-US`,o).then(u=>u.json()).then(u=>s(u.results[0])).catch(u=>console.error(u))},[]),Q.jsxs("div",{className:"player",children:[Q.jsx("img",{src:wP,alt:"",onClick:()=>{e("/")}}),Q.jsx("iframe",{width:"90%",height:"90%",src:`https://www.youtube.com/embed/${t.key}`,title:"trailer",frameBorder:0,allowFullScreen:!0}),Q.jsxs("div",{className:"player-info",children:[Q.jsx("p",{children:t.published_at.slice(0,10)}),Q.jsx("p",{children:t.name}),Q.jsx("p",{children:t.type})]})]})}function IP(){const r=Rf();return H.useEffect(()=>{ZT(Ac,async e=>{e?(console.log("loggedIn"),r("/")):(console.log("Logged Out"),r("/login"))})},[]),Q.jsx("div",{children:Q.jsxs(xk,{children:[Q.jsx(Mu,{path:"/",element:Q.jsx(_P,{})}),Q.jsx(Mu,{path:"/login",element:Q.jsx(vP,{})}),Q.jsx(Mu,{path:"/player/:id",element:Q.jsx(EP,{})})]})})}yE.createRoot(document.getElementById("root")).render(Q.jsx(H.StrictMode,{children:Q.jsx(rP,{children:Q.jsx(IP,{})})}));
