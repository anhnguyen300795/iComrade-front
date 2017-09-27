webpackJsonp([1],{0:function(e,t,n){n(446),e.exports=n(447)},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_ROOM="GET_ROOM",t.CREATE_ROOM="CREATE_ROOM",t.REMOVE_ROOM="REMOVE_ROOM",t.BOOK_ROOM="BOOK_ROOM",t.FINISH_ROOM="FINISH_ROOM",t.CANCEL_ROOM="CANCEL_ROOM",t.UPDATE_ROOM_INFO="UPDATE_ROOM_INFO",t.LOAD_QUEUE_NUMBER="LOAD_QUEUE_NUMBER",t.DECREASE_QUEUE_NUMBER="DECREASE_QUEUE_NUMBER",t.LOG_IN="LOG_IN",t.LOG_OUT="LOG_OUT",t.SOCKET="SOCKET",t.SHOW_NOTIFICATION="SHOW_NOTIFICATION",t.HIDE_NOTIFICATION="HIDE_NOTIFICATION"},115:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentUser=t.signUp=t.logOut=t.login=void 0;var a=n(224),i=r(a),u=n(448),c=o(u),l="/api";i.default.defaults.headers.common["x-access-token"]=localStorage.getItem("token"),t.login=function(e){return e.username,e.password,i.default.post(l+"/auth/login",e).then(function(e){return console.log(e.headers["x-access-token"]),localStorage.setItem("token",e.headers["x-access-token"]),c.logIn(e.data)})},t.logOut=function(){return i.default.get(l+"/auth/logout").then(function(e){return localStorage.setItem("token",""),c.logOut()})},t.signUp=function(e){return i.default.post(l+"/auth/signup",e).then(function(e){return{res:e,type:""}})},t.getCurrentUser=function(e){return i.default.get(l+"/auth/currentUser").then(function(e){return e.data?c.logIn(e.data):{type:""}})}},116:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(216),u=o(i),c="http://localhost:8000",l=void 0,s=function(){function e(){return r(this,e),this.socket=null,l||(l=this,this.initializeSocket(),this._eventNames=[]),l}return a(e,[{key:"initializeSocket",value:function(){console.log("token",localStorage.getItem("token")),this.socket=(0,u.default)(c,{query:"token="+localStorage.getItem("token")})}},{key:"addSocketEventHanler",value:function(e,t){return this._eventNames.includes(e)?void console.warn("This event has been registered"):(this._eventNames.push(e),void this.socket.on(e,t))}},{key:"emitEvent",value:function(e,t){this.socket.emit(e,t)}},{key:"getEventNames",value:function(){return this._eventNames}}]),e}();t.default=s},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUrgentRooms=function(e){var t=e.queueNumbers,n=Object.keys(t),o=n.filter(function(e){return 0===t[e]});return o}},245:function(e,t,n){t=e.exports=n(246)(),t.push([e.id,'body{font-family:Roboto,sans-serif}.button-group .btn:hover{color:#fff}.button-group .btn-primary{background-color:#4a148c;margin-left:7px}.button-group .btn-primary:hover{background-color:#7b1fa2}.button-group .btn-warning{background-color:#ff9100}.button-group .btn-warning:hover{background-color:#ffab40}@media screen and (max-width:700px){.container{padding:5px}}.header{display:flex;justify-content:space-between;padding-top:10px;padding-bottom:30px;align-items:center}.header h1{margin-top:10px}.header button{height:30px}.header .create-button-disabled{opacity:.3;cursor:not-allowed}.header .cancel-button,.header .create-button{height:50px;cursor:pointer}.header .cancel-button{margin-left:10px}.logout-button{margin-top:20px;height:80px;cursor:pointer}@media screen and (max-width:700px){.logout-button{display:none}}.room-container{position:relative}.room-container:not(:last-child){margin-bottom:20px}.room-container .btn-delete{background-color:#fff;position:absolute;right:-15px;top:-15px;z-index:2;padding:5px;border-radius:50%;box-shadow:-2px 2px 10px rgba(0,0,0,.2);cursor:pointer}.room-container .btn-delete img{width:20px;height:20px}.room-container .room{background-color:#fff;padding:40px;border-radius:5px;display:flex;justify-content:space-between;overflow:hidden;box-shadow:5px 5px 20px #888}.room-container .room__header{width:40%;z-index:1;font-size:20px}.room-container .room__info{width:60%;position:relative}.room-container .room__info-container{position:relative;z-index:10;display:flex;justify-content:space-between}.room-container .room__info-status{margin-left:60px;font-size:19px;color:#fff}.room-container .room__info:before{content:"";position:absolute;background-color:#00d7a7;width:1000px;height:1000px;transform:rotate(50deg) translate(-200px);transition-duration:.3s}.room-container .room.room-booked-run .room__info:before{background-color:#e53935;transform:rotate(40deg) translate(-558px,-544px)}.room-container .room.room-booked-run .room__info-status{color:#fff}.room-container .room.room-booked-occupy .room__info:before{background-color:#ffe977;transform:rotate(50deg) translate(-1200px)}.room-container .room.room-booked-occupy .room__info-status{color:#000}.room-container .room.room-booked-queue .room__info:before{background-color:#4a148c;transform:rotate(40deg) translate(-558px,-544px)}.room-container .room.room-booked-queue .room__info-status{color:#fff}@media screen and (max-width:700px){.room__header,.room__info{min-height:80px}.room-container .room{padding:30px}.room-container .room .room__info-container{display:flex;flex-direction:column}.room-container .room .room__info-status{display:flex;justify-content:flex-end;margin-left:50px}.room-container .room .room__info .button-group{margin-top:20px;display:flex;justify-content:flex-end}.room-container .room .room__info:before{transform:rotate(32deg) translate(-170px)}.room-container .room.room-booked-occupy .room__info:before{transform:rotate(31deg) translate(-1179px,21px)}.room-container .room.room-booked-queue .room__info:before{transform:rotate(51deg) translate(-573px,-410px)}}.form-container{display:flex;align-items:center}.form-container .input-container{max-width:0;overflow:hidden;transition-duration:.2s;margin-right:15px}.form-container .input-container .input-create{height:40px;padding:10px;width:0;height:25px;transition-duration:.2s}.form-container .input-container.long-input{max-width:250px}.form-container .input-container.long-input .input-create{width:250px}.full-screen{height:100%;width:100%;background-image:url("http://allswalls.com/images/abstract-gaussian-blur-wallpaper-1.jpg");background-size:100% 100%}.full-screen,.full-screen .login-modal{display:flex;justify-content:center;align-items:center}.full-screen .login-modal{position:relative;background-color:#fff;min-width:600px;padding:90px 100px 40px;border-radius:5px;box-shadow:0 0 10px 5px rgba(0,0,0,.2)}.full-screen .login-modal .form{width:100%}.full-screen .login-modal input{height:40px;border-radius:0;position:relative;background-color:transparent;z-index:2}.full-screen .login-modal .form-group{position:relative;margin-bottom:25px}.full-screen .login-modal .username:after{content:"Username";z-index:1}.full-screen .login-modal .password:after{content:"Password";z-index:1}.full-screen .login-modal .form-group:after{opacity:.3;font-size:18px;position:absolute;top:7.2px;left:12px;transition-duration:.4s}.full-screen .login-modal .form-group:focus{background-color:red}.full-screen .login-modal .username.focused:after{transform:translate(283px)}.full-screen .login-modal .password.focused:after{transform:translate(286px)}.full-screen .login-modal .loginButton{padding:10px 50px;background-color:#00897b;color:#fff;border:medium none;border-radius:2px}.full-screen .login-modal img{width:100px;margin-bottom:30px}.full-screen .login-modal .login-tab{position:absolute;top:0;display:flex;width:100%;box-shadow:inset 0 -4px 0 #d8f2f8,0 2px 10px 2px rgba(0,0,0,.2);color:#00897b}.full-screen .login-modal .tab-header{flex:1;text-align:center;padding:15px;font-size:21px;opacity:.2;cursor:pointer;border-bottom:4px solid transparent;transition-duration:.2s}.full-screen .login-modal .tab-active{border-bottom:5px solid #00897b;opacity:1}.full-screen .login-modal .error-message{color:red;margin-bottom:10px}@media screen and (max-width:700px){.full-screen .login-modal{min-width:200px;width:90%;padding-left:20px;padding-right:20px;padding-bottom:20px}.full-screen .login-modal .login-tab{box-shadow:inset 0 -3px 0 #d8f2f8,0 2px 10px 2px rgba(0,0,0,.2)}.full-screen .login-modal .tab-header{font-size:20px;border-bottom-width:3px}.full-screen .login-modal .password:after,.full-screen .login-modal .username:after{left:3px}}.notification-container{height:100%;width:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.4);z-index:10;display:flex;justify-content:center;align-items:center}.notification-container .notification{width:550px;min-height:350px;background-color:#fff;border-radius:5px;padding:20px 30px 50px}.notification-container .notification h3{text-align:center}.notification-container .notification .img-container{width:100%;display:flex;justify-content:center}.notification-container .notification .img-container img{margin-top:10px;margin-bottom:30px;animation:clock-animation .4s linear 0s infinite alternate}.notification-container .notification .button-group{display:flex;justify-content:center}.main-content{filter:blur(5px)}@keyframes clock-animation{to{transform:scale(1.1)}}@media screen and (max-width:700px){.notification-container .notification{width:90%}}',""])},447:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),a=o(r),i=n(380),u=n(14),c=n(455),l=o(c);n(575);var s=n(457),f=o(s);(0,i.render)(a.default.createElement(u.Provider,{store:l.default},a.default.createElement(f.default,null)),document.getElementById("app"))},448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logOut=t.logIn=void 0;var o=n(24);t.logIn=function(e){return{type:o.LOG_IN,payload:e}},t.logOut=function(){return{type:o.LOG_OUT}}},449:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.queueNumberReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=t.roomName,a=t.number;switch(t.type){case"LOAD_QUEUE_NUMBER":return r({},e,o({},n,a));case"DECREASE_QUEUE_NUMBER":var i=e[n];if(i>=0)return r({},e,o({},n,i-1))}return e}},450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.roomReducer=void 0;var o=n(24);t.roomReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case o.UPDATE_ROOM_INFO:return t.payload}return e}},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notificationIsShown=function e(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];switch(t.type){case"SHOW_NOTIFICATION":return!0;case"HIDE_NOTIFICATION":return!1}return e}},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.user=void 0;var o=n(24);t.user=function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1],n=t.type,r=t.payload;switch(n){case o.LOG_IN:return r;case o.LOG_OUT:return null}return e}},453:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.notificationMiddeware=t.socketMiddleware=t.promiseFlattenerMiddleWare=t.promiseDispatchMiddleWare=void 0;var r=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(116),u=o(i);t.promiseDispatchMiddleWare=function(e){var t=e.dispatch;return function(e){return function(n){if("object"===("undefined"==typeof n?"undefined":a(n))&&n.types&&2===n.types.length&&n.api){var o=r(n.types,2),i=o[0],u=o[1],c=n.api;return t(i(!0)),c.then(function(e){t(i(!1)),t(u(e))})}return e(n)}}},t.promiseFlattenerMiddleWare=function(e){var t=e.dispatch;return function(e){return function(n){return"function"==typeof n.then?n.then(t):e(n)}}},t.socketMiddleware=function(e){return e.dispatch,function(e){return function(t){var n=t.type,o=t.payload,r=t.protocol;if("SOCKET"===r){var a=new u.default;return void a.emitEvent(n,o)}return e(t)}}},t.notificationMiddeware=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(o){return"LOAD_QUEUE_NUMBER"!==o.type&&"DECREASE_QUEUE_NUMBER"!==o.type||setTimeout(function(){var e=n(),r=e.queueNumbers,a=o.roomName;0===r[a]&&t({type:"SHOW_NOTIFICATION"})},300),e(o)}}}},454:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50),r=n(74),a=n(450),i=n(449),u=n(452),c=n(451);t.default=(0,o.combineReducers)({rooms:a.roomReducer,queueNumbers:i.queueNumberReducer,user:u.user,form:r.reducer,notificationIsShown:c.notificationIsShown})},455:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),a=(n(74),n(566)),i=o(a),u=n(453),c=n(454),l=o(c),s=n(116),f=(o(s),(0,r.createStore)(l.default,(0,r.compose)((0,r.applyMiddleware)(i.default,u.promiseFlattenerMiddleWare,u.socketMiddleware,u.notificationMiddeware),function(e){return e})));t.default=f},456:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.startSocketConnection=void 0;var r=n(116),a=o(r),i=n(24);t.startSocketConnection=function(e){var t=new a.default;t.addSocketEventHanler(i.UPDATE_ROOM_INFO,function(t){var n=Object.keys(t).map(function(e){return{roomName:e,numberOfPeopleInUse:t[e]}});e({type:i.UPDATE_ROOM_INFO,payload:n})}),t.addSocketEventHanler(i.BOOK_ROOM,function(t){var n=t.roomName,o=t.queueNumber;e({type:i.LOAD_QUEUE_NUMBER,roomName:n,number:o})}),t.addSocketEventHanler(i.FINISH_ROOM,function(t){var n=t.roomName;e({type:i.DECREASE_QUEUE_NUMBER,roomName:n})}),t.addSocketEventHanler(i.CANCEL_ROOM,function(t){var n=t.roomName;e({type:i.LOAD_QUEUE_NUMBER,roomName:n,number:-1})})}},457:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),l=o(c),s=n(121),f=n(461),d=o(f),p=n(458),m=o(p),b=n(459),h=o(b),g=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return l.default.createElement(s.Router,{history:s.browserHistory},l.default.createElement(s.Route,{path:"/",component:h.default},l.default.createElement(s.IndexRoute,{component:m.default}),l.default.createElement(s.Route,{path:"/dashboard",component:d.default})))}}]),t}(c.Component);t.default=g},458:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Login=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(3),s=o(l),f=n(14),d=n(74),p=n(52),m=o(p),b=n(463),h=o(b),g=n(115),v=t.Login=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeTab:"Login"},n.changeActiveTab=n.changeActiveTab.bind(n),n.onSave=n.onSave.bind(n),n}return i(t,e),c(t,[{key:"changeActiveTab",value:function(e){e!==this.state.activeTab&&(this.props.clearForm(),this.setState(u({},this.state,{activeTab:e})))}},{key:"onSave",value:function(e){var t=this,n=this.props,o=n.router,r=n.signUp,a=n.logIn;return"Login"===this.state.activeTab?a(e).then(function(){o.push("/dashboard"),console.log("done")}).catch(function(e){throw console.log(e),new d.SubmissionError({_error:"Login failed!"})}):r(e).then(function(){t.changeActiveTab("Login"),alert("Account created successfully!")}).catch(function(e){throw new d.SubmissionError({_error:"This user is already exist!"})})}},{key:"render",value:function(){var e=this,t=this.state.activeTab;return s.default.createElement("div",{className:"full-screen"},s.default.createElement("div",{className:"login-modal"},s.default.createElement("div",{className:"login-tab"},["Login","Sign Up"].map(function(n){var o=(0,m.default)("tab-header",{"tab-active":n===t});return s.default.createElement("div",{key:n,className:o,onClick:function(){return e.changeActiveTab(n)}},n)})),s.default.createElement(h.default,{onSubmit:this.onSave,activeTab:t})))}}]),t}(s.default.Component),y=function(e){return{logIn:function(t){return e((0,g.login)(t))},signUp:function(t){return e((0,g.signUp)(t))},clearForm:function(){return e((0,d.reset)("login-form"))}}};t.default=(0,f.connect)(null,y)(v)},459:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),l=o(c),s=n(14),f=n(121),d=n(115),p=(n(187),n(460)),m=o(p),b=t.Main=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getCurrnentUser,n=e.router;t().then(function(e){n.push("/dashboard")}).catch(function(e){n.push("/")})}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,n=t.hasUser,o=t.router;e.hasUser===n||e.hasUser||o.push("/")}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.notificationIsShown;return l.default.createElement("div",null,l.default.createElement("div",{className:n&&"main-content"},l.default.cloneElement(this.props.children,{router:t})),n&&l.default.createElement(m.default,null))}}]),t}(l.default.Component),h=function(e){return{hasUser:!!e.user,notificationIsShown:e.notificationIsShown}},g=function(e){return{getCurrnentUser:function(){return e((0,d.getCurrentUser)())}}};t.default=(0,s.connect)(h,g)((0,f.withRouter)(b))},460:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Notification=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),l=o(c),s=n(14),f=n(187),d=n(24),p=t.Notification=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.cancelBooking=n.cancelBooking.bind(n),n.finishBooking=n.finishBooking.bind(n),n.updateBooking=n.updateBooking.bind(n),n.audio=null,n}return i(t,e),u(t,[{key:"updateBooking",value:function(e,t){var n=this.props,o=n.emitRoomAction,r=n.urgentRooms,a=n.hideNotification;return function(){1===r.length&&a(),o(e,t)}}},{key:"cancelBooking",value:function(e){return this.updateBooking(d.CANCEL_ROOM,e)}},{key:"finishBooking",value:function(e){return this.updateBooking(d.FINISH_ROOM,e)}},{key:"playsound",value:function(){this.audio=document.createElement("audio"),this.audio.style.display="none",this.audio.src="/public/noti.mp3",this.audio.autoplay=!0,this.audio.onended=function(){this.audio.remove()},document.body.appendChild(this.audio)}},{key:"componentDidMount",value:function(){this.playsound()}},{key:"componentWillUnmount",value:function(){this.audio&&this.audio.remove()}},{key:"render",value:function(){var e=this.props,t=(e.emitRoomAction,e.urgentRooms);return l.default.createElement("div",{className:"notification-container"},l.default.createElement("div",{className:"notification"},l.default.createElement("h3",null,"Your turn at ",t[0]," "),l.default.createElement("div",{className:"img-container"},l.default.createElement("img",{src:"https://i.imgur.com/Zi385Mr.png"})),l.default.createElement("div",{className:"button-group"},l.default.createElement("button",{onClick:this.cancelBooking(t[0]),className:"waves-effect waves-light btn btn-warning"},"Cancel"),l.default.createElement("button",{onClick:this.finishBooking(t[0]),className:"waves-effect waves-light btn btn-primary"},"Finish"))))}}]),t}(l.default.Component),m=function(e){return{urgentRooms:(0,f.getUrgentRooms)(e)}},b=function(e){return{emitRoomAction:function(t,n){return e({protocol:"SOCKET",type:t,payload:n})},hideNotification:function(){return e({type:"HIDE_NOTIFICATION"})}}};t.default=(0,s.connect)(m,b)(p)},461:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),l=o(c),s=(n(121),n(14)),f=n(216),d=(o(f),n(465)),p=o(d),m=n(462),b=o(m),h=n(24),g=n(456),v=n(115),y=t.Main=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.socketIsStarted=!1,n.state={rooms:[],queueNumberStorage:{}},n.cancelAllBooking=n.cancelAllBooking.bind(n),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.initializeSocket,e.emitRoomAction,e.hasUser);t&&this.startSocket(),window.addEventListener("beforeunload",this.cancelAllBooking)}},{key:"componentWillReceiveProps",value:function(e){e.hasUser&&!this.socketIsStarted&&this.startSocket()}},{key:"startSocket",value:function(){this.socketIsStarted=!0,this.props.initializeSocket(),this.props.emitRoomAction(h.GET_ROOM)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.cancelAllBooking)}},{key:"cancelAllBooking",value:function(){var e=this.props,t=e.rooms,n=e.emitRoomAction;t.forEach(function(e){var t=e.roomName;n(h.CANCEL_ROOM,t)})}},{key:"render",value:function(){var e=this.props,t=e.rooms,n=e.queueNumbers,o=e.emitRoomAction,r=e.logOut;return l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"logoutContainer"},l.default.createElement("img",{src:"https://i.imgur.com/Dz9Tpka.png",className:"logout-button",onClick:r})),l.default.createElement("div",{className:"header"},l.default.createElement("h4",null,"Resources"),l.default.createElement(b.default,{emitRoomAction:o})),t.map(function(e){var t=e.roomName,r=e.numberOfPeopleInUse,a=n[t];return l.default.createElement(p.default,{key:t,roomName:t,numberOfPeopleInUse:r,emitRoomAction:o,queueNumber:a>=0?a:-1})}))}}]),t}(l.default.Component),_=function(e){var t=e.rooms,n=e.queueNumbers,o=e.user;return{rooms:t,queueNumbers:n,hasUser:!!o}},O=function(e){return{initializeSocket:function(){return(0,g.startSocketConnection)(e)},emitRoomAction:function(t,n){return e({protocol:"SOCKET",type:t,payload:n})},logOut:function(){return e((0,v.logOut)())}}};t.default=(0,s.connect)(_,O)(y)},462:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(3),s=o(l),f=n(52),d=o(f),p=n(24),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showInput:!1,bufferValue:""},n.toggleInput=n.toggleInput.bind(n),n.createRoom=n.createRoom.bind(n),n.updateBufferValue=n.updateBufferValue.bind(n),n.cancelCreate=n.cancelCreate.bind(n),n}return i(t,e),c(t,[{key:"toggleInput",value:function(){this.setState(u({},this.state,{showInput:!this.state.showInput}))}},{key:"updateBufferValue",value:function(e){this.setState(u({},this.state,{bufferValue:e.target.value}))}},{key:"createRoom",value:function(){var e=this.props.emitRoomAction;this.state.bufferValue&&e(p.CREATE_ROOM,this.state.bufferValue),this.setState({showInput:!this.state.showInput,bufferValue:""})}},{key:"cancelCreate",value:function(){this.setState({showInput:!this.state.showInput,bufferValue:""})}},{key:"render",value:function(){var e=this.state,t=e.showInput,n=e.bufferValue,o=(0,d.default)({"input-container":!0,"long-input":t});return s.default.createElement("div",{className:"form-container"},s.default.createElement("div",{className:o},s.default.createElement("input",{type:"text",onChange:this.updateBufferValue,value:n,className:"input-create"})),s.default.createElement("img",{className:(0,d.default)({"create-button":!0,"create-button-disabled":t&&!n}),onClick:t?this.createRoom:this.toggleInput,src:t?"https://i.imgur.com/WnJq5mB.png":"https://i.imgur.com/Bxea7FJ.png",alt:""}),t&&s.default.createElement("img",{onClick:this.cancelCreate,className:"cancel-button",src:"https://i.imgur.com/05NMSEj.png"}))}}]),t}(s.default.Component);t.default=m},463:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LoginForm=void 0;var r=n(3),a=o(r),i=n(74),u=n(464),c=o(u),l=t.LoginForm=function(e){var t=e.handleSubmit,n=e.activeTab,o=e.error,r=e.submitting;return a.default.createElement("form",{className:"form",onSubmit:t},a.default.createElement("center",null,"Login"===n?a.default.createElement("img",{className:"login-logo",src:"http://www.computer-repairs-auckland.co.nz/images/home_with_wifi.png",alt:""}):a.default.createElement("img",{className:"signup-logo",src:"http://i.imgur.com/8XZaKyN.png",alt:""})),o&&a.default.createElement("center",{className:"error-message"},a.default.createElement("strong",null,o)),a.default.createElement(i.Field,{name:"username",component:c.default}),a.default.createElement(i.Field,{name:"password",component:c.default}),a.default.createElement("button",{className:"pull-right waves-effect waves-light btn",type:"submit",disabled:r},n))};t.default=(0,i.reduxForm)({form:"login-form"})(l)},464:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(3),i=o(a),u=n(52),c=o(u),l=function(e){var t=e.meta.active,n=e.input,o=n.name,a=n.value,u=(0,c.default)("form-group",o,{focused:t||a});return i.default.createElement("div",{className:u},i.default.createElement("input",r({className:"form-control"},e.input,{type:"password"===o?"password":"text"})))};t.default=l},465:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=o(r),i=n(52),u=o(i),c=n(24),l=n(466),s=function(e){var t=e.roomName,n=e.numberOfPeopleInUse,o=e.queueNumber,r=e.emitRoomAction,i=(0,
u.default)({room:!0,"room-booked-run":!o,"room-booked-occupy":n&&o===-1,"room-booked-queue":o>0});return a.default.createElement("div",{className:"room-container"},a.default.createElement("div",{className:"btn-delete",onClick:function(){return r(c.REMOVE_ROOM,t)}},a.default.createElement("img",{src:"https://image.ibb.co/htCMRQ/rubbish_bin.png"})),a.default.createElement("div",{className:i},a.default.createElement("div",{className:"room__header"},a.default.createElement("span",{className:"room-name"},t)),a.default.createElement("div",{className:"room__info"},a.default.createElement("div",{className:"room__info-container"},a.default.createElement("span",{className:"room__info-status"},(0,l.getStatus)(n,o)),a.default.createElement("div",{className:"button-group"},o===-1&&a.default.createElement("button",{className:"waves-effect waves-light btn btn-book",onClick:function(){return r(c.BOOK_ROOM,t)}},"Book"),o>=0&&a.default.createElement("button",{className:"waves-effect waves-light btn btn-warning",onClick:function(){return r(c.CANCEL_ROOM,t)}},"Cancel"))))))};t.default=s},466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStatus=function(e,t){return e?0===t?"QUICK! YOUR TURN":t===-1?"People in use: "+e:t>0?"Your number: "+t:void 0:"Available"},t.populateRoomInfo=function(e){return Object.keys(e).map(function(t){return{roomName:t,numberOfPeopleInUse:e[t]}})}},575:function(e,t,n){var o=n(245);"string"==typeof o&&(o=[[e.id,o,""]]),n(574)(o,{}),o.locals&&(e.exports=o.locals)},580:function(e,t){}});