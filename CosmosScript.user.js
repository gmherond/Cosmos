// ==UserScript==
// @name         Cosmos
// @namespace    https://cw-dashboards.aka.amazon.com/cloudwatch/dashboardInternal?accountId=753462827423
// @version      1.2.4
// @description  Custom tool that displays the dashboard info of all the Sagemaker jobs you've worked on throughout the day.
// @author       elgustav@
// @match        https://cw-dashboards.aka.amazon.com/cloudwatch/dashboardInternal?accountId=753462827423*
// @icon         https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Cosmos%20icon%20only.svg
// @grant        none
// @downloadURL  https://github.com/gmherond/Cosmos/raw/refs/heads/main/CosmosScript.user.js
// @updateURL    https://github.com/gmherond/Cosmos/raw/refs/heads/main/CosmosScript.user.js
// @sandbox      MAIN_WORLD
// ==/UserScript==

/*
-----------------------------------------------------------------------------------------------------------------------
Changelog 1.2.4 11/18/2025
-Fixed a bug where data wouldn't load if there are no time points for a specific job.
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
Changelog 1.2.2 08/28/2025
-Added option to display time either in a decimal format or a standard HH:MM:SS format.
-Bandwidth will always be displayed in hour units if decimal format is selected.
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
Changelog 1.2.0 04/08/2025
-Added a Categories option in the settings section. This option lets you group batches that match the same filter words.
-Added a Source code section to alternatively check/update the filtering categories source code.
-Batches that are inside a filtered group will be shown inside a new container.
-Rewrote the stars background code to make it more optimized.(average page memory usage lowered ~100mb).
-Replaced all Material Icons with icons made by me.
-Replaced some images's base64 encoding with their source in the github repo to lower the size of the script file.
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
Changelog 1.0.1 03/21/2025
-Fixed an error where the UI would freeze if an uuidList was generated before the login in localStorage.
-Added a loading icon so that the user can know if the dashboard is currently loading.
-The interval that checks whether there are dashboards loading also made the display of information way faster as a side effect.
-----------------------------------------------------------------------------------------------------------------------
*/

//to do:
//add option for user to change the time range

