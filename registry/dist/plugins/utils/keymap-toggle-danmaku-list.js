!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-danmaku-list"]=t():e["utils/keymap-toggle-danmaku-list"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>o});const a=coreApis.spinQuery,o={name:"keymap.actions.toggleDanmakuList",displayName:"快捷键扩展 - 开关弹幕列表",description:'在快捷键的动作列表里添加一个 "开关弹幕列表".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.toggleDanmakuList={displayName:"开关弹幕列表",prevent:!0,run:async()=>{(await(0,a.select)(".bui-collapse-header"))?.click()}}})),t("keymap.presets",(e=>{e.toggleDanmakuList="shift d"}))},commitHash:"39f82df4d51cc9814b7696cb1b7634378199766c",coreVersion:"2.5.2"};return t=t.plugin})()));