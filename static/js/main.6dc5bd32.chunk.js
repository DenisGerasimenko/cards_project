(this.webpackJsonpcards_project=this.webpackJsonpcards_project||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/anonim.b1d7bfb1.jpg"},35:function(e,t,n){e.exports=n(65)},40:function(e,t,n){},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),u=(n(40),n(41),n(4)),o=n(1),i=n(12),s=n(32),d=n(9),m=function(e){return{type:"LOGIN/LOGIN_IN",value:e}},p={isLoginIn:!1},E={isRegisterIn:!1},f={status:"idle",error:null},v=function(e){return{type:"MAIN/SET_STATUS",status:e}},b=function(e){return{type:"MAIN/SET_ERROR",error:e}},g="PROFILE/SET_USER",O={user:null},h={user:null},j={isSetPassIn:!1},S=Object(i.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/LOGIN_IN":return Object(d.a)({},e,{isLoginIn:t.value});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/REGISTER_IN":return Object(d.a)({},e,{isRegisterIn:!0});default:return e}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN/SET_STATUS":return Object(d.a)({},e,{status:t.status});case"MAIN/SET_ERROR":return Object(d.a)({},e,{error:t.error});default:return e}},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return e},setPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PASS/SET_PASS_IN":return Object(d.a)({},e,{isSetPassIn:!0});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)({},e,{user:t.user});default:return e}}}),y=Object(i.d)(S,Object(i.a)(s.a));window.store=y;var w=n(2),I=n(3),x=n(5),R=n.n(x),k=n(10),T=n(33),L=n.n(T).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),N=function(e){return L.post("auth/register",e)},C=r.a.memo((function(e){var t=e.title,n=e.status,a=e.error;return r.a.createElement("div",null,r.a.createElement("h2",null,t),"failed"===n?r.a.createElement("div",{style:{color:"red"}},a):"succeeded"===n?r.a.createElement("div",{style:{color:"green"}},"success"):null)})),G=r.a.memo((function(e){var t=Object(o.c)((function(e){return e.register.isRegisterIn})),n=Object(o.c)((function(e){return e.main.status})),c=Object(o.c)((function(e){return e.main.error})),l=Object(o.b)(),u=Object(a.useState)("gerasimenkodenis7@gmail.com"),i=Object(I.a)(u,2),s=i[0],d=i[1],m=Object(a.useState)("qwertyu12"),p=Object(I.a)(m,2),E=p[0],f=p[1],g=Object(a.useState)(!0),O=Object(I.a)(g,2),h=O[0],j=O[1];Object(a.useEffect)((function(){h&&(l(b("")),l(v("idle")),j(!1))}),[h,j]);return t?r.a.createElement(w.a,{to:Y.LOGIN}):r.a.createElement("div",{style:{width:"40%",outline:"1px solid red",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(C,{title:"Register",status:n,error:c}),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you email",value:s,onChange:function(e){return d(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you password",value:E,onChange:function(e){return f(e.currentTarget.value)}})),r.a.createElement("button",{onClick:function(){var e;l((e={email:s,password:E},function(){var t=Object(k.a)(R.a.mark((function t(n){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,N(e);case 4:n({type:"REGISTER/REGISTER_IN"}),n(v("succeeded")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),a=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(b(a)),n(v("failed"));case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}},"sign up"))})),P=r.a.memo((function(e){var t=e.email,n=e.password,a=e.checked,c=e.setEmail,l=e.setPassword,o=e.setChecked,i=e.onLogin;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you email",value:t,onChange:function(e){return c(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you password",value:n,onChange:function(e){return l(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Remember Me",r.a.createElement("input",{type:"checkbox",name:"check",checked:a,onChange:function(e){return o(e.currentTarget.checked)}}))),r.a.createElement("div",null,r.a.createElement(u.b,{to:Y.RESTORE},"\u0412\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c?")),r.a.createElement("button",{onClick:i},"Sign in"),r.a.createElement("div",null,r.a.createElement(u.b,{to:Y.REGISTER},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))})),_=function(e){return L.post("auth/login",e)},A=function(){return L.delete("auth/me")},M=r.a.memo((function(){var e=Object(o.c)((function(e){return e.login.isLoginIn})),t=Object(o.c)((function(e){return e.main.status})),n=Object(o.c)((function(e){return e.main.error})),c=Object(o.b)(),l=Object(a.useState)("grok88@tut.by"),u=Object(I.a)(l,2),i=u[0],s=u[1],d=Object(a.useState)("alexgor88"),p=Object(I.a)(d,2),E=p[0],f=p[1],O=Object(a.useState)(!1),h=Object(I.a)(O,2),j=h[0],S=h[1],y=Object(a.useState)(!1),x=Object(I.a)(y,2),T=x[0],L=x[1],N=Object(a.useState)(!0),G=Object(I.a)(N,2),A=G[0],M=G[1],F=Object(a.useState)(!1),D=Object(I.a)(F,2),U=D[0],$=D[1];Object(a.useEffect)((function(){A?(c(b("")),c(v("idle")),M(!1)):$(!0)}),[A,M]);var q=Object(a.useCallback)((function(){var e;c((e={email:i,password:E,rememberMe:j},function(){var t=Object(k.a)(R.a.mark((function t(n){var a,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,_(e);case 4:a=t.sent,n((c=a.data,{type:g,user:c})),n(m(!0)),n(v("succeeded")),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(b(r)),n(v("failed"));case 15:case"end":return t.stop()}var c}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[i,E,j]);return e&&U&&"succeeded"===t&&setTimeout((function(){L(!0)}),2e3),T?r.a.createElement(w.a,{to:Y.PROFILE}):r.a.createElement("div",{style:{width:"40%",outline:"1px solid red",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(C,{title:"Login",status:t,error:n}),r.a.createElement(P,{email:i,setEmail:s,password:E,setPassword:f,checked:j,setChecked:S,onLogin:q}))})),F=n(34),D=n.n(F),U=r.a.memo((function(e){var t,n,a,c;return r.a.createElement("div",null,e.isLoginIn?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:(null===(t=e.user)||void 0===t?void 0:t.avatar)?null===(n=e.user)||void 0===n?void 0:n.avatar:D.a,alt:"user-avatar",style:{width:"300px",height:"auto"}})),r.a.createElement("div",null,r.a.createElement("p",null,"name:",null===(a=e.user)||void 0===a?void 0:a.name),r.a.createElement("p",null,"email:",null===(c=e.user)||void 0===c?void 0:c.email)),r.a.createElement("button",{onClick:e.logOut},"LogOut")):r.a.createElement("div",null," You are not authorized "))})),$=r.a.memo((function(){var e=Object(o.c)((function(e){return e.profile.user})),t=Object(o.c)((function(e){return e.login.isLoginIn})),n=Object(a.useState)(!1),c=Object(I.a)(n,2),l=c[0],u=c[1],i=Object(o.b)(),s=Object(a.useCallback)((function(){i(function(){var e=Object(k.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v("loading")),e.prev=1,e.next=4,A();case 4:e.sent,t(m(!1)),t(v("succeeded")),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),n=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(b(n)),t(v("failed"));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);return t||setTimeout((function(){u(!0)}),2e3),l?r.a.createElement(w.a,{to:Y.LOGIN}):r.a.createElement(U,{user:e,isLoginIn:t,logOut:s})})),q=r.a.memo((function(e){var t=e.email,n=e.setEmail,a=e.onRestore,c=e.status;return r.a.createElement("div",null,"succeeded"===c?r.a.createElement("div",null,"\u041d\u0430 \u043f\u043e\u0447\u0442\u0443 \u043f\u0440\u0438\u0448\u043b\u043e \u043f\u0438\u0441\u044c\u043c\u043e..."):"",r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you email",value:t,onChange:function(e){return n(e.currentTarget.value)}})),r.a.createElement("button",{onClick:a},"\u0412\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("div",null,r.a.createElement(u.b,{to:Y.LOGIN},"login")))})),B=function(e){return L.post("auth/forgot",e)},J=r.a.memo((function(e){var t=Object(o.c)((function(e){return e.main.error})),n=Object(o.c)((function(e){return e.main.status})),c=Object(o.b)(),l=Object(a.useState)("grok88@tut.by"),u=Object(I.a)(l,2),i=u[0],s=u[1],d=Object(a.useState)(!0),m=Object(I.a)(d,2),p=m[0],E=m[1];Object(a.useEffect)((function(){p&&(c(b("")),c(v("idle")),E(!1))}),[p,E]);var f=Object(a.useCallback)((function(){var e;c((e={email:i,from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">\t\t\n\t<a href='http://localhost:3000/cards_project#/set-new-password/$token$'>\t\n\tlink</a></div>"},function(){var t=Object(k.a)(R.a.mark((function t(n){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,B(e);case 4:t.sent,n(v("succeeded")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),a=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(b(a)),n(v("failed"));case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[i]);return r.a.createElement("div",{style:{width:"40%",outline:"1px solid red",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(C,{title:"Restore",status:n,error:t}),r.a.createElement(q,{email:i,setEmail:s,onRestore:f,status:n}))})),W=function(e){return L.post("auth/set-new-password",e)},z=r.a.memo((function(e){var t=Object(o.c)((function(e){return e.setPass.isSetPassIn})),n=Object(o.c)((function(e){return e.main.status})),c=Object(o.c)((function(e){return e.main.error})),l=Object(o.b)(),i=Object(a.useState)(""),s=Object(I.a)(i,2),d=s[0],m=s[1],p=Object(a.useState)(""),E=Object(I.a)(p,2),f=E[0],g=E[1],O=Object(a.useState)(!0),h=Object(I.a)(O,2),j=h[0],S=h[1];Object(a.useEffect)((function(){j&&(l(b("")),l(v("idle")),S(!1))}),[j,S]);var y=Object(w.f)().token;return t?r.a.createElement(w.a,{to:Y.LOGIN}):r.a.createElement("div",{style:{width:"40%",outline:"1px solid red",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(C,{title:"SetPassword",status:n,error:c}),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you password",value:d,onChange:function(e){return m(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"enter you password",value:f,onChange:function(e){return g(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(u.b,{to:Y.LOGIN},"login")),r.a.createElement("button",{onClick:function(){var e;d!==f?(l(v("failed")),l(b("passwords are not equal"))):l((e={password:d,resetPasswordToken:y},function(){var t=Object(k.a)(R.a.mark((function t(n){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,W(e);case 4:n({type:"SET_PASS/SET_PASS_IN"}),n(v("succeeded")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),a=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(b(a)),n(v("failed"));case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}},"set pass"))})),Y={LOGIN:"/login",REGISTER:"/register",RESTORE:"/restore",SET_PASS:"/set-new-password/:token",PROFILE:"/profile"},H=function(){return r.a.createElement("div",null,r.a.createElement(w.b,{exact:!0,path:"/",render:function(){return r.a.createElement(w.a,{to:Y.LOGIN})}}),r.a.createElement(w.b,{path:Y.LOGIN,render:function(){return r.a.createElement(M,null)}}),r.a.createElement(w.b,{path:Y.REGISTER,render:function(){return r.a.createElement(G,null)}}),r.a.createElement(w.b,{path:Y.RESTORE,render:function(){return r.a.createElement(J,null)}}),r.a.createElement(w.b,{path:Y.SET_PASS,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(w.b,{path:Y.PROFILE,render:function(){return r.a.createElement($,null)}}))},K=function(){return r.a.createElement("div",null,r.a.createElement(u.b,{to:Y.LOGIN,style:{padding:"10px"}},"login "),r.a.createElement(u.b,{to:Y.REGISTER,style:{padding:"10px"}},"register"),r.a.createElement(u.b,{to:Y.RESTORE,style:{padding:"10px"}},"restore"),r.a.createElement(u.b,{to:Y.SET_PASS,style:{padding:"10px"}},"set new pass"),r.a.createElement(u.b,{to:Y.PROFILE,style:{padding:"10px"}},"profile"))},Q=function(){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(H,null))};var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(o.a,{store:y},r.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.6dc5bd32.chunk.js.map