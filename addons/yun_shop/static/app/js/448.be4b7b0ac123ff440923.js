webpackJsonp([448],{"8DlB":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("vsZy"),a=n("Pexp"),o=n("Tg7E"),d={mixins:[e.a],data:function(){return{pluginName:"",all_dividend:"",total_dividend:"",infozt:[],infogl:[],active:0,isNo:!1,page:1,isLoadMore:!0,total_page:0}},activated:function(){this.init(),this.getData()},components:{cTitle:a.a},methods:{init:function(){this.pluginName="",this.all_dividend="",this.total_dividend="",this.infozt=[],this.infogl=[],this.isLoadMore=!0,this.total_page=0,this.page=1},getData:function(){var t=this;this.isNo=!1,$http.get("plugin.commission-manage.frontend.controllers.reward-log",{},"").then(function(i){1===i.result?(t.isLoadMore=!0,t.total_page=i.data.list.last_page,t.total_page||(t.total_page=0),t.infogl=i.data.list.data,t.fun.isTextEmpty(i.data.list.data)&&(t.isNo=!0),t.pluginName=i.data.plugin_name?i.data.plugin_name:"分销商管理奖",t.all_dividend=i.data.all_dividend,t.total_dividend=i.data.total_dividend):Object(o.Toast)({message:i.msg,duration:800})}).catch(function(t){console.log(t)})},gotoDetail:function(t){this.$router.push(this.fun.getUrl("DistributionDetail",{},{id:t}))},getMoreData:function(){this.isLoadMore=!1;var t=this;t.page>=t.total_page||(t.page+=1,$http.get("plugin.commission-manage.frontend.controllers.reward-log",{page:t.page},"").then(function(i){if(t.isLoadMore=!0,1!=i.result)return t.page=t.page-1,void(t.isLoadMore=!1);var n=i.data.list.data;t.infogl=t.infogl.concat(n)}).catch(function(t){console.log(t)}))},loadTop:function(){this.init(),this.getData(),this.$refs.loadmore.onTopLoaded()}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"distributionHome"}},[e("c-title",{attrs:{hide:!1,text:t.pluginName}}),t._v(" "),e("div",{staticClass:"topBox"},[e("div",{staticClass:"childBox"},[e("div",[e("i",{staticStyle:{"font-size":"1.25rem","font-weight":"bold"}},[t._v(t._s(t.all_dividend))]),t._v(" 元")]),t._v(" "),e("div",[t._v("累计所有奖励")])])]),t._v(" "),e("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topDropText:"释放刷新"}},[e("ul",t._l(t.infogl,function(i){return e("li",{key:i.id,staticClass:"list",on:{click:function(n){return t.gotoDetail(i.id)}}},[e("div",{staticClass:"typeb"},[t._v("奖励ID ："+t._s(i.id))]),t._v(" "),e("div",{staticClass:"amountb"},[t._v(t._s(i.dividend_amount)+"元")]),t._v(" "),e("div",{staticClass:"timeb"},[t._v(t._s(i.created_at))])])}),0),t._v(" "),t.isNo?e("img",{staticStyle:{width:"5rem","padding-top":"3rem"},attrs:{src:n("u+0x"),alt:""}}):t._e()])],1)},staticRenderFns:[]};var s=n("VU/8")(d,l,!1,function(t){n("LA5O")},"data-v-432e1f9c",null);i.default=s.exports},LA5O:function(t,i,n){var e=n("xCLP");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("6d460a9a",e,!0,{})},xCLP:function(t,i,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#distributionHome[data-v-432e1f9c] {\n  padding-top: 40px;\n}\n#distributionHome .topBox[data-v-432e1f9c] {\n  padding: 0 12px;\n  width: 100%;\n  height: 5rem;\n  color: #fff;\n  background: #f15353;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#distributionHome .topBox .childBox[data-v-432e1f9c] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n#distributionHome .topBox .childBox div[data-v-432e1f9c] {\n  width: 100%;\n}\n#distributionHome .line[data-v-432e1f9c] {\n  height: 3rem;\n  width: 1px;\n  background-color: #ffd5cd;\n}\n#distributionHome .list[data-v-432e1f9c] {\n  width: 100%;\n  padding: 0.825rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  text-align: left;\n  background: #fff;\n  color: #333333;\n  border-bottom: 0.0625rem solid #cccccc;\n}\n#distributionHome .list[data-v-432e1f9c]:last-child {\n  border: none;\n}\n#distributionHome .list .typeb[data-v-432e1f9c] {\n  -webkit-box-flex: 60%;\n      -ms-flex: 60%;\n          flex: 60%;\n  font-size: 0.875rem;\n}\n#distributionHome .list .amountb[data-v-432e1f9c] {\n  text-align: right;\n  -webkit-box-flex: 40%;\n      -ms-flex: 40%;\n          flex: 40%;\n}\n#distributionHome .list .timeb[data-v-432e1f9c] {\n  padding-top: 0.5rem;\n  color: #999999;\n}\n",""])}});