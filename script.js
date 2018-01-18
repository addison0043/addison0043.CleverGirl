// Audio files 
var jurassMusic = new Audio("Assets/JurassicParkRemix.mp3");
var growl = new Audio("Assets/growl.mp3");

// Random number for velociraptor health
var velocHealth = Math.floor(Math.random() * 40) + 10;
	console.log(velocHealth);

// Random number for T-Rex health
var trex_health = Math.floor(Math.random() * 50) + 300;
var rand;

// Plays music and starts game
window.onload = function() {
	jurassMusic.play();
	start_game();
}


// Choose a velociraptor. 3 choices.
function start_game() {
	$("#ceiling2").hide();
	$("#subtext").html("Choose a Velociraptor");

	$("#blue").html('<img src="Assets/Blue.gif"/>');
	$("#delta").html('<img src="Assets/Delta.gif"/>');
	$("#echo").html('<img src="Assets/Echo.gif"/>');

	
	// Generates red border around whichever velociraptor the user clicks
	$('.veloc').click(function() {
		
		if ($(this).hasClass('velocBord')) {
			$(this).removeClass('velocBord');
		}
		else {
			$(this).addClass('velocBord').siblings().removeClass('velocBord');
		}
	});    	
}	

// Once user chooses velociraptor
function submit() {
	
	growl.play();

	if ($("#blue").hasClass('velocBord')) {
			hideVeloc();
			$("#subtext").hide();
			$("#onetwo").prepend('<img src="Assets/Blue.jpg"/>');
			eatPerson();
		}
	else if ($("#delta").hasClass('velocBord')) {
			hideVeloc();
			$("#subtext").hide();
			$("#onetwo").prepend('<img src="Assets/Delta.jpg"/>');
			eatPerson();
		}
	else if ($("#echo").hasClass('velocBord')) {
			hideVeloc();
			$("#subtext").hide();
			$("#onetwo").prepend('<img src="Assets/Echo.jpg"/>');
			eatPerson();
		}
}

// Hide Grid 1, show Grid 2
function hideVeloc() {
	$("#ceiling").remove();
	$("#ceiling2").show();
}


function reset() {
	document.location.reload(true);
}