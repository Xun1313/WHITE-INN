(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{1359:function(t,s,e){"use strict";var n=e("6ec5"),i=e.n(n);i.a},1474:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"news-title-other"},[t._v("最新消息")]),e("div",{staticClass:"row"},t._l(t.news,function(s){return e("div",{key:s.id,staticClass:"col-md-6 item"},[e("div",{staticClass:"news-item",on:{click:function(e){return t.routeHandler(s.id)}}},[e("div",{staticClass:"news-item-pic",style:"background-image:url("+s.pic+")"}),e("div",{staticClass:"news-item-content"},[e("div",{staticClass:"news-item-content-title"},[t._v(t._s(s.name))]),e("div",{staticClass:"news-item-content-word"},[t._v(t._s(s.content))])]),e("router-link",{staticClass:"news-item-more",attrs:{to:"/news/"+s.id}},[t._v("了解更多")])],1)])}),0)])])},i=[],a={data:function(){return{news:[],route:{}}},methods:{routeHandler:function(t){this.$router.push("/news/".concat(t))}},mounted:function(){var t=this;this.$bus.$emit("isLoading",!0),this.$http.get("".concat("https://guarded-castle-26873.herokuapp.com","/news")).then(function(s){console.log(s.data),t.news=s.data.news,t.$bus.$emit("isLoading",!1)})}},c=a,o=(e("1359"),e("2877")),r=Object(o["a"])(c,n,i,!1,null,"f0668bd2",null);s["default"]=r.exports},"6ec5":function(t,s,e){}}]);
//# sourceMappingURL=news.021e645c.js.map