(function(){
    var sohuCsSid = '',
        cy_appId = window.APPID_SOHUCY || '',
        sohu_categoryId = window.category || '';

    if(window.entityId){
        sohuCsSid = window.entityId;
    }else if(window.topic){
        sohuCsSid = window.topic.topicId || '';
    }
    sohu_categoryId = sohu_categoryId.replace(/;/g,'|');

    window.cyCallbackfn = function(){}; //回调函数

    var doc = document,
        appid = cy_appId,
        src = 'http://changyan.sohu.com/api/2/topic/create',
        topic_url = encodeURIComponent(window.location.href),
        tipic_title = encodeURIComponent(document.title),
        topic_category_id = sohu_categoryId,
        s = doc.createElement('script'),
        h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.src = src+'?callback=cyCallbackfn&src='+src+'&client_id='+appid+
        '&topic_url='+topic_url+'&topic_source_id='+sohuCsSid+'&topic_title='+tipic_title+
        '&topic_category_id='+topic_category_id+'&cypreload=preload';
    h.insertBefore(s,h.firstChild);
})();