webpackJsonp([454],{"9tMd":function(e,a,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n#reward_process #reward_header[data-v-3f68f4fc] {\n  background-color: #fff;\n}\n#reward_process #reward_header .header_box[data-v-3f68f4fc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1.25rem 0.875rem;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_process #reward_header .header_box .img[data-v-3f68f4fc] {\n      width: 3.5rem;\n      height: 3.5rem;\n      border-radius: 1.75rem;\n      overflow: hidden;\n      border: solid 0.0625rem #ebebeb;\n      margin-right: 0.625rem;\n      background-color: #f8f8f8;\n}\n#reward_process #reward_header .header_box .img img[data-v-3f68f4fc] {\n        width: 100%;\n}\n#reward_process #reward_header .header_box .head_name[data-v-3f68f4fc] {\n      text-align: left;\n}\n#reward_process #reward_header .header_box .head_name span[data-v-3f68f4fc] {\n        width: 17.5625rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n}\n#reward_process #reward_header .header_box .head_name .title[data-v-3f68f4fc] {\n        color: #999;\n        font-size: 16px;\n        font-weight: normal;\n}\n#reward_process #reward_header .header_box span[data-v-3f68f4fc] {\n      display: block;\n      font-size: 16px;\n      font-weight: bold;\n}\n#reward_process #reward_header .reward_box[data-v-3f68f4fc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.75rem 0;\n}\n#reward_process #reward_header .reward_box .reward_a[data-v-3f68f4fc], #reward_process #reward_header .reward_box .reward_b[data-v-3f68f4fc], #reward_process #reward_header .reward_box .reward_c[data-v-3f68f4fc] {\n      width: 33.33%;\n      text-align: center;\n}\n#reward_process #reward_header .reward_box .reward_a li span[data-v-3f68f4fc], #reward_process #reward_header .reward_box .reward_b li span[data-v-3f68f4fc], #reward_process #reward_header .reward_box .reward_c li span[data-v-3f68f4fc] {\n        font-size: 14px;\n}\n#reward_process #reward_header .reward_box .reward_a li[data-v-3f68f4fc]:first-child, #reward_process #reward_header .reward_box .reward_b li[data-v-3f68f4fc]:first-child, #reward_process #reward_header .reward_box .reward_c li[data-v-3f68f4fc]:first-child {\n        height: 1.625rem;\n        line-height: 1.625rem;\n        font-size: 18px;\n        font-weight: bold;\n}\n#reward_process #reward_header .reward_box .reward_a li[data-v-3f68f4fc]:last-child, #reward_process #reward_header .reward_box .reward_b li[data-v-3f68f4fc]:last-child, #reward_process #reward_header .reward_box .reward_c li[data-v-3f68f4fc]:last-child {\n        line-height: 1.5rem;\n        color: #8c8c8c;\n        font-size: 14px;\n}\n#reward_process #content[data-v-3f68f4fc] {\n  margin-top: 0.625rem;\n  background-color: #fff;\n}\n#reward_process #content .goods_box[data-v-3f68f4fc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.875rem;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_process #content .goods_box .img[data-v-3f68f4fc] {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 1.5rem;\n      overflow: hidden;\n      margin-right: 0.625rem;\n      background-color: #f8f8f8;\n}\n#reward_process #content .goods_box .img img[data-v-3f68f4fc] {\n        width: 100%;\n}\n#reward_process #content .goods_box .name[data-v-3f68f4fc] {\n      width: 17.5625rem;\n}\n#reward_process #content .goods_box .name .goods_a[data-v-3f68f4fc] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        font-size: 16px;\n        line-height: 1.75rem;\n}\n#reward_process #content .goods_box .name .goods_a span[data-v-3f68f4fc]:last-child {\n          color: #f15353;\n}\n#reward_process #content .goods_box .name .goods_b[data-v-3f68f4fc] {\n        line-height: 1.25rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        font-size: 15px;\n        color: #8c8c8c;\n}\n",""])},"M+MU":function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("Pexp"),n=r("Tg7E"),o=document.documentElement,s=document.body,i={data:function(){return{list:[],info:{},WXtitle:"",isLoadMore:!0,page:1,total_page:0}},methods:{getTitle:function(){var e=this;$http.get("plugin.share-chain.frontend.plugin-name.index",{},"兑换中...").then(function(a){1===a.result?(e.WXtitle=a.data.plugin_name,e.fun.setWXTitle(e.WXtitle)):Object(n.Toast)(a.msg)},function(e){console.log(e)})},getStoreInfo:function(){var e=this;$http.get("plugin.share-chain.frontend.process.index",{source_code:e.source_code,queue_id:e.queue_id},"加载中...").then(function(a){1===a.result?e.info=a.data:(Object(n.Toast)(a.msg),e.$router.push(e.fun.getUrl("extension",{})))},function(e){console.log(e)})},getData:function(e){var a=this;a.isLoadMore=!1,a.page=1,$http.get("plugin.share-chain.frontend.process.getList",{source_code:a.source_code,queue_id:a.queue_id},"加载中...").then(function(e){1===e.result?(a.isLoadMore=!0,a.total_page=e.data.last_page,a.total_page||(a.total_page=0),a.list=e.data.data):(Object(n.Toast)(e.msg),a.$router.push(a.fun.getUrl("extension",{})))},function(e){console.log(e)})},getMoreData:function(){var e=this;e.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.share-chain.frontend.process.getList",{source_code:e.source_code,queue_id:e.queue_id,page:e.page},"加载中...").then(function(a){if(e.isLoadMore=!0,1!==a.result)return e.page=e.page-1,void(e.isLoadMore=!1);var r=a.data.data;e.list=e.list.concat(r)},function(e){}))},getScrollTop:function(){var e=0;return o&&o.scrollTop?e=o.scrollTop:s&&(e=s.scrollTop),e},getClientHeight:function(){return s.clientHeight&&o.clientHeight?Math.min(s.clientHeight,o.clientHeight):Math.max(s.clientHeight,o.clientHeight)},getScrollHeight:function(){return Math.max(s.scrollHeight,o.scrollHeight)},handleScroll:function(){this.getScrollTop()+this.getClientHeight()+5>this.getScrollHeight()&&(this.isLoadMore?this.getMoreData():console.log("没有更多数据"))},initData:function(){this.page=1,this.total_page=0,this.isLoadMore=!0,this.list=[],this.info={}}},activated:function(){this.source_code=this.$route.params.source_code,this.queue_id=this.$route.params.queue_id,this.getTitle(),this.initData(),this.getStoreInfo(),this.getData()},components:{cTitle:t.a}},d={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{attrs:{id:"reward_process"}},[r("c-title",{attrs:{hide:!1,text:e.WXtitle,tolink:"IntegralGetRecord"}}),e._v(" "),r("div",{staticStyle:{height:"40px"}}),e._v(" "),r("div",{attrs:{id:"reward_header"}},[r("div",{staticClass:"header_box"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.info.source_thumb}})]),e._v(" "),r("div",{staticClass:"head_name"},[r("span",[e._v(e._s(e.info.source_name))])])]),e._v(" "),r("div",{staticClass:"reward_box"},[r("ul",{staticClass:"reward_a"},[r("li",[e._v(e._s(e.info.order_count))]),e._v(" "),r("li",[e._v("累计订单")])]),e._v(" "),r("ul",{staticClass:"reward_b"},[r("li",[r("span",[e._v("¥")]),e._v(e._s(e.info.amount_finish))]),e._v(" "),r("li",[e._v("累计奖励")])]),e._v(" "),r("ul",{staticClass:"reward_b"},[r("li",[r("span",[e._v("¥")]),e._v(e._s(e.info.amount_surplus))]),e._v(" "),r("li",[e._v("待奖励")])])])]),e._v(" "),r("div",{attrs:{id:"content"}},e._l(e.list,function(a,t){return r("div",{key:t,staticClass:"goods_box"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:a.has_one_member.avatar}})]),e._v(" "),r("ul",{staticClass:"name"},[r("li",{staticClass:"goods_a"},[r("span",[e._v(e._s(a.has_one_member.nickname))]),e._v(" "),r("span",[e._v("¥"+e._s(a.amount_surplus))])]),e._v(" "),r("li",{staticClass:"goods_b"},[r("span",[e._v(e._s(a.created_at))]),e._v(" "),r("span",[e._v(e._s(a.status_name))])])])])}),0)],1)},staticRenderFns:[]};var c=r("VU/8")(i,d,!1,function(e){r("sUQV")},"data-v-3f68f4fc",null);a.default=c.exports},sUQV:function(e,a,r){var t=r("9tMd");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r("rjj0")("65bb169e",t,!0,{})}});