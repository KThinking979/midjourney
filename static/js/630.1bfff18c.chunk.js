"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[630],{1940:(e,n,t)=>{t.d(n,{Kc:()=>o,MF:()=>i,nn:()=>l});var s=t(4451);const i=(0,s.j)((()=>t.e(465).then(t.bind(t,465))),(e=>e.ImageFast)),l=(0,s.j)((()=>t.e(606).then(t.bind(t,9606))),(e=>e.ImageSkeleton)),o=(0,s.j)((()=>t.e(613).then(t.bind(t,2613))),(e=>e.ImageSkeletonShow))},7630:(e,n,t)=>{t.r(n),t.d(n,{ModalArt:()=>I});var s=t(9950),i=t(2099),l=t(4521),o=t(2463),c=t(2505),r=t(4787),a=t(3247),d=t(4418),h=t(393),x=t(1389),u=t(1374),j=t(1317),f=t(5236),p=t(3246),w=t(712),g=t(1940),b=t(327),C=t(2096),m=t(9949),y=t(4414),k=t(4691);let z=window.innerWidth>500?500:window.innerWidth;const I=e=>{let{isOpen:n,onClose:t,dataAI:I}=e;(0,i.d)();const{user:S,configs:v}=(0,s.useContext)(f.rf),{setUser:W}=(0,s.useContext)(f.D8),[D,E]=(0,s.useState)(!1),[A,B]=(0,s.useState)(),[F,O]=(0,s.useState)("");(0,s.useEffect)((()=>{R()}),[I]);const R=async()=>{try{B(I),O(I.uri)}catch(e){console.log("Error ",e),E(!1)}},$=(0,s.useCallback)((async()=>{S&&(E(!0),await k.saveAs(F),E(!1))}),[A,F]),K=(0,s.useCallback)((async()=>{if(!S)return;E(!0),await(0,w.Ww)({url:F});const e={id:A.id,type:A.type,isImage:A.isImage,prompt:A.prompt,negative:A.negative,style:A.style,width:A.width,height:A.height,steps:A.steps,scale:A.scale,uri:A.uri};await(0,w.Dn)({id:S.id,data:e}),E(!1),t&&t(!0)}),[A,F]);return(0,y.jsxs)(l.aF,{onClose:t,isOpen:n,size:"full",children:[(0,y.jsx)(o.m,{}),(0,y.jsx)(c.$,{backgroundColor:"black",zIndex:9999,children:(0,y.jsxs)(r.c,{p:0,children:[(0,y.jsx)(a.az,{transition:"0.9s ease",pos:"fixed",top:0,w:"full",zIndex:999,children:(0,y.jsxs)(d.z,{flex:1,p:2,justifyContent:"space-between",w:"full",minH:"40px",children:[(0,y.jsx)(h.I,{as:C.m6W,boxSize:7,padding:0,color:"white",zIndex:999,onClick:()=>{t&&t()}}),(0,y.jsx)(h.I,{as:m.Ym0,boxSize:7,padding:0,color:"white",zIndex:999,onClick:()=>{}})]})}),(0,y.jsxs)(x.B,{h:"100vh",px:2,pt:10,justifyContent:"space-between",children:[(0,y.jsx)(x.B,{flex:1,justifyContent:"center",children:A&&F&&(0,y.jsx)(g.Kc,{uri:F,width:z,height:z/(A.width/A.height)},F)}),(0,y.jsx)(x.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",children:(0,y.jsxs)(d.z,{w:"full",justifyContent:"center",spacing:2,children:[(0,y.jsx)(u.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:$,leftIcon:(0,y.jsx)(h.I,{as:b.mCe,boxSize:5}),flex:1,children:(0,y.jsx)(d.z,{children:(0,y.jsx)(j.E,{color:"white",fontSize:16,fontWeight:"700",children:"Download"})})}),(0,y.jsx)(u.$,{flex:1,py:4,mx:2,my:4,colorScheme:"red",borderRadius:"full",onClick:K,leftIcon:(0,y.jsx)(h.I,{as:b.Rrl,boxSize:5}),isDisabled:""===F,children:(0,y.jsx)(d.z,{children:(0,y.jsx)(j.E,{color:"white",fontSize:16,fontWeight:"700",children:"Delete"})})})]})})]}),(0,y.jsx)(p.aj,{isOpen:D})]})})]})}}}]);