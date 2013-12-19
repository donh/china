/*!
 * reveal.js 2.6.0-dev (2013-09-11, 21:54)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function a(a){return b(),Kb||Jb?(window.addEventListener("load",C,!1),l(Qb,a),s(),c(),void 0):(document.body.setAttribute("class","no-transforms"),void 0)}function b(){Jb="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,Kb="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Lb=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function c(){function a(){c.length&&head.js.apply(null,c),d()}for(var b=[],c=[],e=0,f=Qb.dependencies.length;f>e;e++){var g=Qb.dependencies[e];(!g.condition||g.condition())&&(g.async?c.push(g.src):b.push(g.src),"function"==typeof g.callback&&head.ready(g.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],g.callback))}b.length?(head.ready(a),head.js.apply(null,b)):a()}function d(){f(),e(),i(),_(),setTimeout(function(){Vb.slides.classList.remove("no-transition"),Rb=!0,u("ready",{indexh:Fb,indexv:Gb,currentSlide:Ib})},1)}function e(){var a=m(document.querySelectorAll(Nb));a.forEach(function(a){var b=m(a.querySelectorAll("section"));b.forEach(function(a,b){b>0&&a.classList.add("future")})})}function f(){Vb.theme=document.querySelector("#theme"),Vb.wrapper=document.querySelector(".reveal"),Vb.slides=document.querySelector(".reveal .slides"),Vb.slides.classList.add("no-transition"),Vb.background=g(Vb.wrapper,"div","backgrounds",null),Vb.progress=g(Vb.wrapper,"div","progress","<span></span>"),Vb.progressbar=Vb.progress.querySelector("span"),g(Vb.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),g(Vb.wrapper,"div","state-background",null),g(Vb.wrapper,"div","pause-overlay",null),Vb.controls=document.querySelector(".reveal .controls"),Vb.controlsLeft=m(document.querySelectorAll(".navigate-left")),Vb.controlsRight=m(document.querySelectorAll(".navigate-right")),Vb.controlsUp=m(document.querySelectorAll(".navigate-up")),Vb.controlsDown=m(document.querySelectorAll(".navigate-down")),Vb.controlsPrev=m(document.querySelectorAll(".navigate-prev")),Vb.controlsNext=m(document.querySelectorAll(".navigate-next"))}function g(a,b,c,d){var e=a.querySelector("."+c);return e||(e=document.createElement(b),e.classList.add(c),null!==d&&(e.innerHTML=d),a.appendChild(e)),e}function h(){function a(a,b){var c={background:a.getAttribute("data-background"),backgroundSize:a.getAttribute("data-background-size"),backgroundImage:a.getAttribute("data-background-image"),backgroundColor:a.getAttribute("data-background-color"),backgroundRepeat:a.getAttribute("data-background-repeat"),backgroundPosition:a.getAttribute("data-background-position"),backgroundTransition:a.getAttribute("data-background-transition")},d=document.createElement("div");return d.className="slide-background",c.background&&(/^(http|file|\/\/)/gi.test(c.background)||/\.(png|jpg|jpeg|gif|bmp)$/gi.test(c.background)?d.style.backgroundImage="url("+c.background+")":d.style.background=c.background),c.backgroundSize&&(d.style.backgroundSize=c.backgroundSize),c.backgroundImage&&(d.style.backgroundImage='url("'+c.backgroundImage+'")'),c.backgroundColor&&(d.style.backgroundColor=c.backgroundColor),c.backgroundRepeat&&(d.style.backgroundRepeat=c.backgroundRepeat),c.backgroundPosition&&(d.style.backgroundPosition=c.backgroundPosition),c.backgroundTransition&&d.setAttribute("data-background-transition",c.backgroundTransition),b.appendChild(d),d}r()&&document.body.classList.add("print-pdf"),Vb.background.innerHTML="",Vb.background.classList.add("no-transition"),m(document.querySelectorAll(Nb)).forEach(function(b){var c;c=r()?a(b,b):a(b,Vb.background),m(b.querySelectorAll("section")).forEach(function(b){r()?a(b,b):a(b,c)})})}function i(a){if(Vb.wrapper.classList.remove(Qb.transition),"object"==typeof a&&l(Qb,a),Jb===!1&&(Qb.transition="linear"),Vb.wrapper.classList.add(Qb.transition),Vb.wrapper.setAttribute("data-transition-speed",Qb.transitionSpeed),Vb.wrapper.setAttribute("data-background-transition",Qb.backgroundTransition),Vb.controls.style.display=Qb.controls?"block":"none",Vb.progress.style.display=Qb.progress?"block":"none",Qb.rtl?Vb.wrapper.classList.add("rtl"):Vb.wrapper.classList.remove("rtl"),Qb.center?Vb.wrapper.classList.add("center"):Vb.wrapper.classList.remove("center"),Qb.mouseWheel?(document.addEventListener("DOMMouseScroll",tb,!1),document.addEventListener("mousewheel",tb,!1)):(document.removeEventListener("DOMMouseScroll",tb,!1),document.removeEventListener("mousewheel",tb,!1)),Qb.rollingLinks?v():w(),Qb.previewLinks?x():(y(),x("[data-preview-link]")),Qb.theme&&Vb.theme){var b=Vb.theme.getAttribute("href"),c=/[^\/]*?(?=\.css)/,d=b.match(c)[0];Qb.theme!==d&&(b=b.replace(c,Qb.theme),Vb.theme.setAttribute("href",b))}R()}function j(){_b=!0,window.addEventListener("hashchange",Bb,!1),window.addEventListener("resize",Cb,!1),Qb.touch&&(Vb.wrapper.addEventListener("touchstart",nb,!1),Vb.wrapper.addEventListener("touchmove",ob,!1),Vb.wrapper.addEventListener("touchend",pb,!1),window.navigator.msPointerEnabled&&(Vb.wrapper.addEventListener("MSPointerDown",qb,!1),Vb.wrapper.addEventListener("MSPointerMove",rb,!1),Vb.wrapper.addEventListener("MSPointerUp",sb,!1))),Qb.keyboard&&document.addEventListener("keydown",mb,!1),Qb.progress&&Vb.progress&&Vb.progress.addEventListener("click",ub,!1),["touchstart","click"].forEach(function(a){Vb.controlsLeft.forEach(function(b){b.addEventListener(a,vb,!1)}),Vb.controlsRight.forEach(function(b){b.addEventListener(a,wb,!1)}),Vb.controlsUp.forEach(function(b){b.addEventListener(a,xb,!1)}),Vb.controlsDown.forEach(function(b){b.addEventListener(a,yb,!1)}),Vb.controlsPrev.forEach(function(b){b.addEventListener(a,zb,!1)}),Vb.controlsNext.forEach(function(b){b.addEventListener(a,Ab,!1)})})}function k(){_b=!1,document.removeEventListener("keydown",mb,!1),window.removeEventListener("hashchange",Bb,!1),window.removeEventListener("resize",Cb,!1),Vb.wrapper.removeEventListener("touchstart",nb,!1),Vb.wrapper.removeEventListener("touchmove",ob,!1),Vb.wrapper.removeEventListener("touchend",pb,!1),window.navigator.msPointerEnabled&&(Vb.wrapper.removeEventListener("MSPointerDown",qb,!1),Vb.wrapper.removeEventListener("MSPointerMove",rb,!1),Vb.wrapper.removeEventListener("MSPointerUp",sb,!1)),Qb.progress&&Vb.progress&&Vb.progress.removeEventListener("click",ub,!1),["touchstart","click"].forEach(function(a){Vb.controlsLeft.forEach(function(b){b.removeEventListener(a,vb,!1)}),Vb.controlsRight.forEach(function(b){b.removeEventListener(a,wb,!1)}),Vb.controlsUp.forEach(function(b){b.removeEventListener(a,xb,!1)}),Vb.controlsDown.forEach(function(b){b.removeEventListener(a,yb,!1)}),Vb.controlsPrev.forEach(function(b){b.removeEventListener(a,zb,!1)}),Vb.controlsNext.forEach(function(b){b.removeEventListener(a,Ab,!1)})})}function l(a,b){for(var c in b)a[c]=b[c]}function m(a){return Array.prototype.slice.call(a)}function n(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}function o(a,b){a.style.WebkitTransform=b,a.style.MozTransform=b,a.style.msTransform=b,a.style.OTransform=b,a.style.transform=b}function p(a){var b=0;if(a){var c=0;m(a.childNodes).forEach(function(a){"number"==typeof a.offsetTop&&a.style&&("absolute"===a.style.position&&(c+=1),b=Math.max(b,a.offsetTop+a.offsetHeight))}),0===c&&(b=a.offsetHeight)}return b}function q(a,b){if(b=b||0,a){var c=a.parentNode,d=c.childNodes;m(d).forEach(function(c){if("number"==typeof c.offsetHeight&&c!==a){var d=window.getComputedStyle(c),e=parseInt(d.marginTop,10),f=parseInt(d.marginBottom,10);b-=c.offsetHeight+e+f}});var e=window.getComputedStyle(a);b-=parseInt(e.marginTop,10)+parseInt(e.marginBottom,10)}return b}function r(){return/print-pdf/gi.test(window.location.search)}function s(){Qb.hideAddressBar&&Lb&&(window.addEventListener("load",t,!1),window.addEventListener("orientationchange",t,!1))}function t(){0!==window.orientation||/crios/gi.test(navigator.userAgent)?(document.documentElement.style.overflow="",document.body.style.height="100%"):(document.documentElement.style.overflow="scroll",document.body.style.height="120%"),setTimeout(function(){window.scrollTo(0,1)},10)}function u(a,b){var c=document.createEvent("HTMLEvents",1,2);c.initEvent(a,!0,!0),l(c,b),Vb.wrapper.dispatchEvent(c)}function v(){if(Jb&&!("msPerspective"in document.body.style))for(var a=document.querySelectorAll(Mb+" a:not(.image)"),b=0,c=a.length;c>b;b++){var d=a[b];if(!(!d.textContent||d.querySelector("*")||d.className&&d.classList.contains(d,"roll"))){var e=document.createElement("span");e.setAttribute("data-title",d.text),e.innerHTML=d.innerHTML,d.classList.add("roll"),d.innerHTML="",d.appendChild(e)}}}function w(){for(var a=document.querySelectorAll(Mb+" a.roll"),b=0,c=a.length;c>b;b++){var d=a[b],e=d.querySelector("span");e&&(d.classList.remove("roll"),d.innerHTML=e.innerHTML)}}function x(a){var b=m(document.querySelectorAll(a?a:"a"));b.forEach(function(a){/^(http|www)/gi.test(a.getAttribute("href"))&&a.addEventListener("click",Eb,!1)})}function y(){var a=m(document.querySelectorAll("a"));a.forEach(function(a){/^(http|www)/gi.test(a.getAttribute("href"))&&a.removeEventListener("click",Eb,!1)})}function z(a){A(),Vb.preview=document.createElement("div"),Vb.preview.classList.add("preview-link-overlay"),Vb.wrapper.appendChild(Vb.preview),Vb.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+a+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+a+'"></iframe>',"</div>"].join(""),Vb.preview.querySelector("iframe").addEventListener("load",function(){Vb.preview.classList.add("loaded")},!1),Vb.preview.querySelector(".close").addEventListener("click",function(a){A(),a.preventDefault()},!1),Vb.preview.querySelector(".external").addEventListener("click",function(){A()},!1),setTimeout(function(){Vb.preview.classList.add("visible")},1)}function A(){Vb.preview&&(Vb.preview.setAttribute("src",""),Vb.preview.parentNode.removeChild(Vb.preview),Vb.preview=null)}function B(a){var b=m(a);return b.forEach(function(a,b){a.hasAttribute("data-fragment-index")||a.setAttribute("data-fragment-index",b)}),b.sort(function(a,b){return a.getAttribute("data-fragment-index")-b.getAttribute("data-fragment-index")}),b}function C(){if(Vb.wrapper&&!r()){var a=Vb.wrapper.offsetWidth,b=Vb.wrapper.offsetHeight;a-=b*Qb.margin,b-=b*Qb.margin;var c=Qb.width,d=Qb.height,e=20;D(Qb.width,Qb.height,e),"string"==typeof c&&/%$/.test(c)&&(c=parseInt(c,10)/100*a),"string"==typeof d&&/%$/.test(d)&&(d=parseInt(d,10)/100*b),Vb.slides.style.width=c+"px",Vb.slides.style.height=d+"px",Ub=Math.min(a/c,b/d),Ub=Math.max(Ub,Qb.minScale),Ub=Math.min(Ub,Qb.maxScale),"undefined"==typeof Vb.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?o(Vb.slides,"translate(-50%, -50%) scale("+Ub+") translate(50%, 50%)"):Vb.slides.style.zoom=Ub;for(var f=m(document.querySelectorAll(Mb)),g=0,h=f.length;h>g;g++){var i=f[g];"none"!==i.style.display&&(i.style.top=Qb.center?i.classList.contains("stack")?0:Math.max(-(p(i)/2)-e,-d/2)+"px":"")}U()}}function D(a,b,c){m(Vb.slides.querySelectorAll("section > .stretch")).forEach(function(d){var e=q(d,b-2*c);if(/(img|video)/gi.test(d.nodeName)){var f=d.naturalWidth||d.videoWidth,g=d.naturalHeight||d.videoHeight,h=Math.min(a/f,e/g);d.style.width=f*h+"px",d.style.height=g*h+"px"}else d.style.width=a+"px",d.style.height=e+"px"})}function E(a,b){"object"==typeof a&&"function"==typeof a.setAttribute&&a.setAttribute("data-previous-indexv",b||0)}function F(a){if("object"==typeof a&&"function"==typeof a.setAttribute&&a.classList.contains("stack")){var b=a.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(a.getAttribute(b)||0,10)}return 0}function G(){if(Qb.overview){fb();var a=Vb.wrapper.classList.contains("overview"),b=window.innerWidth<400?1e3:2500;Vb.wrapper.classList.add("overview"),Vb.wrapper.classList.remove("overview-deactivating"),clearTimeout(Zb),clearTimeout($b),Zb=setTimeout(function(){for(var c=document.querySelectorAll(Nb),d=0,e=c.length;e>d;d++){var f=c[d],g=Qb.rtl?-105:105;if(f.setAttribute("data-index-h",d),o(f,"translateZ(-"+b+"px) translate("+(d-Fb)*g+"%, 0%)"),f.classList.contains("stack"))for(var h=f.querySelectorAll("section"),i=0,j=h.length;j>i;i++){var k=d===Fb?Gb:F(f),l=h[i];l.setAttribute("data-index-h",d),l.setAttribute("data-index-v",i),o(l,"translate(0%, "+105*(i-k)+"%)"),l.addEventListener("click",Db,!0)}else f.addEventListener("click",Db,!0)}T(),C(),a||u("overviewshown",{indexh:Fb,indexv:Gb,currentSlide:Ib})},10)}}function H(){Qb.overview&&(clearTimeout(Zb),clearTimeout($b),Vb.wrapper.classList.remove("overview"),Vb.wrapper.classList.add("overview-deactivating"),$b=setTimeout(function(){Vb.wrapper.classList.remove("overview-deactivating")},1),m(document.querySelectorAll(Mb)).forEach(function(a){o(a,""),a.removeEventListener("click",Db,!0)}),Q(Fb,Gb),eb(),u("overviewhidden",{indexh:Fb,indexv:Gb,currentSlide:Ib}))}function I(a){"boolean"==typeof a?a?G():H():J()?H():G()}function J(){return Vb.wrapper.classList.contains("overview")}function K(a){return a=a?a:Ib,a&&a.parentNode&&!!a.parentNode.nodeName.match(/section/i)}function L(){var a=document.body,b=a.requestFullScreen||a.webkitRequestFullscreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullScreen;b&&b.apply(a)}function M(){var a=Vb.wrapper.classList.contains("paused");fb(),Vb.wrapper.classList.add("paused"),a===!1&&u("paused")}function N(){var a=Vb.wrapper.classList.contains("paused");Vb.wrapper.classList.remove("paused"),eb(),a&&u("resumed")}function O(){P()?N():M()}function P(){return Vb.wrapper.classList.contains("paused")}function Q(a,b,c,d){Hb=Ib;var e=document.querySelectorAll(Nb);void 0===b&&(b=F(e[a])),Hb&&Hb.parentNode&&Hb.parentNode.classList.contains("stack")&&E(Hb.parentNode,Gb);var f=Tb.concat();Tb.length=0;var g=Fb||0,h=Gb||0;Fb=S(Nb,void 0===a?Fb:a),Gb=S(Ob,void 0===b?Gb:b),T(),C();a:for(var i=0,j=Tb.length;j>i;i++){for(var k=0;k<f.length;k++)if(f[k]===Tb[i]){f.splice(k,1);continue a}document.documentElement.classList.add(Tb[i]),u(Tb[i])}for(;f.length;)document.documentElement.classList.remove(f.pop());J()&&G();var l=e[Fb],n=l.querySelectorAll("section");if(Ib=n[Gb]||l,"undefined"!=typeof c){var o=B(Ib.querySelectorAll(".fragment"));m(o).forEach(function(a,b){c>b?a.classList.add("visible"):a.classList.remove("visible")})}var p=Fb!==g||Gb!==h;p?u("slidechanged",{indexh:Fb,indexv:Gb,previousSlide:Hb,currentSlide:Ib,origin:d}):Hb=null,Hb&&(Hb.classList.remove("present"),document.querySelector(Pb).classList.contains("present")&&setTimeout(function(){var a,b=m(document.querySelectorAll(Nb+".stack"));for(a in b)b[a]&&E(b[a],0)},0)),p&&($(Hb),Z(Ib)),V(),U(),W(),ab()}function R(){k(),j(),C(),Sb=Qb.autoSlide,eb(),h(),V(),U(),W()}function S(a,b){var c=m(document.querySelectorAll(a)),d=c.length;if(d){Qb.loop&&(b%=d,0>b&&(b=d+b)),b=Math.max(Math.min(b,d-1),0);for(var e=0;d>e;e++){var f=c[e],g=Qb.rtl&&!K(f);if(f.classList.remove("past"),f.classList.remove("present"),f.classList.remove("future"),f.setAttribute("hidden",""),b>e)f.classList.add(g?"future":"past");else if(e>b){f.classList.add(g?"past":"future");for(var h=m(f.querySelectorAll(".fragment.visible"));h.length;)h.pop().classList.remove("visible")}f.querySelector("section")&&f.classList.add("stack")}c[b].classList.add("present"),c[b].removeAttribute("hidden");var i=c[b].getAttribute("data-state");i&&(Tb=Tb.concat(i.split(" ")));var j=c[b].getAttribute("data-autoslide");Sb=j?parseInt(j,10):Qb.autoSlide,eb()}else b=0;return b}function T(){var a,b,c=m(document.querySelectorAll(Nb)),d=c.length;if(d){var e=J()?10:Qb.viewDistance;Lb&&(e=J()?6:1);for(var f=0;d>f;f++){var g=c[f],h=m(g.querySelectorAll("section")),i=h.length;if(a=Math.abs((Fb-f)%(d-e))||0,g.style.display=a>e?"none":"block",i)for(var j=F(g),k=0;i>k;k++){var l=h[k];b=f===Fb?Math.abs(Gb-k):Math.abs(k-j),l.style.display=a+b>e?"none":"block"}}}}function U(){if(Qb.progress&&Vb.progress){var a=m(document.querySelectorAll(Nb)),b=document.querySelectorAll(Mb+":not(.stack)").length,c=0;a:for(var d=0;d<a.length;d++){for(var e=a[d],f=m(e.querySelectorAll("section")),g=0;g<f.length;g++){if(f[g].classList.contains("present"))break a;c++}if(e.classList.contains("present"))break;e.classList.contains("stack")===!1&&c++}Vb.progressbar.style.width=c/(b-1)*window.innerWidth+"px"}}function V(){var a=X(),b=Y();Vb.controlsLeft.concat(Vb.controlsRight).concat(Vb.controlsUp).concat(Vb.controlsDown).concat(Vb.controlsPrev).concat(Vb.controlsNext).forEach(function(a){a.classList.remove("enabled"),a.classList.remove("fragmented")}),a.left&&Vb.controlsLeft.forEach(function(a){a.classList.add("enabled")}),a.right&&Vb.controlsRight.forEach(function(a){a.classList.add("enabled")}),a.up&&Vb.controlsUp.forEach(function(a){a.classList.add("enabled")}),a.down&&Vb.controlsDown.forEach(function(a){a.classList.add("enabled")}),(a.left||a.up)&&Vb.controlsPrev.forEach(function(a){a.classList.add("enabled")}),(a.right||a.down)&&Vb.controlsNext.forEach(function(a){a.classList.add("enabled")}),Ib&&(b.prev&&Vb.controlsPrev.forEach(function(a){a.classList.add("fragmented","enabled")}),b.next&&Vb.controlsNext.forEach(function(a){a.classList.add("fragmented","enabled")}),K(Ib)?(b.prev&&Vb.controlsUp.forEach(function(a){a.classList.add("fragmented","enabled")}),b.next&&Vb.controlsDown.forEach(function(a){a.classList.add("fragmented","enabled")})):(b.prev&&Vb.controlsLeft.forEach(function(a){a.classList.add("fragmented","enabled")}),b.next&&Vb.controlsRight.forEach(function(a){a.classList.add("fragmented","enabled")})))}function W(){m(Vb.background.childNodes).forEach(function(a,b){var c=Qb.rtl?"future":"past",d=Qb.rtl?"past":"future";a.className="slide-background "+(Fb>b?c:b>Fb?d:"present"),m(a.childNodes).forEach(function(a,b){a.className="slide-background "+(Gb>b?"past":b>Gb?"future":"present")})}),setTimeout(function(){Vb.background.classList.remove("no-transition")},1)}function X(){var a=document.querySelectorAll(Nb),b=document.querySelectorAll(Ob),c={left:Fb>0||Qb.loop,right:Fb<a.length-1||Qb.loop,up:Gb>0,down:Gb<b.length-1};if(Qb.rtl){var d=c.left;c.left=c.right,c.right=d}return c}function Y(){if(Ib&&Qb.fragments){var a=Ib.querySelectorAll(".fragment"),b=Ib.querySelectorAll(".fragment:not(.visible)");return{prev:a.length-b.length>0,next:!!b.length}}return{prev:!1,next:!1}}function Z(a){a&&(m(a.querySelectorAll("video, audio")).forEach(function(a){a.hasAttribute("data-autoplay")&&a.play()}),m(a.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(a){a.hasAttribute("data-autoplay")&&a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function $(a){a&&(m(a.querySelectorAll("video, audio")).forEach(function(a){a.hasAttribute("data-ignore")||a.pause()}),m(a.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(a){a.hasAttribute("data-ignore")||"function"!=typeof a.contentWindow.postMessage||a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function _(){var a=window.location.hash,b=a.slice(2).split("/"),c=a.replace(/#|\//gi,"");if(isNaN(parseInt(b[0],10))&&c.length){var d=document.querySelector("#"+c);if(d){var e=Reveal.getIndices(d);Q(e.h,e.v)}else Q(Fb||0,Gb||0)}else{var f=parseInt(b[0],10)||0,g=parseInt(b[1],10)||0;(f!==Fb||g!==Gb)&&Q(f,g)}}function ab(a){if(Qb.history)if(clearTimeout(Yb),"number"==typeof a)Yb=setTimeout(ab,a);else{var b="/";Ib&&"string"==typeof Ib.getAttribute("id")?b="/"+Ib.getAttribute("id"):((Fb>0||Gb>0)&&(b+=Fb),Gb>0&&(b+="/"+Gb)),window.location.hash=b}}function bb(a){var b,c=Fb,d=Gb;if(a){var e=K(a),f=e?a.parentNode:a,g=m(document.querySelectorAll(Nb));c=Math.max(g.indexOf(f),0),e&&(d=Math.max(m(a.parentNode.querySelectorAll("section")).indexOf(a),0))}if(!a&&Ib){var h=Ib.querySelectorAll(".fragment").length>0;if(h){var i=Ib.querySelectorAll(".fragment.visible");b=i.length}}return{h:c,v:d,f:b}}function cb(){if(Ib&&Qb.fragments){var a=B(Ib.querySelectorAll(".fragment:not(.visible)"));if(a.length){var b=a[0].getAttribute("data-fragment-index");return a=Ib.querySelectorAll('.fragment[data-fragment-index="'+b+'"]'),m(a).forEach(function(a){a.classList.add("visible")}),u("fragmentshown",{fragment:a[0],fragments:a}),V(),!0}}return!1}function db(){if(Ib&&Qb.fragments){var a=B(Ib.querySelectorAll(".fragment.visible"));if(a.length){var b=a[a.length-1].getAttribute("data-fragment-index");return a=Ib.querySelectorAll('.fragment[data-fragment-index="'+b+'"]'),m(a).forEach(function(a){a.classList.remove("visible")}),u("fragmenthidden",{fragment:a[0],fragments:a}),V(),!0}}return!1}function eb(){clearTimeout(Xb),!Sb||P()||J()||(Xb=setTimeout(lb,Sb))}function fb(){clearTimeout(Xb)}function gb(){Qb.rtl?(J()||cb()===!1)&&X().left&&Q(Fb+1):(J()||db()===!1)&&X().left&&Q(Fb-1)}function hb(){Qb.rtl?(J()||db()===!1)&&X().right&&Q(Fb-1):(J()||cb()===!1)&&X().right&&Q(Fb+1)}function ib(){(J()||db()===!1)&&X().up&&Q(Fb,Gb-1)}function jb(){(J()||cb()===!1)&&X().down&&Q(Fb,Gb+1)}function kb(){if(db()===!1)if(X().up)ib();else{var a=document.querySelector(Nb+".past:nth-child("+Fb+")");if(a){var b=a.querySelectorAll("section").length-1||void 0,c=Fb-1;Q(c,b)}}}function lb(){cb()===!1&&(X().down?jb():hb()),eb()}function mb(a){document.activeElement;var b=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(b||a.shiftKey&&32!==a.keyCode||a.altKey||a.ctrlKey||a.metaKey)){if(P()&&-1===[66,190,191].indexOf(a.keyCode))return!1;var c=!1;if("object"==typeof Qb.keyboard)for(var d in Qb.keyboard)if(parseInt(d,10)===a.keyCode){var e=Qb.keyboard[d];"function"==typeof e?e.apply(null,[a]):"string"==typeof e&&"function"==typeof Reveal[e]&&Reveal[e].call(),c=!0}if(c===!1)switch(c=!0,a.keyCode){case 80:case 33:kb();break;case 78:case 34:lb();break;case 72:case 37:gb();break;case 76:case 39:hb();break;case 75:case 38:ib();break;case 74:case 40:jb();break;case 36:Q(0);break;case 35:Q(Number.MAX_VALUE);break;case 32:J()?H():a.shiftKey?kb():lb();break;case 13:J()?H():c=!1;break;case 66:case 190:case 191:O();break;case 70:L();break;default:c=!1}c?a.preventDefault():27!==a.keyCode&&79!==a.keyCode||!Jb||(I(),a.preventDefault()),eb()}}function nb(a){ac.startX=a.touches[0].clientX,ac.startY=a.touches[0].clientY,ac.startCount=a.touches.length,2===a.touches.length&&Qb.overview&&(ac.startSpan=n({x:a.touches[1].clientX,y:a.touches[1].clientY},{x:ac.startX,y:ac.startY}))}function ob(a){if(ac.captured)navigator.userAgent.match(/android/gi)&&a.preventDefault();else{var b=a.touches[0].clientX,c=a.touches[0].clientY;if(2===a.touches.length&&2===ac.startCount&&Qb.overview){var d=n({x:a.touches[1].clientX,y:a.touches[1].clientY},{x:ac.startX,y:ac.startY});Math.abs(ac.startSpan-d)>ac.threshold&&(ac.captured=!0,d<ac.startSpan?G():H()),a.preventDefault()}else if(1===a.touches.length&&2!==ac.startCount){var e=b-ac.startX,f=c-ac.startY;e>ac.threshold&&Math.abs(e)>Math.abs(f)?(ac.captured=!0,gb()):e<-ac.threshold&&Math.abs(e)>Math.abs(f)?(ac.captured=!0,hb()):f>ac.threshold?(ac.captured=!0,ib()):f<-ac.threshold&&(ac.captured=!0,jb()),Qb.embedded?(ac.captured||K(Ib))&&a.preventDefault():a.preventDefault()}}}function pb(){ac.captured=!1}function qb(a){a.pointerType===a.MSPOINTER_TYPE_TOUCH&&(a.touches=[{clientX:a.clientX,clientY:a.clientY}],nb(a))}function rb(a){a.pointerType===a.MSPOINTER_TYPE_TOUCH&&(a.touches=[{clientX:a.clientX,clientY:a.clientY}],ob(a))}function sb(a){a.pointerType===a.MSPOINTER_TYPE_TOUCH&&(a.touches=[{clientX:a.clientX,clientY:a.clientY}],pb(a))}function tb(a){if(Date.now()-Wb>600){Wb=Date.now();var b=a.detail||-a.wheelDelta;b>0?lb():kb()}}function ub(a){a.preventDefault();var b=m(document.querySelectorAll(Nb)).length,c=Math.floor(a.clientX/Vb.wrapper.offsetWidth*b);Q(c)}function vb(a){a.preventDefault(),gb()}function wb(a){a.preventDefault(),hb()}function xb(a){a.preventDefault(),ib()}function yb(a){a.preventDefault(),jb()}function zb(a){a.preventDefault(),kb()}function Ab(a){a.preventDefault(),lb()}function Bb(){_()}function Cb(){C()}function Db(a){if(_b&&J()){a.preventDefault();for(var b=a.target;b&&!b.nodeName.match(/section/gi);)b=b.parentNode;if(b&&!b.classList.contains("disabled")&&(H(),b.nodeName.match(/section/gi))){var c=parseInt(b.getAttribute("data-index-h"),10),d=parseInt(b.getAttribute("data-index-v"),10);Q(c,d)}}}function Eb(a){var b=a.target.getAttribute("href");b&&(z(b),a.preventDefault())}var Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb=".reveal .slides section",Nb=".reveal .slides>section",Ob=".reveal .slides>section.present>section",Pb=".reveal .slides>section:first-child",Qb={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,dependencies:[]},Rb=!1,Sb=0,Tb=[],Ub=1,Vb={},Wb=0,Xb=0,Yb=0,Zb=0,$b=0,_b=!1,ac={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return{initialize:a,configure:i,sync:R,slide:Q,left:gb,right:hb,up:ib,down:jb,prev:kb,next:lb,prevFragment:db,nextFragment:cb,navigateTo:Q,navigateLeft:gb,navigateRight:hb,navigateUp:ib,navigateDown:jb,navigatePrev:kb,navigateNext:lb,layout:C,availableRoutes:X,availableFragments:Y,toggleOverview:I,togglePause:O,isOverview:J,isPaused:P,addEventListeners:j,removeEventListeners:k,getIndices:bb,getSlide:function(a,b){var c=document.querySelectorAll(Nb)[a],d=c&&c.querySelectorAll("section");return"undefined"!=typeof b?d?d[b]:void 0:c},getPreviousSlide:function(){return Hb},getCurrentSlide:function(){return Ib},getScale:function(){return Ub},getConfig:function(){return Qb},getQueryHash:function(){var a={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(b){a[b.split("=").shift()]=b.split("=").pop()}),a},isFirstSlide:function(){return null==document.querySelector(Mb+".past")?!0:!1},isLastSlide:function(){return Ib?Ib.nextElementSibling?!1:K(Ib)&&Ib.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return Rb},addEventListener:function(a,b,c){"addEventListener"in window&&(Vb.wrapper||document.querySelector(".reveal")).addEventListener(a,b,c)},removeEventListener:function(a,b,c){"addEventListener"in window&&(Vb.wrapper||document.querySelector(".reveal")).removeEventListener(a,b,c)}}}();

/**
* @function name:	function agriculcutureDoughnut()
* @description:		This function draws two doughnut charts
*					 on "Agriculture Shares" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/15/2013
* @last modified:	12/15/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function agriculcutureDoughnut() {
	var GDPData = [{
		value: 10,
		color : "#FDB45C",
	},
	{
		value : 100-10,
		color : "#46BFBD",
	}];
	var LaborForceData = [{
		value: 35,
		color : "#FDB45C",
	},
	{
		value : 100-35,
		color : "#46BFBD",
	}];
	//new Chart(document.getElementById("canvas").getContext("2d")).Pie(data);
	var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(GDPData, {labelAlign: 'center'});
	var myDoughnut2 = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(LaborForceData);
}

/**
* @function name:	function local_finance()
* @description:		This function draws a bar chart
*					 on "Local Government Finance (TN RMB)" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/18/2013
* @last modified:	12/18/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function local_finance() {
	var data = {
		labels : ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', 
			'1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', 
			'1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', 
			'2006', '2007', '2008', '2009', '2010', '2011'
		],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				//pointColor : "rgba(220,220,220,1)",
				//pointStrokeColor : "#fff",
				data : [0.088, 0.086, 0.087, 0.088, 0.098, 0.124, 0.134, 0.146, 
					0.158, 0.184, 0.194, 0.221, 0.25, 0.339, 0.231, 0.299, 0.375, 
					0.442, 0.498, 0.559, 0.641, 0.78, 0.852, 0.985, 1.189, 1.51, 
					1.83, 2.357, 2.865, 3.26, 4.061, 5.255
				]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				//pointColor : "rgba(220,220,220,1)",
				//pointStrokeColor : "#fff",
				data : [0.056, 0.051, 0.058, 0.065, 0.081, 0.121, 0.137, 0.142, 
					0.165, 0.194, 0.208, 0.23, 0.257, 0.333, 0.404, 0.483, 0.579, 
					0.67, 0.767, 0.904, 1.037, 1.313, 1.528, 1.723, 2.059, 2.515, 
					3.043, 3.834, 4.925, 6.104, 7.388, 9.273
				]
			},
			{
				fillColor : "rgba(255, 0, 0,0.5)",
				strokeColor : "rgba(255, 0, 0,1)",
				//pointColor : "rgba(220,220,220,1)",
				//pointStrokeColor : "#fff",
				/*
				data : [-3.2, , -0.029, -0.023, -0.017, -0.003, 0.003, 
					-0.004, 0.007, 0.01, 0.014, 0.009, 0.007, -0.006, 0.173, 
					0.184, 0.204, 0.228, 0.269, 0.345, 0.396, 0.533, 0.676, 
					0.738, 0.87, 1.005, 1.213, 1.477, 2.06, 2.844, 3.327, 4.018
				]
				*/
				///*
				data : [-0.032, -0.035, -0.029, -0.023, -0.017, -0.003, 0.003, 
					-0.004, 0.007, 0.01, 0.014, 0.009, 0.007, -0.006, 0.173, 
					0.184, 0.204, 0.228, 0.269, 0.345, 0.396, 0.533, 0.676, 
					0.738, 0.87, 1.005, 1.213, 1.477, 2.06, 2.844, 3.327, 4.018
				]
				//*/
				/*
				data : [0.032, 0.035, 0.029, 0.023, 0.017, 0.003, -0.003, 0.004, 
					-0.007, -0.01, -0.014, -0.009, -0.007, 0.006, -0.173, -0.184, 
					-0.204, -0.228, -0.269, -0.345, -0.396, -0.533, -0.676, 
					-0.738, -0.87, -1.005, -1.213, -1.477, -2.06, -2.844, 
					-3.327, -4.018
				]
				*/
			}		]
	};
	/*
	var data_line = {
		labels : ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', 
			'1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', 
			'1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', 
			'2006', '2007', '2008', '2009', '2010', '2011'
		],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [0.032, 0.035, 0.029, 0.023, 0.017, 0.003, -0.003, 0.004, 
					-0.007, -0.01, -0.014, -0.009, -0.007, 0.006, -0.173, -0.184, 
					-0.204, -0.228, -0.269, -0.345, -0.396, -0.533, -0.676, 
					-0.738, -0.87, -1.005, -1.213, -1.477, -2.06, -2.844, 
					-3.327, -4.018
				]
			},
		]
	};
	*/
	var options = {
		scaleOverlay : false,
		//scaleOverride : false,
		scaleOverride : true,
		//scaleSteps : 8,
		//scaleStepWidth : 500,
		scaleSteps : 10,
		scaleStepWidth : 1,
		//Number - The scale starting value
		//scaleStartValue : null,
		scaleStartValue : 0,
		scaleLineColor : "rgba(0,0,0,.1)",
		scaleLineWidth : 1,
		scaleShowLabels : true,
		scaleLabel : "<%=value%>",
		scaleFontFamily : "'Arial'",
		scaleFontSize : 14,
		//scaleFontSize : 10,
		scaleFontStyle : "normal",
		//scaleFontColor : "#666",
		scaleFontColor : "#FFF",
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(0,0,0,.05)",
		scaleGridLineWidth : 1,
		//Boolean - If there is a stroke on each bar
		barShowStroke : true,
		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,
		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,
		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,
		//bezierCurve : true,
		bezierCurve : false,
		pointDot : true,
		//pointDotRadius : 3,
		//pointDotRadius : 5,
		pointDotRadius : 4,
		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,
		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,
		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,
		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,
		//datasetFill : false,
		//Boolean - Whether to animate the chart
		animation : true,
		//animationSteps : 100,
		animationSteps : 150,
		animationEasing : "easeOutQuart",
		onAnimationComplete : null
	};
	//var myBar = new Chart(document.getElementById("chart_local_finance").getContext("2d")).Bar(data, options);
	var ctx = new Chart(document.getElementById("chart_local_finance").getContext("2d"));
	var myBar = ctx.Bar(data, options);
	//var myLine = ctx.Line(data_line, options);
	//var myLine = new Chart(document.getElementById("chart_local_finance").getContext("2d")).Line(data_line, options);
	//var myLine = myBar.Line(data_line, options);
}

