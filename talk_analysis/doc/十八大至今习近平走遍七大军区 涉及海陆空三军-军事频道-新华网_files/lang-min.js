/**
 *  Common Basic Library developed by jimmy.song at 2013/05/22
 *  1.1 添加friendlyDate方法，处理友好日期提示 
 *  @version 1.1
 *  @author jimmy song
 *  @date 2013/05/22
 */
KISSY.add("xh/common/1.0/lang",function(a,b){var c={};return c.extend=function(a,b,d){if("object"!=typeof a||"object"!=typeof b)return a;for(var e in b)"undefined"!=typeof a[e]&&typeof b[e]==typeof a[e]?"object"!=typeof a[e]||a[e]instanceof Array||!d?a[e]=b[e]:c.extend(a[e],b[e],d):a[e]=b[e];return a},c.extend(c,{query:function(a){return b(a)},clone:function(a){var d,b=function(){},c=typeof a;return"object"===c?b.prototype=a:"function"===c&&(d=new a,b.prototype=d,d=null),new b},appendScript:function(a){var d,e,f,g,b={async:!1,src:null,charset:"UTF-8",defer:!1,cache:!0,parent:!1,success:function(){},error:function(){}};c.extend(b,a,!0),null!=b.src&&b.src||a.error(),d=b.src,b.cache||(e=b.src.indexOf("?")>=0,d+=(e?"&":"?")+"_="+Math.floor(1e5*Math.random())),f=document.createElement("script"),f.async=b.async,f.src=d,f.charset=b.charset,f.attachEvent?f.attachEvent("onreadystatechange",function(){("loaded"==f.readyState||"complete"==f.readyState)&&(b.success(),f.detachEvent("onreadystatechange",arguments.callee))}):f.addEventListener("load",function(){b.success(),f.removeEventListener("load",arguments.callee,!1)},!1),f.onerror=function(){b.error()},g=b.parent?b.parent:document.getElementsByTagName("head")[0],g.appendChild(f)},addEvent:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},removeEvent:function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},addClass:function(a,b){a.className+=" "+b+" "},removeClass:function(a,b){a.className=this.replaceAll(a.className,b,"")},replaceAll:function(a,b,c){return r=new RegExp(b,"g"),a.replace(r,c)},ellipsis:function(a,b,c){return"undefined"==typeof c&&(c="..."),a.length>b&&(a=a.substring(0,b-c.length)+c),a},createNode:function(a){var b,c,d,e,f;if("object"!=typeof a||a instanceof Array)return null;b=document.createElement(a.tag);for(c in a)if(d=a[c],"tag"!==c&&"node"!==c)if("event"===c&&d instanceof Array)for(e=0;e<d.length;e++)f=d[e],this.addEvent(b,f.type,f.fn);else if("innerHTML"===c)b.innerHTML=d;else if("children"===c&&d instanceof Array)for(e=0;e<d.length;e++)b.appendChild(this.createNode(d[e]));else b[c]=d;return b},stopPropagation:function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},_timers:[],async:function(a){var c,d,b={fn:function(){},time:500,id:null,reload:!1};return this.extend(b,a),null!==b.id&&b.reload&&this.clearAsync(b.id),c=null,d=function(a,b){return function(){a(),null!==b&&(window.clearTimeout(b),b=null)}}(b.fn,c),c=window.setTimeout(d,b.time),null!==b.id&&this._timers.push({id:b.id,timer:c}),c},stopAsync:function(a){null!==a&&(window.clearTimeout(a),a=null)},clearAsync:function(a){var c,d,b=this._timers;for(c=b.length-1;c>=0;c--)d=b[c],d.id===a&&(this.stopAsync(d.timer),b.splice(c,1))},_queue:[],queue:function(a){var d,e,f,g,h,b={fn:function(){},id:null,params:void 0,run:!1};for(c.extend(b,a,!0),d=this._queue,e=!1,f=0;f<d.length;f++)if(g=d[f],g.id==b.id){e=g.stack;break}h=0,e===!1&&(e=[],d.push({id:b.id,stack:e,state:0}),h=d.length-1),e.push({fn:b.fn,params:b.params}),b.run&&this.queueRun(b.id)},queueShift:function(a){var e,f,g,b=this._queue,c=!1,d=!1;for(e=0;e<b.length;e++)if(f=b[e],f.id==a){d=f.stack,c=f;break}d!==!1&&(g=d.shift(),g?g.fn(g.params):f.state=0)},queueRun:function(a){var c,d,b=this._queue;for(c=0;c<b.length;c++)if(d=b[c],d.id==a){1!==d.state&&(d.state=1,this.queueShift(a));break}},dateFormat:function(a,b){var c,d;if(!a||"Invalid Date"===a.toString()||isNaN(a))return"";c={"M+":a.getMonth()+1,"d+":a.getDate(),"H+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()},/(y+)/.test(b)&&(b=b.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(d in c)new RegExp("("+d+")").test(b)&&(b=b.replace(RegExp.$1,1==RegExp.$1.length?c[d]:("00"+c[d]).substr((""+c[d]).length)));return b},serialize:function(a,b){var c,d,e,f,g;if(a instanceof Array)return a.toString();if("object"!=typeof a)return a.toString();c=[];for(k in a)if(d=a[k],d instanceof Array)for(e=0;e<a[k].length;e++)f=a[k][e],f="undefined"==typeof f?"":f,c.push(k+"="+encodeURIComponent(f));else"object"==typeof d?c.push(this.serialize(d)):(d="undefined"==typeof d?"":d,c.push(k+"="+encodeURIComponent(d.toString())));return g=c.join("&"),c=null,b?encodeURI(g):g},sleep:function(a){for(var b=(new Date).getTime();(new Date).getTime()<b+a;);},nowTime:new Date,friendlyDate:function(a,b){var n,o,p,d=this.nowTime.getTime(),e=this.nowTime,f=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()],g=e.getDate(),h=new Date(a),i=[h.getFullYear(),h.getMonth(),h.getDate(),h.getHours(),h.getMinutes(),h.getSeconds()],j=h.getDate(),k=g==j?"今天":j==g-1?"昨天":j==g-2?"前天":"本月dd日",l=["yyyy年MM月dd日 HH:mm","MM月dd日 HH:mm",k+" HH:mm",f[3]-i[3]+"小时前",f[4]-i[4]+"分钟前",f[5]-i[5]+"秒前"],m=0;for(n=0;n<i.length;n++)if(f[n]>i[n]){m=n;break}return delete f,delete i,o=l[m],3==m?(p=Math.floor(d-a)/36e5,o=1>p?Math.floor(60*p)+"分钟前":o):4==m&&(p=Math.floor(d-a)/6e4,o=1>p?Math.floor(60*p)+"秒前":o),b&&"zh"!=b&&(o="yyyy-MM-dd HH:mm:ss"),c.dateFormat(h,o)}}),c},{requires:["sizzle"]});