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
	view.setupHumanHandView(human, move, tournament.getHumanTurn());
	view.setUpHumanPileView(human);
	view.setUpTableBuildView(table, move, tournament.getHumanTurn());
	view.setupTableCardView(table, move, tournament.getHumanTurn());
	view.setUpDeckView(deck);
	view.setHeaderText(tournament);

	consoleLog.addToLogText(tournament.boardToString());
}

function checkGameStatus(tournament, round, view, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews) {

	if (human.handLength() == 0 && computer.handLength() == 0) {
		if (deck.deckSize() < 8) {
			if (tournament.getLastCapture() === "Human") {
				human.addCardArrayToPile(table.getTableCards());
				deck.deckClear();

				consoleLog.addToLogText("The Human Gets The Cards Left On The Table");
				table.clearTableCards();

				tournament.setHumanTurn(true);
			}
			else if (tournament.getLastCapture() === "Computer"){
				computer.addCardArrayToPile(table.getTableCards());
				deck.deckClear();

				consoleLog.addToLogText("The Computer Gets The Cards Left On The Table");
				table.clearTableCards();

				tournament.setHumanTurn(false);
			}
			else {
				// Error
			}

			// Record The Scores
			round.recordPlayerScores();

			if (human.getTournamentScore() >= 21 || computer.getTournamentScore() >= 21) {
				console.log("Human Score = " + human.getTournamentScore());
				console.log("Computer Score = " + computer.getTournamentScore());

				endTournamentViews.setUpTournamentEndView(human, computer, consoleLog);
				lastPage = "PageTournamentEnd";
				changePage("PageTournamentEnd", "PageGameBoard");
				return;
			}
			else {
				endRoundViews.setUpRoundEndView(human, computer, consoleLog);
				lastPage = "PageRoundEnd";
				changePage("PageRoundEnd", "PageGameBoard");
				return;
			}
		}
		else {
			round.dealCards();
			return;
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

function saveGameToFile(fileName) {
	/*
	var fs = require('fs');

    fs.writeFile('./saveFiles/demo.txt', 'This is a test', function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("Success");
	});
	*/
		var fs = require('fs');
		content = "Hello Content!";
		fs.writeFile('mynewfile3.txt', content, 'utf8', function (err) {
			if (err) {
				throw err;
			}
			console.log('Saved!');
		});
	
	/*
	require('browserify-fs', function (fs) {
		//foo is now loaded.
		fs = require('browserify-fs');
		data = "Hello Content!";

		fs.writeFile('mynewfile3.txt', data, function (err,data) {
			if (err) {
				throw err;
			}
			console.log('Saved!');
		});
	});
	*/
}
// END Functions 
//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------

require.config({
	//Define 3rd party plugins dependencies
	paths: {
		"js": "casino"
	  	//"fs": "fs"
	}
});

// you can now use `fs`

var boardViews = new BoardViews();
var consoleViews = new ViewsConsole();
var coinTossViews = new ViewsCoinToss();
var endRoundViews = new ViewsRoundEnd();
var endTournamentViews = new ViewsTournamentEnd();

var deck = new Deck();
var human = new Player();
var computer = new Computer();
var table = new Table();
var consoleLog = new ConsoleLog();

var move = new Move();
var suggestedMove = new SuggestedMove();

var tournament = new Tournament();
var round = new Round();

var lastPage = "PageGameBoard";

human.setPlayerName("Human");
computer.setPlayerName("Computer");

tournament.setMembers(deck, human, computer, table, move, consoleLog, 0);
round.setMembers(deck, human, computer, table, move, consoleLog);

//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE WELCOME PAGE
document.getElementById("button_welcome_newGame").addEventListener('click', function() {
	changePage("PageCoinToss", "PageWelcome");
});
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE COIN TOSS PAGE
document.getElementById("coin_toss_heads").addEventListener('click', function() {
	tournament.setCoinCall(0);
	tournament.runCoinToss(consoleLog);
	coinTossViews.displayWinner(tournament.getCoinCall(), tournament.getCoinResult(), tournament.getCoinTossWinner());
});
document.getElementById("coin_toss_tails").addEventListener('click', function() {
	tournament.setCoinCall(1);
	tournament.runCoinToss(consoleLog);
	coinTossViews.displayWinner(tournament.getCoinCall(), tournament.getCoinResult(), tournament.getCoinTossWinner());
});
document.getElementById("coin_toss_button_start").addEventListener('click', function() {
	tournament.initalizeScores();
	round.initalizeRound();
	tournament.incRoundNumber();
	
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog, endRoundViews);
	changePage("PageGameBoard", "PageCoinToss");
});
document.getElementById("coin_toss_button_loadDeck").addEventListener('click', function() {
	tournament.loadDeckFile();
	round.initRoundFromDeck();
	tournament.incRoundNumber();

	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog, endRoundViews);
	changePage("PageGameBoard", "PageCoinToss");
});
// END COIN TOSS PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE GAME BOARD PAGE
// Event Listeners for the BUILD button
document.getElementById("button_gameBoard_build").addEventListener('click', function() {
	if (tournament.getHumanTurn()) {
		var tempValue = move.checkPossibleBuild(human);
		if (tempValue != -1) {
			consoleLog.addToLogText("Human Move:<br>" + human.createBuild(move, table));

			tournament.changeHumanTurn();

			checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the MULTI-BUILD button
document.getElementById("button_gameBoard_multi").addEventListener('click', function() {
	if (tournament.getHumanTurn()) {
		if (move.checkPossibleMultiBuild()) {
			console.log("Human Move:<br>" + human.createMultiBuild(move, table));

			tournament.changeHumanTurn();

			checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the EXTEND-BUILD button
document.getElementById("button_gameBoard_extend").addEventListener('click', function() {
	if (tournament.getHumanTurn()) {
		if (move.checkPossibleExtendBuild(human)) {
			console.log("Human Move:<br>" + human.createExtendedBuild(move, table));

			tournament.changeHumanTurn();

			checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the CAPTURE button
document.getElementById("button_gameBoard_capture").addEventListener('click', function() {
	if (tournament.getHumanTurn()) {	
		if (move.checkPossibleCapture()) {
			consoleLog.addToLogText("Human Move:<br>" + human.captureCards(move, table));

			tournament.changeHumanTurn();

			tournament.setLastCapture("Human");

			checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the TRAIL button
document.getElementById("button_gameBoard_trail").addEventListener('click', function() {
	if (tournament.getHumanTurn()) {
		if (move.checkCardSelected()) {
			consoleLog.addToLogText("Human Move:<br>" + human.trailCard(move, table));

			tournament.changeHumanTurn();

			checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the COMPUTER MOVE button
document.getElementById("button_gameBoard_computer").addEventListener('click', function() {
	// Constansts for Move Selections
	const CAPTURE = 4;

	if (!tournament.getHumanTurn()) {
		// Have the Computer find the next move it will make
		computer.findNextMove(suggestedMove, table);

		// Execut the move and store the returned text
		var computerLogic = computer.executeMove(suggestedMove, move, table);

		// Prompt the user to what the computer has decided to do for it's move
		alert("Computer's Move Selection:\n" + computerLogic.replace(/<br\s*[\/]?>/gi, "\n"));
		// Record the move in the consoleLog for the record
		consoleLog.addToLogText("Computer Move:<br>" + computerLogic);

		tournament.changeHumanTurn();

		if (suggestedMove.getSuggestion() === CAPTURE) {
			tournament.setLastCapture("Computer");
		}

		// Update the Game Board
		checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
		updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	}
});
// Event Listener for the CONSOLE button
document.getElementById("button_gameBoard_console").addEventListener('click', function() {
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageGameBoard');
});

document.getElementById("button_gameBoard_save").addEventListener('click', function() {
	saveGameToFile("text.txt");
	changePage('PageWelcome', 'PageGameBoard');
});
// END GAME BOARD PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE END ROUND PAGE
// Event Listener for the CONSOLE button
document.getElementById("button_roundEnd_console").addEventListener('click', function() {
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageRoundEnd');
});
// Event Listener for the NEXT ROUND button
document.getElementById("button_roundEnd_nextRound").addEventListener('click', function() {
	tournament.incRoundNumber();
	round.initalizeNextRound();

	human.clearPile();
	computer.clearPile();

	consoleLog.addToLogText("<b>NEXT ROUND STARTED</b>");
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	lastPage = "PageGameBoard";
	changePage('PageGameBoard', 'PageRoundEnd');
});
// END END ROUND PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE END TOURNAMENT PAGE
document.getElementById("button_tournamentEnd_console").addEventListener('click', function() {
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageRoundEnd');
});
document.getElementById("button_tournamentEnd_exit").addEventListener('click', function() {

});
// END END TOURNAMENT PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE CONSOLE PAGE
// Event Listener for the GO Back button
document.getElementById("button_console_goBack").addEventListener('click', function() {
	// Check which page to return to
	if (lastPage === "PageGameBoard") {
		changePage('PageGameBoard', 'PageConsole');
	}
	else if (lastPage === "PageRoundEnd") {
		changePage('PageRoundEnd', 'PageConsole');
	}
	else if (lastPage === "PageTournamentEnd") {
		changePage('PageTournamentEnd', 'PageConsole');
	}
	else {
		console.log("ERROR");
	}
});
// END CONSOLE PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------