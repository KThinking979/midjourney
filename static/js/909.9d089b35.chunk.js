"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[909],{712:(e,n,t)=>{t.d(n,{kg:()=>a,Y_:()=>r,wz:()=>p,FH:()=>u,bF:()=>l,TK:()=>d});var s=t(6220);const o=(0,t(815).Wp)({apiKey:"AIzaSyBOTVOdSu20rXHX_VWHnV3XmS9ZcnfQuBQ",authDomain:"midjourneyai-71161.firebaseapp.com",projectId:"midjourneyai-71161",storageBucket:"midjourneyai-71161.appspot.com",messagingSenderId:"559017193613",appId:"1:559017193613:web:8f4159f592c0a63e4e32c4",measurementId:"G-FEN6H6F61Y"}),c=(0,s.aU)(o);var i=t(4456);const r=async()=>{try{let e;const n=(0,s.H9)(c,"configs","configs"),t=await(0,s.x7)(n);return t.exists()&&(e=t.data()),e}catch(e){console.error("Error getUser: ",e)}},a=async e=>{let{id:n,username:t,coins:o}=e;try{const e=(new Date).toISOString().slice(0,10).replace("-","").replace("-","");await(0,s.BN)((0,s.H9)(c,"users","".concat(n)),{id:"".concat(n),username:t,coins:o,numAds:1,expDateAds:e,language:"en",createdAt:new Date,updateAt:new Date})}catch(i){console.error("Error createUser: ",i)}},l=async e=>{let{id:n,coins:t,transactionId:o}=e;try{await(0,s.mZ)((0,s.H9)(c,"users","".concat(n)),{coins:t,updateAtTrans:"COIN_".concat(new Date),transactionId:"".concat(o)})}catch(i){console.error("Error updateCoinsUser: ",i)}},d=async e=>{let{id:n,coins:t,language:o,numAds:i,expDateAds:r}=e;try{let e={};o&&(e={...e,language:o}),null!==t&&void 0!==t&&(e={...e,coins:t}),null!==i&&void 0!==i&&(e={...e,numAds:i}),null!==r&&void 0!==r&&(e={...e,expDateAds:r}),await(0,s.mZ)((0,s.H9)(c,"users","".concat(n)),{...e,updateAt:new Date})}catch(a){console.error("Error updateCoinsUser: ",a)}},p=async e=>{try{let n;const t=(0,s.H9)(c,"users","".concat(e)),o=await(0,s.x7)(t);return o.exists()&&(n=o.data()),n}catch(n){console.error("Error getUser: ",n)}},u=async e=>{let{model:n,server:t,text:s,cursor:o}=e;try{"".concat(window.location.protocol,"//").concat(t);const e=new Headers;e.append("Content-Type","application/json"),e.append("Accept","application/json, text/plain, */*"),e.append("Accept-Language","en-US,en;q=0.9"),e.append("Referer","https://lexica.art/");return i.Ze}catch(c){return console.log("Kai Error ",c),{error:!0}}}},290:(e,n,t)=>{t.r(n),t.d(n,{AccountPage:()=>C});var s=t(9950),o=t(6455),c=t(2099),i=t(3247),r=t(1530),a=t(7009),l=t(6206),d=t(3731),p=t(4418),u=t(6086),h=t(6569),x=t(1374),g=t(2720),m=t(5236),j=t(6365),w=t(327),f=t(712),y=t(3564),A=t(8412),b=t(4456),S=t(4414);let z=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const C=()=>{const e=(0,y.Zp)(),n=(0,c.d)(),{user:C,configs:E}=(0,s.useContext)(m.rf),{setUser:I,setConfigs:D}=s.useContext(m.D8),[k,v]=(0,s.useState)(C&&C.numAds?C.numAds:1),[B,W]=(0,s.useState)(1);(0,s.useEffect)((()=>{H(),(async()=>{var e;const n=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(n&&!C){n.ready();const e=n.initDataUnsafe.user;if(e){let n={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const t=await(0,f.wz)(n.id);t?n={...t,username:"".concat(e.last_name," ").concat(e.first_name)}:await(0,f.kg)(n),I(n)}}})()}),[]);const H=async()=>{if(!E){const e=await(0,f.Y_)();D(e)}if(E&&C){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>C.expDateAds?(W(E.coinAds),v(1),I({...C,numAds:1,expDateAds:e}),(0,f.TK)({id:C.id,numAds:1,expDateAds:e})):W(E.coinAds)}window.scrollTo(0,0)};let _=b.Yj.find((e=>C&&e.key===C.language));return _=_||b.Yj[0],(0,S.jsxs)(i.az,{children:[(0,S.jsxs)(o.mg,{children:[(0,S.jsx)("title",{children:"Account"}),(0,S.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,S.jsxs)(r.B,{w:z,py:20,pb:40,px:2,spacing:8,children:[C&&(0,S.jsxs)(r.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,S.jsx)(a.Q,{children:(0,S.jsx)(l.e,{size:"xl",name:C.username,src:""})}),(0,S.jsx)(d.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:C.username})]}),!C&&(0,S.jsxs)(r.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,S.jsx)(a.Q,{children:(0,S.jsx)(l.e,{size:"xl",name:"Anonymous",src:""})}),(0,S.jsx)(d.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:"Anonymous"})]}),(0,S.jsxs)(r.B,{spacing:4,borderRadius:8,borderColor:"gray.800",borderWidth:2,px:2,py:4,children:[(0,S.jsx)(r.B,{spacing:4,children:(0,S.jsxs)(p.z,{spacing:2,justifyContent:"space-between",children:[(0,S.jsxs)(p.z,{children:[(0,S.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:"Coins: ".concat(C&&C.coins?(new Intl.NumberFormat).format(C.coins):0)}),(0,S.jsx)(u.o,{children:(0,S.jsx)(h._,{boxSize:"18px",src:t(2975),alt:"card"})})]}),(0,S.jsx)(x.$,{size:"sm",py:4,colorScheme:"green",leftIcon:(0,S.jsx)(j.vsi,{color:"white",size:18}),onClick:()=>{e(A.W.PAYMENT)},children:"Buy Coins"})]})}),(0,S.jsxs)(r.B,{spacing:4,children:[(0,S.jsx)(g.c,{colorScheme:"gray"}),(0,S.jsxs)(r.B,{spacing:2,children:[(0,S.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:"Images: ".concat(C&&C.coins?(new Intl.NumberFormat).format(C.coins/(E&&E.feeBasic?E.feeBasic:.2)):0)}),(0,S.jsx)(d.E,{color:"gray.400",fontSize:12,children:"Approximately images with current coin and default setting"})]})]}),(0,S.jsxs)(r.B,{spacing:4,children:[(0,S.jsx)(g.c,{colorScheme:"gray"}),(0,S.jsxs)(p.z,{spacing:2,justifyContent:"space-between",children:[(0,S.jsxs)(r.B,{spacing:2,children:[(0,S.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:"Watch to Earn"}),(0,S.jsx)(d.E,{color:"gray.400",fontSize:12,display:E&&E.limitAds<=k?"flex":"none",children:"Viewing is over today, will be available tomorrow"})]}),(0,S.jsx)(x.$,{size:"sm",py:4,colorScheme:"yellow",borderColor:"yellow.400",variant:"outline",borderRadius:"full",_hover:{backgroundColor:"back"},leftIcon:(0,S.jsx)(w.Am_,{color:"white",size:18}),onClick:async()=>{const e=Object.keys(E.ADS).length,t=k<=e?E.ADS["".concat(k)]:E.ADS["".concat(k%e===0?e:k%e)];window.Adsgram.init({blockId:t}).show().then((e=>{let t=k+1;const s=C.coins+B;(0,f.TK)({id:C.id,numAds:t,coins:s}),I({...C,numAds:t,coins:s}),v(t),n({title:"Added Coin",status:"success",position:"top",isClosable:!0})})).catch((e=>{console.log("result ",e)}))},isDisabled:!!(E&&E.limitAds<=k),children:(0,S.jsxs)(p.z,{children:[(0,S.jsx)(d.E,{fontSize:"14px",textAlign:"center",color:"white",children:"1"}),(0,S.jsx)(u.o,{children:(0,S.jsx)(h._,{boxSize:"18px",src:t(2975),alt:"card"})})]})})]})]}),(0,S.jsxs)(r.B,{spacing:4,children:[(0,S.jsx)(g.c,{colorScheme:"gray"}),(0,S.jsxs)(p.z,{spacing:2,justifyContent:"space-between",children:[(0,S.jsx)(d.E,{color:"white",fontSize:14,fontWeight:"700",children:"Language: ".concat(_&&_.title?_.title:"")}),(0,S.jsx)(x.$,{size:"sm",py:4,colorScheme:"gray",borderColor:"gray.400",variant:"outline",borderRadius:"md",_hover:{backgroundColor:"back"},leftIcon:(0,S.jsx)(w.Mxy,{color:"white",size:18}),onClick:()=>{e(A.W.LANGUAGE)},children:(0,S.jsx)(d.E,{fontSize:"14px",textAlign:"center",color:"white",children:"Change"})})]})]})]})]})]})}},2975:(e,n,t)=>{e.exports=t.p+"static/media/coin.84cf06a861a4cfb9ad42.png"}}]);