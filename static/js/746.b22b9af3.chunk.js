"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[746],{6206:(e,r,a)=>{a.d(r,{e:()=>x});var n=a(221),[i,t]=(0,n.q)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),o=a(6306),s=a(4414);function l(e){var r;const a=e.split(" "),n=null!=(r=a[0])?r:"",i=a.length>1?a[a.length-1]:"";return n&&i?"".concat(n.charAt(0)).concat(i.charAt(0)):n.charAt(0)}function c(e){const{name:r,getInitials:a,...n}=e,i=t();return(0,s.jsx)(o.B.div,{role:"img","aria-label":r,...n,__css:i.label,children:r?null==a?void 0:a(r):null})}c.displayName="AvatarName";var d=e=>(0,s.jsxs)(o.B.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,s.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,s.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),u=a(5812),m=a(9950);function h(e){const{src:r,srcSet:a,onError:n,onLoad:i,getInitials:t,name:l,borderRadius:h,loading:g,iconLabel:f,icon:p=(0,s.jsx)(d,{}),ignoreFallback:v,referrerPolicy:b,crossOrigin:x}=e,y=(0,u.l)({src:r,onError:n,crossOrigin:x,ignoreFallback:v});return!r||!("loaded"===y)?l?(0,s.jsx)(c,{className:"chakra-avatar__initials",getInitials:t,name:l}):(0,m.cloneElement)(p,{role:"img","aria-label":f}):(0,s.jsx)(o.B.img,{src:r,srcSet:a,alt:l,onLoad:i,referrerPolicy:b,crossOrigin:null!=x?x:void 0,className:"chakra-avatar__img",loading:g,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:h}})}h.displayName="AvatarImage";var g=a(8039),f=a(6296),p=a(2867),v=a(7681),b={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},x=(0,g.R)(((e,r)=>{const a=(0,f.o5)("Avatar",e),[n,t]=(0,m.useState)(!1),{src:c,srcSet:u,name:g,showBorder:x,borderRadius:y="full",onError:N,onLoad:_,getInitials:j=l,icon:k=(0,s.jsx)(d,{}),iconLabel:S=" avatar",loading:C,children:B,borderColor:I,ignoreFallback:w,crossOrigin:E,referrerPolicy:L,...A}=(0,p.MN)(e),O={borderRadius:y,borderWidth:x?"2px":void 0,...b,...a.container};return I&&(O.borderColor=I),(0,s.jsx)(o.B.span,{ref:r,...A,className:(0,v.cx)("chakra-avatar",e.className),"data-loaded":(0,v.sE)(n),__css:O,children:(0,s.jsxs)(i,{value:a,children:[(0,s.jsx)(h,{src:c,srcSet:u,loading:C,onLoad:(0,v.Hj)(_,(()=>{t(!0)})),onError:N,getInitials:j,name:g,borderRadius:y,icon:k,iconLabel:S,ignoreFallback:w,crossOrigin:E,referrerPolicy:L}),B]})})}));x.displayName="Avatar"},1374:(e,r,a)=>{a.d(r,{$:()=>v});var n=a(9950);var i=a(221),[t,o]=(0,i.q)({strict:!1,name:"ButtonGroupContext"}),s=a(6306),l=a(7681),c=a(4414);function d(e){const{children:r,className:a,...i}=e,t=(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{"aria-hidden":!0,focusable:!1}):r,o=(0,l.cx)("chakra-button__icon",a);return(0,c.jsx)(s.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o,children:t})}d.displayName="ButtonIcon";var u=a(63);function m(e){const{label:r,placement:a,spacing:i="0.5rem",children:t=(0,c.jsx)(u.y,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:d,...m}=e,h=(0,l.cx)("chakra-button__spinner",o),g="start"===a?"marginEnd":"marginStart",f=(0,n.useMemo)((()=>({display:"flex",alignItems:"center",position:r?"relative":"absolute",[g]:r?i:0,fontSize:"1em",lineHeight:"normal",...d})),[d,r,g,i]);return(0,c.jsx)(s.B.div,{className:h,...m,__css:f,children:t})}m.displayName="ButtonSpinner";var h=a(7237),g=a(8039),f=a(6296),p=a(2867),v=(0,g.R)(((e,r)=>{const a=o(),i=(0,f.Vl)("Button",{...a,...e}),{isDisabled:t=(null==a?void 0:a.isDisabled),isLoading:d,isActive:u,children:g,leftIcon:v,rightIcon:x,loadingText:y,iconSpacing:N="0.5rem",type:_,spinner:j,spinnerPlacement:k="start",className:S,as:C,...B}=(0,p.MN)(e),I=(0,n.useMemo)((()=>{const e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!a&&{_focus:e}}}),[i,a]),{ref:w,type:E}=function(e){const[r,a]=(0,n.useState)(!e);return{ref:(0,n.useCallback)((e=>{e&&a("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(C),L={rightIcon:x,leftIcon:v,iconSpacing:N,children:g};return(0,c.jsxs)(s.B.button,{ref:(0,h.SV)(r,w),as:C,type:null!=_?_:E,"data-active":(0,l.sE)(u),"data-loading":(0,l.sE)(d),__css:I,className:(0,l.cx)("chakra-button",S),...B,disabled:t||d,children:[d&&"start"===k&&(0,c.jsx)(m,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:N,children:j}),d?y||(0,c.jsx)(s.B.span,{opacity:0,children:(0,c.jsx)(b,{...L})}):(0,c.jsx)(b,{...L}),d&&"end"===k&&(0,c.jsx)(m,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:N,children:j})]})}));function b(e){const{leftIcon:r,rightIcon:a,children:n,iconSpacing:i}=e;return(0,c.jsxs)(c.Fragment,{children:[r&&(0,c.jsx)(d,{marginEnd:i,children:r}),n,a&&(0,c.jsx)(d,{marginStart:i,children:a})]})}v.displayName="Button"},6569:(e,r,a)=>{a.d(r,{_:()=>c});var n=a(8039),i=a(4414),t=(0,n.R)((function(e,r){const{htmlWidth:a,htmlHeight:n,alt:t,...o}=e;return(0,i.jsx)("img",{width:a,height:n,ref:r,alt:t,...o})}));t.displayName="NativeImage";var o=a(5812),s=a(6306);function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=Object.assign({},e);for(const n of r)n in a&&delete a[n];return a}var c=(0,n.R)((function(e,r){const{fallbackSrc:a,fallback:n,src:c,srcSet:d,align:u,fit:m,loading:h,ignoreFallback:g,crossOrigin:f,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:v,...b}=e,x=null!=h||g||!(void 0!==a||void 0!==n),y=(0,o.l)({...e,crossOrigin:f,ignoreFallback:x}),N=(0,o.m)(y,p),_={ref:r,objectFit:m,objectPosition:u,...x?b:l(b,["onError","onLoad"])};return N?n||(0,i.jsx)(s.B.img,{as:t,className:"chakra-image__placeholder",src:a,..._}):(0,i.jsx)(s.B.img,{as:t,src:c,srcSet:d,crossOrigin:f,loading:h,referrerPolicy:v,className:"chakra-image",..._})}));c.displayName="Image"},5812:(e,r,a)=>{a.d(r,{l:()=>t,m:()=>o});var n=a(1792),i=a(9950);function t(e){const{loading:r,src:a,srcSet:t,onLoad:o,onError:s,crossOrigin:l,sizes:c,ignoreFallback:d}=e,[u,m]=(0,i.useState)("pending");(0,i.useEffect)((()=>{m(a?"loading":"pending")}),[a]);const h=(0,i.useRef)(),g=(0,i.useCallback)((()=>{if(!a)return;f();const e=new Image;e.src=a,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=e=>{f(),m("loaded"),null==o||o(e)},e.onerror=e=>{f(),m("failed"),null==s||s(e)},h.current=e}),[a,l,t,c,o,s,r]),f=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,n.U)((()=>{if(!d)return"loading"===u&&g(),()=>{f()}}),[u,g,d]),d?"loaded":u}var o=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r},7009:(e,r,a)=>{a.d(r,{Q:()=>l});var n=a(7681),i=a(8039),t=a(6306),o=a(9950),s=a(4414);(0,i.R)((function(e,r){const{spacing:a="0.5rem",spacingX:i,spacingY:c,children:d,justify:u,direction:m,align:h,className:g,shouldWrapChildren:f,...p}=e,v=(0,o.useMemo)((()=>f?o.Children.map(d,((e,r)=>(0,s.jsx)(l,{children:e},r))):d),[d,f]);return(0,s.jsx)(t.B.div,{ref:r,className:(0,n.cx)("chakra-wrap",g),...p,children:(0,s.jsx)(t.B.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:u,alignItems:h,flexDirection:m,listStyleType:"none",gap:a,columnGap:i,rowGap:c,padding:"0"},children:v})})})).displayName="Wrap";var l=(0,i.R)((function(e,r){const{className:a,...i}=e;return(0,s.jsx)(t.B.li,{ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,n.cx)("chakra-wrap__listitem",a),...i})}));l.displayName="WrapItem"},2720:(e,r,a)=>{a.d(r,{c:()=>c});var n=a(8039),i=a(6296),t=a(2867),o=a(6306),s=a(7681),l=a(4414),c=(0,n.R)((function(e,r){const{borderLeftWidth:a,borderBottomWidth:n,borderTopWidth:c,borderRightWidth:d,borderWidth:u,borderStyle:m,borderColor:h,...g}=(0,i.Vl)("Divider",e),{className:f,orientation:p="horizontal",__css:v,...b}=(0,t.MN)(e),x={vertical:{borderLeftWidth:a||d||u||"1px",height:"100%"},horizontal:{borderBottomWidth:n||c||u||"1px",width:"100%"}};return(0,l.jsx)(o.B.hr,{ref:r,"aria-orientation":p,...b,__css:{...g,border:"0",borderColor:h,borderStyle:m,...x[p],...v},className:(0,s.cx)("chakra-divider",f)})}));c.displayName="Divider"},7237:(e,r,a)=>{a.d(r,{Px:()=>i,SV:()=>t});var n=a(9950);function i(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return e=>{r.forEach((r=>{!function(e,r){if(null!=e)if("function"!==typeof e)try{e.current=r}catch(a){throw new Error("Cannot assign value '".concat(r,"' to ref '").concat(e,"'"))}else e(r)}(r,e)}))}}function t(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,n.useMemo)((()=>i(...r)),r)}},2099:(e,r,a)=>{a.d(r,{d:()=>s});var n=a(6598),i=a(9791),t=a(4336),o=a(9950);function s(e){const{theme:r}=(0,t.UQ)(),a=(0,n.NU)();return(0,o.useMemo)((()=>(0,i.UP)(r.direction,{...a,...e})),[e,r.direction,a])}}}]);