"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[449],{1432:(e,t,s)=>{s.d(t,{g:()=>i});const i=(0,s(4451).j)((()=>s.e(873).then(s.bind(s,1873))),(e=>e.AspectRatio))},3289:(e,t,s)=>{s.d(t,{V:()=>i});const i=(0,s(4451).j)((()=>s.e(937).then(s.bind(s,8937))),(e=>e.ImageNumber))},305:(e,t,s)=>{s.d(t,{l:()=>i});const i=(0,s(4451).j)((()=>s.e(867).then(s.bind(s,5248))),(e=>e.InputTextArea))},8555:(e,t,s)=>{s.d(t,{X:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(327),s.e(28),s.e(285),s.e(146)]).then(s.bind(s,8146))),(e=>e.ListAIStyles))},3246:(e,t,s)=>{s.d(t,{a:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(545),s.e(825)]).then(s.bind(s,825))),(e=>e.ModalLoading))},7961:(e,t,s)=>{s.d(t,{M:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(327),s.e(275),s.e(608)]).then(s.bind(s,608))),(e=>e.PickerImage))},6067:(e,t,s)=>{s.d(t,{T:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(386),s.e(559)]).then(s.bind(s,559))),(e=>e.RadioAdv))},2863:(e,t,s)=>{s.d(t,{R:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(28),s.e(647)]).then(s.bind(s,5028))),(e=>e.SliderAdv))},7449:(e,t,s)=>{s.r(t),s.d(t,{SD3ArtisticPage:()=>z});var i=s(9950),n=s(6455),a=s(2099),l=s(3247),o=s(1389),r=s(5168),d=s(4745),c=s(2666),h=s(4418),p=s(1317),u=s(3159),m=s(6171),g=s(1374),x=s(6086),j=s(6569),S=s(5236),f=s(4456),w=s(3564),b=s(3246),y=s(8555),C=s(305),v=s(1432),A=s(3289),I=s(2863),k=s(6067),P=s(7961),R=s(8412),W=s(4414);let _=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const z=()=>{const e=(0,w.Zp)(),{user:t,configs:z,listAIStyleAll:B}=((0,a.d)(),(0,i.useContext)(S.rf)),[N,D]=(0,i.useState)(!1),[E,T]=(0,i.useState)(z&&z.feeBasic?z.feeBasic:1),[G,M]=(0,i.useState)([]),[H,L]=(0,i.useState)([]),[F,V]=(0,i.useState)(),[U,X]=(0,i.useState)("ProGen"),[J,O]=(0,i.useState)(""),[Q,Z]=(0,i.useState)(""),[$,q]=(0,i.useState)(),[K,Y]=(0,i.useState)(),[ee,te]=(0,i.useState)(30),[se,ie]=(0,i.useState)(6),[ne,ae]=(0,i.useState)(-1),[le,oe]=(0,i.useState)(),[re,de]=(0,i.useState)(70);(0,i.useEffect)((()=>{ce()}),[]);const ce=async()=>{if(B&&B.listAIStyleGenSD3){const e=B.listAIStyleGenSD3.filter(((e,t)=>t<6));L(B.listAIStyleGenSD3),V(e[1]),M(e)}z&&(z.listRatios&&q(z.listRatios[0]),z.samples&&Y(z.samples[0]))};(0,i.useEffect)((()=>{ee&&$&&K&&U&&he()}),[ee,$,K,U]);const he=()=>{if(z){let e=z.feeBasic;switch(ee){case 15:e=$._step15;break;case 30:e=$._step30;break;case 60:e=$._step60;break;case 90:e=$._step90;break;case 120:e=$._step120;break;case 150:e=$._step150}e*=K.samples,T(e)}};return(0,W.jsxs)(l.az,{children:[(0,W.jsxs)(n.mg,{children:[(0,W.jsx)("title",{children:"SD3 Super Artistic"}),(0,W.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,W.jsx)(o.B,{h:"100vh",w:_,py:20,px:2,children:(0,W.jsxs)(o.B,{spacing:4,pb:60,children:[(0,W.jsx)(y.X,{styleShows:G,styles:H,style:F,modelDefault:U,onChangeModel:e=>{X(e)},onPressItem:e=>{const t=G.find((t=>t.title===e.title));G[1]=t?H[1]:e,V(e)},onPressSearch:e=>{const t=H.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())));L(t)}}),(0,W.jsxs)(o.B,{children:[(0,W.jsx)(C.l,{title:"Prompt Idea",placeholder:"What do you want to see?",isShow:!0,value:J,onChange:e=>{O(e)}}),(0,W.jsx)(C.l,{title:"Negative",placeholder:"What do you want to void?",value:Q,onChange:e=>{Z(e)}})]}),(0,W.jsx)(P.M,{title:"Upload Image",placeholder:"Please select an image (optional)",isShow:!0,value:J,onChange:e=>{oe(e)}}),le&&(0,W.jsx)(I.R,{title:"Strength:",description:"Values close to 100 will yield images very similar to the image while values close to 0 will yield images wildly different than the image",min:0,max:100,step:10,value:re,onChange:e=>{de(e)}}),(0,W.jsx)(v.g,{title:"Aspect Ratio",value:$,onChange:e=>{q(e)}}),(0,W.jsx)(A.V,{title:"Image Number",value:K,onChange:e=>{Y(e)}}),(0,W.jsx)(o.B,{children:(0,W.jsx)(r.n,{allowMultiple:!0,allowToggle:!0,children:(0,W.jsxs)(d.A,{borderWidth:0,borderEndWidth:0,borderColor:"transparent",children:[(0,W.jsx)(c.J,{padding:0,py:2,children:(0,W.jsxs)(h.z,{w:"100%",justifyContent:"space-between",mb:4,children:[(0,W.jsx)(p.E,{color:"white",fontSize:16,fontWeight:"700",children:"Advanced Setting"}),(0,W.jsx)(u.Q,{color:"white"})]})}),(0,W.jsx)(m.v,{pb:4,borderWidth:0,padding:0,children:(0,W.jsxs)(o.B,{spacing:6,children:[(0,W.jsx)(I.R,{title:"Step:",description:"How many steps to spend generating (diffusing) your image.",min:30,max:150,step:30,value:ee,onChange:e=>{te(e)}}),(0,W.jsx)(I.R,{title:"Scale:",description:"Scale adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt...",min:0,max:30,step:2,value:se,onChange:e=>{ie(e)}}),(0,W.jsx)(k.T,{title:"Seed:",description:"Random noise seed (omit this option or use 0 for a random seed)",value:ne,onChange:e=>{ae(e)}})]})})]})})})]})}),(0,W.jsx)(o.B,{spacing:4,flex:1,justifyContent:"center",pos:"fixed",bottom:0,w:"full",zIndex:999,backgroundColor:"black",children:(0,W.jsx)(g.$,{maxWidth:"500px",py:4,mx:2,my:4,colorScheme:"green",borderRadius:"full",isDisabled:!(""!==J||F&&"None"!==F.title),onClick:async()=>{if(t&&t&&parseFloat(t.coins)>=E){let t={model:U,type:f.Wk.GEN,isFree:!1,isText:!le,isCreate:!0,image:le,imageStrength:re/100,prompt:J,negative:Q,style:F,width:$?$._w:512,height:$?$._h:512,samples:K.samples,steps:ee,scale:se,seed:ne,isUpHD:!1,isControl:!1,controlNets:z.controlNetHigh,feeCoin:E,base:{}};e(R.W.GEN_ARTISTIC,{state:{dataAI:t}})}},children:(0,W.jsxs)(h.z,{children:[(0,W.jsx)(p.E,{color:"white",fontSize:16,fontWeight:"700",children:"Create"}),(0,W.jsxs)(h.z,{spacing:1,children:[(0,W.jsx)(p.E,{color:"white",fontSize:16,children:(new Intl.NumberFormat).format(E)}),(0,W.jsx)(x.o,{children:(0,W.jsx)(j._,{boxSize:"16px",src:s(2975),alt:"card"})})]})]})})}),(0,W.jsx)(b.a,{isOpen:N})]})}},2975:(e,t,s)=>{e.exports=s.p+"static/media/coin.84cf06a861a4cfb9ad42.png"}}]);