/**
* @function name:	function agriculcutureDoughnut()
* @description:		This function draws two doughnut charts
*					 on "Agriculture Shares" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/15/2013
* @last modified:	12/15/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function agriculcutureDoughnut2() {
	var doughnutData = [
		{
			value: 30,
			label: 'HELLO',
			color:"#F7464A",
			labelColor: 'black',
			labelFontSize: '16'
		},
		{
			value : 50,
			color : "#46BFBD"
		},
		{
			value : 100,
			color : "#FDB45C"
		},
		{
			value : 40,
			color : "#949FB1"
		},
		{
			value : 120,
			color : "#4D5360"
		}
	];
	var myDoughnut3 = new Chart(document.getElementById("canvas3")
		.getContext("2d")).Doughnut(doughnutData, {labelAlign: 'center'});
	var myDoughnut4 = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
}

/**
* @function name:	function cargo()
* @description:		This function draws a line charts
*					 on "Railway Cargo Volume (MM Tonnes)" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/15/2013
* @last modified:	12/19/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function cargo() {
	var data = {
		///*
		labels : ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', 
			'1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', 
			'1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', 
			'2006', '2007', '2008', '2009', '2010', '2011'
		],
		//*/
		/*
		labels : ['1980', '', '', '', '', '1985', '', '', 
			'', '', '1990', '', '', '', '', '1995', '', 
			'', '', '', '2000', '', '', '', '', '2005', 
			'', '', '', '', '', '2011'
		],
		*/
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				datasetFill : true,
				//datasetFill : false,
				data : [1.113, 1.077, 1.135, 1.188, 1.241, 1.307, 1.356, 
					1.407, 1.449, 1.515, 1.507, 1.529, 1.576, 1.628, 1.632, 
					1.66, 1.71, 1.721, 1.643, 1.676, 1.786, 1.932, 2.05, 
					2.242, 2.49, 2.693, 2.882, 3.142, 3.304, 3.333, 3.643, 
					3.933
				]
				/*
				data : [1112.79, 1076.73, 1134.95, 1187.84, 1240.74, 1307.09, 1356.35, 
					1406.53, 1449.48, 1514.89, 1506.81, 1528.93, 1576.27, 1627.94, 
					1632.16, 1659.82, 1710.24, 1721.49, 1643.09, 1675.54, 1785.81, 
					1931.89, 2049.56, 2242.48, 2490.17, 2692.96, 2882.24, 3142.37, 
					3303.54, 3333.48, 3642.71, 3932.63
				]
				*/
			},
			{
				// http://www.tayloredmktg.com/rgb/
				fillColor : "rgba(139,137,137,0.5)",
				strokeColor : "rgba(139,137,137,1)",
				pointColor : "rgba(139,137,137,1)",
				/*
				fillColor : "rgba(255,250,205,0.5)",
				strokeColor : "rgba(255,250,205,1)",
				pointColor : "rgba(255,250,205,1)",
				*/
				/*
				fillColor : "rgba(255,255,0,0.5)",
				strokeColor : "rgba(255,255,0,1)",
				pointColor : "rgba(255,255,0,1)",
				*/
				pointStrokeColor : "#8b8989",
				datasetFill : false,
				data : [null, 1.32, 2.892, 2.756, 2.719, 2.881, 2.594, 2.582, 
					2.464, 2.73, 1.812, 2.176, 2.472, 2.505, 1.956, 2.217, 
					2.461, 2.029, 1.081, 2.268, 3.106, 3.396, 3.017, 3.621, 
					3.917, 3.39, 3.187, 3.55, 2.842, 2.074, 3.596, 3.356
				]
				/*
				data : [-3.24%, 5.41%, 4.66%, 4.45%, 5.35%, 3.77%, 3.70%, 
					3.05%, 4.51%, -0.53%, 1.47%, 3.10%, 3.28%, 0.26%, 1.69%, 
					3.04%, 0.66%, -4.55%, 1.97%, 6.58%, 8.18%, 6.09%, 9.41%, 
					11.05%, 8.14%, 7.03%, 9.03%, 5.13%, 0.91%, 9.28%, 7.96%
				]
				*/
			},
	]};
	var options = {
		//Boolean - If we show the scale above the chart data
		scaleOverlay : false,
		//scaleOverlay : true,
		//Boolean - If we want to override with a hard coded scale
		//scaleOverride : false,
		scaleOverride : true,
		//** Required if scaleOverride is true **
		//Number - The number of steps in a hard coded scale
		//scaleSteps : null,
		scaleSteps : 12,
		//scaleSteps : 6,
		//Number - The value jump in the hard coded scale
		//scaleStepWidth : null,
		//scaleStepWidth : 250,
		//scaleStepWidth : 0.5,
		scaleStepWidth : 0.25,
		//Number - The scale starting value
		//scaleStartValue : null,
		scaleStartValue : 1,
		//scaleStartValue : 1000,
		//String - Colour of the scale line
		scaleLineColor : "rgba(0,0,0,.1)",
		//Number - Pixel width of the scale line
		scaleLineWidth : 1,
		//Boolean - Whether to show labels on the scale	
		scaleShowLabels : true,
		//Interpolated JS string - can access value
		scaleLabel : "<%=value%>",
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "'Arial'",
		//Number - Scale label font size in pixels
		scaleFontSize : 14,
		//scaleFontSize : 12,
		//scaleFontSize : 10,
		//String - Scale label font weight style
		scaleFontStyle : "normal",
		//String - Scale label font colour	
		//scaleFontColor : "#666",
		scaleFontColor : "#FFF",
		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,
		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",
		//Number - Width of the grid lines
		scaleGridLineWidth : 1,
		//Boolean - Whether the line is curved between points
		//bezierCurve : true,
		bezierCurve : false,
		//Boolean - Whether to show a dot for each point
		pointDot : true,
		//Number - Radius of each point dot in pixels
		//pointDotRadius : 3,
		pointDotRadius : 4,
		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,
		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,
		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,
		//Boolean - Whether to fill the dataset with a colour
		//datasetFill : true,
		datasetFill : false,
		//Boolean - Whether to animate the chart
		animation : true,
		//Number - Number of animation steps
		//animationSteps : 60,
		//animationSteps : 100,
		animationSteps : 150,
		//String - Animation easing effect
		animationEasing : "easeOutQuart",
		//Function - Fires when the animation is complete
		onAnimationComplete : null
	};
	var myLine = new Chart(document.getElementById("chart_cargo").getContext("2d")).Line(data, options);
}

