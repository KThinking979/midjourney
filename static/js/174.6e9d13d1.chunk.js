(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[174],{1940:(e,t,n)=>{"use strict";n.d(t,{Kc:()=>r,MF:()=>o,nn:()=>a});var i=n(4451);const o=(0,i.j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast)),a=(0,i.j)((()=>n.e(606).then(n.bind(n,9606))),(e=>e.ImageSkeleton)),r=(0,i.j)((()=>n.e(613).then(n.bind(n,2613))),(e=>e.ImageSkeletonShow))},3246:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});const i=(0,n(4451).j)((()=>Promise.all([n.e(545),n.e(825)]).then(n.bind(n,825))),(e=>e.ModalLoading))},174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ArtArtisticPage:()=>y});var i=n(9950),o=n(6455),a=n(2099),r=n(3247),s=n(1389),c=n(4418),l=n(1374),d=n(393),u=n(1317),f=n(5236),p=n(3564),h=n(3246),m=n(712),g=n(1940),w=n(327),x=n(4414),v=n(4691);let b=window.innerWidth>500?500:window.innerWidth;const y=()=>{const e=(0,p.Zp)(),t=((0,a.d)(),(0,p.zy)()),{user:n,configs:y}=(0,i.useContext)(f.rf),{setUser:j}=(0,i.useContext)(f.D8),[S,k]=(0,i.useState)(!1),[E,A]=(0,i.useState)(),[I,B]=(0,i.useState)("");(0,i.useEffect)((()=>{window.scrollTo(0,0),C()}),[]);const C=async()=>{try{const e=t.state;A(e.dataAI),B(e.dataAI.uri)}catch(e){console.log("Error ",e),k(!1)}},_=(0,i.useCallback)((async()=>{n&&(k(!0),await v.saveAs(I),k(!1))}),[E,I]),R=(0,i.useCallback)((async()=>{if(!n)return;k(!0),await(0,m.Ww)({url:I});const t={id:E.id,type:E.type,isImage:E.isImage,prompt:E.prompt,negative:E.negative,style:E.style,width:E.width,height:E.height,steps:E.steps,scale:E.scale,uri:E.uri};await(0,m.Dn)({id:n.id,data:t}),k(!1),e(-1)}),[E,I]);return(0,x.jsxs)(r.az,{children:[(0,x.jsxs)(o.mg,{children:[(0,x.jsx)("title",{children:"Gen Artistic"}),(0,x.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,x.jsxs)(s.B,{h:"100vh",w:b,pt:20,px:2,justifyContent:"space-between",children:[(0,x.jsx)(s.B,{flex:1,justifyContent:"center",children:E&&I&&(0,x.jsx)(g.Kc,{uri:I,width:b,height:b/(E.width/E.height)},I)}),(0,x.jsx)(s.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,x.jsxs)(c.z,{spacing:2,children:[(0,x.jsx)(l.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:_,leftIcon:(0,x.jsx)(d.I,{as:w.mCe,boxSize:5}),flex:1,children:(0,x.jsx)(c.z,{children:(0,x.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Download"})})}),(0,x.jsx)(l.$,{flex:1,py:4,mx:2,my:4,colorScheme:"red",borderRadius:"full",onClick:R,leftIcon:(0,x.jsx)(d.I,{as:w.Rrl,boxSize:5}),isDisabled:""===I,children:(0,x.jsx)(c.z,{children:(0,x.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Delete"})})})]})})]}),(0,x.jsx)(h.a,{isOpen:S})]})}},4691:function(e,t,n){var i,o,a;o=[],void 0===(a="function"===typeof(i=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){c(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):o(c.href)?i(e,t,n):a(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(o(e))i(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return i(e,t,n);var a="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&c||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},d.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,f=u.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?i.apply(t,o):i)||(e.exports=a)},1374:(e,t,n)=>{"use strict";n.d(t,{$:()=>w});var i=n(9950);var o=n(221),[a,r]=(0,o.q)({strict:!1,name:"ButtonGroupContext"}),s=n(6306),c=n(7681),l=n(4414);function d(e){const{children:t,className:n,...o}=e,a=(0,i.isValidElement)(t)?(0,i.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,r=(0,c.cx)("chakra-button__icon",n);return(0,l.jsx)(s.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:r,children:a})}d.displayName="ButtonIcon";var u=n(63);function f(e){const{label:t,placement:n,spacing:o="0.5rem",children:a=(0,l.jsx)(u.y,{color:"currentColor",width:"1em",height:"1em"}),className:r,__css:d,...f}=e,p=(0,c.cx)("chakra-button__spinner",r),h="start"===n?"marginEnd":"marginStart",m=(0,i.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[h]:t?o:0,fontSize:"1em",lineHeight:"normal",...d})),[d,t,h,o]);return(0,l.jsx)(s.B.div,{className:p,...f,__css:m,children:a})}f.displayName="ButtonSpinner";var p=n(7237),h=n(8039),m=n(6296),g=n(2867),w=(0,h.R)(((e,t)=>{const n=r(),o=(0,m.Vl)("Button",{...n,...e}),{isDisabled:a=(null==n?void 0:n.isDisabled),isLoading:d,isActive:u,children:h,leftIcon:w,rightIcon:v,loadingText:b,iconSpacing:y="0.5rem",type:j,spinner:S,spinnerPlacement:k="start",className:E,as:A,...I}=(0,g.MN)(e),B=(0,i.useMemo)((()=>{const e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}}),[o,n]),{ref:C,type:_}=function(e){const[t,n]=(0,i.useState)(!e);return{ref:(0,i.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(A),R={rightIcon:v,leftIcon:w,iconSpacing:y,children:h};return(0,l.jsxs)(s.B.button,{ref:(0,p.SV)(t,C),as:A,type:null!=j?j:_,"data-active":(0,c.sE)(u),"data-loading":(0,c.sE)(d),__css:B,className:(0,c.cx)("chakra-button",E),...I,disabled:a||d,children:[d&&"start"===k&&(0,l.jsx)(f,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:y,children:S}),d?b||(0,l.jsx)(s.B.span,{opacity:0,children:(0,l.jsx)(x,{...R})}):(0,l.jsx)(x,{...R}),d&&"end"===k&&(0,l.jsx)(f,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:y,children:S})]})}));function x(e){const{leftIcon:t,rightIcon:n,children:i,iconSpacing:o}=e;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(d,{marginEnd:o,children:t}),i,n&&(0,l.jsx)(d,{marginStart:o,children:n})]})}w.displayName="Button"},7237:(e,t,n)=>{"use strict";n.d(t,{Px:()=>o,SV:()=>a});var i=n(9950);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{!function(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(n){throw new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}else e(t)}(t,e)}))}}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.useMemo)((()=>o(...t)),t)}},2099:(e,t,n)=>{"use strict";n.d(t,{d:()=>s});var i=n(6598),o=n(9791),a=n(4336),r=n(9950);function s(e){const{theme:t}=(0,a.UQ)(),n=(0,i.NU)();return(0,r.useMemo)((()=>(0,o.UP)(t.direction,{...n,...e})),[e,t.direction,n])}}}]);