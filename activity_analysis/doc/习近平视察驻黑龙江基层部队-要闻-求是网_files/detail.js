// JavaScript Document
	
//频道匹配
var autoChannel = 
[
{sKey:"economy",sValue:"经济频道",sUrl:"http://www.qstheory.cn/economy/index.htm"},
{sKey:"politics",sValue:"政治频道",sUrl:"http://www.qstheory.cn/politics/index.htm"},
{sKey:"culture",sValue:"文化频道",sUrl:"http://www.qstheory.cn/culture/index.htm"},
{sKey:"society",sValue:"社会频道",sUrl:"http://www.qstheory.cn/society/index.htm"},
{sKey:"CPC",sValue:"党建频道",sUrl:"http://www.qstheory.cn/cpc/index.htm"},
{sKey:"science",sValue:"科教频道",sUrl:"http://www.qstheory.cn/science/index.htm"},
{sKey:"zoology",sValue:"生态频道",sUrl:"http://www.qstheory.cn/zoology/index.htm"},
{sKey:"defense",sValue:"国防频道",sUrl:"http://www.qstheory.cn/defense/index.htm"},
{sKey:"international",sValue:"国际频道",sUrl:"http://www.qstheory.cn/international/index.htm"},
{sKey:"freely",sValue:"纵横频道",sUrl:"http://www.qstheory.cn/freely/index.htm"},
{sKey:"books",sValue:"图书频道",sUrl:"http://www.qstheory.cn/books/index.htm"},
{sKey:"laigao",sValue:"原创频道",sUrl:"http://www.qstheory.cn/qslgxd/index.htm"},
{sKey:"zhuanqu/zywz",sValue:"重要文章",sUrl:"http://www.qstheory.cn/qszq/zywz/index.htm"},
{sKey:"bwtj",sValue:"要文要论",sUrl:"http://www.qstheory.cn/bwtj/index.htm"},
{sKey:"tjyd",sValue:"推荐阅读",sUrl:"http://www.qstheory.cn/tjyd/index.htm"},
{sKey:"zhuanqu/lldb",sValue:"理论导报",sUrl:"http://www.qstheory.cn/qszq/lldb/index.htm"},
{sKey:"dt",sValue:"求是动态",sUrl:"http://www.qstheory.cn/dt/index.htm"},
{sKey:"zhuanqu/qsft",sValue:"求是访谈",sUrl:"http://www.qstheory.cn/qszq/qsft/index.htm"},
{sKey:"zhuanqu/bkjx",sValue:"报刊精选",sUrl:"http://www.qstheory.cn/qszq/bkjx.htm"},
{sKey:"llqikan",sValue:"理论期刊",sUrl:"http://www.qstheory.cn/qsllqk/index.htm"},
{sKey:"subject",sValue:"求是专题",sUrl:"http://www.qstheory.cn/subject.htm"},
{sKey:"wp",sValue:"求是网评",sUrl:"http://www.qstheory.cn/qswp.htm"},
{sKey:"zhuanqu/tujie",sValue:"图解",sUrl:"http://www.qstheory.cn/qszq/tujie/index.htm"},
{sKey:"qsgdzx",sValue:"滚动资讯",sUrl:"http://www.qstheory.cn/qsgdzx/index.htm"},
{sKey:"bianji",sValue:"编辑园地",sUrl:"http://www.qstheory.cn/qsbjyd/index.htm"},
{sKey:"yaowen",sValue:"要闻",sUrl:"http://www.qstheory.cn/qsyw/index.htm"}
];

$(function(){
		//设置面包屑
		dongtai();
})

function dongtai(){
	var currurl = location.href;
	if(currurl.indexOf("gate/big5/www.qstheory.cn/")>0) {
		var pd = currurl.substring(currurl.indexOf("gate/big5/www.qstheory.cn/")+26,currurl.indexOf("/2"));
	}
	else {
		var pd = currurl.substring(currurl.indexOf("cn/")+3,currurl.indexOf("/2"));
	}
	var all_pd = autoChannel.length;
	for( var i=0; i<all_pd ; i++)
	{
		if(pd==autoChannel[i].sKey)	{
			//频道名称
			$(".autopd").html(autoChannel[i].sValue).attr("href",autoChannel[i].sUrl);
			//修改标题
			modify_title(autoChannel[i].sValue);
		}
	}
};

//修改标题
function modify_title(tit){
	var pagetit = document.title;
	pagetit += "-" +tit + "-求是网";
	document.title = pagetit; 
};