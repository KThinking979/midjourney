"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[216],{2216:(e,o,s)=>{s.r(o),s.d(o,{PaymentPage:()=>k});var t=s(9950),i=s(6455),n=s(2099),c=s(3247),r=s(7981),a=s(3731),l=s(4418),d=s(393),h=s(6086),x=s(6569),p=s(1374),j=s(5236),u=s(712),f=s(2096),b=s(2875),g=s(2691),w=s(2119),m=s(4456),z=s(3564);const y=(0,s(4451).j)((()=>Promise.all([s.e(617),s.e(825)]).then(s.bind(s,825))),(e=>e.ModalLoading));var S=s(4414);let C=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const k=()=>{const e=(0,z.Zp)(),{user:o,configs:k}=(0,t.useContext)(j.rf),{setUser:I}=(0,t.useContext)(j.D8),E=(0,n.d)(),[P,B]=(0,t.useState)(!1),[F,W]=(0,t.useState)(k&&k.package?k.package[0]:m.Hy[0]),[v,A]=(0,t.useState)(k&&k.package?k.package:m.Hy);(0,t.useEffect)((()=>{H()}),[]);const H=async()=>{window.scrollTo(0,0)};return(0,S.jsxs)(c.az,{children:[(0,S.jsxs)(i.mg,{children:[(0,S.jsx)("title",{children:"Payment"}),(0,S.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,S.jsx)(r.B,{h:"100vh",w:C,py:8,px:2,children:(0,S.jsxs)(r.B,{spacing:4,pb:40,children:[(0,S.jsxs)(r.B,{justifyContent:"center",alignItems:"center",children:[(0,S.jsx)(a.E,{color:"white",fontSize:18,fontWeight:"bold",children:"Purchase Coins"}),(0,S.jsx)(a.E,{color:"white",fontSize:14,children:"Please choose one of the following costs"})]}),v.map((e=>{const{id:o,coins:t,cost:i,disCost:n,description1:c}=e,p=t/(k&&k.feeBasic?k.feeBasic:.2),j=o===F.id;return(0,S.jsx)(r.B,{spacing:4,borderRadius:8,borderColor:j?"blue.400":"gray.500",borderWidth:j?2:1,px:2,py:4,onClick:()=>{W(e)},children:(0,S.jsxs)(l.z,{spacing:2,justifyContent:"space-between",children:[(0,S.jsxs)(r.B,{spacing:2,children:[(0,S.jsxs)(l.z,{children:[(0,S.jsx)(d.I,{color:"blue.400",as:f.dA7,boxSize:6}),(0,S.jsx)(a.E,{color:"white",fontSize:14,children:(new Intl.NumberFormat).format(t)}),(0,S.jsx)(h.o,{children:(0,S.jsx)(x._,{boxSize:"18px",src:s(2975),alt:"card"})}),(0,S.jsx)(a.E,{color:"white",fontSize:14,children:"Coins"})]}),(0,S.jsxs)(l.z,{children:[(0,S.jsx)(d.I,{color:"blue.400",as:f.dA7,boxSize:6}),(0,S.jsx)(a.E,{color:"white",fontSize:14,children:"".concat((new Intl.NumberFormat).format(p)," ").concat(c)})]}),n&&(0,S.jsxs)(l.z,{children:[(0,S.jsx)(d.I,{color:"blue.400",as:f.dA7,boxSize:6}),(0,S.jsx)(a.E,{color:"red.400",fontSize:14,children:"Save ".concat(((n-i)/n*100).toFixed(2),"%")})]})]}),(0,S.jsxs)(r.B,{alignItems:"center",justifyContent:"center",spacing:"2px",children:[(0,S.jsx)(a.E,{color:"white",fontSize:18,fontWeight:"700",children:"$".concat(i)}),n&&(0,S.jsx)(a.E,{as:"s",color:"gray",fontSize:17,children:"$".concat(n)})]})]})},o)}))]})}),(0,S.jsx)(r.B,{spacing:4,flex:1,justifyContent:"center",pos:"fixed",bottom:0,w:"full",zIndex:999,backgroundColor:"black",children:(0,S.jsx)(p.$,{maxWidth:"500px",py:4,mx:2,my:4,colorScheme:"green",borderRadius:"full",onClick:async()=>{if(!k.isTest)try{B(!0);const s=new g.cC(k.tokenApp),t=F.title,i=F.title,n="{}",c="XTR",r=[{amount:F.star,label:F.title}],a=await s.api.createInvoiceLink(t,i,n,"",c,r);w.A.openInvoice(a,(async s=>{if("paid"===s){const s=parseFloat(o.coins+F.coins);await(0,u.bF)({id:o.id,coins:s}),I({...o,coins:s}),B(!1),E({title:"Success Purchase",status:"success",position:"top",isClosable:!0}),e(-1)}else console.log("status ",s),alert("status ".concat(s)),B(!1),E({title:"Fail Purchase",status:"error",position:"top",isClosable:!0})}))}catch(s){console.log("Error ",s),B(!1),E({title:"Fail Purchase",status:"error",position:"top",isClosable:!0})}},children:(0,S.jsxs)(l.z,{children:[(0,S.jsx)(a.E,{color:"white",fontSize:16,fontWeight:"700",children:"Payment"}),(0,S.jsx)(a.E,{color:"white",fontSize:16,children:(new Intl.NumberFormat).format(F.star)}),(0,S.jsx)(d.I,{color:"yellow.400",as:b.gt3,boxSize:5})]})})}),(0,S.jsx)(y,{isOpen:P})]})}},2975:(e,o,s)=>{e.exports=s.p+"static/media/coin.84cf06a861a4cfb9ad42.png"}}]);