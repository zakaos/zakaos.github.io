
menu=function(){
	var TITLE="silly rpg fighting system"
	//alert("men")
	b=document.getElementById("b");
		cls();
		//alert(b);
		b.style.backgroundColor="green";
		b.style.margin="auto";
		h=document.createElement("h1");
		h.innerHTML=TITLE;
		h.style.color="white";
		h.style.border="4px solid white"
		h.style.padding="4px"
		b.appendChild(h);
		startBtn=document.createElement("button");
		b.style.margin="auto";
		startBtn.innerHTML="START";
		startBtn.style.color="white";
		startBtn.style.backgroundColor="black";
		startBtn.style.margin="auto";
		startBtn.style.padding="64px 44px";
	
		b.appendChild(startBtn);		
		startBtn.onclick=game;
	}