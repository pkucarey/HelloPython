//code:GBK
//update:2015/06/26
		var rmw_basenames = "rmwsite";
		var people_basenames = "people";
		var gj_basenames = "rmwsite";
		var zt_basenames = "special";
		var en_basenames = "morelanguage";
		var local_basenames = "rmwlocal";
		/*
		 *********************************************************************得到检索参数
		 */
		function trim(str) 
		{
			if (!str || str=="") 
				return "";
			while ((str.charAt(0)==' ') || (str.charAt(0)=='\n') || (str.charAt(0,1)=='\r')) 
				str=str.substring(1,str.length);
			while ((str.charAt(str.length-1)==' ') || (str.charAt(str.length-1)=='\n') || (str.charAt(str.length-1)=='\r')) 
				str=str.substring(0,str.length-1);
			return str;
		}
		function allchange()
		{
			var allchangeele = document.RMWSearch.ALLCHANGE;
			//选中或者是取消所有的选择
			var ssfweles = document.getElementsByName("SSFW");
			var ssfwele = false;
			var ssfwlist = "(";
			for(var i=0;i<ssfweles.length;i++)
			{
				ssfwele = ssfweles[i];
				ssfwele.checked = allchangeele.checked;
			}
		}
		function createXMLNode(key,value)
		{
			var sResult = "";
			sResult += "<"+key+">";
			sResult += "<![CDATA["+encode(value)+"]]>";
			sResult += "</"+key+">";
			return sResult;
		}
		function encode(str,u) 
		{
			if (typeof(encodeURIComponent) == 'function')
			{
				if (u) 
					return encodeURI(str);
				else 
					return encodeURIComponent(str);
			}
			else 
			{
				return escape(str);
			}
		}
		//得到低级检索的参数列表
		function getParameter_DJ(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
//			alert("keyword=" + keyword);
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
//			alert(document.searchForm.XMLLIST.value);
			return false;
		}

		//得到教育频道第二个检索框的参数列表
		function getParameter_DJ_2(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names_2");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_2.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_2.submit();
			return false;
		}
		//得到教育频道作者检索文本框的值
		function getParameter_DJ_AUTHOR(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names_author");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","AUTHOR");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_author.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_author.submit();
			return false;
		}

		/*对有 OtherWhere 的频道进行检索
		 * 参数信息：
		 * 1、channel 检索频道
		 * 2、formEle 检索的Form表单
		 */
		function searchByOtherWhere(channel,formEle)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = formEle.names;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到otherwhere的值
			var otherwhereele = formEle.otherwhere;
			var otherwhere = otherwhereele.value;
			//3、构造XML字符串
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			formEle.XMLLIST.value = xmllist;
			formEle.submit();
			return false;
		}
		//得到低级检索的参数列表
		function allsearch(formele,channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = formele.names;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			//alert(xmllist);
			formele.XMLLIST.value = encodeURIComponent(xmllist);
			formele.submit();
			return false;
		}
		
		//得到嘉宾访谈检索的参数列表
		function getParameter_DJ_JBFT(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=嘉宾访谈";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//得到人民网专稿检索的参数列表
		function getParameter_DJ_ZG(channel)
		{
			var basenames = gj_basenames;
			if (channel=="时政"){
				//alert("shizheng");
				var otherwhere="source=%人民网% and class2=(时政 or 国际 or 社会 or 观点 or 城市 or 地方 or 地方领导 or 军事 or 台湾 or 港澳 or 理论 or 华侨华人 or 中国共产党新闻 or 中国人大新闻 or 中国政协新闻网 or 中国政府新闻 or 中国工会新闻 or 中国妇联新闻 or 强国社区 or 强国博客)";
				}
			else if (channel=="体育"){
				//alert("tiyu");
				var otherwhere="source=%人民网% and class2=(体育 or 奥运 or 彩票)";
				}
			else if (channel=="娱乐"){
				var otherwhere="source=%人民网% and class2=娱乐";
				}
			else if (channel=="健康"){
				var otherwhere="source=%人民网% and class2=(健康 or 人口频道 or 卫生频道)";
				}
			else if (channel=="IT"){
				var otherwhere="source=%人民网% and class2=(IT or 无线频道 or 游戏 or 动漫)";
				}
			else if (channel=="旅游"){
				var otherwhere="source=%人民网% and class2=旅游";
				}
			else if (channel=="经济"){
				var otherwhere="source=%人民网% and class2=(经济 or 能源 or 环保 or 房产 or 跨国公司 or 家电 or 中央企业新闻网 or 手机媒体 or 新农村 or 食品 or 招商 or 书画 or 开发区 or 百强县 or 节庆会展 or 男士时尚 or 女性 or 瘦身 or 天气)";
				}
			else if (channel=="教育"){
				var otherwhere="source=%人民网% and class2=教育";
				}
			else if (channel=="科技"){
				var otherwhere="source=%人民网% and class2=科技";
				}
			else if (channel=="汽车"){
				var otherwhere="source=%人民网% and class2=汽车";
				}
			else if (channel=="原创"){
				var otherwhere="((source=%频道% and source=%人民网%) or source=人民网 or source=%人民日报%)";
				}
			else if (channel=="english"){
				basenames=en_basenames;
				var otherwhere="(sitename=english and content= ((By People ) and ( Daily Online )))";
			}
				
			var limiting_date = addDate(-5);
			otherwhere = otherwhere + " and " + "publishtime>" + limiting_date;
			channel="ALL";
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//select 提交
		function submitForm()
		{
			if(document.searchForm.channelname.value == "")
			{
				alert("请选择相关的频道");
				return;
			}
			else
			{
				var channel = document.searchForm.channelname.options[document.searchForm.channelname.selectedIndex].value;
				getParameter_DJ_ZG(channel);
			}
		}
		
	   //计算日期	
	  function addDate(days){
		  //创建日期对象，日期为今天  
		  var   a=new   Date();  
		  //得到今天的日（月里的第几天）  
		  var   b=a.getDate();  
		  //加days天。  
		  b=b+days;  
		  //重新设置日期对象的日，不用担心跨月或是跨年之类的情况，系统会自己处理的  
		  a.setDate(b);
		  var year=a.getFullYear();
		  var month=a.getMonth() + 1;//getMonth()得到月份从0开始，所以要加1  
		  var date=a.getDate();
		  var newdate=year + "." + month + "." + date;
		return   newdate;
	  }
		
	//专门为保险首页使用
	function searchForBaoxian()
	{
	 var index = document.BaoxianSearchForm.searchcompany.selectedIndex;
	 var searchcompany = document.BaoxianSearchForm.searchcompany.options[index].value;
	 
	 index = document.BaoxianSearchForm.searchtype.selectedIndex;
	 var searchtype = document.BaoxianSearchForm.searchtype.options[index].value;
	  
	 var searchkeyword = document.BaoxianSearchForm.searchkeyword.value;
	 
	 var where = "";
	 if(searchcompany != "")
	  where += searchcompany+" ";
	 if(searchtype != "")
	  where += searchtype+" ";
	 if(searchkeyword != "")
	  where += searchkeyword+" ";
	 where = encode(where);
	 var channel = encode("经济");
	 window.open("http://search.people.com.cn/rmw/GB/bxsearch/searchres.jsp?keyword="+where+"&channel="+channel);
	 
	}

	//人民电视相关检索
	function getParameter_VIDEO()
		{
			var basenames = rmw_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.VIDEOSearch.XMLLIST.value = xmllist;	
			document.VIDEOSearch.submit();
			return false;
		}		
				
	//人民电视新闻联播检索
	function getParameter_VIDEO_XWLB(){
			var basenames = rmw_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.VIDEOSearchXWLB.PROGRAM.value;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			
			keyword = document.VIDEOSearchXWLB.PROGRAM.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			//6、得到日期范围
			var datefrom = document.VIDEOSearchXWLB.DATEFROM.value;
			var dateto = document.VIDEOSearchXWLB.DATETO.value;
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM",datefrom);
			xmllist += createXMLNode("DATETO",dateto);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.VIDEOSearchXWLB.XMLLIST.value = xmllist;
			document.VIDEOSearchXWLB.submit();
			return false;
		}
	
	//人民电视访谈频道，按日期检索
	function getParameter_VIDEO_DAY(){
			var basenames = rmw_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			//2、得到用户检索的字段,默认为Title
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			//嘉宾访谈栏目
			var otherwhere = "node_id=14644";
	        var today = new Date();
	        var bday = new Date(2006,04, 27);
	        var tf=document.dateform;
	        var vd=tf.sday.options[tf.sday.selectedIndex].value;
	        var vm=tf.smonth.options[tf.smonth.selectedIndex].value;
			var vy=tf.syear.options[tf.syear.selectedIndex].value;
			var datefrom = vy+ "." + vm + "."+vd + " 00:00:00";
			var dateto = vy+ "." + vm + "."+vd + " 23:59:59";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD","");
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("DATEFROM",datefrom);
			xmllist += createXMLNode("DATETO",dateto);
			xmllist += createXMLNode("SEARCHFIELD","");
			xmllist += "</RMW>";
			document.dateform.XMLLIST.value = xmllist;
			document.dateform.submit();
			return false;
		}
	

	//人民电视访谈频道，按人名，嘉宾姓名检索
	function getParameter_VIDEO_NAME(){
			var basenames = rmw_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.VIDEOSearchNAME.name.value;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			
			keyword = document.VIDEOSearchNAME.name.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			//嘉宾访谈栏目
			var otherwhere = "node_id=14644";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.VIDEOSearchNAME.XMLLIST.value = xmllist;	
			document.VIDEOSearchNAME.submit();
			return false;
		}
	
	
	//得到爱我中华检索的参数列表
		function getParameter_DJ_AWZH(channel)
		{
			var basenames = "awzh";
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="specialflag=tangshuquan";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
//			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//经济频道金融家留言板检索
		function getParameter_DJ_JRJLYB(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="docclass=%中国金融家留言板%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//法治频道法律法规
		function getParameter_DJ_FLFG(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names1");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="node_id =205583";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm1.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm1.submit();
			return false;
		}
		
		//法治频道司法考试
		function getParameter_DJ_SFKS(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names2");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			//var otherwhere="node_id =204469";
			var otherwhere="class2=法治";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm2.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm2.submit();
			return false;
		}
		
		//中国报协网
		function getParameter_DJ_ZGBX(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="node_ids =%221752%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//在某个节点下搜索
		function getParameter_DJ_NODE(nodeId)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="node_ids = %25" + nodeId + "%25 or " + "belongs_id = %25" + nodeId + "%25";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL","ALL");
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//搜索某个频道下得专题,这个是给娱乐频道用的，其他也可以用
		function getParameter_CHANNEL_ZT(channel)
		{
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("special_names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//9、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES","special");		
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","SPECIALNAME");
			xmllist += "</RMW>";
			document.ZTSearch.XMLLIST.value = encodeURIComponent(xmllist);
			document.ZTSearch.submit();
			return false;
		}
		
		//得到娱乐频道明星检索，从标题检索
		function getParameter_DJ_star(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names_star");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_star.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_star.submit();
			return false;
		}
		
		//娱乐频道影讯搜索，从娱乐频道电影栏目搜索
		function getParameter_DJ_movie(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names_movie");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=电影";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_movie.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_movie.submit();
			return false;
		}
		
		//搜索娱乐频道专题里搜
		function getParameter_CHANNEL_ZT_tv(channel)
		{
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("special_names_tv");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//9、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES","special");		
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","SPECIALNAME");
			xmllist += "</RMW>";
			document.ZTSearch_tv.XMLLIST.value = encodeURIComponent(xmllist);
			document.ZTSearch_tv.submit();
			return false;
		}
		
		//娱乐频道荐碟
		function getParameter_DJ_disc(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names_disc");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_disc.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_disc.submit();
			return false;
		}
		
		//得到娱乐频道明星检索，从标题检索
		function getParameter_DJ_tv(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names_tv");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_tv.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_tv.submit();
			return false;
		}

		//根据频道的node_id检索
		function getParameter_DJ_CHANNELID(channelid)
		{
			var basenames = people_basenames;
			var otherwhere =  " channelid=" + channelid;
			channel="ALL";
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfield = "content";
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//地方频道检索
		function getParameter_DJ_LOCAL(channelid)
		{
			var basenames = local_basenames;
			var otherwhere =  " channelid=" + channelid;
			var searchyear = document.searchForm.search_year.options[document.searchForm.search_year.options.selectedIndex].value;
			var beginyear = searchyear.substring(0,4) + ".01.01";
			var endyear = searchyear.substring(0,4) + ".12.31"
			otherwhere = otherwhere + " and publishtime>=" + beginyear + " and publishtime<=" + endyear;
			channel="ALL";
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfield = document.searchForm.SearchField.options[document.searchForm.SearchField.options.selectedIndex].value;
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//地方频道检索
		function getParameter_DJ_LOCAL_dan(channelid)
		{
			var basenames = local_basenames;
			var otherwhere =  " channelid=" + channelid;
			channel="ALL";
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为content
			var searchfield = "CONTENT";
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
//			alert(xmllist);
			document.searchForm.submit();
			return false;
		}

		//海外网视频检索
		function getParameter_DJ_HWVIDEO(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=视频";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//证监会投保局
		function getParameter_DJ_ZJHTBJ(channel)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
//			for(var i=0;i<searchfieldeles.length;i++)
//			{
//				searchfieldele = searchfieldeles[i];
//				if(searchfieldele.checked)
//					searchfield = searchfieldele.value;
//			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="belongs_name=网友留言专题";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//得到低级检索的参数列表
		function getParameter_DJ_RU()
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("请输入关键词，然后提交");
				return false;
			}
			keyword = keywordele.value;
			//2、得到用户检索的字段,默认为Title
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var channel="ALL";
			var otherwhere="languages=45";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//不同的频道修改下面的      国际    为相关的频道名称
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
//			alert("keyword=" + keyword);
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
//			alert(document.searchForm.XMLLIST.value);
			return false;
		}

