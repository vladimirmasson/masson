$(function(){
	var about = $('.about');
	var buttonR = $('.buttonR');
	var buttonL = $('.buttonL');
	
	var words = ['Лаконичность и простота, ничего лишнего, но такая притягательная фактура - «бетон»','Берем пластиковую банку от протеина','Убираем с банки все лишнее, обезжириваем водкой','Покрываем адгезионным грунтом Daria Geiler на 1 слой','Наносим кистью бетон Daria Geiler, на 2 слоя, хаотично, когда высох, проходимся кистью с водой по поверхности, чтобы кое-где размыть-разгладить фактуру','Наносим воск "Кокос" Daria Geiler, затем с помощью жгутовой верёвки оформляем горлышко банки','Украшаем вазу цветами и у вас новый предмет декора для вашего дома!'];
	
	
	
	buttonL.css({display:'none'})
	
	var count = 0;
	about.text(words[count])
	//$('#img'+(count)).css({display:'block'})
	
	buttonR.click(function(){
		count++;
		about.text(words[count]);
		$('#img'+(count)).css({display:'block'})
		if(count==6){
		buttonR.css({display:'none'})}
		if(count>0){buttonL.css({display:'block'})}
	
			
	})
		
	buttonL.click(function(){
		$('#img'+(count)).css({display:'none'})
		count--;
		about.text(words[count]);
		if(count<6){buttonR.css({display:'block'})}
		if(count==0){
		buttonL.css({display:'none'});}
	})
	
	
	
	
	
	
	
	})//$
	
	