$(document).ready(function(){
try{
	//搜索板块效果
	var openserch;
	$("#search_button").bind("mouseenter",function(){
		$("#p_search").css({"display":"block"})
		openserch = setTimeout(function(){
	         $("#p_search").css({"display":"none"})
		},2000)
	})
	$("#p_search").bind("click",function(){
		clearTimeout(openserch);
	})
	$('#p_search').bind("mouseleave",function(){
		$("#p_search").css({"display":"none"})
	})
}catch(e){}
try{
	var openlogin;
	$("#login_button").bind("mouseenter",function(){
		$("#p_login").css({"display":"block"});
		openlogin = setTimeout(function(){
	         $("#p_login").css({"display":"none"})
		},2000)
	})
	$("#p_login").bind("click",function(){
		clearTimeout(openlogin);
	})
	$('#p_login').bind("mouseleave",function(){
		$("#p_login").css({"display":"none"})
	})
}catch(e){}	
	
})

/*count*/
function writelog(){//获取指定名称的cookie的值
		var cid = "";
		var catalogs= "";
		var keyword = "";
		var refer = window.top.document.referrer;
		var arrstr = document.cookie.split("; ");
		for(var i = 0;i < arrstr.length;i ++){
			var temp = arrstr[i].split("=");
			if(temp[0] == "wdcid"){
				cid = unescape(temp[1]);
				break;
			}
		}
		var metas = document.getElementsByTagName("meta");
		for(var i=0; i<metas.length;i++){
			if(metas[i].getAttribute("name") == "keywords") {
				keyword = metas[i].getAttribute("content");
			}
			if(metas[i].getAttribute("name") == "catalogs") {
				catalogs = metas[i].getAttribute("content");
			}
		}
		document.write("<img src='http://58.68.146.78/index/?cid="+cid+"&catalogs="+catalogs+"&keyword="+keyword+"&refer="+refer+"' style='position:absolute;top:-1000px;'>");
	}
	writelog();
