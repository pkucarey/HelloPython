function hl$(id) {
    return document.getElementById(id);
}

function checksite() {
    var searchform = document.forms["headform"];

var site = searchform.site;
var nsite;
for(i=0;i<site.length;i++){
if(site[i].checked) nsite=site[i].value;
}
    switch (nsite) {
    case "1":
		if(searchform.searchText)
		searchform.searchText.name="title";
        searchform.action = "http://archive.china.com.cn:82/archive/searchck.jsp";
        searchform.title.name = "title";
        break;
    case "2":
		if(searchform.searchText)
		searchform.searchText.name="title";
	    var v=searchform.title.value;
        searchform.action = "http://search1.china.com.cn/search/guoqing/zhengwu.htm?w="+v;
        break;
    case "3":
		if(searchform.searchText)
		searchform.searchText.name="title";
		var v=searchform.title.value;
        searchform.action = "http://search1.china.com.cn/search/guoqing/gongbao.htm?w="+v;
        break;
    case "4":
		if(searchform.title)
		searchform.title.name="searchText";
        searchform.action = "http://search3.china.com.cn/search/searchcnphoto.jsp";
        break;
    default:
    }

}

