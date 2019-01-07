class Tournament {
    Tournament() {
        this.mDeck;
        this.mHuman;
        this.mComputer;
        this.mTable;
        this.mMove;
        this.mConsoleLog;

        this.mHumanTurn;
    }

    setMembers(deck, human, computer, table, move, consoleLog, humanTurn) {
        this.mDeck = deck;
        this.mHuman = human;
        this.mComputer = computer;
        this.mTable = table;
        this.mMove = move;
        this.mConsoleLog = consoleLog;
        
        this.mHumanTurn = humanTurn;
    }

    initalizeDeck() {
        this.mDeck.initializeDeck();
    }

    initalizeScores() {
        this.mHuman.setScore(0);
        this.mComputer.setScore(0);
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

    boardToString() {
        var temp = "";
        var tab = "   ";

        temp = "------------------------------------------------------------------------------------------------------------------------------------------------------" + "<br>";
        temp += "Round: " + "<br><br>";

        temp += "Computer:<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Score: " + this.mComputer.getScore() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Hand: " + this.mComputer.handToString() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Pile: " + this.mComputer.pileToString() + "<br><br>";

        temp += "Human:<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Score: " + this.mHuman.getScore() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Hand: " + this.mHuman.handToString() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Pile: " + this.mHuman.pileToString() + "<br><br>";

        temp += "Table: " + this.mTable.tableLooseCardsToString() + "<br><br>";

        temp += "Build Owner: " + "<br><br>";

        temp += "Last Capture: " + "<br><br>";

        temp += "Deck: " + this.mDeck.deckToString() + "<br><br>";

        temp += "Next Player: " + "<br>";
        temp += "------------------------------------------------------------------------------------------------------------------------------------------------------";

        return temp;
    }
}