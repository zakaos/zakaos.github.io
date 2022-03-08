inn=function(){
	cls();
	mdiv('tdiv','black','white')
	mdiv('hdiv','black','lime')
	mdiv('bdiv','green','white')
	attd(tdiv,'you are at an inn.. you can rest or leave.');
	
	makBut(bdiv,'Rest',rest);
	makBut(bdiv,'leave',town);
	
	hdiv.innerHTML="HP:"+hp;
	
	
}
rest=function(){
	hp=10;
	hdiv.innerHTML="HP:"+hp;
tdiv.innerHtml="You feel rested";
}