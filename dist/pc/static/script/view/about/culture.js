define("util/viewport/0.0.1/viewport",["base/jquery/3.2.1/jquery"],function(t,e,i){"use strict";var r=t("base/jquery/3.2.1/jquery"),n=Object.prototype.toString;function o(t,e){if("array"===(e=(e+"").toLowerCase())&&Array.isArray)return Array.isArray(t);var i=n.call(t).toLowerCase();switch(e){case"nan":return"[object number]"===i&&t!=t;default:return i==="[object "+e+"]"}}var s=Array.isArray||function(t){return o(t,"array")};function a(t){return o(t,"number")}function h(t){if(!t)return!1;var e=document.createElement("div");try{e.appendChild(t)}catch(i){return!1}return 1===t.nodeType}var l=0;function c(t,e){if(a(t)&&isFinite(t))e&&(t=Math.abs(t)),t=[t,t,t,t];else if(s(t)){for(var i,r=[],n=t.length,o=0;o<n&&r.length<4;o++)a(i=t[o])&&isFinite(i)&&r.push(e?Math.abs(i):i);switch(r.length){case 0:t=[0,0,0,0];break;case 1:t=[r[0],r[0],r[0],r[0]];break;case 2:t=[r[0],r[1],r[0],r[1]];break;case 3:t=[r[0],r[1],r[2],r[1]];break;default:t=r}}else t=[0,0,0,0];return t}function f(t,e){if(window!=window&&h(t))throw new Error("Viewport must be window or a HTMLElement");this.events={},this.id=l++,this.viewport=r(t),this._viewport=r(function(t){return t===window?"CSS1Compat"===document.compatMode?document.documentElement:document.body:t}(t)),this._initOptions(e),this._findTarget(),this._init()}f.prototype={_initOptions:function(t){var e=(t=r.extend({delay:150,target:null,threshold:0,skipHidden:!0,thresholdBorderReaching:0},t)).delay;e=a(e)&&isFinite(e)?Math.abs(e):150,t.delay=e,t.threshold=c(t.threshold),t.thresholdBorderReaching=c(t.thresholdBorderReaching,!0),this.options=t},_findTarget:function(){var t=this.options.target,e=this._viewport;t=o(t,"string")?e.find(t):h(t)&&r.contains(e[0],t)?r(t):t instanceof r?t.filter(function(){return r.contains(e[0],this)}):null,this.target=t},_filterTarget:function(t,e){var i=[],n=this.target;if(!(n instanceof r)||0===n.length)return i;var o=this.options,s=o.threshold,a=o.skipHidden,h=0,l=0,c=this.viewport;if(c[0]!==window){var f=c[0].getBoundingClientRect();h=f.top+(Math.round(parseFloat(c.css("border-top-width")))||0),l=f.left+(Math.round(parseFloat(c.css("border-left-width")))||0)}return n.each(function(r,n){var o=n.getBoundingClientRect();if(0===o.top&&0===o.bottom&&0===o.left&&0===o.right)a||i.push(n);else{var c=o.top-h,f=o.bottom-h,u=o.left-l,d=o.right-l;c-s[2]>=e||d+s[3]<=0||f+s[0]<=0||u-s[1]>=t||i.push(n)}}),i},_viewChange:function(t,e,i){var r=this.options,n=this.viewport,o=this._viewport,s=r.thresholdBorderReaching;if(n[0]===window||n.is(":visible")){var a=n.innerWidth(),h=n.innerHeight(),l=o[0].scrollWidth,c=o[0].scrollHeight,f={};return f.scrollTop=n.scrollTop(),f.scrollLeft=n.scrollLeft(),f.offsetY=f.scrollTop-e,f.offsetX=f.scrollLeft-i,f.emitter=t,f.type="viewchange",f.viewport=[a,h,l,c],f.target=this._filterTarget(a,h),f.top=f.scrollTop-s[0]<=0,f.right=a+f.scrollLeft+s[1]>=l,f.bottom=h+f.scrollTop+s[2]>=c,f.left=f.scrollLeft-s[3]<=0,this.emit(f.type,f),f}},_init:function(){var t,e,i=this,r=i.id,n=i.options,o=i.viewport,s=o.scrollTop(),a=o.scrollLeft(),h=".viewport-"+r;function l(t){var e=i._viewChange(t.type,s,a);e&&(s=e.scrollTop,a=e.scrollLeft)}n.delay?t=function(t){clearTimeout(e),e=setTimeout(function(){l(t)},n.delay)}:t=l;o.on("scroll"+h+" resize"+h,t),i._viewChange("init",s,a)},on:function(t,e){return this.events[t]=this.events[t]||r.Callbacks("memory stopOnFalse"),this.events[t].add(e),this},off:function(t,e){switch(arguments.length){case 0:this.events={};break;case 1:delete this.events[t];break;default:this.events[t]&&this.events[t].remove(e)}return this},emit:function(t){var e=[].slice.call(arguments,1);return this.events[t]=this.events[t]||r.Callbacks("memory stopOnFalse"),this.events[t].fireWith(this,e),this},refresh:function(t){var e=this.viewport;return arguments.length&&o(t,"object")&&this._initOptions(r.extend(this.options,t)),this._findTarget(),this._viewChange("refresh",e.scrollTop(),e.scrollLeft()),this},destroy:function(){var t=this.viewport,e=".viewport-"+this.id;t.off("scroll"+e),t.off("resize"+e)}},i.exports=f});define("view/about/culture",["base/jquery/3.2.1/jquery","util/viewport/0.0.1/viewport"],function(e,t,i){"use strict";var a=e("base/jquery/3.2.1/jquery");new(e("util/viewport/0.0.1/viewport"))(window,{target:"body [data-viewport]",threshold:[-68,0,-100]}).on("viewchange",function(e){var t=e.target;t.length&&t.forEach(function(e){(e=a(e)).addClass("move"),e.find(".ui-title,.ui-animate-box,.ui-core-values").addClass("move")})})});