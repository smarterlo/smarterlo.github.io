(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-functions-divCalculate-divCalculate"],{"0048":function(n,t,e){"use strict";var l;e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("e9c4"),e("a434");var o={onNavigationBarButtonTap:function(n){console.log("触发"),l.navto("/pages/functions/divCalculate/add?data="+n+"&type=0")},components:{},onLoad:function(){l=this,l.hint("divCalculate","本功能数据为本地储存,如果您卸载了软件,您制作的公式将会丢失")},onShow:function(){plus.sqlite.selectSql({name:"ppgjx",sql:"select * from div_calculate",success:function(n){console.log("selectSql success: "),l.list=n,console.log(n)},fail:function(n){console.log("selectSql failed: "+JSON.stringify(n))}})},onUnload:function(){},watch:{},data:function(){return{list:[]}},methods:{skip:function(n){console.log("跳转之前data"),console.log(n),l.navto("/pages/functions/divCalculate/add?data="+JSON.stringify(n)+"&type=1")},logoTime:function(n){uni.showModal({title:"提示",content:"您确定要删除 "+l.list[n].name+" 吗?",success:function(t){t.confirm?plus.sqlite.executeSql({name:"ppgjx",sql:"delete from  div_calculate where guid = '"+l.list[n].guid+"'",success:function(t){plus.nativeUI.toast("删除成功"),l.list.splice(n,1),console.log(t)},fail:function(n){plus.nativeUI.toast("删除失败"),console.log(JSON.stringify(n))}}):t.cancel&&console.log("用户点击取消")}})}}};t.default=o},"370c":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return l}));var l={uCellGroup:e("0973").default,uCellItem:e("1bb4").default},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("u-cell-group",n._l(n.list,(function(t,l){return e("v-uni-view",{on:{longpress:function(t){arguments[0]=t=n.$handleEvent(t),n.logoTime(l)},click:function(t){arguments[0]=t=n.$handleEvent(t),n.skip(n.list[l])}}},[e("u-cell-item",{attrs:{title:n.list[l].name}})],1)})),1)},i=[]},4037:function(n,t,e){"use strict";e.r(t);var l=e("0048"),o=e.n(l);for(var i in l)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return l[n]}))}(i);t["default"]=o.a},"61c8":function(n,t,e){"use strict";e.r(t);var l=e("370c"),o=e("4037");for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);var c=e("f0c5"),u=Object(c["a"])(o["default"],l["b"],l["c"],!1,null,"cb6d3fa6",null,!1,l["a"],void 0);t["default"]=u.exports}}]);