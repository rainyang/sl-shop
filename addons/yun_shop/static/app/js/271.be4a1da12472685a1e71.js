webpackJsonp([271],{"7IIR":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#register .box[data-v-847a65a4] {\n  padding-top: 42px;\n  background: #fff;\n}\n#register .box1[data-v-847a65a4] {\n  padding: 0 5%;\n}\n#register .box1 #content[data-v-847a65a4] {\n    background-color: #fff;\n}\n#register .box1 #content .area_number[data-v-847a65a4] {\n      padding-top: 1.25rem;\n      font-size: 18px;\n      color: #333;\n}\n#register .box1 #content .area_number li[data-v-847a65a4] {\n        height: 2.5rem;\n        line-height: 2.5rem;\n        padding: 0 0.8rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#register .box1 #content .area_number li span[data-v-847a65a4] {\n          width: 5.75rem;\n          text-align: left;\n}\n#register .box1 #content .area_number li .yd-input[data-v-847a65a4] {\n          border: none;\n          border-bottom: solid 0.0625rem #ccc;\n          width: 15rem;\n}\n#register .box1 #content .btn[data-v-847a65a4] {\n      margin-top: 1rem;\n      width: 100%;\n}\n#register .box1 #content .btn button[data-v-847a65a4] {\n        width: 100%;\n        height: 2.8125rem;\n        font-size: 16px;\n        margin-bottom: 1.25rem;\n        border-radius: 1.875rem;\n        border: none;\n        background-color: #f15353;\n        color: #fff;\n}\n",""])},kQWK:function(t,n,e){var o=e("7IIR");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("e6b643b8",o,!0,{})},khTB:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("Pexp"),i=e("Tg7E"),a=e("C8p+"),r={data:function(){return{cloudImei:""}},activated:function(){this.initWeixin(),this.checkCloud()},mounted:function(){},methods:{checkCloud:function(){var t=this;$http.get("plugin.store-cashier.frontend.store.yun-horn.index").then(function(n){1===n.result?1==n.data.status&&(t.$dialog.toast({mes:"你已绑定云喇叭",timeout:1500}),t.cloudImei=n.data.yun_horn):(t.$dialog.toast({mes:n.msg,timeout:1500}),t.$router.go(-1))})},initWeixin:function(){var t=this;$http.post("member.member.wxJsSdkConfig",{}).then(function(n){1==n.result&&t.weixinConfig(n.data)}).catch(function(t){console.log(t)})},weixinConfig:function(t){wx.config(t.config)},getcode:function(){var t=this;wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(n){var e=n.resultStr.split("|");t.cloudImei=e[0]},fail:function(t){console.log(t),alert("扫码失败")}})},submitBtn:function(){var t=this;this.fun.isTextEmpty(this.cloudImei)?this.$dialog.toast({mes:"请输入云喇叭IMEI",timeout:1500}):$http.post("plugin.store-cashier.frontend.store.yun-horn.bind-horn ",{yun_horn:this.cloudImei}).then(function(n){n.result,i.MessageBox.alert(n.msg),t.$router.go(-1)}).catch(function(t){console.log(t)})}},components:{cTitle:o.a,CheckBox:a.CheckBox}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"register"}},[e("c-title",{attrs:{hide:!1,text:"云喇叭绑定"}}),t._v(" "),e("div",{staticClass:"box",staticStyle:{"padding-top":"40px"}},[e("div",{staticClass:"box1"},[e("div",{attrs:{id:"content"}},[e("ul",{staticClass:"area_number"},[e("li",[e("span",[t._v("云喇叭")]),t._v(" "),e("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"请输入云喇叭IMEI"},slot:"right",model:{value:t.cloudImei,callback:function(n){t.cloudImei="string"==typeof n?n.trim():n},expression:"cloudImei"}}),t._v(" "),e("yd-icon",{staticClass:"iconfont icon-saoyisao",attrs:{slot:"icon",custom:"",size:"24px",color:"#666"},nativeOn:{click:function(n){return t.getcode(n)}},slot:"icon"})],1)]),t._v(" "),e("div",{staticClass:"btn"},[e("button",{attrs:{type:"button"},on:{click:t.submitBtn}},[t._v("绑定")])])])])])],1)},staticRenderFns:[]};var c=e("VU/8")(r,s,!1,function(t){e("kQWK")},"data-v-847a65a4",null);n.default=c.exports}});