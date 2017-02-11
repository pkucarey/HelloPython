function newsCommentBar(count,link){
    var template='<div id="newsCommentBar" class="comm-top"><a title="我来说两句" href="'+link+'" target="_blank" class="scroll-comm">'+count+'</a><a title="返回顶部" href="" class="scroll-top"></a></div>';
    if($("#newsCommentBar").size()>0)
    {
        return;
    }
    $("body").append(template);
}