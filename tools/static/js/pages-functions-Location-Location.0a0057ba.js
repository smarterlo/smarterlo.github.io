(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-functions-Location-Location"],{"317e":function(e,t,s){"use strict";s.r(t);var i=s("3539"),a=s("c1c6");for(var n in a)"default"!==n&&function(e){s.d(t,e,(function(){return a[e]}))}(n);var o,r=s("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1081da13",null,!1,i["a"],o);t["default"]=u.exports},3539:function(e,t,s){"use strict";var i;s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return n})),s.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-uni-view",[s("v-uni-view",{staticClass:"padding flex flex-direction bg-white top"},[s("v-uni-button",{staticClass:"cu-btn  bg-blue margin-tb-sm lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.count.apply(void 0,arguments)}}},[e._v("刷新")])],1),e.res.longitude?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("经度")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.longitude,callback:function(t){e.$set(e.res,"longitude",t)},expression:"res.longitude"}})],1):e._e(),e.res.latitude?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("纬度")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.latitude,callback:function(t){e.$set(e.res,"latitude",t)},expression:"res.latitude"}})],1):e._e(),e.res.altitude?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("高度")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.altitude,callback:function(t){e.$set(e.res,"altitude",t)},expression:"res.altitude"}})],1):e._e(),e.res.address.country?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("国家")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.country,callback:function(t){e.$set(e.res.address,"country",t)},expression:"res.address.country"}})],1):e._e(),e.res.address.province?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("省/直辖市")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.province,callback:function(t){e.$set(e.res.address,"province",t)},expression:"res.address.province"}})],1):e._e(),e.res.address.city?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("市")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.city,callback:function(t){e.$set(e.res.address,"city",t)},expression:"res.address.city"}})],1):e._e(),e.res.address.district?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("县/区")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.district,callback:function(t){e.$set(e.res.address,"district",t)},expression:"res.address.district"}})],1):e._e(),e.res.address.street?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("街道信息")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.street,callback:function(t){e.$set(e.res.address,"street",t)},expression:"res.address.street"}})],1):e._e(),e.res.address.postalCode?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("邮政编码")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.postalCode,callback:function(t){e.$set(e.res.address,"postalCode",t)},expression:"res.address.postalCode "}})],1):e._e(),e.res.address.poiName?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("POI信息")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.poiName,callback:function(t){e.$set(e.res.address,"poiName",t)},expression:"res.address.poiName"}})],1):e._e(),e.res.address.cityCode?s("v-uni-view",{staticClass:"cu-form-group"},[s("v-uni-view",{staticClass:"title"},[e._v("城市代码")]),s("v-uni-input",{staticStyle:{"padding-bottom":"6.5upx"},model:{value:e.res.address.cityCode,callback:function(t){e.$set(e.res.address,"cityCode",t)},expression:"res.address.cityCode"}})],1):e._e()],1)},n=[]},"86b3":function(e,t,s){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={onLoad:function(){switch(i=this,i.$store.state.platform){case"android":console.log("运行Android上"),Vue.prototype.requestAndroidPermission("android.permission.ACCESS_FINE_LOCATION","位置权限");break;case"ios":Vue.prototype.requestIosPermission("location","位置权限"),console.log("运行iOS上");break;default:console.log("运行在开发者工具上");break}},onShow:function(){this.count()},data:function(){return{res:{address:{}}}},methods:{count:function(){var e=this;uni.getLocation({type:"wgs84",geocode:!0,success:function(t){e.res=t,console.log(t)}})}}};t.default=a},c1c6:function(e,t,s){"use strict";s.r(t);var i=s("86b3"),a=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t["default"]=a.a}}]);