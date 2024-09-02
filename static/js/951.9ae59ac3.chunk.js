"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[951],{6171:(e,n,t)=>{t.d(n,{v:()=>p});var i=t(4818),s=t(9454),o=t(8039),a=t(6306),r=t(4850),l=t(7681),d=t(3291),c=t(1489),u=t(9950),h=t(4414),f={exit:{height:{duration:.2,ease:r.xf.ease},opacity:{duration:.3,ease:r.xf.ease}},enter:{height:{duration:.3,ease:r.xf.ease},opacity:{duration:.4,ease:r.xf.ease}}},x={exit:e=>{let{animateOpacity:n,startingHeight:t,transition:i,transitionEnd:s,delay:o}=e;var a,l;return{...n&&{opacity:(l=t,null!=l&&parseInt(l.toString(),10)>0?1:0)},height:t,transitionEnd:null==s?void 0:s.exit,transition:null!=(a=null==i?void 0:i.exit)?a:r.yA.exit(f.exit,o)}},enter:e=>{let{animateOpacity:n,endingHeight:t,transition:i,transitionEnd:s,delay:o}=e;var a;return{...n&&{opacity:1},height:t,transitionEnd:null==s?void 0:s.enter,transition:null!=(a=null==i?void 0:i.enter)?a:r.yA.enter(f.enter,o)}}},m=(0,u.forwardRef)(((e,n)=>{const{in:t,unmountOnExit:i,animateOpacity:s=!0,startingHeight:o=0,endingHeight:a="auto",style:r,className:f,transition:m,transitionEnd:p,...g}=e,[v,b]=(0,u.useState)(!1);(0,u.useEffect)((()=>{const e=setTimeout((()=>{b(!0)}));return()=>clearTimeout(e)}),[]),(0,l.R8)({condition:Number(o)>0&&!!i,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const y=parseFloat(o.toString())>0,N={startingHeight:o,endingHeight:a,animateOpacity:s,transition:v?m:{enter:{duration:0}},transitionEnd:{enter:null==p?void 0:p.enter,exit:i?null==p?void 0:p.exit:{...null==p?void 0:p.exit,display:y?"block":"none"}}},I=!i||t,O=t||i?"enter":"exit";return(0,h.jsx)(d.N,{initial:!1,custom:N,children:I&&(0,h.jsx)(c.P.div,{ref:n,...g,className:(0,l.cx)("chakra-collapse",f),style:{overflow:"hidden",display:"block",...r},custom:N,variants:x,initial:!!i&&"exit",animate:O,exit:"exit"})})}));m.displayName="Collapse";var p=(0,o.R)((function(e,n){const{className:t,motionProps:o,...r}=e,{reduceMotion:d}=(0,i.Dr)(),{getPanelProps:c,isOpen:u}=(0,s.AV)(),f=c(r,n),x=(0,l.cx)("chakra-accordion__panel",t),p=(0,s.EF)();d||delete f.hidden;const g=(0,h.jsx)(a.B.div,{...f,__css:p.panel,className:x});return d?g:(0,h.jsx)(m,{in:u,...o,children:g})}));p.displayName="AccordionPanel"},4818:(e,n,t)=>{t.d(n,{Dr:()=>u,If:()=>c,O3:()=>d,r9:()=>h});var i=t(9454),s=t(221),o=t(591),a=t(7237),r=t(7681),l=t(9950);function d(e){const{onChange:n,defaultIndex:t,index:s,allowMultiple:a,allowToggle:d,...c}=e;!function(e){const n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,r.R8)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ".concat(typeof n,",")})}(e),function(e){(0,r.R8)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);const u=(0,i.Of)(),[h,f]=(0,l.useState)(-1);(0,l.useEffect)((()=>()=>{f(-1)}),[]);const[x,m]=(0,o.i)({value:s,defaultValue:()=>a?null!=t?t:[]:null!=t?t:-1,onChange:n});return{index:x,setIndex:m,htmlProps:c,getAccordionItemProps:e=>{let n=!1;null!==e&&(n=Array.isArray(x)?x.includes(e):x===e);return{isOpen:n,onChange:n=>{if(null!==e)if(a&&Array.isArray(x)){const t=n?x.concat(e):x.filter((n=>n!==e));m(t)}else n?m(e):d&&m(-1)}}},focusedIndex:h,setFocusedIndex:f,descendants:u}}var[c,u]=(0,s.q)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function h(e){const{isDisabled:n,isFocusable:t,id:s,...o}=e,{getAccordionItemProps:d,setFocusedIndex:c}=u(),h=(0,l.useRef)(null),f=(0,l.useId)(),x=null!=s?s:f,m="accordion-button-".concat(x),p="accordion-panel-".concat(x);!function(e){(0,r.R8)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);const{register:g,index:v,descendants:b}=(0,i.v3)({disabled:n&&!t}),{isOpen:y,onChange:N}=d(-1===v?null:v);!function(e){(0,r.R8)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:y,isDisabled:n});const I=(0,l.useCallback)((()=>{null==N||N(!y),c(v)}),[v,c,y,N]),O=(0,l.useCallback)((e=>{const n={ArrowDown:()=>{const e=b.nextEnabled(v);null==e||e.node.focus()},ArrowUp:()=>{const e=b.prevEnabled(v);null==e||e.node.focus()},Home:()=>{const e=b.firstEnabled();null==e||e.node.focus()},End:()=>{const e=b.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))}),[b,v]),E=(0,l.useCallback)((()=>{c(v)}),[c,v]),C=(0,l.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,type:"button",ref:(0,a.Px)(g,h,t),id:m,disabled:!!n,"aria-expanded":!!y,"aria-controls":p,onClick:(0,r.Hj)(e.onClick,I),onFocus:(0,r.Hj)(e.onFocus,E),onKeyDown:(0,r.Hj)(e.onKeyDown,O)}}),[m,n,y,I,E,O,p,g]),w=(0,l.useCallback)((function(){return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,role:"region",id:p,"aria-labelledby":m,hidden:!y}}),[m,y,p]);return{isOpen:y,isDisabled:n,isFocusable:t,onOpen:()=>{null==N||N(!0)},onClose:()=>{null==N||N(!1)},getButtonProps:C,getPanelProps:w,htmlProps:o}}},5168:(e,n,t)=>{t.d(n,{n:()=>h});var i=t(4818),s=t(9454),o=t(8039),a=t(6296),r=t(2867),l=t(6306),d=t(7681),c=t(9950),u=t(4414),h=(0,o.R)((function(e,n){let{children:t,reduceMotion:o,...h}=e;const f=(0,a.o5)("Accordion",h),x=(0,r.MN)(h),{htmlProps:m,descendants:p,...g}=(0,i.O3)(x),v=(0,c.useMemo)((()=>({...g,reduceMotion:!!o})),[g,o]);return(0,u.jsx)(s.C3,{value:p,children:(0,u.jsx)(i.If,{value:v,children:(0,u.jsx)(s.gm,{value:f,children:(0,u.jsx)(l.B.div,{ref:n,...m,className:(0,d.cx)("chakra-accordion",h.className),__css:f.root,children:t})})})})}));h.displayName="Accordion"},4745:(e,n,t)=>{t.d(n,{A:()=>c});var i=t(4818),s=t(9454),o=t(8039),a=t(6306),r=t(7681),l=t(9950),d=t(4414),c=(0,o.R)((function(e,n){const{children:t,className:o}=e,{htmlProps:c,...u}=(0,i.r9)(e),h={...(0,s.EF)().container,overflowAnchor:"none"},f=(0,l.useMemo)((()=>u),[u]);return(0,d.jsx)(s.TG,{value:f,children:(0,d.jsx)(a.B.div,{ref:n,...c,className:(0,r.cx)("chakra-accordion__item",o),__css:h,children:"function"===typeof t?t({isExpanded:!!u.isOpen,isDisabled:!!u.isDisabled}):t})})}));c.displayName="AccordionItem"},2666:(e,n,t)=>{t.d(n,{J:()=>l});var i=t(9454),s=t(8039),o=t(6306),a=t(7681),r=t(4414),l=(0,s.R)((function(e,n){const{getButtonProps:t}=(0,i.AV)(),s=t(e,n),l={display:"flex",alignItems:"center",width:"100%",outline:0,...(0,i.EF)().button};return(0,r.jsx)(o.B.button,{...s,className:(0,a.cx)("chakra-accordion__button",e.className),__css:l})}));l.displayName="AccordionButton"},9454:(e,n,t)=>{t.d(n,{AV:()=>l,C3:()=>d,EF:()=>a,Of:()=>u,TG:()=>r,gm:()=>o,v3:()=>h});var i=t(6709),s=t(221),[o,a]=(0,s.q)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[r,l]=(0,s.q)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[d,c,u,h]=(0,i.D)()},3159:(e,n,t)=>{t.d(n,{Q:()=>l});var i=t(4818),s=t(9454),o=t(393),a=t(7681),r=t(4414);function l(e){const{isOpen:n,isDisabled:t}=(0,s.AV)(),{reduceMotion:l}=(0,i.Dr)(),d=(0,a.cx)("chakra-accordion__icon",e.className),c={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:l?void 0:"transform 0.2s",transformOrigin:"center",...(0,s.EF)().icon};return(0,r.jsx)(o.I,{viewBox:"0 0 24 24","aria-hidden":!0,className:d,__css:c,...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}l.displayName="AccordionIcon"},6709:(e,n,t)=>{t.d(n,{D:()=>p});var i=t(9950),s=Object.defineProperty,o=(e,n,t)=>(((e,n,t)=>{n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t);function a(e){return e.sort(((e,n)=>{const t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function r(e,n,t){let i=e+1;return t&&i>=n&&(i=0),i}function l(e,n,t){let i=e-1;return t&&i<0&&(i=n),i}var d="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,c=e=>e,u=class{constructor(){var e=this;o(this,"descendants",new Map),o(this,"register",(e=>{var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?this.registerNode(e):n=>{this.registerNode(n,e)}})),o(this,"unregister",(e=>{this.descendants.delete(e);const n=a(Array.from(this.descendants.keys()));this.assignIndex(n)})),o(this,"destroy",(()=>{this.descendants.clear()})),o(this,"assignIndex",(e=>{this.descendants.forEach((n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),o(this,"count",(()=>this.descendants.size)),o(this,"enabledCount",(()=>this.enabledValues().length)),o(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,n)=>e.index-n.index)))),o(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),o(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),o(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),o(this,"first",(()=>this.item(0))),o(this,"firstEnabled",(()=>this.enabledItem(0))),o(this,"last",(()=>this.item(this.descendants.size-1))),o(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),o(this,"indexOf",(e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1})),o(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((n=>n.node.isSameNode(e))))),o(this,"next",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=r(n,e.count(),t);return e.item(i)})),o(this,"nextEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=e.item(n);if(!i)return;const s=r(e.enabledIndexOf(i.node),e.enabledCount(),t);return e.enabledItem(s)})),o(this,"prev",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=l(n,e.count()-1,t);return e.item(i)})),o(this,"prevEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=e.item(n);if(!i)return;const s=l(e.enabledIndexOf(i.node),e.enabledCount()-1,t);return e.enabledItem(s)})),o(this,"registerNode",((e,n)=>{if(!e||this.descendants.has(e))return;const t=a(Array.from(this.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);const i={node:e,index:-1,...n};this.descendants.set(e,i),this.assignIndex(t)}))}},h=t(221),f=t(7237);var[x,m]=(0,h.q)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function p(){return[c(x),()=>c(m()),()=>function(){const e=(0,i.useRef)(new u);return d((()=>()=>e.current.destroy())),e.current}(),e=>function(e){const n=m(),[t,s]=(0,i.useState)(-1),o=(0,i.useRef)(null);d((()=>()=>{o.current&&n.unregister(o.current)}),[]),d((()=>{if(!o.current)return;const e=Number(o.current.dataset.index);t==e||Number.isNaN(e)||s(e)}));const a=c(e?n.register(e):n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(o.current),register:(0,f.Px)(a,o)}}(e)]}},591:(e,n,t)=>{t.d(n,{i:()=>o});var i=t(9950),s=t(1823);function o(e){const{value:n,defaultValue:t,onChange:o,shouldUpdate:a=(e,n)=>e!==n}=e,r=(0,s.c)(o),l=(0,s.c)(a),[d,c]=(0,i.useState)(t),u=void 0!==n,h=u?n:d,f=(0,s.c)((e=>{const n="function"===typeof e?e(h):e;l(h,n)&&(u||c(n),r(n))}),[u,r,h,l]);return[h,f]}},4850:(e,n,t)=>{t.d(n,{Jv:()=>o,jd:()=>a,xf:()=>i,yA:()=>r});var i={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},s={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function o(e){var n;switch(null!=(n=null==e?void 0:e.direction)?n:"right"){case"right":default:return s.slideRight;case"left":return s.slideLeft;case"bottom":return s.slideDown;case"top":return s.slideUp}}var a={enter:{duration:.2,ease:i.easeOut},exit:{duration:.1,ease:i.easeIn}},r={enter:(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.enter}),exit:(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.exit})}}}]);