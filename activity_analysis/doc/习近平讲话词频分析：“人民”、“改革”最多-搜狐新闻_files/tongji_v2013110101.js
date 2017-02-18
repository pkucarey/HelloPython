jQuery(function($){
	/**************最终页写cookie start*********************/
	/*
	function setCookie(name,value)
	{
	    var Days = 30;
	    var exp = new Date();
	    exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ value + ";expires=" + exp.toGMTString() + ";domain=sohu.com;path=/";
	}
	function getCookie(name)
	{
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 
	    if(arr=document.cookie.match(reg))
	 
	        return (arr[2]);
	    else
	        return null;
	}	
	function delCookie(name)
	{
	    var exp = new Date(1990,1,1);
	   // exp.setTime(exp.getTime() - 100000);
	    var cval=getCookie(name);
	    if(cval!=null)
	       { document.cookie= name + "="+cval+";expires="+exp.toGMTString();}
	}	
	if(newsId){
		var viewed = getCookie("viewed") == null ? "" : getCookie("viewed");
		var viewedArr = getCookie("viewed") == null ? [] : viewed.split(",");
		if(viewed.indexOf(newsId) == -1){
			if(viewedArr.length >= 20){
				viewedArr.shift();
				viewedArr.push(newsId);
				viewed = viewedArr.join();
			}else{
				viewedArr.push(newsId);
				viewed = viewedArr.join();
			}
		}
		setCookie("viewed",viewed);
	}
	*/
	/**************最终页写cookie end*********************/
	
	/**********最终页右侧大视野的点击统计start************/
	var obj = $("#container .mutu-pic .pic-group li");  
	function sendRequest(p,s){
		var t = new Date().getTime();
		if(document.location.host == "mil.sohu.com"){
			var pvid = "article_mil";
		}else{
			var pvid = "article_news";
		}
		var theUrl = "http://pv.sohu.com/pv.gif?t?="+t+"?r?="+s+"?outchannel="+pvid+"&a="+p;
		$.ajax({
			url: theUrl,
			dataType: "script",
			cache: true,
			success: function(){}
		});
	}
	$.each(obj,function(i){
		var str = $(this).find("a").attr("href");
		if(str.indexOf("sohu.com") == -1){
			$(this).bind("click",function(){
				var position = i%2 == 0 ? "left" : "right";
				if(str.indexOf("?") != -1){
					str = str.substring(0,str.indexOf("?"));
				}
				sendRequest(position,str);						
			});
		}
	});
	/**************最终页右侧大视野的点击统计end*******************/
	
	
	/**************最终页相关新闻的统计及内容回填start****************/
	var obj_relate = $("#container .mutu-news .list14 ul li a");
	var obj_relate_wrap = $("#container .mutu-news .list14");
	//var ifSohu = typeof(relate_from_sohu) == undefined ? false : relate_from_sohu;
	var refer = document.referrer;
	var ifChange = false;
	if( /testrec=1/.test(document.location.search)){
		ifChange = true;
	}else{
		ifChange = false;	
	}
	if(window.relate_from_sohu == undefined){
		var ifSohu = false;
	}else{
		var ifSohu = window.relate_from_sohu;	
	}
	var r = parseInt(Math.random()*2+1); //1-2的随机数
	function load_arrive(refer,aid,impid,u,ext,ed){
		var url = "http://i.go.sohu.com/count/arrive?apid=00&at=2&mkey=0&ref="+refer+"&ctlk="+u+"&aid="+aid+"&impid="+impid+"&ext="+ext+"&ed="+ed;
		$.ajax({
			url: url,
			dataType: "script",
			cache: true,
			success: function(){}
		});	
	}
	function load_tongji(aid,impid,u,ext,ed){
		var targetTop = obj_relate_wrap.position().top,
			clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
			trigger = true;
		$(window).scroll(function(){
			if(!trigger){
				return;
			}
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if((scrollTop+clientHeight) > targetTop){
				load();
				trigger = false;
			}
		});
		
		function load(){
			var theUrl = "http://i.go.sohu.com/count/v?aid="+aid+"&apid=00&impid="+impid+"&at=2&mkey="+aid+"&ctlk="+u+"&ctrlt=0&ctrln=0&ext="+ext+"&ref="+encodeURIComponent(refer)+"&ed="+ed;
			$.ajax({
				url: theUrl,
				dataType: "script",
				cache: true,
				success: function(){}
			});		
		};
	}
	function click_tongji(aid,impid,u,idx,ext,ed){
		var theUrl = "http://i.go.sohu.com/count/c?aid="+aid+"&apid=00&impid="+impid+"&at=2&mkey="+aid+"&ctlk="+u+"&ctrlt=0&ctrln=0&ipos="+idx+"&ext="+ext+"&ref="+encodeURIComponent(refer)+"&ed="+ed;	
		$.ajax({
			url: theUrl,
			dataType: "script",
			cache: true,
			success: function(){}
		});		
	}	
	function getContent(){
		var theUrl = "http://s.go.sohu.com/adgtr/?itemspaceid=00&ctname=newsbottom.tmp&adsrc=2&bucketid="+(Math.ceil(Math.random()*100)<=10?1:0);
		//var theUrl = "http://test.sohu.com/adgtr/?itemspaceid=00&ctname=newsbottom.tmp&adsrc=2&debugeurl=http://news.sohu.com/20130115/n348010483.shtml";
		$.ajax({
                type: "GET",
                url: theUrl,
                dataType: "jsonp",
                jsonp:"callback",
                scriptCharset: "utf-8",
                success:function(data){	
					if(data[0]){
						obj_relate_wrap.find("ul").remove();
	                	obj_relate_wrap.find(".more").before(data[0].resource.html);
	                	var obj = $(obj_relate_wrap).find("li a");
	                	var aids = "", impid, u = "";
	                	$.each(obj,function(i){
	                		aids = i == $(obj).length-1 ? aids + $(this).attr("aid") : aids + $(this).attr("aid") + "+";
	                		u = i == $(obj).length-1 ? u + $(this).attr("href") : u + $(this).attr("href") + "+";
	                		$(this).bind("click",function(){
	                			click_tongji($(this).attr("aid"),data[0].impression_id,encodeURIComponent($(this).attr("href")),i,"sohu",data[0].ed);
	                		});
	                	});
	                	load_tongji(aids,data[0].impression_id,encodeURIComponent(u),"sohu",data[0].ed);
						load_arrive(refer,aids,data[0].impression_id,encodeURIComponent(u),"sohu",data[0].ed);
               	 }else{
               	 	var u = "";
					$.each(obj_relate,function(i){
						u = i == $(obj_relate).length-1 ? u + $(this).attr("href") : u + $(this).attr("href") + "+";
						$(this).bind("click",function(){
							click_tongji(0,0,encodeURIComponent($(this).attr("href")),i,"sogou","");
						});
					});
					load_tongji(0,0,encodeURIComponent(u),"sogou","");
					load_arrive(refer,0,0,encodeURIComponent(u),"sogou","");
               	 }
             }
     });	
	}
	getContent();
	//alert(r+" :"+ifSohu+" ifChange:"+ifChange);
	/*if((r == 2 && ifSohu) || ifChange){ //新的sohu数据源替换
		getContent(); 
	}else{   //原有的sogou输出
		load_tongji(0,0,0,"sogou","");
		$.each(obj_relate,function(i){
			$(this).bind("click",function(){
				click_tongji(0,0,0,i,"sogou","");
			});
		});
	}*/
	/**************最终页相关新闻的统计及内容回填end****************/
	
	/**************二维码点击率start**********************************/
	$("#scan-handset").click(function(){
		var theUrl = "http://cms.data.itc.cn/pingback";
		$.ajax({
			url: theUrl,
			dataType: "script",
			cache: false,
			success: function(){}
		});				
	});
	/**************二维码点击率end**********************************/
	
})