/**
* @function name:	function loan()
* @description:		This function draws a line charts
*					 on "Loans Disbursed by Banks (BN RMB)" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/17/2013
* @last modified:	12/19/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function loan() {
	var data = {
		labels : ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', 
			'1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', 
			'1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', 
			'2006', '2007', '2008', '2009', '2010', '2011'
		 ],
		datasets : [{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [0.2478, 0.2853, 0.3163, 0.3567, 0.4747, 0.6198, 0.8143, 
				0.9814, 1.196, 1.425, 1.751, 2.112, 2.574, 3.296, 3.998, 
				5.054, 6.116, 7.491, 8.652, 9.373, 9.937, 11.23, 13.13, 
				15.9, 17.74, 19.47, 22.53, 26.17, 30.34, 39.97, 47.92, 
				54.79
			]
			/*
			data : [247.81, 285.33, 316.27, 356.66, 474.68, 619.84, 814.27, 981.41, 
				1196.43, 1424.88, 1751.1, 2111.64, 2574.28, 3295.58, 3997.51, 
				5054.41, 6115.66, 7491.41, 8652.41, 9373.43, 9937.11, 11231.47, 
				13129.39, 15899.62, 17736.35, 19469.04, 22528.53, 26169.09, 
				30339.46, 39968.48, 47919.56, 54794.67
			]
			*/
		},
	]};
	var options = {
		scaleOverlay : false,
		//scaleOverride : false,
		scaleOverride : true,
		//scaleSteps : 8,
		//scaleStepWidth : 500,
		//scaleSteps : 12,
		scaleSteps : 11,
		//scaleStepWidth : 5000,
		scaleStepWidth : 5,
		//Number - The scale starting value
		scaleStartValue : null,
		scaleLineColor : "rgba(0,0,0,.1)",
		scaleLineWidth : 1,
		scaleShowLabels : true,
		scaleLabel : "<%=value%>",
		scaleFontFamily : "'Arial'",
		scaleFontSize : 14,
		//scaleFontSize : 10,
		scaleFontStyle : "normal",
		//scaleFontColor : "#666",
		scaleFontColor : "#FFF",
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(0,0,0,.05)",
		scaleGridLineWidth : 1,
		//bezierCurve : true,
		bezierCurve : false,
		pointDot : true,
		//pointDotRadius : 3,
		//pointDotRadius : 5,
		pointDotRadius : 4,
		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,
		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,
		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,
		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,
		//Boolean - Whether to animate the chart
		animation : true,
		//animationSteps : 100,
		animationSteps : 150,
		animationEasing : "easeOutQuart",
		onAnimationComplete : null
	};
	var myLine = new Chart(document.getElementById("chart_loan").getContext("2d")).Line(data, options);
}

