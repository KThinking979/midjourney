"use strict";(self.webpackChunkmidjourney=self.webpackChunkmidjourney||[]).push([[3815],{3815:(e,r,n)=>{n.r(r),n.d(r,{AccountPage:()=>H});var i=n(9950),o=n(6455),s=n(2099),t=n(3247),c=n(1389),a=n(7681),l=n(8039),d=n(6306),h=n(4414);(0,l.R)((function(e,r){const{spacing:n="0.5rem",spacingX:o,spacingY:s,children:t,justify:c,direction:l,align:g,className:u,shouldWrapChildren:m,...p}=e,j=(0,i.useMemo)((()=>m?i.Children.map(t,((e,r)=>(0,h.jsx)(x,{children:e},r))):t),[t,m]);return(0,h.jsx)(d.B.div,{ref:r,className:(0,a.cx)("chakra-wrap",u),...p,children:(0,h.jsx)(d.B.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:g,flexDirection:l,listStyleType:"none",gap:n,columnGap:o,rowGap:s,padding:"0"},children:j})})})).displayName="Wrap";var x=(0,l.R)((function(e,r){const{className:n,...i}=e;return(0,h.jsx)(d.B.li,{ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,a.cx)("chakra-wrap__listitem",n),...i})}));x.displayName="WrapItem";var g=n(221),[u,m]=(0,g.q)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function p(e){var r;const n=e.split(" "),i=null!=(r=n[0])?r:"",o=n.length>1?n[n.length-1]:"";return i&&o?"".concat(i.charAt(0)).concat(o.charAt(0)):i.charAt(0)}function j(e){const{name:r,getInitials:n,...i}=e,o=m();return(0,h.jsx)(d.B.div,{role:"img","aria-label":r,...i,__css:o.label,children:r?null==n?void 0:n(r):null})}j.displayName="AvatarName";var f=e=>(0,h.jsxs)(d.B.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,h.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,h.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),b=n(5812);function y(e){const{src:r,srcSet:n,onError:o,onLoad:s,getInitials:t,name:c,borderRadius:a,loading:l,iconLabel:x,icon:g=(0,h.jsx)(f,{}),ignoreFallback:u,referrerPolicy:m,crossOrigin:p}=e,y=(0,b.l)({src:r,onError:o,crossOrigin:p,ignoreFallback:u});return!r||!("loaded"===y)?c?(0,h.jsx)(j,{className:"chakra-avatar__initials",getInitials:t,name:c}):(0,i.cloneElement)(g,{role:"img","aria-label":x}):(0,h.jsx)(d.B.img,{src:r,srcSet:n,alt:c,onLoad:s,referrerPolicy:m,crossOrigin:null!=p?p:void 0,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:a}})}y.displayName="AvatarImage";var w=n(6296),v=n(2867),S={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},A=(0,l.R)(((e,r)=>{const n=(0,w.o5)("Avatar",e),[o,s]=(0,i.useState)(!1),{src:t,srcSet:c,name:l,showBorder:x,borderRadius:g="full",onError:m,onLoad:j,getInitials:b=p,icon:A=(0,h.jsx)(f,{}),iconLabel:C=" avatar",loading:z,children:_,borderColor:k,ignoreFallback:N,crossOrigin:W,referrerPolicy:B,...E}=(0,v.MN)(e),I={borderRadius:g,borderWidth:x?"2px":void 0,...S,...n.container};return k&&(I.borderColor=k),(0,h.jsx)(d.B.span,{ref:r,...E,className:(0,a.cx)("chakra-avatar",e.className),"data-loaded":(0,a.sE)(o),__css:I,children:(0,h.jsxs)(u,{value:n,children:[(0,h.jsx)(y,{src:t,srcSet:c,loading:z,onLoad:(0,a.Hj)(j,(()=>{s(!0)})),onError:m,getInitials:b,name:l,borderRadius:g,icon:A,iconLabel:C,ignoreFallback:N,crossOrigin:W,referrerPolicy:B}),_]})})}));A.displayName="Avatar";var C=n(1317),z=n(4418),_=n(6086),k=n(6569),N=n(1374),W=(0,l.R)((function(e,r){const{borderLeftWidth:n,borderBottomWidth:i,borderTopWidth:o,borderRightWidth:s,borderWidth:t,borderStyle:c,borderColor:l,...x}=(0,w.Vl)("Divider",e),{className:g,orientation:u="horizontal",__css:m,...p}=(0,v.MN)(e),j={vertical:{borderLeftWidth:n||s||t||"1px",height:"100%"},horizontal:{borderBottomWidth:i||o||t||"1px",width:"100%"}};return(0,h.jsx)(d.B.hr,{ref:r,"aria-orientation":u,...p,__css:{...x,border:"0",borderColor:l,borderStyle:c,...j[u],...m},className:(0,a.cx)("chakra-divider",g)})}));W.displayName="Divider";var B=(0,l.R)(((e,r)=>(0,h.jsx)(c.B,{align:"center",...e,direction:"column",ref:r})));B.displayName="VStack";var E=n(5236),I=n(6365),R=n(327),P=n(712),D=n(3564),L=n(8412),M=n(4456),F=n(6742),O=n(6451);let T=window.innerWidth>500?500:window.innerWidth,U=(window.innerHeight,1);const H=()=>{const e=(0,D.Zp)(),{t:r}=(0,F.B)(),a=(0,s.d)(),{user:l,configs:d}=(0,i.useContext)(E.rf),{setUser:g,setConfigs:u}=i.useContext(E.D8),[m,p]=(0,i.useState)(l&&l.numAds?l.numAds:1),[j,f]=(0,i.useState)(1),[b,y]=(0,i.useState)({users:[],coins:0,pro:0});(0,i.useEffect)((()=>{w()}),[]);const w=async()=>{if(l&&d){if(d&&l){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>l.expDateAds?(f(d.coinAds),p(1),g({...l,numAds:1,expDateAds:e}),(0,P.TK)({id:l.id,numAds:1,expDateAds:e})):f(d.coinAds)}U=1}else e(L.W.DASHBOARD)},v=(0,i.useCallback)((()=>{let e=m+1;const r=parseFloat(l.coins)+j;(0,P.TK)({id:l.id,numAds:e,coins:r}),g({...l,numAds:e,coins:r}),p(e),a({title:"Added Coin",status:"success",position:"bottom",isClosable:!0,duration:2e3})}),[l,m,j]),S=(0,i.useCallback)((e=>{U<d.countADS?H():U=1}),[l,m,j]),H=async()=>{U++;const e=Object.keys(d.ADS).length,r=d.ADS.sort((()=>Math.random()-.5));let n=m<=e?r["".concat(m-1)]:r["".concat(m%e===0?e-1:m%e-1)];n||(n=r["".concat(e-1)]);try{const e=window.Adsgram.init({blockId:"".concat(n)});await e.show(),v()}catch(i){S(i)}};let G=M.Yj.find((e=>l&&e.key===l.language));return G=G||M.Yj[0],(0,h.jsxs)(t.az,{children:[(0,h.jsxs)(o.mg,{children:[(0,h.jsx)("title",{children:r(O.P.account.account)}),(0,h.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,h.jsxs)(c.B,{w:T,py:20,pb:40,px:2,spacing:8,children:[l&&(0,h.jsxs)(c.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,h.jsx)(x,{children:(0,h.jsx)(A,{size:"xl",name:l.username,src:""})}),(0,h.jsx)(C.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:l.username})]}),!l&&(0,h.jsxs)(c.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,h.jsx)(x,{children:(0,h.jsx)(A,{size:"xl",name:"Anonymous",src:""})}),(0,h.jsx)(C.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:"Anonymous"})]}),(0,h.jsxs)(c.B,{spacing:4,borderRadius:8,borderColor:"gray.800",borderWidth:2,px:2,py:4,children:[(0,h.jsx)(c.B,{spacing:4,children:(0,h.jsxs)(z.z,{spacing:2,justifyContent:"space-between",children:[(0,h.jsxs)(z.z,{children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(r(O.P.account.coins),": ").concat(l&&l.coins?(new Intl.NumberFormat).format(l.coins):0)}),(0,h.jsx)(_.o,{children:(0,h.jsx)(k._,{boxSize:"18px",src:n(2975),alt:"card"})})]}),(0,h.jsx)(N.$,{size:"sm",py:4,colorScheme:"green",leftIcon:(0,h.jsx)(I.vsi,{color:"white",size:18}),onClick:()=>{e(L.W.PAYMENT)},children:r(O.P.account.buy_coins)})]})}),(0,h.jsxs)(c.B,{spacing:4,children:[(0,h.jsx)(W,{colorScheme:"gray"}),(0,h.jsxs)(c.B,{spacing:2,children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(r(O.P.account.images),": ").concat(l&&l.coins?(new Intl.NumberFormat).format(l.coins/(d&&d.feeBasic?d.feeBasic:.2)):0)}),(0,h.jsx)(C.E,{color:"gray.400",fontSize:12,children:r(O.P.account.desImages)})]})]}),(0,h.jsxs)(c.B,{spacing:4,children:[(0,h.jsx)(W,{colorScheme:"gray"}),(0,h.jsxs)(z.z,{spacing:2,justifyContent:"space-between",children:[(0,h.jsxs)(c.B,{spacing:2,children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:r(O.P.account.watch_to_earn)}),(0,h.jsx)(C.E,{color:"gray.400",fontSize:12,display:d&&d.limitAds<=m?"flex":"none",children:r(O.P.account.des_watch_coins)})]}),(0,h.jsx)(N.$,{minW:24,size:"sm",py:4,colorScheme:"yellow",borderColor:"yellow.400",variant:"outline",borderRadius:"full",_hover:{backgroundColor:"back"},leftIcon:(0,h.jsx)(R.Am_,{color:"white",size:18}),onClick:H,isDisabled:!!(d&&d.limitAds<=m),children:(0,h.jsxs)(z.z,{children:[(0,h.jsx)(C.E,{fontSize:"14px",textAlign:"center",color:"white",children:"1"}),(0,h.jsx)(_.o,{children:(0,h.jsx)(k._,{boxSize:"18px",src:n(2975),alt:"card"})})]})})]})]}),(0,h.jsxs)(c.B,{spacing:4,children:[(0,h.jsx)(W,{colorScheme:"gray"}),(0,h.jsxs)(z.z,{spacing:2,justifyContent:"space-between",children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(r(O.P.account.language),": ").concat(G&&G.title?G.title:"")}),(0,h.jsx)(N.$,{size:"sm",py:4,colorScheme:"gray",borderColor:"gray.400",variant:"outline",borderRadius:"md",_hover:{backgroundColor:"back"},leftIcon:(0,h.jsx)(R.Mxy,{color:"white",size:18}),onClick:()=>{e(L.W.LANGUAGE)},children:(0,h.jsx)(C.E,{fontSize:"14px",textAlign:"center",color:"white",children:r(O.P.account.change)})})]})]}),l&&"7362249448"===l.id&&(0,h.jsxs)(c.B,{spacing:4,children:[(0,h.jsx)(W,{colorScheme:"gray"}),(0,h.jsxs)(z.z,{spacing:8,children:[(0,h.jsx)(N.$,{size:"sm",py:4,colorScheme:"gray",borderColor:"gray.400",variant:"outline",borderRadius:"md",_hover:{backgroundColor:"back"},leftIcon:(0,h.jsx)(R.Mxy,{color:"white",size:18}),onClick:async()=>{const e=await(0,P.FJ)();y(e)},children:(0,h.jsx)(C.E,{fontSize:"14px",textAlign:"center",color:"white",children:"Total: "})}),(0,h.jsxs)(B,{children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"Users: ".concat(b.users.length)}),(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"Coins: ".concat(b.coins)}),(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"Pro: ".concat(b.pro)})]})]})]})]})]})]})}},2099:(e,r,n)=>{n.d(r,{d:()=>c});var i=n(6598),o=n(9791),s=n(4336),t=n(9950);function c(e){const{theme:r}=(0,s.UQ)(),n=(0,i.NU)();return(0,t.useMemo)((()=>(0,o.UP)(r.direction,{...n,...e})),[e,r.direction,n])}}}]);