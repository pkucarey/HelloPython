document.domain = 'china.com.cn';
$(document).ready(function(e) {
	/*导航*/
  $('#mainBav > ul > li:last').css('border','none');
	$('#mainBav ul li div').hide();
	$('#mainBav > ul > li').mouseover(function() {
		$(this).addClass('cur');
    $(this).find('div').show();
  });
	$('#mainBav > ul > li').mouseout(function() {
		$(this).removeClass('cur');
    $(this).find('div').hide();
  });
	
	/*返回顶部*/
	$(window).scroll(function() {
		var real_top = document.documentElement.scrollTop || document.body.scrollTop;
		if(0 == real_top){
			$('#webTop').hide();
		}else{
			$('#webTop').show();
		}
	});
	$('#webTop').click(function(e) {
    window.scrollTo(0,0);
  });
	
	// TODO：回到顶部
	$('#gn2').click(function(e) {
		window.open('http://e.weibo.com/guoqingzhongxin?topnav=11','中国国情');
		window.scrollTo(0,seat);
  });	
	$('#gn3').click(function(e) {
    window.scrollTo(0,0);
  });
	var foot = $('#footer');
	var bar = $('#top');
	$(window).scroll(function() {
		var limit = foot.offset().top - bar.height() - 20;
		var cur = bar.offset().top;
		var curb = Number(bar.css('bottom').split('px')[0]);
		if (cur > limit) {
				bar.css({'bottom': curb + cur - limit});
		} else {
				if (curb > 20) {
						bar.css({'bottom': curb + cur - limit});
				} else {
						bar.css({'bottom': 20});
				}
		}
	});
	
	/*国情关注*/
	$('#attention dl dd:gt(0)').hide();
	$('#attention dl dt:eq(0)').prepend('<span class="on"></span>');
	$('#attention dl dt:gt(0)').prepend('<span class="off"></span>');
	
	$('#attention dl dt span').click(function() {
		$('#attention dl dd').hide();
		$('#attention dl dt span').removeClass();
    $(this).parent('dt').siblings('dd').slideToggle("fast","linear");
		$(this).addClass('on');
  });
	
	/*中国故事往期回顾*/
	$('#storyList dl:last').css('border-bottom','none');
	$('#storyList dl dt').prepend('<span class="off"></span>');
	$('#storyList dl dd').prepend('<span class="on"></span>');
	$('#storyList dl dt:eq(0)').hide();
	$('#storyList dl dd:gt(0)').hide();
	$('#storyList dl dt span').click(function() {
		$('#storyList dl dt').show();
		$('#storyList dl dd').hide();
		$(this).parent('dt').hide();
		$(this).parent('dt').siblings('dd').show();
	})
	$('#storyList dl dd span').click(function() {
		$(this).parent('dd').hide();
		$(this).parent('dd').siblings('dt').show();
	})
	
	/*国情索引*/
	$('.conditionsTab:odd').css('float','right');
	
	/*中国百科*/
	var baikeObj = $('#baike > div > div');
	var baikeNum = 0;
	$('#baike > div').width((baikeObj.width() + 11) * baikeObj.length);
	$('#baike .leftArrow').click(function() {
		baikeNum = (baikeObj.length + baikeNum - 4) % (baikeObj.length - 3);
    $('#baike > div').animate({'margin-left': -baikeNum*247});
  });
	$('#baike .rightArrow').click(function() {
		baikeNum = (baikeNum + 1) % (baikeObj.length - 3);
    $('#baike > div').animate({'margin-left': -baikeNum*247});
  });
	
	/*图片展示*/
	picShow('#newsPicBox');
	picShow('#culturePic');
	picShow('#historyPic');
	picShow('#geographicPic');
	
	/*标签切换*/
	$('.inList > h2 span:last-child').css('border-right', 'none');
	$('.inList > div:not(:nth-child(2))').hide();
	$('.inList > h2 span').mouseover(function() {
    var index = $(this).index();
		$(this).siblings().removeClass('cur');
		$(this).addClass('cur');
		$(this).parent().siblings('div').hide();
		$(this).parent().siblings('div').eq(index).show();
  });
	
	/*政府白皮书*/
	$('#zfbps li').css('width','84px');
	
	/*中国排行*/
	$(document).ready(function(){
		var xmlurl = 'http://www.china.com.cn/paihang_cn/164.xml';
		$('body').prepend('<iframe src="http://www.china.com.cn/test/tifr.html?#'+ xmlurl +'" style="display: none;"><\/iframe>');
	})
	
	/*国情应用*/
	var appLen = $('#appTab > div').length;
	var appCur = 0;
	$('#appTab').width(appLen * 100);
	$('#appTab > div').each(function(index, element) {
    $(this).find('img').eq(1).hide();
  });
	$('#appTab > div').mouseover(function(e) {
    $(this).find('img').hide();
		$(this).find('img').eq(1).show();
  });
	$('#appTab > div').mouseout(function(e) {
    $(this).find('img').hide();
		$(this).find('img').eq(0).show();
  });
	
	$('.appBox span:first').click(function(e) {
		appCur = (appCur - 9 + appLen) % (appLen - 8);
		$('.appIco > div').animate({ 'margin-left': -appCur * 100 });
  })
	$('.appBox span:last').click(function(e) {
		appCur = (appCur + 1) % (appLen - 8);
		$('#appTab').animate({ 'margin-left': -appCur * 100 });
  })
	
});

function picShow(id) {
	var nCur = 0;
	var box = $(id);
	var obj = box.find('dl');
	var objw = obj.width();
	var objl = obj.length;
	box.find('div').width(objl * objw);
	box.find('.leftArrow').click(function() {
		nCur = (objl + nCur - 1) % objl;
    box.find('div').animate({'margin-left': -nCur*objw});
  });
	box.find('.rightArrow').click(function() {
		nCur = (nCur + 1) % objl;
    box.find('div').animate({'margin-left': -nCur*objw});
  });
}

function xml(obj){
	$('#ranki').append('<ol><\/ol>');
	$(obj).find('item').each(function(index) {
		if(index > 9){ return false };
		var title = $("article", this).text();
		title = FixString(title,16);
		var url = $("url", this).text();
		$('#ranki ol').append('<li><a href="'+ url +'" target="_blank">' + title + '<\/a><\/li>');
	})
	$('#ranki ol li').each(function(index) {
		$(this).prepend('<span>' + (index + 1) + '<\/span>');
	});
}

function FixString(str,len) {
	var cCN = str.match(/[\x00-\xff]/g);
	var cEN = str.match(/[^\x00-\xff]/g);
	var lCN = null == cCN ? 0 : Math.ceil(cCN.length / 2);
	var lEN = null == cEN ? 0 : cEN.length;
	var l = lCN + lEN;
	return l > len ? str.substring(0, len) + '...' : str;
}