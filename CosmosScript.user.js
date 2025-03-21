// ==UserScript==
// @name         Cosmos
// @namespace    https://github.com/gmherond/Cosmos
// @version      1.0.1
// @description  Custom tool that displays the dashboard info of all the Sagemaker jobs you've worked on throughout the day.
// @author       elgustav@
// @match        https://cw-dashboards.aka.amazon.com/cloudwatch/dashboardInternal?accountId=753462827423*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgdmlld0JveD0iMCAwIDI4OCAyODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNjMuNzE1IDExNi44NTVDMTg1LjgyNiAxMzMuNTUgMjAzLjYxNSAxNTEuNDUgMjE0LjUyMyAxNjYuODNDMjE5Ljk4NSAxNzQuNTMyIDIyMy42MzYgMTgxLjQ4MyAyMjUuMjk3IDE4Ny4yNDdDMjI2Ljk3MiAxOTMuMDYzIDIyNi40OTYgMTk3LjE3MSAyMjQuNTIzIDE5OS43ODVDMjIyLjU0OSAyMDIuMzk5IDIxOC43MjggMjAzLjk4MiAyMTIuNjc2IDIwMy45NjJDMjA2LjY3OCAyMDMuOTQ0IDE5OC45OTMgMjAyLjMzNiAxOTAuMDg5IDE5OS4xOTFDMTcyLjMxIDE5Mi45MTIgMTUwLjIyMyAxODAuNzA0IDEyOC4xMTEgMTY0LjAwOUMxMDYgMTQ3LjMxNCA4OC4yMTAzIDEyOS40MTQgNzcuMzAzIDExNC4wMzRDNzEuODQwNiAxMDYuMzMyIDY4LjE4OTggOTkuMzgwNiA2Ni41MjkxIDkzLjYxNjlDNjQuODUzMyA4Ny44MDA4IDY1LjMyOTUgODMuNjkzIDY3LjMwMzIgODEuMDc4OUM2OS4yNzcgNzguNDY0OCA3My4wOTc0IDc2Ljg4MiA3OS4xNSA3Ni45MDExQzg1LjE0ODIgNzYuOTIwMSA5Mi44MzMzIDc4LjUyOCAxMDEuNzM3IDgxLjY3MjZDMTE5LjUxNiA4Ny45NTE2IDE0MS42MDMgMTAwLjE1OSAxNjMuNzE1IDExNi44NTVaIiBzdHJva2U9IiM5QjlBODAiIHN0cm9rZS13aWR0aD0iNSIvPgo8cGF0aCBkPSJNMTU3LjcxNSAxMjUuODU1QzE3OS44MjYgMTQyLjU1IDE5Ny42MTUgMTYwLjQ1IDIwOC41MjMgMTc1LjgzQzIxMy45ODUgMTgzLjUzMiAyMTcuNjM2IDE5MC40ODMgMjE5LjI5NyAxOTYuMjQ3QzIyMC45NzIgMjAyLjA2MyAyMjAuNDk2IDIwNi4xNzEgMjE4LjUyMyAyMDguNzg1QzIxNi41NDkgMjExLjM5OSAyMTIuNzI4IDIxMi45ODIgMjA2LjY3NiAyMTIuOTYyQzIwMC42NzggMjEyLjk0NCAxOTIuOTkzIDIxMS4zMzYgMTg0LjA4OSAyMDguMTkxQzE2Ni4zMSAyMDEuOTEyIDE0NC4yMjMgMTg5LjcwNCAxMjIuMTExIDE3My4wMDlDOTkuOTk5NiAxNTYuMzE0IDgyLjIxMDMgMTM4LjQxNCA3MS4zMDMgMTIzLjAzNEM2NS44NDA2IDExNS4zMzIgNjIuMTg5OCAxMDguMzgxIDYwLjUyOTEgMTAyLjYxN0M1OC44NTMzIDk2LjgwMDggNTkuMzI5NSA5Mi42OTMgNjEuMzAzMiA5MC4wNzg5QzYzLjI3NyA4Ny40NjQ4IDY3LjA5NzQgODUuODgyIDczLjE1IDg1LjkwMTFDNzkuMTQ4MiA4NS45MjAxIDg2LjgzMzMgODcuNTI4IDk1LjczNyA5MC42NzI2QzExMy41MTYgOTYuOTUxNiAxMzUuNjAzIDEwOS4xNTkgMTU3LjcxNSAxMjUuODU1WiIgc3Ryb2tlPSIjOUI5QTgwIiBzdHJva2Utd2lkdGg9IjUiLz4KPGNpcmNsZSBjeD0iMTQyLjUiIGN5PSIxNDMuNSIgcj0iNjIuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjQ2NjUgMTQyLjUgMTQzLjUpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9pXzBfMSkiPgo8Y2lyY2xlIGN4PSIxNjkuNDY1IiBjeT0iMTU5LjQ2NSIgcj0iMTguNSIgdHJhbnNmb3JtPSJyb3RhdGUoNzEuMjQ4NCAxNjkuNDY1IDE1OS40NjUpIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9pXzBfMSkiPgo8Y2lyY2xlIGN4PSIxMjQuODY3IiBjeT0iMTM5LjM3OSIgcj0iNi45OTA1OCIgdHJhbnNmb3JtPSJyb3RhdGUoNzEuMjQ4NCAxMjQuODY3IDEzOS4zNzkpIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9pXzBfMSkiPgo8Y2lyY2xlIGN4PSIxMzUuMDU0IiBjeT0iMTAwLjQ4IiByPSI5Ljk0MjM0IiB0cmFuc2Zvcm09InJvdGF0ZSg0Ni43MDI3IDEzNS4wNTQgMTAwLjQ4KSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjwvZz4KPHBhdGggZD0iTTgzIDEyMS41QzExOCAxNjEgMTM2LjUgMTc0LjUgMTgwLjUgMTk1LjUiIHN0cm9rZT0iIzlCOUE4MCIgc3Ryb2tlLXdpZHRoPSI1Ii8+CjxwYXRoIGQ9Ik03OSAxMzNDMTE0IDE3Mi41IDEzMC41IDE4My41IDE3NC41IDIwNC41IiBzdHJva2U9IiM5QjlBODAiIHN0cm9rZS13aWR0aD0iNSIvPgo8Y2lyY2xlIGN4PSIyMzQuNSIgY3k9IjEyMC41IiByPSIxMS41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIuMjk5OCAyMzQuNSAxMjAuNSkiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8wXzEpIi8+CjxjaXJjbGUgY3g9IjIzNC41IiBjeT0iMTIwLjUiIHI9IjExLjUiIHRyYW5zZm9ybT0icm90YXRlKC0xMi4yOTk4IDIzNC41IDEyMC41KSIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzBfMSkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxjaXJjbGUgY3g9IjE0MC4yMzkiIGN5PSI1Mi4yMzg1IiByPSIxMS41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMjQuNTUwMyAxNDAuMjM5IDUyLjIzODUpIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIyMDYuNzciIGN5PSI1OS43NzAzIiByPSIxOS4zMzg2IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTEuOTI5NiAyMDYuNzcgNTkuNzcwMykiIGZpbGw9InVybCgjcGFpbnQ0X2xpbmVhcl8wXzEpIi8+CjxjaXJjbGUgY3g9IjIwNi43NyIgY3k9IjU5Ljc3MDMiIHI9IjE5LjMzODYiIHRyYW5zZm9ybT0icm90YXRlKC0xMS45Mjk2IDIwNi43NyA1OS43NzAzKSIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzBfMSkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2lfMF8xIiB4PSIxNTAuOTYiIHk9IjE0MC45NiIgd2lkdGg9IjM3LjAxMDEiIGhlaWdodD0iNDAuMDEwMSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzBfMSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9pXzBfMSIgeD0iMTE3Ljg3NCIgeT0iMTMyLjM4NiIgd2lkdGg9IjEzLjk4NSIgaGVpZ2h0PSIxNS45ODUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU1vcnBob2xvZ3kgcmFkaXVzPSIyIiBvcGVyYXRvcj0iZGlsYXRlIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvd18wXzEiLz4KPGZlT2Zmc2V0IGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzBfMSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9pXzBfMSIgeD0iMTI1LjExMiIgeT0iOTAuNTM3MyIgd2lkdGg9IjE5Ljg4NDciIGhlaWdodD0iMjIuODg0NyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzBfMSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjE0Mi41IiB5MT0iODEiIHgyPSIxNDIuNSIgeTI9IjIwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQkUzRjIwIi8+CjxzdG9wIG9mZnNldD0iMC44MTEiIHN0b3AtY29sb3I9IiMwMDI1MzQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzBfMSIgeDE9IjIzNC41IiB5MT0iMTA5IiB4Mj0iMjM0LjUiIHkyPSIxMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0IxQ0FGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNzk2IiBzdG9wLWNvbG9yPSIjNEE0MjY0Ii8+CjxzdG9wIG9mZnNldD0iMC45MDEiIHN0b3AtY29sb3I9IiM0QTQyNjQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzBfMSIgeDE9IjI0OC45NjgiIHkxPSIxMTcuNTE0IiB4Mj0iMjIxLjQxNiIgeTI9IjExNy4xMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMC41NjYiIHN0b3AtY29sb3I9IiM5QzQzMEYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzBfMSIgeDE9IjE0MC4yMzkiIHkxPSI0MC43Mzg1IiB4Mj0iMTQwLjIzOSIgeTI9IjYzLjczODUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwMzUyMSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNjAwMDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDRfbGluZWFyXzBfMSIgeDE9IjIwNi43NyIgeTE9IjQwLjQzMTciIHgyPSIyMDYuNzciIHkyPSI3OS4xMDg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0MjQyOTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUYwMDM1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl8wXzEiIHgxPSIyMjIuMzgyIiB5MT0iNDcuNDYxMiIgeDI9IjE5MC4xMjIiIHkyPSI3NC4zNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzQxMDgwOCIgc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMC40ODUiIHN0b3AtY29sb3I9IiM2QzMzMDciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K
// @grant        none
// @downloadURL  https://github.com/gmherond/Cosmos/raw/refs/heads/main/CosmosScript.user.js
// @updateURL    https://github.com/gmherond/Cosmos/raw/refs/heads/main/CosmosScript.user.js
// ==/UserScript==

