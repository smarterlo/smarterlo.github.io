(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-functions-pictureProduction-pictureProduction"],{"0351":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tower-swiper .tower-item[data-v-483f9211]{-webkit-transform:scale(calc(.5 + var(--index) / 10));transform:scale(calc(.5 + var(--index) / 10));margin-left:calc(var(--left) * %?100?% - %?150?%);z-index:var(--index)}",""]),t.exports=e},"0ddc":function(t,e,i){"use strict";i.r(e);var a=i("ce39"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"5d6c":function(t,e,i){var a=i("0351");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("69bfcd33",a,!0,{sourceMap:!1,shadowMode:!1})},7194:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tower-swiper",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.TowerMove.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.TowerStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.TowerEnd.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tower-item",class:1==e.zIndex?"none":"",style:[{"--index":e.zIndex,"--left":e.mLeft}],attrs:{"data-direction":t.direction}},[i("v-uni-view",{staticClass:"swiper-item"},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFit"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),null==t.swiperList[t.index].plac?i("v-uni-view",{staticClass:"cu-form-group "},[i("v-uni-view",{staticClass:"title"},[t._v("生成类型")]),i("v-uni-picker",{attrs:{value:t.typeIndex,range:t.type,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typeF.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.type[t.typeIndex].name))])],1)],1):t._e(),null!=t.swiperList[t.index].plac?i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("文字")]),i("v-uni-input",{attrs:{placeholder:t.swiperList[t.index].plac,name:"input"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e(),i("v-uni-view",{staticClass:"cu-bar bg-white "},[i("v-uni-view",{staticClass:"action"},[t._v("选择图片")])],1),i("v-uni-view",{staticClass:"cu-form-group",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[""!=t.img?i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-image",{attrs:{src:t.img,mode:"aspectFill"}})],1):t._e(),""==t.img?i("v-uni-view",{staticClass:"solids"},[i("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"padding flex flex-direction bg-white top"},[i("v-uni-button",{staticClass:"cu-btn  bg-blue margin-tb-sm lg",attrs:{disabled:""==t.img},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.create()}}},[t._v("开始制作")])],1)],1)},r=[]},"87ac":function(t,e,i){"use strict";i.r(e);var a=i("7194"),n=i("0ddc");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("89b3");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"483f9211",null,!1,a["a"],s);e["default"]=c.exports},"89b3":function(t,e,i){"use strict";var a=i("5d6c"),n=i.n(a);n.a},ce39:function(t,e,i){"use strict";var a;i("4160"),i("e25e"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},onLoad:function(){switch(a=this,a.TowerSwiper("swiperList"),a.$store.state.platform){case"android":console.log("运行Android上"),Vue.prototype.requestAndroidPermission("android.permission.CAMERA");break;case"ios":Vue.prototype.requestIosPermission("camera","摄像头"),Vue.prototype.requestIosPermission("photoLibrary","相册"),console.log("运行iOS上");break;default:console.log("运行在开发者工具上");break}a.xhttp.request({url:"/functions/PictureProduction/init",method:"GET",data:{},header:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){a.data=t.data.data,uni.hideLoading()})).catch((function(t){uni.hideLoading()}))},onShow:function(){},onUnload:function(){},watch:{index:{handler:function(t,e){console.log("当前选中",t)}}},data:function(){return{data:[],img:"",text:"",cardCur:0,index:3,type:[],swiperList:[{id:0,type:"image",url:"/static/images/pictureProduction/kpltx2.jpg",tag:"kpltx2",plac:"两个字 如职业 法王"},{id:1,type:"image",url:"/static/images/pictureProduction/kpltx4.jpg",tag:"kpltx4",plac:"四个字 如职业选手"},{id:2,type:"image",url:"/static/images/pictureProduction/zbtx.jpg",tag:"zbtx",plac:"两个字 如主播 法王"},{id:3,type:"image",url:"/static/images/pictureProduction/zytx.jpg",tag:"zytx",plac:"两个字 如职业 法王"},{id:4,type:"image",url:"/static/images/pictureProduction/carrytx.jpg",tag:"carrytx"},{id:5,type:"image",url:"/static/images/pictureProduction/jstx.jpg",tag:"jstx"},{id:6,type:"image",url:"/static/images/pictureProduction/cstx.jpg",tag:"cstx"}],dotStyle:!1,towerStart:0,direction:"",typeIndex:0}},methods:{create:function(){uni.showLoading({title:"处理中"});var t=a.text;console.log(t);var e=a.swiperList[a.index].tag;switch(e){case"carrytx":t=a.type[a.typeIndex].value;break;case"jstx":t=a.type[a.typeIndex].value;break;case"cstx":t=a.type[a.typeIndex].value;break}a.xhttp.upload("/functions/PictureProduction/create",{name:"img",params:{},filePath:a.img,header:{},custom:{},formData:{type:e,text:t}}).then((function(t){console.log(t.data.data),0==t.data.code&&uni.previewImage({indicator:"none",urls:[t.data.data],current:0}),uni.hideLoading()})).catch((function(t){uni.hideLoading()}))},typeF:function(t){a.typeIndex=t.detail.value},ChooseImage:function(){uni.chooseImage({count:1,sizeType:["original","compressed"],success:function(t){a.img=t.tempFilePaths[0]}})},TowerSwiper:function(t){for(var e=a[t],i=0;i<e.length;i++)e[i].zIndex=parseInt(e.length/2)+1-Math.abs(i-parseInt(e.length/2)),e[i].mLeft=i-parseInt(e.length/2);a.swiperList=e},TowerStart:function(t){a.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var e=a.direction,i=a.swiperList;if("right"==e){for(var n=i[0].mLeft,r=i[0].zIndex,s=1;s<a.swiperList.length;s++)a.swiperList[s-1].mLeft=a.swiperList[s].mLeft,a.swiperList[s-1].zIndex=a.swiperList[s].zIndex;a.swiperList[i.length-1].mLeft=n,a.swiperList[i.length-1].zIndex=r}else{for(var o=i[i.length-1].mLeft,c=i[i.length-1].zIndex,u=a.swiperList.length-1;u>0;u--)a.swiperList[u].mLeft=a.swiperList[u-1].mLeft,a.swiperList[u].zIndex=a.swiperList[u-1].zIndex;a.swiperList[0].mLeft=o,a.swiperList[0].zIndex=c}switch(a.direction="",a.swiperList=a.swiperList,a.swiperList.forEach((function(t){0==t.mLeft&&(a.index=t.id)})),a.typeIndex=0,a.index){case 4:a.type=a.data.carrytx;break;case 5:a.type=a.data.jstx;break;case 6:a.type=a.data.cstx;break}}}};e.default=n}}]);