var ROOTDM=[".81.cn",".81rc.mil.cn",".chinamil.com.cn",".gfdy.gov.cn",".mod.gov.cn",".dayoo.com",".dayoo.com:8282"],RECENDM=[".dayoo.com",".dayoo.com:8282"],INCLUDESUBHOST=["www.chinamil.com.cn"],SHOWERRHOST=1,_wdUID="34",_wecl="//cl3.webterren.com/1.gif",_wevcl="//cl3.webterren.com/2.gif";//34
var _webdigObj = {};
_webdigObj.pro = function() {
  if(_webdigObj.getMeta("_catalogs")||_webdigObj.getMeta("_subject")){
    _webdigObj._catalogs = _webdigObj.getMeta("_catalogs");
    _webdigObj._subject = _webdigObj.getMeta("_subject");
    
    _webdigObj.params = {};
		_webdigObj.params.reg = {};
		_webdigObj.params.reg.html = "<nodeid>(\\d+)</nodeid>";           
  
    var re = new RegExp(_webdigObj.params.reg.html, "ig"); 
    var arr = re.exec(document.body.innerHTML.replace(/\n/g,"").replace(/\r/g,""));
    
    if(RegExp.$1){
      if(_webdigObj._subject)
    	  _webdigObj.subject=_webdigObj._subject+RegExp.$1+";1";
      if(_webdigObj._catalogs)
    	  _webdigObj.catalogs=_webdigObj._catalogs+RegExp.$1;
    }
    return;
  }
  if((!_webdigObj.catalogs&&!_webdigObj.subject)||_webdigObj.subject==";1"){
    _webdigObj.params = {};
		_webdigObj.params.reg = {};
		_webdigObj.params.reg.html = "<nodeid>(\\d+)</nodeid>";           
  
    var re = new RegExp(_webdigObj.params.reg.html, "ig"); 
    var arr = re.exec(document.body.innerHTML.replace(/\n/g,"").replace(/\r/g,""));
    
    if(RegExp.$1){
      if(_webdigObj.subject==";1")
    	  _webdigObj.subject=RegExp.$1+";1";
      else
    	  _webdigObj.catalogs=RegExp.$1;
    }
  }
};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('q 1m(){}q 2a(){}q N(a){v a=S 2E(a),K(a)}q 2k(a){L(D c,b="",d=7;d>=0;d--)c=15&a>>>4*d,b+=c.1Y(16);v b}q 3a(a){D b,c,d,e;F(!a||""==a)v 1;L(b=3E,c=3D,d=0;d<a.G;d++)e=2i(a.3F(d)),b=(b<<6|c>>>26)+(b<<16|c>>>16)-b,c=3G&e+(c<<6)-c+(c<<16);v 2k(3I&b)+2k(c)}q 2s(){v 3a(p.13+p.T+p.2z+1b.1x())}q 2l(a){D b=1n,c=p.T,d=c.C(a);v-1!=d&&(d+=a.G+1,a=c.C(";",d),-1==a&&(a=c.G),b=c.2v(d,a)),b}q 3l(){D c,d,a="",b=Q;F(b.1y&&b.1y.G){L(c=0;c<b.1y.G;c++)F(-1!=b.1y[c].1F.C("2Q 2C")){a=b.1y[c].3H.3C("2Q 2C ")[1];2p}}22 F(I.2M)L(c=10;c>=2;c--)1f{F(d=3B("S 2M(\'2A.2A."+c+"\');")){a=c+".0";2p}}1l(e){}v a}q 2O(a){a=2r+a,1J=S 32(1,1),1J.2W=a,1J.3w=2a}q 3v(a){F(1z(),a&&""!=a){D b=A;0!=a.3x().C("14")&&(a=1Q+"//"+M+a),A=a,J=b}1V()}q 3y(a){1z(),a&&""!=a&&(A=1Q+"//"+M+a),1V()}q 2X(a){D c,b=p.1w("1u");L(c 35 b)F(b[c].1F==a)v b[c].2N}q 33(){1f{9.2g&&9.2g.27&&(A+=-1==A.C("?")?"?":"&",A+="27="+9.2g.27);D a=2X("1s");a&&""!=a&&(a=N(a),A+=-1==A.C("?")?"?":"&",A+="3A="+a)}1l(b){}}q 3z(a){1z(),33(),a&&""!=a&&(A=-1==A.C("?")?A+"?"+a:A+"&"+a);D b=9.36;b&&""!=b&&(A+=-1==A.C("?")?"?"+b:"&"+b),1V()}q 1z(){F("3J:"!=p.13.2F){F(p.37?1I=N(p.37):p.38&&(1I=N(p.38)),1e&&1n!=1e&&0!=1e.G){L(i=0;i<1e.G;i++)F(1e[i]&&M&&-1!=1e[i].C(M)){1c="0";2p}}22 1c="0";F("1"!=1c||1n==2V||1==2V){F("1"==1c&&1m(""),1d&&1n!=1d&&0!=1d.G&&M&&""!=M)L(i=0;i<1d.G;i++)-1!=M.C(1d[i])&&(12=1d[i]);1m("J="+J),J&&""!=J?(r=J.C(p.2q),r>=0&&8>=r||0==J.C("[")&&J.3K("]")==J.G-1&&(J="")):J="",1m("J="+J),1m("Z="+Z),1m("1t="+1t),1j&&(1C=2i(Z.3U(Z.C("3f")+5))),1j&&1C>=5&&(p.18.3b("#3m#3T"),1X=p.18.3V,p.18.3b("#3m#3W"),1M=p.18.3X(13.1D)?"1":"0");1f{1j&&(1o=p.3u)}1l(a){1o=0}1R=3l(),1S=(S 3k).3S()/-3R,"3M"!=1r 17&&1n!=17&&(2y=17.25,2B=17.3L,2c=17.3N,3e=2y+"x"+2B,1T&&1q>=4&&(2c=17.3O)),(1T&&1q>=4||1Z)&&(1p=Q.3Q),1j&&1q>=4&&!1Z&&(1p=Q.3P),1L=1==Q.3Y()?"1":"0",Q.2K&&(19=1==Q.2K?"1":"0"),1==19&&2J()}}}q 2J(){D a=p.T,b=a.C("1i=");F(0>b){F(1k="0",11=2s(),b="",12&&""!=12&&(b="2q="+12+";"),p.T="1i="+K(11)+";"+1v+b+"2n=/;",p.T.C("1i=")<0)v 19=0,2Y 0}22 F(1k="1",11=2l("1i"),11.C(".")>1&&(1k="0",11=2s(),b="",12&&""!=12&&(b="2q="+12+";"),p.T="1i="+K(11)+";"+1v+b+"2n=/;",p.T.C("1i=")<0))v 19=0,2Y 0;b=p.T.C("28="),0>b?1h=0:(1h=2i(2l("28")),1b.1x()/2m-1h<29&&(1A="0")),p.T="28="+3t.3s(1b.1x()/2m)+";"+1v+"2n=/;"}q 1V(){2u="0"==19?2t()+2b():2t()+3j()+2b(),2O(2u)}q 2t(){v"?z="+31+"&a="+1b.1x().1Y(16)+"&b="+N(2d)+"&B="+1I+"&c="+N(A)+"&d="+N(J)+"&e="+1M+"&f="+1o+"&H="+N(M)+"&E="+1c}q 2b(){v"&i="+N(1p)+"&j="+1L+"&k="+3e+"&l="+2c+"&m="+1R+"&n="+N(1X)+"&o="+1S}q 3j(){v"&r="+11+"&s="+1k+"&t="+1h+"&u="+1A}D 9,1J,1v,19,1L,1M,1R,1S,1p,1X,1o,1c,2d,1I,A,M,12,J,Z,1t,17,1q,1T,3h,1j,1Z,1C,11,1k,1h,1A,1b,29;2E.3p.2x=q(){D a=/^\\s+|\\s+$/g;v q(){v 1a.34(a,"")}}(),9=9||{},9.1u=p.1w("1u"),9.O=q(a){D c,b=9.1u;F(b)L(c=0;c<b.G;c++)F(b[c].1F==a)v b[c].2N.2x();v""},9.1g=9.O("1g"),9.1U=9.O("1U"),9.1G=9.O("1G"),9.1E=9.O("1E"),9.20=9.O("20"),9.1B=9.O("1B"),9.1s=9.O("1s"),9.1O=9.O("1O"),9.1P=9.O("1P"),9.1K=9.O("1K"),9.1N=9.O("1N"),9.3g=9.4m||q(){},9.3g(),9.36=q(){D a="";v a="4n="+K(9.1g)+"&",9.1E&&(a+="4o="+K(9.1E)+"&"),a+="4p="+K(9.1G?9.1G:0)+K(9.20?9.20:0)+K(9.1B?9.1B:0)+"&",9.1s&&(a+="4v="+K(9.1s)+"&"),9.1U&&(a+="4w="+K(9.1U)+"&"),9.1K&&(a+="4C="+K(9.1K)+"&"),9.1N&&(a+="4E="+K(9.1N)+"&"),9.1O&&(a+="4D="+K(9.1O)+"&"),9.1P&&(a+="4A="+K(9.1P)+"&"),9.2G&&(a+="4B="+K(9.2G)+"&"),a}(),1Q=13.2F.C("2D")>-1?"2D:":"14:",2r=1Q+4x,1v="4y=4z, 1 3Z 4k 2j:2j:2j 4l;",19="0",1L="0",1M="0",1R=0,1S=0,1p="",1X="",1o=0,1c="1",2d=""==p.2R?13.1D:p.2R,A=I.13.1D,M=I.13.48,12="",J=p.2z,Z=Q.45+" "+Q.2w,1t=Q.2I,17=I.1W,1q=Q.2w.2v(0,1),1T=-1!=Z.C("40")?!0:!1,3h=-1!=Z.C("41")?!0:!1,1j=-1!=Z.C("3f")?!0:!1,1Z=-1!=1t.C("43")?!0:!1,1C=0,1k="0",1h=0,1A="1",1b=S 3k,"14://2f.V.U.R/"==A&&49==9.1g&&(A="14://3q.V.U.R/",M="3q.V.U.R"),"14://2f.V.U.R/"==A&&4a==9.1g&&(A="14://3r.V.U.R/",M="3r.V.U.R"),"14://2f.V.U.R/"==A&&4h==9.1g&&(A="14://3n.V.U.R/",M="3n.V.U.R"),I.4c=2a,29=4d,q(){q e(){D b,a=p.1w("1u");L(b=0;b<a.G;b++)F("4e"==a[b].1F&&0!=a[b].2U&&"46"!=a[b].2U)v!0}q h(a){D e,b={z:31,a:1b.1x().1Y(16),c:N(I.13.1D),d:N(a),k:d,H:N(M),r:11},c="";L(e 35 b)c+="&"+e+"="+b[e];e=2r.34("1.39","3.39")+"?"+c.3i(1),2T=S 32(1,1),2T.2W=e}q i(a){D c,d,b=I.4s;"1H"!=1r b&&(b="2h"==p.2e?p.24.2Z:p.18.2Z),c=I.44,"1H"!=1r c&&(c="2h"==p.2e?p.24.3o:p.18.3o),d=I.4t,"1H"!=1r d&&(d="2h"==p.2e?p.24.3d:p.18.3d),1a.x=c+a.2S,1a.y=d+a.3c,1a.w=b}q j(b,c){D d=S i(b);c&&(d.x=b.2S+c.x,d.y=b.3c+c.y),a.G>10?l():a.2H(d)}q k(a){D c,d,b="";L(c=0;c<a.G;c++)d=a[c],b+=d.x+"*"+d.y+"*"+d.w+",";v b.3i(0,b.G-1)}q l(){F(a.G>0){D b=k(a.42(0,a.G));h(b)}}q m(){D d,a=n("4i"),b=q(a){v q(b){j(b,a)}};F(I.21)L(p.21("2L",q(a){j(a)},!0),I.21("4j",q(){l()},!0),d=0;d<a.G;d++)1f{a[d].2o.p.21("2L",b(a[d].P),!0)}1l(e){}22 F(I.23)L(p.23("2P",q(a){j(a)}),I.23("4f",q(){l()}),d=0;d<a.G;d++)1f{a[d].2o.p.23("2P",b(a[d].P))}1l(e){}4g(l,2m*c)}q n(a,b,c){D e,f,h,i,d=b;d||(d=[]),e=0;1f{f=c?c.2o.p.1w(a):p.1w(a),e=f.G}1l(g){e=0}L(h=0;e>h;h++)i=o(f[h]),c&&c.P&&(i.x+=c.P.x,i.y+=c.P.y),f[h].P=i,d.2H(f[h]),n(a,d,f[h]);v d}q o(a){P=S 4r,P.x=0,P.y=0;L(D b=a;1n!=b&&b!=p.18;)P.x+=b.4u,P.y+=b.4q,b=b.47;v P}D a=S 4b,c=30,d=0;I.1W&&"1H"==1r I.1W.25&&(d=I.1W.25),I.2I,i.3p.1Y=q(){v"X: "+1a.x+", Y:"+1a.y+", W:"+1a.w},e()&&m()}();',62,289,'|||||||||_webdigObj||||||||||||||||document|function|||||return|||||_wdSL||indexOf|var||if|length||window|_wdRP|escape|for|_wdHost|fesc|getMeta|position|navigator|cn|new|cookie|com|chinadaily||||_wdUA||_wdCID|_wdRDM|location|http|||_wdWS|body|_wdCK|this|curtime|_wdErr|ROOTDM|INCLUDESUBHOST|try|catalogs|_wdLS|wdcid|_wdIE|_wdBCID|catch|println|null|_wdFS|_wdLG|_wdBV|typeof|author|_wdRUA|meta|_wdED|getElementsByTagName|getTime|plugins|setup_data|_wdTO|pagetype|_wdIEV|href|subject|name|filetype|number|_wdCS|Aimg|publishdate|_wdJE|_wdHP|source|editor|reporter|_wdLP|_wdFl|_wdTZ|_wdNN|contentid|write_ref|screen|_wdCT|toString|_wdOP|publishedtype|addEventListener|else|attachEvent|documentElement|width||tid|wdlast|_wdTimeOut|_wdEC|getLocalInfo|_wdCD|_wdDT|compatMode|www|discuz|CSS1Compat|parseInt|00|wdhex|getCookie|1e3|path|contentWindow|break|domain|_wdCA|wdGenCID|getGeneralInfo|_dgURL|substring|appVersion|trim|_wdSW|referrer|ShockwaveFlash|_wdSH|Flash|https|String|protocol|speical|push|userAgent|setup_cookie|cookieEnabled|click|ActiveXObject|content|send_ref|onclick|Shockwave|title|clientX|refImg|value|SHOWERRHOST|src|getmetaContents|void|clientWidth||_wdUID|Image|setup_metadata|replace|in|url|characterSet|charset|gif|wdHash|addBehavior|clientY|scrollTop|_wdSR|MSIE|sec|_wdMC|slice|getCookieInfo|Date|wdFlash|default|africa|scrollLeft|prototype|usa|europe|round|Math|fileSize|wd_tracker|onload|toLowerCase|wd_reptracker|wd_paramtracker|_wdmd|eval|split|4023233417|1732584193|charCodeAt|4294967295|description|2147483647|file|lastIndexOf|height|undefined|colorDepth|pixelDepth|userLanguage|language|60|getTimezoneOffset|clientCaps|substr|connectionType|homePage|isHomePage|javaEnabled|Jan|Netscape|Mac|splice|Opera|pageXOffset|appName|disabled|offsetParent|host|1040061|1045801|Array|onerror|1800|uctk|onbeforeunload|setInterval|1100281|iframe|unload|2038|GMT|pro|_wdc|_wds|_wdt|offsetTop|Object|innerWidth|pageYOffset|offsetLeft|_wda|_wdci|_wecl|expires|Fri|_wdr|_wdsp|_wdp|_wda2|_wdori'.split('|'),0,{}))

