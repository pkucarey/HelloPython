document.domain = 'china.com.cn';

function fontZoom(size){
 document.getElementById('artbody').style.fontSize=size+'px'
}

$(function() {
	$('#font_change a').html('');
	
	/*页面功能*/
	$('body').append('<div id="top"><ul><li id="gn1" title="相关阅读">&nbsp;</li><li id="gn2" title="官方微博">&nbsp;</li><li id="gn3" title="返回顶部">&nbsp;</li></ul></div>');
	$('#gn1').click(function(e) {
    var seat = $('.relatedBox').offset().top;
		window.scrollTo(0,seat);
  });
	$('#gn2').click(function(e) {
		window.open('http://e.weibo.com/guoqingzhongxin?topnav=11','中国国情');
		window.scrollTo(0,seat);
  });	
	$('#gn3').click(function(e) {
    window.scrollTo(0,0);
  });
		
	// TODO：回到顶部
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
})