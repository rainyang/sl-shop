webpackJsonp([393],{"3K2p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Pexp"),s=n("Tg7E"),i=(n("bm/2"),{data:function(){return{package_id:"",carousels:[],packageTitle:"",description_title:"",description_thumb:"",description_desc:"",category_idex:0,categories:[],vanShow:!1,zongjiage:0,other_packages:[],categoriesArrTop:[],categoriesheight:[],mainInfo:{name:"",thumb:"",introduce:""},limit_time_status:!1,endTime:0,endTimeStr:"",on_sale_price:0,sale_priceshow:!1,clientWidths:""}},activated:function(){this.package_id=this.$route.params.id,this.getpackage(),window.addEventListener("scroll",this.slider),this.clientWidths=document.body.clientWidth},methods:{getpackage:function(){var e=this;$http.get("plugin.goods-package.frontend.package.package.index",{package_id:this.package_id},"添加中...").then(function(t){if(console.log(t),1==t.result){e.carousels=t.data.carousels,e.packageTitle=t.data.title,e.description_thumb=t.data.description_thumb,e.description_title=t.data.description_title,e.description_desc=t.data.description_desc,e.categories=t.data.categories,e.other_packages=t.data.other_packages,e.on_sale_price=parseFloat(t.data.on_sale_price),e.limit_time_status=1==t.data.limit_time_status,e.endTime=new Date(1e3*parseInt(t.data.end_time)),e.endTimeStr=String(e.endTime);for(var n=0;n<e.categories.length;n++)for(var o=0;o<e.categories[n].goods_list.length;o++){e.$set(e.categories[n].goods_list[o],"popPrice",e.categories[n].goods_list[o].price),e.$set(e.categories[n].goods_list[o],"popThumb",""),e.$set(e.categories[n].goods_list[o],"goodsnum",1),e.$set(e.categories[n].goods_list[o],"optionsId",""),e.$set(e.categories[n].goods_list[o],"specsManage",[]),e.$set(e.categories[n].goods_list[o],"popStock",e.categories[n].goods_list[o].stock),e.$set(e.categories[n].goods_list[o],"checked",!1);for(var i=0;i<e.categories[n].goods_list[o].has_many_specs.length;i++){e.$set(e.categories[n].goods_list[o].has_many_specs[i],"speshow","");for(var a=0;a<e.categories[n].goods_list[o].has_many_specs[i].specitem.length;a++)e.$set(e.categories[n].goods_list[o].has_many_specs[i].specitem[a],"dispec",!1)}}e.mainInfo.name=t.data.share_title,e.mainInfo.thumb=t.data.share_thumb,e.mainInfo.introduce=t.data.share_desc,e.initShare()}else Object(s.Toast)(t.msg),e.$router.push(e.fun.getUrl("home",{}))}).catch(function(e){console.log(e)})},categoriesbtn:function(e){var t=e,n=this.$el.querySelector("#cate_"+t),o=this.$el.querySelector("#categoryhei").offsetHeight;this.$nextTick(function(){document.body.scrollTop=n.offsetTop-o,document.documentElement.scrollTop=n.offsetTop-o})},slider:function(e){this.categoriesArrTop=[],this.categoriesheight=[];var t=this.$el.querySelector(".content_a").offsetHeight,n=this.$el.querySelector(".content_b").offsetHeight,o=document.documentElement.scrollTop||document.body.scrollTop;this.vanShow=!(o<n+t);for(var s=0;s<this.categories.length;s++){var i=this.$el.querySelector("#cate_"+s),a=this.$el.querySelector("#categoryhei").offsetHeight;this.categoriesArrTop.push(i.offsetTop-a),this.categoriesheight.push(i.offsetHeight)}for(var d=0;d<this.categoriesArrTop.length;d++)o>=this.categoriesArrTop[d]&&this.categoriesArrTop[d]+this.categoriesheight[d]>=o&&(this.category_idex=d)},secbtn:function(e,t){var n=t,o=e.target.dataset.specid,s=e.target.dataset.cateidex,i=e.target.dataset.goodsidex,a=e.target.dataset.specsidex;if(n.dispec)return!1;this.$set(this.categories[s].goods_list[i].has_many_specs[a],"speshow",o),this.manageSpecs(this.categories[s].goods_list[i].specsManage,n,this.categories[s].goods_list[i].has_many_specs);for(var d=0;d<this.categories[s].goods_list[i].has_many_specs.length;d++)n.specid!=this.categories[s].goods_list[i].has_many_specs[d].id&&this.setGoodsSpecsStatus(s,i,this.categories[s].goods_list[i].has_many_specs[d].specitem,o,this.categories[s].goods_list[i].has_many_specs[d].speshow);this.setGoodsSpecsChangeInfo(s,i,this.categories[s].goods_list[i].specsManage),this.calculateGooss()},setGoodsSpecsStatus:function(e,t,n,o,s){for(var i=this.categories[e].goods_list[t].has_many_options,a=this.categories[e].goods_list[t].specsManage,d=(this.categories[e].goods_list[t].optionsId,[]),c=0;c<i.length;c++){-1!=i[c].specs.split("_").indexOf(o)&&d.push(i[c])}for(var r=0;r<d.length;r++)for(var g=d[r].specs.split("_"),_=0;_<g.length;_++)if(g[_]!=o&&0==d[r].stock){for(var l=0;l<n.length;l++)if(g[_]==n[l].id&&(n[l].dispec=!0,n[l].id==s)){s="","";for(var p=0;p<a.length;p++)a[p].id==n[l].id&&a.splice(p,1)}}else if(g[_]!=o&&d[r].stock>0)for(var h=0;h<n.length;h++)g[_]==n[h].id&&(n[h].dispec=!1)},manageSpecs:function(e,t,n){var o={id:t.id,specid:t.specid,title:t.title};if(e.length>0){for(var s=0;s<e.length;s++)e[s].specid==o.specid&&e.splice(s,1);e.push(o)}else e.push(o);if(e.length==n.length){for(var i=[],a=0;a<n.length;a++)for(var d=0;d<e.length;d++)if(n[a].id==e[d].specid){i.push(e[d]);break}e=i}},setGoodsSpecsChangeInfo:function(e,t,n){if(n.sort(function(e,t){return e.id-t.id}),n.length==this.categories[e].goods_list[t].has_many_specs.length){for(var o="",s=0;s<n.length;s++)o+=n[s].id+"_";o=o.substring(0,o.length-1);for(var i=0;i<this.categories[e].goods_list[t].has_many_options.length;i++)if(o==this.setGoodsSpecsBySort(this.categories[e].goods_list[t].has_many_options[i].specs)){this.categories[e].goods_list[t].popPrice=this.categories[e].goods_list[t].has_many_options[i].product_price,this.categories[e].goods_list[t].popThumb=this.fun.isTextEmpty(this.categories[e].goods_list[t].has_many_options[i].thumb)?this.categories[e].goods_list[t].thumb:this.categories[e].goods_list[t].has_many_options[i].thumb,this.categories[e].goods_list[t].popStock=this.categories[e].goods_list[t].has_many_options[i].stock,this.categories[e].goods_list[t].optionsId=this.categories[e].goods_list[t].has_many_options[i].id;break}}},setGoodsSpecsBySort:function(e){var t=e.split("_");t.sort(function(e,t){return e-t});for(var n="",o=0;o<t.length;o++)n+=t[o]+"_";return n=n.substring(0,n.length-1)},calculateGooss:function(){for(var e=0,t=0;t<this.categories.length;t++)for(var n=0;n<this.categories[t].goods_list.length;n++){if(this.categories[t].goods_list[n].checked)e+=this.categories[t].goods_list[n].goodsnum*this.categories[t].goods_list[n].popPrice}e&&this.on_sale_price&&this.sale_priceshow&&(e-=this.on_sale_price),this.zongjiage=e.toFixed(2)},addnum:function(){this.calculateGooss()},categydbtn:function(){if(this.limit_time_status){for(var e=[],t=0;t<this.categories.length;t++)for(var n=0;n<this.categories[t].goods_list.length;n++)if(this.categories[t].goods_list[n].checked){e.push(t);break}this.categories.length==e.length?this.sale_priceshow=!0:this.sale_priceshow=!1}this.calculateGooss()},submitGoods:function(){var e=!0,t={},n=[];t.package_id=this.package_id,t.goods_list=[];for(var o=0;o<this.categories.length;o++)for(var i=0;i<this.categories[o].goods_list.length;i++){var a=this.categories[o].goods_list,d={};if(1==a[i].has_option&&a[i].checked&&!a[i].optionsId&&a[i].has_many_specs.length>0)return Object(s.Toast)("请选择商品规格"),!1;a[i].checked&&(e=!1,n.push(a[i].id),d.goods_id=a[i].id,d.option_id=a[i].optionsId,d.total=a[i].goodsnum,t.goods_list.push(d))}if(console.log(t),e)return Object(s.Toast)("请选择结算商品"),!1;this.$router.push(this.fun.getUrl("goodsorder",{tag:"packagBuy",packagJson:t,cart_ids:n}))},gogoodsDetailBtn:function(e){this.$router.push(this.fun.getUrl("goods",{id:e}))},gopackgoods:function(e){this.$router.push(this.fun.getUrl("packageGoods",{id:e}))},initShare:function(){var e=this;$http.post("member.member.wxJsSdkConfig",{}).then(function(t){1===t.result&&t.data.config&&e.share(t.data)}).catch(function(e){console.log(e)})},share:function(e){var t=this;wx.config(e.config),wx.ready(function(){var n=t.fun.isTextEmpty(t.mainInfo.name)?e.share.title:t.mainInfo.name,o=document.location.href+"&share_tag=2";o=t.fun.isMid(o,e.info.uid);var i=t.fun.isTextEmpty(t.mainInfo.thumb)?e.share.icon:t.mainInfo.thumb,a=t.fun.isTextEmpty(t.mainInfo.introduce)?e.share.desc:t.mainInfo.introduce;wx.showOptionMenu(),wx.onMenuShareTimeline({title:n,link:o,imgUrl:i,success:function(){Object(s.Toast)("分享成功")},cancel:function(){Object(s.Toast)("取消分享")}}),wx.onMenuShareAppMessage({title:n,desc:a,link:o,imgUrl:i,type:"link",dataUrl:"",success:function(){Object(s.Toast)("分享成功")},cancel:function(){Object(s.Toast)("取消分享")}})})},salePriceTime:function(){this.limit_time_status=!1,this.sale_priceshow=!1,this.calculateGooss()}},components:{cTitle:o.a}}),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"package_goods"}},[n("c-title",{attrs:{hide:!1,text:e.packageTitle}}),e._v(" "),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"content_a"},[n("div",{staticClass:"banner"},[n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white",width:3==e.fun.getPhoneEnv()?375:e.clientWidths}},e._l(e.carousels,function(e,t){return n("van-swipe-item",{key:t},[n("a",{attrs:{href:e.carousel_link}},[n("img",{attrs:{src:e.carousel_thumb,alt:""}})])])}),1)],1),e._v(" "),e.limit_time_status?n("div",{staticClass:"rob-time"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"time"},[n("span",{staticClass:"text"},[e._v("截至倒计时：")]),e._v(" "),n("yd-countdown",{staticClass:"bottom_time",attrs:{slot:"right",time:e.endTimeStr,callback:e.salePriceTime},slot:"right"},[n("em",{staticStyle:{padding:"0.125rem","border-radius":"0.125rem"}},[e._v("{%d1} "),n("em",[e._v("{%d2}")])]),e._v("天\n            "),n("em",{staticStyle:{padding:"0.125rem","border-radius":"0.125rem"}},[e._v("{%h1}\n              "),n("em",[e._v("{%h2}")])]),e._v(" "),n("b",[e._v(":")]),e._v(" "),n("em",{staticStyle:{padding:"0.125rem","border-radius":"0.125rem"}},[e._v("{%m1}\n              "),n("em",[e._v("{%m2}")])]),e._v(" "),n("b",[e._v(":")]),e._v(" "),n("em",{staticStyle:{padding:"0.125rem","border-radius":"0.125rem"}},[e._v("{%s1}\n              "),n("em",[e._v("{%s2}")])])])],1)]):e._e(),e._v(" "),n("h1",[e._v(e._s(e.packageTitle))])]),e._v(" "),n("div",{staticClass:"content_b"},[n("div",{staticClass:"user"},[n("div",{staticClass:"header"},[n("img",{attrs:{src:e.description_thumb}})]),e._v(" "),n("h2",[e._v(e._s(e.description_title))])]),e._v(" "),n("p",{staticClass:"detail"},[e._v("\n        "+e._s(e.description_desc)+"\n      ")])]),e._v(" "),n("div",{staticClass:"content_nav",staticStyle:{height:"44px"}},[n("van-tabs",{class:{show:e.vanShow},style:{width:3==this.fun.getPhoneEnv()?"375px":""},attrs:{id:"categoryhei"},on:{click:e.categoriesbtn},model:{value:e.category_idex,callback:function(t){e.category_idex=t},expression:"category_idex"}},e._l(e.categories,function(e,t){return n("van-tab",{key:t,attrs:{title:e.category_names}})}),1)],1),e._v(" "),e._l(e.categories,function(t,o){return[n("div",{staticClass:"content_c",attrs:{id:"cate_"+o}},[n("h3",[n("div",{staticClass:"line-left"}),e._v("\n          "+e._s(t.category_names)+"\n          "),n("div",{staticClass:"line_right"})]),e._v(" "),n("div",{staticClass:"c_box"},e._l(t.goods_list,function(t,s){return n("div",{key:s,staticClass:"goods_box"},[n("div",{staticClass:"select"},[n("van-checkbox",{on:{change:e.categydbtn},model:{value:t.checked,callback:function(n){e.$set(t,"checked",n)},expression:"goodsitem.checked"}},[e._v(" ")])],1),e._v(" "),n("div",{staticClass:"goods_info"},[n("div",{staticClass:"info_a"},[n("div",{staticClass:"img",on:{click:function(n){return e.gogoodsDetailBtn(t.id)}}},[n("img",{attrs:{src:t.popThumb?t.popThumb:t.thumb}})]),e._v(" "),n("ul",{staticClass:"info"},[n("li",{staticClass:"name",staticStyle:{"-webkit-box-orient":"vertical"}},[e._v("\n                    "+e._s(t.title)+"\n                  ")]),e._v(" "),n("li",{staticClass:"price"},[n("span",{staticClass:"left"},[n("font",[e._v("¥")]),e._v(e._s(t.popPrice))],1),n("span",{staticClass:"right"},[e._v("¥"+e._s(t.market_price))])]),e._v(" "),n("li",{staticClass:"member"},[n("span",[e._v("数量")]),n("van-stepper",{attrs:{max:t.popStock},on:{change:e.addnum,blur:e.addnum},model:{value:t.goodsnum,callback:function(n){e.$set(t,"goodsnum",n)},expression:"goodsitem.goodsnum"}})],1)])]),e._v(" "),e._l(t.has_many_specs,function(i,a){return 1==t.has_option?[n("div",{staticClass:"spe_a"},[n("h4",[e._v(e._s(i.title))]),e._v(" "),n("div",{staticClass:"spe_box"},e._l(i.specitem,function(t,d){return n("span",{key:d,class:{cur:t.id==i.speshow,disspec:t.dispec},attrs:{"data-specid":t.id,"data-cateidex":o,"data-goodsidex":s,"data-specsidex":a},on:{click:function(n){return e.secbtn(n,t)}}},[e._v(e._s(t.title))])}),0)])]:e._e()})],2)])}),0)])]}),e._v(" "),e.other_packages.length>0?n("div",{staticClass:"content_d"},[n("h5",[e._v("其他推荐")]),e._v(" "),n("div",{staticClass:"d_box"},[e._l(e.other_packages,function(t,o){return[n("div",{staticClass:"goods_box",on:{click:function(n){return e.gopackgoods(t.id)}}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.thumb}})]),e._v(" "),n("ul",{staticClass:"info"},[n("li",{staticClass:"info_a"},[e._v(e._s(t.title))]),e._v(" "),n("li",{staticClass:"info_b"},[e._v("\n                推荐价："),n("span",[e._v("¥")]),e._v(e._s(t.price_sum)+"\n              ")])])])]})],2)]):e._e(),e._v(" "),n("div",{staticClass:"fixed"},[e.sale_priceshow&&e.on_sale_price?n("span",{staticClass:"favourable"},[e._v("已优惠¥"+e._s(e.on_sale_price))]):e._e(),e._v(" "),n("p",{staticClass:"price"},[e._v("\n        合计："),n("span",[n("font",[e._v("¥")]),e._v(e._s(e.zongjiage))],1)]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.submitGoods}},[e._v("立即购买")])])],2)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"img"},[t("img",{attrs:{src:n("N0SV"),width:"16%;"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"price"},[t("li",{staticClass:"text"},[t("span",[this._v("限时"),t("br"),this._v("购买")])])])}]};var d=n("VU/8")(i,a,!1,function(e){n("hBLz")},"data-v-56dde298",null);t.default=d.exports},"PHX+":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n#package_goods[data-v-56dde298] {\n  padding-top: 40px;\n  padding-bottom: 60px;\n}\n#package_goods #content .content_a[data-v-56dde298] {\n    background: #fff;\n}\n#package_goods #content .content_a .banner[data-v-56dde298] {\n      width: 100%;\n      height: 11.75rem;\n      overflow: hidden;\n      background: #f5f5f5;\n}\n#package_goods #content .content_a .banner img[data-v-56dde298] {\n        width: 100%;\n}\n#package_goods #content .content_a .rob-time[data-v-56dde298] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 3.0625rem;\n      background-color: #f15353;\n}\n#package_goods #content .content_a .rob-time .img[data-v-56dde298] {\n        width: 10%;\n}\n#package_goods #content .content_a .rob-time .img img[data-v-56dde298] {\n          width: 60%;\n}\n#package_goods #content .content_a .rob-time .price[data-v-56dde298] {\n        text-align: left;\n        width: 10%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        color: #fff;\n}\n#package_goods #content .content_a .rob-time .price .text[data-v-56dde298] {\n          font-size: 14px;\n          margin-top: 0.4375rem;\n          margin-left: -0.125rem;\n}\n#package_goods #content .content_a .rob-time .price .none-line[data-v-56dde298] {\n          line-height: 3.0625rem;\n          font-size: 18px;\n          margin-left: 0.625rem;\n}\n#package_goods #content .content_a .rob-time .price .middle-line[data-v-56dde298] {\n          line-height: 3.0625rem;\n          font-size: 14px;\n          text-decoration: line-through;\n          color: #dbdbdb;\n          margin-left: 0.625rem;\n}\n#package_goods #content .content_a .rob-time .time[data-v-56dde298] {\n        -webkit-box-flex: 80%;\n            -ms-flex: 80%;\n                flex: 80%;\n        text-align: left;\n        line-height: 3.0625rem;\n        padding-left: 1.25rem;\n}\n#package_goods #content .content_a .rob-time .time .text[data-v-56dde298] {\n          font-size: 14px;\n          line-height: 1.5rem;\n}\n#package_goods #content .content_a .rob-time .time span[data-v-56dde298] {\n          color: #fff;\n          font-size: 14px;\n}\n#package_goods #content .content_a .rob-time .time em[data-v-56dde298] {\n          background-color: #fff;\n          color: #333;\n}\n#package_goods #content .content_a .rob-time .time .bottom[data-v-56dde298] {\n          margin-top: 0.125rem;\n}\n#package_goods #content .content_a h1[data-v-56dde298] {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      text-align: left;\n      padding: 0 0.875rem;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      font-size: 16px;\n}\n#package_goods #content .content_b[data-v-56dde298] {\n    background: #fff;\n    margin-top: 0.625rem;\n    padding: 1rem 0.625rem;\n    margin-bottom: 0.625rem;\n}\n#package_goods #content .content_b .user[data-v-56dde298] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      position: relative;\n}\n#package_goods #content .content_b .user .header[data-v-56dde298] {\n        width: 2.625rem;\n        height: 2.625rem;\n        border-radius: 1.875rem;\n        overflow: hidden;\n        margin-right: 0.625rem;\n        background: #f5f5f5;\n}\n#package_goods #content .content_b .user .header img[data-v-56dde298] {\n          width: 100%;\n}\n#package_goods #content .content_b .user h2[data-v-56dde298] {\n        font-size: 15px;\n}\n#package_goods #content .content_b .user .describe[data-v-56dde298] {\n        position: absolute;\n        right: 0.25rem;\n        color: #8c8c8c;\n}\n#package_goods #content .content_b .user .describe i[data-v-56dde298] {\n          font-size: 1.125rem;\n          margin-left: 0.375rem;\n}\n#package_goods #content .content_b .detail[data-v-56dde298] {\n      margin-top: 0.625rem;\n      font-size: 14px;\n      color: #333;\n      text-align: left;\n      word-break: break-all;\n}\n#package_goods #content .content_nav[data-v-56dde298] {\n    background: #fff;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#package_goods #content .content_nav .nav[data-v-56dde298] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 2.625rem;\n      line-height: 2.625rem;\n}\n#package_goods #content .content_nav .nav li[data-v-56dde298] {\n        font-size: 16px;\n        margin: 0 0.75rem;\n        font-weight: bold;\n}\n#package_goods #content .content_nav .nav .cur[data-v-56dde298] {\n        color: #f15353;\n        border-bottom: solid 0.125rem #f15353;\n}\n#package_goods #content .content_c[data-v-56dde298] {\n    background: #fff;\n    margin-bottom: 0.625rem;\n}\n#package_goods #content .content_c h3[data-v-56dde298] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      font-size: 18px;\n      text-align: center;\n}\n#package_goods #content .content_c h3 .line-left[data-v-56dde298] {\n        margin-right: 0.875rem;\n        width: 3.75rem;\n        border: dashed 0.0625rem #ebebeb;\n}\n#package_goods #content .content_c h3 .line_right[data-v-56dde298] {\n        margin-left: 0.875rem;\n        width: 3.75rem;\n        border: dashed 0.0625rem #ebebeb;\n}\n#package_goods #content .content_c .c_box .goods_box[data-v-56dde298] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0.875rem 0.625rem;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#package_goods #content .content_c .c_box .goods_box .select[data-v-56dde298] {\n        width: 2.125rem;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a[data-v-56dde298] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .img[data-v-56dde298] {\n          width: 6rem;\n          height: 6rem;\n          overflow: hidden;\n          background: #f5f5f5;\n          margin-right: 0.625rem;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .img img[data-v-56dde298] {\n            width: 100%;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info[data-v-56dde298] {\n          width: 13.4375rem;\n          text-align: left;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info .name[data-v-56dde298] {\n            font-size: 16px;\n            max-height: 2.5rem;\n            line-height: 1.25rem;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info .price[data-v-56dde298] {\n            line-height: 1.875rem;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info .price .left[data-v-56dde298] {\n              color: #f15353;\n              font-size: 18px;\n              margin-right: 0.625rem;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info .price .left font[data-v-56dde298] {\n                font-size: 12px;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info .price .right[data-v-56dde298] {\n              color: #8c8c8c;\n              font-size: 12px;\n              text-decoration: line-through;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .info_a .info .member[data-v-56dde298] {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .spe_a[data-v-56dde298] {\n        margin-top: 0.625rem;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .spe_a h4[data-v-56dde298] {\n          font-size: 14px;\n          line-height: 1.875rem;\n          text-align: left;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .spe_a .spe_box[data-v-56dde298] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .spe_a .spe_box span[data-v-56dde298] {\n            padding: 0.25rem 1rem;\n            border-radius: 1.875rem;\n            font-size: 12px;\n            border: solid 0.0625rem #f15353;\n            margin: 0 0.625rem 0.5rem 0;\n            color: #666;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .spe_a .spe_box .cur[data-v-56dde298] {\n            background: #f15353;\n            color: #fff;\n}\n#package_goods #content .content_c .c_box .goods_box .goods_info .spe_a .spe_box .disspec[data-v-56dde298] {\n            opacity: 0.5;\n            border: solid #666 0.0625rem;\n}\n#package_goods #content .content_d[data-v-56dde298] {\n    margin-top: 0.625rem;\n    background: #fff;\n}\n#package_goods #content .content_d h5[data-v-56dde298] {\n      line-height: 2.5rem;\n      height: 2.5rem;\n      text-align: left;\n      font-size: 16px;\n      padding: 0 0.875rem;\n}\n#package_goods #content .content_d .d_box .goods_box[data-v-56dde298] {\n      border-bottom: solid 0.0625rem #ebebeb;\n      padding: 0.875rem 0.625rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#package_goods #content .content_d .d_box .goods_box .img[data-v-56dde298] {\n        width: 6rem;\n        height: 6rem;\n        overflow: hidden;\n        background: #f5f5f5;\n        margin-right: 0.625rem;\n}\n#package_goods #content .content_d .d_box .goods_box .img img[data-v-56dde298] {\n          width: 100%;\n}\n#package_goods #content .content_d .d_box .goods_box .info[data-v-56dde298] {\n        width: 15rem;\n        text-align: left;\n}\n#package_goods #content .content_d .d_box .goods_box .info .info_a[data-v-56dde298] {\n          font-size: 16px;\n          max-height: 2.5rem;\n          line-height: 1.25rem;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n}\n#package_goods #content .content_d .d_box .goods_box .info .info_b[data-v-56dde298] {\n          font-size: 16px;\n          color: #f15353;\n          margin-top: 0.625rem;\n}\n#package_goods #content .fixed[data-v-56dde298] {\n    position: fixed;\n    bottom: 0;\n    width: 23.4375rem;\n    height: 3.0625rem;\n    line-height: 3.0625rem;\n    background: #fff;\n    -webkit-box-shadow: 0 -0.0625rem 0.25rem rgba(0, 0, 0, 0.1);\n            box-shadow: 0 -0.0625rem 0.25rem rgba(0, 0, 0, 0.1);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n#package_goods #content .fixed .favourable[data-v-56dde298] {\n      position: absolute;\n      left: 0.625rem;\n      font-size: 14px;\n}\n#package_goods #content .fixed button[data-v-56dde298] {\n      width: 6.875rem;\n      border: none;\n      background: #f15353;\n      font-size: 18px;\n      color: #fff;\n}\n#package_goods #content .fixed .price[data-v-56dde298] {\n      padding-right: 0.625rem;\n      font-size: 14px;\n}\n#package_goods #content .fixed .price span[data-v-56dde298] {\n        font-size: 18px;\n        color: #f15353;\n}\n#package_goods #content .fixed .price span font[data-v-56dde298] {\n          font-size: 14px;\n}\n#package_goods #content .van-tabs--line.show[data-v-56dde298] {\n    position: fixed;\n    top: 0;\n    z-index: 99;\n    width: 100%;\n}\n",""])},hBLz:function(e,t,n){var o=n("PHX+");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("2686744b",o,!0,{})}});