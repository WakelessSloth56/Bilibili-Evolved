!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/sidebar-offset"]=t():e["style/sidebar-offset"]=t()}(globalThis,(()=>(()=>{var e,t,o={435:(e,t,o)=>{var r=o(355)((function(e){return e[1]}));r.push([e.id,".be-settings > .sidebar {\n  top: calc(50% + var(--be-sidebar-offset)) !important;\n}",""]),e.exports=r},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(n[s]=!0)}for(var a=0;a<e.length;a++){var f=[].concat(e[a]);r&&n[f[0]]||(o&&(f[2]?f[2]="".concat(o," and ").concat(f[2]):f[2]=o),t.push(f))}},t}},481:(e,t,o)=>{var r=o(435);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,n.d(i,s),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.settings,o=coreApis.utils,r=(0,e.defineComponentMetadata)({name:"sidebarOffset",displayName:"侧栏垂直偏移",tags:[componentsTags.style],instantStyles:[{name:"sidebarOffset",style:()=>Promise.resolve().then(n.t.bind(n,481,23))}],description:{"zh-CN":"给脚本的侧栏设置垂直偏移量, 范围为 -35% ~ 40%"},entry:e=>{let{metadata:o}=e;(0,t.addComponentListener)(`${o.name}.offset`,(e=>{document.body.style.setProperty("--be-sidebar-offset",`${e}%`)}),!0)},options:{offset:{displayName:"偏移量 (%)",defaultValue:0,validator:(0,o.getNumberValidator)(-35,40)}},commitHash:"39f82df4d51cc9814b7696cb1b7634378199766c",coreVersion:"2.5.2"})})(),i=i.component})()));