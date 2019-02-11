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
		this.mTableBuilds = new Array(); 

 		this.mCardSelected = false;
 	}

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

    moveAddTableBuild(nBuild) {
		if (undefined == this.mTableBuilds) {
			this.mTableBuilds = new Array();
			this.mTableBuilds[0] = nBuild;
		}
		else {
			this.mTableBuilds.push(nBuild);
		}
	}

	moveGetAllTableBuild() {
		if (undefined !== this.mTableBuilds) {
			return this.mTableBuilds;
		}
		else {
			console.log("ERROR!! - {Move} (moveGetAllTableBuilds()");
		}
	}

	moveRemoveTableBuild(rBuild) {
		var index = this.mTableBuilds.indexOf(rBuild);

		this.mTableBuilds.splice(index, 1);
	}

	moveTableBuildLength() {
		if (undefined == this.mTableBuilds) {
			return 0;
		}
		else {
			return this.mTableBuilds.length;
		}
	}

	moveGetTableBuild(index) {
		if (index >= 0 && index < this.moveTableBuildLength()) {
			return this.mTableBuilds[index];
		}
		else {
			console.log("ERROR!! - {Moe} (moveGetTableBuild)");
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
		var tableCardTotal = 0;
		var tableBuildTotal = 0;

		for (var i = 0; i < this.moveTableCardLength(); i++) {
			tableCardTotal += this.mTableCards[i].getValue();
		}

		for (var j = 0; j < this.moveTableBuildLength(); j++) {
			tableBuildTotal += this.mTableBuilds[j].getBuildValue();
		}

		console.log("Card Total = " + tableCardTotal);
		console.log("Build Total = " + tableBuildTotal);

		if (tableCardTotal % this.mHandCard.getValue() === 0 && tableBuildTotal % this.mHandCard.getValue() === 0) {
			if (this.moveTableCardLength() !== 0 || this.moveTableBuildLength() !== 0) {
				return true;
			}
		}
		else {
			if (tableCardTotal % this.mHandCard.getValue() + 13 === 0 && tableBuildTotal % this.mHandCard.getValue() + 13 === 0) {
				if (this.moveTableCardLength() !== 0 || this.moveTableBuildLength() !== 0) {
					return true;
				}
			}
			else {
				return false;
			}
		}
	}


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


	checkPossibleMultiBuild(human) {
		var tempSum = 0;

		if (this.mTableBuilds.length === 1) {
			for (var i = 0; i < this.mTableCards.length; i++) {
				tempSum += this.mTableCards[i].getValue();
			}

			tempSum += this.mHandCard.getValue();

			if (tempSum === this.mTableBuilds[0].getBuildValue()) {
				if (this.mTableBuilds[0].getBuildOwner() === "Human") {
					return true;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}

	checkPossibleExtendBuild(human) {
		var tempSum = 0;

		if (this.mTableBuilds.length === 1) {
			tempSum += this.mHandCard.getValue();
			
			for (var i = 0; i < this.mTableCards.length; i++) {
				tempSum += this.mTableCards[i].getValue();
			}

			tempSum += this.mTableBuilds[0].getBuildValue();

			for (var i = 0; i < human.handLength(); i++) {
				if (human.getHandCardAtIndex(i).getValue() === tempSum || human.getHandCardAtIndex(i).getValue() + 13 === tempSum) {
					if (this.mTableBuilds[0].getBuildOwner() === "Computer") {
						if (!this.mTableBuilds[0].checkMulti()) {
							return true;
						}
					}
				}
			}
			return false;
		}
		else {
			return false;
		}
	}
 }