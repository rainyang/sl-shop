(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-45e2"],{"A/dI":function(t,e,n){},AMdk:function(t,e,n){(function(e){t.exports=function(t){if("undefined"==typeof window)return new e(t).toString("base64");if(void 0!==window.btoa)return window.btoa(decodeURIComponent(encodeURIComponent(t)));var n,i,o,s,a,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,c=0,m="",d=[];if(!t)return t;t=decodeURIComponent(encodeURIComponent(t));do{n=(a=t.charCodeAt(l++)<<16|t.charCodeAt(l++)<<8|t.charCodeAt(l++))>>18&63,i=a>>12&63,o=a>>6&63,s=63&a,d[c++]=r.charAt(n)+r.charAt(i)+r.charAt(o)+r.charAt(s)}while(l<t.length);m=d.join("");var p=t.length%3;return(p?m.slice(0,p-3):m)+"===".slice(p||3)}}).call(this,n("/UA6").Buffer)},JTK5:function(t,e,n){"use strict";var i=n("A/dI");n.n(i).a},JfXW:function(t,e,n){},YTKH:function(t,e,n){},c11S:function(t,e,n){"use strict";var i=n("JfXW");n.n(i).a},ntYl:function(t,e,n){"use strict";n.r(e);var i=n("omC7"),o=n.n(i);var s=n("ETGp"),a={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},r=(n("JTK5"),n("ZrdR")),l=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(e){t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),n("div",{staticClass:"sign-btn",on:{click:function(e){t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},[],!1,null,"1267af6f",null);l.options.__file="socialsignin.vue";var c=l.exports,m=n("RYct"),d=n("AMdk"),p=n.n(d),u={name:"Login",components:{LangSelect:s.a,SocialSign:c},data:function(){return{login_info:{},site:{},remember_pwd:!1,loginForm:{username:"",password:"",mobile:""},passwordType:"password",captcha:{},sms:{},captcha_text:"获取验证码",isDisabled:1,t:60,loading:!1,showDialog:!1,redirect:void 0,rules:{username:[{required:!0,trigger:"blur",message:"请输入账号"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:function(t,e,n){/^1\d{10}$/.test(e)?n():n(new Error("手机号格式不正确"))},trigger:"blur"}]}}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){this.fun.setTitle("登录"),this.getLoginSite()},mounted:function(){this.getlocalStorage()},destroyed:function(){},methods:{is_tips:function(){this.$store.dispatch("IsOpenPwd",!0)},getLoginSite:function(){var t=this;$http.get("/admin/login/site",{}).then(function(e){1===e.result?(t.site=e.data,t.fun.setIcon(t.site.title_icon),t.captcha=t.site.captcha,t.sms=t.site.sms):m.MessageBox.alert(e.msg)}).catch(function(t){console.log(t)})},getIndex:function(){var t=this;this.remember_pwd?this.loginForm.remember=1:delete this.loginForm.remember,$http.post("/admin/login",{username:this.loginForm.username,password:p()(this.loginForm.password),captcha:this.loginForm.captcha,mobile:this.loginForm.mobile,code:this.loginForm.code}).then(function(e){if(1===e.result){if(t.loading=!1,!t.fun.isTextEmpty(e.data)&&-5===e.data.status)return void m.Message.error(e.msg);if(!t.fun.isTextEmpty(e.data)&&1==e.data.pwd_remind)return t.$store.dispatch("IsOpenPwd",!0),void t.$store.dispatch("tips_word",e.data.msg);if(!t.fun.isTextEmpty(e.data)&&e.data.url)return void(window.location.href=e.data.url);t.$store.dispatch("GenerateRoutes",0),t.remember_pwd?(t.loginForm.remember=1,t.setlocalStorage(t.loginForm.username)):t.setlocalStorage(""),t.$router.push(t.fun.getUrl("Manage"))}else m.MessageBox.alert(e.msg),t.loading=!1}).catch(function(){t.loading=!1})},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.getIndex()})},setlocalStorage:function(t){localStorage.setItem("siteName",o()(t))},getlocalStorage:function(){this.loginForm.username=JSON.parse(localStorage.getItem("siteName"))},sendSms:function(){var t=this,e=this,n=e.t;if(""==e.loginForm.username||!e.loginForm.username)return e.$refs.loginForm.validateField("username",function(t){}),!1;if(!e.loginForm.mobile||!/^1\d{10}$/.test(e.loginForm.mobile))return e.$refs.loginForm.validateField("mobile",function(t){}),!1;var i=window.setInterval(function(){--e.t<=0?(e.t=n,e.isDisabled=1,e.captcha_text="获取验证码",window.clearInterval(i)):(e.isDisabled=0,e.captcha_text="("+e.t+"s)后重新获取")},1e3);$http.post("/admin/login/login_code",{mobile:this.loginForm.mobile,username:this.loginForm.username}).then(function(e){1==e.result?t.$message.success(e.msg):t.$message({message:e.msg,type:"error"})},function(t){console.log(t)})},freshCode:function(){var t=this;$http.post("/admin/login/refresh_pic",{}).then(function(e){1===e.result?t.captcha.img=e.data:(t.$message.error(e.msg),t.loading=!1)}).catch(function(){t.loading=!1})}}},g=(n("c11S"),n("uM2Q"),Object(r.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-container-con"},[n("div",{staticClass:"head"},[n("el-col",{staticStyle:{width:"36px",height:"36px",overflow:"hidden","margin-right":"10px"},attrs:{xs:8,sm:8,md:4,lg:1}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t.site.site_logo,alt:""}})]),t._v(" "),n("el-col",{attrs:{span:15}},[n("div",{staticStyle:{color:"#666","font-size":"24px","font-weight":"900","line-height":"36px"}},[t._v("\n          "+t._s(t.site.name)+"\n        ")])])],1),t._v(" "),n("el-row",{staticClass:"content_info"},[n("el-col",{attrs:{span:15}},[n("div",{staticClass:"login_img"},[n("img",{attrs:{src:t.site.advertisement,alt:""}})])]),t._v(" "),n("el-col",{attrs:{span:1}}),t._v(" "),n("el-col",{staticClass:"login_input",attrs:{span:8}},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.rules,"label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("\n              "+t._s(t.$t("login.title"))+"\n            ")])]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("i",{staticClass:"iconfont icon-verification_member svg-container",staticStyle:{"font-size":"24px"}}),t._v(" "),n("el-input",{attrs:{placeholder:t.$t("login.username"),name:"name",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("i",{staticClass:"iconfont icon-verification_psw svg-container",staticStyle:{"font-size":"24px"}}),t._v(" "),n("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),1==t.captcha.status?n("el-form-item",{attrs:{prop:"name"}},[n("i",{staticClass:"iconfont icon-verification_code svg-container",staticStyle:{"font-size":"24px"}}),t._v(" "),n("el-input",{staticStyle:{width:"calc(100% - 180px)"},attrs:{placeholder:"请输入图形验证码",name:"name",type:"text","auto-complete":"on"},model:{value:t.loginForm.captcha,callback:function(e){t.$set(t.loginForm,"captcha",e)},expression:"loginForm.captcha"}}),t._v(" "),n("img",{staticStyle:{cursor:"pointer"},attrs:{src:t.captcha.img,title:"点击刷新验证码"},on:{click:t.freshCode}})],1):t._e(),t._v(" "),1==t.sms.status?n("el-form-item",{attrs:{prop:"mobile"}},[n("i",{staticClass:"iconfont icon-verification_phone svg-container",staticStyle:{"font-size":"24px"}}),t._v(" "),n("el-input",{staticStyle:{width:"calc(100% - 200px)"},attrs:{placeholder:"请输入手机号",name:"name",type:"text","auto-complete":"on"},model:{value:t.loginForm.mobile,callback:function(e){t.$set(t.loginForm,"mobile",e)},expression:"loginForm.mobile"}}),t._v(" "),n("el-button",{attrs:{type:"primary",disabled:0==t.isDisabled},on:{click:function(e){t.sendSms()}}},[t._v(t._s(t.captcha_text))])],1):t._e(),t._v(" "),1==t.sms.status?n("el-form-item",{attrs:{prop:"name"}},[n("i",{staticClass:"iconfont icon-verification_code1 svg-container",staticStyle:{"font-size":"24px"}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入手机验证码",name:"name",type:"text","auto-complete":"on"},model:{value:t.loginForm.code,callback:function(e){t.$set(t.loginForm,"code",e)},expression:"loginForm.code"}})],1):t._e(),t._v(" "),n("el-checkbox",{staticStyle:{color:"#999"},attrs:{"true-label":1,"false-label":0,label:1},model:{value:t.remember_pwd,callback:function(e){t.remember_pwd=e},expression:"remember_pwd"}},[t._v("记住用户名\n          ")]),t._v(" "),n("router-link",{attrs:{to:"/forget"}},[n("span",{staticClass:"forget"},[t._v("忘记密码？")])]),t._v(" "),n("el-button",{staticStyle:{width:"100%",margin:"30px 0",padding:"12px 20px","font-size":"18px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n            登录\n          ")]),t._v(" "),n("div",{staticStyle:{position:"relative"}})],1)],1)],1),t._v(" "),n("el-row",{staticStyle:{"margin-top":"40px"}},[n("el-col",{staticStyle:{color:"#999",padding:"30px 0"},attrs:{align:"center"}},[n("p",{domProps:{innerHTML:t._s(t.site.information)}})])],1)],1)])},[],!1,null,"86895844",null));g.options.__file="index.vue";e.default=g.exports},uM2Q:function(t,e,n){"use strict";var i=n("YTKH");n.n(i).a}}]);