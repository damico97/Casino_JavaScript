

console.log("New Deck");

var deck = new Deck();
deck.initializeDeck();

var i;
for (i = 0; i < deck.deckSize(); i++) {
	console.log(deck.get(i).getName());
}

/*
console.log("Shuffle Deck");
deck.shuffleDeck();

var i;
for (i = 0; i < deck.deckSize(); i++) {
	console.log(deck.get(i).getName());
}
*/