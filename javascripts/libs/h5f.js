/*! H5F - v1.0.0 - 2013-01-13
* https://github.com/ryanseddon/H5F/
* Copyright (c) 2013 Ryan Seddon; Licensed MIT */
var H5F=H5F||{};(function(a){var b=a.createElement("input"),c=/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,d=/[a-z][\-\.+a-z]*:\/\//i,e=/^(input|select|textarea)$/i,f,g,h,i,j,k="",l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;l=function(a,b){var c=!a.nodeType||!1,d={validClass:"valid",invalidClass:"error",requiredClass:"required",placeholderClass:"placeholder"};if(typeof b=="object")for(var e in d)typeof b[e]=="undefined"&&(b[e]=d[e]);j=b||d;if(c)for(var f=0,g=a.length;f<g;f++)m(a[f]);else m(a)},m=function(a){var b=a.elements,c=b.length,d,e=!!a.attributes.novalidate;y(a,"invalid",o,!0),y(a,"blur",o,!0),y(a,"input",o,!0),y(a,"keyup",o,!0),y(a,"focus",o,!0),y(a,"change",o,!0),y(a,"click",p,!0),y(a,"submit",function(b){f=!0,g||!e&&!a.checkValidity()&&A(b)},!1);if(!s()){a.checkValidity=function(){return q(a)};while(c--)d=!!b[c].attributes.required,b[c].nodeName.toLowerCase()!=="fieldset"&&n(b[c])}},n=function(a){var b=a,c=x(b),d={type:b.getAttribute("type"),pattern:b.getAttribute("pattern"),placeholder:b.getAttribute("placeholder")},e=/^(email|url)$/i,f=/^(input|keyup)$/i,g=e.test(d.type)?d.type:d.pattern?d.pattern:!1,h=t(b,g),j=v(b,"step"),l=v(b,"min"),m=v(b,"max"),n=k!=="";b.checkValidity=function(){return q.call(this,b)},b.setCustomValidity=function(a){r.call(b,a)},b.validationMessage=k,b.validity={valueMissing:c,patternMismatch:h,rangeUnderflow:l,rangeOverflow:m,stepMismatch:j,customError:n,valid:!c&&!h&&!j&&!l&&!m&&!n},d.placeholder&&!f.test(i)&&u(b)},o=function(a){var b=B(a)||a,c=/^(input|keyup|focusin|focus|change)$/i,d=/^(submit|image|button|reset)$/i,f=/^(checkbox|radio)$/i,g=!0;e.test(b.nodeName)&&!d.test(b.type)&&!d.test(b.nodeName)&&(i=a.type,s()||n(b),b.validity.valid&&(b.value!==""||f.test(b.type))||b.value!==b.getAttribute("placeholder")&&b.validity.valid?(D(b,[j.invalidClass,j.requiredClass]),C(b,j.validClass)):c.test(i)?b.validity.valueMissing&&D(b,[j.requiredClass,j.invalidClass,j.validClass]):b.validity.valueMissing?(D(b,[j.invalidClass,j.validClass]),C(b,j.requiredClass)):b.validity.valid||(D(b,[j.validClass,j.requiredClass]),C(b,j.invalidClass)),i==="input"&&g&&(z(b.form,"keyup",o,!0),g=!1))},q=function(a){var b,c,d,e,g=!1;if(a.nodeName.toLowerCase()==="form"){b=a.elements;for(var h=0,i=b.length;h<i;h++)c=b[h],d=!!c.attributes.required,e=!!c.attributes.pattern,c.nodeName.toLowerCase()!=="fieldset"&&(d||e&&d)&&(o(c),!c.validity.valid&&!g&&(f&&c.focus(),g=!0));return!g}return o(a),a.validity.valid},r=function(a){var b=this;k=a,b.validationMessage=k},p=function(a){var b=B(a);b.attributes.formnovalidate&&b.type==="submit"&&(g=!0)},s=function(){return E(b,"validity")&&E(b,"checkValidity")},t=function(a,b){if(b==="email")return!c.test(a.value);if(b==="url")return!d.test(a.value);if(!b)return!1;var e=a.getAttribute("placeholder"),f=a.value;return h=new RegExp("^(?:"+b+")$"),f===e?!0:f===""?!1:!h.test(a.value)},u=function(a){var c={placeholder:a.getAttribute("placeholder")},d=/^(focus|focusin|submit)$/i,e=/^(input|textarea)$/i,f=/^password$/i,g="placeholder"in b;!g&&e.test(a.nodeName)&&!f.test(a.type)&&(a.value===""&&!d.test(i)?(a.value=c.placeholder,y(a.form,"submit",function(){i="submit",u(a)},!0),C(a,j.placeholderClass)):a.value===c.placeholder&&d.test(i)&&(a.value="",D(a,j.placeholderClass)))},v=function(a,b){var c=parseInt(a.getAttribute("min"),10)||0,d=parseInt(a.getAttribute("max"),10)||!1,e=parseInt(a.getAttribute("step"),10)||1,f=parseInt(a.value,10),g=(f-c)%e;if(!!x(a)||!!isNaN(f))return a.getAttribute("type")==="number"?!0:!1;if(b==="step")return a.getAttribute("step")?g!==0:!1;if(b==="min")return a.getAttribute("min")?f<c:!1;if(b==="max")return a.getAttribute("max")?f>d:!1},w=function(a){var b=!!a.attributes.required;return b?x(a):!1},x=function(a){var b=a.getAttribute("placeholder"),c=!!a.attributes.required;return!(!c||a.value!==""&&a.value!==b)},y=function(a,b,c,d){E(window,"addEventListener")?a.addEventListener(b,c,d):E(window,"attachEvent")&&typeof window.event!="undefined"&&(b==="blur"?b="focusout":b==="focus"&&(b="focusin"),a.attachEvent("on"+b,c))},z=function(a,b,c,d){E(window,"removeEventListener")?a.removeEventListener(b,c,d):E(window,"detachEvent")&&typeof window.event!="undefined"&&a.detachEvent("on"+b,c)},A=function(a){a=a||window.event,a.stopPropagation&&a.preventDefault?(a.stopPropagation(),a.preventDefault()):(a.cancelBubble=!0,a.returnValue=!1)},B=function(a){return a=a||window.event,a.target||a.srcElement},C=function(a,b){var c;a.className?(c=new RegExp("(^|\\s)"+b+"(\\s|$)"),c.test(a.className)||(a.className+=" "+b)):a.className=b},D=function(a,b){var c,d,e=typeof b=="object"?b.length:1,f=e;if(a.className)if(a.className===b)a.className="";else while(e--)c=new RegExp("(^|\\s)"+(f>1?b[e]:b)+"(\\s|$)"),d=a.className.match(c),d&&d.length===3&&(a.className=a.className.replace(c,d[1]&&d[2]?" ":""))},E=function(a,b){var c=typeof a[b],d=new RegExp("^function|object$","i");return!!(d.test(c)&&a[b]||c==="unknown")},window.H5F={setup:l}})(document);