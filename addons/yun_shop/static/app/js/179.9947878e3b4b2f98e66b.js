webpackJsonp([179],{"4U57":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#introduction[data-v-e4e5b8de] {\n  padding-top: 40px;\n  background: #fff;\n  padding-bottom: 2.5rem;\n}\n#introduction #content .content_a[data-v-e4e5b8de] {\n    margin: 0.625rem;\n    background: #f5f5f5;\n    border-radius: 0.375rem;\n    padding: 0.625rem;\n}\n#introduction #content .content_a .company_info li[data-v-e4e5b8de] {\n      text-align: left;\n      color: #8c8c8c;\n      font-size: 14px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#introduction #content .content_a .company_info li i[data-v-e4e5b8de] {\n        font-size: 1.5rem;\n        color: #999;\n        line-height: 1.25rem;\n}\n#introduction #content .content_a .company_info li h1[data-v-e4e5b8de] {\n        font-size: 16px;\n        line-height: 2.25rem;\n        color: #333;\n}\n#introduction #content .content_a .company_info li[data-v-e4e5b8de]:last-child {\n      line-height: 1.25rem;\n}\n#introduction #content .content_b[data-v-e4e5b8de], #introduction #content .content_c[data-v-e4e5b8de] {\n    margin-top: 0.625rem;\n}\n#introduction #content .content_b h2[data-v-e4e5b8de], #introduction #content .content_c h2[data-v-e4e5b8de] {\n      font-size: 16px;\n      line-height: 1.875rem;\n      text-align: left;\n      padding: 0 0.625rem;\n}\n#introduction #content .content_b .list[data-v-e4e5b8de], #introduction #content .content_c .list[data-v-e4e5b8de] {\n      margin-top: 0.625rem;\n      padding: 0 0.875rem;\n}\n#introduction #content .content_b .list li[data-v-e4e5b8de], #introduction #content .content_c .list li[data-v-e4e5b8de] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 14px;\n        text-align: left;\n        line-height: 1.625rem;\n}\n#introduction #content .content_b .list li span[data-v-e4e5b8de]:first-child, #introduction #content .content_c .list li span[data-v-e4e5b8de]:first-child {\n          width: 6.25rem;\n          color: #8c8c8c;\n          display: block;\n}\n#introduction #content .content_b .list li span[data-v-e4e5b8de]:last-child, #introduction #content .content_c .list li span[data-v-e4e5b8de]:last-child {\n          width: 15.4375rem;\n}\n#introduction #content .content_d[data-v-e4e5b8de] {\n    margin-top: 0.625rem;\n    text-align: left;\n}\n#introduction #content .content_d h3[data-v-e4e5b8de] {\n      font-size: 16px;\n      line-height: 1.875rem;\n      padding: 0 0.625rem;\n}\n#introduction #content .content_d .text[data-v-e4e5b8de] {\n      margin: 0.625rem 0.875rem;\n      border: solid 0.0625rem #ebebeb;\n      padding: 0.625rem;\n}\n",""])},Aobx:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Pexp"),a=e("Tg7E"),o={data:function(){return{asset_detail:{},industry_detail:{},lang:{}}},activated:function(){this.asset_detail={},this.asset_id=this.$route.params.asset_id,this.getLang(),this.getData()},methods:{getLang:function(){var t=this;$http.get("plugin.asset.Frontend.Controllers.Lang.index",{},"加载中...").then(function(n){1===n.result?t.lang=n.data:Object(a.Toast)(n.msg)}).catch(function(t){console.log(t)})},getData:function(){var t=this;this.isLoadMore=!1,this.page=1,$http.get("plugin.asset.Frontend.Modules.Capital.Controllers.detail.index",{asset_id:this.asset_id},"加载中...").then(function(n){1===n.result?(t.asset_detail=n.data.asset_detail,t.industry_detail=n.data.industry_detail):Object(a.Toast)(n.msg)}).catch(function(t){console.log(t)})}},components:{cTitle:i.a}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"introduction"}},[e("c-title",{attrs:{hide:!1,text:"简况"}}),t._v(" "),e("div",{attrs:{id:"content"}},[e("div",{staticClass:"content_a"},[e("ul",{staticClass:"company_info"},[e("li",[e("h1",[t._v(t._s(t.industry_detail.asset_name))])]),t._v(" "),e("li",[e("i",{staticClass:"iconfont icon-seller-home"}),t._v(t._s(t.industry_detail.industry_name))]),t._v(" "),e("li",[e("i",{staticClass:"iconfont icon-seller-position"}),t._v(t._s(t.industry_detail.industry_address))])])]),t._v(" "),e("div",{staticClass:"content_b"},[e("h2",[t._v("基本信息")]),t._v(" "),e("ul",{staticClass:"list"},[e("li",[e("span",[t._v("所属分类：")]),t._v(" "),e("span",[t._v(t._s(t.asset_detail.category_name))])]),t._v(" "),e("li",[e("span",[t._v("标签：")]),t._v(" "),e("span",[t._v(t._s(t.asset_detail.asset_label))])])])]),t._v(" "),t.asset_detail.asset_property&&t.asset_detail.asset_property.length>0?e("div",{staticClass:"content_c"},[e("h2",[t._v(t._s(t.lang.capital_name)+"属性")]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.asset_detail.asset_property,function(n,i){return e("li",{key:i},[e("span",[t._v(t._s(n.title)+"：")]),t._v(" "),e("span",[t._v(t._s(n.value))])])}),0)]):t._e(),t._v(" "),t.asset_detail.asset_content?e("div",{staticClass:"content_d"},[e("h3",[t._v(t._s(t.lang.capital_name)+"详情")]),t._v(" "),e("div",{staticClass:"text",domProps:{innerHTML:t._s(t.asset_detail.asset_content)}})]):t._e()])],1)},staticRenderFns:[]};var d=e("VU/8")(o,s,!1,function(t){e("WDHC")},"data-v-e4e5b8de",null);n.default=d.exports},WDHC:function(t,n,e){var i=e("4U57");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("5048c7a0",i,!0,{})}});