function _wdRST(articles) {
       var d = document.getElementById("_wdrecdiv"); 
       if (d) {
           document.body.removeChild(d);
           return;
       }
       if (!articles || articles.length == 0) {
           if (typeof _wdRecs !== 'undefined') {
               articles = _wdRecs;
           } else {
               return;
           }
       }
       var s = "<div style='background-color: #7ac9ed; padding-left: 3px; font-size:1.2em; font-weight: bold;'>猜你喜欢";
       s += "<span style='display:inline-block;float:right;color:red;cursor:pointer;' onclick='javascript:document.body.removeChild(_wdrecdiv)'>x</span>";
       s += "</div>";
       s += "<ul style='padding:3px;'>";
       for (var i in articles) {
          if (articles.hasOwnProperty(i)) {
              var article = articles[i];
              var a = "<li><a href='"+article.url+"'>"+article.title+"</a></li>";
              s += a;
          }
       }
       s +="</ul><div>";
       var _recdiv = document.createElement("div");
       _recdiv.setAttribute("id", "_wdrecdiv");
       _recdiv.style.position="fixed";
       _recdiv.style.top="5%";
       _recdiv.style.right="1%";
       _recdiv.style.overflow="hidden";
       _recdiv.style.whiteSpace="nowrap";
       _recdiv.style.wordBreak="break-all";
       _recdiv.style.width="300px";
       _recdiv.style.border="solid #7ac9ed 2px";
       _recdiv.style.backgroundColor="white";

       _recdiv.innerHTML = s;
       document.body.appendChild(_recdiv);
       window._wdrecdiv = _recdiv;
}
function _wdRecInDomain() {
    if (self != top) return false; 

    if (typeof RECENDM === "object"  && RECENDM.length > 0) {
        var domain = document.domain;
        for (i = 0; i < RECENDM.length; i++) {
           if (domain.indexOf(RECENDM[i]) != -1) {
               return true;
           }
        }
    }
    return false;
}
function _wdLog(tag, msg) {
    if (console && typeof console.log == "function") { 
        console.log(tag);
        console.log(msg);
    }
}
function _wdError(errtype, msg) {
    this.type = errtype;
    this.message = msg;
}
_wdError.prototype = Object.create(Error.prototype);
_wdError.prototype.constructor = _wdError;
(function(){
    if (_wdRecInDomain()){
        var _wdRSUrl, errFired;
        var param="?z="+_wdUID+"&t="+Math.random()+"&u="+getCookie("wdcid")
        if (typeof _wrecl !== 'undefined' && _wrecl !== "") {
            _wdRSUrl = _wdLP + _wrecl
        } else {
            _wdRSUrl = _wdCA.replace("1.gif", "rec.js")
        }
        _wdRSUrl += param
        var  s = document.createElement("script");
        s.setAttribute("type", "text/javascript");
        document.getElementsByTagName('head')[0].appendChild(s);
        s.onload = function() {
            if (typeof _wdRecs !== 'undefined') {
                _wdLog("WDREC", _wdRecs);
                if (typeof _wdShowRecommends === "function") {
                    _wdShowRecommends(_wdRecs);
                }
            } else if (typeof _wdRecError !== 'undefined') {
                if (errFired) return;
                if (typeof  _wdOnRecommendError === "function") {
                    var err = new _wdError(1, _wdRecError);               
                    _wdOnRecommendError(err);
                    errFired = true;               
                }
            }
        };
        s.onerror = function(e) {
            if (errFired) return;
            if (typeof  _wdOnRecommendError === "function") {
                var err = new _wdError(2, e.toString());               
                _wdOnRecommendError(err);
                errFired = true;               
            }
        };
        s.setAttribute("src", _wdRSUrl);
    }
})()
