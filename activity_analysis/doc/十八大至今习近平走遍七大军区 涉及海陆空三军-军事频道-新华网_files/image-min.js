/**
 * 图片相关操作，当前提供图片懒加载功能 developed by Jimmy Song at 2013/05/22
 * @version 1.2 
 */
KISSY.add("xh/common/1.0/image",function(a,b){var c={};return b.extend(c,{preLoad:function(a,c){var d,e,f,g;for("undefined"==typeof c&&(c="data-url"),d=b.query(a),e=0;e<d.length;e++)f=d[e],g=f.getAttribute(c),g&&b.async({timer:100,fn:function(a,b){return function(){var d,c=new Image;return c.src=b,c.style.display="none",d=a.parentNode,d.appendChild(c),c.complete?(d.removeChild(a),c.style.display="block",c=null,void 0):(c.onload=function(){d.removeChild(a),c.style.display="block",c.onload=null,c=null},void 0)}}(f,g)})}}),c},{requires:["../1.0/lang"]});