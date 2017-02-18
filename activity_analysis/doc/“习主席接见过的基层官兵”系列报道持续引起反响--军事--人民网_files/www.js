if(typeof(rmw) == 'function' && typeof(sso_page_login_user) == 'function'){
	RMWSSO.getUserData(function(guzzLoginUser){
		if(guzzLoginUser && guzzLoginUser.userId > 0){
			if(typeof(bShare) != 'undefined'){
				bShare.addEntry({
					vUid: guzzLoginUser.nickname,
					vTag: "2012-Q1-share"
				});
			}
			guzzLoginUser.displayName = guzzLoginUser.nickname;
			sso_page_login_user(guzzLoginUser);
		}else{
		 //   sso_page_login_guest();
		}
	});
}else{
	$(document).ready(function(){
		RMWSSO.getUserData(function(guzzLoginUser){
			if(guzzLoginUser && guzzLoginUser.userId > 0){
				if(typeof(bShare) != 'undefined'){
					bShare.addEntry({
						vUid: guzzLoginUser.nickname,
						vTag: "2012-Q1-share"
					});
				}
				guzzLoginUser.displayName = guzzLoginUser.nickname;
				sso_page_login_user(guzzLoginUser);
			}else{
			 //   sso_page_login_guest();
			}
		});
	});
}