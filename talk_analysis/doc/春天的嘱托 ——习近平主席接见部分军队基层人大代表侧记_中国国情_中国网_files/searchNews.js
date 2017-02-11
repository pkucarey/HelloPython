$(function(){
	$('#relatedBox').hide();
	var searchKey = $.trim($('#searchKey').text());
	$.getScript("http://search1.china.com.cn/search/guoqing/json_fzw.jsp?nItem=10&ntitle=32&sub="+ searchKey, function(){
		var temp = '';
		for(var i=0; i<GuoqingSearchNews.length; i++){
			temp += '<li><a href="'+ GuoqingSearchNews[i].url +'">'+ GuoqingSearchNews[i].title +'</a></li>';
		}
		temp = '<ul>'+ temp +'</ul>';
		$('#relatedBox').append(temp).show();
	});
})