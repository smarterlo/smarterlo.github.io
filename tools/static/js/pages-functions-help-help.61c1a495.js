(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-functions-help-help"],{"1abe":function(e,t,n){"use strict";n.r(t);var i=n("3b7a"),r=n("faed");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);var u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"7ed65436",null,!1,i["a"],void 0);t["default"]=o.exports},"3b7a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view")},r=[]},5136:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onLoad:function(e){var t;console.log("链接",e.url),this.url=e.url,uni.setNavigationBarTitle({title:"帮助"}),e.title&&uni.setNavigationBarTitle({title:e.title});var n=uni.getSystemInfoSync();t="android"==n.platform?n.statusBarHeight+50:n.statusBarHeight+45;var i=plus.webview.create(this.url,"custom-webview",{plusrequire:"none","uni-app":"none",top:t,height:uni.getSystemInfoSync().screenHeight-t,progress:{color:"#0000FF"}}),r=this.$scope.$getAppWebview();r.append(i)},data:function(){return{webviewStyles:{progress:{color:"#00aaff"}},url:"",name:""}}};t.default=i},faed:function(e,t,n){"use strict";n.r(t);var i=n("5136"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a}}]);