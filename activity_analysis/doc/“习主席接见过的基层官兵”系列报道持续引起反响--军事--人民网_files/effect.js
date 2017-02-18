// JavaScript Document
function showNew1(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("new1_"+i);
		var curBtn=document.getElementById("newc1_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="t01"
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function showNew2(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("new2_"+i);
		var curBtn=document.getElementById("newc2_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="t01"
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function showNew3(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("new3_"+i);
		var curBtn=document.getElementById("newc3_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="t01";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function showNew4(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("new4_"+i);
		var curBtn=document.getElementById("newc4_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="t01";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function showPH(n){
	for(var i=1;i<=4;i++){
		var curCon=document.getElementById("ph_"+i);
		var curBtn=document.getElementById("phc_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="red"
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}

function CopyURL(){
var myHerf=top.location.href;
//var title=document.title;
if(window.clipboardData){
var tempCurLink=myHerf;
var ok=window.clipboardData.setData("Text",tempCurLink);
if(ok) alert("链接地址复制完成！");
}else{alert("对不起，目前此功能只支持IE，请直接复制地址栏的地址！");}
}

 function AXzhz(hideme)
 {
  var AX=document.all(hideme);
  AX.style.display=AX.style.display=="none"?"":"none";
 }
 function BXzhz(hideme)
 {
  var BX=document.all(hideme);
  BX.style.display=BX.style.display=="none"?"":"none";
 }

	function addToBookmark(){
                var href="${FULLURL}";
                var title="${TITLE}";
		var url = "http://bookmark.people.com.cn/user/addBookmark.do?url=" + encodeURIComponent(href) + "&title=" + encodeURIComponent(title);
		document.location.href = url;
	}
	
/*count*/
function writelog(){//获取指定名称的cookie的值
		var cid = "";
		var catalogs= "";
		var keyword = "";
		var refer = window.top.document.referrer;
		var arrstr = document.cookie.split("; ");
		for(var i = 0;i < arrstr.length;i ++){
			var temp = arrstr[i].split("=");
			if(temp[0] == "wdcid"){
				cid = unescape(temp[1]);
				break;
			}
		}
		var metas = document.getElementsByTagName("meta");
		for(var i=0; i<metas.length;i++){
			if(metas[i].getAttribute("name") == "keywords") {
				keyword = metas[i].getAttribute("content");
			}
			if(metas[i].getAttribute("name") == "catalogs") {
				catalogs = metas[i].getAttribute("content");
			}
		}
		document.write("<img src='http://58.68.146.78/index/?cid="+cid+"&catalogs="+catalogs+"&keyword="+keyword+"&refer="+refer+"' style='position:absolute;top:-1000px;'>");
	}
	writelog();


