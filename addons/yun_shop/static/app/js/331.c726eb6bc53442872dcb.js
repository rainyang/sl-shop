webpackJsonp([331],{"0URh":function(t,o,e){var a=e("yTVH");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("cf848d8e",a,!0,{})},E0oK:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("mvHQ"),n=e.n(a),i=(e("SJI6"),e("DaKy")),s=e("Tg7E"),r=e("Pexp"),d={data:function(){return{title:"搜索",inputs:"",amout:!1,order_by:"",order_field:"",id:"",stores:[],loading:!1,allLoaded:!1,goload:!0,isLoadMore:!0,page:1,total_page:0,point:{}}},activated:function(){this.initData(),this.getStoresByCategoryId()},mounted:function(){},methods:{goback:function(){this.$router.go(-1)},getStoresByCategoryId:function(){var t=this;if(this.myLocation=this.$store.state.o2oLocation,this.myLocation.point)t.getStoresByCategoryIdLngAndLat(this.myLocation);else{var o=function(o){o.position,o.accuracy,o.location_type,o.info,o.formattedAddress,n()(o.addressComponent,null,4);var e=o.position.toString().split(",");t.city=t.fun.isTextEmpty(o.addressComponent.city)?o.addressComponent.province:o.addressComponent.city,t.point={lat:e[1],lng:e[0],city:t.city},t.address=o.formattedAddress,t.title=o.formattedAddress,t.city=t.fun.isTextEmpty(o.addressComponent.city)?o.addressComponent.province:o.addressComponent.city;var a={address:o.formattedAddress,city:t.city,title:o.formattedAddress,point:t.point};this.myLocation=a,t.getStoresByCategoryIdLngAndLat(this.myLocation)},e=function(t){console.log(t)},a=new AMap.Map("iCenter");a.plugin("AMap.Geolocation",function(){var t=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"LB",buttonOffset:new AMap.Pixel(10,20),showMarker:!0,showCircle:!0,panToLocation:!0,zoomToAccuracy:!0});a.addControl(t),t.getCurrentPosition(),AMap.event.addListener(t,"complete",o),AMap.event.addListener(t,"error",e)})}},getStoresByCategoryIdLngAndLat:function(t){var o=this,e={category_id:this.id,lng:t.point.lng,lat:t.point.lat,city_name:t.city,page:this.page};$http.get("plugin.store-cashier.frontend.store.store.get-store-list-by-category-id-to-page",e,"").then(function(t){1==t.result?(console.log("store",t),o.stores=t.data.data,t.data.last_page?o.total_page=t.data.last_page:t.data.lastPage&&(o.total_page=t.data.lastPage)):(o.stores=[],Object(s.Toast)(t.msg))}).catch(function(t){console.log(t)})},getMoreData:function(t){var o=this;if(console.log(t),this.page!=this.total_page){if(this.page>=this.total_page)return o.loading=!0,void(o.allLoaded=!0);this.page=this.page+1;var e={category_id:this.id,lng:t.point.lng,lat:t.point.lat,city_name:t.city,page:this.page};$http.get("plugin.store-cashier.frontend.store.store.get-store-list-by-category-id-to-page",e,"正在获取更多...").then(function(t){if(1!=t.result)return o.page=o.page-1,o.loading=!0,o.allLoaded=!0,void(o.isLoadMore=!1);o.loading=!1,o.allLoaded=!1,o.stores=o.stores.concat(t.data.data)},function(t){})}},loadTop:function(){this.initData(),this.getStoresByCategoryId(),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){this.isLoadMore?(this.getMoreData(this.myLocation),this.$refs.loadmore.onBottomLoaded()):console.log("没有更多数据")},changList:function(){this.getMoreData(this.myLocation)},initData:function(){this.id=this.$route.params.id,this.stores=[],this.page=1,this.goload=!0,this.total_page=0,this.loading=!0,this.allLoaded=!1,this.isLoadMore=!0,this.point={}}},components:{cStoreList:i.a,cTitle:r.a}},l={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"search",transition:"fadeInLeft"}},[e("c-title",{attrs:{hide:!1,text:"搜索"}}),t._v(" "),e("div",{staticStyle:{height:"40px",display:"block"}}),t._v(" "),e("div",{staticClass:"uou",class:{mout:t.amout},attrs:{id:"soso"}},[t.goload?e("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,bottomPullText:"",bottomDropText:"下拉加载...",bottomLoadingText:"",autoFill:!0,id:"olis"}},[e("c-storeList",{attrs:{stores:t.stores,text:"搜索店铺",page:t.page,totalPage:t.total_page},on:{changList:t.changList}})],1):t._e()],1),t._v(" "),e("div",{staticStyle:{height:"3.4375rem",display:"block"}})],1)},staticRenderFns:[]};var c=e("VU/8")(d,l,!1,function(t){e("0URh")},"data-v-6e498cd2",null);o.default=c.exports},yTVH:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#search .osll[data-v-6e498cd2] {\n  min-height: 100vh;\n  overflow: scroll;\n}\n#search .uou[data-v-6e498cd2] {\n  z-index: 99;\n  top: 0px;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n}\n#search .mout[data-v-6e498cd2] {\n  top: -2.25rem;\n}\n.search[data-v-6e498cd2] {\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 0.0625rem solid #f5f5f5;\n}\n.search .el-button.el-button--default[data-v-6e498cd2] {\n    float: left;\n    width: 10%;\n    border: none;\n    padding-top: 1rem;\n}\n.search .el-input.el-input-group.el-input-group--append[data-v-6e498cd2] {\n    float: left;\n    width: 80%;\n    margin-left: 2%;\n    height: 2.8125rem;\n}\n.search .el-input-group__append .el-button.el-button--default[data-v-6e498cd2] {\n    background: #f5f5f5;\n    padding-top: 0.5625rem;\n    line-height: 1rem;\n    padding-right: 1.8125rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.search .el-input.el-input-group.el-input-group--append .el-input-group__append[data-v-6e498cd2] {\n    background: #f5f5f5;\n}\n.search .el-col-1[data-v-6e498cd2] {\n    margin: 0.75rem 0rem;\n    color: #666;\n    font-size: 16px;\n}\n",""])}});