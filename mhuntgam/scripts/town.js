attd=function(div,text){
	div.innerHTML+=text;
}
testo=function(){
	alert('testo');
}
makBut=function(tdiv,btxt,bfunc){
	newbut=document.createElement('button');
	newbut.innerHTML=btxt;
	newbut.onclick=bfunc;
	newbut.id=btxt;
	tdiv.appendChild(newbut);
}
town=function(){
	cls()
	mdiv('pdiv',"black","white");
	attd(pdiv,'You stand before an inn. You can probably go inside if u want to.A path winds in to the forest, filled with monsters to hunt.<br>')
	makBut(pdiv,'Hunt',hunt);
	makBut(pdiv,'Inn',inn);
}