webpackJsonp([494],{VRta:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("Pexp"),o=n("Tg7E"),i=n("vsZy"),r=(document.documentElement,{mixins:[i.a],data:function(){return{type:"",rewardsData:{},recordsList:[],WXtitle:"",isLoadMore:!0,page:1,total_page:0}},created:function(){},activated:function(){this.type=this.$route.query.name,this.WXtitle=this.$route.query.reward_name,1===this.$route.params.fromHome&&(this.initData(),this.getData())},methods:{loadTop:function(){this.initData(),this.getData(),this.$refs.loadmore.onTopLoaded()},toDetail:function(t){this.$router.push(this.fun.getUrl("newAwardDetail",{},{id:t.id,name:this.type}))},initData:function(){this.rewardsData={},this.recordsList=[],this.page=1,this.total_page=0,this.isLoadMore=!0,this.fun.setWXTitle(this.WXtitle)},getData:function(){var t=this;this.isLoadMore=!1,this.page=1,$http.get("plugin.ozy.frontend.index.getData",{status:this.type,page:this.page},"加载中").then(function(a){1===a.result?(t.isLoadMore=!0,t.total_page=a.data.record.last_page,t.total_page||(t.total_page=0),t.rewardsData=a.data,t.recordsList=a.data.record.data):Object(o.Toast)(a.msg)},function(t){console.log(t)}).catch(function(t){console.error(t)})},getMoreData:function(){var t=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.ozy.frontend.index.getData",{status:this.type,page:this.page},"加载中").then(function(a){if(t.isLoadMore=!0,1===a.result){var n=a.data.record.data;t.recordsList=t.recordsList.concat(n)}else t.page=t.page-1,t.isLoadMore=!1},function(t){}).catch(function(t){console.error(t)}))}},components:{cTitle:e.a}}),d={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"new_award_record"}},[n("c-title",{attrs:{hide:!1,text:t.WXtitle}}),t._v(" "),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"info_box"},[n("div",{staticClass:"info"},[n("ul",[n("li",[t._v(t._s(t.rewardsData.today))]),t._v(" "),n("li",[t._v("今日")])]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.rewardsData.yesterday))]),t._v(" "),n("li",[t._v("昨日")])]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.rewardsData.week))]),t._v(" "),n("li",[t._v("本周")])]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.rewardsData.month))]),t._v(" "),n("li",[t._v("本月累计分红")])])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"award_box"},[n("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,bottomPullText:"",bottomDropText:"下拉加载...",bottomLoadingText:"",autoFill:!1,id:"olis"}},[n("div",{staticClass:"list_box"},t._l(t.recordsList,function(a,e){return n("ul",{key:e,on:{click:function(n){return t.toDetail(a)}}},[n("li",[a.log_id?n("span",[t._v("销售佣金ID："+t._s(a.log_id))]):t._e(),t._v(" "),a.log_id?t._e():n("span",[t._v(t._s(a.has_one_member.nickname))]),t._v(" "),n("span",[t._v(t._s(a.actual_amount))])]),t._v(" "),n("li",[n("span",[t._v(t._s(a.created_at))]),t._v(" "),n("span",[t._v("已发放")])])])}),0)])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"img"},[a("img",{attrs:{src:n("b/Eg")}})])}]};var s=n("VU/8")(r,d,!1,function(t){n("X4Z/")},"data-v-2f7544a7",null);a.default=s.exports},W77v:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#new_award_record[data-v-2f7544a7] {\n  padding-top: 40px;\n}\n#new_award_record #content .info_box[data-v-2f7544a7] {\n    position: relative;\n}\n#new_award_record #content .info_box .info[data-v-2f7544a7] {\n      background-color: #fff;\n      padding: 0.75rem 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#new_award_record #content .info_box .info ul[data-v-2f7544a7]:first-child,\n      #new_award_record #content .info_box .info ul[data-v-2f7544a7]:nth-child(2),\n      #new_award_record #content .info_box .info ul[data-v-2f7544a7]:nth-child(3) {\n        width: 5.125rem;\n}\n#new_award_record #content .info_box .info ul:first-child li[data-v-2f7544a7],\n        #new_award_record #content .info_box .info ul:nth-child(2) li[data-v-2f7544a7],\n        #new_award_record #content .info_box .info ul:nth-child(3) li[data-v-2f7544a7] {\n          line-height: 1.875rem;\n}\n#new_award_record #content .info_box .info ul:first-child li[data-v-2f7544a7]:first-child,\n        #new_award_record #content .info_box .info ul:nth-child(2) li[data-v-2f7544a7]:first-child,\n        #new_award_record #content .info_box .info ul:nth-child(3) li[data-v-2f7544a7]:first-child {\n          font-size: 20px;\n          color: #ffa800;\n}\n#new_award_record #content .info_box .info ul:first-child li[data-v-2f7544a7]:last-child,\n        #new_award_record #content .info_box .info ul:nth-child(2) li[data-v-2f7544a7]:last-child,\n        #new_award_record #content .info_box .info ul:nth-child(3) li[data-v-2f7544a7]:last-child {\n          font-size: 13px;\n          font-weight: bold;\n}\n#new_award_record #content .info_box .info ul[data-v-2f7544a7]:last-child {\n        width: 8.0625rem;\n}\n#new_award_record #content .info_box .info ul:last-child li[data-v-2f7544a7] {\n          line-height: 1.875rem;\n}\n#new_award_record #content .info_box .info ul:last-child li[data-v-2f7544a7]:first-child {\n          font-size: 20px;\n          color: #ffa800;\n}\n#new_award_record #content .info_box .info ul:last-child li[data-v-2f7544a7]:last-child {\n          font-size: 13px;\n          font-weight: bold;\n}\n#new_award_record #content .info_box .img[data-v-2f7544a7] {\n      position: absolute;\n      bottom: 0.625rem;\n      right: 7.625rem;\n      height: 3.75rem;\n}\n#new_award_record #content .info_box .img img[data-v-2f7544a7] {\n        height: 100%;\n}\n#new_award_record #content .award_box[data-v-2f7544a7] {\n    margin-top: 0.625rem;\n}\n#new_award_record #content .award_box .list_box[data-v-2f7544a7] {\n      margin-top: 0.375rem;\n      background-color: #fff;\n}\n#new_award_record #content .award_box .list_box ul[data-v-2f7544a7] {\n        padding: 0.625rem 0.875rem;\n        border-bottom: solid 0.0625rem #ebebeb;\n}\n#new_award_record #content .award_box .list_box ul li[data-v-2f7544a7]:first-child {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          line-height: 1.875rem;\n          font-size: 16px;\n}\n#new_award_record #content .award_box .list_box ul li:first-child span[data-v-2f7544a7]:last-child {\n            color: #f15353;\n}\n#new_award_record #content .award_box .list_box ul li[data-v-2f7544a7]:last-child {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          line-height: 1.5rem;\n          font-size: 16px;\n}\n#new_award_record #content .award_box .list_box ul li:last-child span[data-v-2f7544a7]:first-child {\n            font-size: 14px;\n            color: #8c8c8c;\n}\n",""])},"X4Z/":function(t,a,n){var e=n("W77v");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("6c1d1833",e,!0,{})}});