/**
* @function name:	function electricity()
* @description:		This function draws a line charts
*					 on "Electricity Consumption (BN kW/h)" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/17/2013
* @last modified:	12/19/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function electricity() {
	var data = {
		labels : ['2000', '2001', '2002', '2003', '2004', '2005', 
			'2006', '2007', '2008', '2009', '2010', '2011'
		 ],
		datasets : [{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [13.472, 14.723, 16.465, 19.032, 21.971, 24.94, 28.588, 
				32.712, 34.541, 37.032, 41.934, 47.001
			]
			/*
			data : [1347.2, 1472.3, 1646.5, 1903.2, 2197.1, 2494, 2858.8, 3271.2, 
				3454.1, 3703.2, 4193.4, 4700.1
			]
			*/
		},
	]};
	var options = {
		scaleOverlay : false,
		//scaleOverride : false,
		scaleOverride : true,
		//scaleSteps : 10,
		scaleSteps : 12,
		//scaleStepWidth : 500,
		scaleStepWidth : 3,
		//scaleSteps : 12,
		//scaleStepWidth : 5000,
		//Number - The scale starting value
		//scaleStartValue : null,
		scaleStartValue : 12,
		scaleLineColor : "rgba(0,0,0,.1)",
		scaleLineWidth : 1,
		scaleShowLabels : true,
		scaleLabel : "<%=value%>",
		scaleFontFamily : "'Arial'",
		scaleFontSize : 14,
		//scaleFontSize : 10,
		scaleFontStyle : "normal",
		scaleFontColor : "#FFF",
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(0,0,0,.05)",
		scaleGridLineWidth : 1,
		//bezierCurve : true,
		bezierCurve : false,
		pointDot : true,
		//pointDotRadius : 3,
		//pointDotRadius : 5,
		pointDotRadius : 4,
		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,
		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,
		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,
		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,
		//Boolean - Whether to animate the chart
		animation : true,
		//animationSteps : 100,
		animationSteps : 150,
		animationEasing : "easeOutQuart",
		onAnimationComplete : null
	};
	var myLine = new Chart(document.getElementById("chart_electricity").getContext("2d")).Line(data, options);
}

