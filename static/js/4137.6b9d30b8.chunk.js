"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[4137],{1940:(e,t,n)=>{n.d(t,{Kc:()=>s,MF:()=>o,ay:()=>a,nn:()=>i});var r=n(4451);const o=(0,r.j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast)),i=(0,r.j)((()=>n.e(9606).then(n.bind(n,9606))),(e=>e.ImageSkeleton)),s=(0,r.j)((()=>n.e(2613).then(n.bind(n,2613))),(e=>e.ImageSkeletonShow)),a=(0,r.j)((()=>n.e(8977).then(n.bind(n,8977))),(e=>e.ImageSkeletonFace))},4137:(e,t,n)=>{n.r(t),n.d(t,{AlbumPage:()=>S});var r=n(9950),o=n(6455),i=n(3247),s=n(1389),a=n(4418),l=n(5890),c=n(5439),u=n(1374),d=n(1317),f=n(194),p=n(8671),h=n(1878),m=n(5236),g=n(712),y=n(7385),w=n(327),x=n(6256),v=n(1940),j=n(3564),b=n(3246),C=n(4414);let k=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const S=()=>{(0,j.Zp)();const{configs:e,user:t}=(0,r.useContext)(m.rf),{setConfigs:n,setUser:S}=(0,r.useContext)(m.D8),[E,A]=(0,r.useState)(!1),[_,z]=(0,r.useState)(!0),[I,L]=(0,r.useState)(!1),[T,W]=(0,r.useState)("All"),[O,P]=(0,r.useState)(!0),[N,B]=(0,r.useState)(),[D,K]=(0,r.useState)([]),[V,F]=(0,r.useState)();(0,r.useEffect)((()=>{window.scrollTo(0,0),H()}),[]);const H=async()=>{if(!e){const e=await(0,g.Y_)();n(e),M()}await U({textKey:"",idLast:N})},M=async()=>{var e;const n=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(n&&!t){n.ready();const e=n.initDataUnsafe.user;if(e){let t={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const n=await(0,g.wz)(t.id);n?t={...n,username:"".concat(e.last_name," ").concat(e.first_name)}:await(0,g.kg)(t),S(t)}}},U=async e=>{let{textKey:n,idLast:r}=e;if(!I&&O){L(!0);let e=await(0,g.Zt)({id:t.id,idLast:r});if(e&&e.length){K([...D,...e]);const t=e[e.length-1];B(t.id)}else P(!1);!_&&await(0,y.yy)(1e3),L(!1)}},Z=(0,r.useCallback)((async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;e+n>=t-.5&&await U({textKey:"",idLast:N})}),[D,O,I]);return(0,r.useEffect)((()=>(window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z))),[Z]),(0,C.jsxs)(i.az,{children:[(0,C.jsxs)(o.mg,{children:[(0,C.jsx)("title",{children:"Album"}),(0,C.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,C.jsxs)(s.B,{h:"100vh",w:k,py:16,px:2,spacing:4,children:[(0,C.jsx)(s.B,{children:(0,C.jsx)(a.z,{pos:"fixed",zIndex:999,right:2,display:"none",children:(0,C.jsxs)(l.W,{children:[(0,C.jsx)(c.I,{variant:"outline",borderRadius:"full",borderColor:"purple.400",borderWidth:1,as:u.$,rightIcon:(0,C.jsx)(w.gpS,{color:"white",size:18}),size:"sm",minW:20,_focus:{bg:"transparent"},_hover:{bg:"transparent"},_expanded:{bg:"transparent"},children:(0,C.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:T})}),(0,C.jsx)(f.c,{backgroundColor:"gray.800",borderColor:"gray.800",color:"white",children:(0,C.jsxs)(p.i,{defaultValue:"All",type:"radio",onChange:e=>{W(e)},children:[(0,C.jsx)(h.k,{backgroundColor:"transparent",value:"All",children:"All"}),(0,C.jsx)(h.k,{backgroundColor:"transparent",value:"Photos",children:"Photos"}),(0,C.jsx)(h.k,{backgroundColor:"transparent",value:"Videos",children:"Videos"})]})})]})})}),(0,C.jsx)(s.B,{padding:0,pb:40,pt:6,onScroll:Z,children:(0,C.jsx)(x.A,{columnsCount:2,gutter:"16px",children:D.map(((e,t)=>{const{uri:n}=e;return(0,C.jsx)(v.nn,{uri:n,onPress:()=>{F(e),A(!0)}},t)}))})})]}),V&&(0,C.jsx)(b.xN,{isOpen:E,dataAI:V,onClose:e=>{if(e&&D){const e=D.filter((e=>e.id!==V.id));K(e)}A(!1)}})]})}},6256:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(9950);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var s=function(e){var t,n;function s(){return e.apply(this,arguments)||this}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var a=s.prototype;return a.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,o=Array.from({length:n},(function(){return[]})),i=0;return r.Children.forEach(t,(function(e){e&&r.isValidElement(e)&&(o[i%n].push(e),i++)})),o},a.renderColumns=function(){var e=this.props,t=e.gutter,n=e.itemTag,i=e.itemStyle;return this.getColumns().map((function(e,s){return r.createElement(n,{key:s,style:o({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t},i)},e.map((function(e){return e})))}))},a.render=function(){var e=this.props,t=e.gutter,n=e.className,i=e.style,s=e.containerTag;return r.createElement(s,{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},i),className:n},this.renderColumns())},s}(r.Component);s.propTypes={},s.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};const a=s;var l="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,c=function(){var e=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return l((function(){n(!0)}),[]),t}(),t=(0,r.useState)("undefined"!==typeof window?window.innerWidth:0),n=t[0],o=t[1],i=(0,r.useCallback)((function(){e&&o(window.innerWidth)}),[e]);return l((function(){if(e)return window.addEventListener("resize",i),i(),function(){return window.removeEventListener("resize",i)}}),[e,i]),n},u=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,o=e.children,i=e.className,s=void 0===i?null:i,a=e.style,l=void 0===a?null:a,u=c(),d=(0,r.useMemo)((function(){var e=Object.keys(n).sort((function(e,t){return e-t})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<u&&(t=n[e])})),t}),[u,n]);return r.createElement("div",{className:s,style:l},r.Children.map(o,(function(e,t){return r.cloneElement(e,{key:t,columnsCount:d})})))};u.propTypes={};const d=a}}]);