"use strict";(self.webpackChunkmidjourney=self.webpackChunkmidjourney||[]).push([[897],{897:(e,n,t)=>{t.r(n),t.d(n,{SlideAds:()=>y});var i=t(9950),s=t(9703),o=t(1389),r=t(1317),a=t(1374),d=t(393),c=t(4418),l=t(6365),u=t(327),x=t(712),h=t(5236),f=t(6742),b=t(6451),m=t(4414);let p=1;const y=e=>{let{isOpen:n,isAds:t=!0,onPressPay:y,onPressAds:g,onClose:j}=e;const{t:A}=(0,f.B)(),{user:S,configs:k}=(0,i.useContext)(h.rf),{setUser:w}=(0,i.useContext)(h.D8),[v,C]=(0,i.useState)(S&&S.numAdsGen?S.numAdsGen:1);(0,i.useEffect)((()=>{E()}),[]);const E=async()=>{if(k&&S){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>S.expDateAdsGen&&(C(1),w({...S,numAdsGen:1,expDateAdsGen:e}),(0,x.TK)({id:S.id,numAdsGen:1,expDateAdsGen:e}))}p=1},z=(0,i.useCallback)((()=>{let e=v+1;(0,x.TK)({id:S.id,numAdsGen:e}),w({...S,numAdsGen:e}),C(e),g&&g()}),[S,v]),P=(0,i.useCallback)((e=>{p<k.countADS?_():p=1}),[S,v]),_=async()=>{p++;const e=Object.keys(k.ADS).length,n=k.ADS.sort((()=>Math.random()-.5));let t=v<=e?n["".concat(v-1)]:n["".concat(v%e===0?e-1:v%e-1)];t||(t=n["".concat(e-1)]);try{const e=window.Adsgram.init({blockId:"".concat(t)});await e.show(),z()}catch(i){P(i)}};return(0,m.jsxs)(s.q,{direction:"bottom",in:n,style:{zIndex:1e3,height:"100%",flex:1,justifyContent:"space-between"},children:[(0,m.jsx)(o.B,{onClick:()=>j&&j(),h:"55%",opacity:.8,backgroundColor:"black"}),(0,m.jsxs)(o.B,{h:"45%",padding:2,spacing:4,backgroundColor:"gray.800",justifyContent:"center",children:[(0,m.jsxs)(o.B,{spacing:1,mb:4,children:[(0,m.jsx)(r.E,{textAlign:"center",fontWeight:"bold",fontSize:"16px",color:"white",children:A(b.P.dashboard.not_enough_coins)}),(0,m.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.400",children:A(b.P.dashboard.please_buy_more_coin_to_create)})]}),(0,m.jsx)(a.$,{colorScheme:"green",borderRadius:"full",size:"md",onClick:()=>y&&y(),leftIcon:(0,m.jsx)(d.I,{as:l.jXZ,boxSize:6}),children:(0,m.jsx)(c.z,{children:(0,m.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:A(b.P.account.buy_coins)})})}),(0,m.jsx)(r.E,{display:t?"block":"none",color:"white",fontSize:14,textAlign:"center",children:A(b.P.dashboard.or)}),(0,m.jsxs)(o.B,{display:t?"flex":"none",children:[(0,m.jsx)(a.$,{colorScheme:"red",size:"md",borderRadius:"full",onClick:_,leftIcon:(0,m.jsx)(d.I,{as:u.I1Q,boxSize:6}),isDisabled:!!(k&&k.limitAdsGen<=v),children:(0,m.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:A(b.P.dashboard.watch_ads)})}),(0,m.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.300",children:k&&k.limitAdsGen<=v?A(b.P.dashboard.available_tomorrow):A(b.P.dashboard.with_default_setting)})]})]})]})}},9703:(e,n,t)=>{t.d(n,{q:()=>u});var i=t(4850),s=t(7681),o=t(3291),r=t(1489),a=t(9950),d=t(4414),c={exit:{duration:.15,ease:i.xf.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},l={exit:e=>{let{direction:n,transition:t,transitionEnd:s,delay:o}=e;var r;const{exit:a}=(0,i.Jv)({direction:n});return{...a,transition:null!=(r=null==t?void 0:t.exit)?r:i.yA.exit(c.exit,o),transitionEnd:null==s?void 0:s.exit}},enter:e=>{let{direction:n,transitionEnd:t,transition:s,delay:o}=e;var r;const{enter:a}=(0,i.Jv)({direction:n});return{...a,transition:null!=(r=null==s?void 0:s.enter)?r:i.yA.enter(c.enter,o),transitionEnd:null==t?void 0:t.enter}}},u=(0,a.forwardRef)((function(e,n){const{direction:t="right",style:a,unmountOnExit:c,in:u,className:x,transition:h,transitionEnd:f,delay:b,motionProps:m,...p}=e,y=(0,i.Jv)({direction:t}),g=Object.assign({position:"fixed"},y.position,a),j=!c||u&&c,A=u||c?"enter":"exit",S={transitionEnd:f,transition:h,direction:t,delay:b};return(0,d.jsx)(o.N,{custom:S,children:j&&(0,d.jsx)(r.P.div,{...p,ref:n,initial:"exit",className:(0,s.cx)("chakra-slide",x),animate:A,exit:"exit",custom:S,variants:l,style:g,...m})})}));u.displayName="Slide"}}]);