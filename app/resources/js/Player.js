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
 		return this.mPlayerHand.length;
 	}

 	getHandCardAtIndex(index) {
 		if (index >= 0) {
 			return this.mPlayerHand[index];
 		}
 		else {
 			console.log("ERROR!! - {Player} getHandCardAtIndex()");
 		}
 	}
 }