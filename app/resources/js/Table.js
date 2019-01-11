/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
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
		if (undefined ==  this.mTableCards) {
			return 0;
		}
		else {
			return this.mTableCards.length;
		}
 	}

    getTableCards() {
		return this.mTableCards;
	}	 

 	getTableCardAtIndex(index) {
 		if (index >= 0 && index < this.tableCardLength()) {
 			return this.mTableCards[index];
 		}
 		else {
 			console.log("ERROR!! - {Table} [getTableCardAtIndex]");
 		}
 	}

 	deleteTableCardAtIndex(index) {
 		this.mTableCards.splice(index, 1);
 	}

 	findTableCardIndex(card) {
 		return this.mTableCards.indexOf(card);
	}
	 
	tableLooseCardsToString() {
		var temp = "";

		for (var i = 0; i < this.tableCardLength(); i++) {
			temp += this.mTableCards[i].getAbbv() + " ";
		}

		return temp;
	}
 }