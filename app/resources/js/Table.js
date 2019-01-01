/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino Android-Java                            *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  December 12, 2018                                 *
 * ************************************************************
 */

 class Table {

 	Table() {
 		this.mTableCards = new Array();
 	}

 	addCardToTable(nCard) {
 		if (undefined == this.mTableCards) {
 			this.mTableCards = new Array();
 			this.mTableCards[0] = nCard;
 		}
 		else {
 			this.mTableCards.push(nCard);
 		}
 	}

 	tableCardLength() {
 		return this.mTableCards.length;
 	}

 	getTableCardAtIndex(index) {
 		if (index >= 0 && index < this.tableCardLength()) {
 			return this.mTableCards[index];
 		}
 		else {
 			console.log("ERROR!! - {Table} [getTableCardAtIndex]");
 		}
 	}
 }