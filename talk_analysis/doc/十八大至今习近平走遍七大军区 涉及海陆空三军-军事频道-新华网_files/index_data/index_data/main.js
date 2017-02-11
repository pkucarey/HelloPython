function showAllImageTPBTJJ(randomId,child){
			var contentId = eval("contentId"+randomId);
			
			
			var uls = $("div#"+contentId).children(child);
			var ulsum = uls.length;//一共有多少条数据
			var splitFlag = eval("splitFlag"+randomId);//是否有分隔线
			uls.each(function(i){
				$(this).css('display','block');
				if(splitFlag&&i<ulsum - 1){
					$(this).next().css('display','block');
				}
			});
		}
		function showPageImageTPBTJJ(randomId,curpage,child){
//1展示当前页内容
			var rows = eval("rows"+randomId);//每页行数
			var contentId = eval("contentId"+randomId);
			var uls = $("div#"+contentId).children(child);
			var ulsum = uls.length;//一共有多少条数据
			var pagesum = Math.floor((ulsum+rows-1)/rows);//一共有多少页
			//防止页面超出范围
			if(curpage>pagesum){
				curpage = pagesum;
			}else if(curpage<1){
				curpage = 1;
			}
			var begin = rows * (curpage - 1);//从第多少行开始展示
			var end = begin + rows - 1;//展示到多少行
			if(end>=ulsum){
				end = ulsum - 1;
			}
			var splitFlag = eval("splitFlag"+randomId);//是否有分隔线
			uls.each(function(i){
				if(i>=begin&&i<=end){
					$(this).css('display','block');
					if(splitFlag&&i<end&&i<ulsum - 1){
						$(this).next().css('display','block');
					}
				}else{
					$(this).css('display','none');
					if(splitFlag&&i<ulsum - 1){
						$(this).next().css('display','none');
					}
				}
			});
//2展示分页控制
			var textArr = new Array();
			textArr.push('<span class="tpb_left">第<b class="current_page">',curpage,'</b>/<b class="total_page">',pagesum,'</b>页</span> <span class="tpb_right">');
			//2.1看看是否展示 首页和前5页 链接
			if(curpage>5){
				textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',1,\'',child,'\');" class="tpb_btn_previous">首页</a> ');
				textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',',curpage-5,',\'',child,'\');" class="tpb_btn_previous">[前5页]</a> ');
			}
			//2.2看看是否展示 上一页 链接
			if(curpage>1){
				textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',',curpage-1,',\'',child,'\');" class="tpb_btn_previous"><</a> ');
			}
			//2.3展示5个页面号
			var beginpage = Math.floor((curpage-1)/5)*5+1;
			var endpage = beginpage+4;
			if(endpage>pagesum)
				endpage=pagesum;
			for(var i=beginpage;i<=endpage;i++){
				if(i==curpage){
						textArr.push('<span class=cur>',i,'</span> ');
				}else{
						textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',',i,',\'',child,'\');">',i,'</a> ');
				}
			}
			//2.4看看是否展示 下一页 链接
			if(curpage<pagesum){
				textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',',curpage+1,',\'',child,'\')" class="tpb_btn_previous">></a> ');
			}
			//2.5是否显示 后5页和尾页 链接
			var lastbeginpage = Math.floor((pagesum-1)/5)*5+1;
			if(curpage<lastbeginpage){
				textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',',curpage+5,',\'',child,'\')" class="tpb_btn_previous">[后5页]</a> ');
				textArr.push('<a href="javascript:showPageImageTPBTJJ(\'',randomId,'\',',pagesum,',\'',child,'\')" class="tpb_btn_previous">尾页</a> ');
			}
			textArr.push('</span>');
			var changeId = eval("changeId"+randomId);
			$("div#"+changeId).html(textArr.join(""));	
		}
		function showImageTPBTJJ(randomId,curpage,child){
			try{
				var changeId = eval("changeId"+randomId);
				if(document.getElementById(changeId)!=null){
					showPageImageTPBTJJ(randomId,curpage,child);
				}else{
					showAllImageTPBTJJ(randomId,child);
				}
			}catch(e){
				showAllImageTPBTJJ(randomId,child);
			}
		}
