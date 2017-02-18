
var newsTop950100 = {
                   src :'http://images.sohu.com/bill/s2016/yanlu/gujing/970900302.jpg',
                   click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201603&TargetID=sohu&Values=15db08fd,57170ea8,2b58d2f5,6f1424da&AdID=1380456',
                   imp :'http://imp.optaim.com/201603/15db08fd57170ea82b58d2f56f1424da.php?a=99'
};
var newsOther950100 = {
                   src :'http://images.sohu.com/bill/s2016/yanlu/gujing/970900302.jpg',
                   click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201603&TargetID=sohu&Values=15db08fd,57170ea8,2b58d2f5,6f1424da&AdID=1380456',
                   imp :'http://imp.optaim.com/201603/15db08fd57170ea82b58d2f56f1424da.php?a=99'
};
var financesTop950100 = {
					src :'http://images.sohu.com/bill/s2015/xiaoluanhao/yingjia/970900106.swf',                    
					click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201609&TargetID=sohu&Values=77c22d76,6c78f5cf,186dca39,6538f6fa&AdID=3794172',
					imp :'http://imp.optaim.com/201609/77c22d766c78f5cf186dca396538f6fa.php?a=99'
};
var financesOther950100 = {
					src :'http://images.sohu.com/bill/s2016/hailiu/xingye/970900501.swf',                   
					click:'http://clk.optaim.com/event.ng/Type=click&FlightID=201604&TargetID=sohu&Values=675cd5da,e9689075,86ea89ce,89a33af8&AdID=10757892',
					imp :'http://imp.optaim.com/201604/675cd5dae968907586ea89ce89a33af8.php?a=99'
};
var autoTop950100 = {
					src :'http://images.sohu.com/bill/s2015/yanchunzhang/benz/980601116.swf',                    
					click:'http://clk.optaim.com/event.ng/Type=click&FlightID=201511&TargetID=sohu&Values=1af20852,191c2583,9b1a2e41,4cb51705&AdID=11919022',
					imp :'http://imp.optaim.com/201511/1af20852191c25839b1a2e414cb51705.php?a=99'
};
var autoOther950100 = {
					src :'http://images.sohu.com/bill/s2014/liulin/kaluola/980600422.swf',                    
					click:'http://fashion.sohu.com/',
					imp :''
};
var milTop950100 = {
		src :'http://images.sohu.com/bill/s2014/xiaoluanhao/deyufang/9501001024.jpg',
		click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201409&TargetID=sohu&Values=7c7bb2e3,167daf06,5f170456,2978712b&AdID=7934215',
		imp :'http://imp.optaim.com/201409/7c7bb2e3167daf065f1704562978712b.php?a=99'
};
var sohu_top_3rd950100 = {
		src :'http://images.sohu.com/bill/s2014/xuezhou/xz/9501001231.jpg',
		click :'http://clk.optaim.com/event.ng/Type=click&FlightID=201412&TargetID=sohu&Values=6d14b080,3e6e4805,2f3f6469,e19d1ce0&AdID=10337775',
		imp :'http://imp.optaim.com/201412/6d14b0803e6e48052f3f6469e19d1ce0.php?a=99'
};
var has_topAd = 0;
var divid950100 = 'turn-ad';

$('#turn-ad').css('display','none');
var domain = 'sohu.com';
//var domain = '';
function Topnews_showAd(id,src,click,css) {
	var style_950 = {
		width: 970,
		height: 90
	};
	var style_980 = {
		width: 980,
		height: 60
	};	
	var style_300 = {
		width: 300,
		height: 500
	}

	if(css=='950css'){
		style = style_950;
	}else if(css=='980css'){
		style = style_980;
	}else if(css=='300css'){
		style = style_300;
	}

	var typeReg = /http:\/\/.*?\.swf/ig;
	if (typeReg.test(src)) {
	  Topnews_insertFlash(id, src, click, style);
	} else {
	  Topnews_insertImage(id, src, click);
	}

	if(css=='950css'){
		Topnews_950css(id);
	}else if(css=='980css'){
		Topnews_950css(id);
	}else if(css=='300css'){
		Topnews_300css(id);
	}
}
function Topnews_insertImage(id, src, click){
    $('#'+id).before($("<div></div>").attr("id", id+'_before').attr('align','center'));
	$('#'+id).css('display','none');
	var html = '<a href="' + click + '" target="_blank" ><img src="' + src + '"/></a>';
	$('#'+id+'_before').html(html);
	return;
}
function Topnews_insertFlash(id, src, click, style){
	$('#'+id).before($("<div></div>").attr("id", id+'_before').attr('align','center'));
	$('#'+id).css('display','none');
	var flash = new sohuFlash(src, id + '_flash',style.width, style.height, '7');
	flash.addParam("quality", "high");
	flash.addParam("wmode", "opaque");//add parameter
	flash.addVariable("clickthru", escape(click));
	flash.write(id+'_before');
	return;
}
function Topnews_has(flag,id){
	has_topAd = flag;

	if(flag==0){
		$('#'+id).css('display','block');
	}

}
function Topnews_950css(id){
	$('#'+id+'_before').addClass('area');
	$('#'+id+'_before').css({
	  "width":"978px",
	  "border":"1px solid #E6E6E6",
	  "margin":"0 auto",
	  "padding":"5px 0"
	});
}
function Topnews_300css(id){
	$('#'+id+'_before').parent().attr('height',500);
	$('#'+id+'_before').parent().parent().attr('height',500);
}

