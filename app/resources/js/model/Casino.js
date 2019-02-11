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


function readFiles(event) {
	var fileList = event.target.files;

    for(var i=0; i < fileList.length; i++ ) {
        loadAsText(fileList[i]);
	}
}

function loadAsText(theFile) {
	var reader = new FileReader();

    reader.onload = function(loadedEvent) {
		fileContent = loadedEvent.target.result;
    };
	reader.readAsText(theFile);

	setTimeout(function() {
		loadSavedFile();
	}, 3000);
}

function loadSavedFile() {
	tournament.loadFile(fileContent);

	checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage("PageGameBoard", "PageLoadGame");
}

function saveGameToFile(fileName) {

	var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(tournament.serializeGame().replace(/<br\s*[\/]?>/gi, "\n")));
    pom.setAttribute('download', fileName);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
	}
	else {
        pom.click();
	}
}


//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------


var fileContent;

var boardViews = new BoardViews();
var consoleViews = new ViewsConsole();
var coinTossViews = new ViewsCoinToss();
var endRoundViews = new ViewsRoundEnd();
var endTournamentViews = new ViewsTournamentEnd();

var deck = new Deck();
var human = new Human();
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
document.getElementById("button_welcome_loadGame").addEventListener('click', function() {
	tournament.resetTournament();
	changePage("PageLoadGame", "PageWelcome");
});
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE LOAD GAME PAGE
document.getElementById("button_load_case_1").addEventListener('click', function() {
	tournament.loadCaseFile("/assets/case1.txt");

	checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage('PageGameBoard', 'PageLoadGame');
});
document.getElementById("button_load_case_2").addEventListener('click', function() {
	tournament.loadCaseFile("/assets/case2.txt");

	checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage('PageGameBoard', 'PageLoadGame');
});
document.getElementById("button_load_case_3").addEventListener('click', function() {
	tournament.loadCaseFile("/assets/case3.txt");

	checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage('PageGameBoard', 'PageLoadGame');
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
// Event Listener for the HELP button
document.getElementById("button_gameBoard_help").addEventListener('click', function() {
	if (tournament.getHumanTurn()) {
		human.findNextMove(suggestedMove, table);
		alert("HELP SUGGESTION....\n" + human.getHelp(suggestedMove));
		suggestedMove.resetMove();
	}
});
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
			if (move.checkPossibleTrail()) {
				consoleLog.addToLogText("Human Move:<br>" + human.trailCard(move, table));

				tournament.changeHumanTurn();

				checkGameStatus(tournament, round, boardViews, deck, human, computer, table, move, consoleLog, endRoundViews, endTournamentViews);
				updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
			}
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

		suggestedMove.resetMove();

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
	document.getElementById("myForm").style.display = "block";
});

document.getElementById("button_gameBoard_form_submit").addEventListener('click', function() {
	var userInput = document.getElementById("input_gameBoard_form").value;

	if (userInput.substring(userInput.length - 4) != ".txt") {
		userInput += ".txt";
	}

	saveGameToFile(userInput);
	tournament.resetTournament();
	changePage('PageWelcome', 'PageGameBoard');
	document.getElementById("myForm").style.display = "none";
});
document.getElementById("button_gameBoard_form_close").addEventListener('click', function() {
	document.getElementById("myForm").style.display = "none";
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
	changePage('PageConsole', 'PageTournamentEnd');
});
document.getElementById("button_tournamentEnd_exit").addEventListener('click', function() {
	tournament.resetTournament();
	changePage('PageWelcome', 'PageTournamentEnd');
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