webpackJsonp([486],{NPVc:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={components:{cTitle:t("Pexp").a},data:function(){return{language:{},score:600,scoreMoney:6,computedMoney:0,useScore:!1}},methods:{},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(n){this.language=n?JSON.parse(sessionStorage.languageService).trafficConfirmOrder:this.$store.state.service.languageService.trafficConfirmOrder},useScore:function(n){n?(this.computedMoney=this.sourceMoney-this.scoreMoney,this.computedMoney<0&&(this.computedMoney=0)):this.computedMoney=this.sourceMoney}},mounted:function(){sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).trafficConfirmOrder:this.language=this.$store.state.service.languageService.trafficConfirmOrder},activated:function(){this.$store.commit("onload")}},i={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:"trafficConfirmOrder"+n.$store.state.service.lang,attrs:{id:"trafficConfirmOrder"}},[t("c-title",{attrs:{hide:!1,text:n.language.title}}),n._v(" "),t("div",{staticStyle:{height:"40px"}}),n._v(" "),t("div",{staticClass:"title"},[n._v("兰州电子单")]),n._v(" "),n._m(0),n._v(" "),t("div",{staticClass:"m-footer"},[t("div",{staticClass:"integral"},[t("div",[t("b",[n._v(n._s(n.language.score))]),n._v(" "),t("span",[n._v(n._s(n.language.scoreTip1)+" "),t("font",[n._v(n._s(n.score))]),n._v(" "+n._s(n.language.scoreTip2)),t("font",[n._v(" "+n._s(n.scoreMoney)+" ")]),n._v(n._s(n.language.yuan))],1)]),n._v(" "),t("mt-switch",{class:{rt:"ch"==n.$store.state.service.lang,lf:"wei"==!n.$store.state.service.lang},model:{value:n.useScore,callback:function(e){n.useScore=e},expression:"useScore"}})],1),n._v(" "),t("div",{staticClass:"clear"}),n._v(" "),t("div",{staticClass:"amount"},[t("span",[n._v(n._s(n.language.total)),t("b",[n._v(n._s(n.computedMoney))])]),n._v(" "),t("router-link",{attrs:{to:n.fun.getUrl("")}},[t("button",{attrs:{type:"button"}},[n._v(n._s(n.language.btn))])])],1)])],1)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",{staticClass:"content"},[t("li",[t("label",[n._v("车牌号")]),n._v(" "),t("div",{staticClass:"traffic"},[n._v("京A")])]),n._v(" "),t("li",[t("label",[n._v("违章单号")]),n._v(" "),t("div",{staticClass:"traffic"},[n._v("1234567")])]),n._v(" "),t("li",[t("label",[n._v("罚款金额")]),n._v(" "),t("div",{staticClass:"traffic"},[t("span",[n._v("（罚金+滞纳金）")]),n._v("200")])])])}]};var o=t("VU/8")(r,i,!1,function(n){t("ZI57")},"data-v-32802b64",null);e.default=o.exports},ZI57:function(n,e,t){var r=t("rduu");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("a9047e32",r,!0,{})},rduu:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n*[data-v-32802b64] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.trafficConfirmOrderch .title[data-v-32802b64] {\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  margin-bottom: 0.625rem;\n  text-align: center;\n  background: #fff;\n}\n.trafficConfirmOrderch .content[data-v-32802b64] {\n  background: #fff;\n  padding-left: 0.875rem;\n}\n.trafficConfirmOrderch .content li[data-v-32802b64]:last-child {\n    border: none;\n}\n.trafficConfirmOrderch .content li[data-v-32802b64] {\n    font-size: 16px;\n    padding-right: 0.875rem;\n    background: #fff;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n.trafficConfirmOrderch .content li label[data-v-32802b64] {\n      width: 6.25rem;\n      text-align: left;\n      line-height: 2.8125rem;\n      color: #8c8c8c;\n}\n.trafficConfirmOrderch .content li .traffic[data-v-32802b64] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding-left: 0.625rem;\n      text-align: right;\n      line-height: 2.6875rem;\n}\n.trafficConfirmOrderch .content li .traffic span[data-v-32802b64] {\n        color: #a5a5a5;\n}\n.trafficConfirmOrderch .m-footer[data-v-32802b64] {\n  width: 100%;\n  background: #fff;\n  position: fixed;\n  bottom: 0;\n}\n.trafficConfirmOrderch .m-footer .integral[data-v-32802b64] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    padding: 0 0.8125rem;\n}\n.trafficConfirmOrderch .m-footer .integral div[data-v-32802b64] {\n      float: left;\n}\n.trafficConfirmOrderch .m-footer .integral div b[data-v-32802b64] {\n        color: #333;\n        font-size: 16px;\n        font-weight: noraml;\n        margin-right: 0.625rem;\n}\n.trafficConfirmOrderch .m-footer .integral div span[data-v-32802b64] {\n        color: #333;\n        font-size: 14px;\n}\n.trafficConfirmOrderch .m-footer .integral div font[data-v-32802b64] {\n        color: #f15353;\n}\n.trafficConfirmOrderch .m-footer .amount[data-v-32802b64] {\n    height: 45px;\n    line-height: 45px;\n    padding: 0 0 0 0.875rem;\n    margin-bottom: 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-top: solid 0.0625rem #ebebeb;\n}\n.trafficConfirmOrderch .m-footer .amount span[data-v-32802b64] {\n      color: #333;\n      font-size: 16px;\n      float: left;\n}\n.trafficConfirmOrderch .m-footer .amount button[data-v-32802b64] {\n      width: 6.875rem;\n      height: 2.8125rem;\n      color: #fff;\n      font-size: 16px;\n      background: #f15353;\n      border: 0;\n      float: right;\n}\n.trafficConfirmOrderwei .title[data-v-32802b64] {\n  height: 3.125rem;\n  line-height: 3.125rem;\n  text-align: center;\n  background: #fff;\n  border-bottom: 0.0625rem solid #e8e8e8;\n}\n.trafficConfirmOrderwei .content[data-v-32802b64] {\n  padding: 0.3125rem 0;\n  background: #fff;\n}\n.trafficConfirmOrderwei .content li[data-v-32802b64] {\n    padding: 0 0.9375rem;\n    background: #fff;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    border-bottom: 0.0625rem solid #e2e2e2;\n}\n.trafficConfirmOrderwei .content li label[data-v-32802b64] {\n      width: 5rem;\n      text-align: right;\n      line-height: 2.8125rem;\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n}\n.trafficConfirmOrderwei .content li .traffic[data-v-32802b64] {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding-right: 0.625rem;\n      text-align: right;\n      line-height: 2.6875rem;\n}\n.trafficConfirmOrderwei .content li .traffic span[data-v-32802b64] {\n        color: #a5a5a5;\n}\n.trafficConfirmOrderwei .content .nobot[data-v-32802b64] {\n    border-bottom: 0;\n    margin-bottom: 0.625rem;\n}\n.trafficConfirmOrderwei .m-footer[data-v-32802b64] {\n  width: 100%;\n  background: #fff;\n  position: fixed;\n  bottom: 0;\n}\n.trafficConfirmOrderwei .m-footer .integral[data-v-32802b64] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    padding: 0 0.8125rem;\n}\n.trafficConfirmOrderwei .m-footer .integral div[data-v-32802b64] {\n      float: right;\n}\n.trafficConfirmOrderwei .m-footer .integral div b[data-v-32802b64] {\n        color: #333;\n        font-size: 16px;\n        font-weight: noraml;\n        float: right;\n}\n.trafficConfirmOrderwei .m-footer .integral div span[data-v-32802b64] {\n        color: #333;\n        font-size: 12px;\n}\n.trafficConfirmOrderwei .m-footer .integral div font[data-v-32802b64] {\n        color: #f15353;\n}\n.trafficConfirmOrderwei .m-footer .amount[data-v-32802b64] {\n    height: 3.125rem;\n    line-height: 3.125rem;\n    padding: 0 0 0 0.8125rem;\n    margin-bottom: 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.trafficConfirmOrderwei .m-footer .amount span[data-v-32802b64] {\n      color: #333;\n      font-size: 16px;\n      float: left;\n}\n.trafficConfirmOrderwei .m-footer .amount button[data-v-32802b64] {\n      width: 6.5625rem;\n      height: 2.5rem;\n      color: #fff;\n      font-size: 16px;\n      background: #ff951b;\n      border: 0;\n      border-radius: 0.1875rem;\n      margin-top: 0.5625rem;\n      float: right;\n}\n",""])}});