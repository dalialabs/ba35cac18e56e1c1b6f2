"use strict";(self.webpackChunkmaia_node=self.webpackChunkmaia_node||[]).push([[590,72],{95590:(e,t,n)=>{n.r(t);n(30050),n(59749),n(81919),n(99474),n(35082),n(40739),n(30024),n(34284),n(86544),n(84254);var r=n(71002),i=n(42982),o=n(15861),s=n(4942),a=n(15671),l=n(43144),c=n(82963),u=n(61120),h=n(79340),d=n(64687),p=n.n(d),f=(n(60228),n(73964),n(64043),n(57267),n(34338),n(69358),n(63975),n(49693),n(47522),n(9873),n(41517),n(96869),n(76801),n(89730),n(52003),n(12826),n(50886),n(77049),n(21694),n(97195),n(6203),n(38077),n(752),n(76265),n(78730),n(79307),n(43843),n(268),n(45643)),m=(n(28436),new function(){var e={A:!0,ABBR:!0,B:!0,BLOCKQUOTE:!0,BODY:!0,BR:!0,CENTER:!0,CODE:!0,DD:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FONT:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HR:!0,I:!0,IMG:!0,LABEL:!0,LI:!0,OL:!0,P:!0,PRE:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRONG:!0,SUB:!0,SUP:!0,TABLE:!0,TBODY:!0,TR:!0,TD:!0,TH:!0,THEAD:!0,UL:!0,U:!0,VIDEO:!0},t={FORM:!0,"GOOGLE-SHEETS-HTML-ORIGIN":!0},n={align:!0,color:!0,controls:!0,height:!0,href:!0,id:!0,src:!0,style:!0,target:!0,title:!0,type:!0,width:!0},r={"background-color":!0,color:!0,"font-size":!0,"font-weight":!0,"text-align":!0,"text-decoration":!0,width:!0},i=["http:","https:","data:","m-files:","file:","ftp:","mailto:","pw:"],o={href:!0,action:!0},s=new DOMParser;function a(e,t){for(var n=0;n<t.length;n++)if(0==e.indexOf(t[n]))return!0;return!1}this.SanitizeHtml=function(l,c){if(""==(l=l.trim())||"<br>"==l)return"";-1==l.indexOf("<body")&&(l="<body>"+l+"</body>");var u=s.parseFromString(l,"text/html");return"BODY"!==u.body.tagName&&u.body.remove(),"function"!=typeof u.createElement&&u.createElement.remove(),function s(l){var h;if(l.nodeType==Node.TEXT_NODE)h=l.cloneNode(!0);else if(l.nodeType==Node.ELEMENT_NODE&&(e[l.tagName]||t[l.tagName]||c&&l.matches(c))){h=t[l.tagName]?u.createElement("DIV"):u.createElement(l.tagName);for(var d=0;d<l.attributes.length;d++){var p=l.attributes[d];if(n[p.name])if("style"==p.name)for(var f=0;f<l.style.length;f++){var m=l.style[f];r[m]&&h.style.setProperty(m,l.style.getPropertyValue(m))}else{if(o[p.name]&&p.value.indexOf(":")>-1&&!a(p.value,i))continue;h.setAttribute(p.name,p.value)}}for(var v=0;v<l.childNodes.length;v++){var g=s(l.childNodes[v]);h.appendChild(g,!1)}if(("SPAN"==h.tagName||"B"==h.tagName||"I"==h.tagName||"U"==h.tagName)&&""==h.innerHTML.trim())return u.createDocumentFragment()}else h=u.createDocumentFragment();return h}(u.body).innerHTML.replace(/<br[^>]*>(\S)/g,"<br>\n$1").replace(/div><div/g,"div>\n<div")},this.AllowedTags=e,this.AllowedAttributes=n,this.AllowedCssStyles=r,this.AllowedSchemas=i});function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t=(0,u.Z)(t),(0,c.Z)(e,S()?Reflect.construct(t,n||[],(0,u.Z)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var w="active",I="data-value",L="SHOW_ALL",x=["Enter","NumpadEnter","Comma","NumpadDivide","Slash"],k="url",A="jsonUrl",T=function(e){function t(){var e;return(0,a.Z)(this,t),(e=E(this,t)).attachShadow({mode:"open"}),e.shadowRoot.innerHTML='\n    <link rel="stylesheet" href="'.concat(f.default.getFullUrl(document).origin,'/css/forms/job-title/job-title.css">\n    '),window.fetch("".concat(f.default.getFullUrl(document).origin,"/html/input-job-title.html")).then((function(e){return e.text()})).then((function(t){var n=document.createElement("template");n.innerHTML=t,e.shadowRoot.appendChild(n.content.cloneNode(!0));var r={source:"".concat(f.default.getFullUrl(document).origin,"/job-titles").replace("forms.","dashboard."),sourceType:k,minNumberInvoke:3,freeInput:!0,value:"",maxResults:e.getDefaultMaxResults(),maxVisible:5,customCss:"",externalCss:"[]",useTextValue:!1,maxLength:32,inputSelector:"#input-job-title",inputName:"job_title",maxJobTitles:0,placeholder:"Job Title"};e.options=b(b({},r),e.dataset),e.shadowRoot.querySelector(".search-input").setAttribute("name",e.options.inputName),e.shadowRoot.querySelector("#job-titles > option:first-child").innerText=e.options.placeholder,e.options.customCss&&""!==e.options.customCss&&(e.shadowRoot.innerHTML+='<link rel="stylesheet" href="'.concat(f.default.getFullUrl(document).origin,"/css/forms/job-title/").concat(e.options.customCss,'.css">'));try{e.options.externalCss=JSON.parse(e.options.externalCss)}catch(e){console.error("invalid externalCss value")}Array.isArray(e.options.externalCss)&&e.options.externalCss.length>0&&e.options.externalCss.forEach((function(t){e.shadowRoot.innerHTML+='<link rel="stylesheet" href="'.concat(t,'">')})),e.options.freeInput="true"===e.options.freeInput,e.selectElement=e.shadowRoot.querySelector("#job-titles"),e.selectElement.style.display="none",e.placeholder=e.getPlaceholder(),e.holderElement=e.shadowRoot.querySelector(".holder-element"),e.containerElement=e.shadowRoot.querySelector(".container-element"),e.dropElement=e.shadowRoot.querySelector(".drop-element"),e.searchInput=e.shadowRoot.querySelector(".search-input"),e.selectElement.parentNode.insertBefore(e.holderElement,e.selectElement.nextSibling),e.configureSearchInput(),e.configureContainerElement(),e.defaultValues()})),e}var n,s,c;return(0,h.Z)(t,e),(0,l.Z)(t,[{key:"getDefaultMaxResults",value:function(){return f.default.isMobile()?3:6}},{key:"defaultValues",value:function(){var e=this;this.options.value&&this.options.value.length>0&&this.options.value.split(/[,/]+/).forEach((function(t){return e.addItem(t,t)}))}},{key:"getPlaceholder",value:function(){var e=this.selectElement.querySelector("option");if(e){if(!e.value){var t=e.innerText;return e.remove(),t}return this.selectElement.getAttribute("placeholder")?this.selectElement.getAttribute("placeholder"):this.selectElement.getAttribute("data-placeholder")?this.selectElement.getAttribute("data-placeholder"):""}}},{key:"configureContainerElement",value:function(){var e=this;this.containerElement.addEventListener("click",(function(t){e.searchInput.focus()}))}},{key:"handleInput",value:(c=(0,o.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.canAddItems()){e.next=2;break}return e.abrupt("return");case 2:if(this.adjustWidth(),this.updateHiddenField(),!(this.searchInput.value.length>=this.options.minNumberInvoke)){e.next=11;break}return e.next=7,this.fetchData();case 7:t=e.sent,this.buildSuggestions(t),e.next=12;break;case 11:this.hideSuggestions();case 12:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"selectFreeInput",value:function(){this.options.freeInput&&this.searchInput.value&&(this.addItem(this.searchInput.value,this.searchInput.value),this.resetSearchInput(),this.hideSuggestions())}},{key:"configureSearchInput",value:(s=(0,o.Z)(p().mark((function e(){var t=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.searchInput.maxLength=this.options.maxLength,this.adjustWidth(),this.searchInput.addEventListener("input",this.handleInput.bind(this)),this.searchInput.addEventListener("focus",this.handleInput.bind(this)),this.searchInput.addEventListener("blur",(function(){return setTimeout(t.selectFreeInput.bind(t),100)})),this.searchInput.addEventListener("keydown",(function(e){if(x.includes(e.code)){var n=t.getActiveSelection();return n?(t.addItem(n.innerText,n.getAttribute(I)),t.resetSearchInput(),t.hideSuggestions()):t.selectFreeInput(),void e.preventDefault()}"ArrowUp"===e.code&&t.moveSelectionUp(),"ArrowDown"===e.code&&t.moveSelectionDown(),"Backspace"===e.code&&0===t.searchInput.value.length&&(t.removeLastItem(),t.adjustWidth(),t.hideSuggestions()),"Escape"===e.code&&t.hideSuggestions(),window.postMessage({type:"input-keydown",key:e.which})}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"moveSelectionUp",value:function(){var e=this.getActiveSelection();if(e){var t=e.parentNode;do{t=t.previousSibling}while(t&&"none"===t.style.display);if(!t)return;e.classList.remove(w),t.querySelector("a").classList.add(w)}else{var n=this.dropElement.querySelector("li:last-child a");n&&n.classList.add(w)}}},{key:"moveSelectionDown",value:function(){var e=this.getActiveSelection();if(e){var t=e.parentNode;do{t=t.nextSibling}while(t&&"none"===t.style.display);if(!t)return;e.classList.remove(w),t.querySelector("a").classList.add(w)}else{var n=this.dropElement.querySelector("li:first-child a");n&&n.classList.add(w)}}},{key:"adjustWidth",value:function(){this.searchInput.value?this.searchInput.size=this.searchInput.value.length+1:this.getSelectedValues().length?(this.searchInput.placeholder="",this.searchInput.size=1):(this.searchInput.size=this.placeholder.length||1,this.searchInput.placeholder=this.placeholder)}},{key:"buildSuggestions",value:function(e){var t=this;e=e.slice(0,this.options.maxResults),this.dropElement.innerHTML="",this.selectElement.innerHTML="",e.forEach((function(e){var n=document.createElement("option");n.text=e.title||e,n.value=e.id||e.title||e,t.selectElement.appendChild(n)}));for(var n=this.selectElement.querySelectorAll("option"),r=function(){var e=n[i];if(!e.getAttribute("value"))return 1;var r=document.createElement("li"),o=document.createElement("a");r.append(o),o.classList.add("dropdown-item"),o.setAttribute(I,e.getAttribute("value")),o.setAttribute("href","#");var s=t.boldString(e.innerText,t.searchInput.value);o.innerHTML=s,t.dropElement.appendChild(r),o.addEventListener("mouseenter",(function(){t.removeActiveSelection(),r.querySelector("a").classList.add(w)})),o.addEventListener("click",(function(e){e.preventDefault(),t.addItem(o.innerText,o.getAttribute(I)),t.resetSearchInput(),t.hideSuggestions()}))},i=0;i<n.length;i++)r();this.showSuggestions()}},{key:"boldString",value:function(e,t){var n=new RegExp(t,"i");return e.replace(n,"<strong>"+t+"</strong>")}},{key:"resetSearchInput",value:function(){this.searchInput.value="",this.adjustWidth(),this.updateHiddenField()}},{key:"getSelectedValues",value:function(){var e=this.selectElement.querySelectorAll("option:checked");return Array.from(e).map((function(e){return e.value}))}},{key:"showSuggestions",value:function(){this.dropElement.classList.contains("show")||this.dropElement.classList.add("show");for(var e=this.searchInput.value.toLocaleLowerCase(),t=this.getSelectedValues(),n=this.dropElement.querySelectorAll("li"),r=!1,i=null,o=0;o<n.length;o++){var s=n[o],a=s.innerText.toLocaleLowerCase(),l=s.querySelector("a");l.classList.remove(w),-1===t.indexOf(l.getAttribute(I))?0===a.indexOf(e)?(s.style.display="list-item",r=!0,i||(i=s)):s.style.display="none":s.style.display="none"}r||this.dropElement.classList.remove("show")}},{key:"hideSuggestions",value:function(){this.dropElement.innerHTML="",this.selectElement.innerHTML="",this.dropElement.classList.contains("show")&&this.dropElement.classList.remove("show")}},{key:"getActiveSelection",value:function(){return this.dropElement.querySelector("a."+w)}},{key:"removeActiveSelection",value:function(){var e=this.getActiveSelection();e&&e.classList.remove(w)}},{key:"removeLastItem",value:function(){var e=this.getItems("span.badge:not(#".concat(L,")"));if(e.length){var t=e[e.length-1];this.removeItem(t.getAttribute(I))}}},{key:"removeAllItems",value:function(){var e=this,t=this.getItems("span.badge:not(#".concat(L,")"));t.length&&t.forEach((function(t){return e.removeItem(t.getAttribute(I))}))}},{key:"addItem",value:function(e,t){var n=this;if(e=m.SanitizeHtml(e),t=m.SanitizeHtml(t),!(this.options.maxJobTitles>0&&this.getItems("span.badge:not(#".concat(L,")")).length>=this.options.maxJobTitles||(t&&!this.options.useTextValue||(t=e),this.jobTitleExists(t.replace(/'/g,"\\'"))||""===e||""===t))){var r=document.createElement("span");r.classList.add("badge"),r.setAttribute(I,t),r.innerHTML="<span>".concat(e,'</span>\n<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>\n'),r.addEventListener("click",(function(){n.removeItem(t.replace(/'/g,"\\'"))}));var o=this.containerElement.querySelector("#".concat(L));this.containerElement.insertBefore(r,o||this.searchInput);var s=this.selectElement.querySelector("option[value='".concat(t.replace(/'/g,"\\'"),"']"));s?s.setAttribute("selected","selected"):((s=document.createElement("option")).value=t,s.innerText=e,s.setAttribute("selected","selected"),this.selectElement.appendChild(s));var a=this.getItems("span.badge:not(#".concat(L,")"));if(a.length>this.options.maxVisible){if(this.maxVisibleShow)(0,i.Z)(a).slice(this.options.maxVisible).forEach((function(e){e.classList.add("d-none")}));else r.classList.add("d-none");this.updateShowMoreItems()}this.updateHiddenField()}}},{key:"updateShowMoreItems",value:function(){var e=this,t=this.getItems("span.badge.d-none"),n=this.containerElement.querySelector("#".concat(L));if(n)n.innerHTML="<span>+".concat(t.length," more</span> <img src='").concat(f.default.getFullUrl(document).origin,"/images/icon-more.png' width='20' height='20' />");else{var r=document.createElement("span");r.id=L,r.classList.add("badge"),r.setAttribute(I,L),r.innerHTML="<span >+".concat(t.length," more</span> <img src='").concat(f.default.getFullUrl(document).origin,"/images/icon-more.png' width='20' height='20' />"),r.addEventListener("click",(function(t){e.maxVisibleShow=!0,e.getItems("span.badge.d-none").forEach((function(e){return e.classList.remove("d-none")})),e.containerElement.querySelector("#".concat(L)).remove()})),this.containerElement.insertBefore(r,this.searchInput)}}},{key:"removeItem",value:function(e){var t=this.containerElement.querySelector("span[".concat(I,"='").concat(e,"']"));if(t){t.remove();var n=this.selectElement.querySelector("option[value='".concat(e,"']"));n&&n.removeAttribute("selected"),this.updateHiddenField();var r,i=this.getItems("span.badge:not(#".concat(L,")")),o=this.containerElement.querySelector("#".concat(L)),s=0,a=v(i);try{for(a.s();!(r=a.n()).done;){var l=r.value;o&&(s>this.options.maxVisible-1?l.classList.add("d-none"):l.classList.remove("d-none")),s++}}catch(e){a.e(e)}finally{a.f()}var c=this.getItems("span.badge.d-none");o&&(o.querySelector("span").innerHTML="+".concat(c.length," more")),0===c.length&&o&&o.remove()}}},{key:"updateHiddenField",value:function(){var e=this.getItems("span.badge:not(#".concat(L,")")),t=(0,i.Z)(e).map((function(e){return e.getAttribute(I)}));this.searchInput.value.length>0&&t.push(this.searchInput.value);var n=this.querySelector(this.options.inputSelector),r=t.join(",");if(n)n.value=r,n.dispatchEvent(new window.Event("change",{bubbles:!0}));else{var o=Array.prototype.filter,s=this.querySelectorAll("div");o.call(s,(function(e){return!!e.shadowRoot}))[0].shadowRoot.querySelector('input[name="'.concat(this.options.inputName,'"]')).value=r}}},{key:"jobTitleExists",value:function(e){var t=!1,n=this.getItems("span");return!!n.length&&(n.forEach((function(n){n.getAttribute(I)===e&&(t=!0)})),t)}},{key:"fetchData",value:(n=(0,o.Z)(p().mark((function e(){var t,n,r,i=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isValidURL(this.options.source)){e.next=10;break}if(t=new window.URL(this.options.source),this.options.sourceType===k&&t.searchParams.append("title",this.searchInput.value),n=window.fetch(t,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})),r=[],this.options.sourceType!==A){e.next=9;break}return e.next=8,n.then((function(e){return e.map((function(e){return e.title=e.title.replace(/,|\//g," - "),e})).filter((function(e){return e.title.toLowerCase().includes(i.searchInput.value.toLowerCase())}))}));case 8:r=e.sent;case 9:return e.abrupt("return",this.options.sourceType===k?n.then((function(e){return e.data})):r.slice(0,5));case 10:if(!this.isValidJson(this.options.source)){e.next=12;break}return e.abrupt("return",JSON.parse(this.options.source));case 12:return console.error("Please check the data source for job title element"),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"isValidURL",value:function(e){var t;e.startsWith("/")&&(e=f.default.getFullUrl(document).origin+e,this.options.source=e);try{t=new window.URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol}},{key:"isValidJson",value:function(e){e="string"!=typeof e?JSON.stringify(e):e;try{e=JSON.parse(e)}catch(e){return!1}return"object"===(0,r.Z)(e)&&null!==e}},{key:"getItems",value:function(e){return this.containerElement.querySelectorAll(e)}},{key:"setSource",value:function(e){this.setAttribute("data-source",JSON.stringify(e))}},{key:"canAddItems",value:function(){return 0===this.options.maxJobTitles||this.getItems("span.badge:not(#".concat(L,")")).length<this.options.maxJobTitles}}]),t}(window.HTMLElement);window.customElements.get("input-job-title")||window.customElements.define("input-job-title",T)},75984:(e,t,n)=>{var r=n(41236).PROPER,i=n(3689),o=n(86350);e.exports=function(e){return i((function(){return!!o[e]()||"​᠎"!=="​᠎"[e]()||r&&o[e].name!==e}))}},9873:(e,t,n)=>{var r=n(22615),i=n(68844),o=n(65773),s=n(85027),a=n(981),l=n(74684),c=n(76373),u=n(71514),h=n(43126),d=n(34327),p=n(54849),f=n(66100),m=n(87901),v=n(3689),g=m.UNSUPPORTED_Y,y=Math.min,b=i([].push),E=i("".slice),S=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),w="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;o("split",(function(e,t,n){var i="0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t;return[function(t,n){var o=l(this),s=a(t)?void 0:p(t,e);return s?r(s,t,o,n):r(i,d(o),t,n)},function(e,r){var o=s(this),a=d(e);if(!w){var l=n(i,o,a,r,i!==t);if(l.done)return l.value}var p=c(o,RegExp),m=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),S=new p(g?"^(?:"+o.source+")":o,v),I=void 0===r?4294967295:r>>>0;if(0===I)return[];if(0===a.length)return null===f(S,a)?[a]:[];for(var L=0,x=0,k=[];x<a.length;){S.lastIndex=g?0:x;var A,T=f(S,g?E(a,x):a);if(null===T||(A=y(h(S.lastIndex+(g?x:0)),a.length))===L)x=u(a,x,m);else{if(b(k,E(a,L,x)),k.length===I)return k;for(var O=1;O<=T.length-1;O++)if(b(k,T[O]),k.length===I)return k;x=L=A}}return b(k,E(a,L)),k}]}),w||!S,g)},268:(e,t,n)=>{var r,i=n(79989),o=n(46576),s=n(82474).f,a=n(43126),l=n(34327),c=n(42124),u=n(74684),h=n(27413),d=n(53931),p=o("".slice),f=Math.min,m=h("startsWith");i({target:"String",proto:!0,forced:!!(d||m||(r=s(String.prototype,"startsWith"),!r||r.writable))&&!m},{startsWith:function(e){var t=l(u(this));c(e);var n=a(f(arguments.length>1?arguments[1]:void 0,t.length)),r=l(e);return p(t,n,n+r.length)===r}})},28436:(e,t,n)=>{var r=n(79989),i=n(61435).trim;r({target:"String",proto:!0,forced:n(75984)("trim")},{trim:function(){return i(this)}})}}]);