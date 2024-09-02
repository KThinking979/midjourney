"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[9132],{9132:(e,r,n)=>{n.r(r),n.d(r,{LanguagePage:()=>h});var o=n(9950),a=n(6455),t=n(3247),i=n(1389),s=n(2481),l=n(6086),c=n(6569),d=n(1317),g=n(5236),u=n(712),m=n(4456),f=n(4414);let p=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const h=()=>{const{user:e,configs:r}=(0,o.useContext)(g.rf),{setUser:n}=(0,o.useContext)(g.D8),[h,x]=(0,o.useState)(m.Yj[0]);(0,o.useEffect)((()=>{j()}),[]);const j=async()=>{if(e&&e.language){const r=m.Yj.find((r=>r.key===e.language));r&&x(r)}};return(0,f.jsxs)(t.az,{children:[(0,f.jsxs)(a.mg,{children:[(0,f.jsx)("title",{children:"Payment"}),(0,f.jsx)("meta",{name:"description",content:"Midjourney AI"})]}),(0,f.jsx)(i.B,{h:"100vh",w:p,py:20,px:2,children:(0,f.jsx)(i.B,{spacing:4,pb:40,children:(0,f.jsx)(s.x,{templateColumns:"repeat(2, 1fr)",gap:8,children:m.Yj.map((r=>{const{id:o,uri:a,title:t,key:s}=r,g=s===h.key;return(0,f.jsxs)(i.B,{spacing:2,borderRadius:8,borderColor:g?"blue.400":"gray.500",backgroundColor:g?"blue.900":"transparent",borderWidth:g?3:1,alignItems:"center",justifyContent:"center",p:4,onClick:()=>{x(r),n({...e,language:r.key}),(0,u.TK)({id:e.id,language:r.key})},children:[(0,f.jsx)(l.o,{children:(0,f.jsx)(c._,{boxSize:"60px",src:a,alt:"card"})}),(0,f.jsx)(d.E,{color:"white",fontSize:14,fontWeight:g?"bold":500,children:t})]},o)}))})})})]})}},6569:(e,r,n)=>{n.d(r,{_:()=>c});var o=n(8039),a=n(4414),t=(0,o.R)((function(e,r){const{htmlWidth:n,htmlHeight:o,alt:t,...i}=e;return(0,a.jsx)("img",{width:n,height:o,ref:r,alt:t,...i})}));t.displayName="NativeImage";var i=n(5812),s=n(6306);function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const o of r)o in n&&delete n[o];return n}var c=(0,o.R)((function(e,r){const{fallbackSrc:n,fallback:o,src:c,srcSet:d,align:g,fit:u,loading:m,ignoreFallback:f,crossOrigin:p,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:x,...j}=e,b=null!=m||f||!(void 0!==n||void 0!==o),w=(0,i.l)({...e,crossOrigin:p,ignoreFallback:b}),k=(0,i.m)(w,h),y={ref:r,objectFit:u,objectPosition:g,...b?j:l(j,["onError","onLoad"])};return k?o||(0,a.jsx)(s.B.img,{as:t,className:"chakra-image__placeholder",src:n,...y}):(0,a.jsx)(s.B.img,{as:t,src:c,srcSet:d,crossOrigin:p,loading:m,referrerPolicy:x,className:"chakra-image",...y})}));c.displayName="Image"},5812:(e,r,n)=>{n.d(r,{l:()=>t,m:()=>i});var o=n(1792),a=n(9950);function t(e){const{loading:r,src:n,srcSet:t,onLoad:i,onError:s,crossOrigin:l,sizes:c,ignoreFallback:d}=e,[g,u]=(0,a.useState)("pending");(0,a.useEffect)((()=>{u(n?"loading":"pending")}),[n]);const m=(0,a.useRef)(),f=(0,a.useCallback)((()=>{if(!n)return;p();const e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=e=>{p(),u("loaded"),null==i||i(e)},e.onerror=e=>{p(),u("failed"),null==s||s(e)},m.current=e}),[n,l,t,c,i,s,r]),p=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.U)((()=>{if(!d)return"loading"===g&&f(),()=>{p()}}),[g,f,d]),d?"loaded":g}var i=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r},1317:(e,r,n)=>{n.d(r,{E:()=>d});var o=n(8039),a=n(6296),t=n(2867),i=n(6306),s=n(7681),l=n(7924),c=n(4414),d=(0,o.R)((function(e,r){const n=(0,a.Vl)("Text",e),{className:o,align:d,decoration:g,casing:u,...m}=(0,t.MN)(e),f=(0,l.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(i.B.p,{ref:r,className:(0,s.cx)("chakra-text",e.className),...f,...m,__css:n})}));d.displayName="Text"},2481:(e,r,n)=>{n.d(r,{x:()=>i});var o=n(8039),a=n(6306),t=n(4414),i=(0,o.R)((function(e,r){const{templateAreas:n,gap:o,rowGap:i,columnGap:s,column:l,row:c,autoFlow:d,autoRows:g,templateRows:u,autoColumns:m,templateColumns:f,...p}=e,h={display:"grid",gridTemplateAreas:n,gridGap:o,gridRowGap:i,gridColumnGap:s,gridAutoColumns:m,gridColumn:l,gridRow:c,gridAutoFlow:d,gridAutoRows:g,gridTemplateRows:u,gridTemplateColumns:f};return(0,t.jsx)(a.B.div,{ref:r,__css:h,...p})}));i.displayName="Grid"},7924:(e,r,n)=>{function o(e){const r=Object.assign({},e);for(let n in r)void 0===r[n]&&delete r[n];return r}n.d(r,{o:()=>o})}}]);