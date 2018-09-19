window.onload = function(){
	var box2 = document.getElementById('box2');
	var block = document.getElementsByTagName('span');/*获取所有块*/
	var black_position = [];/*黑块的位置*/
	for(var i=0; i<5; i++){
		x = Math.round(Math.random()*3); /*随机生成黑块位置*/
		block[x+4*i].style.background = 'black';
		black_position[i]=x;
	}
	console.log(black_position);
	for(var t = 16;t<20;t++){
		block[t].onclick = function(){/*给最后一排加点击事件*/
		if(this.style.background=='black'){/*判断是否为黑块*/
			box2.style.transform='translateY(120px)';
			box2.style.transition='all 1s';/*图片下移*/
			console.log(black_position);
			for(i=0; i<5; i++){
				block[black_position[i]+4*i].style.background = 'white';
			}
			
			for(var y=0;y<4;y++){
				black_position[4-y]=black_position[3-y];/*去掉第五层黑块位置,同时将上四层黑块位置下移一层*/
			}
			black_position[0]=Math.round(Math.random()*3);/*随机生成顶层黑块位置*/
			console.log(black_position);
			for(i=0; i<5; i++){
				block[black_position[i]+4*i].style.background = 'black';
			}
			box2.style.top='-120px';
		}else{
			alert('失败！');
			location.reload();
		}
	}
	}
	
}