/**
 * 快速注册提示，developed by Zhang Fan at 2015/04/23
 * 1.0 根据url和cookie判断是否显示快速注册昵称修改提示
 * @version 1.0
 */
KISSY.add("xh/comment/1.0/cquick",function(a,b,c,d,e,f){function i(a){this.options={time:.5,easing:"elasticOut",template:'<div class="xhnc_commentQuickTip '+g.language+(h?" xhnc_commentCss3":"")+'"><div class="body"><div class="title">'+g.quickTipTitle+'</div><div class="hide">'+g.close+'</div><div class="content"><div class="text">'+g.quickTipText+'</div><div class="modify">'+g.quickTipModify+"</div></div></div></div>"},this.uinfo={username:null,nickname:null,flower:null,complete:!1},b.extend(this.options,a,!0),this.init()}var g=window.xhnc_commentLanguage||{},h=!a.UA.ie||a.UA.ie>9;return a.augment(i,{init:function(){var a=this;"zh"==g.language&&(a.getUinfo(),a.render())},render:function(){var b=this,c=b.options,d=b.uinfo,e=null;return d.complete&&(e={username:"<span>"+decodeURIComponent(d.username)+"</span>",nickname:"<span>"+decodeURIComponent(d.nickname)+"</span>",flower:"<span>"+d.flower+"</span>",modifyNickname:'<a href="http://my.xuan.news.cn/setup/nicknameForm.do" target="_blank"><span>'+g.modifyNickname+"</span></a>",modifyPassword:'<a href="http://my.xuan.news.cn/setup/accountFrom.do" target="_blank"><span>'+g.modifyPassword+"</span></a>"},b.tip=a.all(a.substitute(c.template,e)),a.all(".hide",b.tip).on("click",function(){b.hide()}),a.all("body").append(b.tip),b.show(),h&&a.all(".body",b.tip).on("transitionend",function(){b.tip.hasClass("show")||b.tip.hide()})),b},show:function(){var a=this;return h?setTimeout(function(){a.tip.show().addClass("show")},1e3):this.tip.slideDown(this.options.time,void 0,this.options.easing),this},hide:function(){return h?this.tip.removeClass("show"):this.tip.slideUp(this.options.time/2),this},getUinfo:function(){var a=this,c=a.uinfo;return f.getUser(),b.extend(c,f.getUser(),!0),c.flower=c.flower?c.flower.substr(c.flower.length-6):null,c.complete=c.flower&&c.username&&c.nickname?!0:!1,a}}),i},{requires:["xh/common/1.0/lang","node","anim","cookie","../1.0/cdata"]});