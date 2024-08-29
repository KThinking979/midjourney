"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[712],{712:(e,t,a)=>{a.d(t,{kg:()=>h,Dn:()=>_,Ww:()=>g,Zt:()=>x,Y_:()=>u,Vo:()=>m,wz:()=>A,EQ:()=>D,FH:()=>b,F:()=>E,Ip:()=>S,Y4:()=>f,bF:()=>y,TK:()=>w,jH:()=>p});var o=a(6220),s=a(815),n=a(9751);const r=(0,s.Wp)({apiKey:"AIzaSyBOTVOdSu20rXHX_VWHnV3XmS9ZcnfQuBQ",authDomain:"midjourneyai-71161.firebaseapp.com",projectId:"midjourneyai-71161",storageBucket:"midjourneyai-71161.appspot.com",messagingSenderId:"559017193613",appId:"1:559017193613:web:8f4159f592c0a63e4e32c4",measurementId:"G-FEN6H6F61Y"}),c=(0,o.aU)(r),l=(0,n.c7)(r);var i=a(4456),d=a(7385);const p=async e=>{let{name:t,data:a,folder:o="INPUT",isUrl:s}=e,r="";const c="".concat(o,"/").concat(t),i=(0,n.KR)(l,c);let p=a;return s&&(p=await(0,d.hs)(a)),await(0,n.ls)(i,p,"data_url"),r=await(0,n.qk)(i),r},g=async e=>{let{url:t}=e;try{const e=t,a=(0,n.KR)(l,e);return await(0,n.XR)(a),!0}catch(a){console.log("Error deleteFile ",a)}},u=async()=>{try{let e;const t=(0,o.H9)(c,"configs","configs"),a=await(0,o.x7)(t);return a.exists()&&(e=a.data()),e}catch(e){console.error("Error getUser: ",e)}},m=async()=>{try{let e;const t=(0,o.H9)(c,"configs","listAIStyle"),a=await(0,o.x7)(t);return a.exists()&&(e=a.data()),e}catch(e){console.error("Error listAIStyle: ",e)}},h=async e=>{let{id:t,username:a,coins:s}=e;try{const e=(new Date).toISOString().slice(0,10).replace("-","").replace("-","");await(0,o.BN)((0,o.H9)(c,"users","".concat(t)),{id:"".concat(t),username:a,coins:s,numAds:1,numAdsGen:1,expDateAds:e,expDateAdsGen:e,language:"en",createdAt:new Date,updateAt:new Date}),await(0,o.BN)((0,o.H9)(c,"albums","".concat(t)),{albums:[]})}catch(n){console.error("Error createUser: ",n)}},y=async e=>{let{id:t,coins:a,transactionId:s}=e;try{await(0,o.mZ)((0,o.H9)(c,"users","".concat(t)),{coins:a,updateAtTrans:"COIN_".concat(new Date),transactionId:"".concat(s)})}catch(n){console.error("Error updateCoinsUser: ",n)}},w=async e=>{let{id:t,coins:a,language:s,numAds:n,numAdsGen:r,expDateAds:l,expDateAdsGen:i,updatedAt:d}=e;try{let e={};s&&(e={...e,language:s}),null!==a&&void 0!==a&&(e={...e,coins:a}),null!==n&&void 0!==n&&(e={...e,numAds:n}),null!==r&&void 0!==r&&(e={...e,numAdsGen:r}),null!==l&&void 0!==l&&(e={...e,expDateAds:l}),null!==i&&void 0!==i&&(e={...e,expDateAdsGen:i}),await(0,o.mZ)((0,o.H9)(c,"users","".concat(t)),{...e,updateAt:d||new Date})}catch(p){console.error("Error updateCoinsUser: ",p)}},f=async e=>{let{id:t,data:a}=e;try{await(0,o.mZ)((0,o.H9)(c,"albums","".concat(t)),{albums:(0,o.hq)(a)})}catch(s){console.error("Error updateAlbumAccount: ",s)}},_=async e=>{let{id:t,data:a}=e;try{await(0,o.mZ)((0,o.H9)(c,"albums","".concat(t)),{albums:(0,o.C3)(a)})}catch(s){console.error("Error deleteAlbum: ",s)}},x=async e=>{let{id:t,cursor:a}=e;try{let e=[];const a=(0,o.H9)(c,"albums","".concat(t)),s=await(0,o.x7)(a);return s.exists()&&(e=s.data()),e.albums}catch(s){console.error("Error getAlbums: ",s)}},A=async e=>{try{let t;const a=(0,o.H9)(c,"users","".concat(e)),s=await(0,o.x7)(a);return s.exists()&&(t=s.data()),t}catch(t){console.error("Error getUser: ",t)}},b=async e=>{let{model:t,server:a,text:o,cursor:s}=e;try{"".concat(window.location.protocol,"//").concat(a);const e=new Headers;e.append("Content-Type","application/json"),e.append("Accept","application/json, text/plain, */*"),e.append("Accept-Language","en-US,en;q=0.9"),e.append("Referer","https://lexica.art/");return i.Ze}catch(n){return console.log("Kai Error ",n),{error:!0}}},E=async e=>{let{server:t,token:a,textKey:o,negativeKey:s,width:n,height:r,samples:c,steps:l,scale:i,seed:p}=e;try{const e="".concat(t,"/text-to-image");console.log("ADDRESS ",e),console.log("token ",a),console.log("textKey ",o),console.log("negativeKey ",s),console.log("steps ",l),console.log("samples, ",c),console.log("scale ",i),console.log("seed",p),console.log("width",n),console.log("height",r);const g=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"image/png",Authorization:a},body:JSON.stringify({cfg_scale:i,clip_guidance_preset:"NONE",height:r,width:n,samples:1,steps:l,seed:p,text_prompts:[{text:o,weight:1},{text:s,weight:-1}]})});if(!g.ok)return{error:!0};let u=!0;g.headers&&g.headers.map&&"CONTENT_FILTERED"===g.headers.map["finish-reason"]&&(u=!1);const m=await g.blob();return{data:(await(0,d.Sk)(m)).replace("data:application/octet-stream;base64,","data:image/png;base64,"),isSuccess:u}}catch(g){return{error:!0}}},S=async e=>{let{server:t,token:a,textKey:o,negativeKey:s,steps:n,width:r,height:c,scale:l,seed:i,samples:p,samplerIndex:g,model:u,isControl:m,controlNets:h,isHD:y}=e;try{const e="".concat(t,"/txt2img"),w=new Headers;w.append("Authorization","Bearer ".concat(a)),w.append("content-type","application/json"),w.append("accept","application/json"),console.log("ADDRESS ",e),console.log("textKey ",o),console.log("negativeKey ",s),console.log("steps ",n),console.log("width ",r),console.log("height ",c),console.log("scale ",l),console.log("seed ",i),console.log("samples ",p),console.log("modelName ",u),console.log("samplerIndex ",g),console.log("isHD ",y),console.log("isControl ",m),console.log("controlNets ",h);let f={extra:{enable_nsfw_detection:!1},prompt:o,negative_prompt:s,sampler_name:g||"Euler a",batch_size:p||1,steps:n,cfg_scale:l,seed:i||-1,width:r,height:c,model_name:u||"anyhentai_20_31826.safetensors"};m&&(f={...f,alwayson_scripts:{controlnet:{args:[...h]}}}),y&&(f={...f,enable_hr:!0,hr_upscaler:"R-ESRGAN 4x+",hr_scale:2});const _=await fetch(e,{method:"POST",headers:w,body:JSON.stringify(f)});if(200!==_.status)return console.log("Error ",await _.text()),{error:!0};const x=(await _.json()).data.task_id;let A,b="",E=0;for(;E<3600;){const e=await fetch("".concat(t,"/progress?task_id=").concat(x),{method:"GET",headers:w});if(A=await e.json(),2===A.data.status&&A.data.imgs.length){b=A.data.imgs[0];break}await(0,d.yy)(1e3),E++}return{data:b,isSuccess:!0}}catch(w){return console.log("Error ",w),{error:!0}}},D=async e=>{let{server:t,token:a,base64:o,textKey:s,negativeKey:n,steps:r,width:c,height:l,strength:i,scale:p,seed:g,samples:u,samplerIndex:m,modelServer:h,isControl:y,controlNets:w}=e;try{const e="".concat(t,"/img2img"),f=new Headers;f.append("Authorization","Bearer ".concat(a)),f.append("content-type","application/json"),f.append("accept","application/json");let _={extra:{enable_nsfw_detection:!1},prompt:s,negative_prompt:n,sampler_name:m||"Euler a",batch_size:u||1,steps:r,cfg_scale:p,seed:g||-1,width:c,height:l,model_name:h||"anyhentai_20_31826.safetensors",denoising_strength:1-i,init_images:[o]};if(y){const e=[];for(let t=0;t<w.length;t++)e.push({...w[t],input_image:o});_={..._,controlnet_units:e}}const x=await fetch(e,{method:"POST",headers:f,body:JSON.stringify(_)});if(200!==x.status){const e=await x.text();return console.log("Error ",e),{error:!0,message:e}}const A=(await x.json()).data.task_id;let b,E="",S=0;for(;S<3600;){const e=await fetch("".concat(t,"/progress?task_id=").concat(A),{method:"GET",headers:f});if(b=await e.json(),2===b.data.status&&b.data.imgs.length){E=b.data.imgs[0];break}await(0,d.yy)(1e3),S++}return{data:E,isSuccess:!0}}catch(f){return console.log("Error ",f),{error:!0,message:f}}}},7385:(e,t,a)=>{a.d(t,{RZ:()=>s,Sk:()=>n,hs:()=>r,yy:()=>o});const o=e=>new Promise((t=>setTimeout(t,e))),s=e=>{let{min:t,max:a}=e;return Math.floor(Math.random()*(a-t+1))+t},n=e=>new Promise(((t,a)=>{const o=new FileReader;o.onloadend=()=>t(o.result),o.readAsDataURL(e)})),r=async e=>{const t=await fetch(e),a=await t.blob();return new Promise(((e,t)=>{const o=new FileReader;o.readAsDataURL(a),o.onloadend=()=>{const t=o.result;e(t)},o.onerror=t}))}}}]);