let style= `

:root{
    color-scheme: dark;
    font-size:10px;
}

#cwdb-container, #cwdb-container > *{
    zoom:0.1%;
    opacity:0;
    transform:scale(0.1);
}

html, body{
    margin:0;
    padding:0;
}

body{
    background: #090a13;
    background: rgb(9,8,23);
    background: linear-gradient(21deg, rgba(9,8,23,1) 0%, rgba(22,3,45,1) 32%, rgba(3,11,33,1) 65%, rgba(9,1,19,1) 96%);
    display:flex;
    justify-content:center;
    z-index:-2;
}

#cosmos-container{
    display:flex;
	align-items:center;
	flex-direction:column;
}

#cosmos-container > * {
    z-index:2;
}

#cosmos-logo{
    width:32rem;
    height:10rem;
    position:fixed;
    top:0rem;
    left:0rem;
}

* {
    color:white;
    font-family: "Inter", serif !important;
}

#cosmos-content{
	display:flex;
	align-items:center;
	flex-direction:column;
}

#cosmos-summary{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: #000617d0;
    border-radius: 0rem 0rem 5rem 5rem;
    width:50rem;
    height:13rem;
    position:fixed;
    z-index:3;
}

#cosmos-summary-title{
    margin: 1.5rem;
}

#cosmos-batches{
    margin-top:13rem;
    width:52rem;
}

.cosmos-job{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:50rem;
    border-radius:3rem;
    background-color: #000617d0;
    margin-top:1rem;
    min-height:9rem;
    z-index:2;
    transition:0.8s height ease-in-out;
}

#cosmos-summary-values, .cosmos-job-values, .cosmos-group-values{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    border-top: 1px solid;
    width:65%;
}

.cosmos-group-summary{
	cursor:pointer;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	width:100%;
}

.cosmos-summary-value {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
    width: 12rem;
    font-size: 1.75rem;
    margin-top: 1rem;
}

.cosmos-job:hover > .cosmos-job-expanded{
    display:block;
}

.cosmos-job-expanded{
    display:none;
}

.cosmos-job-title{
    margin:1rem;
    text-align:center;
}

.cosmos-job-total-time, .cosmos-job-average-handle-time, .cosmos-job-processed-tasks{
    font-weight:600;
    font-size:1.6rem;
}

.cosmos-job-icon{
    width:2rem;
    height:2rem;
    position:absolute;
    margin-right:45rem;
    scale: (1,0.8);
}

.cosmos-job-value{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0rem;
    width:33%;
}

.cosmos-summary-label{
    font-weight:600;
    margin-bottom:0.5rem;
}

#cosmos-sidebar {
    position: fixed;
    right: 0rem;
    width: 35rem;
    height: 100%;
    background-color: #000617d0;
    border-radius: 2rem 0rem 0rem 2rem;
    display:flex;
    justify-content:left;
    align-items:center;
    flex-direction:column;
    gap:1rem;
    z-index:2;
	overflow-y:scroll;
}

#cosmos-sidebar-title{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    border-bottom:1px solid white;
    width:80%;
    padding:1rem;
	margin:0.5rem;
}

.cosmos-sidebar-button{
    padding: 0.4rem 1rem;
    border-radius: 5rem;
    border: 2px solid #ffffffaa;
    background-color: #2f0080;
    cursor:pointer;
    transition: 0.3s background-color ease-in-out;
	margin:0.5rem 0rem;
}

.cosmos-sidebar-button:hover{
    background-color:#470fa6;
}

.cosmos-sidebar-details, .cosmos-sidebar-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	width:100%;
}

.cosmos-sidebar-details-summary{
    user-select: none;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 10rem;
    padding: 0.5rem;
    text-align: center;
}

.cosmos-sidebar-details-settings {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

#cosmos-sidebar input, #cosmos-sidebar select {
    border: none;
    padding: 0.5rem;
    text-align: center;
    border-radius: 10rem;
    background-color: #00000099;
    margin: 0.5rem 0rem;
    border:2px solid #ffffffaa;
}

#cosmos-canvas{
    position:fixed;
    width:100%;
    height:100%;
    padding:0;
    margin:0;
}

#cosmos-cosmic-eye{
    position:fixed;
    bottom:5rem;
    left:5rem;
    width:17rem;
    height:17rem;
    opacity:0.75;
    rotate:-10deg;
}

#cosmos-pisces-constellation{
    position:fixed;
    top:10rem;
    rotate:-40deg;
    width:20rem;
    height:20rem;
    right:23%;
    opacity:0.7;
}

#cosmos-ursa-major-minor-constellation {
    position: fixed;
    bottom: 25rem;
    rotate: 328deg;
    width: 25rem;
    height: 25rem;
    left: 15%;
    opacity: 0.7;
}

#cosmos-sus-mogus-constellation{
    position:fixed;
    bottom:2rem;
    rotate:-40deg;
    width:10rem;
    height:10rem;
    right:7%;
    opacity:0.6;
}

#cosmos-black-hole{
    position:fixed;
    right:49%;
    bottom:10%;
    width:3rem;
    height:3rem;
}

#cosmos-blood-moon{
    position:fixed;
    right:38rem;
    top:3%;
    width:2rem;
    height:2rem;
}

.hidden{
    display:none !important;
}

.flex-center,.flex-center-column{
    display:flex;
    justify-content:center;
    align-items:center;
}

.flex-center-column{
	flex-direction:column;
}

#cosmos-sort-button{
    margin:0rem 0.5rem;
    border:2px solid #ffffffaa;
    border-radius:10rem;
    background-color:#2f0080;
    width:3rem;
    height:3rem;
    padding:0.45rem;
    cursor:pointer;
	position: absolute;
    left: 6.7rem;
    transition:background-color 0.3s ease-in-out;
}

#cosmos-sort-button:hover{
    background-color:#470fa6;
}

#cosmos-sort-button > svg{
    transform:scaleX(0.9);
}

#cosmos-sort-button[ascending]{
    transform: scaleY(-1);
}

#cosmos-loading-message{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:fixed;
    bottom:50%;
    top:50%;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
#cosmos-loading-icon {
    width:20rem;
    height:20rem;
    -webkit-animation: rotating 3s linear infinite;
    -moz-animation: rotating 3s linear infinite;
    -ms-animation: rotating 3s linear infinite;
    -o-animation: rotating 3s linear infinite;
    animation: rotating 3s linear infinite;
}

#cosmos-loading-text{
    margin-top:1rem;
    font-size:1.75rem;
    width:30rem;
    text-align:center;
}

#cosmos-loading-text-2{
	margin-top:1rem;
    font-size:1.25rem;
    width:30rem;
    text-align:center;
	color:#ffffffaa !important;
}

.cosmos-group{
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	background-color:#030020aa;
	margin:1rem 0rem;
	border-radius:4rem;
	padding-bottom:2rem;
	width:52rem;
}

.cosmos-group-summary{
	user-select: none;
	border-radius:3rem;
}
.cosmos-group-summary > label{
	user-select: text;
}
.cosmos-group-show-batches-label{
	color:#ffffffaa;
	font-size:1.25rem;
}

#cosmos-no-batches-message{
	font-size:1.5rem;
}

#cosmos-source-code-container{
	width:100%;
}

#cosmos-source-code-textarea{
    width: 60%;
    border-radius: 2rem 0.5rem 0.5rem 2rem;
    height: 25rem;
    margin: 0.5rem 0rem;
    padding: 1rem;
	border: 2px solid #ffffffaa;
    background-color: black;
	cursor:text;
	resize:none;
}

#cosmos-order-by-select{
	width:19.8rem;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 0.4rem;
  background-color:#262626;
  border:2px solid #30303099;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #525252;
  border-radius: 0.4rem;
  transition: background-color 0.5s ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #616162;
}

.cosmos-category {
    background-color: #0e0021b0;
    margin: 0.5rem 0rem;
    border-radius: 1.7rem 1.7rem 2rem 2rem;
    padding: 0;
    border: 2px solid #ffffffaa;
	padding-bottom:0.25rem;
}

input.cosmos-category-input-filter {
    width: 70%;
    background-color: #100337 !important;
    border: 1.5px solid #ffffffaa !important;
}

input.cosmos-category-input-title {
    margin: -2px -1px 0.5rem -1px !important;
    background-color: #322082ad !important;
    cursor: text;
}

#enterprise-access-plugin-display > div{
	background-color:#0f0328de !important;
	border-radius: 0rem 0rem 2rem 2rem;
}

#enterprise-access-plugin-display > div > div:nth-child(1){
	background-color: #4e40b9 !important;
    text-align: center !important;
    border-radius: 2rem;
}

#enterprise-access-plugin-btn{
	background-color: #4e70ff !important;
	border-radius: 5rem;
}

#cosmos-settings-icon{
	width:3.5rem;
	height:3.5rem;
}

.cosmos-category-filter-delete{
	background-color:#961C3F;
	border-radius:10rem;
	border:1.5px solid #ffffffaa;
    height: 2.8rem;
    width: 2.8rem;
    position: absolute;
    right: 9.2rem;
	cursor:pointer;
}

#cosmos-view-source, #cosmos-update-source-button{
	background-color:#0a4772;
}

.cosmos-category-filter-delete > img {
	width:2.8rem;
	height:2.8rem;
}

.cosmos-category-display-toggle, .cosmos-category-delete{
    height: 3rem;
    width: 5rem;
	border:2px solid #ffffffaa;
	transition:0.3s background-color ease-in-out;
	cursor:pointer;
}

.cosmos-category-display-toggle{
	border-radius:10rem 0rem 0rem 10rem;
	background-color: #4858c8;
	border-right:0px;
}

.cosmos-category-display-toggle[displayed="false"]{
	background-color:#051626;
}

.cosmos-category-display-toggle[displayed="false"]:hover{
	background-color:#0c2d4c;
}

.cosmos-category-display-toggle[displayed="false"] > img{
	transform: scaleX(0.97) translateY(1px);
}

.cosmos-category-display-toggle:hover{
	background-color: #5262d6;
}

.cosmos-category-display-toggle > img{
	width:3rem;
	height:2.65rem;
	transform: scaleX(0.97);
}

.cosmos-category-delete{
    background-color: #8f0a76;
    border-radius: 0rem 10rem 10rem 0rem;
	border-left:0px;
}

.cosmos-category-filters {
    margin-bottom: 0.5rem;
}

.cosmos-category-delete:hover{
	background-color: #a50f89;
}

.cosmos-category-delete > img{
	height:3rem;
	width:3rem;
}

.cosmos-category-add-filter{
	border-radius:0rem;
	height:3rem;
}

.cosmos-category-expand{
	background: transparent;
    border: none;
    width: 90%;
    border-radius: 10rem;
    cursor: pointer;
    height: 1.5rem;

}

.cosmos-category-expand:hover > img{
	fill:#ffffff;
}

.cosmos-category-expand > img{
	width:2rem;
	height:2rem;
	fill:#ffffffaa;
	transition:0.2s background-color ease-in-out;
}

.cosmos-category:has(.cosmos-category-expand[expanded="false"]) > .cosmos-category-content{
	display:none;
}

.cosmos-category-expand[expanded="true"] > img{
	transform:rotate(180deg) translateY(1px);
}

.cosmos-dotted-bottom-border{
	border-bottom: 1.5px #ffffff55 dotted;
    width: 50%;
    text-align: center;
    padding-bottom: 0.1rem;
}

#cosmos-sort-icon{
	width:1.5rem;
	height:1.5rem;
	transform: scaleX(0.9);
}

.cosmos-time-format[selected="0"]{
	background-color:gray;
}
`;

