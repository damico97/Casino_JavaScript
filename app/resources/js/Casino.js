

function showHands(human, computer) {
	for (var i = 0; i < human.handLength(); i++) {
		console.log("Human: " + human.getHandCardAtIndex(i).getName());
		var card_file = "images/cards/card_";
		var card_name = human.getHandCardAtIndex(i).getAbbv();
		card_file += card_name.toLowerCase() + ".png";

		if (i == 0) {
			document.getElementById("h_card_1").src = card_file;
		}
		else if (i == 1) {
			document.getElementById("h_card_2").src = card_file;
		}
		else if (i == 2) {
			document.getElementById("h_card_3").src = card_file;
		}
		else if (i == 3) {
			document.getElementById("h_card_4").src = card_file;
		}
		else {

		}
	}

	for (var i = 0; i < computer.handLength(); i++) {
		console.log("Computer: " + computer.getHandCardAtIndex(i).getName());
		var card_file = "images/cards/card_";
		var card_name = computer.getHandCardAtIndex(i).getAbbv();
		card_file += card_name.toLowerCase() + ".png";

		if (i == 0) {
			document.getElementById("c_card_1").src = card_file;
		}
		else if (i == 1) {
			document.getElementById("c_card_2").src = card_file;
		}
		else if (i == 2) {
			document.getElementById("c_card_3").src = card_file;
		}
		else if (i == 3) {
			document.getElementById("c_card_4").src = card_file;
		}
		else {

		}
	}
}


function handClickEvents() {
	var cardSelected = [false, false, false, false];

	document.getElementById("h_card_1").addEventListener('click', function() {
		var card = document.getElementById("h_card_1");

		if (cardSelected[0] == false) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[0] = true;
			console.log("Human Card 1 Clicked");
		}
		else {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[0] = false;
		}
	});

	document.getElementById("h_card_2").addEventListener('click', function() {
		var card = document.getElementById("h_card_2");

		if (cardSelected[1] == false) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[1] = true;
			console.log("Human Card 2 Clicked");
		}
		else {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[1] = false;
		}
	});

	document.getElementById("h_card_3").addEventListener('click', function() {
		var card = document.getElementById("h_card_3");

		if (cardSelected[2] == false) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[2] = true;
			console.log("Human Card 3 Clicked");
		}
		else {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[2] = false;
		}
	});

	document.getElementById("h_card_4").addEventListener('click', function() {
		var card = document.getElementById("h_card_4")

		if (cardSelected[3] == false) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[3] = true;
			console.log("Human Card 4 Clicked");
		}
		else {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[3] = false;
		}
	});
}

var humanTurn = true;

console.log("New Deck");

var deck = new Deck();
var human = new Player();
var computer = new Player();
deck.initializeDeck();

for (var i = 0; i < deck.deckSize(); i++) {
	var card_path = "images/cards/"
	var card_prefix = "card_";
	var card_name = "";

	var card = deck.get(i).getAbbv();
	card_name += card_path + card_prefix;
	card_name += card.toLowerCase() + ".png";


	var card_image = document.createElement("img");
	card_image.src = card_name;
	document.getElementById("deckView").appendChild(card_image);
}


for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 4; j++) {
		if (i == 0) {
			human.addCardToHand(deck.dealCard());
		}
		else if (i == 1) {
			computer.addCardToHand(deck.dealCard());
		}
		else {
			console.log("ERROR - In Dealing Cards");
		}
	}
}


showHands(human, computer);
handClickEvents();


document.getElementById("button_test").addEventListener('click', function() {
	var deckView = document.getElementById("deckView");

	while (deckView.hasChildNodes()) {
		deckView.removeChild(deckView.lastChild);
	}

	for (var i = 0; i < deck.deckSize(); i++) {
	var card_path = "images/cards/"
	var card_prefix = "card_";
	var card_name = "";

	var card = deck.get(i).getAbbv();
	card_name += card_path + card_prefix;
	card_name += card.toLowerCase() + ".png";


	var card_image = document.createElement("img");
	card_image.src = card_name;
	document.getElementById("deckView").appendChild(card_image);
}
});








