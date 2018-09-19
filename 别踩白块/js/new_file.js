window.onload = function(){
	var x;
	var score = document.getElementById('score');
	var num = 0;
	var black_position = [];
	var block = document.getElementsByTagName('span');
	for(var i=0; i<4; i++){
		x = Math.round(Math.random()*3);
		block[x+4*i].style.background = 'black';
		black_position[i]=x;
	}
	console.log(black_position);
	for(var t = 12;t<16;t++)
	block[t].onclick = function(){
		console.log(this.style.background);
		if(this.style.background=='black'){
			for(i=0; i<4; i++){
				block[black_position[i]+4*i].style.t = 'all';
				block[black_position[i]+4*i].style.transform = 'all';
			}
			for(i=0; i<4; i++){
				block[black_position[i]+4*i].style.background = 'white';
			}
			console.log(black_position);
			for(var y=0;y<3;y++){
				black_position[3-y]=black_position[2-y];
			}
			
			black_position[0]=Math.round(Math.random()*3);
			console.log(black_position);
			for(i=0; i<4; i++){
				block[black_position[i]+4*i].style.background = 'black';
			}
			num++;
			score.innerHTML='得分：'+num;
			
		}else{
			alert('失败！');
			location.reload();
		}
	}
}
