(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[174],{1940:(e,t,n)=>{"use strict";n.d(t,{Kc:()=>s,MF:()=>i,ay:()=>r,nn:()=>a});var o=n(4451);const i=(0,o.j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast)),a=(0,o.j)((()=>n.e(9606).then(n.bind(n,9606))),(e=>e.ImageSkeleton)),s=(0,o.j)((()=>n.e(2613).then(n.bind(n,2613))),(e=>e.ImageSkeletonShow)),r=(0,o.j)((()=>n.e(8977).then(n.bind(n,8977))),(e=>e.ImageSkeletonFace))},174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ArtArtisticPage:()=>x});var o=n(9950),i=n(6455),a=n(2099),s=n(3247),r=n(1389),c=n(4418),l=n(1374),d=n(393),u=n(1317),f=n(5236),p=n(3564),h=n(3246),w=n(712),m=n(1940),b=n(327),g=n(4414),j=n(4691);let v=window.innerWidth>500?500:window.innerWidth;const x=()=>{const e=(0,p.Zp)(),t=((0,a.d)(),(0,p.zy)()),{user:n,configs:x}=(0,o.useContext)(f.rf),{setUser:y}=(0,o.useContext)(f.D8),[k,S]=(0,o.useState)(!1),[A,E]=(0,o.useState)(),[R,C]=(0,o.useState)("");(0,o.useEffect)((()=>{window.scrollTo(0,0),L()}),[]);const L=async()=>{try{const e=t.state;E(e.dataAI),C(e.dataAI.uri)}catch(e){console.log("Error ",e),S(!1)}},I=(0,o.useCallback)((async()=>{n&&(S(!0),await j.saveAs(R),S(!1))}),[A,R]),M=(0,o.useCallback)((async()=>{n&&(S(!0),await(0,w.Ww)({url:R}),await(0,w.Dn)({id:A.id}),S(!1),e(-1))}),[A,R]);return(0,g.jsxs)(s.az,{children:[(0,g.jsxs)(i.mg,{children:[(0,g.jsx)("title",{children:"Gen Artistic"}),(0,g.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,g.jsxs)(r.B,{h:"100vh",w:v,pt:20,px:2,justifyContent:"space-between",children:[(0,g.jsx)(r.B,{flex:1,justifyContent:"center",children:A&&R&&(0,g.jsx)(m.Kc,{uri:R,width:v,height:v/(A.width/A.height)},R)}),(0,g.jsx)(r.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,g.jsxs)(c.z,{spacing:2,children:[(0,g.jsx)(l.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:I,leftIcon:(0,g.jsx)(d.I,{as:b.mCe,boxSize:5}),flex:1,children:(0,g.jsx)(c.z,{children:(0,g.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Download"})})}),(0,g.jsx)(l.$,{flex:1,py:4,mx:2,my:4,colorScheme:"red",borderRadius:"full",onClick:M,leftIcon:(0,g.jsx)(d.I,{as:b.Rrl,boxSize:5}),isDisabled:""===R,children:(0,g.jsx)(c.z,{children:(0,g.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Delete"})})})]})})]}),(0,g.jsx)(h.aj,{isOpen:k})]})}},4691:function(e,t,n){var o,i,a;i=[],void 0===(a="function"===typeof(o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,n){var r=s.URL||s.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):i(c.href)?o(e,t,n):a(c,c.target="_blank")):(c.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(i(e))o(e,n,s);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){a(r)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,c=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&c||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,f=u.createObjectURL(e);i?i.location=f:location.href=f,i=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,i):o)||(e.exports=a)}}]);