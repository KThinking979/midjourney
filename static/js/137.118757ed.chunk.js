"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[137],{712:(e,t,n)=>{n.d(t,{kg:()=>c,Y_:()=>s,wz:()=>d,FH:()=>p,bF:()=>l,TK:()=>u});var r=n(6220);const a=(0,n(815).Wp)({apiKey:"AIzaSyBOTVOdSu20rXHX_VWHnV3XmS9ZcnfQuBQ",authDomain:"midjourneyai-71161.firebaseapp.com",projectId:"midjourneyai-71161",storageBucket:"midjourneyai-71161.appspot.com",messagingSenderId:"559017193613",appId:"1:559017193613:web:8f4159f592c0a63e4e32c4",measurementId:"G-FEN6H6F61Y"}),o=(0,r.aU)(a);var i=n(4456);const s=async()=>{try{let e;const t=(0,r.H9)(o,"configs","configs"),n=await(0,r.x7)(t);return n.exists()&&(e=n.data()),e}catch(e){console.error("Error getUser: ",e)}},c=async e=>{let{id:t,username:n,coins:a}=e;try{const e=(new Date).toISOString().slice(0,10).replace("-","").replace("-","");await(0,r.BN)((0,r.H9)(o,"users","".concat(t)),{id:"".concat(t),username:n,coins:a,numAds:1,expDateAds:e,language:"en",createdAt:new Date,updateAt:new Date})}catch(i){console.error("Error createUser: ",i)}},l=async e=>{let{id:t,coins:n,transactionId:a}=e;try{await(0,r.mZ)((0,r.H9)(o,"users","".concat(t)),{coins:n,updateAtTrans:"COIN_".concat(new Date),transactionId:"".concat(a)})}catch(i){console.error("Error updateCoinsUser: ",i)}},u=async e=>{let{id:t,coins:n,language:a,numAds:i,expDateAds:s}=e;try{let e={};a&&(e={...e,language:a}),null!==n&&void 0!==n&&(e={...e,coins:n}),null!==i&&void 0!==i&&(e={...e,numAds:i}),null!==s&&void 0!==s&&(e={...e,expDateAds:s}),await(0,r.mZ)((0,r.H9)(o,"users","".concat(t)),{...e,updateAt:new Date})}catch(c){console.error("Error updateCoinsUser: ",c)}},d=async e=>{try{let t;const n=(0,r.H9)(o,"users","".concat(e)),a=await(0,r.x7)(n);return a.exists()&&(t=a.data()),t}catch(t){console.error("Error getUser: ",t)}},p=async e=>{let{model:t,server:n,text:r,cursor:a}=e;try{"".concat(window.location.protocol,"//").concat(n);const e=new Headers;e.append("Content-Type","application/json"),e.append("Accept","application/json, text/plain, */*"),e.append("Accept-Language","en-US,en;q=0.9"),e.append("Referer","https://lexica.art/");return i.Ze}catch(o){return console.log("Kai Error ",o),{error:!0}}}},1940:(e,t,n)=>{n.d(t,{M:()=>a,n:()=>o});var r=n(4451);const a=(0,r.j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast)),o=(0,r.j)((()=>n.e(919).then(n.bind(n,8919))),(e=>e.ImageSkeleton))},4137:(e,t,n)=>{n.r(t),n.d(t,{AlbumPage:()=>S});var r=n(9950),a=n(6455),o=n(3247),i=n(1389),s=n(4418),c=n(5890),l=n(5439),u=n(1374),d=n(3731),p=n(194),m=n(8671),h=n(1878),f=n(5236),g=n(712),x=n(7385),w=n(327),y=n(6256),v=n(1940),j=n(4414);let C=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const S=()=>{const{configs:e,user:t}=(0,r.useContext)(f.rf),{setConfigs:n,setUser:S}=(0,r.useContext)(f.D8),[b,A]=(0,r.useState)(!0),[E,_]=(0,r.useState)(!1),[k,H]=(0,r.useState)(!0),[I,L]=(0,r.useState)(0),[T,D]=(0,r.useState)([]),[z,F]=(0,r.useState)("All"),O=async t=>{let{isFirst:n,_textKey:r,_cursor:a}=t;if(!E&&a<=e.limitSearch){_(!0);let t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a});if(t&&t.prompts&&0===t.prompts.length&&(t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a})),t&&t.prompts&&0===t.prompts.length&&(t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a})),t&&t.prompts&&0===t.prompts.length&&(t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a})),t&&t.prompts&&t.prompts.length){const{prompts:n}=t,r=[];for(let t=0;t<n.length;t++){const a=n[t];r.push({id:a.id,textKey:a.prompt,negativeKey:a.negativePrompt?a.negativePrompt:"",uri:a.images.length?"".concat(e.lexicaImageSm2,"/").concat(a.images[0].id):"",width:a.width,height:a.height,isLast:t===n.length-1?T.length+n.length:0})}D([...T,...r]),L(a+50),a+50===e.limitSearch&&H(!1)}else D([]);!b&&await(0,x.y)(1e3),_(!1)}};(0,r.useEffect)((()=>{(async()=>{if(!e){const e=await(0,g.Y_)();n(e)}await O({isFirst:!1,_textKey:"",_cursor:0}),window.scrollTo(0,0)})(),(async()=>{var e;const n=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(n&&!t){n.ready();const e=n.initDataUnsafe.user;if(e){let t={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const n=await(0,g.wz)(t.id);n?t={...n,username:"".concat(e.last_name," ").concat(e.first_name)}:await(0,g.kg)(t),S(t)}}})()}),[]);const W=(0,r.useCallback)((async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;e+n>=t-.5&&await O({isFirst:!1,_textKey:"",_cursor:0})}),[T]);return(0,r.useEffect)((()=>(window.addEventListener("scroll",W),()=>window.removeEventListener("scroll",W))),[W]),(0,j.jsxs)(o.az,{children:[(0,j.jsxs)(a.mg,{children:[(0,j.jsx)("title",{children:"Album"}),(0,j.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,j.jsxs)(i.B,{h:"100vh",w:C,py:16,px:2,spacing:4,children:[(0,j.jsx)(i.B,{children:(0,j.jsx)(s.z,{pos:"fixed",zIndex:999,right:2,children:(0,j.jsxs)(c.W,{children:[(0,j.jsx)(l.I,{variant:"outline",borderRadius:"full",borderColor:"purple.400",borderWidth:1,as:u.$,rightIcon:(0,j.jsx)(w.gpS,{color:"white",size:18}),size:"sm",minW:20,_focus:{bg:"transparent"},_hover:{bg:"transparent"},_expanded:{bg:"transparent"},children:(0,j.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:z})}),(0,j.jsx)(p.c,{onChange:()=>{console.log("Chnage")},children:(0,j.jsxs)(m.i,{defaultValue:"All",type:"radio",onChange:e=>{F(e)},children:[(0,j.jsx)(h.k,{backgroundColor:"transparent",value:"All",children:"All"}),(0,j.jsx)(h.k,{backgroundColor:"transparent",value:"Photos",children:"Photos"}),(0,j.jsx)(h.k,{backgroundColor:"transparent",value:"Videos",children:"Videos"})]})})]})})}),(0,j.jsx)(i.B,{padding:0,pb:40,pt:6,onScroll:W,children:(0,j.jsx)(y.A,{columnsCount:2,gutter:"16px",children:T.map(((e,t)=>{const{id:n,uri:r}=e;return(0,j.jsx)(v.M,{uri:r},t)}))})})]})]})}},7385:(e,t,n)=>{n.d(t,{y:()=>r});const r=e=>new Promise((t=>setTimeout(t,e)))},6256:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(9950);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var i=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var s=i.prototype;return s.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,a=Array.from({length:n},(function(){return[]})),o=0;return r.Children.forEach(t,(function(e){e&&r.isValidElement(e)&&(a[o%n].push(e),o++)})),a},s.renderColumns=function(){var e=this.props,t=e.gutter,n=e.itemTag,o=e.itemStyle;return this.getColumns().map((function(e,i){return r.createElement(n,{key:i,style:a({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t},o)},e.map((function(e){return e})))}))},s.render=function(){var e=this.props,t=e.gutter,n=e.className,o=e.style,i=e.containerTag;return r.createElement(i,{style:a({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},o),className:n},this.renderColumns())},i}(r.Component);i.propTypes={},i.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};const s=i;var c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,l=function(){var e=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return c((function(){n(!0)}),[]),t}(),t=(0,r.useState)("undefined"!==typeof window?window.innerWidth:0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){e&&a(window.innerWidth)}),[e]);return c((function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[e,o]),n},u=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,a=e.children,o=e.className,i=void 0===o?null:o,s=e.style,c=void 0===s?null:s,u=l(),d=(0,r.useMemo)((function(){var e=Object.keys(n).sort((function(e,t){return e-t})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<u&&(t=n[e])})),t}),[u,n]);return r.createElement("div",{className:i,style:c},r.Children.map(a,(function(e,t){return r.cloneElement(e,{key:t,columnsCount:d})})))};u.propTypes={};const d=s}}]);