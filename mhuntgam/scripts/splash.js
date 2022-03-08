var splash=function(){
cls();
//	alert("splash")
	b=document.getElementById("b");
	b.style.backgroundColor="black";
	b.style.margin="auto";
	splashbg=document.createElement("div");
	splashbg.style.backgroundColor=SPLASHCOLOR;
	splashbg.style.color="WHITE"
	splashbg.style.margin="auto"
	splashbg.style.padding="24px"
splashbg.style.fontSize="32px"
	splashbg.style.width="64%";
	splashbg.style.height="40px";
	splashbg.innerHTML=SPLASHTEXT;
	splashbg.style.opacity=0;
	b.appendChild(splashbg);
	j=0
loadup=window.setInterval(function(){
	j++;
	//alert(j);
	splashbg.style.opacity=0.1*j;
	if(splashbg.style.opacity>=1){
		window.clearInterval(loadup);
menu();
	//	alert("go2menu")
	}
},200)
	}
	