
var newsTop300500 = {
                   src :'http://images.sohu.com/bill/s2016/yanlu/gujing/3005000302.jpg',
		           click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201603&TargetID=sohu&Values=15db08fd,57170ea8,2b58d2f5,6f1424da&AdID=1380456',
                   imp :'http://imp.optaim.com/201603/15db08fd57170ea82b58d2f56f1424da.php?a=99'
};
var newsOther300500 = {
                   src :'http://images.sohu.com/bill/s2016/yanlu/gujing/3005000302.jpg',
		           click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201603&TargetID=sohu&Values=15db08fd,57170ea8,2b58d2f5,6f1424da&AdID=1380456',
                   imp :'http://imp.optaim.com/201603/15db08fd57170ea82b58d2f56f1424da.php?a=99'
};
var financesTop300500 = {
                   src :'http://images.sohu.com/bill/s2016/yanchunzhang/pc/3005001128.swf',
                   click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201609&TargetID=sohu&Values=d5501c70,11d683be,121202e4,268ea7ad&AdID=9409967',
                   imp :'http://imp.optaim.com/201609/d5501c7011d683be121202e4268ea7ad.php?a=99'
};
var financesOther300500 = {
                   src :'http://images.sohu.com/bill/s2016/hailiu/xingye/3005000501.swf',
                   click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201604&TargetID=sohu&Values=312e1874,673261b8,206873e6,72bb3789&AdID=12329877',
                   imp :'http://imp.optaim.com/201604/312e1874673261b8206873e672bb3789.php?a=99'
};
var autoTop300500 = {
                   src :'http://images.sohu.com/bill/s2015/yanchunzhang/benz/3005001116.swf',
                   click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201511&TargetID=sohu&Values=1af20852,191c2583,9b1a2e41,4cb51705&AdID=11919022',
                   imp :'http://imp.optaim.com/201511/1af20852191c25839b1a2e414cb51705.php?a=99'
};
var autoOther300500 = {
                   src :'http://images.sohu.com/bill/s2014/xiaoluanhao/deyufang/3005000917.swf',
                   click :'http://fashion.sohu.com/',
                   imp :''
};
var milTop300500 = {
		src :'http://images.sohu.com/bill/s2014/xiaoluanhao/deyufang/3005001024.jpg',
		click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201409&TargetID=sohu&Values=7c7bb2e3,167daf06,5f170456,2978712b&AdID=7934215',
		imp :'http://imp.optaim.com/201409/7c7bb2e3167daf065f1704562978712b.php?a=99'
};
var sohu_top_3rd300500 = {
        src :'http://images.sohu.com/bill/s2014/xuezhou/xz/3005001231.jpg',
		click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201412&TargetID=sohu&Values=82873207,3d83ba86,b63e6158,17e9d554&AdID=15365731',
		imp :'http://imp.optaim.com/201412/828732073d83ba86b63e615817e9d554.php?a=99',
		text: '寒流来袭感冒你真不懂',
		url: 'http://clk.optaim.com/event.ng/Type=click&FlightID=201412&TargetID=sohu&Values=dca9f5d7,a4dddd4a,86a57833,cf2afecc&AdID=2858971',
		textImp: 'http://imp.optaim.com/201412/dca9f5d7a4dddd4a86a57833cf2afecc.php?a=99'
};
var cookietime = 5000;
//var divid300500 = 'TurnAD472';//TurnAD487替换为当前广告位的AD号


$('#'+divid300500).css('display','none');
var domain = 'sohu.com';
//var domain = '';
newsTop300500.co = new Cookie(document,'news-top',1,"/",domain);
newsTop300500.coflag = newsTop300500.co.load();
newsOther300500.co = new Cookie(document,'news-other',1,"/",domain);
newsOther300500.coflag = newsOther300500.co.load();
financesTop300500.co = new Cookie(document,'finances-top',1,"/",domain);
financesTop300500.coflag = financesTop300500.co.load();
financesOther300500.co = new Cookie(document,'finances-other',1,"/",domain);
financesOther300500.coflag = financesOther300500.co.load();
autoTop300500.co = new Cookie(document,'auto-top',1,"/",domain);
autoTop300500.coflag = autoTop300500.co.load();
autoOther300500.co = new Cookie(document,'auto-other',1,"/",domain);
autoOther300500.coflag = autoOther300500.co.load();
milTop300500.co = new Cookie(document,'mil-B',1,"/",domain);
milTop300500.coflag = milTop300500.co.load();
sohu_top_3rd300500.co = new Cookie(document,'sohu_top_3rd',1,"/",domain);
sohu_top_3rd300500.coflag = sohu_top_3rd300500.co.load();

// var indexid = window.location.href.indexOf("adsid");
// var adsid =  0;
// if(indexid){
	// adsid = window.location.href.substr(indexid+6,window.location.href.length-indexid-6);
// }
//console.log($('.adFrag').length, $('.adFrag1').length);
	
if(newsTop300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,newsTop300500.src,newsTop300500.click,'300css');
	Topnews_monitor_func(newsTop300500.imp);
	newsTop300500.co.remove();

}else if(newsOther300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,newsOther300500.src,newsOther300500.click,'300css');
	Topnews_monitor_func(newsOther300500.imp);
	newsOther300500.co.remove();

}else if(financesTop300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,financesTop300500.src,financesTop300500.click,'300css');
	Topnews_monitor_func(financesTop300500.imp);
	financesTop300500.co.remove();

}else if(financesOther300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,financesOther300500.src,financesOther300500.click,'300css');
	Topnews_monitor_func(financesOther300500.imp);
	financesOther300500.co.remove();

}else if(autoTop300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,autoTop300500.src,autoTop300500.click,'300css');
	Topnews_monitor_func(autoTop300500.imp);
	autoTop300500.co.remove();

}else if(autoOther300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,autoOther300500.src,autoOther300500.click,'300css');
	Topnews_monitor_func(autoOther300500.imp);
	autoOther300500.co.remove();
	
}else if(milTop300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,milTop300500.src,milTop300500.click,'300css');
	Topnews_monitor_func(milTop300500.imp);
	milTop300500.co.remove();
	
}else if(sohu_top_3rd300500.coflag){
	Topnews_has(1,divid300500);
	Topnews_showAd(divid300500,sohu_top_3rd300500.src,sohu_top_3rd300500.click,'300css');
	Topnews_monitor_func(sohu_top_3rd300500.imp);
	showWordLink(sohu_top_3rd300500.text, sohu_top_3rd300500.url, sohu_top_3rd300500.textImp);
	sohu_top_3rd300500.co.remove();
}else{
	Topnews_has(0,divid300500);
}

setTimeout(function(){
	if(newsTop300500.coflag == true){
		newsTop300500.co.remove();
	}
	if(newsOther300500.coflag == true){
		newsOther300500.co.remove();
	}
	if(financesTop300500.coflag == true){
		financesTop300500.co.remove();
	}
	if(financesOther300500.coflag == true){
		financesOther300500.co.remove();
	}
	if(autoTop300500.coflag == true){
		autoTop300500.co.remove();
	}
	if(autoOther300500.coflag == true){
		autoOther300500.co.remove();
	}
	if(milTop300500.coflag == true){
		milTop300500.co.remove();
	}
	if(sohu_top_3rd300500.coflag == true){
		sohu_top_3rd300500.co.remove();
	}
},cookietime);