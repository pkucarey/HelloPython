soNewsCallback_10217({
	data: [{"img":"http://cpc.people.com.cn/NMediaFile/2016/0308/MAIN201603081410013712277434560.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10217_1&v=28783&p=10217_1","title":"周恩来各时期珍贵照片"},{"img":"http://cpc.people.com.cn/NMediaFile/2016/0308/MAIN201603081412564628180749128.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10217_2&v=28783&p=10217_2","title":"陈赓为何\"叫板\"毛泽东"},{"img":"http://cpc.people.com.cn/NMediaFile/2016/0308/MAIN201603081414088985608618365.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10217_3&v=28783&p=10217_3","title":"宋庆龄的非凡人生"},{"img":"http://cpc.people.com.cn/NMediaFile/2016/0308/MAIN201603081415182093045911341.jpg","url":"http://sh.qihoo.com/?src=lm&mt=10217_4&v=28783&p=10217_4","title":"毛泽东读遍数最多的书"}]
});

(function(win){
	/* 展示打点 */
	new Image().src = 'http://stat.lianmeng.360.cn/media/i.gif?ls=10217&_t=' + Math.random();
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
		new Image().src = 'http://stat.lianmeng.360.cn/media/c.gif?ls=10217&t=' + encodeURIComponent(win.location.href) + '&_t=' + Math.random();
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