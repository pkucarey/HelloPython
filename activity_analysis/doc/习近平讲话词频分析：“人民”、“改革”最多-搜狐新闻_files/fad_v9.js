function NCOUPLET_main(o){
    o.s =2;
    require(["sjs/matrix/ad/passion"], function(passion){
        var couple = { 
			itemspaceid : SohuAdFly_nCPD.couple, 
			width : 120, height : 270, adsrc : 1, 
			form : "couple", 
			special : { top : 100, zIndex : 11 } 
		}; 
       passion.ones(couple);
    });
}
var NCOUPLET = false;             
function NCOUPLET_check(){
    var mkey='30q1d000r0000000q2R000q79';
    var at=6;
    if(typeof(require)!='function')return;
    require(["sjs/matrix/ad/passion"], function(passion){     
        if( typeof(SohuAdPv_CPD) =='object' ){
            for(key in SohuAdPv_CPD)
            {   
                if(jQuery(key).size()>0 && jQuery('#beans_'+SohuAdPv_CPD[key]).size()==0){
					(function(nkey){
					
						var container = jQuery(nkey),
							ax = container.offset().left,
							ay = container.offset().top,
							cx,
							cy;
							
						passion.report("pv", {ext:'ping',x:ax, y:ay, adtype:at, adid:mkey,monitorkey:mkey,cont_id :'beans_'+SohuAdPv_CPD[key]}); 
                    
						container.bind("mousedown.report", function(event){
							if(event.button === 2) return;
							cx = event.pageX - ax,
							cy = event.pageY - ay;
							passion.report("click", {ext:'ping', x:ax, y:ay, cx:cx, cy:cy, adtype:at, adid:mkey, monitorkey:mkey, cont_id :'beans_'+SohuAdPv_CPD[nkey]});
						});
					})(key);
                }
            }
        }
    });
    if( typeof(SohuAdFly_nCPD) =='object' ){
        var fshow = (document.body.clientWidth - cWidth)>200;
        var cshow = (document.body.clientWidth - cWidth)>240;
        var vd=new Cookie(document,"COUPLETIndex",24);
        vd.load();
        var index = vd.x;
        if(index != 2){
            cshow = false;
        }
        if(typeof(_O)!='undefined'){
            for(var b=0;b<_O.length;b++){
                if(typeof(_O[b])=="object" && ('id' in _O[b]) && _O[b].id=='COUPLET' && typeof(_O[b].src)!='undefined' && typeof(_O[b].src[index])!='undefined'){
                    cshow = false;
                }
                if(typeof(_O[b])=="object" && ('id2' in _O[b]) &&_O[b].id=='FLOAT2' && typeof(_O[b].src2)!='undefined'){
                    fshow = false;
                }
            }
        }
        if(('couple' in SohuAdFly_nCPD) && cshow){
            NCOUPLET = true;
        }
        if(('float_r' in SohuAdFly_nCPD) && fshow){
            var float_r = {query:{ itemspaceid :SohuAdFly_nCPD.float_r, adps : "1000100", adsrc:1 }, 
                local : {forms : {},exts:{}}};
            float_r.local.forms[SohuAdFly_nCPD['float_r']] = "flyer";
            float_r.local.exts[SohuAdFly_nCPD['float_r']]  = {position : "fixed",bottom : 50,right : 0,zIndex : 10,width : 100,height : 100,bt_replay : false,bt_shut : true,txt_align : "right"};
         //   passion.ones(float_r);
        }
    }
};

NCOUPLET_check();

if(NCOUPLET){
    AD = new ADM("NCOUPLET", 4);
    AddSchedule(AD);
}