"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[946],{1432:(e,t,s)=>{s.d(t,{g:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(187),s.e(789)]).then(s.bind(s,1789))),(e=>e.AspectRatio))},3289:(e,t,s)=>{s.d(t,{V:()=>i});const i=(0,s(4451).j)((()=>s.e(937).then(s.bind(s,8937))),(e=>e.ImageNumber))},305:(e,t,s)=>{s.d(t,{l:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(96),s.e(886),s.e(625)]).then(s.bind(s,625))),(e=>e.InputTextArea))},8555:(e,t,s)=>{s.d(t,{X:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(327),s.e(28),s.e(285),s.e(146)]).then(s.bind(s,8146))),(e=>e.ListAIStyles))},3246:(e,t,s)=>{s.d(t,{a:()=>n});var i=s(4451);const n=(0,i.j)((()=>Promise.all([s.e(545),s.e(825)]).then(s.bind(s,825))),(e=>e.ModalLoading));(0,i.j)((()=>Promise.all([s.e(524),s.e(96),s.e(291),s.e(545),s.e(712),s.e(647)]).then(s.bind(s,7647))),(e=>e.ModalPayment))},6067:(e,t,s)=>{s.d(t,{T:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(187),s.e(73)]).then(s.bind(s,73))),(e=>e.RadioAdv))},3124:(e,t,s)=>{s.d(t,{s:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(524),s.e(327),s.e(712),s.e(897)]).then(s.bind(s,897))),(e=>e.SlideAds))},2863:(e,t,s)=>{s.d(t,{R:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(28),s.e(266)]).then(s.bind(s,5028))),(e=>e.SliderAdv))},5946:(e,t,s)=>{s.r(t),s.d(t,{TextArtisticPage:()=>R});var i=s(9950),n=s(6455),a=s(2099),o=s(3247),l=s(1389),r=s(5168),d=s(4745),c=s(2666),h=s(4418),p=s(1317),m=s(3159),u=s(6171),x=s(1374),g=s(6086),j=s(6569),f=s(5236),S=s(4456),b=s(3564),w=s(3246),y=s(8555),C=s(305),A=s(1432),v=s(3289),I=s(2863),N=s(6067),P=s(8412),k=s(3124),W=s(4414);let T=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const R=()=>{const e=(0,b.Zp)(),t=((0,a.d)(),(0,b.zy)().state),{user:R,configs:_,listAIStyleAll:z}=(0,i.useContext)(f.rf),[E,H]=(0,i.useState)(!1),[B,D]=(0,i.useState)(!1),[G,M]=(0,i.useState)(_&&_.feeBasic?_.feeBasic:1),[F,L]=(0,i.useState)([]),[O,V]=(0,i.useState)([]),[X,J]=(0,i.useState)(),[K,Q]=(0,i.useState)(_.models[0]),[Y,Z]=(0,i.useState)(t&&t.dataAI?t.dataAI.textKey:""),[$,q]=(0,i.useState)(""),[U,ee]=(0,i.useState)(),[te,se]=(0,i.useState)(),[ie,ne]=(0,i.useState)(30),[ae,oe]=(0,i.useState)(6),[le,re]=(0,i.useState)(-1),[de,ce]=(0,i.useState)(!0),[he,pe]=(0,i.useState)(),[me,ue]=(0,i.useState)(70);(0,i.useEffect)((()=>{window.scrollTo(0,0),xe()}),[]);const xe=async()=>{if(z&&z.listAIStyleGen){const e=z.listAIStyleGen.filter(((e,t)=>t<6));V(z.listAIStyleGen),J(e[1]),L(e)}_&&(_.listRatios&&ee(_.listRatios[0]),_.samples&&se(_.samples[0]))};(0,i.useEffect)((()=>{ie&&U&&te&&K&&ge()}),[ie,U,te,K,de]);const ge=()=>{if(_){let e=_.feeBasic;switch(ie){case 15:e=U._step15;break;case 30:e=U._step30;break;case 60:e=U._step60;break;case 90:e=U._step90;break;case 120:e=U._step120;break;case 150:e=U._step150}K.isNov&&de&&(e+=_.feeHD),e*=te.samples,M(e)}};return(0,W.jsxs)(o.az,{children:[(0,W.jsxs)(n.mg,{children:[(0,W.jsx)("title",{children:"Text Artistic"}),(0,W.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,W.jsx)(l.B,{h:"100vh",w:T,py:20,px:2,children:(0,W.jsxs)(l.B,{spacing:4,pb:40,children:[(0,W.jsx)(y.X,{styleShows:F,styles:O,style:X,modelDefault:K.title,onChangeModel:e=>{Q(e)},onPressItem:e=>{const t=F.find((t=>t.title===e.title));F[1]=t?O[1]:e,J(e)},onPressSearch:e=>{const t=O.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())));V(t)}}),(0,W.jsxs)(l.B,{children:[(0,W.jsx)(C.l,{title:"Prompt Idea",placeholder:"What do you want to see?",isRandom:!0,isShow:!0,value:Y,h:28,onChange:e=>{Z(e)}}),(0,W.jsx)(C.l,{title:"Negative",placeholder:"What do you want to void?",value:$,onChange:e=>{q(e)}})]}),(0,W.jsx)(A.g,{title:"Aspect Ratio",value:U,isShowHD:!(!K||!K.isNov),isHD:de,onChangeHD:()=>{ce(!de)},onChange:e=>{ee(e)}}),(0,W.jsx)(v.V,{title:"Image Number",value:te,onChange:e=>{se(e)}}),(0,W.jsx)(l.B,{display:O.length?"flex":"none",children:(0,W.jsx)(r.n,{allowMultiple:!0,allowToggle:!0,children:(0,W.jsxs)(d.A,{borderWidth:0,borderEndWidth:0,borderColor:"transparent",children:[(0,W.jsx)(c.J,{padding:0,py:2,children:(0,W.jsxs)(h.z,{w:"100%",justifyContent:"space-between",mb:4,children:[(0,W.jsx)(p.E,{color:"white",fontSize:16,fontWeight:"700",children:"Advanced Setting"}),(0,W.jsx)(m.Q,{color:"white"})]})}),(0,W.jsx)(u.v,{pb:4,borderWidth:0,padding:0,children:(0,W.jsxs)(l.B,{spacing:6,children:[(0,W.jsx)(I.R,{title:"Step:",description:"How many steps to spend generating (diffusing) your image.",min:30,max:150,step:30,value:ie,onChange:e=>{ne(e)}}),(0,W.jsx)(I.R,{title:"Scale:",description:"Scale adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt...",min:0,max:30,step:2,value:ae,onChange:e=>{oe(e)}}),(0,W.jsx)(N.T,{title:"Seed:",description:"Random noise seed (omit this option or use 0 for a random seed)",value:le,onChange:e=>{re(e)}})]})})]})})})]})}),(0,W.jsx)(l.B,{spacing:4,flex:1,justifyContent:"center",pos:"fixed",bottom:0,w:"full",zIndex:999,backgroundColor:"black",children:(0,W.jsx)(x.$,{maxWidth:"500px",py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",isDisabled:""===Y,onClick:async()=>{if(R)if(R&&parseFloat(R.coins)>=G){let t=512,s=512,i=1;U&&(K.isNov?(t=U.w,s=U.h,i=2):(t=U._w,s=U._h));let n={model:K.name,type:S.Wk.GEN,isFree:!1,isText:!1,isCreate:!0,image:he,strength:me/100,prompt:Y,negative:$,style:X,size:i,width:t,height:s,samples:te.samples,steps:ie,scale:ae,seed:le,isHD:de,isControl:!1,controlNets:_.controlNetHigh,feeCoin:G,base:{}};e(P.W.GEN_ARTISTIC,{state:{dataAI:n}})}else D(!0)},children:(0,W.jsxs)(h.z,{children:[(0,W.jsx)(p.E,{color:"white",fontSize:16,fontWeight:"700",children:"Create"}),(0,W.jsxs)(h.z,{spacing:1,children:[(0,W.jsx)(p.E,{color:"white",fontSize:16,children:(new Intl.NumberFormat).format(G)}),(0,W.jsx)(g.o,{children:(0,W.jsx)(j._,{boxSize:"16px",src:s(2975),alt:"card"})})]})]})})}),(0,W.jsx)(k.s,{isOpen:B,onClose:()=>D(!B),onPressPay:()=>{D(!1),e(P.W.PAYMENT)},onPressAds:()=>{D(!1),(async()=>{if(!R)return;let t=512,s=512,i=1;U&&(K.isNov?(t=U.w,s=U.h,i=2):(t=U._w,s=U._h));let n={model:K.name,type:S.Wk.GEN,isFree:!0,isText:!1,isCreate:!0,image:he,strength:me/100,prompt:Y,negative:$,style:X,size:i,width:t,height:s,samples:1,steps:30,scale:ae,seed:le,isHD:de,isControl:!1,controlNets:_.controlNetHigh,feeCoin:G,base:{}};e(P.W.GEN_ARTISTIC,{state:{dataAI:n}})})()}}),(0,W.jsx)(w.a,{isOpen:E})]})}},2975:(e,t,s)=>{e.exports=s.p+"static/media/coin.84cf06a861a4cfb9ad42.png"}}]);