"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[625],{6256:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(9950);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function i(e,n){return i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},i(e,n)}var o=function(e){var n,t;function o(){return e.apply(this,arguments)||this}t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,i(n,t);var a=o.prototype;return a.getColumns=function(){var e=this.props,n=e.children,t=e.columnsCount,s=Array.from({length:t},(function(){return[]})),i=0;return r.Children.forEach(n,(function(e){e&&r.isValidElement(e)&&(s[i%t].push(e),i++)})),s},a.renderColumns=function(){var e=this.props,n=e.gutter,t=e.itemTag,i=e.itemStyle;return this.getColumns().map((function(e,o){return r.createElement(t,{key:o,style:s({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:n},i)},e.map((function(e){return e})))}))},a.render=function(){var e=this.props,n=e.gutter,t=e.className,i=e.style,o=e.containerTag;return r.createElement(o,{style:s({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:n},i),className:t},this.renderColumns())},o}(r.Component);o.propTypes={},o.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};const a=o;var c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,l=function(){var e=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return c((function(){t(!0)}),[]),n}(),n=(0,r.useState)("undefined"!==typeof window?window.innerWidth:0),t=n[0],s=n[1],i=(0,r.useCallback)((function(){e&&s(window.innerWidth)}),[e]);return c((function(){if(e)return window.addEventListener("resize",i),i(),function(){return window.removeEventListener("resize",i)}}),[e,i]),t},u=function(e){var n=e.columnsCountBreakPoints,t=void 0===n?{350:1,750:2,900:3}:n,s=e.children,i=e.className,o=void 0===i?null:i,a=e.style,c=void 0===a?null:a,u=l(),d=(0,r.useMemo)((function(){var e=Object.keys(t).sort((function(e,n){return e-n})),n=e.length>0?t[e[0]]:1;return e.forEach((function(e){e<u&&(n=t[e])})),n}),[u,t]);return r.createElement("div",{className:o,style:c},r.Children.map(s,(function(e,n){return r.cloneElement(e,{key:n,columnsCount:d})})))};u.propTypes={};const d=a},1374:(e,n,t)=>{t.d(n,{$:()=>v});var r=t(9950);var s=t(221),[i,o]=(0,s.q)({strict:!1,name:"ButtonGroupContext"}),a=t(6306),c=t(7681),l=t(4414);function u(e){const{children:n,className:t,...s}=e,i=(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,c.cx)("chakra-button__icon",t);return(0,l.jsx)(a.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:o,children:i})}u.displayName="ButtonIcon";var d=t(63);function f(e){const{label:n,placement:t,spacing:s="0.5rem",children:i=(0,l.jsx)(d.y,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:u,...f}=e,h=(0,c.cx)("chakra-button__spinner",o),m="start"===t?"marginEnd":"marginStart",p=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[m]:n?s:0,fontSize:"1em",lineHeight:"normal",...u})),[u,n,m,s]);return(0,l.jsx)(a.B.div,{className:h,...f,__css:p,children:i})}f.displayName="ButtonSpinner";var h=t(7237),m=t(8039),p=t(6296),g=t(2867),v=(0,m.R)(((e,n)=>{const t=o(),s=(0,p.Vl)("Button",{...t,...e}),{isDisabled:i=(null==t?void 0:t.isDisabled),isLoading:u,isActive:d,children:m,leftIcon:v,rightIcon:y,loadingText:N,iconSpacing:x="0.5rem",type:E,spinner:I,spinnerPlacement:C="start",className:O,as:_,...w}=(0,g.MN)(e),S=(0,r.useMemo)((()=>{const e={...null==s?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!t&&{_focus:e}}}),[s,t]),{ref:T,type:j}=function(e){const[n,t]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&t("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(_),D={rightIcon:y,leftIcon:v,iconSpacing:x,children:m};return(0,l.jsxs)(a.B.button,{ref:(0,h.SV)(n,T),as:_,type:null!=E?E:j,"data-active":(0,c.sE)(d),"data-loading":(0,c.sE)(u),__css:S,className:(0,c.cx)("chakra-button",O),...w,disabled:i||u,children:[u&&"start"===C&&(0,l.jsx)(f,{className:"chakra-button__spinner--start",label:N,placement:"start",spacing:x,children:I}),u?N||(0,l.jsx)(a.B.span,{opacity:0,children:(0,l.jsx)(b,{...D})}):(0,l.jsx)(b,{...D}),u&&"end"===C&&(0,l.jsx)(f,{className:"chakra-button__spinner--end",label:N,placement:"end",spacing:x,children:I})]})}));function b(e){const{leftIcon:n,rightIcon:t,children:r,iconSpacing:s}=e;return(0,l.jsxs)(l.Fragment,{children:[n&&(0,l.jsx)(u,{marginEnd:s,children:n}),r,t&&(0,l.jsx)(u,{marginStart:s,children:t})]})}v.displayName="Button"},6709:(e,n,t)=>{t.d(n,{D:()=>g});var r=t(9950),s=Object.defineProperty,i=(e,n,t)=>(((e,n,t)=>{n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t);function o(e){return e.sort(((e,n)=>{const t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function a(e,n,t){let r=e+1;return t&&r>=n&&(r=0),r}function c(e,n,t){let r=e-1;return t&&r<0&&(r=n),r}var l="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,u=e=>e,d=class{constructor(){var e=this;i(this,"descendants",new Map),i(this,"register",(e=>{var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?this.registerNode(e):n=>{this.registerNode(n,e)}})),i(this,"unregister",(e=>{this.descendants.delete(e);const n=o(Array.from(this.descendants.keys()));this.assignIndex(n)})),i(this,"destroy",(()=>{this.descendants.clear()})),i(this,"assignIndex",(e=>{this.descendants.forEach((n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),i(this,"count",(()=>this.descendants.size)),i(this,"enabledCount",(()=>this.enabledValues().length)),i(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,n)=>e.index-n.index)))),i(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),i(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),i(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),i(this,"first",(()=>this.item(0))),i(this,"firstEnabled",(()=>this.enabledItem(0))),i(this,"last",(()=>this.item(this.descendants.size-1))),i(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),i(this,"indexOf",(e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1})),i(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((n=>n.node.isSameNode(e))))),i(this,"next",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=a(n,e.count(),t);return e.item(r)})),i(this,"nextEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=e.item(n);if(!r)return;const s=a(e.enabledIndexOf(r.node),e.enabledCount(),t);return e.enabledItem(s)})),i(this,"prev",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=c(n,e.count()-1,t);return e.item(r)})),i(this,"prevEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=e.item(n);if(!r)return;const s=c(e.enabledIndexOf(r.node),e.enabledCount()-1,t);return e.enabledItem(s)})),i(this,"registerNode",((e,n)=>{if(!e||this.descendants.has(e))return;const t=o(Array.from(this.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);const r={node:e,index:-1,...n};this.descendants.set(e,r),this.assignIndex(t)}))}},f=t(221),h=t(7237);var[m,p]=(0,f.q)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function g(){return[u(m),()=>u(p()),()=>function(){const e=(0,r.useRef)(new d);return l((()=>()=>e.current.destroy())),e.current}(),e=>function(e){const n=p(),[t,s]=(0,r.useState)(-1),i=(0,r.useRef)(null);l((()=>()=>{i.current&&n.unregister(i.current)}),[]),l((()=>{if(!i.current)return;const e=Number(i.current.dataset.index);t==e||Number.isNaN(e)||s(e)}));const o=u(e?n.register(e):n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(i.current),register:(0,h.Px)(o,i)}}(e)]}},591:(e,n,t)=>{t.d(n,{i:()=>i});var r=t(9950),s=t(1823);function i(e){const{value:n,defaultValue:t,onChange:i,shouldUpdate:o=(e,n)=>e!==n}=e,a=(0,s.c)(i),c=(0,s.c)(o),[l,u]=(0,r.useState)(t),d=void 0!==n,f=d?n:l,h=(0,s.c)((e=>{const n="function"===typeof e?e(f):e;c(f,n)&&(d||u(n),a(n))}),[d,a,f,c]);return[f,h]}},7237:(e,n,t)=>{t.d(n,{Px:()=>s,SV:()=>i});var r=t(9950);function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>{n.forEach((n=>{!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}(n,e)}))}}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.useMemo)((()=>s(...n)),n)}}}]);