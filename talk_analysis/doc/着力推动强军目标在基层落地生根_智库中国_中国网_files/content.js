(function($) {
  $('#c_comment').append('<wb:comments url="auto" width="auto" appkey="3175731267"></wb:comments>');
})(jQuery);
(function($) {
  $('#box1, #box2').hide();
  var jgUrl = $.trim($('#jigou').text());
  var rwUrl = $.trim($('#renwu').text());
  
  if(jgUrl.match('http')) {
    $.get(jgUrl,function(data){
      var digest = data.match(/<dl class="box1 fl">([\s\S]*?)<\/dl>/);
      if (! digest[1]) {
        return;
      }
      var obj = $('<dl>' + digest[1] + '</dl>');
      var imgSrc = obj.find('img').attr('src');
      var imgTitle = obj.find('dd').text();
      $('#box1').html('<dt><a href="'+ jgUrl +'" target="_blank"><img src="'+ imgSrc +'" width="230" height="185"></a></dt><dd><a href="'+ jgUrl +'" target="_blank">'+ imgTitle +'</a></dd>').show();
    });
  }
  
  if(rwUrl.match('http')) {
    $.get(rwUrl,function(data){
      var digest = data.match(/(<div class="box2 fr">[\s\S]*?)<!--end/);
      if (! digest[1]) {
        return;
      }
      var obj = $(digest[1]);
      var imgSrc = obj.find('img').attr('src');
      var imgTitle = obj.find('h1').text();
      var imgDoc = obj.find('p').text();
      $('#box2').html('<p><a href="'+ jgUrl +'" target="_blank"><img src="'+ imgSrc +'" width="170" height="170"></a></p><h2><a href="'+ jgUrl +'" target="_blank">'+ imgTitle +'</a></h2><p>'+ imgDoc +'</p>').show();
    });
  }
  
})(jQuery);