webpackJsonp([381],{JiBT:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Pexp"),n=t("Tg7E"),r={data:function(){return{rewardDetail:{},name:"",type:""}},activated:function(){this.id=this.$route.query.id,this.type=this.$route.query.name,this.rewardDetail={},this.initData(this.type),this.getData()},methods:{initData:function(a){switch(a){case"teamManagement":this.api="plugin.mryt.api.team-manage.details",this.name="获得销售佣金会员";break;case"team":this.api="plugin.mryt.api.team.details",this.name="新进会员";break;case"thanks":this.api="plugin.mryt.api.thanksgiver.details",this.name="新进会员";break;case"education":this.api="plugin.mryt.api.train.details",this.name="下级会员";break;case"immediate":this.api="plugin.mryt.api.direct-award.details",this.name="新进会员";break;case"tier":this.api="plugin.mryt.api.tier.details",this.name="新进会员";break;default:this.api="plugin.mryt.api.team-manage.details",this.name="获得销售佣金会员"}},getData:function(){var a=this;$http.get(this.api,{award_id:this.id},"加载中...").then(function(e){1===e.result?(a.rewardDetail=e.data,console.log(e.data)):Object(n.Toast)(e.msg)},function(a){console.log(a)})}},components:{cTitle:i.a}},s={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"award_detail"}},[t("c-title",{attrs:{hide:!1,text:"分红详情"}}),a._v(" "),t("div",{attrs:{id:"content"}},[t("ul",{staticClass:"price"},[t("li",[a._v(a._s(a.rewardDetail.amount)),t("span",[a._v("元")])])]),a._v(" "),t("ul",{staticClass:"list-info"},[t("li",[t("span",[a._v("类型")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.type_name))])]),a._v(" "),t("li",[t("span",[a._v("分红时间")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.created_at))])]),a._v(" "),a.rewardDetail.log_id?t("li",[t("span",[a._v("销售佣金ID")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.log_id))])]):a._e(),a._v(" "),t("li",[t("span",[a._v(a._s(a.name))]),a._v(" "),a.rewardDetail.has_one_source_member?t("span",[a._v(a._s(a.rewardDetail.has_one_source_member.nickname))]):a._e()]),a._v(" "),a.rewardDetail.log_amount?t("li",[t("span",[a._v("销售佣金金额（元）")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.log_amount))])]):a._e(),a._v(" "),a.rewardDetail.level_team_award_amount?t("li",[t("span",[a._v("等级奖励金额（元）")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.level_team_award_amount))])]):a._e(),a._v(" "),a.rewardDetail.lower_level_team_award_amount&&"thanks"!==a.type?t("li",[t("span",[a._v("下级会员奖励金额（元）")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.lower_level_team_award_amount))])]):a._e(),a._v(" "),a.rewardDetail.team_amount?t("li",[t("span",[a._v("下级团队管理奖（元）")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.team_amount))])]):a._e(),a._v(" "),a.rewardDetail.parenting_ratio?t("li",[t("span",[a._v("育人奖比例")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.parenting_ratio)+"%")])]):a._e(),a._v(" "),a.rewardDetail.amount?t("li",["immediate"!==a.type?t("span",[a._v("奖励金额（元）")]):a._e(),a._v(" "),"immediate"===a.type?t("span",[a._v("直推奖励金额（元）")]):a._e(),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.amount))])]):a._e(),a._v(" "),a.rewardDetail.award_ratio?t("li",[t("span",[a._v("分红比例")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.award_ratio)+"%")])]):a._e(),a._v(" "),a.rewardDetail.lower_award_ratio?t("li",[t("span",[a._v("下级会员提成比例")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.lower_award_ratio)+"%")])]):a._e(),a._v(" "),t("li",[t("span",[a._v("状态")]),a._v(" "),t("span",[a._v(a._s(a.rewardDetail.status_name))])])])])],1)},staticRenderFns:[]};var _=t("VU/8")(r,s,!1,function(a){t("K4S2")},"data-v-5b16b7f6",null);e.default=_.exports},K4S2:function(a,e,t){var i=t("Wiy3");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t("rjj0")("a758e2ee",i,!0,{})},Wiy3:function(a,e,t){(a.exports=t("FZ+f")(!1)).push([a.i,"\n#award_detail[data-v-5b16b7f6] {\n  padding-top: 40px;\n}\n#award_detail #content[data-v-5b16b7f6] {\n    background-color: #fff;\n}\n#award_detail #content .price[data-v-5b16b7f6] {\n      line-height: 4.5rem;\n      font-size: 32px;\n      font-weight: bold;\n}\n#award_detail #content .price span[data-v-5b16b7f6] {\n        font-size: 16px;\n}\n#award_detail #content .list-info[data-v-5b16b7f6] {\n      padding: 0.625rem 0.875rem;\n}\n#award_detail #content .list-info li[data-v-5b16b7f6] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        line-height: 2.25rem;\n        font-size: 15px;\n}\n#award_detail #content .list-info li span[data-v-5b16b7f6]:first-child {\n          color: #8c8c8c;\n}\n#award_detail #content .list-info li:last-child span[data-v-5b16b7f6]:last-child {\n        color: #00b566;\n}\n",""])}});