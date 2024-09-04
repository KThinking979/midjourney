"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[5946],{1432:(e,t,s)=>{s.d(t,{g:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(9187),s.e(1789)]).then(s.bind(s,1789))),(e=>e.AspectRatio))},3289:(e,t,s)=>{s.d(t,{V:()=>i});const i=(0,s(4451).j)((()=>s.e(8937).then(s.bind(s,8937))),(e=>e.ImageNumber))},305:(e,t,s)=>{s.d(t,{l:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(2096),s.e(8951),s.e(9886),s.e(625)]).then(s.bind(s,625))),(e=>e.InputTextArea))},6067:(e,t,s)=>{s.d(t,{T:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(9187),s.e(73)]).then(s.bind(s,73))),(e=>e.RadioAdv))},2863:(e,t,s)=>{s.d(t,{R:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(3676),s.e(6924),s.e(3489)]).then(s.bind(s,3489))),(e=>e.SliderAdv))},5946:(e,t,s)=>{s.r(t),s.d(t,{TextArtisticPage:()=>W});var i=s(9950),n=s(6455),o=s(2099),a=s(3247),l=s(1389),r=s(5168),d=s(4745),c=s(2666),h=s(4418),p=s(1317),u=s(3159),m=s(6171),x=s(1374),g=s(6086),j=s(6569),f=s(5236),S=s(4456),w=s(3564),b=s(3246),y=s(8555),C=s(305),v=s(1432),A=s(3289),k=s(2863),I=s(6067),N=(s(712),s(3124)),z=s(4414);let R=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const W=()=>{(0,w.Zp)(),(0,o.d)();const e=(0,w.zy)().state,{user:t,configs:W,listAIStyleAll:H}=(0,i.useContext)(f.rf),[P,_]=(0,i.useState)(!1),[B,T]=(0,i.useState)(!1),[D,E]=(0,i.useState)(!1),[G,F]=(0,i.useState)(!1),[O,M]=(0,i.useState)(W&&W.feeBasic?W.feeBasic:1),[V,L]=(0,i.useState)([]),[Q,J]=(0,i.useState)([]),[K,X]=(0,i.useState)(),[Z,$]=(0,i.useState)(W.models[0]),[q,U]=(0,i.useState)(e&&e.dataAI?e.dataAI.textKey:""),[Y,ee]=(0,i.useState)(""),[te,se]=(0,i.useState)(),[ie,ne]=(0,i.useState)(),[oe,ae]=(0,i.useState)(30),[le,re]=(0,i.useState)(6),[de,ce]=(0,i.useState)(-1),[he,pe]=(0,i.useState)(!0),[ue,me]=(0,i.useState)(),[xe,ge]=(0,i.useState)(70),[je,fe]=(0,i.useState)();(0,i.useEffect)((()=>{window.scrollTo(0,0),Se()}),[]);const Se=async()=>{if(H&&H.listAIStyleGen){const e=H.listAIStyleGen.filter(((e,t)=>t<6));J(H.listAIStyleGen),X(e[1]),L(e)}W&&(W.listRatios&&se(W.listRatios[0]),W.samples&&ne(W.samples[0]))};(0,i.useEffect)((()=>{oe&&te&&ie&&Z&&we()}),[oe,te,ie,Z,he]);const we=()=>{if(W){let e=W.feeBasic;switch(oe){case 15:e=te._step15;break;case 30:e=te._step30;break;case 60:e=te._step60;break;case 90:e=te._step90;break;case 120:e=te._step120;break;case 150:e=te._step150}Z.isNov&&he&&(e+=W.feeHD),e*=ie.samples,M(e)}};return(0,z.jsxs)(a.az,{children:[(0,z.jsxs)(n.mg,{children:[(0,z.jsx)("title",{children:"Text Artistic"}),(0,z.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,z.jsx)(l.B,{h:"100vh",w:R,py:20,px:2,children:(0,z.jsxs)(l.B,{spacing:4,pb:40,children:[(0,z.jsx)(y.X,{styleShows:V,styles:Q,style:K,modelDefault:Z.title,onChangeModel:e=>{$(e)},onPressItem:e=>{const t=V.find((t=>t.title===e.title));V[1]=t?Q[1]:e,X(e)},onPressSearch:e=>{const t=Q.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())));J(t)}}),(0,z.jsxs)(l.B,{children:[(0,z.jsx)(C.l,{title:"Prompt Idea",placeholder:"What do you want to see?",isRandom:!0,isShow:!0,value:q,h:28,onChange:e=>{U(e)}}),(0,z.jsx)(C.l,{title:"Negative",placeholder:"What do you want to void?",value:Y,onChange:e=>{ee(e)}})]}),(0,z.jsx)(v.g,{title:"Aspect Ratio",value:te,isShowHD:!(!Z||!Z.isNov),isHD:he,onChangeHD:()=>{pe(!he)},onChange:e=>{se(e)}}),(0,z.jsx)(A.V,{title:"Image Number",value:ie,onChange:e=>{ne(e)}}),(0,z.jsx)(l.B,{display:Q.length?"flex":"none",children:(0,z.jsx)(r.n,{allowMultiple:!0,allowToggle:!0,children:(0,z.jsxs)(d.A,{borderWidth:0,borderEndWidth:0,borderColor:"transparent",children:[(0,z.jsx)(c.J,{padding:0,py:2,children:(0,z.jsxs)(h.z,{w:"100%",justifyContent:"space-between",mb:4,children:[(0,z.jsx)(p.E,{color:"white",fontSize:16,fontWeight:"700",children:"Advanced Setting"}),(0,z.jsx)(u.Q,{color:"white"})]})}),(0,z.jsx)(m.v,{pb:4,borderWidth:0,padding:0,children:(0,z.jsxs)(l.B,{spacing:6,children:[(0,z.jsx)(k.R,{title:"Step:",description:"How many steps to spend generating (diffusing) your image.",min:30,max:150,step:30,value:oe,onChange:e=>{ae(e)}}),(0,z.jsx)(k.R,{title:"Scale:",description:"Scale adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt...",min:0,max:30,step:2,value:le,onChange:e=>{re(e)}}),(0,z.jsx)(I.T,{title:"Seed:",description:"Random noise seed (omit this option or use 0 for a random seed)",value:de,onChange:e=>{ce(e)}})]})})]})})})]})}),(0,z.jsx)(l.B,{pb:2,spacing:4,flex:1,justifyContent:"center",pos:"fixed",bottom:0,w:"full",zIndex:999,backgroundColor:"black",children:(0,z.jsx)(x.$,{maxWidth:"500px",py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",isDisabled:""===q,onClick:async()=>{if(t)if(t&&parseFloat(t.coins)>=O){let e=512,t=512,s=1;te&&(Z.isNov?(e=te.w,t=te.h,s=2):(e=te._w,t=te._h));let i={model:Z.name,type:S.Wk.GEN,isFree:!1,isText:!0,isCreate:!0,image:ue,strength:xe/100,prompt:q,negative:Y,style:K,size:s,width:e,height:t,samples:ie.samples,steps:oe,scale:le,seed:de,isHD:he,isControl:!1,controlNets:W.controlNetHigh,feeCoin:O,base:{}};fe(i),F(!0)}else T(!0)},children:(0,z.jsxs)(h.z,{children:[(0,z.jsx)(p.E,{color:"white",fontSize:16,fontWeight:"700",children:"Create"}),(0,z.jsxs)(h.z,{spacing:1,children:[(0,z.jsx)(p.E,{color:"white",fontSize:16,children:(new Intl.NumberFormat).format(O)}),(0,z.jsx)(g.o,{children:(0,z.jsx)(j._,{boxSize:"16px",src:s(2975),alt:"card"})})]})]})})}),(0,z.jsx)(N.s,{isOpen:B,onClose:()=>T(!B),onPressPay:()=>{T(!1),E(!0)},onPressAds:()=>{T(!1),(async()=>{if(!t)return;let e=512,s=512,i=1;te&&(Z.isNov?(e=te.w,s=te.h,i=2):(e=te._w,s=te._h));let n={model:Z.name,type:S.Wk.GEN,isFree:!0,isText:!0,isCreate:!0,image:ue,strength:xe/100,prompt:q,negative:Y,style:K,size:i,width:e,height:s,samples:1,steps:30,scale:le,seed:de,isHD:he,isControl:!1,controlNets:W.controlNetHigh,feeCoin:O,base:{}};fe(n),F(!0)})()}}),(0,z.jsx)(b.QV,{isOpen:D,onClose:()=>{E(!1)}}),je&&(0,z.jsx)(b.R0,{isOpen:G,dataAI:je,onClose:()=>{F(!1)}}),(0,z.jsx)(b.aj,{isOpen:P})]})}}}]);