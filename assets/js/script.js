
var circle=document.getElementById("circle");
			var upBtn=document.getElementById("upBtn");
			var downBtn=document.getElementById("downBtn");
			
			var rotatevalue=circle.style.transform;
			var rotateSum;
			
			upBtn.onclick=function()
			{
				rotateSum=rotatevalue+"rotate(-90deg)";
				circle.style.transform=rotateSum;
				rotatevalue=rotateSum;
			}
			downBtn.onclick=function()
			{
				rotateSum=rotatevalue+"rotate(90deg)";
				circle.style.transform=rotateSum;
				rotatevalue=rotateSum;
			}
		<audio id="mysong">
			<source src="image/song.mp3" type="audio/mp3">
		</audio>
		var mysong=document.getElementById("mysong");
		var icon=document.getElementById("icon");
		
		icon.onclick=function(){
			if(mysong.paused){	
				mysong.play();
				icon.src="image/pause.png";
			}else{
				mysong.pause();
				icon.src="image/play.png";
			}
			
		}
