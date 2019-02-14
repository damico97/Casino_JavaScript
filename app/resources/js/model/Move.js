/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class Move {

	/**
	 * Move(), The Consturctor for the Move Class
	 */
 	Move() {
 		this.mComputerMoveSelection = -1;
 		this.mComputerBuildSelection = -1;
 		this.mComputerMoveLogic = "";

 		this.mHandCard = null;
		this.mTableCards = new Array();
		this.mTableBuilds = new Array(); 

 		this.mCardSelected = false;
 	}


	/**
	 * resetMove(), Resets all variables in the Move Class
	 */
 	resetMove() {
 		this.mHandCard = null;
 		this.mCardSelected = false;

 		if (undefined === this.mTableCards) {

 		}
 		else {
 			this.mTableCards = [];
		}
		 
		if (undefined === this.mTableBuilds) {

		}
		else {
			this.mTableBuilds = [];
		}
 	}


	/**
	 * checkCardSelected(), Return True or False if the user selected a card from it's hand
	 * @return Boolean if their is a hand card is selected
	 */
 	checkCardSelected() {
 		return this.mCardSelected;
 	}


	/**
	 * setHandCard(), Takes in a card from the players hand, and set it as the hand card in the move
	 * @param nCard -> The card from the hand to be set as the Hand Card
	 */
 	setHandCard(nCard) {
 		this.mHandCard = nCard;
 		this.mCardSelected = true;
 	}


	/**
	 * moveAddTableCard(), Takes in a card and addes it to the array of table cards for the move
	 * @param nCard -> The New card to be added to the array
	 */
 	moveAddTableCard(nCard) {
		// Check if the Array is undefined
 		if (undefined == this.mTableCards) {
 			this.mTableCards = new Array();
 			this.mTableCards[0] = nCard;
		}
		// Push the card onto the array
 		else {
 			this.mTableCards.push(nCard);
 		}
	}


	/**
	 * moveGetAllTableCards(), Returns all the cards from the table that were selected
	 * @return The Array of all the cards selected from the table
	 */
	moveGetAllTableCards() {
		// Check if the array exists, if so return it
		if (undefined !== this.mTableCards) {
			return this.mTableCards;
		}
		// Throw an Error
		else {
			console.log("ERROR!! - {Move} (moveGetAllTableCards()");
		}
	}
	 

	/**
	 * moveRemoveTableCards(), Deletes the card from the array of selected cards
	 */
	moveRemoveTableCard(rCard) {
		// Find the index of the card
		var index = this.mTableCards.indexOf(rCard);
		// Remove the card
		this.mTableCards.splice(index, 1);
	}


	/**
	 * moveTableCardLength(), Return the length of the Loose Cards Array
	 * @return the Length of the Loose Cards Selected Array
	 */
 	moveTableCardLength() {
		// Check if the Array exists, return length of 0
		if (undefined == this.mTableCards) {
			return 0;
		}
		// Return the length of the array
		else {
		 	return this.mTableCards.length;
		}
 	}


	/**
	 * moveGetTableCard(), Returns the card from the selected array from at the given index
	 * @param index -> The Index of the card to be returned
	 * @return The card from the given index
	 */
 	moveGetTableCard(index) {
		// Check if the index Exists
 		if (index >= 0 && index < this.moveTableCardLength()) {
			// Return the card from the array
 			return this.mTableCards[index];
		}
		// Throw an Error
 		else {
 			console.log("ERROR!! - {Move} [moveGetTable]");
 		}
 	}


	/**
	 * moveAddTableBuild(),Takes in a new Build and adds it to the array of selected builds
	 * @param nBuild -> The build to be added to the array
	 */
    moveAddTableBuild(nBuild) {
		// Check if the array exists, if not initialize and add the build to the array
		if (undefined == this.mTableBuilds) {
			this.mTableBuilds = new Array();
			this.mTableBuilds[0] = nBuild;
		}
		// Push the build into the array
		else {
			this.mTableBuilds.push(nBuild);
		}
	}


	/**
	 * moveGetAllTableBuilds(), Returns the array of all the builds that were selected
	 * @return Tehe Array with all the selected builds
	 */
	moveGetAllTableBuild() {
		// Check if the array exists, if so return it
		if (undefined !== this.mTableBuilds) {
			return this.mTableBuilds;
		}
		// Array doesn't exist, throw and error
		else {
			console.log("ERROR!! - {Move} (moveGetAllTableBuilds()");
		}
	}


	/**
	 * moveRemoveTableBuild(), Takes in a build to removed from the array, and removes it
	 * @param rBuild -> The Build to be removed from the array
	 */
	moveRemoveTableBuild(rBuild) {
		// Find the index of the build
		var index = this.mTableBuilds.indexOf(rBuild);
		// Remove the build
		this.mTableBuilds.splice(index, 1);
	}


	/**
	 * moveTableBuildLength(), Returns the length of the selected build array
	 * @return The Length of the Build Array
	 */
	moveTableBuildLength() {
		// Check if the Array exists, if not return length of 0
		if (undefined == this.mTableBuilds) {
			return 0;
		}
		// Return the length of the array
		else {
			return this.mTableBuilds.length;
		}
	}


	/**
	 * moveGetTableBuild(), Returns the build at the given index
	 * @param index -> The index of the build to be returned
	 * @return The build from the given index
	 */
	moveGetTableBuild(index) {
		// Check if the index exists
		if (index >= 0 && index < this.moveTableBuildLength()) {
			// Return the build
			return this.mTableBuilds[index];
		}
		// Throw an Error
		else {
			console.log("ERROR!! - {Moe} (moveGetTableBuild)");
		}
	}


	/**
	 * resetHandCard(), Clears out the hand card selected
	 */
 	resetHandCard() {
 		this.mHandCard = null;
 		this.mCardSelected = false;
 	}


	/**
	 * getHandCard(), Returns the hand card thats been selected
	 * @return The card that was selected from the hand
	 */
 	getHandCard() {
 		return this.mHandCard;
	}
	 

	/**
	 * checkPossibleCapture(), Checks if the cards selected are capable of being used in a capture move
	 * @returns Boolean, TRUE if possible to capture, FALSE if Not
	 */
	checkPossibleCapture() {
		// Variables to store the totals the tables cards & table builds values
		var tableCardTotal = 0;
		var tableBuildTotal = 0;

		// Loop through the table cards array
		for (var i = 0; i < this.moveTableCardLength(); i++) {
			// Add the value of the card to the total
			tableCardTotal += this.mTableCards[i].getValue();
		}

		// Loop through the table builds array
		for (var j = 0; j < this.moveTableBuildLength(); j++) {
			// Add the value of the build to the total
			tableBuildTotal += this.mTableBuilds[j].getBuildValue();
		}

		// Check if the value of the card total & build total mod by handcardvalue equals 0
		if (tableCardTotal % this.mHandCard.getValue() === 0 && tableBuildTotal % this.mHandCard.getValue() === 0) {
			if (this.moveTableCardLength() !== 0 || this.moveTableBuildLength() !== 0) {
				return true;
			}
		}
		// Check if the values are okay if the hand card is an Ace
		else {
			if (tableCardTotal % this.mHandCard.getValue() + 13 === 0 && tableBuildTotal % this.mHandCard.getValue() + 13 === 0) {
				if (this.moveTableCardLength() !== 0 || this.moveTableBuildLength() !== 0) {
					return true;
				}
			}
			// Cannot capture
			else {
				return false;
			}
		}
	}


	/**
	 * checkPossibleTrail(), Checks if the user is abile to trail a card
	 * @param human -> Access to the Human player
	 * @param table -> Access to the Table
	 */
	checkPossibleTrail(human, table) {
		// Loop through the player's hand
		for (var i = 0; i < human.handLength(); i++) {
			// Loop through the builds on the table
			for (var j = 0; j < table.tableBuildLength(); j++) {
				// Check if the hand card value matches a build value
				if (human.getHandCardAtIndex(i).getValue() === table.getTableBuildAtIndex(j).getBuildValue()) {
					return false;
				}
			}

			// Loop through the cards on the table
			for (var k = 0; k < table.tableCardLength(); k++) {
				// Check if the hand card value matches a loose card value
				if (human.getHandCardAtIndex(i).getValue() === table.getTableCardAtIndex(k).getValue()) {
					return false;
				}
			}
		}
		// Cannot Capture, so you Can Trail
		return true;
	}


	/**
	 * checkPossibleBuild(), Checks if the move selected is able to used as a build
	 * @param human -> Access to the human player
	 * @return The value of the build if possible, -1 If Not
	 */
	checkPossibleBuild(human) {
		// Local sum
		var tempSum = 0;

		// Loop through the array of selected cards
		for (var i = 0; i < this.mTableCards.length; i++) {
			// Add the value of the card to the sum
			tempSum += this.mTableCards[i].getValue();
		}

		// Add the value of the hand card that was selected
		tempSum += this.mHandCard.getValue();

		// Loop through the players hand
		for (var j = 0; j < human.handLength(); j++) {
			// Check if the value of card in the hand equals the value of the build
			if (human.getHandCardAtIndex(j).getValue() == tempSum) {
				// Possible Build
				return tempSum;
			}
			// Check if the card from the hand is an ace
			else if (human.getHandCardAtIndex(j).getValue() + 13 == tempSum) {
				// Possible Build
				return tempSum;
			}
		}

		// Cannot Build, so return -1
		return -1;
	}


	/**
	 * checkPossibleMultiBuild(), Checks if the cards that are selected are able to be used for a multi-build
	 * @param human -> Access to the human player
	 */
	checkPossibleMultiBuild(human) {
		// Value of the possible mvoe
		var tempSum = 0;

		// Check if there is only one build selected
		if (this.mTableBuilds.length === 1) {
			// Loop through the selected table cards
			for (var i = 0; i < this.mTableCards.length; i++) {
				// Add the sum of the card to the value
				tempSum += this.mTableCards[i].getValue();
			}

			// Add the value of the hand card
			tempSum += this.mHandCard.getValue();

			// Check if the sum equals the build value
			if (tempSum === this.mTableBuilds[0].getBuildValue()) {
				// Check if the owner of the build is human
				if (this.mTableBuilds[0].getBuildOwner() === "Human") {
					// Possible Multi-Build
					return true;
				}
				else {
					// Cannot Multi-Build
					return false;
				}
			}
			else {
				// Cannot Multi-Build
				return false;
			}
		}
	}


	/**
	 * checkPossibleExtendBuild(), Determins if the cards selected are possible to Extend the build
	 * @param human -> Access to the human player
	 */
	checkPossibleExtendBuild(human) {
		// Sum of the new build
		var tempSum = 0;

		// Check if there is only one build selected
		if (this.mTableBuilds.length === 1) {
			// Add the value of the hand card
			tempSum += this.mHandCard.getValue();
			
			// Loop through the array of selected cards
			for (var i = 0; i < this.mTableCards.length; i++) {
				// Add the value of the card
				tempSum += this.mTableCards[i].getValue();
			}

			// Add the value of the build
			tempSum += this.mTableBuilds[0].getBuildValue();

			// Loop through the players hand
			for (var i = 0; i < human.handLength(); i++) {
				// Check if the values match
				if (human.getHandCardAtIndex(i).getValue() === tempSum || human.getHandCardAtIndex(i).getValue() + 13 === tempSum) {
					// Check that the build is owned by the computer
					if (this.mTableBuilds[0].getBuildOwner() === "Computer") {
						// Check if the build is not a multi-build
						if (!this.mTableBuilds[0].checkMulti()) {
							// Possible Extend Buile
							return true;
						}
					}
				}
			}
			// Cannot Extend a build
			return false;
		}
		else {
			// Cannot Extend A Build
			return false;
		}
	}
 }