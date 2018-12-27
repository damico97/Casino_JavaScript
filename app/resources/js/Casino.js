

console.log("New Deck");

var deck = new Deck();
deck.initializeDeck();

var i;
for (i = 0; i < deck.deckSize(); i++) {
	var card_path = "images/cards/"
	var card_prefix = "card_";
	var card_name = "";

	var card = deck.get(i).getAbbv();
	card_name += card_path + card_prefix;
	card_name += card.toLowerCase() + ".png";
	console.log(card_name);


	var card_image = document.createElement("img");
	card_image.src = card_name;
	document.getElementById("deckView").appendChild(card_image);
}

/*
console.log("Shuffle Deck");
deck.shuffleDeck();

var i;
for (i = 0; i < deck.deckSize(); i++) {
	console.log(deck.get(i).getName());
}
*/