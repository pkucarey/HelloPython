var TurnADPOP=new Cookie(document,"POPAD2",24,"/","sohu.com");
TurnADPOP.load();
TurnADPOP.visit=(TurnADPOP.visit==null)?0:TurnADPOP.visit;
TurnADPOP.visit++;
var _a=new Image();
if(typeof(window.SHOW_TOP_AD)!="undefined" && window.SHOW_TOP_AD==false)
{
    
}
else{
 window.SHOW_TOP_AD=true;
}

_a.src='http://imp.optaim.com/201402/de5336979adf86874a9b525883297df1.php?a=0';document.pv.push(_a);
var popslotid = typeof(setpopslotid)!=='undefined' ? setpopslotid:"11963";
if(TurnADPOP.visit ==1 &&  window.SHOW_TOP_AD){
	var _b=new Image();
	_b.src='http://imp.optaim.com/201402/de5336979adf86874a9b525883297df1.php?a=11';document.pv.push(_b);
    require(["sjs/matrix/ad/special"], function(special){
    	special.ones({itemspaceid : popslotid, width : 350, height : 250, adsrc : 1, form : "pop"});
	});
    TurnADPOP.store();
}