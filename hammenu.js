$(function(){
	var b1 = $('.b1')
	var but = $('.but')
	var but2 = $('.but2')
	
	var cont = $('.content')
	console.log(cont.width())

	
	
	
	
	but.click(moveDiv);
	
	function moveDiv(){
		//but.css({transition:'all 0.5s', transform: 'rotate(90deg)'})
		but2.html('<i class="fas fa-times"></i>')
		b1.animate({left:0},{duration:500,
		easing:"easeInCirc",
		complete:function(){but.click(moveDivOut)} });
		
		but.unbind();
		but.click(moveDivOut);
		
		function moveDivOut(){
		//but.css({transition:'all 0.5s', transform: 'rotate(0deg)'})
		b1.animate({left:-450},{duration:500,complete:function(){but.click(moveDiv)} });
		but2.html('<i class="fas fa-bars"></i>')
		but.unbind();
	}
		
		
		
	}
		
	
	
	
	
	
	
	
	})//$
	
	