KISSY.add("xh/common/1.0/text",function(a,b,c){var d={};return c.extend(d,{ctrl:function(a,b){if(window.Event?!0:!1,!("undefined"!=typeof a.ctrlKey?a.ctrlKey:a.modifiers&Event.CONTROL_MASK>0))return!1;var d=a.which||a.button;return d==b},trim:function(a){return a.replace(/(^\s*)|(\s*$)/g,"")},htmlFilter:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/(^\s*)|(\s*$)/g,"")},copy:function(a){var b,c,d,f,g;if(window.clipboardData)return window.clipboardData.setData("Text",a),!0;if(window.netscape)try{if(netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"),b=Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard),!b)return;if(c=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable),!c)return;return c.addDataFlavor("text/unicode"),d=new Object,new Object,d=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString),f=a,d.data=f,c.setTransferData("text/unicode",d,2*f.length),g=Components.interfaces.nsIClipboard,b?(b.setData(c,null,g.kGlobalClipboard),!0):!1}catch(h){return!1}return!1},togglePrompt:function(b){var e,f,g,h,d={select:"",className:"",initHas:!1,dom:!1};c.extend(d,b),e=a.Event,f=a.DOM,e.add(d.select,"focus",function(){var a=d.dom?d.dom:this;d.initHas?f.addClass(a,d.className):f.removeClass(a,d.className)}),e.add(d.select,"blur",function(){var a=d.dom?d.dom:this;0===this.value.length&&(d.initHas?f.removeClass(a,d.className):f.addClass(a,d.className))}),g=f.val(d.select),h=d.dom?d.dom:d.select,0===g.length?d.initHas?f.removeClass(h,d.className):f.addClass(h,d.className):d.initHas?f.addClass(h,d.className):f.removeClass(h,d.className)},placeHolder:function(b,d){var f,e=function(){this.opts={text:"",className:{parent:"textplaceholder",tip:"textplaceholder-tip"}},this.dom=null,this.tip=null};c.extend(e.prototype,{init:function(a,b){this.dom=a,c.extend(this.opts,b,!0),this.build(),this.install()},build:function(){var b=this.dom,c=this.opts,d=b.parentNode,e="td"===d.tagName.toLowerCase()||"th"===d.tagName.toLowerCase(),f=e?document.createElement("div"):d,g=document.createElement("div");g.innerHTML=c.text,g.className=c.className.tip,f.appendChild(g),f.appendChild(this.dom),e&&d.appendChild(f),a.DOM.addClass(f,c.className.parent),this.tip=g},install:function(){var b=a.Event,c=a.DOM,d=this;b.add(this.dom,"focus",function(){c.hide(d.tip)}),b.add(this.dom,"blur",function(){d.show()}),b.add(this.tip,"click",function(){c.hide(d.tip),b.fire(d.dom,"focus")}),this.show()},show:function(){var b=a.DOM,c=b.val(this.dom).length;0===c?b.show(this.tip):b.hide(this.tip)}}),f=a.DOM.query(b),a.each(f,function(a){var b=new e;b.init(a,d)})}},!0),d},{requires:["node","../1.0/lang"]});