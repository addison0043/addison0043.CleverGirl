var jurassMusic = new Audio("Assets/JurassicParkRemix.mp3");
var velocHealth = Math.floor(Math.random() * 40) + 10;
	console.log(velocHealth);
var trex_health = Math.floor(Math.random() * 50) + 300;
var rand;

window.onload = function() {
	jurassMusic.play();
	start_game();
}


function start_game() {
	$("#ceiling2").hide();
	$("#subtext").html("Choose a Velociraptor");

	$("#blue").html('<img src="Assets/Blue.gif"/>');
	$("#delta").html('<img src="Assets/Delta.gif"/>');
	$("#echo").html('<img src="Assets/Echo.gif"/>');

	$('.veloc').click(function() {
		
		if ($(this).hasClass('velocBord')) {
			$(this).removeClass('velocBord');
		}
		else {
			$(this).addClass('velocBord').siblings().removeClass('velocBord');
		}
	});    	
}	

function submit() {
	
	if ($("#blue").hasClass('velocBord')) {
			hideVeloc();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/Blue.jpg"/>');
			eatPerson();
		}
	else if ($("#delta").hasClass('velocBord')) {
			hideVeloc();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/Delta.jpg"/>');
			eatPerson();
		}
	else if ($("#echo").hasClass('velocBord')) {
			hideVeloc();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/Echo.jpg"/>');
			eatPerson();
		}
}

function hideVeloc() {
	$("#ceiling").remove();
	$("#ceiling2").show();
}


function reset() {
	document.location.reload(true);
}