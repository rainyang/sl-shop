webpackJsonp([242],{MR7j:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("Tg7E");var a=t("Pexp"),o=(t("bm/2"),{data:function(){return{dateshow_1:!1,regional:"请选择迁入分站区域",columns:["广东省-广州市-白云区","广东省-广州市-天河区","广东省-广州市-海珠区"]}},activated:function(){},mounted:function(){},methods:{seleRegional:function(){this.dateshow_1=!0},onChange:function(n,e,t){},onCancelbtn:function(n,e){this.dateshow_1=!1},onConfirmbtn:function(n,e){this.dateshow_1=!1,this.regional=n}},components:{cTitle:a.a}}),r={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"member-grade"}},[t("c-title",{attrs:{hide:!1,text:"退款迁移"}}),n._v(" "),t("div",{staticStyle:{height:"40px"}}),n._v(" "),t("div",{staticClass:"box"},[t("ul",[t("li",{staticClass:"time"},[t("font",[n._v("您的会员余额有效期：")]),t("span",[n._v("2018-12-31")])],1),n._v(" "),t("li",{staticClass:"balance"},[t("font",[n._v("折合金额：")]),t("span",[n._v("XX元")])],1),n._v(" "),t("li",{staticClass:"formula"},[n._v("折合金额=剩余有效期天数（取整）*每周期金额")])]),n._v(" "),t("div",{staticClass:"region"},[t("h1",[n._v("当前分站区域：广东省-广州市-白云区")]),n._v(" "),t("div",{staticClass:"select"},[t("van-button",{staticStyle:{"border-radius":"5px",color:"#1f2d3d",border:"1px solid #bfcbd9","min-height":"1rem","min-width":"4rem"},attrs:{plain:"",type:"primary"},on:{click:n.seleRegional}},[n._v(n._s(n.regional))])],1)])]),n._v(" "),n._m(0),n._v(" "),t("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:n.dateshow_1,callback:function(e){n.dateshow_1=e},expression:"dateshow_1"}},[t("van-picker",{attrs:{columns:n.columns,"show-toolbar":""},on:{change:n.onChange,cancel:n.onCancelbtn,confirm:n.onConfirmbtn}})],1)],1)},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"button"},[e("input",{attrs:{type:"button",value:"申请迁移"}})])}]};var i=t("VU/8")(o,r,!1,function(n){t("zG19")},"data-v-9a62b778",null);e.default=i.exports},cMx6:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n#member-grade .box[data-v-9a62b778] {\n  padding-top: 0.875rem;\n  background-color: #fff;\n}\n#member-grade .box ul[data-v-9a62b778] {\n    margin: 0 0.875rem;\n    background: #efcb7b;\n    border-radius: 0.375rem;\n    padding: 1rem;\n    text-align: left;\n}\n#member-grade .box ul li[data-v-9a62b778] {\n      font-size: 16px;\n      line-height: 1.875rem;\n}\n#member-grade .box ul font[data-v-9a62b778] {\n      font-weight: bold;\n}\n#member-grade .box ul .time[data-v-9a62b778] {\n      margin-bottom: 0.625rem;\n}\n#member-grade .box ul .balance span[data-v-9a62b778] {\n      font-weight: bold;\n}\n#member-grade .box ul .formula[data-v-9a62b778] {\n      font-size: 14px;\n      color: #fff;\n      line-height: 1.5rem;\n}\n#member-grade .box .region[data-v-9a62b778] {\n    background-color: #fff;\n    padding: 0.625rem 0.875rem;\n}\n#member-grade .box .region h1[data-v-9a62b778] {\n      font-size: 14px;\n      text-align: left;\n      margin: 0.625rem 0;\n}\n#member-grade .box .region .select[data-v-9a62b778] {\n      width: 80%;\n      margin-bottom: 0.625rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      border-radius: 0.25rem;\n      text-align: left;\n}\n#member-grade .box .region .select Option[data-v-9a62b778] {\n        padding: 0 0.375rem;\n}\n#member-grade .box .region .el-scrollbar li[data-v-9a62b778] {\n      text-align: left;\n}\n#member-grade .button[data-v-9a62b778] {\n  margin-top: 2.5rem;\n}\n#member-grade .button input[data-v-9a62b778] {\n    width: 68%;\n    height: 2.5rem;\n    border-radius: 0.375rem;\n    border: none;\n    background-color: #f15353;\n    color: #fff;\n    font-weight: bold;\n    font-size: 14px;\n}\n",""])},zG19:function(n,e,t){var a=t("cMx6");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("7a1dc112",a,!0,{})}});