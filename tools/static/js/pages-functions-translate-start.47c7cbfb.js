(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-functions-translate-start"],{"8e8e":function(e,t,n){"use strict";n.r(t);var r=n("c496"),i=n("d2ec");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var u=n("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"e7c158d4",null,!1,r["a"],void 0);t["default"]=o.exports},c496:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var r=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view")},i=[]},c4e6:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={onLoad:function(e){var t;this.url=e.url,this.name=e.name,uni.setNavigationBarTitle({title:e.name});var n=uni.getSystemInfoSync();t="android"==n.platform?n.statusBarHeight+50:n.statusBarHeight+45;var r=plus.webview.create(this.url,"custom-webview",{plusrequire:"none","uni-app":"none",top:t,height:uni.getSystemInfoSync().screenHeight-t,progress:{color:"#0000FF"}}),i=this.$scope.$getAppWebview();i.append(r)},data:function(){return{webviewStyles:{progress:{color:"#00aaff"}},url:"",name:""}}};t.default=r},d2ec:function(e,t,n){"use strict";n.r(t);var r=n("c4e6"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a}}]);