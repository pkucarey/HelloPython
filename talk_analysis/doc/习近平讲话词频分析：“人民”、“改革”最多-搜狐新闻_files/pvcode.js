/*
 * @date 2013-11-18
 * @usage 在点击事件回调里调用_pv.send(code);
 */(function(a){a._pv={protocol:a.location.protocol,host:"pv.sohu.com",send:function(a){var b=new Image;b.src=this.createURL(a)},createURL:function(a){var b=(new Date).getTime(),c=this.protocol+"//"+this.host+"/pv.gif?t?="+b+"?r?=promote?code="+a;return c}}})(window);