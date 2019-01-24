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