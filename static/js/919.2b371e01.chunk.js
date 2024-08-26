"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[919],{8919:(e,r,n)=>{n.r(r),n.d(r,{ImageSkeleton:()=>w});var t=n(9950),a=n(6086),o=n(6569),i=n(1317),s=n(3247);var l=n(7681),c=n(6306),d=n(2867),u=n(8283),f=n(8039),m=n(6296),b=n(4336),g=n(4414),h=(0,c.B)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),p=(0,d.Vg)("skeleton-start-color"),k=(0,d.Vg)("skeleton-end-color"),v=(0,u.i7)({from:{opacity:0},to:{opacity:1}}),y=(0,u.i7)({from:{borderColor:p.reference,background:p.reference},to:{borderColor:k.reference,background:k.reference}}),x=(0,f.R)(((e,r)=>{const n={...e,fadeDuration:"number"===typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"===typeof e.speed?e.speed:.8},a=(0,m.Vl)("Skeleton",n),o=function(){const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>{e.current=!1}),[]),e.current}(),{startColor:i="",endColor:s="",isLoaded:u,fadeDuration:f,speed:x,className:j,fitContent:S,...O}=(0,d.MN)(n),[C,E]=(0,b.rd)("colors",[i,s]),L=function(e){const r=(0,t.useRef)();return(0,t.useEffect)((()=>{r.current=e}),[e]),r.current}(u),_=(0,l.cx)("chakra-skeleton",j),N={...C&&{[p.variable]:C},...E&&{[k.variable]:E}};if(u){const e=o||L?"none":"".concat(v," ").concat(f,"s");return(0,g.jsx)(c.B.div,{ref:r,className:_,__css:{animation:e},...O})}return(0,g.jsx)(h,{ref:r,className:_,...O,__css:{width:S?"fit-content":void 0,...a,...N,_dark:{...a._dark,...N},animation:"".concat(x,"s linear infinite alternate ").concat(y)}})}));x.displayName="Skeleton";var j=e=>{let{size:r="2rem",...n}=e;return(0,g.jsx)(x,{borderRadius:"full",boxSize:r,...n})};j.displayName="SkeletonCircle";var S=n(9587);var O=n(779);var C=n(6396);function E(e){var r,n;const a=(0,l.Gv)(e)?e:{fallback:null!=e?e:"base"},o=(0,C.D)().__breakpoints.details.map((e=>{let{minMaxQuery:r,breakpoint:n}=e;return{breakpoint:n,query:r.replace("@media screen and ","")}})),i=o.map((e=>e.breakpoint===a.fallback)),s=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ssr:n=!0,fallback:a}=r,{getWindow:o}=(0,O.O)(),i=Array.isArray(e)?e:[e];let s=Array.isArray(a)?a:[a];s=s.filter((e=>null!=e));const[l,c]=(0,t.useState)((()=>i.map(((e,r)=>({media:e,matches:n?!!s[r]:o().matchMedia(e).matches})))));return(0,t.useEffect)((()=>{const e=o();c(i.map((r=>({media:r,matches:e.matchMedia(r).matches}))));const r=i.map((r=>e.matchMedia(r))),n=e=>{c((r=>r.slice().map((r=>r.media===e.media?{...r,matches:e.matches}:r))))};return r.forEach((e=>{"function"===typeof e.addListener?e.addListener(n):e.addEventListener("change",n)})),()=>{r.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)}))}}),[o]),l.map((e=>e.matches))}(o.map((e=>e.query)),{fallback:i,ssr:a.ssr});return null!=(n=null==(r=o[s.findIndex((e=>1==e))])?void 0:r.breakpoint)?n:a.fallback}function L(e,r){var n;const t=E((0,l.Gv)(r)?r:{fallback:null!=r?r:"base"}),a=(0,C.D)();if(!t)return;const o=Array.from((null==(n=a.__breakpoints)?void 0:n.keys)||[]);return function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S.fi,t=Object.keys(e).indexOf(r);if(-1!==t)return e[r];let a=n.indexOf(r);for(;a>=0;){const r=n[a];if(e.hasOwnProperty(r)){t=a;break}a-=1}if(-1!==t)return e[n[t]]}(Array.isArray(e)?Object.fromEntries(Object.entries((0,S.a1)(e,o)).map((e=>{let[r,n]=e;return[r,n]}))):e,t,o)}var _=3,N=e=>{const{noOfLines:r=_,spacing:n="0.5rem",skeletonHeight:t="0.5rem",className:a,startColor:o,endColor:i,isLoaded:s,fadeDuration:d,speed:u,variant:f,size:m,colorScheme:b,children:h,...p}=e,k=L("number"===typeof r?[r]:r)||_,v=Array(k).fill(1).map(((e,r)=>r+1));const y=e=>k>1&&e===v.length?"80%":"100%",j=(0,l.cx)("chakra-skeleton__group",a);return(0,g.jsx)(c.B.div,{className:j,...p,children:v.map(((e,r)=>{if(s&&r>0)return null;const a=s?null:{mb:e===v.length?"0":n,width:y(e),height:t};return(0,g.jsx)(x,{startColor:o,endColor:i,isLoaded:s,fadeDuration:d,speed:u,variant:f,size:m,colorScheme:b,...a,children:0===r?h:void 0},v.length.toString()+e)}))})};N.displayName="SkeletonText";const w=e=>{let{key:r,uri:n,isActive:l,title:c,onPress:d}=e;const[u,f]=(0,t.useState)(!1);return(0,g.jsxs)(a.o,{pos:"relative",onClick:()=>d&&d(),flexDirection:"column",children:[(0,g.jsx)(o._,{backgroundColor:l?"blue.400":"transparent",p:l?1:0,display:u?"inline-block":"none",w:"100%",borderRadius:"xl",src:n,alt:"art",onLoad:e=>{f(!0)}}),c&&u&&(0,g.jsx)(i.E,{mt:1,textAlign:"center",color:"white",fontSize:14,children:c}),!u&&(0,g.jsxs)(s.az,{w:"100%",boxShadow:"lg",children:[(0,g.jsx)(j,{size:"10"}),(0,g.jsx)(N,{mt:"2",noOfLines:3,spacing:"2",skeletonHeight:"2"})]})]},r)}},6569:(e,r,n)=>{n.d(r,{_:()=>c});var t=n(8039),a=n(4414),o=(0,t.R)((function(e,r){const{htmlWidth:n,htmlHeight:t,alt:o,...i}=e;return(0,a.jsx)("img",{width:n,height:t,ref:r,alt:o,...i})}));o.displayName="NativeImage";var i=n(5812),s=n(6306);function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const t of r)t in n&&delete n[t];return n}var c=(0,t.R)((function(e,r){const{fallbackSrc:n,fallback:t,src:c,srcSet:d,align:u,fit:f,loading:m,ignoreFallback:b,crossOrigin:g,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:p,...k}=e,v=null!=m||b||!(void 0!==n||void 0!==t),y=(0,i.l)({...e,crossOrigin:g,ignoreFallback:v}),x=(0,i.m)(y,h),j={ref:r,objectFit:f,objectPosition:u,...v?k:l(k,["onError","onLoad"])};return x?t||(0,a.jsx)(s.B.img,{as:o,className:"chakra-image__placeholder",src:n,...j}):(0,a.jsx)(s.B.img,{as:o,src:c,srcSet:d,crossOrigin:g,loading:m,referrerPolicy:p,className:"chakra-image",...j})}));c.displayName="Image"},5812:(e,r,n)=>{n.d(r,{l:()=>o,m:()=>i});var t=n(1792),a=n(9950);function o(e){const{loading:r,src:n,srcSet:o,onLoad:i,onError:s,crossOrigin:l,sizes:c,ignoreFallback:d}=e,[u,f]=(0,a.useState)("pending");(0,a.useEffect)((()=>{f(n?"loading":"pending")}),[n]);const m=(0,a.useRef)(),b=(0,a.useCallback)((()=>{if(!n)return;g();const e=new Image;e.src=n,l&&(e.crossOrigin=l),o&&(e.srcset=o),c&&(e.sizes=c),r&&(e.loading=r),e.onload=e=>{g(),f("loaded"),null==i||i(e)},e.onerror=e=>{g(),f("failed"),null==s||s(e)},m.current=e}),[n,l,o,c,i,s,r]),g=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,t.U)((()=>{if(!d)return"loading"===u&&b(),()=>{g()}}),[u,b,d]),d?"loaded":u}var i=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}}]);