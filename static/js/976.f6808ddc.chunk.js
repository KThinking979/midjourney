"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[976],{46569:(e,n,t)=>{t.d(n,{_:()=>c});var a=t(58039),r=t(44414),s=(0,a.R)((function(e,n){const{htmlWidth:t,htmlHeight:a,alt:s,...o}=e;return(0,r.jsx)("img",{width:t,height:a,ref:n,alt:s,...o})}));s.displayName="NativeImage";var o=t(35812),i=t(26306);function l(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const t=Object.assign({},e);for(const a of n)a in t&&delete t[a];return t}var c=(0,a.R)((function(e,n){const{fallbackSrc:t,fallback:a,src:c,srcSet:d,align:u,fit:f,loading:b,ignoreFallback:h,crossOrigin:v,fallbackStrategy:m="beforeLoadOrError",referrerPolicy:g,...p}=e,x=null!=b||h||!(void 0!==t||void 0!==a),N=(0,o.l)({...e,crossOrigin:v,ignoreFallback:x}),y=(0,o.m)(N,m),I={ref:n,objectFit:f,objectPosition:u,...x?p:l(p,["onError","onLoad"])};return y?a||(0,r.jsx)(i.B.img,{as:s,className:"chakra-image__placeholder",src:t,...I}):(0,r.jsx)(i.B.img,{as:s,src:c,srcSet:d,crossOrigin:v,loading:b,referrerPolicy:g,className:"chakra-image",...I})}));c.displayName="Image"},35812:(e,n,t)=>{t.d(n,{l:()=>s,m:()=>o});var a=t(61792),r=t(9950);function s(e){const{loading:n,src:t,srcSet:s,onLoad:o,onError:i,crossOrigin:l,sizes:c,ignoreFallback:d}=e,[u,f]=(0,r.useState)("pending");(0,r.useEffect)((()=>{f(t?"loading":"pending")}),[t]);const b=(0,r.useRef)(),h=(0,r.useCallback)((()=>{if(!t)return;v();const e=new Image;e.src=t,l&&(e.crossOrigin=l),s&&(e.srcset=s),c&&(e.sizes=c),n&&(e.loading=n),e.onload=e=>{v(),f("loaded"),null==o||o(e)},e.onerror=e=>{v(),f("failed"),null==i||i(e)},b.current=e}),[t,l,s,c,o,i,n]),v=()=>{b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return(0,a.U)((()=>{if(!d)return"loading"===u&&h(),()=>{v()}}),[u,h,d]),d?"loaded":u}var o=(e,n)=>"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n},3731:(e,n,t)=>{t.d(n,{E:()=>c});var a=t(58039),r=t(47040),s=t(82867),o=t(26306),i=t(97681);var l=t(44414),c=(0,a.R)((function(e,n){const t=(0,r.Vl)("Text",e),{className:a,align:c,decoration:d,casing:u,...f}=(0,s.MN)(e),b=function(e){const n=Object.assign({},e);for(let t in n)void 0===n[t]&&delete n[t];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(o.B.p,{ref:n,className:(0,i.cx)("chakra-text",e.className),...b,...f,__css:t})}));c.displayName="Text"},92481:(e,n,t)=>{t.d(n,{x:()=>o});var a=t(58039),r=t(26306),s=t(44414),o=(0,a.R)((function(e,n){const{templateAreas:t,gap:a,rowGap:o,columnGap:i,column:l,row:c,autoFlow:d,autoRows:u,templateRows:f,autoColumns:b,templateColumns:h,...v}=e,m={display:"grid",gridTemplateAreas:t,gridGap:a,gridRowGap:o,gridColumnGap:i,gridAutoColumns:b,gridColumn:l,gridRow:c,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:h};return(0,s.jsx)(r.B.div,{ref:n,__css:m,...v})}));o.displayName="Grid"},87237:(e,n,t)=>{t.d(n,{Px:()=>r,SV:()=>s});var a=t(9950);function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>{n.forEach((n=>{!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}(n,e)}))}}function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.useMemo)((()=>r(...n)),n)}},407:(e,n,t)=>{t.d(n,{T:()=>c});var a=t(24448),r=t(76979),s=t(97681),o=t(58039),i=t(26306),l=t(44414),c=(0,o.R)((function(e,n){const t=(0,r.uo)(e),o=(0,a.e)();return(0,l.jsx)(i.B.div,{...t,width:"100%",ref:n,className:(0,s.cx)("chakra-tabs__tab-panels",e.className),__css:o.tabpanels})}));c.displayName="TabPanels"},34571:(e,n,t)=>{t.d(n,{w:()=>c});var a=t(24448),r=t(76979),s=t(97681),o=t(58039),i=t(26306),l=t(44414),c=(0,o.R)((function(e,n){const t=(0,r.$c)({...e,ref:n}),o={display:"flex",...(0,a.e)().tablist};return(0,l.jsx)(i.B.div,{...t,className:(0,s.cx)("chakra-tabs__tablist",e.className),__css:o})}));c.displayName="TabList"},24448:(e,n,t)=>{t.d(n,{e:()=>b,t:()=>h});var a=t(76979),r=t(80221),s=t(58039),o=t(47040),i=t(82867),l=t(26306),c=t(97681),d=t(9950),u=t(44414),[f,b]=(0,r.q)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),h=(0,s.R)((function(e,n){const t=(0,o.o5)("Tabs",e),{children:r,className:s,...b}=(0,i.MN)(e),{htmlProps:h,descendants:v,...m}=(0,a.uc)(b),g=(0,d.useMemo)((()=>m),[m]),{isFitted:p,...x}=h,N={position:"relative",...t.root};return(0,u.jsx)(a.at,{value:v,children:(0,u.jsx)(a.O_,{value:g,children:(0,u.jsx)(f,{value:t,children:(0,u.jsx)(l.B.div,{className:(0,c.cx)("chakra-tabs",s),ref:n,...x,__css:N,children:r})})})})}));h.displayName="Tabs"},1784:(e,n,t)=>{t.d(n,{o:()=>c});var a=t(24448),r=t(76979),s=t(97681),o=t(58039),i=t(26306),l=t(44414),c=(0,o.R)((function(e,n){const t=(0,a.e)(),o=(0,r.Vh)({...e,ref:n}),c={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...t.tab};return(0,l.jsx)(i.B.button,{...o,className:(0,s.cx)("chakra-tabs__tab",e.className),__css:c})}));c.displayName="Tab"},34881:(e,n,t)=>{t.d(n,{K:()=>c});var a=t(24448),r=t(76979),s=t(97681),o=t(58039),i=t(26306),l=t(44414),c=(0,o.R)((function(e,n){const t=(0,r.Jn)({...e,ref:n}),o=(0,a.e)();return(0,l.jsx)(i.B.div,{outline:"0",...t,className:(0,s.cx)("chakra-tabs__tab-panel",e.className),__css:o.tabpanel})}));c.displayName="TabPanel"},76979:(e,n,t)=>{t.d(n,{at:()=>y,O_:()=>w,Vh:()=>_,$c:()=>T,Jn:()=>A,uo:()=>S,uc:()=>k});var a=t(9950);var r=t(97681),s=t(87237);function o(e){const n=e.target,{tagName:t,isContentEditable:a}=n;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==a}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{ref:n,isDisabled:t,isFocusable:i,clickOnEnter:l=!0,clickOnSpace:c=!0,onMouseDown:d,onMouseUp:u,onClick:f,onKeyDown:b,onKeyUp:h,tabIndex:v,onMouseOver:m,onMouseLeave:g,...p}=e,[x,N]=(0,a.useState)(!0),[y,I]=(0,a.useState)(!1),C=function(){const e=(0,a.useRef)(new Map),n=e.current,t=(0,a.useCallback)(((n,t,a,r)=>{e.current.set(a,{type:t,el:n,options:r}),n.addEventListener(t,a,r)}),[]),r=(0,a.useCallback)(((n,t,a,r)=>{n.removeEventListener(t,a,r),e.current.delete(a)}),[]);return(0,a.useEffect)((()=>()=>{n.forEach(((e,n)=>{r(e.el,e.type,n,e.options)}))}),[r,n]),{add:t,remove:r}}(),E=x?v:v||0,k=t&&!i,w=(0,a.useCallback)((e=>{if(t)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==f||f(e)}),[t,f]),O=(0,a.useCallback)((e=>{y&&o(e)&&(e.preventDefault(),e.stopPropagation(),I(!1),C.remove(document,"keyup",O,!1))}),[y,C]),T=(0,a.useCallback)((e=>{if(null==b||b(e),t||e.defaultPrevented||e.metaKey)return;if(!o(e.nativeEvent)||x)return;const n=l&&"Enter"===e.key;if(c&&" "===e.key&&(e.preventDefault(),I(!0)),n){e.preventDefault();e.currentTarget.click()}C.add(document,"keyup",O,!1)}),[t,x,b,l,c,C,O]),_=(0,a.useCallback)((e=>{if(null==h||h(e),t||e.defaultPrevented||e.metaKey)return;if(!o(e.nativeEvent)||x)return;if(c&&" "===e.key){e.preventDefault(),I(!1);e.currentTarget.click()}}),[c,x,t,h]),D=(0,a.useCallback)((e=>{0===e.button&&(I(!1),C.remove(document,"mouseup",D,!1))}),[C]),M=(0,a.useCallback)((e=>{if(0!==e.button)return;if(t)return e.stopPropagation(),void e.preventDefault();x||I(!0);e.currentTarget.focus({preventScroll:!0}),C.add(document,"mouseup",D,!1),null==d||d(e)}),[t,x,d,C,D]),S=(0,a.useCallback)((e=>{0===e.button&&(x||I(!1),null==u||u(e))}),[u,x]),A=(0,a.useCallback)((e=>{t?e.preventDefault():null==m||m(e)}),[t,m]),P=(0,a.useCallback)((e=>{y&&(e.preventDefault(),I(!1)),null==g||g(e)}),[y,g]),j=(0,s.Px)(n,(e=>{e&&"BUTTON"!==e.tagName&&N(!1)}));return x?{...p,ref:j,type:"button","aria-disabled":k?void 0:t,disabled:k,onClick:w,onMouseDown:d,onMouseUp:u,onKeyUp:h,onKeyDown:b,onMouseOver:m,onMouseLeave:g}:{...p,ref:j,role:"button","data-active":(0,r.sE)(y),"aria-disabled":t?"true":void 0,tabIndex:k?void 0:E,onClick:w,onMouseDown:M,onMouseUp:S,onKeyUp:_,onKeyDown:T,onMouseOver:A,onMouseLeave:P}}var l=Object.defineProperty,c=(e,n,t)=>(((e,n,t)=>{n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t);function d(e){return e.sort(((e,n)=>{const t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function u(e,n,t){let a=e+1;return t&&a>=n&&(a=0),a}function f(e,n,t){let a=e-1;return t&&a<0&&(a=n),a}var b="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,h=e=>e,v=class{constructor(){var e=this;c(this,"descendants",new Map),c(this,"register",(e=>{var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?this.registerNode(e):n=>{this.registerNode(n,e)}})),c(this,"unregister",(e=>{this.descendants.delete(e);const n=d(Array.from(this.descendants.keys()));this.assignIndex(n)})),c(this,"destroy",(()=>{this.descendants.clear()})),c(this,"assignIndex",(e=>{this.descendants.forEach((n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),c(this,"count",(()=>this.descendants.size)),c(this,"enabledCount",(()=>this.enabledValues().length)),c(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,n)=>e.index-n.index)))),c(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),c(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),c(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),c(this,"first",(()=>this.item(0))),c(this,"firstEnabled",(()=>this.enabledItem(0))),c(this,"last",(()=>this.item(this.descendants.size-1))),c(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),c(this,"indexOf",(e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1})),c(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((n=>n.node.isSameNode(e))))),c(this,"next",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const a=u(n,e.count(),t);return e.item(a)})),c(this,"nextEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const a=e.item(n);if(!a)return;const r=u(e.enabledIndexOf(a.node),e.enabledCount(),t);return e.enabledItem(r)})),c(this,"prev",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const a=f(n,e.count()-1,t);return e.item(a)})),c(this,"prevEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const a=e.item(n);if(!a)return;const r=f(e.enabledIndexOf(a.node),e.enabledCount()-1,t);return e.enabledItem(r)})),c(this,"registerNode",((e,n)=>{if(!e||this.descendants.has(e))return;const t=d(Array.from(this.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);const a={node:e,index:-1,...n};this.descendants.set(e,a),this.assignIndex(t)}))}},m=t(80221);var[g,p]=(0,m.q)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});var x=t(91823);var N=t(68253);var[y,I,C,E]=[h(g),()=>h(p()),()=>function(){const e=(0,a.useRef)(new v);return b((()=>()=>e.current.destroy())),e.current}(),e=>function(e){const n=p(),[t,r]=(0,a.useState)(-1),o=(0,a.useRef)(null);b((()=>()=>{o.current&&n.unregister(o.current)}),[]),b((()=>{if(!o.current)return;const e=Number(o.current.dataset.index);t==e||Number.isNaN(e)||r(e)}));const i=h(e?n.register(e):n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(o.current),register:(0,s.Px)(i,o)}}(e)];function k(e){var n;const{defaultIndex:t,onChange:r,index:s,isManual:o,isLazy:i,lazyBehavior:l="unmount",orientation:c="horizontal",direction:d="ltr",...u}=e,[f,b]=(0,a.useState)(null!=t?t:0),[h,v]=function(e){const{value:n,defaultValue:t,onChange:r,shouldUpdate:s=(e,n)=>e!==n}=e,o=(0,x.c)(r),i=(0,x.c)(s),[l,c]=(0,a.useState)(t),d=void 0!==n,u=d?n:l,f=(0,x.c)((e=>{const n="function"===typeof e?e(u):e;i(u,n)&&(d||c(n),o(n))}),[d,o,u,i]);return[u,f]}({defaultValue:null!=t?t:0,value:s,onChange:r});(0,a.useEffect)((()=>{null!=s&&b(s)}),[s]);const m=C(),g=(0,a.useId)(),p=null!=(n=e.id)?n:g;return{id:"tabs-".concat(p),selectedIndex:h,focusedIndex:f,setSelectedIndex:v,setFocusedIndex:b,isManual:o,isLazy:i,lazyBehavior:l,orientation:c,descendants:m,direction:d,htmlProps:u}}var[w,O]=(0,m.q)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function T(e){const{focusedIndex:n,orientation:t,direction:s}=O(),o=I(),i=(0,a.useCallback)((e=>{const a=()=>{var e;const t=o.nextEnabled(n);t&&(null==(e=t.node)||e.focus())},r=()=>{var e;const t=o.prevEnabled(n);t&&(null==(e=t.node)||e.focus())},i="horizontal"===t,l="vertical"===t,c=e.key,d="ltr"===s?"ArrowLeft":"ArrowRight",u="ltr"===s?"ArrowRight":"ArrowLeft",f={[d]:()=>i&&r(),[u]:()=>i&&a(),ArrowDown:()=>l&&a(),ArrowUp:()=>l&&r(),Home:()=>{var e;const n=o.firstEnabled();n&&(null==(e=n.node)||e.focus())},End:()=>{var e;const n=o.lastEnabled();n&&(null==(e=n.node)||e.focus())}}[c];f&&(e.preventDefault(),f(e))}),[o,n,t,s]);return{...e,role:"tablist","aria-orientation":t,onKeyDown:(0,r.Hj)(e.onKeyDown,i)}}function _(e){const{isDisabled:n=!1,isFocusable:t=!1,...a}=e,{setSelectedIndex:o,isManual:l,id:c,setFocusedIndex:d,selectedIndex:u}=O(),{index:f,register:b}=E({disabled:n&&!t}),h=f===u;return{...i({...a,ref:(0,s.Px)(b,e.ref),isDisabled:n,isFocusable:t,onClick:(0,r.Hj)(e.onClick,(()=>{o(f)}))}),id:P(c,f),role:"tab",tabIndex:h?0:-1,type:"button","aria-selected":h,"aria-controls":j(c,f),onFocus:n?void 0:(0,r.Hj)(e.onFocus,(()=>{d(f);!l&&!(n&&t)&&o(f)}))}}var[D,M]=(0,m.q)({});function S(e){const n=O(),{id:t,selectedIndex:r}=n,s=(0,N.a)(e.children).map(((e,n)=>(0,a.createElement)(D,{key:n,value:{isSelected:n===r,id:j(t,n),tabId:P(t,n),selectedIndex:r}},e)));return{...e,children:s}}function A(e){const{children:n,...t}=e,{isLazy:r,lazyBehavior:s}=O(),{isSelected:o,id:i,tabId:l}=M(),c=(0,a.useRef)(!1);o&&(c.current=!0);const d=function(e){const{wasSelected:n,enabled:t,isSelected:a,mode:r="unmount"}=e;return!t||!!a||!("keepMounted"!==r||!n)}({wasSelected:c.current,isSelected:o,enabled:r,mode:s});return{tabIndex:0,...t,children:d?n:null,role:"tabpanel","aria-labelledby":l,hidden:!o,id:i}}function P(e,n){return"".concat(e,"--tab-").concat(n)}function j(e,n){return"".concat(e,"--tabpanel-").concat(n)}},29949:(e,n,t)=>{t.d(n,{cXn:()=>r});var a=t(35192);function r(e){return(0,a.k5)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.2 4.2 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A3 3 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"},child:[]}]})(e)}}}]);