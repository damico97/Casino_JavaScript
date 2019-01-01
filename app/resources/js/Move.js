/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino Android-Java                            *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  December 12, 2018                                 *
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

 		//this.mTableCards.clear;
 	}


 	checkCardSelected() {
 		return this.mCardSelected;
 	}


 	setHandCard(nCard) {
 		this.mHandCard = nCard;
 		this.mCardSelected = true;
 	}


 	resetHandCard() {
 		this.mHandCard = null;
 		this.mCardSelected = false;
 	}


 	getHandCard() {
 		return this.mHandCard;
 	}
 }