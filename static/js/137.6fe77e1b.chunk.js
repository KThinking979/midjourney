"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[137],{1940:(e,t,i)=>{i.d(t,{M:()=>r});const r=(0,i(4451).j)((()=>i.e(465).then(i.bind(i,465))),(e=>e.ImageFast))},4137:(e,t,i)=>{i.r(t),i.d(t,{AlbumPage:()=>y});var r=i(9950),a=i(6455),s=i(3247),n=i(1530),o=i(4418),c=i(5890),l=i(5439),d=i(1374),p=i(3731),h=i(194),x=i(8671),u=i(1878),m=i(5236),g=i(712),w=i(7385),f=i(327),v=i(6256),j=i(1940),S=i(4414);let b=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const y=()=>{const{configs:e,user:t}=(0,r.useContext)(m.rf),{setConfigs:i,setUser:y}=(0,r.useContext)(m.D8),[C,k]=(0,r.useState)(!0),[_,L]=(0,r.useState)(!1),[A,F]=(0,r.useState)(!0),[z,H]=(0,r.useState)(0),[W,E]=(0,r.useState)([]),[I,P]=(0,r.useState)("All"),K=async t=>{let{isFirst:i,_textKey:r,_cursor:a}=t;if(!_&&a<=e.limitSearch){L(!0);let t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a});if(t&&t.prompts&&0===t.prompts.length&&(t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a})),t&&t.prompts&&0===t.prompts.length&&(t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a})),t&&t.prompts&&0===t.prompts.length&&(t=await(0,g.FH)({server:e&&e.lexicaSearch?e.lexicaSearch:"https://lexica.art/api/infinite-prompts",model:e&&e.modelLexica?e.modelLexica:"lexica-aperture-v2",text:r,cursor:a})),t&&t.prompts&&t.prompts.length){const{prompts:i}=t,r=[];for(let t=0;t<i.length;t++){const a=i[t];r.push({id:a.id,textKey:a.prompt,negativeKey:a.negativePrompt?a.negativePrompt:"",uri:a.images.length?"".concat(e.lexicaImageSm2,"/").concat(a.images[0].id):"",width:a.width,height:a.height,isLast:t===i.length-1?W.length+i.length:0})}E([...W,...r]),H(a+50),a+50===e.limitSearch&&F(!1)}else E([]);!C&&await(0,w.y)(1e3),L(!1)}};(0,r.useEffect)((()=>{(async()=>{if(!e){const e=await(0,g.Y_)();i(e)}await K({isFirst:!1,_textKey:"",_cursor:0}),window.scrollTo(0,0)})(),(async()=>{var e;const i=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(i&&!t){i.ready();const e=i.initDataUnsafe.user;if(e){let t={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const i=await(0,g.wz)(t.id);i?t={...t,coins:i.coins}:await(0,g.kg)(t),y(t)}}})()}),[]);const T=(0,r.useCallback)((async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:i}=document.documentElement;e+i>=t-.5&&await K({isFirst:!1,_textKey:"",_cursor:0})}),[W]);return(0,r.useEffect)((()=>(window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T))),[T]),(0,S.jsxs)(s.az,{children:[(0,S.jsxs)(a.mg,{children:[(0,S.jsx)("title",{children:"Album"}),(0,S.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,S.jsxs)(n.B,{h:"100vh",w:b,py:16,px:2,spacing:4,children:[(0,S.jsx)(n.B,{children:(0,S.jsx)(o.z,{pos:"fixed",zIndex:999,right:2,children:(0,S.jsxs)(c.W,{children:[(0,S.jsx)(l.I,{variant:"outline",borderRadius:"full",borderColor:"purple.400",borderWidth:1,as:d.$,rightIcon:(0,S.jsx)(f.gpS,{color:"white",size:18}),size:"sm",minW:20,_focus:{bg:"transparent"},_hover:{bg:"transparent"},_expanded:{bg:"transparent"},children:(0,S.jsx)(p.E,{color:"white",fontSize:14,fontWeight:"700",children:I})}),(0,S.jsx)(h.c,{onChange:()=>{console.log("Chnage")},children:(0,S.jsxs)(x.i,{defaultValue:"All",type:"radio",onChange:e=>{P(e)},children:[(0,S.jsx)(u.k,{backgroundColor:"transparent",value:"All",children:"All"}),(0,S.jsx)(u.k,{backgroundColor:"transparent",value:"Photos",children:"Photos"}),(0,S.jsx)(u.k,{backgroundColor:"transparent",value:"Videos",children:"Videos"})]})})]})})}),(0,S.jsx)(n.B,{padding:0,pb:40,pt:6,onScroll:T,children:(0,S.jsx)(v.A,{columnsCount:2,gutter:"16px",children:W.map(((e,t)=>{const{id:i,uri:r}=e;return(0,S.jsx)(j.M,{uri:r},t)}))})})]})]})}},7385:(e,t,i)=>{i.d(t,{y:()=>r});const r=e=>new Promise((t=>setTimeout(t,e)))}}]);