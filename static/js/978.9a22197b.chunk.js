"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[978],{5978:(e,r,n)=>{n.r(r),n.d(r,{AccountPage:()=>O});var a=n(9950),i=n(6455),t=n(3247),s=n(7981),o=n(7681),c=n(8039),l=n(6306),d=n(4414);(0,c.R)((function(e,r){const{spacing:n="0.5rem",spacingX:i,spacingY:t,children:s,justify:c,direction:g,align:u,className:f,shouldWrapChildren:m,...p}=e,x=(0,a.useMemo)((()=>m?a.Children.map(s,((e,r)=>(0,d.jsx)(h,{children:e},r))):s),[s,m]);return(0,d.jsx)(l.B.div,{ref:r,className:(0,o.cx)("chakra-wrap",f),...p,children:(0,d.jsx)(l.B.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:u,flexDirection:g,listStyleType:"none",gap:n,columnGap:i,rowGap:t,padding:"0"},children:x})})})).displayName="Wrap";var h=(0,c.R)((function(e,r){const{className:n,...a}=e;return(0,d.jsx)(l.B.li,{ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,o.cx)("chakra-wrap__listitem",n),...a})}));h.displayName="WrapItem";var g=n(221),[u,f]=(0,g.q)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function m(e){var r;const n=e.split(" "),a=null!=(r=n[0])?r:"",i=n.length>1?n[n.length-1]:"";return a&&i?"".concat(a.charAt(0)).concat(i.charAt(0)):a.charAt(0)}function p(e){const{name:r,getInitials:n,...a}=e,i=f();return(0,d.jsx)(l.B.div,{role:"img","aria-label":r,...a,__css:i.label,children:r?null==n?void 0:n(r):null})}p.displayName="AvatarName";var x=e=>(0,d.jsxs)(l.B.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,d.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,d.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),j=n(5812);function b(e){const{src:r,srcSet:n,onError:i,onLoad:t,getInitials:s,name:o,borderRadius:c,loading:h,iconLabel:g,icon:u=(0,d.jsx)(x,{}),ignoreFallback:f,referrerPolicy:m,crossOrigin:b}=e,y=(0,j.l)({src:r,onError:i,crossOrigin:b,ignoreFallback:f});return!r||!("loaded"===y)?o?(0,d.jsx)(p,{className:"chakra-avatar__initials",getInitials:s,name:o}):(0,a.cloneElement)(u,{role:"img","aria-label":g}):(0,d.jsx)(l.B.img,{src:r,srcSet:n,alt:o,onLoad:t,referrerPolicy:m,crossOrigin:null!=b?b:void 0,className:"chakra-avatar__img",loading:h,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})}b.displayName="AvatarImage";var y=n(7040),v=n(2867),_={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},w=(0,c.R)(((e,r)=>{const n=(0,y.o5)("Avatar",e),[i,t]=(0,a.useState)(!1),{src:s,srcSet:c,name:h,showBorder:g,borderRadius:f="full",onError:p,onLoad:j,getInitials:w=m,icon:S=(0,d.jsx)(x,{}),iconLabel:N=" avatar",loading:C,children:k,borderColor:B,ignoreFallback:z,crossOrigin:E,referrerPolicy:I,...A}=(0,v.MN)(e),W={borderRadius:f,borderWidth:g?"2px":void 0,..._,...n.container};return B&&(W.borderColor=B),(0,d.jsx)(l.B.span,{ref:r,...A,className:(0,o.cx)("chakra-avatar",e.className),"data-loaded":(0,o.sE)(i),__css:W,children:(0,d.jsxs)(u,{value:n,children:[(0,d.jsx)(b,{src:s,srcSet:c,loading:C,onLoad:(0,o.Hj)(j,(()=>{t(!0)})),onError:p,getInitials:w,name:h,borderRadius:f,icon:S,iconLabel:N,ignoreFallback:z,crossOrigin:E,referrerPolicy:I}),k]})})}));w.displayName="Avatar";var S=n(3731),N=n(4418),C=n(6086),k=n(6569),B=n(4905),z=(0,c.R)((function(e,r){const{borderLeftWidth:n,borderBottomWidth:a,borderTopWidth:i,borderRightWidth:t,borderWidth:s,borderStyle:c,borderColor:h,...g}=(0,y.Vl)("Divider",e),{className:u,orientation:f="horizontal",__css:m,...p}=(0,v.MN)(e),x={vertical:{borderLeftWidth:n||t||s||"1px",height:"100%"},horizontal:{borderBottomWidth:a||i||s||"1px",width:"100%"}};return(0,d.jsx)(l.B.hr,{ref:r,"aria-orientation":f,...p,__css:{...g,border:"0",borderColor:h,borderStyle:c,...x[f],...m},className:(0,o.cx)("chakra-divider",u)})}));z.displayName="Divider";var E=n(5236),I=n(6365),A=n(327),W=n(3660),L=n(5699);let R=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const O=()=>{const{user:e,language:r,configs:o}=(0,a.useContext)(E.rf);console.log("user ",e);const{setUser:c}=a.useContext(E.D8);(0,a.useEffect)((()=>{l(),(async()=>{var r;const n=null===(r=window.Telegram)||void 0===r?void 0:r.WebApp;if(n&&!e){n.ready();const e=n.initDataUnsafe.user;if(e){let r={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:0};const n=await(0,L.wz)(r.id);n?r={...r,coins:n.coins}:await(0,L.kg)(r),c(r)}}})()}),[]);const l=async()=>{};return(0,d.jsxs)(t.az,{children:[(0,d.jsxs)(i.mg,{children:[(0,d.jsx)("title",{children:"Account"}),(0,d.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,d.jsxs)(s.B,{w:R,py:20,pb:40,px:2,spacing:8,children:[e&&(0,d.jsxs)(s.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,d.jsx)(h,{children:(0,d.jsx)(w,{size:"xl",name:e.username,src:""})}),(0,d.jsx)(S.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:e.username}),(0,d.jsx)(W.MJ,{style:{alignSelf:"center",justifyContent:"center"}})]}),(0,d.jsxs)(s.B,{spacing:4,borderRadius:8,borderColor:"gray.800",borderWidth:2,px:2,py:4,children:[(0,d.jsx)(s.B,{spacing:4,children:(0,d.jsxs)(N.z,{spacing:2,justifyContent:"space-between",children:[(0,d.jsxs)(N.z,{children:[(0,d.jsx)(S.E,{color:"white",fontSize:14,fontWeight:"700",children:"Coins: ".concat(e&&e.coins?e.coins:0)}),(0,d.jsx)(C.o,{children:(0,d.jsx)(k._,{boxSize:"18px",src:n(7120),alt:"card"})})]}),(0,d.jsx)(B.$,{size:"sm",py:4,colorScheme:"green",leftIcon:(0,d.jsx)(I.vsi,{color:"white",size:18}),children:"Buy Coins"})]})}),(0,d.jsxs)(s.B,{spacing:4,children:[(0,d.jsx)(z,{colorScheme:"gray"}),(0,d.jsxs)(s.B,{spacing:2,children:[(0,d.jsx)(S.E,{color:"white",fontSize:14,fontWeight:"700",children:"Images: ".concat(e&&e.coins?e.coins/(o&&o.feeBasic?o.feeBasic:.2):0)}),(0,d.jsx)(S.E,{color:"gray.400",fontSize:12,children:"Approximately images with current coin and default setting"})]})]}),(0,d.jsxs)(s.B,{spacing:4,children:[(0,d.jsx)(z,{colorScheme:"gray"}),(0,d.jsxs)(N.z,{spacing:2,justifyContent:"space-between",children:[(0,d.jsx)(S.E,{color:"white",fontSize:14,fontWeight:"700",children:"Watch to Earn"}),(0,d.jsx)(B.$,{size:"sm",py:4,colorScheme:"yellow",borderColor:"yellow.400",variant:"outline",borderRadius:"full",_hover:{backgroundColor:"back"},leftIcon:(0,d.jsx)(A.Am_,{color:"white",size:18}),children:(0,d.jsxs)(N.z,{children:[(0,d.jsx)(S.E,{fontSize:"14px",textAlign:"center",color:"white",children:"1"}),(0,d.jsx)(C.o,{children:(0,d.jsx)(k._,{boxSize:"18px",src:n(7120),alt:"card"})})]})})]})]}),(0,d.jsxs)(s.B,{spacing:4,children:[(0,d.jsx)(z,{colorScheme:"gray"}),(0,d.jsxs)(N.z,{spacing:2,justifyContent:"space-between",children:[(0,d.jsx)(S.E,{color:"white",fontSize:14,fontWeight:"700",children:"Language: ".concat(r&&r.title?r.title:"")}),(0,d.jsx)(B.$,{size:"sm",py:4,colorScheme:"gray",borderColor:"gray.400",variant:"outline",borderRadius:"md",_hover:{backgroundColor:"back"},leftIcon:(0,d.jsx)(A.Mxy,{color:"white",size:18}),children:(0,d.jsx)(S.E,{fontSize:"14px",textAlign:"center",color:"white",children:"Change"})})]})]})]})]})]})}},7120:(e,r,n)=>{e.exports=n.p+"static/media/coin.84cf06a861a4cfb9ad42.png"},4905:(e,r,n)=>{n.d(r,{$:()=>j});var a=n(9950);var i=n(221),[t,s]=(0,i.q)({strict:!1,name:"ButtonGroupContext"}),o=n(6306),c=n(7681),l=n(4414);function d(e){const{children:r,className:n,...i}=e,t=(0,a.isValidElement)(r)?(0,a.cloneElement)(r,{"aria-hidden":!0,focusable:!1}):r,s=(0,c.cx)("chakra-button__icon",n);return(0,l.jsx)(o.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:s,children:t})}d.displayName="ButtonIcon";var h=n(63);function g(e){const{label:r,placement:n,spacing:i="0.5rem",children:t=(0,l.jsx)(h.y,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:d,...g}=e,u=(0,c.cx)("chakra-button__spinner",s),f="start"===n?"marginEnd":"marginStart",m=(0,a.useMemo)((()=>({display:"flex",alignItems:"center",position:r?"relative":"absolute",[f]:r?i:0,fontSize:"1em",lineHeight:"normal",...d})),[d,r,f,i]);return(0,l.jsx)(o.B.div,{className:u,...g,__css:m,children:t})}function u(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return e=>{r.forEach((r=>{!function(e,r){if(null!=e)if("function"!==typeof e)try{e.current=r}catch(n){throw new Error("Cannot assign value '".concat(r,"' to ref '").concat(e,"'"))}else e(r)}(r,e)}))}}function f(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,a.useMemo)((()=>u(...r)),r)}g.displayName="ButtonSpinner";var m=n(8039),p=n(7040),x=n(2867),j=(0,m.R)(((e,r)=>{const n=s(),i=(0,p.Vl)("Button",{...n,...e}),{isDisabled:t=(null==n?void 0:n.isDisabled),isLoading:d,isActive:h,children:u,leftIcon:m,rightIcon:j,loadingText:y,iconSpacing:v="0.5rem",type:_,spinner:w,spinnerPlacement:S="start",className:N,as:C,...k}=(0,x.MN)(e),B=(0,a.useMemo)((()=>{const e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:e}}}),[i,n]),{ref:z,type:E}=function(e){const[r,n]=(0,a.useState)(!e);return{ref:(0,a.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(C),I={rightIcon:j,leftIcon:m,iconSpacing:v,children:u};return(0,l.jsxs)(o.B.button,{ref:f(r,z),as:C,type:null!=_?_:E,"data-active":(0,c.sE)(h),"data-loading":(0,c.sE)(d),__css:B,className:(0,c.cx)("chakra-button",N),...k,disabled:t||d,children:[d&&"start"===S&&(0,l.jsx)(g,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:v,children:w}),d?y||(0,l.jsx)(o.B.span,{opacity:0,children:(0,l.jsx)(b,{...I})}):(0,l.jsx)(b,{...I}),d&&"end"===S&&(0,l.jsx)(g,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:v,children:w})]})}));function b(e){const{leftIcon:r,rightIcon:n,children:a,iconSpacing:i}=e;return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)(d,{marginEnd:i,children:r}),a,n&&(0,l.jsx)(d,{marginStart:i,children:n})]})}j.displayName="Button"},6569:(e,r,n)=>{n.d(r,{_:()=>l});var a=n(8039),i=n(4414),t=(0,a.R)((function(e,r){const{htmlWidth:n,htmlHeight:a,alt:t,...s}=e;return(0,i.jsx)("img",{width:n,height:a,ref:r,alt:t,...s})}));t.displayName="NativeImage";var s=n(5812),o=n(6306);function c(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const a of r)a in n&&delete n[a];return n}var l=(0,a.R)((function(e,r){const{fallbackSrc:n,fallback:a,src:l,srcSet:d,align:h,fit:g,loading:u,ignoreFallback:f,crossOrigin:m,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:x,...j}=e,b=null!=u||f||!(void 0!==n||void 0!==a),y=(0,s.l)({...e,crossOrigin:m,ignoreFallback:b}),v=(0,s.m)(y,p),_={ref:r,objectFit:g,objectPosition:h,...b?j:c(j,["onError","onLoad"])};return v?a||(0,i.jsx)(o.B.img,{as:t,className:"chakra-image__placeholder",src:n,..._}):(0,i.jsx)(o.B.img,{as:t,src:l,srcSet:d,crossOrigin:m,loading:u,referrerPolicy:x,className:"chakra-image",..._})}));l.displayName="Image"},5812:(e,r,n)=>{n.d(r,{l:()=>t,m:()=>s});var a=n(1792),i=n(9950);function t(e){const{loading:r,src:n,srcSet:t,onLoad:s,onError:o,crossOrigin:c,sizes:l,ignoreFallback:d}=e,[h,g]=(0,i.useState)("pending");(0,i.useEffect)((()=>{g(n?"loading":"pending")}),[n]);const u=(0,i.useRef)(),f=(0,i.useCallback)((()=>{if(!n)return;m();const e=new Image;e.src=n,c&&(e.crossOrigin=c),t&&(e.srcset=t),l&&(e.sizes=l),r&&(e.loading=r),e.onload=e=>{m(),g("loaded"),null==s||s(e)},e.onerror=e=>{m(),g("failed"),null==o||o(e)},u.current=e}),[n,c,t,l,s,o,r]),m=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,a.U)((()=>{if(!d)return"loading"===h&&f(),()=>{m()}}),[h,f,d]),d?"loaded":h}var s=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}}]);