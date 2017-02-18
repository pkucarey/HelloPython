// JavaScript Document
	$(function(){ 
	//视频
	videoPlay.init();
}) 


// 相关页面效果 
var videoPlay = {
	init:function(){
		//this.ewm();
		this.isShowVideo();
	},
	videoPlay:function(){
		$("#videoArea img").click(function(){
			var oVideo = $(this).next();
			var url = oVideo.attr("data-src");
			oVideo.show().attr("src",url);
		})
	},
	ewm:function(){
		$(".yjfx").hover(function(){
			$(".yjfxImg img").stop().animate({
				left:"0"	
			},600);	
		},function(){
			$(".yjfxImg img").stop().animate({
				left:"100%"	
			},600);
		})
	},
	// 自动生成二维码
	imgEwm:function(){
		var currurl = location.href;
		var _src = currurl.replace("c_","ewm_").replace(".htm","1n.jpg");
		var sEwm = '<img src="'+_src+'" /><br />分享至手机';
		$(".yjfxImg").html(sEwm);
	},
	//验证视频
	isShowVideo:function(){
		var spSrc = $("#videoArea span").html();
		if(spSrc.indexOf("http:") >= 0){
			var spHtml = '<iframe marginheight="0" id="ifr_video" marginwidth="0" frameborder="0" src="'+spSrc+'"></iframe>';
			$("#videoArea").show().append(spHtml);
		}
	}
}