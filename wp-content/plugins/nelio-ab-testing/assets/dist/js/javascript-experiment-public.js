(()=>{var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r);const t=window.wp.domReady,n=e.n(t)(),a=window.wp.url;function o(e){if(!/^[a-z]+:\/\//.test(e))return!1;e=e.replace(/^https?:\/\//,"http://");var r=document.location.href.replace(/^https?:\/\//,"").replace(/\/.*$/,"");return 0!==e.indexOf("http://"+r)}function i(e,r){Array.from(document.querySelectorAll("a")).forEach((function(t){var n,i=t.getAttribute("href")||"";if(!o(i)){var u=i.replace(/#.*$/,""),c=i.replace(/^[^#]*/,""),l=(0,a.addQueryArgs)(u,((n={})[e]=null!=r?r:"",n))+c;t.setAttribute("href",l)}}))}var u,c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},c.apply(this,arguments)};window.nab=c(c({},(u=window)&&"object"==typeof u&&"nab"in u?window.nab:{}),{initJavaScriptPreviewer:function(e){Array.from(document.querySelectorAll("a")).forEach((function(e){o(e.getAttribute("href")||"")&&(e.classList.add("nab-disabled-link"),e.addEventListener("click",(function(e){return e.preventDefault()})))})),i("nab-javascript-previewer"),e.run((function(){}),{showContent:function(){},domReady:n});var r=(0,a.getQueryArgs)(document.location.href)["nab-javascript-previewer"];r&&n((function(){return i("nab-javascript-previewer",r)}))}})})();var t=nab="undefined"==typeof nab?{}:nab;for(var n in r)t[n]=r[n];r.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})();