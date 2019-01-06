

function updateView(view, deck, human, computer, table, move) {
	view.showComputerHand(computer);
	view.setupHumanHandView(human, move);
	view.setUpHumanPileView(human);
	view.setupTableCardView(table, move);
	view.setUpDeckView(deck);
}

function checkGameStatus(view, deck, human, computer, table, move) {
	if (human.handLength() == 0 && computer.handLength() == 0) {
		if (deck.deckSize() < 8) {

		}
		else {
			dealCards(human, computer, deck);
		}
		//updateView(view, deck, human, computer, table, move);
	}
	else {
		// Do Nothing
	}
}

function dealCards(human, computer, deck) {
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 4; j++) {
			if (i == 0) {
				human.addCardToHand(deck.dealCard());
			}
			else if (i == 1) {
				computer.addCardToHand(deck.dealCard());
			}
			else {
				console.log("ERROR");
			}
		}
	}
}

function changePage(shown, hidden) {
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
}



var humanTurn = true;

console.log("New Deck");

var view = new View();

var deck = new Deck();
var human = new Player();
var computer = new Player();
var table = new Table();
var move = new Move();

deck.initializeDeck();

if (human.handLength() == 0 && computer.handLength() == 0) {
	// Deal Cards
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
			if (i == 0) {
				human.addCardToHand(deck.dealCard());
			}
			else if (i == 1) {
				computer.addCardToHand(deck.dealCard());
			}
			else if (i == 2) {
				table.addCardToTable(deck.dealCard());
			}
			else {
				console.log("ERROR - In Dealing Cards");
			}
		}
	}
	updateView(view, deck, human, computer, table, move);
}

updateView(view, deck, human, computer, table, move);


document.getElementById("button_test").addEventListener('click', function() {
	changePage('PageTest', 'PageGameBoard');
});

document.getElementById("button_capture").addEventListener('click', function() {
	for (var i = 0; i < move.moveTableCardLength(); i++) {
		console.log(move.moveGetTableCard(i).getAbbv());
	}
	
	if (move.checkPossibleCapture()) {
		human.captureCards(move, table);
	}

	checkGameStatus(view, deck, human, computer, table, move);
	updateView(view, deck, human, computer, table, move);
});

document.getElementById("button_trail").addEventListener('click', function() {
	if (move.checkCardSelected()) {
		human.trailCard(move, table);
		checkGameStatus(view, deck, human, computer, table, move);
		updateView(view, deck, human, computer, table, move);
	}
});

document.getElementById("button_computer").addEventListener('click', function() {
	move.setHandCard(computer.getHandCardAtIndex(0));
	computer.trailCard(move, table);
	checkGameStatus(view, deck, human, computer, table, move);
	updateView(view, deck, human, computer, table, move);
});









