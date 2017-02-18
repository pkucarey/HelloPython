/*
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};*/


	
//频道匹配
var autoChannel = [{sKey:"test",sValue:"测试",sUrl:"http://www.news.cn/politics/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_local},
{sKey:"politics",sValue:"时政",sUrl:"http://www.news.cn/politics/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"comments",sValue:"网评",sUrl:"http://www.news.cn/comments/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"newscenter",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/newscenter/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"renshi",sValue:"人事",sUrl:"http://www.news.cn/renshi/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_renshi},
{sKey:"hr",sValue:"人才",sUrl:"http://www.news.cn/hr/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_hr},
{sKey:"ziliao",sValue:"资料",sUrl:"http://www.news.cn/ziliao/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"legal",sValue:"法治",sUrl:"http://www.news.cn/legal/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_legal},
{sKey:"local",sValue:"地方",sUrl:"http://www.news.cn/local/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_local},
{sKey:"book",sValue:"悦读",sUrl:"http://www.news.cn/book/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_book},
{sKey:"lianzheng",sValue:"廉政",sUrl:"http://www.news.cn/lianzheng/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_lianzheng},
{sKey:"world",sValue:"国际",sUrl:"http://www.news.cn/world/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"overseas",sValue:"海外华人",sUrl:"http://www.news.cn/overseas/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"gangao",sValue:"港澳",sUrl:"http://www.news.cn/gangao/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"tw",sValue:"台湾",sUrl:"http://www.news.cn/tw/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"mil",sValue:"军事",sUrl:"http://www.xinhuanet.com/mil/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"culture",sValue:"文化",sUrl:"http://www.news.cn/culture/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"fortune",sValue:"财经",sUrl:"http://www.news.cn/fortune/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"jiaju",sValue:"家居",sUrl:"http://www.news.cn/jiaju/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"gongyi",sValue:"公益",sUrl:"http://www.news.cn/gongyi/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"futures",sValue:"期货",sUrl:"http://www.news.cn/futures/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"finance",sValue:"金融",sUrl:"http://www.news.cn/finance/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_finance},
{sKey:"auto",sValue:"汽车",sUrl:"http://www.news.cn/auto/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_auto},
{sKey:"edu",sValue:"教育",sUrl:"http://www.news.cn/edu/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_edu},
{sKey:"abroad",sValue:"出国",sUrl:"http://www.news.cn/abroad/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_edu},
{sKey:"food",sValue:"食品",sUrl:"http://www.news.cn/food/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"tea",sValue:"茶叶",sUrl:"http://www.news.cn/tea/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"air",sValue:"民航",sUrl:"http://www.news.cn/air/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"tech",sValue:"科技",sUrl:"http://www.news.cn/tech/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"jiadian",sValue:"家电",sUrl:"http://www.news.cn/jiadian/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"health",sValue:"健康",sUrl:"http://www.news.cn/health/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_health},
{sKey:"environment",sValue:"环保",sUrl:"http://www.news.cn/environment/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"coal",sValue:"煤炭",sUrl:"http://www.news.cn/coal/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"power",sValue:"电力",sUrl:"http://www.news.cn/power/",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"energy",sValue:"能源",sUrl:"http://www.news.cn/energy/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"shuhua",sValue:"书画",sUrl:"http://www.news.cn/shuhua/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_shuhua},
{sKey:"collection",sValue:"收藏",sUrl:"http://www.news.cn/collection/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_shuhua},
{sKey:"travel",sValue:"旅游",sUrl:"http://www.news.cn/travel/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_travel},
{sKey:"fashion",sValue:"时尚",sUrl:"http://www.news.cn/fashion/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fashion},
{sKey:"city",sValue:"城市",sUrl:"http://www.news.cn/city/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_city},
{sKey:"sports",sValue:"体育",sUrl:"http://sports.news.cn/",wyakList:depart_fortune,cnxh:"3",autoDate:site_sports},
{sKey:"insurance",sValue:"保险",sUrl:"http://www.xinhuanet.com/insurance/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"expo",sValue:"会展",sUrl:"http://www.xinhuanet.com/expo/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"xiangtu",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/xiangtu/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},

{sKey:"info",sValue:"信息化",sUrl:"http://www.xinhuanet.com/info/index.htm",wyakList:null,cnxh:"4",autoDate:site_info},
{sKey:"zhcs",sValue:"智慧城市",sUrl:"http://www.xinhuanet.com/zhcs/index.htm",wyakList:null,cnxh:"4",autoDate:site_info},
{sKey:"ent",sValue:"娱乐",sUrl:"http://www.news.cn/ent/",wyakList:depart_political,cnxh:"0",autoDate:site_ent},
{sKey:"yuqing",sValue:"舆情",sUrl:"http://www.news.cn/yuqing/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_yuqing},
{sKey:"newmedia",sValue:"传媒",sUrl:"http://www.xinhuanet.com/newmedia/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_newmedia},
{sKey:"video",sValue:"视频",sUrl:"http://www.news.cn/video/index.htm",wyakList:depart_video,cnxh:"0",autoDate:site_video},
{sKey:"foto",sValue:"摄影",sUrl:"http://www.xinhuanet.com/foto/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_foto},
{sKey:"house",sValue:"房产",sUrl:"http://www.xinhuanet.com/house/",wyakList:depart_political,cnxh:"0",autoDate:site_house},

{sKey:"forum",sValue:"论坛",sUrl:"http://forum.home.news.cn/list/50-0-0-1.html",wyakList:depart_fortune,cnxh:"3",autoDate:site_forum},

{sKey:"yzyd/politics",sValue:"时政",sUrl:"http://www.news.cn/politics/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"yzyd/comments",sValue:"网评",sUrl:"http://www.news.cn/comments/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"yzyd/newscenter",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/newscenter/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"yzyd/legal",sValue:"法治",sUrl:"http://www.news.cn/legal/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_legal},
{sKey:"yzyd/local",sValue:"地方",sUrl:"http://www.news.cn/local/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_local},
{sKey:"yzyd/book",sValue:"悦读",sUrl:"http://www.news.cn/book/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_book},
{sKey:"yzyd/world",sValue:"国际",sUrl:"http://www.news.cn/world/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/overseas",sValue:"海外华人",sUrl:"http://www.news.cn/overseas/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/gangao",sValue:"港澳",sUrl:"http://www.news.cn/gangao/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/tw",sValue:"台湾",sUrl:"http://www.news.cn/tw/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/mil",sValue:"军事",sUrl:"http://www.xinhuanet.com/mil/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/fortune",sValue:"财经",sUrl:"http://www.news.cn/fortune/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"yzyd/jiaju",sValue:"家居",sUrl:"http://www.news.cn/jiaju/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"yzyd/finance",sValue:"金融",sUrl:"http://www.news.cn/finance/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_finance},
{sKey:"yzyd/auto",sValue:"汽车",sUrl:"http://www.news.cn/auto/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_auto},
{sKey:"yzyd/edu",sValue:"教育",sUrl:"http://www.news.cn/edu/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_edu},
{sKey:"yzyd/food",sValue:"食品",sUrl:"http://www.news.cn/food/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"yzyd/tech",sValue:"科技",sUrl:"http://www.news.cn/tech/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"yzyd/jiadian",sValue:"家电",sUrl:"http://www.news.cn/jiadian/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"yzyd/health",sValue:"健康",sUrl:"http://www.news.cn/health/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_health},
{sKey:"yzyd/energy",sValue:"能源",sUrl:"http://www.news.cn/energy/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"yzyd/travel",sValue:"旅游",sUrl:"http://www.news.cn/travel/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_travel},
{sKey:"yzyd/fashion",sValue:"时尚",sUrl:"http://www.news.cn/fashion/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fashion},
{sKey:"yzyd/ent",sValue:"娱乐",sUrl:"http://www.news.cn/ent/",wyakList:depart_political,cnxh:"0",autoDate:site_ent},
{sKey:"yzyd/foto",sValue:"摄影",sUrl:"http://www.xinhuanet.com/foto/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_foto},
{sKey:"yzyd/house",sValue:"房产",sUrl:"http://www.xinhuanet.com/house/",wyakList:depart_political,cnxh:"0",autoDate:site_house}
];

//摄影，房产

//site_sports

$(document).ready(function(){
	/************初始执行效果*************/
	
	/*
	var cnxh_temp = 1;
	var cnxh_cook = $.cookie("cnxh1");
	if (!cnxh_cook || cnxh_cook==null)	{
		$.cookie( "cnxh1" ,  "1,1,1,1" , { path: '/', expires: 30 });
		cnxh_cook = $.cookie("cnxh1");
	};
	*/
	
	
	//点击排行
	var arr_djph =[
		depart_political[0],
		depart_overseas[0],
		depart_forumblog[0],
		depart_multimedia[0],
		depart_interview[0],
		depart_military[0],
		depart_fortune[0]
	];	
	xinhua(arr_djph,"#ph1",0,arr_djph.length,1);
	
	//点击排行-图片
	//var arr_djph_pic = depart_political;	
	//xinhua(arr_djph_pic,"#djph_pic",0,2,3);
	
	//动态判断地址相关
	dongtai();
	
	//热搜排行榜
	//console.log(c_xinwenresou);
	
	if(typeof(c_xinwenresou)!=='undefined'){
		var arr_xwrs = c_xinwenresou;
		xinhua(arr_xwrs,"#rsb_list",0,10,2);
	}
	
	
	//app图标链接
	var xh_appPic = '<div style="margin-bottom:10px"><iframe marginheight="0" marginwidth="0" frameborder="0" width="640" height="76" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|newxl_tl1&db=xinhuanet&border=0&local=yes"></iframe></div>'
	$(".share").after(xh_appPic);
	
	//日历
	calendar_index();
	
	
	//快讯
	if(c_kuaixun!=undefined){
		var x_kx_obj  = c_kuaixun[0];
		if(x_kx_obj.t!=="" && x_kx_obj.u.indexOf(".htm")>0 && pd_kxtitle(x_kx_obj)==1){
			var t_a = x_kx_obj.st;
			var x_kx = '<a target="_blank" href="'+ c_url(x_kx_obj.u) +'">'+ x_kx_obj.t +'</a>';
			var tit_kx ='<span class="tit">'+ t_a +'</span>'; 
			$("#kx_text").html(x_kx);
			$("#kx_text").parent().prepend(tit_kx);
			setTimeout(function(){$(".kx").slideDown(500);},3000);
			setTimeout(function(){ if($(".kx").is(":visible")==true){$(".kx").slideUp(500);}},20000);
		}

	};
	
	function pd_kxtitle(kx_obj){
		var a = 0;
		var b = ["快讯","回放","论坛","直播","预告"];
		var c = kx_obj.st;
		for(var i=0;i<b.length;i++){
			if(c==b[i]){
				 a=1;
				 break
			}
		}
		return a;
	}
	
	//滚动新闻
	jishixinwen();
	
	//高清大图
	var hdJs = $("#hdbreak");
	if(hdJs.length>0){
		$("#xl_hd").show();
		$.getScript(hdJs.html(), function(){
		  	autoData();
		});
	}
	
	function autoData(){
		var smallpic="";
		var hd_link = hdArticle.htmUrl;
		$("#xl_hd .btnarea a").attr("href",hd_link);
		for(var i=0;i<hdArticle.piclist.length;i++){smallpic += '<li><a href="'+hdArticle.piclist[i].bigJpgUrl+'"><img src="'+hdArticle.piclist[i].smallJpgUrl+'"></a></li>';}
		$(".ad-thumb-list").append(smallpic);
		var galleries = $('.ad-gallery').adGallery();
		var sab = hdArticle.sabstract;
		$("#sabstract").append(sab)
	}
	
	function dongtai(){
		
		var currurl = location.href;
		if(currurl.indexOf("gate/big5/news.xinhuanet.com")>0) {
			var pd = currurl.substring(currurl.indexOf("gate/big5/news.xinhuanet.com/")+29,currurl.indexOf("/2"));
		}
		else {
			var pd = currurl.substring(currurl.indexOf("com/")+4,currurl.indexOf("/2"));
		}
		if(currurl.indexOf(".com/2")>0){
			pd ="newscenter";
		}
		if(pd.indexOf("power")>-1)pd="power";
		if(pd.indexOf("house")>-1 && pd!=="yzyd/house") pd="house";
		//console.log(pd);
		
		//pd="test";
		if( pd=="fortune" || pd=="local" || pd=="world" || pd=="forum" || pd=="ent" || pd=="sports" || pd=="legal" || pd=="auto" || pd=="edu" || pd=="fashion" || pd=="food" || pd=="tech" || pd=="travel" || pd=="health" || pd=="info" || pd=="energy" || pd=="overseas"){
			huazhonghua();
		}
		
		

		var all_pd = autoChannel.length;
		for( var i=0; i<all_pd ; i++)
		{
			if(pd==autoChannel[i].sKey)	{
				//频道推荐1
				//politics,legal,local
				if(pd=="politics"||pd=="legal"||pd=="local"){
					
					(function(){
							
							window.soNewsCallback_10159 = function(data) {
								//var newsContainer = document.getElementById('sh-qihoo-position-10159');
								
								var newsContainer = document.getElementById('pdtj1');
								/* 每条新闻的HTML模板，请按照您网站的格式修改
								var newsTemplate = '<li class="news-item">' +
														'<a href="{shURL}" target="_blank" title="{title}">' +
														'    <img src="{imgURL}" />' +
														'    <span class="title">{title}</span>' +
														'</a>' +
												   '</li>';
								 */
								var newsTemplate = '<li>'+
								'<p class="img">'+
								'<a href="{shURL}" target="_blank"><img src="{imgURL}" border="0" height="100" width="135"></a>'+
								'</p>'+
								'<p class="bg"></p>'+
								'<p class="name"><a href="{shURL}" target="_blank">{title}</a></p>'+
								'</li>';
					
								/*
								 * 将模板中的占位符替换为对应的内容
								 * @method   template
								 * @param   {string} template 模板
								 * @param   {JSON} filler 填充数据
								 */
								var template = function(template, filler) {
									for(attr in filler) {
										template = template.replace(new RegExp('{' + attr + '}', 'img'), filler[attr]);
									}
									return template;
								};
					
								var newsList = data['data'];
								var newsHTML = '';
								for(var i = 0, len = newsList.length; i < len; i++) {
									var news = newsList[i],
										title = news['title'],
										imgURL = news['img'],
										shURL = news['url'];
									newsHTML += template(newsTemplate, {title: title, imgURL: imgURL, shURL: shURL});
								}
								if(newsHTML) newsContainer.innerHTML = newsHTML;
							}
					
							/* 推广位数据接口 */
							var script = document.createElement('script'),
								head = document.getElementsByTagName('head')[0] || document.documentElement;
							script.src = "http://s.lianmeng.360.cn/media/news/union_mt_10159.js?t=" + Math.random();
							script.charset = 'UTF-8';
							head.appendChild(script);
						})();					
				}
				else{
					
					var arr_pdtj1 = autoChannel[i].autoDate.pdtj_pic;
					if(arr_pdtj1!==null)xinhua(arr_pdtj1,"#pdtj1",0,4,4);
				}
				
				//频道推荐2
				var arr_pdtj2 = autoChannel[i].autoDate.pdtj_news;	
				if(arr_pdtj2!==null)xinhua(arr_pdtj2,"#pdtj2",0,4,7);
				
				//频道名称
				$(".autopd").html(autoChannel[i].sValue).attr("href",autoChannel[i].sUrl);
				if(pd!=="yzyd/house")$(".autopd").attr("href",autoChannel[i].sUrl);

				//网友爱看
				wyak(autoChannel[i].wyakList);
				
				//修改标题
				modify_title(autoChannel[i].sValue,autoChannel[i].cnxh);
				
		
				
				//猜你喜欢
				//cnxh(autoChannel[i].cnxh);
				//动态加载html
				//autoHtml(autoChannel[i].html);
				
				
				//热点推荐1
				var arr_rdtj1 = autoChannel[i].autoDate.rdtj_horizontal;
				if(arr_rdtj1!==null)xinhua(arr_rdtj1,"#rdtj1",0,2,5);
				
				//热点推荐2
				var arr_rdtj2 = autoChannel[i].autoDate.rdtj_vertical;
				if(arr_rdtj2!==null)xinhua(arr_rdtj2,"#rdtj2",0,2,3);
				
				//网友爱看大图
				var arr_wyakdt = autoChannel[i].autoDate.wyak;
				if(arr_wyakdt!==null)xinhua(arr_wyakdt,"#data_wyak",0,1,6);

			}
		}
	};
	
	//输出数据通用函数
	//参数说明：数据，要显示的dom元素，数据开始位置，数据结束位置，数据输出方式
	function xinhua(x_data,x_div,x_begin,x_length,x_list){
		var t_str = "";
		for(var i=x_begin;i<x_length;i++){
			if(x_list==1) t_str += data_li(x_data[i]);
			if(x_list==2) t_str += data_li2(x_data[i]);
			if(x_list==3) t_str += data_li3(x_data[i]);
			if(x_list==4) t_str += data_li4(x_data[i]);
			if(x_list==5) t_str += data_li5(x_data[i]);
			if(x_list==6) t_str += data_li6(x_data[i]);
			if(x_list==7) t_str += data_li7(x_data[i]);
			if(x_list==8) t_str += data_li8(x_data[i]);
		};
		$(x_div).append(t_str);
	};
	function xinhua_pre(x_data,x_div,x_begin,x_length,x_list){
		var t_str = "";
		for(var i=x_begin;i<x_length;i++){
			if(x_list==1) t_str += data_li(x_data[i]);
			if(x_list==2) t_str += data_li2(x_data[i]);
			if(x_list==3) t_str += data_li3(x_data[i]);
			if(x_list==4) t_str += data_li4(x_data[i]);
			if(x_list==5) t_str += data_li5(x_data[i]);
			if(x_list==6) t_str += data_li6(x_data[i]);
			if(x_list==7) t_str += data_li7(x_data[i]);
			if(x_list==8) t_str += data_li8(x_data[i]);
		};
		$(x_div).prepend(t_str);
	};
	function data_li(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<li><a target="_blank" href="'+ c_url(a.u) +'">【'+ a.nn +'】'+ a.t +'</a></li>';
		return temp_a;
	};
	function data_li2(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<li><a target="_blank" href="'+ c_url(a.u) +'">'+ a.n +'</a></li>';
		return temp_a;
	};
	function data_li3(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<li><p class="img"><a href="'+ c_url(a.u) +'" target="_blank"><img src="'+ c_url(a.tpu) +'" width="100" height="80" border="0" ></a></p><p class="bg"></p><p class="name"><a href="'+ c_url(a.u) +'" target="_blank">'+ a.t +'</a></p></li>';
		return temp_a;
	};
	function data_li4(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<li><p class="img"><a href="'+ c_url(a.u) +'" target="_blank"><img src="'+ c_url(a.tpu) +'" width="135" height="100" border="0" ></a></p><p class="bg"></p><p class="name"><a href="'+ c_url(a.u) +'" target="_blank">'+ a.t +'</a></p></li>';
		return temp_a;
	}
	function data_li5(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<div class="xgtj1"><a href="'+ c_url(a.u) +'" target="_blank"><img src="'+ c_url(a.tpu) +'" width="80" height="60" border="0" ></a><h3><a href="'+ c_url(a.u) +'" target="_blank">'+ a.t +'</a></h3><div class="clear"></div></div>';
		return temp_a;
		
	};
	function data_li6(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<p class="img"><a href="'+ c_url(a.u) +'" target="_blank"><img src="'+ c_url(a.tpu) +'" width="160" height="135" border="0"></a></p><p class="bg"></p><p class="name"><a href="'+ c_url(a.u) +'" target="_blank">'+ a.t +'</a></p>';
		return temp_a;
	};
	function data_li7(a){
		var temp_a =""
		if(a==undefined) return temp_a;
		else temp_a = '<li><a target="_blank" href="'+ c_url(a.u) +'">'+ a.t +'</a></li>';
		return temp_a;
	};
	function c_url(a){
		if(a.indexOf("wwwnet")>-1) a=a.replace("wwwnet","http://www.xinhuanet.com");	
		if(a.indexOf("newsnet")>-1) a=a.replace("newsnet","http://news.xinhuanet.com");	
		if(a.indexOf("wsinet")>-1) a=a.replace("wsinet","http://www.xinhuanet.com/static/img");
		return a;
	}
	

	//网友爱看
	function wyak(pd_name){
		if(pd_name&&pd_name!==null){		
			var first_wyak = '<a target="_blank" href="'+ c_url(pd_name[0].u) +'">'+ pd_name[0].t +'</a>';
			$("#wyak_first").html(first_wyak);
			xinhua(pd_name,"#wyak_list",1,5,7);
		}
	};
	
	//修改标题
	function modify_title(tit,pd){
		var pagetit = document.title;
		var modifytit = tit + "频道-新华网";
		if(pd=="0")document.title = pagetit.replace("新华网",modifytit); 
		else if(pd=="1")document.title = pagetit.replace("新华网",modifytit); 
		else if(pd=="3")document.title = pagetit.replace("新华网",modifytit); 
	};
	
	//加载html片断
/*	function autoHtml(id_html){
		var url = "http://news.xinhuanet.com/xilan/c_20130709.htm";
		var url_pdtj = url+" #pdtj_"+id_html;
		var url_rdtj = url+" #rdtj_"+id_html;
		var url_wyak = url+" #wyak_"+id_html;
		$("#data_pdtj").load(url_pdtj);
		$("#data_rdtj").load(url_rdtj);
		$("#data_wyak").load(url_wyak);
	};*/
	
	
	
	//关键词显示到搜索框
	var hotkey = $("meta[name='keywords']").attr("content");
	if (hotkey) {
		hotparams = hotkey.split(",")[0];
		$("#q").val(hotparams);
	};
	
	//广告区加载
	//container_load();
	
	
	
	/************事件效果*************/
	//导航条广告
	$(".bread .left").append('<iframe marginheight="0" marginwidth="0" frameborder="0" width="245" height="26" style="margin:1px 0 0 20px; background:#f8f8f8;" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_gm&db=xinhuanet&border=0&local=yes"> </iframe>');
	
	
	
	//图片延迟加载
	$("img.lazyload").lazyload({threshold:300,failurelimit:30});
	//页签效果
	$(".tab .tab_title li").mouseover(function () { 
        $(this).addClass('active'); 
        $(this).siblings().removeClass('active');
        var _index = $(this).index(); 
        $(this).parent().parent().parent().find('.tab_box_content').eq(_index).show().siblings().hide(); 
    });
	//右侧漂浮层效果
	/*$(window).scroll( function() { 
		if($(window).scrollTop()>2020) 
		{
			$(".piaofu").addClass("piaofu_on");
		}
		else{
			$(".piaofu").removeClass("piaofu_on");
		}
	});*/
	//快讯隐藏
	$(".kx .close").click(function(){
		$(".kx").slideUp(500);
		return false;
	});
	
	//字体放大缩小
	$("#content").attr("class","content1");
	set_font();

	//排行滚动
	var gd_set=0;
	var gd_tol = $(".djph .tab_title li").length;
	var timeId1 = setInterval(function(){autoShow(gd_set);},5000); 
	function autoShow(set){
		$(".djph .tab_title li").eq(set).addClass("active").siblings().removeClass("active");
		$(".djph .tab_box .tab_box_content").eq(set).show().siblings().hide();
		gd_set++;
		if(gd_set==gd_tol)gd_set=0;
	};
	$(".djph").mouseover(function(){
		clearInterval(timeId1);					  
	}).mouseout(function(){
		beginAutoNav();
	});
	function beginAutoNav()
	{ timeId1 = setInterval(function(){autoShow(gd_set);},5000);};
	
	
	//细览新增通发广告位
	var xilanAd1 = '<iframe style="border:1px solid #ccc;background: url(http://www.xinhuanet.com/static/xilan/xilan_v1/images/bg_ad_xilan.gif) 100% 0 no-repeat; padding-top: 15px;" marginheight="0" marginwidth="0" frameborder="0" width="638" height="140" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|newxl_tl&db=xinhuanet&border=0&local=yes"></iframe>';
	$(".yzyd").append(xilanAd1);

	
	//纠错
(function() {
    var _hexCHS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var _hexTBL = {'0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9,'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15, 'G':16, 'H':17, 'I':18, 'J':19,'K':20, 'L':21, 'M':22, 'N':23, 'O':24, 'P':25, 'Q':26, 'R':27, 'S':28, 'T':29,'U':30, 'V':31, 'W':32, 'X':33, 'Y':34, 'Z':35, 'a':36, 'b':37, 'c':38, 'd':39,'e':40, 'f':41, 'g':42, 'h':43, 'i':44, 'j':45, 'k':46, 'l':47, 'm':48, 'n':49,'o':50, 'p':51, 'q':52, 'r':53, 's':54, 't':55, 'u':56, 'v':57, 'w':58, 'x':59,'y':60, 'z':61};
    var key = [61,37,44,31,34,7,24,6,43,12,27,3,25,29,60,33,35,41,58,2,51,49,9,5,59,11,42,32,22,40,4,57,50,38,8,56,21,19,52,53,16,28,1,26,47,17,54,46,10,23,55,13,14,20,15,36,18];
    Hr = function(){if (key.length < 57){throw new Error('the key is too short.');}
        this._sz = _hexCHS.charCodeAt(key[15]) % (key.length-20) + 10;this._ks = key.slice(-this._sz);
        for (var _i=0; _i<this._sz; ++_i) {this._ks[_i] = _hexCHS.charCodeAt(this._ks[_i]%62);}
        this._k16 = [], this._k41 = [];this._t16 = {}, this._t41 = {};
        for (var _i=0; _i<16; ++_i) {this._k16[_i] = _hexCHS.charAt(key[_i]);this._t16[this._k16[_i]] = _i;}
        for (var _i=0; _i<41; ++_i) {this._k41[_i] = _hexCHS.charAt(key[_i+16]);this._t41[this._k41[_i]] = _i;}};  
    Hr.prototype.ca = function( s ){var _k16 = this._k16,_k41 = this._k41,_ks  = this._ks,_sz  = this._sz,_cnt = 0;return  s.replace(/[^\s\n\r]/g, function( ch ) {var _n = ch.charCodeAt(0);return  (_n <= 0xff)? _k16[parseInt(_n/16)] + _k16[_n%16]: _k41[parseInt(_n/1681)] + _k41[parseInt(_n%1681/41)] + _k41[_n%41]}).replace(/[0-9A-Za-z]/g, function( ch ) {return  _hexCHS.charAt((_hexTBL[ch] + _ks[_cnt++%_sz]) % 62);});};})(); 
$(".tiyi1").toggle(function(){$('#jc_link1').attr("src",jc_link);$("#advisebox01").show();
$.get("http://203.192.10.248/together/vote_dc_sy_tjy.jsp?id=12113&v12113=0");
},function(){$("#advisebox01").hide();});	
$(".advise2").toggle(function(){$('.jc_link23').attr("src",jc_link);$("#advisebox02").show();},function(){$("#advisebox02").hide();});	
$("#jc_close1").click(function(){$("#advisebox01").hide();});
$("#jc_close2").click(function(){$("#advisebox02").hide();});
//获取责编id，稿件url，稿件id，稿件标题  
	var ele_pageid = $("meta[name=pageid]").attr("content");
	var ele_ids=ele_pageid.split(".");
	var bId = ele_ids[ele_ids.length-2];
	var _code = new Hr();//code
	var cId = _code.ca(ele_ids[ele_ids.length-1]);
	var cTitle = $("title").html().split("_")[0];
    if(cTitle !=""){ cTitle = encodeURI(encodeURI(cTitle));}
	var cUrl = window.location.href;
	var jc_link='http://203.192.6.81/XHWCIFB/Confirm.do?bId='+bId+"&cUrl="+cUrl+"&cId="+cId+"&cTitle="+cTitle;
	/****** end *******/
});


(function(){
    /*
     * JSONP回调函数, 读取并显示推广位内容
     * @param   {JSON} data 新闻数据
                数据格式: {
                            data: [
                                {
                                    title: "辽宁舰走你指挥员影像曝光",
                                    imgURL: "http://p1.qhimg.com/t0188932e9b5d61a811.jpg",
                                    shURL: "http://sh.qihoo.com/?src=lm&mt=10001_1&v=3&p=1"
                                },
                                {
                                    .......
                                }
                            ]
                        }
     */
	 
	//360
	//$("#right_360 ul").html("").attr("id","sh-qihoo-position-10051");

    window.soNewsCallback_10051 = function(data) {
        var newsContainer = document.getElementById('sh-qihoo-position-10051');
        /* 每条新闻的HTML模板，请按照您网站的格式修改 
        var newsTemplate = '<li class="news-item">' +
                                '<a href="{shURL}" target="_blank" title="{title}">' +
                                '    <img src="{imgURL}" />' +
                                '    <span class="title">{title}</span>' +
                                '</a>' +
                           '</li>';
						   <li>
<p class="img"><a href="http://sh.qihoo.com/?src=news.xinhuanet.com" target="_blank"><img class="lazyload" src="http://news.xinhuanet.com/politics/titlepic/118311645_title1n.jpg" data-original="http://news.xinhuanet.com/politics/titlepic/118311645_title1n.jpg" width="135" height="100" style="display: block;"></a></p>
<p class="bg"></p>
<p class="name"><a href="http://sh.qihoo.com/?src=news.xinhuanet.com" target="_blank">北京迎首次寒潮 </a></p>
</li>
						   */
		var newsTemplate = '<li>' +
                                '<p class="img"><a href="{shURL}" target="_blank">'+
								'<img class="lazyload" src="{imgURL}"'+
								'data-original="{imgURL}" width="135" height="100" style="display: block;"></a></p>'+
								'<p class="bg"></p>'+
								'<p class="name"><a href="{shURL}" target="_blank">{title}</a></p>'+
                           '</li>';




        /*
         * 将模板中的占位符替换为对应的内容
         * @method   template
         * @param   {string} template 模板
         * @param   {JSON} filler 填充数据
         */
        var template = function(template, filler) {
            for(attr in filler) {
                template = template.replace(new RegExp('{' + attr + '}', 'img'), filler[attr]);
            }
            return template;
        };

        var newsList = data['data'];
        var newsHTML = '';
        for(var i = 0, len = newsList.length; i < len; i++) {
            var news = newsList[i],
                title = news['title'],
                imgURL = news['img'],
                shURL = news['url'];
				newsHTML += template(newsTemplate, {title: title, imgURL: imgURL, shURL: shURL});
        }
        if(newsHTML) newsContainer.innerHTML = newsHTML;
    }

    /* 推广位数据接口 */
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] || document.documentElement;
    script.src = "http://s.lianmeng.360.cn/media/news/union_mt_10051.js?t=" + Math.random();
    script.charset = 'UTF-8';
    head.appendChild(script);
})();

/*细缆画中画广告*/
function huazhonghua(){
	if($("#content p").length >1 && $("#div_currpage").length==0){
		$("#content p:last").prev().prepend('<iframe style="width:300px;height:250px; float:left; margin-right:10px;" border="0" name="search" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" vspale="0" src="http://www.xinhuanet.com/adhtml/ad_hzh.htm"></iframe>');
	}
}


/*时间*/
function calendar_index(){var enabled = 0;var today = new Date();var day;var date;var centry="";if(today.getDay()==0) day="星期日";if(today.getDay()==1) day="星期一";if(today.getDay()==2) day="星期二";if(today.getDay()==3) day="星期三";if(today.getDay()==4) day="星期四";if(today.getDay()==5) day="星期五";if(today.getDay()==6) day="星期六";if(today.getFullYear()<2000) centry = "19";date1=centry+(today.getFullYear())+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日  ";date2=""+day;$("#date").html(date1+date2);var CalendarData=new Array(100);var madd=new Array(12);var tgString="甲乙丙丁戊己庚辛壬癸";var dzString="子丑寅卯辰巳午未申酉戌亥";var numString="一二三四五六七八九十";var monString="正二三四五六七八九十冬腊";var weekString="日一二三四五六";var sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";var cYear,cMonth,cDay,TheDate;CalendarData = new Array(0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5, 0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95);madd[0]=0;madd[1]=31;madd[2]=59;madd[3]=90;madd[4]=120;madd[5]=151;madd[6]=181;madd[7]=212;madd[8]=243;madd[9]=273;madd[10]=304;madd[11]=334; function GetBit(m,n) {  return (m>>n)&1; };function e2c(){ TheDate= (arguments.length!=3) ? new Date() : new Date(arguments[0],arguments[1],arguments[2]); var total,m,n,k;var isEnd=false;var tmp=TheDate.getFullYear();total=(tmp-1921)*365+Math.floor((tmp-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-38;if (TheDate.getYear()%4==0&&TheDate.getMonth()>1) { total++;}for(m=0;;m++){k=(CalendarData[m]<0xfff)?11:12;for(n=k;n>=0;n--){if(total<=29+GetBit(CalendarData[m],n)){isEnd=true; break;}total=total-29-GetBit(CalendarData[m],n);}if(isEnd) break;}cYear=1921 + m; cMonth=k-n+1; cDay=total;if(k==12) {if(cMonth==Math.floor(CalendarData[m]/0x10000)+1) { cMonth=1-cMonth; }if(cMonth>Math.floor(CalendarData[m]/0x10000)+1){ cMonth--; } }};function GetcDateString(){ var tmp="";tmp+=tgString.charAt((cYear-4)%10); tmp+=dzString.charAt((cYear-4)%12);tmp+="年 "; if(cMonth<1) { tmp+="(闰)"; tmp+=monString.charAt(-cMonth-1); } else {tmp+=monString.charAt(cMonth-1);}tmp+="月";tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"三十")); if (cDay%10!=0||cDay==10) { tmp+=numString.charAt((cDay-1)%10); }return tmp;};function GetLunarDay(solarYear,solarMonth,solarDay){ if (solarYear<1921 || solarYear>2020){return "";} else {solarMonth = (parseInt(solarMonth)>0) ? (solarMonth-1) : 11;e2c(solarYear,solarMonth,solarDay); return GetcDateString();}};var D=new Date();var yy=D.getFullYear();var mm=D.getMonth()+1;var dd=D.getDate();var ww=D.getDay();var ss=parseInt(D.getTime() / 1000); $("#todate").html(GetLunarDay(yy,mm,dd));};

function set_font(){var f_s=$("#center .font_small");var f_a=$("#center .font_add");var f_c=$("#content");f_s.click(function(){if(f_c.attr("class")=="content1"){return false;}else if(f_c.attr("class")=="content2"){$(this).addClass("font_small_dis");changefontsize(1);}else{f_a.removeClass("font_add_dis");changefontsize(2);}return false;});f_a.click(function(){if(f_c.attr("class")=="content1"){f_s.removeClass("font_small_dis");changefontsize(2);}else if(f_c.attr("class")=="content2"){$(this).addClass("font_add_dis");changefontsize(3);}else{$(this).removeClass("font_add_dis");return false;}return false;})};function changefontsize(thisSize){if(thisSize=="3"){$("#content").css("font-size","18px").attr("class","content3");};if(thisSize=="2"){$("#content").css("font-size","16px").attr("class","content2");};if(thisSize=="1"){$("#content").css("font-size","14px").attr("class","content1");};};function jishixinwen(){var w=$("#gd_content").width();var $a=$("#gd_content li");var l=$a.length;var cd=450;var sw=0;function autogd(i){if(i==(l-1)){$("#gd_content").css({left:"450px"});var d=0;}else{var d=cd*(i+1);};$("#gd_content").animate({left:-d},1000);};$a.hover(function(){if(myTime){clearInterval(myTime);}},function(){myTime=setInterval(function(){autogd(sw);sw++;if(sw==l){sw=0;}},5000);});var myTime=setInterval(function(){autogd(sw);sw++;if(sw==l){sw=0;}},5000);};function info(){$("#now").delay(5000).hide("puff","",500);$("#open").delay(5000).show("puff","",500);$("#open").click(function(){$("#open").hide();$("#now").show("clip","",500);$("#now").delay(5000).hide("puff","",500);$("#open").delay(5500).show("puff","",500);});};


	(function(){var ref=document.referrer;var so=ref.indexOf("so.com");var qihoo=ref.indexOf("qihoo.com");if(qihoo==-1&&so==-1){document.write("<script type='text/javascript' src='http://embed.xinhuanet.com/main/s?user=AllyesNetwork|overseas|Xfuchaung&db=xinhuanet&border=0&local=yes&js=ie' charset='gbk'></script>");};})();	