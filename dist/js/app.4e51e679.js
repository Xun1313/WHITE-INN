(function(e){function t(t){for(var a,r,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)r=c[s],o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({buy:"buy",contact:"contact",dashboard:"dashboard",facility:"facility",facilityDetail:"facilityDetail",favorite:"favorite",gallery:"gallery",home:"home",list:"list",login:"login",nav:"nav",news:"news",newsDetail:"newsDetail",purchase:"purchase",room:"room",signup:"signup"}[e]||e)+"."+{buy:"f116a4fe",contact:"b37eb152",dashboard:"b2c9c5bf",facility:"9389b34b",facilityDetail:"8902703f",favorite:"7529d67f",gallery:"5cb41403",home:"184a1117",list:"62147d04",login:"3ee8dd69",nav:"dfd1f88d",news:"021e645c",newsDetail:"ad1ec40b",purchase:"798a13a5",room:"9bcf9df1",signup:"8f6d8373"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={buy:1,contact:1,dashboard:1,facility:1,facilityDetail:1,favorite:1,gallery:1,home:1,list:1,login:1,nav:1,news:1,newsDetail:1,purchase:1,room:1,signup:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({buy:"buy",contact:"contact",dashboard:"dashboard",facility:"facility",facilityDetail:"facilityDetail",favorite:"favorite",gallery:"gallery",home:"home",list:"list",login:"login",nav:"nav",news:"news",newsDetail:"newsDetail",purchase:"purchase",room:"room",signup:"signup"}[e]||e)+"."+{buy:"86dd7047",contact:"bc71345f",dashboard:"0942d0e1",facility:"7dbf45aa",facilityDetail:"f08464fe",favorite:"a2e386d5",gallery:"bf0d798c",home:"439a5694",list:"dde32316",login:"3a73fc39",nav:"1dbff378",news:"25387d7a",newsDetail:"9dec64b5",purchase:"c53544db",room:"94adfa38",signup:"b3151a6f"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/week6/dist/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1045:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("footers")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",[e._v("Address:台北市OO區OO街123號")]),n("div",[e._v("Phone:00-1234567")])]),n("div",{staticClass:"col-md-6"},[n("div",[e._v("Fax:00-76543217")]),n("div",[e._v("Email:asdf@132456789.com.tw")])])]),n("div",{staticClass:"footer-other"},[e._v("\n      © Copyright WHITE INN - 2020\n    ")])])])}],u=(n("e8b3"),n("2877")),l={},s=Object(u["a"])(l,i,c,!1,null,"58b3327a",null),f=s.exports,d={components:{footers:f}},p=d,h=(n("5c0b"),Object(u["a"])(p,r,o,!1,null,null,null)),m=h.exports,b=n("8c4f");a["a"].use(b["a"]);var v=new b["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"nav",component:function(){return n.e("nav").then(n.bind(null,"c909"))},children:[{path:"",name:"home",component:function(){return n.e("home").then(n.bind(null,"6511"))}},{path:"room/:id",name:"room",component:function(){return n.e("room").then(n.bind(null,"5961"))}},{path:"facility",name:"facility",component:function(){return n.e("facility").then(n.bind(null,"47b2"))}},{path:"facility/:id",name:"facilityDetail",component:function(){return n.e("facilityDetail").then(n.bind(null,"c238"))}},{path:"news",name:"news",component:function(){return n.e("news").then(n.bind(null,"1474"))}},{path:"news/:id",name:"newsDetail",component:function(){return n.e("newsDetail").then(n.bind(null,"d6db"))}},{path:"contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"4fe8"))}},{path:"gallery",name:"gallery",component:function(){return n.e("gallery").then(n.bind(null,"f115"))}},{path:"buy",name:"buy",component:function(){return n.e("buy").then(n.bind(null,"cd84"))}},{path:"list",name:"list",component:function(){return n.e("list").then(n.bind(null,"6be2"))}},{path:"favorite",name:"favorite",component:function(){return n.e("favorite").then(n.bind(null,"47c0"))},meta:{requiresAuth:!0}},{path:"purchase",name:"purchase",component:function(){return n.e("purchase").then(n.bind(null,"f4d1"))},meta:{requiresAuth:!0}},{path:"login",name:"login",component:function(){return n.e("login").then(n.bind(null,"dd7b"))},meta:{requiresAuth:!0}},{path:"signup",name:"signup",component:function(){return n.e("signup").then(n.bind(null,"62c4"))},meta:{requiresAuth:!0}},{path:"dashboard",name:"dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"4601"))},meta:{requiresAuth:!0}}]}]}),y=(n("1045"),n("bc3a")),g=n.n(y),w=n("a7fe"),_=n.n(w),D=n("a925"),O=n("7bb1"),C=n("427f"),E=n.n(C);a["a"].prototype.$bus=new a["a"],g.a.defaults.withCredentials=!0,g.a.defaults.headers.post["Content-Type"]="application/json",a["a"].use(_.a,g.a),a["a"].use(D["a"]);var j=new D["a"];j.locale="zhTW",a["a"].use(O["a"],{events:"",i18n:j,dictionary:{zhTW:E.a}}),a["a"].config.productionTip=!1,new a["a"]({router:v,render:function(e){return e(m)}}).$mount("#app"),v.beforeEach(function(e,t,n){e.meta.requiresAuth?g.a.get("".concat("https://guarded-castle-26873.herokuapp.com","/users/isSignin")).then(function(t){t.data.success?"/login"===e.path||"/signup"===e.path?n({path:"/"}):n():"/dashboard"===e.path||"/favorite"===e.path||"/purchase"===e.path?n({path:"/login"}):n()}):n()})},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},bfa4:function(e,t,n){},e8b3:function(e,t,n){"use strict";var a=n("bfa4"),r=n.n(a);r.a}});
//# sourceMappingURL=app.4e51e679.js.map