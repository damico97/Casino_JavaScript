
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



document.getElementById("h_card_1").addEventListener('click', function() {
	console.log("Human Card 1 Clicked");
});

document.getElementById("h_card_2").addEventListener('click', function() {
	console.log("Human Card 2 Clicked");
});

document.getElementById("h_card_3").addEventListener('click', function() {
	console.log("Human Card 3 Clicked");
});

document.getElementById("h_card_4").addEventListener('click', function() {
	console.log("Human Card 4 Clicked");
});



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