let favicon = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Cosmos%20icon%20only.svg" sizes="any" type="image/svg+xml">
`;

let CosmosUIHTML;
let styleElement = document.createElement("style");
let userUUID;
let initInterval;

let CosmosContainer = document.createElement("div");

let totalTimeList = [];
let processedTaskList = [];
let averageHandleTimeList = [];
let timePointLabels = [];

let loading = false;

let checkChartsInterval;
let getDataInterval;
let canvasInterval;
let loadingCheckInterval;
let startedLoading=false;

let categoryUpdateTimeout;

let canvas;
let context;

let stars = [];
let starCount = 0;
let starInterval;

if(location.href == "https://cw-dashboards.aka.amazon.com/cloudwatch/dashboardInternal?accountId=753462827423"){
	cosmosInit();
}
else{
	let floatingButtonStyle = `
        :root{
            font-size:10px;
        }
        #cosmos-redirect{
            position:fixed;
            left:3rem;
            bottom:3rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            border-radius:10rem;
            width:11rem;
            height:4rem;
            z-index:10;
            gap:0.5rem;
            cursor:pointer;
            text-decoration:none;
            padding:1rem;
            background-color:black;
            transition:background-color 0.3s ease-in-out;
        }

        #cosmos-redirect:hover{
            background-color:#220b54;
        }

        #cosmos-redirect-text{
            font-weight:600;
            color:white;
            font-size:1.6rem;
            font-family: Consolas,monaco,monospace;
            width:6rem;
        }

        #cosmos-redirect-icon{
            width:4rem;
            height:4rem;
            background-color:#40237f;
            border-radius:10rem;
        }
    `;
	let floatingButton = `
        <a id="cosmos-redirect" href="https://cw-dashboards.aka.amazon.com/cloudwatch/dashboardInternal?accountId=753462827423">
            <img id="cosmos-redirect-icon" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Cosmos%20icon%20only.svg"></img>
            <span id="cosmos-redirect-text">Go to Cosmos</span>
        </a>
    `;

	let floatingDiv = document.createElement("div");
	let floatingStyle = document.createElement("style");
	floatingDiv.innerHTML = floatingButton;
	floatingStyle.innerHTML = floatingButtonStyle;

	document.head.append(floatingStyle);
	document.body.parentElement.append(floatingDiv);
}

function cosmosInit(){
	styleElement.innerHTML=style;
	document.head.append(styleElement);
	document.head.innerHTML+=favicon;

	if(getItem("isDescending")==null){
		setItem("isDescending",true);
	}

	if(getItem("orderBy")==null){
		setItem("orderBy","default");
	}

	if(getItem("groups")==null){
		setItem("groups",[]);
	}

	if(getItem("timeFormat")==null){
		setItem("timeFormat",0);
	}

	let login;
	if(!getItem("login")){

		try{
			let awsSignCookie = JSON.parse(document.cookie.split(";").find((c)=>c.startsWith(" aws-userInfo=")).replaceAll("%25","%").replaceAll("%22",'"').replaceAll("%2F","/").replaceAll("%3A",":").replaceAll("%2C",",").replaceAll("%7B","{").replaceAll("%7D","}").trim().replace("aws-userInfo=",""));
			login = awsSignCookie.username.replace("assumed-role/quicksight-midway/","");
		}
		catch(e){
			console.log(e);
			login = prompt("Please enter your login username here:");
			login = login.trim();
		}
	}
	else{
		login = getItem("login");
	}

	if(getItem("uuidList")){
		userUUID = getItem("uuidList").find((u)=>u.login==login);
		if(!userUUID){
			showNoUUID_UI(login);
		}
		else{
			userUUID = userUUID.UUID;
			if(!getItem("login")){
				setItem("login",login);
			}
		}
		declareHTML();
		displayDashboard();
		initInterval = setInterval(initFunction,100);
	}
	else{
		fetch("https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/workerTable.json")
			.then((response) => response.text())
			.then((result) => {
			let uuidList = JSON.parse(result);
			userUUID = uuidList.find((u)=>u.login==login);
			if(userUUID){
				setItem("login",login);
				userUUID = userUUID.UUID;
				setItem("uuidList",uuidList);
				declareHTML();
				displayDashboard();
				initInterval = setInterval(initFunction,100);
			}
			else{
				showNoUUID_UI(login);
			}

		}).catch((error) => console.error(error));
	}
}

function initFunction(){
	if(Array.from(document.getElementsByTagName("button")).find((e)=>e.title=="Refresh interval")){

		addEventListener("resize", (event) => {
			context.canvas.width = window.innerWidth;
			context.canvas.height = window.innerHeight;
			drawBackground();

		});

		checkChartsInterval = setInterval(checkCharts,1);

		//Refresh interval
		Array.from(document.getElementsByTagName("button")).find((e)=>e.title=="Refresh interval").click();
		//10 seconds
		Array.from(document.getElementsByTagName("span")).find((e)=>e.innerText=="10 seconds").click();
		document.title = "Cosmos";
		CosmosContainer.innerHTML = CosmosUIHTML;
		CosmosContainer.id="cosmos-container";
		document.body.append(CosmosContainer);
		getDataInterval = setInterval(getData,10000);
		canvas = document.getElementById("cosmos-canvas");
		context = canvas.getContext("2d");
		context.canvas.width = window.innerWidth;
		context.canvas.height = window.innerHeight;
		drawBackground();
		document.getElementById("cosmos-sort-button").addEventListener("click",()=>{
			let isDescending = getItem("isDescending");

			if(isDescending==false){
				isDescending = true;
				document.getElementById("cosmos-sort-button").removeAttribute("ascending");
				document.getElementById("cosmos-sort-button").setAttribute("descending","");
			}
			else if(isDescending==true){
				isDescending = false;
				document.getElementById("cosmos-sort-button").removeAttribute("descending");
				document.getElementById("cosmos-sort-button").setAttribute("ascending","");
			}
			else{
				isDescending = true;
				document.getElementById("cosmos-sort-button").removeAttribute("descending");
				document.getElementById("cosmos-sort-button").setAttribute("ascending","");
			}
			setItem("isDescending",isDescending);
			getData();
		});

		document.getElementById("cosmos-update-login").addEventListener("click",()=>{
			let newLogin = document.getElementById("cosmos-sidebar-login").value;
			setItem("login",newLogin);
			userUUID = getItem("uuidList").find((u)=>u.login==newLogin).UUID;
			document.getElementById("cosmos-sidebar-workerId").value = userUUID;
			displayDashboard();
		});

		document.getElementById("cosmos-update-workerId").addEventListener("click",()=>{
			let newUUID = document.getElementById("cosmos-sidebar-workerId").value;
			let uuidList = getItem("uuidList");
			uuidList.find((u)=>u.login==getItem("login")).UUID=newUUID;
			setItem("uuidList",uuidList);
			userUUID = newUUID;
			displayDashboard();
		});

		document.getElementById("cosmos-decimal-time-button").addEventListener("click",()=>{
			setItem("timeFormat",0);
			document.getElementById("cosmos-decimal-time-button").setAttribute("selected",1);
			document.getElementById("cosmos-standard-time-button").setAttribute("selected",0);
			displayData();
		});

		document.getElementById("cosmos-standard-time-button").addEventListener("click",()=>{
			setItem("timeFormat",1);
			document.getElementById("cosmos-decimal-time-button").setAttribute("selected",0);
			document.getElementById("cosmos-standard-time-button").setAttribute("selected",1);
			displayData();
		});

		document.getElementById("cosmos-view-source").addEventListener("click",()=>{
			let sourceContainer = document.getElementById("cosmos-source-code-container");
			if(sourceContainer.className=="flex-center-column"){
				sourceContainer.className="flex-center-column hidden";
				document.getElementById("cosmos-view-source").innerText="View Source";
			}
			else{
				sourceContainer.className="flex-center-column";
				document.getElementById("cosmos-view-source").innerText="Hide Source";
			}
		});

		document.getElementById("cosmos-update-source-button").addEventListener("click",()=>{
			try{
				let parsedCode = JSON.parse(document.getElementById("cosmos-source-code-textarea").value)
				setItem("groups",parsedCode);
				makeElementGreen(document.getElementById("cosmos-update-source-button"));
				displayCategories();
			}
			catch(e){
				alert(`The JSON syntax is wrong. Please fix it in order to save these changes. Error: ${e.name} Description: ${e.message}`);
				makeElementRed(document.getElementById("cosmos-update-source-button"));
			}
		});

		document.getElementById("cosmos-order-by-select").addEventListener("change",()=>{
			setItem("orderBy",document.getElementById("cosmos-order-by-select").value);
			getData();
		});

		document.getElementById("cosmos-add-category-button").addEventListener("click",createCategory);
		updateCategoriesSource();
		displayCategories();

		clearInterval(initInterval);
		fetchWorkerIds();
	}
}

function checkCharts(){
	if(document.getElementsByClassName("cwdb-loader").length>0){
		loading = true;
	}
	else{
		if(loading==true){
			clearInterval(checkChartsInterval);
		}
	}
}

function setTimePointLabels(){
	timePointLabels = [];
	let labels = document.getElementsByTagName("thead")[2].children[0].children;
	for(let i=6; i<labels.length;i++){
		let splitLabel = labels[i].innerText.split("\n");
		timePointLabels.push({date:splitLabel[0],time:splitLabel[1]});
	}
}

function getData(){
	if(document.title!="Cosmos"){
		document.title = "Cosmos";
	}

	if(Array.from(document.getElementsByTagName("div")).filter((e)=>e.innerText.startsWith("TT")).length>0){
		let TTElements = Array.from(document.getElementsByTagName("div")).filter((e)=>e.innerText.startsWith("TT"));

		totalTimeList = TTElements.map((e)=>{
			let labelingJob = e.innerText.replace("TT ","");
			let value = e.parentElement.parentElement.children[4].children[0].children[0].title;
			let timePoints = [];
			for(let i=6;i<e.parentElement.parentElement.children.length;i++){
				timePoints.push(e.parentElement.parentElement.children[i].children[0].children[0].title);
			}
			return {labelingJob,value,timePoints};
		});

	}
	if(Array.from(document.getElementsByTagName("div")).filter((e)=>e.innerText.startsWith("PT")).length>0){
		let PTElements = Array.from(document.getElementsByTagName("div")).filter((e)=>e.innerText.startsWith("PT"));

		processedTaskList = PTElements.map((e)=>{
			let labelingJob = e.innerText.replace("PT ","");
			let value = e.parentElement.parentElement.children[4].children[0].children[0].title;
			return {labelingJob,value};
		});
	}
	if(Array.from(document.getElementsByClassName("cwdb-single-value-section")).filter((e)=>e.innerText.includes("AHT ")).length>0){

		let AHTElements = Array.from(document.getElementsByClassName("cwdb-single-value-section")).filter((e)=>e.innerText.includes("AHT "));

		averageHandleTimeList = AHTElements.map((e)=>{
			let splitValues = e.innerText.split("\n");
			if(splitValues.length==2){
				let labelingJob = splitValues[1].replace("AHT ","");
				let value = splitValues[0];
				return {labelingJob,value};
			}
			else if(splitValues.length==3){
				let labelingJob = splitValues[2].replace("AHT ","");
				let value = splitValues[0];
				if(splitValues[1]=="k"){
					value = value*1000;
				}
				return {labelingJob,value};
			}

		});
	}
	setTimePointLabels();
	displayData();
}

function orderLabelingJobs(){
	let labelingJobs = [];
	for(let i=0;i<totalTimeList.length;i++){
		let ttElement = totalTimeList[i];
		let tt = ttElement.value;
		let timePoints = ttElement.timePoints;
		if(tt>0){
			let pt = 0;
			let aht = 0;

			if(processedTaskList.find((e)=>e.labelingJob==ttElement.labelingJob)){
				pt = processedTaskList.find((e)=>e.labelingJob==ttElement.labelingJob).value;
			}
			if(averageHandleTimeList.find((e)=>e.labelingJob==ttElement.labelingJob)){
				aht = averageHandleTimeList.find((e)=>e.labelingJob==ttElement.labelingJob).value;
			}
			let labelingJob = {jobName:ttElement.labelingJob,totalTime:tt,processedTasks:pt,averageHandleTime:aht,timePoints};
			labelingJobs.push(labelingJob);
		}
	}

	let orderBy = document.getElementById("cosmos-order-by-select");

	switch(orderBy.value){
		case "recent":
			labelingJobs.sort(sortRecent);
			break;
		case "throughput":
			labelingJobs.sort((a,b)=>b.processedTasks-a.processedTasks);
			break;
		case "bandwidth":
			labelingJobs.sort((a,b)=>b.totalTime-a.totalTime);
			break;
		case "aht":
			labelingJobs.sort((a,b)=>b.averageHandleTime-a.averageHandleTime);
			break;
	}
	if(getItem("isDescending")==false){
		labelingJobs.reverse();
	}
	return labelingJobs;
}

function sortRecent(a,b){
	for(let i=0;i<a.timePoints.length;i++){
		let timePointA = a.timePoints[i];
		let timePointB = b.timePoints[i];
		if(timePointA=="null"){
			if(timePointB!="null"){
				return 1;
			}
		}
		if(timePointB=="null"){
			if(timePointA!="null"){
				return -1;
			}
		}
		if((timePointA!="null")&&(timePointB!="null")){
			let valueA = Number(timePointA);
			let valueB = Number(timePointB);
			if(valueA>valueB){
				return 1;
			}
			else if(valueA<valueB){
				return -1;
			}
			else return 0;
		}
	}
}

function groupLabelingJobs(labelingJobs){
	let categories = getItem("groups");

	let groups = [];

	categories.map((g)=>{
		let groupedJobs = [];
		for(let i=0;i<labelingJobs.length;i++){
			let labelingJob = labelingJobs[i];
			let jobName = labelingJob.jobName.split("/")[1];
			let includesAllFilters = true;
			if(!g.filters){
				includesAllFilters=false;
			}
			else{
				if(g.filters.length>0){
					for(let f=0;f<g.filters.length;f++){
						let filter = g.filters[f];
						if(filter.searchTerm==""){
							if(g.filters.length==1){
								includesAllFilters=false;
								break;
							}
						}
						if(!jobName.includes(filter.searchTerm)){
							includesAllFilters=false;
							break;
						}
					}
				}
			}
			if(includesAllFilters){
				let filteredJob = labelingJobs.splice(i,1)[0];
				i--;
				groupedJobs.push(filteredJob);
			}
		}
		let group = {
			label:g.label,
			display:g.display,
			opened:g.opened,
			labelingJobs:groupedJobs
		}
		groups.push(group);
	});

	let unfilteredGroup = {
		label:"jobs-not-grouped-0",
		display:true,
		opened:true,
		labelingJobs
	}
	groups.push(unfilteredGroup);

	return groups;
}

function displayData(){
	let labelingJobs = orderLabelingJobs();
	let groups = groupLabelingJobs(labelingJobs);
	displayLabelingJobs(groups);
	displayTotal();
}

function displayLabelingJobs(groups){
	let groupsHTML = "";
	let groupCount = 0;
	let groupIndex = 0;
	groups.map((group)=>{
		if((group.display==true)&&(group.labelingJobs.length>0)){
			let batches = "";
			group.labelingJobs.map((labelingJob)=>{
				batches+=`
				<div class="cosmos-job">
					<img class="cosmos-job-icon" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Star%20Icon.svg"></img>

                	<h3 class="cosmos-job-title">${labelingJob.jobName.split("/")[1]}</h3>
					<div class="cosmos-job-values">
                    	<div class="cosmos-job-value">
                        	<label class="cosmos-job-label">Bandwidth</label>
                        	<span class="cosmos-job-total-time">${formatBandwidth(labelingJob.totalTime)}</span>
                    	</div>
                    	<div class="cosmos-job-value">
                    	    <label class="cosmos-job-label">Throughput</label>
                   	     <span class="cosmos-job-processed-tasks">${labelingJob.processedTasks}</span>
                    	</div>
						<div class="cosmos-job-value">
                        	<label class="cosmos-job-label">AHT</label>
                        	<span class="cosmos-job-average-handle-time">${formatAHT(labelingJob.averageHandleTime)}</span>
                    	</div>
                	</div>
                	<div class="cosmos-job-expanded">
                    	<div class="cosmos-job-expanded-section">
                        	${displayJobTimeframe(labelingJob.timePoints)}
                    	</div>
                	</div>
           		</div>
				`;
			});
			if(group.label=="jobs-not-grouped-0"){
				groupsHTML+=batches;
			}
			else{
				let summary = getJobsSummary(group.labelingJobs);
				groupsHTML+=`
				<div class="cosmos-group">
					<div class="cosmos-group-summary" index=${groupIndex}>
						<h3 class="cosmos-job-title">${group.label}</h3>
						<div class="cosmos-group-values">
                    		<div class="cosmos-job-value">
								<label class="cosmos-job-label">Bandwidth</label>
                        		<span class="cosmos-job-total-time">${formatBandwidth(summary.totalTime)}</span>
                    		</div>
                    		<div class="cosmos-job-value">
                    	    	<label class="cosmos-job-label">Throughput</label>
                   	     	<span class="cosmos-job-processed-tasks">${summary.totalTasks}</span>
                    		</div>
							<div class="cosmos-job-value">
                        		<label class="cosmos-job-label">AHT</label>
                        		<span class="cosmos-job-average-handle-time">${formatAHT(summary.totalAHT)}</span>
                    		</div>
						</div>
						<span class="cosmos-group-show-batches-label">${group.opened ? "Click to collapse" : "Click to expand"}</span>
                	</div>

					<div class="group-jobs flex-center-column">
						${group.opened ? batches : ""}
					</div>
				</div>
				`;
			}
			groupCount+=1;
		}
		groupIndex+=1;
	});

	if(groupCount==0){
		groupsHTML = `
			<div class="cosmos-job"><span id="cosmos-no-batches-message">No recent dashboards found.</span></div>
		`;
	}

	document.getElementById("cosmos-batches").innerHTML = groupsHTML;

	let groupElements=document.getElementsByClassName("cosmos-group-summary");
	for(let i=0;i<groupElements.length;i++){
		let index = groupElements[i].getAttribute("index");
		groupElements[i].addEventListener("click",()=>{toggleGroupOpenedState(index)});
	}
}

function formatBandwidth(time){
	if(getItem("timeFormat")==0){
		let decimalTime = time/3600;
		return decimalTime.toFixed(2)+"h";
	}
	else if(getItem("timeFormat")==1){
		return formatTimeHHMMSS(time);
	}
}

function formatAHT(time){
		if(getItem("timeFormat")==0){
		return formatTime(time);
	}
	else if(getItem("timeFormat")==1){
		if(time<3600){
			return formatTimeMMSS(time);
		}
		else{
			return formatTimeHHMMSS(time);
		}
	}
}

function getJobsSummary(labelingJobs){
	let totalTasks = 0;
	let totalTime = 0;
	let totalAHT = 0;
	let estimatedAHT = 0;
	labelingJobs.map((labelingJob)=>{
		totalTasks+=Number(labelingJob.processedTasks);
		totalTime+=Number(labelingJob.totalTime);
		totalAHT+=Number(labelingJob.averageHandleTime);
	});
	totalAHT=totalAHT/labelingJobs.length;
	estimatedAHT = totalTime/totalTasks;
	if(labelingJobs.length==1){
		estimatedAHT = totalAHT;
	}

	return {totalTasks,totalTime,totalAHT:estimatedAHT};
}

function displayJobTimeframe(timePoints){
	let endIndex = -1;
	let startIndex = -1;
	for(let i=0;i<timePoints.length;i++){
		let timePoint = timePoints[i];
		if(timePoint!="null"){
			if(endIndex==-1){
				endIndex = i;
				startIndex = i;
			}
			else startIndex = i;
		}
	}
	if(startIndex==-1) startIndex = 0;
	if(endIndex==-1) endIndex = 0;
	return `Start Time: ${UTCTimeToLocal(timePointLabels[startIndex])} Last Time: ${UTCTimeToLocal(timePointLabels[endIndex])}`;
}

function createCategory(){
	let groups = getItem("groups");
	let newCategory = {
		label:"New Category",
		display:true,
		opened:false,
		filters:[
			{searchTerm:"New Filter"}
		]
	};
	groups.unshift(newCategory);
	setItem("groups",groups);
	displayCategories();
	updateCategoriesSource();
	let firstCategory = document.getElementsByClassName("cosmos-category-expand");
	if(firstCategory.length>0){
		firstCategory[0].setAttribute("expanded","true");
	}
}

function deleteGroup(groupIndex){
	let groups = getItem("groups");
	groups.splice(groupIndex,1);
	setItem("groups",groups);
}

function toggleGroupDisplay(groupIndex){
	let groups = getItem("groups");
	groups[groupIndex].display==true ? groups[groupIndex].display=false : groups[groupIndex].display=true;
	setItem("groups",groups);
	return groups[groupIndex].display;
}

function createFilter(groupIndex){
	let groups = getItem("groups");
	let newFilter = {
		searchTerm:"New Filter"
	}
	groups[groupIndex].filters.unshift(newFilter);
	setItem("groups",groups);
}

function updateCategoriesSource(){
	document.getElementById("cosmos-source-code-textarea").innerText = JSON.stringify(getItem("groups")).replaceAll(",",",\n").replaceAll("[","[\n").replaceAll("]","]\n").trim();
}

function displayCategories(){
	let categories = getItem("groups");
	let categoriesContainer = document.getElementById("cosmos-categories");
	let categoriesHTML = "";
	for(let i=0;i<categories.length;i++){
		let category = categories[i];
		let filters = "";
		let filterIndex = 0;
		category.filters.map((filter)=>{
			filters+=formatFilter(i,filterIndex,filter.searchTerm);
			filterIndex+=1;
		});
		categoriesHTML+=`
			<div class="cosmos-category flex-center-column">
				<input class="cosmos-category-input-title" groupindex=${i} value="${category.label}">
				<button class="cosmos-category-expand flex-center" expanded="false" groupindex=${i}><img src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Down%20arrow%20Icon.svg"></img></button>
				<div class="cosmos-category-content flex-center-column">
					<div class="cosmos-category-controls flex-center">
						<button class="cosmos-category-display-toggle flex-center" displayed="${category.display}" groupindex=${i}><img src=${category.display ? "https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Display%20Icon.svg" : "https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Hide%20Icon.svg"}></img></button>
						<button class="cosmos-category-add-filter cosmos-sidebar-button" groupindex=${i}>Add Filter</button>
						<button class="cosmos-category-delete flex-center" groupindex=${i}><img src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Trash%20Icon.svg"></img></button>
					</div>
					<label>Filters</label>
					<div class="cosmos-category-filters flex-center-column">
						${filters}
					</div>
				</div>
			</div>
		`;
	}

	categoriesContainer.innerHTML = categoriesHTML;

	let categoryTitles = document.getElementsByClassName("cosmos-category-input-title");
	for(let i=0;i<categoryTitles.length;i++){
		let title = categoryTitles[i];
		title.addEventListener("input",()=>{
			clearTimeout(categoryUpdateTimeout);
			categoryUpdateTimeout = setTimeout(()=>{
				let groups = getItem("groups");
				let groupIndex = title.getAttribute("groupindex");
				groups[groupIndex].label = title.value;
				setItem("groups",groups);
				displayData();
				updateCategoriesSource();
			},500);
		});
	}

	let delCategories = document.getElementsByClassName("cosmos-category-delete");
	for(let i=0;i<delCategories.length;i++){
		let delCategory = delCategories[i];
		delCategory.addEventListener("click",()=>{
			let groupIndex = delCategory.getAttribute("groupindex");
			let categoryLabel = getItem("groups")[groupIndex].label;
			if(confirm(`Are you sure you want to delete "${categoryLabel}"?`)){
				deleteGroup(groupIndex);
				displayCategories();
				displayData();
				updateCategoriesSource();
			}
		});
	}

	let dispCategories = document.getElementsByClassName("cosmos-category-display-toggle");
	for(let i=0;i<dispCategories.length;i++){
		let displayCategory = dispCategories[i];
		displayCategory.addEventListener("click",()=>{
			let groupIndex = displayCategory.getAttribute("groupindex");
			let displayState = toggleGroupDisplay(groupIndex);
			if(displayState){
				displayCategory.children[0].src = "https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Display%20Icon.svg";
				displayCategory.setAttribute("displayed","true");
			}
			else{
				displayCategory.children[0].src = "https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Hide%20Icon.svg";
				displayCategory.setAttribute("displayed","false");
			}
			displayData();
			updateCategoriesSource();
		});
	}

	let filters = document.getElementsByClassName("cosmos-category-input-filter");
	for(let i=0;i<filters.length;i++){
		let filter = filters[i];
		filter.addEventListener("input",()=>{
			clearTimeout(categoryUpdateTimeout);
			categoryUpdateTimeout = setTimeout(()=>{
				let groups = getItem("groups");
				let groupIndex = filter.getAttribute("groupindex");
				let filterIndex = filter.getAttribute("filterindex");
				groups[groupIndex].filters[filterIndex].searchTerm = filter.value;
				setItem("groups",groups);
				displayData();
				updateCategoriesSource();
			},500);
		});
	}

	let expandButtons = document.getElementsByClassName("cosmos-category-expand");
	for(let i=0;i<expandButtons.length;i++){
		let e = expandButtons[i];
		e.addEventListener("click",()=>{
			let expanded = e.getAttribute("expanded");
			expanded == "true" ? e.setAttribute("expanded","false") : e.setAttribute("expanded","true");
		});
	}

	let addFilterButtons = document.getElementsByClassName("cosmos-category-add-filter");
	for(let i=0;i<addFilterButtons.length;i++){
		let addFilter = addFilterButtons[i];
		addFilter.addEventListener("click",()=>{
			let groupIndex = addFilter.getAttribute("groupindex");
			createFilter(groupIndex);
			displayCategories();
			Array.from(document.getElementsByClassName("cosmos-category-expand")).find((e)=>e.getAttribute("groupindex")==groupIndex).setAttribute("expanded","true");
			displayData();
			updateCategoriesSource();
		});
	}

	let deleteFilterButtons = document.getElementsByClassName("cosmos-category-filter-delete");
	for(let i=0;i<deleteFilterButtons.length;i++){
		let delFilter = deleteFilterButtons[i];
		delFilter.addEventListener("click",()=>{
			let groups = getItem("groups");
			let groupIndex = delFilter.getAttribute("groupindex");
			let filterIndex = delFilter.getAttribute("filterindex");
			groups[groupIndex].filters.splice(filterIndex,1);
			setItem("groups",groups);
			displayCategories();
			Array.from(document.getElementsByClassName("cosmos-category-expand")).find((e)=>e.getAttribute("groupindex")==groupIndex).setAttribute("expanded","true");
			displayData();
			updateCategoriesSource();
		});
	}
}

function formatFilter(groupIndex,filterIndex,searchTerm){
	return `
	<div class="cosmos-category-filter flex-center">
		<input class="cosmos-category-input-filter" groupindex=${groupIndex} filterindex=${filterIndex} value="${searchTerm}">
		<button class="cosmos-category-filter-delete flex-center" groupindex=${groupIndex} filterindex=${filterIndex}><img src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Trash%20Icon.svg"></img></button>
	</div>
	`;
}

function UTCTimeToLocal(dateTime){//Takes date "01/01" and time "12:00" values which are by default using a UTC timezone to create a Date object and retrieve the local timezone equivalent.
	let newDate = new Date();
	let date = dateTime.date.split("/");
	newDate.setUTCMonth(Number(date[0])-1);
	newDate.setUTCDate(Number(date[1]));
	let time = dateTime.time.split(":");
	newDate.setUTCHours(Number(time[0]));
	newDate.setUTCMinutes(Number(time[1]));
	newDate.setUTCSeconds(0);

	return newDate.toTimeString().substring(0,5);
}

function displayTotal(){//Updates the values for the summary at the top. Specifically, the values of all bandwidths and all throughputs.
	let globalTimeSpent = 0;
	let globalBandwidth = 0;

	for(let i=0;i<totalTimeList.length;i++){
		let currentValue = totalTimeList[i].value;
		if(Number(currentValue)){
			globalTimeSpent += Number(currentValue);
		}
	}

	for(let i=0;i<processedTaskList.length;i++){
		let currentValue = processedTaskList[i].value;
		if(Number(currentValue)){
			globalBandwidth += Number(currentValue);
		}
	}

	document.getElementById("cosmos-summary-total-time").innerText = formatBandwidth(globalTimeSpent);
	document.getElementById("cosmos-summary-processed-tasks").innerText = globalBandwidth;
}

function formatTime(time){//Takes a time value in seconds and returns its equivalent either in seconds "10s", minutes "10min" or hours "3h".
	if(!time) return "--";

	let seconds = time;
	let minutes = 0;
	let hours = 0;
	let displayTime = Math.round(seconds)+"s";
	if(seconds>=60){
		minutes = seconds/60;
		if(minutes>=60){
			hours = seconds/3600;
			displayTime = hours.toFixed(2)+"h";
		}
		else{
			displayTime = minutes.toFixed(2)+"min";
		}
	}
	return displayTime;
}

function formatTimeHours(time){
	if(!time) return "--";
	return `${(time/3600).toFixed(2)}h`;
}

function formatTimeMMSS(time){
	time = Math.round(time);
	let minutes=0;
	let seconds=0;
	seconds = time%60;
	if(time>=60){
		minutes = (time-(time%60))/60;
	}
	return `${timeStringFormat(minutes%60)}:${timeStringFormat(seconds)}`;
}

function formatTimeHHMMSS(time){
	time = Math.round(time);
	let hours=0;
	let minutes=0;
	let seconds=0;
	seconds = time%60;
	if(time>=60){
		minutes = (time-(time%60))/60;
	}
	if(minutes>=60){
	   hours = (minutes-(minutes%60))/60;
	}
	return `${timeStringFormat(hours)}:${timeStringFormat(minutes%60)}:${timeStringFormat(seconds)}`;
}

function timeStringFormat(time){
	if(time<10){
		return "0"+time;
	}
	return time.toString();
}

function drawBackground(){
	let gradient = context.createLinearGradient(0, window.innerHeight * 0.1, window.innerWidth, window.innerWidth * 0.9);
	gradient.addColorStop(0, "rgba(9,8,23,1)");
	gradient.addColorStop(0.32, "rgba(22,3,45,1)");
	gradient.addColorStop(0.65, "rgba(3,11,33,1)");
	gradient.addColorStop(0.96, "rgba(9,1,19,1)");

	context.fillStyle = gradient;
	context.fillRect(0, 0, window.innerWidth, window.innerHeight);

	if(document.getElementById("cosmos-cosmic-eye").className=="hidden"){
		document.getElementById("cosmos-cosmic-eye").className = "";
		document.getElementById("cosmos-pisces-constellation").className = "";
		document.getElementById("cosmos-ursa-major-minor-constellation").className = "";
		document.getElementById("cosmos-sus-mogus-constellation").className = "";
		document.getElementById("cosmos-black-hole").className = "";
		document.getElementById("cosmos-blood-moon").className = "";
	}

	starCount=0;
	starInterval = setInterval(drawStars,10);
}

function drawStars(){
	if(starCount<1000){
		for(let i=0;i<10;i++){
			let x=Math.floor(Math.random()*window.innerWidth);
			let y=Math.floor(Math.random()*window.innerHeight);
			let size = Math.floor(Math.random()*1.5)+1;
			let opacity = Math.random().toFixed(2);

			let star = {x,y,size,opacity};

			let radialGradient = context.createRadialGradient(star.x/2,star.y/2,star.size/2,star.x,star.y,star.size);
			radialGradient.addColorStop(0.5,"#ffffff");
			radialGradient.addColorStop(1,`rgba(255,255,255,${star.opacity})`);

			context.beginPath();
			context.arc(star.x,star.y,star.size,0,2*Math.PI);
			context.fillStyle = radialGradient;
			context.fill();
			starCount+=1;
		}
	}
	else clearInterval(starInterval);
}

function fetchWorkerIds(){//Attempts to retrieve the list of existing WorkerIds and merges it with the user's existing UUID List in their localStorage.
	fetch("https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/workerTable.json")
		.then((response) => response.text())
		.then((result) => {
		let uuidList = JSON.parse(result);
		if(getItem("uuidList")){
			let oldUUIDList = getItem("uuidList");
			for(let i = 0; i<uuidList.length;i++){
				let user = uuidList[i];
				let compareUser = oldUUIDList.findIndex((u)=>u.login==user.login);
				if(compareUser>=0){
					let splicedUser = oldUUIDList.splice(compareUser,1);
					user.UUID = splicedUser[0].UUID;
					i--;
				}
			}
			uuidList = uuidList.concat(oldUUIDList);
		}
		setItem("uuidList",uuidList);

	}).catch((error) => console.error(error));
}

function getFullDate(date){//Returns a YYYY-MM-DD format of the date object given.
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	if(month.toString().length==1){
		month="0"+month;
	}
	let day = date.getDate();
	if(day.toString().length==1){
		day="0"+day;
	}
	let formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}

function checkLoading(){
	let loaders = document.getElementsByClassName("cwdb-loader");
	if(loaders){
		if(loaders.length>0){
			if(!startedLoading){
				document.getElementById("cosmos-loading-message").className="";
				document.getElementById("cosmos-batches").className="flex-center-column hidden";
			}
			startedLoading=true;
		}
		else{
			if(startedLoading){
				getData();
				document.getElementById("cosmos-loading-message").className="hidden";
				document.getElementById("cosmos-batches").className="flex-center-column";
				clearInterval(loadingCheckInterval);
				startedLoading=false;
			}
		}
	}
}

function makeElementGreen(e){
	e.style="background-color:#009688";
	setTimeout(()=>{e.style=""},1000);
}

function makeElementRed(e){
	e.style="background-color:#910f2f";
	setTimeout(()=>{e.style=""},1000);
}

function displayDashboard(){//Generates a custom dashboard that retrieves the total time spent, amount of processed tasks and average handle time of all dashboards for the WorkerId provided.
	let hours = 13;
	CloudWatchDashboards.displayCustomDashboard({
		"widgets": [
			{
				"height": 7,
				"width": 6,
				"y": 0,
				"x": 3,
				"type": "metric",
				"properties": {
					"metrics": [
						[ { "expression": `SEARCH('{AWS/SageMaker/Workteam,CognitoUserPool,LabelingJob,WorkerId} CognitoUserPool="us-east-1_72S9GTaeK" WorkerId="${userUUID}" MetricName="TimeSpent"', 'Average', 300)`, "label": "AHT", "id": "e1", "period": 3600, "region": "us-east-1" } ]
					],
					"view": "singleValue",
					"region": "us-east-1",
					"liveData": true,
					"stat": "Sum",
					"period": 3600,
					"title": "Average Handle Time",
					"setPeriodToTimeRange": true,
					"start": `-PT${hours}H`,
					"end": "P0D"
				}
			},
			{
				"height": 7,
				"width": 6,
				"y": 0,
				"x": 9,
				"type": "metric",
				"properties": {
					"metrics": [
						[ { "expression": `SEARCH('{AWS/SageMaker/Workteam,CognitoUserPool,LabelingJob,WorkerId} CognitoUserPool="us-east-1_72S9GTaeK" WorkerId="${userUUID}" MetricName="TasksSubmitted"', 'Sum', 300)`, "id": "e1", "period": 3600, "region": "us-east-1", "label": "PT" } ]
					],
					"view": "table",
					"region": "us-east-1",
					"liveData": true,
					"stat": "Sum",
					"title": "Submitted Tasks",
					"period": 3600,
					"setPeriodToTimeRange": true,
					"start": `-PT${hours}H`,
					"end": "P0D"
				}
			},
			{
				"height": 7,
				"width": 6,
				"y": 6,
				"x": 15,
				"type": "metric",
				"properties": {
					"metrics": [
						[ { "expression": `SEARCH('{AWS/SageMaker/Workteam,CognitoUserPool,LabelingJob,WorkerId} CognitoUserPool="us-east-1_72S9GTaeK" WorkerId="${userUUID}" MetricName="TimeSpent"', 'Sum', 300)`, "label": "TT", "id": "e2", "period": 1800, "region": "us-east-1" } ]
					],
					"view": "table",
					"stacked": false,
					"region": "us-east-1",
					"liveData": true,
					"stat": "Sum",
					"period": 300,
					"title": "Total Time",
					"setPeriodToTimeRange": true,
					"start": `-PT${hours}H`,
					"end": "P0D"
				}
			}
		]
	});
	loadingCheckInterval = setInterval(checkLoading,10);
}

function toggleGroupDisplayState(index){
	let groups = getItem("groups");

	if(groups[index]){
		let currentState = groups[index].display==true ? true : false;
		groups[index].display=!currentState;
		setItem("groups",groups);
	}
	displayData();
}

function toggleGroupOpenedState(index){
	let groups = getItem("groups");

	if(groups[index]){
		let currentState = groups[index].opened==true ? true : false;
		groups[index].opened=!currentState;
		setItem("groups",groups);
	}
	displayData();
}

function declareHTML(){
	CosmosUIHTML = `
