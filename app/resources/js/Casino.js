

function updateView(view, deck, human, computer, table, move, consoleLog) {
	view.showComputerHand(computer);
	view.setupHumanHandView(human, move);
	view.setUpHumanPileView(human);
	view.setupTableCardView(table, move);
	view.setUpDeckView(deck);
	consoleLog.addToLogText(this.boardToString(deck, human, computer, table));
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

function boardToString(deck, human, computer, table) {
	var temp = "";
	var tab = "   ";

	temp = "------------------------------------------------------------------------------------------------------------------------------------------------------" + "<br>";
	temp += "Round: " + "<br><br>";

	temp += "Computer:<br>";
	temp += tab + "Score: " + "<br>";
	temp += tab + "Hand: " + computer.handToString() + "<br>";
	temp += tab + "Pile: " + "<br><br>";

	temp += "Human:<br>";
	temp += tab + "Score: " + "<br>";
	temp += tab + "Hand: " + human.handToString() + "<br>";
	temp += tab + "Pile: " + "<br><br>";

	temp += "Table: " + "<br><br>";

	temp += "Build Owner: " + "<br><br>";

	temp += "Last Capture: " + "<br><br>";

	temp += "Deck: " + deck.deckToString() + "<br><br>";

	temp += "Next Player: " + "<br>";
	temp += "------------------------------------------------------------------------------------------------------------------------------------------------------";

	return temp;
}



var humanTurn = true;

console.log("New Deck");

var boardViews = new BoardViews();
var consoleViews = new ViewsConsole();

var deck = new Deck();
var human = new Player();
var computer = new Player();
var table = new Table();
var move = new Move();
var consoleLog = new ConsoleLog();

deck.initializeDeck();
consoleLog.initLogText("New Deck:" + '<br>' + deck.deckToString());

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
}

updateView(boardViews, deck, human, computer, table, move, consoleLog);


document.getElementById("button_gameBoard_test").addEventListener('click', function() {
	changePage('PageTest', 'PageGameBoard');
});

document.getElementById("button_gameBoard_capture").addEventListener('click', function() {
	for (var i = 0; i < move.moveTableCardLength(); i++) {
		console.log(move.moveGetTableCard(i).getAbbv());
	}
	
	if (move.checkPossibleCapture()) {
		human.captureCards(move, table);
	}

	checkGameStatus(boardViews, deck, human, computer, table, move);
	updateView(boardViews, deck, human, computer, table, move, consoleLog);
});

document.getElementById("button_gameBoard_trail").addEventListener('click', function() {
	if (move.checkCardSelected()) {
		human.trailCard(move, table);
		checkGameStatus(boardViews, deck, human, computer, table, move);
		updateView(boardViews, deck, human, computer, table, move, consoleLog);
	}
});

document.getElementById("button_gameBoard_computer").addEventListener('click', function() {
	move.setHandCard(computer.getHandCardAtIndex(0));
	computer.trailCard(move, table);
	checkGameStatus(boardViews, deck, human, computer, table, move);
	updateView(boardViews, deck, human, computer, table, move, consoleLog);
});

document.getElementById("button_gameBoard_console").addEventListener('click', function() {
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageGameBoard');
});

document.getElementById("button_console_goBack").addEventListener('click', function() {
	changePage('PageGameBoard', 'PageConsole');
});