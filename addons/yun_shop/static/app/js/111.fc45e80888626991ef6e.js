webpackJsonp([111],{CR7R:function(n,e,t){n.exports=t.p+"static/app/img/member_a(14).bb64455.png"},Fun8:function(n,e,t){var a=t("iQ8k");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("fcdfd0d8",a,!0,{})},hVxS:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Pexp"),i=t("Tg7E"),o={data:function(){return{froze:0,coin_name:"",usable:0,transfer_status:!1}},methods:{gotoPage:function(n){this.$router.push(this.fun.getUrl(n))},getBalance:function(){var n=this;$http.get("plugin.coin.Frontend.Controllers.page.index",{},"加载中").then(function(e){1===e.result?(n.froze=e.data.froze,n.coin_name=e.data.coin_name,n.usable=e.data.usable,n.transfer_status=e.data.transfer_status):i.MessageBox.alert(e.msg)},function(n){i.MessageBox.alert(n)})}},activated:function(){this.getBalance()},components:{cTitle:a.a}},c={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"love_index"}},[t("c-title",{attrs:{hide:!1,text:n.coin_name,tolink:"overseas_list",totext:"查看明细"}}),n._v(" "),t("div",{staticStyle:{height:"40px"}}),n._v(" "),t("div",{staticClass:"content"},[t("ul",{staticClass:"my_balance"},[t("li",{staticClass:"balance_a"},[t("i",{staticClass:"iconfont icon-wealth-b"}),n._v(" "),t("span",[n._v("可用"+n._s(n.coin_name)+"（元）")])]),n._v(" "),t("li",{staticClass:"balance_b"},[n._v(n._s(n.usable))]),n._v(" "),t("li",{staticClass:"balance_c"},[n._v("冻结"+n._s(n.coin_name)+n._s(n.froze)+"元")])]),n._v(" "),t("ul",{staticClass:"list_box"},[n.transfer_status?t("li",{on:{click:function(e){return n.gotoPage("overseas_transfer")}}},[t("i",{staticClass:"iconfont icon-balance_c"}),n._v("转账\n        "),t("i",{staticClass:"fa fa-angle-right"})]):n._e(),n._v(" "),t("li",{on:{click:function(e){return n.gotoPage("overseas_balance_withdrawals")}}},[t("i",{staticClass:"iconfont icon-balance_a"}),n._v(n._s(this.fun.initWithdrawal())+"\n        "),t("i",{staticClass:"fa fa-angle-right"})])]),n._v(" "),t("ul",{staticClass:"list_box_b"},[t("li",{on:{click:function(e){return n.gotoPage("overseas_record")}}},[t("i",{staticClass:"iconfont icon-balance_m"}),n._v("激活记录\n        "),t("i",{staticClass:"fa fa-angle-right"})])]),n._v(" "),t("div",{staticClass:"explain",on:{click:function(e){return n.gotoPage("overseas_explain")}}},[t("i",{staticClass:"iconfont icon-balance_o"}),n._v(" "),t("span",[n._v(n._s(n.coin_name)+"说明")])])])],1)},staticRenderFns:[]};var l=t("VU/8")(o,c,!1,function(n){t("Fun8")},"data-v-8f36059c",null);e.default=l.exports},iQ8k:function(n,e,t){var a=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,"\n#love_index .content .my_balance[data-v-8f36059c] {\n  background: #fff;\n  padding: 0.625rem 0;\n}\n#love_index .content .my_balance .balance_a[data-v-8f36059c] {\n    line-height: 2.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#love_index .content .my_balance .balance_a .icon-wealth-b[data-v-8f36059c] {\n      background: url("+a(t("CR7R"))+') no-repeat center;\n      background-size: 1.125rem;\n      width: 1.125rem;\n      height: 1.125rem;\n      margin-right: 0.375rem;\n}\n#love_index .content .my_balance .balance_a .icon-wealth-b[data-v-8f36059c]:before {\n      content: "";\n}\n#love_index .content .my_balance .balance_a span[data-v-8f36059c] {\n      font-size: 14px;\n}\n#love_index .content .my_balance .balance_b[data-v-8f36059c] {\n    line-height: 3.75rem;\n    font-size: 36px;\n}\n#love_index .content .my_balance .balance_b small[data-v-8f36059c] {\n      font-size: 24px;\n}\n#love_index .content .my_balance .balance_c[data-v-8f36059c] {\n    font-size: 14px;\n    color: #8c8c8c;\n}\n#love_index .content .list_box[data-v-8f36059c],\n#love_index .content .list_box_b[data-v-8f36059c] {\n  background: #fff;\n  padding-left: 0.875rem;\n  border-top: solid 0.0625rem #ebebeb;\n  border-bottom: solid 0.0625rem #ebebeb;\n}\n#love_index .content .list_box li[data-v-8f36059c],\n  #love_index .content .list_box_b li[data-v-8f36059c] {\n    border-bottom: solid 0.0625rem #ebebeb;\n    padding-right: 0.875rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    line-height: 2.875rem;\n    font-size: 16px;\n    position: relative;\n}\n#love_index .content .list_box li .icon-balance_a[data-v-8f36059c],\n    #love_index .content .list_box_b li .icon-balance_a[data-v-8f36059c] {\n      color: #6cbf6a;\n}\n#love_index .content .list_box li .icon-balance_b[data-v-8f36059c],\n    #love_index .content .list_box_b li .icon-balance_b[data-v-8f36059c] {\n      color: #fac337;\n}\n#love_index .content .list_box li .icon-balance_c[data-v-8f36059c],\n    #love_index .content .list_box_b li .icon-balance_c[data-v-8f36059c] {\n      color: #069ce7;\n}\n#love_index .content .list_box li .icon-balance_l[data-v-8f36059c],\n    #love_index .content .list_box_b li .icon-balance_l[data-v-8f36059c] {\n      color: #ee4343;\n}\n#love_index .content .list_box li .icon-balance_m[data-v-8f36059c],\n    #love_index .content .list_box_b li .icon-balance_m[data-v-8f36059c] {\n      color: #418be0;\n}\n#love_index .content .list_box li .icon-balance_n[data-v-8f36059c],\n    #love_index .content .list_box_b li .icon-balance_n[data-v-8f36059c] {\n      color: #ff855c;\n}\n#love_index .content .list_box li .iconfont[data-v-8f36059c],\n    #love_index .content .list_box_b li .iconfont[data-v-8f36059c] {\n      font-size: 2rem;\n      margin-right: 0.375rem;\n}\n#love_index .content .list_box li .fa[data-v-8f36059c],\n    #love_index .content .list_box_b li .fa[data-v-8f36059c] {\n      position: absolute;\n      top: 0;\n      right: 0.875rem;\n      font-size: 1.5rem;\n      color: #ccc;\n      line-height: 2.875rem;\n}\n#love_index .content .list_box li[data-v-8f36059c]:last-child,\n  #love_index .content .list_box_b li[data-v-8f36059c]:last-child {\n    border: none;\n}\n#love_index .content .list_box_b[data-v-8f36059c] {\n  margin-top: 0.625rem;\n}\n#love_index .content .explain[data-v-8f36059c] {\n  width: 100%;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  bottom: 0.625rem;\n}\n#love_index .content .explain i[data-v-8f36059c] {\n    font-size: 1.125rem;\n    color: #658299;\n    margin-right: 0.375rem;\n}\n#love_index .content .explain span[data-v-8f36059c] {\n    color: #658299;\n    font-size: 13px;\n}\n#love_index button[data-v-8f36059c] {\n  width: 70%;\n  margin: 0.3125rem 0;\n}\n#love_index i[data-v-8f36059c] {\n  font-size: 4.375rem;\n  color: #ffcc00;\n}\n#love_index .my-banlance[data-v-8f36059c] {\n  margin: 1.25rem 0;\n  font-size: 14px;\n  color: #333;\n  line-height: 2rem;\n}\n#love_index .my-banlance span[data-v-8f36059c] {\n  font-size: 14px;\n  color: #333;\n  margin-top: 0.625rem;\n}\n#love_index .my-banlance span b[data-v-8f36059c] {\n  font-size: 26px;\n}\n#love_index #djj[data-v-8f36059c] {\n  margin: 0.9375rem 0;\n  font-size: 18px;\n}\n#love_index #jh[data-v-8f36059c] {\n  margin-top: 0.3125rem;\n}\n#love_index #jh #jhst[data-v-8f36059c] {\n    border-right: 0.0625rem solid #8c8c8c;\n    padding-right: 0.9375rem;\n}\n#love_index #jh span[data-v-8f36059c] {\n    padding: 0 0.9375rem;\n}\n#love_index #helps[data-v-8f36059c] {\n  position: fixed;\n  bottom: 0.625rem;\n  left: 0;\n  right: 0;\n}\n#love_index #helps a[data-v-8f36059c] {\n    color: #607d8b;\n    font-size: 12px;\n}\n#love_index #helps p[data-v-8f36059c] {\n    background: #f15353;\n    color: #fff;\n    border-radius: 50%;\n    width: 1.25rem;\n    height: 1.25rem;\n    line-height: 1.25rem;\n    margin: 0 auto;\n    margin-bottom: 0.25rem;\n}\n',""])}});