(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-user"],{"2b1e":function(t,e,n){"use strict";var u;n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){u=this},data:function(){return{}},methods:{binPhone:function(){u.$store.state.user.phone?plus.nativeUI.alert("暂不支持修改哦!",(function(){}),"提示","好的"):u.navto("/pages/index/bindPhone")},skip:function(){plus.nativeUI.alert("暂不支持修改哦!",(function(){}),"提示","好的")},quit:function(){uni.showModal({title:"提示",content:"确定要退出吗?",success:function(t){t.confirm?u.xhttp.request({url:"/user/user/v1/quit",method:"POST",data:{},header:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){console.log("返回状态"),0==t.data.code&&(u.$store.state.user=null,uni.setStorageSync("user",null),uni.switchTab({url:"/pages/index/my"})),uni.hideLoading()})).catch((function(t){uni.hideLoading()})):t.cancel&&console.log("用户点击取消")}})}}};e.default=i},"640a":function(t,e,n){"use strict";n.r(e);var u=n("2b1e"),i=n.n(u);for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},b460:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var u={uCellGroup:n("0973").default,uCellItem:n("1bb4").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",[n("u-cell-group",[n("u-cell-item",{attrs:{title:"头像"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skip()}}},[n("v-uni-image",{staticStyle:{width:"90upx",height:"90upx","margin-top":"10px"},attrs:{src:t.$store.state.user?t.$store.state.user.icon:"https://ppgjx.com/static/images/logo.png"}})],1),n("u-cell-item",{attrs:{title:"昵称",value:t.$store.state.user?t.$store.state.user.name:"未登录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skip()}}}),n("u-cell-item",{attrs:{title:"皮皮号",value:t.$store.state.user?t.$store.state.user.account:"未登录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skip()}}}),n("u-cell-item",{attrs:{title:"修改密码"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navto("/pages/index/changePassword")}}}),n("u-cell-item",{attrs:{title:"手机号",value:t.$store.state.user?t.$store.state.user.phone?t.$store.state.user.phone:"未绑定":"未登录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.binPhone()}}}),n("u-cell-item",{attrs:{title:"退出"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.quit()}}})],1)],1)],1)},o=[]},b526:function(t,e,n){"use strict";n.r(e);var u=n("b460"),i=n("640a");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a=n("f0c5"),s=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"d898ab04",null,!1,u["a"],void 0);e["default"]=s.exports}}]);