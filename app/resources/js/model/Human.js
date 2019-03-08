/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Human extends Player {

    /**
     * Human(), The Constructor for the Human Class
     * @param None
     */
    Human() {
        this.mPlayerHand = new Array();
        this.mPlayerPile = new Array();
        this.mScore = 0;
        this.mRoundScore = 0;
        this.mNumSpades = 0;
    }


    /**
     * getHelp(), This function will convert the suggestedMove class that was set in the findNextMove() fucntion into words so the User can read it
     * @param suggestedMove, the instance of the class that was set by the findNextMove() function and contains the move suggestion
     * @returns A string with the suggested move spelled out for the user to read
     */
    getHelp(suggestedMove) {
        // Local string to assemble the suggestion
        var temp = "";

        // A New Build Suggestion
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
        // A Multi-Build Suggestion
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
        // A Extended Build Suggestion
        else if (suggestedMove.getSuggestion() === 3) {
            temp = "Yout Should Extend A Build\n";
            temp += "Extend the build of " + this.convertAbbvToName(suggestedMove.suggestedMoveGetTableBuild(0)) + " on the table\n";

            temp += "Play the " + this.convertAbbvToName(suggestedMove.getHandCard()) + " from your hand\n";
            temp += "With....\n";

            return temp;
        }
        // A Capture Suggestion
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
        // A Trail Suggestion
        else if (suggestedMove.getSuggestion() === 5) {
            temp = "You Have To Trail A Card\n";
            temp += "You should trail the " + this.convertAbbvToName(suggestedMove.getHandCard()) + "\n";

            return temp;
        }
        // Error
        else {
            console.log("ERROR - [Human] getHelp()");
        }
    }


    /**
     * converAbbvToName(), Takes the abbrevation that is used in the suggestedMove class and converts it to a full name to be using in the suggestion alert box
     * @param abbv, the Abbrevation of the item on the table to be coverted
     * @return A string with the full name
     */
    convertAbbvToName(abbv) {
        // Local string to assemble the name
        var temp = "";

        // If the item is a build
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
        // The item is a Card
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