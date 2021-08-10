var character = document.getElementById("game");
var mousedownID = -1;
function mousedownLeft(event){
	if(mousedownID==-1)mousedownID=setInterval(whilemousedownLeft, 2);
}
function mouseupLeft(event){
	if(mousedownID!=-1){
		clearInterval(mousedownID);
		mousedownID=-1;
	}
}
function whilemousedownLeft(){
	var left=parseInt(window.getComputedStyle(game).getpropertyValue("left"));
	var newleft = left - 2;
	game.style.left = newleft + "px";
}
function mousedownRight(event){
	if(mousedownID==-1)mousedownID=setInterval(whilemousedownRight, 2);
}
function mouseupRight(event){
	if(mousedownID!=-1){
		clearInterval(mousedownID);
		mousedownID=-1;
	}
}
function whilemousedownRight(){
	var left=parseInt(window.getComputedStyle(game).getpropertyValue("left"));
	var newleft = left - 2;
	game.style.left = newleft + "px";
}
document.addEventListener("keydown",event=>{
	if(event.isComposing||event.keyCode == 229){
		return;
	}
	if(event.key==="ArrowLeft"||event.key==="a"){mousedownLeft();}
	if(event.key==="ArrowRight"||event.key==="d"){mousedownRight();}
});
document.addEventListener("keyup",event=>{
	if(event.isComposing||event.keyCode == 229){
		return;
	}
	if(event.key==="ArrowLeft"||event.key==="a"){mousedownLeft();}
	if(event.key==="ArrowRight"||event.key==="d"){mousedownRight();}
});
	
		
	
	

