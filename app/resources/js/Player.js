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

		temp = "Played the " + card.getName() + " to capture...<br>";

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

		temp = "Trailed the " + card.getName() + " from it's hand";

		table.addCardToTable(card);
 		this.mPlayerHand.splice(index, 1);
		move.resetMove();
		 
		return temp;
	}
	 
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

		var tableCards = new Array();
		var smallTableCards = new Array();
		var smallSmallTableCards = new Array();

		for (var i = 0; i < this.handLength(); i++) {
			handCardValue = this.mPlayerHand[i].getValue();

			if (handCardValue == 1) {
				handCardValue += 13;
			}

			tableCards = table.getTableCards();
			var setFound = false;

			for (var j = 0; j < table.tableCardLength(); j++) {
				smallTableCards = smallTableCards.concat(tableCards);
				smallTableCards.splice(j, 1);

				for (var k = 0; k < smallTableCards.length; k++) {
					if (handCardValue == tableCards[j].getValue() + smallTableCards[k].getValue()) {
						suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
						suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
						suggestedMove.suggestedMoveAddTableCard(smallTableCards[k].getAbbv());
						suggestedMove.setSuggestion(CAPTURE);
						
						setFound = true;
						break;
					}
					else {
						smallSmallTableCards.concat(smallTableCards);
						smallSmallTableCards.splice(k, 1);

						for (var l = 0; l < smallSmallTableCards.length; l++) {
							if (handCardValue == tableCards[j].getValue() + smallTableCards[k].getValue() + smallSmallTableCards[l].getValue()) {
								suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
								suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
								suggestedMove.suggestedMoveAddTableCard(smallTableCards[k].getAbbv());
								suggestedMove.suggestedMoveAddTableCard(smallSmallTableCards[l].getAbbv());
								suggestedMove.setSuggestion(CAPTURE);
								
								setFound = true;
								break;
							}
						}
					}
					
					if (setFound) {
						break;
					}
					smallSmallTableCards = [];
				}

				if (setFound) {
					break;
				}
				smallTableCards = [];
			}

			if (setFound) {
				break;
			}
		}
		if (setFound) {
			for (var i = 0; i < table.tableCardLength(); i++) {
				if (suggestedMove.getHandCard()[1] != "A" && suggestedMove.getHandCard()[1] == table.getTableCardAtIndex(i).getAbbv()[1]) {
					suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(i).getAbbv());
				}
			}
			return;
		}

		for (var i = 0; i < this.handLength(); i++) {
			for (var j = 0; j < table.tableCardLength(); j++) {
				if (this.mPlayerHand[i].getValue() == table.getTableCardAtIndex(j).getValue()) {
					if (!suggestedMove.checkCardSelected()) {
						suggestedMove.setHandCard(this.mPlayerHand[i].getAbbv());
					}
					suggestedMove.suggestedMoveAddTableCard(table.getTableCardAtIndex(j).getAbbv());
					suggestedMove.setSuggestion(CAPTURE);
					return;
				}
			}
		}

		var indexOfLowestCard = 0;
		for (var i = 0; i < this.handLength(); i++) {
			if (this.mPlayerHand[i].getValue() <= this.mPlayerHand[indexOfLowestCard].getValue()) {
				indexOfLowestCard = i;
			}
		}

		suggestedMove.setHandCard(this.mPlayerHand[indexOfLowestCard].getAbbv());
		suggestedMove.setSuggestion(TRAIL);
	}
 }