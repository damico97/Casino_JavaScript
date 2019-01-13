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
}