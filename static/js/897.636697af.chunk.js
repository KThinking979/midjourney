"use strict";(self.webpackChunkmidjourney=self.webpackChunkmidjourney||[]).push([[897],{897:(e,n,t)=>{t.r(n),t.d(n,{SlideAds:()=>g});var i=t(9950),s=t(9703),o=t(1389),r=t(1317),d=t(1374),a=t(393),c=t(4418),l=t(6365),x=t(327),u=t(712),h=t(5236),f=t(6742),m=t(6451),b=t(4414);let p=1;const g=e=>{let{isOpen:n,isAds:t=!0,onPressPay:g,onPressAds:y,onClose:j}=e;const{t:A}=(0,f.B)(),{user:S,configs:k}=(0,i.useContext)(h.rf),{setUser:w}=(0,i.useContext)(h.D8),[v,E]=(0,i.useState)(S&&S.numAdsGen?S.numAdsGen:1);(0,i.useEffect)((()=>{C()}),[]);const C=async()=>{if(k&&S){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>S.expDateAdsGen&&(E(1),w({...S,numAdsGen:1,expDateAdsGen:e}),(0,u.TK)({id:S.id,numAdsGen:1,expDateAdsGen:e}))}p=1},z=(0,i.useCallback)((e=>{p<k.countADS?P():p=1}),[]),P=async()=>{p++;const e=Object.keys(k.ADS).length,n=k.ADS.sort((()=>Math.random()-.5));let t=v<=e?n["".concat(v-1)]:n["".concat(v%e===0?e-1:v%e-1)];t||(t=n["".concat(e-1)]);window.Adsgram.init({blockId:t}).show().then((e=>{let n=v+1;(0,u.TK)({id:S.id,numAdsGen:n}),w({...S,numAdsGen:n}),E(n),y&&y()})).catch((e=>{z(e)}))};return(0,b.jsxs)(s.q,{direction:"bottom",in:n,style:{zIndex:1e3,height:"100%",flex:1,justifyContent:"space-between"},children:[(0,b.jsx)(o.B,{onClick:()=>j&&j(),h:"55%",opacity:.8,backgroundColor:"black"}),(0,b.jsxs)(o.B,{h:"45%",padding:2,spacing:4,backgroundColor:"gray.800",justifyContent:"center",children:[(0,b.jsxs)(o.B,{spacing:1,mb:4,children:[(0,b.jsx)(r.E,{textAlign:"center",fontWeight:"bold",fontSize:"16px",color:"white",children:A(m.P.dashboard.not_enough_coins)}),(0,b.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.400",children:A(m.P.dashboard.please_buy_more_coin_to_create)})]}),(0,b.jsx)(d.$,{colorScheme:"green",borderRadius:"full",size:"md",onClick:()=>g&&g(),leftIcon:(0,b.jsx)(a.I,{as:l.jXZ,boxSize:6}),children:(0,b.jsx)(c.z,{children:(0,b.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:A(m.P.account.buy_coins)})})}),(0,b.jsx)(r.E,{display:t?"block":"none",color:"white",fontSize:14,textAlign:"center",children:A(m.P.dashboard.or)}),(0,b.jsxs)(o.B,{display:t?"flex":"none",children:[(0,b.jsx)(d.$,{colorScheme:"red",size:"md",borderRadius:"full",onClick:P,leftIcon:(0,b.jsx)(a.I,{as:x.I1Q,boxSize:6}),isDisabled:!!(k&&k.limitAdsGen<=v),children:(0,b.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:A(m.P.dashboard.watch_ads)})}),(0,b.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.300",children:k&&k.limitAdsGen<=v?A(m.P.dashboard.available_tomorrow):A(m.P.dashboard.with_default_setting)})]})]})]})}},9703:(e,n,t)=>{t.d(n,{q:()=>x});var i=t(4850),s=t(7681),o=t(3291),r=t(1489),d=t(9950),a=t(4414),c={exit:{duration:.15,ease:i.xf.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},l={exit:e=>{let{direction:n,transition:t,transitionEnd:s,delay:o}=e;var r;const{exit:d}=(0,i.Jv)({direction:n});return{...d,transition:null!=(r=null==t?void 0:t.exit)?r:i.yA.exit(c.exit,o),transitionEnd:null==s?void 0:s.exit}},enter:e=>{let{direction:n,transitionEnd:t,transition:s,delay:o}=e;var r;const{enter:d}=(0,i.Jv)({direction:n});return{...d,transition:null!=(r=null==s?void 0:s.enter)?r:i.yA.enter(c.enter,o),transitionEnd:null==t?void 0:t.enter}}},x=(0,d.forwardRef)((function(e,n){const{direction:t="right",style:d,unmountOnExit:c,in:x,className:u,transition:h,transitionEnd:f,delay:m,motionProps:b,...p}=e,g=(0,i.Jv)({direction:t}),y=Object.assign({position:"fixed"},g.position,d),j=!c||x&&c,A=x||c?"enter":"exit",S={transitionEnd:f,transition:h,direction:t,delay:m};return(0,a.jsx)(o.N,{custom:S,children:j&&(0,a.jsx)(r.P.div,{...p,ref:n,initial:"exit",className:(0,s.cx)("chakra-slide",u),animate:A,exit:"exit",custom:S,variants:l,style:y,...b})})}));x.displayName="Slide"}}]);