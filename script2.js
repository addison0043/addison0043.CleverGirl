// Plays whenever you attack the 'peopleToEat'
var attackSound = new Audio("Assets/attackSound.mp3");

// Plays if you defeat T-Rex
var winner = new Audio("Assets/winner.mp3");

// Plays if you lose to T-Rex
var tRexRoar = new Audio("Assets/tRexRoar.mp3");

// Picture show before velociraptor "attacks"
var peopleToEat = [
	"Assets/children.jpg",
	"Assets/claire.jpg",
	"Assets/dr_grant.jpg",
	"Assets/ian.jpg",
	"Assets/nedry.jpg",
	"Assets/owen.jpg",
	"Assets/goat.jpg"
]

// Shows after velociraptor "attacks"
var peopleEaten = [
	"Assets/children_eaten.jpg",
	"Assets/claire_eaten.jpg",
	"Assets/dr_grant_eaten.jpg",
	"Assets/ian_eaten.jpg",
	"Assets/nedry_eaten.jpg",
	"Assets/owen_eaten.jpg",
	"Assets/goat_eaten.jpg"
]

// When you click "Attack"
function eatPerson() {
	
	// Keeps running through peopleToEat array as long as it's length is greater than 4
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

	// Fight T-Rex
	else {
		final_boss();
	}
}

// Attack the peopleToEat 
function attack() {
	attackSound.play();
	
	// Adds to your health score
	var addHealth = Math.floor(Math.random() * 100) + 60;
	velocHealth += addHealth;
	$("#vh").html(velocHealth);

	// Displays new image after you attack
	$("#twotwo").html("<img src='" + peopleEaten[rand] + "' />");
	
	// Removes person from array
	peopleEaten.splice(rand, 1);

	// Shows 'Next' button to keep moving through game
	$("#attack").hide();
	$("#next").show();	
}

// Fight T-Rex
function final_boss() {
	

	$("#twotwo").empty();	
	$("#next").hide();
	$("#attack").hide();
	$("#attackRex").show();
	$("#subtext").show();
	$("#subtext").text("Attack the T-Rex!");
	$("#twotwo").append('<img src="Assets/t-rex.jpg"/>');
	
		// Dynamically generate figcaption showing T-Rex's health
		$("#twotwo").append('<figcaption class="health" id="tRexHealth">Health: <span id="trh"></span></figcaption>');

		// Appends T-Rex's Health to DOM
	$("#trh").text(trex_health);
}

function attack_rex() {
	
	// Damage inflicted to T-Rex 
	var attack = Math.floor(Math.random() * 75) + 25;
	trex_health -= attack;
	console.log("Attack: " + attack + "; Health remaining: " + trex_health)
	$("#trh").text(trex_health);

	// Damage T-Rex inflicts on user's velociraptor
	var attackBack = Math.floor(Math.random() * 150);
	velocHealth -= attackBack;
	console.log("Attack Back: " + attackBack + "; Health remaining: " + velocHealth)
	$("#vh").text(velocHealth);
	
	// Recall the function until someone's health score gets below 0
	final_boss();

		// If velociraptor has health above 0 and T-rex doesn't, velociraptor wins
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

		// If T-Rex has health above 0 and velociraptor doesn't, T-Rex wins
		else if (trex_health >= 0 && velocHealth <= 0) {
			tRexRoar.play();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/loser.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rexWINS.gif"/>');
			$("#velocHealth").hide();
			$("#tRexHealth").hide();
			$("#attackRex").hide();
			$("#reset").show();
		}

		// If T-Rex and velocirpators health simultaneously dip below 0, T-Rex wins
		else if (trex_health <= 0 && velocHealth <= 0) {
			tRexRoar.play();
			$("#subtext").hide();
			$("#onetwo").html('<img src="Assets/loser.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rexWINS.gif"/>');
			$("#velocHealth").hide();
			$("#tRexHealth").hide();
			$("#attackRex").hide();
			$("#reset").show();
		}
}