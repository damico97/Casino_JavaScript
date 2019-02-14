/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */


 /**
  * updateView(), References the model classes and updates the UI based off the model
  * @param view -> The views for the Board
  * @param tournament -> The Tournament Class
  * @param deck -> The Deck Class
  * @param human -> The Human Class Player
  * @param computer -> The Computer Class Player
  * @param table -> The Table Class
  * @param move -> The Move Class
  * @param consoleLog -> The ConsoleLog Class
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
	view.showPlayerScores(human, computer);

	consoleLog.addToLogText(tournament.boardToString());
}


/**
 * checkGameStatus(), Checks for if the Round or Tournament is Over or if more cards are needed to be dealt
 * @param tournament -> The Tournament Class
 * @param round -> The Round Class
 * @param deck -> The Deck Class
 * @param human -> The Human Player Class
 * @param computer -> The Computer Player Class
 * @param table -> The Table Class
 * @param consoleLog -> The ConsoleLog Class
 * @param endRoundViews -> The Access For The End Round UI
 * @param endTournamentViews -> The Access For The End Tournament UI
 */
function checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews) {
	// Check if both players hand is empty
	if (human.handLength() == 0 && computer.handLength() == 0) {
		// Check if the Deck is Empty
		if (deck.deckSize() < 8) {
			// Check if the Human was the last capture
			if (tournament.getLastCapture() === "Human") {
				// Add the left over cards on the table to the Human's pile
				human.addCardArrayToPile(table.getTableCards());
				// Clear the deck
				deck.deckClear();

				// Add to the Log that the Human gets the left over cards
				consoleLog.addToLogText("The Human Gets The Cards Left On The Table");

				// Clear the table
				table.clearTableCards();

				// Set that the human will make the next move
				tournament.setHumanTurn(true);
			}
			// Check if the Computer was the last capture
			else if (tournament.getLastCapture() === "Computer"){
				// Add the left over cards on the table to the Computer's pile
				computer.addCardArrayToPile(table.getTableCards());
				// Clear the deck
				deck.deckClear();

				// Add to the Log that the Computer gets the left over cards
				consoleLog.addToLogText("The Computer Gets The Cards Left On The Table");

				// Clear the table
				table.clearTableCards();

				// Set the computer as the next turn
				tournament.setHumanTurn(false);
			}
			// ERROR
			else {
				console.log("ERROR!! - [Casino] checkGameStatus()");
			}

			// Record The Scores
			round.recordPlayerScores();

			// Check if one of the player's scores is greater than or equal to 21
			if (human.getTournamentScore() >= 21 || computer.getTournamentScore() >= 21) {
				// Set up the end of Tournament Page
				endTournamentViews.setUpTournamentEndView(human, computer, consoleLog);
				// Set the last pages
				lastPage = "PageTournamentEnd";
				// Change the Page
				changePage("PageTournamentEnd", "PageGameBoard");
				return;
			}
			else {
				// Set up the end of Round Page
				endRoundViews.setUpRoundEndView(human, computer, consoleLog);
				// Set the last pages
				lastPage = "PageRoundEnd";
				// Change the page
				changePage("PageRoundEnd", "PageGameBoard");
				return;
			}
		}
		// Deal more cards
		else {
			// Deal the cards
			round.dealCards();
			return;
		}
	}
	else {
		// Do Nothing
	}
}


/**
 * changePage(), Changes the visable page in the UI
 * @param shown -> The page to make vistable
 * @param hidden -> The page to hide
 */
function changePage(shown, hidden) {
	// Set the page to be shown
	document.getElementById(shown).style.display='block';
	// Set the page to be hidden
	document.getElementById(hidden).style.display='none';
	return false;
}


/**
 * readFiles(), Goes the the file and reads them
 * @param event -> The File to be read and loaded
 */
function readFiles(event) {
	// The List of File Names
	var fileList = event.target.files;
	// Loop through the files in the list, There's always 1 file in this case
    for(var i=0; i < fileList.length; i++ ) {
        loadAsText(fileList[i]);
	}
}


