"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[132],{712:(e,r,n)=>{n.d(r,{kg:()=>i,Y_:()=>c,wz:()=>u,FH:()=>g,bF:()=>l,TK:()=>d});var a=n(6220);const t=(0,n(815).Wp)({apiKey:"AIzaSyBOTVOdSu20rXHX_VWHnV3XmS9ZcnfQuBQ",authDomain:"midjourneyai-71161.firebaseapp.com",projectId:"midjourneyai-71161",storageBucket:"midjourneyai-71161.appspot.com",messagingSenderId:"559017193613",appId:"1:559017193613:web:8f4159f592c0a63e4e32c4",measurementId:"G-FEN6H6F61Y"}),o=(0,a.aU)(t);var s=n(4456);const c=async()=>{try{let e;const r=(0,a.H9)(o,"configs","configs"),n=await(0,a.x7)(r);return n.exists()&&(e=n.data()),e}catch(e){console.error("Error getUser: ",e)}},i=async e=>{let{id:r,username:n,coins:t}=e;try{const e=(new Date).toISOString().slice(0,10).replace("-","").replace("-","");await(0,a.BN)((0,a.H9)(o,"users","".concat(r)),{id:"".concat(r),username:n,coins:t,numAds:1,expDateAds:e,language:"en",createdAt:new Date,updateAt:new Date})}catch(s){console.error("Error createUser: ",s)}},l=async e=>{let{id:r,coins:n,transactionId:t}=e;try{await(0,a.mZ)((0,a.H9)(o,"users","".concat(r)),{coins:n,updateAtTrans:"COIN_".concat(new Date),transactionId:"".concat(t)})}catch(s){console.error("Error updateCoinsUser: ",s)}},d=async e=>{let{id:r,coins:n,language:t,numAds:s,expDateAds:c}=e;try{let e={};t&&(e={...e,language:t}),null!==n&&void 0!==n&&(e={...e,coins:n}),null!==s&&void 0!==s&&(e={...e,numAds:s}),null!==c&&void 0!==c&&(e={...e,expDateAds:c}),await(0,a.mZ)((0,a.H9)(o,"users","".concat(r)),{...e,updateAt:new Date})}catch(i){console.error("Error updateCoinsUser: ",i)}},u=async e=>{try{let r;const n=(0,a.H9)(o,"users","".concat(e)),t=await(0,a.x7)(n);return t.exists()&&(r=t.data()),r}catch(r){console.error("Error getUser: ",r)}},g=async e=>{let{model:r,server:n,text:a,cursor:t}=e;try{"".concat(window.location.protocol,"//").concat(n);const e=new Headers;e.append("Content-Type","application/json"),e.append("Accept","application/json, text/plain, */*"),e.append("Accept-Language","en-US,en;q=0.9"),e.append("Referer","https://lexica.art/");return s.Ze}catch(o){return console.log("Kai Error ",o),{error:!0}}}},9132:(e,r,n)=>{n.r(r),n.d(r,{LanguagePage:()=>h});var a=n(9950),t=n(6455),o=n(3247),s=n(1530),c=n(2481),i=n(6086),l=n(6569),d=n(3731),u=n(5236),g=n(712),p=n(4456),m=n(4414);let f=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const h=()=>{const{user:e,configs:r}=(0,a.useContext)(u.rf),{setUser:n}=(0,a.useContext)(u.D8),[h,w]=(0,a.useState)(p.Yj[0]);(0,a.useEffect)((()=>{y()}),[]);const y=async()=>{if(e&&e.language){const r=p.Yj.find((r=>r.key===e.language));r&&w(r)}window.scrollTo(0,0)};return(0,m.jsxs)(o.az,{children:[(0,m.jsxs)(t.mg,{children:[(0,m.jsx)("title",{children:"Payment"}),(0,m.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,m.jsx)(s.B,{h:"100vh",w:f,py:20,px:2,children:(0,m.jsx)(s.B,{spacing:4,pb:40,children:(0,m.jsx)(c.x,{templateColumns:"repeat(2, 1fr)",gap:8,children:p.Yj.map((r=>{const{id:a,uri:t,title:o,key:c}=r,u=c===h.key;return(0,m.jsxs)(s.B,{spacing:2,borderRadius:8,borderColor:u?"blue.400":"gray.500",backgroundColor:u?"blue.900":"transparent",borderWidth:u?3:1,alignItems:"center",justifyContent:"center",p:4,onClick:()=>{w(r),n({...e,language:r.key}),(0,g.TK)({id:e.id,language:r.key})},children:[(0,m.jsx)(i.o,{children:(0,m.jsx)(l._,{boxSize:"60px",src:t,alt:"card"})}),(0,m.jsx)(d.E,{color:"white",fontSize:14,fontWeight:u?"bold":500,children:o})]},a)}))})})})]})}},6569:(e,r,n)=>{n.d(r,{_:()=>l});var a=n(8039),t=n(4414),o=(0,a.R)((function(e,r){const{htmlWidth:n,htmlHeight:a,alt:o,...s}=e;return(0,t.jsx)("img",{width:n,height:a,ref:r,alt:o,...s})}));o.displayName="NativeImage";var s=n(5812),c=n(6306);function i(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const a of r)a in n&&delete n[a];return n}var l=(0,a.R)((function(e,r){const{fallbackSrc:n,fallback:a,src:l,srcSet:d,align:u,fit:g,loading:p,ignoreFallback:m,crossOrigin:f,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:w,...y}=e,x=null!=p||m||!(void 0!==n||void 0!==a),j=(0,s.l)({...e,crossOrigin:f,ignoreFallback:x}),b=(0,s.m)(j,h),k={ref:r,objectFit:g,objectPosition:u,...x?y:i(y,["onError","onLoad"])};return b?a||(0,t.jsx)(c.B.img,{as:o,className:"chakra-image__placeholder",src:n,...k}):(0,t.jsx)(c.B.img,{as:o,src:l,srcSet:d,crossOrigin:f,loading:p,referrerPolicy:w,className:"chakra-image",...k})}));l.displayName="Image"},5812:(e,r,n)=>{n.d(r,{l:()=>o,m:()=>s});var a=n(1792),t=n(9950);function o(e){const{loading:r,src:n,srcSet:o,onLoad:s,onError:c,crossOrigin:i,sizes:l,ignoreFallback:d}=e,[u,g]=(0,t.useState)("pending");(0,t.useEffect)((()=>{g(n?"loading":"pending")}),[n]);const p=(0,t.useRef)(),m=(0,t.useCallback)((()=>{if(!n)return;f();const e=new Image;e.src=n,i&&(e.crossOrigin=i),o&&(e.srcset=o),l&&(e.sizes=l),r&&(e.loading=r),e.onload=e=>{f(),g("loaded"),null==s||s(e)},e.onerror=e=>{f(),g("failed"),null==c||c(e)},p.current=e}),[n,i,o,l,s,c,r]),f=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,a.U)((()=>{if(!d)return"loading"===u&&m(),()=>{f()}}),[u,m,d]),d?"loaded":u}var s=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r},2481:(e,r,n)=>{n.d(r,{x:()=>s});var a=n(8039),t=n(6306),o=n(4414),s=(0,a.R)((function(e,r){const{templateAreas:n,gap:a,rowGap:s,columnGap:c,column:i,row:l,autoFlow:d,autoRows:u,templateRows:g,autoColumns:p,templateColumns:m,...f}=e,h={display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:s,gridColumnGap:c,gridAutoColumns:p,gridColumn:i,gridRow:l,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:g,gridTemplateColumns:m};return(0,o.jsx)(t.B.div,{ref:r,__css:h,...f})}));s.displayName="Grid"}}]);