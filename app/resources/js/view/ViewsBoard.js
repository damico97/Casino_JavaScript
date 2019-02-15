/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class BoardViews {

	/**
	 * setHeaderText(), Sets Up the Header tag for own the next player is
	 * @param tournament -> Access to the Tournament Class
	 */
	setHeaderText(tournament) {
		// If it's the human's turn, prompt them
		if (tournament.getHumanTurn()) {
			document.getElementById("GameBoardHeaderText").innerHTML = "Your Move";
		}
		// If it's the computer's turn, prompt the user
		else {
			document.getElementById("GameBoardHeaderText").innerHTML = "Computer's Move";
		}
	}


	/**
	 * showPlayerScores(), Set's up the score views for both players
	 * @param human -> Access to the Human Player
	 * @param computer -> Access to the Computer player
	 */
	showPlayerScores(human, computer) {
		// Showing the Computer's Score
		document.getElementById("computerScore").innerHTML = computer.getTournamentScore();
		// Showing the Human's Score
		document.getElementById("humanScore").innerHTML = human.getTournamentScore();
	}


	/**
	 * showComputerHand(), Shows the computers hand
	 * @param computer -> Access to the Computer Player to see what there hand is
	 */
	showComputerHand(computer) {
		// Blank Card Image
		var blankCard = "images/others/blank_card.png";

		// Set all card slots to the blank image
		document.getElementById("c_card_1").src = blankCard;
		document.getElementById("c_card_2").src = blankCard;
		document.getElementById("c_card_3").src = blankCard;
		document.getElementById("c_card_4").src = blankCard;

		// Loop through the computers hand's
		for (var i = 0; i < computer.handLength(); i++) {
			// Get the file for the coresponding card in the hand
			var card_file = "images/cards/card_";
			var card_name = computer.getHandCardAtIndex(i).getAbbv();
			card_file += card_name.toLowerCase() + ".png";

			// Set the image for the slot that matches the index of the card in the hand
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
				console.log("ERROR - [ViewsBoard] showComputerHand()");
			}
		}
	}


	/**
	 * setUpComputerPileView(), Shows the Computer's Pile
	 * @param computer -> Access to the Computer
	 */
	setUpComputerPileView(computer) {
		// Get the Computer's Pile View
		var computerPileView = document.getElementById("computerPileView");

		// Clear all the card images from the view
		while (computerPileView.hasChildNodes()) {
			computerPileView.removeChild(computerPileView.lastChild);
		}

		// Loop through the Computer's pile
		for (var i = 0; i <computer.pileLength(); i++) {
			// Get the card image file for each card
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";
			var card = computer.getPileCardAtIndex(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";

			// Set the image resource for the card
			var card_image = document.createElement("img");
			card_image.src = card_name;
			computerPileView.appendChild(card_image);
		}
	}


	/**
	 * setUpHumanPileView(), Shows the Human's Pile
	 * @param human -> Access to the Human
	 */
	setUpHumanPileView(human) {
		// Get the Human's Pile View
		var humanPileView = document.getElementById("humanPileView");

		// Clear all the images from the view
		while (humanPileView.hasChildNodes()) {
			humanPileView.removeChild(humanPileView.lastChild);
		}

		// Loop through the human's pile
		for (var i = 0; i < human.pileLength(); i++) {
			// Get the card image file for each card
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";
			var card = human.getPileCardAtIndex(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";

			// Set the image resource for the card
			var card_image = document.createElement("img");
			card_image.src = card_name;
			humanPileView.appendChild(card_image);
		}
	}


	/**
	 * setupHumanHandView(), Shows the Human's Hand and adds the event listeners for each the card
	 * @param human -> Access to the Human Player
	 * @param move -> Access to the move Class so we can add the card to the move if selected
	 * @param humanTurn -> If it's the human's turn or not to allow the clicking of the cards or not
	 */
	setupHumanHandView(human, move, humanTurn) {
		// Get the Human's hand views
		var humanHandView = document.getElementById("humanHandView");

		// Clear all the images from the view
		while (humanHandView.hasChildNodes()) {
			humanHandView.removeChild(humanHandView.lastChild);
		}

		var cardSelected = [false, false, false, false];
		var humanCardViews
		var viewCount = 0;

		// Check if the hand is empty
		if (human.handLength() != 0) {
			// Loop through the human's hand
			for (var i = 0; i < human.handLength(); i++) {
				// Get the image file for each card
				var card_path = "images/cards/";
				var card_prefix = "card_";
				var card_name = "";
				var card = human.getHandCardAtIndex(i).getAbbv();
				card_name += card_path + card_prefix;
				card_name += card.toLowerCase() + ".png";

				// Create the image of each card
				var card_image = document.createElement("img");
				card_image.src = card_name;
				// Set the id which is it's index
				card_image.setAttribute("id", i);
				viewCount++;

				// Add the image to an array
				if (undefined == humanCardViews) {
					humanCardViews = new Array();
					humanCardViews[0] = card_image;
				}
				else {
					humanCardViews.push(card_image);
				}
			}

			// variabled to store the image view
			var td;
			// Loop through the image array
			for (var i = 0; i < humanCardViews.length; i++) {
				// Add the image to the views
				td = document.getElementById("humanHandView").appendChild(humanCardViews[i]);
				// Add the event listener for the image view
				if (typeof window.addEventListener === 'function') {
					(function (_td) {
						td.addEventListener('click', function() {
							// If it's the human's turn set event listener
							if (humanTurn) {
								// Selecting the card
								if (cardSelected[_td.id] == false && !move.checkCardSelected()) {
									_td.style.backgroundColor = "rgb(0, 161, 75)";
									cardSelected[_td.id] = true;
									move.setHandCard(human.getHandCardAtIndex(_td.id));
								}
								// Deselecting the card
								else if (cardSelected[_td.id] == true) {
									_td.style.backgroundColor = "rgb(0, 80, 109)";
									cardSelected[_td.id] = false;
									move.resetHandCard();
								}
								// Error
								else {
									// Do Nothing
								}
							}
						});
					})(td);
				}
			}
		}
	}


	/**
	 * setUpTableBuildViews(), Shows the builds that are on the table
	 * @param table -> Access to the table
	 * @param move -> Access to the move class to add it to the move if selected
	 * @param humanTurn -> If it's the human's turn or not so activate the event listeners
	 */
	setUpTableBuildView(table, move, humanTurn) {
		// Get the Table Build View
		var tableBuildView = document.getElementById("tableBuildView");

		// Clear all the images from the view
		while (tableBuildView.hasChildNodes()) {
			tableBuildView.removeChild(tableBuildView.lastChild);
		}

		var buildSelected;
		var tableBuildViews;

		// Loop through the builds on the table
		for (var i = 0; i < table.tableBuildLength(); i++) {
			// Create a New Build Icon View
			var nView = document.createElement('x-build-icon');
			nView.setValue(table.getTableBuildAtIndex(i).getBuildValue());
			nView.setString(table.getTableBuildAtIndex(i).buildToString());
			nView.setOwner(table.getTableBuildAtIndex(i).getBuildOwner());
			nView.setMulti(table.getTableBuildAtIndex(i).checkMulti());

			// Set the id which is it's index
			nView.setAttribute("id", i);

			// Add the view to an array
			if (undefined == tableBuildViews) {
				tableBuildViews = new Array();
				tableBuildViews[0] = nView; 
			}
			else {
				tableBuildViews.push(nView);
			}

			// Add to the selected array
			if (undefined == buildSelected) {
				buildSelected = new Array();
				buildSelected[0] = false;
			}
			else {
				buildSelected.push(false);
			}
		}

		// Make sure their are builds to display
		if (undefined != tableBuildViews) {
			// variabled to store the image view
			var td;
			// Loop through the builds
			for (var j = 0; j < tableBuildViews.length; j++) {
				// Add the image to the views
				td = document.getElementById("tableBuildView").appendChild(tableBuildViews[j]);
				// Add the event listener for the image view
				if (typeof window.addEventListener === 'function') {
					(function (_td) {
						td.addEventListener('click', function() {
							// If it's the human's turn set event listener
							if (humanTurn) {
								// Selecting the Build
								if (buildSelected[_td.id] == false) {
									buildSelected[_td.id] = true;
									move.moveAddTableBuild(table.getTableBuildAtIndex(_td.id));
									_td.changeBackground(1);
								}
								// Deselecting the Build
								else if (buildSelected[_td.id] == true) {
									buildSelected[_td.id] = false;
									_td.changeBackground(0);
									move.moveRemoveTableBuild(table.getTableBuildAtIndex(_td.id));
								}
								// Error
								else {
									// Do Nothing
								}
							}
						});
					})(td);
				}
			}
		}
	}


	/**
	 * setUpTableCardView(), Shows the Loose cards on the table
	 * @param table -> Access to the table
	 * @param move -> Access to the move Class so we can add the card to the move if selected
	 * @param humanTurn -> If it's the human's turn or not to allow the clicking of the card or not
	 */
	setupTableCardView(table, move, humanTurn) {
		// Get the Table Card View
		var tableCardView = document.getElementById("tableView");

		// Clear all the images from the view
		while (tableCardView.hasChildNodes()) {
			tableCardView.removeChild(tableCardView.lastChild);
		}

		var cardSelected;
		var tableCardViews;
		var viewcount = 0;

		// Loop through the cards on the table
		for (var i = 0; i < table.tableCardLength(); i++) {
			// Get the image file for each card
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";
			var card = table.getTableCardAtIndex(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";

			// Create the image of each card
			var card_image = document.createElement("img");
			card_image.src = card_name;
			// Set the id which is it's index
			card_image.setAttribute("id", i);
			viewcount++;

			// Add the image to an array
			if (undefined == tableCardViews) {
				tableCardViews = new Array();
				tableCardViews[0] = card_image;
			}
			else {
				tableCardViews.push(card_image);
			}

			// Add to the selected array
			if (undefined == cardSelected) {
				cardSelected = new Array();
				cardSelected[0] = false;
			}
			else {
				cardSelected.push(false);
			}
		}

		// Check if the card contains some loose cards
		if (undefined != tableCardViews) {
			// variabled to store the image view
			var td;
			// Loop thorugh the cards on the table
			for (var i = 0; i < tableCardViews.length; i++) {
				// Add the image to the views
				td = document.getElementById("tableView").appendChild(tableCardViews[i]);
				// Add the event listener for the image view
				if (typeof window.addEventListener === 'function'){
					(function (_td) {
						td.addEventListener('click', function(){
							// If it's the human's turn set event listener
							if (humanTurn) {
								// Selecting the card
								if (cardSelected[_td.id] == false) {
									_td.style.backgroundColor = "rgb(0, 161, 75)";
									cardSelected[_td.id] = true;
									move.moveAddTableCard(table.getTableCardAtIndex(_td.id));
								}
								// Deselecting the card
								else {
									_td.style.backgroundColor = "rgb(0, 80, 109)";
									cardSelected[_td.id] = false;
									move.moveRemoveTableCard(table.getTableCardAtIndex(_td.id));
								}
							}
						});
					})(td);
				}
			}
		}
	}


	/**
	 * setUpDeckView(), Shows the deck cards
	 * @param deck -> Access to the deck
	 */
	setUpDeckView(deck) {
		// Get the deck view icon
		var deckView = document.getElementById("deckView");

		// Clear all images from the view
		while (deckView.hasChildNodes()) {
			deckView.removeChild(deckView.lastChild);
		}

		// Loop through the cards in the deck
		for (var i = 0; i < deck.deckSize(); i++) {
			// Get the image path for each card
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";
			var card = deck.get(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";

			// Add the image to the view
			var card_image = document.createElement("img");
			card_image.src = card_name;
			deckView.appendChild(card_image);
		}
	}
}