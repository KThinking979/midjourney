"use strict";(self.webpackChunkmidjourney=self.webpackChunkmidjourney||[]).push([[712],{712:(e,t,a)=>{a.d(t,{kg:()=>w,Dn:()=>E,Ww:()=>m,Zt:()=>A,Y_:()=>h,xD:()=>S,Vo:()=>y,FJ:()=>K,wz:()=>x,Kh:()=>O,eL:()=>C,W_:()=>H,v7:()=>I,aB:()=>F,fO:()=>j,EQ:()=>P,DS:()=>N,F:()=>T,Ip:()=>D,jV:()=>L,ym:()=>R,rj:()=>G,J3:()=>z,ZJ:()=>k,sS:()=>g,Y4:()=>b,bF:()=>_,im:()=>v,TK:()=>f,jH:()=>u});var r=a(6220),s=a(815),n=a(9751);const o=(0,s.Wp)({apiKey:"AIzaSyBOTVOdSu20rXHX_VWHnV3XmS9ZcnfQuBQ",authDomain:"midjourneyai-71161.firebaseapp.com",projectId:"midjourneyai-71161",storageBucket:"midjourneyai-71161.appspot.com",messagingSenderId:"559017193613",appId:"1:559017193613:web:8f4159f592c0a63e4e32c4",measurementId:"G-FEN6H6F61Y"}),i=(0,r.aU)(o),c=(0,n.c7)(o);a(4456);var d=a(7385),p=a(4651),l=a.n(p);const g=async e=>{let{text:t,targetLanguage:a,apiKey:r}=e;try{const e="https://translation.googleapis.com/language/translate/v2?key=".concat(r);if(""===t)return{data:t,isSuccess:!0};const s={q:t,target:a},n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(200!==n.status)return console.log("Error ",await n.text()),{error:!0};return{data:(await n.json()).data.translations[0].translatedText,isSuccess:!0}}catch(s){return{error:!0}}},u=async e=>{let{name:t,data:a,folder:r="INPUT",isUrl:s}=e,o="";const i="".concat(r,"/").concat(t,".png"),p=(0,n.KR)(c,i);let l=a;return s&&(l=await(0,d.hs)(a)),await(0,n.ls)(p,l,"data_url"),o=await(0,n.qk)(p),o},m=async e=>{let{url:t}=e;try{const e=t,a=(0,n.KR)(c,e);return await(0,n.XR)(a),!0}catch(a){console.log("Error deleteFile ",a)}},h=async()=>{try{let e;const t=(0,r.H9)(i,"configs","configs"),a=await(0,r.x7)(t);return a.exists()&&(e=a.data()),e}catch(e){console.error("Error getUser: ",e)}},y=async()=>{try{let e;const t=(0,r.H9)(i,"configs","listAIStyle"),a=await(0,r.x7)(t);return a.exists()&&(e=a.data()),e}catch(e){console.error("Error listAIStyle: ",e)}},w=async e=>{let{id:t,username:a,coins:s}=e;try{const e=(new Date).toISOString().slice(0,10).replace("-","").replace("-","");await(0,r.BN)((0,r.H9)(i,"users","".concat(t)),{id:"".concat(t),username:a,coins:s,numAds:1,numAdsGen:1,expDateAds:e,expDateAdsGen:e,language:"en",createdAt:new Date,updateAt:new Date})}catch(n){console.error("Error createUser: ",n)}},_=async e=>{let{id:t,coins:a,transactionId:s}=e;try{await(0,r.mZ)((0,r.H9)(i,"users","".concat(t)),{coins:a,updateAtTrans:"COIN_".concat(new Date),transactionId:"".concat(s)})}catch(n){console.error("Error updateCoinsUser: ",n)}},f=async e=>{let{id:t,coins:a,language:s,numAds:n,numAdsGen:o,expDateAds:c,expDateAdsGen:d,updatedAt:p}=e;try{let e={};s&&(e={...e,language:s}),null!==a&&void 0!==a&&(e={...e,coins:a>=0?a:0}),null!==n&&void 0!==n&&(e={...e,numAds:n}),null!==o&&void 0!==o&&(e={...e,numAdsGen:o}),null!==c&&void 0!==c&&(e={...e,expDateAds:c}),null!==d&&void 0!==d&&(e={...e,expDateAdsGen:d}),await(0,r.mZ)((0,r.H9)(i,"users","".concat(t)),{...e,updateAt:p||new Date})}catch(l){console.error("Error updateCoinsUser: ",l)}},x=async e=>{try{let t;const a=(0,r.H9)(i,"users","".concat(e)),s=await(0,r.x7)(a);return s.exists()&&(t=s.data()),t}catch(t){console.error("Error getUser: ",t)}},K=async()=>{try{let e=[],t=0,a=0;const s=(0,r.rJ)(i,"users");let n=(0,r.P)(s,(0,r.My)("createdAt","desc"));return(await(0,r.GG)(n)).forEach((r=>{const s=r.data();t+=parseFloat(s.coins),s.transactionId&&(a+=1),e.push(s)})),{users:e,coins:t.toFixed(2),pro:a}}catch(e){console.error("Error users: ",e)}},b=async e=>{let{id:t,data:a}=e;try{await(0,r.BN)((0,r.H9)(i,"albums","".concat(t)),{...a,createdAt:new Date,updateAt:new Date})}catch(s){console.error("Error updateAlbumAccount: ",s)}},E=async e=>{let{id:t}=e;try{await(0,r.kd)((0,r.H9)(i,"albums","".concat(t)))}catch(a){console.error("Error deleteAlbum: ",a)}},A=async e=>{let{id:t,idLast:a,limited:s=25}=e;try{let e=[];const n=(0,r.rJ)(i,"albums");let o=(0,r.P)(n,(0,r._M)("userId","==","".concat(t)),(0,r.My)("createdAt","desc"),(0,r.AB)(s));if(a){const e=(0,r.H9)(i,"albums","".concat(a)),c=await(0,r.x7)(e);if(c.exists()){const e=c;o=(0,r.P)(n,(0,r._M)("userId","==","".concat(t)),(0,r.My)("createdAt","desc"),(0,r.HM)(e),(0,r.AB)(s))}else console.log("No such document!")}return(await(0,r.GG)(o)).forEach((t=>{e.push(t.data())})),e}catch(n){console.error("Error getAlbums: ",n)}},S=async e=>{let{idLast:t,queryText:a="",limited:s=25}=e;try{let e=[];const n=(0,r.rJ)(i,"listKeys");if(a&&""!==a){let o=(0,r.P)(n,(0,r.My)("textKey"),(0,r.EO)(a),(0,r.FD)(a+"\uf8ff"),(0,r.AB)(s));if(t){const e=(0,r.H9)(i,"listKeys","".concat(t)),c=await(0,r.x7)(e);if(c.exists()){const e=c;o=(0,r.P)(n,(0,r.My)("textKey"),(0,r.EO)(a),(0,r.FD)(a+"\uf8ff"),(0,r.HM)(e),(0,r.AB)(s))}else console.log("No such document!")}(await(0,r.GG)(o)).forEach((t=>{e.push(t.data())}))}else{let a=(0,r.P)(n,(0,r.My)("createdAt","desc"),(0,r.AB)(s));if(t){const e=(0,r.H9)(i,"listKeys","".concat(t)),o=await(0,r.x7)(e);if(o.exists()){const e=o;a=(0,r.P)(n,(0,r.My)("createdAt","desc"),(0,r.HM)(e),(0,r.AB)(s))}else console.log("No such document!")}(await(0,r.GG)(a)).forEach((t=>{e.push(t.data())}))}return e}catch(n){console.error("Error getAlbums: ",n)}},v=async e=>{let{id:t,data:a,apiKey:s}=e;try{const e=a.textKey,n=a.negativeKey,o={...a,en:{textKey:e,negativeKey:n},cn:{textKey:(await g({text:e,targetLanguage:"zh-CN",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"zh-CN",apiKey:s})).data},hi:{textKey:(await g({text:e,targetLanguage:"hi",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"hi",apiKey:s})).data},vn:{textKey:(await g({text:e,targetLanguage:"vi",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"vi",apiKey:s})).data},sp:{textKey:(await g({text:e,targetLanguage:"es",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"es",apiKey:s})).data},po:{textKey:(await g({text:e,targetLanguage:"pt",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"pt",apiKey:s})).data},ur:{textKey:(await g({text:e,targetLanguage:"ur",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"ur",apiKey:s})).data},ar:{textKey:(await g({text:e,targetLanguage:"ar",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"ar",apiKey:s})).data},fr:{textKey:(await g({text:e,targetLanguage:"fr",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"fr",apiKey:s})).data},jp:{textKey:(await g({text:e,targetLanguage:"ja",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"ja",apiKey:s})).data},ko:{textKey:(await g({text:e,targetLanguage:"ko",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"ko",apiKey:s})).data},ru:{textKey:(await g({text:e,targetLanguage:"ru",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"ru",apiKey:s})).data},tl:{textKey:(await g({text:e,targetLanguage:"th",apiKey:s})).data,negativeKey:(await g({text:n,targetLanguage:"th",apiKey:s})).data}};return await(0,r.BN)((0,r.H9)(i,"listKeys","".concat(t)),{...o,createdAt:new Date,updateAt:new Date}),o}catch(n){console.error("Error updateKeys: ",n)}},k=e=>{let{file:t,width:a=1024,height:r=1024}=e;return new Promise((e=>{l().imageFileResizer(t,a,r,"PNG",100,0,(t=>{e(t)}),"file",a,r)}))},T=async e=>{let{server:t,token:a,textKey:r,negativeKey:s,width:n,height:o,samples:i,steps:c,scale:p,seed:l}=e;try{const e="".concat(t,"/text-to-image"),i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"image/png",Authorization:a},body:JSON.stringify({cfg_scale:p,clip_guidance_preset:"NONE",height:o,width:n,samples:1,steps:c,seed:l,text_prompts:[{text:r,weight:1},{text:s,weight:-1}]})});if(!i.ok)return{error:!0};let g=!0;i.headers&&i.headers.map&&"CONTENT_FILTERED"===i.headers.map["finish-reason"]&&(g=!1);const u=await i.blob();return{data:(await(0,d.Sk)(u)).replace("data:application/octet-stream;base64,","data:image/png;base64,"),isSuccess:g}}catch(g){return{error:!0}}},j=async e=>{let{server:t,token:a,image:r,textKey:s,negativeKey:n,width:o,height:i,steps:c,samples:p,scale:l,seed:g,strength:u,stylePreset:m}=e;try{const e="".concat(t,"/image-to-image");let p=await k({file:r,width:o,height:i});const h=new FormData;h.append("init_image",p),h.append("cfg_scale",l),h.append("samples","1"),h.append("steps",c),h.append("seed",g),h.append("sampler","K_DPMPP_2M"),h.append("image_strength",u),h.append("text_prompts[0][text]",s),h.append("text_prompts[0][weight]","1"),h.append("text_prompts[1][text]",n),h.append("text_prompts[1][weight]","-1"),m&&h.append("style_preset",m);const y=await fetch(e,{method:"POST",headers:{Accept:"image/png",Authorization:a},credentials:"omit",body:h});if(!y.ok)return console.log("Error ",await y.text()),{error:!0};let w=!0;y.headers&&y.headers.map&&"CONTENT_FILTERED"===y.headers.map["finish-reason"]&&(w=!1);const _=await y.blob();return{data:(await(0,d.Sk)(_)).replace("data:application/octet-stream;base64,","data:image/png;base64,"),isSuccess:w}}catch(h){return console.log("Error requestImageToImage ",h),{error:!0}}},N=async e=>{let{server:t,token:a,textKey:r,negativeKey:s,image:n,strength:o,aspectRatio:i,seed:c,stylePreset:p,model:l="sd3-medium",width:g=512,height:u=512}=e;try{const e="".concat(t,"/generate/sd3"),m=new FormData;if(m.append("mode",n?"image-to-image":"text-to-image"),m.append("prompt",r),"sd3-large-turbo"!==l&&m.append("negative_prompt",s),n||m.append("aspect_ratio",i),m.append("seed",c),m.append("style_preset",p),m.append("model",l),n){let e=1-o,t=await k({file:n,width:g,height:u});m.append("image",t),m.append("strength",e)}const h=await fetch(e,{method:"POST",headers:{Accept:"image/*",Authorization:a},credentials:"omit",body:m});if(!h.ok)return console.log("Error ",await h.text()),{error:!0};let y=!0;h.headers&&h.headers.map&&"CONTENT_FILTERED"===h.headers.map["finish-reason"]&&(y=!1);const w=await h.blob();return{data:(await(0,d.Sk)(w)).replace("data:application/octet-stream;base64,","data:image/png;base64,"),isSuccess:y}}catch(m){return console.log("Error end",m),{error:!0}}},O=async e=>{let{server:t,token:a,textKey:r,negativeKey:s,aspectRatio:n,seed:o,stylePreset:i}=e;try{const e="".concat(t,"/generate/core"),c=new FormData;c.append("prompt",r),c.append("negative_prompt",s),c.append("aspect_ratio",n),c.append("seed",o),c.append("style_preset",i);const p=await fetch(e,{method:"POST",headers:{Accept:"image/*",Authorization:a},credentials:"omit",body:c});if(!p.ok)return console.log("Error ",await p.text()),{error:!0};let l=!0;p.headers&&p.headers.map&&"CONTENT_FILTERED"===p.headers.map["finish-reason"]&&(l=!1);const g=await p.blob();return{data:(await(0,d.Sk)(g)).replace("data:application/octet-stream;base64,","data:image/png;base64,"),isSuccess:l}}catch(c){return{error:!0}}},L=async e=>{let{server:t,token:a,textKey:r,negativeKey:s,aspectRatio:n,seed:o}=e;try{const e="".concat(t,"/generate/ultra"),i=new FormData;i.append("prompt",r),i.append("negative_prompt",s),i.append("aspect_ratio",n),i.append("seed",o);const c=await fetch(e,{method:"POST",headers:{Accept:"image/*",Authorization:a},credentials:"omit",body:i});if(!c.ok)return console.log("Error ",await c.text()),{error:!0};let p=!0;c.headers&&c.headers.map&&"CONTENT_FILTERED"===c.headers.map["finish-reason"]&&(p=!1);const l=await c.blob();return{data:(await(0,d.Sk)(l)).replace("data:application/octet-stream;base64,","data:image/png;base64,"),isSuccess:p}}catch(i){return{error:!0}}},D=async e=>{let{server:t,token:a,textKey:r,negativeKey:s,steps:n,width:o,height:i,scale:c,seed:p,samples:l,samplerIndex:g,model:u,isControl:m,controlNets:h,isHD:y}=e;try{const e="".concat(t,"/txt2img"),w=new Headers;w.append("Authorization","Bearer ".concat(a)),w.append("content-type","application/json"),w.append("accept","application/json");let _={extra:{enable_nsfw_detection:!1},prompt:r,negative_prompt:s,sampler_name:g||"Euler a",batch_size:l||1,steps:n,cfg_scale:c,seed:p||-1,width:o,height:i,model_name:u||"anyhentai_20_31826.safetensors"};m&&(_={..._,alwayson_scripts:{controlnet:{args:[...h]}}}),y&&(_={..._,enable_hr:!0,hr_upscaler:"R-ESRGAN 4x+",hr_scale:2});const f=await fetch(e,{method:"POST",headers:w,body:JSON.stringify(_)});if(200!==f.status)return console.log("Error ",await f.text()),{error:!0};const x=(await f.json()).data.task_id;let K,b="",E=0;for(;E<3600;){const e=await fetch("".concat(t,"/progress?task_id=").concat(x),{method:"GET",headers:w});if(K=await e.json(),2===K.data.status&&K.data.imgs.length){b=K.data.imgs[0];break}await(0,d.yy)(1e3),E++}return{data:b,isSuccess:!0}}catch(w){return console.log("Error ",w),{error:!0}}},P=async e=>{let{server:t,token:a,base64:r,textKey:s,negativeKey:n,steps:o,width:i,height:c,strength:p,scale:l,seed:g,samples:u,samplerIndex:m,model:h,isControl:y,controlNets:w}=e;try{const e="".concat(t,"/img2img"),_=new Headers;_.append("Authorization","Bearer ".concat(a)),_.append("content-type","application/json"),_.append("accept","application/json");let f={extra:{enable_nsfw_detection:!1},prompt:s,negative_prompt:n,sampler_name:m||"Euler a",batch_size:u||1,steps:o,cfg_scale:l,seed:g||-1,width:i,height:c,model_name:h||"anyhentai_20_31826.safetensors",denoising_strength:1-p,init_images:[r]};if(y){const e=[];for(let t=0;t<w.length;t++)e.push({...w[t],input_image:r});f={...f,controlnet_units:e}}const x=await fetch(e,{method:"POST",headers:_,body:JSON.stringify(f)});if(200!==x.status){const e=await x.text();return console.log("Error ",e),{error:!0,message:e}}const K=(await x.json()).data.task_id;let b,E="",A=0;for(;A<3600;){const e=await fetch("".concat(t,"/progress?task_id=").concat(K),{method:"GET",headers:_});if(b=await e.json(),2===b.data.status&&b.data.imgs.length){E=b.data.imgs[0];break}await(0,d.yy)(1e3),A++}return{data:E,isSuccess:!0}}catch(_){return console.log("Error ",_),{error:!0,message:_}}},I=async e=>{let{server:t,token:a,base64:r,textKey:s,negativeKey:n,steps:o,width:i,height:c,strength:p,scale:l,seed:g,samples:u,samplerIndex:m,model:h,isControl:y,controlNets:w}=e;try{const e="".concat(t,"/img2img"),p=new Headers;p.append("Authorization","Bearer ".concat(a)),p.append("content-type","application/json"),p.append("accept","application/json");let _={extra:{enable_nsfw_detection:!1},prompt:s,negative_prompt:n,sampler_name:m||"Euler a",batch_size:u||1,steps:o,cfg_scale:l,seed:g||-1,width:i,height:c,model_name:h||"anyhentai_20_31826.safetensors",denoising_strength:1,init_images:[r]};if(y){const e=[];for(let t=0;t<w.length;t++)e.push({...w[t],input_image:r});_={..._,controlnet_units:e}}const f=await fetch(e,{method:"POST",headers:p,body:JSON.stringify(_)});if(200!==f.status){const e=await f.text();return console.log("Error ",e),{error:!0,message:e}}const x=(await f.json()).data.task_id;let K,b="",E=0;for(;E<3600;){const e=await fetch("".concat(t,"/progress?task_id=").concat(x),{method:"GET",headers:p});if(K=await e.json(),2===K.data.status&&K.data.imgs.length){b=K.data.imgs[0];break}await(0,d.yy)(1e3),E++}return{data:b,isSuccess:!0}}catch(_){return console.log("Error ",_),{error:!0,message:_}}},F=async e=>{let{server:t,token:a,base64:r,textKey:s,negativeKey:n,steps:o,width:i,height:c,strength:p,scale:l,seed:g,samples:u,samplerIndex:m,model:h,isControl:y,controlNets:w}=e;try{const e="".concat(t,"/img2img"),p=new Headers;p.append("Authorization","Bearer ".concat(a)),p.append("content-type","application/json"),p.append("accept","application/json");let _={extra:{enable_nsfw_detection:!1},request:{model_name:h||"anyhentai_20_31826.safetensors",image_base64:r,prompt:s,negative_prompt:n,width:i,height:c,image_num:u||1,steps:o,seed:g||-1,guidance_scale:l,sampler_name:m||"Euler a",strength:1}};if(y){const e=[];for(let t=0;t<w.length;t++)e.push({...w[t],image_base64:r});_.request={..._.request,controlnet:{units:e}}}const f=await fetch(e,{method:"POST",headers:p,body:JSON.stringify(_)});if(200!==f.status){const e=await f.text();return console.log("Error ",e),{error:!0,message:e}}const x=(await f.json()).task_id;let K,b="",E=0;for(;E<3600;){const e=await fetch("".concat(t,"/task-result?task_id=").concat(x),{method:"GET",headers:p});if(K=await e.json(),"TASK_STATUS_SUCCEED"===K.task.status&&K.images.length){b=K.images[0].image_url;break}await(0,d.yy)(1e3),E++}return{data:b,isSuccess:!0}}catch(_){return console.log("Error ",_),{error:!0,message:_}}},C=async e=>{let{server:t,token:a,image:r,isRemoveBg:s}=e;try{const e="".concat(t,"/face-to-sticker"),n={image_url:r.url,prompt:"high quality",image_size:"square_hd",num_inference_steps:20,guidance_scale:4.5,instant_id_strength:.85,ip_adapter_weight:.2,ip_adapter_noise:.5,upscale_steps:10,enable_safety_checker:!1},o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a},body:JSON.stringify(n)});if(200!==o.status)return console.log("Error ",await o.text()),{error:!0};const i=await o.json();return i.images.length?{data:s?i.sticker_image_background_removed.url:i.sticker_image.url,isSuccess:!0}:{error:!0}}catch(n){return console.log("Error requestFaceSticker ",n),{error:!0}}},H=async e=>{let{server:t,token:a,baseImage:r,swapImage:s}=e;try{const e="".concat(t,"/face-swap"),n={base_image_url:r.url,swap_image_url:s.url},o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a},body:JSON.stringify(n)});if(200!==o.status)return{error:!0};const i=await o.json();return i.image?{data:i.image.url,isSuccess:!0}:{error:!0}}catch(n){return{error:!0}}},z=async e=>{let{server:t,token:a,image:r,upscaleFactor:s=2,face:n=!1,model:o}=e;try{const e="".concat(t,"/esrgan"),o={image_url:r.url,scale:s,face:n||!1,model:"RealESRGAN_x4plus"},i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a},body:JSON.stringify(o)});if(200!==i.status)return console.log("Error ",await i.text()),{error:!0};const c=await i.json();return c.image?{data:c.image.url,isSuccess:!0}:{error:!0}}catch(i){return console.log("Error requestFaceSticker ",i),{error:!0}}},R=async e=>{let{server:t,token:a,image:r,upscaleFactor:s=2,steps:n,scale:o,seed:i}=e;try{const e="".concat(t,"/ccsr"),o={image_url:r.url,scale:s,steps:n,seed:i},c=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a},body:JSON.stringify(o)});if(200!==c.status)return console.log("Error ",await c.text()),{error:!0};const d=await c.json();return d.image?{data:d.image.url,isSuccess:!0}:{error:!0}}catch(c){return console.log("Error requestFaceSticker ",c),{error:!0}}},G=async e=>{let{server:t,token:a,image:r,upscaleFactor:s=2,textKey:n,negativeKey:o,steps:i,scale:c,seed:d}=e;try{const e="".concat(t,"/clarity-upscaler"),p={image_url:r.url,upscale_factor:s,prompt:n&&""!==n?n:"masterpiece, best quality, highres",negative_prompt:o&&""!==o?o:"(worst quality, low quality, normal quality:2)",num_inference_steps:i,seed:d,guidance_scale:c},l=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a},body:JSON.stringify(p)});if(200!==l.status)return console.log("Error ",await l.text()),{error:!0};const g=await l.json();return g.image?{data:g.image.url,isSuccess:!0}:{error:!0}}catch(p){return console.log("Error requestFaceSticker ",p),{error:!0}}}},7385:(e,t,a)=>{a.d(t,{RZ:()=>s,Sk:()=>n,hs:()=>o,nJ:()=>i,yy:()=>r});const r=e=>new Promise((t=>setTimeout(t,e))),s=e=>{let{min:t,max:a}=e;return Math.floor(Math.random()*(a-t+1))+t},n=e=>new Promise(((t,a)=>{const r=new FileReader;r.onloadend=()=>t(r.result),r.readAsDataURL(e)})),o=async e=>{const t=await fetch(e),a=await t.blob();return new Promise(((e,t)=>{const r=new FileReader;r.readAsDataURL(a),r.onloadend=()=>{const t=r.result;e(t)},r.onerror=t}))},i=async e=>{let{imageSrc:t,rate:a,iw:r,ih:s}=e,n=0,o=0,i=0,d=0;s>r||s===r&&a>1?(n=0,o=s/2-r/(2*a),i=r,d=r/a,o<0&&(n=r/2-s*a/2,o=0,i=s*a,d=s)):(n=r/2-s*a/2,o=0,i=s*a,d=s,n<0&&(n=0,o=s/2-r/(2*a),i=r,d=r/a));const p=await(l=t,new Promise(((e,t)=>{const a=new Image;a.addEventListener("load",(()=>e(a))),a.addEventListener("error",(e=>t(e))),a.setAttribute("crossOrigin","anonymous"),a.src=l})));var l;const g=document.createElement("canvas"),u=g.getContext("2d");g.width=i,g.height=d,u.drawImage(p,n,o,i,d,0,0,i,d);const m=g.toDataURL("image/jpeg",1);return{file:c(m,"img.png"),base64:m}},c=(e,t)=>{for(var a=e.split(","),r=a[0].match(/:(.*?);/)[1],s=atob(a[1]),n=s.length,o=new Uint8Array(n);n--;)o[n]=s.charCodeAt(n);return new File([o],t,{type:r})}}}]);