"use strict";(self.webpackChunkmidjourney=self.webpackChunkmidjourney||[]).push([[6895,897],{1940:(e,t,s)=>{s.d(t,{Kc:()=>r,MF:()=>n,ay:()=>o,nn:()=>a});var i=s(4451);const n=(0,i.j)((()=>s.e(465).then(s.bind(s,465))),(e=>e.ImageFast)),a=(0,i.j)((()=>s.e(9606).then(s.bind(s,9606))),(e=>e.ImageSkeleton)),r=(0,i.j)((()=>s.e(2613).then(s.bind(s,2613))),(e=>e.ImageSkeletonShow)),o=(0,i.j)((()=>s.e(8977).then(s.bind(s,8977))),(e=>e.ImageSkeletonFace))},897:(e,t,s)=>{s.r(t),s.d(t,{SlideAds:()=>g});var i=s(9950),n=s(9703),a=s(1389),r=s(1317),o=s(1374),c=s(393),d=s(4418),l=s(6365),h=s(327),x=s(712),u=s(5236),p=s(6742),w=s(6451),y=s(4414);const g=e=>{let{isOpen:t,isAds:s=!0,onPressPay:g,onPressAds:f,onClose:j}=e;const{t:m}=(0,p.B)(),{user:v,configs:S}=(0,i.useContext)(u.rf),{setUser:b}=(0,i.useContext)(u.D8),[A,k]=(0,i.useState)(v&&v.numAdsGen?v.numAdsGen:1);(0,i.useEffect)((()=>{C()}),[]);const C=async()=>{if(S&&v){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>v.expDateAdsGen&&(k(1),b({...v,numAdsGen:1,expDateAdsGen:e}),(0,x.TK)({id:v.id,numAdsGen:1,expDateAdsGen:e}))}};return(0,y.jsxs)(n.q,{direction:"bottom",in:t,style:{zIndex:1e3,height:"100%",flex:1,justifyContent:"space-between"},children:[(0,y.jsx)(a.B,{onClick:()=>j&&j(),h:"55%",opacity:.8,backgroundColor:"black"}),(0,y.jsxs)(a.B,{h:"45%",padding:2,spacing:4,backgroundColor:"gray.800",justifyContent:"center",children:[(0,y.jsxs)(a.B,{spacing:1,mb:4,children:[(0,y.jsx)(r.E,{textAlign:"center",fontWeight:"bold",fontSize:"16px",color:"white",children:m(w.P.dashboard.not_enough_coins)}),(0,y.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.400",children:m(w.P.dashboard.please_buy_more_coin_to_create)})]}),(0,y.jsx)(o.$,{colorScheme:"green",borderRadius:"full",size:"md",onClick:()=>g&&g(),leftIcon:(0,y.jsx)(c.I,{as:l.jXZ,boxSize:6}),children:(0,y.jsx)(d.z,{children:(0,y.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:m(w.P.account.buy_coins)})})}),(0,y.jsx)(r.E,{display:s?"block":"none",color:"white",fontSize:14,textAlign:"center",children:m(w.P.dashboard.or)}),(0,y.jsxs)(a.B,{display:s?"flex":"none",children:[(0,y.jsx)(o.$,{colorScheme:"red",size:"md",borderRadius:"full",onClick:async()=>{const e=Object.keys(S.ADS).length,t=S.ADS.sort((()=>Math.random()-.5));let s=A<=e?t["".concat(A-1)]:t["".concat(A%e===0?e-1:A%e-1)];s||(s=t["".concat(e-1)]);window.Adsgram.init({blockId:s}).show().then((e=>{let t=A+1;(0,x.TK)({id:v.id,numAdsGen:t}),b({...v,numAdsGen:t}),k(t),f&&f()})).catch((e=>{}))},leftIcon:(0,y.jsx)(c.I,{as:h.I1Q,boxSize:6}),isDisabled:!!(S&&S.limitAdsGen<=A),children:(0,y.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:m(w.P.dashboard.watch_ads)})}),(0,y.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.300",children:S&&S.limitAdsGen<=A?m(w.P.dashboard.available_tomorrow):m(w.P.dashboard.with_default_setting)})]})]})]})}},6895:(e,t,s)=>{s.r(t),s.d(t,{GenArtisticPage:()=>K});var i=s(9950),n=s(6455),a=s(2099),r=s(3247),o=s(1389),c=s(2481),d=s(4418),l=s(1374),h=s(393),x=s(1317),u=s(5236),p=s(3564),w=s(3246),y=s(712),g=s(4456),f=s(7385),j=s(7956),m=s(1940),v=s(9591),S=s(5495),b=s(897),A=s(8412),k=s(4414);let C=window.innerWidth>500?500:window.innerWidth,I=!1;const K=()=>{const e=(0,p.Zp)(),t=(0,a.d)(),s=(0,p.zy)(),{user:K,configs:_}=(0,i.useContext)(u.rf),{setUser:E}=(0,i.useContext)(u.D8),[P,z]=(0,i.useState)(!1),[G,F]=(0,i.useState)(!1),[T,N]=(0,i.useState)(!1),[D,O]=(0,i.useState)(),[B,W]=(0,i.useState)(""),[R,Q]=(0,i.useState)(""),[U,H]=(0,i.useState)(""),[M,$]=(0,i.useState)(""),[J,V]=(0,i.useState)("");(0,i.useEffect)((()=>{window.scrollTo(0,0);const e=s.state;K&&e&&e.dataAI&&Z({isFree:e.dataAI.isFree})}),[]);const Z=async t=>{let i,{isFree:n}=t;I=!1;let a=0;try{const t=s.state;if(K&&t&&t.dataAI){const e=t.dataAI,s=K;z(!0),F(!1),O(e),W(""),Q(""),H(""),$(""),V("");const r=e.style?e.style.key:"";let o="".concat(r.replace("{prompt}",e.prompt));const c=e.style?e.style.negativeKey:"",d="".concat(e.negativeKey," ").concat(c);if((n||!n&&parseFloat(s.coins)>=parseFloat(e.feeCoin))&&e.type===g.Wk.GEN)for(let t=0;t<e.samples&&!I;t++){let s=e.seed;if(-1===e.seed&&(s=(0,f.RZ)({min:0,max:g.Vm})),e.type===g.Wk.GEN&&"ProGen"===e.model){const t={...e,stylePreset:e.style.stylePreset,seed:s,textKey:o,negativeKey:d,token:_.token,server:_.server};i=e.isText?await(0,y.F)(t):await(0,y.fO)(t),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.F)(t):await(0,y.fO)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.F)(t):await(0,y.fO)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.F)(t):await(0,y.fO)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.Ip)({...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:o,negativeKey:d,isHD:!0,token:_.tokenNov,server:_.serverNov}):await(0,y.Ip)({...e,base64:"",seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:o,negativeKey:d,isHD:!0,token:_.tokenNov,server:_.serverNov})),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),e.isText,i=await(0,y.Ip)({...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:o,negativeKey:d,isHD:!0,token:_.tokenNov,server:_.serverNov}))}if(e.type===g.Wk.GEN&&"ProGen"!==e.model){const t={...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,textKey:o,negativeKey:d,token:_.tokenNov,server:_.serverNov};i=e.isText?await(0,y.Ip)(t):await(0,y.EQ)(t),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.Ip)(t):await(0,y.EQ)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.Ip)(t):await(0,y.EQ)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,y.Ip)(t):await(0,y.EQ)(t))}if(i&&!i.error){if(0===t&&W(i.data),4===e.samples)switch(t){case 0:Q(i.data);break;case 1:H(i.data);break;case 2:$(i.data);break;case 3:V(i.data)}i.isSuccess&&(a+=parseFloat(e.feeCoin)/e.samples)}}if(z(!1),n){const t=(new Date).toUTCString(),s="".concat(K.dateAds,"_").concat(e.mode,"_ADS_V1_").concat(t);(0,y.TK)({id:K.id,updatedAt:s})}else{const e=parseFloat(s.coins)-a,t=(new Date).toUTCString(),i="".concat(s.coins,"-").concat(a,"=").concat(e,"_Gen_V1_IOS_").concat(t);null===e&&void 0===e||(await(0,y.TK)({id:K.id,coins:e<0?0:e,updatedAt:i}),E({...K,coins:e<0?0:e}))}F(!0)}else e(-1)}catch(r){console.log("Error ",r),z(!1)}},q=(0,i.useCallback)((async()=>{K&&(parseFloat(K.coins)>=parseFloat(D.feeCoin)?Z({isFree:!1}):N(!0))}),[K,D]),Y=(0,i.useCallback)((async()=>{if(K)try{z(!0);const e=(0,j.A)(),s=await(0,y.jH)({data:B,folder:"albums",name:e,isUrl:!!B.includes("http")}),i={id:e,type:D.type,isImage:!0,prompt:D.prompt,negative:D.negative,style:D.style.title,width:D.width,height:D.height,steps:D.steps,scale:D.scale,uri:s};await(0,y.Y4)({id:K.id,data:i}),t({title:"Saved",status:"success",position:"bottom",isClosable:!0,duration:2e3}),z(!1)}catch(e){z(!1)}}),[D,B]),X=C;return(0,k.jsxs)(r.az,{children:[(0,k.jsxs)(n.mg,{children:[(0,k.jsx)("title",{children:"Gen Artistic"}),(0,k.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,k.jsxs)(o.B,{h:"100vh",w:C,pt:20,px:2,justifyContent:"space-between",children:[(0,k.jsxs)(o.B,{flex:1,children:[D&&1===D.samples&&(0,k.jsx)(o.B,{flex:1,justifyContent:"center",children:(0,k.jsx)(m.Kc,{uri:B,width:C,height:C/(D.width/D.height)},B)}),D&&4===D.samples&&!G&&(0,k.jsx)(o.B,{flex:1,justifyContent:"center",children:(0,k.jsxs)(c.x,{templateColumns:"repeat(2, 1fr)",gap:6,children:[(0,k.jsx)(m.Kc,{uri:R,width:X/2,height:X/(D.width/D.height)/2},1),(0,k.jsx)(m.Kc,{uri:U,width:X/2,height:X/(D.width/D.height)/2},2),(0,k.jsx)(m.Kc,{uri:M,width:X/2,height:X/(D.width/D.height)/2},3),(0,k.jsx)(m.Kc,{uri:J,width:X/2,height:X/(D.width/D.height)/2},4)]})}),D&&4===D.samples&&G&&(0,k.jsx)(o.B,{flex:1,justifyContent:"center",children:(0,k.jsxs)(d.z,{spacing:1,children:[(0,k.jsx)(o.B,{w:"10%",children:(0,k.jsxs)(c.x,{templateColumns:"repeat(1, 1fr)",gap:6,children:[(0,k.jsx)(m.Kc,{isActive:B===R,uri:R,width:.2*X/2,height:.2*X/(D.width/D.height)/2,onPress:()=>{W(R)}},1),(0,k.jsx)(m.Kc,{isActive:B===U,uri:U,width:.2*X/2,height:.2*X/(D.width/D.height)/2,onPress:()=>{W(U)}},2),(0,k.jsx)(m.Kc,{isActive:B===M,uri:M,width:.2*X/2,height:.2*X/(D.width/D.height)/2,onPress:()=>{W(M)}},3),(0,k.jsx)(m.Kc,{isActive:B===J,uri:J,width:.2*X/2,height:.2*X/(D.width/D.height)/2,onPress:()=>{W(J)}},4)]})}),(0,k.jsx)(o.B,{w:"90%",children:(0,k.jsx)(m.Kc,{uri:B,width:.8*X,height:.8*X/(D.width/D.height)},B)})]})})]}),(0,k.jsx)(o.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,k.jsxs)(d.z,{spacing:2,children:[(0,k.jsx)(l.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:q,leftIcon:(0,k.jsx)(h.I,{as:v.aO_}),flex:1,children:(0,k.jsx)(d.z,{children:(0,k.jsx)(x.E,{color:"white",fontSize:16,fontWeight:"700",children:"Re-Create"})})}),(0,k.jsx)(l.$,{flex:1,py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",onClick:Y,leftIcon:(0,k.jsx)(h.I,{as:S.gWm}),children:(0,k.jsx)(d.z,{children:(0,k.jsx)(x.E,{color:"white",fontSize:16,fontWeight:"700",children:"Save"})})})]})})]}),(0,k.jsx)(b.SlideAds,{isOpen:T,onClose:()=>N(!T),onPressPay:()=>{N(!1),e(A.W.PAYMENT)},onPressAds:()=>{N(!1),Z({isFree:!0})}}),(0,k.jsx)(w.aj,{isOpen:P})]})}},9703:(e,t,s)=>{s.d(t,{q:()=>h});var i=s(4850),n=s(7681),a=s(3291),r=s(1489),o=s(9950),c=s(4414),d={exit:{duration:.15,ease:i.xf.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},l={exit:e=>{let{direction:t,transition:s,transitionEnd:n,delay:a}=e;var r;const{exit:o}=(0,i.Jv)({direction:t});return{...o,transition:null!=(r=null==s?void 0:s.exit)?r:i.yA.exit(d.exit,a),transitionEnd:null==n?void 0:n.exit}},enter:e=>{let{direction:t,transitionEnd:s,transition:n,delay:a}=e;var r;const{enter:o}=(0,i.Jv)({direction:t});return{...o,transition:null!=(r=null==n?void 0:n.enter)?r:i.yA.enter(d.enter,a),transitionEnd:null==s?void 0:s.enter}}},h=(0,o.forwardRef)((function(e,t){const{direction:s="right",style:o,unmountOnExit:d,in:h,className:x,transition:u,transitionEnd:p,delay:w,motionProps:y,...g}=e,f=(0,i.Jv)({direction:s}),j=Object.assign({position:"fixed"},f.position,o),m=!d||h&&d,v=h||d?"enter":"exit",S={transitionEnd:p,transition:u,direction:s,delay:w};return(0,c.jsx)(a.N,{custom:S,children:m&&(0,c.jsx)(r.P.div,{...g,ref:t,initial:"exit",className:(0,n.cx)("chakra-slide",x),animate:v,exit:"exit",custom:S,variants:l,style:j,...y})})}));h.displayName="Slide"}}]);