"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[5028],{5028:(e,t,n)=>{n.r(t),n.d(t,{SliderAdv:()=>De});var r=n(9950),o=n(1389),i=n(4418),l=n(1317),s=e=>e?"":void 0,a=e=>!!e||void 0,c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")};function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.some((t=>(null==t||t(e),null==e?void 0:e.defaultPrevented)))}}function d(e){const{orientation:t,vertical:n,horizontal:r}=e;return"vertical"===t?n:r}var h={width:0,height:0},p=e=>e||h;function f(e){const t=function(e){var t;return null!=(t=e.view)?t:window}(e);return"undefined"!==typeof t.PointerEvent&&e instanceof t.PointerEvent?!("mouse"!==e.pointerType):e instanceof t.MouseEvent}function v(e){return!!e.touches}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return v(e)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";const n=e.touches[0]||e.changedTouches[0];return{x:n["".concat(t,"X")],y:n["".concat(t,"Y")]}}(e,t):function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{x:e["".concat(t,"X")],y:e["".concat(t,"Y")]}}(e,t)}function g(e){function t(t){e(t,{point:m(t)})}const n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?function(e){return t=>{const n=f(t);(!n||n&&0===t.button)&&e(t)}}(t):t;return n}function b(e,t,n,r){return function(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}(e,t,g(n,"pointerdown"===t),r)}const w=1/60*1e3,y="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),x="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(y())),w);let S=!0,k=!1,P=!1;const E={delta:0,timestamp:0},C=["read","update","preRender","render","postRender"],T=C.reduce(((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,i=!1;const l=new WeakSet,s={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o,s=i?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&l.add(e),-1===s.indexOf(e)&&(s.push(e),i&&o&&(r=t.length)),e},cancel:e=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1),l.delete(e)},process:a=>{if(o)i=!0;else{if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let n=0;n<r;n++){const r=t[n];r(a),l.has(r)&&(s.schedule(r),e())}o=!1,i&&(i=!1,s.process(a))}}};return s}((()=>k=!0)),e)),{}),j=C.reduce(((e,t)=>{const n=T[t];return e[t]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return k||M(),n.schedule(e,t,r)},e}),{}),O=C.reduce(((e,t)=>(e[t]=T[t].cancel,e)),{}),N=(C.reduce(((e,t)=>(e[t]=()=>T[t].process(E),e)),{}),e=>T[e].process(E)),R=e=>{k=!1,E.delta=S?w:Math.max(Math.min(e-E.timestamp,40),1),E.timestamp=e,P=!0,C.forEach(N),P=!1,k&&(S=!1,x(R))},M=()=>{k=!0,S=!0,P||x(R)},D=()=>E,_=j;var I=Object.defineProperty,B=(e,t,n)=>(((e,t,n)=>{t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),z=class{constructor(e,t,n){var r;if(B(this,"history",[]),B(this,"startEvent",null),B(this,"lastEvent",null),B(this,"lastEventInfo",null),B(this,"handlers",{}),B(this,"removeListeners",(()=>{})),B(this,"threshold",3),B(this,"win"),B(this,"updatePoint",(()=>{if(!this.lastEvent||!this.lastEventInfo)return;const e=L(this.lastEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){if("number"===typeof e&&"number"===typeof t)return H(e,t);if(V(e)&&V(t)){const n=H(e.x,t.x),r=H(e.y,t.y);return Math.sqrt(n**2+r**2)}return 0}(e.offset,{x:0,y:0})>=this.threshold;if(!t&&!n)return;const{timestamp:r}=D();this.history.push({...e.point,timestamp:r});const{onStart:o,onMove:i}=this.handlers;t||(null==o||o(this.lastEvent,e),this.startEvent=this.lastEvent),null==i||i(this.lastEvent,e)})),B(this,"onPointerMove",((e,t)=>{this.lastEvent=e,this.lastEventInfo=t,_.update(this.updatePoint,!0)})),B(this,"onPointerUp",((e,t)=>{const n=L(t,this.history),{onEnd:r,onSessionEnd:o}=this.handlers;null==o||o(e,n),this.end(),r&&this.startEvent&&(null==r||r(e,n))})),this.win=null!=(r=e.view)?r:window,function(e){return v(e)&&e.touches.length>1}(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const o={point:m(e)},{timestamp:i}=D();this.history=[{...o.point,timestamp:i}];const{onSessionStart:l}=t;null==l||l(e,L(o,this.history)),this.removeListeners=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.reduce(((e,t)=>t(e)),e)}(b(this.win,"pointermove",this.onPointerMove),b(this.win,"pointerup",this.onPointerUp),b(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;null==(e=this.removeListeners)||e.call(this),O.update(this.updatePoint)}};function A(e,t){return{x:e.x-t.x,y:e.y-t.y}}function L(e,t){return{point:e.point,delta:A(e.point,t[t.length-1]),offset:A(e.point,t[0]),velocity:U(t,.1)}}var F=e=>1e3*e;function U(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=e[e.length-1];for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>F(t)));)n--;if(!r)return{x:0,y:0};const i=(o.timestamp-r.timestamp)/1e3;if(0===i)return{x:0,y:0};const l={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function H(e,t){return Math.abs(e-t)}function V(e){return"x"in e&&"y"in e}function W(e){const t=(0,r.useRef)(null);return t.current=e,t}var X=n(1823),Y=n(5349),q=n(591);var K=Boolean(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:r.useEffect;function Z(e){let{getNodes:t,observeMutation:n=!0}=e;const[o,i]=(0,r.useState)([]),[l,s]=(0,r.useState)(0);return K((()=>{const e=t(),r=e.map(((e,t)=>function(e,t){var n;if(!e)return void t(void 0);t({width:e.offsetWidth,height:e.offsetHeight});const r=new(null!==(n=e.ownerDocument.defaultView)&&void 0!==n?n:window).ResizeObserver((n=>{if(!Array.isArray(n)||!n.length)return;const[r]=n;let o,i;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,i=t.blockSize}else o=e.offsetWidth,i=e.offsetHeight;t({width:o,height:i})}));return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}(e,(e=>{i((n=>[...n.slice(0,t),e,...n.slice(t+1)]))}))));if(n){const t=e[0];r.push(function(e,t){var n,r;if(!e||!e.parentElement)return;const o=new(null!=(r=null==(n=e.ownerDocument)?void 0:n.defaultView)?r:window).MutationObserver((()=>{t()}));return o.observe(e.parentElement,{childList:!0}),()=>{o.disconnect()}}(t,(()=>{s((e=>e+1))})))}return()=>{r.forEach((e=>{null==e||e()}))}}),[l]),o}var Q=n(7237),G=n(8621);function J(e){var t;const{min:n=0,max:o=100,onChange:i,value:l,defaultValue:c,isReversed:f,direction:v="ltr",orientation:m="horizontal",id:g,isDisabled:w,isReadOnly:y,onChangeStart:x,onChangeEnd:S,step:k=1,getAriaValueText:P,"aria-valuetext":E,"aria-label":C,"aria-labelledby":T,name:j,focusThumbOnChange:O=!0,...N}=e,R=(0,X.c)(x),M=(0,X.c)(S),D=(0,X.c)(P),_=function(e){const{isReversed:t,direction:n,orientation:r}=e;return"ltr"===n||"vertical"===r?t:!t}({isReversed:f,direction:v,orientation:m}),[I,B]=(0,q.i)({value:l,defaultValue:null!=c?c:ee(n,o),onChange:i}),[A,L]=(0,r.useState)(!1),[F,U]=(0,r.useState)(!1),H=!(w||y),V=(o-n)/10,K=k||(o-n)/100,J=(0,G.L3)(I,n,o),te=_?o-J+n:J,ne=(0,G.w5)(te,n,o),re="vertical"===m,oe=W({min:n,max:o,step:k,isDisabled:w,value:J,isInteractive:H,isReversed:_,isVertical:re,eventSource:null,focusThumbOnChange:O,orientation:m}),ie=(0,r.useRef)(null),le=(0,r.useRef)(null),se=(0,r.useRef)(null),ae=(0,r.useId)(),ce=null!=g?g:ae,[ue,de]=["slider-thumb-".concat(ce),"slider-track-".concat(ce)],he=(0,r.useCallback)((e=>{var t,n;if(!ie.current)return;const r=oe.current;r.eventSource="pointer";const o=ie.current.getBoundingClientRect(),{clientX:i,clientY:l}=null!=(n=null==(t=e.touches)?void 0:t[0])?n:e;let s=(re?o.bottom-l:i-o.left)/(re?o.height:o.width);_&&(s=1-s);let a=(0,G.wr)(s,r.min,r.max);return r.step&&(a=parseFloat((0,G.hp)(a,r.min,r.step))),a=(0,G.L3)(a,r.min,r.max),a}),[re,_,oe]),pe=(0,r.useCallback)((e=>{const t=oe.current;t.isInteractive&&(e=parseFloat((0,G.hp)(e,t.min,K)),e=(0,G.L3)(e,t.min,t.max),B(e))}),[K,B,oe]),fe=(0,r.useMemo)((()=>({stepUp(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K;pe(_?J-e:J+e)},stepDown(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K;pe(_?J+e:J-e)},reset(){pe(c||0)},stepTo(e){pe(e)}})),[pe,_,J,K,c]),ve=(0,r.useCallback)((e=>{const t=oe.current,n={ArrowRight:()=>fe.stepUp(),ArrowUp:()=>fe.stepUp(),ArrowLeft:()=>fe.stepDown(),ArrowDown:()=>fe.stepDown(),PageUp:()=>fe.stepUp(V),PageDown:()=>fe.stepDown(V),Home:()=>pe(t.min),End:()=>pe(t.max)}[e.key];n&&(e.preventDefault(),e.stopPropagation(),n(e),t.eventSource="keyboard")}),[fe,pe,V,oe]),me=null!=(t=null==D?void 0:D(J))?t:E,ge=function(e){const[t]=Z({observeMutation:!1,getNodes(){var t;return["object"===typeof(t=e)&&null!==t&&"current"in t?e.current:e]}});return t}(le),{getThumbStyle:be,rootStyle:we,trackStyle:ye,innerTrackStyle:xe}=(0,r.useMemo)((()=>{const e=oe.current,t=null!=ge?ge:{width:0,height:0};return function(e){const{orientation:t,thumbPercents:n,thumbRects:r,isReversed:o}=e,i="vertical"===t?r.reduce(((e,t)=>p(e).height>p(t).height?e:t),h):r.reduce(((e,t)=>p(e).width>p(t).width?e:t),h),l={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...d({orientation:t,vertical:i?{paddingLeft:i.width/2,paddingRight:i.width/2}:{},horizontal:i?{paddingTop:i.height/2,paddingBottom:i.height/2}:{}})},s={position:"absolute",...d({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},a=1===n.length,c=[0,o?100-n[0]:n[0]],u=a?c:n;let f=u[0];!a&&o&&(f=100-f);const v=Math.abs(u[u.length-1]-u[0]);return{trackStyle:s,innerTrackStyle:{...s,...d({orientation:t,vertical:o?{height:"".concat(v,"%"),top:"".concat(f,"%")}:{height:"".concat(v,"%"),bottom:"".concat(f,"%")},horizontal:o?{width:"".concat(v,"%"),right:"".concat(f,"%")}:{width:"".concat(v,"%"),left:"".concat(f,"%")}})},rootStyle:l,getThumbStyle:e=>{var o;const i=null!=(o=r[e])?o:h;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...d({orientation:t,vertical:{bottom:"calc(".concat(n[e],"% - ").concat(i.height/2,"px)")},horizontal:{left:"calc(".concat(n[e],"% - ").concat(i.width/2,"px)")}})}}}}({isReversed:_,orientation:e.orientation,thumbRects:[t],thumbPercents:[ne]})}),[_,ge,ne,oe]),Se=(0,r.useCallback)((()=>{oe.current.focusThumbOnChange&&setTimeout((()=>{var e;return null==(e=le.current)?void 0:e.focus()}))}),[oe]);function ke(e){const t=he(e);null!=t&&t!==oe.current.value&&B(t)}(0,Y.w)((()=>{const e=oe.current;Se(),"keyboard"===e.eventSource&&(null==M||M(e.value))}),[J,M]),function(e,t){const{onPan:n,onPanStart:o,onPanEnd:i,onPanSessionStart:l,onPanSessionEnd:s,threshold:a}=t,c=Boolean(n||o||i||l||s),u=(0,r.useRef)(null),d=W({onSessionStart:l,onSessionEnd:s,onStart:o,onMove:n,onEnd(e,t){u.current=null,null==i||i(e,t)}});(0,r.useEffect)((()=>{var e;null==(e=u.current)||e.updateHandlers(d.current)})),(0,r.useEffect)((()=>{const t=e.current;if(t&&c)return b(t,"pointerdown",(function(e){u.current=new z(e,d.current,a)}))}),[e,c,d,a]),(0,r.useEffect)((()=>()=>{var e;null==(e=u.current)||e.end(),u.current=null}),[])}(se,{onPanSessionStart(e){const t=oe.current;t.isInteractive&&(L(!0),Se(),ke(e),null==R||R(t.value))},onPanSessionEnd(){const e=oe.current;e.isInteractive&&(L(!1),null==M||M(e.value))},onPan(e){oe.current.isInteractive&&ke(e)}});const Pe=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,...N,ref:(0,Q.Px)(t,se),tabIndex:-1,"aria-disabled":a(w),"data-focused":s(F),style:{...e.style,...we}}}),[N,w,F,we]),Ee=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,Q.Px)(t,ie),id:de,"data-disabled":s(w),style:{...e.style,...ye}}}),[w,de,ye]),Ce=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,style:{...e.style,...xe}}}),[xe]),Te=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,Q.Px)(t,le),role:"slider",tabIndex:H?0:void 0,id:ue,"data-active":s(A),"aria-valuetext":me,"aria-valuemin":n,"aria-valuemax":o,"aria-valuenow":J,"aria-orientation":m,"aria-disabled":a(w),"aria-readonly":a(y),"aria-label":C,"aria-labelledby":C?void 0:T,style:{...e.style,...be(0)},onKeyDown:u(e.onKeyDown,ve),onFocus:u(e.onFocus,(()=>U(!0))),onBlur:u(e.onBlur,(()=>U(!1)))}}),[H,ue,A,me,n,o,J,m,w,y,C,T,be,ve]),je=(0,r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const r=!(e.value<n||e.value>o),i=J>=e.value,l=(0,G.w5)(e.value,n,o),a={position:"absolute",pointerEvents:"none",...$({orientation:m,vertical:{bottom:"".concat(_?100-l:l,"%")},horizontal:{left:"".concat(_?100-l:l,"%")}})};return{...e,ref:t,role:"presentation","aria-hidden":!0,"data-disabled":s(w),"data-invalid":s(!r),"data-highlighted":s(i),style:{...e.style,...a}}}),[w,_,o,n,m,J]),Oe=(0,r.useCallback)((function(){return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,type:"hidden",value:J,name:j}}),[j,J]);return{state:{value:J,isFocused:F,isDragging:A},actions:fe,getRootProps:Pe,getTrackProps:Ee,getInnerTrackProps:Ce,getThumbProps:Te,getMarkerProps:je,getInputProps:Oe}}function $(e){const{orientation:t,vertical:n,horizontal:r}=e;return"vertical"===t?n:r}function ee(e,t){return t<e?e:e+(t-e)/2}var te=n(221),ne=n(8039),re=n(6296),oe=n(2867),ie=n(6396),le=n(6306),se=n(4414),[ae,ce]=(0,te.q)({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[ue,de]=(0,te.q)({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),he=(0,ne.R)(((e,t)=>{var n;const r={...e,orientation:null!=(n=null==e?void 0:e.orientation)?n:"horizontal"},o=(0,re.o5)("Slider",r),i=(0,oe.MN)(r),{direction:l}=(0,ie.D)();i.direction=l;const{getInputProps:s,getRootProps:a,...u}=J(i),d=a(),h=s({},t);return(0,se.jsx)(ae,{value:u,children:(0,se.jsx)(ue,{value:o,children:(0,se.jsxs)(le.B.div,{...d,className:c("chakra-slider",r.className),__css:o.container,children:[r.children,(0,se.jsx)("input",{...h})]})})})}));he.displayName="Slider";var pe=(0,ne.R)(((e,t)=>{const{getThumbProps:n}=ce(),r=de(),o=n(e,t);return(0,se.jsx)(le.B.div,{...o,className:c("chakra-slider__thumb",e.className),__css:r.thumb})}));pe.displayName="SliderThumb";var fe=(0,ne.R)(((e,t)=>{const{getTrackProps:n}=ce(),r=de(),o=n(e,t);return(0,se.jsx)(le.B.div,{...o,className:c("chakra-slider__track",e.className),__css:r.track})}));fe.displayName="SliderTrack";var ve=(0,ne.R)(((e,t)=>{const{getInnerTrackProps:n}=ce(),r=de(),o=n(e,t);return(0,se.jsx)(le.B.div,{...o,className:c("chakra-slider__filled-track",e.className),__css:r.filledTrack})}));ve.displayName="SliderFilledTrack",(0,ne.R)(((e,t)=>{const{getMarkerProps:n}=ce(),r=de(),o=n(e,t);return(0,se.jsx)(le.B.div,{...o,className:c("chakra-slider__marker",e.className),__css:r.mark})})).displayName="SliderMark";var me={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},ge=n(9787);function be(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:(0,ge.sb)(e)&&function(e){const t=e.ownerDocument.defaultView||window,{overflow:n,overflowX:r,overflowY:o}=t.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(n+o+r)}(e)?e:be(function(e){return"html"===e.localName?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}(e))}var we=n(1488),ye=n(4752),xe=n(4817),Se=n(7387),ke=n(7681),Pe=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},Ee=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window};function Ce(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{openDelay:t=0,closeDelay:n=0,closeOnClick:o=!0,closeOnMouseDown:i,closeOnScroll:l,closeOnPointerDown:s=i,closeOnEsc:a=!0,onOpen:c,onClose:u,placement:d,id:h,isOpen:p,defaultIsOpen:f,arrowSize:v=10,arrowShadowColor:m,arrowPadding:g,modifiers:b,isDisabled:w,gutter:y,offset:x,direction:S,...k}=e,{isOpen:P,onOpen:E,onClose:C}=(0,xe.j)({isOpen:p,defaultIsOpen:f,onOpen:c,onClose:u}),{referenceRef:T,getPopperProps:j,getArrowInnerProps:O,getArrowProps:N}=(0,we.E)({enabled:P,placement:d,arrowPadding:g,modifiers:b,gutter:y,offset:x,direction:S}),R=(0,r.useId)(),M="tooltip-".concat(null!=h?h:R),D=(0,r.useRef)(null),_=(0,r.useRef)(),I=(0,r.useCallback)((()=>{_.current&&(clearTimeout(_.current),_.current=void 0)}),[]),B=(0,r.useRef)(),z=(0,r.useCallback)((()=>{B.current&&(clearTimeout(B.current),B.current=void 0)}),[]),A=(0,r.useCallback)((()=>{z(),C()}),[C,z]),L=function(e,t){return(0,r.useEffect)((()=>{const n=Pe(e);return n.addEventListener(Te,t),()=>n.removeEventListener(Te,t)}),[t,e]),()=>{const t=Pe(e),n=Ee(e);t.dispatchEvent(new n.CustomEvent(Te))}}(D,A),F=(0,r.useCallback)((()=>{if(!w&&!_.current){P&&L();const e=Ee(D);_.current=e.setTimeout(E,t)}}),[L,w,P,E,t]),U=(0,r.useCallback)((()=>{I();const e=Ee(D);B.current=e.setTimeout(A,n)}),[n,A,I]),H=(0,r.useCallback)((()=>{P&&o&&U()}),[o,U,P]),V=(0,r.useCallback)((()=>{P&&s&&U()}),[s,U,P]),W=(0,r.useCallback)((e=>{P&&"Escape"===e.key&&U()}),[P,U]);(0,Se.M)((()=>Pe(D)),"keydown",a?W:void 0),(0,Se.M)((()=>{if(!l)return null;const e=D.current;if(!e)return null;const t=be(e);return"body"===t.localName?Ee(D):t}),"scroll",(()=>{P&&l&&A()}),{passive:!0,capture:!0}),(0,r.useEffect)((()=>{w&&(I(),P&&C())}),[w,P,C,I]),(0,r.useEffect)((()=>()=>{I(),z()}),[I,z]),(0,Se.M)((()=>D.current),"pointerleave",U);const X=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,Q.Px)(D,t,T),onPointerEnter:(0,ke.Hj)(e.onPointerEnter,(e=>{"touch"!==e.pointerType&&F()})),onClick:(0,ke.Hj)(e.onClick,H),onPointerDown:(0,ke.Hj)(e.onPointerDown,V),onFocus:(0,ke.Hj)(e.onFocus,F),onBlur:(0,ke.Hj)(e.onBlur,U),"aria-describedby":P?M:void 0}}),[F,U,V,P,M,H,T]),Y=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return j({...e,style:{...e.style,[ye.O3.arrowSize.var]:v?"".concat(v,"px"):void 0,[ye.O3.arrowShadowColor.var]:m}},t)}),[j,v,m]),q=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n={...e.style,position:"relative",transformOrigin:ye.O3.transformOrigin.varRef};return{ref:t,...k,...e,id:M,role:"tooltip",style:n}}),[k,M]);return{isOpen:P,show:F,hide:U,getTriggerProps:X,getTooltipProps:q,getTooltipPositionerProps:Y,getArrowProps:N,getArrowInnerProps:O}}var Te="chakra-ui:close-tooltip";var je=n(5762),Oe=n(1489),Ne=n(3291);var Re=(0,le.B)(Oe.P.div),Me=(0,ne.R)(((e,t)=>{var n,o;const i=(0,re.Vl)("Tooltip",e),l=(0,oe.MN)(e),s=(0,ie.D)(),{children:a,label:c,shouldWrapChildren:u,"aria-label":d,hasArrow:h,bg:p,portalProps:f,background:v,backgroundColor:m,bgColor:g,motionProps:b,...w}=l,y=null!=(o=null!=(n=null!=v?v:m)?n:p)?o:g;if(y){i.bg=y;const e=(0,oe.f4)(s,"colors",y);i[ye.O3.arrowBg.var]=e}const x=Ce({...w,direction:s.direction});let S;if("string"===typeof a||u)S=(0,se.jsx)(le.B.span,{display:"inline-block",tabIndex:0,...x.getTriggerProps(),children:a});else{const e=r.Children.only(a);S=(0,r.cloneElement)(e,x.getTriggerProps(e.props,e.ref))}const k=!!d,P=x.getTooltipProps({},t),E=k?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}(P,["role","id"]):P,C=function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(P,["role","id"]);return c?(0,se.jsxs)(se.Fragment,{children:[S,(0,se.jsx)(Ne.N,{children:x.isOpen&&(0,se.jsx)(je.Z,{...f,children:(0,se.jsx)(le.B.div,{...x.getTooltipPositionerProps(),__css:{zIndex:i.zIndex,pointerEvents:"none"},children:(0,se.jsxs)(Re,{variants:me,initial:"exit",animate:"enter",exit:"exit",...b,...E,__css:i,children:[c,k&&(0,se.jsx)(le.B.span,{srOnly:!0,...C,children:d}),h&&(0,se.jsx)(le.B.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,se.jsx)(le.B.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:i.bg}})})]})})})})]}):(0,se.jsx)(se.Fragment,{children:a})}));Me.displayName="Tooltip";const De=e=>{let{title:t,description:n,min:s,max:a,step:c,value:u,onChange:d}=e;const[h,p]=r.useState(u),[f,v]=r.useState(!1);return(0,se.jsxs)(o.B,{children:[(0,se.jsxs)(i.z,{borderRadius:8,borderColor:"white",borderWidth:1,p:4,spacing:4,children:[(0,se.jsx)(l.E,{color:"white",fontSize:14,fontWeight:"bold",children:t}),(0,se.jsxs)(he,{id:"slider",defaultValue:u,min:s,max:a,step:c,colorScheme:"blue",onChange:e=>{p(e),d&&d(e)},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[(0,se.jsx)(fe,{children:(0,se.jsx)(ve,{})}),(0,se.jsx)(Me,{hasArrow:!0,bg:"blue.500",color:"white",placement:"top",isOpen:f,label:"".concat(h),children:(0,se.jsx)(pe,{})})]}),(0,se.jsx)(l.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(h)})]}),(0,se.jsx)(l.E,{color:"gray.400",fontSize:12,children:n})]})}},8621:(e,t,n)=>{function r(e,t){let n=function(e){const t=parseFloat(e);return"number"!==typeof t||Number.isNaN(t)?0:t}(e);const r=10**(null!=t?t:10);return n=Math.round(n*r)/r,t?n.toFixed(t):n.toString()}function o(e){if(!Number.isFinite(e))return 0;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n+=1;return n}function i(e,t,n){return 100*(e-t)/(n-t)}function l(e,t,n){return(n-t)*e+t}function s(e,t,n){return r(Math.round((e-t)/n)*n+t,o(n))}function a(e,t,n){return null==e?e:(n<t&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,t),n))}n.d(t,{FZ:()=>o,L3:()=>a,QX:()=>r,hp:()=>s,w5:()=>i,wr:()=>l})}}]);