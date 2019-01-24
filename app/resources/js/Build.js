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
        return this.mBuildCards;
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