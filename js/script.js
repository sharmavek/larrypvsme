/// <reference path="typings\jquery\jquery.d.ts" />

// Live earnings
$(document).ready(function(){
	setInterval(moneyTimer , 1);
});

$(window).load(function(){
	$('#head_wrap').removeClass('preload');
});

function moneyTimer(){
	var money = $('#earnings');
	// Page makes $311.98 a second
	var perSecond = .31198
	money.text((Number(money.text()) + perSecond).toFixed(2));
}

// Salary results
// http://www.businessinsider.com/what-warren-buffett-makes-per-hour-2013-12
function proavail(){
	$('#instant').hide();
	$('#results_wrap').show();
	// Page reportedly made $9.3 billion in 2013
	var larryp_annual = 9300000000;
	var user_input = $('#user_input');
	// Multiply percentage of user's relative wage by number of hours in 345 days 
	var hours = (user_input.val()/larryp_annual * 8280);
	var minutes = (hours - Math.floor(hours)) * 60;
	var seconds = (minutes - Math.floor(minutes)) * 60;
	
	// Results
	if (Boolean(Math.floor(hours)) || Boolean(Math.floor(minutes)) || Math.floor(seconds) > 5){
		if (Math.floor(hours) > 8280){
			$('#fast').text(Math.floor(seconds));
			$('#results_wrap').hide();
			$('#instant').show();
		}
		$('#seconds').text(Math.floor(seconds));
		$('#minutes').text(Math.floor(minutes));
		$('#hours').text(Math.floor(hours));
	}else{
		$('#fast').text("Way to quickly, sir.");
		$('#results_wrap').hide();
		$('#instant').show();
	}
	$('#results').modal('show');
	moneyTimer();
}