webpackJsonp([371],{"2HXP":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{toi:this.fun.getKeyByI(),item:"",income_name_text:""}},methods:{customizeIncome:function(){var t=this.fun.initMailLanguage();this.income_name_text=t.income.income_name}},activated:function(){this.toi=this.fun.getKeyByI(),this.item=this.$route.params.item,this.customizeIncome()},components:{cTitle:i("Pexp").a}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"details"}},[i("c-title",{attrs:{hide:!1,text:"详情"}}),t._v(" "),i("div",{staticStyle:{height:"45px"}}),t._v(" "),i("div",{attrs:{id:"tbs"}},[i("div",{staticClass:"left"},[t._v("订单编号")]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.item.serial_number))]),t._v(" "),i("div",{staticClass:"left"},[t._v("金额")]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.item.change_money))]),t._v(" "),i("div",{staticClass:"left"},[t._v("业务类型")]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.item.service_type))]),t._v(" "),i("div",{staticClass:"left"},[t._v("余额")]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.item.new_money))]),t._v(" "),i("div",{staticClass:"left"},[t._v("对方会员")]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.item.operator_id))])])],1)},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("cmB2")},"data-v-5f10d0ec",null);e.default=a.exports},QNrF:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#details #tbs[data-v-5f10d0ec] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #FFF;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  padding: 0.625rem;\n  line-height: 1.5rem;\n}\n#details #tbs .left[data-v-5f10d0ec] {\n    text-align: left;\n    -webkit-box-flex: 50%;\n        -ms-flex: 50%;\n            flex: 50%;\n    color: #858585;\n}\n#details #tbs .right[data-v-5f10d0ec] {\n    text-align: right;\n    -webkit-box-flex: 50%;\n        -ms-flex: 50%;\n            flex: 50%;\n}\n",""])},cmB2:function(t,e,i){var n=i("QNrF");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("ffa14f12",n,!0,{})}});