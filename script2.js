var attackSound = new Audio("Assets/attackSound.mp3");
var winner = new Audio("Assets/winner.mp3");
var tRexRoar = new Audio("Assets/tRexRoar.mp3");

var peopleToEat = [
	"Assets/children.jpg",
	"Assets/claire.gif",
	"Assets/dr_grant.jpg",
	"Assets/ian.jpg",
	"Assets/nedry.jpg",
	"Assets/owen.jpg",
	"Assets/goat.jpg"
]

var peopleEaten = [
	"Assets/children_eaten.jpg",
	"Assets/claire_eaten.gif",
	"Assets/dr_grant_eaten.jpg",
	"Assets/ian_eaten.jpg",
	"Assets/nedry_eaten.jpg",
	"Assets/owen_eaten.jpg",
	"Assets/goat_eaten.jpg"
]

function eatPerson() {
	
	if (peopleToEat.length > 4) {
		
		$("#next").hide();
		$("#velocHealth").hide();
		rand = Math.floor(Math.random() * peopleToEat.length);
			console.log("Random: " + rand);
		$("#twotwo").html("<img src='" + peopleToEat[rand] + "' />");
		console.log("Selection: " + peopleToEat[rand]);
		peopleToEat.splice(rand, 1);
		console.log(peopleToEat);
		$("#attack").show();
		$("#velocHealth").show();
		$("#vh").html(velocHealth);
	}

	else {
		final_boss();
	}
}

function attack() {
	attackSound.play();
	var addHealth = Math.floor(Math.random() * 100) + 60;
	velocHealth += addHealth;
	$("#vh").html(velocHealth);
	$("#twotwo").html("<img src='" + peopleEaten[rand] + "' />");
	peopleEaten.splice(rand, 1);
	console.log(peopleEaten);
	$("#next").show();
	$("#attack").hide();
}

function final_boss() {
	$("#next").hide();
	$("#attack").hide();
	$("#attackRex").show();
	$("#subtext").show();
	$("#subtext").text("Attack the T-Rex!");
	$("#twotwo").html('<img src="Assets/t-rex.jpg"/>');
	$("#tRexHealth").show();
	$("#trh").text(trex_health);
}

function attack_rex() {
	var attack = Math.floor(Math.random() * 75) + 25;
	trex_health -= attack;
	console.log("Attack: " + attack + "; Health remaining: " + trex_health)
	$("#trh").text(trex_health);
	var attackBack = Math.floor(Math.random() * 150);
	velocHealth -= attackBack;
	console.log("Attack Back: " + attackBack + "; Health remaining: " + velocHealth)
	$("#vh").text(velocHealth);
	final_boss();

		if (trex_health <= 0 && velocHealth > 0) {			
			winner.play();
			$("#onetwo").html('<img src="Assets/winner.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rex_dead.jpg"/>');
			$("#subtext").show();
			$("#subtext").text("You Win!");
			$("#velocHealth").hide();
			$("#tRexHealth").hide();
			$("#attackRex").hide();
			$("#reset").show();
		}

		else if (trex_health >= 0 && velocHealth <= 0) {
			tRexRoar.play();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/loser.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rex_wins.gif"/>');
			$("#velocHealth").hide();
			$("#tRexHealth").hide();
			$("#attackRex").hide();
			$("#reset").show();
		}

		else if (trex_health <= 0 && velocHealth <= 0) {
			tRexRoar.play();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/loser.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rex_wins.gif"/>');
			$("#velocHealth").hide();
			$("#tRexHealth").hide();
			$("#attackRex").hide();
			$("#reset").show();
		}
}