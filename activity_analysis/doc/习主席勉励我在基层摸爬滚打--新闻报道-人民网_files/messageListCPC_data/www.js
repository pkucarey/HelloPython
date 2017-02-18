
if(typeof(rmw) == 'function' && typeof(sso_page_login_user) == 'function'){
	RMWSSO.getUserData(function(guzzLoginUser){
		if(guzzLoginUser && guzzLoginUser.userId > 0){
			if(typeof(sso_page_login_user) == 'function'){
				sso_page_login_user(guzzLoginUser) ;
			}
			
			if(typeof(bShare) != 'undefined'){
				bShare.addEntry({
					vUid: guzzLoginUser.nickname,
					vTag: "2012-Q1-share"
				});
			}
			
			delete guzzLoginUser ;
		}else{
			// Not Logged in.
			
			if(typeof(sso_page_login_guest) == 'function'){
				sso_page_login_guest() ;
			}
		}
	});
}else{
	$(document).ready(function(){
		// 获取登录信息
		RMWSSO.getUserData(function(guzzLoginUser){
			if(guzzLoginUser && guzzLoginUser.userId > 0){
				if(typeof(sso_page_login_user) == 'function'){
					sso_page_login_user(guzzLoginUser) ;
				}
				
				if(typeof(bShare) != 'undefined'){
					bShare.addEntry({
						vUid: guzzLoginUser.nickname,
						vTag: "2012-Q1-share"
					});
				}
			  //生成网友头像
				//rmw.global.bindUserPortraits($("img.portrait", $(document))) ;
				delete guzzLoginUser ;
			}else{
				// Not Logged in.
				
				if(typeof(sso_page_login_guest) == 'function'){
					sso_page_login_guest() ;
				}
			}
		});
		$("#login_btn").click(function(){
			 var userName = $("#userName").attr("value") ;
			 var password = $("#password").attr("value");
			  if(userName==''||userName==null){
	                 $("#login_error_tip").html("<font color='red'>请输入通行证帐号</font>").hide().fadeIn(1500) ;
	                 $("#login_error_tip").fadeOut(1500); 
			 		 return false ;
			  }else if(password==''||password==null){
	                 $("#login_error_tip").html("<font color='red'>请输入通行证密码</font>").hide().fadeIn(1500) ;
	                 $("#login_error_tip").fadeOut(1500); 
			 		 return false ;
			  }
//			  $.ajax({
//					 url : "http://passport.people.com.cn/_login.do",
//					 type: "POST",
//					 cache: false, 
//					 dataType: "jsonp",
//					 data : {"userName" : userName,"password":password},
//					 success: function(text){
//						 if(text=='success'){
//							 $(".dlk").hide();
//				             $(".dlk_bg").hide();
//				             var guzzLoginUser = rmw.global.getLoginUser() ;
//				             sso_page_login_user(guzzLoginUser);
//						 }else{
//							 $("#login_error_tip").html("<font color='red'>登录失败!请检查用户名和密码</font>").hide().fadeIn(1500) ;
//			                 $("#login_error_tip").fadeOut(1500); 
//						 }
//					 }
//					});
			  RMWSSO.login(userName, password, true, function(status, data){
				if(status){
					location.reload();
				}else{
					alert(data);
				};
			 });
			  
			  })
			   //登录动作
		 $(".dlk_a").click(function(){
			 $(".dlk_bg").height($(document).height());
			 $(".dlk_bg").show();
			 $(".dlk").show();
			  var dlk_TOP=(255-$(".dlk").height())/2;
			  var dlk_Left=(598-$(".dlk").width())/2;
			 $(".dlk").animate({top:dlk_TOP},0);
			 $(".dlk").animate({left:dlk_Left},0);
		
			 //$(".pic_txt").show();
	     })
	     
	     
		 $(".close").click(function(){
			$(".dlk").hide();
			$(".dlk_bg").hide();
		 })
	}) ;
}