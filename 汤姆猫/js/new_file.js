window.onload=function(){
	var box = document.getElementById('box');
	var cat = document.getElementById('cat');
	var num = 0;
	var time;
	var cymbal = document.getElementById('cymbal');
	var drink = document.getElementById('drink');
	var eat = document.getElementById('eat');
	var fart = document.getElementById('fart');
	var pie = document.getElementById('pie');
	var scratch = document.getElementById('scratch');
	var sound = document.getElementById('sound');
/*	var head = document.getElementById('head');*/
	cymbal.onclick=function(){
		playAnimation('cymbal',12);
		sound.src='http://img.tukuppt.com/origin_music/00/07/52/pd-5b768b264436f858.mp3';
	}
	drink.onclick=function(){
		playAnimation('drink',80);
	}
	eat.onclick=function(){
		playAnimation('eat',39);
	}
	fart.onclick=function(){
		playAnimation('fart',27);
		sound.src='http://img.tukuppt.com/origin_music/08/03/15/aacb2bb09f10ce29490b0fe137490cdd.mp3';
	}
	pie.onclick=function(){
		playAnimation('pie',23);
		sound.src='http://img.tukuppt.com/preview_music/00/00/77/xf-5b87af3dcfd383055.mp3';
	}
	scratch.onclick=function(){
		playAnimation('scratch',55);
	}
	cat.onclick = function(){
		var mouse = getMousePos(onmousedown);
		console.log(mouse);
		if(mouse.x>(100/320*window.screen.width) &&mouse.x<(150/320*window.screen.width)&&mouse.y<(540/568*window.screen.height)&&mouse.y>(520/568*window.screen.height)){
			playAnimation('footRight',29);
		}
		if(mouse.x>(0.5*window.screen.width) &&mouse.x<(10/16*window.screen.width)&&mouse.y<(54/57*window.screen.height)&&mouse.y>(51/57*window.screen.height)){
			playAnimation('footLeft',29);
		}
		if(mouse.x>(12/32*window.screen.width) &&mouse.x<(20/32*window.screen.width)&&mouse.y<(47/57*window.screen.height)&&mouse.y>(40/57*window.screen.height)){
			playAnimation('stomach',33);
		}
		if(mouse.x>(8/32*window.screen.width) &&mouse.x<(24/32*window.screen.width)&&mouse.y<(27/57*window.screen.height)&&mouse.y>(10/57*window.screen.height)){
			playAnimation('knockout',80);
		}
	}
	
	function getMousePos(event) {
      var e = event || window.event;
      return {'x':e.clientX,'y':e.clientY};
	}
	function playAnimation(action,timeNum){
		clearInterval(time);
		num=0;
		time = setInterval(function(){
			num++;
			if(num>timeNum){
				clearInterval(time);
			}else if(num<10){
				cat.src='Animations/'+action+'/'+action+'_0'+num+'.jpg';
			}else{
				cat.src='Animations/'+action+'/'+action+'_'+num+'.jpg';
			}	
		},100)
	}	
}
