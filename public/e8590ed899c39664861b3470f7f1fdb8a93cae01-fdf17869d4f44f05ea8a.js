/*! For license information please see e8590ed899c39664861b3470f7f1fdb8a93cae01-fdf17869d4f44f05ea8a.js.LICENSE.txt */
(self.webpackChunknguyen_app=self.webpackChunknguyen_app||[]).push([[87],{982:function(t,e,n){"use strict";function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(a.push(i.value),!e||a.length!==e);o=!0);}catch(l){s=!0,r=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,{G:function(){return Nn}});var u=function(){},m={},g={},p=null,h={mark:u,measure:u};try{"undefined"!=typeof window&&(m=window),"undefined"!=typeof document&&(g=document),"undefined"!=typeof MutationObserver&&(p=MutationObserver),"undefined"!=typeof performance&&(h=performance)}catch(Mn){}var y,v,b,w,x,S=(m.navigator||{}).userAgent,k=void 0===S?"":S,C=m,I=g,O=p,E=h,z=(C.document,!!I.documentElement&&!!I.head&&"function"==typeof I.addEventListener&&"function"==typeof I.createElement),A=~k.indexOf("MSIE")||~k.indexOf("Trident/"),P="___FONT_AWESOME___",L=16,T="fa",N="svg-inline--fa",j="data-fa-i2svg",M="data-fa-pseudo-element",D="data-fa-pseudo-element-pending",R="data-prefix",V="data-icon",$="fontawesome-i2svg",_="async",G=["HTML","HEAD","STYLE","SCRIPT"],Y=function(){try{return!0}catch(Mn){return!1}}(),F="classic",B="sharp",H=[F,B];function X(t){return new Proxy(t,{get:function(t,e){return e in t?t[e]:t[F]}})}var W=X((s(y={},F,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),s(y,B,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),y)),Z=X((s(v={},F,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),s(v,B,{solid:"fass",regular:"fasr",light:"fasl"}),v)),U=X((s(b={},F,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),s(b,B,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),b)),q=X((s(w={},F,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),s(w,B,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),w)),K=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,J="fa-layers-text",Q=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tt=X((s(x={},F,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),s(x,B,{900:"fass",400:"fasr",300:"fasl"}),x)),et=[1,2,3,4,5,6,7,8,9,10],nt=et.concat([11,12,13,14,15,16,17,18,19,20]),it=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},at=new Set;Object.keys(Z[F]).map(at.add.bind(at)),Object.keys(Z[B]).map(at.add.bind(at));var ot=[].concat(H,c(at),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(et.map((function(t){return"".concat(t,"x")}))).concat(nt.map((function(t){return"w-".concat(t)}))),st=C.FontAwesomeConfig||{};if(I&&"function"==typeof I.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=l(t,2),n=e[0],i=e[1],r=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=I.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));null!=r&&(st[i]=r)}))}var lt={styleDefault:"solid",familyDefault:"classic",cssPrefix:T,replacementClass:N,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var ct=r(r({},lt),st);ct.autoReplaceSvg||(ct.observeMutations=!1);var dt={};Object.keys(lt).forEach((function(t){Object.defineProperty(dt,t,{enumerable:!0,set:function(e){ct[t]=e,ft.forEach((function(t){return t(dt)}))},get:function(){return ct[t]}})})),Object.defineProperty(dt,"familyPrefix",{enumerable:!0,set:function(t){ct.cssPrefix=t,ft.forEach((function(t){return t(dt)}))},get:function(){return ct.cssPrefix}}),C.FontAwesomeConfig=dt;var ft=[];var ut=L,mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};var gt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){for(var t=12,e="";t-- >0;)e+=gt[62*Math.random()|0];return e}function ht(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yt(t){return t.classList?ht(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function vt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")}),"")}function wt(t){return t.size!==mt.size||t.x!==mt.x||t.y!==mt.y||t.rotate!==mt.rotate||t.flipX||t.flipY}var xt=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function St(){var t=T,e=N,n=dt.cssPrefix,i=dt.replacementClass,r=xt;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var kt=!1;function Ct(){dt.autoAddCss&&!kt&&(!function(t){if(t&&z){var e=I.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=I.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}I.head.insertBefore(e,i)}}(St()),kt=!0)}var It={mixout:function(){return{dom:{css:St,insertCss:Ct}}},hooks:function(){return{beforeDOMElementCreation:function(){Ct()},beforeI2svg:function(){Ct()}}}},Ot=C||{};Ot[P]||(Ot[P]={}),Ot[P].styles||(Ot[P].styles={}),Ot[P].hooks||(Ot[P].hooks={}),Ot[P].shims||(Ot[P].shims=[]);var Et=Ot[P],zt=[],At=!1;function Pt(t){var e=t.tag,n=t.attributes,i=void 0===n?{}:n,r=t.children,a=void 0===r?[]:r;return"string"==typeof t?vt(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(vt(t[n]),'" ')}),"").trim()}(i),">").concat(a.map(Pt).join(""),"</").concat(e,">")}function Lt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}z&&((At=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState))||I.addEventListener("DOMContentLoaded",(function t(){I.removeEventListener("DOMContentLoaded",t),At=1,zt.map((function(t){return t()}))})));var Tt=function(t,e,n,i){var r,a,o,s=Object.keys(t),l=s.length,c=void 0!==i?function(t,e){return function(n,i,r,a){return t.call(e,n,i,r,a)}}(e,i):e;for(void 0===n?(r=1,o=t[s[0]]):(r=0,o=n);r<l;r++)o=c(o,t[a=s[r]],a,t);return o};function Nt(t){var e=function(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);56320==(64512&a)?e.push(((1023&r)<<10)+(1023&a)+65536):(e.push(r),n--)}else e.push(r)}return e}(t);return 1===e.length?e[0].toString(16):null}function jt(t){return Object.keys(t).reduce((function(e,n){var i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e}),{})}function Mt(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,i=void 0!==n&&n,a=jt(e);"function"!=typeof Et.hooks.addPack||i?Et.styles[t]=r(r({},Et.styles[t]||{}),a):Et.hooks.addPack(t,jt(e)),"fas"===t&&Mt("fa",e)}var Dt,Rt,Vt,$t=Et.styles,_t=Et.shims,Gt=(s(Dt={},F,Object.values(U[F])),s(Dt,B,Object.values(U[B])),Dt),Yt=null,Ft={},Bt={},Ht={},Xt={},Wt={},Zt=(s(Rt={},F,Object.keys(W[F])),s(Rt,B,Object.keys(W[B])),Rt);function Ut(t,e){var n,i=e.split("-"),r=i[0],a=i.slice(1).join("-");return r!==t||""===a||(n=a,~ot.indexOf(n))?null:a}var qt,Kt=function(){var t=function(t){return Tt($t,(function(e,n,i){return e[i]=Tt(n,t,{}),e}),{})};Ft=t((function(t,e,n){(e[3]&&(t[e[3]]=n),e[2])&&e[2].filter((function(t){return"number"==typeof t})).forEach((function(e){t[e.toString(16)]=n}));return t})),Bt=t((function(t,e,n){(t[n]=n,e[2])&&e[2].filter((function(t){return"string"==typeof t})).forEach((function(e){t[e]=n}));return t})),Wt=t((function(t,e,n){var i=e[2];return t[n]=n,i.forEach((function(e){t[e]=n})),t}));var e="far"in $t||dt.autoFetchSvg,n=Tt(_t,(function(t,n){var i=n[0],r=n[1],a=n[2];return"far"!==r||e||(r="fas"),"string"==typeof i&&(t.names[i]={prefix:r,iconName:a}),"number"==typeof i&&(t.unicodes[i.toString(16)]={prefix:r,iconName:a}),t}),{names:{},unicodes:{}});Ht=n.names,Xt=n.unicodes,Yt=ie(dt.styleDefault,{family:dt.familyDefault})};function Jt(t,e){return(Ft[t]||{})[e]}function Qt(t,e){return(Wt[t]||{})[e]}function te(t){return Ht[t]||{prefix:null,iconName:null}}function ee(){return Yt}qt=function(t){Yt=ie(t.styleDefault,{family:dt.familyDefault})},ft.push(qt),Kt();var ne=function(){return{prefix:null,iconName:null,rest:[]}};function ie(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,n=void 0===e?F:e,i=W[n][t],r=Z[n][t]||Z[n][i],a=t in Et.styles?t:null;return r||a||null}var re=(s(Vt={},F,Object.keys(U[F])),s(Vt,B,Object.keys(U[B])),Vt);function ae(t){var e,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,i=void 0!==n&&n,r=(s(e={},F,"".concat(dt.cssPrefix,"-").concat(F)),s(e,B,"".concat(dt.cssPrefix,"-").concat(B)),e),a=null,o=F;(t.includes(r[F])||t.some((function(t){return re[F].includes(t)})))&&(o=F),(t.includes(r[B])||t.some((function(t){return re[B].includes(t)})))&&(o=B);var l=t.reduce((function(t,e){var n=Ut(dt.cssPrefix,e);if($t[e]?(e=Gt[o].includes(e)?q[o][e]:e,a=e,t.prefix=e):Zt[o].indexOf(e)>-1?(a=e,t.prefix=ie(e,{family:o})):n?t.iconName=n:e!==dt.replacementClass&&e!==r[F]&&e!==r[B]&&t.rest.push(e),!i&&t.prefix&&t.iconName){var s="fa"===a?te(t.iconName):{},l=Qt(t.prefix,t.iconName);s.prefix&&(a=null),t.iconName=s.iconName||l||t.iconName,t.prefix=s.prefix||t.prefix,"far"!==t.prefix||$t.far||!$t.fas||dt.autoFetchSvg||(t.prefix="fas")}return t}),ne());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),l.prefix||o!==B||!$t.fass&&!dt.autoFetchSvg||(l.prefix="fass",l.iconName=Qt(l.prefix,l.iconName)||l.iconName),"fa"!==l.prefix&&"fa"!==a||(l.prefix=ee()||"fas"),l}var oe=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,i;return e=t,n=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(e){t.definitions[e]=r(r({},t.definitions[e]||{}),a[e]),Mt(e,a[e]);var n=U[F][e];n&&Mt(n,a[e]),Kt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var i=n[e],r=i.prefix,a=i.iconName,o=i.icon,s=o[2];t[r]||(t[r]={}),s.length>0&&s.forEach((function(e){"string"==typeof e&&(t[r][e]=o)})),t[r][a]=o})),t}}],n&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),se=[],le={},ce={},de=Object.keys(ce);function fe(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(le[t]||[]).forEach((function(t){e=t.apply(null,[e].concat(i))})),e}function ue(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(le[t]||[]).forEach((function(t){t.apply(null,n)}))}function me(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ce[t]?ce[t].apply(null,e):void 0}function ge(t){"fa"===t.prefix&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(e)return e=Qt(n,e)||e,Lt(pe.definitions,n,e)||Lt(Et.styles,n,e)}var pe=new oe,he={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return z?(ue("beforeI2svg",t),me("pseudoElements2svg",t),me("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.autoReplaceSvgRoot;!1===dt.autoReplaceSvg&&(dt.autoReplaceSvg=!0),dt.observeMutations=!0,t=function(){ve({autoReplaceSvgRoot:n}),ue("watch",e)},z&&(At?setTimeout(t,0):zt.push(t))}},ye={noAuto:function(){dt.autoReplaceSvg=!1,dt.observeMutations=!1,ue("noAuto")},config:dt,dom:he,parse:{icon:function(t){if(null===t)return null;if("object"===a(t)&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Qt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],n=ie(t[0]);return{prefix:n,iconName:Qt(n,e)||e}}if("string"==typeof t&&(t.indexOf("".concat(dt.cssPrefix,"-"))>-1||t.match(K))){var i=ae(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ee(),iconName:Qt(i.prefix,i.iconName)||i.iconName}}if("string"==typeof t){var r=ee();return{prefix:r,iconName:Qt(r,t)||t}}}},library:pe,findIconDefinition:ge,toHtml:Pt},ve=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?I:t;(Object.keys(Et.styles).length>0||dt.autoFetchSvg)&&z&&dt.autoReplaceSvg&&ye.dom.i2svg({node:e})};function be(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Pt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(z){var e=I.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function we(t){var e=t.icons,n=e.main,i=e.mask,a=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,c=t.title,d=t.maskId,f=t.titleId,u=t.extra,m=t.watchable,g=void 0!==m&&m,p=i.found?i:n,h=p.width,y=p.height,v="fak"===a,b=[dt.replacementClass,o?"".concat(dt.cssPrefix,"-").concat(o):""].filter((function(t){return-1===u.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(u.classes).join(" "),w={children:[],attributes:r(r({},u.attributes),{},{"data-prefix":a,"data-icon":o,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(y)})},x=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/y*16*.0625,"em")}:{};g&&(w.attributes[j]=""),c&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||pt())},children:[c]}),delete w.attributes.title);var S=r(r({},w),{},{prefix:a,iconName:o,main:n,mask:i,maskId:d,transform:s,symbol:l,styles:r(r({},x),u.styles)}),k=i.found&&n.found?me("generateAbstractMask",S)||{children:[],attributes:{}}:me("generateAbstractIcon",S)||{children:[],attributes:{}},C=k.children,I=k.attributes;return S.children=C,S.attributes=I,l?function(t){var e=t.prefix,n=t.iconName,i=t.children,a=t.attributes,o=t.symbol,s=!0===o?"".concat(e,"-").concat(dt.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r(r({},a),{},{id:s}),children:i}]}]}(S):function(t){var e=t.children,n=t.main,i=t.mask,a=t.attributes,o=t.styles,s=t.transform;if(wt(s)&&n.found&&!i.found){var l={x:n.width/n.height/2,y:.5};a.style=bt(r(r({},o),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}(S)}function xe(t){var e=t.content,n=t.width,i=t.height,a=t.transform,o=t.title,s=t.extra,l=t.watchable,c=void 0!==l&&l,d=r(r(r({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});c&&(d[j]="");var f=r({},s.styles);wt(a)&&(f.transform=function(t){var e=t.transform,n=t.width,i=void 0===n?L:n,r=t.height,a=void 0===r?L:r,o=t.startCentered,s=void 0!==o&&o,l="";return l+=s&&A?"translate(".concat(e.x/ut-i/2,"em, ").concat(e.y/ut-a/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/ut,"em), calc(-50% + ").concat(e.y/ut,"em)) "):"translate(".concat(e.x/ut,"em, ").concat(e.y/ut,"em) "),l+="scale(".concat(e.size/ut*(e.flipX?-1:1),", ").concat(e.size/ut*(e.flipY?-1:1),") "),l+"rotate(".concat(e.rotate,"deg) ")}({transform:a,startCentered:!0,width:n,height:i}),f["-webkit-transform"]=f.transform);var u=bt(f);u.length>0&&(d.style=u);var m=[];return m.push({tag:"span",attributes:d,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}var Se=Et.styles;function ke(t){var e=t[0],n=t[1],i=l(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(i)?{tag:"g",attributes:{class:"".concat(dt.cssPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}}}}var Ce={found:!1,width:512,height:512};function Ie(t,e){var n=e;return"fa"===e&&null!==dt.styleDefault&&(e=ee()),new Promise((function(i,a){me("missingIconAbstract");if("fa"===n){var o=te(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Se[e]&&Se[e][t])return i(ke(Se[e][t]));!function(t,e){Y||dt.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}(t,e),i(r(r({},Ce),{},{icon:dt.showMissingIcons&&t&&me("missingIconAbstract")||{}}))}))}var Oe=function(){},Ee=dt.measurePerformance&&E&&E.mark&&E.measure?E:{mark:Oe,measure:Oe},ze='FA "6.4.0"',Ae=function(t){Ee.mark("".concat(ze," ").concat(t," ends")),Ee.measure("".concat(ze," ").concat(t),"".concat(ze," ").concat(t," begins"),"".concat(ze," ").concat(t," ends"))},Pe={begin:function(t){return Ee.mark("".concat(ze," ").concat(t," begins")),function(){return Ae(t)}},end:Ae},Le=function(){};function Te(t){return"string"==typeof(t.getAttribute?t.getAttribute(j):null)}function Ne(t){return I.createElementNS("http://www.w3.org/2000/svg",t)}function je(t){return I.createElement(t)}function Me(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,n=void 0===e?"svg"===t.tag?Ne:je:e;if("string"==typeof t)return I.createTextNode(t);var i=n(t.tag);return Object.keys(t.attributes||[]).forEach((function(e){i.setAttribute(e,t.attributes[e])})),(t.children||[]).forEach((function(t){i.appendChild(Me(t,{ceFn:n}))})),i}var De={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach((function(t){e.parentNode.insertBefore(Me(t),e)})),null===e.getAttribute(j)&&dt.keepOriginalSource){var n=I.createComment(function(t){var e=" ".concat(t.outerHTML," ");return"".concat(e,"Font Awesome fontawesome.com ")}(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~yt(e).indexOf(dt.replacementClass))return De.replace(t);var i=new RegExp("".concat(dt.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===dt.replacementClass||e.match(i)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),0===r.toNode.length?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var a=n.map((function(t){return Pt(t)})).join("\n");e.setAttribute(j,""),e.innerHTML=a}};function Re(t){t()}function Ve(t,e){var n="function"==typeof e?e:Le;if(0===t.length)n();else{var i=Re;dt.mutateApproach===_&&(i=C.requestAnimationFrame||Re),i((function(){var e=!0===dt.autoReplaceSvg?De.replace:De[dt.autoReplaceSvg]||De.replace,i=Pe.begin("mutate");t.map(e),i(),n()}))}}var $e=!1;function _e(){$e=!0}function Ge(){$e=!1}var Ye=null;function Fe(t){if(O&&dt.observeMutations){var e=t.treeCallback,n=void 0===e?Le:e,i=t.nodeCallback,r=void 0===i?Le:i,a=t.pseudoElementsCallback,o=void 0===a?Le:a,s=t.observeMutationsRoot,l=void 0===s?I:s;Ye=new O((function(t){if(!$e){var e=ee();ht(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Te(t.addedNodes[0])&&(dt.searchPseudoElements&&o(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&dt.searchPseudoElements&&o(t.target.parentNode),"attributes"===t.type&&Te(t.target)&&~it.indexOf(t.attributeName))if("class"===t.attributeName&&function(t){var e=t.getAttribute?t.getAttribute(R):null,n=t.getAttribute?t.getAttribute(V):null;return e&&n}(t.target)){var i=ae(yt(t.target)),a=i.prefix,s=i.iconName;t.target.setAttribute(R,a||e),s&&t.target.setAttribute(V,s)}else(l=t.target)&&l.classList&&l.classList.contains&&l.classList.contains(dt.replacementClass)&&r(t.target);var l}))}})),z&&Ye.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Be(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",r=ae(yt(t));return r.prefix||(r.prefix=ee()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=function(t,e){return(Bt[t]||{})[e]}(r.prefix,t.innerText)||Jt(r.prefix,Nt(t.innerText))),!r.iconName&&dt.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function He(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=Be(t),i=n.iconName,a=n.prefix,o=n.rest,s=function(t){var e=ht(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return dt.autoA11y&&(n?e["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(i||pt()):(e["aria-hidden"]="true",e.focusable="false")),e}(t),l=fe("parseNodeAttributes",{},t),c=e.styleParser?function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(t[i]=r.join(":").trim()),t}),{})),n}(t):[];return r({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:s}},l)}var Xe=Et.styles;function We(t){var e="nest"===dt.autoReplaceSvg?He(t,{styleParser:!1}):He(t);return~e.extra.classes.indexOf(J)?me("generateLayersText",t,e):me("generateSvgReplacementMutation",t,e)}var Ze=new Set;function Ue(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!z)return Promise.resolve();var n=I.documentElement.classList,i=function(t){return n.add("".concat($,"-").concat(t))},r=function(t){return n.remove("".concat($,"-").concat(t))},a=dt.autoFetchSvg?Ze:H.map((function(t){return"fa-".concat(t)})).concat(Object.keys(Xe));a.includes("fa")||a.push("fa");var o=[".".concat(J,":not([").concat(j,"])")].concat(a.map((function(t){return".".concat(t,":not([").concat(j,"])")}))).join(", ");if(0===o.length)return Promise.resolve();var s=[];try{s=ht(t.querySelectorAll(o))}catch(Mn){}if(!(s.length>0))return Promise.resolve();i("pending"),r("complete");var l=Pe.begin("onTree"),c=s.reduce((function(t,e){try{var n=We(e);n&&t.push(n)}catch(Mn){Y||"MissingIcon"===Mn.name&&console.error(Mn)}return t}),[]);return new Promise((function(t,n){Promise.all(c).then((function(n){Ve(n,(function(){i("active"),i("complete"),r("pending"),"function"==typeof e&&e(),l(),t()}))})).catch((function(t){l(),n(t)}))}))}function qe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;We(t).then((function(t){t&&Ve([t],e)}))}H.map((function(t){Ze.add("fa-".concat(t))})),Object.keys(W[F]).map(Ze.add.bind(Ze)),Object.keys(W[B]).map(Ze.add.bind(Ze)),Ze=c(Ze);var Ke=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,i=void 0===n?mt:n,a=e.symbol,o=void 0!==a&&a,s=e.mask,l=void 0===s?null:s,c=e.maskId,d=void 0===c?null:c,f=e.title,u=void 0===f?null:f,m=e.titleId,g=void 0===m?null:m,p=e.classes,h=void 0===p?[]:p,y=e.attributes,v=void 0===y?{}:y,b=e.styles,w=void 0===b?{}:b;if(t){var x=t.prefix,S=t.iconName,k=t.icon;return be(r({type:"icon"},t),(function(){return ue("beforeDOMElementCreation",{iconDefinition:t,params:e}),dt.autoA11y&&(u?v["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(g||pt()):(v["aria-hidden"]="true",v.focusable="false")),we({icons:{main:ke(k),mask:l?ke(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:r(r({},mt),i),symbol:o,title:u,maskId:d,titleId:g,extra:{attributes:v,styles:w,classes:h}})}))}},Je={mixout:function(){return{icon:(t=Ke,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(e||{}).icon?e:ge(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ge(a||{})),t(i,r(r({},n),{},{mask:a}))})};var t},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ue,t.nodeCallback=qe,t}}},provides:function(t){t.i2svg=function(t){var e=t.node,n=void 0===e?I:e,i=t.callback;return Ue(n,void 0===i?function(){}:i)},t.generateSvgReplacementMutation=function(t,e){var n=e.iconName,i=e.title,r=e.titleId,a=e.prefix,o=e.transform,s=e.symbol,c=e.mask,d=e.maskId,f=e.extra;return new Promise((function(e,u){Promise.all([Ie(n,a),c.iconName?Ie(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(c){var u=l(c,2),m=u[0],g=u[1];e([t,we({icons:{main:m,mask:g},prefix:a,iconName:n,transform:o,symbol:s,maskId:d,title:i,titleId:r,extra:f,watchable:!0})])})).catch(u)}))},t.generateAbstractIcon=function(t){var e,n=t.children,i=t.attributes,r=t.main,a=t.transform,o=bt(t.styles);return o.length>0&&(i.style=o),wt(a)&&(e=me("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),n.push(e||r.icon),{children:n,attributes:i}}}},Qe={mixout:function(){return{layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,i=void 0===n?[]:n;return be({type:"layer"},(function(){ue("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t((function(t){Array.isArray(t)?t.map((function(t){n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(dt.cssPrefix,"-layers")].concat(c(i)).join(" ")},children:n}]}))}}}},tn={mixout:function(){return{counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,i=void 0===n?null:n,a=e.classes,o=void 0===a?[]:a,s=e.attributes,l=void 0===s?{}:s,d=e.styles,f=void 0===d?{}:d;return be({type:"counter",content:t},(function(){return ue("beforeDOMElementCreation",{content:t,params:e}),function(t){var e=t.content,n=t.title,i=t.extra,a=r(r(r({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=bt(i.styles);o.length>0&&(a.style=o);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}({content:t.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(dt.cssPrefix,"-layers-counter")].concat(c(o))}})}))}}}},en={mixout:function(){return{text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,i=void 0===n?mt:n,a=e.title,o=void 0===a?null:a,s=e.classes,l=void 0===s?[]:s,d=e.attributes,f=void 0===d?{}:d,u=e.styles,m=void 0===u?{}:u;return be({type:"text",content:t},(function(){return ue("beforeDOMElementCreation",{content:t,params:e}),xe({content:t,transform:r(r({},mt),i),title:o,extra:{attributes:f,styles:m,classes:["".concat(dt.cssPrefix,"-layers-text")].concat(c(l))}})}))}}},provides:function(t){t.generateLayersText=function(t,e){var n=e.title,i=e.transform,r=e.extra,a=null,o=null;if(A){var s=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();a=l.width/s,o=l.height/s}return dt.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,xe({content:t.innerHTML,width:a,height:o,transform:i,title:n,extra:r,watchable:!0})])}}},nn=new RegExp('"',"ug"),rn=[1105920,1112319];function an(t,e){var n="".concat(D).concat(e.replace(":","-"));return new Promise((function(i,a){if(null!==t.getAttribute(n))return i();var o,s,l,c=ht(t.children).filter((function(t){return t.getAttribute(M)===e}))[0],d=C.getComputedStyle(t,e),f=d.getPropertyValue("font-family").match(Q),u=d.getPropertyValue("font-weight"),m=d.getPropertyValue("content");if(c&&!f)return t.removeChild(c),i();if(f&&"none"!==m&&""!==m){var g=d.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?B:F,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Z[p][f[2].toLowerCase()]:tt[p][u],y=function(t){var e,n,i,r,a,o=t.replace(nn,""),s=(n=0,r=(e=o).length,(a=e.charCodeAt(n))>=55296&&a<=56319&&r>n+1&&(i=e.charCodeAt(n+1))>=56320&&i<=57343?1024*(a-55296)+i-56320+65536:a),l=s>=rn[0]&&s<=rn[1],c=2===o.length&&o[0]===o[1];return{value:Nt(c?o[0]:o),isSecondary:l||c}}(g),v=y.value,b=y.isSecondary,w=f[0].startsWith("FontAwesome"),x=Jt(h,v),S=x;if(w){var k=(s=Xt[o=v],l=Jt("fas",o),s||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null});k.iconName&&k.prefix&&(x=k.iconName,h=k.prefix)}if(!x||b||c&&c.getAttribute(R)===h&&c.getAttribute(V)===S)i();else{t.setAttribute(n,S),c&&t.removeChild(c);var O={iconName:null,title:null,titleId:null,prefix:null,transform:mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},E=O.extra;E.attributes[M]=e,Ie(x,h).then((function(a){var o=we(r(r({},O),{},{icons:{main:a,mask:ne()},prefix:h,iconName:S,extra:E,watchable:!0})),s=I.createElement("svg");"::before"===e?t.insertBefore(s,t.firstChild):t.appendChild(s),s.outerHTML=o.map((function(t){return Pt(t)})).join("\n"),t.removeAttribute(n),i()})).catch(a)}}else i()}))}function on(t){return Promise.all([an(t,"::before"),an(t,"::after")])}function sn(t){return!(t.parentNode===document.head||~G.indexOf(t.tagName.toUpperCase())||t.getAttribute(M)||t.parentNode&&"svg"===t.parentNode.tagName)}function ln(t){if(z)return new Promise((function(e,n){var i=ht(t.querySelectorAll("*")).filter(sn).map(on),r=Pe.begin("searchPseudoElements");_e(),Promise.all(i).then((function(){r(),Ge(),e()})).catch((function(){r(),Ge(),n()}))}))}var cn=!1,dn=function(t){return t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),i=n[0],r=n.slice(1).join("-");if(i&&"h"===r)return t.flipX=!0,t;if(i&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(i){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},fn={mixout:function(){return{parse:{transform:function(t){return dn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=dn(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(t){var e=t.main,n=t.transform,i=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(32*n.x,", ").concat(32*n.y,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={outer:o,inner:{transform:"".concat(s," ").concat(l," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:r({},d.outer),children:[{tag:"g",attributes:r({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:r(r({},e.icon.attributes),d.path)}]}]}}}},un={x:0,y:0,width:"100%",height:"100%"};function mn(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}var gn={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),i=n?ae(n.split(" ").map((function(t){return t.trim()}))):ne();return i.prefix||(i.prefix=ee()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(t){var e,n=t.children,i=t.attributes,a=t.main,o=t.mask,s=t.maskId,l=t.transform,c=a.width,d=a.icon,f=o.width,u=o.icon,m=function(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(a," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(i/2*-1," -256)")}}}({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:r(r({},un),{},{fill:"white"})},p=d.children?{children:d.children.map(mn)}:{},h={tag:"g",attributes:r({},m.inner),children:[mn(r({tag:d.tag,attributes:r(r({},d.attributes),m.path)},p))]},y={tag:"g",attributes:r({},m.outer),children:[h]},v="mask-".concat(s||pt()),b="clip-".concat(s||pt()),w={tag:"mask",attributes:r(r({},un),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(e=u,"g"===e.tag?e.children:[e])},w]};return n.push(x,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},un)}),{children:n,attributes:i}}}},pn={provides:function(t){var e=!1;C.matchMedia&&(e=C.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var t=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:r(r({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=r(r({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:r(r({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:r(r({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r(r({},a),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:r(r({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:r(r({},a),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:r(r({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r(r({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}};!function(t,e){var n=e.mixoutsTo;se=t,le={},Object.keys(ce).forEach((function(t){-1===de.indexOf(t)&&delete ce[t]})),se.forEach((function(t){var e=t.mixout?t.mixout():{};if(Object.keys(e).forEach((function(t){"function"==typeof e[t]&&(n[t]=e[t]),"object"===a(e[t])&&Object.keys(e[t]).forEach((function(i){n[t]||(n[t]={}),n[t][i]=e[t][i]}))})),t.hooks){var i=t.hooks();Object.keys(i).forEach((function(t){le[t]||(le[t]=[]),le[t].push(i[t])}))}t.provides&&t.provides(ce)}))}([It,Je,Qe,tn,en,{hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=ln,t}}},provides:function(t){t.pseudoElements2svg=function(t){var e=t.node,n=void 0===e?I:e;dt.searchPseudoElements&&ln(n)}}},{mixout:function(){return{dom:{unwatch:function(){_e(),cn=!0}}}},hooks:function(){return{bootstrap:function(){Fe(fe("mutationObserverCallbacks",{}))},noAuto:function(){Ye&&Ye.disconnect()},watch:function(t){var e=t.observeMutationsRoot;cn?Ge():Fe(fe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},fn,gn,pn,{hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),i=null!==n&&(""===n||n);return t.symbol=i,t}}}}],{mixoutsTo:ye});var hn=ye.parse,yn=ye.icon,vn=n(5697),bn=n.n(vn),wn=n(7294);function xn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Sn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?xn(Object(n),!0).forEach((function(e){Cn(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xn(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function kn(t){return kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(t)}function Cn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function In(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function On(t){return function(t){if(Array.isArray(t))return En(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return En(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return En(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function En(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function zn(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var An=["style"];var Pn=!1;try{Pn=!0}catch(Mn){}function Ln(t){return t&&"object"===kn(t)&&t.prefix&&t.iconName&&t.icon?t:hn.icon?hn.icon(t):null===t?null:t&&"object"===kn(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function Tn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Cn({},t,e):{}}var Nn=wn.forwardRef((function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,c=Ln(n),d=Tn("classes",[].concat(On(function(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,d=t.spinReverse,f=t.pulse,u=t.fixedWidth,m=t.inverse,g=t.border,p=t.listItem,h=t.flip,y=t.size,v=t.rotation,b=t.pull,w=(Cn(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":u,"fa-inverse":m,"fa-border":g,"fa-li":p,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(y),null!=y),Cn(e,"fa-rotate-".concat(v),null!=v&&0!==v),Cn(e,"fa-pull-".concat(b),null!=b),Cn(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(t)),On(a.split(" ")))),f=Tn("transform","string"==typeof t.transform?hn.transform(t.transform):t.transform),u=Tn("mask",Ln(i)),m=yn(c,Sn(Sn(Sn(Sn({},d),f),u),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!m)return function(){var t;!Pn&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",c),null;var g=m.abstract,p={ref:e};return Object.keys(t).forEach((function(e){Nn.defaultProps.hasOwnProperty(e)||(p[e]=t[e])})),jn(g[0],p)}));Nn.displayName="FontAwesomeIcon",Nn.propTypes={beat:bn().bool,border:bn().bool,beatFade:bn().bool,bounce:bn().bool,className:bn().string,fade:bn().bool,flash:bn().bool,mask:bn().oneOfType([bn().object,bn().array,bn().string]),maskId:bn().string,fixedWidth:bn().bool,inverse:bn().bool,flip:bn().oneOf([!0,!1,"horizontal","vertical","both"]),icon:bn().oneOfType([bn().object,bn().array,bn().string]),listItem:bn().bool,pull:bn().oneOf(["right","left"]),pulse:bn().bool,rotation:bn().oneOf([0,90,180,270]),shake:bn().bool,size:bn().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:bn().bool,spinPulse:bn().bool,spinReverse:bn().bool,symbol:bn().oneOfType([bn().bool,bn().string]),title:bn().string,titleId:bn().string,transform:bn().oneOfType([bn().string,bn().object]),swapOpacity:bn().bool},Nn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var jn=function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return t(e,n)})),a=Object.keys(n.attributes||{}).reduce((function(t,e){var i=n.attributes[e];switch(e){case"class":t.attrs.className=i,delete n.attributes.class;break;case"style":t.attrs.style=i.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,i=e.indexOf(":"),r=zn(e.slice(0,i)),a=e.slice(i+1).trim();return r.startsWith("webkit")?t[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=a:t[r]=a,t}),{});break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=i:t.attrs[zn(e)]=i}return t}),{attrs:{}}),o=i.style,s=void 0===o?{}:o,l=In(i,An);return a.attrs.style=Sn(Sn({},a.attrs.style),s),e.apply(void 0,[n.tag,Sn(Sn({},a.attrs),l)].concat(On(r)))}.bind(null,wn.createElement)},8032:function(t,e,n){"use strict";n.d(e,{L:function(){return g},M:function(){return S},P:function(){return x},S:function(){return G},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return f},h:function(){return l}});var i=n(7294),r=(n(2369),n(5697)),a=n.n(r);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e.indexOf(n=a[i])>=0||(r[n]=t[n]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(t,e,n){const i={};let r="gatsby-image-wrapper";return"fixed"===n?(i.width=t,i.height=e):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i}}function d(t,e,n,i,r){return void 0===r&&(r={}),o({},n,{loading:i,shouldLoad:t,"data-main-image":"",style:o({},r,{opacity:e?1:0})})}function f(t,e,n,i,r,a,s,l){const c={};a&&(c.backgroundColor=a,"fixed"===n?(c.width=i,c.height=r,c.backgroundColor=a,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:e?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(t){let{layout:e,width:n,height:r}=t;return"fullWidth"===e?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===e?i.createElement("div",{style:{maxWidth:n,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(t){let{children:e}=t,n=s(t,u);return i.createElement(i.Fragment,null,i.createElement(m,o({},n)),e,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(t){let{src:e,srcSet:n,loading:r,alt:a="",shouldLoad:l}=t,c=s(t,p);return i.createElement("img",o({},c,{decoding:"async",loading:r,src:l?e:void 0,"data-src":l?void 0:e,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:a}))},v=function(t){let{fallback:e,sources:n=[],shouldLoad:r=!0}=t,a=s(t,h);const l=a.sizes||(null==e?void 0:e.sizes),c=i.createElement(y,o({},a,e,{sizes:l,shouldLoad:r}));return n.length?i.createElement("picture",null,n.map((t=>{let{media:e,srcSet:n,type:a}=t;return i.createElement("source",{key:e+"-"+a+"-"+n,type:a,media:e,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:l})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],x=function(t){let{fallback:e}=t,n=s(t,w);return e?i.createElement(v,o({},n,{fallback:{src:e},"aria-hidden":!0,alt:""})):i.createElement("div",o({},n))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(t,e,n){return t[e]?new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Validation failed."):null}};const S=function(t){return i.createElement(i.Fragment,null,i.createElement(v,o({},t)),i.createElement("noscript",null,i.createElement(v,o({},t,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],I=t=>t.replace(/\n/g,""),O=function(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];return t.alt||""===t.alt?a().string.apply(a(),[t,e,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:a().object.isRequired,alt:O},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],P=new Set;let L,T;const N=function(t){let{as:e="div",image:r,style:a,backgroundColor:d,className:f,class:u,onStartLoad:m,onLoad:g,onError:p}=t,h=s(t,z);const{width:y,height:v,layout:b}=r,w=c(y,v,b),{style:x,className:S}=w,k=s(w,A),C=(0,i.useRef)(),I=(0,i.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(f=u);const O=function(t,e,n){let i="";return"fullWidth"===t&&(i='<div aria-hidden="true" style="padding-top: '+n/e*100+'%;"></div>'),"constrained"===t&&(i='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+e+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(b,y,v);return(0,i.useEffect)((()=>{L||(L=n.e(731).then(n.bind(n,6731)).then((t=>{let{renderImageToString:e,swapPlaceholderImage:n}=t;return T=e,{renderImageToString:e,swapPlaceholderImage:n}})));const t=C.current.querySelector("[data-gatsby-image-ssr]");if(t&&l())return t.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{t.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),t.addEventListener("load",(function e(){t.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((()=>{t.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(I);if(T&&P.has(I))return;let e,i;return L.then((t=>{let{renderImageToString:n,swapPlaceholderImage:s}=t;C.current&&(C.current.innerHTML=n(o({isLoading:!0,isLoaded:P.has(I),image:r},h)),P.has(I)||(e=requestAnimationFrame((()=>{C.current&&(i=s(C.current,I,P,a,m,g,p))}))))})),()=>{e&&cancelAnimationFrame(e),i&&i()}}),[r]),(0,i.useLayoutEffect)((()=>{P.has(I)&&T&&(C.current.innerHTML=T(o({isLoading:P.has(I),isLoaded:P.has(I),image:r},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,i.createElement)(e,o({},k,{style:o({},x,a,{backgroundColor:d}),className:S+(f?" "+f:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},j=(0,i.memo)((function(t){return t.image?(0,i.createElement)(N,t):null}));j.propTypes=E,j.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(t){return function(e){let{src:n,__imageData:r,__error:a}=e,l=s(e,M);return a&&console.warn(a),r?i.createElement(t,o({image:r},l)):(console.warn("Image not loaded",n),null)}}const R=D((function(t){let{as:e="div",className:n,class:r,style:a,image:l,loading:u="lazy",imgClassName:m,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:v}=t,b=s(t,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(n=r),p=o({objectFit:y,objectPosition:v,backgroundColor:h},p);const{width:w,height:O,layout:E,images:z,placeholder:A,backgroundColor:P}=l,L=c(w,O,E),{style:T,className:N}=L,j=s(L,C),M={fallback:void 0,sources:[]};return z.fallback&&(M.fallback=o({},z.fallback,{srcSet:z.fallback.srcSet?I(z.fallback.srcSet):void 0})),z.sources&&(M.sources=z.sources.map((t=>o({},t,{srcSet:I(t.srcSet)})))),i.createElement(e,o({},j,{style:o({},T,a,{backgroundColor:h}),className:N+(n?" "+n:"")}),i.createElement(g,{layout:E,width:w,height:O},i.createElement(x,o({},f(A,!1,E,w,O,P,y,v))),i.createElement(S,o({"data-gatsby-image-ssr":"",className:m},b,d("eager"===u,!1,M,u,p)))))})),V=function(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?a().number.apply(a(),[t,e].concat(i)):new Error('"'+e+'" '+t[e]+" may not be passed when layout is fullWidth.")},$=new Set(["fixed","fullWidth","constrained"]),_={src:a().string.isRequired,alt:O,width:V,height:V,sizes:a().string,layout:t=>{if(void 0!==t.layout&&!$.has(t.layout))return new Error("Invalid value "+t.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=_;const G=D(j);G.displayName="StaticImage",G.propTypes=_},2369:function(t){"use strict";const e=/[\p{Lu}]/u,n=/[\p{Ll}]/u,i=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,a=/[_.\- ]+/,o=new RegExp("^"+a.source),s=new RegExp(a.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(t,r)=>{if("string"!=typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(t=Array.isArray(t)?t.map((t=>t.trim())).filter((t=>t.length)).join("-"):t.trim()).length)return"";const a=!1===r.locale?t=>t.toLowerCase():t=>t.toLocaleLowerCase(r.locale),c=!1===r.locale?t=>t.toUpperCase():t=>t.toLocaleUpperCase(r.locale);if(1===t.length)return r.pascalCase?c(t):a(t);return t!==a(t)&&(t=((t,i,r)=>{let a=!1,o=!1,s=!1;for(let l=0;l<t.length;l++){const c=t[l];a&&e.test(c)?(t=t.slice(0,l)+"-"+t.slice(l),a=!1,s=o,o=!0,l++):o&&s&&n.test(c)?(t=t.slice(0,l-1)+"-"+t.slice(l-1),s=o,o=!1,a=!0):(a=i(c)===c&&r(c)!==c,s=o,o=r(c)===c&&i(c)!==c)}return t})(t,a,c)),t=t.replace(o,""),t=r.preserveConsecutiveUppercase?((t,e)=>(i.lastIndex=0,t.replace(i,(t=>e(t)))))(t,a):a(t),r.pascalCase&&(t=c(t.charAt(0))+t.slice(1)),((t,e)=>(s.lastIndex=0,l.lastIndex=0,t.replace(s,((t,n)=>e(n))).replace(l,(t=>e(t)))))(t,c)};t.exports=c,t.exports.default=c},2223:function(t,e,n){"use strict";n.d(e,{Z:function(){return Kt}});var i=n(7294);var r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)};var a="lgAfterAppendSlide",o="lgInit",s="lgHasVideo",l="lgContainerResize",c="lgUpdateSlides",d="lgAfterAppendSubHtml",f="lgBeforeOpen",u="lgAfterOpen",m="lgSlideItemLoad",g="lgBeforeSlide",p="lgAfterSlide",h="lgPosterClick",y="lgDragStart",v="lgDragMove",b="lgDragEnd",w="lgBeforeNextSlide",x="lgBeforePrevSlide",S="lgBeforeClose",k="lgAfterClose",C={mode:"lg-slide",easing:"ease",speed:400,licenseKey:"0000-0000-000-0000",height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:300,container:"",startAnimationDuration:400,zoomFromOrigin:!0,hideBarsDelay:0,showBarsAfter:1e4,slideDelay:0,supportLegacyBrowser:!0,allowMediaOverlap:!1,videoMaxSize:"1280-720",loadYouTubePoster:!0,defaultCaptionHeight:0,ariaLabelledby:"",ariaDescribedby:"",resetScrollPosition:!0,hideScrollbar:!1,closable:!0,swipeToClose:!0,closeOnTap:!0,showCloseIcon:!0,showMaximizeIcon:!1,loop:!0,escKey:!0,keyPress:!0,trapFocus:!0,controls:!0,slideEndAnimation:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:2,numberOfSlideItemsInDom:10,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:0,iframeWidth:"100%",iframeHeight:"100%",iframeMaxWidth:"100%",iframeMaxHeight:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],extraProps:[],exThumbImage:"",isMobile:void 0,mobileSettings:{controls:!1,showCloseIcon:!1,download:!1},plugins:[],strings:{closeGallery:"Close gallery",toggleMaximize:"Toggle maximize",previousSlide:"Previous slide",nextSlide:"Next slide",download:"Download",playVideo:"Play video"}};var I=function(){function t(t){return this.cssVenderPrefixes=["TransitionDuration","TransitionTimingFunction","Transform","Transition"],this.selector=this._getSelector(t),this.firstElement=this._getFirstEl(),this}return t.generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},t.prototype._getSelector=function(t,e){return void 0===e&&(e=document),"string"!=typeof t?t:(e=e||document,"#"===t.substring(0,1)?e.querySelector(t):e.querySelectorAll(t))},t.prototype._each=function(t){return this.selector?(void 0!==this.selector.length?[].forEach.call(this.selector,t):t(this.selector,0),this):this},t.prototype._setCssVendorPrefix=function(t,e,n){var i=e.replace(/-([a-z])/gi,(function(t,e){return e.toUpperCase()}));-1!==this.cssVenderPrefixes.indexOf(i)?(t.style[i.charAt(0).toLowerCase()+i.slice(1)]=n,t.style["webkit"+i]=n,t.style["moz"+i]=n,t.style["ms"+i]=n,t.style["o"+i]=n):t.style[i]=n},t.prototype._getFirstEl=function(){return this.selector&&void 0!==this.selector.length?this.selector[0]:this.selector},t.prototype.isEventMatched=function(t,e){var n=e.split(".");return t.split(".").filter((function(t){return t})).every((function(t){return-1!==n.indexOf(t)}))},t.prototype.attr=function(t,e){return void 0===e?this.firstElement?this.firstElement.getAttribute(t):"":(this._each((function(n){n.setAttribute(t,e)})),this)},t.prototype.find=function(t){return O(this._getSelector(t,this.selector))},t.prototype.first=function(){return this.selector&&void 0!==this.selector.length?O(this.selector[0]):O(this.selector)},t.prototype.eq=function(t){return O(this.selector[t])},t.prototype.parent=function(){return O(this.selector.parentElement)},t.prototype.get=function(){return this._getFirstEl()},t.prototype.removeAttr=function(t){var e=t.split(" ");return this._each((function(t){e.forEach((function(e){return t.removeAttribute(e)}))})),this},t.prototype.wrap=function(t){if(!this.firstElement)return this;var e=document.createElement("div");return e.className=t,this.firstElement.parentNode.insertBefore(e,this.firstElement),this.firstElement.parentNode.removeChild(this.firstElement),e.appendChild(this.firstElement),this},t.prototype.addClass=function(t){return void 0===t&&(t=""),this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.add(t)}))})),this},t.prototype.removeClass=function(t){return this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.remove(t)}))})),this},t.prototype.hasClass=function(t){return!!this.firstElement&&this.firstElement.classList.contains(t)},t.prototype.hasAttribute=function(t){return!!this.firstElement&&this.firstElement.hasAttribute(t)},t.prototype.toggleClass=function(t){return this.firstElement?(this.hasClass(t)?this.removeClass(t):this.addClass(t),this):this},t.prototype.css=function(t,e){var n=this;return this._each((function(i){n._setCssVendorPrefix(i,t,e)})),this},t.prototype.on=function(e,n){var i=this;return this.selector?(e.split(" ").forEach((function(e){Array.isArray(t.eventListeners[e])||(t.eventListeners[e]=[]),t.eventListeners[e].push(n),i.selector.addEventListener(e.split(".")[0],n)})),this):this},t.prototype.once=function(t,e){var n=this;return this.on(t,(function(){n.off(t),e(t)})),this},t.prototype.off=function(e){var n=this;return this.selector?(Object.keys(t.eventListeners).forEach((function(i){n.isEventMatched(e,i)&&(t.eventListeners[i].forEach((function(t){n.selector.removeEventListener(i.split(".")[0],t)})),t.eventListeners[i]=[])})),this):this},t.prototype.trigger=function(t,e){if(!this.firstElement)return this;var n=new CustomEvent(t.split(".")[0],{detail:e||null});return this.firstElement.dispatchEvent(n),this},t.prototype.load=function(t){var e=this;return fetch(t).then((function(t){return t.text()})).then((function(t){e.selector.innerHTML=t})),this},t.prototype.html=function(t){return void 0===t?this.firstElement?this.firstElement.innerHTML:"":(this._each((function(e){e.innerHTML=t})),this)},t.prototype.append=function(t){return this._each((function(e){"string"==typeof t?e.insertAdjacentHTML("beforeend",t):e.appendChild(t)})),this},t.prototype.prepend=function(t){return this._each((function(e){e.insertAdjacentHTML("afterbegin",t)})),this},t.prototype.remove=function(){return this._each((function(t){t.parentNode.removeChild(t)})),this},t.prototype.empty=function(){return this._each((function(t){t.innerHTML=""})),this},t.prototype.scrollTop=function(t){return void 0!==t?(document.body.scrollTop=t,document.documentElement.scrollTop=t,this):window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},t.prototype.scrollLeft=function(t){return void 0!==t?(document.body.scrollLeft=t,document.documentElement.scrollLeft=t,this):window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},t.prototype.offset=function(){if(!this.firstElement)return{left:0,top:0};var t=this.firstElement.getBoundingClientRect(),e=O("body").style().marginLeft;return{left:t.left-parseFloat(e)+this.scrollLeft(),top:t.top+this.scrollTop()}},t.prototype.style=function(){return this.firstElement?this.firstElement.currentStyle||window.getComputedStyle(this.firstElement):{}},t.prototype.width=function(){var t=this.style();return this.firstElement.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)},t.prototype.height=function(){var t=this.style();return this.firstElement.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)},t.eventListeners={},t}();function O(t){return function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),new I(t)}var E=["src","sources","subHtml","subHtmlUrl","html","video","poster","slideName","responsive","srcset","sizes","iframe","downloadUrl","download","width","facebookShareUrl","tweetText","iframeTitle","twitterShareUrl","pinterestShareUrl","pinterestText","fbHtml","disqusIdentifier","disqusUrl"];function z(t){return"href"===t?"src":t=(t=(t=t.replace("data-","")).charAt(0).toLowerCase()+t.slice(1)).replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}var A=function(t,e,n,i){void 0===n&&(n=0);var r=O(t).attr("data-lg-size")||i;if(r){var a=r.split(",");if(a[1])for(var o=window.innerWidth,s=0;s<a.length;s++){var l=a[s];if(parseInt(l.split("-")[2],10)>o){r=l;break}s===a.length-1&&(r=l)}var c=r.split("-"),d=parseInt(c[0],10),f=parseInt(c[1],10),u=e.width(),m=e.height()-n,g=Math.min(u,d),p=Math.min(m,f),h=Math.min(g/d,p/f);return{width:d*h,height:f*h}}},P=function(t,e,n,i,r){if(r){var a=O(t).find("img").first();if(a.get()){var o=e.get().getBoundingClientRect(),s=o.width,l=e.height()-(n+i),c=a.width(),d=a.height(),f=a.style(),u=(s-c)/2-a.offset().left+(parseFloat(f.paddingLeft)||0)+(parseFloat(f.borderLeft)||0)+O(window).scrollLeft()+o.left,m=(l-d)/2-a.offset().top+(parseFloat(f.paddingTop)||0)+(parseFloat(f.borderTop)||0)+O(window).scrollTop()+n;return"translate3d("+(u*=-1)+"px, "+(m*=-1)+"px, 0) scale3d("+c/r.width+", "+d/r.height+", 1)"}}},L=function(t,e,n,i,r,a){return'<div class="lg-video-cont lg-has-iframe" style="width:'+t+"; max-width:"+n+"; height: "+e+"; max-height:"+i+'">\n                    <iframe class="lg-object" frameborder="0" '+(a?'title="'+a+'"':"")+' src="'+r+'"  allowfullscreen="true"></iframe>\n                </div>'},T=function(t,e,n,i,r,a){var o="<img "+n+" "+(i?'srcset="'+i+'"':"")+"  "+(r?'sizes="'+r+'"':"")+' class="lg-object lg-image" data-index="'+t+'" src="'+e+'" />',s="";a&&(s=("string"==typeof a?JSON.parse(a):a).map((function(t){var e="";return Object.keys(t).forEach((function(n){e+=" "+n+'="'+t[n]+'"'})),"<source "+e+"></source>"})));return""+s+o},N=function(t){for(var e=[],n=[],i="",r=0;r<t.length;r++){var a=t[r].split(" ");""===a[0]&&a.splice(0,1),n.push(a[0]),e.push(a[1])}for(var o=window.innerWidth,s=0;s<e.length;s++)if(parseInt(e[s],10)>o){i=n[s];break}return i},j=function(t){return!!t&&(!!t.complete&&0!==t.naturalWidth)},M=function(t,e,n,i,r){return'<div class="lg-video-cont '+(r&&r.youtube?"lg-has-youtube":r&&r.vimeo?"lg-has-vimeo":"lg-has-html5")+'" style="'+n+'">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="'+i+'"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>'+i+'</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            '+(e||"")+'\n            <img class="lg-object lg-video-poster" src="'+t+'" />\n        </div>'},D=function(t){var e=t.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');return[].filter.call(e,(function(t){var e=window.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility}))},R=function(t,e,n,i){var r=[],a=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),r=0;for(e=0;e<n;e++)for(var a=arguments[e],o=0,s=a.length;o<s;o++,r++)i[r]=a[o];return i}(E,e);return[].forEach.call(t,(function(t){for(var e={},o=0;o<t.attributes.length;o++){var s=t.attributes[o];if(s.specified){var l=z(s.name),c="";a.indexOf(l)>-1&&(c=l),c&&(e[c]=s.value)}}var d=O(t),f=d.find("img").first().attr("alt"),u=d.attr("title"),m=i?d.attr(i):d.find("img").first().attr("src");e.thumb=m,n&&!e.subHtml&&(e.subHtml=u||f||""),e.alt=f||u||"",r.push(e)})),r},V=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},$=function(t,e,n){if(!t)return e?{html5:!0}:void console.error("lightGallery :- data-src is not provided on slide item "+(n+1)+". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");var i=t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),r=t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),a=t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);return i?{youtube:i}:r?{vimeo:r}:a?{wistia:a}:void 0},_=0,G=function(){function t(t,e){if(this.lgOpened=!1,this.index=0,this.plugins=[],this.lGalleryOn=!1,this.lgBusy=!1,this.currentItemsInDom=[],this.prevScrollTop=0,this.bodyPaddingRight=0,this.isDummyImageRemoved=!1,this.dragOrSwipeEnabled=!1,this.mediaContainerPosition={top:0,bottom:0},!t)return this;if(_++,this.lgId=_,this.el=t,this.LGel=O(t),this.generateSettings(e),this.buildModules(),this.settings.dynamic&&void 0!==this.settings.dynamicEl&&!Array.isArray(this.settings.dynamicEl))throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.galleryItems=this.getItems(),this.normalizeSettings(),this.init(),this.validateLicense(),this}return t.prototype.generateSettings=function(t){if(this.settings=r(r({},C),t),this.settings.isMobile&&"function"==typeof this.settings.isMobile?this.settings.isMobile():V()){var e=r(r({},this.settings.mobileSettings),this.settings.mobileSettings);this.settings=r(r({},this.settings),e)}},t.prototype.normalizeSettings=function(){this.settings.slideEndAnimation&&(this.settings.hideControlOnEnd=!1),this.settings.closable||(this.settings.swipeToClose=!1),this.zoomFromOrigin=this.settings.zoomFromOrigin,this.settings.dynamic&&(this.zoomFromOrigin=!1),this.settings.container||(this.settings.container=document.body),this.settings.preload=Math.min(this.settings.preload,this.galleryItems.length)},t.prototype.init=function(){var t=this;this.addSlideVideoInfo(this.galleryItems),this.buildStructure(),this.LGel.trigger(o,{instance:this}),this.settings.keyPress&&this.keyPress(),setTimeout((function(){t.enableDrag(),t.enableSwipe(),t.triggerPosterClick()}),50),this.arrow(),this.settings.mousewheel&&this.mousewheel(),this.settings.dynamic||this.openGalleryOnItemClick()},t.prototype.openGalleryOnItemClick=function(){for(var t=this,e=function(e){var i=n.items[e],r=O(i),a=I.generateUUID();r.attr("data-lg-id",a).on("click.lgcustom-item-"+a,(function(n){n.preventDefault();var r=t.settings.index||e;t.openGallery(r,i)}))},n=this,i=0;i<this.items.length;i++)e(i)},t.prototype.buildModules=function(){var t=this;this.settings.plugins.forEach((function(e){t.plugins.push(new e(t,O))}))},t.prototype.validateLicense=function(){this.settings.licenseKey?"0000-0000-000-0000"===this.settings.licenseKey&&console.warn("lightGallery: "+this.settings.licenseKey+" license key is not valid for production use"):console.error("Please provide a valid license key")},t.prototype.getSlideItem=function(t){return O(this.getSlideItemId(t))},t.prototype.getSlideItemId=function(t){return"#lg-item-"+this.lgId+"-"+t},t.prototype.getIdName=function(t){return t+"-"+this.lgId},t.prototype.getElementById=function(t){return O("#"+this.getIdName(t))},t.prototype.manageSingleSlideClassName=function(){this.galleryItems.length<2?this.outer.addClass("lg-single-item"):this.outer.removeClass("lg-single-item")},t.prototype.buildStructure=function(){var t=this;if(!(this.$container&&this.$container.get())){var e="",n="";this.settings.controls&&(e='<button type="button" id="'+this.getIdName("lg-prev")+'" aria-label="'+this.settings.strings.previousSlide+'" class="lg-prev lg-icon"> '+this.settings.prevHtml+' </button>\n                <button type="button" id="'+this.getIdName("lg-next")+'" aria-label="'+this.settings.strings.nextSlide+'" class="lg-next lg-icon"> '+this.settings.nextHtml+" </button>"),".lg-item"!==this.settings.appendSubHtmlTo&&(n='<div class="lg-sub-html" role="status" aria-live="polite"></div>');var i="";this.settings.allowMediaOverlap&&(i+="lg-media-overlap ");var r=this.settings.ariaLabelledby?'aria-labelledby="'+this.settings.ariaLabelledby+'"':"",a=this.settings.ariaDescribedby?'aria-describedby="'+this.settings.ariaDescribedby+'"':"",o="lg-container "+this.settings.addClass+" "+(document.body!==this.settings.container?"lg-inline":""),s=this.settings.closable&&this.settings.showCloseIcon?'<button type="button" aria-label="'+this.settings.strings.closeGallery+'" id="'+this.getIdName("lg-close")+'" class="lg-close lg-icon"></button>':"",l=this.settings.showMaximizeIcon?'<button type="button" aria-label="'+this.settings.strings.toggleMaximize+'" id="'+this.getIdName("lg-maximize")+'" class="lg-maximize lg-icon"></button>':"",c='\n        <div class="'+o+'" id="'+this.getIdName("lg-container")+'" tabindex="-1" aria-modal="true" '+r+" "+a+' role="dialog"\n        >\n            <div id="'+this.getIdName("lg-backdrop")+'" class="lg-backdrop"></div>\n\n            <div id="'+this.getIdName("lg-outer")+'" class="lg-outer lg-use-css3 lg-css3 lg-hide-items '+i+' ">\n\n              <div id="'+this.getIdName("lg-content")+'" class="lg-content">\n                <div id="'+this.getIdName("lg-inner")+'" class="lg-inner">\n                </div>\n                '+e+'\n              </div>\n                <div id="'+this.getIdName("lg-toolbar")+'" class="lg-toolbar lg-group">\n                    '+l+"\n                    "+s+"\n                    </div>\n                    "+(".lg-outer"===this.settings.appendSubHtmlTo?n:"")+'\n                <div id="'+this.getIdName("lg-components")+'" class="lg-components">\n                    '+(".lg-sub-html"===this.settings.appendSubHtmlTo?n:"")+"\n                </div>\n            </div>\n        </div>\n        ";O(this.settings.container).append(c),document.body!==this.settings.container&&O(this.settings.container).css("position","relative"),this.outer=this.getElementById("lg-outer"),this.$lgComponents=this.getElementById("lg-components"),this.$backdrop=this.getElementById("lg-backdrop"),this.$container=this.getElementById("lg-container"),this.$inner=this.getElementById("lg-inner"),this.$content=this.getElementById("lg-content"),this.$toolbar=this.getElementById("lg-toolbar"),this.$backdrop.css("transition-duration",this.settings.backdropDuration+"ms");var d=this.settings.mode+" ";this.manageSingleSlideClassName(),this.settings.enableDrag&&(d+="lg-grab "),this.outer.addClass(d),this.$inner.css("transition-timing-function",this.settings.easing),this.$inner.css("transition-duration",this.settings.speed+"ms"),this.settings.download&&this.$toolbar.append('<a id="'+this.getIdName("lg-download")+'" target="_blank" rel="noopener" aria-label="'+this.settings.strings.download+'" download class="lg-download lg-icon"></a>'),this.counter(),O(window).on("resize.lg.global"+this.lgId+" orientationchange.lg.global"+this.lgId,(function(){t.refreshOnResize()})),this.hideBars(),this.manageCloseGallery(),this.toggleMaximize(),this.initModules()}},t.prototype.refreshOnResize=function(){if(this.lgOpened){var t=this.galleryItems[this.index].__slideVideoInfo;this.mediaContainerPosition=this.getMediaContainerPosition();var e=this.mediaContainerPosition,n=e.top,i=e.bottom;if(this.currentImageSize=A(this.items[this.index],this.outer,n+i,t&&this.settings.videoMaxSize),t&&this.resizeVideoSlide(this.index,this.currentImageSize),this.zoomFromOrigin&&!this.isDummyImageRemoved){var r=this.getDummyImgStyles(this.currentImageSize);this.outer.find(".lg-current .lg-dummy-img").first().attr("style",r)}this.LGel.trigger(l)}},t.prototype.resizeVideoSlide=function(t,e){var n=this.getVideoContStyle(e);this.getSlideItem(t).find(".lg-video-cont").attr("style",n)},t.prototype.updateSlides=function(t,e){if(this.index>t.length-1&&(this.index=t.length-1),1===t.length&&(this.index=0),t.length){var n=this.galleryItems[e].src;this.galleryItems=t,this.updateControls(),this.$inner.empty(),this.currentItemsInDom=[];var i=0;this.galleryItems.some((function(t,e){return t.src===n&&(i=e,!0)})),this.currentItemsInDom=this.organizeSlideItems(i,-1),this.loadContent(i,!0),this.getSlideItem(i).addClass("lg-current"),this.index=i,this.updateCurrentCounter(i),this.LGel.trigger(c)}else this.closeGallery()},t.prototype.getItems=function(){if(this.items=[],this.settings.dynamic)return this.settings.dynamicEl||[];if("this"===this.settings.selector)this.items.push(this.el);else if(this.settings.selector)if("string"==typeof this.settings.selector)if(this.settings.selectWithin){var t=O(this.settings.selectWithin);this.items=t.find(this.settings.selector).get()}else this.items=this.el.querySelectorAll(this.settings.selector);else this.items=this.settings.selector;else this.items=this.el.children;return R(this.items,this.settings.extraProps,this.settings.getCaptionFromTitleOrAlt,this.settings.exThumbImage)},t.prototype.shouldHideScrollbar=function(){return this.settings.hideScrollbar&&document.body===this.settings.container},t.prototype.hideScrollbar=function(){if(this.shouldHideScrollbar()){this.bodyPaddingRight=parseFloat(O("body").style().paddingRight);var t=document.documentElement.getBoundingClientRect(),e=window.innerWidth-t.width;O(document.body).css("padding-right",e+this.bodyPaddingRight+"px"),O(document.body).addClass("lg-overlay-open")}},t.prototype.resetScrollBar=function(){this.shouldHideScrollbar()&&(O(document.body).css("padding-right",this.bodyPaddingRight+"px"),O(document.body).removeClass("lg-overlay-open"))},t.prototype.openGallery=function(t,e){var n=this;if(void 0===t&&(t=this.settings.index),!this.lgOpened){this.lgOpened=!0,this.outer.removeClass("lg-hide-items"),this.hideScrollbar(),this.$container.addClass("lg-show");var i=this.getItemsToBeInsertedToDom(t,t);this.currentItemsInDom=i;var r="";i.forEach((function(t){r=r+'<div id="'+t+'" class="lg-item"></div>'})),this.$inner.append(r),this.addHtml(t);var a="";this.mediaContainerPosition=this.getMediaContainerPosition();var o=this.mediaContainerPosition,s=o.top,l=o.bottom;this.settings.allowMediaOverlap||this.setMediaContainerPosition(s,l);var c=this.galleryItems[t].__slideVideoInfo;this.zoomFromOrigin&&e&&(this.currentImageSize=A(e,this.outer,s+l,c&&this.settings.videoMaxSize),a=P(e,this.outer,s,l,this.currentImageSize)),this.zoomFromOrigin&&a||(this.outer.addClass(this.settings.startClass),this.getSlideItem(t).removeClass("lg-complete"));var d=this.settings.zoomFromOrigin?100:this.settings.backdropDuration;setTimeout((function(){n.outer.addClass("lg-components-open")}),d),this.index=t,this.LGel.trigger(f),this.getSlideItem(t).addClass("lg-current"),this.lGalleryOn=!1,this.prevScrollTop=O(window).scrollTop(),setTimeout((function(){if(n.zoomFromOrigin&&a){var e=n.getSlideItem(t);e.css("transform",a),setTimeout((function(){e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration",n.settings.startAnimationDuration+"ms"),n.outer.addClass("lg-zoom-from-image")})),setTimeout((function(){e.css("transform","translate3d(0, 0, 0)")}),100)}setTimeout((function(){n.$backdrop.addClass("in"),n.$container.addClass("lg-show-in")}),10),setTimeout((function(){n.settings.trapFocus&&document.body===n.settings.container&&n.trapFocus()}),n.settings.backdropDuration+50),n.zoomFromOrigin&&a||setTimeout((function(){n.outer.addClass("lg-visible")}),n.settings.backdropDuration),n.slide(t,!1,!1,!1),n.LGel.trigger(u)})),document.body===this.settings.container&&O("html").addClass("lg-on")}},t.prototype.getMediaContainerPosition=function(){if(this.settings.allowMediaOverlap)return{top:0,bottom:0};var t=this.$toolbar.get().clientHeight||0,e=this.outer.find(".lg-components .lg-sub-html").get(),n=this.settings.defaultCaptionHeight||e&&e.clientHeight||0,i=this.outer.find(".lg-thumb-outer").get();return{top:t,bottom:(i?i.clientHeight:0)+n}},t.prototype.setMediaContainerPosition=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.$content.css("top",t+"px").css("bottom",e+"px")},t.prototype.hideBars=function(){var t=this;setTimeout((function(){t.outer.removeClass("lg-hide-items"),t.settings.hideBarsDelay>0&&(t.outer.on("mousemove.lg click.lg touchstart.lg",(function(){t.outer.removeClass("lg-hide-items"),clearTimeout(t.hideBarTimeout),t.hideBarTimeout=setTimeout((function(){t.outer.addClass("lg-hide-items")}),t.settings.hideBarsDelay)})),t.outer.trigger("mousemove.lg"))}),this.settings.showBarsAfter)},t.prototype.initPictureFill=function(t){if(this.settings.supportLegacyBrowser)try{picturefill({elements:[t.get()]})}catch(e){console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")}},t.prototype.counter=function(){if(this.settings.counter){var t='<div class="lg-counter" role="status" aria-live="polite">\n                <span id="'+this.getIdName("lg-counter-current")+'" class="lg-counter-current">'+(this.index+1)+' </span> /\n                <span id="'+this.getIdName("lg-counter-all")+'" class="lg-counter-all">'+this.galleryItems.length+" </span></div>";this.outer.find(this.settings.appendCounterTo).append(t)}},t.prototype.addHtml=function(t){var e,n;if(this.galleryItems[t].subHtmlUrl?n=this.galleryItems[t].subHtmlUrl:e=this.galleryItems[t].subHtml,!n)if(e){var i=e.substring(0,1);"."!==i&&"#"!==i||(e=this.settings.subHtmlSelectorRelative&&!this.settings.dynamic?O(this.items).eq(t).find(e).first().html():O(e).first().html())}else e="";if(".lg-item"!==this.settings.appendSubHtmlTo)n?this.outer.find(".lg-sub-html").load(n):this.outer.find(".lg-sub-html").html(e);else{var r=O(this.getSlideItemId(t));n?r.load(n):r.append('<div class="lg-sub-html">'+e+"</div>")}null!=e&&(""===e?this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"):this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),this.LGel.trigger(d,{index:t})},t.prototype.preload=function(t){for(var e=1;e<=this.settings.preload&&!(e>=this.galleryItems.length-t);e++)this.loadContent(t+e,!1);for(var n=1;n<=this.settings.preload&&!(t-n<0);n++)this.loadContent(t-n,!1)},t.prototype.getDummyImgStyles=function(t){return t?"width:"+t.width+"px;\n                margin-left: -"+t.width/2+"px;\n                margin-top: -"+t.height/2+"px;\n                height:"+t.height+"px":""},t.prototype.getVideoContStyle=function(t){return t?"width:"+t.width+"px;\n                height:"+t.height+"px":""},t.prototype.getDummyImageContent=function(t,e,n){var i;if(this.settings.dynamic||(i=O(this.items).eq(e)),i){var r=void 0;if(!(r=this.settings.exThumbImage?i.attr(this.settings.exThumbImage):i.find("img").first().attr("src")))return"";var a="<img "+n+' style="'+this.getDummyImgStyles(this.currentImageSize)+'" class="lg-dummy-img" src="'+r+'" />';return t.addClass("lg-first-slide"),this.outer.addClass("lg-first-slide-loading"),a}return""},t.prototype.setImgMarkup=function(t,e,n){var i=this.galleryItems[n],r=i.alt,a=i.srcset,o=i.sizes,s=i.sources,l=r?'alt="'+r+'"':"",c='<picture class="lg-img-wrap"> '+(this.isFirstSlideWithZoomAnimation()?this.getDummyImageContent(e,n,l):T(n,t,l,a,o,s))+"</picture>";e.prepend(c)},t.prototype.onSlideObjectLoad=function(t,e,n,i){var r=t.find(".lg-object").first();j(r.get())||e?n():(r.on("load.lg error.lg",(function(){n&&n()})),r.on("error.lg",(function(){i&&i()})))},t.prototype.onLgObjectLoad=function(t,e,n,i,r,a){var o=this;this.onSlideObjectLoad(t,a,(function(){o.triggerSlideItemLoad(t,e,n,i,r)}),(function(){t.addClass("lg-complete lg-complete_"),t.html('<span class="lg-error-msg">Oops... Failed to load content...</span>')}))},t.prototype.triggerSlideItemLoad=function(t,e,n,i,r){var a=this,o=this.galleryItems[e],s=r&&"video"===this.getSlideType(o)&&!o.poster?i:0;setTimeout((function(){t.addClass("lg-complete lg-complete_"),a.LGel.trigger(m,{index:e,delay:n||0,isFirstSlide:r})}),s)},t.prototype.isFirstSlideWithZoomAnimation=function(){return!(this.lGalleryOn||!this.zoomFromOrigin||!this.currentImageSize)},t.prototype.addSlideVideoInfo=function(t){var e=this;t.forEach((function(t,n){t.__slideVideoInfo=$(t.src,!!t.video,n),t.__slideVideoInfo&&e.settings.loadYouTubePoster&&!t.poster&&t.__slideVideoInfo.youtube&&(t.poster="//img.youtube.com/vi/"+t.__slideVideoInfo.youtube[1]+"/maxresdefault.jpg")}))},t.prototype.loadContent=function(t,e){var n=this,i=this.galleryItems[t],r=O(this.getSlideItemId(t)),o=i.poster,l=i.srcset,c=i.sizes,d=i.sources,f=i.src,u=i.video,m=u&&"string"==typeof u?JSON.parse(u):u;if(i.responsive){var g=i.responsive.split(",");f=N(g)||f}var p=i.__slideVideoInfo,h="",y=!!i.iframe,v=!this.lGalleryOn,b=0;if(v&&(b=this.zoomFromOrigin&&this.currentImageSize?this.settings.startAnimationDuration+10:this.settings.backdropDuration+10),!r.hasClass("lg-loaded")){if(p){var w=this.mediaContainerPosition,x=w.top,S=w.bottom,k=A(this.items[t],this.outer,x+S,p&&this.settings.videoMaxSize);h=this.getVideoContStyle(k)}if(y){var C=L(this.settings.iframeWidth,this.settings.iframeHeight,this.settings.iframeMaxWidth,this.settings.iframeMaxHeight,f,i.iframeTitle);r.prepend(C)}else if(o){var I="";v&&this.zoomFromOrigin&&this.currentImageSize&&(I=this.getDummyImageContent(r,t,""));C=M(o,I||"",h,this.settings.strings.playVideo,p);r.prepend(C)}else if(p){C='<div class="lg-video-cont " style="'+h+'"></div>';r.prepend(C)}else if(this.setImgMarkup(f,r,t),l||d){var E=r.find(".lg-object");this.initPictureFill(E)}(o||p)&&this.LGel.trigger(s,{index:t,src:f,html5Video:m,hasPoster:!!o}),this.LGel.trigger(a,{index:t}),this.lGalleryOn&&".lg-item"===this.settings.appendSubHtmlTo&&this.addHtml(t)}var z=0;b&&!O(document.body).hasClass("lg-from-hash")&&(z=b),this.isFirstSlideWithZoomAnimation()&&(setTimeout((function(){r.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")}),this.settings.startAnimationDuration+100),r.hasClass("lg-loaded")||setTimeout((function(){if("image"===n.getSlideType(i)){var e=i.alt,a=e?'alt="'+e+'"':"";if(r.find(".lg-img-wrap").append(T(t,f,a,l,c,i.sources)),l||d){var s=r.find(".lg-object");n.initPictureFill(s)}}("image"===n.getSlideType(i)||"video"===n.getSlideType(i)&&o)&&(n.onLgObjectLoad(r,t,b,z,!0,!1),n.onSlideObjectLoad(r,!(!p||!p.html5||o),(function(){n.loadContentOnFirstSlideLoad(t,r,z)}),(function(){n.loadContentOnFirstSlideLoad(t,r,z)})))}),this.settings.startAnimationDuration+100)),r.addClass("lg-loaded"),this.isFirstSlideWithZoomAnimation()&&("video"!==this.getSlideType(i)||o)||this.onLgObjectLoad(r,t,b,z,v,!(!p||!p.html5||o)),this.zoomFromOrigin&&this.currentImageSize||!r.hasClass("lg-complete_")||this.lGalleryOn||setTimeout((function(){r.addClass("lg-complete")}),this.settings.backdropDuration),this.lGalleryOn=!0,!0===e&&(r.hasClass("lg-complete_")?this.preload(t):r.find(".lg-object").first().on("load.lg error.lg",(function(){n.preload(t)})))},t.prototype.loadContentOnFirstSlideLoad=function(t,e,n){var i=this;setTimeout((function(){e.find(".lg-dummy-img").remove(),e.removeClass("lg-first-slide"),i.outer.removeClass("lg-first-slide-loading"),i.isDummyImageRemoved=!0,i.preload(t)}),n+300)},t.prototype.getItemsToBeInsertedToDom=function(t,e,n){var i=this;void 0===n&&(n=0);var r=[],a=Math.max(n,3);a=Math.min(a,this.galleryItems.length);var o="lg-item-"+this.lgId+"-"+e;if(this.galleryItems.length<=3)return this.galleryItems.forEach((function(t,e){r.push("lg-item-"+i.lgId+"-"+e)})),r;if(t<(this.galleryItems.length-1)/2){for(var s=t;s>t-a/2&&s>=0;s--)r.push("lg-item-"+this.lgId+"-"+s);var l=r.length;for(s=0;s<a-l;s++)r.push("lg-item-"+this.lgId+"-"+(t+s+1))}else{for(s=t;s<=this.galleryItems.length-1&&s<t+a/2;s++)r.push("lg-item-"+this.lgId+"-"+s);for(l=r.length,s=0;s<a-l;s++)r.push("lg-item-"+this.lgId+"-"+(t-s-1))}return this.settings.loop&&(t===this.galleryItems.length-1?r.push("lg-item-"+this.lgId+"-0"):0===t&&r.push("lg-item-"+this.lgId+"-"+(this.galleryItems.length-1))),-1===r.indexOf(o)&&r.push("lg-item-"+this.lgId+"-"+e),r},t.prototype.organizeSlideItems=function(t,e){var n=this,i=this.getItemsToBeInsertedToDom(t,e,this.settings.numberOfSlideItemsInDom);return i.forEach((function(t){-1===n.currentItemsInDom.indexOf(t)&&n.$inner.append('<div id="'+t+'" class="lg-item"></div>')})),this.currentItemsInDom.forEach((function(t){-1===i.indexOf(t)&&O("#"+t).remove()})),i},t.prototype.getPreviousSlideIndex=function(){var t=0;try{var e=this.outer.find(".lg-current").first().attr("id");t=parseInt(e.split("-")[3])||0}catch(n){t=0}return t},t.prototype.setDownloadValue=function(t){if(this.settings.download){var e=this.galleryItems[t];if(!1===e.downloadUrl||"false"===e.downloadUrl)this.outer.addClass("lg-hide-download");else{var n=this.getElementById("lg-download");this.outer.removeClass("lg-hide-download"),n.attr("href",e.downloadUrl||e.src),e.download&&n.attr("download",e.download)}}},t.prototype.makeSlideAnimation=function(t,e,n){var i=this;this.lGalleryOn&&n.addClass("lg-slide-progress"),setTimeout((function(){i.outer.addClass("lg-no-trans"),i.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),"prev"===t?(e.addClass("lg-prev-slide"),n.addClass("lg-next-slide")):(e.addClass("lg-next-slide"),n.addClass("lg-prev-slide")),setTimeout((function(){i.outer.find(".lg-item").removeClass("lg-current"),e.addClass("lg-current"),i.outer.removeClass("lg-no-trans")}),50)}),this.lGalleryOn?this.settings.slideDelay:0)},t.prototype.slide=function(t,e,n,i){var r=this,a=this.getPreviousSlideIndex();if(this.currentItemsInDom=this.organizeSlideItems(t,a),!this.lGalleryOn||a!==t){var o=this.galleryItems.length;if(!this.lgBusy){this.settings.counter&&this.updateCurrentCounter(t);var s=this.getSlideItem(t),l=this.getSlideItem(a),c=this.galleryItems[t],d=c.__slideVideoInfo;if(this.outer.attr("data-lg-slide-type",this.getSlideType(c)),this.setDownloadValue(t),d){var f=this.mediaContainerPosition,u=f.top,m=f.bottom,h=A(this.items[t],this.outer,u+m,d&&this.settings.videoMaxSize);this.resizeVideoSlide(t,h)}if(this.LGel.trigger(g,{prevIndex:a,index:t,fromTouch:!!e,fromThumb:!!n}),this.lgBusy=!0,clearTimeout(this.hideBarTimeout),this.arrowDisable(t),i||(t<a?i="prev":t>a&&(i="next")),e){this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");var y=void 0,v=void 0;o>2?(y=t-1,v=t+1,(0===t&&a===o-1||t===o-1&&0===a)&&(v=0,y=o-1)):(y=0,v=1),"prev"===i?this.getSlideItem(v).addClass("lg-next-slide"):this.getSlideItem(y).addClass("lg-prev-slide"),s.addClass("lg-current")}else this.makeSlideAnimation(i,s,l);this.lGalleryOn?setTimeout((function(){r.loadContent(t,!0),".lg-item"!==r.settings.appendSubHtmlTo&&r.addHtml(t)}),this.settings.speed+50+(e?0:this.settings.slideDelay)):this.loadContent(t,!0),setTimeout((function(){r.lgBusy=!1,l.removeClass("lg-slide-progress"),r.LGel.trigger(p,{prevIndex:a,index:t,fromTouch:e,fromThumb:n})}),(this.lGalleryOn?this.settings.speed+100:100)+(e?0:this.settings.slideDelay))}this.index=t}},t.prototype.updateCurrentCounter=function(t){this.getElementById("lg-counter-current").html(t+1+"")},t.prototype.updateCounterTotal=function(){this.getElementById("lg-counter-all").html(this.galleryItems.length+"")},t.prototype.getSlideType=function(t){return t.__slideVideoInfo?"video":t.iframe?"iframe":"image"},t.prototype.touchMove=function(t,e,n){var i=e.pageX-t.pageX,r=e.pageY-t.pageY,a=!1;if(this.swipeDirection?a=!0:Math.abs(i)>15?(this.swipeDirection="horizontal",a=!0):Math.abs(r)>15&&(this.swipeDirection="vertical",a=!0),a){var o=this.getSlideItem(this.index);if("horizontal"===this.swipeDirection){null==n||n.preventDefault(),this.outer.addClass("lg-dragging"),this.setTranslate(o,i,0);var s=o.get().offsetWidth,l=15*s/100-Math.abs(10*i/100);this.setTranslate(this.outer.find(".lg-prev-slide").first(),-s+i-l,0),this.setTranslate(this.outer.find(".lg-next-slide").first(),s+i+l,0)}else if("vertical"===this.swipeDirection&&this.settings.swipeToClose){null==n||n.preventDefault(),this.$container.addClass("lg-dragging-vertical");var c=1-Math.abs(r)/window.innerHeight;this.$backdrop.css("opacity",c);var d=1-Math.abs(r)/(2*window.innerWidth);this.setTranslate(o,0,r,d,d),Math.abs(r)>100&&this.outer.addClass("lg-hide-items").removeClass("lg-components-open")}}},t.prototype.touchEnd=function(t,e,n){var i,r=this;"lg-slide"!==this.settings.mode&&this.outer.addClass("lg-slide"),setTimeout((function(){r.$container.removeClass("lg-dragging-vertical"),r.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");var a=!0;if("horizontal"===r.swipeDirection){i=t.pageX-e.pageX;var o=Math.abs(t.pageX-e.pageX);i<0&&o>r.settings.swipeThreshold?(r.goToNextSlide(!0),a=!1):i>0&&o>r.settings.swipeThreshold&&(r.goToPrevSlide(!0),a=!1)}else if("vertical"===r.swipeDirection){if(i=Math.abs(t.pageY-e.pageY),r.settings.closable&&r.settings.swipeToClose&&i>100)return void r.closeGallery();r.$backdrop.css("opacity",1)}if(r.outer.find(".lg-item").removeAttr("style"),a&&Math.abs(t.pageX-e.pageX)<5){var s=O(n.target);r.isPosterElement(s)&&r.LGel.trigger(h)}r.swipeDirection=void 0})),setTimeout((function(){r.outer.hasClass("lg-dragging")||"lg-slide"===r.settings.mode||r.outer.removeClass("lg-slide")}),this.settings.speed+100)},t.prototype.enableSwipe=function(){var t=this,e={},n={},i=!1,r=!1;this.settings.enableSwipe&&(this.$inner.on("touchstart.lg",(function(n){t.dragOrSwipeEnabled=!0;var i=t.getSlideItem(t.index);!O(n.target).hasClass("lg-item")&&!i.get().contains(n.target)||t.outer.hasClass("lg-zoomed")||t.lgBusy||1!==n.touches.length||(r=!0,t.touchAction="swipe",t.manageSwipeClass(),e={pageX:n.touches[0].pageX,pageY:n.touches[0].pageY})})),this.$inner.on("touchmove.lg",(function(a){r&&"swipe"===t.touchAction&&1===a.touches.length&&(n={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY},t.touchMove(e,n,a),i=!0)})),this.$inner.on("touchend.lg",(function(a){if("swipe"===t.touchAction){if(i)i=!1,t.touchEnd(n,e,a);else if(r){var o=O(a.target);t.isPosterElement(o)&&t.LGel.trigger(h)}t.touchAction=void 0,r=!1}})))},t.prototype.enableDrag=function(){var t=this,e={},n={},i=!1,r=!1;this.settings.enableDrag&&(this.outer.on("mousedown.lg",(function(n){t.dragOrSwipeEnabled=!0;var r=t.getSlideItem(t.index);(O(n.target).hasClass("lg-item")||r.get().contains(n.target))&&(t.outer.hasClass("lg-zoomed")||t.lgBusy||(n.preventDefault(),t.lgBusy||(t.manageSwipeClass(),e={pageX:n.pageX,pageY:n.pageY},i=!0,t.outer.get().scrollLeft+=1,t.outer.get().scrollLeft-=1,t.outer.removeClass("lg-grab").addClass("lg-grabbing"),t.LGel.trigger(y))))})),O(window).on("mousemove.lg.global"+this.lgId,(function(a){i&&t.lgOpened&&(r=!0,n={pageX:a.pageX,pageY:a.pageY},t.touchMove(e,n),t.LGel.trigger(v))})),O(window).on("mouseup.lg.global"+this.lgId,(function(a){if(t.lgOpened){var o=O(a.target);r?(r=!1,t.touchEnd(n,e,a),t.LGel.trigger(b)):t.isPosterElement(o)&&t.LGel.trigger(h),i&&(i=!1,t.outer.removeClass("lg-grabbing").addClass("lg-grab"))}})))},t.prototype.triggerPosterClick=function(){var t=this;this.$inner.on("click.lg",(function(e){!t.dragOrSwipeEnabled&&t.isPosterElement(O(e.target))&&t.LGel.trigger(h)}))},t.prototype.manageSwipeClass=function(){var t=this.index+1,e=this.index-1;this.settings.loop&&this.galleryItems.length>2&&(0===this.index?e=this.galleryItems.length-1:this.index===this.galleryItems.length-1&&(t=0)),this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),e>-1&&this.getSlideItem(e).addClass("lg-prev-slide"),this.getSlideItem(t).addClass("lg-next-slide")},t.prototype.goToNextSlide=function(t){var e=this,n=this.settings.loop;t&&this.galleryItems.length<3&&(n=!1),this.lgBusy||(this.index+1<this.galleryItems.length?(this.index++,this.LGel.trigger(w,{index:this.index}),this.slide(this.index,!!t,!1,"next")):n?(this.index=0,this.LGel.trigger(w,{index:this.index}),this.slide(this.index,!!t,!1,"next")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-right-end"),setTimeout((function(){e.outer.removeClass("lg-right-end")}),400)))},t.prototype.goToPrevSlide=function(t){var e=this,n=this.settings.loop;t&&this.galleryItems.length<3&&(n=!1),this.lgBusy||(this.index>0?(this.index--,this.LGel.trigger(x,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):n?(this.index=this.galleryItems.length-1,this.LGel.trigger(x,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-left-end"),setTimeout((function(){e.outer.removeClass("lg-left-end")}),400)))},t.prototype.keyPress=function(){var t=this;O(window).on("keydown.lg.global"+this.lgId,(function(e){t.lgOpened&&!0===t.settings.escKey&&27===e.keyCode&&(e.preventDefault(),t.settings.allowMediaOverlap&&t.outer.hasClass("lg-can-toggle")&&t.outer.hasClass("lg-components-open")?t.outer.removeClass("lg-components-open"):t.closeGallery()),t.lgOpened&&t.galleryItems.length>1&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}))},t.prototype.arrow=function(){var t=this;this.getElementById("lg-prev").on("click.lg",(function(){t.goToPrevSlide()})),this.getElementById("lg-next").on("click.lg",(function(){t.goToNextSlide()}))},t.prototype.arrowDisable=function(t){if(!this.settings.loop&&this.settings.hideControlOnEnd){var e=this.getElementById("lg-prev"),n=this.getElementById("lg-next");t+1===this.galleryItems.length?n.attr("disabled","disabled").addClass("disabled"):n.removeAttr("disabled").removeClass("disabled"),0===t?e.attr("disabled","disabled").addClass("disabled"):e.removeAttr("disabled").removeClass("disabled")}},t.prototype.setTranslate=function(t,e,n,i,r){void 0===i&&(i=1),void 0===r&&(r=1),t.css("transform","translate3d("+e+"px, "+n+"px, 0px) scale3d("+i+", "+r+", 1)")},t.prototype.mousewheel=function(){var t=this,e=0;this.outer.on("wheel.lg",(function(n){if(n.deltaY&&!(t.galleryItems.length<2)){n.preventDefault();var i=(new Date).getTime();i-e<1e3||(e=i,n.deltaY>0?t.goToNextSlide():n.deltaY<0&&t.goToPrevSlide())}}))},t.prototype.isSlideElement=function(t){return t.hasClass("lg-outer")||t.hasClass("lg-item")||t.hasClass("lg-img-wrap")},t.prototype.isPosterElement=function(t){var e=this.getSlideItem(this.index).find(".lg-video-play-button").get();return t.hasClass("lg-video-poster")||t.hasClass("lg-video-play-button")||e&&e.contains(t.get())},t.prototype.toggleMaximize=function(){var t=this;this.getElementById("lg-maximize").on("click.lg",(function(){t.$container.toggleClass("lg-inline"),t.refreshOnResize()}))},t.prototype.invalidateItems=function(){for(var t=0;t<this.items.length;t++){var e=O(this.items[t]);e.off("click.lgcustom-item-"+e.attr("data-lg-id"))}},t.prototype.trapFocus=function(){var t=this;this.$container.get().focus({preventScroll:!0}),O(window).on("keydown.lg.global"+this.lgId,(function(e){if(t.lgOpened&&("Tab"===e.key||9===e.keyCode)){var n=D(t.$container.get()),i=n[0],r=n[n.length-1];e.shiftKey?document.activeElement===i&&(r.focus(),e.preventDefault()):document.activeElement===r&&(i.focus(),e.preventDefault())}}))},t.prototype.manageCloseGallery=function(){var t=this;if(this.settings.closable){var e=!1;this.getElementById("lg-close").on("click.lg",(function(){t.closeGallery()})),this.settings.closeOnTap&&(this.outer.on("mousedown.lg",(function(n){var i=O(n.target);e=!!t.isSlideElement(i)})),this.outer.on("mousemove.lg",(function(){e=!1})),this.outer.on("mouseup.lg",(function(n){var i=O(n.target);t.isSlideElement(i)&&e&&(t.outer.hasClass("lg-dragging")||t.closeGallery())})))}},t.prototype.closeGallery=function(t){var e=this;if(!this.lgOpened||!this.settings.closable&&!t)return 0;this.LGel.trigger(S),this.settings.resetScrollPosition&&!this.settings.hideScrollbar&&O(window).scrollTop(this.prevScrollTop);var n,i=this.items[this.index];if(this.zoomFromOrigin&&i){var r=this.mediaContainerPosition,a=r.top,o=r.bottom,s=this.galleryItems[this.index],l=s.__slideVideoInfo,c=s.poster,d=A(i,this.outer,a+o,l&&c&&this.settings.videoMaxSize);n=P(i,this.outer,a,o,d)}this.zoomFromOrigin&&n?(this.outer.addClass("lg-closing lg-zoom-from-image"),this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration",this.settings.startAnimationDuration+"ms").css("transform",n)):(this.outer.addClass("lg-hide-items"),this.outer.removeClass("lg-zoom-from-image")),this.destroyModules(),this.lGalleryOn=!1,this.isDummyImageRemoved=!1,this.zoomFromOrigin=this.settings.zoomFromOrigin,clearTimeout(this.hideBarTimeout),this.hideBarTimeout=!1,O("html").removeClass("lg-on"),this.outer.removeClass("lg-visible lg-components-open"),this.$backdrop.removeClass("in").css("opacity",0);var f=this.zoomFromOrigin&&n?Math.max(this.settings.startAnimationDuration,this.settings.backdropDuration):this.settings.backdropDuration;return this.$container.removeClass("lg-show-in"),setTimeout((function(){e.zoomFromOrigin&&n&&e.outer.removeClass("lg-zoom-from-image"),e.$container.removeClass("lg-show"),e.resetScrollBar(),e.$backdrop.removeAttr("style").css("transition-duration",e.settings.backdropDuration+"ms"),e.outer.removeClass("lg-closing "+e.settings.startClass),e.getSlideItem(e.index).removeClass("lg-start-end-progress"),e.$inner.empty(),e.lgOpened&&e.LGel.trigger(k,{instance:e}),e.$container.get()&&e.$container.get().blur(),e.lgOpened=!1}),f+100),f+100},t.prototype.initModules=function(){this.plugins.forEach((function(t){try{t.init()}catch(e){console.warn("lightGallery:- make sure lightGallery module is properly initiated")}}))},t.prototype.destroyModules=function(t){this.plugins.forEach((function(e){try{t?e.destroy():e.closeGallery&&e.closeGallery()}catch(n){console.warn("lightGallery:- make sure lightGallery module is properly destroyed")}}))},t.prototype.refresh=function(t){this.settings.dynamic||this.invalidateItems(),this.galleryItems=t||this.getItems(),this.updateControls(),this.openGalleryOnItemClick(),this.LGel.trigger(c)},t.prototype.updateControls=function(){this.addSlideVideoInfo(this.galleryItems),this.updateCounterTotal(),this.manageSingleSlideClassName()},t.prototype.destroyGallery=function(){this.destroyModules(!0),this.settings.dynamic||this.invalidateItems(),O(window).off(".lg.global"+this.lgId),this.LGel.off(".lg"),this.$container.remove()},t.prototype.destroy=function(){var t=this.closeGallery(!0);return t?setTimeout(this.destroyGallery.bind(this),t):this.destroyGallery(),t},t}();var Y="lgAfterAppendSlide",F="lgInit",B="lgHasVideo",H="lgContainerResize",X="lgAfterAppendSubHtml",W="lgBeforeOpen",Z="lgAfterOpen",U="lgSlideItemLoad",q="lgBeforeSlide",K="lgAfterSlide",J="lgPosterClick",Q="lgDragStart",tt="lgDragMove",et="lgDragEnd",nt="lgBeforeNextSlide",it="lgBeforePrevSlide",rt="lgBeforeClose",at="lgAfterClose",ot="lgRotateLeft",st="lgRotateRight",lt="lgFlipHorizontal",ct="lgFlipVertical",dt=function(t){var e=t.children,n=t.elementClassNames,r=t.onAfterAppendSlide,a=t.onInit,o=t.onHasVideo,s=t.onContainerResize,l=t.onAfterAppendSubHtml,c=t.onBeforeOpen,d=t.onAfterOpen,f=t.onSlideItemLoad,u=t.onBeforeSlide,m=t.onAfterSlide,g=t.onPosterClick,p=t.onDragStart,h=t.onDragMove,y=t.onDragEnd,v=t.onBeforeNextSlide,b=t.onBeforePrevSlide,w=t.onBeforeClose,x=t.onAfterClose,S=t.onRotateLeft,k=t.onRotateRight,C=t.onFlipHorizontal,I=t.onFlipVertical,O=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}(t,["children","elementClassNames","onAfterAppendSlide","onInit","onHasVideo","onContainerResize","onAfterAppendSubHtml","onBeforeOpen","onAfterOpen","onSlideItemLoad","onBeforeSlide","onAfterSlide","onPosterClick","onDragStart","onDragMove","onDragEnd","onBeforeNextSlide","onBeforePrevSlide","onBeforeClose","onAfterClose","onRotateLeft","onRotateRight","onFlipHorizontal","onFlipVertical"]),E=(0,i.useRef)(null),z=(0,i.useCallback)((function(){r&&E&&E.current&&E.current.addEventListener(Y,(function(t){r(t.detail)})),a&&E&&E.current&&E.current.addEventListener(F,(function(t){a(t.detail)})),o&&E&&E.current&&E.current.addEventListener(B,(function(t){o(t.detail)})),s&&E&&E.current&&E.current.addEventListener(H,(function(t){s(t.detail)})),l&&E&&E.current&&E.current.addEventListener(X,(function(t){l(t.detail)})),c&&E&&E.current&&E.current.addEventListener(W,(function(t){c(t.detail)})),d&&E&&E.current&&E.current.addEventListener(Z,(function(t){d(t.detail)})),f&&E&&E.current&&E.current.addEventListener(U,(function(t){f(t.detail)})),u&&E&&E.current&&E.current.addEventListener(q,(function(t){u(t.detail)})),m&&E&&E.current&&E.current.addEventListener(K,(function(t){m(t.detail)})),g&&E&&E.current&&E.current.addEventListener(J,(function(t){g(t.detail)})),p&&E&&E.current&&E.current.addEventListener(Q,(function(t){p(t.detail)})),h&&E&&E.current&&E.current.addEventListener(tt,(function(t){h(t.detail)})),y&&E&&E.current&&E.current.addEventListener(et,(function(t){y(t.detail)})),v&&E&&E.current&&E.current.addEventListener(nt,(function(t){v(t.detail)})),b&&E&&E.current&&E.current.addEventListener(it,(function(t){b(t.detail)})),w&&E&&E.current&&E.current.addEventListener(rt,(function(t){w(t.detail)})),x&&E&&E.current&&E.current.addEventListener(at,(function(t){x(t.detail)})),S&&E&&E.current&&E.current.addEventListener(ot,(function(t){S(t.detail)})),k&&E&&E.current&&E.current.addEventListener(st,(function(t){k(t.detail)})),C&&E&&E.current&&E.current.addEventListener(lt,(function(t){C(t.detail)})),I&&E&&E.current&&E.current.addEventListener(ct,(function(t){I(t.detail)}))}),[r,l,x,S,k,C,I,d,m,w,v,c,b,u,s,y,h,p,o,a,g,f]);return(0,i.useEffect)((function(){z();var t,e=(t=E.current,new G(t,O));return function(){e.destroy()}}),[z,O]),(0,i.createElement)("div",{className:"lg-react-element "+(n||""),ref:E},e)},ft=function(){return ft=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},ft.apply(this,arguments)},ut={scale:1,zoom:!0,actualSize:!0,showZoomInOutIcons:!1,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}},mt="lgContainerResize",gt="lgBeforeOpen",pt="lgAfterOpen",ht="lgSlideItemLoad",yt="lgAfterSlide",vt="lgRotateLeft",bt="lgRotateRight",wt="lgFlipHorizontal",xt="lgFlipVertical",St=function(){function t(t,e){return this.core=t,this.$LG=e,this.settings=ft(ft({},ut),this.core.settings),this}return t.prototype.buildTemplates=function(){var t=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-out lg-icon"></button>':"";this.settings.actualSize&&(t+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.viewActualSize+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'),this.core.outer.addClass("lg-use-transition-for-zoom"),this.core.$toolbar.first().append(t)},t.prototype.enableZoom=function(t){var e=this,n=this.settings.enableZoomAfter+t.detail.delay;this.$LG("body").first().hasClass("lg-from-hash")&&t.detail.delay?n=0:this.$LG("body").first().removeClass("lg-from-hash"),this.zoomableTimeout=setTimeout((function(){e.isImageSlide(e.core.index)&&(e.core.getSlideItem(t.detail.index).addClass("lg-zoomable"),t.detail.index===e.core.index&&e.setZoomEssentials())}),n+30)},t.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on(ht+".zoom",this.enableZoom.bind(this))},t.prototype.getDragCords=function(t){return{x:t.pageX,y:t.pageY}},t.prototype.getSwipeCords=function(t){return{x:t.touches[0].pageX,y:t.touches[0].pageY}},t.prototype.getDragAllowedAxises=function(t,e){var n=this.core.getSlideItem(this.core.index).find(".lg-image").first().get(),i=0,r=0,a=n.getBoundingClientRect();t?(i=n.offsetHeight*t,r=n.offsetWidth*t):e?(i=a.height+e*a.height,r=a.width+e*a.width):(i=a.height,r=a.width);var o=i>this.containerRect.height;return{allowX:r>this.containerRect.width,allowY:o}},t.prototype.setZoomEssentials=function(){this.containerRect=this.core.$content.get().getBoundingClientRect()},t.prototype.zoomImage=function(t,e,n,i){if(!(Math.abs(e)<=0)){var r,a,o=this.containerRect.width/2+this.containerRect.left,s=this.containerRect.height/2+this.containerRect.top+this.scrollTop;1===t&&(this.positionChanged=!1);var l=this.getDragAllowedAxises(0,e),c=l.allowY,d=l.allowX;this.positionChanged&&(r=this.left/(this.scale-e),a=this.top/(this.scale-e),this.pageX=o-r,this.pageY=s-a,this.positionChanged=!1);var f,u,m=this.getPossibleSwipeDragCords(e),g=o-this.pageX,p=s-this.pageY;if(t-e>1){var h=(t-e)/Math.abs(e);f=(g=(e<0?-g:g)+this.left*(h+(e<0?-1:1)))/h,u=(p=(e<0?-p:p)+this.top*(h+(e<0?-1:1)))/h}else{f=g*(h=(t-e)*e),u=p*h}n&&(d?this.isBeyondPossibleLeft(f,m.minX)?f=m.minX:this.isBeyondPossibleRight(f,m.maxX)&&(f=m.maxX):t>1&&(f<m.minX?f=m.minX:f>m.maxX&&(f=m.maxX)),c?this.isBeyondPossibleTop(u,m.minY)?u=m.minY:this.isBeyondPossibleBottom(u,m.maxY)&&(u=m.maxY):t>1&&(u<m.minY?u=m.minY:u>m.maxY&&(u=m.maxY))),this.setZoomStyles({x:f,y:u,scale:t}),this.left=f,this.top=u,i&&this.setZoomImageSize()}},t.prototype.resetImageTranslate=function(t){if(this.isImageSlide(t)){var e=this.core.getSlideItem(t).find(".lg-image").first();this.imageReset=!1,e.removeClass("reset-transition reset-transition-y reset-transition-x"),this.core.outer.removeClass("lg-actual-size"),e.css("width","auto").css("height","auto"),setTimeout((function(){e.removeClass("no-transition")}),10)}},t.prototype.setZoomImageSize=function(){var t=this,e=this.core.getSlideItem(this.core.index).find(".lg-image").first();setTimeout((function(){var n=t.getCurrentImageActualSizeScale();t.scale>=n&&(e.addClass("no-transition"),t.imageReset=!0)}),500),setTimeout((function(){var n=t.getCurrentImageActualSizeScale();if(t.scale>=n){var i=t.getDragAllowedAxises(t.scale);e.css("width",e.get().naturalWidth+"px").css("height",e.get().naturalHeight+"px"),t.core.outer.addClass("lg-actual-size"),i.allowX&&i.allowY?e.addClass("reset-transition"):i.allowX&&!i.allowY?e.addClass("reset-transition-x"):!i.allowX&&i.allowY&&e.addClass("reset-transition-y")}}),550)},t.prototype.setZoomStyles=function(t){var e=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),n=this.core.getSlideItem(this.core.index).find(".lg-image").first(),i=this.core.outer.find(".lg-current .lg-dummy-img").first();this.scale=t.scale,n.css("transform","scale3d("+t.scale+", "+t.scale+", 1)"),i.css("transform","scale3d("+t.scale+", "+t.scale+", 1)");var r="translate3d("+t.x+"px, "+t.y+"px, 0)";e.css("transform",r)},t.prototype.setActualSize=function(t,e){var n=this,i=this.core.galleryItems[this.core.index];this.resetImageTranslate(t),setTimeout((function(){if(i.src&&!n.core.outer.hasClass("lg-first-slide-loading")){var t=n.getCurrentImageActualSizeScale(),r=n.scale;n.core.outer.hasClass("lg-zoomed")?n.scale=1:n.scale=n.getScale(t),n.setPageCords(e),n.beginZoom(n.scale),n.zoomImage(n.scale,n.scale-r,!0,!0),setTimeout((function(){n.core.outer.removeClass("lg-grabbing").addClass("lg-grab")}),10)}}),50)},t.prototype.getNaturalWidth=function(t){var e=this.core.getSlideItem(t).find(".lg-image").first(),n=this.core.galleryItems[t].width;return n?parseFloat(n):e.get().naturalWidth},t.prototype.getActualSizeScale=function(t,e){return t>=e?t/e||2:1},t.prototype.getCurrentImageActualSizeScale=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,e=this.getNaturalWidth(this.core.index)||t;return this.getActualSizeScale(e,t)},t.prototype.getPageCords=function(t){var e={};if(t)e.x=t.pageX||t.touches[0].pageX,e.y=t.pageY||t.touches[0].pageY;else{var n=this.core.$content.get().getBoundingClientRect();e.x=n.width/2+n.left,e.y=n.height/2+this.scrollTop+n.top}return e},t.prototype.setPageCords=function(t){var e=this.getPageCords(t);this.pageX=e.x,this.pageY=e.y},t.prototype.manageActualPixelClassNames=function(){this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)},t.prototype.beginZoom=function(t){return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),t>1?(this.core.outer.addClass("lg-zoomed"),this.manageActualPixelClassNames()):this.resetZoom(),t>1},t.prototype.getScale=function(t){var e=this.getCurrentImageActualSizeScale();return t<1?t=1:t>e&&(t=e),t},t.prototype.init=function(){var t=this;if(this.settings.zoom){this.buildTemplates(),this.enableZoomOnSlideItemLoad();var e=null;this.core.outer.on("dblclick.lg",(function(e){t.$LG(e.target).hasClass("lg-image")&&t.setActualSize(t.core.index,e)})),this.core.outer.on("touchstart.lg",(function(n){var i=t.$LG(n.target);1===n.touches.length&&i.hasClass("lg-image")&&(e?(clearTimeout(e),e=null,n.preventDefault(),t.setActualSize(t.core.index,n)):e=setTimeout((function(){e=null}),300))})),this.core.LGel.on(mt+".zoom "+bt+".zoom "+vt+".zoom "+wt+".zoom "+xt+".zoom",(function(){if(t.core.lgOpened&&t.isImageSlide(t.core.index)&&!t.core.touchAction){var e=t.core.getSlideItem(t.core.index).find(".lg-img-wrap").first();t.top=0,t.left=0,t.setZoomEssentials(),t.setZoomSwipeStyles(e,{x:0,y:0}),t.positionChanged=!0}})),this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,(function(){t.core.lgOpened&&(t.scrollTop=t.$LG(window).scrollTop())})),this.core.getElementById("lg-zoom-out").on("click.lg",(function(){if(t.isImageSlide(t.core.index)){var e=0;t.imageReset&&(t.resetImageTranslate(t.core.index),e=50),setTimeout((function(){var e=t.scale-t.settings.scale;e<1&&(e=1),t.beginZoom(e),t.zoomImage(e,-t.settings.scale,!0,!0)}),e)}})),this.core.getElementById("lg-zoom-in").on("click.lg",(function(){t.zoomIn()})),this.core.getElementById("lg-actual-size").on("click.lg",(function(){t.setActualSize(t.core.index)})),this.core.LGel.on(gt+".zoom",(function(){t.core.outer.find(".lg-item").removeClass("lg-zoomable")})),this.core.LGel.on(pt+".zoom",(function(){t.scrollTop=t.$LG(window).scrollTop(),t.pageX=t.core.outer.width()/2,t.pageY=t.core.outer.height()/2+t.scrollTop,t.scale=1})),this.core.LGel.on(yt+".zoom",(function(e){var n=e.detail.prevIndex;t.scale=1,t.positionChanged=!1,t.resetZoom(n),t.resetImageTranslate(n),t.isImageSlide(t.core.index)&&t.setZoomEssentials()})),this.zoomDrag(),this.pinchZoom(),this.zoomSwipe(),this.zoomableTimeout=!1,this.positionChanged=!1}},t.prototype.zoomIn=function(){if(this.isImageSlide(this.core.index)){var t=this.scale+this.settings.scale;t=this.getScale(t),this.beginZoom(t),this.zoomImage(t,Math.min(this.settings.scale,t-this.scale),!0,!0)}},t.prototype.resetZoom=function(t){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var e=this.core.getElementById("lg-actual-size"),n=this.core.getSlideItem(void 0!==t?t:this.core.index);e.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),n.find(".lg-img-wrap").first().removeAttr("style"),n.find(".lg-image").first().removeAttr("style"),this.scale=1,this.left=0,this.top=0,this.setPageCords()},t.prototype.getTouchDistance=function(t){return Math.sqrt((t.touches[0].pageX-t.touches[1].pageX)*(t.touches[0].pageX-t.touches[1].pageX)+(t.touches[0].pageY-t.touches[1].pageY)*(t.touches[0].pageY-t.touches[1].pageY))},t.prototype.pinchZoom=function(){var t=this,e=0,n=!1,i=1,r=0,a=this.core.getSlideItem(this.core.index);this.core.outer.on("touchstart.lg",(function(n){if(a=t.core.getSlideItem(t.core.index),t.isImageSlide(t.core.index)&&2===n.touches.length){if(n.preventDefault(),t.core.outer.hasClass("lg-first-slide-loading"))return;i=t.scale||1,t.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),t.setPageCords(n),t.resetImageTranslate(t.core.index),t.core.touchAction="pinch",e=t.getTouchDistance(n)}})),this.core.$inner.on("touchmove.lg",(function(o){if(2===o.touches.length&&"pinch"===t.core.touchAction&&(t.$LG(o.target).hasClass("lg-item")||a.get().contains(o.target))){o.preventDefault();var s=t.getTouchDistance(o),l=e-s;if(!n&&Math.abs(l)>5&&(n=!0),n){r=t.scale;var c=Math.max(1,i+.02*-l);t.scale=Math.round(100*(c+Number.EPSILON))/100;var d=t.scale-r;t.zoomImage(t.scale,Math.round(100*(d+Number.EPSILON))/100,!1,!1)}}})),this.core.$inner.on("touchend.lg",(function(i){if("pinch"===t.core.touchAction&&(t.$LG(i.target).hasClass("lg-item")||a.get().contains(i.target))){if(n=!1,e=0,t.scale<=1)t.resetZoom();else{var r=t.getCurrentImageActualSizeScale();if(t.scale>=r){var o=r-t.scale;0===o&&(o=.01),t.zoomImage(r,o,!1,!0)}t.manageActualPixelClassNames(),t.core.outer.addClass("lg-zoomed")}t.core.touchAction=void 0}}))},t.prototype.touchendZoom=function(t,e,n,i,r){var a=e.x-t.x,o=e.y-t.y,s=Math.abs(a)/r+1,l=Math.abs(o)/r+1;s>2&&(s+=1),l>2&&(l+=1),a*=s,o*=l;var c=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),d={};d.x=this.left+a,d.y=this.top+o;var f=this.getPossibleSwipeDragCords();(Math.abs(a)>15||Math.abs(o)>15)&&(i&&(this.isBeyondPossibleTop(d.y,f.minY)?d.y=f.minY:this.isBeyondPossibleBottom(d.y,f.maxY)&&(d.y=f.maxY)),n&&(this.isBeyondPossibleLeft(d.x,f.minX)?d.x=f.minX:this.isBeyondPossibleRight(d.x,f.maxX)&&(d.x=f.maxX)),i?this.top=d.y:d.y=this.top,n?this.left=d.x:d.x=this.left,this.setZoomSwipeStyles(c,d),this.positionChanged=!0)},t.prototype.getZoomSwipeCords=function(t,e,n,i,r){var a={};if(i){if(a.y=this.top+(e.y-t.y),this.isBeyondPossibleTop(a.y,r.minY)){var o=r.minY-a.y;a.y=r.minY-o/6}else if(this.isBeyondPossibleBottom(a.y,r.maxY)){var s=a.y-r.maxY;a.y=r.maxY+s/6}}else a.y=this.top;if(n){if(a.x=this.left+(e.x-t.x),this.isBeyondPossibleLeft(a.x,r.minX)){var l=r.minX-a.x;a.x=r.minX-l/6}else if(this.isBeyondPossibleRight(a.x,r.maxX)){var c=a.x-r.maxX;a.x=r.maxX+c/6}}else a.x=this.left;return a},t.prototype.isBeyondPossibleLeft=function(t,e){return t>=e},t.prototype.isBeyondPossibleRight=function(t,e){return t<=e},t.prototype.isBeyondPossibleTop=function(t,e){return t>=e},t.prototype.isBeyondPossibleBottom=function(t,e){return t<=e},t.prototype.isImageSlide=function(t){var e=this.core.galleryItems[t];return"image"===this.core.getSlideType(e)},t.prototype.getPossibleSwipeDragCords=function(t){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first(),n=this.core.mediaContainerPosition.bottom,i=e.get().getBoundingClientRect(),r=i.height,a=i.width;return t&&(r+=t*r,a+=t*a),{minY:(r-this.containerRect.height)/2,maxY:(this.containerRect.height-r)/2+n,minX:(a-this.containerRect.width)/2,maxX:(this.containerRect.width-a)/2}},t.prototype.setZoomSwipeStyles=function(t,e){t.css("transform","translate3d("+e.x+"px, "+e.y+"px, 0)")},t.prototype.zoomSwipe=function(){var t,e,n=this,i={},r={},a=!1,o=!1,s=!1,l=new Date,c=(new Date,this.core.getSlideItem(this.core.index));this.core.$inner.on("touchstart.lg",(function(r){if(n.isImageSlide(n.core.index)&&(c=n.core.getSlideItem(n.core.index),(n.$LG(r.target).hasClass("lg-item")||c.get().contains(r.target))&&1===r.touches.length&&n.core.outer.hasClass("lg-zoomed"))){r.preventDefault(),l=new Date,n.core.touchAction="zoomSwipe",e=n.core.getSlideItem(n.core.index).find(".lg-img-wrap").first();var a=n.getDragAllowedAxises(0);s=a.allowY,((o=a.allowX)||s)&&(i=n.getSwipeCords(r)),t=n.getPossibleSwipeDragCords(),n.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")}})),this.core.$inner.on("touchmove.lg",(function(l){if(1===l.touches.length&&"zoomSwipe"===n.core.touchAction&&(n.$LG(l.target).hasClass("lg-item")||c.get().contains(l.target))){l.preventDefault(),n.core.touchAction="zoomSwipe",r=n.getSwipeCords(l);var d=n.getZoomSwipeCords(i,r,o,s,t);(Math.abs(r.x-i.x)>15||Math.abs(r.y-i.y)>15)&&(a=!0,n.setZoomSwipeStyles(e,d))}})),this.core.$inner.on("touchend.lg",(function(t){if("zoomSwipe"===n.core.touchAction&&(n.$LG(t.target).hasClass("lg-item")||c.get().contains(t.target))){if(t.preventDefault(),n.core.touchAction=void 0,n.core.outer.removeClass("lg-zoom-dragging"),!a)return;a=!1;var e=(new Date).valueOf()-l.valueOf();n.touchendZoom(i,r,o,s,e)}}))},t.prototype.zoomDrag=function(){var t,e,n,i,r=this,a={},o={},s=!1,l=!1,c=!1,d=!1;this.core.outer.on("mousedown.lg.zoom",(function(e){if(r.isImageSlide(r.core.index)){var o=r.core.getSlideItem(r.core.index);if(r.$LG(e.target).hasClass("lg-item")||o.get().contains(e.target)){t=new Date,i=r.core.getSlideItem(r.core.index).find(".lg-img-wrap").first();var l=r.getDragAllowedAxises(0);d=l.allowY,c=l.allowX,r.core.outer.hasClass("lg-zoomed")&&r.$LG(e.target).hasClass("lg-object")&&(c||d)&&(e.preventDefault(),a=r.getDragCords(e),n=r.getPossibleSwipeDragCords(),s=!0,r.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))}}})),this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,(function(t){if(s){l=!0,o=r.getDragCords(t);var e=r.getZoomSwipeCords(a,o,c,d,n);r.setZoomSwipeStyles(i,e)}})),this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,(function(n){if(s){if(e=new Date,s=!1,r.core.outer.removeClass("lg-zoom-dragging"),l&&(a.x!==o.x||a.y!==o.y)){o=r.getDragCords(n);var i=e.valueOf()-t.valueOf();r.touchendZoom(a,o,c,d,i)}l=!1}r.core.outer.removeClass("lg-grabbing").addClass("lg-grab")}))},t.prototype.closeGallery=function(){this.resetZoom()},t.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId),this.core.LGel.off(".lg.zoom"),this.core.LGel.off(".zoom"),clearTimeout(this.zoomableTimeout),this.zoomableTimeout=!1},t}(),kt=St,Ct=function(){return Ct=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},Ct.apply(this,arguments)},It={autoplayFirstVideo:!0,youTubePlayerParams:!1,vimeoPlayerParams:!1,wistiaPlayerParams:!1,gotoNextSlideOnVideoEnd:!0,autoplayVideoOnSlide:!1,videojs:!1,videojsTheme:"",videojsOptions:{}},Ot="lgHasVideo",Et="lgSlideItemLoad",zt="lgBeforeSlide",At="lgAfterSlide",Pt="lgPosterClick",Lt=function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},Tt=function(t,e){if(!t.youtube)return"";var n=t.youtube[2]?t.youtube[2].slice(1).split("&").map((function(t){return t.split("=")})).reduce((function(t,e){var n=e.map(decodeURIComponent),i=n[0],r=n[1];return t[i]=r,t}),{}):"",i=e||{},r=Ct(Ct(Ct({},{wmode:"opaque",autoplay:0,mute:1,enablejsapi:1}),i),n);return"?"+Lt(r)},Nt=function(){function t(t){return this.core=t,this.settings=Ct(Ct({},It),this.core.settings),this}return t.prototype.init=function(){var t=this;this.core.LGel.on(Ot+".video",this.onHasVideo.bind(this)),this.core.LGel.on(Pt+".video",(function(){var e=t.core.getSlideItem(t.core.index);t.loadVideoOnPosterClick(e)})),this.core.LGel.on(Et+".video",this.onSlideItemLoad.bind(this)),this.core.LGel.on(zt+".video",this.onBeforeSlide.bind(this)),this.core.LGel.on(At+".video",this.onAfterSlide.bind(this))},t.prototype.onSlideItemLoad=function(t){var e=this,n=t.detail,i=n.isFirstSlide,r=n.index;this.settings.autoplayFirstVideo&&i&&r===this.core.index&&setTimeout((function(){e.loadAndPlayVideo(r)}),200),!i&&this.settings.autoplayVideoOnSlide&&r===this.core.index&&this.loadAndPlayVideo(r)},t.prototype.onHasVideo=function(t){var e=t.detail,n=e.index,i=e.src,r=e.html5Video;e.hasPoster||(this.appendVideos(this.core.getSlideItem(n),{src:i,addClass:"lg-object",index:n,html5Video:r}),this.gotoNextSlideOnVideoEnd(i,n))},t.prototype.onBeforeSlide=function(t){if(this.core.lGalleryOn){var e=t.detail.prevIndex;this.pauseVideo(e)}},t.prototype.onAfterSlide=function(t){var e=this,n=t.detail,i=n.index,r=n.prevIndex,a=this.core.getSlideItem(i);this.settings.autoplayVideoOnSlide&&i!==r&&a.hasClass("lg-complete")&&setTimeout((function(){e.loadAndPlayVideo(i)}),100)},t.prototype.loadAndPlayVideo=function(t){var e=this.core.getSlideItem(t);this.core.galleryItems[t].poster?this.loadVideoOnPosterClick(e,!0):this.playVideo(t)},t.prototype.playVideo=function(t){this.controlVideo(t,"play")},t.prototype.pauseVideo=function(t){this.controlVideo(t,"pause")},t.prototype.getVideoHtml=function(t,e,n,i){var r="",a=this.core.galleryItems[n].__slideVideoInfo||{},o=this.core.galleryItems[n],s=o.title||o.alt;s=s?'title="'+s+'"':"";var l='allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';if(a.youtube){var c="lg-youtube"+n,d=Tt(a,this.settings.youTubePlayerParams);r='<iframe allow="autoplay" id='+c+' class="lg-video-object lg-youtube '+e+'" '+s+' src="'+(t.includes("youtube-nocookie.com")?"//www.youtube-nocookie.com/":"//www.youtube.com/")+"embed/"+(a.youtube[1]+d)+'" '+l+"></iframe>"}else if(a.vimeo){c="lg-vimeo"+n;var f=function(t,e){if(!e||!e.vimeo)return"";var n=e.vimeo[2]||"",i=t&&0!==Object.keys(t).length?"&"+Lt(t):"",r=((e.vimeo[0].split("/").pop()||"").split("?")[0]||"").split("#")[0],a=e.vimeo[1]!==r;return a&&(n=n.replace("/"+r,"")),"?autoplay=0&muted=1"+(a?"&h="+r:"")+i+("?"==n[0]?"&"+n.slice(1):n||"")}(this.settings.vimeoPlayerParams,a);r='<iframe allow="autoplay" id='+c+' class="lg-video-object lg-vimeo '+e+'" '+s+' src="//player.vimeo.com/video/'+(a.vimeo[1]+f)+'" '+l+"></iframe>"}else if(a.wistia){var u="lg-wistia"+n;f=(f=Lt(this.settings.wistiaPlayerParams))?"?"+f:"",r='<iframe allow="autoplay" id="'+u+'" src="//fast.wistia.net/embed/iframe/'+(a.wistia[4]+f)+'" '+s+' class="wistia_embed lg-video-object lg-wistia '+e+'" name="wistia_embed" '+l+"></iframe>"}else if(a.html5){for(var m="",g=0;g<i.source.length;g++)m+='<source src="'+i.source[g].src+'" type="'+i.source[g].type+'">';if(i.tracks){var p=function(t){var e="",n=i.tracks[t];Object.keys(n||{}).forEach((function(t){e+=t+'="'+n[t]+'" '})),m+="<track "+e+">"};for(g=0;g<i.tracks.length;g++)p(g)}var h="",y=i.attributes||{};Object.keys(y||{}).forEach((function(t){h+=t+'="'+y[t]+'" '})),r='<video class="lg-video-object lg-html5 '+(this.settings.videojs&&this.settings.videojsTheme?this.settings.videojsTheme+" ":"")+" "+(this.settings.videojs?" video-js":"")+'" '+h+">\n                "+m+"\n                Your browser does not support HTML5 video.\n            </video>"}return r},t.prototype.appendVideos=function(t,e){var n,i=this.getVideoHtml(e.src,e.addClass,e.index,e.html5Video);t.find(".lg-video-cont").append(i);var r=t.find(".lg-video-object").first();if(e.html5Video&&r.on("mousedown.lg.video",(function(t){t.stopPropagation()})),this.settings.videojs&&(null===(n=this.core.galleryItems[e.index].__slideVideoInfo)||void 0===n?void 0:n.html5))try{return videojs(r.get(),this.settings.videojsOptions)}catch(a){console.error("lightGallery:- Make sure you have included videojs")}},t.prototype.gotoNextSlideOnVideoEnd=function(t,e){var n=this,i=this.core.getSlideItem(e).find(".lg-video-object").first(),r=this.core.galleryItems[e].__slideVideoInfo||{};if(this.settings.gotoNextSlideOnVideoEnd)if(r.html5)i.on("ended",(function(){n.core.goToNextSlide()}));else if(r.vimeo)try{new Vimeo.Player(i.get()).on("ended",(function(){n.core.goToNextSlide()}))}catch(a){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(r.wistia)try{window._wq=window._wq||[],window._wq.push({id:i.attr("id"),onReady:function(t){t.bind("end",(function(){n.core.goToNextSlide()}))}})}catch(a){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},t.prototype.controlVideo=function(t,e){var n=this.core.getSlideItem(t).find(".lg-video-object").first(),i=this.core.galleryItems[t].__slideVideoInfo||{};if(n.get())if(i.youtube)try{n.get().contentWindow.postMessage('{"event":"command","func":"'+e+'Video","args":""}',"*")}catch(r){console.error("lightGallery:- "+r)}else if(i.vimeo)try{new Vimeo.Player(n.get())[e]()}catch(r){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(i.html5)if(this.settings.videojs)try{videojs(n.get())[e]()}catch(r){console.error("lightGallery:- Make sure you have included videojs")}else n.get()[e]();else if(i.wistia)try{window._wq=window._wq||[],window._wq.push({id:n.attr("id"),onReady:function(t){t[e]()}})}catch(r){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},t.prototype.loadVideoOnPosterClick=function(t,e){var n=this;if(t.hasClass("lg-video-loaded"))e&&this.playVideo(this.core.index);else if(t.hasClass("lg-has-video"))this.playVideo(this.core.index);else{t.addClass("lg-has-video");var i=void 0,r=this.core.galleryItems[this.core.index].src,a=this.core.galleryItems[this.core.index].video;a&&(i="string"==typeof a?JSON.parse(a):a);var o=this.appendVideos(t,{src:r,addClass:"",index:this.core.index,html5Video:i});this.gotoNextSlideOnVideoEnd(r,this.core.index);var s=t.find(".lg-object").first().get();t.find(".lg-video-cont").first().append(s),t.addClass("lg-video-loading"),o&&o.ready((function(){o.on("loadedmetadata",(function(){n.onVideoLoadAfterPosterClick(t,n.core.index)}))})),t.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg",(function(){setTimeout((function(){n.onVideoLoadAfterPosterClick(t,n.core.index)}),50)}))}},t.prototype.onVideoLoadAfterPosterClick=function(t,e){t.addClass("lg-video-loaded"),this.playVideo(e)},t.prototype.destroy=function(){this.core.LGel.off(".lg.video"),this.core.LGel.off(".video")},t}(),jt=function(){return jt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},jt.apply(this,arguments)},Mt="lgSlideItemLoad",Dt="lgBeforeSlide",Rt="lgRotateLeft",Vt="lgRotateRight",$t="lgFlipHorizontal",_t="lgFlipVertical",Gt={rotate:!0,rotateSpeed:400,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0,rotatePluginStrings:{flipVertical:"Flip vertical",flipHorizontal:"Flip horizontal",rotateLeft:"Rotate left",rotateRight:"Rotate right"}},Yt=function(){function t(t,e){return this.core=t,this.$LG=e,this.settings=jt(jt({},Gt),this.core.settings),this}return t.prototype.buildTemplates=function(){var t="";this.settings.flipVertical&&(t+='<button type="button" id="lg-flip-ver" aria-label="'+this.settings.rotatePluginStrings.flipVertical+'" class="lg-flip-ver lg-icon"></button>'),this.settings.flipHorizontal&&(t+='<button type="button" id="lg-flip-hor" aria-label="'+this.settings.rotatePluginStrings.flipHorizontal+'" class="lg-flip-hor lg-icon"></button>'),this.settings.rotateLeft&&(t+='<button type="button" id="lg-rotate-left" aria-label="'+this.settings.rotatePluginStrings.rotateLeft+'" class="lg-rotate-left lg-icon"></button>'),this.settings.rotateRight&&(t+='<button type="button" id="lg-rotate-right" aria-label="'+this.settings.rotatePluginStrings.rotateRight+'" class="lg-rotate-right lg-icon"></button>'),this.core.$toolbar.append(t)},t.prototype.init=function(){var t=this;this.settings.rotate&&(this.buildTemplates(),this.rotateValuesList={},this.core.LGel.on(Mt+".rotate",(function(e){var n=e.detail.index;t.core.getSlideItem(n).find(".lg-img-rotate").get()||(t.core.getSlideItem(n).find(".lg-object").first().wrap("lg-img-rotate"),t.core.getSlideItem(t.core.index).find(".lg-img-rotate").css("transition-duration",t.settings.rotateSpeed+"ms"))})),this.core.outer.find("#lg-rotate-left").first().on("click.lg",this.rotateLeft.bind(this)),this.core.outer.find("#lg-rotate-right").first().on("click.lg",this.rotateRight.bind(this)),this.core.outer.find("#lg-flip-hor").first().on("click.lg",this.flipHorizontal.bind(this)),this.core.outer.find("#lg-flip-ver").first().on("click.lg",this.flipVertical.bind(this)),this.core.LGel.on(Dt+".rotate",(function(e){t.rotateValuesList[e.detail.index]||(t.rotateValuesList[e.detail.index]={rotate:0,flipHorizontal:1,flipVertical:1})})))},t.prototype.applyStyles=function(){this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().css("transform","rotate("+this.rotateValuesList[this.core.index].rotate+"deg) scale3d("+this.rotateValuesList[this.core.index].flipHorizontal+", "+this.rotateValuesList[this.core.index].flipVertical+", 1)")},t.prototype.rotateLeft=function(){this.rotateValuesList[this.core.index].rotate-=90,this.applyStyles(),this.triggerEvents(Rt,{rotate:this.rotateValuesList[this.core.index].rotate})},t.prototype.rotateRight=function(){this.rotateValuesList[this.core.index].rotate+=90,this.applyStyles(),this.triggerEvents(Vt,{rotate:this.rotateValuesList[this.core.index].rotate})},t.prototype.getCurrentRotation=function(t){if(!t)return 0;var e=this.$LG(t).style(),n=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"none";if("none"!==n){var i=n.split("(")[1].split(")")[0].split(",");if(i){var r=Math.round(Math.atan2(i[1],i[0])*(180/Math.PI));return r<0?r+360:r}}return 0},t.prototype.flipHorizontal=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get(),e=this.getCurrentRotation(t),n="flipHorizontal";90!==e&&270!==e||(n="flipVertical"),this.rotateValuesList[this.core.index][n]*=-1,this.applyStyles(),this.triggerEvents($t,{flipHorizontal:this.rotateValuesList[this.core.index][n]})},t.prototype.flipVertical=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get(),e=this.getCurrentRotation(t),n="flipVertical";90!==e&&270!==e||(n="flipHorizontal"),this.rotateValuesList[this.core.index][n]*=-1,this.applyStyles(),this.triggerEvents(_t,{flipVertical:this.rotateValuesList[this.core.index][n]})},t.prototype.triggerEvents=function(t,e){var n=this;setTimeout((function(){n.core.LGel.trigger(t,e)}),this.settings.rotateSpeed+10)},t.prototype.isImageOrientationChanged=function(){var t=this.rotateValuesList[this.core.index],e=Math.abs(t.rotate)%360!=0,n=t.flipHorizontal<0,i=t.flipVertical<0;return e||n||i},t.prototype.closeGallery=function(){this.isImageOrientationChanged()&&this.core.getSlideItem(this.core.index).css("opacity",0),this.rotateValuesList={}},t.prototype.destroy=function(){this.core.LGel.off(".lg.rotate"),this.core.LGel.off(".rotate")},t}(),Ft=Yt,Bt=n(8032),Ht=n(982),Xt=n(9417),Wt=n.p+"static/img-05-bdb8499af3655182559eb856613cfdfa.png",Zt=n.p+"static/img-10-43591d407f83fb84b1d14d9ee43dc780.jpg",Ut=n.p+"static/img-03-ac41af22bb80fad5e16103117cd33885.jpg",qt=n(870);var Kt=function(){return i.createElement("section",{className:"relative w-full z-[9999999]"},i.createElement("div",{className:"my-auto w-full mx-auto xl:grid xl:grid-cols-3 xl:gap-10 3xl:my-20"},i.createElement(qt.pT,{direction:"up",duration:1e3,delay:100,cascade:!0},i.createElement("div",{className:"xl:col-span-1"},i.createElement("div",{className:"relative cursor-pointer"},i.createElement(dt,{speed:500,plugins:[kt,Nt,Ft],download:!0,mobileSettings:{controls:!1,showCloseIcon:!0,rotate:!1}},i.createElement("a",{className:"item group relative lazy","data-lg-size":"3840-2160","data-src":"https://vimeo.com/657660189","data-poster":Ut},i.createElement(Bt.S,{src:"../../assets/img-03.jpg",alt:"Worn and Faded",placeholder:"none",layout:"fullWidth",className:"w-full mx-auto border-[10px] border-[#e6e5d9]",__imageData:n(2460)}))),i.createElement("a",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000] py-4 px-6 rounded-lg bg-opacity-50","data-lg-size":"3840-2160","data-src":"https://vimeo.com/657660189","data-poster":Ut},i.createElement(Ht.G,{icon:Xt.zc,className:"text-5xl"}))),i.createElement("div",{className:"mt-5 text-center leading-[1.2] font-bold text-2xl 2xl:text-3xl mb-5"},"TEASER")),i.createElement("div",{className:"xl:col-span-1"},i.createElement("div",{className:"relative cursor-pointer"},i.createElement(dt,{speed:500,plugins:[kt,Nt,Ft],download:!0,mobileSettings:{controls:!1,showCloseIcon:!0,rotate:!1}},i.createElement("a",{className:"item group relative lazy","data-lg-size":"3840-2160","data-src":"https://vimeo.com/759639919","data-poster":Zt},i.createElement(Bt.S,{src:"../../assets/img-10.jpg",alt:"Worn and Faded",placeholder:"none",layout:"fullWidth",className:"w-full mx-auto border-[10px] border-[#e6e5d9]",__imageData:n(3143)}))),i.createElement("a",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000] py-4 px-6 rounded-lg bg-opacity-50","data-lg-size":"3840-2160","data-src":"https://vimeo.com/759639919","data-poster":Zt},i.createElement(Ht.G,{icon:Xt.zc,className:"text-5xl"}))),i.createElement("div",{className:"mt-5 text-center leading-[1.2] font-bold text-2xl 2xl:text-3xl mb-5"},"EXCERPT: FRANK VACANTI OF WINTERLAND PRODUCTIONS")),i.createElement("div",{className:"xl:col-span-1"},i.createElement("div",{className:"relative cursor-pointer"},i.createElement(dt,{speed:500,plugins:[kt,Nt,Ft],download:!0,mobileSettings:{controls:!1,showCloseIcon:!0,rotate:!1}},i.createElement("a",{className:"item group relative lazy","data-lg-size":"3840-2160","data-src":"https://vimeo.com/657659506","data-poster":Wt},i.createElement(Bt.S,{src:"../../assets/img-05.png",alt:"Worn and Faded",placeholder:"none",layout:"fullWidth",className:"w-full mx-auto border-[10px] border-[#e6e5d9]",__imageData:n(9305)}))),i.createElement("a",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000] py-4 px-6 rounded-lg bg-opacity-50","data-lg-size":"3840-2160","data-src":"https://vimeo.com/657659506","data-poster":Wt},i.createElement(Ht.G,{icon:Xt.zc,className:"text-5xl"}))),i.createElement("div",{className:"mt-5 text-center leading-[1.2] font-bold text-2xl 2xl:text-3xl mb-5"},"A BRIEF HISTORY OF THE BAND SHIRT")))))}},6193:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(7294);var r=t=>{let{siteTitle:e}=t;return i.createElement("header",{className:"header","data-header":e})};var a=t=>{let{siteTitle:e,siteLink:n}=t;return i.createElement("footer",{"data-title":e,"data-link":n})};var o=t=>{let{children:e}=t;return i.createElement(i.Fragment,null,i.createElement(r,{siteTitle:"Worn And Faded"}),i.createElement("main",null,e),i.createElement(a,{siteTitle:"Worn And Faded",siteLink:"https://www.gatsbyjs.com"}))}},4001:function(t,e,n){"use strict";var i=n(7294);e.Z=function(t){let{description:e,title:n,children:r}=t;const a=e,o=n;return i.createElement(i.Fragment,null,i.createElement("title",null,o?n+" | "+o:n),i.createElement("meta",{name:"description",content:a}),i.createElement("meta",{property:"og:title",content:n}),i.createElement("meta",{property:"og:description",content:a}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"twitter:creator",content:""}),i.createElement("meta",{name:"twitter:title",content:n}),i.createElement("meta",{name:"twitter:description",content:a}),r)}},8679:function(t,e,n){"use strict";var i=n(9864),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(t){return i.isMemo(t)?o:s[t.$$typeof]||r}s[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[i.Memo]=o;var c=Object.defineProperty,d=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,n,i){if("string"!=typeof n){if(g){var r=m(n);r&&r!==g&&t(e,r,i)}var o=d(n);f&&(o=o.concat(f(n)));for(var s=l(e),p=l(n),h=0;h<o.length;++h){var y=o[h];if(!(a[y]||i&&i[y]||p&&p[y]||s&&s[y])){var v=u(n,y);try{c(e,y,v)}catch(b){}}}}return e}},4415:function(t,e){"use strict";var n,i=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case a:case s:case o:case u:case m:return t;default:switch(t=t&&t.$$typeof){case d:case c:case f:case p:case g:case l:return t;default:return e}}case r:return e}}}n=Symbol.for("react.module.reference"),e.isFragment=function(t){return y(t)===a}},4954:function(t,e,n){"use strict";t.exports=n(4415)},9921:function(t,e){"use strict";var n="function"==typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,g=n?Symbol.for("react.suspense_list"):60120,p=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case d:case f:case a:case s:case o:case m:return t;default:switch(t=t&&t.$$typeof){case c:case u:case h:case p:case l:return t;default:return e}}case r:return e}}}function S(t){return x(t)===f}e.AsyncMode=d,e.ConcurrentMode=f,e.ContextConsumer=c,e.ContextProvider=l,e.Element=i,e.ForwardRef=u,e.Fragment=a,e.Lazy=h,e.Memo=p,e.Portal=r,e.Profiler=s,e.StrictMode=o,e.Suspense=m,e.isAsyncMode=function(t){return S(t)||x(t)===d},e.isConcurrentMode=S,e.isContextConsumer=function(t){return x(t)===c},e.isContextProvider=function(t){return x(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return x(t)===u},e.isFragment=function(t){return x(t)===a},e.isLazy=function(t){return x(t)===h},e.isMemo=function(t){return x(t)===p},e.isPortal=function(t){return x(t)===r},e.isProfiler=function(t){return x(t)===s},e.isStrictMode=function(t){return x(t)===o},e.isSuspense=function(t){return x(t)===m},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===f||t===s||t===o||t===m||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===p||t.$$typeof===l||t.$$typeof===c||t.$$typeof===u||t.$$typeof===v||t.$$typeof===b||t.$$typeof===w||t.$$typeof===y)},e.typeOf=x},9864:function(t,e,n){"use strict";t.exports=n(9921)},434:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},870:function(t,e,n){"use strict";n.d(e,{pT:function(){return Ae}});var i=n(5893),r=n(7294),a=n.t(r,2);var o=function(){function t(t){var e=this;this._insertTag=function(t){var n;n=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,n),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{n.insertRule(t,n.cssRules.length)}catch(i){0}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),s=Math.abs,l=String.fromCharCode,c=Object.assign;function d(t){return t.trim()}function f(t,e,n){return t.replace(e,n)}function u(t,e){return t.indexOf(e)}function m(t,e){return 0|t.charCodeAt(e)}function g(t,e,n){return t.slice(e,n)}function p(t){return t.length}function h(t){return t.length}function y(t,e){return e.push(t),t}var v=1,b=1,w=0,x=0,S=0,k="";function C(t,e,n,i,r,a,o){return{value:t,root:e,parent:n,type:i,props:r,children:a,line:v,column:b,length:o,return:""}}function I(t,e){return c(C("",null,null,"",null,null,0),t,{length:-t.length},e)}function O(){return S=x>0?m(k,--x):0,b--,10===S&&(b=1,v--),S}function E(){return S=x<w?m(k,x++):0,b++,10===S&&(b=1,v++),S}function z(){return m(k,x)}function A(){return x}function P(t,e){return g(k,t,e)}function L(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(t){return v=b=1,w=p(k=t),x=0,[]}function N(t){return k="",t}function j(t){return d(P(x-1,R(91===t?t+2:40===t?t+1:t)))}function M(t){for(;(S=z())&&S<33;)E();return L(t)>2||L(S)>3?"":" "}function D(t,e){for(;--e&&E()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return P(t,A()+(e<6&&32==z()&&32==E()))}function R(t){for(;E();)switch(S){case t:return x;case 34:case 39:34!==t&&39!==t&&R(S);break;case 40:41===t&&R(t);break;case 92:E()}return x}function V(t,e){for(;E()&&t+S!==57&&(t+S!==84||47!==z()););return"/*"+P(e,x-1)+"*"+l(47===t?t:E())}function $(t){for(;!L(z());)E();return P(t,x)}var _="-ms-",G="-moz-",Y="-webkit-",F="comm",B="rule",H="decl",X="@keyframes";function W(t,e){for(var n="",i=h(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function Z(t,e,n,i){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case H:return t.return=t.return||t.value;case F:return"";case X:return t.return=t.value+"{"+W(t.children,i)+"}";case B:t.value=t.props.join(",")}return p(n=W(t.children,i))?t.return=t.value+"{"+n+"}":""}function U(t){return N(q("",null,null,null,[""],t=T(t),0,[0],t))}function q(t,e,n,i,r,a,o,s,c){for(var d=0,g=0,h=o,v=0,b=0,w=0,x=1,S=1,k=1,C=0,I="",P=r,L=a,T=i,N=I;S;)switch(w=C,C=E()){case 40:if(108!=w&&58==m(N,h-1)){-1!=u(N+=f(j(C),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:N+=j(C);break;case 9:case 10:case 13:case 32:N+=M(w);break;case 92:N+=D(A()-1,7);continue;case 47:switch(z()){case 42:case 47:y(J(V(E(),A()),e,n),c);break;default:N+="/"}break;case 123*x:s[d++]=p(N)*k;case 125*x:case 59:case 0:switch(C){case 0:case 125:S=0;case 59+g:-1==k&&(N=f(N,/\f/g,"")),b>0&&p(N)-h&&y(b>32?Q(N+";",i,n,h-1):Q(f(N," ","")+";",i,n,h-2),c);break;case 59:N+=";";default:if(y(T=K(N,e,n,d,g,r,s,I,P=[],L=[],h),a),123===C)if(0===g)q(N,e,T,T,P,a,h,s,L);else switch(99===v&&110===m(N,3)?100:v){case 100:case 108:case 109:case 115:q(t,T,T,i&&y(K(t,T,T,0,0,r,s,I,r,P=[],h),L),r,L,h,s,i?P:L);break;default:q(N,T,T,T,[""],L,0,s,L)}}d=g=b=0,x=k=1,I=N="",h=o;break;case 58:h=1+p(N),b=w;default:if(x<1)if(123==C)--x;else if(125==C&&0==x++&&125==O())continue;switch(N+=l(C),C*x){case 38:k=g>0?1:(N+="\f",-1);break;case 44:s[d++]=(p(N)-1)*k,k=1;break;case 64:45===z()&&(N+=j(E())),v=z(),g=h=p(I=N+=$(A())),C++;break;case 45:45===w&&2==p(N)&&(x=0)}}return a}function K(t,e,n,i,r,a,o,l,c,u,m){for(var p=r-1,y=0===r?a:[""],v=h(y),b=0,w=0,x=0;b<i;++b)for(var S=0,k=g(t,p+1,p=s(w=o[b])),I=t;S<v;++S)(I=d(w>0?y[S]+" "+k:f(k,/&\f/g,y[S])))&&(c[x++]=I);return C(t,e,n,0===r?B:l,c,u,m)}function J(t,e,n){return C(t,e,n,F,l(S),g(t,2,-2),0)}function Q(t,e,n,i){return C(t,e,n,H,g(t,0,i),g(t,i+1,-1),i)}var tt=function(t,e,n){for(var i=0,r=0;i=r,r=z(),38===i&&12===r&&(e[n]=1),!L(r);)E();return P(t,x)},et=function(t,e){return N(function(t,e){var n=-1,i=44;do{switch(L(i)){case 0:38===i&&12===z()&&(e[n]=1),t[n]+=tt(x-1,e,n);break;case 2:t[n]+=j(i);break;case 4:if(44===i){t[++n]=58===z()?"&\f":"",e[n]=t[n].length;break}default:t[n]+=l(i)}}while(i=E());return t}(T(t),e))},nt=new WeakMap,it=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||nt.get(n))&&!i){nt.set(t,!0);for(var r=[],a=et(e,r),o=n.props,s=0,l=0;s<a.length;s++)for(var c=0;c<o.length;c++,l++)t.props[l]=r[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},rt=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function at(t,e){switch(function(t,e){return 45^m(t,0)?(((e<<2^m(t,0))<<2^m(t,1))<<2^m(t,2))<<2^m(t,3):0}(t,e)){case 5103:return Y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+t+G+t+_+t+t;case 6828:case 4268:return Y+t+_+t+t;case 6165:return Y+t+_+"flex-"+t+t;case 5187:return Y+t+f(t,/(\w+).+(:[^]+)/,Y+"box-$1$2"+_+"flex-$1$2")+t;case 5443:return Y+t+_+"flex-item-"+f(t,/flex-|-self/,"")+t;case 4675:return Y+t+_+"flex-line-pack"+f(t,/align-content|flex-|-self/,"")+t;case 5548:return Y+t+_+f(t,"shrink","negative")+t;case 5292:return Y+t+_+f(t,"basis","preferred-size")+t;case 6060:return Y+"box-"+f(t,"-grow","")+Y+t+_+f(t,"grow","positive")+t;case 4554:return Y+f(t,/([^-])(transform)/g,"$1"+Y+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+t+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,Y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(t)-1-e>6)switch(m(t,e+1)){case 109:if(45!==m(t,e+4))break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+G+(108==m(t,e+3)?"$3":"$2-$3"))+t;case 115:return~u(t,"stretch")?at(f(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==m(t,e+1))break;case 6444:switch(m(t,p(t)-3-(~u(t,"!important")&&10))){case 107:return f(t,":",":"+Y)+t;case 101:return f(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(45===m(t,14)?"inline-":"")+"box$3$1"+Y+"$2$3$1"+_+"$2box$3")+t}break;case 5936:switch(m(t,e+11)){case 114:return Y+t+_+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Y+t+_+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Y+t+_+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Y+t+_+t+t}return t}var ot=[function(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case H:t.return=at(t.value,t.length);break;case X:return W([I(t,{value:f(t.value,"@","@"+Y)})],i);case B:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([I(t,{props:[f(e,/:(read-\w+)/,":-moz-$1")]})],i);case"::placeholder":return W([I(t,{props:[f(e,/:(plac\w+)/,":"+Y+"input-$1")]}),I(t,{props:[f(e,/:(plac\w+)/,":-moz-$1")]}),I(t,{props:[f(e,/:(plac\w+)/,_+"input-$1")]})],i)}return""}))}}],st=function(t){var e=t.key;if("css"===e){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var i=t.stylisPlugins||ot;var r,a,s={},l=[];r=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),n=1;n<e.length;n++)s[e[n]]=!0;l.push(t)}));var c,d,f,u,m=[Z,(u=function(t){c.insert(t)},function(t){t.root||(t=t.return)&&u(t)})],g=(d=[it,rt].concat(i,m),f=h(d),function(t,e,n,i){for(var r="",a=0;a<f;a++)r+=d[a](t,e,n,i)||"";return r});a=function(t,e,n,i){c=n,W(U(t?t+"{"+e.styles+"}":e.styles),g),i&&(p.inserted[e.name]=!0)};var p={key:e,sheet:new o({key:e,container:r,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:a};return p.sheet.hydrate(l),p};function lt(t,e,n){var i="";return n.split(" ").forEach((function(n){void 0!==t[n]?e.push(t[n]+";"):i+=n+" "})),i}var ct=function(t,e,n){var i=t.key+"-"+e.name;!1===n&&void 0===t.registered[i]&&(t.registered[i]=e.styles)},dt=function(t,e,n){ct(t,e,n);var i=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var r=e;do{t.insert(e===r?"."+i:"",r,t.sheet,!0),r=r.next}while(void 0!==r)}};var ft={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ut(t){var e=Object.create(null);return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}var mt=/[A-Z]|^ms/g,gt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pt=function(t){return 45===t.charCodeAt(1)},ht=function(t){return null!=t&&"boolean"!=typeof t},yt=ut((function(t){return pt(t)?t:t.replace(mt,"-$&").toLowerCase()})),vt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(gt,(function(t,e,n){return wt={name:e,styles:n,next:wt},e}))}return 1===ft[t]||pt(t)||"number"!=typeof e||0===e?e:e+"px"};function bt(t,e,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(void 0!==n.styles){var i=n.next;if(void 0!==i)for(;void 0!==i;)wt={name:i.name,styles:i.styles,next:wt},i=i.next;return n.styles+";"}return function(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=bt(t,e,n[r])+";";else for(var a in n){var o=n[a];if("object"!=typeof o)null!=e&&void 0!==e[o]?i+=a+"{"+e[o]+"}":ht(o)&&(i+=yt(a)+":"+vt(a,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=e&&void 0!==e[o[0]]){var s=bt(t,e,o);switch(a){case"animation":case"animationName":i+=yt(a)+":"+s+";";break;default:i+=a+"{"+s+"}"}}else for(var l=0;l<o.length;l++)ht(o[l])&&(i+=yt(a)+":"+vt(a,o[l])+";")}return i}(t,e,n);case"function":if(void 0!==t){var r=wt,a=n(t);return wt=r,bt(t,e,a)}}if(null==e)return n;var o=e[n];return void 0!==o?o:n}var wt,xt=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var St=function(t,e,n){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var i=!0,r="";wt=void 0;var a=t[0];null==a||void 0===a.raw?(i=!1,r+=bt(n,e,a)):r+=a[0];for(var o=1;o<t.length;o++)r+=bt(n,e,t[o]),i&&(r+=a[o]);xt.lastIndex=0;for(var s,l="";null!==(s=xt.exec(r));)l+="-"+s[1];var c=function(t){for(var e,n=0,i=0,r=t.length;r>=4;++i,r-=4)e=1540483477*(65535&(e=255&t.charCodeAt(i)|(255&t.charCodeAt(++i))<<8|(255&t.charCodeAt(++i))<<16|(255&t.charCodeAt(++i))<<24))+(59797*(e>>>16)<<16),n=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(r){case 3:n^=(255&t.charCodeAt(i+2))<<16;case 2:n^=(255&t.charCodeAt(i+1))<<8;case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(i)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(r)+l;return{name:c,styles:r,next:wt}},kt=!!a.useInsertionEffect&&a.useInsertionEffect,Ct=kt||function(t){return t()},It=(kt||r.useLayoutEffect,{}.hasOwnProperty),Ot=r.createContext("undefined"!=typeof HTMLElement?st({key:"css"}):null);Ot.Provider;var Et=function(t){return(0,r.forwardRef)((function(e,n){var i=(0,r.useContext)(Ot);return t(e,i,n)}))};var zt=r.createContext({});var At="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Pt=function(t){var e=t.cache,n=t.serialized,i=t.isStringTag;return ct(e,n,i),Ct((function(){return dt(e,n,i)})),null};var Lt=Et((function(t,e,n){var i=t.css;"string"==typeof i&&void 0!==e.registered[i]&&(i=e.registered[i]);var a=t[At],o=[i],s="";"string"==typeof t.className?s=lt(e.registered,o,t.className):null!=t.className&&(s=t.className+" ");var l=St(o,void 0,r.useContext(zt));s+=e.key+"-"+l.name;var c={};for(var d in t)It.call(t,d)&&"css"!==d&&d!==At&&(c[d]=t[d]);return c.ref=n,c.className=s,r.createElement(r.Fragment,null,r.createElement(Pt,{cache:e,serialized:l,isStringTag:"string"==typeof a}),r.createElement(a,c))})),Tt=(n(434),n(8679),i.Fragment);function Nt(t,e,n){return It.call(e,"css")?i.jsx(Lt,function(t,e){var n={};for(var i in e)It.call(e,i)&&(n[i]=e[i]);return n[At]=t,n}(t,e),n):i.jsx(t,e,n)}function jt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return St(e)}var Mt=function(){var t=jt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Dt=function t(e){for(var n=e.length,i=0,r="";i<n;i++){var a=e[i];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))o=t(a);else for(var s in o="",a)a[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=a}o&&(r&&(r+=" "),r+=o)}}return r};var Rt=function(t){var e=t.cache,n=t.serializedArr;return Ct((function(){for(var t=0;t<n.length;t++)dt(e,n[t],!1)})),null},Vt=Et((function(t,e){var n=[],i=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];var a=St(i,e.registered);return n.push(a),ct(e,a,!1),e.key+"-"+a.name},a={css:i,cx:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t,e,n){var i=[],r=lt(t,i,n);return i.length<2?n:r+e(i)}(e.registered,i,Dt(n))},theme:r.useContext(zt)},o=t.children(a);return!0,r.createElement(r.Fragment,null,r.createElement(Rt,{cache:e,serializedArr:n}),o)}));var $t=Object.defineProperty,_t=(t,e,n)=>(((t,e,n)=>{e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n),Gt=new Map,Yt=new WeakMap,Ft=0,Bt=void 0;function Ht(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(n=t.root,n?(Yt.has(n)||(Ft+=1,Yt.set(n,Ft.toString())),Yt.get(n)):"0"):t[e]}`;var n})).toString()}function Xt(t,e,n={},i=Bt){if(void 0===window.IntersectionObserver&&void 0!==i){const r=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:a,elements:o}=function(t){let e=Ht(t),n=Gt.get(e);if(!n){const i=new Map;let r;const a=new IntersectionObserver((e=>{e.forEach((e=>{var n;const a=e.isIntersecting&&r.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=a),null==(n=i.get(e.target))||n.forEach((t=>{t(a,e)}))}))}),t);r=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:a,elements:i},Gt.set(e,n)}return n}(n);let s=o.get(t)||[];return o.has(t)||o.set(t,s),s.push(e),a.observe(t),function(){s.splice(s.indexOf(e),1),0===s.length&&(o.delete(t),a.unobserve(t)),0===o.size&&(a.disconnect(),Gt.delete(r))}}var Wt=class extends r.Component{constructor(t){super(t),_t(this,"node",null),_t(this,"_unobserveCb",null),_t(this,"handleNode",(t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()})),_t(this,"handleChange",((t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)})),this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:a}=this.props;this._unobserveCb=Xt(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:i,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:c,delay:d,initialInView:f,fallbackInView:u,...m}=this.props;return r.createElement(e||"div",{ref:this.handleNode,...m},t)}};function Zt({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var f;const[u,m]=r.useState(null),g=r.useRef(),[p,h]=r.useState({inView:!!l,entry:void 0});g.current=d,r.useEffect((()=>{if(s||!u)return;let r;return r=Xt(u,((t,e)=>{h({inView:t,entry:e}),g.current&&g.current(t,e),e.isIntersecting&&o&&r&&(r(),r=void 0)}),{root:a,rootMargin:i,threshold:t,trackVisibility:n,delay:e},c),()=>{r&&r()}}),[Array.isArray(t)?t.toString():t,u,a,i,o,s,n,c,e]);const y=null==(f=p.entry)?void 0:f.target,v=r.useRef();u||!y||o||s||v.current===y||(v.current=y,h({inView:!!l,entry:void 0}));const b=[m,p.inView,p.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Ut=n(4954);Mt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Mt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Mt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Mt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Mt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Mt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Mt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Mt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Mt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Mt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Mt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Mt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Mt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const qt=Mt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Kt=Mt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jt=Mt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qt=Mt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,te=Mt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=Mt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=Mt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=Mt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=Mt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=Mt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=Mt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=Mt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=Mt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ce(t,e){return n=>n?t():e()}function de(t){return ce(t,(()=>null))}function fe(t){return de((()=>({opacity:0})))(t)}const ue=t=>{const{cascade:e=!1,damping:n=.5,delay:i=0,duration:a=1e3,fraction:o=0,keyframes:s=ee,triggerOnce:l=!1,className:c,style:d,childClassName:f,childStyle:u,children:m,onVisibilityChange:g}=t,p=(0,r.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:i=ee,iterationCount:r=1}){return jt`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:a})),[a,s]);return null==m?null:"string"==typeof(h=m)||"number"==typeof h||"boolean"==typeof h?Nt(ge,{...t,animationStyles:p,children:String(m)}):(0,Ut.isFragment)(m)?Nt(pe,{...t,animationStyles:p}):Nt(Tt,{children:r.Children.map(m,((s,m)=>{if(!(0,r.isValidElement)(s))return null;const h=i+(e?m*a*n:0);switch(s.type){case"ol":case"ul":return Nt(Vt,{children:({cx:e})=>Nt(s.type,{...s.props,className:e(c,s.props.className),style:Object.assign({},d,s.props.style),children:Nt(ue,{...t,children:s.props.children})})});case"li":return Nt(Wt,{threshold:o,triggerOnce:l,onChange:g,children:({inView:t,ref:e})=>Nt(Vt,{children:({cx:n})=>Nt(s.type,{...s.props,ref:e,className:n(f,s.props.className),css:de((()=>p))(t),style:Object.assign({},u,s.props.style,fe(!t),{animationDelay:h+"ms"})})})});default:return Nt(Wt,{threshold:o,triggerOnce:l,onChange:g,children:({inView:t,ref:e})=>Nt("div",{ref:e,className:c,css:de((()=>p))(t),style:Object.assign({},d,fe(!t),{animationDelay:h+"ms"}),children:Nt(Vt,{children:({cx:t})=>Nt(s.type,{...s.props,className:t(f,s.props.className),style:Object.assign({},u,s.props.style)})})})})}}))});var h},me={display:"inline-block",whiteSpace:"pre"},ge=t=>{const{animationStyles:e,cascade:n=!1,damping:i=.5,delay:r=0,duration:a=1e3,fraction:o=0,triggerOnce:s=!1,className:l,style:c,children:d,onVisibilityChange:f}=t,{ref:u,inView:m}=Zt({triggerOnce:s,threshold:o,onChange:f});return ce((()=>Nt("div",{ref:u,className:l,style:Object.assign({},c,me),children:d.split("").map(((t,n)=>Nt("span",{css:de((()=>e))(m),style:{animationDelay:r+n*a*i+"ms"},children:t},n)))})),(()=>Nt(pe,{...t,children:d})))(n)},pe=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:i=!1,className:r,style:a,children:o,onVisibilityChange:s}=t,{ref:l,inView:c}=Zt({triggerOnce:i,threshold:n,onChange:s});return Nt("div",{ref:l,className:r,css:de((()=>e))(c),style:Object.assign({},a,fe(!c)),children:o})};Mt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Mt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Mt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Mt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Mt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Mt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const he=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ye=Mt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,ve=Mt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,be=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,we=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,xe=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Se=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ke=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ce=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ie=Mt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Oe=Mt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ee=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ze=Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Ae=t=>{const{big:e=!1,direction:n,reverse:i=!1,...a}=t,o=(0,r.useMemo)((()=>function(t,e,n){switch(n){case"bottom-left":return e?ye:Kt;case"bottom-right":return e?ve:Jt;case"down":return t?e?we:te:e?be:Qt;case"left":return t?e?Se:ne:e?xe:ee;case"right":return t?e?Ce:re:e?ke:ie;case"top-left":return e?Ie:ae;case"top-right":return e?Oe:oe;case"up":return t?e?ze:le:e?Ee:se;default:return e?he:qt}}(e,i,n)),[e,n,i]);return Nt(ue,{keyframes:o,...a})};Mt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Mt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Mt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Mt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Mt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Mt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Mt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Mt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Mt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Mt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Mt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Mt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Mt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Mt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Mt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Mt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Mt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Mt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Mt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Mt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Mt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Mt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Mt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Mt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Mt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Mt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Mt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`},2460:function(t){"use strict";t.exports=JSON.parse('{"layout":"fullWidth","images":{"fallback":{"src":"/static/b896a4865e4a676c9d3a098eeb10bdce/644d3/img-03.jpg","srcSet":"/static/b896a4865e4a676c9d3a098eeb10bdce/37bba/img-03.jpg 750w,\\n/static/b896a4865e4a676c9d3a098eeb10bdce/97edb/img-03.jpg 1080w,\\n/static/b896a4865e4a676c9d3a098eeb10bdce/d61e8/img-03.jpg 1366w,\\n/static/b896a4865e4a676c9d3a098eeb10bdce/644d3/img-03.jpg 1848w","sizes":"100vw"},"sources":[{"srcSet":"/static/b896a4865e4a676c9d3a098eeb10bdce/a66aa/img-03.webp 750w,\\n/static/b896a4865e4a676c9d3a098eeb10bdce/2a327/img-03.webp 1080w,\\n/static/b896a4865e4a676c9d3a098eeb10bdce/4fad6/img-03.webp 1366w,\\n/static/b896a4865e4a676c9d3a098eeb10bdce/45b19/img-03.webp 1848w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5622294372294373}')},9305:function(t){"use strict";t.exports=JSON.parse('{"layout":"fullWidth","images":{"fallback":{"src":"/static/545d44a89be6aa9aa95c9193963256f7/3d0f5/img-05.png","srcSet":"/static/545d44a89be6aa9aa95c9193963256f7/0dee1/img-05.png 750w,\\n/static/545d44a89be6aa9aa95c9193963256f7/dc0d4/img-05.png 1080w,\\n/static/545d44a89be6aa9aa95c9193963256f7/d079a/img-05.png 1366w,\\n/static/545d44a89be6aa9aa95c9193963256f7/3d0f5/img-05.png 1848w","sizes":"100vw"},"sources":[{"srcSet":"/static/545d44a89be6aa9aa95c9193963256f7/a66aa/img-05.webp 750w,\\n/static/545d44a89be6aa9aa95c9193963256f7/2a327/img-05.webp 1080w,\\n/static/545d44a89be6aa9aa95c9193963256f7/4fad6/img-05.webp 1366w,\\n/static/545d44a89be6aa9aa95c9193963256f7/45b19/img-05.webp 1848w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5622294372294373}')},3143:function(t){"use strict";t.exports=JSON.parse('{"layout":"fullWidth","images":{"fallback":{"src":"/static/c6155b4fb1cfc5bef92717c2ab0e71d3/644d3/img-10.jpg","srcSet":"/static/c6155b4fb1cfc5bef92717c2ab0e71d3/37bba/img-10.jpg 750w,\\n/static/c6155b4fb1cfc5bef92717c2ab0e71d3/97edb/img-10.jpg 1080w,\\n/static/c6155b4fb1cfc5bef92717c2ab0e71d3/d61e8/img-10.jpg 1366w,\\n/static/c6155b4fb1cfc5bef92717c2ab0e71d3/644d3/img-10.jpg 1848w","sizes":"100vw"},"sources":[{"srcSet":"/static/c6155b4fb1cfc5bef92717c2ab0e71d3/a66aa/img-10.webp 750w,\\n/static/c6155b4fb1cfc5bef92717c2ab0e71d3/2a327/img-10.webp 1080w,\\n/static/c6155b4fb1cfc5bef92717c2ab0e71d3/4fad6/img-10.webp 1366w,\\n/static/c6155b4fb1cfc5bef92717c2ab0e71d3/45b19/img-10.webp 1848w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5622294372294373}')}}]);
//# sourceMappingURL=e8590ed899c39664861b3470f7f1fdb8a93cae01-fdf17869d4f44f05ea8a.js.map