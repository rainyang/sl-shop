webpackJsonp([591],{"30QN":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#register .content-box[data-v-08f62151] {\n  background-color: #fff;\n  padding-top: 3rem;\n  margin-top: 0.625rem;\n  height: 38.5625rem;\n}\n#register .content-box .name h2[data-v-08f62151] {\n    font-size: 16px;\n    margin-bottom: 0.625rem;\n    color: #333;\n}\n#register .content-box .name span[data-v-08f62151] {\n    color: #999;\n    font-size: 14px;\n}\n#register .content-box .goods-img[data-v-08f62151] {\n    margin-top: 2.5rem;\n}\n#register .content-box .goods-img .img[data-v-08f62151] {\n      width: 6.25rem;\n      height: 6.25rem;\n      background-color: #0487a1;\n      margin: 0 auto;\n}\n#register .content-box .goods-img .img img[data-v-08f62151] {\n        width: 100%;\n        height: 100%;\n}\n#register .content-box .goods-img span[data-v-08f62151] {\n      display: inline-block;\n      margin-top: 0.625rem;\n      font-size: 14px;\n}\n#register .content-box .btn[data-v-08f62151] {\n    margin-top: 5rem;\n}\n#register .content-box .btn button[data-v-08f62151] {\n      width: 69%;\n      height: 2.5rem;\n      margin: 0 auto;\n      background-color: #f15353;\n      border: none;\n      color: #fff;\n      border-radius: 0.25rem;\n      font-size: 14px;\n      padding: 0;\n}\n#register .content-box .prompt[data-v-08f62151] {\n    border-radius: 0.25rem;\n}\n#register .content-box .prompt h1[data-v-08f62151] {\n      line-height: 2.75rem;\n      font-size: 16px;\n}\n#register .content-box .prompt span[data-v-08f62151] {\n      display: inline-block;\n      color: #999;\n      font-size: 14px;\n      line-height: 2.25rem;\n      margin-bottom: 0.625rem;\n}\n#register .content-box .prompt ul[data-v-08f62151] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-size: 14px;\n      border-top: solid 0.0625rem #ebebeb;\n}\n#register .content-box .prompt ul li[data-v-08f62151] {\n        line-height: 2.5rem;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#register .content-box .prompt ul li[data-v-08f62151]:first-child {\n        border-right: solid 0.0625rem #ebebeb;\n}\n",""])},Btq5:function(t,n,e){var o=e("30QN");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("3f9a715a",o,!0,{})},m7iH:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("Pexp"),i=e("Tg7E"),r={data:function(){return{cup_name:"",cup_id:"",cup_img:""}},activated:function(){this.cup_name=this.$route.params.name,this.cup_id=this.$route.params.id,this.cup_img=window.localStorage.getItem("cupImg")},mounted:function(){},methods:{empty:function(){var t=this;i.MessageBox.confirm("确认清空此商品").then(function(n){$http.get("plugin.cabinet.Frontend.Modules.Lattice.Controllers.take-goods.index",{mark:t.$route.params.mark},"操作中...").then(function(n){1==n.result&&(console.log(n),Object(i.MessageBox)("提示",n.msg),t.$router.go(-1))}).catch(function(n){console.log(n),Object(i.MessageBox)("提示",response.msg),t.$router.go(-1)})}).catch(function(t){})}},components:{cTitle:o.a}},a={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"register"}},[o("c-title",{attrs:{hide:!1,text:"清空商品"}}),t._v(" "),o("div",{staticStyle:{height:"40px"}}),t._v(" "),o("div",{staticClass:"content-box"},[o("div",{staticClass:"name"},[o("h2",[t._v("柜子名称:"+t._s(t.cup_name))]),t._v(" "),o("span",[t._v("格子："+t._s(t.cup_id))])]),t._v(" "),o("div",{staticClass:"goods-img"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:this.fun.isTextEmpty(t.cup_img)?e("UF3h"):t.cup_img}})]),t._v(" "),o("span",[t._v("芸中商城商品名称")])]),t._v(" "),o("div",{staticClass:"btn"},[o("yd-button",{attrs:{type:"hollow"},nativeOn:{click:function(n){return t.empty(n)}}},[t._v("确认清空")])],1)])],1)},staticRenderFns:[]};var s=e("VU/8")(r,a,!1,function(t){e("Btq5")},"data-v-08f62151",null);n.default=s.exports}});