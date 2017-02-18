function doZoom(size){
	document.getElementById('zoom').style.fontSize=size+'px'
//	setTailPosition()
	return false;
}

function SetFont(size)
{
  //var leadText = document.getElementById("boxshadow");
  var divBody = document.getElementById("p_content");
  //document.getElementById(16).className="none";
  //document.getElementById(15).className="none";
  //document.getElementById(14).className="none";
  if(!divBody)
  {
	  return;
  }
  //leadText.style.fontSize = size-3 + "px";
  divBody.style.fontSize = size + "px";
  var divChildBody = divBody.childNodes;
  for(var i = 0; i < divChildBody.length; i++)
  {
	  if (divChildBody[i].nodeType==1)
	  {
		  //leadText[i].style.fontSize = size-3 + "px";
		  divChildBody[i].style.fontSize = size + "px";
		  //document.getElementById(size).className="curt";
	  }
  }
}

function checkboard(){
	var res = true;
	if (form1.content.value==null || form1.content.value=="") {
		alert("发言内容不能为空！");
		res = false;
	}
	return res;
}

function doPrint() {
	if (window.print) {
		var p_title       = document.all.p_title.innerHTML;
		var p_publishtime = document.all.p_publishtime.innerHTML;
		var p_navigator   = document.all.p_navigator.innerHTML;
		var p_content     = document.all.p_content.innerHTML;
		var p_editor      = document.all.p_editor.innerHTML;
		var p_origin      = document.all.p_origin.innerHTML;
		
		var css = '<style type="text/css">' +
				  'p {  line-height: 140%}' +
				  '.fsubtitle {  line-height: 140%}' +
				  '.ftitle {  line-height: 140%; font-size: 24px; color: #000000}' +
				  'td {  font-size: 12px; color: #000000}' +
				  '</style>' ;

		var head ='<table width="600" border="0">' +
				  ' <tr> ' +
				  '    <td align="left"><img src="/img/logo.gif" width="173" height="60"> </td>' +
				  '  </tr>' +
				  '</table>';

		var nav  ='<table width="600" border="0" cellspacing="0" cellpadding="5"> ' +
			      '  <tr> ' +
			      '    <td width="605" align="left">' + p_navigator + '</td>' +
			      '    <td width="155" align="right">' + p_publishtime + '</td>' +
			      '  </tr>' +
			      '</table>' +
			      '<img src="/img/dot_red.gif" width="600" height="1" vspace="1"><br>' ;

		var body ='<table width="600" border="0" cellspacing="0" cellpadding="5">' +
			  	  '  <tr> ' +
			  	  '    <td  class="fbody" colspan="2" align="left"> ' +
			  	  '      <br><div align="center" class=fsubtitle><strong>' + p_title + '</strong></div><br>' + p_content + 
			  	  '    </td>' +
			  	  '  </tr>' +
			  	  '  <tr>' +
			      '    <td width="50%" height="50">' + p_origin + '</td>' +
			      '    <td align="right">' + p_editor + '</td>' +
			      '  </tr>' +
			  	  '</table>';

		var tail ='<img src="/img/dot_red.gif" width="600" height="1" vspace="1"><br>' +
				  '<table width="600" border="0" cellpadding="10">' +
				  '  <tr> ' +
				  '    <td align="center">人 民 网 版 权 所 有 ，未 经 书 面 授 权 禁 止 使 用<br>' +
				  '      Copyright &copy; 2015 www.people.com.cn. All rights reserved </td>' +
				  '  </tr>' +
				  '</table>';
	
		document.body.innerHTML = '<center>' + css + head + nav + body + tail + '</center>';
		window.print();
	}
}
function Glancesovertherecord(){
if(navigator.cookieEnabled){
	var tag = document.getElementById("new");
	var N = 10;
	var listCount = 10;
	var myTitle = escape(document.title) + "^";
	var myUrl = escape(document.location) + "$";
	var expTime = new Date(new Date().setDate(new Date().getDate() + 500));
	var edp = "|; expires=" + expTime.toGMTString() + "; path=/; domain=people.com.cn";
	var allCookie = document.cookie; 
	if(allCookie.indexOf("news=") != -1 || allCookie.indexOf("$|") != -1){
		var myCookieStart = allCookie.indexOf("news=") + "news=".length;
		var myCookieEnd = allCookie.indexOf("$|",myCookieStart);
		var myCookieall = unescape(allCookie.substring(myCookieStart,myCookieEnd));
		var myCookie = myCookieall.split("$");
		var myCookieTit = new Array();
		var myCookieUrl = new Array();
		for(var i = 0; i < myCookie.length; i++){
			var myCookieOne = myCookie[i].split("^");
			myCookieTit[i] = myCookieOne[0];
			myCookieUrl[i] = myCookieOne[1];
		}
		var tagDat = "";
		for(var i =myCookieTit.length - 1; i >= 0; i--){
			var textCount = myCookieTit[i].replace(/[^\x00-\xff]/g,"aa").length;
			if(textCount <= N*2){
				texts = myCookieTit[i];
			}else{
				for(var a = N; a < textCount; a++){
					texts = myCookieTit[i].substr(0,a);
					if(texts.replace(/[^\x00-\xff]/g,"aa").length >= N*2){
						texts += "..."
						break;
					}
				}
			}
			tagDat += "<a href=\"" + myCookieUrl[i] + "\"" + " title=\"" + myCookieTit[i] + "\">" + texts + "</a><br />"
		}
	if(tag)	
	tag.innerHTML =tagDat;
	var newCookie = "";
	if(myCookie.length < listCount){
		for(i in myCookie){
			if(myCookieTit[i] == document.title) continue;
			newCookie += escape(myCookieTit[i]) + "^" + escape(myCookieUrl[i]) + "$" ;
		}
	}else{
		for(var i = 1; i < listCount; i++){
			if(myCookieTit[i] == document.title) continue;
			newCookie += escape(myCookieTit[i]) + "^" + escape(myCookieUrl[i]) + "$" ;
		}
	}
	document.cookie = "news=" + newCookie + myTitle + myUrl + edp;
	}else{
		document.cookie = "news="+ myTitle + myUrl + edp;
			
	}
}else{
	tag.innerHTML="cookie closed."
}
}

//Glancesovertherecord();








