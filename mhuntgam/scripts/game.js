game=function(){
	hp=10;
	atk=5;
	def=5;
	gold=0;
	
cls();
//mintro('here we go',"black","white")
mdiv=function(dnam,col,tcol){
	newdoc=document.createElement('div');
	newdoc.id=dnam;
	newdoc.style.backgroundColor=col;
	newdoc.style.color=tcol;
	b.appendChild(newdoc);
}

mintro=function(itxt,col,tcol){

	mdiv("indiv",'black','white');
	indiv.innerHTML="Monster Hunt is a game in where u hunt for monsters and return to an inn to rest. your adventure begins before an inn at the edge of town."
	
	bb=document.createElement("button");
	bb.innerHTML="Thats Great...";
	bb.onclick=function(){
	//	indiv.parentNode.removeChild(indiv);
	town();
			}
			
	b.appendChild(indiv);
	indiv.appendChild(bb);
}

mintro('t','black','white')
}