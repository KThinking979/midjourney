"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[176],{1940:(e,t,s)=>{s.d(t,{Kc:()=>n,MF:()=>a,nn:()=>r});var i=s(4451);const a=(0,i.j)((()=>s.e(465).then(s.bind(s,465))),(e=>e.ImageFast)),r=(0,i.j)((()=>s.e(606).then(s.bind(s,9606))),(e=>e.ImageSkeleton)),n=(0,i.j)((()=>s.e(613).then(s.bind(s,2613))),(e=>e.ImageSkeletonShow))},176:(e,t,s)=>{s.r(t),s.d(t,{ModalGenArt:()=>D});var i=s(9950),a=s(2099),r=s(4521),n=s(2463),o=s(2505),c=s(4787),h=s(3247),l=s(4418),d=s(393),w=s(1317),p=s(6569),y=s(1389),x=s(2481),u=s(1374),g=s(5236),v=s(3246),f=s(1940),j=s(5495),m=s(712),S=s(4456),k=s(9591),K=s(7385),I=s(3124),C=s(7956),b=s(2096),_=s(4414);let N=window.innerWidth>500?500:window.innerWidth,F=!1;const D=e=>{let{isOpen:t,onClose:D,dataAI:T}=e;const P=(0,a.d)(),{user:z,configs:E}=(0,i.useContext)(g.rf),{setUser:A}=(0,i.useContext)(g.D8),[W,O]=(0,i.useState)(!1),[R,B]=(0,i.useState)(!1),[V,G]=(0,i.useState)(!1),[H,U]=(0,i.useState)(!1),[Q,L]=(0,i.useState)(),[$,M]=(0,i.useState)(""),[Y,Z]=(0,i.useState)(""),[q,J]=(0,i.useState)(""),[X,ee]=(0,i.useState)(""),[te,se]=(0,i.useState)("");(0,i.useEffect)((()=>{window.scrollTo(0,0),z&&T&&t&&ie({isFree:T.isFree})}),[T,t]);const ie=async e=>{let t,{isFree:s}=e;F=!1;let i=0;try{if(z&&T){const e=z;O(!0),B(!1),L(T),M(""),Z(""),J(""),ee(""),se("");const a=T.style?T.style.key:"";let r="".concat(a.replace("{prompt}",T.prompt));const n=T.style?T.style.negativeKey:"",o="".concat(T.negativeKey," ").concat(n);if(s||!s&&parseFloat(e.coins)>=parseFloat(T.feeCoin))for(let s=0;s<T.samples&&!F;s++){let e=T.seed;if(-1===T.seed&&(e=(0,K.RZ)({min:0,max:S.Vm})),T.type===S.Wk.GEN_SD3){const s={...T,stylePreset:T.style.stylePreset,aspectRatio:T.aspectRatio.title,seed:e,textKey:r,negativeKey:o,token:E.token,server:E.serverSD3};t=await(0,m.DS)(s),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=await(0,m.DS)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=await(0,m.DS)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=await(0,m.DS)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.Ip)({...T,seed:e,steps:20*T.steps/30,width:T.width,height:T.height,model:"dreamshaper_8_93211.safetensors",textKey:r,negativeKey:o,isHD:!1,token:E.tokenNov,server:E.serverNov}):await(0,m.Ip)({...T,base64:"",seed:e,steps:20*T.steps/30,width:T.width,height:T.height,model:"dreamshaper_8_93211.safetensors",textKey:r,negativeKey:o,isHD:!1,token:E.tokenNov,server:E.serverNov})),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),T.isText,t=await(0,m.Ip)({...T,seed:e,steps:20*T.steps/30,width:T.width,height:T.height,model:"dreamshaper_8_93211.safetensors",textKey:r,negativeKey:o,isHD:!0,token:E.tokenNov,server:E.serverNov}))}if(T.type===S.Wk.GEN_CORE){const s={...T,stylePreset:T.style.stylePreset,aspectRatio:T.aspectRatio.title,seed:e,textKey:r,negativeKey:o,token:E.token,server:E.serverSD3};t=await(0,m.Kh)(s)}if(T.type===S.Wk.GEN_ULTRA){const s={...T,stylePreset:T.style.stylePreset,aspectRatio:T.aspectRatio.title,seed:e,textKey:r,negativeKey:o,token:E.token,server:E.serverSD3};t=await(0,m.jV)(s)}if(T.type===S.Wk.GEN&&"ProGen"===T.model){const s={...T,stylePreset:T.style.stylePreset,seed:e,textKey:r,negativeKey:o,token:E.token,server:E.server};t=T.isText?await(0,m.F)(s):await(0,m.fO)(s),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.F)(s):await(0,m.fO)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.F)(s):await(0,m.fO)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.F)(s):await(0,m.fO)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.Ip)({...T,seed:e,steps:20*T.steps/30,width:T.width,height:T.height,model:"dreamshaper_8_93211.safetensors",textKey:r,negativeKey:o,isHD:!0,token:E.tokenNov,server:E.serverNov}):await(0,m.Ip)({...T,base64:"",seed:e,steps:20*T.steps/30,width:T.width,height:T.height,model:"dreamshaper_8_93211.safetensors",textKey:r,negativeKey:o,isHD:!0,token:E.tokenNov,server:E.serverNov})),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),T.isText,t=await(0,m.Ip)({...T,seed:e,steps:20*T.steps/30,width:T.width,height:T.height,model:"dreamshaper_8_93211.safetensors",textKey:r,negativeKey:o,isHD:!1,token:E.tokenNov,server:E.serverNov}))}if(T.type===S.Wk.GEN&&"ProGen"!==T.model){const s={...T,seed:e,steps:20*T.steps/30,width:T.width,height:T.height,textKey:r,negativeKey:o,token:E.tokenNov,server:E.serverNov};t=T.isText?await(0,m.Ip)(s):await(0,m.EQ)(s),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.Ip)(s):await(0,m.EQ)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.Ip)(s):await(0,m.EQ)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=T.isText?await(0,m.Ip)(s):await(0,m.EQ)(s))}if(T.type===S.Wk.ILLUSION){const s={...T,seed:e,steps:20*T.steps/30,width:T.width,height:T.height,textKey:r,negativeKey:o,token:E.tokenNov,server:E.isIllusionV3?E.serverNov3:E.serverNov};t=E.isIllusionV3?await(0,m.aB)(s):await(0,m.v7)(s),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=E.isIllusionV3?await(0,m.aB)(s):await(0,m.v7)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=E.isIllusionV3?await(0,m.aB)(s):await(0,m.v7)(s)),!t.error&&t.isSuccess||(await(0,K.yy)(1e3),t=E.isIllusionV3?await(0,m.aB)(s):await(0,m.v7)(s))}if(t&&!t.error){if(0===s&&M(t.data),4===T.samples)switch(s){case 0:Z(t.data);break;case 1:J(t.data);break;case 2:ee(t.data);break;case 3:se(t.data)}t.isSuccess&&(i+=parseFloat(T.feeCoin)/T.samples)}}if(O(!1),s){const e=(new Date).toUTCString(),t="".concat(z.dateAds,"_").concat(T.mode,"_ADS_V1_").concat(e);(0,m.TK)({id:z.id,updatedAt:t})}else{const t=parseFloat(e.coins)-i,s=(new Date).toUTCString(),a="".concat(e.coins,"-").concat(i,"=").concat(t,"_Gen_V1_IOS_").concat(s);null===t&&void 0===t||(await(0,m.TK)({id:z.id,coins:t<0?0:t,updatedAt:a}),A({...z,coins:t<0?0:t}))}B(!0)}else D&&D()}catch(a){console.log("Error ",a),O(!1)}},ae=(0,i.useCallback)((async()=>{z&&(parseFloat(z.coins)>=parseFloat(Q.feeCoin)?ie({isFree:!1}):G(!0))}),[z,Q]),re=(0,i.useCallback)((async()=>{if(z)try{O(!0);const e=(0,C.A)(),t=await(0,m.jH)({data:$,folder:"albums",name:e,isUrl:!!$.includes("http")}),s={id:e,type:Q.type,isImage:!0,prompt:Q.prompt,negative:Q.negative,style:Q.style.title,width:Q.width,height:Q.height,steps:Q.steps,scale:Q.scale,uri:t};await(0,m.Y4)({id:z.id,data:s}),P({title:"Saved",status:"success",position:"top",isClosable:!0}),O(!1)}catch(e){O(!1)}}),[Q,$]),ne=N;return(0,_.jsxs)(r.aF,{onClose:D,isOpen:t,size:"full",children:[(0,_.jsx)(n.m,{}),(0,_.jsx)(o.$,{backgroundColor:"black",zIndex:9999,children:(0,_.jsxs)(c.c,{p:0,children:[(0,_.jsx)(h.az,{transition:"0.9s ease",pos:"fixed",top:0,w:"full",zIndex:999,children:(0,_.jsxs)(l.z,{flex:1,p:2,justifyContent:"space-between",w:"full",minH:"40px",children:[(0,_.jsx)(d.I,{as:b.m6W,boxSize:7,padding:0,color:"white",zIndex:999,onClick:()=>{D&&D()}}),(0,_.jsxs)(l.z,{alignItems:"center",justifyContent:"center",children:[(0,_.jsx)(w.E,{fontSize:"18px",fontWeight:500,lineHeight:"17px",letterSpacing:"0.5px",color:"white",textAlign:"center",children:z&&z.coins?(new Intl.NumberFormat).format(z.coins):0}),(0,_.jsx)(p._,{borderRadius:"full",boxSize:"20px",src:s(2975),alt:"coin"})]})]})}),(0,_.jsxs)(y.B,{h:"100vh",w:N,pt:20,px:2,justifyContent:"space-between",children:[(0,_.jsxs)(y.B,{flex:1,children:[Q&&1===Q.samples&&(0,_.jsx)(y.B,{flex:1,justifyContent:"center",children:(0,_.jsx)(f.Kc,{uri:$,width:N,height:N/(Q.width/Q.height)},$)}),Q&&4===Q.samples&&!R&&(0,_.jsx)(y.B,{flex:1,justifyContent:"center",children:(0,_.jsxs)(x.x,{templateColumns:"repeat(2, 1fr)",gap:6,children:[(0,_.jsx)(f.Kc,{uri:Y,width:ne/2,height:ne/(Q.width/Q.height)/2},1),(0,_.jsx)(f.Kc,{uri:q,width:ne/2,height:ne/(Q.width/Q.height)/2},2),(0,_.jsx)(f.Kc,{uri:X,width:ne/2,height:ne/(Q.width/Q.height)/2},3),(0,_.jsx)(f.Kc,{uri:te,width:ne/2,height:ne/(Q.width/Q.height)/2},4)]})}),Q&&4===Q.samples&&R&&(0,_.jsx)(y.B,{flex:1,justifyContent:"center",children:(0,_.jsxs)(l.z,{spacing:1,children:[(0,_.jsx)(y.B,{w:"10%",children:(0,_.jsxs)(x.x,{templateColumns:"repeat(1, 1fr)",gap:6,children:[(0,_.jsx)(f.Kc,{isActive:$===Y,uri:Y,width:.2*ne/2,height:.2*ne/(Q.width/Q.height)/2,onPress:()=>{M(Y)}},1),(0,_.jsx)(f.Kc,{isActive:$===q,uri:q,width:.2*ne/2,height:.2*ne/(Q.width/Q.height)/2,onPress:()=>{M(q)}},2),(0,_.jsx)(f.Kc,{isActive:$===X,uri:X,width:.2*ne/2,height:.2*ne/(Q.width/Q.height)/2,onPress:()=>{M(X)}},3),(0,_.jsx)(f.Kc,{isActive:$===te,uri:te,width:.2*ne/2,height:.2*ne/(Q.width/Q.height)/2,onPress:()=>{M(te)}},4)]})}),(0,_.jsx)(y.B,{w:"90%",children:(0,_.jsx)(f.Kc,{uri:$,width:.8*ne,height:.8*ne/(Q.width/Q.height)},$)})]})})]}),(0,_.jsx)(y.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,_.jsxs)(l.z,{spacing:2,children:[(0,_.jsx)(u.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:ae,leftIcon:(0,_.jsx)(d.I,{as:k.aO_}),flex:1,children:(0,_.jsx)(l.z,{children:(0,_.jsx)(w.E,{color:"white",fontSize:16,fontWeight:"700",children:"Re-Create"})})}),(0,_.jsx)(u.$,{flex:1,py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",onClick:re,leftIcon:(0,_.jsx)(d.I,{as:j.gWm}),children:(0,_.jsx)(l.z,{children:(0,_.jsx)(w.E,{color:"white",fontSize:16,fontWeight:"700",children:"Save"})})})]})})]}),(0,_.jsx)(I.s,{isOpen:V,onClose:()=>G(!V),onPressPay:()=>{G(!1),U(!0)},onPressAds:()=>{G(!1),ie({isFree:!0})}}),(0,_.jsx)(v.QV,{isOpen:H,onClose:()=>{U(!1)}}),(0,_.jsx)(v.aj,{isOpen:W})]})})]})}}}]);