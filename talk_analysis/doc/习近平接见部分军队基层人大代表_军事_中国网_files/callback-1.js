var baseUrl='http://t.m.china.com.cn/';
//var baseUrl='http://txt.china.org.cn';


var xcall = {
  FNSC: (function() {
      var cc = document.getElementsByTagName("HEAD")[0];
      var c = document.createElement("DIV");
      c.style.display = "none";
      cc.appendChild(c);
      return c;
    })(),
  call: function(fnCallback,url,param) {
    var sc = document.createElement("SCRIPT");
    sc.type = "text/javascript";
    sc.charset = "UTF-8";
    sc.src = url +  "?fnCallback=" + fnCallback +"&"+param+"&"+Math.random();
    this.FNSC.appendChild(sc);
    
  }
}

function loadMoreContent(a){
	var tag = document.getElementById("moretag");
	tag.style.display="none";
	var contentdiv = document.getElementById("morecontent");
	contentdiv.style.display="";
	contentdiv.innerHTML=a;
	
	KISSY.ImageLazyload({ 
		mod: "manual", // 延迟模式。默认为 auto 
		diff: 30 // 当前屏幕下多远处的图片开始延迟加载。默认两屏外的图片才延迟加载 
		}); 
	
}

function convertPage(url){
	var param = "pageurl="+url;
	xcall.call("toPage","http://t.m.china.com.cn/pages/link.do",param);
}

function toPage(key){
	location.href=baseUrl+"convert/c_"+key+".html";
}
