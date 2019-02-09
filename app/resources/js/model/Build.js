/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Build {
    
    Build() {
        this.mBuildValue = 0;
        this.mBuildOwner = "";
        this.mBuildCards = new Array();
    }

    getAbbv() {
        var temp = "B";

        if (this.getBuildValue() === 2) {
            temp += "2";
        }
        else if (this.getBuildValue() === 3) {
            temp += "3";
        }
        else if (this.getBuildValue() === 4) {
            temp += "4";
        }
        else if (this.getBuildValue() === 5) {
            temp += "5";
        }
        else if (this.getBuildValue() === 6) {
            temp += "6";
        }
        else if (this.getBuildValue() === 7) {
            temp += "7";
        }
        else if (this.getBuildValue() === 8) {
            temp += "8";
        }
        else if (this.getBuildValue() === 9) {
            temp += "9";
        }
        else if (this.getBuildValue() === 10) {
            temp += "X";
        }
        else if (this.getBuildValue() === 11) {
            temp += "J";
        }
        else if (this.getBuildValue() === 12) {
            temp += "Q";
        }
        else if (this.getBuildValue() === 13) {
            temp += "K";
        }
        else if (this.getBuildValue() === 14) {
            temp += "A";
        }
        else {

        }
        
        return temp;
    }

    checkMulti() {
        if (this.buildLength() > 1) {
            return true;
        }
        else {
            return false;
        }
    }

    setBuildValue(nValue) {
        this.mBuildValue = nValue;
    }

    getBuildValue() {
        return this.mBuildValue;
    }

    setBuildOwner(nOwner) {
        this.mBuildOwner = nOwner;
    }

    getBuildOwner() {
        return this.mBuildOwner;
    }

    extendBuild(nCards) {
        this.mBuildCards[0] = this.mBuildCards[0].concat(nCards);
    }

    addToBuildCards(nCards) {
        if (undefined === this.mBuildCards) {
            this.mBuildCards = new Array();
            this.mBuildCards[0] = nCards;
        }
        else {
            this.mBuildCards.push(nCards);
        }
    }

    getBuildCards() {
        var temp = new Array();

        for (var i = 0; i < this.mBuildCards.length; i++) {
            temp = temp.concat(this.mBuildCards[i]);
        }
        return temp;
    }

    buildLength() {
        if (undefined === this.mBuildCards) {
            return 0;
        }
        else {
            return this.mBuildCards.length;
        }
    }

    findBuildValue() {
        // Value variable used to keep the sum
        var value = 0;

        // Only need to loop through the 1st Dimension of the Cards ArrayList
        for (var i = 0; i < this.mBuildCards[0].length; i++) {
            // Add the value of the Card to the value sum
            value += this.mBuildCards[0][i].getValue();
        }

        // Set the mBuildValue member variable to the value just added up.
        this.mBuildValue = value;
    }

    setBuildFromString(nCardList) {
        // Loop the the 1st Dimension of the of the 2D ArrayList of abbreviations
        for (var i = 0; i < nCardList.length; i++) {
            if (i === 0) {
                this.mBuildCards = new Array();
            }
            // Create a new ArrayList of Cards to be added to the mBuildCards 2D ArrayList of Cards
            this.mBuildCards.push(new Array());
            // Loop through the 2nd Dimension of the 2D ArrayList of abbreviations
            for (var j = 0; j < nCardList[i].length; j++) {
                var nCard = new Card();
                nCard.newCardFromAbbv(nCardList[i][j]);

                if (j === 0) {
                    this.mBuildCards[i] = new Array();
                }
                // Add a new Card to the mBuildCards ArrayList at 1st Dimension index
                this.mBuildCards[i].push(nCard);
            }
        }
    }

    buildToString() {
        var temp = "";

        temp = "[ ";
        for (var i = 0; i < this.buildLength(); i++) {
            temp += "[";
            for (var j = 0; j < this.mBuildCards[i].length; j++) {
                temp += this.mBuildCards[i][j].getAbbv();
                if (j != this.mBuildCards[i].length - 1) {
                    temp += " ";
                }
            }
            temp += "] ";
        }
        temp += "]";
    
        return temp;
    }
}