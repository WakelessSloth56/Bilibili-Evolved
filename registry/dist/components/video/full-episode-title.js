!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/full-episode-title"]=t():e["video/full-episode-title"]=t()}(globalThis,(()=>(()=>{var e,t,i={402:(e,t,i)=>{var o=i(355)((function(e){return e[1]}));o.push([e.id,"body.full-episode-title .base-video-sections-v1 .video-episode-card {\n  height: auto !important;\n}\nbody.full-episode-title .base-video-sections-v1 .video-episode-card .cur-play-icon {\n  margin-right: 6px;\n}\nbody.full-episode-title .base-video-sections-v1 .video-episode-card__info {\n  height: auto !important;\n}\nbody.full-episode-title .base-video-sections-v1 .video-episode-card__info-title {\n  padding: 4px 0 !important;\n  width: auto !important;\n  max-height: unset !important;\n  height: auto !important;\n  white-space: normal !important;\n  line-height: 1.5 !important;\n}\nbody.full-episode-title .multi-page-v1 .cur-list li,\nbody.full-episode-title .multi-page .cur-list li {\n  height: auto !important;\n}\nbody.full-episode-title .multi-page-v1 .cur-list li a,\nbody.full-episode-title .multi-page .cur-list li a {\n  overflow: visible !important;\n  white-space: normal !important;\n}\nbody.full-episode-title .multi-page-v1 .cur-list li .part,\nbody.full-episode-title .multi-page .cur-list li .part {\n  padding: 4px 0 !important;\n  line-height: 1.75 !important;\n}\nbody.full-episode-title .multi-page-v1 .cur-list li .duration,\nbody.full-episode-title .multi-page .cur-list li .duration {\n  align-self: center !important;\n}\nbody.full-episode-list:not(.disable-full-episode-list) .video-sections-content-list {\n  max-height: unset !important;\n  height: auto !important;\n}\nbody.full-episode-list:not(.disable-full-episode-list) .video-sections-content-list .video-section-list {\n  height: auto !important;\n}\nbody.full-episode-list:not(.disable-full-episode-list) .multi-page-v1 .head-left h3,\nbody.full-episode-list:not(.disable-full-episode-list) .multi-page .head-left h3 {\n  cursor: pointer;\n}\nbody.full-episode-list:not(.disable-full-episode-list) .multi-page-v1 .cur-list,\nbody.full-episode-list:not(.disable-full-episode-list) .multi-page .cur-list {\n  max-height: unset !important;\n}\nbody.full-episode-list:not(.disable-full-episode-list) .multi-page-v1 .cur-list ul,\nbody.full-episode-list:not(.disable-full-episode-list) .multi-page .cur-list ul {\n  max-height: unset !important;\n}",""]),e.exports=o},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,i,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(o)for(var l=0;l<this.length;l++){
// eslint-disable-next-line prefer-destructuring
var s=this[l][0];null!=s&&(n[s]=!0)}for(var r=0;r<e.length;r++){var a=[].concat(e[r]);o&&n[a[0]]||(i&&(a[2]?a[2]="".concat(i," and ").concat(a[2]):a[2]=i),t.push(a))}},t}},825:(e,t,i)=>{var o=i(402);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},365:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=365,e.exports=t},393:e=>{"use strict";e.exports="提供一些视频选集区域的优化, 对番剧无效.\r\n- `展开选集标题`: 总是完全展开视频选集列表项的标题\r\n- `展开选集列表`: 总是完全展开视频选集列表\r\n\r\n打开 `展开选集列表` 时, 在选集区域的标题上按住 <kbd>Alt</kbd> 键点击可以临时切换展开/收起选集列表.\r\n"}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var l=o[e]={id:e,exports:{}};return i[e](l,l.exports,n),l.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"==typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"==typeof i.then)return i}var l=Object.create(null);n.r(l);var s={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&i;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>s[e]=()=>i[e]));return s.default=()=>i,n.d(l,s),l},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";n.d(l,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.utils.urls,i=coreApis.settings,o=coreApis.spinQuery,s="fullEpisodeTitle",r=(0,e.defineComponentMetadata)({name:s,instantStyles:[{name:s,style:()=>Promise.resolve().then(n.t.bind(n,825,23))}],options:{fullEpisodeTitle:{defaultValue:!0,displayName:"展开选集标题"},fullEpisodeList:{defaultValue:!0,displayName:"展开选集列表"}},entry:e=>{let{metadata:{options:t}}=e;Object.keys(t).forEach((e=>{(0,i.addComponentListener)(`fullEpisodeTitle.${e}`,(t=>{document.body.classList.toggle(lodash.kebabCase(e),t)}),!0)})),t.fullEpisodeList&&Promise.race([(0,o.select)(".multi-page-v1 .head-left h3"),(0,o.select)(".base-video-sections-v1 .first-line-title")]).then((e=>{e.addEventListener("click",(e=>{e.altKey&&0===e.button&&(document.body.classList.toggle("disable-full-episode-list"),e.preventDefault(),e.stopImmediatePropagation())}),{capture:!0})}))},displayName:"选集区域优化",tags:[componentsTags.video],urlInclude:t.videoUrls,commitHash:"39f82df4d51cc9814b7696cb1b7634378199766c",coreVersion:"2.5.2",description:(()=>{const e=n(365);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,393,17)).then((e=>e.default))}})()})})(),l=l.component})()));