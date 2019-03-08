/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class Player {

	/**
	 * Player(), the Constructor for the Player Class
	 * @param None
	 * @return Creates a new instance of the Player Class
	 */
 	Player() {
		// Set the Member Variables
 		this.mPlayerHand = new Array();
 		this.mPlayerPile = new Array();
 		this.mScore = 0;
 		this.mRoundScore = 0;
		this.mNumSpades = 0;
		this.mName = "";
	}


	/**
	 * resetPlayer(), All it does is clear out all the member variables, so we do not have any thing sticking around that we don't want to
	 * @param None
	 */
	resetPlayer() {
		this.mPlayerHand = [];
		this.mPlayerPile = [];
		this.mScore = 0;
		this.mRoundScore = 0;
		this.mNumSpades = 0;
	}


	/**
	 * getPlayerName(), Returns the Name of the Player, either Human or Computer
	 * @param None
	 * @return The Name of the Player
	 */
	getPlayerName() {
		return this.mName;
	}


	/**
	 * setPlayerName(), Sets the name of the player
	 * @param nName, the New Name for the Player
	 */
	setPlayerName(nName) {
		this.mName = nName;
	} 
	

	/**
	 * getTournamentScore(), Returns the value of the Player's Overall score from the game
	 * @param None
	 * @return The Tournament score for the player
	 */
	getTournamentScore() {
		return this.mScore;
	}


	/**
	 * addToTournamentScore(), Takes in the value which is the round score for at the end of the round, and adds it to the tournament score
	 * @param value -> The score to be added to the overall tournament score
	 */
	addToTournamentScore(value) {
		this.mScore += value;
	}


	/** 
	 * setScore(), Allows to set the score to specific number, used to initialize the score to 0 at the beigging of the game
	 * @param num -> The Value to intialize the score to
	 */
	setScore(num) {
		this.mScore = num;
	}


	/** 
	 * setRoundScore(), Takes in a value to set as the round score for the player at the end of a round
	 * @param value -> The value to set the round score too
	 */
	setRoundScore(value) {
		this.mRoundScore = value;
	}


	/**
	 * getRoundScore(), Returns the value of the player's Round Score
	 * @param None
	 * @return The value of the players Round Score
	 */
	getRoundScore() {
		return this.mRoundScore;
	}


	/**
	 * setNumSpades(), Takes in a value to set as the number of spades the player collected in the round
	 * @param value -> The number of spades int he player's pile
	 */
	setNumSpades(value) {
		this.mNumSpades = value;
	}


	/**
	 * getNumSpades(), Returns the number of spades that was in the player's pile at the end of the round
	 * @param None
	 * @return The number of spades in the player's pile
	 */
	getNumSpades() {
		return this.mNumSpades;
	}


	/**
	 * addCardToHand(), Takes in a new Card and adds it to the player's hand
	 * @param nCard -> The new card to be added to the player's hand
	 */
 	addCardToHand(nCard) {
		// Check if the Player's hand is empty
 		if (undefined == this.mPlayerHand) {
			// Add the New Card
 			this.mPlayerHand = new Array();
 			this.mPlayerHand[0] = nCard;
 		}
 		else {
			// Add the new Card
 			this.mPlayerHand.push(nCard);
 		}
	}
	 

	/**
	 * getHandCards(), returns the Array of cards in the Player's Hand
	 * @param None
	 * @return The Array of cards in the player's hand
	 */
	getHandCards() {
		return this.mPlayerHand;
	}


	/**
	 * getPileards(), returns the Array of cards in the Player's Pile
	 * @param None
	 * @return The Array of cards in the player's Pile
	 */
	getPileCards() {
		return this.mPlayerPile;
	}


	/**
	 * addCardToPile(), Takes in a new Card and adds it to the player's pile
	 * @param nCard -> The new card to be added to the player's hand
	 */
 	addCardToPile(nCard) {
		// Check if the Array is undefined
 		if (undefined == this.mPlayerPile) {
			// Add the Card
 			this.mPlayerPile = new Array();
 			this.mPlayerPile[0] = nCard;
 		}
 		else {
			// Add the Card
 			this.mPlayerPile.push(nCard);
 		}
	}
	 

	/**
	 * addCardArrayToPile(), Takes in a new Array of Cards and adds all of them to the Player's Pile
	 * @param nCards -> The Array of cards to be added to the Player's pile
	 */
	addCardArrayToPile(nCards) {
		this.mPlayerPile = this.mPlayerPile.concat(nCards);
	}


	/**
	 * clearPile(), Empties the Player's pile Array
	 * @param None
	 */
	clearPile() {
		this.mPlayerPile = [];
	}


	/**
	 * handLength(), returns the length of the player's hand array
	 * @param None
	 * @return The length of the player's hand array
	 */
 	handLength() {
		// Check if the Hand Array is undefined
 		if (undefined == this.mPlayerHand) {
			// If So Return size of 0
 			return 0;
 		}
 		else {
			// Return the length of the Hand Array
 			return this.mPlayerHand.length;
 		}
 	}


	/**
	 * pileLength(), returns the length of the player's pile array
	 * @param None
	 * @return The length of the player's pile array
	 */
 	pileLength() {
		// Check if the Pile Array is undefined
 		if (undefined ==  this.mPlayerPile) {
			// If so return the length of 0
 			return 0;
 		}
 		else {
			// Return the length of the Pile Array
 			return this.mPlayerPile.length;
 		}
 	}


	/**
	 * getHandCardAtIndex(), Returns the card from the player's hand at the given index
	 * @param index -> The index of the card you want
	 * @return The card at the giving index
	 */
 	getHandCardAtIndex(index) {
		// Check if the index is correct
 		if (index >= 0) {
			// Return the card
 			return this.mPlayerHand[index];
 		}
 		else {
			// Record the Error in the Console
 			console.log("ERROR!! - {Player} getHandCardAtIndex()");
 		}
 	}


	/**
	 * getPileCardAtIndex(), Returns the card from the player's pile at the given index
	 * @param index -> The index of the card you want
	 * @return The card at the given index
	 */
 	getPileCardAtIndex(index) {
		// Check if the index is valid
 		if (index >= 0) {
			// Return the card
 			return this.mPlayerPile[index];
 		}
 		else {
			// Record the Error in the Console
 			console.log("ERROR!! - {Player} getPileCardAtIndex()");
 		}
 	}


	/**
	 * removeHandCard(), Removes a card from the player's hand based of the abbrevation passed in 
	 * @param abbv -> The Abbrevation of the card to remove
	 */
 	removeHandCard(abbv) {
		// Loop through the players hand
 		for (var i = 0; i < this.mPlayerHand.length - 1; i++) { 
			// Check if the card matches the abbv
		    if (this.mPlayerHand[i].getAbbv() === abbv) {
				// Remove the card
				arr.splice(i, 1); 
				return;
		    }
		}
 	}

	
	/**
	 * handToString(), coverts the player's hand to a string to be displayed in the ConosleLog or Serialization
	 * @param None
	 * @return The player's hand in text form
	 */
	handToString() {
		var temp = "";

		// Loop through the player's hand
		for (var i = 0; i < this.handLength(); i++) {
			// Add the abbv of each card to the temp string
			temp += this.mPlayerHand[i].getAbbv() + " ";
		}

		return temp;
	}


	/**
	 * pileToString(), converts the player's pile to a string to be displayed in the ConsoleLog or Serialization
	 * @param None
	 * @return The player's pile in text form
	 */
	pileToString() {
		var temp = "";

		// Loop through the player's pile
		for (var i = 0; i < this.pileLength(); i++) {
			// Add the abbv of each card to the temp string
			temp += this.mPlayerPile[i].getAbbv() + " ";
		}

		return temp;
	}


	/**
	 * createBuild(), Uses the move class that has been set either by the Human or the Computer AI and creates the Build
	 * @param move -> The Instance of the Move Class that has been set 
	 * @param table -> The Table Class so we Can modify the table with our move
	 * @return A String that will the move explained in text form
	 */
	createBuild(move, table) {
		var temp = "";

		// Get the hand card being played from the move class
		var handCard = move.getHandCard();
		// Get the index of the hand card in the Player's hand
		var handIndex = this.mPlayerHand.indexOf(handCard);

		// Remove the card from the player's hand
		this.mPlayerHand.splice(handIndex, 1);

		var value = 0;

		var nBuild = new Build();
		var nCards = new Array();

		// Add all the cards from the move class
		nCards = nCards.concat(move.moveGetAllTableCards());

		temp = "Played the " + handCard.getName() + " to create a build with...<br>";

		// Loop through the table cards and remove each one from the table
		for (var i = move.moveTableCardLength() - 1; i >= 0; i--) {
			var tableCard = move.moveGetTableCard(i);
			var tableIndex = table.findTableCardIndex(tableCard);
			table.deleteTableCardAtIndex(tableIndex);

			temp += "the " + tableCard.getName() + "<br>";

			// Add the value of each card
			value += tableCard.getValue();
		}
		temp += "from the table";

		// Add the value of the hand card
		value += handCard.getValue();
		// Add the hand card to the build
		nCards.push(handCard);

		// Set the build
		nBuild.setBuildValue(value);
		nBuild.addToBuildCards(nCards);
		nBuild.setBuildOwner(this.getPlayerName());

		// Add the new build to the table
		table.addBuildToTable(nBuild);

		// Reset the move class
		move.resetMove();
		return temp;
	}


	/**
	 * createMultiBuild(), Uses the move class that has been set by the Human or the AI and creates a Multi-Build
	 * @param move -> The Instance of the Move Class that has been set 
	 * @param table -> The Table Class so we Can modify the table with our move
	 * @return A String that will the move explained in text form
	 */
	createMultiBuild(move, table) {
		var temp = "";

		// Array to store the new cards that are going to be added as the next set in the build
		var newBuildInput = new Array();

		// Get the hand card from the move class
		var card = move.getHandCard();
		// Find it's index in the player's array
		var index = this.mPlayerHand.indexOf(card);
		
		// Get the build from the move class
		var build = move.moveGetTableBuild(0);
		// Get the builds index from the table array
		var buildIndex = table.findTableBuildIndex(build);

		// Remove the handcard from the player's hand
		this.mPlayerHand.splice(index, 1);

		temp = "Played the " + card.getName() + " to create a multi-build with...<br>";

		// Add the hand card to the array of card to be added to the build
		newBuildInput[0] = card;

		// Loop through the table cards from the move class and add them to the new build cards and remove them from the table
		for (var i = move.moveTableCardLength() - 1; i >= 0; i--) {
			// Get the table card from the move class
			var tableCard = move.moveGetTableCard(i);
			// Get the cards index
			var tableIndex = table.findTableCardIndex(tableCard);

			// Delete the card from the table
			table.deleteTableCardAtIndex(tableIndex);

			temp += "the " + tableCard.getName() + "<br>";

			// Add the card to the new build cards array
			if (undefined === newBuildInput) {
				newBuildInput = new Array();
				newBuildInput[0] = tableCard;
			}
			else {
				newBuildInput.push(tableCard);
			}
		}

		temp += "Using the build of " + build.getBuildValue() + " that is on the table<br>";

		// Add the new build cards array to the build
		table.getTableBuildAtIndex(buildIndex).addToBuildCards(newBuildInput);

		// Reset the move class
		move.resetMove();
		return temp;
	}


	/**
	 * createExtendedBuild(), Allows the player to create an extended build using on of the opponets builds
	 * @param move -> The Instance of the Move Class that has been set 
	 * @param table -> The Table Class so we Can modify the table with our move
	 * @return A String that will the move explained in text form
	 */
	createExtendedBuild(move, table) {
		var temp = "";

		// Array to store the new cards that are going to be added as the next set in the build
		var newBuildInput = new Array();

		// Get the hand card from the move class
		var card = move.getHandCard();
		// Find it's index in the player's array
		var index = this.mPlayerHand.indexOf(card);
		
		// Get the build from the move class
		var build = move.moveGetTableBuild(0);
		// Get the builds index from the table array
		var buildIndex = table.findTableBuildIndex(build);

		// Remove the handcard from the player's hand
		this.mPlayerHand.splice(index, 1);

		temp = "Played the " + card.getName() + " to extend it's opponet's build of " + build.getBuildValue() + " with...<br>";
		temp += "the " + card.getName() + "<br>";

		// Add the hand card to the array of card to be added to the build
		newBuildInput[0] = card;

		// Calculate the new Value of the Build
		var newValue = card.getValue();

		for (var i = move.moveTableCardLength() - 1; i >= 0; i--) {
			// Get the table card from the move class
			var tableCard = move.moveGetTableCard(i);
			// Get the cards index
			var tableIndex = table.findTableCardIndex(tableCard);

			// Delete the card from the table
			table.deleteTableCardAtIndex(tableIndex);

			temp += "the " + tableCard.getName() + "<br>";

			// Add the value of the card
			newValue += tableCard.getValue();

			// Add the card to the new build cards array
			if (undefined === newBuildInput) {
				newBuildInput = new Array();
				newBuildInput[0] = tableCard;
			}
			else {
				newBuildInput.push(tableCard);
			}
		}

		// Add the value of the build to the new value
		newValue += table.getTableBuildAtIndex(buildIndex).getBuildValue();

		// Add the new build cards array to the build
		table.getTableBuildAtIndex(buildIndex).extendBuild(newBuildInput);
		table.getTableBuildAtIndex(buildIndex).setBuildOwner(this.mName);
		table.getTableBuildAtIndex(buildIndex).setBuildValue(newValue);

		// Reset the move class
		move.resetMove();
		return temp;
	}


	/**
	 * captureCards(), Takes the move class that has already been set by the Human or AI and executes captureing cards
	 * @param move -> The Instance of the Move Class that has been set 
	 * @param table -> The Table Class so we Can modify the table with our move
	 * @return A String that will the move explained in text form
	 */
 	captureCards(move, table) {
		var temp = "";

		// Get the hand card from the move class
		var card = move.getHandCard();
		// Get the hand card index in the human's hand
 		var index = this.mPlayerHand.indexOf(card);

		// Remove the card from the player's hand
 		this.mPlayerHand.splice(index, 1);

		temp = "Played the " + card.getName() + " to capture...<br>";

		// Add the card to the player's pile
		this.addCardToPile(move.getHandCard());
		
		// Loop through the builds that have been selected
		for (var j = move.moveTableBuildLength() - 1; j >= 0; j--) {
			// Get the build for the move class
			var tableBuild = move.moveGetTableBuild(j);
			// Find the index of the build in the table
			var buildIndex = table.findTableBuildIndex(tableBuild);

			// Remove the build from the table
			table.deleteTableBuildAtIndex(buildIndex);

			temp += "the build of " + tableBuild.getBuildValue() + "<br>";

			// Add the cards to the player's pile
			this.addCardArrayToPile(tableBuild.getBuildCards());
		}

		// Loop through the cards that have been selected
 		for (var i = move.moveTableCardLength() - 1; i >= 0; i--) {
			// Get the card from the move class
			var tableCard = move.moveGetTableCard(i);
			// Find the index of the card in the table
			var tableIndex = table.findTableCardIndex(tableCard);

			// Remove the card from the table
			table.deleteTableCardAtIndex(tableIndex);

			temp += "the " + tableCard.getName() + "<br>";

			// Add the card to the player's pile
			this.addCardToPile(tableCard);
		}
		temp += "from the table";

		// Reset the Move Class
		move.resetMove();
		return temp;
 	}


	/**
	 * trailCard(), Takes the move class that has been set and trails the card
	 * @param move -> The Instance of the Move Class that has been set 
	 * @param table -> The Table Class so we Can modify the table with our move
	 * @return A String that will the move explained in text form
	 */
 	trailCard(move, table) {
		var temp = "";
		
		// Get teh handCard from the move class
		var card = move.getHandCard();
		// Find the index of the card in the player's hand 
 		var index = this.mPlayerHand.indexOf(move.getHandCard());

		temp = "Trailed the " + card.getName() + " from it's hand";

		// Add the card to the table
		table.addCardToTable(card);
		// Remoe the card from the player's hand
		this.mPlayerHand.splice(index, 1);
		 
		// Reset the move class
		move.resetMove();
		return temp;
	}


	/**
	 * checkIfBuildCard(), Check if a card from the player's hand is being used as a capture card for a build of theirs on the table
	 * @param cardValue -> The value of the card being tested
	 * @param table -> Access to the table class to see whats on the table
	 * @return Boolean -> True if the card is a capture card and False if not
	 */
	checkIfBuildCard(cardValue, table) {
		// If the card is an Ace treat it as 14
		if (cardValue === 1) {
			cardValue += 13;
		}

		// Loop through the builds on the table
		for (var i = 0; i < table.tableBuildLength(); i++) {
			// Check if the owner of the build is the player
			if (table.getTableBuildAtIndex(i).getBuildOwner() === this.mName) {
				// Check if the value of the build matches the value of the card
				if (table.getTableBuildAtIndex(i).getBuildValue() === cardValue) {
					// The card is a capture card for a build
					return true;
				}
			}
		}

		// The card is not a capture card for a build
		return false;
	}


	/**
	 * checkForPossibleMultiBuild(), Finds if there is already a build the player owns that matches the value of the new build
	 * @param cardValue -> The Value of the new build about to be created
	 * @param table -> Access to the table to see what is on it
	 */
	checkForPossibleMultiBuild(cardValue, table) {
		// If the Card is an Ace treat it as 14
		if (cardValue === 1) {
			cardValue += 13;
		}

		// Loop through the builds on the table
		for (var i = 0; i < table.tableBuildLength(); i++) {
			// Check if the owner of the build is the player
			if (table.getTableBuildAtIndex(i).getBuildOwner() === this.mName) {
				// Check if the value of the build matches the value of the card
				if (table.getTableBuildAtIndex(i).getBuildValue() === cardValue) {
					// Can be a mutli-build, return the index of the build
					return i;
				}
			}
		}

		// No possibe multi-build
		return -1;
	}


	/**
	 * getOpponentsBuilds(), Returns an Array with all the builds that could be used to extend
	 * @param table -> Access to the table to see what is on it 
	 * @return An array with all the buidls that could be used to extend
	 */
	getOpponentsBuilds(table) {
		// Array to store the builds that could be used
		var builds = new Array();

		// Loop through the builds on the table
		for (var i = 0; i < table.tableBuildLength(); i++) {
			// Check if the build is not owned by the current user
			if (table.getTableBuildAtIndex(i).getBuildOwner() != this.mName) {
				// Check if the build is a multi-build
				if (!table.getTableBuildAtIndex(i).checkMulti()) {
					// Add the build to the possible build array
					if (undefined == builds) {
						builds = new Array();
						builds[0] = table.getTableBuildAtIndex(i);
					}
					else {
						builds.push(table.getTableBuildAtIndex(i));
					}
				}
			}
		}

		// Return the possible builds array
		return builds;
	}
	 

	/**
	 * findNextMove(), Finds which would be the best move to be made for the player
	 * @param suggestedMove -> The class to store all move that is being suggested
	 * @param table -> Access to the table to see what is on the table
	 */
	findNextMove(suggestedMove, table) {
		// Constansts for Move Selections
		const BUILD = 1;
		const MULTIBUILD = 2;
		const EXTENDBUILD = 3;
		const CAPTURE = 4;
		const TRAIL = 5;

		suggestedMove.resetMove();

		var handCardValue = -1;
		var captureSetIndex = -1;
		var multiBuildIndex = 0;

		var smallHand = new Array();

		var tableCards = new Array();
		var smallTableCards = new Array();
		var smallSmallTableCards = new Array();
		var smallSmallSmallTableCards = new Array();

		// Check For Possible Builds To Extend
		var possibleBuilds = this.getOpponentsBuilds(table);
		// Loop through the players hand
		for (var i = 0; i < this.handLength(); i++) {
			// Get the value of the capture card
			handCardValue = this.mPlayerHand[i].getValue();

			// If the card is an Ace treat it as 14
			if (handCardValue === 1) {
				handCardValue += 13;
			}

			// Create a shortened version of the player's hand removing the capture card
			smallHand = smallHand.concat(this.mPlayerHand);
			smallHand.splice(i, 1);

			// Loop through the shortened hand
			for (var j = 0; j < smallHand.length; j++) {
				// Loop through the possible builds to extend
				for (var k = 0; k < possibleBuilds.length; k++) {
					// Check if the hand card is a capture card for another build
					if (!this.checkIfBuildCard(smallHand[j].getValue(), table)) {
						// Check if the values add up
						if (possibleBuilds[k].getBuildValue() + smallHand[j].getValue() === handCardValue) {
							// Set the Move
							suggestedMove.setHandCard(smallHand[j].getAbbv());
							suggestedMove.suggestedMoveAddTableBuild(possibleBuilds[k].getAbbv());
							suggestedMove.setSuggestion(EXTENDBUILD);
							return;
						}
						else {
							
						}
					}
				}	
			}

			// Clear the small hand set
			smallHand = [];
		}

		// Check For Builds and Multi-Build to Create
		for (var i = 0; i < this.handLength(); i++) {
			// Remove one card from the small hand
			smallHand = smallHand.concat(this.mPlayerHand);
			smallHand.splice(i, 1);

			// Loop through the shortened version of the hand
			for (var j = 0; j < smallHand.length; j++) {
				handCardValue = smallHand[j].getValue();

				// If the card is an Ace treate it as 14
				if (handCardValue === 1) {
					handCardValue += 13;
				}

				// Get the Table Cards
				tableCards = table.getTableCards();

				// Loop through the cards on the cards that are on the table
				for (var k = 0; k < table.tableCardLength(); k++) {
					// Check if the value of the card from the hand and the card from the table match the handCardValue
					if (handCardValue === this.mPlayerHand[i].getValue() + tableCards[k].getValue()) {
						// Check if the handCard is not being used as a capture card for another build
						if (!this.checkIfBuildCard(this.mPlayerHand[i].getValue(), table)) {
							// Look for possible multi-builds
							multiBuildIndex = this.checkForPossibleMultiBuild(handCardValue, table);
							// No possible multi-build
							if (multiBuildIndex == -1) {
								// Set the move
								suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
								suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
								suggestedMove.setSuggestion(BUILD);
								return;
							}
							// Possible Multi-Build
							else {
								// Set the move
								suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
								suggestedMove.suggestedMoveAddTableBuild(table.getTableBuildAtIndex(multiBuildIndex).getAbbv());
								suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
								suggestedMove.setSuggestion(MULTIBUILD);
								return;
							}
						}
					}
					// Check for making another build using 2 cards from the table
					else {
						// Create a shortend set of cards from the table
						smallTableCards = smallTableCards.concat(tableCards);
						smallTableCards.splice(k, 1);

						// Loop through the shortened version of the table cards
						for (var l = 0; l < smallTableCards.length; l++) {
							// Check if the values add up to the handCardValue
							if (handCardValue === this.mPlayerHand[i].getValue() + tableCards[k].getValue() + smallTableCards[l].getValue()) {
								// Check if the handCard is not being used as a capture card for another build
								if (!this.checkIfBuildCard(this.mPlayerHand[i].getValue(), table)) {
									// Look for possible multi-builds
									multiBuildIndex = this.checkForPossibleMultiBuild(handCardValue, table);
									// No possible multi-build
									if (multiBuildIndex == -1) {
										// Set the move
										suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
										suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
										suggestedMove.suggestedMoveAddTableCard(smallTableCards[l].getAbbv());
										suggestedMove.setSuggestion(BUILD);
										return;
									}
									// Possible Mulit-Build
									else {
										// Set the move
										suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
										suggestedMove.suggestedMoveAddTableBuild(table.getTableBuildAtIndex(multiBuildIndex).getAbbv());
										suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
										suggestedMove.suggestedMoveAddTableCard(smallTableCards[l].getAbbv());
										suggestedMove.setSuggestion(MULTIBUILD);
										return;
									}
								}
							}
							// Check for making another build using 3 cards from the table
							else {
								// Create another shortened version of the shortened cards from table
								smallSmallTableCards = smallSmallTableCards.concat(smallTableCards);
								smallSmallTableCards.splice(l, 1);

								// Loop through the shortened shortened set of table cards
								for (var m = 0; m < smallSmallTableCards.length; m++) {
									// Check if all the values add up to the handCardValue
									if (handCardValue === this.mPlayerHand[i].getValue() + tableCards[k].getValue() + smallTableCards[l].getValue() + smallSmallTableCards[m].getValue()) {
										// Check if the HandCard is not being used as a capture card for another build
										if (!this.checkIfBuildCard(this.mPlayerHand[i].getValue(), table)) {
											// Look for possible multi-build
											multiBuildIndex = this.checkForPossibleMultiBuild(handCardValue, table);
											// No possible multi-build
											if (multiBuildIndex == -1) {
												// Set the move
												suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
												suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
												suggestedMove.suggestedMoveAddTableCard(smallTableCards[l].getAbbv());
												suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[m].getAbbv());
												suggestedMove.setSuggestion(BUILD);
												return;
											}
											// Possible multi-build
											else {
												// Set the build
												suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
												suggestedMove.suggestedMoveAddTableBuild(table.getTableBuildAtIndex(multiBuildIndex).getAbbv());
												suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
												suggestedMove.suggestedMoveAddTableCard(smallTableCards[l].getAbbv());
												suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[m].getAbbv());
												suggestedMove.setSuggestion(MULTIBUILD);
												return;
											}
										}
									}
									// Check for making another build using 4 cards from the table
									else {
										// Create another shortned shortned shortened version of the shortend cards from the table
										smallSmallSmallTableCards = smallSmallSmallTableCards.concat(smallSmallTableCards);
										smallSmallSmallTableCards.splice(m, 1);

										// Loop through the shortened shortened shortened version of the cards from the table
										for (var n = 0; n < smallSmallSmallTableCards.length; n++) {
											// Check if all the values add up to the handCardValue 
											if (handCardValue === this.mPlayerHand[i].getValue() + tableCards[k].getValue() + smallTableCards[l].getValue() + smallSmallTableCards[m].getValue() + smallSmallSmallTableCards[n].getValue()) {
												// Check for possible multi-build
												multiBuildIndex = this.checkForPossibleMultiBuild(handCardValue, table);
												// No possible multi-build
												if (multiBuildIndex == -1) {
													// Set the build
													suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(tableCards[k].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(smallTableCards[l].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[m].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(smallSmallSmallTableCards[n].getAbbv());
													suggestedMove.setSuggestion(BUILD);
													return;
												}
												// Possible multi-build
												else {
													// Set the build
													suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
													suggestedMove.suggestedMoveAddTableBuild(table.getTableBuildAtIndex(multiBuildIndex).getAbbv());
													suggestedMove.suggestedMoveAddTableCard(tableCards[k].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(smallTableCards[l].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[m].getAbbv());
													suggestedMove.suggestedMoveAddTableCard(smallSmallSmallTableCards[n].getAbbv());
													suggestedMove.setSuggestion(BUILD);
													return;
												}
											}
										}
										// Clear the Array
										smallSmallSmallTableCards = [];
									}
								}
								// Clear the Array
								smallSmallTableCards = [];
							}
						}
						// Clear the Array
						smallTableCards = [];
					}
				}
			}
			smallHand = [];
		}

		// Look For Cards to Capture
		for (var i = 0; i < this.handLength(); i++) {
			handCardValue = this.mPlayerHand[i].getValue();

			// If the handCard is an Ace, treat it as 14
			if (handCardValue == 1) {
				handCardValue += 13;
			}

			// Get the table cards
			tableCards = table.getTableCards();
			// Boolean used to keep track if the a set has been found
			var setFound = false;

			// Check if the handCard is not being used as the capture card of the build that is on the table
			if (!this.checkIfBuildCard(handCardValue, table)) {
				// Loop through the cards on the table
				for (var j = 0; j < table.tableCardLength(); j++) {
					// Create a shortened version of the set of cards on the table
					smallTableCards = smallTableCards.concat(tableCards);
					smallTableCards.splice(j, 1);

					// Loop through the shortened set of cards that are on the table
					for (var k = 0; k < smallTableCards.length; k++) {
						// Check if the card values add up the hand card value
						if (handCardValue == tableCards[j].getValue() + smallTableCards[k].getValue()) {
							// Set the move
							suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
							suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
							suggestedMove.suggestedMoveAddTableCard(smallTableCards[k].getAbbv());
							suggestedMove.setSuggestion(CAPTURE);
							
							// Set the capture flag to break out
							setFound = true;
							break;
						}
						// Check for possible sets using 3 cards from the table
						else {
							// Create a shortened set of the shortened set of cards on the tbale
							smallSmallTableCards = smallSmallTableCards.concat(smallTableCards);
							smallSmallTableCards.splice(k, 1);

							// Loop through the shortened shortened set of table cards
							for (var l = 0; l < smallSmallTableCards.length; l++) {
								// Check if all the values add up the handCardValue 
								if (handCardValue == tableCards[j].getValue() + smallTableCards[k].getValue() + smallSmallTableCards[l].getValue()) {
									// Se the move
									suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
									suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
									suggestedMove.suggestedMoveAddTableCard(smallTableCards[k].getAbbv());
									suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[l].getAbbv());
									suggestedMove.setSuggestion(CAPTURE);
									
									// Set the capture flag to break out
									setFound = true;
									break;
								}
								// Check for possible sets using 4 cards from the table
								else {
									// Create a shortened set of the shortened shortened sets of cards on the table
									smallSmallSmallTableCards = smallSmallSmallTableCards.concat(smallSmallTableCards);
									smallSmallSmallTableCards.splice(l, 1);

									// Loop through the shortened shortened shortened set of table cards
									for (var m = 0; m < smallSmallSmallTableCards.length; m++) {
										// Check if all the values add up to the handCardValue
										if (handCardValue == tableCards[j].getValue() + smallTableCards[k].getValue() + smallSmallTableCards[l].getValue() + smallSmallSmallTableCards[m].getValue()) {
											// Set the move
											suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
											suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
											suggestedMove.suggestedMoveAddTableCard(smallTableCards[k].getAbbv());
											suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[l].getAbbv());
											suggestedMove.suggestedMoveAddTableCard(smallSmallSmallTableCards[m].getAbbv());
											suggestedMove.setSuggestion(CAPTURE);
											
											// Set the capture flag to break out
											setFound = true;
											break;
										}
									}

									// Check if the capture flag is set and break out
									if (setFound) {
										break;
									}
									// Reset the Array
									smallSmallSmallTableCards = [];
								}
							}

							// Check if the capture flag is set and break out
							if (setFound) {
								break;
							}
							// Reset the Array
							smallSmallTableCards = [];
						}
					}

					// Check if the capture flag is set and break out
					if (setFound) {
						break;
					}
					// Reset the Array
					smallTableCards = [];
				}

				// Check if the capture flag is set and break out
				if (setFound) {
					break;
				}
			}
		}
		// Check if a set was found, if so, try and find a build or loose card that has the same value
		if (setFound) {
			// loop through the loose cards that are on the table
			for (var i = 0; i < table.tableCardLength(); i++) {
				// Check if the value of the card matches the value of the hand card being playes
				if (suggestedMove.getHandCard()[1] != "A" && suggestedMove.getHandCard()[1] == table.getTableCardAtIndex(i).getAbbv()[1]) {
					// Add the card to the suggested move
					suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(i).getAbbv());
				}
			}
			// Loop through the builds on the table
			for (var j = 0; j < table.tableBuildLength(); j++) {
				// Check if the value of the build matches the value of the hand card being playes
				if (suggestedMove.getHandCard()[1] != "A" && suggestedMove.getHandCard()[1] === table.getTableBuildAtIndex(j).getAbbv()[1]) {
					// Add the build to the suggested move
					suggestedMove.suggestedMoveAddTableBuild(table.getTableBuildAtIndex(j).getAbbv());
				}
			}
			// Return with all the possible captures set int he suggested move
			return;
		}

		// Look For Builds and loose cards to capture for the table
		for (var i = 0; i < this.handLength(); i++) {
			// Get the value of the hand card
			handCardValue = this.mPlayerHand[i].getValue();

			// If the handCard is an Ace treat it as 14
			if (handCardValue === 1) {
				handCardValue += 13;
			}
			
			// Loop through the builds on the table
			for (var j = 0; j < table.tableBuildLength(); j++) {
				// Check if the value of the build matches the value of the handCard
				if (handCardValue === table.getTableBuildAtIndex(j).getBuildValue()) {
					// Set the Move
					suggestedMove.suggestedMoveAddTableBuild(table.getTableBuildAtIndex(j).getAbbv());
					suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());

					// Check for any loose cards that match the value to capture along with the build
					for (var k = 0; k < table.tableCardLength(); k++) {
						// Check if the value matches
						if (this.mPlayerHand[i].getValue() === table.getTableCardAtIndex(k).getValue()) {
							suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(k).getAbbv());
						}
					}
					// Set the suggestion and return
					suggestedMove.setSuggestion(CAPTURE);
					return;
				}
			}
		}

		// Look for possible loose cards to capture from the table
		var capture = false;
		// Loop through the players hand
		for (var i = 0; i < this.handLength(); i++) {
			// Loop through the loose cards on the table
			for (var j = 0; j < table.tableCardLength(); j++) {
				// Check if the value of the table card matches the value of the table cards 
				if (this.mPlayerHand[i].getValue() == table.getTableCardAtIndex(j).getValue()) {
					// Check if the hand card is selected, if so set the hand card
					if (!suggestedMove.checkCardSelected()) {
						suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
						capture = true;
					}
					// Add the table card
					suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
				}
				// If capture, set the move and return
				if (capture) {
					suggestedMove.setSuggestion(CAPTURE);
					return;
				}
			}
		}

		// Trailing a card to the atble
		var indexOfLowestCard = 0;
		// Look for the lowest possible card
		for (var i = 0; i < this.handLength(); i++) {
			if (this.mPlayerHand[i].getValue() <= this.mPlayerHand[indexOfLowestCard].getValue()) {
				indexOfLowestCard = i;
			}
		}

		// Trail the lowest valued card
		suggestedMove.setHandCard(this.mPlayerHand[indexOfLowestCard].getAbbv());
		suggestedMove.setSuggestion(TRAIL);
	}
 }
