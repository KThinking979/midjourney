"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[589],{1940:(e,t,s)=>{s.d(t,{Kc:()=>a,MF:()=>n,nn:()=>o});var i=s(4451);const n=(0,i.j)((()=>s.e(465).then(s.bind(s,465))),(e=>e.ImageFast)),o=(0,i.j)((()=>s.e(606).then(s.bind(s,9606))),(e=>e.ImageSkeleton)),a=(0,i.j)((()=>s.e(613).then(s.bind(s,2613))),(e=>e.ImageSkeletonShow))},3246:(e,t,s)=>{s.d(t,{a:()=>n});var i=s(4451);const n=(0,i.j)((()=>Promise.all([s.e(545),s.e(825)]).then(s.bind(s,825))),(e=>e.ModalLoading));(0,i.j)((()=>Promise.all([s.e(226),s.e(96),s.e(291),s.e(545),s.e(712),s.e(647)]).then(s.bind(s,7647))),(e=>e.ModalPayment))},1589:(e,t,s)=>{s.r(t),s.d(t,{GenArtisticPage:()=>W});var i=s(9950),n=s(6455),o=s(2099),a=s(3247),c=s(1389),r=s(2481),l=s(4418),h=s(1374),d=s(393),u=s(1317),p=s(5236),g=s(3564),x=s(3246),j=s(712),w=s(4456),f=s(7385),m=s(7956),y=s(1940),S=s(9591),k=s(5495),C=s(9703),v=s(6365),A=s(327),b=s(4414);const I=e=>{let{isOpen:t,onPressPay:s,onPressAds:n,onClose:o}=e;const{user:a,configs:r}=(0,i.useContext)(p.rf),{setUser:g}=(0,i.useContext)(p.D8),[x,w]=(0,i.useState)(a&&a.numAdsGen?a.numAdsGen:1);return(0,b.jsxs)(C.q,{direction:"bottom",in:t,style:{zIndex:1e3,height:"100%",flex:1},children:[(0,b.jsx)(c.B,{onClick:()=>o&&o(),h:"70%",opacity:.8,backgroundColor:"black"}),(0,b.jsxs)(c.B,{h:"30%",padding:2,spacing:4,backgroundColor:"gray.800",justifyContent:"center",children:[(0,b.jsx)(h.$,{colorScheme:"green",borderRadius:"full",size:"md",onClick:()=>s&&s(),leftIcon:(0,b.jsx)(d.I,{as:v.jXZ,boxSize:6}),children:(0,b.jsx)(l.z,{children:(0,b.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Buy Coins"})})}),(0,b.jsx)(u.E,{color:"white",fontSize:14,textAlign:"center",children:"Or"}),(0,b.jsx)(h.$,{colorScheme:"red",size:"md",borderRadius:"full",onClick:async()=>{const e=Object.keys(r.ADS).length,t=x<=e?r.ADS["".concat(x)]:r.ADS["".concat(x%e===0?e:x%e)];window.Adsgram.init({blockId:t}).show().then((e=>{let t=x+1;(0,j.TK)({id:a.id,numAdsGen:t}),g({...a,numAdsGen:t}),w(t),n&&n()})).catch((e=>{console.log("result ",e)}))},leftIcon:(0,b.jsx)(d.I,{as:A.I1Q,boxSize:6}),children:(0,b.jsx)(l.z,{children:(0,b.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Watch Ads"})})})]})]})};var K=s(8412);let z=window.innerWidth>500?500:window.innerWidth,P=!1;const W=()=>{const e=(0,g.Zp)(),t=(0,o.d)(),s=(0,g.zy)(),{user:C,configs:v,listAIStyleAll:A}=(0,i.useContext)(p.rf),{setUser:W}=(0,i.useContext)(p.D8),[F,_]=(0,i.useState)(!1),[E,G]=(0,i.useState)(!1),[D,B]=(0,i.useState)(!1),[N,O]=(0,i.useState)(!1),[T,R]=(0,i.useState)(!1),[U,M]=(0,i.useState)(!1),[$,H]=(0,i.useState)(!1),[V,Z]=(0,i.useState)(),[Y,q]=(0,i.useState)(""),[L,Q]=(0,i.useState)(""),[X,J]=(0,i.useState)(""),[ee,te]=(0,i.useState)(""),[se,ie]=(0,i.useState)("");(0,i.useEffect)((()=>{window.scrollTo(0,0);const e=s.state;C&&e&&e.dataAI&&ne({isFree:e.dataAI.isFree})}),[]);const ne=async t=>{let i,{isFree:n}=t;P=!1;let o=0;try{const t=s.state;if(C&&t&&t.dataAI){const e=t.dataAI,s=C;_(!0),B(!1),Z(e),q(""),Q(""),J(""),te(""),ie("");const a=e.style?e.style.key:"";let c="".concat(a.replace("{prompt}",e.prompt));const r=e.style?e.style.negativeKey:"",l="".concat(e.negativeKey," ").concat(r);if((n||!n&&parseFloat(s.coins)>=parseFloat(e.feeCoin))&&e.type===w.Wk.GEN)for(let t=0;t<e.samples&&!P;t++){let s=e.seed;if(-1===e.seed&&(s=(0,f.RZ)({min:0,max:w.Vm})),console.log("dataAI.model ",e.model),e.type===w.Wk.GEN&&"ProGen"===e.model){v.token,v.server;i={data:w.EW,isSuccess:!0},await(0,f.yy)(3e3),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=await(0,j.Ip)({...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:c,negativeKey:l,isUpHD:!0,token:v.tokenNov,server:v.serverNov})),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=await(0,j.Ip)({...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:c,negativeKey:l,isUpHD:!0,token:v.tokenNov,server:v.serverNov}))}if(e.type===w.Wk.GEN&&"ProGen"!==e.model){const t={...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,textKey:c,negativeKey:l,token:v.tokenNov,server:v.serverNov};i=await(0,j.Ip)(t)}if(i&&!i.error){if(0===t&&q(i.data),4===e.samples)switch(t){case 0:Q(i.data);break;case 1:J(i.data);break;case 2:te(i.data);break;case 3:ie(i.data)}i.isSuccess&&(o+=parseFloat(e.feeCoin)/e.samples)}}if(_(!1),n){const t=(new Date).toUTCString(),s="".concat(C.dateAds,"_").concat(e.mode,"_ADS_V1_").concat(t);(0,j.TK)({id:C.id,updatedAt:s})}else{const e=parseFloat(s.coins)-o,t=(new Date).toUTCString(),i="".concat(s.coins,"-").concat(o,"=").concat(e,"_Gen_V1_IOS_").concat(t);null===e&&void 0===e||(await(0,j.TK)({id:C.id,coins:e<0?0:e,updatedAt:i}),W({...C,coins:e<0?0:e}))}B(!0)}else e(-1)}catch(a){console.log("Error ",a),_(!1)}},oe=(0,i.useCallback)((async()=>{C&&(parseFloat(C.coins)>=parseFloat(V.feeCoin)?ne({isFree:!0}):O(!0))}),[C,V]),ae=(0,i.useCallback)((async()=>{if(!C)return;console.log("Start"),_(!0);const e=(0,m.A)(),s=await(0,j.jH)({data:Y,folder:"albums",name:e}),i={id:e,type:V.type,isImage:!0,prompt:V.prompt,negative:V.negative,style:V.style.title,width:V.width,height:V.height,steps:V.steps,scale:V.scale,uri:s};await(0,j.Y4)({id:C.id,data:i}),t({title:"Saved",status:"success",position:"top",isClosable:!0}),_(!1),console.log("Done")}),[V,Y]),ce=z;return(0,b.jsxs)(a.az,{children:[(0,b.jsxs)(n.mg,{children:[(0,b.jsx)("title",{children:"Gen Artistic"}),(0,b.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,b.jsxs)(c.B,{h:"100vh",w:z,pt:20,px:2,justifyContent:"space-between",children:[V&&1===V.samples&&(0,b.jsx)(c.B,{flex:1,justifyContent:"center",children:(0,b.jsx)(y.Kc,{uri:Y,width:z,height:z/(V.width/V.height)},Y)}),V&&4===V.samples&&!D&&(0,b.jsx)(c.B,{flex:1,justifyContent:"center",children:(0,b.jsxs)(r.x,{templateColumns:"repeat(2, 1fr)",gap:6,children:[(0,b.jsx)(y.Kc,{uri:L,width:ce/2,height:ce/(V.width/V.height)/2},1),(0,b.jsx)(y.Kc,{uri:X,width:ce/2,height:ce/(V.width/V.height)/2},2),(0,b.jsx)(y.Kc,{uri:ee,width:ce/2,height:ce/(V.width/V.height)/2},3),(0,b.jsx)(y.Kc,{uri:se,width:ce/2,height:ce/(V.width/V.height)/2},4)]})}),V&&4===V.samples&&D&&(0,b.jsx)(c.B,{flex:1,justifyContent:"center",children:(0,b.jsxs)(l.z,{spacing:1,children:[(0,b.jsx)(c.B,{w:"10%",children:(0,b.jsxs)(r.x,{templateColumns:"repeat(1, 1fr)",gap:6,children:[(0,b.jsx)(y.Kc,{isActive:Y===L,uri:L,width:.2*ce/2,height:.2*ce/(V.width/V.height)/2,onPress:()=>{q(L)}},1),(0,b.jsx)(y.Kc,{isActive:Y===X,uri:X,width:.2*ce/2,height:.2*ce/(V.width/V.height)/2,onPress:()=>{q(X)}},2),(0,b.jsx)(y.Kc,{isActive:Y===ee,uri:ee,width:.2*ce/2,height:.2*ce/(V.width/V.height)/2,onPress:()=>{q(ee)}},3),(0,b.jsx)(y.Kc,{isActive:Y===se,uri:se,width:.2*ce/2,height:.2*ce/(V.width/V.height)/2,onPress:()=>{q(se)}},4)]})}),(0,b.jsx)(c.B,{w:"90%",children:(0,b.jsx)(y.Kc,{uri:Y,width:.8*ce,height:.8*ce/(V.width/V.height)},Y)})]})}),(0,b.jsx)(c.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,b.jsxs)(l.z,{spacing:2,children:[(0,b.jsx)(h.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:oe,leftIcon:(0,b.jsx)(d.I,{as:S.aO_}),flex:1,children:(0,b.jsx)(l.z,{children:(0,b.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Re-Create"})})}),(0,b.jsx)(h.$,{flex:1,py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",onClick:ae,leftIcon:(0,b.jsx)(d.I,{as:k.gWm}),children:(0,b.jsx)(l.z,{children:(0,b.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Save"})})})]})})]}),(0,b.jsx)(I,{isOpen:N,onClose:()=>O(!N),onPressPay:()=>{O(!1),e(K.W.PAYMENT)},onPressAds:()=>{O(!1),ne({isFree:!1})}}),(0,b.jsx)(x.a,{isOpen:F})]})}}}]);