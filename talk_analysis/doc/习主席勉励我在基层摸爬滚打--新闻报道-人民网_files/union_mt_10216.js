soNewsCallback_10216({
	data: [{"img":"http://cpc.people.com.cn/NMediaFile/2016/0308/MAIN201603081425404322552092030.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10216_1&v=28782&p=10216_1","title":"省级“两会”人事观察"},{"img":"http://cpc.people.com.cn/NMediaFile/2016/0308/MAIN201603081428325408812027652.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10216_2&v=28782&p=10216_2","title":"巡视“回马枪”透露新信号"}]
});

(function(win){
	/* 展示打点 */
	new Image().src = 'http://stat.lianmeng.360.cn/media/i.gif?ls=10216&_t=' + Math.random();
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
		new Image().src = 'http://stat.lianmeng.360.cn/media/c.gif?ls=10216&t=' + encodeURIComponent(win.location.href) + '&_t=' + Math.random();
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