class Round {

    Round() {
        this.mDeck;
        this.mHuman;
        this.mComputer;
        this.mTable;
        this.mMove;
        this.mConsoleLog;
    }

    setMembers(deck, human, computer, table, move, consoleLog) {
        this.mDeck = deck;
        this.mHuman = human;
        this.mComputer = computer;
        this.mTable = table;
        this.mMove = move;
        this.mConsoleLog = consoleLog;
    }

    initalizeRound() {
        this.mDeck.initializeDeck();
        this.mConsoleLog.initLogText("New Deck: " + '<br>' + this.mDeck.deckToString());

        this.dealInitalCards();
    }

    initalizeNextRound() {
        this.mDeck.initializeDeck();
        this.mConsoleLog.addToLogText("New Deck: " + '<br>' + this.mDeck.deckToString());

        this.dealInitalCards();
    }

    dealInitalCards() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (i == 0) {
                    this.mHuman.addCardToHand(this.mDeck.dealCard());
                }
                else if (i == 1) {
                    this.mComputer.addCardToHand(this.mDeck.dealCard());
                }
                else if (i == 2) {
                    this.mTable.addCardToTable(this.mDeck.dealCard());
                }
                else {
                    console.log("ERROR - In Dealing Cards");
                }
            }
        }
    }

    dealCards() {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 4; j++) {
                if (i == 0) {
                    this.mHuman.addCardToHand(this.mDeck.dealCard());
                }
                else if (i == 1) {
                    this.mComputer.addCardToHand(this.mDeck.dealCard());
                }
                else {
                    console.log("ERROR");
                }
            }
        }
    }

    recordPlayerScores() {
        const SCORE_LARGEST_PILE = 3;
        const SCORE_MOST_SPADES = 1;
        const SCORE_10_DIAMONDS = 2;
        const SCORE_2_SPADES = 1;
        const SCORE_ACE = 1;
    
        // Round Scores for both players
        var humanRoundScore = 0;
        var computerRoundScore = 0;

        // Number of Spades for both players
        var humanSpades = 0;
        var computerSpades = 0;

        // Reset the Human's round score and number of spades
        this.mHuman.setRoundScore(0);
        this.mHuman.setNumSpades(0);

        // Reset the Computer's round score and number of spades
        this.mComputer.setRoundScore(0);
        this.mComputer.setNumSpades(0);


        // Check for who has the Largest Pile
        // Human has the largest pile
        if (this.mHuman.pileLength() > this.mComputer.pileLength()) {
            humanRoundScore += SCORE_LARGEST_PILE;
        }
        // Computer has the largest pile
        else if (this.mHuman.pileLength() < this.mComputer.pileLength()) {
            computerRoundScore += SCORE_LARGEST_PILE;
        }
        // Both players have the same pile size
        else {
            // Nobody Gets Any Points
        }


        // Check for who has the most most spade cards & the 10 of diamonds & the 2 of spades
        // Check the Human's Pile
        for (var i = 0; i < this.mHuman.pileLength(); i++) {
            // Check if the suit of the card is Spades
            if (this.mHuman.getPileCardAtIndex(i).getSuit() == 'S') {
                // Increase the Human's Sapdes count
                humanSpades++;
                // Check if the Spades card is the 2 of Spades
                if (this.mHuman.getPileCardAtIndex(i).getAbbv() == "S2") {
                    // Human gets the points for the 2 of Spades
                    humanRoundScore += SCORE_2_SPADES;
                }
            }

            // Check if the card is the 10 of Diamonds
            if (this.mHuman.getPileCardAtIndex(i).getAbbv() == "DX") {
                humanRoundScore += SCORE_10_DIAMONDS;
            }

            // Check if the card is an Ace
            if (this.mHuman.getPileCardAtIndex(i).getValue() == 1) {
                humanRoundScore += SCORE_ACE;
            }
        }
        // Check the Computer's Pile
        for (var j = 0; j < this.mComputer.pileLength(); j++) {
            // Check if the suit of the Card is Spades
            if (this.mComputer.getPileCardAtIndex(j).getSuit() == 'S') {
                // Inscrease the Computer's Spades count
                computerSpades++;
                // Check if the Spades card is the 2 of Spades
                if (this.mComputer.getPileCardAtIndex(j).getAbbv() == "S2") {
                    // Computer gets the points for having the 2 of Spades
                    computerRoundScore += SCORE_2_SPADES;
                }
            }

            // Check if the card is the 10 of Diamonds
            if (this.mComputer.getPileCardAtIndex(j) == "DX") {
                // The computer gets the points for having the 10 of Diamonds
                computerRoundScore += SCORE_10_DIAMONDS;
            }

            // Check if the card is an Ace
            if (this.mComputer.getPileCardAtIndex(j).getValue() == 1) {
                // The computer gets the points for having an Ace
                computerRoundScore += SCORE_ACE;
            }
        }

        // Compare both players number of Spades
        // The human has the most Spades
        if (humanSpades > computerSpades) {
            // Human gets the points for having the most spades
            humanRoundScore += SCORE_MOST_SPADES;
        }
        // The computer has the most Spades
        else if (humanSpades < computerSpades) {
            // Computer gets the points for having the most Spades
            computerRoundScore += SCORE_MOST_SPADES;
        }
        // Spades count is TIED
        else {
            // Nobody gets any points
        }


        // Set the Number of Spades for both Players
        this.mHuman.setNumSpades(humanSpades);
        this.mComputer.setNumSpades(computerSpades);

        // Set the Round Scores for both Player's
        this.mHuman.setRoundScore(humanRoundScore);
        this.mComputer.setRoundScore(computerRoundScore);

        // Update the Tournament Scores for Both Player's
        this.mHuman.addToTournamentScore(humanRoundScore);
        this.mComputer.addToTournamentScore(computerRoundScore);
    }
}