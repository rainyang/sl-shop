webpackJsonp([477],{"T+WM":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Pexp"),s=n("Tg7E"),a={data:function(){return{titlew:"",content:""}},methods:{getBalance:function(){var t=this;$http.get("plugin.coin.Frontend.Controllers.explain.index",{},"加载中...").then(function(e){1===e.result?(t.content=e.data.content,t.titlew=e.data.title):s.MessageBox.alert(e.msg)},function(t){s.MessageBox.alert(t)})}},activated:function(){this.getBalance()},components:{cTitle:i.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"love_explain"}},[e("c-title",{attrs:{hide:!1,text:this.titlew}}),this._v(" "),e("div",{staticStyle:{height:"70px"}}),this._v(" "),e("div",{staticClass:"text",staticStyle:{padding:"0px"},domProps:{innerHTML:this._s(this.content)}})],1)},staticRenderFns:[]};var o=n("VU/8")(a,c,!1,function(t){n("qsM5")},"data-v-357dc4d0",null);e.default=o.exports},q5UN:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},qsM5:function(t,e,n){var i=n("q5UN");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("3c6f30dc",i,!0,{})}});