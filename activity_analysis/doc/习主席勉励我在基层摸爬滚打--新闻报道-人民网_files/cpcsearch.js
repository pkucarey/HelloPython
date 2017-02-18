//code:GBK
		var gj_basenames = "rmwsite";
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
		function getParameter_DJ(channel,searchfield)
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
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			if(searchfield == "TITLE")
				xmllist += createXMLNode("SEARCHFIELD","TITLE");
			else
				xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//为了给共产党新闻添加页面检索添加的方法
		function search()
		{
			var channel = document.searchForm_dangshi.channel.options[document.searchForm_dangshi.channel.options.selectedIndex].value;
			var searchfields= document.getElementsByName("searchfield");
			var searchfieldele = false;
			var searchfieldstr = "CONTENT";
			for(var i=0;i<searchfields.length;i++)
			{
				searchfieldele = searchfields[i];
				if(searchfieldele.checked)
				{
					searchfieldstr = searchfieldele.value;
					break;
				}
			}
			getParameter_DJ_DANGSHI(channel,searchfieldstr);
		}
		
		//党史频道的复杂搜索
		function getParameter_DJ_DANGSHI(channel,searchfield)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keyword = document.searchForm_dangshi.names.value;
			if(keyword.value == "")
			{
				alert("请输入检索词，然后提交");
				return false;
			}
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
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			if(searchfield == "TITLE")
				xmllist += createXMLNode("SEARCHFIELD","TITLE");
			else
				xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//党史频道党史百科检索
		function getParameter_DJ_DSBK(channel)
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
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="docclass=%党史百科%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//中直党建网检索
		function getParameter_DJ_ZZDJ(channel)
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
			var otherwhere="class3=中直党建网";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//中国人事考试网检索
		function getParameter_DJ_ZGRSKSW(channel)
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
			var otherwhere="class3=中国人事考试网";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//中国共产党重要会议检索
		function getParameter_DJ_ZYHY(channel)
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
			var otherwhere="class3=党史频道  and node_ids =%176588%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//中直党建网检索
		function getParameter_DJ_CONGRESS(channel)
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
			var otherwhere="class3=资料中心 and node_ids =%64168%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//中央文献研究室网站检索
		function getParameter_DJ_WXYJS(channel)
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
			var searchfield= document.searchForm.searchfield.value;
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=中央文献研究室网站";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//为了给文献研究室网站添加页面检索添加的方法
		function search_wxyjs()
		{
			var channel = document.searchForm.channel.value;
			getParameter_DJ_WXYJS(channel);
		}

		//中央文献出版社检索
		function getParameter_DJ_ZYWXPRESS(channel)
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
			var searchfield= document.searchForm.searchfield.value;
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=中央文献研究室网站 and docclass=%文献出版社%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//为了给中央文献出版社添加页面检索添加的方法
		function search_zywxpress()
		{
			var channel = document.searchForm.channel.value;
			getParameter_DJ_ZYWXPRESS(channel);
		}
		
		
		
		//党网专家检索，从理论频道中检索
		function getParameter_DJ_LLGCJ(channel)
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
			var otherwhere="class3=理论";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//党建案例库
		function getParameter_DJ_DJALK(channel)
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
			var otherwhere="docclass=%党建案例库%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//全国哲学社会科学规划办公室网站检索
		function getParameter_DJ_ZHEXUE(channel)
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
			var searchfield= document.searchForm.searchfield.value;
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=全国哲学社会科学规划办公室";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//为了给全国哲学社会科学规划办公室网站添加页面检索添加的方法
		function search_zhexue()
		{
			var channel = document.searchForm.channel.value;
			getParameter_DJ_ZHEXUE(channel);
		}

		//中国共产党历史网检索
		function getParameter_DJ_ZGDSW(channel)
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
			var searchfield= document.searchForm.searchfield.value;
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=中国共产党历史网";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//为了给中国共产党历史网添加页面检索添加的方法
		function search_zgdsw()
		{
			var channel = document.searchForm.channel.value;
			getParameter_DJ_ZGDSW(channel);
		}

		//为了给共产党新闻添加页面检索添加的方法
		function search_dszlk()
		{
			var fieldclass = document.searchForm_dszlk.fieldclass.options[document.searchForm_dszlk.fieldclass.options.selectedIndex].value;
			var sftitle= document.searchForm_dszlk.searchfieldtitle;
			var sfcontent= document.searchForm_dszlk.searchfieldcontent;
			var searchfieldstr = "";
			if(sftitle.checked)
				searchfieldstr = "TITLE";
			else 
				searchfieldstr = "";
			if(sfcontent.checked)
				searchfieldstr += "CONTENT"
			else
				searchfieldstr +"";
			getParameter_DJ_DSZLK(fieldclass,searchfieldstr);
		}
		
		//党史资料库搜索
		function getParameter_DJ_DSZLK(fieldclass,searchfield)
		{
			var basenames = gj_basenames;
			//1、得到用户输入的关键词，为空则不允许提交
			var keyword = document.searchForm_dszlk.names.value;
			if(keyword.value == "")
			{
				alert("请输入检索词，然后提交");
				return false;
			}
			//2、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			
			var otherwhere="";
//			alert(fieldclass);
			switch(fieldclass){
				case "0"://全部
					otherwhere="class3=党史频道";
					break;
				case "1"://党纲·党章
					otherwhere="id=4844517 or id=6434553 or id=11928801 or id=4442302"; 
					break;
				case "2"://会  议
					otherwhere="class2=中国共产党新闻  and (node_ids=%64168% or node_ids=%105989% or node_ids=%115317% or node_ids=%111911% or node_ids=%106101% or node_ids=%176588%)";
					break;
				case "3"://文 献
					otherwhere="class2=中国共产党新闻 and (node_ids=%64186% or node_ids=%71380%)";
					break;
				case "4"://简  史
					otherwhere="class2=中国共产党新闻 and (node_ids=%64164% or node_ids=%64165% or node_ids=%221024% or node_ids=%198299% or node_ids=%198300% or node_ids=%198302% or node_ids=%65724% or id=12509361 or id=16184791 or id=16184791 or id=16184862 or id=16184897 or id=16184168 or id=16184257 or id=16184258 ";
					otherwhere = otherwhere + "	or id=4444645 or id=4444670 or id=4444701 or id=4444715 or id=4444766 or id=4444922 or id=4444928 or id=4444932 or id=4444937 or id=4444948)";
					break;
				case "5": //人物
					otherwhere="class2=中国共产党新闻  and (node_ids=%69112% or node_ids=%126778% or node_ids=%130623% or node_ids=%138889%)";
					break;
				case "6"://著作
					otherwhere="class2=中国共产党新闻  and (node_ids=%180145% or node_ids=%180146% or node_ids=%64184% )";
					break;
				case "7"://纪念馆（地）
					otherwhere="class2=中国共产党新闻  and (node_ids=%113427% or node_ids=%206880% or node_ids=%155020% or node_ids=%157318% or node_ids=%164962% or node_ids=%157584% or id=7875170)";
					break;
				case "8"://资  料
					otherwhere="class2=中国共产党新闻 and (node_ids=%122928% or node_ids=%135000% or node_ids=%175422% or node_ids=%193862%";
					otherwhere = otherwhere + " or node_ids=%204121% or node_ids=%65722% or node_ids=%151937% or node_ids=%166636%";
					otherwhere = otherwhere + " or node_ids=%172706% or node_ids=%164949% or node_ids=%176434% or node_ids=%178010%";
					otherwhere = otherwhere + " or node_ids=%164242% or node_ids=%151936% or node_ids=%204945% or node_ids=%170754%";
					otherwhere = otherwhere + " or node_ids=%230642% or node_ids=%227176% or node_ids=%196989%";
					otherwhere = otherwhere + "	or id=7457150 or id=7430696 or id=9388106 or id=7377149)";
					break;
				case "9"://党史百科
					otherwhere="class3=党史频道  and (node_ids=%165617% or node_ids=%221027%";
					otherwhere= otherwhere + " or id=16187223 or id=16187237 or id=16187239 or id=16188126 or id=16188196 or id=16188623 or id=16188679)";
					otherwhere= otherwhere + " or id=16188665 or id=16188681 or id=16188667 or id=16188682 or id=16188669 or id=16188684)";
					break;
				case "10"://书  刊
					otherwhere="class3=资料中心  and (node_ids=%82819% or node_ids=%99140%)";
					break;
				case "11"://音视频·图集
					otherwhere="class2=中国共产党新闻  and (node_ids=%184162% or node_ids=%163464% or node_ids=%165914% or node_ids=%136953% or node_ids=%223928%";
					otherwhere = otherwhere + " or node_ids=%223906% or node_ids=%223907% or node_ids=%208747% or node_ids=%227662% or node_ids=%157617%";
					otherwhere = otherwhere + "	or id=9437260 or id=8816698 or id=9964365 or id=7667234)";
					break;
				case "12"://其  它
					otherwhere="class2=中国共产党新闻  and  (node_ids=%64413% or node_ids=%64414% or node_ids=%64178% or node_ids=%64114% or node_ids=%116900%)";
					break;
				default ://
					otherwhere = "class3=党史频道 ";
					break;					
			}
//			alert(otherwhere);
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
//			alert(searchfield);
			if(searchfield == "TITLE")
				xmllist += createXMLNode("SEARCHFIELD","TITLE");
			else (searchfield == "CONTENT")
				xmllist += createXMLNode("SEARCHFIELD","Content");
//			else 
//				xmllist += createXMLNode("SEARCHFIELD","TITLE") + createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			document.searchForm_dszlk.XMLLIST.value = encodeURIComponent(xmllist);
//			alert(xmllist);
			document.searchForm_dszlk.submit();
			return false;
		}
		
		//党务问答
		function getParameter_DJ_DWWD(channel)
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
			var searchfield= document.searchForm.searchfield.value;
			
			//3、构造XML字符串<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
//			var otherwhere="class3=中国共产党历史网";
			var otherwhere="node_id=349297";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//为了给中国共产党历史网添加页面检索添加的方法
		function search_dwwd()
		{
			var channel = document.searchForm.channel.value;
			getParameter_DJ_DWWD(channel);
		}

		//群众路线网检索
		function getParameter_DJ_QZLX(channel)
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
			var otherwhere="class3=群众路线网";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//群众路线网栏目搜索
		function getParameter_DJ_QZLX_LM(nodeid)
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
			var otherwhere="node_ids=%" + nodeid + "%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-INPUTTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL","ALL");
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
