webpackJsonp([471],{"2veY":function(t,a,i){var e=i("ocOf");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("9d5b56c2",e,!0,{})},EJ3u:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Pexp"),s=i("Tg7E"),n=document.documentElement,l=document.body,c={data:function(){return{activeName:"first",receive_point:"0.00",used_point:"0.00",validity_point:0,dataList:[],statuNum:0,isLoadMore:!0,page:1,total_page:0,integral:window.localStorage.integral}},created:function(){},methods:{handleClick:function(t,a){this.dataList=[],this.isLoadMore=!0,0===Number(t)?this.getData():this.getData(Number(t)-1)},getData:function(t){var a=this;a.statuNum=t,a.page=1,$http.post("plugin.point-activity.Frontend.Modules.Activity.Controllers.activity-receive-records.index",{activity_id:a.id,page_id:1,status:t},"加载中").then(function(t){if(1===t.result){var i=t.data;a.receive_point=i.receive_point,a.used_point=i.used_point,a.validity_point=i.validity_point,a.total_page=i.records.last_page,a.total_page||(a.total_page=0),a.dataList=i.records.data}else s.MessageBox.alert(t.msg)},function(t){})},getScrollTop:function(){var t=0;return n&&n.scrollTop?t=n.scrollTop:l&&(t=l.scrollTop),t},getClientHeight:function(){return l.clientHeight&&n.clientHeight?Math.min(l.clientHeight,n.clientHeight):Math.max(l.clientHeight,n.clientHeight)},getScrollHeight:function(){return Math.max(l.scrollHeight,n.scrollHeight)},handleScroll:function(){this.getScrollTop()+this.getClientHeight()+5>this.getScrollHeight()&&(this.isLoadMore?this.getMoreData():console.log("没有更多数据"))},getMoreData:function(){var t=this;this.page>=this.total_page||(this.page=this.page+1,$http.post("plugin.point-activity.Frontend.Modules.Activity.Controllers.activity-receive-records.index",{activity_id:t.id,page_id:t.page,status:t.statuNum},"加载中...").then(function(a){if(1!==a.result)return t.page=t.page-1,void(t.isLoadMore=!1);var i=a.data.records.data;t.dataList=t.dataList.concat(i)},function(t){}))},initData:function(){this.activeName="first",this.page=1,this.total_page=0,this.isLoadMore=!0,this.dataList=[]}},activated:function(){this.id=this.$route.params.activity_id,this.id?(this.initData(),this.getData(),window.addEventListener("scroll",this.handleScroll)):this.$router.push(this.fun.getUrl("IntegralActivity"))},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},components:{cTitle:e.a}},o={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"get_record"}},[i("c-title",{attrs:{hide:!1,text:"赠送记录"}}),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("div",{attrs:{id:"content"}},[i("ul",{staticClass:"get_state"},[i("li",[i("span",[t._v("已领取")]),t._v(" "),i("span",[t._v(t._s(t.receive_point))])]),t._v(" "),i("li",[i("span",[t._v("已使用")]),t._v(" "),i("span",[t._v(t._s(t.used_point))])]),t._v(" "),i("li",[i("span",[t._v("已过期")]),t._v(" "),i("span",[t._v(t._s(t.validity_point))])])]),t._v(" "),i("div",{staticClass:"list_box"},[i("mt-navbar",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[i("mt-tab-item",{attrs:{id:"first"},nativeOn:{click:function(a){return t.handleClick("0")}}},[t._v("全部")]),t._v(" "),i("mt-tab-item",{attrs:{id:"second"},nativeOn:{click:function(a){return t.handleClick("1")}}},[t._v("已领取")]),t._v(" "),i("mt-tab-item",{attrs:{id:"third"},nativeOn:{click:function(a){return t.handleClick("2")}}},[t._v("使用中")]),t._v(" "),i("mt-tab-item",{attrs:{id:"fourth"},nativeOn:{click:function(a){return t.handleClick("3")}}},[t._v("已使用")]),t._v(" "),i("mt-tab-item",{attrs:{id:"five"},nativeOn:{click:function(a){return t.handleClick("4")}}},[t._v("已过期")])],1),t._v(" "),i("mt-tab-container",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[i("mt-tab-container-item",{attrs:{id:"first"}},[i("div",{staticClass:"get_box"},t._l(t.dataList,function(a,e){return i("div",{key:e,staticClass:"list"},[i("div",{staticClass:"state_a"},[i("ul",{staticClass:"state"},[i("li",{staticClass:"left"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:a.avatar}})]),t._v(" "),i("span",[t._v(t._s(a.nickname))])]),t._v(" "),i("li",{staticClass:"right"},[t._v(t._s(a.status_name))])])]),t._v(" "),i("ul",{staticClass:"state_b"},[i("li",[i("span",[t._v("已使用：")]),t._v(" "),i("span",[t._v(t._s(a.used))])]),t._v(" "),i("li",[i("span",[t._v("剩余：")]),t._v(" "),i("span",[t._v(t._s(a.stock))])])]),t._v(" "),i("div",{staticClass:"time"},[i("span",[t._v(t._s(a.created_at))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:a.validity_at,expression:"list.validity_at"}]},[t._v("有效期至："+t._s(a.validity_at))])])])}),0)]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"two"}},[i("div",{staticClass:"get_box"},t._l(t.dataList,function(a,e){return i("div",{key:e,staticClass:"list"},[i("div",{staticClass:"state_a"},[i("ul",{staticClass:"state"},[i("li",{staticClass:"left"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:a.avatar}})]),t._v(" "),i("span",[t._v(t._s(a.nickname))])]),t._v(" "),i("li",{staticClass:"right"},[t._v(t._s(a.status_name))])])]),t._v(" "),i("ul",{staticClass:"state_b"},[i("li",[i("span"),t._v(" "),i("span")]),t._v(" "),i("li",[i("span"),t._v(" "),i("span",[t._v("+"+t._s(a.stock))])])]),t._v(" "),i("div",{staticClass:"time"},[i("span",[t._v(t._s(a.created_at))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:a.validity_at,expression:"list.validity_at"}]},[t._v("有效期至："+t._s(a.validity_at))])])])}),0)]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"three"}},[i("div",{staticClass:"get_box"},t._l(t.dataList,function(a,e){return i("div",{key:e,staticClass:"list"},[i("div",{staticClass:"state_a"},[i("ul",{staticClass:"state"},[i("li",{staticClass:"left"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:a.avatar}})]),t._v(" "),i("span",[t._v(t._s(a.nickname))])]),t._v(" "),i("li",{staticClass:"right"},[t._v(t._s(a.status_name))])])]),t._v(" "),i("ul",{staticClass:"state_b"},[i("li",[i("span",[t._v("已使用：")]),t._v(" "),i("span",[t._v(t._s(a.used))])]),t._v(" "),i("li",[i("span",[t._v("剩余：")]),t._v(" "),i("span",[t._v(t._s(a.stock))])])]),t._v(" "),i("div",{staticClass:"time"},[i("span",[t._v(t._s(a.created_at))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:a.validity_at,expression:"list.validity_at"}]},[t._v("有效期至："+t._s(a.validity_at))])])])}),0)]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"four"}},[i("div",{staticClass:"get_box"},t._l(t.dataList,function(a,e){return i("div",{key:e,staticClass:"list"},[i("div",{staticClass:"state_a"},[i("ul",{staticClass:"state"},[i("li",{staticClass:"left"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:a.avatar}})]),t._v(" "),i("span",[t._v(t._s(a.nickname))])]),t._v(" "),i("li",{staticClass:"right"},[t._v(t._s(a.status_name))])])]),t._v(" "),i("ul",{staticClass:"state_b"},[i("li",[i("span"),t._v(" "),i("span")]),t._v(" "),i("li",[i("span"),t._v(" "),i("span",[t._v("-"+t._s(a.used))])])]),t._v(" "),i("div",{staticClass:"time"},[i("span",[t._v(t._s(a.created_at))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:a.validity_at,expression:"list.validity_at"}]},[t._v("有效期至："+t._s(a.validity_at))])])])}),0)]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"five"}},[i("div",{staticClass:"get_box"},t._l(t.dataList,function(a,e){return i("div",{key:e,staticClass:"list"},[i("div",{staticClass:"state_a"},[i("ul",{staticClass:"state"},[i("li",{staticClass:"left"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:a.avatar}})]),t._v(" "),i("span",[t._v(t._s(a.nickname))])]),t._v(" "),i("li",{staticClass:"right"},[t._v(t._s(a.status_name))])])]),t._v(" "),i("ul",{staticClass:"state_b"},[i("li",[i("span"),t._v(" "),i("span")]),t._v(" "),i("li",[i("span"),t._v(" "),i("span",[t._v("-"+t._s(a.used))])])]),t._v(" "),i("div",{staticClass:"time"},[i("span",[t._v(t._s(a.created_at))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:a.validity_at,expression:"list.validity_at"}]},[t._v("有效期至："+t._s(a.validity_at))])])])}),0)])],1)],1)])],1)},staticRenderFns:[]};var r=i("VU/8")(c,o,!1,function(t){i("2veY")},"data-v-370c3112",null);a.default=r.exports},ocOf:function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#get_record #content .get_state[data-v-370c3112] {\n  margin: 0.625rem 0;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1rem 0;\n}\n#get_record #content .get_state li[data-v-370c3112] {\n    width: 33.33%;\n    border-right: solid 0.0625rem #ebebeb;\n    font-size: 20px;\n}\n#get_record #content .get_state li span[data-v-370c3112] {\n      display: block;\n      line-height: 1.5rem;\n}\n#get_record #content .get_state li span[data-v-370c3112]:first-child {\n      color: #8c8c8c;\n      font-size: 14px;\n}\n#get_record #content .get_state li[data-v-370c3112]:last-child {\n    border: none;\n}\n#get_record #content .list_box .get_box .list[data-v-370c3112] {\n  background: #fff;\n  margin-bottom: 0.625rem;\n}\n#get_record #content .list_box .get_box .list .state_a[data-v-370c3112] {\n    padding: 0.625rem 0;\n}\n#get_record #content .list_box .get_box .list .state_a .get[data-v-370c3112] {\n      display: block;\n      text-align: right;\n      color: #f15353;\n      font-size: 16px;\n      padding-right: 0.875rem;\n}\n#get_record #content .list_box .get_box .list .state_a .state[data-v-370c3112] {\n      padding: 0 0.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-size: 14px;\n}\n#get_record #content .list_box .get_box .list .state_a .state .left[data-v-370c3112] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        line-height: 2.25rem;\n}\n#get_record #content .list_box .get_box .list .state_a .state .left .img[data-v-370c3112] {\n          width: 2.25rem;\n          height: 2.25rem;\n          border-radius: 1.125rem;\n          margin-right: 0.625rem;\n          overflow: hidden;\n}\n#get_record #content .list_box .get_box .list .state_a .state .left .img img[data-v-370c3112] {\n            width: 100%;\n}\n#get_record #content .list_box .get_box .list .state_a .state .right[data-v-370c3112] {\n        line-height: 2.25rem;\n}\n#get_record #content .list_box .get_box .list .state_b[data-v-370c3112] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 14px;\n    padding: 0 0.875rem;\n    margin-bottom: 0.625rem;\n}\n#get_record #content .list_box .get_box .list .state_b li span[data-v-370c3112]:last-child {\n      color: #f15353;\n      font-size: 16px;\n}\n#get_record #content .list_box .get_box .list .time[data-v-370c3112] {\n    border-top: solid 0.0625rem #ebebeb;\n    height: 2.25rem;\n    line-height: 2.25rem;\n    padding: 0 0.875rem;\n    font-size: 12px;\n    color: #8c8c8c;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n",""])}});