/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Computer extends Player {

    /**
     * Computer(), The Constructor for the Computer Class which is an extension of the Player Class
     */
    Computer() {
        this.mPlayerHand = new Array();
        this.mPlayerPile = new Array();
        this.mScore = 0;
        this.mRoundScore = 0;
        this.mNumSpades = 0;
    }


    /**
     * executeMove(), Take in the suggestedMove and completes the move that has been suggested by the findNextMove() function in the player class
     * @param suggestedMove The instance of the class that was set by the findNextMove() function     
     * @param move The instance of the move class, so we can set the move, using what was suggested
     * @param table Access to the table so we can make changes as we execute the move that was suggested
     */
    executeMove(suggestedMove, move, table) {
        // Store the move suggestion so we do not have at access it multiple times
        var suggestion = suggestedMove.getSuggestion();

        // Setting Hand Card
        var handCard = suggestedMove.getHandCard();
        
        // Loop through the players hand to find the matching card
        for (var i = 0; i < this.handLength(); i++) {
            if (this.mPlayerHand[i].getAbbv() == handCard) {
                move.setHandCard(this.mPlayerHand[i]);
            }
        }

        // Setting Table Builds
        // Loop through the builds on the table to find the matching builds
        for (var i = 0; i < table.tableBuildLength(); i++) {
            for (var j = 0; j < suggestedMove.suggestedMoveTableBuildLength(); j++) {
                if (table.getTableBuildAtIndex(i).getAbbv().charAt(1) == suggestedMove.suggestedMoveGetTableBuild(j).charAt(1)) {
                    move.moveAddTableBuild(table.getTableBuildAtIndex(i));
                }
            }
        }

        // Setting Table Cards
        // Loop through the loose cards on the table to find the matching cards
        for (var i = 0; i < table.tableCardLength(); i++) {
            for (var j = 0; j < suggestedMove.suggestedMoveTableCardLength(); j++) {
                if (table.getTableCardAtIndex(i).getAbbv() == suggestedMove.suggestedMoveGetTableCard(j)) {
                    move.moveAddTableCard(table.getTableCardAtIndex(i));
                }
            }
        }

        // Create A Build
        if (suggestion === 1) {
            return this.createBuild(move, table);
        }
        // Create A Multi-Build
        else if (suggestion === 2) {
            return this.createMultiBuild(move, table);
        }
        // Extend An Opponets Build
        else if (suggestion === 3) {
            return this.createExtendedBuild(move, table);
        }
        // Caputre Builds & Cards From The Table
        else if (suggestion === 4) {
            return this.captureCards(move, table);
        }
        // Trail A Card
        else if (suggestion === 5) {
            return this.trailCard(move, table);
        }
        // Error
        else {
            console.log("ERROR - [Computer] executeMove()");
        }
    }
}