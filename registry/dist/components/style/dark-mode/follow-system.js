!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/dark-mode/follow-system"]=t():e["style/dark-mode/follow-system"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={986:e=>{e.exports=coreApis.settings}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,r),n.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"==typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"==typeof o.then)return o}var n=Object.create(null);r.r(n);var l={};e=e||[null,t({}),t([]),t(t)];for(var c=2&i&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>l[e]=()=>o[e]));return l.default=()=>o,r.d(n,l),n},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.d(n,{component:()=>t});const e=coreApis.lifeCycle,t={name:"darkModeFollowSystem",displayName:"夜间模式跟随系统",entry:()=>{unsafeWindow.addEventListener(e.LifeCycleEventTypes.End,(async()=>{const{getComponentSettings:e}=await Promise.resolve().then(r.t.bind(r,986,23)),t=e("darkMode"),o=matchMedia("(prefers-color-scheme: dark)"),i=e=>{e!==t.enabled&&(t.enabled=e)};i(o.matches),o.addEventListener("change",(e=>{i(e.matches)}))}))},urlExclude:["//member.bilibili.com/v2","//member.bilibili.com/platform","//member.bilibili.com/video/upload.html","//member.bilibili.com/article-text/home","//www.bilibili.com/audio/submit/","//member.bilibili.com/studio/bs-editor/projects","//www.bilibili.com/s/video/","//member.bilibili.com/platform","//live.bilibili.com/p/html/live-lottery/anchor-join.html","//account.bilibili.com/subtitle/edit/#/editor","/york/allowance-charge","//cm.bilibili.com/quests/#/task"],tags:[componentsTags.style,componentsTags.general],description:{"zh-CN":"\n使夜间模式同步系统设置的亮 / 暗主题, 请勿和 `夜间模式计划时段` 一同使用.\n\n> 注：在某些浏览器 (如 `Microsoft Edge`) 中，夜间模式仅会同步浏览器的亮 / 暗主题.\n    ".trim()},commitHash:"39f82df4d51cc9814b7696cb1b7634378199766c",coreVersion:"2.5.2"}})(),n=n.component})()));