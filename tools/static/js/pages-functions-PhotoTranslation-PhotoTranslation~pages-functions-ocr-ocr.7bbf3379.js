(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-functions-PhotoTranslation-PhotoTranslation~pages-functions-ocr-ocr"],{6937:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@font-face{font-family:iconfont;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAR4AAsAAAAACKgAAAQsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqEfIRGATYCJAMMCwgABCAFhG0HShugB8gOJUHBwAAAAAFEBNmwzd4dtatSmmpFoVAEhUThEAYkCozFKDCqCVO6RfH/89v869awDnTR1qrSANFt4GG4SNxreBn91fmV9f3+53J613ieHba+N1zmGM8PA7oXTaCAxpjei8IoLWFsGLu4jPME6vWJJdovqmgAO4U2LRBnep0K7GJmpYQWanXVOWuLuAFrtenK4haAa/f38QnKsCOpyrRFh6eFWsh5KXnfYcn958BGQNKfE8wmMmaAQpzkuo9Z+ukZluoltVV5abUipL5i/ysArlhWVut/eCRBVNPUjYg6oUo7JTHFoaYDSvdacnKTq9GAB4AY5y2dtL3qpFh1DENdnJC6Hq+xYb7pyRMDMzc/fYoJjY8flwO3m98rMucF+IZHj6Cagw5UeKpxyFbt2rHGY/8jpa7CYMvLfcIesLjY3bdqhaf+nqgQs2qT/+rjCH/VfA0VFGuAC3iE8NEr/Vau8vZsXiUy7+V3c3tQQXMAuNjDCC89KDIHH0OFhnUi81GEPwyc7wZUaN7DnUf4g+ZLQsMKYV/94NjK7R7TEM4niTY1oJ5zEU62aNVaasUub08YLUEam5EnT6a61/I17dNk+vTu9jpJjXhsTFwjqTtpCBxBIIgS6iQnc/Zod1YGKp0rAwsD8kkyP6AwcK0hcAwkiQmBhWvxPZWKDu86aUH2nLEdi9rGX1eXq5P6A1SrnAucMVMdZH/GKi/jyfCqJyucfK3mXpVujXOPfFf5LC4Dvx0X/943JyOq4HuCTZ8KiIPPAb6ro8akpT6ufiq39BQrNlk5mp8pO0JlJLk8f5QalRjoP60IMx0N8n7wGhSD3n6/F1zlcTVz/cR+Ev0lkLSTd7UiPbD/wCxGRMA2Krwro2O0bTQtImbwhjAJc0S3N4ROx15/PH60IzaIOjCbEelqkDOfETNxb/FMixnWNzeJp2KPQw9A5d76jGUOQOUvH7RE/o2RfkNatd3OGf9q0QKbnq8WB7qy+hVqJRjJn1BQgP/iErks0yy5iGJTrOayW7C/z0IoZH0qNH+7N+31XXc7G2p1hZDU6IWs1ghaqDNQpcEKVKu1BfWmFW9u0IFhKUodpswCEFodgqTZHWStbqOF+hqqdPsG1VrDEuodhfueDcZCj+QzuIrFtZh6BNNraIowbCzi1dbhOlOfionKXHoTzgzoY5hCKk/minEKZ/pYMDCoU7IsgREM3Y8Vgcvwvj4aMzK0AdewUpJljWkyGZH3IKmG7gfEHgZOhYXTwqiNwOhp0CiE3ZiFpL5fB6dj0keFKcGV+JvgGAP0vWMUpOQ10GI1VQt3LoMHDNJRYrEIPInAoPXDFEEnrk9P0zDG/FEGOA2WFNkiaZRGhuoRddXS8bX917cL6mn9c6TIUXSekybKHKQfJXFq2KSiRklLYU8dNKWDIX0cAA==") format("woff2")}.vue-cropper[data-v-555a6d54]{position:fixed;left:0;right:0;bottom:0;z-index:998;box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;direction:ltr;touch-action:none;text-align:left;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-canvas[data-v-555a6d54]{position:absolute;top:-9999px;left:-9999px;z-index:-998}.vue-cropper .uni-info__ft[data-v-555a6d54]{position:absolute;line-height:48px;font-size:18px;display:-webkit-box;display:-webkit-flex;display:flex;bottom:0;left:0;right:0;z-index:998}.btn-group[data-v-555a6d54]{position:absolute;right:30px;bottom:78px;z-index:998}.btn-item[data-v-555a6d54]{position:relative;width:40px;height:40px;background:#fff;border-radius:20px;padding:10px;display:inline-block;margin-left:10px}.btn-item[data-v-555a6d54]:active{background:#ccc}.rotate-btn[data-v-555a6d54]{font-family:iconfont!important;font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:20px}.rotate-btn[data-v-555a6d54]:before{content:"\\e65c";margin-left:-2px}.reset-btn[data-v-555a6d54]{font-family:iconfont!important;font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:20px}.reset-btn[data-v-555a6d54]:before{content:"\\e648";margin-left:-2px}.vue-cropper .uni-info__ft[data-v-555a6d54]:after{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);z-index:998}.vue-cropper .uni-modal__btn[data-v-555a6d54]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;text-align:center;background-color:#fff;z-index:998}.vue-cropper .uni-modal__btn[data-v-555a6d54]:first-child:after{display:none}.vue-cropper .uni-modal__btn[data-v-555a6d54]:after{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5);z-index:998}.vue-cropper .uni-modal__btn[data-v-555a6d54]:active{background-color:#eee}.cropper-box[data-v-555a6d54],\n.cropper-box-canvas[data-v-555a6d54],\n.cropper-drag-box[data-v-555a6d54],\n.cropper-crop-box[data-v-555a6d54],\n.cropper-face[data-v-555a6d54]{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-user-select:none;user-select:none;z-index:998}.uni-image[data-v-555a6d54]{width:100%;height:100%}.cropper-box-canvas uni-image[data-v-555a6d54]{position:relative;text-align:left;-webkit-user-select:none;user-select:none;-webkit-transform:none;transform:none;max-width:none;max-height:none;z-index:998}.cropper-box[data-v-555a6d54]{overflow:hidden}.cropper-move[data-v-555a6d54]{cursor:move}.cropper-crop[data-v-555a6d54]{cursor:crosshair}.cropper-modal[data-v-555a6d54]{background:rgba(0,0,0,.5)}.pointer-events[data-v-555a6d54]{pointer-events:none}.cropper-crop-box[data-v-555a6d54]{\n    /*border: 2px solid #39f;*/}.cropper-view-box[data-v-555a6d54]{display:block;overflow:hidden;width:100%;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);-webkit-user-select:none;user-select:none}.cropper-view-box uni-image[data-v-555a6d54]{-webkit-user-select:none;user-select:none;text-align:left;max-width:none;max-height:none}.cropper-face[data-v-555a6d54]{top:0;left:0;background-color:#fff;opacity:.1}.crop-line[data-v-555a6d54]{position:absolute;display:block;width:100%;height:100%;opacity:.1;z-index:998}.line-w[data-v-555a6d54]{top:-3px;left:0;height:5px;cursor:n-resize}.line-a[data-v-555a6d54]{top:0;left:-3px;width:5px;cursor:w-resize}.line-s[data-v-555a6d54]{bottom:-3px;left:0;height:5px;cursor:s-resize}.line-d[data-v-555a6d54]{top:0;right:-3px;width:5px;cursor:e-resize}.crop-point[data-v-555a6d54]{position:absolute;width:24px;height:24px;opacity:.75;background-color:#39f;border-radius:100%;z-index:998}.point-lt[data-v-555a6d54]{top:-12px;left:-12px;cursor:nw-resize}.point-mt[data-v-555a6d54]{top:-15px;left:50%;margin-left:-9px;cursor:n-resize}.point-rt[data-v-555a6d54]{top:-12px;right:-12px;cursor:ne-resize}.point-ml[data-v-555a6d54]{top:50%;left:-12px;margin-top:-9px;cursor:w-resize}.point-mr[data-v-555a6d54]{top:50%;right:-12px;margin-top:-9px;cursor:e-resize}.point-lb[data-v-555a6d54]{bottom:-15px;left:-12px;cursor:sw-resize}.point-mb[data-v-555a6d54]{bottom:-15px;left:50%;margin-left:-9px;cursor:s-resize}.point-rb[data-v-555a6d54]{bottom:-15px;right:-12px;cursor:se-resize}',""]),t.exports=e},"6cbf":function(t,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("a9e3"),o("d3b7");var i={name:"image-cropper",props:{cropWidth:{type:Number,default:200},cropHeight:{type:Number,default:200},cropFixed:{type:Boolean,default:!1},src:{type:String},showResetBtn:{type:Boolean,default:!0},showRotateBtn:{type:Boolean,default:!0}},data:function(){var t=uni.getSystemInfoSync(),e=t.pixelRatio;return{show:!1,scale:1,rotate:0,cropW:0,cropH:0,cropOldW:0,cropOldH:0,sysInfo:t,pixelRatio:e,imageRealWidth:0,imageRealHeight:0,cropOffsertX:0,cropOffsertY:0,startX:0,startY:0,border:5,x:0,y:0,startL:0,oldScale:1}},watch:{src:function(t){t.length>0&&this.init()},show:function(t){t||(this.src="")}},computed:{containerTop:function(){return 44,44},containerHeight:function(){return this.windowHeight-48},windowWidth:function(){return this.sysInfo.windowWidth},windowHeight:function(){return this.sysInfo.windowHeight},imageRatio:function(){return this.imageRealHeight>0?this.imageRealWidth/this.imageRealHeight:0},imageWidth:function(){return this.imageRatio>=1?this.windowWidth:this.windowWidth*this.imageRatio},imageHeight:function(){return this.imageRatio>=1?this.windowWidth/this.imageRatio:this.windowWidth}},methods:{rotateHandler:function(){3==this.rotate?this.rotate=0:++this.rotate},init:function(){this.rotate=0,this.scale=1,this.cropW=this.cropWidth,this.cropH=this.cropHeight,uni.showLoading({title:"图片加载中..."}),this.loadImage(this.src).then((function(t){uni.hideLoading()})).catch((function(t){uni.hideLoading(),uni.showModal({title:"标题",content:"图片加载失败"})}))},loadImage:function(t){var e=this;return new Promise((function(o,i){uni.getImageInfo({src:t,success:function(t){e.imageRealWidth=t.width,e.imageRealHeight=t.height,e.cropOffsertX=e.windowWidth/2-e.cropW/2,e.cropOffsertY=e.windowHeight/2-e.cropH/2,e.show=!0,e.$nextTick((function(){e.x=e.windowWidth/2-e.imageWidth/2,e.y=e.containerHeight/2-e.imageHeight/2})),o(t)},fail:function(t){e.show=!1,i(t)}})}))},cancel:function(){this.show=!1,this.$emit("cancel")},confirm:function(t){uni.showLoading({title:"裁剪中..."});var e=this,o=uni.createCanvasContext("myCanvas",e),i=e.pixelRatio,a=e.src,n=e.imageWidth*e.scale,r=e.imageHeight*e.scale,s=e.rotate,c=e.cropOffsertX-e.x-(e.imageWidth-n)/2,p=e.cropOffsertY-e.y-(e.imageHeight-r)/2;switch(o.setFillStyle("white"),o.fillRect(0,0,n,r),o.save(),o.rotate(90*s*Math.PI/180),s){case 1:c+=(r-n)/2,p-=(r-n)/2,o.drawImage(a,-p,c,n,-r);break;case 2:o.drawImage(a,c,p,-n,-r);break;case 3:c+=(r-n)/2,p-=(r-n)/2,o.drawImage(a,p,-c,-n,r);break;default:o.drawImage(a,-c,-p,n,r);break}o.restore(),o.draw(!1,(function(){uni.canvasToTempFilePath({canvasId:"myCanvas",destWidth:e.cropW*i,destHeight:e.cropH*i,success:function(o){uni.hideLoading(),t.detail.tempFilePath=o.tempFilePath,e.show=!1,e.$emit("confirm",t)},fail:function(t){uni.hideLoading(),uni.showModal({title:"提示",content:"裁剪失败"})}},e)}))},imgTouchStart:function(t){if(2==t.touches.length){this.oldScale=this.scale,this.scaling=!0;var e=t.touches[0].pageX-t.touches[1].pageX,o=t.touches[0].pageY-t.touches[1].pageY,i=Math.sqrt(Math.pow(e,2)+Math.pow(o,2));this.startL=Math.max(e,o,i),uni.showModal({content:this.startL})}else this.startX=t.touches[0].pageX-this.x,this.startY=t.touches[0].pageY-this.y},imgMoveing:function(t){if(this.scaling){var e=this.oldScale,o=t.touches[0].pageX-t.touches[1].pageX,i=t.touches[0].pageY-t.touches[1].pageY,a=Math.sqrt(Math.pow(o,2)+Math.pow(i,2)),n=Math.max(o,i,a),r=n-this.startL,s=1;s=s/this.imageWidth>s/this.imageHeight?s/this.imageHeight:s/this.imageWidth,s=s>.1?.1:s;var c=s*r;r>0?e+=Math.abs(c):r<0&&e>Math.abs(c)&&(e-=Math.abs(c)),this.scale=e}else{var p=t.touches[0].pageX-this.startX,d=t.touches[0].pageY-this.startY;this.x=p,this.y=d}},imgMoveEnd:function(){var t=this;setTimeout((function(){t.scaling=!1}),100)},touchStart:function(t){this.startX=t.touches[0].pageX-this.cropOffsertX,this.startY=t.touches[0].pageY-this.cropOffsertY,this.cropOldW=this.cropW,this.cropOldH=this.cropH},cropMoveing:function(t){var e=this._cropX(t.touches[0].pageX-this.startX),o=this._cropY(t.touches[0].pageY-this.startY);this.cropOffsertX=e,this.cropOffsertY=o},dragMove:function(t,e){if(this.cropFixed)return!1;var o=t.touches[0].pageX-this.startX,i=t.touches[0].pageY-this.startY;switch(e){case"left-top":this._cropMoveLeft(o),this._cropMoveTop(i);break;case"middle-top":this._cropMoveTop(i);break;case"right-top":this._cropMoveTop(i),this._cropMoveRight(o);break;case"middle-right":this._cropMoveRight(o);break;case"right-bottom":this._cropMoveRight(o),this._cropMoveBottom(i);break;case"middle-bottom":this._cropMoveBottom(i);break;case"left-bottom":this._cropMoveBottom(i),this._cropMoveLeft(o);break;case"middle-left":this._cropMoveLeft(o);break;default:break}},_cropMoveTop:function(t){var e=this._cropY(t);this.cropH+=this.cropOffsertY-e,this.cropOffsertY=e},_cropMoveRight:function(t){if(this.cropOldW+t>=this.windowWidth-this.border)return!1;this.cropW=this.cropOldW+(t-this.cropOffsertX)},_cropMoveBottom:function(t){if(this.cropOldH+t>=this.windowHeight-this.containerTop-this.border)return!1;this.cropH=this.cropOldH+(t-this.cropOffsertY)},_cropMoveLeft:function(t){var e=this._cropY(t);this.cropW+=this.cropOffsertX-e,this.cropOffsertX=e},_cropX:function(t){return t<=this.border?this.border:t+this.cropW>=this.windowWidth-this.border?this.windowWidth-this.cropW-this.border:t},_cropY:function(t){return t<=this.border?this.border:t+this.cropH>=this.windowHeight-this.containerTop-this.border?this.windowHeight-this.cropH-this.containerTop-this.border:t}}};e.default=i},"7d83":function(t,e,o){var i=o("6937");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("1ed8ed0f",i,!0,{sourceMap:!1,shadowMode:!1})},"7de4":function(t,e,o){"use strict";o.r(e);var i=o("6cbf"),a=o.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},"7f16":function(t,e,o){"use strict";o.r(e);var i=o("c243"),a=o("7de4");for(var n in a)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(n);o("ce0f");var r=o("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"555a6d54",null,!1,i["a"],void 0);e["default"]=s.exports},c243:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"cropper",staticClass:"vue-cropper",style:{top:t.containerTop+"px"}},[o("v-uni-view",{staticClass:"cropper-box"},[o("v-uni-view",{staticClass:"cropper-box-canvas",style:{width:t.imageWidth+"px",height:t.imageHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.imgTouchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.imgMoveing.apply(void 0,arguments)},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.imgMoveEnd.apply(void 0,arguments)}}},[o("v-uni-image",{ref:"cropperImg",staticClass:"uni-image",attrs:{src:t.src,alt:"cropper-img",mode:"scaleToFill"}})],1)],1),o("v-uni-view",{staticClass:"cropper-drag-box cropper-modal cropper-move pointer-events"}),o("v-uni-view",{staticClass:"cropper-crop-box",class:{"pointer-events":t.cropFixed},style:{width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"}},[o("v-uni-view",{staticClass:"cropper-view-box"},[o("v-uni-image",{style:{width:t.imageWidth+"px",height:t.imageHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},attrs:{mode:"scaleToFill",src:t.src,alt:"cropper-img"}})],1),t.cropFixed?t._e():o("v-uni-view",{staticClass:"cropper-face cropper-move",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.cropMoveing.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"crop-line line-w"}),o("v-uni-view",{staticClass:"crop-line line-a"}),o("v-uni-view",{staticClass:"crop-line line-s"}),o("v-uni-view",{staticClass:"crop-line line-d"}),t.cropFixed?t._e():[o("v-uni-view",{staticClass:"crop-point point-lt",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"left-top")}}}),o("v-uni-view",{staticClass:"crop-point point-mt",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"middle-top")}}}),o("v-uni-view",{staticClass:"crop-point point-rt",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"right-top")}}}),o("v-uni-view",{staticClass:"crop-point point-ml",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"middle-left")}}}),o("v-uni-view",{staticClass:"crop-point point-mr",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"middle-right")}}}),o("v-uni-view",{staticClass:"crop-point point-lb",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"left-bottom")}}}),o("v-uni-view",{staticClass:"crop-point point-mb",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"middle-bottom")}}}),o("v-uni-view",{staticClass:"crop-point point-rb",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.dragMove(e,"right-bottom")}}})]],2),o("v-uni-canvas",{staticClass:"cropper-canvas",style:{width:t.cropW+"px",height:t.cropH+"px"},attrs:{"canvas-id":"myCanvas"}}),o("v-uni-view",{staticClass:"btn-group"},[o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showResetBtn,expression:"showResetBtn"}],staticClass:"btn-item reset-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.init.apply(void 0,arguments)}}}),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showRotateBtn,expression:"showRotateBtn"}],staticClass:"btn-item rotate-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rotateHandler.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"uni-info__ft"},[o("v-uni-view",{staticClass:"uni-modal__btn uni-modal__btn_default",staticStyle:{color:"rgb(0, 0, 0)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),o("v-uni-view",{staticClass:"uni-modal__btn uni-modal__btn_primary",staticStyle:{color:"rgb(0, 122, 255)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},a=[]},ce0f:function(t,e,o){"use strict";var i=o("7d83"),a=o.n(i);a.a}}]);