<canvas id="cosmos-canvas"></canvas>
<a href="https://phonetool.amazon.com/users/elgustav" target="_blank">
<img id="cosmos-logo" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Cosmos%20icon.svg"></img>
</a>
<img id="cosmos-cosmic-eye" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Cosmic%20Eye%20Constellation.svg"></img>
<img id="cosmos-pisces-constellation" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Pisces%20Constellation.svg"></img>
<img id="cosmos-ursa-major-minor-constellation" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Ursa%20Major%20Minor.svg"></img>
<img id="cosmos-sus-mogus-constellation" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Sus%20Mogus%20Constellation.svg"></img>
<img id="cosmos-black-hole" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Black%20hole.svg"></img>
<img id="cosmos-blood-moon" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Blood%20Moon.svg"></img>

<div id="cosmos-loading-message">
    <img id="cosmos-loading-icon" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Cosmos%20Loading%20Icon.svg"></img>
    <span id="cosmos-loading-text">Cosmos is loading<br>Please keep this tab open while you see this message, thank you!✨</span>
	<span id="cosmos-loading-text-2">If this page gets stuck please reload.</span>
</div>

<div id="cosmos-content">
<div id="cosmos-summary">
	<h2 id="cosmos-summary-title">Summary</h2>

	<div id="cosmos-summary-values">
 	   <div class="cosmos-summary-value">
 	       <label for="cosmos-summary-total-time" class="cosmos-summary-label">Bandwidth</label>
 	       <span id="cosmos-summary-total-time">--</span>
 	   </div>
  	  <div class="cosmos-summary-value">
  	      <label for="cosmos-summary-processed-tasks" class="cosmos-summary-label">Throughput</label>
 	       <span id="cosmos-summary-processed-tasks">--</span>
  	  </div>
	</div>
