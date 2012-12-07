/*
 * HTML5 Forms Chapter JavaScript Library
 * http://thecssninja.com/javascript/H5F
 *
 * Copyright (c) 2010-2011 Ryan Seddon - http://thecssninja.com/
 * Dual-licensed under the BSD and MIT licenses.
 * http://thecssninja.com/H5F/license.txt
 */
var H5F=H5F||{};(function(a){var b=a.createElement("input"),c=/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,d=/[a-z][\-\.+a-z]*:\/\//i,e=/^(input|select|textarea)$/i,f,g,h,i,j="",k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;k=function(a,b){var c=!a.nodeType||false;var d={validClass:"valid",invalidClass:"error",requiredClass:"required",placeholderClass:"placeholder"};if(typeof b=="object"){for(var e in d){if(typeof b[e]=="undefined"){b[e]=d[e]}}}i=b||d;if(c){for(var f=0,g=a.length;f<g;f++){l(a[f])}}else{l(a)}};l=function(a){var b=a.elements,c=b.length,d,e=!!a.attributes["novalidate"];w(a,"invalid",n,true);w(a,"blur",n,true);w(a,"input",n,true);w(a,"keyup",n,true);w(a,"focus",n,true);w(a,"submit",function(b){f=true;if(!e&&!a.checkValidity()){y(b)}},false);if(!q()){a.checkValidity=function(){return o(a)};while(c--){d=!!b[c].attributes["required"];if(b[c].nodeName!=="FIELDSET"){m(b[c])}}}};m=function(a){var b=a,c=v(b),d={type:b.getAttribute("type"),pattern:b.getAttribute("pattern"),placeholder:b.getAttribute("placeholder")},e=/^(email|url)$/i,f=/^(input|keyup)$/i,g=e.test(d.type)?d.type:d.pattern?d.pattern:false,i=r(b,g),k=t(b,"step"),l=t(b,"min"),m=t(b,"max"),n=j!=="";b.checkValidity=function(){return o.call(this,b)};b.setCustomValidity=function(a){p.call(b,a)};b.validationMessage=j;b.validity={valueMissing:c,patternMismatch:i,rangeUnderflow:l,rangeOverflow:m,stepMismatch:k,customError:n,valid:!c&&!i&&!k&&!l&&!m&&!n};if(d.placeholder&&!f.test(h)){s(b)}};n=function(a){var b=z(a)||a,c=/^(input|keyup|focusin|focus)$/i,d=/^(submit|image|button|reset)$/i,f=true;if(e.test(b.nodeName)&&!(d.test(b.type)||d.test(b.nodeName))){h=a.type;if(!q()){m(b)}if(b.validity.valid&&b.value!==""||b.value!==b.getAttribute("placeholder")){B(b,[i.invalidClass,i.requiredClass]);A(b,i.validClass)}else if(!c.test(h)){if(b.validity.valueMissing){B(b,[i.invalidClass,i.validClass]);A(b,i.requiredClass)}else if(!b.validity.valid){B(b,[i.validClass,i.requiredClass]);A(b,i.invalidClass)}}else if(b.validity.valueMissing){B(b,[i.requiredClass,i.invalidClass,i.validClass])}if(h==="input"&&f){x(b.form,"keyup",n,true);f=false}}};o=function(a){var b,c,d,e,g=false;if(a.nodeName==="FORM"){b=a.elements;for(var h=0,i=b.length;h<i;h++){c=b[h];d=!!c.attributes["required"];e=!!c.attributes["pattern"];if(c.nodeName!=="FIELDSET"&&(d||e&&d)){n(c);if(!c.validity.valid&&!g){if(f){c.focus()}g=true}}}return!g}else{n(a);return a.validity.valid}};p=function(a){var b=this;j=a;b.validationMessage=j};q=function(){return C(b,"validity")&&C(b,"checkValidity")};r=function(a,b){if(b==="email"){return!c.test(a.value)}else if(b==="url"){return!d.test(a.value)}else if(!b){return false}else{var e=a.getAttribute("placeholder"),f=a.value;g=new RegExp("^(?:"+b+")$");if(f===e){return true}else if(f===""){return false}else{return!g.test(a.value)}}};s=function(a){var c={placeholder:a.getAttribute("placeholder")},d=/^(focus|focusin|submit)$/i,e=/^(input|textarea)$/i,f=/^password$/i,g=!!("placeholder"in b);if(!g&&e.test(a.nodeName)&&!f.test(a.type)){if(a.value===""&&!d.test(h)){a.value=c.placeholder;w(a.form,"submit",function(){h="submit";s(a)},true);A(a,i.placeholderClass)}else if(a.value===c.placeholder&&d.test(h)){a.value="";B(a,i.placeholderClass)}}};t=function(a,b){var c=parseInt(a.getAttribute("min"),10)||0,d=parseInt(a.getAttribute("max"),10)||false,e=parseInt(a.getAttribute("step"),10)||1,f=parseInt(a.value,10),g=(f-c)%e;if(!v(a)&&!isNaN(f)){if(b==="step"){return a.getAttribute("step")?g!==0:false}else if(b==="min"){return a.getAttribute("min")?f<c:false}else if(b==="max"){return a.getAttribute("max")?f>d:false}}else if(a.getAttribute("type")==="number"){return true}else{return false}};u=function(a){var b=!!a.attributes["required"];return b?v(a):false};v=function(a){var b=a.getAttribute("placeholder"),c=!!a.attributes["required"];return!!(c&&(a.value===""||a.value===b))};w=function(a,b,c,d){if(C(window,"addEventListener")){a.addEventListener(b,c,d)}else if(C(window,"attachEvent")&&typeof window.event!=="undefined"){if(b==="blur"){b="focusout"}else if(b==="focus"){b="focusin"}a.attachEvent("on"+b,c)}};x=function(a,b,c,d){if(C(window,"removeEventListener")){a.removeEventListener(b,c,d)}else if(C(window,"detachEvent")&&typeof window.event!=="undefined"){a.detachEvent("on"+b,c)}};y=function(a){a=a||window.event;if(a.stopPropagation&&a.preventDefault){a.stopPropagation();a.preventDefault()}else{a.cancelBubble=true;a.returnValue=false}};z=function(a){a=a||window.event;return a.target||a.srcElement};A=function(a,b){var c;if(!a.className){a.className=b}else{c=new RegExp("(^|\\s)"+b+"(\\s|$)");if(!c.test(a.className)){a.className+=" "+b}}};B=function(a,b){var c,d,e=typeof b==="object"?b.length:1,f=e;if(a.className){if(a.className==b){a.className=""}else{while(e--){c=new RegExp("(^|\\s)"+(f>1?b[e]:b)+"(\\s|$)");d=a.className.match(c);if(d&&d.length==3){a.className=a.className.replace(c,d[1]&&d[2]?" ":"")}}}}};C=function(a,b){var c=typeof a[b],d=new RegExp("^function|object$","i");return!!(d.test(c)&&a[b]||c=="unknown")};window["H5F"]={setup:k}})(document)