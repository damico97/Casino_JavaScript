/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Computer extends Player {

    Computer() {
        this.mPlayerHand = new Array();
        this.mPlayerPile = new Array();
        this.mScore = 0;
        this.mRoundScore = 0;
        this.mNumSpades = 0;
    }

    executeMove(suggestedMove, move, table) {
        var suggestion = suggestedMove.getSuggestion();

        // Setting Hand Card
        var handCard = suggestedMove.getHandCard();
        
        for (var i = 0; i < this.handLength(); i++) {
            if (this.mPlayerHand[i].getAbbv() == handCard) {
                move.setHandCard(this.mPlayerHand[i]);
            }
        }

        // Setting Table Builds
        for (var i = 0; i < table.tableBuildLength(); i++) {
            for (var j = 0; j < suggestedMove.suggestedMoveTableBuildLength(); j++) {
                if (table.getTableBuildAtIndex(i).getAbbv().charAt(1) == suggestedMove.suggestedMoveGetTableBuild(j).charAt(1)) {
                    move.moveAddTableBuild(table.getTableBuildAtIndex(i));
                }
            }
        }

        // Setting Table Cards
        for (var i = 0; i < table.tableCardLength(); i++) {
            for (var j = 0; j < suggestedMove.suggestedMoveTableCardLength(); j++) {
                if (table.getTableCardAtIndex(i).getAbbv() == suggestedMove.suggestedMoveGetTableCard(j)) {
                    move.moveAddTableCard(table.getTableCardAtIndex(i));
                }
            }
        }

        if (suggestion === 1) {
            return this.createBuild(move, table);
        }
        else if (suggestion === 2) {
            return this.createMultiBuild(move, table);
        }
        else if (suggestion === 3) {
            return this.createExtendedBuild(move, table);
        }
        else if (suggestion === 4) {
            return this.captureCards(move, table);
        }
        else if (suggestion === 5) {
            return this.trailCard(move, table);
        }
        else {
            console.log("ERROR");
        }
    }
}