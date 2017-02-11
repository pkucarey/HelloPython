	
$(function() {
	/************初始执行效果*************/

	//日历
	calendar_index();
	
	//滚动新闻
	jishixinwen();
	
	//关键词显示到搜索框
	var hotkey = $("meta[name='keywords']").attr("content");
	if (hotkey) {
		hotparams = hotkey.split(",")[0];
		$("#q").val(hotparams);
	}
	
	
	/************事件效果*************/
	
	//页签效果
	$(".tab .tab_title li").mouseover(function () { 
        $(this).addClass('active'); 
        $(this).siblings().removeClass('active') 
        var _index = $(this).index(); 
        $(this).parent().parent().parent().find('.tab_box_content').eq(_index).show().siblings().hide(); 
    }) 

	//字体放大缩小
	$("#content").attr("class","content1");
	set_font();
	
	/****** end *******/
	
})


function calendar_index(){
var enabled = 0;var today = new Date();var day;var date;var centry="";
if(today.getDay()==0) day="星期日";if(today.getDay()==1) day="星期一";if(today.getDay()==2) day="星期二";if(today.getDay()==3) day="星期三";if(today.getDay()==4) day="星期四";if(today.getDay()==5) day="星期五";if(today.getDay()==6) day="星期六"
if(today.getFullYear()<2000) centry = "19";
date1=centry+(today.getFullYear())+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日  ";date2=""+day;
$("#date").html(date1+date2);
// 中文日历日期开始   
var CalendarData=new Array(100);var madd=new Array(12);var tgString="甲乙丙丁戊己庚辛壬癸";var dzString="子丑寅卯辰巳午未申酉戌亥";var numString="一二三四五六七八九十";var monString="正二三四五六七八九十冬腊";var weekString="日一二三四五六";var sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";var cYear,cMonth,cDay,TheDate;
CalendarData = new Array(0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5, 0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95);
madd[0]=0;madd[1]=31;madd[2]=59;madd[3]=90;madd[4]=120;madd[5]=151;madd[6]=181;madd[7]=212;madd[8]=243;madd[9]=273;madd[10]=304;madd[11]=334; 
function GetBit(m,n) {  return (m>>n)&1; }
function e2c(){  
TheDate= (arguments.length!=3) ? new Date() : new Date(arguments[0],arguments[1],arguments[2]);  
var total,m,n,k;var isEnd=false;var tmp=TheDate.getFullYear();  
total=(tmp-1921)*365+Math.floor((tmp-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-38;  if (TheDate.getYear()%4==0&&TheDate.getMonth()>1) { total++;}  for(m=0;;m++)  {    k=(CalendarData[m]<0xfff)?11:12;    for(n=k;n>=0;n--)    {      if(total<=29+GetBit(CalendarData[m],n))      {        isEnd=true; break;      }      total=total-29-GetBit(CalendarData[m],n);    }    if(isEnd) break;  }  cYear=1921 + m; cMonth=k-n+1; cDay=total;  if(k==12)   {    if(cMonth==Math.floor(CalendarData[m]/0x10000)+1) { cMonth=1-cMonth; }    if(cMonth>Math.floor(CalendarData[m]/0x10000)+1)  { cMonth--; }   }}
function GetcDateString(){ var tmp="";  tmp+=tgString.charAt((cYear-4)%10); tmp+=dzString.charAt((cYear-4)%12);tmp+="年 "; 
if(cMonth<1) { tmp+="(闰)"; tmp+=monString.charAt(-cMonth-1); } else {tmp+=monString.charAt(cMonth-1);}  tmp+="月";  tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"三十")); 
if (cDay%10!=0||cDay==10) { tmp+=numString.charAt((cDay-1)%10); }  return tmp;}
function GetLunarDay(solarYear,solarMonth,solarDay){ if (solarYear<1921 || solarYear>2020)  {return "";} else {solarMonth = (parseInt(solarMonth)>0) ? (solarMonth-1) : 11;e2c(solarYear,solarMonth,solarDay); return GetcDateString();}}
var D=new Date();var yy=D.getFullYear();var mm=D.getMonth()+1;var dd=D.getDate();var ww=D.getDay();var ss=parseInt(D.getTime() / 1000); 
$("#todate").html(GetLunarDay(yy,mm,dd));
}

//字体放大缩小
function set_font(){

	var f_s = $("#center .font_small");
	var f_a = $("#center .font_add");
	var f_c = $("#content");
	
	f_s.click(function(){
		if( f_c.attr("class")=="content1"){
			return false;
		}
		else if( f_c.attr("class")=="content2"){
			$(this).addClass("font_small_dis");
			changefontsize(1);
		}
		else{
			f_a.removeClass("font_add_dis");
			changefontsize(2);
		}
		return false;
	})
	
	
	f_a.click(function(){
		if( f_c.attr("class")=="content1"){
			f_s.removeClass("font_small_dis");
			changefontsize(2);
		}
		else if( f_c.attr("class")=="content2"){
			$(this).addClass("font_add_dis");
			changefontsize(3);
		}
		else{
			$(this).removeClass("font_add_dis"); return false;
		}
		return false;
	})
}
function changefontsize(thisSize){
	if(thisSize == "3"){
		$("#content").css("font-size","18px").attr("class","content3");
	}
	if(thisSize == "2"){
		$("#content").css("font-size","16px").attr("class","content2");
	}
	if(thisSize == "1"){
		$("#content").css("font-size","14px").attr("class","content1");
	}
}

//及时新闻滚动函数
function jishixinwen(){
	var w = $("#gd_content").width();
	var $a = $("#gd_content li");
	var l = $a.length;
	var cd = 450;
	//$a.eq(0).show().siblings().hide();
	var sw=0;
	function autogd(i){
		if(i==(l-1)){
			$("#gd_content").css({left:"450px"});
			var d = 0;
		}
		else{
			var d = cd*(i+1);
		}
		$("#gd_content").animate({ left: -d }, 1000);
	}
	$a.hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		   autogd(sw);
		   sw++;
		   if(sw==l){sw=0;}
		} , 5000);
	});
		var myTime = setInterval(function(){
		   autogd(sw);
		   sw++;
		   if(sw==l){sw=0;}
		} , 5000);
};


