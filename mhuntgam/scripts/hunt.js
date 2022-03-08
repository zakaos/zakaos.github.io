strike=function(){
	hitdam=Math.floor(Math.random()*atk)+1;
	ehitdam=Math.floor(Math.random()*curmon.atk)+1;
	
	attd(stdiv,'<br>You hit the '+curmon.name+' for '+hitdam+' damage');
	enhp=enhp-hitdam;
	//hp=hp-ehitdam;
	//if (hp<0)alert('dead')
	if (enhp<=0) enhp=0;
	if (enhp==0){
		attd(stdiv,"<br>"+curmon.name+" is dead.")
	
	Run.innerHTML="Town";
	makBut(butdiv,'Hunt',hunt);
	
		Fight.parentNode.removeChild(Fight);
		}
		
		if (enhp>=1){
		hp=hp-ehitdam;
		attd(stdiv,'<br>'+curmon.name+' hits you for '+ehitdam+' damage');
	}
	
	if (hp<=0){
		splash();
	}
	
	hdiv.innerHTML="HP: "+hp+ " "+curmon.name+": "+enhp+"<br>";
	
}

var hunt=function(){
//	alert("hunt");
	
	choosemon=function(){
	//	curmonnum=Math.random*monsters.length;
		//Math.floor(curmonnum);
		//alert (monsters[Math.floor(Math.random()*(monsters.length))].name);
	curmon=	monsters[Math.floor(Math.random()*(monsters.length))]
	}
	choosemon();
	cls();
	mdiv("stdiv","black","white");
	mdiv("hdiv","black","lime");
	mdiv("butdiv","green","black");
	
	attd(stdiv,"You find a "+curmon.name+ " causing Trouble");
	enhp=curmon.hp;
	attd(hdiv,"HP: "+hp+ " "+curmon.name+":"+curmon.hp+"<br>");
makBut(butdiv,'Fight',strike)
makBut(butdiv,'Run',town)
}