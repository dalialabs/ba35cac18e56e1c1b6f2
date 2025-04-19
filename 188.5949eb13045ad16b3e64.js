"use strict";(self.webpackChunkmaia_node=self.webpackChunkmaia_node||[]).push([[188],{6188:(e,t,n)=>{n.r(t);n(30050),n(81919),n(99474),n(35082),n(40739),n(89730),n(34284),n(84254),n(63975);var o=n(42982),s=n(15861),i=n(4942),a=n(15671),r=n(43144),l=n(82963),c=n(61120),p=n(79340),u=n(64687),d=n.n(u);n(69358),n(752),n(60228),n(21694),n(76265),n(78730),n(79307),n(73964),n(50886),n(77049),n(34338),n(30024),n(12826),n(49693),n(47522),n(6203),n(38077),n(59749),n(86544),n(64043),n(57267),n(98742),n(25728),n(28436),n(76801),n(43843),n(38320),n(96869);function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,s=function(){};return{s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){r=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(r)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t=(0,c.Z)(t),(0,l.Z)(e,f()?Reflect.construct(t,n||[],(0,c.Z)(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var g="dalia-apply-token",w={baseUrl:"http://dashboard.dalia.localhost:3000",submitPath:"api/v2/eapply/web",messagesPath:"eapply/web-messages",customCssPath:"",completeMessage:"You have completed the application questions successfully",blackListMessagesContains:["Reminder"],customCss:"",isApplyThree:!1,hideBackBtn:!0},C=["Enter","NumpadEnter"],k="api",S=function(e){function t(){var e;return(0,a.Z)(this,t),e=b(this,t),console.log("Loading dalia apply web..."),e.attachShadow({mode:"open"}),e}var i;return(0,p.Z)(t,e),(0,r.Z)(t,[{key:"connectedCallback",value:function(){this.options=y(y({},w),this.dataset),this.isAPICrawler=this.options.crawler===k,this.options.startMinimized=this.options.startMinimized&&"true"===this.options.startMinimized,this.data={};try{this.jobDetails=JSON.parse(this.options.jobDetails)}catch(e){console.log(e)}this.render()}},{key:"getUserToken",value:function(){var e=this.dataset.applyToken;if(e)return this.insideForm="form"===this.options.source,this.insideRVP="rvp"===this.options.source,this.applyInForm=this.insideForm||this.insideRVP,e;var t=new URL(window.location.href);return t.searchParams.has(g)?t.searchParams.get(g):null}},{key:"getSearchParam",value:function(e){var t=new URL(window.location.href);return t.searchParams.has(e)?t.searchParams.get(e):null}},{key:"waitForStyleSheetLoading",value:function(){var e=this.shadowRoot.querySelectorAll('link[as="style"]');return Promise.all(Array.from(e).map((function(e){return new Promise((function(t){e.sheet?t():(e.addEventListener("load",(function(){t()})),e.onerror=t)}))})))}},{key:"getInitialMessage",value:function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new"){case"new":case"started":return"Hi".concat(this.options.userName?" ".concat(this.options.userName):"","!\n        Thanks for your interest in the <strong>").concat(this.options.jobTitle,"</strong> role in ").concat(this.options.jobLocation,".\n        Please answer the questions below to complete your application.")}}},{key:"canRender",value:function(){return null!==this.getUserToken()}},{key:"render",value:(i=(0,s.Z)(d().mark((function e(){var t,o,s,i,a,r,l=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.canRender()){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,!this.isAPICrawler){e.next=7;break}return this.prepareAPICrawlerSubmit(),this.loadMessages(),e.abrupt("return");case 7:return e.next=9,window.fetch("".concat(this.options.baseUrl,"/html/apply-web.html"));case 9:return t=e.sent,e.next=12,t.text();case 12:return o=e.sent,(s=document.createElement("template")).innerHTML=o,e.next=17,n.e(629).then(n.bind(n,81629));case 17:return i=e.sent.default.toString(),this.shadowRoot.innerHTML+="<style>".concat(i,"</style>"),this.options.customCss&&""!==this.options.customCss&&(this.shadowRoot.innerHTML+='<link rel="stylesheet" as="style" href="'.concat(this.options.customCss,'">')),this.options.customCssPath&&""!==this.options.customCssPath&&(this.shadowRoot.innerHTML+='<link rel="stylesheet" as="style" href="'.concat(this.options.customCssPath,'">')),e.next=23,this.waitForStyleSheetLoading();case 23:this.dispatchEvent(new Event("apply-component-loaded")),this.shadowRoot.appendChild(s.content.cloneNode(!0)),this.prepareSelectors(),(a="true"===this.options.showJobDetails&&this.getJobDetailsElement(this.jobDetails))&&(this.eApplyPopUp.appendChild(a),this.eApplyPopUpContent.classList.add("hide"),a.querySelectorAll(".apply-btn").forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),e.preventDefault(),l.loadMessages(),a.classList.add("hide"),l.eApplyPopUpContent.classList.remove("hide"),l.dispatchEvent(new Event("application-started"))}))}))),this.renderJobTitle(),this.toggleViewModal(),this.sendMessageEvents(),this.updateDocumentRoot(),this.options.userName&&(r=this.getInitialMessage(this.options.applicationStatus),this.renderMessage(r,!1,this.options.applicationStatus)),this.renderLoadingImage(),"true"!==this.options.showJobDetails&&this.loadMessages(),this.handleResize(),this.applyInForm&&!this.options.startMinimized&&this.applyWebContainer.classList.add("popup-opened"),this.options.startMinimized?this.minimizePopUp():this.continueAplyingContainer.click(),e.next=43;break;case 40:e.prev=40,e.t0=e.catch(2),console.error(e.t0);case 43:case"end":return e.stop()}}),e,this,[[2,40]])}))),function(){return i.apply(this,arguments)})},{key:"getJobTags",value:function(e){var t=e||{},n=t.city,o=t.state,s=t.pay_rate,i=t.type,a=[n,o].filter(Boolean).join(",");return'\n          <div class="job-tags">\n            '.concat(a&&'<span class="job-tag" >'.concat(a,"</span>"),"\n            ").concat(s&&'<span class="job-tag" >'.concat(s,"</span>"),"\n            ").concat(i&&'<span class="job-tag" >'.concat(i,"</span>"),"\n          </div>\n    ")}},{key:"decodeHTML",value:function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}},{key:"getJobDetailsElement",value:function(e){var t;if(e){var n=document.createElement("div");return n.setAttribute("id","job-details"),n.innerHTML='\n      <div class="jobs-container-sm job-container">\n        <div class="d-flex justify-content-between flex-column flex-md-row gap-1 sticky-top header">\n          <div class="d-flex flex-column align-items-start job-title-container">\n              <div class="d-flex align-items-baseline flex-column info">\n                <div class="d-flex mb-2 align-items-center">\n                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n                    <path d="M15 4.375H13.9583V3.33333C13.9583 2.52917 13.3042 1.875 12.5 1.875H7.5C6.69583 1.875 6.04167 2.52917 6.04167 3.33333V4.375H5C2.985 4.375 1.875 5.485 1.875 7.5V7.59918V9.37754V15C1.875 17.015 2.985 18.125 5 18.125H15C17.015 18.125 18.125 17.015 18.125 15V9.37754V7.59918V7.5C18.125 5.485 17.015 4.375 15 4.375ZM7.29167 3.33333C7.29167 3.21833 7.385 3.125 7.5 3.125H12.5C12.615 3.125 12.7083 3.21833 12.7083 3.33333V4.375H7.29167V3.33333ZM3.125 7.5C3.125 6.18583 3.68583 5.625 5 5.625H15C16.3142 5.625 16.875 6.18583 16.875 7.5V7.59918V9.37754C16.875 9.62838 16.7325 9.84745 16.5033 9.94995C15.7825 10.2716 14.5542 10.73 12.7983 11.0884C12.7125 11.1059 12.62 11.04 12.57 10.9667C11.9658 10.0642 11.0058 9.52586 10 9.52586C8.99417 9.52586 8.03417 10.0642 7.43 10.9667C7.38083 11.0409 7.29167 11.1075 7.20166 11.0884C5.44667 10.73 4.2175 10.2716 3.49667 9.94995C3.2675 9.84745 3.125 9.62838 3.125 9.37754V7.59918V7.5ZM15 16.875H5C3.68583 16.875 3.125 16.3142 3.125 15V11.15C3.91667 11.4925 5.18584 11.9517 6.95084 12.3125C7.52584 12.4292 8.12417 12.175 8.46834 11.6609C8.84 11.1059 9.4125 10.775 10 10.775C10.5875 10.775 11.16 11.1059 11.5308 11.6609C11.8192 12.0917 12.2842 12.3408 12.7667 12.3408C12.86 12.3408 12.9542 12.3317 13.0475 12.3125C14.8133 11.9517 16.0825 11.4925 16.8742 11.15V15C16.875 16.3142 16.3142 16.875 15 16.875ZM10.85 12.5C10.85 12.96 10.4767 13.3333 10.0167 13.3333C9.55667 13.3333 9.17917 12.96 9.17917 12.5C9.17917 12.04 9.5475 11.6667 10.0083 11.6667H10.0167C10.4767 11.6667 10.85 12.04 10.85 12.5Z" fill="currentColor"/>\n                  </svg>\n                  <span class="job-title ms-2">'.concat(e.title,"</span>\n                </div>\n                ").concat(e["tags.company"]?'<div class="d-flex mb-2 align-items-center">\n                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n                      <path d="M16.6675 7.6217L13.9583 7.00178V5.67345C13.9583 4.79512 13.3608 4.04417 12.505 3.84667L4.17165 1.92345C3.61165 1.79429 3.03331 1.92502 2.58331 2.28336C2.13331 2.64169 1.875 3.17585 1.875 3.75085V15.8342C1.875 17.2908 2.71 18.1258 4.16667 18.1258H15.8333C17.29 18.1258 18.125 17.2908 18.125 15.8342V9.45011C18.125 8.57011 17.5258 7.81753 16.6675 7.6217ZM3.125 15.8334V3.75003C3.125 3.55837 3.21163 3.3801 3.3608 3.26094C3.4733 3.17177 3.60921 3.12503 3.74837 3.12503C3.79587 3.12503 3.84331 3.13005 3.88997 3.14172L12.2233 5.06493C12.5091 5.13077 12.7083 5.38095 12.7083 5.67345V7.50003V16.875H10.2083V14.1667C10.2083 12.9025 9.18083 11.875 7.91667 11.875C6.6525 11.875 5.625 12.9025 5.625 14.1667V16.875H4.16667C3.3975 16.875 3.125 16.6025 3.125 15.8334ZM8.95833 16.875H6.875V14.1667C6.875 13.5925 7.3425 13.125 7.91667 13.125C8.49083 13.125 8.95833 13.5925 8.95833 14.1667V16.875ZM16.875 15.8334C16.875 16.6025 16.6025 16.875 15.8333 16.875H13.9583V8.28413L16.3892 8.83996C16.675 8.90579 16.875 9.15596 16.875 9.44929V15.8334ZM8.54167 7.50003C8.54167 7.15503 8.82167 6.87503 9.16667 6.87503H10C10.345 6.87503 10.625 7.15503 10.625 7.50003C10.625 7.84503 10.345 8.12503 10 8.12503H9.16667C8.82167 8.12503 8.54167 7.84503 8.54167 7.50003ZM5.20833 7.50003C5.20833 7.15503 5.48833 6.87503 5.83333 6.87503H6.66667C7.01167 6.87503 7.29167 7.15503 7.29167 7.50003C7.29167 7.84503 7.01167 8.12503 6.66667 8.12503H5.83333C5.48833 8.12503 5.20833 7.84503 5.20833 7.50003ZM8.54167 10C8.54167 9.65503 8.82167 9.37503 9.16667 9.37503H10C10.345 9.37503 10.625 9.65503 10.625 10C10.625 10.345 10.345 10.625 10 10.625H9.16667C8.82167 10.625 8.54167 10.345 8.54167 10ZM5.20833 10C5.20833 9.65503 5.48833 9.37503 5.83333 9.37503H6.66667C7.01167 9.37503 7.29167 9.65503 7.29167 10C7.29167 10.345 7.01167 10.625 6.66667 10.625H5.83333C5.48833 10.625 5.20833 10.345 5.20833 10Z" fill="currentColor"/>\n                    </svg>\n                      <span class="ms-2">'.concat(e["tags.company"],"</span>\n                     </div>"):"",'\n              </div>\n          </div>\n          <div class="d-flex apply-container">\n              <a class="apply-btn btn btn-primary action-btn rounded-pill mt-3 hide-mobile" href="https://www.partnerspersonnel.com/applications/?source=94&amp;Orders=14973830&amp;branchid=10140" target="_blank">Apply</a>\n          </div>\n        </div>\n        ').concat(this.getJobTags(e),'\n        <h4>Job Description</h4>\n        <div class="inner-container pb-3 pt-md-3">\n          <div class="job-description">\n              <p>\n                ').concat(this.decodeHTML(null===(t=e.description)||void 0===t?void 0:t.replace(/\[+[^\]]*]+/g,"")),'\n              </p>\n          </div>\n          <div class="apply-btn-container">\n            <a class="apply-btn btn btn-primary action-btn rounded-pill my-5 text-uppercase d-none d-md-flex" href="https://www.partnerspersonnel.com/applications/?source=94&amp;Orders=14973830&amp;branchid=10140" target="_blank">Apply Now</a>\n          </div>\n      </div>\n    '),n}}},{key:"updateQuickApplyBtn",value:function(){document.querySelectorAll(".quick-apply-btn").forEach((function(e){e&&(e.innerText="Applied",e.disabled=!0,e.style.borderRadius="12px !important",e.classList.replace("btn-success","btn-secondary"),document.querySelectorAll(".animated-button span").forEach((function(e){e.style.animation="none"})))}))}},{key:"prepareAPICrawlerSubmit",value:function(){var e=this,t=document.querySelector(".confirm-apply-btn");document.querySelectorAll(".quick-apply-btn").forEach((function(e){e.innerText="Quick Apply"})),t.addEventListener("click",(function(){e.sendMessage("yes"),e.updateQuickApplyBtn()}))}},{key:"handleResize",value:function(){var e=this,t=!1;this.chatInput.addEventListener("focus",(function(){t=!0})),this.chatInput.addEventListener("focusout",(function(){t=!1}));var n=window.visualViewport.height;window.visualViewport.addEventListener("resize",(function(){e.applyWebContainer.classList.contains("popup-opened")&&(t&&window.visualViewport.height<n?(e.insideForm||e.insideRVP||(e.applyWebContainer.style.height="".concat(window.visualViewport.height,"px")),e.shadowRoot.querySelector(".chat-messages .content").scrollTo(0,e.shadowRoot.querySelector(".chat-messages .content").scrollHeight)):e.insideForm||e.insideRVP||e.applyWebContainer.removeAttribute("style"))}))}},{key:"updateDocumentRoot",value:function(){var e=this,t=document.querySelectorAll(".apply-btn");t.length>0&&t.forEach((function(t){t.removeAttribute("href"),t.removeAttribute("target"),t.addEventListener("click",(function(){e.applyWebContainer.classList.add("popup-opened"),e.getSearchParam("submit-application")&&e.sendMessage("yes")}))}))}},{key:"renderMessages",value:function(e){var t=this;e.applyApplication&&(e=this.data=y(y({},e),this.reformatApply3Data(e))),this.shadowRoot.querySelector(".bubble-container.loading-message").remove(),e.messages.forEach((function(n){t.renderMessage(n.options.content,"user"===n.initiator,e.appUserStatus)}));var n=this.shadowRoot.querySelector(".chat-messages .content");n&&n.scrollTo(0,n.scrollHeight)}},{key:"isQuestionAnswered",value:function(e){var t=e||{},n=t.answer,s=t.answers;return!(!n&&!s)&&[n].concat((0,o.Z)(s)).some((function(e){return e&&"incoming"===e.type}))}},{key:"reformatApply3Data",value:function(e){var t,n,o=this,s=[],i=h(null===(t=e.applyApplication.operations)||void 0===t?void 0:t.filter((function(e){var t;return null===(t=e.question)||void 0===t?void 0:t.parsedText})));try{var a=function(){var e,t,i,a=n.value;(a.question&&s.push({options:{content:o.isQuestionAnswered(a)?a.question.originalText:a.question.parsedText},initiator:"system"}),a.answer&&"outgoing_error"!==a.answer.type)&&s.push({options:{content:(null===(t=a.question)||void 0===t||null===(t=t.options)||void 0===t||null===(i=t.find)||void 0===i||null===(i=i.call(t,(function(e){return e.value===a.answer.parsedText})))||void 0===i?void 0:i.text)||a.answer.originalText},initiator:"user"});if((null===(e=a.answers)||void 0===e?void 0:e.length)>0){var r,l=h(a.answers);try{var c=function(){var e,t,n=r.value;"incoming"===n.type&&s.push({options:{content:(null===(e=a.question)||void 0===e||null===(e=e.options)||void 0===e||null===(t=e.find)||void 0===t||null===(t=t.call(e,(function(e){return e.value===n.parsedText})))||void 0===t?void 0:t.text)||n.originalText},initiator:"user"})};for(l.s();!(r=l.n()).done;)c()}catch(e){l.e(e)}finally{l.f()}}};for(i.s();!(n=i.n()).done;)a()}catch(e){i.e(e)}finally{i.f()}return{messages:s,appUserStatus:e.applyApplication.status}}},{key:"loadMessages",value:function(){var e=this;window.fetch("".concat(this.options.baseUrl,"/").concat(this.options.messagesPath),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({daliaApplyToken:this.getUserToken(),runAlgorithm:this.applyInForm,source:this.options.source})}).then((function(e){return e.json()})).then((function(t){var n,o;(e.token=t.token,t.applyApplication&&(t=e.data=y(y({},t),e.reformatApply3Data(t))),e.isUserApplied(t.appUserStatus))?e.isAPICrawler?e.updateQuickApplyBtn():e.handleSubmissionComplete(t.appUserStatus,null===(o=t)||void 0===o?void 0:o.message):e.isAPICrawler||e.renderMessages(t);!e.applyInForm&&(e.options.isApplyThree||!(null!==(n=t.messages)&&void 0!==n&&n.length)||t.messages[t.messages.length-1]&&"system"!==t.messages[t.messages.length-1].initiator)&&e.sendMessage("SIGNAL_APPLY")}))}},{key:"renderJobTitle",value:function(){var e=this;this.shadowRoot.querySelectorAll(".job-title").forEach((function(t){var n,o=e.options.jobTitle||(null===(n=document.querySelector(".job-title"))||void 0===n?void 0:n.innerText)||document.querySelector("title").innerText.split("|")[0].trim();t.innerText="".concat(o),t.setAttribute("data-tooltip",o)})),this.shadowRoot.querySelectorAll(".client-name").forEach((function(t){var n;t.innerText=e.options.clientName||(null===(n=document.querySelector(".client-name"))||void 0===n?void 0:n.innerText)||document.querySelector("title").innerText.split("|")[1].trim()}))}},{key:"prepareSelectors",value:function(){var e=this;this.applyWebContainer=this.shadowRoot.querySelector(".eapply-web-container"),this.options.source&&this.applyWebContainer.setAttribute("data-container-type",this.options.source),this.chatInput=this.shadowRoot.querySelector(".chat-input"),this.options.placeHolder&&this.chatInput.setAttribute("placeholder",this.options.placeHolder),this.applyButton=this.shadowRoot.querySelector(".apply-now"),this.sendButton=this.shadowRoot.querySelector(".btn-send"),this.chatLoader=this.shadowRoot.querySelector(".chat-messages > .loader"),this.backButton=this.shadowRoot.querySelector(".popup-header .back-btn"),this.eApplyPopUp=this.shadowRoot.querySelector(".eapply-popup"),this.eApplyPopUpContent=this.shadowRoot.querySelector(".eapply-popup .popup-content"),this.jobsCount=this.shadowRoot.querySelector("#jobs-count"),this.jobsCount&&(this.jobsCount.innerText=this.options.jobsCount||3),this.backButton&&this.backButton.addEventListener("click",(function(){var t;e.dispatchEvent(new Event(e.isUserApplied(null===(t=e.data)||void 0===t?void 0:t.appUserStatus)?"submitted":"back-btn-clicked",{bubbles:!1}))})),this.minimizeButton=this.shadowRoot.querySelector(".close-popup"),this.continueAplyingContainer=this.shadowRoot.querySelector("#continue-applying-container"),this.continueAplyingContainer&&this.continueAplyingContainer.addEventListener("click",(function(){e.dispatchEvent(new Event("popup-opened"),{bubbles:!1}),e.continueAplyingContainer.classList.add("hide"),e.eApplyPopUp.classList.remove("hide"),e.applyWebContainer.classList.add("popup-opened")})),this.options.hideBackBtn||this.backButton.classList.remove("hide")}},{key:"closePopUp",value:function(){this.applyWebContainer.classList.remove("popup-opened"),this.applyWebContainer.removeAttribute("style")}},{key:"minimizePopUp",value:function(){this.eApplyPopUp.classList.add("hide"),this.continueAplyingContainer.classList.remove("hide")}},{key:"toggleViewModal",value:function(){var e=this;this.applyButton.addEventListener("click",(function(){e.applyWebContainer.classList.add("popup-opened")})),this.shadowRoot.querySelectorAll(".completed .eapply-btn").forEach((function(t){t.addEventListener("click",(function(){e.insideForm||e.insideRVP?e.dispatchEvent(new Event("submitted",{bubbles:!1})):e.closePopUp()}))})),this.shadowRoot.querySelectorAll(".close-popup").forEach((function(t){t.addEventListener("click",(function(){e.insideForm||e.insideRVP?e.minimizePopUp():e.closePopUp(),e.dispatchEvent(new Event("popup-closed",{bubbles:!1}))}))}))}},{key:"sendMessageEvents",value:function(){var e=this;this.chatInput.addEventListener("keydown",(function(t){C.includes(t.code)&&e.updateMessageFormAndSendMessage(t.target.value)})),this.sendButton.addEventListener("click",(function(){e.updateMessageFormAndSendMessage(e.chatInput.value)}))}},{key:"sendMessage",value:function(e){var t=this;e&&(this.renderLoadingImage(),window.fetch("".concat(this.options.baseUrl,"/").concat(this.options.submitPath),{method:"POST",headers:{"x-api-token":this.token,"Content-Type":"application/json"},body:JSON.stringify({daliaApplyToken:this.getUserToken(),answer:e,userClickedApplyWebButton:!0,source:this.options.source})}).then((function(e){return e.json()})).then((function(e){t.chatLoader.classList.remove("show"),t.data.appUserStatus=e.appUserStatus,t.renderMessage(e.message,!1,e.appUserStatus),e.message.includes("<form>")||(t.chatInput.removeAttribute("disabled"),t.sendButton.removeAttribute("disabled"),t.chatInput.focus())})))}},{key:"updateMessageFormAndSendMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.chatInput.setAttribute("disabled","disabled"),this.sendButton.setAttribute("disabled","disabled"),this.renderMessage(e,!0,null),this.chatInput.value="",this.sendMessage(e))}},{key:"renderLoadingImage",value:function(){var e=document.createElement("template");e.innerHTML='<div class="bubble-container loading-message">\n      <div class="bubble" style="background: #FFF">\n        <div><img style="width:65px" src="'.concat(this.options.baseUrl,'/images/apply-loading-grey.gif"></div>\n      </div>\n    </div>');var t=this.shadowRoot.querySelector(".chat-messages .content");t&&t.appendChild(e.content.cloneNode(!0))}},{key:"renderMessage",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2?arguments[2]:void 0;if(!this.options.blackListMessagesContains.some((function(t){return e&&e.includes(t)}))){if(!n){var s=this.shadowRoot.querySelector(".loading-message");s&&s.remove()}var i=document.createElement("template");(e=e.replace(/((http|https|ftp):\/\/[\w?=&.-;#~%-]+(?![\w\s?&.;#~%"=-]*>))/g,'<a href="$1" target="_blank">click here</a>')).includes("<form>")||(e=e.replaceAll("\n"," <br>")),i.innerHTML='<div class="bubble-container '.concat(n?"from-user":"",'">\n      <div class="bubble">\n        <div>').concat(e,"</div>\n      </div>\n    </div>");var a=this.shadowRoot.querySelector(".chat-messages .content");a&&(a.appendChild(i.content.cloneNode(!0)),setTimeout((function(){var e,n=null===(e=t.shadowRoot.querySelector(".chat-messages .content"))||void 0===e?void 0:e.scrollHeight;n&&a.scrollTo(0,n)}),100)),this.handleCustomForm(e),this.handleSubmissionComplete(o,e)}}},{key:"validateFileExtension",value:function(e){return!!/(\.pdf|\.docx|\.doc)$/i.test(e.value)||(alert("Invalid file type."),e.form.reset(),e.focus(),!1)}},{key:"handleCustomForm",value:function(e){var t=this;e.includes("<form>")?(this.chatInput.setAttribute("disabled","disabled"),this.chatInput.classList.add("button-disabled"),this.sendButton.setAttribute("disabled","disabled"),this.sendButton.classList.add("button-disabled")):(this.chatInput.removeAttribute("disabled"),this.chatInput.classList.remove("button-disabled"),this.sendButton.removeAttribute("disabled"),this.sendButton.classList.remove("button-disabled"));var n=this.shadowRoot.querySelectorAll(".chat-messages form");n.length&&n[n.length-1].addEventListener("submit",(function(e){if(e.preventDefault(),t.customFormValue=null,(0,o.Z)(e.target.children).some((function(e){return"file"===e.type}))){var n=e.target.querySelector('input[type="file"]');if(!t.validateFileExtension(n))return;t.customFormValue=n.files[0],t.customFormValue&&t.sendFile(t.customFormValue)}else{var s=e.target.querySelector('input[name="answer"]:checked');if(!s)return;t.customFormValue=s.nextElementSibling.innerText,t.customFormValue&&t.updateMessageFormAndSendMessage(t.customFormValue)}t.customFormValue&&(e.target.querySelector("button")&&e.target.querySelector("button").remove(),e.target.querySelectorAll("input").forEach((function(e){e.setAttribute("disabled","disabled")})))})),n.length>1&&n.forEach((function(e,t){t!==n.length-1&&(e.querySelector("button")&&e.querySelector("button").remove(),e.querySelectorAll("input").forEach((function(e){e.remove()})),e.querySelectorAll(".radio-toggle-buttons-container").forEach((function(e){e.remove()})))})),n.forEach((function(e){e.addEventListener("change",(function(){var t=e.querySelector(".eapply-btn");t.removeAttribute("disabled"),t.classList.remove("button-disabled")}))}))}},{key:"isUserApplied",value:function(e){return["submit_success","already_applied","questions_complete","submitted"].includes(e)}},{key:"handleSubmissionComplete",value:function(e,t){var n=this;e&&!["new","invited","started","questions_started","confirm_stop","declined","invalid_answers_limit_exceeded"].includes(e)&&(this.isUserApplied(e)?(this.applyWebContainer.querySelector(".completed").classList.add("complete"),this.applyWebContainer.querySelector(".apply-now").classList.add("applied"),document.querySelectorAll(".apply-btn").forEach((function(e){e.classList.add("applied"),e.innerText="Applied"})),this.applyWebContainer.querySelector(".apply-now").innerText="Applied",this.applyWebContainer.querySelector(".completed .eapply-btn").addEventListener("click",(function(){n.dispatchEvent(new Event("submitted",{bubbles:!1}))})),t&&(this.applyWebContainer.querySelector("#complete-message").innerHTML=t)):this.applyWebContainer.remove(),console.log("appUserStatus",e))}},{key:"sendFile",value:function(e){var t=this,n=new FormData;n.append("answer",e),n.append("daliaApplyToken",this.getUserToken()),window.fetch("".concat(this.options.baseUrl,"/").concat(this.options.submitPath),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){t.renderMessage(e.message,!1,e.appUserStatus)}))}}]),t}(window.HTMLElement);window.customElements.get("dalia-apply-web")||window.customElements.define("dalia-apply-web",S)},56532:(e,t,n)=>{var o=n(79989),s=n(22615),i=n(68844),a=n(74684),r=n(69985),l=n(981),c=n(91245),p=n(34327),u=n(54849),d=n(63477),h=n(27017),m=n(44201),v=n(53931),y=m("replace"),b=TypeError,f=i("".indexOf),g=i("".replace),w=i("".slice),C=Math.max;o({target:"String",proto:!0},{replaceAll:function(e,t){var n,o,i,m,k,S,A,L,E,M=a(this),q=0,x=0,T="";if(!l(e)){if((n=c(e))&&(o=p(a(d(e))),!~f(o,"g")))throw new b("`.replaceAll` does not allow non-global regexes");if(i=u(e,y))return s(i,e,M,t);if(v&&n)return g(p(M),e,t)}for(m=p(M),k=p(e),(S=r(t))||(t=p(t)),A=k.length,L=C(1,A),q=f(m,k);-1!==q;)E=S?p(t(k,q,m)):h(k,m,q,[],void 0,t),T+=w(m,x,q)+E,x=q+A,q=q+L>m.length?-1:f(m,k,q+L);return x<m.length&&(T+=w(m,x)),T}})},38320:(e,t,n)=>{n(56532)}}]);