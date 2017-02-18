(function($) {
  //$('.artLink a:first').attr('href','http://news.china.com.cn').html('新闻');
  //$('.artLink a:eq(1)').html('军事');
	$('.artLink a:first, .artLink font:first').remove();
  
  $("#sinawb").html('<wb:follow-button uid="2872667230" type="red_3" width="275" height="24" ></wb:follow-button>');
  $('.mTitle').each(function() {
    var t = $(this).text();
    if(t == '热点资讯') {
      $(this).hide();
    }
  });
})(jQuery);