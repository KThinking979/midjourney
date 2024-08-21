"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[137],{1940:(e,t,n)=>{n.d(t,{M:()=>r});const r=(0,n(4451).j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast))},4137:(e,t,n)=>{n.r(t),n.d(t,{AlbumPage:()=>h});var r=n(9950),i=n(6455),o=n(3247),s=n(7981),a=n(5236),c=n(712),l=n(7385),u=n(6256),p=n(1940),d=n(4414);let m=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const h=()=>{const{configs:e,user:t}=(0,r.useContext)(a.rf),{setConfigs:n,setUser:h}=(0,r.useContext)(a.D8),[f,x]=(0,r.useState)(!0),[g,w]=(0,r.useState)(!1),[y,v]=(0,r.useState)(!0),[C,S]=(0,r.useState)(0),[j,b]=(0,r.useState)([]),E=async t=>{let{isFirst:n,_textKey:r,_cursor:i}=t;if(!g&&i<=e.limitSearch){w(!0);let t=await(0,c.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:i});if(t&&t.prompts&&0===t.prompts.length&&(t=await(0,c.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:i})),t&&t.prompts&&0===t.prompts.length&&(t=await(0,c.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:i})),t&&t.prompts&&0===t.prompts.length&&(t=await(0,c.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:i})),t&&t.prompts&&t.prompts.length){const{prompts:n}=t,r=[];for(let t=0;t<n.length;t++){const i=n[t];r.push({id:i.id,textKey:i.prompt,negativeKey:i.negativePrompt?i.negativePrompt:"",uri:i.images.length?"".concat(e.lexicaImageSm2,"/").concat(i.images[0].id):"",width:i.width,height:i.height,isLast:t===n.length-1?j.length+n.length:0})}b([...j,...r]),S(i+50),i+50===e.limitSearch&&v(!1)}else b([]);!f&&await(0,l.y)(1e3),w(!1)}};(0,r.useEffect)((()=>{(async()=>{if(!e){const e=await(0,c.Y_)();n(e)}await E({isFirst:!1,_textKey:"",_cursor:0}),window.scrollTo(0,0)})(),(async()=>{var e;const n=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(n&&!t){n.ready();const e=n.initDataUnsafe.user;if(e){let t={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const n=await(0,c.wz)(t.id);n?t={...t,coins:n.coins}:await(0,c.kg)(t),h(t)}}})()}),[]);const L=(0,r.useCallback)((async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;e+n>=t-.5&&await E({isFirst:!1,_textKey:"",_cursor:0})}),[j]);return(0,r.useEffect)((()=>(window.addEventListener("scroll",L),()=>window.removeEventListener("scroll",L))),[L]),(0,d.jsxs)(o.az,{children:[(0,d.jsxs)(i.mg,{children:[(0,d.jsx)("title",{children:"Album"}),(0,d.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,d.jsx)(s.B,{h:"100vh",w:m,py:20,px:2,spacing:10,children:(0,d.jsx)(s.B,{padding:0,py:4,pb:40,onScroll:L,children:(0,d.jsx)(u.A,{columnsCount:2,gutter:"16px",children:j.map(((e,t)=>{const{id:n,uri:r}=e;return(0,d.jsx)(p.M,{uri:r},t)}))})})})]})}},7385:(e,t,n)=>{n.d(t,{y:()=>r});const r=e=>new Promise((t=>setTimeout(t,e)))},6256:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(9950);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var s=function(e){var t,n;function s(){return e.apply(this,arguments)||this}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var a=s.prototype;return a.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,i=Array.from({length:n},(function(){return[]})),o=0;return r.Children.forEach(t,(function(e){e&&r.isValidElement(e)&&(i[o%n].push(e),o++)})),i},a.renderColumns=function(){var e=this.props,t=e.gutter,n=e.itemTag,o=e.itemStyle;return this.getColumns().map((function(e,s){return r.createElement(n,{key:s,style:i({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t},o)},e.map((function(e){return e})))}))},a.render=function(){var e=this.props,t=e.gutter,n=e.className,o=e.style,s=e.containerTag;return r.createElement(s,{style:i({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},o),className:n},this.renderColumns())},s}(r.Component);s.propTypes={},s.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};const a=s;var c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,l=function(){var e=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return c((function(){n(!0)}),[]),t}(),t=(0,r.useState)("undefined"!==typeof window?window.innerWidth:0),n=t[0],i=t[1],o=(0,r.useCallback)((function(){e&&i(window.innerWidth)}),[e]);return c((function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[e,o]),n},u=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,i=e.children,o=e.className,s=void 0===o?null:o,a=e.style,c=void 0===a?null:a,u=l(),p=(0,r.useMemo)((function(){var e=Object.keys(n).sort((function(e,t){return e-t})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<u&&(t=n[e])})),t}),[u,n]);return r.createElement("div",{className:s,style:c},r.Children.map(i,(function(e,t){return r.cloneElement(e,{key:t,columnsCount:p})})))};u.propTypes={};const p=a}}]);