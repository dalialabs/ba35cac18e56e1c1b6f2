"use strict";(self.webpackChunkmaia_node=self.webpackChunkmaia_node||[]).push([[629],{81629:(n,e,a)=>{a.r(e),a.d(e,{default:()=>h});var t=a(8081),o=a.n(t),i=a(23645),r=a.n(i),p=a(61667),c=a.n(p),l=new URL(a(56455),a.b),b=new URL(a(61384),a.b),s=r()(o()),d=c()(l),m=c()(b);s.push([n.id,`:host, :root {\n  --bg-color: white;\n  --primary-color: #f08803;\n  --primary-btn-color: #f08803;\n  --primary-color-light: #FDF3E5;\n  --primary-font-color: white;\n  --primary-btn-font-color: white;\n  --secondary-color: #204155;\n  --border-radius: 1.5rem;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n}\n\n.eapply-web-container {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  bottom: 2rem;\n  padding: 2rem 2rem 0;\n  z-index: 1100;\n  /* Helpers */\n}\n\n.hide {\n  display: none !important;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.eapply-web-container p, .eapply-web-container h1, .eapply-web-container h2, .eapply-web-container h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.eapply-web-container .eapply-job-details {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1rem 1.5rem;\n  max-width: 100rem;\n  background: var(--bg-color);\n  border-radius: var(--border-radius);\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);\n          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);\n}\n\n.eapply-web-container .eapply-job-details > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.eapply-web-container .eapply-popup {\n  display: none;\n  width: 100%;\n  max-width: 22rem;\n  height: 100%;\n  max-height: 30rem;\n  background: var(--bg-color);\n  border-radius: var(--border-radius);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);\n          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);\n}\n\n.eapply-web-container .eapply-popup .popup-header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1rem;\n  border-bottom: solid thin rgba(0, 0, 0, 0.1);\n}\n\n.eapply-web-container .eapply-popup .popup-header > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.eapply-web-container .eapply-popup .popup-header > div:first-child {\n  max-width: calc(100% - 2rem);\n}\n\n.eapply-web-container .eapply-popup .popup-header > div:first-child p strong {\n  display: inline-block;\n  max-width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.eapply-web-container .eapply-popup .popup-header > div:last-child {\n  max-width: 2rem;\n}\n\n.eapply-web-container .eapply-popup .popup-header .close-popup {\n  width: 1.3rem;\n  height: 1.3rem;\n  background-size: contain;\n  background-image: url(${d});\n  background-color: transparent;\n  border: none;\n  opacity: .4;\n  cursor: pointer;\n}\n\n.eapply-web-container .eapply-popup .popup-header .close-popup:hover {\n  opacity: 1;\n}\n\n.eapply-web-container .eapply-popup .popup-content {\n  height: calc(100% - 4rem);\n}\n\n.eapply-web-container .chat-container {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n\n.eapply-web-container .chat-container .chat-messages, .eapply-web-container .chat-container .chat-controls {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.eapply-web-container .chat-container .chat-messages {\n  overflow-y: auto;\n  margin: .1rem .1rem 0 0;\n  scroll-behavior: smooth;\n}\n\n.eapply-web-container .chat-container .chat-messages::-webkit-scrollbar-track {\n  background: white;\n}\n\n.eapply-web-container .chat-container .chat-messages::-webkit-scrollbar {\n  width: .5rem;\n  background: white;\n}\n\n.eapply-web-container .chat-container .chat-messages::-webkit-scrollbar-thumb {\n  border-radius: 10rem;\n  background: white;\n}\n\n.eapply-web-container .chat-container .chat-messages:hover::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.eapply-web-container .chat-container .chat-messages:hover::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.eapply-web-container .chat-container .chat-messages:hover::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.eapply-web-container .chat-container .chat-messages .content {\n  padding: 1rem;\n}\n\n.eapply-web-container .chat-container .chat-messages .content > p {\n  color: #717171;\n  margin-bottom: 1.2rem;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container {\n  max-width: 100%;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 100%;\n  padding: .5rem 1rem;\n  color: #333;\n  background: #F5F5F5;\n  border-radius: .6rem;\n  margin-bottom: 1.2rem;\n  overflow: hidden;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble input[type=file] {\n  display: block;\n  width: 11rem;\n  margin: .4rem 0;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble input[type=radio] {\n    display: none;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble input[type=radio] + label {\n  display: inline-block;\n  padding: 6px 22px;\n  margin: 5px;\n  border: 1px solid var(--primary-color);\n  border-radius: 15px;\n  background-color: #fff;\n  color: var(--primary-color);\n  cursor: pointer;\n  transition: background-color 0.3s, color 0.3s;\n  font-size: 14px;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble input[type=radio]:checked + label {\n  background-color: var(--primary-color);\n  color: #fff;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble label + div {\n  margin: .6rem 0 .3rem;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container .bubble label + div > div {\n  margin-bottom: .3rem;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container.from-user {\n  text-align: right;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container.from-user .bubble {\n  color: var(--primary-color);\n  background-color: var(--primary-color-light);\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container.from-user .bubble > div {\n  display: inline-block;\n}\n\n.eapply-web-container .chat-container .chat-messages .bubble-container.from-user .bubble svg {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-right: .4rem;\n  stroke: var(--primary-color);\n}\n\n.eapply-web-container .chat-container .chat-controls {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 4.4rem;\n  padding: 1rem;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  background: #F5F5F5;\n  border-radius: .7rem;\n  border: none;\n  padding: 0 3rem 0 1rem;\n  outline: none;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container input:invalid {\n  border: solid thin #FF7272;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container input:invalid + button {\n  cursor: default;\n  pointer-events: none;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container input:invalid + button + .input-error {\n  display: block;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container input:invalid + button.fill {\n  fill: #FF7272 !important;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container input:invalid + button.stroke {\n  stroke: #FF7272 !important;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container .input-error {\n  display: none;\n  position: absolute;\n  top: -1.4em;\n  left: 0;\n  color: #FF7272;\n  font-size: .8em;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 3rem;\n  border: none;\n  background: transparent;\n  border-radius: 0 .7rem .7rem 0;\n  cursor: pointer;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container button:hover {\n  background: rgba(0, 0, 0, 0.03);\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container button:active {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container button svg {\n  width: 1.3rem;\n  height: 1.3rem;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container button.fill {\n  fill: var(--primary-color) !important;\n}\n\n.eapply-web-container .chat-container .chat-controls .chat-input-container button.stroke {\n  stroke: var(--primary-color) !important;\n}\n\n.eapply-web-container .chat-container .completed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  text-align: center;\n  color: #767676;\n  z-index: 1;\n}\n\n.eapply-web-container .chat-container .completed.complete {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.eapply-web-container .chat-container .completed.complete + .chat-messages, .eapply-web-container .chat-container .completed.complete + .chat-controls {\n  display: none;\n}\n\n.eapply-web-container .chat-container .completed svg {\n  margin-bottom: 1rem;\n}\n\n.eapply-web-container .chat-container .completed .eapply-btn {\n  margin-top: 1.3rem;\n  padding: .7rem 3rem;\n}\n\n.eapply-web-container .chat-container .completed .branding {\n  position: absolute;\n  bottom: 1.2rem;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.eapply-web-container .chat-container .completed .branding p {\n  font-size: .7em;\n  margin: 0;\n}\n\n.eapply-web-container .chat-container .completed .branding p span {\n  color: #6F00FF;\n}\n\n.eapply-web-container.popup-opened {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: end;\n  max-width: 100rem;\n  height: 100%;\n  bottom: 0;\n}\n\n.eapply-web-container.popup-opened .eapply-job-details {\n  display: none;\n}\n\n.eapply-web-container.popup-opened .eapply-popup {\n  display: block;\n}\n\n.eapply-web-container .eapply-btn {\n  padding: .7rem 1.5rem;\n  background: var(--secondary-color);\n  color: var(--primary-font-color);\n  border-radius: 100px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\n.eapply-web-container .eapply-btn.light {\n  background: var(--primary-color-light);\n  color: var(--primary-color);\n}\n\n.eapply-web-container .eapply-btn.applied {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background: #21C492;\n  color: white;\n  pointer-events: none;\n  cursor: default;\n}\n\n.eapply-web-container .eapply-btn.applied::before {\n  content: '';\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  margin-right: .4rem;\n  background-image: url(${m});\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.eapply-web-container .clr-primary {\n  color: var(--primary-color);\n}\n\n.eapply-web-container .clr-secondary {\n  color: var(--secondary-color);\n}\n\n.eapply-web-container .flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.eapply-web-container .align-items-end {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: end;\n}\n\n.eapply-web-container .align-items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.eapply-web-container .justify-content-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.eapply-web-container .justify-content-end {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: end;\n}\n\n.eapply-web-container .text-align-right {\n  text-align: right;\n}\n\n.eapply-web-container .op-50 {\n  opacity: .5;\n}\n\n@media only screen and (max-width: 630px) {\n  .eapply-job-details > div:first-child {\n    display: none;\n  }\n\n  .eapply-job-details > div:last-child > div, .eapply-job-details > div:last-child .apply-now {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 540px) {\n  .eapply-web-container {\n    padding: .5rem .5rem 0;\n  }\n  .eapply-web-container:not(.popup-opened) {\n    bottom: .5rem;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .eapply-web-container:not(.popup-opened) {\n    padding: 0;\n    bottom: 0;\n  }\n  .eapply-web-container:not(.popup-opened) .eapply-job-details {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-radius: 0;\n    text-align: center;\n  }\n  .eapply-web-container:not(.popup-opened) .eapply-job-details > div:first-child {\n    margin-bottom: 1rem;\n  }\n  .eapply-web-container:not(.popup-opened) .eapply-job-details > div .text-align-right {\n    text-align: center;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .eapply-web-container {\n    padding: 0;\n  }\n  .eapply-web-container .eapply-popup {\n    border-radius: 0;\n  }\n}\n\n.loader {\n  display: none;\n  width: 30px;\n  height: 30px;\n  border: 2px solid var(--primary-color);\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  box-sizing: border-box;\n  margin: 30px auto;\n  animation: rotation 1s linear infinite;\n}\n\n.loader.show {\n  display: block;\n}\n\n@keyframes rotation {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n\n.radio-toggle-buttons-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.button-disabled {\n  opacity: 0.7;\n  cursor: auto !important;\n}\n\n.show-jobs {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.job-card {\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 1rem;\n  transition: transform 0.2s ease-in-out;\n  margin-bottom: 1rem;\n}\n\n.job-card:hover {\n  transform: translateY(-5px);\n}\n\n.show-jobs .job-title {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n\n.job-location {\n  font-size: 1rem;\n  color: #777;\n  margin-bottom: 1rem;\n}\n\n.apply-button {\n  display: inline-block;\n  text-decoration: none;\n  background: var(--primary-btn-color);\n  color: white;\n  padding: 0.4rem 1rem;\n  border-radius: 4px;\n  font-weight: bold;\n  text-align: center;\n  transition: background 0.3s ease-in-out;\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n}\n\n.apply-button:hover {\n  background: var(--primary-btn-color);\n}\n\n.show-jobs-title {\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n}`,""]);const h=s},23645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a="",t=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),t&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=n(e),t&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(n,a,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(r[c]=!0)}for(var l=0;l<n.length;l++){var b=[].concat(n[l]);t&&r[b[0]]||(void 0!==i&&(void 0===b[5]||(b[1]="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {").concat(b[1],"}")),b[5]=i),a&&(b[2]?(b[1]="@media ".concat(b[2]," {").concat(b[1],"}"),b[2]=a):b[2]=a),o&&(b[4]?(b[1]="@supports (".concat(b[4],") {").concat(b[1],"}"),b[4]=o):b[4]="".concat(o)),e.push(b))}},e}},61667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},8081:n=>{n.exports=function(n){return n[1]}},56455:n=>{n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWludXMiPjxsaW5lIHgxPSI1IiB5MT0iMTIiIHgyPSIxOSIgeTI9IjEyIj48L2xpbmU+PC9zdmc+"},61384:n=>{n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjUuNDQyIiBoZWlnaHQ9IjE4Ljg3NiIgdmlld0JveD0iMCAwIDI1LjQ0MiAxOC44NzYiPg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+DQogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzYzIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MyIgd2lkdGg9IjI1LjQ0MiIgaGVpZ2h0PSIxOC44NzYiIGZpbGw9IiNmZmYiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQogIDxnIGlkPSJHcm91cF81NCIgZGF0YS1uYW1lPSJHcm91cCA1NCIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPg0KICAgIDxwYXRoIGlkPSJQYXRoXzE3IiBkYXRhLW5hbWU9IlBhdGggMTciIGQ9Ik03LjgsMTguODc2aDBhMS4yMzMsMS4yMzMsMCwwLDEtLjg3My0uMzY4TC4zNTMsMTEuODQxYTEuMjMyLDEuMjMyLDAsMCwxLDEuNzU2LTEuNzI4TDcuOCwxNS45LDIzLjM0MS4zNjFhMS4yMywxLjIzLDAsMSwxLDEuNzQsMS43NEw4LjY2NywxOC41MTVhMS4yMjYsMS4yMjYsMCwwLDEtLjg3LjM2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="}}]);