/**
 * loadAsText(), Loads the text from the file, and saves it to fileContent, and then loads the save file
 * @param theFile -> The file that will be opened
 */
function loadAsText(theFile) {
	var reader = new FileReader();

    reader.onload = function(loadedEvent) {
		fileContent = loadedEvent.target.result;
    };
	reader.readAsText(theFile);

	// Wait to load game since the file is not loaded asyncoushly
	setTimeout(function() {
		loadSavedFile();
	}, 3000);
}


/**
 * loadSavedFile(), calls the tournament load file function to set all the tournament information and update the views
 */
function loadSavedFile() {
	// Load the tournament
	tournament.loadFile(fileContent);

	// Add to the Console Log that we loaded a file
	consoleLog.initLogText("Game Loaded From Text File");

	// Update the views
	checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);

	// Change the visable page
	changePage("PageGameBoard", "PageLoadGame");
}


/**
 * saveGameToFile(), Writes the text file and download it.
 * @param fileName -> The Name to save the file as
 */
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


// This is used to store the text that is loading in from the text file
var fileContent;

// These are instances of the View Classes, used to update the UI
// Views for the GameBoard Page
var boardViews = new BoardViews();
// Views for the Console Page
var consoleViews = new ViewsConsole();
// Views for the Coin Toss Page
var coinTossViews = new ViewsCoinToss();
// Views for the End of Round Pages
var endRoundViews = new ViewsRoundEnd();
// Views for the End of Tournament Page
var endTournamentViews = new ViewsTournamentEnd();

// Classes Used For the Game
// Classes for the different aspects that make up the game
// Deck Class
var deck = new Deck();
// Human Player Class
var human = new Human();
// Computer Player Class
var computer = new Computer();
// Table Class
var table = new Table();

// ConsoleLog Class
var consoleLog = new ConsoleLog();

// Move Class That Both Player's Use To Make Moves In The Game
var move = new Move();
// Used For the findNextMove() Function To Suggest Moves To Both Players
var suggestedMove = new SuggestedMove();

// Tournament Class That Holds The Functionallity For The Tournament
var tournament = new Tournament();
// Round Class That Holds The Functionallity For The Round
var round = new Round();

// Used To Keep Track Of Which Page To Return To When You Click The Go Back Button
var lastPage = "PageGameBoard";

// Setting The Names Of Both Players
human.setPlayerName("Human");
computer.setPlayerName("Computer");

// Set The Members Of The Tournament and Round Classes
tournament.setMembers(deck, human, computer, table, move, consoleLog, 0);
round.setMembers(deck, human, computer, table, move, consoleLog);


