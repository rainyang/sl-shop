webpackJsonp([65],{ILLt:function(e,t,n){var o=n("M9FR");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("95d196a8",o,!0,{})},L4HE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("mvHQ"),i=n.n(o),a=n("Pexp"),r=n("Tg7E"),c={components:{cTitle:a.a},data:function(){return{regional:"请选择省份",dateshow_1:!1,columns:[],regiona2:"请选择城市",dateshow_2:!1,columns_1:[],language:{},userCode:"",popupVisible:!1,provicevalue:"",cityvalue:"",company:"",contract:"",sourceMoney:"",goods_id:"",provinceoptions:[],cityoptions:[],keyIds:"",slots:[{flex:1,values:["请先选择省市"],keyId:[0],className:"slot1",textAlign:"right"}],checkDeductionList:[],form:{provicevalue:"",cityvalue:"",keyId:""},MobilePhone:"",preOrder:"",disableds:!0,score:600,scoreMoney:6,computedMoney:0,useScore:!1,regionoptions:[],poundage:0}},methods:{initData:function(){this.userCode="",this.popupVisible=!1,this.provicevalue="",this.cityvalue="",this.company="",this.contract="",this.sourceMoney="",this.goods_id="";var e=localStorage.getItem("province");this.fun.isTextEmpty(e)&&this.getAddressDataInfo()},selectProviceHandle:function(e){console.log("---fun-ev",e),this.cityvalue="",this.cityoptions=[];var t,n=localStorage.getItem("city");t=JSON.parse(n);for(var o=0;o<t.length;o++){var i=t[o];i.parentid==e&&this.cityoptions.push(i)}},selectCityHandle:function(e){console.log("city----s",e),this.company="",this.slots[0].values="",this.getPaymentCompanyList(2,this.form.provicevalue,e)},tipChangeEvent:function(e){1==e&&0==this.cityoptions.length&&this.$notify({background:"#fef0f0",message:"省不能为空",color:"#f56c6c"})},getPaymentCompanyList:function(e,t,n){var o=this;n&&$http.get("plugin.live.api.goods.PaymentCompanyList",{category:e,province:t,city:n},"加载中...").then(function(e){if(console.log("显示",e),1==e.result){if(!e.data)return o.company="",o.slots[0].values="",void r.MessageBox.alert(e.msg);o.slots[0].values=e.data.values,o.slots[0].keyId=e.data.keyId,o.company=e.data.values[0],o.goods_id=e.data.goods_id}else o.company="",o.slots[0].values=""},function(e){r.MessageBox.alert(e)})},chooseCompony:function(){this.popupVisible=!this.popupVisible},onValuesChange:function(e,t){var n=this.slots[0].values.indexOf(t[0]);this.form.keyId=this.slots[0].keyId[n],this.keyIds=this.slots[0].keyId[n],e.setSlotValue(1,t[0]),this.company=t[0]},confirm:function(){if(this.fun.isTextEmpty(this.userCode))r.MessageBox.alert("请输入户号！");else if(this.fun.isTextEmpty(this.provicevalue))r.MessageBox.alert("请选择省份");else if(this.fun.isTextEmpty(this.cityvalue))r.MessageBox.alert("请选择城市");else if(this.fun.isTextEmpty(this.company))r.MessageBox.alert("请选择缴费单位");else if(this.fun.isTextEmpty(this.contract))r.MessageBox.alert("请输入合同号");else if(this.fun.isTextEmpty(this.sourceMoney))r.MessageBox.alert("请输入充值金额");else if(this.sourceMoney<=0)r.MessageBox.alert("充值金额必需大于0");else{var e={goods_id:this.goods_id,account:this.userCode,api_goods_id:this.keyIds,contract:this.contract,price:this.sourceMoney,total:1,option_id:"",orders:i()(this.assembleDeduction())},t=this;$http.get("plugin.live.Frontend.Modules.Order.Controllers.goods-buy",e,"提交中...").then(function(n){1==n.result?t.$router.push(t.fun.getUrl("electricityPay",{para:i()(e)})):r.MessageBox.alert(n.msg)},function(e){console.log(e)})}},assembleDeduction:function(){for(var e=[],t=0;t<this.checkDeductionList.length;t++)e.push(this.checkDeductionList[t]);return e},getAddressDataInfo:function(){var e=this;$http.get("member.member-address.address",{i:this.fun.getKeyByI(),type:this.fun.getTyep()},"").then(function(t){if(1==t.result){var n=i()(t.data.province),o=i()(t.data.city),a=i()(t.data.district);localStorage.setItem("province",n),localStorage.setItem("city",o),localStorage.setItem("district",a),e.initProvice()}else r.MessageBox.alert(t.msg)},function(e){r.MessageBox.alert(e)})},initProvice:function(){var e,t=localStorage.getItem("province");e=JSON.parse(t),this.provinceoptions=e;var n=this.provinceoptions.map(function(e){return e.areaname});this.columns=n,console.log("---swich-----",this.provinceoptions)},seleRegional:function(){this.dateshow_1=!0},onCancelbtn:function(e,t){this.dateshow_1=!1},onConfirmbtn:function(e,t){this.dateshow_1=!1,this.regional=e;var n=this.provinceoptions;this.provicevalue=n[t].id,this.cityvalue="",this.cityoptions=[];var o,i=localStorage.getItem("city");o=JSON.parse(i);for(var a=0;a<o.length;a++){var r=o[a];r.parentid==n[t].id&&this.cityoptions.push(r)}var c=this.cityoptions.map(function(e){return e.areaname});this.columns_1=c,this.regiona2="请选择城市"},seleRegional_1:function(){this.dateshow_2=!0},onChange:function(e,t,n){},onCancelbtn_1:function(e,t){this.dateshow_2=!1},onConfirmbtn_1:function(e,t){this.dateshow_2=!1,this.regiona2=e;var n=this.cityoptions;this.cityvalue=n[t].id,this.company="",this.slots[0].values="",this.getPaymentCompanyList(2,this.form.provicevalue,n[t].id)}},computed:{getLangState:function(){return this.$store.state.service.languageService},citynull:function(){return!(this.columns_1.length>0)}},watch:{getLangState:function(e){this.language=e?JSON.parse(sessionStorage.languageService).electricity:this.$store.state.service.languageService.electricity}},mounted:function(){this.userCode=localStorage.getItem("tempElectri"),this.initProvice(),sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).electricity:this.language=this.$store.state.service.languageService.electricity},activated:function(){this.$store.commit("onload"),this.userCode=localStorage.getItem("tempElectri"),this.initData()}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"electricity"+e.$store.state.service.lang,attrs:{id:"electricity"}},[n("c-title",{attrs:{hide:!1,text:e.language.title}}),e._v(" "),n("div",{staticStyle:{height:"40px"}}),e._v(" "),n("div",{staticClass:"telep"},[n("p",[n("span",[e._v("用户编号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.userCode,expression:"userCode",modifiers:{lazy:!0}}],attrs:{type:"number",placeholder:e.language.placeTip},domProps:{value:e.userCode},on:{change:function(t){e.userCode=t.target.value}}})])]),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"maleall"},[n("label",{staticClass:"males",attrs:{for:"male"}},[n("span",{staticStyle:{"margin-right":"10px"}},[e._v("所在省份: ")]),e._v(" "),n("van-button",{staticStyle:{"border-radius":"5px",color:"#1f2d3d",border:"1px solid #bfcbd9","min-height":"1rem","min-width":"14rem"},attrs:{plain:"",type:"primary"},on:{click:e.seleRegional}},[e._v(e._s(e.regional))])],1)]),e._v(" "),n("div",{staticClass:"maleall"},[n("label",{staticClass:"males",attrs:{for:"male"}},[n("span",{staticStyle:{"margin-right":"10px"}},[e._v("所在城市: ")]),e._v(" "),n("van-button",{staticStyle:{"border-radius":"5px",color:"#1f2d3d",border:"1px solid #bfcbd9","min-height":"1rem","min-width":"14rem"},attrs:{plain:"",type:"primary",disabled:e.citynull},on:{click:e.seleRegional_1}},[e._v(e._s(e.regiona2))])],1)]),e._v(" "),n("form",{staticClass:"form",attrs:{action:"",method:""}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-help",attrs:{for:""}},[e._v(e._s(e.language.company))]),e._v(" "),n("div",{staticClass:"form-controler",on:{click:e.chooseCompony}},[e._v(e._s(e.company)+"\n\t\t            \t"),"ch"==e.$store.state.service.lang?n("i",{staticClass:"iconfont icon-right"}):n("i",{staticClass:"iconfont icon-left"})])]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-help",attrs:{for:""}},[e._v(e._s(e.language.contract))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.contract,expression:"contract",modifiers:{lazy:!0}}],staticClass:"form-controler",attrs:{type:"number",placeholder:e.language.placeContract},domProps:{value:e.contract},on:{change:function(t){e.contract=t.target.value}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-help",attrs:{for:""}},[e._v(e._s(e.language.money))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.sourceMoney,expression:"sourceMoney",modifiers:{lazy:!0}}],staticClass:"form-controler",attrs:{type:"number",placeholder:e.language.placeMoney},domProps:{value:e.sourceMoney},on:{change:function(t){e.sourceMoney=t.target.value}}})])])]),e._v(" "),n("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[n("div",{staticClass:"popUp"},[n("div",{staticClass:"title"},[n("span",{staticClass:"left",on:{click:e.chooseCompony}},[e._v(e._s(e.language.cancle))]),e._v(e._s(e.language.company)),n("span",{staticClass:"right",on:{click:e.chooseCompony}},[e._v(e._s(e.language.confirm))])]),e._v(" "),n("mt-picker",{attrs:{slots:e.slots},on:{change:e.onValuesChange}})],1)]),e._v(" "),[n("div",{staticClass:"amount"},[n("button",{attrs:{type:"button"},on:{click:e.confirm}},[e._v(e._s(e.language.btn))])])],e._v(" "),e._e(),e._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.dateshow_1,callback:function(t){e.dateshow_1=t},expression:"dateshow_1"}},[n("van-picker",{attrs:{columns:e.columns,"show-toolbar":""},on:{change:e.onChange,cancel:e.onCancelbtn,confirm:e.onConfirmbtn}})],1),e._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.dateshow_2,callback:function(t){e.dateshow_2=t},expression:"dateshow_2"}},[n("van-picker",{attrs:{columns:e.columns_1,"show-toolbar":""},on:{change:e.onChange_1,cancel:e.onCancelbtn_1,confirm:e.onConfirmbtn_1}})],1)],2)},staticRenderFns:[]};var l=n("VU/8")(c,s,!1,function(e){n("ILLt"),n("sbDW")},"data-v-debf76dc",null);t.default=l.exports},M9FR:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n::-webkit-input-placeholder { /* WebKit browsers */\ncolor:#8c8c8c;\n}\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\ncolor:#8c8c8c;\n}\n::-moz-placeholder { /* Mozilla Firefox 19+ */\ncolor:#8c8c8c;\n}\n:-ms-input-placeholder { /* Internet Explorer 10+ */\ncolor:#8c8c8c;\n}\n",""])},fnvB:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'\n@charset "UTF-8";\n/*　input[placeholder], [placeholder], *[placeholder] { \ncolor:red !important; \n} 　*/\n*[data-v-debf76dc] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.electricitych .poundage[data-v-debf76dc] {\n  color: red;\n  font-size: 12px;\n}\n.electricitych .maleall[data-v-debf76dc] {\n  background-color: #fff;\n}\n.electricitych .maleall span[data-v-debf76dc] {\n    font-size: 14px;\n    vertical-align: middle;\n    width: auto;\n    margin-left: -0.9375rem;\n    -webkit-box-flex: 0;\n    -ms-flex: none;\n    flex: none;\n    line-height: 3.125rem;\n}\n.electricitych .telep[data-v-debf76dc] {\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n  padding: 0.625rem 0.875rem;\n  background: #fff;\n}\n.electricitych .telep p input[data-v-debf76dc] {\n    padding-bottom: 0.625rem;\n    width: 100%;\n    height: 100%;\n    border: 0;\n    outline: 0;\n    color: #333;\n    font-size: 24px;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n.electricitych .telep p span[data-v-debf76dc] {\n    display: block;\n    line-height: 1.875rem;\n    text-align: left;\n    font-size: 14px;\n}\n.electricitych .content .form[data-v-debf76dc] {\n  background-color: #fff;\n  margin-top: 0.625rem;\n  font-size: 16px;\n  padding-left: 0.875rem;\n}\n.electricitych .content .form .form-group[data-v-debf76dc] {\n    padding-right: 14px;\n    height: 2.8125rem;\n    border-top: 0.0625rem solid #ebebeb;\n    /* Safari */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n}\n.electricitych .content .form .form-group .form-help[data-v-debf76dc] {\n      width: 6.25rem;\n      height: 2.8125rem;\n      line-height: 2.8125rem;\n      text-align: left;\n}\n.electricitych .content .form .form-group .form-controler[data-v-debf76dc] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: auto;\n      line-height: 2.8125rem;\n      float: left;\n      border: 0;\n      outline: 0;\n      text-align: left;\n}\n.electricitych .content .form .form-group .form-controler i[data-v-debf76dc] {\n        font-size: 23px;\n        float: right;\n}\n.electricitych .popUp[data-v-debf76dc] {\n  width: 100%;\n  background: #fff;\n}\n.electricitych .popUp .title[data-v-debf76dc] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    border-bottom: 0.0625rem solid #f3f5f7;\n    padding: 0 0.9375rem;\n}\n.electricitych .popUp .title .left[data-v-debf76dc] {\n      float: left;\n}\n.electricitych .popUp .title .right[data-v-debf76dc] {\n      float: right;\n      color: #8c8c8c;\n}\n.electricitych .amount[data-v-debf76dc] {\n  padding: 0 0 0 0rem;\n  margin-bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.electricitych .amount span[data-v-debf76dc] {\n    color: #333;\n    font-size: 16px;\n    float: left;\n}\n.electricitych .amount button[data-v-debf76dc] {\n    width: 90%;\n    height: 2.875rem;\n    color: #fff;\n    font-size: 16px;\n    background: #f15353;\n    border: 0;\n    border-radius: 0.375rem;\n    margin-top: 1.25rem;\n}\n.electricitych .m-footer[data-v-debf76dc] {\n  width: 100%;\n  background: #fff;\n  position: fixed;\n  bottom: 0;\n}\n.electricitych .m-footer .subtotal[data-v-debf76dc] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    padding: 0 0.875rem;\n    border-bottom: 0.0625rem solid #ebebeb;\n    margin: 0;\n}\n.electricitych .m-footer .subtotal span[data-v-debf76dc]:first-child {\n      color: #333;\n      font-size: 16px;\n      float: left;\n}\n.electricitych .m-footer .subtotal span[data-v-debf76dc]:last-child {\n      color: 12px;\n      color: #333;\n      float: right;\n}\n.electricitych .m-footer .integral[data-v-debf76dc] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    padding: 0 0.8125rem;\n}\n.electricitych .m-footer .integral div[data-v-debf76dc] {\n      float: left;\n}\n.electricitych .m-footer .integral div b[data-v-debf76dc] {\n        color: #333;\n        font-size: 16px;\n        font-weight: noraml;\n}\n.electricitych .m-footer .integral div span[data-v-debf76dc] {\n        color: #333;\n        font-size: 12px;\n}\n.electricitych .m-footer .amount.disableds button[data-v-debf76dc] {\n    background: #ccc;\n}\n.electricitywei .telep[data-v-debf76dc] {\n  height: 2.8125rem;\n  padding: 0 0.8125rem;\n  background: #fff;\n}\n.electricitywei .telep p[data-v-debf76dc] {\n    height: 2.8125rem;\n}\n.electricitywei .telep p input[data-v-debf76dc] {\n      width: 100%;\n      height: 100%;\n      border: 0;\n      outline: 0;\n      color: #1bba9e;\n      font-size: 18px;\n}\n.electricitywei .content[data-v-debf76dc] {\n  background: #fff;\n}\n.electricitywei .content .form .form-group[data-v-debf76dc] {\n    padding: 0 0.9375rem;\n    height: 2.8125rem;\n    border-top: 0.0625rem solid #ebebeb;\n    /* Safari */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n}\n.electricitywei .content .form .form-group .form-help[data-v-debf76dc] {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      width: 5rem;\n      height: 2.8125rem;\n      line-height: 2.8125rem;\n      text-align: right;\n}\n.electricitywei .content .form .form-group .form-controler[data-v-debf76dc] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 2.8125rem;\n      line-height: 2.8125rem;\n      float: left;\n      border: 0;\n      outline: 0;\n      text-align: right;\n}\n.electricitywei .content .form .form-group .form-controler i[data-v-debf76dc] {\n        font-size: 23px;\n        float: left;\n}\n.electricitywei .popUp[data-v-debf76dc] {\n  width: 100%;\n  background: #fff;\n}\n.electricitywei .popUp .title[data-v-debf76dc] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    border-bottom: 0.0625rem solid #f3f5f7;\n    padding: 0 0.9375rem;\n}\n.electricitywei .popUp .title .left[data-v-debf76dc] {\n      float: right;\n}\n.electricitywei .popUp .title .right[data-v-debf76dc] {\n      float: left;\n      color: #1bba9e;\n}\n.electricitywei .m-footer[data-v-debf76dc] {\n  width: 100%;\n  background: #fff;\n  position: fixed;\n  bottom: 0;\n}\n.electricitywei .m-footer .subtotal[data-v-debf76dc] {\n    height: 2.5rem;\n    line-height: 2.5rem;\n    padding: 0 0.8125rem;\n    border-bottom: 0.0625rem solid #ebebeb;\n    margin: 0;\n}\n.electricitywei .m-footer .subtotal span[data-v-debf76dc]:first-child {\n      color: #333;\n      font-size: 16px;\n      float: right;\n}\n.electricitywei .m-footer .subtotal span[data-v-debf76dc]:last-child {\n      color: 12px;\n      color: #333;\n      float: left;\n}\n.electricitywei .m-footer .integral[data-v-debf76dc] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    padding: 0 0.8125rem;\n}\n.electricitywei .m-footer .integral div[data-v-debf76dc] {\n      float: right;\n}\n.electricitywei .m-footer .integral div b[data-v-debf76dc] {\n        color: #333;\n        font-size: 16px;\n        font-weight: noraml;\n        float: right;\n}\n.electricitywei .m-footer .integral div span[data-v-debf76dc] {\n        color: #333;\n        font-size: 12px;\n}\n.electricitywei .m-footer .amount[data-v-debf76dc] {\n    height: 3.125rem;\n    line-height: 3.125rem;\n    padding: 0 0 0 0.8125rem;\n    margin-bottom: 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.electricitywei .m-footer .amount span[data-v-debf76dc] {\n      color: #333;\n      font-size: 16px;\n      float: left;\n}\n.electricitywei .m-footer .amount button[data-v-debf76dc] {\n      width: 6.875rem;\n      height: 2.8125rem;\n      color: #fff;\n      font-size: 16px;\n      background: #f15353;\n      border: 0;\n      float: right;\n}\n',""])},sbDW:function(e,t,n){var o=n("fnvB");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("3997583b",o,!0,{})}});