/**
* @function name:	function cargo2()
* @description:		This function draws a line charts
*					 on "Agriculture Shares" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/15/2013
* @last modified:	12/15/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function cargo2() {
	var data = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]}
	var myLine = new Chart(document.getElementById("chart_cargo2").getContext("2d")).Line(data);
}



/**
* @function name:	function doughnutD3()
* @description:		This function draws a line charts
*					 on "Agriculture Shares" page.
* @related issues:	
* @param:			void
* @return:			void
* @author:			Don Hsieh
* @since:			12/15/2013
* @last modified:	12/15/2013
* @called by:		Reveal.addEventListener('slidechanged')
*					 in views/home.jade
*/
function doughnutD3() {
	var dataset = {
		apples: [53245, 28479, 19697, 24037, 40245],
		//apples: [35, 65],
	};
	//var width = 460,
	//	height = 300,
	var width = 800,
		height = 600,
		radius = Math.min(width, height) / 2;
		//radius = 300;
	var color = d3.scale.category20();
	var pie = d3.layout.pie().sort(null);
	var arc = d3.svg.arc()
		//.innerRadius(radius - 100)
		.innerRadius(radius - 170)
		.outerRadius(radius - 50);
	//var svg = d3.select("body").append("svg")
	var svg = d3.select("#doughnut").append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	var path = svg.selectAll("path")
		.data(pie(dataset.apples))
		.enter().append("path")
		.attr("fill", function(d, i) { return color(i); })
		.attr("d", arc);
}