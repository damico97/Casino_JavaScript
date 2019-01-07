

function updateView(view, tournament, deck, human, computer, table, move, consoleLog) {
	view.showComputerHand(computer);
	view.setupHumanHandView(human, move);
	view.setUpHumanPileView(human);
	view.setupTableCardView(table, move);
	view.setUpDeckView(deck);
	consoleLog.addToLogText(tournament.boardToString());
}

function checkGameStatus(tournament, view, deck, human, computer, table, move) {
	if (human.handLength() == 0 && computer.handLength() == 0) {
		if (deck.deckSize() < 8) {

		}
		else {
			tournament.dealCards();
		}
	}
	else {
		// Do Nothing
	}
}

function changePage(shown, hidden) {
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
}
// END Functions 
//--------------------------------------------------------------------------------------------------------------------------------

var boardViews = new BoardViews();
var consoleViews = new ViewsConsole();

var deck = new Deck();
var human = new Player();
var computer = new Player();
var table = new Table();
var move = new Move();
var consoleLog = new ConsoleLog();

var humanTurn = true;

var tournament = new Tournament();
tournament.setMembers(deck, human, computer, table, move, consoleLog, humanTurn);

tournament.initalizeScores();

tournament.initalizeDeck();
consoleLog.initLogText("New Deck:" + '<br>' + deck.deckToString());

tournament.dealInitalCards();

updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);



// Even Listeners for the control buttons
document.getElementById("button_gameBoard_capture").addEventListener('click', function() {
	for (var i = 0; i < move.moveTableCardLength(); i++) {
		console.log(move.moveGetTableCard(i).getAbbv());
	}
	
	if (move.checkPossibleCapture()) {
		consoleLog.addToLogText("Human Move:<br>" + human.captureCards(move, table));
	}

	checkGameStatus(tournament, boardViews, deck, human, computer, table, move);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
});

document.getElementById("button_gameBoard_trail").addEventListener('click', function() {
	if (move.checkCardSelected()) {
		consoleLog.addToLogText("Human Move:<br>" + human.trailCard(move, table));
		checkGameStatus(tournament, boardViews, deck, human, computer, table, move);
		updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	}
});

document.getElementById("button_gameBoard_computer").addEventListener('click', function() {
	move.setHandCard(computer.getHandCardAtIndex(0));
	alert("Computer's Move Selection:\n" + computer.trailCard(move, table));
	checkGameStatus(tournament, boardViews, deck, human, computer, table, move);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
});

document.getElementById("button_gameBoard_console").addEventListener('click', function() {
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageGameBoard');
});

document.getElementById("button_console_goBack").addEventListener('click', function() {
	changePage('PageGameBoard', 'PageConsole');
});