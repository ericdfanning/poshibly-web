!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){const n=r(1),o=r(2),i=document.querySelector(".burger"),c=document.querySelector(".mobile-nav__links"),s=document.querySelector(".main-content"),l=document.querySelectorAll("ul.mobile-nav__links li"),a=document.querySelector(".more-below-caret__elm"),u=document.querySelector(".what-is-it"),p=(document.querySelector(".price__value"),document.querySelector("#pricing")),d=document.querySelectorAll("#Pricing_Nav"),h=document.querySelector(".privacy-policy"),f=document.querySelector(".terms-of-service"),y=document.querySelectorAll("#Features"),v=document.querySelector("#features"),g=document.querySelectorAll("#Contact"),m=document.querySelector("#contact"),b=()=>{c.classList.toggle("nav-links-active",!1),i.classList.toggle("toggle",!1)},w=()=>{for(let e=0;e<y.length;e++)y[e].addEventListener("click",()=>{v.scrollIntoView({behavior:"smooth"})});for(let e=0;e<d.length;e++)d[e].addEventListener("click",e=>{p.scrollIntoView({behavior:"smooth"})});for(let e=0;e<g.length;e++)g[e].addEventListener("click",e=>{m.scrollIntoView({behavior:"smooth"})})};(()=>{i.addEventListener("click",()=>{c.classList.toggle("nav-links-active"),i.classList.toggle("toggle")}),s.addEventListener("click",()=>{b()});for(let e=0;e<l.length;e++)l[e].addEventListener("click",e=>{b()})})(),w(),a.addEventListener("click",()=>{u.scrollIntoView()}),h.addEventListener("click",()=>{document.querySelector(".privacy-overlay").setAttribute("style","z-index: 5000; visibility: visible;"),document.querySelector(".main-body").setAttribute("style","opacity: 0.2;");let e=n.render(o,{test:"HELLO DUDES!"});document.querySelector(".privacy-overlay").innerHTML=e,document.querySelector("#close-overlay").addEventListener("click",()=>{document.querySelector(".privacy-overlay").setAttribute("style","z-index: -100; visibility: hidden;"),document.querySelector(".main-body").setAttribute("style","opacity: 1;")})}),f.addEventListener("click",()=>{const e=document.createElement("DIV");e.setAttribute("class","terms-of-service-overlay");const t=document.createTextNode("terms of service overlay");e.appendChild(t),document.querySelector("body").append(e),document.querySelector("#close-overlay").addEventListener("click",()=>{document.querySelector(".privacy-overlay").setAttribute("style","z-index: -100; visibility: hidden;"),document.querySelector(".main-body").setAttribute("style","opacity: 1;")})}),console.log("FAAAARRRRTTTT"),(window.location.hash.includes("privacypolicy")||window.location.hash.includes("termsofservice"))&&(document.querySelector(".privacy-overlay").setAttribute("style","z-index: 5000; visibility: visible;"),document.querySelector(".main-body").setAttribute("style","opacity: 0.2;"))},function(e,t,r){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function r(e){return"function"==typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var i=RegExp.prototype.test,c=/\S/;function s(e){return!function(e,t){return i.call(e,t)}(c,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},a=/\s*/,u=/\s+/,p=/\s*=/,d=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function f(e){this.string=e,this.tail=e,this.pos=0}function y(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function v(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.eos=function(){return""===this.tail},f.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},f.prototype.scanUntil=function(e){var t,r=this.tail.search(e);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},y.prototype.push=function(e){return new y(e,this)},y.prototype.lookup=function(e){var t,n,i,c=this.cache;if(c.hasOwnProperty(e))t=c[e];else{for(var s,l,a,u=this,p=!1;u;){if(e.indexOf(".")>0)for(s=u.view,l=e.split("."),a=0;null!=s&&a<l.length;)a===l.length-1&&(p=o(s,l[a])||(n=s,i=l[a],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(i))),s=s[l[a++]];else s=u.view[e],p=o(u.view,e);if(p){t=s;break}u=u.parent}c[e]=t}return r(t)&&(t=t.call(this.view)),t},v.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},v.prototype.parse=function(e,r){var o=this.templateCache,i=e+":"+(r||g.tags).join(":"),c=void 0!==o,l=c?o.get(i):void 0;return null==l&&(l=function(e,r){if(!e)return[];var o,i,c,l=!1,y=[],v=[],m=[],b=!1,w=!1,S="",k=0;function q(){if(b&&!w)for(;m.length;)delete v[m.pop()];else m=[];b=!1,w=!1}function x(e){if("string"==typeof e&&(e=e.split(u,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(n(e[0])+"\\s*"),i=new RegExp("\\s*"+n(e[1])),c=new RegExp("\\s*"+n("}"+e[1]))}x(r||g.tags);for(var E,A,_,L,C,T,j=new f(e);!j.eos();){if(E=j.pos,_=j.scanUntil(o))for(var O=0,P=_.length;O<P;++O)s(L=_.charAt(O))?(m.push(v.length),S+=L):(w=!0,l=!0,S+=" "),v.push(["text",L,E,E+1]),E+=1,"\n"===L&&(q(),S="",k=0,l=!1);if(!j.scan(o))break;if(b=!0,A=j.scan(h)||"name",j.scan(a),"="===A?(_=j.scanUntil(p),j.scan(p),j.scanUntil(i)):"{"===A?(_=j.scanUntil(c),j.scan(d),j.scanUntil(i),A="&"):_=j.scanUntil(i),!j.scan(i))throw new Error("Unclosed tag at "+j.pos);if(C=">"==A?[A,_,E,j.pos,S,k,l]:[A,_,E,j.pos],k++,v.push(C),"#"===A||"^"===A)y.push(C);else if("/"===A){if(!(T=y.pop()))throw new Error('Unopened section "'+_+'" at '+E);if(T[1]!==_)throw new Error('Unclosed section "'+T[1]+'" at '+E)}else"name"===A||"{"===A||"&"===A?w=!0:"="===A&&x(_)}if(q(),T=y.pop())throw new Error('Unclosed section "'+T[1]+'" at '+j.pos);return function(e){for(var t,r=[],n=r,o=[],i=0,c=e.length;i<c;++i)switch((t=e[i])[0]){case"#":case"^":n.push(t),o.push(t),n=t[4]=[];break;case"/":o.pop()[5]=t[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(t)}return r}(function(e){for(var t,r,n=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(n.push(t),r=t));return n}(v))}(e,r),c&&o.set(i,l)),l},v.prototype.render=function(e,t,r,n){var o=this.parse(e,n),i=t instanceof y?t:new y(t,void 0);return this.renderTokens(o,i,r,e,n)},v.prototype.renderTokens=function(e,t,r,n,o){for(var i,c,s,l="",a=0,u=e.length;a<u;++a)s=void 0,"#"===(c=(i=e[a])[0])?s=this.renderSection(i,t,r,n):"^"===c?s=this.renderInverted(i,t,r,n):">"===c?s=this.renderPartial(i,t,r,o):"&"===c?s=this.unescapedValue(i,t):"name"===c?s=this.escapedValue(i,t):"text"===c&&(s=this.rawValue(i)),void 0!==s&&(l+=s);return l},v.prototype.renderSection=function(e,n,o,i){var c=this,s="",l=n.lookup(e[1]);if(l){if(t(l))for(var a=0,u=l.length;a<u;++a)s+=this.renderTokens(e[4],n.push(l[a]),o,i);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)s+=this.renderTokens(e[4],n.push(l),o,i);else if(r(l)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(n.view,i.slice(e[3],e[5]),(function(e){return c.render(e,n,o)})))&&(s+=l)}else s+=this.renderTokens(e[4],n,o,i);return s}},v.prototype.renderInverted=function(e,r,n,o){var i=r.lookup(e[1]);if(!i||t(i)&&0===i.length)return this.renderTokens(e[4],r,n,o)},v.prototype.indentPartial=function(e,t,r){for(var n=t.replace(/[^ \t]/g,""),o=e.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},v.prototype.renderPartial=function(e,t,n,o){if(n){var i=r(n)?n(e[1]):n[e[1]];if(null!=i){var c=e[6],s=e[5],l=e[4],a=i;return 0==s&&l&&(a=this.indentPartial(i,l,c)),this.renderTokens(this.parse(a,o),t,n,a,o)}}},v.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return r},v.prototype.escapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return g.escape(r)},v.prototype.rawValue=function(e){return e[1]};var g={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){m.templateCache=e},get templateCache(){return m.templateCache}},m=new v;return g.clearCache=function(){return m.clearCache()},g.parse=function(e,t){return m.parse(e,t)},g.render=function(e,r,n,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return m.render(e,r,n,o)},g.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return l[e]}))},g.Scanner=f,g.Context=y,g.Writer=v,g}()},function(e,t){e.exports="<div class=privacy-policy> <div class=privacy-policy__container> <div id=close-overlay class=close-overlay>x</div> <ul> <li>No guarantee</li> <li>No promise of success</li> </ul> </div> </div>"}]);