soNewsCallback_10051({
	data: [{"img":"http://news.xinhuanet.com/2013-12/10/118492756_14339876001311n.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10051_1&v=24714&p=10051_1","title":"日本新生猫头鹰宝宝"},{"img":"http://news.xinhuanet.com/2013-12/10/118492715_14339876209131n.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10051_2&v=24714&p=10051_2","title":"市民水中捞车牌"}]
});

(function(win){
	/* 展示打点 */
	new Image().src = 'http://stat.lianmeng.360.cn/media/i.gif?ls=10051&_t=' + Math.random();
	/* 点击打点 */
	var isLink = function(elem) {
		return elem.tagName == 'A';
	}
	var clickHandler = function(e) {
		e = win.event || e;
		var target = e.target || e.srcElement;
		var count = 0;
		while (count < 3 && !isLink(target)) {
			target = target.parentNode;
			count++;
		}
		if (!target || !isLink(target)) {
			return;
		}
		var href = target.href;
		if (!href || href.indexOf('http://sh.qihoo.com/') != 0) {
			return;
		}
		new Image().src = 'http://stat.lianmeng.360.cn/media/c.gif?ls=10051&t=' + encodeURIComponent(win.location.href) + '&_t=' + Math.random();
	}
	
	if (win.QIHOO_NEWS_CLICK_TRACK) {
		return;
	}
	var container = document.body;
	if (container.addEventListener) {
		container.addEventListener('click', clickHandler, false);
	} else {
		container.attachEvent('onclick', clickHandler);
	}
	win.QIHOO_NEWS_CLICK_TRACK = 1;
})(window);