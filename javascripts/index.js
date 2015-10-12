var lichin_index = function() {
	var lichin_colorbgtimer = null,
		  cur_index = 1,rand_index;
	var max = 5,min = 1,flag = false;
	var colorbgchanging = function() {
		setInterval(function(){
			var dif = max - min;
			flag = false;
			while(!flag){
				rand_index = min+Math.round(Math.random() * dif);
				if(rand_index != cur_index){
					cur_index = rand_index;
					flag = true;
				}
			}
			$('body').css('background-image','url(http://7xnfy1.com1.z0.glb.clouddn.com/'+cur_index+'.jpg)');
		},25000);
	}
	return {
		init: function(){
			colorbgchanging();
		}
	}
}();