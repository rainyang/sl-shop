webpackJsonp([375],{FQRe:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("BO1k"),r=t.n(a),i=t("Pexp"),d=t("Tg7E"),o={data:function(){return{isActive:1}},activated:function(){this.$refs.password.style.height=document.body.clientHeight+"px"},methods:{dragonPay:function(n){var e=n.form_data,t=document.createElement("form");t.method="post",t.setAttribute("action",n.action_url);var a=!0,i=!1,d=void 0;try{for(var o,s=r()(["INFO","BODY","SIGN","CONTENTTYPE"]);!(a=(o=s.next()).done);a=!0){var c=o.value,l=document.createElement("input");l.setAttribute("name",c),l.setAttribute("value",e[c]),t.appendChild(l)}}catch(n){i=!0,d=n}finally{try{!a&&s.return&&s.return()}finally{if(i)throw d}}return document.body.appendChild(t),t.style.display="none",t.submit(),t},rememberPwd:function(){var n=this;this.isActive=1,$http.post("plugin.dragon-deposit.frontend.index.passwdUpdate",{data:{operType:"17"}}).then(function(e){1==e.result&&n.dragonPay(e.data)},function(n){})},forgetPwd:function(){var n=this;this.isActive=2,$http.post("plugin.dragon-deposit.frontend.index.passwdUpdate",{data:{operType:"18"}}).then(function(e){1==e.result?n.dragonPay(e.data):d.MessageBox.alert(e.msg,"提示")},function(n){})}},components:{cTitle:i.a}},s={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"password",attrs:{id:"change_pwd"}},[t("c-title",{attrs:{hide:!1,text:"修改交易密码"}}),n._v(" "),t("div",{staticClass:"content"},[n._m(0),n._v(" "),t("div",{staticClass:"wrapper"},[t("div",{staticClass:"remember",class:[1==n.isActive?"bgOrange":""],on:{click:n.rememberPwd}},[n._v("\n        记得原交易密码\n      ")]),n._v(" "),t("div",{staticClass:"forget",class:[2==n.isActive?"bgOrange":""],on:{click:n.forgetPwd}},[n._v("\n        忘记原交易密码\n      ")])])])],1)},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"head"},[e("div",{staticClass:"line"}),this._v(" "),e("span",[this._v("选择修改方式")])])}]};var c=t("VU/8")(o,s,!1,function(n){t("YV2B")},"data-v-5dd57507",null);e.default=c.exports},YV2B:function(n,e,t){var a=t("kPeS");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("28dd52a1",a,!0,{})},kPeS:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n#change_pwd[data-v-5dd57507] {\n  padding-top: 40px;\n  background-color: #fff;\n}\n#change_pwd .content[data-v-5dd57507] {\n    text-align: center;\n}\n#change_pwd .content .head[data-v-5dd57507] {\n      margin-top: 2rem;\n      margin-left: 1rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 3.5rem;\n}\n#change_pwd .content .head .line[data-v-5dd57507] {\n        width: 0.1875rem;\n        height: 0.875rem;\n        background-color: #f87070;\n        margin-right: 1rem;\n}\n#change_pwd .content .head span[data-v-5dd57507] {\n        font-size: 14px;\n        color: #f86e6e;\n}\n#change_pwd .content .wrapper .remember[data-v-5dd57507] {\n      width: 19rem;\n      height: 3rem;\n      border-radius: 0.5rem;\n      border: solid 1px #f87070;\n      color: #f87070;\n      margin: 0 auto;\n      margin-bottom: 2rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 14px;\n}\n#change_pwd .content .wrapper .forget[data-v-5dd57507] {\n      width: 19rem;\n      height: 3rem;\n      border-radius: 0.5rem;\n      border: solid 1px #f87070;\n      color: #f87070;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 14px;\n}\n#change_pwd .bgOrange[data-v-5dd57507] {\n    background-color: #f87070;\n    color: #fff !important;\n}\n",""])}});