webpackJsonp([532],{NYba:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("mvHQ"),i=e.n(o),a=e("//Fk"),r=e.n(a),l=wx,c={name:"HelloWorld",data:function(){return{localId:"",serverId:"",downLoadId:"",Soff:!0,time:0,timer:null,voice:""}},created:function(){this.initShare()},mounted:function(){this.amr=null,this.loadDemoBtn1=document.querySelector("#amr-load"),this.loadAmrFile1=document.querySelector("#amr-file"),this.playBtn=document.querySelector("#amr-play"),this.duration=document.querySelector("#amr-duration")},methods:{end:function(n){var t=this.$refs.audios;t.src=URL.createObjectURL(n),t.onended=function(){console.log("isend")},console.log(t),t.play()},initWithUrl:function(n){if(this._isInit||this._isInitRecorder)throw new Error("AMR has been initialized. For a new AMR, please generate a new BenzAMRRecorder().");return new r.a(function(t,e){fetch(n,{method:"GET",responseType:"blob",headers:{"Content-Type":"application/octet-stream"},credentials:"include"}).then(function(n){n.ok&&n.blob().then(function(n){console.log(n),t(n)})}).catch(function(n){e(n)})}).then(function(n){return n})},loadDemoBtn:function(n){this.loadDemoBtn1.setAttribute("disabled",!0),this.loadAmrFile1.setAttribute("disabled",!0),this.playBtn.setAttribute("disabled",!0);var t=this;t.initWithUrl("http://localhost:8081/addons/yun_shop/static/app/mario.amr").then(function(n){Recorder.amr2wav(n,function(n){t.end(n),console.log("已转码成wav播放")},function(n){console.log("转码成wav失败："+n)}),t.loadDemoBtn1.removeAttribute("disabled"),t.loadAmrFile1.removeAttribute("disabled"),t.playBtn.removeAttribute("disabled")})},playAmr:function(){this.amr.isPlaying()?this.amr.stop():this.amr.play()},loadAmrFile:function(n){var t=this,e=this.$refs.inputer;this.amr=new BenzAMRRecorder,this.loadDemoBtn1.setAttribute("disabled",!0),this.loadAmrFile1.setAttribute("disabled",!0),this.playBtn.setAttribute("disabled",!0),this.amr.initWithBlob(e.files[0]).then(function(){t.loadDemoBtn1.removeAttribute("disabled"),t.loadAmrFile1.removeAttribute("disabled"),t.playBtn.removeAttribute("disabled"),t.duration.innerHTML=t.amr.getDuration().toFixed(2)+"'"}),this.amr.onPlay(function(){console.log("Event: play"),t.playBtn.innerHTML="停止"}),this.amr.onStop(function(){console.log("Event: stop"),t.playBtn.innerHTML="播放"}),this.amr.onEnded(function(){console.log("Event: ended"),t.playBtn.innerHTML="播放"}),this.amr.onAutoEnded(function(){console.log("Event: autoEnded")}),this.amr.onStartRecord(function(){console.log("Event: startRecord")}),this.amr.onFinishRecord(function(){console.log("Event: finishRecord")}),this.amr.onCancelRecord(function(){console.log("Event: cancelRecord")})},initShare:function(){var n=this,t=document.location.href;$http.post("member.member.wxJsSdkConfig",{url:t}).then(function(t){1===t.result&&n.share(t.data)},function(n){console.log(n)})},share:function(n){wx.config({debug:!0,appId:n.config.appId,timestamp:n.config.timestamp,nonceStr:n.config.nonceStr,signature:n.config.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","showOptionMenu","startRecord","stopRecord","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice"]}),wx.ready(function(){var n=document.location.href;wx.showOptionMenu(),wx.onMenuShareTimeline({title:"录音",link:n,imgUrl:"",success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}}),wx.onMenuShareAppMessage({title:"录音",desc:"",link:n,imgUrl:"",type:"link",dataUrl:"",success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}})})},start:function(n){var t=this;t.time=0,l.startRecord({success:function(){alert("成功调起录音"),t.timer=setInterval(function(){t.time++},1e3),t.vicoeEnd()},cancel:function(){alert("用户拒绝授权录音")}})},stop:function(){var n=this;l.stopRecord({success:function(t){alert("暂停成功"),console.log(t),clearInterval(n.timer),n.localId=t.localId,n.upVoice()},fail:function(n){alert("死啦停不了"),console.log(n)}})},cancel:function(){l.stopRecord({success:function(n){alert("取消录音")}})},vicoeEnd:function(){var n=this;l.onVoiceRecordEnd({complete:function(t){alert("60秒停止录音"),n.localId=t.localId,clearInterval(n.timer),n.upVoice()}})},merge:function(){var n=this,t=window.location.href;this.axios({method:"post",url:"http://apiwx.lostars.cn/index.php/index/File/merge",headers:{"Content-Type":"application/json"},data:{url:t}}).then(function(t){console.log(t),n.$refs.allRecord.src=t.data}).catch(function(n){console.log(n)})},play:function(){console.log(this.localId),l.playVoice({localId:this.localId})},pausePlay:function(){l.pauseVoice({localId:this.localId})},stopPlay:function(){l.stopVoice({localId:this.localId})},upVoice:function(){var n=this;wx.uploadVoice({localId:n.localId,isShowProgressTips:1,success:function(t){alert(i()(t)),n.serverId=t.serverId,axios.post(n.fun.getRealUrl("plugin.business-card.frontend.controllers.card.card.get-voice"),{media_id:t.serverId},{headers:{"Content-Type":"application/json"}}).then(function(t){var e=t.data;1===e.result?(n.voice=e.data,n.loadDemoBtn()):alert(e.msg)}).catch(function(n){alert(n),console.log(n)})}})},downVoice:function(){var n=this;l.downloadVoice({serverId:n.serverId,isShowProgressTips:1,success:function(t){alert("下载成功"),n.downLoadId=t.localId,alert(t),console.log(t),console.log(n.downLoadId)}})}}},s={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"hello"},[e("button",{staticClass:"record",on:{click:n.start}},[n._v("开始录音")]),n._v(" "),e("br"),n._v(" "),e("button",{on:{click:n.stop}},[n._v("停止录音")]),n._v(" "),e("br"),n._v(" "),e("button",{on:{click:n.cancel}},[n._v("取消录音")]),n._v(" "),e("br"),n._v(" "),e("button",{on:{click:n.play}},[n._v("播放录音")]),n._v(" "),e("button",{on:{click:n.pausePlay}},[n._v("暂停播放")]),n._v(" "),e("button",{on:{click:n.stopPlay}},[n._v("停止播放")]),n._v(" "),e("button",{on:{click:n.upVoice}},[n._v("上传语音")]),n._v(" "),e("button",{on:{click:n.downVoice}},[n._v("下载录音")]),n._v(" "),e("br"),n._v(" "),e("p",[n._v("录音时间"+n._s(n.time))]),n._v(" "),e("br"),e("br"),e("br"),e("br"),e("br"),n._v(" "),e("div",{attrs:{id:"player-amr"}},[e("p",[n._v("\n      加载演示文件："),e("button",{attrs:{id:"amr-load"},on:{click:n.loadDemoBtn}},[n._v("加载、解码")]),n._v(" "),e("a",{attrs:{href:"//localhost:8081/addons/yun_shop/static/app/mario.amr"}},[n._v("下载演示文件：mario.amr")])]),n._v(" "),e("p",[n._v("\n      加载本地文件："),e("input",{ref:"inputer",attrs:{type:"file",id:"amr-file",accept:".amr"},on:{change:n.loadAmrFile}}),n._v("（不会上传到任何服务器）\n    ")]),n._v(" "),e("p",[e("audio",{ref:"audios",attrs:{controls:""}})]),n._v(" "),e("p",[e("button",{attrs:{id:"amr-play",disabled:""},on:{click:n.playAmr}},[n._v("播放")]),n._v(" "),e("span",{attrs:{id:"amr-duration"}},[n._v("0'")])])]),n._v(" "),e("br")])},staticRenderFns:[]};var d=e("VU/8")(c,s,!1,function(n){e("tfLv")},null,null);t.default=d.exports},asGN:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},tfLv:function(n,t,e){var o=e("asGN");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("02ec5b6e",o,!0,{})}});