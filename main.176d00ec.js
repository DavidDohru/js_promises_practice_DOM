parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=!1,n=!1;document.addEventListener("contextmenu",function(e){return e.preventDefault()});var o=new Promise(function(e,t){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){return t(new Error("First promise was rejected"))},3e3)}),s=new Promise(function(e){document.addEventListener("mousedown",function(t){1!==t.which&&3!==t.which||e("Second promise was resolved")})}),i=new Promise(function(e){document.addEventListener("mousedown",function(o){1===o.which&&(t=!0),3===o.which&&(n=!0),t&&n&&e("Third promise was resolved")})}),c=function(t){var n=document.createElement("div");n.innerHTML=t,n.setAttribute("data-qa",t),document.body.append(n),n.classList.add("message"),"object"===e(t)?n.classList.add("warning"):t.includes("Second")?n.classList.add("distance"):t.includes("Third")?n.classList.add("distance__third"):n.classList.add("success")};o.then(c).catch(c),s.then(c),i.then(c);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.176d00ec.js.map