webpackJsonp([540],{"7/vj":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'\np[data-v-1f199f81] {\n  margin: 0;\n  padding: 0;\n}\n#shareholderCenter[data-v-1f199f81] {\n  padding-top: 40px;\n}\n#shareholderCenter .m_header[data-v-1f199f81] {\n    width: 100%;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    font-size: 15px;\n    font-weight: bold;\n    background: #fff;\n}\n#shareholderCenter .m_header span[data-v-1f199f81] {\n      display: inline-block;\n      width: 1rem;\n      height: 1.5rem;\n      float: left;\n      margin-left: 0.625rem;\n      font-size: 30px;\n}\n#shareholderCenter .share_holder[data-v-1f199f81] {\n    padding: 1rem 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #f15353;\n    font-size: 14px;\n}\n#shareholderCenter .share_holder .right[data-v-1f199f81] {\n      width: 55%;\n      text-align: right;\n      color: #FFFFFF;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n#shareholderCenter .share_holder .right span[data-v-1f199f81] {\n        line-height: 1.5rem;\n        display: inline-block;\n}\n#shareholderCenter .share_holder .right .rem[data-v-1f199f81] {\n        font-weight: bold;\n        font-size: 20px;\n}\n#shareholderCenter .share_holder .left[data-v-1f199f81] {\n      width: 45%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      color: #fff;\n      text-align: left;\n}\n#shareholderCenter .share_holder .left span[data-v-1f199f81] {\n        line-height: 1.5rem;\n        display: inline-block;\n}\n#shareholderCenter .share_info[data-v-1f199f81] {\n    width: 100%;\n    height: 4.0625rem;\n    background-color: #fff;\n    margin-bottom: 0.625rem;\n}\n#shareholderCenter .share_info div[data-v-1f199f81] {\n      color: #737372;\n      font-size: 12px;\n      padding-top: 0.9375rem;\n      float: left;\n      width: 50%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n#shareholderCenter .share_info div span[data-v-1f199f81] {\n        color: #e84f40;\n        font-size: 16px;\n        font-weight: bold;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list[data-v-1f199f81] {\n    margin: 0.1875rem 0rem;\n    background-color: #fff;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list h4[data-v-1f199f81] {\n      width: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0.625rem 1.25rem;\n      text-align: left;\n      color: #333;\n      font-size: 14px;\n      border-bottom: 0.0625rem solid #ececec;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list h4 span[data-v-1f199f81] {\n        display: inline-block;\n        font-size: 12px;\n        padding: 0.0625rem 0.25rem;\n        font-weight: normal;\n        color: #FFFFFF;\n        background-color: #f15353;\n        border-radius: 0.3125rem;\n        float: right;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul[data-v-1f199f81]:after {\n      content: "";\n      display: block;\n      clear: both;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul[data-v-1f199f81] {\n      width: 100%;\n      padding: 0.625rem 0rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul li[data-v-1f199f81] {\n        width: 33%;\n        float: left;\n        font-size: 12px;\n        color: #8c9295;\n        line-height: 1.375rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul li span[data-v-1f199f81] {\n          color: #333;\n          font-size: 14px;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul .left[data-v-1f199f81] {\n        line-height: 1.875rem;\n        height: 1.875rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list p[data-v-1f199f81] {\n      color: #aab2b9;\n      text-align: left;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0rem 1.25rem 0.9375rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list p span[data-v-1f199f81] {\n        color: #728ae3;\n        float: right;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .recordList[data-v-1f199f81] {\n    padding: 0.625rem 0.875rem;\n    font-size: 14px;\n    color: #333;\n    text-align: left;\n    background-color: #fff;\n    margin: 0.125rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .recordList span[data-v-1f199f81] {\n      font-size: 14px;\n      float: right;\n}\n#shareholderCenter .shareholder-order #tabs .rationList[data-v-1f199f81]:after {\n    content: "";\n    display: block;\n    clear: both;\n}\n',""])},"7CE6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Pexp"),a=n("Tg7E"),i="0",o={data:function(){return{mailLanguage:"",mailTeamReturnTitle:"",mailTeamLevel:"",mailTeamReturnName:"",mailReturnLog:"",team_level:"",level_power:0,return_amount:"",activeName:"first",first_content:[],second_content:[],alreadyReturn:0,each_return_rate:0,order_return_rate:0,returnAmountTotal:0,notReturn:0}},mounted:function(){},activated:function(){this.initMailLanguage(),this.initData(),this.getData(),this.setDataByTabIndex()},methods:{initMailLanguage:function(){this.mailLanguage=this.fun.initMailLanguage(),this.fun.setWXTitle(this.fun.setMailLanguage("团队赠送",this.mailLanguage.team_return.team_return)),this.mailTeamReturnTitle=this.fun.setMailLanguage("团队赠送",this.mailLanguage.team_return.team_return),this.mailTeamLevel=this.fun.setMailLanguage("经销商等级",this.mailLanguage.team_return.team_level),this.mailTeamReturnName=this.fun.setMailLanguage("赠送",this.mailLanguage.team_return.return_name),this.mailReturnLog=this.fun.setMailLanguage("赠送记录",this.mailLanguage.team_return.return_log)},initData:function(){i="0",!1,!1,this.activeName="first",this.first_content=[],this.second_content=[],this.alreadyReturn=0,this.each_return_rate=0,this.order_return_rate=0,this.returnAmountTotal=0,this.notReturn=0},getData:function(){var e=this;$http.get("plugin.team-return.api.team-return.get-team-return-statistic",{},"").then(function(t){console.log("return:",t),1==t.result?(e.team_level=t.data.team_level,e.return_amount=t.data.return_amount,e.level_power=t.data.level_power):Object(a.Toast)(t.msg)},function(e){Object(a.Toast)(e.msg)})},toReturnInfo:function(e){this.$router.push(this.fun.getUrl("teamlevel_return_list_info",{id:e}))},getReturnListInfo:function(){var e=this;$http.get("plugin.team-return.api.team-return.get-team-return-log",{},"").then(function(t){1==t.result?e.first_content=t.data:Object(a.Toast)(t.msg)},function(e){Object(a.Toast)(e.msg)})},setDataByTabIndex:function(){this.getReturnListInfo()},handleClick:function(e,t){i!=e&&(i=e)}},components:{cTitle:r.a}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"shareholderCenter"}},[n("c-title",{attrs:{hide:!1,text:e.mailTeamReturnTitle}}),e._v(" "),n("div",{staticClass:"share_holder"},[n("div",{staticClass:"left"},[n("span",[e._v(e._s(e.mailTeamLevel)+":"+e._s(e.team_level))]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("等级权益:"+e._s(e.level_power))])]),e._v(" "),n("div",{staticClass:"right"},[n("span",{staticClass:"rem"},[e._v("￥"+e._s(e.return_amount)+" ")]),n("br"),e._v(" "),n("span",[e._v("已"+e._s(e.mailTeamReturnName)+"总额(元)")])])]),e._v(" "),n("div",{staticClass:"shareholder-order",staticStyle:{"margin-top":"0.625rem"}},[n("div",{attrs:{id:"tabs"}},[n("mt-navbar",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("mt-tab-item",{attrs:{id:"first"},nativeOn:{click:function(t){return e.handleClick("0")}}},[e._v(e._s(e.mailReturnLog))])],1),e._v(" "),n("mt-tab-container",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("mt-tab-container-item",{attrs:{id:"first"}},[n("ul",{staticClass:"rationList"},e._l(e.first_content,function(t,r){return n("li",{key:r,staticClass:"recordList",on:{click:function(n){return e.toReturnInfo(t.id)}}},[n("div",{staticStyle:{width:"60%",display:"inline-block"}},[n("div",{staticStyle:{"line-height":"1.875rem"}},[e._v(e._s(e.mailTeamReturnName)+"ID:"+e._s(t.id))]),e._v(" "),n("div",{staticStyle:{"line-height":"1.875rem"}},[e._v(e._s(t.created_at))])]),e._v(" "),n("div",{staticStyle:{width:"36%",display:"inline-block"}},[n("span",[e._v(e._s(t.amount)+"元")])])])}),0)])],1)],1)])],1)},staticRenderFns:[]};var l=n("VU/8")(o,s,!1,function(e){n("ZDmY")},"data-v-1f199f81",null);t.default=l.exports},ZDmY:function(e,t,n){var r=n("7/vj");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("58690f0f",r,!0,{})}});