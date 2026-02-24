// ==UserScript==
// @name         Converse Temp Fix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Opens converse iframe in a different tab
// @author       elgustav@
// @match        https://mturk-console-template-preview-hooks.s3.amazonaws.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sagemaker.aws
// @grant        GM_openInTab
// @sandbox      MAIN_WORLD
// ==/UserScript==

let iframeChecker;

window.addEventListener("load", (event) => {
  iframeChecker = setInterval(checkIframe,100);
});

function checkIframe(){
	let iframes = document.getElementsByTagName("iframe");
	if(iframes.length>0){
		if(iframes[0].src.includes("console.prod.converse.ai.a2z.com")){
			let link = iframes[0].src;
			//console.log(link);
			//GM_openInTab(link);
			let a = document.createElement("a");
			a.innerText = "Converse Link";
			a.href = link;
			a.target = "_blank";
			iframes[0].parentElement.prepend(a);
			iframes[0].remove();
			clearInterval(iframeChecker);
		}
	}
}