var Dome={
	id:function(id,tag){
		var re=(typeof id!="string")?id:document.getElementById(id);
		if(tag){
			return re.getElementsByTagName(tag);
		}else{
			return re;
		}
	},
	hasClass:function(node,classname){
		if(!node||!classname||!node.className) {return false;}
		return (new RegExp('(?:^|\\s+)'+ classname+'(?:\\s+|$)').test(node.className));
	},
	addClass:function(node,classname){
		if(!node||!classname){return false;}
		if(Dome.hasClass(node,classname)) return true;
		var newclass=node.className ? node.className+" "+classname:classname;
		node.className=newclass;
		return true;		
	},
	removeClass:function(node,classname){
		if(!Dome.hasClass(node,classname))return true;
		var nodeClassName=node.className;
		if(nodeClassName==classname){
			node.className="";
		}else{
			nodeClassName=nodeClassName.replace(new RegExp('(?:^|\\s+)' + classname + '(?:\\s+|$)', 'g'), "").replace(/^\s*/,"");
			node.className=nodeClassName;
		}
	}
}
var vEvent=(function(){
return {
	addEvent: function(element, name, observer, useCapture) {
		try{
			element=Dome.id(element);
			if(element.addEventListener){
				if(name==='mouseenter')
					element.addEventListener('mouseover',withoutChildFunction(observer),useCapture);
				else if(name==='mouseleave')
				element.addEventListener('mouseout',withoutChildFunction(observer),useCapture);
				else
				//ele.addEventListener(type,func,false);
				element.addEventListener(name, observer, useCapture);
			}else if(element.attachEvent){
				element.attachEvent('on' + name, observer);
			}
		}catch(e){}
	},
	addmousewheel:function(element,observer){
		try{
			if(element.addEventListener){
				element.addEventListener("DOMMouseScroll",observer,false);
			}else if(element.attachEvent){
				element.attachEvent("onmousewheel",observer);
			}
		}catch(e){}
	}
}
})();

/*取子集*/
function getSon(obj){
	var arr=[];
	var son=obj.childNodes,len=son.length;
	for(var i=0;i<len;i++){
		if(son[i].nodeType==1){
			arr.push(son[i]);
		}
	}
	return arr;
}
/*图片渐隐*/
function opacity(obj,t){
		obj.style.display="block";
		if(/*@cc_on!@*/false){
			obj.style.filter="Alpha(Opacity="+t*100+")";
		}else{
			obj.style.opacity=t;
		}
		if(t==0){
			obj.style.display="none";
		}
		if(t==1){			
			if(/*@cc_on!@*/false){
				obj.style.filter="";
			}
		}
	}
function showoption(obj,fn){
	for(var i=0;i<=20;i++){
		//if(acity[i]){clearInterval(acity[i])}
		/*acity[i]=*/setTimeout((function(y,fn){
			return function(){
				opacity(obj,0.05*y);
				if(y==20){
					fn();
				}
			}
		})(i,fn),i*25);
	}
}

