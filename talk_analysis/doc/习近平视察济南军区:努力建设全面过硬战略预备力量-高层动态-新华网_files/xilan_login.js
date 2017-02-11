// JavaScript Document

document.writeln("<div  id=\"logoin\" class=\"xuan-logoin-form\">");
document.writeln("    <form name=\"loginForm\" id=\"xuan-loginForm\" action=\"http://login.home.news.cn/do_login1.jsp\" method=\"post\" onsubmit=\"return checkForm(this);\" target=\"_blank\">");
document.writeln("    <a href=\"http://my.xuan.news.cn\" target=\"_blank\"  class=\"sw\">炫空间</a>");
document.writeln("    <input type=\"text\" id=\"xuan-loginID\" name=\"loginID\" tabindex=\"1\" maxlength=\"20\" size=\"12\">");
document.writeln("    <span class=\"account\" id=\"xuan-account\">账号</span>");
document.writeln("    <input name=\"password\" type=\"password\" id=\"xuan-pswd\" tabindex=\"2\" maxlength=\"20\" size=\"12\"><span class=\"psw\" id=\"xuan-psw\">密码</span>");
document.writeln("    <input width=\"50\" class=\"btn_lt\" type=\"submit\" value=\"\">");
document.writeln("    <a class=\"btn_lt\" href=\"http://login.home.news.cn/login_n.jsp#register\" target=\"_blank\"></a>");
document.writeln("    </form>");
document.writeln("	</div><a href=\"http://www.xinhuanet.com/politics/2012lh/xuanwen/xuanwen_0229.html\" target=\"_blank\">新华炫闻</a><a target=\"_blank\" href=\"http://www.xinhuanet.com/shouji/chupingban.htm\">手机版</a><a target=\"_blank\" href=\"http://forum.home.news.cn/index.jsp\">论坛</a><a target=\"_blank\" href=\"http://t.home.news.cn/\">微博</a><a target=\"_blank\" href=\"http://www.news.cn/mail.htm\">邮箱</a><a href=\"http://www.news.cn/video/xhxs/index.htm\" target=\"_blank\">炫视</a><a href=\"http://news.xinhuanet.com/yuqing/2011-11/17/c_122295472.htm\" target=\"_blank\">舆情</a>	");
	
	var xuanAccount=document.getElementById('xuan-account'),
	    xuanPsw=document.getElementById('xuan-psw'),
	    loginID=document.getElementById('xuan-loginID'),
	    pswd=document.getElementById('xuan-pswd');
	    
	xuanAccount.onclick=function (){	
	 	this.style.display='none';
	 	loginID.focus();
	};
	xuanPsw.onclick=function (){	
		
	 	this.style.display='none';
	 	pswd.focus();
	}
	loginID.onfocus=function(){
		xuanAccount.style.display='none';
	}
	loginID.onblur=function(){
		if(this.value==''){
			xuanAccount.style.display='block';
		}
	}
	pswd.onfocus=function (){
		xuanPsw.style.display='none';
	}
	pswd.onblur=function(){
		if(this.value==''){
			xuanPsw.style.display='block';
		}
	}
	function checkForm(tempForm){
		if(loginID.value==''){
			alert("用户名不能为空");
			return false;
		}else if(pswd.value==''){
			alert("密码不能为空");
			return false;
		}
	}