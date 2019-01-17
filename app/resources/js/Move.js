/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class Move {

 	Move() {
 		this.mComputerMoveSelection = -1;
 		this.mComputerBuildSelection = -1;
 		this.mComputerMoveLogic = "";

 		this.mHandCard = null;
 		this.mTableCards = new Array();

 		this.mCardSelected = false;
 	}

 	resetMove() {
 		this.mHandCard = null;
 		this.mCardSelected = false;

 		if (undefined == this.mTableCards) {

 		}
 		else {
 			this.mTableCards = [];
 		}
 	}


 	checkCardSelected() {
 		return this.mCardSelected;
 	}


 	checkPossibleCapture() {
 		var tableTotal = 0;
 		for (var i = 0; i < this.mTableCards.length; i++) {
 			tableTotal += this.mTableCards[i].getValue();
 		}

 		if (tableTotal % this.mHandCard.getValue() === 0) {
 			console.log("True");
 			return true;
 		}
 		else {
 			if (tableTotal % this.mHandCard.getValue() + 13 === 0) {
 				console.log("True");
 				return true;
 			}
 			else {
 				console.log("False");
 				return false;
 			}
 		}
 	}


 	setHandCard(nCard) {
 		this.mHandCard = nCard;
 		this.mCardSelected = true;
 	}


 	moveAddTableCard(nCard) {
 		if (undefined == this.mTableCards) {
 			this.mTableCards = new Array();
 			this.mTableCards[0] = nCard;
 		}
 		else {
 			this.mTableCards.push(nCard);
 		}
 	}

 	moveTableCardLength() {
		if (undefined == this.mTableCards) {
			return 0;
		}
		else {
		 	return this.mTableCards.length;
		}
 	}

 	moveGetTableCard(index) {
 		if (index >= 0 && index < this.moveTableCardLength()) {
 			return this.mTableCards[index];
 		}
 		else {
 			console.log("ERROR!! - {Move} [moveGetTable]");
 		}
 	}


 	resetHandCard() {
 		this.mHandCard = null;
 		this.mCardSelected = false;
 	}


 	getHandCard() {
 		return this.mHandCard;
 	}
 }