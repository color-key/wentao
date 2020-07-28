define("util/store/1.3.17/store",[],function(e,t,n){"use strict";!function(e){var t,r={},i=e.document,u="localStorage";if(r.disabled=!1,r.version="1.3.17",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return r.get(e)!==undefined},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if("string"!=typeof e)return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}},function(){try{return u in e&&e[u]}catch(t){return!1}}())t=e[u],r.set=function(e,n){return n===undefined?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return i===undefined?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,n){e[t]=n}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i.documentElement.addBehavior){var o,a;try{(a=new ActiveXObject("htmlfile")).open(),a.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'),a.close(),o=a.w.frames[0].document,t=o.createElement("div")}catch(s){t=i.createElement("div"),o=i.body}var c=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),o.appendChild(t),t.addBehavior("#default#userData"),t.load(u);var i=e.apply(r,n);return o.removeChild(t),i}},f=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),l=function(e){return e.replace(/^d/,"___$&").replace(f,"___")};r.set=c(function(e,t,n){return t=l(t),n===undefined?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(u),n)}),r.get=c(function(e,t,n){t=l(t);var i=r.deserialize(e.getAttribute(t));return i===undefined?n:i}),r.remove=c(function(e,t){t=l(t),e.removeAttribute(t),e.save(u)}),r.clear=c(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(u);for(var n,r=0;n=t[r];r++)e.removeAttribute(n.name);e.save(u)}),r.getAll=function(){var e={};return r.forEach(function(t,n){e[t]=n}),e},r.forEach=c(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,u=0;n=i[u];++u)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var d="__storejs__";r.set(d,d),r.get(d)!=d&&(r.disabled=!0),r.remove(d)}catch(s){r.disabled=!0}r.enabled=!r.disabled,n.exports=r}(Function("return this")())});define("view/news/newsdetails",["base/jquery/3.2.1/jquery","util/store/1.3.17/store"],function(e,t,a){"use strict";var s=e("base/jquery/3.2.1/jquery"),i=e("util/store/1.3.17/store"),n=s("#news-content"),r=s("#change-fontsize");r.on("click","a",function(e){e.preventDefault();var t=s(this);if(!t.hasClass("active")){var a=s(e.delegateTarget).find(".active");a.removeClass("active"),t.addClass("active");var r=t.attr("data-fontsize");n.removeClass(a.attr("data-fontsize")).addClass(r).slideDown("fast"),i.set("Content-Fontsize",r)}});var o=i.get("Content-Fontsize");r.find("a"+(o?"."+o:"[data-default]")).trigger("click")});