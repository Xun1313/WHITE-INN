(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{dd7b:function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{on:{click:function(n){return t.toFavorite()}}},[t._v("toFavorite")]),o("div",{on:{click:function(n){return t.signin()}}},[t._v("signin")]),o("div",{on:{click:function(n){return t.signout()}}},[t._v("signout")]),o("div",{on:{click:function(n){return t.deleteFavorite()}}},[t._v("deleteFavorite")])])},e=[],c={methods:{toFavorite:function(){this.$http.post("".concat("http://127.0.0.1:3000","/favorite"),{id:"-LmcnJQtYP45XMHKhckV"}).then(function(t){console.log(t)})},signin:function(){this.$http.post("".concat("http://127.0.0.1:3000","/users/signin"),{email:"123@gmail.com",password:"adam10426009"}).then(function(t){console.log(t)})},signout:function(){this.$http.post("".concat("http://127.0.0.1:3000","/users/signout")).then(function(t){console.log(t)})},deleteFavorite:function(){this.$http.delete("".concat("http://127.0.0.1:3000","/favorite/-LmcHMVJzVF35Zg25qm4")).then(function(t){console.log(t)})}}},s=c,u=o("2877"),l=Object(u["a"])(s,i,e,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=login.586e42ff.js.map