</div>
<div id="cosmos-batches" class="flex-center-column">
</div>
</div>

<div id="cosmos-sidebar">
    <h3 id="cosmos-sidebar-title">Settings <img id="cosmos-settings-icon" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Settings%20Icon.svg"></img> </h3>
    <div class="cosmos-sidebar-container">
        <details class="cosmos-sidebar-details">
            <summary class="cosmos-sidebar-details-summary">User Information</summary>
            <div class="cosmos-sidebar-details-settings">
            <label>Login Username:</label>
            <input id="cosmos-sidebar-login" value="${getItem("login")}" placeholder="johnsm">
            <button id="cosmos-update-login" class="cosmos-sidebar-button">Update Login</button>
            <label>Cloudwatch WorkerId:</label>
            <input id="cosmos-sidebar-workerId" value="${userUUID}" placeholder="550e8400-e29b-41d4-a716-446655440000">
            <button id="cosmos-update-workerId" class="cosmos-sidebar-button">Overwrite WorkerId</button>
            </div>
        </details>
    </div>
	<div class="cosmos-sidebar-container">
        <details class="cosmos-sidebar-details">
            <summary class="cosmos-sidebar-details-summary">Preferences</summary>
            <div class="cosmos-sidebar-details-settings">
            <label>Time Format</label>
            <button id="cosmos-decimal-time-button" class="cosmos-time-format cosmos-sidebar-button" selected="${getItem("timeFormat")==0?"1":"0"}">Decimal</button>
			<button id="cosmos-standard-time-button" class="cosmos-time-format cosmos-sidebar-button" selected="${getItem("timeFormat")==1?"1":"0"}">HH:MM:SS</button>
            </div>
        </details>
    </div>
	<div class="cosmos-sidebar-container">
		<label>Order By</label>
		<div class="flex-center">
			<select id="cosmos-order-by-select">
				<option ${getItem("orderBy")=="default"?"selected":""} value="default">Default</option>
				<option ${getItem("orderBy")=="recent"?"selected":""} value="recent">Most recent</option>
				<option ${getItem("orderBy")=="bandwidth"?"selected":""} value="bandwidth">Bandwidth</option>
				<option ${getItem("orderBy")=="throughput"?"selected":""} value="throughput">Throughput</option>
				<option ${getItem("orderBy")=="aht"?"selected":""} value="aht">AHT</option>
			</select>
			<button id="cosmos-sort-button" ${getItem("isDescending")==true ? "descending" : "ascending"} class="flex-center">
				<img id="cosmos-sort-icon" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/assets/Sort%20Icon.svg"></img>
			</button>
		</div>
	</div>
		<div class="cosmos-sidebar-container">
		<label>Group By</label>
		<div class="flex-center-column" style="width:100%">
			<button class="cosmos-sidebar-button" id="cosmos-view-source">View Source</button>
			<div id="cosmos-source-code-container" class="flex-center-column hidden">
				<textarea spellcheck="false" id="cosmos-source-code-textarea"></textarea>
				<button class="cosmos-sidebar-button" id="cosmos-update-source-button">Update Source</button>
			</div>
			<button class="cosmos-sidebar-button" id="cosmos-add-category-button">Add Category</button>
			<label class="cosmos-dotted-bottom-border">Categories</label>
			<div id="cosmos-categories" class="flex-center-column">

			</div>
		</div>
	</div>
