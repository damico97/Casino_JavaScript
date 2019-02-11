/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Human extends Player {

    Human() {
        this.mPlayerHand = new Array();
        this.mPlayerPile = new Array();
        this.mScore = 0;
        this.mRoundScore = 0;
        this.mNumSpades = 0;
    }

    getHelp(suggestedMove) {
        var temp = "";

        if (suggestedMove.getSuggestion() === 1) {
            temp = "You Should Create A Build\n";
            temp += "Play the " + this.convertAbbvToName(suggestedMove.getHandCard()) + " from your hand\n";
            temp += "With....\n";

            for (var j = 0; j < suggestedMove.suggestedMoveTableCardLength(); j++) {
                temp += this.convertAbbvToName(suggestedMove.suggestedMoveGetTableCard(j)) + "\n";
            }

            temp += "From the Table\n";

            return temp;
        }
        else if (suggestedMove.getSuggestion() === 2) {
            temp = "You Should Create A Multi-Build\n";
            temp += "Using " + this.convertAbbvToName(suggestedMove.suggestedMoveGetTableBuild(0)) + " on the table\n";
            temp += "Play the " + this.convertAbbvToName(suggestedMove.getHandCard()) + " from your hand\n";
            temp += "With....\n";

            for (var j = 0; j < suggestedMove.suggestedMoveTableCardLength(); j++) {
                temp += this.convertAbbvToName(suggestedMove.suggestedMoveGetTableCard(j)) + "\n";
            }

            temp += "From the Table\n";

            return temp;
        }
        else if (suggestedMove.getSuggestion() === 3) {
            temp = "Yout Should Extend A Build\n";
            temp += "Extend the build of " + this.convertAbbvToName(suggestedMove.suggestedMoveGetTableBuild(0)) + " on the table\n";

            temp += "Play the " + this.convertAbbvToName(suggestedMove.getHandCard()) + " from your hand\n";
            temp += "With....\n";

            for (var j = 0; j < suggestedMove.suggestedMoveTableCardLength(); j++) {
                temp += this.convertAbbvToName(suggestedMove.suggestedMoveGetTableCard(j)) + "\n";
            }

            temp += "From the Table\n";

            return temp;
        }
        else if (suggestedMove.getSuggestion() === 4) {
            temp = "You Should Caputre\n";
            temp += "Play the " + this.convertAbbvToName(suggestedMove.getHandCard()) + " from your hand\n";
            temp += "To Capture...\n";

            for (var i = 0; i < suggestedMove.suggestedMoveTableBuildLength(); i++) {
                temp += this.convertAbbvToName(suggestedMove.suggestedMoveGetTableBuild(i)) + "\n";
            }

            for (var j = 0; j < suggestedMove.suggestedMoveTableCardLength(); j++) {
                temp += this.convertAbbvToName(suggestedMove.suggestedMoveGetTableCard(j)) + "\n";
            }

            temp += "From the Table\n";

            return temp;
        }
        else if (suggestedMove.getSuggestion() === 5) {
            temp = "You Have To Trail A Card\n";
            temp += "You should trail the " + this.convertAbbvToName(suggestedMove.getHandCard()) + "\n";

            return temp;
        }
        else {
            console.log("ERROR - [Human] getHelp()");
        }
    }

    convertAbbvToName(abbv) {
        var temp = "";

        if (abbv.charAt(0) === "B") {
            temp = "The Build of ";
            
            if (abbv.charAt(1) === "A") {
                temp += "14";
            }
            else if (abbv.charAt(1) === "X") {
                temp += "10";
            }
            else if (abbv.charAt(1) === "J") {
                temp += "11";
            }
            else if (abbv.charAt(1) === "Q") {
                temp += "12";
            }
            else if (abbv.charAt(1) === "K") {
                temp += "13";
            }
            else {
                temp += abbv.charAt(1);
            }

            return temp;
        }
        else {
            if (abbv.charAt(1) === "A") {
                temp = "Ace";
            }
            else if (abbv.charAt(1) === "X") {
                temp = "Ten";
            }
            else if (abbv.charAt(1) === "J") {
                temp = "Jack";
            }
            else if (abbv.charAt(1) === "Q") {
                temp = "Queen";
            }
            else if (abbv.charAt(1) === "K") {
                temp = "King";
            }
            else {
                temp = abbv.charAt(1);
            }

            temp += " of ";

            if (abbv.charAt(0) === "S") {
                temp += "Spades";
            }
            else if (abbv.charAt(0) === "H") {
                temp += "Hearts";
            }
            else if (abbv.charAt(0) === "C") {
                temp += "Clubs";
            }
            else if (abbv.charAt(0) === "D") {
                temp += "Diamonds";
            }

            return temp;
        }
    }
}