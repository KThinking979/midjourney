"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[925],{1374:(e,t,n)=>{n.d(t,{$:()=>g});var r=n(9950);var o=n(221),[i,a]=(0,o.q)({strict:!1,name:"ButtonGroupContext"}),s=n(6306),l=n(7681),c=n(4414);function f(e){const{children:t,className:n,...o}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,a=(0,l.cx)("chakra-button__icon",n);return(0,c.jsx)(s.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:a,children:i})}f.displayName="ButtonIcon";var u=n(63);function d(e){const{label:t,placement:n,spacing:o="0.5rem",children:i=(0,c.jsx)(u.y,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:f,...d}=e,p=(0,l.cx)("chakra-button__spinner",a),h="start"===n?"marginEnd":"marginStart",m=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[h]:t?o:0,fontSize:"1em",lineHeight:"normal",...f})),[f,t,h,o]);return(0,c.jsx)(s.B.div,{className:p,...d,__css:m,children:i})}d.displayName="ButtonSpinner";var p=n(7237),h=n(8039),m=n(6296),v=n(2867),g=(0,h.R)(((e,t)=>{const n=a(),o=(0,m.Vl)("Button",{...n,...e}),{isDisabled:i=(null==n?void 0:n.isDisabled),isLoading:f,isActive:u,children:h,leftIcon:g,rightIcon:y,loadingText:w,iconSpacing:x="0.5rem",type:O,spinner:E,spinnerPlacement:N="start",className:j,as:C,...I}=(0,v.MN)(e),D=(0,r.useMemo)((()=>{const e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}}),[o,n]),{ref:S,type:P}=function(e){const[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(C),k={rightIcon:y,leftIcon:g,iconSpacing:x,children:h};return(0,c.jsxs)(s.B.button,{ref:(0,p.SV)(t,S),as:C,type:null!=O?O:P,"data-active":(0,l.sE)(u),"data-loading":(0,l.sE)(f),__css:D,className:(0,l.cx)("chakra-button",j),...I,disabled:i||f,children:[f&&"start"===N&&(0,c.jsx)(d,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:x,children:E}),f?w||(0,c.jsx)(s.B.span,{opacity:0,children:(0,c.jsx)(b,{...k})}):(0,c.jsx)(b,{...k}),f&&"end"===N&&(0,c.jsx)(d,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:x,children:E})]})}));function b(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(f,{marginEnd:o,children:t}),r,n&&(0,c.jsx)(f,{marginStart:o,children:n})]})}g.displayName="Button"},6709:(e,t,n)=>{n.d(t,{D:()=>v});var r=n(9950),o=Object.defineProperty,i=(e,t,n)=>(((e,t,n)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n);function a(e){return e.sort(((e,t)=>{const n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function s(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function l(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,f=e=>e,u=class{constructor(){var e=this;i(this,"descendants",new Map),i(this,"register",(e=>{var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?this.registerNode(e):t=>{this.registerNode(t,e)}})),i(this,"unregister",(e=>{this.descendants.delete(e);const t=a(Array.from(this.descendants.keys()));this.assignIndex(t)})),i(this,"destroy",(()=>{this.descendants.clear()})),i(this,"assignIndex",(e=>{this.descendants.forEach((t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()}))})),i(this,"count",(()=>this.descendants.size)),i(this,"enabledCount",(()=>this.enabledValues().length)),i(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,t)=>e.index-t.index)))),i(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),i(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),i(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),i(this,"first",(()=>this.item(0))),i(this,"firstEnabled",(()=>this.enabledItem(0))),i(this,"last",(()=>this.item(this.descendants.size-1))),i(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),i(this,"indexOf",(e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1})),i(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((t=>t.node.isSameNode(e))))),i(this,"next",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=s(t,e.count(),n);return e.item(r)})),i(this,"nextEnabled",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=e.item(t);if(!r)return;const o=s(e.enabledIndexOf(r.node),e.enabledCount(),n);return e.enabledItem(o)})),i(this,"prev",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=l(t,e.count()-1,n);return e.item(r)})),i(this,"prevEnabled",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=e.item(t);if(!r)return;const o=l(e.enabledIndexOf(r.node),e.enabledCount()-1,n);return e.enabledItem(o)})),i(this,"registerNode",((e,t)=>{if(!e||this.descendants.has(e))return;const n=a(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);const r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(n)}))}},d=n(221),p=n(7237);var[h,m]=(0,d.q)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function v(){return[f(h),()=>f(m()),()=>function(){const e=(0,r.useRef)(new u);return c((()=>()=>e.current.destroy())),e.current}(),e=>function(e){const t=m(),[n,o]=(0,r.useState)(-1),i=(0,r.useRef)(null);c((()=>()=>{i.current&&t.unregister(i.current)}),[]),c((()=>{if(!i.current)return;const e=Number(i.current.dataset.index);n==e||Number.isNaN(e)||o(e)}));const a=f(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(i.current),register:(0,p.Px)(a,i)}}(e)]}},9787:(e,t,n)=>{function r(e){return null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function o(e){var t;if(!r(e))return!1;return e instanceof(null!=(t=e.ownerDocument.defaultView)?t:window).HTMLElement}function i(e){var t,n;return null!=(n=null==(t=a(e))?void 0:t.defaultView)?n:window}function a(e){return r(e)?e.ownerDocument:document}function s(e){return a(e).activeElement}n.d(t,{bq:()=>s,mD:()=>i,sb:()=>o})},4752:(e,t,n)=>{n.d(t,{Fs:()=>c,Ky:()=>i,O3:()=>o,ed:()=>s});var r=(e,t)=>({var:e,varRef:t?"var(".concat(e,", ").concat(t,")"):"var(".concat(e,")")}),o={arrowShadowColor:r("--popper-arrow-shadow-color"),arrowSize:r("--popper-arrow-size","8px"),arrowSizeHalf:r("--popper-arrow-size-half"),arrowBg:r("--popper-arrow-bg"),transformOrigin:r("--popper-transform-origin"),arrowOffset:r("--popper-arrow-offset")};function i(e){return e.includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0}var a={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},s=e=>a[e],l={scroll:!0,resize:!0};function c(e){let t;return t="object"===typeof e?{enabled:!0,options:{...l,...e}}:{enabled:e,options:l},t}},1488:(e,t,n)=>{n.d(t,{E:()=>ke});var r=n(4752),o={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{let{state:t}=e;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:e=>{let{state:t}=e;return()=>{const e=t.elements.reference;t.elements.popper.style.width="".concat(e.offsetWidth,"px")}}},i={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{let{state:t}=e;a(t)},effect:e=>{let{state:t}=e;return()=>{a(t)}}},a=e=>{e.elements.popper.style.setProperty(r.O3.transformOrigin.var,(0,r.ed)(e.placement))},s={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;l(t)}},l=e=>{var t;if(!e.placement)return;const n=c(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&n){Object.assign(e.elements.arrow.style,{[n.property]:n.value,width:r.O3.arrowSize.varRef,height:r.O3.arrowSize.varRef,zIndex:-1});const t={[r.O3.arrowSizeHalf.var]:"calc(".concat(r.O3.arrowSize.varRef," / 2 - 1px)"),[r.O3.arrowOffset.var]:"calc(".concat(r.O3.arrowSizeHalf.varRef," * -1)")};for(const n in t)e.elements.arrow.style.setProperty(n,t[n])}},c=e=>e.startsWith("top")?{property:"bottom",value:r.O3.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:r.O3.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:r.O3.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:r.O3.arrowOffset.varRef}:void 0,f={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{let{state:t}=e;u(t)},effect:e=>{let{state:t}=e;return()=>{u(t)}}},u=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const n=(0,r.Ky)(e.placement);n&&t.style.setProperty("--popper-arrow-default-shadow",n),Object.assign(t.style,{transform:"rotate(45deg)",background:r.O3.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},d={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},p={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};var h=n(7237);function m(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof m(e).Element||e instanceof Element}function g(e){return e instanceof m(e).HTMLElement||e instanceof HTMLElement}function b(e){return"undefined"!==typeof ShadowRoot&&(e instanceof m(e).ShadowRoot||e instanceof ShadowRoot)}var y=Math.max,w=Math.min,x=Math.round;function O(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function E(){return!/^((?!chrome|android).)*safari/i.test(O())}function N(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&g(e)&&(o=e.offsetWidth>0&&x(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&x(r.height)/e.offsetHeight||1);var a=(v(e)?m(e):window).visualViewport,s=!E()&&n,l=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,f=r.width/o,u=r.height/i;return{width:f,height:u,top:c,right:l+f,bottom:c+u,left:l,x:l,y:c}}function j(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(e){return e?(e.nodeName||"").toLowerCase():null}function I(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return N(I(e)).left+j(e).scrollLeft}function S(e){return m(e).getComputedStyle(e)}function P(e){var t=S(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function k(e,t,n){void 0===n&&(n=!1);var r=g(t),o=g(t)&&function(e){var t=e.getBoundingClientRect(),n=x(t.width)/e.offsetWidth||1,r=x(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=I(t),a=N(e,o,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==C(t)||P(i))&&(s=function(e){return e!==m(e)&&g(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:j(e);var t}(t)),g(t)?((l=N(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=D(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function T(e){var t=N(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function A(e){return"html"===C(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||I(e)}function M(e){return["html","body","#document"].indexOf(C(e))>=0?e.ownerDocument.body:g(e)&&P(e)?e:M(A(e))}function R(e,t){var n;void 0===t&&(t=[]);var r=M(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=m(r),a=o?[i].concat(i.visualViewport||[],P(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(R(A(a)))}function _(e){return["table","td","th"].indexOf(C(e))>=0}function L(e){return g(e)&&"fixed"!==S(e).position?e.offsetParent:null}function B(e){for(var t=m(e),n=L(e);n&&_(n)&&"static"===S(n).position;)n=L(n);return n&&("html"===C(n)||"body"===C(n)&&"static"===S(n).position)?t:n||function(e){var t=/firefox/i.test(O());if(/Trident/i.test(O())&&g(e)&&"fixed"===S(e).position)return null;var n=A(e);for(b(n)&&(n=n.host);g(n)&&["html","body"].indexOf(C(n))<0;){var r=S(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var W="top",V="bottom",z="right",H="left",q="auto",U=[W,V,z,H],F="start",G="end",Y="clippingParents",K="viewport",X="popper",$="reference",J=U.reduce((function(e,t){return e.concat([t+"-"+F,t+"-"+G])}),[]),Q=[].concat(U,[q]).reduce((function(e,t){return e.concat([t,t+"-"+F,t+"-"+G])}),[]),Z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ee(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function te(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ne={placement:"bottom",modifiers:[],strategy:"absolute"};function re(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function oe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ne:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ne,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,l={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:v(e)?R(e):e.contextElement?R(e.contextElement):[],popper:R(t)};var f=function(e){var t=ee(e);return Z.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:l,options:r}),c=function(){};a.push(s||c)}})),l.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(re(t,n)){o.rects={reference:k(t,B(n),"fixed"===o.options.strategy),popper:T(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,f=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:u,instance:l})||o)}else o.reset=!1,r=-1}}},update:te((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!re(e,t))return l;function c(){a.forEach((function(e){return e()})),a=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var ie={passive:!0};function ae(e){return e.split("-")[0]}function se(e){return e.split("-")[1]}function le(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ae(o):null,a=o?se(o):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(i){case W:t={x:s,y:n.y-r.height};break;case V:t={x:s,y:n.y+n.height};break;case z:t={x:n.x+n.width,y:l};break;case H:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var c=i?le(i):null;if(null!=c){var f="y"===c?"height":"width";switch(a){case F:t[c]=t[c]-(n[f]/2-r[f]/2);break;case G:t[c]=t[c]+(n[f]/2-r[f]/2)}}return t}var fe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ue(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,u=e.isFixed,d=a.x,p=void 0===d?0:d,h=a.y,v=void 0===h?0:h,g="function"===typeof f?f({x:p,y:v}):{x:p,y:v};p=g.x,v=g.y;var b=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),w=H,O=W,E=window;if(c){var N=B(n),j="clientHeight",C="clientWidth";if(N===m(n)&&"static"!==S(N=I(n)).position&&"absolute"===s&&(j="scrollHeight",C="scrollWidth"),o===W||(o===H||o===z)&&i===G)O=V,v-=(u&&N===E&&E.visualViewport?E.visualViewport.height:N[j])-r.height,v*=l?1:-1;if(o===H||(o===W||o===V)&&i===G)w=z,p-=(u&&N===E&&E.visualViewport?E.visualViewport.width:N[C])-r.width,p*=l?1:-1}var D,P=Object.assign({position:s},c&&fe),k=!0===f?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:x(n*o)/o||0,y:x(r*o)/o||0}}({x:p,y:v},m(n)):{x:p,y:v};return p=k.x,v=k.y,l?Object.assign({},P,((D={})[O]=y?"0":"",D[w]=b?"0":"",D.transform=(E.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",D)):Object.assign({},P,((t={})[O]=y?v+"px":"",t[w]=b?p+"px":"",t.transform="",t))}const de={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=Q.reduce((function(e,n){return e[n]=function(e,t,n){var r=ae(e),o=[H,W].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[H,z].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var pe={left:"right",right:"left",bottom:"top",top:"bottom"};function he(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var me={start:"end",end:"start"};function ve(e){return e.replace(/start|end/g,(function(e){return me[e]}))}function ge(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&b(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e,t,n){return t===K?be(function(e,t){var n=m(e),r=I(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var c=E();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+D(e),y:l}}(e,n)):v(t)?function(e,t){var n=N(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):be(function(e){var t,n=I(e),r=j(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=y(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=y(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+D(e),l=-r.scrollTop;return"rtl"===S(o||n).direction&&(s+=y(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(I(e)))}function we(e,t,n,r){var o="clippingParents"===t?function(e){var t=R(A(e)),n=["absolute","fixed"].indexOf(S(e).position)>=0&&g(e)?B(e):e;return v(n)?t.filter((function(e){return v(e)&&ge(e,n)&&"body"!==C(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ye(e,n,r);return t.top=y(o.top,t.top),t.right=w(o.right,t.right),t.bottom=w(o.bottom,t.bottom),t.left=y(o.left,t.left),t}),ye(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function xe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Oe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Ee(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,l=void 0===s?Y:s,c=n.rootBoundary,f=void 0===c?K:c,u=n.elementContext,d=void 0===u?X:u,p=n.altBoundary,h=void 0!==p&&p,m=n.padding,g=void 0===m?0:m,b=xe("number"!==typeof g?g:Oe(g,U)),y=d===X?$:X,w=e.rects.popper,x=e.elements[h?y:d],O=we(v(x)?x:x.contextElement||I(e.elements.popper),l,f,a),E=N(e.elements.reference),j=ce({reference:E,element:w,strategy:"absolute",placement:o}),C=be(Object.assign({},w,j)),D=d===X?C:E,S={top:O.top-D.top+b.top,bottom:D.bottom-O.bottom+b.bottom,left:O.left-D.left+b.left,right:D.right-O.right+b.right},P=e.modifiersData.offset;if(d===X&&P){var k=P[o];Object.keys(S).forEach((function(e){var t=[z,V].indexOf(e)>=0?1:-1,n=[W,V].indexOf(e)>=0?"y":"x";S[e]+=k[n]*t}))}return S}function Ne(e,t,n){return y(e,w(t,n))}const je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,l=n.boundary,c=n.rootBoundary,f=n.altBoundary,u=n.padding,d=n.tether,p=void 0===d||d,h=n.tetherOffset,m=void 0===h?0:h,v=Ee(t,{boundary:l,rootBoundary:c,padding:u,altBoundary:f}),g=ae(t.placement),b=se(t.placement),x=!b,O=le(g),E="x"===O?"y":"x",N=t.modifiersData.popperOffsets,j=t.rects.reference,C=t.rects.popper,I="function"===typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,D="number"===typeof I?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(N){if(i){var k,A="y"===O?W:H,M="y"===O?V:z,R="y"===O?"height":"width",_=N[O],L=_+v[A],q=_-v[M],U=p?-C[R]/2:0,G=b===F?j[R]:C[R],Y=b===F?-C[R]:-j[R],K=t.elements.arrow,X=p&&K?T(K):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=$[A],Q=$[M],Z=Ne(0,j[R],X[R]),ee=x?j[R]/2-U-Z-J-D.mainAxis:G-Z-J-D.mainAxis,te=x?-j[R]/2+U+Z+Q+D.mainAxis:Y+Z+Q+D.mainAxis,ne=t.elements.arrow&&B(t.elements.arrow),re=ne?"y"===O?ne.clientTop||0:ne.clientLeft||0:0,oe=null!=(k=null==S?void 0:S[O])?k:0,ie=_+te-oe,ce=Ne(p?w(L,_+ee-oe-re):L,_,p?y(q,ie):q);N[O]=ce,P[O]=ce-_}if(s){var fe,ue="x"===O?W:H,de="x"===O?V:z,pe=N[E],he="y"===E?"height":"width",me=pe+v[ue],ve=pe-v[de],ge=-1!==[W,H].indexOf(g),be=null!=(fe=null==S?void 0:S[E])?fe:0,ye=ge?me:pe-j[he]-C[he]-be+D.altAxis,we=ge?pe+j[he]+C[he]-be-D.altAxis:ve,xe=p&&ge?function(e,t,n){var r=Ne(e,t,n);return r>n?n:r}(ye,pe,we):Ne(p?ye:me,pe,p?we:ve);N[E]=xe,P[E]=xe-pe}t.modifiersData[r]=P}},requiresIfExists:["offset"]};const Ce={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ae(n.placement),l=le(s),c=[H,z].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return xe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Oe(e,U))}(o.padding,n),u=T(i),d="y"===l?W:H,p="y"===l?V:z,h=n.rects.reference[c]+n.rects.reference[l]-a[l]-n.rects.popper[c],m=a[l]-n.rects.reference[l],v=B(i),g=v?"y"===l?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,y=f[d],w=g-u[c]-f[p],x=g/2-u[c]/2+b,O=Ne(y,x,w),E=l;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ge(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ie(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function De(e){return[W,z,V,H].some((function(t){return e[t]>=0}))}var Se=oe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,l=m(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,ie)})),s&&l.addEventListener("resize",n.update,ie),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,ie)})),s&&l.removeEventListener("resize",n.update,ie)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,l=void 0===s||s,c={placement:ae(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ue(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ue(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];g(o)&&C(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});g(r)&&C(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},de,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,l=n.fallbackPlacements,c=n.padding,f=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,h=void 0===p||p,m=n.allowedAutoPlacements,v=t.options.placement,g=ae(v),b=l||(g===v||!h?[he(v)]:function(e){if(ae(e)===q)return[];var t=he(e);return[ve(e),t,ve(t)]}(v)),y=[v].concat(b).reduce((function(e,n){return e.concat(ae(n)===q?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?Q:l,f=se(r),u=f?s?J:J.filter((function(e){return se(e)===f})):U,d=u.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=u);var p=d.reduce((function(t,n){return t[n]=Ee(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ae(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,N=y[0],j=0;j<y.length;j++){var C=y[j],I=ae(C),D=se(C)===F,S=[W,V].indexOf(I)>=0,P=S?"width":"height",k=Ee(t,{placement:C,boundary:f,rootBoundary:u,altBoundary:d,padding:c}),T=S?D?z:H:D?V:W;w[P]>x[P]&&(T=he(T));var A=he(T),M=[];if(i&&M.push(k[I]<=0),s&&M.push(k[T]<=0,k[A]<=0),M.every((function(e){return e}))){N=C,E=!1;break}O.set(C,M)}if(E)for(var R=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},_=h?3:1;_>0;_--){if("break"===R(_))break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},je,Ce,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ee(t,{elementContext:"reference"}),s=Ee(t,{altBoundary:!0}),l=Ie(a,r),c=Ie(s,o,i),f=De(l),u=De(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}}]}),Pe=n(9950);function ke(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{enabled:t=!0,modifiers:n,placement:a="bottom",strategy:l="absolute",arrowPadding:c=8,eventListeners:u=!0,offset:m,gutter:v=8,flip:g=!0,boundary:b="clippingParents",preventOverflow:y=!0,matchWidth:w,direction:x="ltr"}=e,O=(0,Pe.useRef)(null),E=(0,Pe.useRef)(null),N=(0,Pe.useRef)(null),j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";var n,r;const o=(null==(n=d[e])?void 0:n[t])||e;return"ltr"===t?o:null!=(r=p[e])?r:o}(a,x),C=(0,Pe.useRef)((()=>{})),I=(0,Pe.useCallback)((()=>{var e;t&&O.current&&E.current&&(null==(e=C.current)||e.call(C),N.current=Se(O.current,E.current,{placement:j,modifiers:[f,s,i,{...o,enabled:!!w},{name:"eventListeners",...(0,r.Fs)(u)},{name:"arrow",options:{padding:c}},{name:"offset",options:{offset:null!=m?m:[0,v]}},{name:"flip",enabled:!!g,options:{padding:8}},{name:"preventOverflow",enabled:!!y,options:{boundary:b}},...null!=n?n:[]],strategy:l}),N.current.forceUpdate(),C.current=N.current.destroy)}),[j,t,n,w,u,c,m,v,g,y,b,l]);(0,Pe.useEffect)((()=>()=>{var e;O.current||E.current||(null==(e=N.current)||e.destroy(),N.current=null)}),[]);const D=(0,Pe.useCallback)((e=>{O.current=e,I()}),[I]),S=(0,Pe.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,h.Px)(D,e)}}),[D]),P=(0,Pe.useCallback)((e=>{E.current=e,I()}),[I]),k=(0,Pe.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,h.Px)(P,t),style:{...e.style,position:l,minWidth:w?void 0:"max-content",inset:"0 auto auto 0"}}}),[l,P,w]),T=(0,Pe.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{size:n,shadowColor:r,bg:o,style:i,...a}=e;return{...a,ref:t,"data-popper-arrow":"",style:Te(e)}}),[]),A=(0,Pe.useCallback)((function(){return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"data-popper-arrow-inner":""}}),[]);return{update(){var e;null==(e=N.current)||e.update()},forceUpdate(){var e;null==(e=N.current)||e.forceUpdate()},transformOrigin:r.O3.transformOrigin.varRef,referenceRef:D,popperRef:P,getPopperProps:k,getArrowProps:T,getArrowInnerProps:A,getReferenceProps:S}}function Te(e){const{size:t,shadowColor:n,bg:r,style:o}=e,i={...o,position:"absolute"};return t&&(i["--popper-arrow-size"]=t),n&&(i["--popper-arrow-shadow-color"]=n),r&&(i["--popper-arrow-bg"]=r),i}},591:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(9950),o=n(1823);function i(e){const{value:t,defaultValue:n,onChange:i,shouldUpdate:a=(e,t)=>e!==t}=e,s=(0,o.c)(i),l=(0,o.c)(a),[c,f]=(0,r.useState)(n),u=void 0!==t,d=u?t:c,p=(0,o.c)((e=>{const t="function"===typeof e?e(d):e;l(d,t)&&(u||f(t),s(t))}),[u,s,d,l]);return[d,p]}},4817:(e,t,n)=>{n.d(t,{j:()=>i});var r=n(1823),o=n(9950);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onClose:t,onOpen:n,isOpen:i,id:a}=e,s=(0,r.c)(n),l=(0,r.c)(t),[c,f]=(0,o.useState)(e.defaultIsOpen||!1),u=void 0!==i?i:c,d=void 0!==i,p=(0,o.useId)(),h=null!=a?a:"disclosure-".concat(p),m=(0,o.useCallback)((()=>{d||f(!1),null==l||l()}),[d,l]),v=(0,o.useCallback)((()=>{d||f(!0),null==s||s()}),[d,s]),g=(0,o.useCallback)((()=>{u?m():v()}),[u,v,m]);return{isOpen:u,onOpen:v,onClose:m,onToggle:g,isControlled:d,getButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":u,"aria-controls":h,onClick(t){var n;null==(n=e.onClick)||n.call(e,t),g()}}},getDisclosureProps:function(){return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},hidden:!u,id:h}}}}},7387:(e,t,n)=>{n.d(t,{M:()=>i});var r=n(9950),o=n(1823);function i(e,t,n,i){const a=(0,o.c)(n);return(0,r.useEffect)((()=>{const r="function"===typeof e?e():null!=e?e:document;if(n&&r)return r.addEventListener(t,a,i),()=>{r.removeEventListener(t,a,i)}}),[t,e,i,a,n]),()=>{const n="function"===typeof e?e():null!=e?e:document;null==n||n.removeEventListener(t,a,i)}}},7237:(e,t,n)=>{n.d(t,{Px:()=>o,SV:()=>i});var r=n(9950);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{!function(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(n){throw new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}else e(t)}(t,e)}))}}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useMemo)((()=>o(...t)),t)}}}]);