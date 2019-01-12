/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

function updateView(view, tournament, deck, human, computer, table, move, consoleLog) {
	view.setUpComputerPileView(computer);
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
var computer = new Computer();
var table = new Table();
var consoleLog = new ConsoleLog();

var move = new Move();
var suggestedMove = new SuggestedMove();

var humanTurn = true;

var tournament = new Tournament();
tournament.setMembers(deck, human, computer, table, move, consoleLog, humanTurn);
tournament.initalizeScores();

tournament.initalizeDeck();
consoleLog.initLogText("New Deck:" + '<br>' + deck.deckToString());

tournament.dealInitalCards();

updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);


document.getElementById("coin_toss_heads").addEventListener('click', function() {
	changePage("PageGameBoard", "PageCoinToss");
});
document.getElementById("coin_toss_tails").addEventListener('click', function() {
	changePage("PageGameBoard", "PageCoinToss");
});


// Even Listeners for the control buttons
document.getElementById("button_gameBoard_capture").addEventListener('click', function() {
	if (humanTurn) {	
		if (move.checkPossibleCapture()) {
			consoleLog.addToLogText("Human Move:<br>" + human.captureCards(move, table));
			checkGameStatus(tournament, boardViews, deck, human, computer, table, move);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);

			humanTurn = false;
		}
	}
});

document.getElementById("button_gameBoard_trail").addEventListener('click', function() {
	if (humanTurn) {
		if (move.checkCardSelected()) {
			consoleLog.addToLogText("Human Move:<br>" + human.trailCard(move, table));
			checkGameStatus(tournament, boardViews, deck, human, computer, table, move);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);

			humanTurn = false;
		}
	}
});

// Event Listener for the COMPUTER MOVE button
document.getElementById("button_gameBoard_computer").addEventListener('click', function() {
	if (!humanTurn) {
		// Have the Computer find the next move it will make
		computer.findNextMove(suggestedMove, table);

		// Execut the move and store the returned text
		var computerLogic = computer.executeMove(suggestedMove, move, table);

		// Prompt the user to what the computer has decided to do for it's move
		alert("Computer's Move Selection:\n" + computerLogic.replace(/<br\s*[\/]?>/gi, "\n"));
		// Record the move in the consoleLog for the record
		consoleLog.addToLogText("Computer Move:<br>" + computerLogic);

		// Update the Game Board
		checkGameStatus(tournament, boardViews, deck, human, computer, table, move);
		updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);

		humanTurn = true;
	}
});

document.getElementById("button_gameBoard_console").addEventListener('click', function() {
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageGameBoard');
});

document.getElementById("button_console_goBack").addEventListener('click', function() {
	changePage('PageGameBoard', 'PageConsole');
});