/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Build {
    
    /**
     * Build(), The Constructor of the Build Class
     */
    Build() {
        this.mBuildValue = 0;
        this.mBuildOwner = "";
        this.mBuildCards = new Array();
    }


    /**
     * getAbbv(), Creates a Abbrevation of the Build to be used in the suggested move class
     * @return The abbrevation of the build
     */
    getAbbv() {
        // B for Build
        var temp = "B";

        // Add the Value of the Build
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


    /**
     * checkMulti(), Checks if the build is a Multi-Build
     */
    checkMulti() {
        // Check if the size of the first dimensions of the array is greater than 1
        if (this.buildLength() > 1) {
            // Build is a Multi-Build
            return true;
        }
        else {
            // Build is not a Multi-Build
            return false;
        }
    }


    /**
     * setBuildValue(), Takes in the new value for the build, and sets the value
     * @param nValue -> The new value for the build
     */
    setBuildValue(nValue) {
        this.mBuildValue = nValue;
    }


    /**
     * getBuildValue(), Returns the value of the build
     * @return The value of the build
     */
    getBuildValue() {
        return this.mBuildValue;
    }


    // setBuildOwner(), Takes in the name of the build owner and sets it
    setBuildOwner(nOwner) {
        this.mBuildOwner = nOwner;
    }


    /**
     * getBuildOwner(), Returns the name of the owner of the build
     * @return The name of the build owner
     */
    getBuildOwner() {
        return this.mBuildOwner;
    }


    /**
     * exentBuild(), Takes in a new Array of cards to be used to extend the build
     * @param nCards -> The new array of cards to be added to the build
     */
    extendBuild(nCards) {
        // Add the new array as the next dimension of the build cards
        this.mBuildCards[0] = this.mBuildCards[0].concat(nCards);
    }


    /**
     * addToBuildCards(), Takes in a new card and adds it to the first dimension of the build array
     * @param nCard -> The new card to be added to the array
     */
    addToBuildCards(nCard) {
        // Check if the card array is undefined, if so initialize the array and add the card
        if (undefined === this.mBuildCards) {
            this.mBuildCards = new Array();
            this.mBuildCards[0] = nCard;
        }
        // Push the card onto the array
        else {
            this.mBuildCards.push(nCard);
        }
    }


    /**
     * getBuildCards(), Returns all the cards from the build in one 1D array to be used for capturing a build
     * @return A 1D array of all the build cards
     */
    getBuildCards() {
        // New array to return all the cards in
        var temp = new Array();

        // Loop through the 2D array
        for (var i = 0; i < this.mBuildCards.length; i++) {
            // Add all the cards from each dimension to the temp array
            temp = temp.concat(this.mBuildCards[i]);
        }
        return temp;
    }


    /**
     * buildLength(), Returns the length of the buildCards array
     * @return The length of the array
     */
    buildLength() {
        // Check if the array is initialized
        if (undefined === this.mBuildCards) {
            // Return Length of 0
            return 0;
        }
        // Return the Length of the Array
        else {
            return this.mBuildCards.length;
        }
    }


    /**
     * findBuildValue(), Calculates the build value, used when loading serialization
     */
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


    /**
     * setBuildFromString(), Takes in a array of abbrevations and creates a build based off of it
     * @param nCardList -> An Array of abbrevations of the cards to make up the build
     */
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


    /**
     * buildToString(), Converts the build to text form
     * @return The string with the build in text form
     */
    buildToString() {
        // String to assemble the build
        var temp = "";

        // First Bracket
        temp = "[ ";
        // Loop through the first dimension of the array
        for (var i = 0; i < this.buildLength(); i++) {
            // Second Bracket
            temp += "[";
            // Loop through the second dimension of the array
            for (var j = 0; j < this.mBuildCards[i].length; j++) {
                // Add the abbrevation of the card
                temp += this.mBuildCards[i][j].getAbbv();
                // If not the last card, add a space
                if (j != this.mBuildCards[i].length - 1) {
                    temp += " ";
                }
            }
            // First end bracket
            temp += "] ";
        }
        // Second end bracket
        temp += "]";
    
        return temp;
    }
}