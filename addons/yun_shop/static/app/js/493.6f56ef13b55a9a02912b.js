webpackJsonp([493],{"3uRN":function(e,t,n){var a=n("l2Es");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("feff051c",a,!0,{})},MK79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),s={mixins:[n("vsZy").a],data:function(){return{recordsList:[],memberData:{amount_sum:""},isLoadMore:!0,page:1,total_page:0}},activated:function(){this.getData()},methods:{getData:function(){var e=this;$http.get("plugin.red-packet.api.logs.receiveLogs",{page:1},"加载中").then(function(t){1===t.result?(e.memberData=t.data.member,e.memberData.amount_sum=t.data.receive_log.amount_sum,e.isLoadMore=!0,e.total_page=t.data.receive_log.list.last_page,e.total_page||(e.total_page=0),e.recordsList=t.data.receive_log.list.data):Object(i.Toast)(t.msg)}).catch(function(e){console.log(e)})},getMoreData:function(){var e=this;e.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.red-packet.api.logs.receiveLogs",{page:e.page},"加载中").then(function(t){if(e.isLoadMore=!0,1!==t.result)return e.page=e.page-1,void(e.isLoadMore=!1);var n=t.data.receive_log.list.data;e.recordsList=e.recordsList.concat(n)},function(e){console.error(e.msg)}))}},components:{cTitle:a.a}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"GetRedRecord"}},[a("c-title",{attrs:{hide:!1,text:"红包领取记录"}}),e._v(" "),a("div",{staticStyle:{height:"40px"}}),e._v(" "),a("div",{staticClass:"head"},[a("div",{staticClass:"head-img"},[a("img",{attrs:{src:e.memberData.avatar_image,alt:""}}),e._v(" "),a("span",[e._v(e._s(e.memberData.username))])]),e._v(" "),a("div",{staticClass:"money"},[a("div",{staticClass:"gray"},[e._v("累计领取金额")]),e._v(" "),a("div",[e._v("￥"+e._s(e.memberData.amount_sum))])])]),e._v(" "),e.recordsList.length<=0?a("div",{staticClass:"blank"},[a("img",{attrs:{src:n("u+0x")}}),e._v(" "),a("span",[e._v("还没有记录哦")])]):e._e(),e._v(" "),e.recordsList.length>0?a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("ul",e._l(e.recordsList,function(t,n){return a("li",{key:n},[a("div",[e._v("\n          "+e._s(t.created_at)+"\n        ")]),e._v(" "),a("div",{staticStyle:{"line-height":"2rem",color:"#ff2a52"}},[e._v("\n          "+e._s(t.receive_amount)+"\n        ")]),e._v(" "),a("div",{staticStyle:{"line-height":"2rem"}},[e._v("\n          "+e._s(t.amount)+"\n        ")])])}),0)]):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("时间")]),this._v(" "),t("span",[this._v("领取红包(元)")]),this._v(" "),t("span",[this._v("剩余红包额度(元)")])])}]};var r=n("VU/8")(s,o,!1,function(e){n("3uRN")},"data-v-2f915e8e",null);t.default=r.exports},l2Es:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n#GetRedRecord[data-v-2f915e8e] {\n  background-color: #FFFFFF;\n  padding: 1rem;\n}\n#GetRedRecord .blank[data-v-2f915e8e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n#GetRedRecord .blank img[data-v-2f915e8e] {\n      width: 6rem;\n      height: 6rem;\n}\n#GetRedRecord .blank span[data-v-2f915e8e] {\n      margin-top: 15px;\n      color: #ccc;\n      font-size: 14px;\n}\n#GetRedRecord .head-img[data-v-2f915e8e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 1rem;\n}\n#GetRedRecord .head-img img[data-v-2f915e8e] {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 3.5rem;\n              flex: 0 0 3.5rem;\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n}\n#GetRedRecord .head-img span[data-v-2f915e8e] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      line-height: 3rem;\n      text-align: left;\n      margin-left: 1rem;\n}\n#GetRedRecord .money[data-v-2f915e8e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#GetRedRecord .money .gray[data-v-2f915e8e] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: left;\n      color: #999999;\n}\n#GetRedRecord .content[data-v-2f915e8e] {\n    margin: 1.5rem 0;\n}\n#GetRedRecord .content ul[data-v-2f915e8e] {\n      margin-top: 0.3rem;\n}\n#GetRedRecord .content li[data-v-2f915e8e] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0.8rem 0;\n      border-bottom: 0.01rem solid #eeeded;\n}\n#GetRedRecord .content li div[data-v-2f915e8e] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#GetRedRecord .title[data-v-2f915e8e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#GetRedRecord .title span[data-v-2f915e8e] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      color: #666666;\n}\n",""])}});