/*
-----------------------------------------------------------------------------------------------------------------------
Changelog 1.0.1 03/21/2025
-Fixed an error where the UI would freeze if an uuidList was generated before the login in localStorage.
-Added a loading icon so that the user can know if the dashboard is currently loading.
-The interval that checks whether there are dashboards loading also made the display of information way faster as a side effect.
-----------------------------------------------------------------------------------------------------------------------
*/

//to do:
//order by
//add option for user to change the time range
//replace cookie checker code with actual html parser
//comment code(eugh)
//clean code?

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
    justify-content:center;
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
    width:50rem;
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

#cosmos-summary-values, .cosmos-job-values{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    border-top: 1px solid;
    width:65%;
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
}

#cosmos-sidebar-title{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    border-bottom:1px solid white;
    width:80%;
    padding:1rem;
}

.cosmos-sidebar-button{
    padding: 0.4rem 1rem;
    border-radius: 5rem;
    border: 2px solid #ffffffaa;
    background-color: #2f0080;
    cursor:pointer;
    transition: 0.3s background-color ease-in-out;
}

.cosmos-sidebar-button:hover{
    background-color:#470fa6;
}

.cosmos-sidebar-details, .cosmos-sidebar-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

.flex-center{
    display:flex;
    justify-content:center;
    align-items:center;
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

`;

let favicon = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgdmlld0JveD0iMCAwIDI4OCAyODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNjMuNzE1IDExNi44NTVDMTg1LjgyNiAxMzMuNTUgMjAzLjYxNSAxNTEuNDUgMjE0LjUyMyAxNjYuODNDMjE5Ljk4NSAxNzQuNTMyIDIyMy42MzYgMTgxLjQ4MyAyMjUuMjk3IDE4Ny4yNDdDMjI2Ljk3MiAxOTMuMDYzIDIyNi40OTYgMTk3LjE3MSAyMjQuNTIzIDE5OS43ODVDMjIyLjU0OSAyMDIuMzk5IDIxOC43MjggMjAzLjk4MiAyMTIuNjc2IDIwMy45NjJDMjA2LjY3OCAyMDMuOTQ0IDE5OC45OTMgMjAyLjMzNiAxOTAuMDg5IDE5OS4xOTFDMTcyLjMxIDE5Mi45MTIgMTUwLjIyMyAxODAuNzA0IDEyOC4xMTEgMTY0LjAwOUMxMDYgMTQ3LjMxNCA4OC4yMTAzIDEyOS40MTQgNzcuMzAzIDExNC4wMzRDNzEuODQwNiAxMDYuMzMyIDY4LjE4OTggOTkuMzgwNiA2Ni41MjkxIDkzLjYxNjlDNjQuODUzMyA4Ny44MDA4IDY1LjMyOTUgODMuNjkzIDY3LjMwMzIgODEuMDc4OUM2OS4yNzcgNzguNDY0OCA3My4wOTc0IDc2Ljg4MiA3OS4xNSA3Ni45MDExQzg1LjE0ODIgNzYuOTIwMSA5Mi44MzMzIDc4LjUyOCAxMDEuNzM3IDgxLjY3MjZDMTE5LjUxNiA4Ny45NTE2IDE0MS42MDMgMTAwLjE1OSAxNjMuNzE1IDExNi44NTVaIiBzdHJva2U9IiM5QjlBODAiIHN0cm9rZS13aWR0aD0iNSIvPgo8cGF0aCBkPSJNMTU3LjcxNSAxMjUuODU1QzE3OS44MjYgMTQyLjU1IDE5Ny42MTUgMTYwLjQ1IDIwOC41MjMgMTc1LjgzQzIxMy45ODUgMTgzLjUzMiAyMTcuNjM2IDE5MC40ODMgMjE5LjI5NyAxOTYuMjQ3QzIyMC45NzIgMjAyLjA2MyAyMjAuNDk2IDIwNi4xNzEgMjE4LjUyMyAyMDguNzg1QzIxNi41NDkgMjExLjM5OSAyMTIuNzI4IDIxMi45ODIgMjA2LjY3NiAyMTIuOTYyQzIwMC42NzggMjEyLjk0NCAxOTIuOTkzIDIxMS4zMzYgMTg0LjA4OSAyMDguMTkxQzE2Ni4zMSAyMDEuOTEyIDE0NC4yMjMgMTg5LjcwNCAxMjIuMTExIDE3My4wMDlDOTkuOTk5NiAxNTYuMzE0IDgyLjIxMDMgMTM4LjQxNCA3MS4zMDMgMTIzLjAzNEM2NS44NDA2IDExNS4zMzIgNjIuMTg5OCAxMDguMzgxIDYwLjUyOTEgMTAyLjYxN0M1OC44NTMzIDk2LjgwMDggNTkuMzI5NSA5Mi42OTMgNjEuMzAzMiA5MC4wNzg5QzYzLjI3NyA4Ny40NjQ4IDY3LjA5NzQgODUuODgyIDczLjE1IDg1LjkwMTFDNzkuMTQ4MiA4NS45MjAxIDg2LjgzMzMgODcuNTI4IDk1LjczNyA5MC42NzI2QzExMy41MTYgOTYuOTUxNiAxMzUuNjAzIDEwOS4xNTkgMTU3LjcxNSAxMjUuODU1WiIgc3Ryb2tlPSIjOUI5QTgwIiBzdHJva2Utd2lkdGg9IjUiLz4KPGNpcmNsZSBjeD0iMTQyLjUiIGN5PSIxNDMuNSIgcj0iNjIuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjQ2NjUgMTQyLjUgMTQzLjUpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9pXzBfMSkiPgo8Y2lyY2xlIGN4PSIxNjkuNDY1IiBjeT0iMTU5LjQ2NSIgcj0iMTguNSIgdHJhbnNmb3JtPSJyb3RhdGUoNzEuMjQ4NCAxNjkuNDY1IDE1OS40NjUpIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9pXzBfMSkiPgo8Y2lyY2xlIGN4PSIxMjQuODY3IiBjeT0iMTM5LjM3OSIgcj0iNi45OTA1OCIgdHJhbnNmb3JtPSJyb3RhdGUoNzEuMjQ4NCAxMjQuODY3IDEzOS4zNzkpIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9pXzBfMSkiPgo8Y2lyY2xlIGN4PSIxMzUuMDU0IiBjeT0iMTAwLjQ4IiByPSI5Ljk0MjM0IiB0cmFuc2Zvcm09InJvdGF0ZSg0Ni43MDI3IDEzNS4wNTQgMTAwLjQ4KSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjwvZz4KPHBhdGggZD0iTTgzIDEyMS41QzExOCAxNjEgMTM2LjUgMTc0LjUgMTgwLjUgMTk1LjUiIHN0cm9rZT0iIzlCOUE4MCIgc3Ryb2tlLXdpZHRoPSI1Ii8+CjxwYXRoIGQ9Ik03OSAxMzNDMTE0IDE3Mi41IDEzMC41IDE4My41IDE3NC41IDIwNC41IiBzdHJva2U9IiM5QjlBODAiIHN0cm9rZS13aWR0aD0iNSIvPgo8Y2lyY2xlIGN4PSIyMzQuNSIgY3k9IjEyMC41IiByPSIxMS41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIuMjk5OCAyMzQuNSAxMjAuNSkiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8wXzEpIi8+CjxjaXJjbGUgY3g9IjIzNC41IiBjeT0iMTIwLjUiIHI9IjExLjUiIHRyYW5zZm9ybT0icm90YXRlKC0xMi4yOTk4IDIzNC41IDEyMC41KSIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzBfMSkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxjaXJjbGUgY3g9IjE0MC4yMzkiIGN5PSI1Mi4yMzg1IiByPSIxMS41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMjQuNTUwMyAxNDAuMjM5IDUyLjIzODUpIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIyMDYuNzciIGN5PSI1OS43NzAzIiByPSIxOS4zMzg2IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTEuOTI5NiAyMDYuNzcgNTkuNzcwMykiIGZpbGw9InVybCgjcGFpbnQ0X2xpbmVhcl8wXzEpIi8+CjxjaXJjbGUgY3g9IjIwNi43NyIgY3k9IjU5Ljc3MDMiIHI9IjE5LjMzODYiIHRyYW5zZm9ybT0icm90YXRlKC0xMS45Mjk2IDIwNi43NyA1OS43NzAzKSIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzBfMSkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2lfMF8xIiB4PSIxNTAuOTYiIHk9IjE0MC45NiIgd2lkdGg9IjM3LjAxMDEiIGhlaWdodD0iNDAuMDEwMSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzBfMSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9pXzBfMSIgeD0iMTE3Ljg3NCIgeT0iMTMyLjM4NiIgd2lkdGg9IjEzLjk4NSIgaGVpZ2h0PSIxNS45ODUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU1vcnBob2xvZ3kgcmFkaXVzPSIyIiBvcGVyYXRvcj0iZGlsYXRlIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvd18wXzEiLz4KPGZlT2Zmc2V0IGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzBfMSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9pXzBfMSIgeD0iMTI1LjExMiIgeT0iOTAuNTM3MyIgd2lkdGg9IjE5Ljg4NDciIGhlaWdodD0iMjIuODg0NyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzBfMSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjE0Mi41IiB5MT0iODEiIHgyPSIxNDIuNSIgeTI9IjIwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQkUzRjIwIi8+CjxzdG9wIG9mZnNldD0iMC44MTEiIHN0b3AtY29sb3I9IiMwMDI1MzQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzBfMSIgeDE9IjIzNC41IiB5MT0iMTA5IiB4Mj0iMjM0LjUiIHkyPSIxMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0IxQ0FGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNzk2IiBzdG9wLWNvbG9yPSIjNEE0MjY0Ii8+CjxzdG9wIG9mZnNldD0iMC45MDEiIHN0b3AtY29sb3I9IiM0QTQyNjQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzBfMSIgeDE9IjI0OC45NjgiIHkxPSIxMTcuNTE0IiB4Mj0iMjIxLjQxNiIgeTI9IjExNy4xMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMC41NjYiIHN0b3AtY29sb3I9IiM5QzQzMEYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzBfMSIgeDE9IjE0MC4yMzkiIHkxPSI0MC43Mzg1IiB4Mj0iMTQwLjIzOSIgeTI9IjYzLjczODUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwMzUyMSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNjAwMDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDRfbGluZWFyXzBfMSIgeDE9IjIwNi43NyIgeTE9IjQwLjQzMTciIHgyPSIyMDYuNzciIHkyPSI3OS4xMDg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0MjQyOTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUYwMDM1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl8wXzEiIHgxPSIyMjIuMzgyIiB5MT0iNDcuNDYxMiIgeDI9IjE5MC4xMjIiIHkyPSI3NC4zNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzQxMDgwOCIgc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMC40ODUiIHN0b3AtY29sb3I9IiM2QzMzMDciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" />
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

let canvas;
let context;

let stars = [];

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

    createStars();

    addEventListener("resize", (event) => {
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;
        createStars();

    });

    checkChartsInterval = setInterval(checkCharts,1);

    if(localStorage.getItem("isDescending")==null){
        localStorage.setItem("isDescending","true");
    }

    if(localStorage.getItem("orderBy")==null){
        localStorage.setItem("orderBy","default");
    }
    let login;
    if(!localStorage.getItem("login")){

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
        login = localStorage.getItem("login");
    }

    if(localStorage.getItem("uuidList")){
        userUUID = JSON.parse(localStorage.getItem("uuidList")).find((u)=>u.login==login);
        if(!userUUID){
            showNoUUID_UI(login);
        }
        else{
            userUUID = userUUID.UUID;
            if(!localStorage.getItem("login")){
                localStorage.setItem("login",login);
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
                localStorage.setItem("login",login);
                userUUID = userUUID.UUID;
                localStorage.setItem("uuidList",JSON.stringify(uuidList));
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
        canvasInterval = setInterval(draw,1000);
        document.getElementById("cosmos-sort-button").addEventListener("click",()=>{
            let isDescending = localStorage.getItem("isDescending");

            if(isDescending=="false"){
                isDescending = true;
                document.getElementById("cosmos-sort-button").removeAttribute("ascending");
                document.getElementById("cosmos-sort-button").setAttribute("descending","");
            }
            else if(isDescending=="true"){
                isDescending = false;
                document.getElementById("cosmos-sort-button").removeAttribute("descending");
                document.getElementById("cosmos-sort-button").setAttribute("ascending","");
            }
            localStorage.setItem("isDescending",isDescending);
            getData();
        });

        document.getElementById("cosmos-update-login").addEventListener("click",()=>{
            let newLogin = document.getElementById("cosmos-sidebar-login").value;
            localStorage.setItem("login",newLogin);
            userUUID = JSON.parse(localStorage.getItem("uuidList")).find((u)=>u.login==newLogin).UUID;
            document.getElementById("cosmos-sidebar-workerId").value = userUUID;
            displayDashboard();
        });

        document.getElementById("cosmos-update-workerId").addEventListener("click",()=>{
            let newUUID = document.getElementById("cosmos-sidebar-workerId").value;
            let uuidList = JSON.parse(localStorage.getItem("uuidList"));
            uuidList.find((u)=>u.login==localStorage.getItem("login")).UUID=newUUID;
            localStorage.setItem("uuidList",JSON.stringify(uuidList));
            userUUID = newUUID;
            displayDashboard();
        });

        document.getElementById("cosmos-order-by-select").addEventListener("change",()=>{
            localStorage.setItem("orderBy",document.getElementById("cosmos-order-by-select").value);
            getData();
        });
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
    if(localStorage.getItem("isDescending")=="false"){
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

function displayData(){
    let labelingJobs = orderLabelingJobs();
    displayLabelingJobs(labelingJobs);
    displayTotal();
}

function displayLabelingJobs(labelingJobs){
    let batches = "";

    for(let i = 0;i<labelingJobs.length;i++){
        let labelingJob = labelingJobs[i];
        batches+=`
            <div class="cosmos-job">
                <svg class="cosmos-job-icon" width="77" height="90" viewBox="0 0 77 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6022 1.86405C37.1496 -0.0820343 39.9091 -0.0799789 40.4536 1.86692L46.9825 25.211C48.8571 31.9137 54.0815 37.1598 60.7764 39.0623L74.8116 43.0507C76.6754 43.5804 76.7725 46.1855 74.9533 46.8524L59.4173 52.5477C53.4909 54.7203 48.9378 59.5631 47.1346 65.6122L40.4442 88.0559C39.8768 89.9592 37.1821 89.9613 36.6118 88.0589L29.8634 65.5506C28.0603 59.5365 23.5376 54.7182 17.6496 52.5384L2.28407 46.8499C0.472585 46.1793 0.570052 43.5848 2.42675 43.0519L16.2831 39.0755C22.9451 37.1637 28.1423 31.939 30.0191 25.2671L36.6022 1.86405Z" fill="white"/>
                </svg>

                <h3 class="cosmos-job-title">${labelingJob.jobName.split("/")[1]}</h3>
                <div class="cosmos-job-values">
                    <div class="cosmos-job-value">
                        <label class="cosmos-job-label">Bandwidth</label>
                        <span class="cosmos-job-total-time">${formatTime(labelingJob.totalTime)}</span>
                    </div>
                    <div class="cosmos-job-value">
                        <label class="cosmos-job-label">Throughput</label>
                        <span class="cosmos-job-processed-tasks">${labelingJob.processedTasks}</span>
                    </div>
                    <div class="cosmos-job-value">
                        <label class="cosmos-job-label">AHT</label>
                        <span class="cosmos-job-average-handle-time">${formatTime(labelingJob.averageHandleTime)}</span>
                    </div>
                </div>
                <div class="cosmos-job-expanded">
                    <div class="cosmos-job-expanded-section">
                        ${displayJobTimeframe(labelingJob.timePoints)}
                    </div>
                </div>
            </div>\n
        `;
    }
    document.getElementById("cosmos-batches").innerHTML = batches;
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
            else{
                startIndex = i;
            }
        }
    }

    return `Start Time: ${UTCTimeToLocal(timePointLabels[startIndex])} Last Time: ${UTCTimeToLocal(timePointLabels[endIndex])}`;
}

function UTCTimeToLocal(dateTime){//Takes date "01/01" and time "12:00" values which are by default using a UTC timezone to create a Date object and retrieve the local timezone equivalent.
    let newDate = new Date();
    let date = dateTime.date.split("/");
    newDate.setUTCMonth(Number(date[0])-1);
    newDate.setUTCDate(Number(date[1]));
    let time = dateTime.time.split(":");
    newDate.setUTCHours(Number(time[0]));
    newDate.setUTCMinutes(Number(time[1])-5);
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

    document.getElementById("cosmos-summary-total-time").innerText = formatTime(globalTimeSpent);
    document.getElementById("cosmos-summary-processed-tasks").innerText = globalBandwidth;
}

function formatTime(time){//Takes a time value in seconds and returns its equivalent either in seconds "10s", minutes "10min" or hours "3h".
    if(!time){
        return "--";
    }
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

function draw() {//Draws the starred sky for the canvas element in the background.
    drawBackground();
    drawStars();
}

function drawBackground() {//Generates a gradient for the background
    let gradient = context.createLinearGradient(0, window.innerHeight * 0.1, window.innerWidth, window.innerWidth * 0.9);
    gradient.addColorStop(0, "rgba(9,8,23,1)");
    gradient.addColorStop(0.32, "rgba(22,3,45,1)");
    gradient.addColorStop(0.65, "rgba(3,11,33,1)");
    gradient.addColorStop(0.96, "rgba(9,1,19,1)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function createStars(){//Generates the position(x,y), size, opacity and the rate which the opacity changes over time of all stars for the background.
    stars = [];
    let starAmount = 1000;
    starAmount = Math.floor(window.innerWidth*window.innerHeight/2000);
    for(let i=0;i<starAmount;i++){
        let x=Math.floor(Math.random()*window.innerWidth);
        let y=Math.floor(Math.random()*window.innerHeight);
        let size = Math.floor(Math.random()*1.5)+1;
        let opacity = Math.random().toFixed(2);
        let opacityChangeRate = ((Math.floor(Math.random()*2000)-1000)/50000).toFixed(2);

        let star = {x,y,size,opacity,opacityChangeRate};
        stars.push(star);
    }
}

function drawStars() {//Shows the hidden drawings for the background so that both the stars and the drawings are shown simultaneously. Stars are drawn on to the canvas for the background from the previously generated star list.
    if(document.getElementById("cosmos-cosmic-eye").className=="hidden"){
        document.getElementById("cosmos-cosmic-eye").className = "";
        document.getElementById("cosmos-pisces-constellation").className = "";
        document.getElementById("cosmos-ursa-major-minor-constellation").className = "";
        document.getElementById("cosmos-sus-mogus-constellation").className = "";
        document.getElementById("cosmos-black-hole").className = "";
        document.getElementById("cosmos-blood-moon").className = "";
    }
    for(let i=0;i<stars.length;i++){
        let star = stars[i];
        let radialGradient = context.createRadialGradient(star.x/2,star.y/2,star.size/2,star.x,star.y,star.size);
        radialGradient.addColorStop(0.5,"#ffffff");
        radialGradient.addColorStop(1,`rgba(255,255,255,${star.opacity})`);

        context.beginPath();
        context.arc(star.x,star.y,star.size,0,2*Math.PI);
        context.fillStyle = radialGradient;
        context.fill();

        star.opacity=Number(star.opacity)+Number(star.opacityChangeRate);
        if((star.opacity>=1)||(star.opacity<=0)){
            star.opacityChangeRate=star.opacityChangeRate*-1;
        }
    }
}

function fetchWorkerIds(){//Attempts to retrieve the list of existing WorkerIds and merges it with the user's existing UUID List in their localStorage.
    fetch("https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/workerTable.json")
        .then((response) => response.text())
        .then((result) => {
        let uuidList = JSON.parse(result);
        if(localStorage.getItem("uuidList")){
            let oldUUIDList = JSON.parse(localStorage.getItem("uuidList"));
            for(let i = 0; i<uuidList.length;i++){
                let user = uuidList[i];
                let compareUser = oldUUIDList.findIndex((u)=>u.login==user.login);
                if(compareUser>=0){
                    let splicedUser = oldUUIDList.splice(compareUser,1);
                    user.UUID = splicedUser[0].UUID;
                }
            }
            uuidList = uuidList.concat(oldUUIDList);
        }
        localStorage.setItem("uuidList",JSON.stringify(uuidList));

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
            }
            startedLoading=true;
        }
        else{
            if(startedLoading){
                getData();
                document.getElementById("cosmos-loading-message").className="hidden";
                clearInterval(loadingCheckInterval);
                startedLoading=false;
            }

        }
    }
}

function displayDashboard(){//Generates a custom dashboard that retrieves the total time spent, amount of processed tasks and average handle time of all dashboards for the WorkerId provided.
    let hours = 12;
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

function declareHTML(){
    CosmosUIHTML = `
<canvas id="cosmos-canvas"></canvas>
<a href="https://phonetool.amazon.com/users/elgustav" target="_blank">
<img id="cosmos-logo" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Cosmos%20icon.svg"></img>
</a>
<img id="cosmos-cosmic-eye" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Cosmic%20Eye%20Constellation.svg"></img>
<img id="cosmos-pisces-constellation" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Pisces%20Constellation.svg"></img>
<img id="cosmos-ursa-major-minor-constellation" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Ursa%20Major%20Minor%20Constellation.svg"></img>
<img id="cosmos-sus-mogus-constellation" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Sus%20Mogus%20Constellation.svg"></img>
<img id="cosmos-black-hole" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Black%20hole.svg"></img>
<img id="cosmos-blood-moon" class="hidden" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Blood%20Moon.svg"></img>

<div id="cosmos-loading-message">
    <img id="cosmos-loading-icon" src="https://raw.githubusercontent.com/gmherond/Cosmos/refs/heads/main/Cosmos%20Loading%20Icon.svg"></img>
    <span id="cosmos-loading-text">Cosmos is loading<br>Please keep this tab open while you see this message, thank you!✨</span>
</div>

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

    <div id="cosmos-batches">
    </div>
</div>

<div id="cosmos-sidebar">
    <h3 id="cosmos-sidebar-title">Settings <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg></h3>
    <div class="cosmos-sidebar-container">
        <details class="cosmos-sidebar-details">
            <summary class="cosmos-sidebar-details-summary">User Information</summary>
            <div class="cosmos-sidebar-details-settings">
            <label>Login Username:</label>
            <input id="cosmos-sidebar-login" value="${localStorage.getItem("login")}" placeholder="johnsm">
            <button id="cosmos-update-login" class="cosmos-sidebar-button">Update Login</button>
            <label>Cloudwatch WorkerId:</label>
            <input id="cosmos-sidebar-workerId" value="${userUUID}" placeholder="550e8400-e29b-41d4-a716-446655440000">
            <button id="cosmos-update-workerId" class="cosmos-sidebar-button">Overwrite WorkerId</button>
            </div>
        </details>
    </div>
    <div class="cosmos-sidebar-container">
            <label>Order by</label>
            <div class="flex-center">
                <select id="cosmos-order-by-select">
                    <option ${localStorage.getItem("orderBy")=="default"?"selected":""} value="default">Default</option>
                    <option ${localStorage.getItem("orderBy")=="recent"?"selected":""} value="recent">Most recent</option>
                    <option ${localStorage.getItem("orderBy")=="bandwidth"?"selected":""} value="bandwidth">Bandwidth</option>
                    <option ${localStorage.getItem("orderBy")=="throughput"?"selected":""} value="throughput">Throughput</option>
                    <option ${localStorage.getItem("orderBy")=="aht"?"selected":""} value="aht">AHT</option>
                </select>
                <button id="cosmos-sort-button" ${localStorage.getItem("isDescending")=="true" ? "descending" : "ascending"} class="flex-center">
                    <svg id="cosmos-sort-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </button>
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
            localStorage.setItem("login",userlogin);
            userUUID = document.getElementById("cosmos-submit-input").value.trim();
            localStorage.setItem("uuidList",JSON.stringify([{login:userlogin,UUID:userUUID}]));
            noUUIDContainer.remove();
            declareHTML();
            displayDashboard();
            initInterval = setInterval(initFunction,100);
        }
    });
}
