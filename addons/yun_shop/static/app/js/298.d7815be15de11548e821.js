webpackJsonp([298],{"5uMG":function(t,e,a){var n=a("oCFl");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("6721f167",n,!0,{})},kAyF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Pexp"),i=a("Tg7E"),s={mixins:[a("vsZy").a],data:function(){return{recordsList:[],isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),this.getData()},methods:{toRed:function(t){this.$router.push(this.fun.getUrl("RedReward",{},{id:t.id}))},initData:function(){this.recordsList=[],this.page=1,this.total_page=0,this.isLoadMore=!0},getData:function(){var t=this;$http.get("plugin.team-dividend.api.red-pack.get-list",{member_id:this.id},"...").then(function(e){1===e.result?(t.isLoadMore=!0,t.total_page=e.data.list.last_page,t.total_page||(t.total_page=0),t.recordsList=e.data.list.data):Object(i.Toast)(e.msg)}).catch(function(t){console.log(t)})},getMoreData:function(){var t=this;t.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.team-dividend.api.red-pack.get-list",{page:t.page},"加载中...").then(function(e){if(t.isLoadMore=!0,1!==e.result)return t.page=t.page-1,void(t.isLoadMore=!1);var a=e.data.list.data;t.recordsList=t.recordsList.concat(a)},function(t){}))}},components:{cTitle:n.a}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"franchiser_red"}},[a("c-title",{attrs:{hide:!1,text:"红包奖励记录列表"}}),t._v(" "),a("div",{attrs:{id:"content"}},t._l(t.recordsList,function(e,n){return a("div",{key:n,staticClass:"list_box",on:{click:function(a){return t.toRed(e)}}},[a("ul",{staticClass:"left"},[a("li",{staticClass:"left_a"},[t._v(t._s(e.amount)+"元")]),t._v(" "),a("li",{staticClass:"left_b"},[t._v(t._s(e.created_at))])]),t._v(" "),a("p",{staticClass:"state stay"},[t._v(t._s(e.status_name))])])}),0)],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(t){a("5uMG")},"data-v-76ffa09f",null);e.default=o.exports},oCFl:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#franchiser_red[data-v-76ffa09f] {\n  padding-top: 40px;\n  background: #fff;\n}\n#franchiser_red #content[data-v-76ffa09f] {\n    padding-left: 0.875rem;\n}\n#franchiser_red #content .list_box[data-v-76ffa09f] {\n      border-bottom: solid 0.0625rem #ebebeb;\n      padding: 0.625rem 0.875rem 0.625rem 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n#franchiser_red #content .list_box .left .left_a[data-v-76ffa09f] {\n        line-height: 1.875rem;\n        text-align: left;\n        font-size: 18px;\n}\n#franchiser_red #content .list_box .left .left_b[data-v-76ffa09f] {\n        line-height: 1.875rem;\n        text-align: left;\n        font-size: 14px;\n        color: #8c8c8c;\n}\n#franchiser_red #content .list_box p[data-v-76ffa09f] {\n        font-size: 16px;\n        color: #8c8c8c;\n}\n#franchiser_red #content .list_box .stay[data-v-76ffa09f] {\n        color: #f15353;\n}\n",""])}});