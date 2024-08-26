"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[926],{3246:(e,t,s)=>{s.d(t,{a:()=>i});const i=(0,s(4451).j)((()=>Promise.all([s.e(448),s.e(825)]).then(s.bind(s,825))),(e=>e.ModalLoading))},7926:(e,t,s)=>{s.r(t),s.d(t,{TextArtisticPage:()=>P});var i=s(9950),o=s(6455),n=s(2099),r=s(3247),l=s(1389),d=s(1317),c=s(6086),a=s(1374),h=s(4418),p=s(2481),x=s(5168),j=s(4745),u=s(2666),m=s(3159),w=s(6171),f=s(4098),g=s(443),b=s(7413),S=s(5671),z=s(6569),_=s(5236),C=s(4456),y=s(3564),W=s(3246),v=s(2935),E=s(4451);const A=(0,E.j)((()=>Promise.all([s.e(327),s.e(285),s.e(146)]).then(s.bind(s,8146))),(e=>e.ListAIStyles)),B=(0,E.j)((()=>s.e(867).then(s.bind(s,5248))),(e=>e.InputTextArea));var k=s(4414);let I=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const R=[{_h:1024,_step120:.8,_step150:1,_step30:.2,_step60:.4,_step90:.6,_w:1024,h:512,id:1,step120:2,step150:2.5,step30:.5,step60:1,step90:1.5,title:"1:1",w:512},{_h:896,_step120:.8,_step150:1,_step30:.2,_step60:.4,_step90:.6,_w:1152,h:512,id:2,step120:4,step150:5,step30:1,step60:2,step90:3,title:"5:4",w:640},{_h:1152,_step120:.8,_step150:1,_step30:.2,_step60:.4,_step90:.6,_w:896,h:640,id:3,step120:4,step150:5,step30:1,step60:2,step90:3,title:"4:5",w:512},{_h:832,_step120:.8,_step150:1,_step30:.2,_step60:.4,_step90:.6,_w:1216,h:512,id:4,step120:6,step150:7.5,step30:1.5,step60:3,step90:4.5,title:"3:2",w:768},{_h:1216,_step120:.8,_step150:1,_step30:.2,_step60:.4,_step90:.6,_w:832,h:768,id:5,step120:6,step150:7.5,step30:1.5,step60:3,step90:4.5,title:"2:3",w:512}],M=[{id:"1",isShow:!0,samples:1,shapes:[48],title:"1"},{id:"4",isShow:!0,samples:4,shapes:[12,12,12,12],title:"4"}],P=()=>{(0,y.Zp)();const{user:e,configs:t}=(0,i.useContext)(_.rf),{setUser:E}=(0,i.useContext)(_.D8),[P,L]=((0,n.d)(),i.useState(0)),[O,T]=i.useState(!1),[H,J]=(0,i.useState)(!1),[N,Q]=(0,i.useState)(t&&t.package?t.package[0]:C.Hy[0]),[V,D]=(0,i.useState)([]),[U,$]=(0,i.useState)(C.ux),[F,G]=(0,i.useState)(C.ux[0]),[Z,q]=(0,i.useState)("ProGen"),[K,X]=(0,i.useState)("Cat"),[Y,ee]=(0,i.useState)("");(0,i.useEffect)((()=>{te()}),[]);const te=async()=>{window.scrollTo(0,0);const e=C.ux.filter(((e,t)=>t<6));D(e)};return(0,k.jsxs)(r.az,{children:[(0,k.jsxs)(o.mg,{children:[(0,k.jsx)("title",{children:"Text Artistic"}),(0,k.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,k.jsx)(l.B,{h:"100vh",w:I,py:20,px:2,children:(0,k.jsxs)(l.B,{spacing:4,pb:40,children:[(0,k.jsx)(A,{styleShows:V,styles:U,style:F,modelDefault:Z,onChangeModel:e=>{q(e)},onPressItem:e=>{const t=V.find((t=>t.title===e.title));V[1]=t?C.ux[1]:e,G(e)},onPressSearch:e=>{const t=C.ux.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())));$(t)}}),(0,k.jsxs)(l.B,{children:[(0,k.jsx)(B,{title:"Prompt Idea",placeholder:"What do you want to see?",isShow:!0,value:K,onChange:e=>{X(e)}}),(0,k.jsx)(B,{title:"Negative",placeholder:"What do you want to void?",value:Y,onChange:e=>{ee(e)}})]}),(0,k.jsxs)(l.B,{children:[(0,k.jsx)(d.E,{color:"white",fontSize:16,fontWeight:"700",children:"Upload Image"}),(0,k.jsx)(c.o,{borderRadius:8,borderColor:"white",borderWidth:1,minH:40,children:(0,k.jsx)(a.$,{size:"sm",colorScheme:"white",variant:"ghost",borderRadius:"full",_hover:{backgroundColor:"back"},leftIcon:(0,k.jsx)(v.vzv,{color:"white",size:20}),onClick:()=>{},children:(0,k.jsx)(d.E,{fontSize:14,color:"gray.500",children:"Please select an image (optional)"})})})]}),(0,k.jsxs)(l.B,{children:[(0,k.jsx)(d.E,{color:"white",fontSize:16,fontWeight:"700",children:"Aspect Ratio"}),(0,k.jsx)(h.z,{justifyContent:"space-between",children:R.map((e=>{const t=60;let s=t,i=t;return e.w>=e.h?(s=t,i=t*(e.h/e.w)):(i=t,s=t*(e.w/e.h)),(0,k.jsx)(c.o,{w:"".concat(s,"px"),h:"".concat(i,"px"),borderRadius:4,borderWidth:1,borderColor:"blue.400",p:4,children:(0,k.jsx)(d.E,{color:"white",fontSize:12,children:e.title})})}))})]}),(0,k.jsxs)(l.B,{children:[(0,k.jsx)(d.E,{color:"white",fontSize:16,fontWeight:"700",children:"Images Number"}),(0,k.jsx)(h.z,{spacing:4,children:M.map((e=>(0,k.jsxs)(c.o,{w:"60px",h:"60px",borderRadius:4,borderWidth:1,borderColor:"blue.400",p:4,children:[(0,k.jsx)(p.x,{pos:"absolute",templateColumns:1==e.samples?"repeat(1, 1fr)":"repeat(2, 1fr)",gap:1,children:e.shapes.map((e=>(0,k.jsx)(c.o,{w:"".concat(e,"px"),h:"".concat(e,"px"),borderRadius:6,backgroundColor:"gray.800",p:3})))}),(0,k.jsx)(d.E,{color:"white",fontSize:12,zIndex:99,children:e.title})]})))})]}),(0,k.jsx)(l.B,{children:(0,k.jsx)(x.n,{allowMultiple:!0,allowToggle:!0,children:(0,k.jsxs)(j.A,{borderWidth:0,borderEndWidth:0,borderColor:"transparent",children:[(0,k.jsx)(u.J,{padding:0,py:2,children:(0,k.jsxs)(h.z,{w:"100%",justifyContent:"space-between",mb:4,children:[(0,k.jsx)(d.E,{color:"white",fontSize:16,fontWeight:"700",children:"Advanced Setting"}),(0,k.jsx)(m.Q,{color:"white"})]})}),(0,k.jsx)(w.v,{pb:4,borderWidth:0,padding:0,children:(0,k.jsxs)(l.B,{spacing:6,children:[(0,k.jsxs)(l.B,{children:[(0,k.jsxs)(h.z,{borderRadius:8,borderColor:"white",borderWidth:1,p:4,spacing:4,children:[(0,k.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"bold",children:"Step:"}),(0,k.jsxs)(f.Ap,{id:"slider",defaultValue:0,min:0,max:100,step:25,colorScheme:"teal",onChange:e=>L(e),onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[(0,k.jsx)(f.d6,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25%"}),(0,k.jsx)(f.d6,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50%"}),(0,k.jsx)(f.d6,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75%"}),(0,k.jsx)(f.hB,{children:(0,k.jsx)(f.hJ,{})}),(0,k.jsx)(g.m,{hasArrow:!0,bg:"teal.500",color:"white",placement:"top",isOpen:O,label:"".concat(P,"%"),children:(0,k.jsx)(f.OQ,{})})]}),(0,k.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(P,"%")})]}),(0,k.jsx)(d.E,{color:"gray.400",fontSize:12,children:"Approximately images with current coin and default setting"})]}),(0,k.jsxs)(l.B,{children:[(0,k.jsxs)(h.z,{borderRadius:8,borderColor:"white",borderWidth:1,p:4,spacing:4,children:[(0,k.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"bold",children:"Scale:"}),(0,k.jsxs)(f.Ap,{id:"slider",defaultValue:0,min:0,max:100,step:25,colorScheme:"teal",onChange:e=>L(e),onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[(0,k.jsx)(f.d6,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25%"}),(0,k.jsx)(f.d6,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50%"}),(0,k.jsx)(f.d6,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75%"}),(0,k.jsx)(f.hB,{children:(0,k.jsx)(f.hJ,{})}),(0,k.jsx)(g.m,{hasArrow:!0,bg:"teal.500",color:"white",placement:"top",isOpen:O,label:"".concat(P,"%"),children:(0,k.jsx)(f.OQ,{})})]}),(0,k.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(P,"%")})]}),(0,k.jsx)(d.E,{color:"gray.400",fontSize:12,children:"Approximately images with current coin and default setting"})]}),(0,k.jsxs)(l.B,{children:[(0,k.jsxs)(h.z,{borderRadius:8,borderColor:"white",borderWidth:1,p:4,spacing:4,children:[(0,k.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"bold",children:"Seed:"}),(0,k.jsx)(b.z,{defaultValue:"2",w:"full",children:(0,k.jsxs)(h.z,{spacing:5,justifyContent:"space-around",children:[(0,k.jsx)(S.s,{colorScheme:"red",value:"1",children:(0,k.jsx)(d.E,{color:"white",fontSize:14,children:"Random"})}),(0,k.jsx)(S.s,{colorScheme:"green",value:"2",children:(0,k.jsx)(d.E,{color:"white",fontSize:14,children:"Customize"})})]})})]}),(0,k.jsx)(d.E,{color:"gray.400",fontSize:12,children:"Approximately images with current coin and default setting"})]})]})})]})})})]})}),(0,k.jsx)(l.B,{spacing:4,flex:1,justifyContent:"center",pos:"fixed",bottom:0,w:"full",zIndex:999,backgroundColor:"black",children:(0,k.jsx)(a.$,{maxWidth:"500px",py:4,mx:2,my:4,colorScheme:"green",borderRadius:"full",children:(0,k.jsxs)(h.z,{children:[(0,k.jsx)(d.E,{color:"white",fontSize:16,fontWeight:"700",children:"Create"}),(0,k.jsxs)(h.z,{spacing:1,children:[(0,k.jsx)(d.E,{color:"white",fontSize:16,children:(new Intl.NumberFormat).format(N.star)}),(0,k.jsx)(c.o,{children:(0,k.jsx)(z._,{boxSize:"16px",src:s(2975),alt:"card"})})]})]})})}),(0,k.jsx)(W.a,{isOpen:H})]})}},2975:(e,t,s)=>{e.exports=s.p+"static/media/coin.84cf06a861a4cfb9ad42.png"}}]);