function pics_show(div,delay){
	var obj=Dome.id(div),
		son=getSon(obj),
		len=son.length,
		curr=0,
		old=-1,
		begin=false,
		timer=null;
		
	var text=document.createElement("div");
	text.className="change";	
	var str="";
		for(var i=1;i<=len;i++){
			str+='<i>'+(i)+'</i>';
		}
	text.innerHTML=str;
	
	var lis=getSon(text);
	obj.appendChild(text);
	function show(curr_){
		son[curr_].style.display="block";
		Dome.addClass(lis[curr_],"cur");
	  son[curr_].getElementsByTagName("img")[0].setAttribute("src",son[curr_].getElementsByTagName("img")[0].getAttribute("data"));
		showoption(son[curr_].getElementsByTagName("img")[0],function(){});
		old=curr_;
	}
	function roll(curr_){
		//return function(){
			if(begin) return;
			if(curr_==old){return;}
			begin=true;
			curr=curr_;			
			Dome.removeClass(lis[old],"cur");
			son[old].style.zIndex="0";
			//son[old].style.display="none";
			son[curr_].style.display="block";
			son[curr_].style.zIndex="999";
			Dome.addClass(lis[curr_],"cur");
			son[curr_].getElementsByTagName("img")[0].setAttribute("src",son[curr_].getElementsByTagName("img")[0].getAttribute("data"));
			showoption(son[curr_].getElementsByTagName("img")[0],function(){
				opacity(son[old].getElementsByTagName("img")[0],0);
				old=curr;
				begin=false;
			});
			
		//}
	}
	function fnNext(curr_){
		var index=curr_;
		index+=1;
		if(index>len-1){
			index=0;
		}
		return index;
	}
	function fnGo(){
		roll(fnNext(curr));
	}
	function fnPlay(){
		timer=setInterval(fnGo,delay);
	}
	function fnPause(){
		clearInterval(timer);
	}	
	
	show(curr);
	fnPlay();
	for(var i=0;i<len;i++){		
		vEvent.addEvent(lis[i],"click",new function(){
			var t=i;
			return function(){
				fnPause();
				roll(t);
				fnPlay();
			}
		});
	}
	
}


		function showAllImage(randomId){
			var contentId = eval("contentId"+randomId);
			var uls = $("div#"+contentId).children("ul");
			var ulsum = uls.length;//一共有多少条数据
			var splitFlag = eval("splitFlag"+randomId);//是否有分隔线
			uls.each(function(i){
				$(this).css('display','block');
				if(splitFlag&&i<ulsum - 1){
					$(this).next().css('display','block');
				}
			});
		}
		function showPageImage(randomId,curpage){
//1展示当前页内容
			var rows = eval("rows"+randomId);//每页行数
			var contentId = eval("contentId"+randomId);
			var uls = $("div#"+contentId).children("ul");
			var ulsum = uls.length;//一共有多少条数据
			var pagesum = Math.floor((ulsum+rows-1)/rows);//一共有多少页
			//防止页面超出范围
			if(curpage>pagesum){
				curpage = pagesum;
			}else if(curpage<1){
				curpage = 1;
			}
			var begin = rows * (curpage - 1);//从第多少行开始展示
			var end = begin + rows - 1;//展示到多少行
			if(end>=ulsum){
				end = ulsum - 1;
			}
			var splitFlag = eval("splitFlag"+randomId);//是否有分隔线
			uls.each(function(i){
				if(i>=begin&&i<=end){
					$(this).css('display','block');
					if(splitFlag&&i<end&&i<ulsum - 1){
						$(this).next().css('display','block');
					}
				}else{
					$(this).css('display','none');
					if(splitFlag&&i<ulsum - 1){
						$(this).next().css('display','none');
					}
				}
			});
//2展示分页控制
			var textArr = new Array();
			textArr.push('<span class="tpb_left">第<b class="current_page">',curpage,'</b>/<b class="total_page">',pagesum,'</b>页</span> <span class="tpb_right">');
			//2.1看看是否展示 首页和前5页 链接
			if(curpage>5){
				textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',1);" class="tpb_btn_previous">首页</a>&nbsp;');
				textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',',curpage-5,');" class="tpb_btn_previous">[前5页]</a>&nbsp;');
			}
			//2.2看看是否展示 上一页 链接
			if(curpage>1){
				textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',',curpage-1,');" class="tpb_btn_previous"><</a>&nbsp;');
			}
			//2.3展示5个页面号
			var beginpage = Math.floor((curpage-1)/5)*5+1;
			var endpage = beginpage+4;
			if(endpage>pagesum)
				endpage=pagesum;
			for(var i=beginpage;i<=endpage;i++){
				if(i==curpage){
						textArr.push('<span class=cur>',i,'</span>&nbsp;');
				}else{
						textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',',i,');">',i,'</a>&nbsp;');
				}
			}
			//2.4看看是否展示 下一页 链接
			if(curpage<pagesum){
				textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',',curpage+1,')" class="tpb_btn_previous">></a>&nbsp;');
			}
			//2.5是否显示 后5页和尾页 链接
			var lastbeginpage = Math.floor((pagesum-1)/5)*5+1;
			if(curpage<lastbeginpage){
				textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',',curpage+5,')" class="tpb_btn_previous">[后5页]</a>&nbsp;');
				textArr.push('<a href="javascript:showPageImage(\'',randomId,'\',',pagesum,')" class="tpb_btn_previous">尾页</a>&nbsp;');
			}
			textArr.push('</span>');
			var changeId = eval("changeId"+randomId);
			$("div#"+changeId).html(textArr.join(""));	
		}
		function showImage(randomId,curpage){
			try{
				var changeId = eval("changeId"+randomId);
				if(document.getElementById(changeId)!=null){
					showPageImage(randomId,curpage);
				}else{
					showAllImage(randomId);
				}
			}catch(e){
				showAllImage(randomId);
			}
		}