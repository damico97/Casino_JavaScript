/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino Android-Java                            *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  December 12, 2018                                 *
 * ************************************************************
 */

 class Table {

 	/**
 	 * Table(), Constructor for the Table Class
 	 * @param None
 	 */
 	Table() {
 		// Log
 		console.log("Table Class - Table(): Called");

 		// Intialize variables
 		this.mTableCards = new Array();
 	}


 	/**
 	 * addCardToTable(), Takes in a new card and addes it to the loose cards on the table
 	 * @param nCard -> The new card to be added to the table
 	 */
 	addCardToTable(nCard) {
 		// Log
 		console.log("Table Class - addCardToTable(): Called");

 		// Check if the loose card array is undefined
 		if (undefined == this.mTableCards) {
 			// Intialize the array & add the new card to the first index
 			this.mTableCards = new Array();
 			this.mTableCards[0] = nCard;
 		}
 		// Array is already initialized
 		else {
 			// Push the card onto the end of the array
 			this.mTableCards.push(nCard);
 		}
 	}


 	/**
 	 * tableCardLength(), Returns the length of the loose card array
 	 * @param None
 	 * @return int, Which is the length of the array
 	 */
 	tableCardLength() {
 		// Log
 		console.log("Table Class - tableCardLength(): Called");

 		// Return the length of the array
 		return this.mTableCards.length;
 	}


 	/**
 	 * getTableCardAtIndex(), Takes in an index and returns the card at that index
 	 * @param index, Which is the index to get the card from
 	 * @return Card, which is the card from the given index
 	 */
 	getTableCardAtIndex(index) {
 		// Log
 		console.log("Table Class - getTableCardAtIndex(): Called");

 		// Check if the index is valid
 		if (index >= 0 && index < this.tableCardLength()) {
 			// Return the card from the index
 			return this.mTableCards[index];
 		}
 		// The index is NOT valid
 		else {
 			// Log the Error
 			console.log("ERROR!! - {Table} [getTableCardAtIndex]");
 		}
 	}
 }