$(document).ready(function() {
	
	$(".item").magnificPopup({
		type: 'image',
		removeDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
			}
		else {
				$('#toTop').fadeOut();
			}	
 
	});
 
	$('#toTop').click(function() {
 
		$('body,html').animate({scrollTop:0},800);
 
	});

	///Задача №2

	var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
	var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            	"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
   var inpd;
	var w;
	var dat;
	var dot = '.';
	var arr;
	var dn;
	var m;


	function getDayInfo(date){
		if (arr[0] >= 22) {
    		w = 4;
    	}
    		else if(arr[0] >= 15 && arr[0] <= 21 ){
    		w = 3;
    	}
    		else if(arr[0] >= 8 && arr[0] <= 14 ){
    		w = 2;
    	}
    		else{
    		w = 1;
    	}
		alert(days[dn] +" "+ w + " неделя " + months[m] +" "+ arr[2] +" года");
	}

	function splitString(stringToSplit, separator) {
  		var arrayOfStrings = stringToSplit.split(separator);
  		arr = arrayOfStrings;
	}


	document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
    	var date = this.value;
    	dat = date;
    	inpd = new Date(dat);
    	dn = inpd.getDay();
    	m = inpd.getMonth();
      splitString(dat, dot);
		getDayInfo();
    }
 	});	
});