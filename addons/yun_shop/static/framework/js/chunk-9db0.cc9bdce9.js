(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9db0"],{LJzG:function(e,t,i){"use strict";var l=i("x4KH");i.n(l).a},x4KH:function(e,t,i){},yXQ8:function(e,t,i){"use strict";i.r(t);var l={name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleReize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleReize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var e=this.$el.getBoundingClientRect().width;this.width=e||"auto",this.$el.getBoundingClientRect().top<this.stickyTop?this.sticky():this.handleReset()},handleReize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}},d=i("ZrdR"),o=Object(d.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[i("div",{class:e.className,style:{top:e.stickyTop+"px",zIndex:e.zIndex,position:e.position,width:e.width,height:e.height+"px"}},[e._t("default",[i("div",[e._v("sticky")])])],2)])},[],!1,null,null,null);o.options.__file="index.vue";var v={name:"StickyDemo",components:{Sticky:o.exports},data:function(){return{time:"",url:"",platforms:["a-platform"],platformsOptions:[{key:"a-platform",name:"platformA"},{key:"b-platform",name:"platformB"},{key:"c-platform",name:"platformC"}],pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}}},a=(i("LJzG"),Object(d.a)(v,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("sticky",{attrs:{"class-name":"sub-navbar"}},[i("el-dropdown",{attrs:{trigger:"click"}},[i("el-button",{attrs:{plain:""}},[e._v("\n        Platform"),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:e.platforms,callback:function(t){e.platforms=t},expression:"platforms"}},e._l(e.platformsOptions,function(t){return i("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))],1)],1),e._v(" "),i("el-dropdown",{attrs:{trigger:"click"}},[i("el-button",{attrs:{plain:""}},[e._v("\n        Link"),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"300px"},attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[i("template",{slot:"prepend"},[e._v("Url")])],2)],1)],1),e._v(" "),i("div",{staticClass:"time-container"},[i("el-date-picker",{attrs:{"picker-options":e.pickerOptions,type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Release time"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),e._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"}},[e._v("publish\n    ")])],1),e._v(" "),i("div",{staticClass:"components-container"},[i("code",[e._v("Sticky header, "+e._s(e.$t("components.stickyTips")))]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")]),e._v(" "),i("div",[e._v("placeholder")])])],1)},[],!1,null,"77742803",null));a.options.__file="sticky.vue";t.default=a.exports}}]);