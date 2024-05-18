(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const n=window.nab.data,a=window.wp.element;function r(e,t){t&&(a.createRoot?(0,a.createRoot)(t).render(e):(0,a.render)(e,t))}const i=window.wp.components,o=window.wp.data,l=window.wp.domReady,c=e.n(l)(),u=window.wp.i18n,s=window.lodash,d=window.nab.experiments,m=window.nab.utils;var p=function(){return p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.apply(this,arguments)},g=function(e){var t=e.experimentId,n=e.postBeingEdited,r=y(t);return w(t)?a.createElement("span",{className:"spinner is-active"}):a.createElement(a.Fragment,null,a.createElement(v,{icon:r,experimentId:t}),a.createElement(f,{experimentId:t,postBeingEdited:n}))},v=function(e){var t=e.icon,n=e.experimentId,r=_(n),o=b(n);return a.createElement(i.PanelRow,{className:"nab-test-panel"},a.createElement("span",{className:"nab-test-panel__icon"},a.createElement(t,null)),a.createElement("a",{className:"nab-test-panel__name",href:o},r))},f=function(e){var t=e.experimentId,n=e.postBeingEdited,r=E(t);return r?a.createElement(i.PanelRow,{className:"nab-variants-panel"},a.createElement("h2",{className:"nab-variants-panel__title"},(0,u._x)("Variants","text","nelio-ab-testing")),r.map((function(e){var t=e.name,r=e.link,i=e.postId,o=e.index;return a.createElement("div",{className:"nab-alternative",key:i},a.createElement("span",{className:"nab-alternative__letter"},(0,m.getLetter)(o)),a.createElement("span",{className:"nab-alternative__name"},n!==i?a.createElement("a",{href:r},S(t,o)):a.createElement("strong",null,S(t,o))))}))):null},_=function(e){return(0,o.useSelect)((function(t){var a;return(null===(a=t(n.STORE_NAME).getExperiment(e))||void 0===a?void 0:a.name)||(0,u._x)("Unnamed Test","text","nelio-ab-testing")}))},b=function(e){return(0,o.useSelect)((function(t){var a;return(null===(a=t(n.STORE_NAME).getExperiment(e))||void 0===a?void 0:a.links.edit)||""}))},E=function(e){return(0,o.useSelect)((function(t){var a;return(0,s.map)(null===(a=t(n.STORE_NAME).getExperiment(e))||void 0===a?void 0:a.alternatives,(function(e,t){return{index:t,postId:h(e)?e.attributes.postId:0,name:x(e)?e.attributes.name:"",link:e.links.edit}}))}))},w=function(e){return(0,o.useSelect)((function(t){return!t(n.STORE_NAME).hasFinishedResolution("getExperiment",[e])}))},y=function(e){return(0,o.useSelect)((function(t){var r,i,o,l,c=t(n.STORE_NAME).getExperiment,u=t(d.STORE_NAME).getExperimentTypes,s=null!==(i=null===(r=c(e))||void 0===r?void 0:r.type)&&void 0!==i?i:"";return null!==(l=null===(o=u()[s])||void 0===o?void 0:o.icon)&&void 0!==l?l:function(){return a.createElement(a.Fragment,null)}}))},h=function(e){return!!e.attributes.postId},x=function(e){return!!e.attributes.name},S=function(e,t){return e||(0===t?(0,u._x)("Control Version","text","nelio-ab-testing"):(0,u.sprintf)(/* translators: a letter, such as A, B, or C */ /* translators: a letter, such as A, B, or C */
(0,u._x)("Variant %s","text","nelio-ab-testing"),(0,m.getLetter)(t)))};const P=window.wp.mediaUtils,N=window.nab.components;var O=function(){return O=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},O.apply(this,arguments)},I=function(e){var t=e.originalPrice,n=(0,a.useState)(e.regularPrice),r=n[0],i=n[1],o=(0,a.useState)(e.salePrice),l=o[0],c=o[1];return a.createElement("div",{className:"nab-product-data"},a.createElement(R,{originalPrice:t,regularPrice:r,salePrice:l,onRegularPriceChange:i,onSalePriceChange:c}),a.createElement(j,{name:"nab_regular_price",value:r}),a.createElement(j,{name:"nab_sale_price",value:l}))},C=function(e){return a.createElement("div",{className:"nab-product-data"},e.variations.map((function(e){return a.createElement(M,{key:e.id,data:e})})))},M=function(e){var t=e.data,n=t.id,r=t.name,o=t.originalPrice,l=(0,a.useState)(t.imageId),c=l[0],s=l[1],d=(0,a.useState)(t.regularPrice),m=d[0],p=d[1],g=(0,a.useState)(t.salePrice),v=g[0],f=g[1],_=(0,a.useState)(t.description),b=_[0],E=_[1];return a.createElement("div",{className:"nab-product-data__variation"},a.createElement("div",{className:"nab-product-data__variation-name"},a.createElement("strong",null,"#",n)," ",r),a.createElement("div",{className:"nab-product-data__variation-data"},a.createElement(T,{imageId:c,onImageIdChange:s}),a.createElement(R,{originalPrice:o,regularPrice:m,salePrice:v,onRegularPriceChange:p,onSalePriceChange:f}),a.createElement(j,{name:"nab_variation_data[".concat(n,"]"),value:{imageId:c,regularPrice:m,salePrice:v,description:b}})),a.createElement("div",{className:"nab-product-data__variation-description"},a.createElement(i.TextareaControl,{label:(0,u._x)("Description","text","nelio-ab-testing"),value:b,onChange:E})))},R=function(e){var t=e.originalPrice,n=e.regularPrice,r=e.salePrice,o=e.onRegularPriceChange,l=e.onSalePriceChange,c=A(),s=B(),d=function(e){return e.replace(".",c)},m=function(e){return e.replace(c,".").replace(/[^0-9.]/g,"").replace(/\./g,"#").replace("#",".").replace(/#/g,"")};return a.createElement("div",{className:"nab-product-data__pricing"},a.createElement(i.TextControl,{label:(0,u.sprintf)(/* translators: currency */ /* translators: currency */
(0,u._x)("Regular price (%s)","text","nelio-ab-testing"),s),value:d(n),placeholder:d(t),onChange:function(e){return o(m(e))}}),a.createElement(i.TextControl,{label:(0,u.sprintf)(/* translators: currency */ /* translators: currency */
(0,u._x)("Sale price (%s)","text","nelio-ab-testing"),s),value:d(r),onChange:function(e){return l(m(e))}}))},T=function(e){var t=e.imageId,r=e.onImageIdChange,l=F(t),c=(0,o.useDispatch)(n.STORE_NAME).receiveMediaUrl;return a.createElement("div",{className:"nab-product-data__variation-image-wrapper"},t?a.createElement(N.Tooltip,{text:(0,u._x)("Click to remove featured image","user","nelio-ab-testing")},a.createElement(i.Button,{className:"nab-product-data__variation-image-action nab-product-data__variation-image-action--is-remove",onClick:function(){return r(0)}},a.createElement(k,{src:l}))):a.createElement(P.MediaUpload,{title:(0,u._x)("Alternative Featured Image","text","nelio-ab-testing"),allowedTypes:["image"],value:t,onSelect:function(e){var t=e.id,n=e.url;"string"==typeof n&&(c(t,n),r(t))},render:function(e){var t=e.open;return a.createElement(N.Tooltip,{text:(0,u._x)("Click to set a featured image","user","nelio-ab-testing")},a.createElement(i.Button,{className:"nab-product-data__variation-image-action nab-product-data__variation-image-action--is-set",onClick:t},a.createElement(k,{src:l})))}}))},k=function(e){var t=e.src;return t?a.createElement("img",{className:"nab-product-data__variation-image",alt:(0,u._x)("Featured Image","text","nelio-ab-testing"),src:t}):a.createElement(N.FancyIcon,{className:"nab-product-data__variation-image"})},j=function(e){var t=e.name,n=e.value;return"string"==typeof n?a.createElement("input",{type:"hidden",name:t,value:n}):a.createElement(a.Fragment,null,Object.keys(n).map((function(e){return a.createElement("input",{type:"hidden",key:e,name:"".concat(t,"[").concat(e,"]"),value:n[e]})})))},A=function(){return(0,o.useSelect)((function(e){return e(n.STORE_NAME).getECommerceSetting("woocommerce","decimalSeparator")}))},B=function(){return(0,o.useSelect)((function(e){return e(n.STORE_NAME).getECommerceSetting("woocommerce","currencySymbol")}))},F=function(e){return(0,o.useSelect)((function(t){return t(n.STORE_NAME).getMediaUrl(e)}))};const z=window.jQuery;var U=e.n(z);function D(){var e,t=U()("#product_image_gallery"),n=U()("#product_images_container").find("ul.product_images");U()(".add_product_images").on("click","a",(function(a){var r=U()(this);a.preventDefault(),e||(e=wp.media.frames.product_gallery=wp.media({title:r.data("choose"),button:{text:r.data("update")},states:[new wp.media.controller.Library({title:r.data("choose"),filterable:"all",multiple:!0})]})).on("select",(function(){var a=e.state().get("selection"),i=t.val();a.map((function(e){if((e=e.toJSON()).id){i=i?i+","+e.id:e.id;var t=e.sizes&&e.sizes.thumbnail?e.sizes.thumbnail.url:e.url;n.append('<li class="image" data-attachment_id="'+e.id+'"><img src="'+t+'" /><ul class="actions"><li><a href="#" class="delete" title="'+r.data("delete")+'">'+r.data("text")+"</a></li></ul></li>")}})),t.val(i)})),e.open()})),n.sortable({items:"li.image",cursor:"move",scrollSensitivity:40,forcePlaceholderSize:!0,forceHelperSize:!1,helper:"clone",opacity:.65,placeholder:"wc-metabox-sortable-placeholder",start:function(e,t){t.item.css("background-color","#f6f6f6")},stop:function(e,t){t.item.removeAttr("style")},update:function(){var e="";U()("#product_images_container").find("ul li.image").css("cursor","default").each((function(){var t=U()(this).attr("data-attachment_id");e=e+t+","})),t.val(e)}}),U()("#product_images_container").on("click","a.delete",(function(){U()(this).closest("li.image").remove();var e="";return U()("#product_images_container").find("ul li.image").css("cursor","default").each((function(){var t=U()(this).attr("data-attachment_id");e=e+t+","})),t.val(e),U()("#tiptip_holder").removeAttr("style"),U()("#tiptip_arrow").removeAttr("style"),!1}))}var L,V=function(){return V=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},V.apply(this,arguments)};window.nab=V(V({},(L=window)&&"object"==typeof L&&"nab"in L?window.nab:{}),{initExperimentSummary:function(e){c((function(){var t=document.getElementById("nab-experiment-summary");t&&r(a.createElement(g,p({},e)),t)}))},initProductDataMetabox:function(e){c((function(){var t=document.getElementById("nab-product-data-root");t&&r("regular"===e.type?a.createElement(I,O({},e)):a.createElement(C,O({},e)),t)}))},initProductGalleryMetabox:function(){c(D)}})})();var n=nab="undefined"==typeof nab?{}:nab;for(var a in t)n[a]=t[a];t.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();