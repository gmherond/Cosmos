// ==UserScript==
// @name         Converse Temp Fix
// @namespace    http://tampermonkey.net/
// @version      2026-02-24
// @description  try to take over the world!
// @author       elgustav@
// @match        https://mturk-console-template-preview-hooks.s3.amazonaws.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sagemaker.aws
// @grant        none
// ==/UserScript==

let iframeChecker;

window.addEventListener("load", (event) => {
  iframeChecker = setInterval(checkIframe,100);
});

function checkIframe(){
	let iframes = document.getElementsByTagName("iframe");
	if(iframes.length>0){
		console.log(iframes[0].src);
		if(iframes[0].src.includes("console.prod.converse.ai.a2z.com")){
			let link = iframes[0].src;
			iframes[0].outerHTML = '<a ref="${link}>Converse Link</a>';
		}
	}
}