function Topnews_monitor_func(url){
	if(url!=undefined&&url!=''){
		var exposure = new Image();
		exposure.src = url + '&t='+ new Date().getTime();
	}
}

function showWordLink(text, url, imp){
	var img = new Image();
	img.src = imp;
	if($('.adFrag').length){	//存在文字链
		if(!$('.adFrag a')[0]){
			$('<a href="'+url+'" target="_blank">'+text+'</a>').css({
				margin: '6px 5px 0px 30px'
			}).appendTo('.adFrag');
			$('.adFrag').css({
				'margin-top': '6px'
			});
		}else{
			$('.adFrag a')[0].innerHTML = text;
			$('.adFrag a')[0].href = url;
		}
		
	}else{	//不存在文字链
		$('<div class="adFrag"><a href="'+url+'" target="_blank">'+text+'</a></div>').css({
			margin: '6px 5px 0px 30px'
		}).insertBefore('#scan-handset');
	}
}



newsTop950100.co = new Cookie(document,'news-top',1,"/",domain);
newsTop950100.coflag = newsTop950100.co.load();
newsOther950100.co = new Cookie(document,'news-other',1,"/",domain);
newsOther950100.coflag = newsOther950100.co.load();
financesTop950100.co = new Cookie(document,'finances-top',1,"/",domain);
financesTop950100.coflag = financesTop950100.co.load();
financesOther950100.co = new Cookie(document,'finances-other',1,"/",domain);
financesOther950100.coflag = financesOther950100.co.load();
autoTop950100.co = new Cookie(document,'auto-top',1,"/",domain);
autoTop950100.coflag = autoTop950100.co.load();
//autoTop950100.coflag = true;
autoOther950100.co = new Cookie(document,'auto-other',1,"/",domain);
autoOther950100.coflag = autoOther950100.co.load();
milTop950100.co = new Cookie(document,'mil-B',1,"/",domain);
milTop950100.coflag = milTop950100.co.load();
sohu_top_3rd950100.co = new Cookie(document,'sohu_top_3rd',1,"/",domain);
sohu_top_3rd950100.coflag = sohu_top_3rd950100.co.load();

// var indexid = window.location.href.indexOf("adsid");
// var adsid =  0;
// if(indexid){
	// adsid = window.location.href.substr(indexid+6,window.location.href.length-indexid-6);
// }

if(newsTop950100.coflag){
	Topnews_has(1,'turn-ad');
	Topnews_showAd(divid950100,newsTop950100.src,newsTop950100.click,'950css');
	Topnews_monitor_func(newsTop950100.imp);

}else if(newsOther950100.coflag){
	Topnews_has(1,'turn-ad');
	Topnews_showAd(divid950100,newsOther950100.src,newsOther950100.click,'950css');
	Topnews_monitor_func(newsOther950100.imp);

}else if(financesTop950100.coflag){
	Topnews_has(1,'turn-ad');
	Topnews_showAd(divid950100,financesTop950100.src,financesTop950100.click,'950css')
	Topnews_monitor_func(financesTop950100.imp);;

}else if(financesOther950100.coflag){
	Topnews_has(1,'turn-ad');
	Topnews_showAd(divid950100,financesOther950100.src,financesOther950100.click,'950css');
	Topnews_monitor_func(financesOther950100.imp);

}else if(autoTop950100.coflag){
	Topnews_has(1,'AutoTongLan');
	Topnews_showAd('AutoTongLan',autoTop950100.src,autoTop950100.click,'980css');
	Topnews_monitor_func(autoTop950100.imp);

}else if(autoOther950100.coflag){
	Topnews_has(1,'TurnAD98030');
	Topnews_showAd('TurnAD98030',autoOther950100.src,autoOther950100.click,'980css');
	Topnews_monitor_func(autoOther950100.imp);

}else if(milTop950100.coflag){
	Topnews_has(1,'turn-ad');
	Topnews_showAd(divid950100,milTop950100.src,milTop950100.click,'950css');
	Topnews_monitor_func(milTop950100.imp);

}else if(sohu_top_3rd950100.coflag){
	Topnews_has(1,'turn-ad');
	setTimeout(function(){Topnews_showAd(divid950100,sohu_top_3rd950100.src,sohu_top_3rd950100.click,'950css')},100);
	Topnews_monitor_func(sohu_top_3rd950100.imp);

}else{
	Topnews_has(0,'turn-ad');
}