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

 	addCardToHand(nCard) {
 		if (undefined == this.mPlayerHand) {
 			this.mPlayerHand = new Array();
 			this.mPlayerHand[0] = nCard;
 		}
 		else {
 			this.mPlayerHand.push(nCard);
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

 	getHandCardAtIndex(index) {
 		if (index >= 0) {
 			return this.mPlayerHand[index];
 		}
 		else {
 			console.log("ERROR!! - {Player} getHandCardAtIndex()");
 		}
 	}

 	trailCard(move, table) {
 		var card = move.getHandCard();
 		var index = this.mPlayerHand.indexOf(move.getHandCard());

		table.addCardToTable(card);
 		this.mPlayerHand.splice(index, 1);
 		move.resetMove();
 	}
 }