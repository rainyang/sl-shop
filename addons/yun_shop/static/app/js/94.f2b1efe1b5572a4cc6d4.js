webpackJsonp([94],{"1CZy":function(e,t,a){var o=a("b6nx");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("2e973df0",o,!0,{})},"33xe":function(e,t,a){(function(t){const o=a("eRdt");var i,n;e.exports=(o.isatty(1)&&o.isatty(2)?t.stdout.getWindowSize?(i=t.stdout.getWindowSize(1)[0],n=t.stdout.getWindowSize(1)[1]):o.getWindowSize?(i=o.getWindowSize()[1],n=o.getWindowSize()[0]):t.stdout.columns&&t.stdout.rows&&(n=t.stdout.columns,i=t.stdout.rows):new Error("Error: could not get window size with tty or process.stdout"),{height:n,width:i})}).call(t,a("W2nU"))},ABl3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("bOdI"),i=a.n(o),n=a("fZjL"),s=a.n(n),r=a("Pexp"),d=(a("33xe"),a("Tg7E")),l=document.createElement("canvas"),c=l.getContext("2d"),p={components:{cTitle:r.a},data:function(){return{photosize:4194304,goodsHandle_1:{},dateshow_1:!1,regional:"请选择商品分类",onConfirmbtnIndex:[],columns:[{values:[],className:"column1",defaultIndex:0},{values:[],className:"column2",defaultIndex:0},{values:[],className:"column3",defaultIndex:0}],cargon_data:{title:"",sku:"",thumb:"",price:"",market_price:"",cost_price:"",stock:""},imageUrl:"",uploadUrl:"",fileList1:[],fileList2:[],upNumMax:0,options:[],selectedOptions3:[],sectionOptions:[],jumpState:!0,show1:!1,show2:!1,checkbox3:["2"],radio1:1,radio:"1",list:["a","b","c"],result:["a","b"]}},activated:function(){this.init(),this.urlUp(),this.getClassifyJson()},methods:{init:function(){for(var e in this.cargon_data)this.cargon_data[e]="";this.imageUrl="",this.selectedOptions3=[],this.fileList1=[],this.fileList2=[],this.upNumMax=0,this.regional="请选择商品分类"},getGoodsJson:function(){var e=this,t="",a={};"store"==e.$route.params.store?(t="plugin.store-cashier.frontend.store.goods.get-goods-detail",a={goods_id:e.$route.params.goods_id}):"supplier"==e.$route.params.store&&(t="plugin.supplier.frontend.goods.goods-detail",a={goods_id:e.$route.params.goods_id}),$http.post(t,a).then(function(t){if(1===t.result){if(e.selectedOptions3=[],e.selectedOptions3=[Number(t.data.category_ids.parentid),Number(t.data.category_ids.childid),Number(t.data.category_ids.thirdid)],Number(t.data.category_ids.parentid)){var a=[],o=0,i=0;if(e.options.forEach(function(e,i,n){e.id==t.data.category_ids.parentid&&(o=i,a.push(e.label))}),e.columns[0].defaultIndex=o,Number(t.data.category_ids.childid)&&(e.options[o].children.forEach(function(e,o,n){e.id==t.data.category_ids.childid&&(i=o,a.push(e.label))}),a.length>0&&(e.columns[1].values=e.goodsHandle_1[a[0]].map(function(e,t){return s()(e)[0]})),e.columns[1].defaultIndex=i,Number(t.data.category_ids.thirdid))){e.options[o].children[i].children.forEach(function(e,o,i){e.id==t.data.category_ids.thirdid&&(o,a.push(e.label))});var n=[];if(a.length>0)for(var r=0;r<e.goodsHandle_1[a[0]].length;r++)s()(e.goodsHandle_1[a[0]][r])[0]==a[1]&&(n=e.goodsHandle_1[a[0]][r][a[1]]);e.columns[2].values=n,e.columns[2].defaultIndex=i}e.regional=a.join("/")}if(e.cargon_data.title=t.data.title.replace(/&#60;/g,"<").replace(/&#062;/g,">").replace(/&#038;/g,"&").replace(/&#034;/g,'"').replace(/&#039;/g,"'"),e.cargon_data.sku=t.data.sku,e.imageUrl=t.data.thumb,e.cargon_data.thumb=t.data.thumb,null!=t.data.thumb_url&&""!=t.data.thumb_url){e.fileList1=[],e.fileList2=[],e.upNumMax=t.data.thumb_url.length;for(var d=0;d<t.data.thumb_url.length;d++)e.fileList1.push({url:t.data.thumb_url[d]}),e.fileList2.push({url:t.data.thumb_url[d]})}e.cargon_data.price=t.data.price,e.cargon_data.market_price=t.data.market_price,e.cargon_data.cost_price=t.data.cost_price,e.cargon_data.stock=t.data.stock}else e.$notify(t.msg)},function(e){console.log(e)})},getClassifyJson:function(){var e=this;if("store"==e.$route.params.store){var t={store_id:e.$route.params.store_id};$http.get("plugin.store-cashier.frontend.store.goods-category.get-category-by-store-id",t).then(function(t){if(1==t.result){e.sectionOptions=[];for(var a=0;a<t.data.list.length;a++){e.sectionOptions.push({id:t.data.list[a].id,value:t.data.list[a].id,label:t.data.list[a].name,children:[]});for(var o=0;o<t.data.list[a].childrens.length;o++)e.sectionOptions[a].children.push({id:t.data.list[a].childrens[o].id,value:t.data.list[a].childrens[o].id,label:t.data.list[a].childrens[o].name})}console.log("---option----",e.sectionOptions),e.options=e.sectionOptions,e.goodsHandle_1=e.goodsHandlefunction_1(e.options)}else e.$notify(t.msg);e.getGoodsJson()},function(e){console.log(e)})}else if("supplier"==e.$route.params.store){$http.post("plugin.supplier.frontend.goods.get-category",{}).then(function(t){if(1==t.result){e.sectionOptions=[];for(var a=0;a<t.data.length;a++)if(e.sectionOptions.push({id:t.data[a].id,value:t.data[a].id,label:t.data[a].name,children:[]}),!t.data[a].childrens||t.data[a].childrens.length<1);else{e.sectionOptions[a].children=[];for(var o=0;o<t.data[a].childrens.length;o++)if(e.sectionOptions[a].children.push({id:t.data[a].childrens[o].id,value:t.data[a].childrens[o].id,label:t.data[a].childrens[o].name,children:[]}),!t.data[a].childrens[o].childrens||t.data[a].childrens[o].childrens.length<1);else{e.sectionOptions[a].children[o].children=[];for(var i=0;i<t.data[a].childrens[o].childrens.length;i++)e.sectionOptions[a].children[o].children.push({id:t.data[a].childrens[o].childrens[i].id,value:t.data[a].childrens[o].childrens[i].id,label:t.data[a].childrens[o].childrens[i].name})}}console.log("---option----",e.sectionOptions),e.options=e.sectionOptions,e.goodsHandle_1=e.goodsHandlefunction_1(e.options)}else e.$notify(t.msg);e.getGoodsJson()},function(e){console.log(e)})}},classifyChange:function(e){this.selectedOptions3=e},confirmationEditor:function(){var e=this,t=this;if(t.jumpEvent(),1==t.jumpState){var a=[];if(0!=t.fileList1.length)for(var o=0;o<t.fileList1.length;o++)a.push(t.fileList1[o].url);else a=[];var i="",n={};if("store"==t.$route.params.store)i="plugin.store-cashier.frontend.store.goods.edit-goods",n={store_id:t.$route.params.store_id,category_pid:t.selectedOptions3[0],category_cid:t.selectedOptions3[1],goods_id:t.$route.params.goods_id,title:t.cargon_data.title,thumb:t.cargon_data.thumb,thumb_url:a,cost_price:t.cargon_data.cost_price,market_price:t.cargon_data.market_price,price:t.cargon_data.price,sku:t.cargon_data.sku,stock:t.cargon_data.stock};else if("supplier"==t.$route.params.store){if(i="plugin.supplier.frontend.goods.edit-goods",n={goods_id:t.$route.params.goods_id,title:t.cargon_data.title,thumb:t.cargon_data.thumb,thumb_url:a,cost_price:t.cargon_data.cost_price,market_price:t.cargon_data.market_price,price:t.cargon_data.price,sku:t.cargon_data.sku,stock:t.cargon_data.stock},t.selectedOptions3.length<2)return document.documentElement.scrollTop=0,document.body.scrollTop=0,this.$refs.classify.className="classify",setTimeout(function(){e.$refs.classify.className=""},3e3),void t.$notify("必须选择二级分类");t.selectedOptions3.length<3?(n.category_pid=t.selectedOptions3[0],n.category_cid=t.selectedOptions3[1]):(n.category_pid=t.selectedOptions3[0],n.category_cid=t.selectedOptions3[1],n.category_tid=t.selectedOptions3[2])}$http.post(i,n).then(function(e){1===e.result?(t.$router.go(-1),t.$notify({background:"#f0f9eb",message:"修改成功",color:"#67c23a"})):t.$notify(e.msg)},function(e){console.log(e)})}else t.$notify({background:"#fef0f0",message:"商品信息不完整",color:"#f56c6c"})},jumpEvent:function(){for(var e in this.jumpState=!0,this.cargon_data)""==this.cargon_data[e]&&(this.jumpState=!1);0==this.selectedOptions3.length&&(this.jumpState=!1),""==this.imageUrl&&(this.jumpState=!1),console.log("--state----",this.jumpState)},urlUp:function(){"store"==this.$route.params.store?this.uploadUrl=this.fun.getRealUrl("plugin.store-cashier.frontend.store.goods.upload",{}):"supplier"==this.$route.params.store&&(this.uploadUrl=this.fun.getRealUrl("plugin.supplier.frontend.goods.upload",{}))},handleStoreSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),1==e.result?this.cargon_data.thumb=e.data.img:Object(d.Toast)(e.msg)},beforeUpload:function(e){var t="image/png"===e.type||"image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$notify("上传头像图片只能是 JPG或PNG 格式!"),a||this.$notify("上传头像图片大小不能超过 2MB!"),t&&a},handleAptiSuccess:function(e,t){1==e.result?this.fileList1.push({url:e.data.img}):Object(d.Toast)(e.msg)},handleAptiRemove:function(e,t){this.upNumMax=t.length;var a=e.url;if(a){var o="";this.fileList1.forEach(function(e,t,i){e.url==a&&(o=t)}),this.fileList1.splice(o,1)}},occlusion:function(){this.$notify({background:"#fef0f0",message:"图片数量已达到上限",color:"#f56c6c"})},handleChange:function(e,t){this.upNumMax=t.length},imgPreview:function(e,t){var a=this;if(e&&window.FileReader&&/^image/.test(e.type)){var o=new FileReader;o.readAsDataURL(e),o.onloadend=function(){var o=this.result,i=new Image;i.src=o,i.onload=function(){var o=this.width,n=this.height,s=o,r=n;(o>400||n>400)&&(o/n>1?(s=400,r=Math.round(n/o*400)):(r=400,s=Math.round(o/n*400))),l.width=s,l.height=r,c.clearRect(0,0,s,r),c.drawImage(i,0,0,s,r),l.toBlob(function(e){console.log(e),1===t?a.onRead(e,!0):a.onRead_1(e,!0)},e.type||"image/png")}}}},onRead:function(e,t){if(!0!==t&&e.file.size>this.photosize)return this.imgPreview(e.file,1),!1;var a=new FormData;!0===t?a.append("file",e):a.append("file",e.file);var o=this;axios.post(this.uploadUrl,a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(a){var i=a.data;1==i.result?(o.imageUrl=!0===t?URL.createObjectURL(e):URL.createObjectURL(e.file),o.cargon_data.thumb=i.data.img):Object(d.Toast)(i.msg)}).catch(function(e){console.log(e)})},onRead_1:function(e,t){if(!0!==t&&e.file.size>this.photosize)return this.imgPreview(e.file,2),!1;var a=this,o=new FormData;!0===t?o.append("file",e):o.append("file",e.file),o.append("attach","upload"),axios.post(this.uploadUrl,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(o){var i=o.data;1==i.result?(a.fileList1.push({url:i.data.img}),!0===t?a.fileList2.push({url:URL.createObjectURL(e)}):a.fileList2.push({url:URL.createObjectURL(e.file)})):Object(d.Toast)(i.msg)}).catch(function(e){console.log(e)})},removeImg:function(e){this.fileList1.splice(e,1),this.fileList2.splice(e,1)},goodsHandlefunction_1:function(e){var t={},a=e.map(function(e,t){return e.label});if(this.columns[0].values=a,Array.isArray(e[0].children)){var o=e[0].children.map(function(e,t){return e.label});if(this.columns[1].values=o,Array.isArray(e[0].children[0].children)){var n=e[0].children[0].children.map(function(e,t){return e.label});this.columns[2].values=n}else this.columns[2].values=[]}else this.columns[1].values=[];for(var s=0;s<a.length;s++){if(Array.isArray(e[s].children)){var r=e[s].children.map(function(e,t){return e.label});t[a[s]]=r}else t[a[s]]=[];for(var d=0;d<e[s].children.length;d++)if(Array.isArray(e[s].children[d].children)){var l=e[s].children[d].children.map(function(e,t){return e.label});t[a[s]][d]=i()({},t[a[s]][d],l)}else t[a[s]][d]=i()({},t[a[s]][d],[])}return t},seleRegional:function(){this.dateshow_1=!0},onChange:function(e,t,a){var o=e.getColumnValue(0),i=e.getColumnValue(1);e.getColumnValue(2);if(0==a)if(this.goodsHandle_1[t[0]].length>0){var n=this.goodsHandle_1[t[0]].map(function(e,t){return s()(e)[0]});e.setColumnValues(1,n),e.setColumnValues(2,this.goodsHandle_1[t[0]][0][n[0]])}else e.setColumnValues(1,[]),e.setColumnValues(2,[]);else if(1==a){for(var r=[],d=0;d<this.goodsHandle_1[o].length;d++)s()(this.goodsHandle_1[o][d])[0]==i&&(r=this.goodsHandle_1[o][d][i]);e.setColumnValues(2,r)}},onCancelbtn:function(e,t){this.dateshow_1=!1},onConfirmbtn:function(e,t){var a=[],o=this.options;if(Array.isArray(o)&&o.length>0&&Array.isArray(t)){if(a.push(o[t[0]].id),!(Array.isArray(o[t[0]].children)&&o[t[0]].children.length>0))return this.$notify("至少要选择二级分类"),void(this.dateshow_1=!1);a.push(o[t[0]].children[t[1]].id),Array.isArray(o[t[0]].children[t[1]].children)&&o[t[0]].children[t[1]].children.length>0&&a.push(o[t[0]].children[t[1]].children[t[2]].id)}this.selectedOptions3=a,this.dateshow_1=!1,Array.isArray(e)?this.regional=e.join("/"):this.regional=e,this.onConfirmbtnIndex=t}}},g={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"goods-edit"}},[o("c-title",{attrs:{hide:!1,text:"商品编辑"}}),e._v(" "),o("yd-tab",[o("yd-tab-panel",{attrs:{label:"基本信息"}},[o("section",{attrs:{id:"edit-a"}},[o("mt-field",{attrs:{label:"商品名称:",placeholder:"请输入商品名称"},model:{value:e.cargon_data.title,callback:function(t){e.$set(e.cargon_data,"title",t)},expression:"cargon_data.title"}}),e._v(" "),o("mt-field",{attrs:{label:"商品单位:",placeholder:"请输入商品单位"},model:{value:e.cargon_data.sku,callback:function(t){e.$set(e.cargon_data,"sku",t)},expression:"cargon_data.sku"}})],1),e._v(" "),o("section",{ref:"classify",staticClass:"goods_class"},[o("span",{staticStyle:{float:"left","font-size":"16px","padding-left":"0.625rem","box-sizing":"border-box"}},[e._v("商品分类：")]),e._v(" "),o("span",{staticClass:"block"},[o("van-button",{staticStyle:{"max-width":"15rem",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","border-radius":"5px",color:"#1f2d3d",border:"1px solid #bfcbd9","min-width":"5rem"},attrs:{plain:"",type:"primary"},on:{click:e.seleRegional}},[e._v(e._s(e.regional))])],1),e._v(" "),o("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),o("section",{attrs:{id:"edit-b"}},[o("div",{staticClass:"top"},[o("div",{staticStyle:{height:"3.125rem","font-size":"16px","text-align":"left","line-height":"3.125rem","padding-left":"10px","box-size":"border-box"}},[e._v("商品图片：\n            ")]),e._v(" "),o("div",{staticStyle:{padding:"0 0.9375rem 0.9375rem 0.9375rem","box-sizing":"border-box"}},[o("div",{staticClass:"display:flex;"},[o("van-uploader",{attrs:{"after-read":e.onRead}},[o("div",{staticStyle:{width:"6rem",height:"6rem",border:"1px dashed #c0ccda",margin:"0 auto",display:"flex"}},[o("img",{staticClass:"avatar",staticStyle:{width:"32%",height:"32%",opacity:"0.6"},attrs:{src:e.imageUrl?e.imageUrl:a("/n1I")}})])])],1)])])]),e._v(" "),o("section",{staticStyle:{background:"white","margin-top":"0.625rem","padding-bottom":"10px","box-sizing":"border-box"},attrs:{id:"otherphoto"}},[o("div",{staticStyle:{height:"50px","text-align":"left","padding-left":"13px","line-height":"50px"}},[o("span",{staticStyle:{"font-size":"16px"}},[e._v("其他图片：")])]),e._v(" "),o("div",{staticClass:"clearfloat imgflex",staticStyle:{"text-align":"center"}},[e._l(e.fileList2,function(t,a){return[o("div",{staticClass:"photobox"},[o("img",{staticStyle:{width:"100%"},attrs:{src:t.url}}),e._v(" "),o("i",{on:{click:function(t){return e.removeImg(a)}}})])]}),e._v(" "),o("van-uploader",{attrs:{"after-read":e.onRead_1}},[o("div",{staticStyle:{width:"6rem",height:"6rem",border:"1px dashed #c0ccda",display:"flex"}},[o("img",{staticClass:"avatar",staticStyle:{width:"32%",height:"32%",opacity:"0.6"},attrs:{src:a("/n1I")}})])])],2)]),e._v(" "),o("section",{attrs:{id:"edit-c"}},[o("mt-field",{attrs:{label:"商品现价:",placeholder:"请输入商品现价",type:"number"},model:{value:e.cargon_data.price,callback:function(t){e.$set(e.cargon_data,"price",t)},expression:"cargon_data.price"}}),e._v(" "),o("mt-field",{attrs:{label:"商品原价:",placeholder:"请输入商品原价",type:"number"},model:{value:e.cargon_data.market_price,callback:function(t){e.$set(e.cargon_data,"market_price",t)},expression:"cargon_data.market_price"}}),e._v(" "),o("mt-field",{attrs:{label:"商品成本:",placeholder:"请输入商品成本",type:"number"},model:{value:e.cargon_data.cost_price,callback:function(t){e.$set(e.cargon_data,"cost_price",t)},expression:"cargon_data.cost_price"}})],1),e._v(" "),o("section",{attrs:{id:"edit-d"}},[o("mt-field",{attrs:{label:"商品库存:",placeholder:"请输入商品库存",type:"number"},model:{value:e.cargon_data.stock,callback:function(t){e.$set(e.cargon_data,"stock",t)},expression:"cargon_data.stock"}})],1)]),e._v(" "),o("yd-tab-panel",{attrs:{label:"权限"}},[o("div",{staticClass:"power_box"},[o("ul",{staticClass:"member_power"},[o("li",[o("span",[e._v("会员等级浏览权限：")]),e._v(" "),o("input",{attrs:{type:"text",readonly:"",placeholder:"请选择"},on:{click:function(t){e.show1=!0}}}),e._v(" "),o("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),o("li",[o("span",[e._v("会员等级购买权限：")]),e._v(" "),o("input",{attrs:{type:"text",readonly:"",placeholder:"普通等级；会员等级；"},on:{click:function(t){e.show1=!0}}}),e._v(" "),o("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),o("li",[o("span",[e._v("会员组浏览权限：")]),e._v(" "),o("input",{attrs:{type:"text",readonly:"",placeholder:"请选择"},on:{click:function(t){e.show2=!0}}}),e._v(" "),o("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),o("li",[o("span",[e._v("会员组购买权限：")]),e._v(" "),o("input",{attrs:{type:"text",readonly:"",placeholder:"全部会员组"},on:{click:function(t){e.show2=!0}}}),e._v(" "),o("i",{staticClass:"fa fa-angle-right"})])]),e._v(" "),o("ul",{staticClass:"number_power"},[o("li",[o("span",[e._v("每次限购数量：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入每次下单限购数量"}})]),e._v(" "),o("li",[o("span",[e._v("会员限购总数：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入会员限购的总数"}})]),e._v(" "),o("li",[o("span",[e._v("会员每天限购总数：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入会员每天限购数量"}})]),e._v(" "),o("li",[o("span",[e._v("会员每周期限购数量：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入会员每周期限购数量"}})]),e._v(" "),o("li",[o("span",[e._v("会员每月限购数量：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入会员每月限购数量"}})])])])]),e._v(" "),o("yd-tab-panel",{attrs:{label:"折扣"}},[o("div",{staticClass:"rebate_box"},[o("ul",{staticClass:"type"},[o("li",[o("span",[e._v("折扣类型：")]),e._v(" "),o("van-radio",{attrs:{name:"1"}},[e._v("会员等级")])],1),e._v(" "),o("li",[o("span",[e._v("折扣方式：")]),e._v(" "),o("van-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[o("van-radio",{attrs:{name:"1"}},[e._v("折扣")]),e._v(" "),o("van-radio",{attrs:{name:"2"}},[e._v("固定金额")])],1)],1)]),e._v(" "),o("ul",{staticClass:"member_number"},[o("li",[o("span",[e._v("普通会员：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入等级折扣"}})]),e._v(" "),o("li",[o("span",[e._v("会员等级1：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入等级折扣"}})]),e._v(" "),o("li",[o("span",[e._v("会员等级2：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入等级折扣"}})]),e._v(" "),o("li",[o("span",[e._v("会员等级3：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入等级折扣"}})]),e._v(" "),o("li",[o("span",[e._v("会员等级4：")]),e._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入等级折扣"}})])])])])],1),e._v(" "),o("yd-popup",{attrs:{position:"bottom",height:"80%",width:"100%"},model:{value:e.show1,callback:function(t){e.show1=t},expression:"show1"}},[o("div",{staticClass:"select_box"},[o("div",{staticClass:"title"},[o("h2",[e._v("会员等级浏览权限")]),e._v(" "),o("i",{staticClass:"iconfont icon-guanbi"})]),e._v(" "),o("div",{staticClass:"list"},[o("van-checkbox-group",{model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(e.list,function(t,a){return o("van-checkbox",{key:t,attrs:{name:t}},[e._v("\n                                  会员等级 "+e._s(t)+"\n                                ")])}),1)],1),e._v(" "),o("div",{staticClass:"select_btn"},[o("button",{attrs:{type:"button"}},[e._v("完成")])])])]),e._v(" "),o("yd-popup",{attrs:{position:"bottom",height:"80%",width:"100%"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}},[o("div",{staticClass:"select_box"},[o("div",{staticClass:"title"},[o("h2",[e._v("会员组浏览权限")]),e._v(" "),o("i",{staticClass:"iconfont icon-guanbi"})]),e._v(" "),o("div",{staticClass:"list"},[o("van-checkbox-group",{model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(e.list,function(t,a){return o("van-checkbox",{key:t,attrs:{name:t}},[e._v("\n                                  会员组"+e._s(t)+"\n                                ")])}),1)],1),e._v(" "),o("div",{staticClass:"select_btn"},[o("button",{attrs:{type:"button"}},[e._v("完成")])])])]),e._v(" "),o("section",{attrs:{id:"btn"}},[o("button",{attrs:{type:"button"},on:{click:e.confirmationEditor}},[e._v("确认编辑")])]),e._v(" "),o("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.dateshow_1,callback:function(t){e.dateshow_1=t},expression:"dateshow_1"}},[o("van-picker",{attrs:{columns:e.columns,"show-toolbar":""},on:{change:e.onChange,cancel:e.onCancelbtn,confirm:e.onConfirmbtn}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(p,g,!1,function(e){a("1CZy")},"data-v-24ec9237",null);t.default=u.exports},b6nx:function(e,t,a){var o=a("kxFB");(e.exports=a("FZ+f")(!1)).push([e.i,'\n@charset "UTF-8";\n.avatar[data-v-24ec9237] {\n  width: 100%;\n  height: 100%;\n}\n.el-cascader[data-v-24ec9237] {\n  width: 15.625rem;\n}\n#goods-edit[data-v-24ec9237], #goods-release[data-v-24ec9237] {\n  text-align: left;\n  padding-top: 2.5rem;\n  padding-bottom: 3.875rem;\n  /*清除浮动代码*/\n}\n#goods-edit .classify[data-v-24ec9237], #goods-release .classify[data-v-24ec9237] {\n    -webkit-animation: myfirst-data-v-24ec9237 3s;\n            animation: myfirst-data-v-24ec9237 3s;\n}\n@-webkit-keyframes myfirst-data-v-24ec9237 {\nfrom {\n    background: #f15353;\n}\nto {\n    background: #fff;\n}\n}\n@keyframes myfirst-data-v-24ec9237 {\nfrom {\n    background: #f15353;\n}\nto {\n    background: #fff;\n}\n}\n#goods-edit .goods_class[data-v-24ec9237], #goods-release .goods_class[data-v-24ec9237] {\n    height: 3rem;\n    background: white;\n    margin-top: 0.625rem;\n    line-height: 3rem;\n}\n#goods-edit .goods_class .fa[data-v-24ec9237], #goods-release .goods_class .fa[data-v-24ec9237] {\n      position: absolute;\n      right: 0.875rem;\n      font-size: 1.125rem;\n      color: #c9c9c9;\n      line-height: 3rem;\n}\n#goods-edit #edit-b[data-v-24ec9237], #goods-release #edit-b[data-v-24ec9237] {\n    background-color: #fff;\n    margin-top: 0.625rem;\n}\n#goods-edit #edit-b .top[data-v-24ec9237],\n    #goods-edit #edit-b .bottom[data-v-24ec9237], #goods-release #edit-b .top[data-v-24ec9237],\n    #goods-release #edit-b .bottom[data-v-24ec9237] {\n      -padding: 0 0.875rem;\n      font-size: 14px;\n}\n#goods-edit #edit-b .top h1[data-v-24ec9237],\n      #goods-edit #edit-b .bottom h1[data-v-24ec9237], #goods-release #edit-b .top h1[data-v-24ec9237],\n      #goods-release #edit-b .bottom h1[data-v-24ec9237] {\n        line-height: 2.25rem;\n        text-align: left;\n        font-weight: normal;\n}\n#goods-edit #edit-b .top .icon[data-v-24ec9237],\n      #goods-edit #edit-b .bottom .icon[data-v-24ec9237], #goods-release #edit-b .top .icon[data-v-24ec9237],\n      #goods-release #edit-b .bottom .icon[data-v-24ec9237] {\n        padding-top: 1.125rem;\n        width: 4.5rem;\n        height: 4.5rem;\n        background-color: #fafafa;\n        font-size: 12px;\n}\n#goods-edit #edit-b .top .icon i[data-v-24ec9237],\n        #goods-edit #edit-b .bottom .icon i[data-v-24ec9237], #goods-release #edit-b .top .icon i[data-v-24ec9237],\n        #goods-release #edit-b .bottom .icon i[data-v-24ec9237] {\n          padding: 0.125rem;\n          background-color: #fff;\n          border: solid 0.0625rem #ebebeb;\n          border-radius: 1.25rem;\n}\n#goods-edit #edit-b .top .icon span[data-v-24ec9237],\n        #goods-edit #edit-b .bottom .icon span[data-v-24ec9237], #goods-release #edit-b .top .icon span[data-v-24ec9237],\n        #goods-release #edit-b .bottom .icon span[data-v-24ec9237] {\n          display: block;\n          margin-top: 0.25rem;\n}\n#goods-edit #edit-b .bottom[data-v-24ec9237], #goods-release #edit-b .bottom[data-v-24ec9237] {\n      border-bottom: none;\n}\n#goods-edit #edit-b .top .goods-header[data-v-24ec9237], #goods-release #edit-b .top .goods-header[data-v-24ec9237] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      height: 3.75rem;\n      line-height: 3.75rem;\n}\n#goods-edit #edit-b .top .goods-header .fa[data-v-24ec9237], #goods-release #edit-b .top .goods-header .fa[data-v-24ec9237] {\n        font-size: 1.5rem;\n        color: #c9c9c9;\n        position: absolute;\n        right: 0.875rem;\n        line-height: 3.75rem;\n}\n#goods-edit #otherphoto .photobox[data-v-24ec9237], #goods-release #otherphoto .photobox[data-v-24ec9237] {\n    position: relative;\n    width: 6rem;\n    height: 6rem;\n    border: 0.0625rem dashed #c0ccda;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    margin-bottom: 0.2rem;\n}\n#goods-edit #otherphoto .photobox img[data-v-24ec9237], #goods-release #otherphoto .photobox img[data-v-24ec9237] {\n      width: 100%;\n      height: 100%;\n}\n#goods-edit #otherphoto .photobox i[data-v-24ec9237], #goods-release #otherphoto .photobox i[data-v-24ec9237] {\n      width: 1.2rem;\n      height: 1.2rem;\n      position: absolute;\n      top: 0.1rem;\n      right: 0.1rem;\n      background: url('+o(a("Gq6R"))+');\n      background-size: 100%;\n}\n#goods-edit #edit-c[data-v-24ec9237],\n  #goods-edit #edit-a[data-v-24ec9237], #goods-release #edit-c[data-v-24ec9237],\n  #goods-release #edit-a[data-v-24ec9237] {\n    margin-top: 0.625rem;\n    background-color: #fff;\n}\n#goods-edit #edit-c ul li[data-v-24ec9237],\n    #goods-edit #edit-a ul li[data-v-24ec9237], #goods-release #edit-c ul li[data-v-24ec9237],\n    #goods-release #edit-a ul li[data-v-24ec9237] {\n      height: 2.75rem;\n      line-height: 2.75rem;\n      padding: 0 0.875rem;\n      border-bottom: solid 0.0625rem #ebebeb;\n      font-size: 16px;\n      text-align: left;\n}\n#goods-edit #edit-c ul li input[data-v-24ec9237],\n      #goods-edit #edit-a ul li input[data-v-24ec9237], #goods-release #edit-c ul li input[data-v-24ec9237],\n      #goods-release #edit-a ul li input[data-v-24ec9237] {\n        border: none;\n        color: #8c8c8c;\n}\n#goods-edit #edit-a ul li[data-v-24ec9237]:last-child, #goods-release #edit-a ul li[data-v-24ec9237]:last-child {\n    border: none;\n}\n#goods-edit #edit-a ul li:last-child i[data-v-24ec9237], #goods-release #edit-a ul li:last-child i[data-v-24ec9237] {\n      font-size: 1.5rem;\n      color: #c9c9c9;\n      position: absolute;\n      right: 0.875rem;\n      line-height: 2.75rem;\n}\n#goods-edit #edit-a ul li:last-child input[data-v-24ec9237], #goods-release #edit-a ul li:last-child input[data-v-24ec9237] {\n      font-size: 14px;\n}\n#goods-edit #edit-d[data-v-24ec9237], #goods-release #edit-d[data-v-24ec9237] {\n    margin-top: 0.625rem;\n    background-color: #fff;\n}\n#goods-edit #edit-d ul li[data-v-24ec9237], #goods-release #edit-d ul li[data-v-24ec9237] {\n      height: 2.75rem;\n      line-height: 2.75rem;\n      padding: 0 0.875rem;\n      border-bottom: solid 0.0625rem #ebebeb;\n      font-size: 16px;\n      text-align: left;\n}\n#goods-edit #edit-d ul li input[data-v-24ec9237], #goods-release #edit-d ul li input[data-v-24ec9237] {\n        border: none;\n}\n#goods-edit #edit-d ul li[data-v-24ec9237]:last-child, #goods-release #edit-d ul li[data-v-24ec9237]:last-child {\n      border: none;\n}\n#goods-edit .select_box[data-v-24ec9237], #goods-release .select_box[data-v-24ec9237] {\n    background: #fff;\n    width: 100%;\n    padding-top: 50px;\n    padding-bottom: 60px;\n}\n#goods-edit .select_box .title[data-v-24ec9237], #goods-release .select_box .title[data-v-24ec9237] {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 3.125rem;\n      line-height: 3.125rem;\n      text-align: center;\n      font-size: 16px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#goods-edit .select_box .title i[data-v-24ec9237], #goods-release .select_box .title i[data-v-24ec9237] {\n        position: absolute;\n        right: 0.625rem;\n        font-size: 1rem;\n        color: #c9c9c9;\n}\n#goods-edit .select_box .list[data-v-24ec9237], #goods-release .select_box .list[data-v-24ec9237] {\n      padding: 0.625rem 0 0.625rem 0.875rem;\n}\n#goods-edit .select_box .list .van-checkbox[data-v-24ec9237], #goods-release .select_box .list .van-checkbox[data-v-24ec9237] {\n        line-height: 2.875rem;\n        border-bottom: solid 0.0625rem #ebebeb;\n        font-size: 15px;\n}\n#goods-edit .select_box .select_btn[data-v-24ec9237], #goods-release .select_box .select_btn[data-v-24ec9237] {\n      position: fixed;\n      width: 100%;\n      padding: 0.375rem 0.875rem;\n      bottom: 0;\n      border-top: solid 0.0625rem #ebebeb;\n}\n#goods-edit .select_box .select_btn button[data-v-24ec9237], #goods-release .select_box .select_btn button[data-v-24ec9237] {\n        margin: 0 auto;\n        width: 100%;\n        height: 2.5rem;\n        background: #f15353;\n        border-radius: 0.1875rem;\n        color: #fff;\n        border: none;\n        font-size: 16px;\n}\n#goods-edit #btn[data-v-24ec9237], #goods-release #btn[data-v-24ec9237] {\n    background-color: #fff;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    z-index: 100;\n    border-top: solid 0.0625rem #ebebeb;\n    padding: 0 0.875rem;\n    margin-top: 1.25rem;\n}\n#goods-edit #btn button[data-v-24ec9237], #goods-release #btn button[data-v-24ec9237] {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      border-radius: 0.1875rem;\n      margin: 0.375rem 0;\n      width: 100%;\n      color: #fff;\n      font-size: 16px;\n      border: none;\n      background-color: #f15353;\n}\n#goods-edit .clearfloat[data-v-24ec9237]:after, #goods-release .clearfloat[data-v-24ec9237]:after {\n    display: block;\n    clear: both;\n    content: "";\n    visibility: hidden;\n    height: 0;\n}\n#goods-edit .clearfloat[data-v-24ec9237], #goods-release .clearfloat[data-v-24ec9237] {\n    zoom: 1;\n}\n#goods-edit .imgflex[data-v-24ec9237], #goods-release .imgflex[data-v-24ec9237] {\n    padding: 0 0.9375rem 0.9375rem 0.9375rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n#goods-edit .power_box .member_power[data-v-24ec9237], #goods-edit .power_box .number_power[data-v-24ec9237], #goods-release .power_box .member_power[data-v-24ec9237], #goods-release .power_box .number_power[data-v-24ec9237] {\n    margin-top: 0.625rem;\n    background: #fff;\n    padding: 0.625rem 0.875rem;\n}\n#goods-edit .power_box .member_power li[data-v-24ec9237], #goods-edit .power_box .number_power li[data-v-24ec9237], #goods-release .power_box .member_power li[data-v-24ec9237], #goods-release .power_box .number_power li[data-v-24ec9237] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 2.5rem;\n      position: relative;\n      font-size: 15px;\n}\n#goods-edit .power_box .member_power li span[data-v-24ec9237], #goods-edit .power_box .number_power li span[data-v-24ec9237], #goods-release .power_box .member_power li span[data-v-24ec9237], #goods-release .power_box .number_power li span[data-v-24ec9237] {\n        width: 9.75rem;\n}\n#goods-edit .power_box .member_power li input[data-v-24ec9237], #goods-edit .power_box .number_power li input[data-v-24ec9237], #goods-release .power_box .member_power li input[data-v-24ec9237], #goods-release .power_box .number_power li input[data-v-24ec9237] {\n        border: none;\n        width: 11.25rem;\n}\n#goods-edit .power_box .member_power li .fa[data-v-24ec9237], #goods-edit .power_box .number_power li .fa[data-v-24ec9237], #goods-release .power_box .member_power li .fa[data-v-24ec9237], #goods-release .power_box .number_power li .fa[data-v-24ec9237] {\n        position: absolute;\n        right: 0;\n        font-size: 1.125rem;\n        color: #c9c9c9;\n}\n#goods-edit .power_box .member_power .list_box[data-v-24ec9237], #goods-edit .power_box .number_power .list_box[data-v-24ec9237], #goods-release .power_box .member_power .list_box[data-v-24ec9237], #goods-release .power_box .number_power .list_box[data-v-24ec9237] {\n      padding: 0.625rem 0.875rem;\n}\n#goods-edit .rebate_box .type[data-v-24ec9237], #goods-edit .rebate_box .member_number[data-v-24ec9237], #goods-release .rebate_box .type[data-v-24ec9237], #goods-release .rebate_box .member_number[data-v-24ec9237] {\n    margin-top: 0.625rem;\n    background: #fff;\n    padding: 0.625rem 0.875rem;\n}\n#goods-edit .rebate_box .type li[data-v-24ec9237], #goods-edit .rebate_box .member_number li[data-v-24ec9237], #goods-release .rebate_box .type li[data-v-24ec9237], #goods-release .rebate_box .member_number li[data-v-24ec9237] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 2.5rem;\n      position: relative;\n      font-size: 15px;\n}\n#goods-edit .rebate_box .type li span[data-v-24ec9237], #goods-edit .rebate_box .member_number li span[data-v-24ec9237], #goods-release .rebate_box .type li span[data-v-24ec9237], #goods-release .rebate_box .member_number li span[data-v-24ec9237] {\n        width: 6.875rem;\n}\n#goods-edit .rebate_box .type li input[data-v-24ec9237], #goods-edit .rebate_box .member_number li input[data-v-24ec9237], #goods-release .rebate_box .type li input[data-v-24ec9237], #goods-release .rebate_box .member_number li input[data-v-24ec9237] {\n        border: none;\n        width: 11.25rem;\n}\n#goods-edit .rebate_box .type li .fa[data-v-24ec9237], #goods-edit .rebate_box .member_number li .fa[data-v-24ec9237], #goods-release .rebate_box .type li .fa[data-v-24ec9237], #goods-release .rebate_box .member_number li .fa[data-v-24ec9237] {\n        position: absolute;\n        right: 0;\n        font-size: 1.125rem;\n        color: #c9c9c9;\n}\n#goods-edit .rebate_box .type .list_box[data-v-24ec9237], #goods-edit .rebate_box .member_number .list_box[data-v-24ec9237], #goods-release .rebate_box .type .list_box[data-v-24ec9237], #goods-release .rebate_box .member_number .list_box[data-v-24ec9237] {\n      padding: 0.625rem 0.875rem;\n}\n',""])},eRdt:function(e,t){t.isatty=function(){return!1},t.ReadStream=function(){throw new Error("tty.ReadStream is not implemented")},t.WriteStream=function(){throw new Error("tty.ReadStream is not implemented")}}});