/**/
$(document).ready(function() {
		var cookie = function(name, value, options) {
			if (typeof value != 'undefined') {
				options = options || {};
				if (value === null) {
					value = '';
					options = $.extend({}, options);
					options.expires = -1;
				}
				var expires = '';
				if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
					var date;
					if (typeof options.expires == 'number') {
						date = new Date();
						date.setTime(date.getTime() + (options.expires));
					} else {
						date = options.expires;
					}
					expires = '; expires=' + date.toUTCString();
				}
				var path = options.path ? '; path=' + (options.path) : '';
				var domain = options.domain ? '; domain=' + (options.domain) : '';
				var secure = options.secure ? '; secure' : '';
				document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
				} else {
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
		};
		// 先判断来源
		var referrer = document.referrer;
		//var baiduReg = /baidu\.com/ig;
		//var soReg = /so\.com/ig;
		var baiduList = ['baidu']
		var soList = ['360','qihoo','.so.com']
		var referrerInCookie = cookie('referrerFrom');
		if(referrer.indexOf(baiduList[0]) > -1) {
			cookie('referrerFrom', 'baidu', {expires:60 * 60 * 1000});
			$('.ad_360').hide();
		} else if (referrer.indexOf(soList[0]) > -1 || referrer.indexOf(soList[1]) > -1 || referrer.indexOf(soList[2]) > -1) {
			cookie('referrerFrom', 'so', {expires:60 * 60 * 1000})
			$('.ad_baidu').hide();
		} else if(referrerInCookie == 'baidu') {
			$('.ad_360').hide();
		} else if(referrerInCookie == 'so') {
			$('.ad_baidu').hide();
		}

});