//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE WELCOME PAGE
// Event Listener for NEW GAME button
document.getElementById("button_welcome_newGame").addEventListener('click', function() {
	changePage("PageCoinToss", "PageWelcome");
});
// Event Listener for LOAD GAME button
document.getElementById("button_welcome_loadGame").addEventListener('click', function() {
	tournament.resetTournament();
	changePage("PageLoadGame", "PageWelcome");
});
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE LOAD GAME PAGE
// Case 1 Event Listener
document.getElementById("button_load_case_1").addEventListener('click', function() {
	tournament.loadCaseFile("/assets/case1.txt");

	consoleLog.initLogText("Game Loaded From Text File");

	checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage('PageGameBoard', 'PageLoadGame');
});
// Case 2 Event Listener
document.getElementById("button_load_case_2").addEventListener('click', function() {
	tournament.loadCaseFile("/assets/case2.txt");

	consoleLog.initLogText("Game Loaded From Text File");

	checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage('PageGameBoard', 'PageLoadGame');
});
// Case 3 Event Listener
document.getElementById("button_load_case_3").addEventListener('click', function() {
	tournament.loadCaseFile("/assets/case3.txt");

	consoleLog.initLogText("Game Loaded From Text File");

	checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	changePage('PageGameBoard', 'PageLoadGame');
});
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE COIN TOSS PAGE
// Coin Heads Event Listener
document.getElementById("coin_toss_heads").addEventListener('click', function() {
	tournament.setCoinCall(0);
	tournament.runCoinToss(consoleLog);
	coinTossViews.displayWinner(tournament.getCoinCall(), tournament.getCoinResult(), tournament.getCoinTossWinner());
});
// Coin Tails Event Listener
document.getElementById("coin_toss_tails").addEventListener('click', function() {
	tournament.setCoinCall(1);
	tournament.runCoinToss(consoleLog);
	coinTossViews.displayWinner(tournament.getCoinCall(), tournament.getCoinResult(), tournament.getCoinTossWinner());
});
// Start Game Event Listener
document.getElementById("coin_toss_button_start").addEventListener('click', function() {
	tournament.initalizeScores();
	round.initalizeRound();
	tournament.incRoundNumber();
	
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog, endRoundViews);
	changePage("PageGameBoard", "PageCoinToss");
});
// Load Deck Event Listener
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
	// Check if it's the human's turn
	if (tournament.getHumanTurn()) {
		// Get the next move suggestion
		human.findNextMove(suggestedMove, table);
		// Prompt the user
		alert("HELP SUGGESTION....\n" + human.getHelp(suggestedMove));
		// Reset the suggestedMove
		suggestedMove.resetMove();
	}
});
// Event Listeners for the BUILD button
document.getElementById("button_gameBoard_build").addEventListener('click', function() {
	// Check if it's the human's turn
	if (tournament.getHumanTurn()) {
		// Get the value of the possible build
		var tempValue = move.checkPossibleBuild(human);
		// Check if a possible build
		if (tempValue != -1) {
			// Execute and record the move in the ConsoleLog
			consoleLog.addToLogText("Human Move:<br>" + human.createBuild(move, table));

			// Change the turn
			tournament.changeHumanTurn();

			// Update the view
			checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the MULTI-BUILD button
document.getElementById("button_gameBoard_multi").addEventListener('click', function() {
	// Check if it's the human's turn
	if (tournament.getHumanTurn()) {
		// Check if possible Multi-Build
		if (move.checkPossibleMultiBuild()) {
			// Execute the move and record it in the ConsoleLog
			console.log("Human Move:<br>" + human.createMultiBuild(move, table));

			// Change the Turn
			tournament.changeHumanTurn();

			// Update the View
			checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the EXTEND-BUILD button
document.getElementById("button_gameBoard_extend").addEventListener('click', function() {
	// Check if it's the human's turn
	if (tournament.getHumanTurn()) {
		// Check if the set moved is capable of extended build
		if (move.checkPossibleExtendBuild(human)) {
			// Execute the move and record the move in the ConsoleLog
			console.log("Human Move:<br>" + human.createExtendedBuild(move, table));

			// Change the turn
			tournament.changeHumanTurn();

			// Update View
			checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the CAPTURE button
document.getElementById("button_gameBoard_capture").addEventListener('click', function() {
	// Check if it's the humans turn
	if (tournament.getHumanTurn()) {
		// Check if the move set is capable of capture	
		if (move.checkPossibleCapture()) {
			// Execute the move and record it in the ConsoleLog
			consoleLog.addToLogText("Human Move:<br>" + human.captureCards(move, table));

			// Change the turn
			tournament.changeHumanTurn();

			// Set the Last Capture
			tournament.setLastCapture("Human");

			// Update View
			checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
			updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
		}
	}
});
// Event Listener for the TRAIL button
document.getElementById("button_gameBoard_trail").addEventListener('click', function() {
	// Check if it's the Human's Turn
	if (tournament.getHumanTurn()) {
		// Make sure that a card was selected
		if (move.checkCardSelected()) {
			// Check if there is not cards they could capture
			if (move.checkPossibleTrail(human, table)) {
				// Execute the Move, and Log it to the ConsoleLog
				consoleLog.addToLogText("Human Move:<br>" + human.trailCard(move, table));

				// Change the turn
				tournament.changeHumanTurn();

				// Updat the Game Board
				checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
				updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
			}
		}
	}
});
// Event Listener for the COMPUTER MOVE button
document.getElementById("button_gameBoard_computer").addEventListener('click', function() {
	// Constansts for Move Selections
	const CAPTURE = 4;

	// Check if it's Not The Human's Turn
	if (!tournament.getHumanTurn()) {
		// Have the Computer find the next move it will make
		computer.findNextMove(suggestedMove, table);

		// Execut the move and store the returned text
		var computerLogic = computer.executeMove(suggestedMove, move, table);

		// Prompt the user to what the computer has decided to do for it's move
		alert("Computer's Move Selection:\n" + computerLogic.replace(/<br\s*[\/]?>/gi, "\n"));
		// Record the move in the consoleLog for the record
		consoleLog.addToLogText("Computer Move:<br>" + computerLogic);

		// Change the turn to the Human
		tournament.changeHumanTurn();

		// If the Move Was Capturing set the last capture to the Computer
		if (suggestedMove.getSuggestion() === CAPTURE) {
			tournament.setLastCapture("Computer");
		}

		// Reset the suggestedMove Class
		suggestedMove.resetMove();

		// Update the Game Board
		checkGameStatus(tournament, round, deck, human, computer, table, consoleLog, endRoundViews, endTournamentViews);
		updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	}
});
// Event Listener for the CONSOLE button
document.getElementById("button_gameBoard_console").addEventListener('click', function() {
	// Update the ConsoleLog view
	consoleViews.setUpConsoleView(consoleLog);
	// Change the page to the ConsoleLog
	changePage('PageConsole', 'PageGameBoard');
});
// Event Listener for the SAVE button
document.getElementById("button_gameBoard_save").addEventListener('click', function() {
	// Make the form visable
	document.getElementById("myForm").style.display = "block";
});

// Save File Name Input Form Event Listeners
// Event Listener for the SUBMIT button
document.getElementById("button_gameBoard_form_submit").addEventListener('click', function() {
	// Get the inputed file name from the form
	var userInput = document.getElementById("input_gameBoard_form").value;

	// Check if the file name has ".txt" at the end, if not add it
	if (userInput.substring(userInput.length - 4) != ".txt") {
		userInput += ".txt";
	}

	// Call the save game function
	saveGameToFile(userInput);
	// Reset the tournament
	tournament.resetTournament();
	// Change the page
	changePage('PageWelcome', 'PageGameBoard');
	// Hide the save form
	document.getElementById("myForm").style.display = "none";
});
// Event Listener for the CANCLE button
document.getElementById("button_gameBoard_form_close").addEventListener('click', function() {
	// Hide the save form
	document.getElementById("myForm").style.display = "none";
});
// END GAME BOARD PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE END ROUND PAGE
// Event Listener for the CONSOLE button
document.getElementById("button_roundEnd_console").addEventListener('click', function() {
	// Set up the ConsoleLog view
	consoleViews.setUpConsoleView(consoleLog);
	// Change the page to the ConsoleLog
	changePage('PageConsole', 'PageRoundEnd');
});
// Event Listener for the NEXT ROUND button
document.getElementById("button_roundEnd_nextRound").addEventListener('click', function() {
	// Increase the round number
	tournament.incRoundNumber();
	// Init the next round
	round.initalizeNextRound();

	// Empty the players piles
	human.clearPile();
	computer.clearPile();

	// Record the new round in the ConsoleLog
	consoleLog.addToLogText("<b>NEXT ROUND STARTED</b>");

	// Update the view
	updateView(boardViews, tournament, deck, human, computer, table, move, consoleLog);
	lastPage = "PageGameBoard";
	changePage('PageGameBoard', 'PageRoundEnd');
});
// END END ROUND PAGE
//------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------
// EVENT LISTENERS FOR THE END TOURNAMENT PAGE
document.getElementById("button_tournamentEnd_console").addEventListener('click', function() {
	// Update the ConsoleLog View
	consoleViews.setUpConsoleView(consoleLog);
	changePage('PageConsole', 'PageTournamentEnd');
});
document.getElementById("button_tournamentEnd_exit").addEventListener('click', function() {
	// Reset the tournament values
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