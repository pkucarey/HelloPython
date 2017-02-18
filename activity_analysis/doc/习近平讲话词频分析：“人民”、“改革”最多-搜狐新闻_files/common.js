/**
  * @fileOverview 基础广告形式,默认的广告加载形式，
  *	即判断加载类型image,flash,iframe,text,html，加载对应内容,
  * Common的意义还在于他是创建其他广告形式的基础，通过create方法
  * 来创建新的广告形式，将Common作为基类继承，提高复用，规范流程化开发。
  *v2.0 添加调用第三方代码的公用代码 
  *v3.0 添加ad-plus数据上报的公用代码
*/
define("sjs/matrix/ad/form/common", ["sjs/flash/swfobject", "sjs/matrix/ad/stat"], function(swfobject,stat){
	
	var document = window.document,
		navigator = window.navigator,
		location = window.location,
		$ = jQuery;
		
	var config = $.extend({
		FLASH_PLAYER: "http://images.sohu.com/bill/s2013/gates/all/final130402-4.swf",
		FLASH_COVER : "http://images.sohu.com/bill/default/1x1.gif"
	}, window["passion_config"]);
	
	var Common = function(adObj){
	
		//将传入的广告对象传入广告形式中供使用，广告对象
		//包含广告加载过程中需要的所有内容，包括一个或多个
		//resource，以及针对不同广告形式所需的特殊配置属性
		//均放在广告对象的ext属性中，需要注意的是每个广告
		//形式需要在加载完成之后触发广告对象的afterload事件
		//否则对应广告无法得知加载成功，影响上报等各种功能
		this.adObject = adObj;

		
		//根据广告位信息itemspaceid生成的带前缀的ID串，如
		//beans_5012来获取的容器，继承到子类广告形式中，如果
		//有需要可以覆盖。
		this.container = $("#" + adObj.cont_id);
		
		
		//将prototype中的options备份出新的对象，供当前实例单独使用
		this.options = $.extend({}, this.options, adObj.spec);

	};

	var CP = {
      init : function(){
        var res = this.adObject.resource;
        //兼容智云众接口调用
        res.itemspaceid = this.adObject.cont_id;
        this.insert();
        if(("image, flash, text, html, iframe").indexOf(res.type) !== -1){
          this.adObject.trigger("afterload");
        }
      },
      
      attach : function(){},
		
		/**
		  * @desp	base function for build ad html
		  * 插入页面广告的基本方法，也是common广告形式的默认方法
		  * 该方法会根据type属性判断具体页面元素类型进行操作，具体
		  * 插入操作会延伸到具体方法，例如insertImage,insertFlash，
		  * 等。
		  * 注意该方法只针对一个resource来操作，并且需有必要字段
		  * 
		  * @param 参数：options默认不传
		  * options既是传入的resource
		*/
      insert : function(resource){
        var pageUrl = window.location.href.split("://")[0];
        /*if(!!resource){
            if(pageUrl=="http"){
                resource.file="http://"+resource.file.split("://")[1];
            }else if(pageUrl=="https"){
                resource.file="https://"+resource.file.split("://")[1];
            }
        }*/
        
        var adObj = this.adObject;
        var res = resource || adObj.resource;
        if(!!res){
            if(pageUrl=="http"){
                res.file="http://"+res.file.split("://")[1];
            }else if(pageUrl=="https"){
                res.file="https://"+res.file.split("://")[1];
            }
        }
        if(!res || !res.type) return;
        
        
        var type = "insert" + res.type.replace(/\s[a-z]/g,function($1){return $1.toLocaleUpperCase()})
                        .replace(/^[a-z]/,function($1){return $1.toLocaleUpperCase()});
        
        if(!res.cont_id){
          res.cont_id = this.adObject.cont_id;
        }
        
        if(type in this){
          this[type].call(this, res);
          adObj.trigger("afterload_res", res);
        }
      },
		
      insertImage : function(options){
        if(!options.cont_id) return;
        /*
        var adObj = $.extend({}, this.adObject);
        var nnode = document.createElement('a');
        nnode.href = options.click; nnode.target = "_blank";
        document.getElementById(options.cont_id).appendChild(nnode);
        
        var img = new Image();
        img.border = "0";
        img.width = options.width; img.height = options.height;
        
        img.onload = function(){
          adObj.latency = (new Date).getTime() - adObj.latency;
          passion.report("error", adObj);
        }; 
        
        nnode.appendChild(img);
        adObj.latency = (new Date).getTime();
        img.src = options.file;
        */
        
        return $('#' + options.cont_id).html(
          '<a href="' + options.click + '" target="_blank">'
          +'<img src="' + options.file + '" border="0"'
          +' width="' + options.width + '" '
          +'height="' + options.height + '"/></a>'
          
          );
        
      },
      
      insertMp4:function(options){
         return $('#' + options.cont_id).html(
            '<a href="' + options.click + '" target="_blank">'
            +"<video id='video_page' preload='auto' muted width='"+options.width+"' height='"+options.height+"' autoplay='autoplay' loop='loop'><source src='"+options.resource+"' />Your browser does not support the video tag.</video>" + '</a>'
            
         
         )
      
      },
		
      insertIframe : function(options){
        if(!options.cont_id) return;
        return $('#' + options.cont_id).html('<iframe width="' 
        + options.width + '" height="' 
        + options.height + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="' 
        + options.file + '"></iframe>');
      },
		
      insertFlash : function(options){
        if(!options.cont_id) return;
        var cont_id = options.cont_id + "_flash";
        
        var opt = $.extend({
          swfVersionStr : "10.1",
          xiSwfUrlStr : "",
          flashvarsObj : {},
          parObj : { "wmode" : "opaque", allowScriptAccess : "always"},
          attObj : { "wmode" : "opaque", allowScriptAccess : "always"}
        }, options);
        
        opt.attObj.data = opt.file;
        opt.attObj.id = cont_id;
        opt.attObj.width = opt.width;
        opt.attObj.height = opt.height;

        opt.parObj.flashvars = opt.attObj.flashvars = $.param(opt.flashvarsObj);
        
        if(!!!this.adObject["isnot_flashcover"]){
        
          var _lmth = "<div style=\"position:relative;width:"+ opt.width + "px;height:" + opt.height + "px;margin:0 auto;\">"
                  +"<div style=\"position:absolute;z-index:1;width:"+ opt.width + "px;height:" + opt.height + "px;top:0px;left:0px;\">"
                    + "<div id=\"" + cont_id + "\"></div>"
                  +"</div>"
                  +"<div style=\"width:"+ opt.width + "px;height:" + opt.height + "px;position:absolute;z-index:2;top:0px;left:0px;\">"
                    +"<a href=\"" + opt.click + "\" target=\"_blank\">"
                      +"<img src=\"" + config.FLASH_COVER + "\" border=\"0\" width=\"" + opt.width + "\" height=\"" + opt.height + "\" />"
                    +"</a>"
                  +"</div>"
                +"</div>";
        }else{
          var _lmth = "<div id=\"" + cont_id + "\" style=\"width:"+ opt.width + "px;height:" + opt.height + "px;\"></div>";	
        }
        
        $('#' + opt.cont_id).html(_lmth);
        return swfobject && swfobject.createSWF(opt.attObj, opt.parObj, cont_id); 
        
      },
      
      insertText : function(options){
        if(!options.cont_id) return;
        return $('#' + options.cont_id).html('<a href="' + options.click 
          + '" target="_blank">' + options.text + '</a>');
      },
      
      insertHtml : function(options){
        if(!options.cont_id) return;
        return $('#' + options.cont_id).html(options.html);
      },
		
      insertScript : function(options){
        var self = this;
        var opt = options || this.options;
        if(opt["is_ready"]) return;
        //opt.onload = "function(){if(window[\"OptAim\"]){var wrap = this.resource.itemspaceid,id = this.id,visit = this.visit || 1, width=this.resource.width,height = this.resource.height,tier = this.resource.tier || 1;OptAim.getHtml('sohu', wrap, id, visit, width, height, tier);} }";
        

        $.getScript(opt.file, function(){
          if(opt.onload){
            if(typeof(opt.onload) === "function"){
              opt.onload.call(self.adObject);
            }else{
              var funname = "fun" + (new Date().getTime());
              window.eval("window." + funname + " = " + options.onload);
              window[funname].apply(self.adObject);
              window[funname] = undefined;
            }
          }
        });
        
      },
		
      show : function(){
        this.container.show();
        this.container.trigger("aftershow");
      },
		
      hide : function(){
        this.container.hide();
        this.container.trigger("afterhide");
      },
		
      detach : function(){
        this.container.detach();
      },
    
      
      loadThirdCode:function(thirdUrl,adobj){
				var adobj = adobj;
        var self=this;
				/*stat.get("pv",adobj);//cube pv*/
        var right_width;
				//暴漏给第三方调用 
        window['SOHU_AD_PV']=function(PARA_SOHU_PV){
            adobj.x=PARA_SOHU_PV.x;
            adobj.y=PARA_SOHU_PV.y;
            stat.get("pv",adobj);
        }
				window['SOHU_AD_CUBE'] = function(PARA_SOHU_THIRD){
          /*adobj.x=para_SOHU_third.x;
          adobj.y=para_SOHU_third.y;*/
          adobj.cx=PARA_SOHU_THIRD.cx;
          adobj.cy=PARA_SOHU_THIRD.cy;
          
					stat.get("click",adobj);//搜狐cube-click监测
          self.postAdplus(adobj);
                
				};
				jQuery.ajax({
						url:thirdUrl,
						dataType:"script",
						async:false,
            success:function(){console.info("success")},
            error:function(XMLHttpRequest, textStatus, errorThrown) {
              console.info(XMLHttpRequest.status);
              console.info(XMLHttpRequest.readyState);
              console.info(textStatus);
              }
				});
			},
      
      postAdplus:function(adobj){
          var self = this;
          var curUrl = adobj.resource.click;
          var urlPatten = /clk/;
			    var matchResult = curUrl.match(urlPatten);
          if(adobj.resource.clkm){ 
              for(var i=0;i<adobj.resource.clkm.length;i++){
                  if(!!adobj.resource.clkm[i].match(urlPatten)){
                      stat.get(adobj.resource.clkm[i]+"?apid="+adobj.cont_id+"&impid="+adobj.impression_id);//adpluse 第三方点击
                  }else{
                      stat.get(adobj.resource.clkm[i]);//adpluse 第三方点击
                  }
              }
             
          }else if(adobj.clkm){
             for(var i=0;i<adobj.clkm[i].length;i++){
                  if(!!adobj.clkm[i].match(urlPatten)){
                      stat.get(adobj.clkm[i]+"?apid="+adobj.cont_id+"&impid="+adobj.impression_id);//adpluse 第三方点击
                  }else{
                      stat.get(adobj.clkm[i]);//adpluse 第三方点击
                  }
              }
          }else if(!!matchResult){//落地页是clk开头的加apid和impid 
             var newTab=window.open('about:blank');
              newTab.location.href=curUrl+"?apid="+adobj.cont_id+"&impid="+adobj.impression_id;
             /*window.open(curUrl+"?apid="+adobj.cont_id+"&impid="+adobj.impression_id);*/
          }
      }
		
	};
	
	Common.prototype = CP;
	
	/**
	  * @desp	the base function to create new ad forms
	  *	除Common广告形式外，其他广告形式的创建方法，
	  * 是所有广告形式继承自Common，拥有Common基础变量方法，
	  * 同时可以自行覆盖扩展。
	  *
	*/
	Common.create = function(_new_prot){
		var self = this;
		_new_prot = _new_prot || {};
		
		if("init" in _new_prot){
			var newForm = function(options){
				return self.call(this, options);
			};
			
			newForm.create = Common.create;	//新增创建子类
			newForm.prototype = $.extend({}, this.prototype, _new_prot);
			return newForm;
			
		}else{
			return (function(){ window["console"] && console["log"] && console.log("The new form has no init function; It is not be allowed!"); });
		}
			
	};
	return Common;
});
