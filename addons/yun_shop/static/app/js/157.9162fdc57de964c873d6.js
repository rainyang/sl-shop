webpackJsonp([157],{"0aTU":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),o={mixins:[n("vsZy").a],data:function(){return{activeName:"first",recordsList:[],dataInfo:{},love_name:"",isLoadMore:!0,page:1,total_page:0}},activated:function(){this.getData()},methods:{getData:function(){var e=this;$http.get("plugin.period-return.frontend.log.index",{page:1},"加载中").then(function(t){1===t.result?(e.dataInfo=t.data,e.love_name=e.dataInfo.love_name,e.isLoadMore=!0,e.total_page=t.data.list.last_page,e.total_page||(e.total_page=0),e.recordsList=t.data.list.data):Object(i.Toast)(t.msg)}).catch(function(e){console.log(e)})},getMoreData:function(){var e=this;e.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.period-return.frontend.log.index",{page:e.page},"加载中").then(function(t){if(e.isLoadMore=!0,1!==t.result)return e.page=e.page-1,void(e.isLoadMore=!1);var n=t.data.list.data;e.recordsList=e.recordsList.concat(n)},function(e){}))}},components:{cTitle:a.a}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"lovePeriod"}},[a("c-title",{attrs:{hide:!1,text:e.love_name+"周期奖励记录"}}),e._v(" "),a("div",{staticClass:"share_holder"},[e.dataInfo.member?a("div",{staticClass:"left"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.dataInfo.member.avatar,alt:""}})]),e._v(" "),a("span",[e._v(e._s(e.dataInfo.member.nickname))])]):e._e(),e._v(" "),a("div",{staticClass:"right"},[a("span",[e._v("￥"+e._s(e.dataInfo.amount_total))]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("奖励总额(元)")])])]),e._v(" "),a("div",{staticClass:"shareholder-order"},[a("div",{attrs:{id:"tabs"}},[a("mt-navbar",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("mt-tab-item",{staticStyle:{color:"#3c3c3c",height:"40px"},attrs:{id:"first"}},[e._v("奖励记录")])],1),e._v(" "),a("mt-tab-container",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("mt-tab-container-item",{attrs:{id:"first"}},[a("ul",{staticClass:"rationList"},[e.recordsList.length<=0?a("div",{staticClass:"blank"},[a("img",{attrs:{src:n("u+0x")}}),e._v(" "),a("span",[e._v("还没有记录哦")])]):e._e(),e._v(" "),e._l(e.recordsList,function(t,n){return a("li",{key:n,staticClass:"list"},[a("h4",[e._v("\n                分红ID: "+e._s(t.id)+"\n                "),a("span",[e._v("+ "+e._s(t.amount))])]),e._v(" "),a("div",{staticClass:"one"},[a("div",{staticClass:"time"},[a("span",{staticClass:"left"}),e._v(" "),a("span",{staticClass:"right"},[e._v(e._s(e.love_name)+"单价: "+e._s(t.love_unit))])]),e._v(" "),a("div",{staticClass:"time"},[a("span",{staticClass:"left"},[e._v("个人"+e._s(e.love_name)+"总数: "+e._s(t.member_love))]),e._v(" "),a("span",{staticClass:"right last"},[e._v(" "+e._s(t.created_at))])])])])})],2)])],1)],1)])],1)},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(e){n("v+uP")},"data-v-f8d99718",null);t.default=s.exports},U7av:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'\n#lovePeriod[data-v-f8d99718] {\n  padding-top: 40px;\n}\n#lovePeriod .blank[data-v-f8d99718] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n#lovePeriod .blank img[data-v-f8d99718] {\n      width: 6rem;\n      height: 6rem;\n}\n#lovePeriod .blank span[data-v-f8d99718] {\n      margin-top: 15px;\n      color: #ccc;\n      font-size: 14px;\n}\n#lovePeriod .m_header[data-v-f8d99718] {\n    width: 100%;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    font-size: 15px;\n    font-weight: bold;\n    background: #fff;\n}\n#lovePeriod .m_header span[data-v-f8d99718] {\n      display: inline-block;\n      width: 1rem;\n      height: 1.5rem;\n      float: left;\n      margin-left: 0.625rem;\n      font-size: 30px;\n}\n#lovePeriod .share_holder[data-v-f8d99718] {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #f15353;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#lovePeriod .share_holder .left[data-v-f8d99718] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      color: #FFFFFF;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 1rem 0.75rem;\n      text-align: left;\n}\n#lovePeriod .share_holder .left .img-box[data-v-f8d99718] {\n        width: 3rem;\n        height: 3rem;\n        border-radius: 50%;\n        margin-right: 1rem;\n}\n#lovePeriod .share_holder .left img[data-v-f8d99718] {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n}\n#lovePeriod .share_holder .left span[data-v-f8d99718] {\n        -ms-flex-item-align: center;\n            align-self: center;\n        font-weight: bold;\n}\n#lovePeriod .share_holder .right[data-v-f8d99718] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: right;\n      color: #FFFFFF;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 1rem 0.75rem;\n}\n#lovePeriod .share_holder .right span[data-v-f8d99718]:first-child {\n        font-size: 20px;\n        line-height: 1.5rem;\n        display: inline-block;\n}\n#lovePeriod .share_holder .right span[data-v-f8d99718] {\n        font-size: 14px;\n        line-height: 1.5rem;\n        display: inline-block;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list[data-v-f8d99718] {\n    margin: 0.375rem 0;\n    background-color: #fff;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list h4[data-v-f8d99718] {\n      line-height: 30px;\n      width: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0.625rem 1.25rem;\n      text-align: left;\n      color: #333;\n      font-size: 16px;\n      border-bottom: 0.0625rem solid #ececec;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list h4 span[data-v-f8d99718] {\n        display: inline-block;\n        font-size: 16px;\n        padding: 0.0625rem 0.25rem;\n        font-weight: normal;\n        color: #f15353;\n        float: right;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list ul[data-v-f8d99718]:after {\n      content: "";\n      display: block;\n      clear: both;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list ul[data-v-f8d99718] {\n      width: 100%;\n      padding: 0.625rem 0;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list ul li[data-v-f8d99718] {\n        width: 33%;\n        float: left;\n        font-size: 12px;\n        color: #8c9295;\n        line-height: 1.375rem;\n}\n#lovePeriod .shareholder-order #tabs .rationList .list ul li span[data-v-f8d99718] {\n          color: #333;\n          font-size: 14px;\n}\n#lovePeriod .shareholder-order #tabs .rationList .recordList[data-v-f8d99718] {\n    padding: 0.9375rem;\n    font-size: 14px;\n    line-height: 1.125rem;\n    color: #333;\n    text-align: left;\n    background-color: #fff;\n    margin: 0.125rem;\n}\n#lovePeriod .shareholder-order #tabs .rationList .recordList span[data-v-f8d99718] {\n      font-size: 14px;\n      float: right;\n}\n#lovePeriod .shareholder-order #tabs .rationList .one[data-v-f8d99718] {\n    padding: 0 0.75rem 0.5rem 0.75rem;\n}\n#lovePeriod .shareholder-order #tabs .rationList .one .time[data-v-f8d99718] {\n      width: 100%;\n      line-height: 1.625rem;\n      margin-top: 0.625rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n#lovePeriod .shareholder-order #tabs .rationList .one .left[data-v-f8d99718] {\n      color: #282828;\n      font-size: 14px;\n}\n#lovePeriod .shareholder-order #tabs .rationList .one .right[data-v-f8d99718] {\n      color: #282828;\n      font-size: 14px;\n}\n#lovePeriod .shareholder-order #tabs .rationList .one .last[data-v-f8d99718] {\n      color: #8c8c8c;\n}\n#lovePeriod .shareholder-order #tabs .rationList[data-v-f8d99718]:after {\n    content: "";\n    display: block;\n    clear: both;\n}\n',""])},"v+uP":function(e,t,n){var a=n("U7av");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("a35e3686",a,!0,{})}});