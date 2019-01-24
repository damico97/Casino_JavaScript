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

	moveGetAllTableCards() {
		if (undefined !== this.mTableCards) {
			return this.mTableCards;
		}
		else {
			console.log("ERROR!! - {Move} (moveGetAllTableCards()");
		}
	}
	 
	moveRemoveTableCard(rCard) {
		var index = this.mTableCards.indexOf(rCard);

		this.mTableCards.splice(index, 1);
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
	 

	checkPossibleCapture() {
	    var tableTotal = 0;
		for (var i = 0; i < this.mTableCards.length; i++) {
			tableTotal += this.mTableCards[i].getValue();
		}

		if (tableTotal % this.mHandCard.getValue() === 0) {
			return true;
		}
		else {
			if (tableTotal % this.mHandCard.getValue() + 13 === 0) {
				return true;
			}
			else {
				return false;
			}
		}
	}


	checkPossibleBuild(human) {
		var tempSum = 0;

		for (var i = 0; i < this.mTableCards.length; i++) {
			tempSum += this.mTableCards[i].getValue();
		}

		tempSum += this.mHandCard.getValue();

		for (var j = 0; j < human.handLength(); j++) {
			if (human.getHandCardAtIndex(j).getValue() == tempSum) {
				return tempSum;
			}
			else if (human.getHandCardAtIndex(j).getValue() + 13 == tempSum) {
				return tempSum;
			}
		}

		return -1;
	}
 }