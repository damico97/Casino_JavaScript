/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class SuggestedMove {

    SuggestedMove() {
        this.mHandCard = "";
        this.mCardSelected = false;

        this.mTableCards = new Array();
        this.mTableBuilds = new Array();
        this.mSuggestion = -1;
    }

    resetMove() {
        this.mHandCard = "";
        this.mCardSelected = false;

        if (undefined == this.mTableCards) {
            // Do Nothing
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

    getHandCard() {
        return this.mHandCard;
    }

    resetHandCard() {
        this.mHandCard = "";
        this.mCardSelected = false;
    }

    setSuggestion(input) {
        this.mSuggestion = input;
    }

    getSuggestion() {
        return this.mSuggestion;
    }

    resetSuggestion() {
        this.mSuggestion = -1;
    }

    suggestedMoveAddTableCard(nCard) {
        if (undefined == this.mTableCards) {
            this.mTableCards = new Array();
            this.mTableCards[0] = nCard;
        }
        else {
            this.mTableCards.push(nCard);
        }
    }

    suggestedMoveTableCardLength() {
        if (undefined == this.mTableCards) {
            return 0;
        }
        else {
            return this.mTableCards.length;
        }
    }

    suggestedMoveGetTableCard(index) {
        if (index >= 0 && index < this.suggestedMoveTableCardLength()) {
            return this.mTableCards[index];
        }
        else {
            console.log("ERROR!! - {Suggested Move} [suggestedMoveGetTableCard]");
        }
    }

    suggestedMoveAddTableBuild(nBuild) {
        if (undefined == this.mTableBuilds) {
            this.mTableBuilds = new Array();
            this.mTableBuilds[0] = nBuild;
        }
        else {
            this.mTableBuilds.push(nBuild);
        }
    }

    suggestedMoveTableBuildLength() {
        if (undefined == this.mTableBuilds) {
            return 0;
        }
        else {
            return this.mTableBuilds.length;
        }
    }

    suggestedMoveGetTableBuild(index) {
        if (index >= 0 && index < this.suggestedMoveTableBuildLength()) {
            return this.mTableBuilds[index];
        }
        else {
            console.log("ERROR!! - {Suggested Move} [suggestedMoveGetTableBuild");
        }
    }
 }