</div>
`;
}

function showNoUUID_UI(userlogin){
	let noUUID = `

    <h2>Couldn't find a matching WorkerId for the login "${userlogin}".</h2>
    <h2>Please go to <a target="_blank" href="https://quip-amazon.com/4TwbAs3208dv/Cloudwatch-WorkerId-List">this</a> Quip in order to see either how to obtain your WorkerId or check if it has been added to the existing list.</h2>
    <div>
        <label>WorkerId</label>
        <input id="cosmos-submit-input" placeholder="Example: 550e8400-e29b-41d4-a716-446655440000">
        <button id="cosmos-submit-workerId">Submit</button>
    </div>
    <h3>If you need additional help feel free to contact me on Slack @elgustav.</h3>
    `;
	let noUUIDStyle = `
        #cosmos-noUUID{
            z-index:1;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

    `;

	let noUUIDContainer = document.createElement("div");
	noUUIDContainer.id= "cosmos-noUUID";
	noUUIDContainer.innerHTML = noUUID;
	let noUUIDStyles = document.createElement("style");
	noUUIDStyles.innerHTML = noUUIDStyle;
	document.head.append(noUUIDStyles);
	document.body.append(noUUIDContainer);

	document.getElementById("cosmos-submit-workerId").addEventListener("click",()=>{
		if(document.getElementById("cosmos-submit-input").value.length>0){
			setItem("login",userlogin);
			userUUID = document.getElementById("cosmos-submit-input").value.trim();
			setItem("uuidList",[{login:userlogin,UUID:userUUID}]);
			noUUIDContainer.remove();
			declareHTML();
			displayDashboard();
			initInterval = setInterval(initFunction,100);
		}
	});
}

function setItem(label,item){
	localStorage.setItem(label,JSON.stringify(item));
}

function getItem(label){
	let value = localStorage.getItem(label);
	try{
		return JSON.parse(value);
	}
	catch(e){
		console.log(e);
		return value;
	}
}
