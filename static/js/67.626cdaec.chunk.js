"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[67],{8067:(e,a,n)=>{n.r(a),n.d(a,{Header:()=>h});var r=n(9950),t=n(1317),i=n(3247),o=n(6086),s=n(4418),c=n(6569),l=n(393),d=n(5236),p=n(3564),g=n(8412),m=n(2096),u=n(4414);const h=e=>{let{fullMenu:a,setFullMenu:h,type:f,isShow:x,isHiddenCoin:A,onOpen:b,onClose:W,...S}=e;const{user:k}=(0,r.useContext)(d.rf),E=(0,p.zy)(),C=(0,p.Zp)();return(0,u.jsx)(i.az,{transition:"0.9s ease",pos:"fixed",top:0,w:"full",zIndex:999,...S,children:(0,u.jsx)(o.o,{children:(0,u.jsxs)(s.z,{flex:1,p:2,justifyContent:"space-between",maxWidth:"500px",backgroundColor:E.pathname!==g.W.DASHBOARD&&E.pathname!==g.W.ALBUM&&E.pathname!==g.W.GEN_ARTISTIC&&E.pathname!==g.W.ART_ARTISTIC&&E.pathname!==g.W.ACCOUNT?"black":"transparent",children:[(0,u.jsxs)(s.z,{minH:"40px",children:[(E.pathname===g.W.DASHBOARD||E.pathname===g.W.ALBUM||E.pathname===g.W.ACCOUNT)&&(0,u.jsx)(c._,{borderRadius:"full",boxSize:"40px",src:n(3845),alt:"Midjourney AI"}),!(E.pathname===g.W.DASHBOARD||E.pathname===g.W.ALBUM||E.pathname===g.W.ACCOUNT)&&(0,u.jsx)(l.I,{as:m.m6W,boxSize:7,padding:0,color:"white",zIndex:999,onClick:()=>{E.pathname===g.W.PAYMENT?C(g.W.ACCOUNT):C(-1)}}),(()=>{let e="";switch(E.pathname){case g.W.TEXT_ARTISTIC:e="Text Artistic";break;case g.W.IMAGE_ARTISTIC:e="Image Artistic";break;case g.W.SD3_SUPPER:e="SD3 Supper";break;case g.W.FACE_STICKER:e="FaceSticker";break;case g.W.FACE_SWAP:e="FaceSwap";break;case g.W.BACKGROUND:e="Background";break;case g.W.TEXT_ANIME:e="Text Anime";break;case g.W.IMAGE_ANIME:e="Image Anime";break;case g.W.VIDEO_ANIME:e="Video Anime"}return""===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)(t.E,{fontSize:"18px",fontWeight:700,lineHeight:"17px",letterSpacing:"0.5px",color:"white",children:e})})()]}),!(E.pathname===g.W.PAYMENT||E.pathname===g.W.LANGUAGE)&&(0,u.jsxs)(s.z,{alignItems:"center",justifyContent:"center",children:[(0,u.jsx)(t.E,{fontSize:"18px",fontWeight:500,lineHeight:"17px",letterSpacing:"0.5px",color:"white",textAlign:"center",children:k&&k.coins?(new Intl.NumberFormat).format(k.coins):0}),(0,u.jsx)(c._,{borderRadius:"full",boxSize:"20px",src:n(2975),alt:"coin"})]}),E.pathname===g.W.LANGUAGE&&(0,u.jsx)(t.E,{fontSize:"18px",fontWeight:700,lineHeight:"17px",letterSpacing:"0.5px",color:"white",children:"Language"})]})})})}},2975:(e,a,n)=>{e.exports=n.p+"static/media/coin.84cf06a861a4cfb9ad42.png"},3845:(e,a,n)=>{e.exports=n.p+"static/media/logo.c58c54b9bbe11d1dceda.png"},6569:(e,a,n)=>{n.d(a,{_:()=>l});var r=n(8039),t=n(4414),i=(0,r.R)((function(e,a){const{htmlWidth:n,htmlHeight:r,alt:i,...o}=e;return(0,t.jsx)("img",{width:n,height:r,ref:a,alt:i,...o})}));i.displayName="NativeImage";var o=n(5812),s=n(6306);function c(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const r of a)r in n&&delete n[r];return n}var l=(0,r.R)((function(e,a){const{fallbackSrc:n,fallback:r,src:l,srcSet:d,align:p,fit:g,loading:m,ignoreFallback:u,crossOrigin:h,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:x,...A}=e,b=null!=m||u||!(void 0!==n||void 0!==r),W=(0,o.l)({...e,crossOrigin:h,ignoreFallback:b}),S=(0,o.m)(W,f),k={ref:a,objectFit:g,objectPosition:p,...b?A:c(A,["onError","onLoad"])};return S?r||(0,t.jsx)(s.B.img,{as:i,className:"chakra-image__placeholder",src:n,...k}):(0,t.jsx)(s.B.img,{as:i,src:l,srcSet:d,crossOrigin:h,loading:m,referrerPolicy:x,className:"chakra-image",...k})}));l.displayName="Image"},5812:(e,a,n)=>{n.d(a,{l:()=>i,m:()=>o});var r=n(1792),t=n(9950);function i(e){const{loading:a,src:n,srcSet:i,onLoad:o,onError:s,crossOrigin:c,sizes:l,ignoreFallback:d}=e,[p,g]=(0,t.useState)("pending");(0,t.useEffect)((()=>{g(n?"loading":"pending")}),[n]);const m=(0,t.useRef)(),u=(0,t.useCallback)((()=>{if(!n)return;h();const e=new Image;e.src=n,c&&(e.crossOrigin=c),i&&(e.srcset=i),l&&(e.sizes=l),a&&(e.loading=a),e.onload=e=>{h(),g("loaded"),null==o||o(e)},e.onerror=e=>{h(),g("failed"),null==s||s(e)},m.current=e}),[n,c,i,l,o,s,a]),h=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.U)((()=>{if(!d)return"loading"===p&&u(),()=>{h()}}),[p,u,d]),d?"loaded":p}var o=(e,a)=>"loaded"!==e&&"beforeLoadOrError"===a||"failed"===e&&"onError"===a},1317:(e,a,n)=>{n.d(a,{E:()=>d});var r=n(8039),t=n(6296),i=n(2867),o=n(6306),s=n(7681),c=n(7924),l=n(4414),d=(0,r.R)((function(e,a){const n=(0,t.Vl)("Text",e),{className:r,align:d,decoration:p,casing:g,...m}=(0,i.MN)(e),u=(0,c.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(o.B.p,{ref:a,className:(0,s.cx)("chakra-text",e.className),...u,...m,__css:n})}));d.displayName="Text"},7924:(e,a,n)=>{function r(e){const a=Object.assign({},e);for(let n in a)void 0===a[n]&&delete a[n];return a}n.d(a,{o:()=>r})}}]);