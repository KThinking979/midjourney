"use strict";(self.webpackChunkemojifi=self.webpackChunkemojifi||[]).push([[6275],{6189:(e,t)=>{t.A=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},6275:(e,t,n)=>{n.d(t,{Ay:()=>ce});var r=n(9950),o=n(1942),i=n.n(o),a=n(7827),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"===typeof e&&null!==e}function f(e){return m(e.target.files).map((function(e){return u(e)}))}function p(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return u(e)}))]}}))}))}function d(e,t){return(0,a.sH)(this,void 0,void 0,(function(){var n;return(0,a.YH)(this,(function(r){switch(r.label){case 0:return e.items?(n=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(y))]):[3,2];case 1:return[2,v(g(r.sent()))];case 2:return[2,v(m(e.files).map((function(e){return u(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function y(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?w(t):b(e)}function g(e){return e.reduce((function(e,t){return(0,a.fX)((0,a.fX)([],(0,a.zs)(e),!1),(0,a.zs)(Array.isArray(t)?g(t):[t]),!1)}),[])}function b(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=u(t);return Promise.resolve(n)}function h(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(t){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return(0,a.sH)(i,void 0,void 0,(function(){var i,c,u;return(0,a.YH)(this,(function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return c=a.sent(),n(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(h)),r.push(u),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function D(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=u(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var O=n(6189);function j(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P="file-invalid-type",C="file-too-large",z="file-too-small",R="too-many-files",I=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:P,message:"File type must be ".concat(t)}},T=function(e){return{code:C,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:z,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},H={code:R,message:"Too many files"};function L(e,t){var n="application/x-moz-file"===e.type||(0,O.A)(e,t);return[n,n?null:I(t)]}function B(e,t,n){if(K(e.size))if(K(t)&&K(n)){if(e.size>n)return[!1,T(n)];if(e.size<t)return[!1,M(t)]}else{if(K(t)&&e.size<t)return[!1,M(t)];if(K(n)&&e.size>n)return[!1,T(n)]}return[!0,null]}function K(e){return void 0!==e&&null!==e}function _(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function Y(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function U(e){e.preventDefault()}function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!_(e)&&t&&t.apply(void 0,[e].concat(r)),_(e)}))}}function W(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function G(e){return/^.*\.[\w]+$/.test(e)}var X=["children"],q=["open"],N=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],J=["refKey","onChange","onClick"];function Q(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"===typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ie=(0,r.forwardRef)((function(e,t){var n=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ne(ne({},ae),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,y=t.onFileDialogCancel,g=t.onFileDialogOpen,b=t.useFsAccessApi,h=t.autoFocus,w=t.preventDropOnDocument,D=t.noClick,O=t.noKeyboard,x=t.noDrag,k=t.noDragEventsBubbling,S=t.onError,P=t.validator,C=(0,r.useMemo)((function(){return function(e){if(K(e))return Object.entries(e).reduce((function(e,t){var n=F(t,2),r=n[0],o=n[1];return[].concat(j(e),[r],j(o))}),[]).filter((function(e){return W(e)||G(e)})).join(",")}(n)}),[n]),z=(0,r.useMemo)((function(){return function(e){return K(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=F(e,2),n=t[0],r=t[1],o=!0;return W(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(G)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var n=F(t,2),r=n[0],o=n[1];return A(A({},e),{},E({},r,o))}),{})}]:e}(n)}),[n]),R=(0,r.useMemo)((function(){return"function"===typeof g?g:se}),[g]),I=(0,r.useMemo)((function(){return"function"===typeof y?y:se}),[y]),T=(0,r.useRef)(null),M=(0,r.useRef)(null),X=V((0,r.useReducer)(le,ue),2),q=X[0],Z=X[1],ee=q.isFocused,te=q.isFileDialogActive,ie=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&"showOpenFilePicker"in window),ce=function(){!ie.current&&te&&setTimeout((function(){M.current&&(M.current.files.length||(Z({type:"closeDialog"}),I()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",ce,!1),function(){window.removeEventListener("focus",ce,!1)}}),[M,te,I,ie]);var fe=(0,r.useRef)([]),pe=function(e){T.current&&T.current.contains(e.target)||(e.preventDefault(),fe.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",U,!1),document.addEventListener("drop",pe,!1)),function(){w&&(document.removeEventListener("dragover",U),document.removeEventListener("drop",pe))}}),[T,w]),(0,r.useEffect)((function(){return!o&&h&&T.current&&T.current.focus(),function(){}}),[T,h,o]);var de=(0,r.useCallback)((function(e){S?S(e):console.error(e)}),[S]),ve=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e),fe.current=[].concat(Q(fe.current),[e.target]),Y(e)&&Promise.resolve(i(e)).then((function(t){if(!_(e)||k){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=F(L(e,n),1)[0],i=F(B(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a}))}({files:t,accept:C,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:P});Z({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return de(e)}))}),[i,s,de,k,C,c,a,u,l,P]),me=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e);var t=Y(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,k]),ye=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e);var t=fe.current.filter((function(e){return T.current&&T.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),fe.current=t,t.length>0||(Z({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Y(e)&&f&&f(e))}),[T,f,k]),ge=(0,r.useCallback)((function(e,t){var n=[],r=[];e.forEach((function(e){var t=V(L(e,C),2),o=t[0],i=t[1],u=V(B(e,c,a),2),l=u[0],s=u[1],f=P?P(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){r.push({file:e,errors:[H]})})),n.splice(0)),Z({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)}),[Z,u,C,c,a,l,d,v,m,P]),be=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e),fe.current=[],Y(e)&&Promise.resolve(i(e)).then((function(t){_(e)&&!k||ge(t,e)})).catch((function(e){return de(e)})),Z({type:"reset"})}),[i,ge,de,k]),he=(0,r.useCallback)((function(){if(ie.current){Z({type:"openDialog"}),R();var e={multiple:u,types:z};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ge(e,null),Z({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(I(e),Z({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?de(e):(ie.current=!1,M.current?(M.current.value=null,M.current.click()):de(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else M.current&&(Z({type:"openDialog"}),R(),M.current.value=null,M.current.click())}),[Z,R,I,b,ge,de,z,u]),we=(0,r.useCallback)((function(e){T.current&&T.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),he()))}),[T,he]),De=(0,r.useCallback)((function(){Z({type:"focus"})}),[]),Oe=(0,r.useCallback)((function(){Z({type:"blur"})}),[]),je=(0,r.useCallback)((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?he():setTimeout(he,0))}),[D,he]),xe=function(e){return o?null:e},Ae=function(e){return O?null:xe(e)},Ee=function(e){return x?null:xe(e)},Fe=function(e){k&&e.stopPropagation()},ke=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=oe(e,N);return ne(ne(re({onKeyDown:Ae($(i,we)),onFocus:Ae($(a,De)),onBlur:Ae($(c,Oe)),onClick:xe($(u,je)),onDragEnter:Ee($(l,ve)),onDragOver:Ee($(s,me)),onDragLeave:Ee($(f,ye)),onDrop:Ee($(p,be)),role:"string"===typeof r&&""!==r?r:"presentation"},n,T),o||O?{}:{tabIndex:0}),d)}}),[T,we,De,Oe,je,ve,me,ye,be,O,x,o]),Se=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=oe(e,J);return ne(ne({},re({accept:C,multiple:u,type:"file",style:{display:"none"},onChange:xe($(r,be)),onClick:xe($(o,Se)),tabIndex:-1},n,M)),i)}}),[M,n,u,be,o]);return ne(ne({},q),{},{isFocused:ee&&!o,getRootProps:ke,getInputProps:Pe,rootRef:T,inputRef:M,open:xe(he)})}(oe(e,X)),i=o.open,a=oe(o,q);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(ne(ne({},a),{},{open:i})))}));ie.displayName="Dropzone";var ae={disabled:!1,getFilesFromEvent:function(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(t){return s(e)&&s(e.dataTransfer)?[2,d(e.dataTransfer,e.type)]:function(e){return s(e)&&s(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,p(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ie.defaultProps=ae,ie.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};const ce=ie;var ue={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function le(e,t){switch(t.type){case"focus":return ne(ne({},e),{},{isFocused:!0});case"blur":return ne(ne({},e),{},{isFocused:!1});case"openDialog":return ne(ne({},ue),{},{isFileDialogActive:!0});case"closeDialog":return ne(ne({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return ne(ne({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return ne(ne({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ne({},ue);default:return e}}function se(){}},7827:(e,t,n)=>{n.d(t,{Cl:()=>r,Tt:()=>o,YH:()=>a,fX:()=>u,sH:()=>i,zs:()=>c});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(u){c=[6,u],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}Object.create;function c(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function u(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError}}]);