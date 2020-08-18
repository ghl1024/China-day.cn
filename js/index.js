window.onload=function(){
	var next_year =2021;
	var current_year = 2020;
	var months = 2;
	var days=14;
	var hours = 0;
	var minutes =0;
	var seconds =0;
	var now_date = new Date();
	var next_date = new Date(next_year,months,days,hours, minutes, seconds);
	if(next_date-now_date == 0){
		next_year++;
		current_year++;
	}
	function timer(next_year,months,days,hours, minutes, seconds){
		// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
		var end_time = new Date(next_year,months-1,days,hours, minutes, seconds);//月时从零开始的，所以要比真实月份小1
		var now_time = new Date();
		var how_long = end_time.getTime()-now_time.getTime();
		var day = parseInt(how_long/(1000*24*60*60));
		var hour = parseInt(how_long/(1000*60*60)%24);
		var miute = parseInt(how_long/(1000*60)%60);
		var second = parseInt(how_long/1000%60);
		return "<span class='time'>"+day+"</span><span class='text'>天</span>"+
				"<span class='time'>"+hour+"</span><span class='text'>时</span>"+
				"<span class='time'>"+miute+"</span><span class='text'>分</span>"+
				"<span class='time'>"+second+"</span><span class='text'>秒</span>";
	}

	// 自动填充年份
	$('.now-year').text(current_year);
	$('.next-year').text(next_year);
	
	// 除夕倒计时
	
	function year(){
		var timerHtml = document.getElementById("newyear");
		setInterval(function(){
			timerHtml.innerHTML = timer(next_year,months,days,hours, minutes, seconds);
		},1000);
	};
	year()
	// 国庆倒计时
	function guoqing(){
		var timerHtml = document.getElementById("guoqing");
		setInterval(function(){
			timerHtml.innerHTML = timer(current_year,10,1,hours, minutes, seconds);
		},1000);
	};
	guoqing()
	
	function gaokao(){
		var timerHtml = document.getElementById("gaokao");
		setInterval(function(){
			timerHtml.innerHTML = timer(next_year,6,7,hours, minutes, seconds);
		},1000);
	};
	gaokao()
}