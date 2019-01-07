/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino Android-Java                            *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  December 12, 2018                                 *
 * ************************************************************
 */

 class Player {

 	Player() {
 		this.mPlayerHand = new Array();
 		this.mPlayerPile = new Array();
 		this.mScore = 0;
 		this.mRoundScore = 0;
		this.mNumSpades = 0;
	}
	
	getScore() {
		return this.mScore;
	}

	setScore(num) {
		this.mScore = num;
	}

 	addCardToHand(nCard) {
 		if (undefined == this.mPlayerHand) {
 			this.mPlayerHand = new Array();
 			this.mPlayerHand[0] = nCard;
 		}
 		else {
 			this.mPlayerHand.push(nCard);
 		}
 	}

 	addCardToPile(nCard) {
 		if (undefined == this.mPlayerPile) {
 			this.mPlayerPile = new Array();
 			this.mPlayerPile[0] = nCard;
 		}
 		else {
 			this.mPlayerPile.push(nCard);
 		}
 	}

 	handLength() {
 		if (undefined == this.mPlayerHand) {
 			return 0;
 		}
 		else {
 			return this.mPlayerHand.length;
 		}
 	}

 	pileLength() {
 		if (undefined ==  this.mPlayerPile) {
 			return 0;
 		}
 		else {
 			return this.mPlayerPile.length;
 		}
 	}

 	getHandCardAtIndex(index) {
 		if (index >= 0) {
 			return this.mPlayerHand[index];
 		}
 		else {
 			console.log("ERROR!! - {Player} getHandCardAtIndex()");
 		}
 	}

 	getPileCardAtIndex(index) {
 		if (index >= 0) {
 			return this.mPlayerPile[index];
 		}
 		else {
 			console.log("ERROR!! - {Player} getPileCardAtIndex()");
 		}
 	}

 	removeHandCard(abbv) {
 		for (var i = 0; i < this.mPlayerHand.length - 1; i++) { 
		   if (this.mPlayerHand[i].getAbbv() === abbv) {
		     arr.splice(i, 1); 
		   }
		}
 	}

	handToString() {
		var temp = "";

		for (var i = 0; i < this.handLength(); i++) {
			temp += this.mPlayerHand[i].getAbbv() + " ";
		}

		return temp;
	}

	pileToString() {
		var temp = "";

		for (var i = 0; i < this.pileLength(); i++) {
			temp += this.mPlayerPile[i].getAbbv() + " ";
		}

		return temp;
	}

 	captureCards(move, table) {
		var temp = "";

 		var card = move.getHandCard();
 		var index = this.mPlayerHand.indexOf(card);

 		this.mPlayerHand.splice(index, 1);

		temp = "User played the " + card.getName() + " to capture...<br>";

 		this.addCardToPile(move.getHandCard());

 		for (var i = move.moveTableCardLength() - 1; i >= 0; i--) {
			var tableCard = move.moveGetTableCard(i);
			var tableIndex = table.findTableCardIndex(tableCard);
			table.deleteTableCardAtIndex(tableIndex);

			temp += "the " + tableCard.getName() + "<br>";

			this.addCardToPile(tableCard);
		}
		temp += "from the table";

		move.resetMove();
		
		return temp;
 	}

 	trailCard(move, table) {
		var temp = "";
		
 		var card = move.getHandCard();
 		var index = this.mPlayerHand.indexOf(move.getHandCard());

		temp = "User trailed the " + card.getName() + " from it's hand";

		table.addCardToTable(card);
 		this.mPlayerHand.splice(index, 1);
		move.resetMove();
		 
		return temp;
 	}
 }