var people_to_eat = ["children", "Claire", "Grant", "Ian", "Nedry", "Owen", "goat"];
var veloc_health = Math.floor(Math.random() * 200) + 100;
	console.log(veloc_health);
var trex_health = Math.floor(Math.random() * 50) + 300;
var rand;

window.onload = function start_game() {
	$("#subtext").html("Choose a Velociraptor");

	hide_two_divs();
	
	$("#onethree").html('<img src="Assets/Blue.gif"/>');
        $("#onethree").on("click", choose_blue);
      	

	$("#twothree").html('<img src="Assets/Delta.gif"/>');
		$("#twothree").on("click", choose_delta);
      	

	$("#threethree").html('<img src="Assets/Echo.gif"/>');
		$("#threethree").on("click", choose_echo);
      	
}	

function choose_blue() {
	hide_three_divs();
	show_two_divs();
	$("#onetwo").html('<img src="Assets/Blue.jpg"/>');
	choose_person();
 	}

function choose_delta() {
	hide_three_divs();
	show_two_divs();
	$("#onetwo").html('<img src="Assets/Delta.jpg"/>');
	choose_person();
	}

function choose_echo() {
	hide_three_divs();
	show_two_divs();
	$("#onetwo").html('<img src="Assets/Echo.jpg"/>');
	choose_person();
	}

function hide_three_divs() {
	$("#onethree").hide();
	$("#twothree").hide();
	$("#threethree").hide();
	$("#subtext").hide();
	$("#velochealth").show();
	$("#vh").text(veloc_health);
}

function hide_two_divs(){
	$("#onetwo").hide();
	$("#twotwo").hide();
}

function show_two_divs(){
	$("#onetwo").show();
	$("#twotwo").show();
	$("#attack").show();
	$("#velochealth").show();
}

function choose_person(rand){

	rand = Math.floor(Math.random() * people_to_eat.length);
	console.log(rand + " first victim");	

	$("#attack").show();
	$("#next").hide();

		if (people_to_eat.length < 5) {
			final_boss();
		}

		else if (people_to_eat[rand] == "children") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/children.jpg"/>');
			$("#attack").on("click", children_eaten);
			}

		else if (people_to_eat[rand] == "Claire") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/claire.gif"/>');	
			$("#attack").on("click", claire_eaten);		
		}

		else if (people_to_eat[rand] == "Grant") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/dr_grant.jpg"/>');	
			$("#attack").on("click", dr_grant_eaten);	
		}

		else if (people_to_eat[rand] == "Ian") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/ian.jpg"/>');	
			$("#attack").on("click", ian_eaten);	
		}

		else if (people_to_eat[rand] == "Nedry") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/nedry.jpg"/>');	
			$("#attack").on("click", nedry_eaten);
		}

		else if (people_to_eat[rand] == "Owen") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/owen.jpg"/>');	
			$("#attack").on("click", owen_eaten);
		}

		else if (people_to_eat[rand] == "goat") {
			people_to_eat.splice(rand, 1);
			console.log(people_to_eat + " yea?");
			$("#twotwo").html('<img src="Assets/goat.jpg"/>');	
			$("#attack").on("click", goat_eaten);		
		}

		else {
			choose_person();
		}
}

function children_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/children_eaten.jpg"/>');
	veloc_health += Math.floor(Math.random() * 75) + 50;
	console.log(veloc_health + "mmm... food");
	$("#next").show();
	$("#next").on("click", choose_person);
}

function claire_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/claire_eaten.gif"/>');
	veloc_health += Math.floor(Math.random() * 75) + 25;
	console.log(veloc_health + "mmm... food");
	$("#next").show();
	$("#next").on("click", choose_person);
}

function dr_grant_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/dr_grant_eaten.jpg"/>');
	veloc_health += Math.floor(Math.random() * 75) + 25;
	console.log(veloc_health + "mmm... food");
	$("#vh").text(veloc_health);
	$("#next").show();
	$("#next").on("click", choose_person);
}

function ian_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/ian_eaten.jpg"/>');
	veloc_health += Math.floor(Math.random() * 75) + 25;
	console.log(veloc_health + "mmm... food");
	$("#vh").text(veloc_health);
	$("#next").show();
	$("#next").on("click", choose_person);
}

function nedry_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/nedry_eaten.jpg"/>');
	veloc_health += Math.floor(Math.random() * 75) + 25;
	console.log(veloc_health + "mmm... food");
	$("#vh").text(veloc_health);
	$("#next").show();
	$("#next").on("click", choose_person);
}

function owen_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/owen_eaten.jpg"/>');
	veloc_health += Math.floor(Math.random() * 75) + 25;
	console.log(veloc_health + "mmm... food");
	$("#vh").text(veloc_health);
	$("#next").show();
	$("#next").on("click", choose_person);
}

function goat_eaten() {
	$("#attack").hide();
	$("#twotwo").html('<img src="Assets/goat_eaten.jpg"/>');
	veloc_health += Math.floor(Math.random() * 100) + 75;
	console.log(veloc_health + "mmm... food");
	$("#vh").text(veloc_health);
	$("#next").show();
	$("#next").on("click", choose_person);
}

function final_boss() {
	$("#attack").hide();
	$("#subtext").show();
	$("#subtext").text("Attack the T-Rex!");
	$("#attack2").show();
	$("#twotwo").html('<img src="Assets/t-rex.jpg"/>');
	$("#next").hide();
	$("#trexhealth").show();
	$("#trh").text(trex_health);
	$("#attack2").on("click", attack_rex);
}

function attack_rex() {
	var attack = Math.floor(Math.random() * 75) + 25;
	trex_health -= attack;
	$("#trh").text(trex_health);
	var attack_back = Math.floor(Math.random() * 150);
	veloc_health -= attack_back;
	$("#vh").text(veloc_health);
	final_boss();

		if (trex_health <=0) {
			$("#onetwo").html('<img src="Assets/winner.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rex_dead.jpg"/>');
			$("#subtext").show();
			$("#subtext").text("You Win!");
			$("#trexhealth").hide();
			$("#attack2").hide();
		}

		if (veloc_health <=0) {
			$("#onetwo").html('<img src="Assets/loser.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rex_wins.gif"/>');
			$("#velochealth").hide();
			$("#attack2").hide();
		}

		if (trex_health <=0 && veloc_health <=0) {
			$("#subtext").text("");
			$("#onetwo").html('<img src="Assets/loser.jpg"/>');
			$("#twotwo").html('<img src="Assets/t-rex_wins.gif"/>');
			$("#velochealth").hide();
			$("#trh").text("--");
			$("#attack2").hide();
		}

}