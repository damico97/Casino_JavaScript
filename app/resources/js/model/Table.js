/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class Table {

	/**
	 * Table(), The Constructor for the Table Class
	 */
 	Table() {
		this.mTableCards = new Array();
		this.mTableBuilds = new Array();
	}


	/**
	 * clearTable(), Resets both the array of loose cards and the array of builds on the table
	 */
	clearTable() {
		// Reset both arrays
		this.mTableCards = [];
		this.mTableBuilds = [];
	}
	

	/**
	 * addBuildToTable(), Takes in a new build and adds it to the table
	 * @param nBuild -> The Build to be added to the table
	 */
	addBuildToTable(nBuild) {
		// Check if the build array is empty
		if (undefined === this.mTableBuilds) {
			// If so initialize the build and add the new build
			this.mTableBuilds = new Array();
			this.mTableBuilds[0] = nBuild;
		}
		// Push the new build onto the array
		else {
			this.mTableBuilds.push(nBuild);
		}
	}


	/**
	 * getTableBuildAtIndex(), Takes a given, and returns the build at the given index if it exists
	 * @param index -> The Index of the build to return
	 */
	getTableBuildAtIndex(index) {
		// Check if the index exists
		if (index >= 0 && index < this.tableBuildLength()) {
			// If so return the build at the index
			return this.mTableBuilds[index];
		}
		// Index does not exist, throw error
		else {
			console.log("ERROR!! - {Table} [getTableBuildAtIndex]");
		}
	}


	/**
	 * addCardToTable(), Takes in a new card to be added to the table
	 * @param nCard -> The new card to be added to the table
	 */
 	addCardToTable(nCard) {
		// Check if the card array is empty
 		if (undefined == this.mTableCards) {
			// If so initialize the array and add the card to it
 			this.mTableCards = new Array();
 			this.mTableCards[0] = nCard;
		}
		// Array is already initialized
 		else {
			// Push the card onto the array
 			this.mTableCards.push(nCard);
 		}
 	}

	
	/**
	 * tableCardLength(), Returns the length of the loose card array
	 * @return The Length of the Card Array
	 */
 	tableCardLength() {
		// Check if the Card Array is empty
		if (undefined == this.mTableCards) {
			// Returns Length of 0
			return 0;
		}
		// Return the length of the array
		else {
			return this.mTableCards.length;
		}
	}
	

	/**
	 * tableBuildLength(), Returns the length of the build array
	 * @return The Length of the Build Array
	 */
	tableBuildLength() {
		// Check if the Build Array is empty
		if (undefined == this.mTableBuilds) {
			// Return Length of 0
			return 0;
		}
		// Return the length of the array
		else {
			return this.mTableBuilds.length;
		}
	}


	/**
	 * getTableCards(), Returns the Array of Table Cards
	 * @returns the Array of Table Cards
	 */
    getTableCards() {
		return this.mTableCards;
	}
	

	/**
	 * clearTableCards(), Empties the Table Card Array
	 */
	clearTableCards() {
		this.mTableCards = [];
	}


	/**
	 * getTableCardAtIndex(), Takes in an Index and returns the card at this index
	 * @param index -> The Index for the card to be returned
	 */
 	getTableCardAtIndex(index) {
		// Check if the Index exists, if so return the card at the index
 		if (index >= 0 && index < this.tableCardLength()) {
 			return this.mTableCards[index];
		}
		// Index doesn't exist, throw an Error
 		else {
 			console.log("ERROR!! - {Table} [getTableCardAtIndex]");
 		}
 	}

	
	/**
	 * deleteTableCardAtIndex(), Removes the card from the table at the given index
	 * @param index -> The Index of the card to be removed
	 */
 	deleteTableCardAtIndex(index) {
 		this.mTableCards.splice(index, 1);
	}
	 

	/**
	 * deleteTableBuildAtIndex(), Removes the build from the table at the given index
	 * @param index -> The Index of the build to bre removed
	 */
	deleteTableBuildAtIndex(index) {
		this.mTableBuilds.splice(index, 1);
	}


	/**
	 * findTableCardIndex(), Takes in a card, and finds the index of that card in the array
	 * @param card -> The Card to find the index of
	 * @return The index of that card
	 */
 	findTableCardIndex(card) {
 		return this.mTableCards.indexOf(card);
	}


	/**
	 * findTableBuildIndex(), Takes in a build, and finds the index of that card in the array
	 * @param build -> The Build to find the index of
	 * @return The index of the build
	 */
	findTableBuildIndex(build) {
		return this.mTableBuilds.indexOf(build);
	}
	 

	/**
	 * tableLooseCardsToString(), Converts the array of loose cards to text form
	 * @return The array of cards in text form
	 */
	tableLooseCardsToString() {
		// Local string to assemble the card in string
		var temp = "";

		// Loop through the card array
		for (var i = 0; i < this.tableCardLength(); i++) {
			// Add the card abbrevation to the string
			temp += this.mTableCards[i].getAbbv();
			
			// If NOT the last card, add a space
			if (i != this.tableCardLength() - 1) {
				temp += " ";
			}
		}

		return temp;
	}


	/**
	 * tableBuildsToString(), Converts the array of builds to text form
	 * @return The Array of builds in text form
	 */
	tableBuildsToString() {
		// Local string to assemble the build string
		var temp = "";

		// Loop through the build array
		for (var i = 0; i < this.tableBuildLength(); i++) {
			// Add the build to the string
			temp += this.mTableBuilds[i].buildToString();

			// If NOT the last card, add a space
			if (i != this.tableBuildLength() - 1) {
				temp += " ";
			}
		}

		return temp;
	}
 }