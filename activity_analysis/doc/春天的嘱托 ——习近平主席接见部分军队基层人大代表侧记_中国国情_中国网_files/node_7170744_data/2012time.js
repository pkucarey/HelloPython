var myDate=new Date();
var day=myDate.getDay();
var week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
document.write('今天是 '+ myDate.getFullYear() +'年'+ (myDate.getMonth() + 1) +'月'+ myDate.getDate() +'日 '+ week[day]);
(function(window){
  // 推广勿删
  document.write('<iframe id="cntv_spread" width="350" height="0" src="http://tv.cctv.com/lm/xgdd/extend2/tg3/mini/zgw/index.shtml" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>');
}(window));