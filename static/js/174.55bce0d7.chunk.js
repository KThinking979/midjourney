(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[174],{1940:(e,t,n)=>{"use strict";n.d(t,{Kc:()=>s,MF:()=>a,nn:()=>i});var o=n(4451);const a=(0,o.j)((()=>n.e(465).then(n.bind(n,465))),(e=>e.ImageFast)),i=(0,o.j)((()=>n.e(606).then(n.bind(n,9606))),(e=>e.ImageSkeleton)),s=(0,o.j)((()=>n.e(613).then(n.bind(n,2613))),(e=>e.ImageSkeletonShow))},3246:(e,t,n)=>{"use strict";n.d(t,{a:()=>o});const o=(0,n(4451).j)((()=>Promise.all([n.e(545),n.e(825)]).then(n.bind(n,825))),(e=>e.ModalLoading))},174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ArtArtisticPage:()=>w});var o=n(9950),a=n(6455),i=n(2099),s=n(3247),r=n(1389),c=n(4418),l=n(1374),d=n(393),u=n(1317),f=n(5236),p=n(3564),h=n(3246),m=n(1940),g=n(327),x=n(4414),b=n(4691);let v=window.innerWidth>500?500:window.innerWidth;const w=()=>{(0,p.Zp)(),(0,i.d)();const e=(0,p.zy)(),{user:t,configs:n}=(0,o.useContext)(f.rf),{setUser:w}=(0,o.useContext)(f.D8),[y,j]=(0,o.useState)(!1),[S,k]=(0,o.useState)(),[E,A]=(0,o.useState)("");(0,o.useEffect)((()=>{window.scrollTo(0,0),C()}),[]);const C=async()=>{try{const t=e.state;k(t.dataAI),A(t.dataAI.uri)}catch(t){console.log("Error ",t),j(!1)}},_=((0,o.useCallback)((async()=>{t&&(console.log("Start"),j(!0),await b.saveAs(E),j(!1),console.log("Done"))}),[S,E]),(0,o.useCallback)((async()=>{t&&(console.log("Start"),j(!0),j(!1),console.log("Done"))}),[S,E]));return(0,x.jsxs)(s.az,{children:[(0,x.jsxs)(a.mg,{children:[(0,x.jsx)("title",{children:"Gen Artistic"}),(0,x.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,x.jsxs)(r.B,{h:"100vh",w:v,pt:20,px:2,justifyContent:"space-between",children:[(0,x.jsx)(r.B,{flex:1,justifyContent:"center",children:S&&E&&(0,x.jsx)(m.Kc,{uri:E,width:v,height:v/(S.width/S.height)},E)}),(0,x.jsx)(r.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,x.jsxs)(c.z,{spacing:2,children:[(0,x.jsx)(l.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:async()=>{const e=E,t=await fetch(e),n=e.split("/").pop(),o=await t.blob(),a=URL.createObjectURL(o),i=document.createElement("a");i.href=a,i.download=""+n,document.body.appendChild(i),i.click(),document.body.removeChild(i)},leftIcon:(0,x.jsx)(d.I,{as:g.mCe,boxSize:5}),flex:1,children:(0,x.jsx)(c.z,{children:(0,x.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Download"})})}),(0,x.jsx)(l.$,{flex:1,py:4,mx:2,my:4,colorScheme:"red",borderRadius:"full",onClick:_,leftIcon:(0,x.jsx)(d.I,{as:g.Rrl,boxSize:5}),isDisabled:""===E,children:(0,x.jsx)(c.z,{children:(0,x.jsx)(u.E,{color:"white",fontSize:16,fontWeight:"700",children:"Delete"})})})]})})]}),(0,x.jsx)(h.a,{isOpen:y})]})}},4691:function(e,t,n){var o,a,i;a=[],void 0===(i="function"===typeof(o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,n){var r=s.URL||s.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?i(c):a(c.href)?o(e,t,n):i(c,c.target="_blank")):(c.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(a(e))o(e,n,s);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){i(r)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var i="application/octet-stream"===e.type,c=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,f=u.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,a):o)||(e.exports=i)},1374:(e,t,n)=>{"use strict";n.d(t,{$:()=>x});var o=n(9950);var a=n(221),[i,s]=(0,a.q)({strict:!1,name:"ButtonGroupContext"}),r=n(6306),c=n(7681),l=n(4414);function d(e){const{children:t,className:n,...a}=e,i=(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,c.cx)("chakra-button__icon",n);return(0,l.jsx)(r.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s,children:i})}d.displayName="ButtonIcon";var u=n(63);function f(e){const{label:t,placement:n,spacing:a="0.5rem",children:i=(0,l.jsx)(u.y,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:d,...f}=e,p=(0,c.cx)("chakra-button__spinner",s),h="start"===n?"marginEnd":"marginStart",m=(0,o.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[h]:t?a:0,fontSize:"1em",lineHeight:"normal",...d})),[d,t,h,a]);return(0,l.jsx)(r.B.div,{className:p,...f,__css:m,children:i})}f.displayName="ButtonSpinner";var p=n(7237),h=n(8039),m=n(6296),g=n(2867),x=(0,h.R)(((e,t)=>{const n=s(),a=(0,m.Vl)("Button",{...n,...e}),{isDisabled:i=(null==n?void 0:n.isDisabled),isLoading:d,isActive:u,children:h,leftIcon:x,rightIcon:v,loadingText:w,iconSpacing:y="0.5rem",type:j,spinner:S,spinnerPlacement:k="start",className:E,as:A,...C}=(0,g.MN)(e),_=(0,o.useMemo)((()=>{const e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}}),[a,n]),{ref:B,type:I}=function(e){const[t,n]=(0,o.useState)(!e);return{ref:(0,o.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(A),N={rightIcon:v,leftIcon:x,iconSpacing:y,children:h};return(0,l.jsxs)(r.B.button,{ref:(0,p.SV)(t,B),as:A,type:null!=j?j:I,"data-active":(0,c.sE)(u),"data-loading":(0,c.sE)(d),__css:_,className:(0,c.cx)("chakra-button",E),...C,disabled:i||d,children:[d&&"start"===k&&(0,l.jsx)(f,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:y,children:S}),d?w||(0,l.jsx)(r.B.span,{opacity:0,children:(0,l.jsx)(b,{...N})}):(0,l.jsx)(b,{...N}),d&&"end"===k&&(0,l.jsx)(f,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:y,children:S})]})}));function b(e){const{leftIcon:t,rightIcon:n,children:o,iconSpacing:a}=e;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(d,{marginEnd:a,children:t}),o,n&&(0,l.jsx)(d,{marginStart:a,children:n})]})}x.displayName="Button"},1317:(e,t,n)=>{"use strict";n.d(t,{E:()=>d});var o=n(8039),a=n(6296),i=n(2867),s=n(6306),r=n(7681),c=n(7924),l=n(4414),d=(0,o.R)((function(e,t){const n=(0,a.Vl)("Text",e),{className:o,align:d,decoration:u,casing:f,...p}=(0,i.MN)(e),h=(0,c.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(s.B.p,{ref:t,className:(0,r.cx)("chakra-text",e.className),...h,...p,__css:n})}));d.displayName="Text"},7924:(e,t,n)=>{"use strict";function o(e){const t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}n.d(t,{o:()=>o})},7237:(e,t,n)=>{"use strict";n.d(t,{Px:()=>a,SV:()=>i});var o=n(9950);function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{!function(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(n){throw new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}else e(t)}(t,e)}))}}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.useMemo)((()=>a(...t)),t)}},2099:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var o=n(6598),a=n(9791),i=n(4336),s=n(9950);function r(e){const{theme:t}=(0,i.UQ)(),n=(0,o.NU)();return(0,s.useMemo)((()=>(0,a.UP)(t.direction,{...n,...e})),[e,t.direction,n])}}}]);