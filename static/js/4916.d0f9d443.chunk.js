"use strict";(self.webpackChunkmidjourney=self.webpackChunkmidjourney||[]).push([[4916],{1940:(e,t,i)=>{i.d(t,{Kc:()=>a,MF:()=>o,ay:()=>c,nn:()=>s});var n=i(4451);const o=(0,n.j)((()=>i.e(465).then(i.bind(i,465))),(e=>e.ImageFast)),s=(0,n.j)((()=>i.e(9606).then(i.bind(i,9606))),(e=>e.ImageSkeleton)),a=(0,n.j)((()=>i.e(2613).then(i.bind(i,2613))),(e=>e.ImageSkeletonShow)),c=(0,n.j)((()=>i.e(8977).then(i.bind(i,8977))),(e=>e.ImageSkeletonFace))},4916:(e,t,i)=>{i.r(t),i.d(t,{DashBoardPage:()=>W});var n=i(9950),o=i(6455),s=i(3247),a=i(1389),c=i(2481),l=i(393),r=i(1317),d=i(4418),m=i(327),h=i(1912),g=i(2423),u=i(6365),p=i(2935),I=i(7738),S=i(917),A=i(5236),E=i(712),j=i(6256),w=i(1940),x=i(4456),f=i(3564),T=i(8412),C=i(9949),_=i(4414);let y=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const b=[{mode:x.g.TEXT_ARTISTIC,path:T.W.TEXT_ARTISTIC,title:"Text Artistic",icon:m.P9_,emoji:""},{mode:x.g.IMAGE_ARTISTIC,path:T.W.IMAGE_ARTISTIC,title:"Image Artistic",icon:h.hjn,emoji:""},{mode:x.g.SD3_SUPPER,path:T.W.SD3_SUPPER,title:"SD3 Supper",icon:g.$iZ,emoji:""},{mode:x.g.ILLUSION,path:T.W.ILLUSION,title:"Illusion",icon:I.HY1,emoji:""},{mode:x.g.FACE_SWAP,path:T.W.FACE_SWAP,title:"FaceSwap",icon:u.yOh,emoji:""},{mode:x.g.UPSCALE,path:T.W.UPSCALE,title:"Upscale",icon:C.Uf2,emoji:""},{mode:x.g.FACE_STICKER,path:T.W.FACE_STICKER,title:"Face Sticker",icon:p.jg2,emoji:""},{mode:x.g.TEXT_ANIME,path:T.W.TEXT_ANIME,title:"Text Anime",icon:S.ZQS,emoji:""},{mode:x.g.IMAGE_ANIME,path:T.W.IMAGE_ANIME,title:"Image Anime",icon:I.a6J,emoji:""},{mode:x.g.VIDEO_ANIME,path:T.W.VIDEO_ANIME,title:"Video Anime",icon:m.Am_,emoji:""}],W=()=>{const e=(0,f.Zp)(),{user:t,configs:i}=(0,n.useContext)(A.rf),{setUser:m,setConfigs:h,setListAIStyleAll:g}=(0,n.useContext)(A.D8),[u,p]=(0,n.useState)(!0),[I,S]=(0,n.useState)(!1),[x,C]=(0,n.useState)([]),[W,M]=(0,n.useState)(!0),[L,k]=(0,n.useState)();(0,n.useEffect)((()=>{D()}),[]);const D=async()=>{p(!0),console.log("initialize "),await R({textKey:"",idLast:L}),await P(),p(!1)},P=async()=>{try{var e;const i=await(0,E.Y_)();h(i);const n=await(0,E.Vo)();g(n),console.log("_configs ",i);const o=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(o&&!t){o.ready();const e=o.initDataUnsafe.user;if(e){let t={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:i.initCoin?i.initCoin:0};const n=await(0,E.wz)(t.id);console.log("resAccount ",n),n?t={...n,username:"".concat(e.last_name," ").concat(e.first_name)}:await(0,E.kg)(t),console.log("userData ",t),m(t)}}if(!i.isTest){let e={id:"1",username:"Kai Test",coins:100};const t=await(0,E.wz)(e.id);t?e={...t}:await(0,E.kg)(e),m(e)}}catch(i){}},R=async e=>{let{textKey:t,idLast:i}=e;if(console.log("isLoadGen ",I),console.log("isShowLoadMore ",W),!I&&W){console.log("getGenArts "),S(!0);let e=await(0,E.xD)({idLast:i});if(e&&e.length){C([...x,...e]);const t=e[e.length-1];k(t.id)}else M(!1);S(!1)}},v=(0,n.useCallback)((async()=>{console.log("handleScroll ");const{scrollTop:e,scrollHeight:t,clientHeight:i}=document.documentElement;e+i>=t-.5&&await R({textKey:"",idLast:L})}),[x,L,I,W]);(0,n.useEffect)((()=>(window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v))),[v]);const F=(0,n.useCallback)((async t=>{e(t.path)}),[]);return(0,_.jsxs)(s.az,{children:[(0,_.jsxs)(o.mg,{children:[(0,_.jsx)("title",{children:"Dashboard"}),(0,_.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,_.jsxs)(a.B,{h:"100vh",w:y,py:20,px:2,spacing:10,children:[(0,_.jsx)(a.B,{borderRadius:8,py:2,spacing:5,children:(0,_.jsx)(c.x,{templateColumns:"repeat(3, 1fr)",gap:5,children:b.map((e=>{const t=!!(i&&i.MODES&&i.MODES.find((t=>t===e.mode)));return(0,_.jsxs)(a.B,{display:t?"flex":"none",flex:1,alignItems:"center",justifyContent:"center",borderColor:"#818cf8",borderWidth:2,borderRadius:8,bg:"transparent",minW:20,minH:20,spacing:2,_active:{bg:"blue.500"},onClick:()=>F(e),children:[(0,_.jsx)(l.I,{color:"white",as:e.icon,boxSize:8}),(0,_.jsx)(r.E,{textAlign:"center",color:"white",fontSize:14,children:e.title})]},e.mode)}))})}),(0,_.jsxs)(a.B,{padding:0,pb:40,pt:10,onScroll:v,children:[(0,_.jsx)(d.z,{spacing:2,display:u?"none":"flex",children:(0,_.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:"\ud83c\udfa8 Artistic Key"})}),(0,_.jsx)(j.A,{columnsCount:2,gutter:"16px",children:x.map(((t,i)=>{const{id:n,uri:o}=t;return(0,_.jsx)(w.MF,{uri:o,onPress:()=>{e(T.W.TEXT_ARTISTIC,{state:{dataAI:t}})}},i)}))})]})]})]})}}}]);