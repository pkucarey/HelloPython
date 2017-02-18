(function(window, $) {
    var _selfTag=/.*\/*xcomments\.news\.china\.js\?(.*)/i;
    var getParam=function(){var scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;i++){var uri=String(scripts[i].src);var result=uri.match(_selfTag);if(result){var arr=result[1].split("&");var ret={};for(var j=0,lenarr=arr.length;j<lenarr;j++){var map=arr[j].split("=");ret[map[0]]=map[1]}return ret}}return false};
    var run=function(){
        var info = initiateData();
        var xc_forward = info['forward'];
        var xc_comment = info['comment'];
        var xc_seed = info['seed'];
        var xc_hash = info['hash'];
        var digest = info['digest'];
        var query = info['query'];
        var author = info['author'];
        var tag_buf = author.split('\|');
        var is_closed = !! tag_buf[1] ? tag_buf[1] : 'flag_no';
        // HTML Template
        var html=[];
        
        if ('flag_no' == is_closed) {
            html.push('<form name="form1" method="post" target="_blank" action="'+xc_comment+'" onsubmit="return xc_validate(this); return false;">');
        } else {
            html.push('<form name="form1" method="post" target="_blank" action="" onsubmit="alert(\'提交成功\'); return false;">');
        }
        html.push('<div style="width:340px;padding:20px 30px;background:#F4F4F4;"><div style="text-align:right;"><span title="*遵守中华人民共和国有关法律、法规，尊重网络道德，承担一切因您的行为而直接或间接引起的法律责任。\n*中国网拥有管理笔名和留言的一切权利。\n*中国网新闻留言板管理人员有权保留或删除其管辖留言中的任意内容。\n*您在中国网留言板发表的言论，中国网有权在网站内转载或引用。\n*如您对管理有意见请向留言板管理员反映。\n*参与本留言即表明您已经阅读并接受上述条款。\n*文明办网文明上网举报电话：010-68993056 举报邮箱：jubao@china.org.cn">留言须知</span>　<span title="①凡本网注明“稿件来源：中国网”的所有文字、图片和音视频稿件，版权均属中国网所有，任何媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发表。已经本网协议授权的媒体、网站，在下载使用时必须注明“稿件来源：中国网”，违者本网将依法追究责任。\n② 本网未注明“稿件来源：中国网”的文/图等稿件均为转载稿，本网转载出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。如其他媒体、网站或个人从本网下载使用，必须保留本网注明的“稿件来源”，并自负版权等法律责任。如擅自篡改为“稿件来源：中国网”，本网将依法追究责任。如对稿件内容有疑议，请及时与我们联系。\n③ 如本网转载稿涉及版权等问题，请作者在两周内速来电或来函与中国网联系。">版权与免责声明</span></div>');
        html.push('<div style="overflow:hidden;margin-top:5px;"><textarea name="x_message" id="x_message" style="width:338px;height:80px;border:1px solid #D4D4D4;resize:none;"></textarea></div>');
        html.push('<div style="margin-top:20px;"><input type="submit" name="submit" value="" style="width:80px;height:25px;background:url(http://images.china.cn/images1/ch/2013News/t1.gif) no-repeat;border:0;cursor:pointer;"/>');
        if ('flag_no' == is_closed) {
            html.push('<a href="'+xc_forward+'?'+query.join('&')+'" target="_blank" style="margin-left:10px;"><img src="http://images.china.cn/images1/ch/2013News/t2.gif" style="vertical-align:top;"/></a></div></div>');
        } else {
            html.push('</div></div>');
        }
        html.push('<input type="hidden" name="x_siteid" value="'+digest['siteid']+'"/>');
        html.push('<input type="hidden" name="x_nsid" value="'+digest['nsid']+'"/>');
        html.push('<input type="hidden" name="x_domain" value="'+digest['domainname']+'"/>');
        html.push('<input type="hidden" name="x_puburl" value="'+encodeURIComponent('FounderComment'+digest['url'])+'"/>');
        html.push('<input type="hidden" name="x_link" value="'+encodeURIComponent(digest['url'])+'"/>');
        html.push('<input type="hidden" name="x_seed" value="'+xc_seed+'"/>');
        html.push('<input type="hidden" name="x_hash" value="'+xc_hash+'"/>');
        html.push('</form>');
        var params=getParam();
        if(params['id']){document.getElementById(params['id']).innerHTML=html.join('');}
    };
    var initiateData=function(){
        // Base URL
        var xc_base="http://xcomments.china.com.cn/";
        // API
        var xc_forward=xc_base+'x_forward.php';
        var xc_comment=xc_base+'x_comment.php';
        // Parse founder tags
        var htmldoc=String(document.body.innerHTML);
        var enpproperty=htmldoc.match(/<!--enpproperty[\s\S]*?\/enpproperty-->/g)[0];
        var digest={};
        digest['url']=enpproperty.replace(/[\s\S]*<!--enpproperty <url>(.*?)<\/url><domainname>[\s\S]*/g,'$1');
        digest['domainname']=enpproperty.replace(/[\s\S]*<\/url><domainname>(.*?)<\/domainname><abstract>[\s\S]*/g,'$1');
        digest['abstract']=enpproperty.replace(/[\s\S]*<\/domainname><abstract>(.*?)<\/abstract><date>[\s\S]*/g,'$1');
        digest['date']=enpproperty.replace(/[\s\S]*<\/abstract><date>(.*?)<\/date><author>[\s\S]*/g,'$1');
        digest['author']=enpproperty.replace(/[\s\S]*<\/date><author>(.*?)<\/author><title>[\s\S]*/g,'$1');
        digest['title']=enpproperty.replace(/[\s\S]*<\/author><title>(.*?)<\/title><keyword>[\s\S]*/g,'$1');
        digest['keyword']=enpproperty.replace(/[\s\S]*<\/title><keyword>(.*?)<\/keyword><subtitle>[\s\S]*/g,'$1');
        digest['subtitle']=enpproperty.replace(/[\s\S]*<\/keyword><subtitle>(.*?)<\/subtitle><introtitle>[\s\S]*/g,'$1');
        digest['introtitle']=enpproperty.replace(/[\s\S]*<\/subtitle><introtitle>(.*?)<\/introtitle><siteid>[\s\S]*/g,'$1');
        digest['siteid']=enpproperty.replace(/[\s\S]*<\/introtitle><siteid>(.*?)<\/siteid><nodeid>[\s\S]*/g,'$1');
        digest['nodeid']=enpproperty.replace(/[\s\S]*<\/siteid><nodeid>(.*?)<\/nodeid><nodename>[\s\S]*/g,'$1');
        digest['nodename']=enpproperty.replace(/[\s\S]*<\/nodeid><nodename>(.*?)<\/nodename>\/enpproperty-->[\s\S]*/g,'$1');
        digest['nsid']=digest['url'].split('content_')[1].split('.htm')[0];
        // Message degist
        var xc_seed=String(Math.round(Math.random()*(new Date()).getTime()));
        var buf_hash=[str_sha1(digest['siteid']),str_sha1(digest['nsid']),str_sha1(encodeURIComponent(digest['url'])),str_sha1(xc_seed)];
        var xc_hash=str_sha1(buf_hash.join('-'));
        // Forward link query string
        var query=[];
        query.push('x_siteid='+digest['siteid']);
        query.push('x_nsid='+digest['nsid']);
        query.push('x_domain='+digest['domainname']);
        query.push('x_puburl='+encodeURIComponent('FounderComment'+digest['url']));
        query.push('x_link='+encodeURIComponent(digest['url']));
        query.push('x_seed='+xc_seed);
        query.push('x_hash='+xc_hash);
        return {'forward':xc_forward,'comment':xc_comment,'seed':xc_seed,'hash':xc_hash,'digest':digest,'query':query,'author':digest['author']};
    };
    $(document).ready(function(){run();});
})(window, jQuery);
// Form validate
function xc_validate(form){with(form){var xc_comment=x_message?str_trim(String(x_message.value)):"";if(""==xc_comment){alert("评论内容不能为空！");return false}if(xc_comment.length<6){alert("您的评论太少了（不能少于6个字）\n这么好的内容怎么也得多说几句哈！");return false}}return true};
// String trim
function str_trim(str) { return str.replace(/(^[\s]*)|([\s]*$)/g, ''); }
// Message degist sha1
function str_sha1(msg){function rotate_left(n,s){return(n<<s)|(n>>>(32-s))}function lsb_hex(val){var ret=[];for(var i=0,vh,vl;i<=6;i+=2){vh=(val>>>(i*4+4))&15;vl=(val>>>(i*4))&15;ret.push(vh.toString(16)+vl.toString(16))}return ret.join("")}function cvt_hex(val){var ret=[];for(var i=0,v;i<8;i++){v=(val>>>(i*4))&15;ret.unshift(v.toString(16))}return ret.join("")}function utf8_encode(string){string=string.replace(/\r\n/g,"\n");var ret=[];for(var i=0,len=string.length,c;i<len;i++){c=string.charCodeAt(i);if(c<128){ret.push(String.fromCharCode(c));continue}if(c<2048){ret.push(String.fromCharCode((c>>6)|192));ret.push(String.fromCharCode((c&63)|128));continue}ret.push(String.fromCharCode((c>>12)|224));ret.push(String.fromCharCode(((c>>6)&63)|128));ret.push(String.fromCharCode((c&63)|128))}return ret.join("")}var blockstart,i,temp;var W=new Array(80);var H0=1732584193,H1=4023233417,H2=2562383102,H3=271733878,H4=3285377520;var A,B,C,D,E;msg=utf8_encode(msg);var msg_len=msg.length;var word_array=[];for(i=0;i<msg_len-3;i+=4){word_array.push((msg.charCodeAt(i)<<24)|(msg.charCodeAt(i+1)<<16)|(msg.charCodeAt(i+2)<<8)|msg.charCodeAt(i+3))}switch(msg_len%4){case 0:i=2147483648;break;case 1:i=(msg.charCodeAt(msg_len-1)<<24)|8388608;break;case 2:i=(msg.charCodeAt(msg_len-2)<<24)|(msg.charCodeAt(msg_len-1)<<16)|32768;break;case 3:i=(msg.charCodeAt(msg_len-3)<<24)|(msg.charCodeAt(msg_len-2)<<16)|(msg.charCodeAt(msg_len-1)<<8)|128;break}word_array.push(i);while((word_array.length%16)!=14){word_array.push(0)}word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&4294967295);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i]}for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1)}A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<80;i++){switch(Math.floor(i/20)){case 0:temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+1518500249)&4294967295;break;case 1:temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+1859775393)&4294967295;break;case 2:temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+2400959708)&4294967295;break;case 3:temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+3395469782)&4294967295;break}E=D;D=C;C=rotate_left(B,30);B=A;A=temp}H0=(H0+A)&4294967295;H1=(H1+B)&4294967295;H2=(H2+C)&4294967295;H3=(H3+D)&4294967295;H4=(H4+E)&4294967295}return String(cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4)).toLowerCase()};