"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[137],{1940:(e,t,n)=>{n.d(t,{M:()=>r});const r=(0,n(4451).j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast))},4137:(e,t,n)=>{n.r(t),n.d(t,{AlbumPage:()=>f});var r=n(9950),i=n(6455),o=n(3247),a=n(7981),s=n(5236),c=n(5699),l=n(7385),u=n(6256),p=n(1940),m=n(4414);let d=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const h={lexicaSearch:"https://lexica.art/api/infinite-prompts",lexicaImageSm2:"https://image.lexica.art/sm2",modelLexica:"lexica-aperture-v3.5",limitSearch:1e3},f=()=>{const{faceEmo:e,user:t}=(0,r.useContext)(s.rf),{setFaceEmo:n,setUser:f}=(0,r.useContext)(s.D8),[x,g]=(0,r.useState)(!0),[w,y]=(0,r.useState)(!1),[v,S]=(0,r.useState)(!0),[C,j]=(0,r.useState)(0),[E,b]=(0,r.useState)([]),L=async e=>{let{isFirst:t,_textKey:n,_cursor:r}=e;if(!w&&r<=h.limitSearch){y(!0);let e=await(0,c.FH)({server:h&&h.lexicaSearch?h.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:h&&h.modelLexica?h.modelLexica:"lexica-aperture-v2",text:n,cursor:r});if(e&&e.prompts&&0===e.prompts.length&&(e=await(0,c.FH)({server:h&&h.lexicaSearch?h.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:h&&h.modelLexica?h.modelLexica:"lexica-aperture-v2",text:n,cursor:r})),e&&e.prompts&&0===e.prompts.length&&(e=await(0,c.FH)({server:h&&h.lexicaSearch?h.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:h&&h.modelLexica?h.modelLexica:"lexica-aperture-v2",text:n,cursor:r})),e&&e.prompts&&0===e.prompts.length&&(e=await(0,c.FH)({server:h&&h.lexicaSearch?h.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:h&&h.modelLexica?h.modelLexica:"lexica-aperture-v2",text:n,cursor:r})),e&&e.prompts&&e.prompts.length){const{prompts:t}=e,n=[];for(let e=0;e<t.length;e++){const r=t[e];n.push({id:r.id,textKey:r.prompt,negativeKey:r.negativePrompt?r.negativePrompt:"",uri:r.images.length?"".concat(h.lexicaImageSm2,"/").concat(r.images[0].id):"",width:r.width,height:r.height,isLast:e===t.length-1?E.length+t.length:0})}console.log("Kai Art ",n.length),b([...E,...n]),j(r+50),r+50===h.limitSearch&&S(!1)}else b([]);!x&&await(0,l.y)(1e3),y(!1)}};(0,r.useEffect)((()=>{(async()=>{await L({isFirst:!1,_textKey:"",_cursor:0}),window.scrollTo(0,0)})(),(async()=>{var e;const n=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(n&&!t){n.ready();const e=n.initDataUnsafe.user;if(e){let t={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const n=await(0,c.wz)(t.id);n?t={...t,coins:n.coins}:await(0,c.kg)(t),f(t)}}})()}),[]);const _=(0,r.useCallback)((async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;e+n>=t-.5&&await L({isFirst:!1,_textKey:"",_cursor:0})}),[E]);return(0,r.useEffect)((()=>(window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_))),[_]),console.log("Arts ",E.length),(0,m.jsxs)(o.az,{children:[(0,m.jsxs)(i.mg,{children:[(0,m.jsx)("title",{children:"Album"}),(0,m.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,m.jsx)(a.B,{h:"100vh",w:d,py:20,px:2,spacing:10,children:(0,m.jsx)(a.B,{padding:0,py:4,pb:40,onScroll:_,children:(0,m.jsx)(u.A,{columnsCount:2,gutter:"16px",children:E.map(((e,t)=>{const{id:n,uri:r}=e;return(0,m.jsx)(p.M,{uri:r},t)}))})})})]})}},7385:(e,t,n)=>{n.d(t,{y:()=>r});const r=e=>new Promise((t=>setTimeout(t,e)))},6256:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(9950);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var a=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var s=a.prototype;return s.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,i=Array.from({length:n},(function(){return[]})),o=0;return r.Children.forEach(t,(function(e){e&&r.isValidElement(e)&&(i[o%n].push(e),o++)})),i},s.renderColumns=function(){var e=this.props,t=e.gutter,n=e.itemTag,o=e.itemStyle;return this.getColumns().map((function(e,a){return r.createElement(n,{key:a,style:i({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t},o)},e.map((function(e){return e})))}))},s.render=function(){var e=this.props,t=e.gutter,n=e.className,o=e.style,a=e.containerTag;return r.createElement(a,{style:i({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},o),className:n},this.renderColumns())},a}(r.Component);a.propTypes={},a.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};const s=a;var c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,l=function(){var e=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return c((function(){n(!0)}),[]),t}(),t=(0,r.useState)("undefined"!==typeof window?window.innerWidth:0),n=t[0],i=t[1],o=(0,r.useCallback)((function(){e&&i(window.innerWidth)}),[e]);return c((function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[e,o]),n},u=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,i=e.children,o=e.className,a=void 0===o?null:o,s=e.style,c=void 0===s?null:s,u=l(),p=(0,r.useMemo)((function(){var e=Object.keys(n).sort((function(e,t){return e-t})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<u&&(t=n[e])})),t}),[u,n]);return r.createElement("div",{className:a,style:c},r.Children.map(i,(function(e,t){return r.cloneElement(e,{key:t,columnsCount:p})})))};u.propTypes={};const p=s}}]);