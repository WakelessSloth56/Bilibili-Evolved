!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/download/idm-output"]=o():e["video/download/idm-output"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{plugin:()=>a});const t=coreApis.download,n=coreApis.utils.constants,i=coreApis.utils.title,a={name:"downloadVideo.outputs.idm",displayName:"下载视频 - IDM 输出支持",description:"为下载视频增加 IDM 输出支持.",setup:e=>{let{addData:o}=e;o("downloadVideo.outputs",(e=>{e.push({name:"idm",displayName:"IDM",description:"使用 IDM 的 .ef2 格式导出, 可以在 IDM 中使用导入开始下载.",runAction:async e=>{const{infos:o}=e,a=document.URL.replace(window.location.search,""),d=o.map((e=>e.titledFragments.map((e=>`<\n${e.url}\nreferer: ${a}\nUser-Agent: ${n.UserAgent}\nfilename: ${e.title}\n>`.trim())))).flat().concat("").join("\n").replace(/([^\r])\n/g,"$1\r\n");await t.DownloadPackage.single(`${(0,i.getFriendlyTitle)()}.ef2`,d)}})}))},commitHash:"c5a6335fcba262142c0d7f2c585037a9caeb833d",coreVersion:"2.8.7"};return o=o.plugin})()));