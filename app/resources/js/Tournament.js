/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Tournament {

    Tournament() {
        this.mDeck;
        this.mHuman;
        this.mComputer;
        this.mTable;
        this.mMove;
        this.mConsoleLog;

        this.mCurrentPlayer;
        this.mLastCapture;
        this.mHumanTurn;
        this.mRoundNumber;

        this.mCoinTossCall;
        this.mCoinTossResult;
        this.mCoinTossWinner;
    }

    setMembers(deck, human, computer, table, move, consoleLog, roundNum) {
        this.mDeck = deck;
        this.mHuman = human;
        this.mComputer = computer;
        this.mTable = table;
        this.mMove = move;
        this.mConsoleLog = consoleLog;

        this.mRoundNumber = roundNum;
    }

    getRoundNumber() {
        return this.mRoundNumber;
    }

    setRoundNumber(num) {
        this.mRoundNumber = num;
    }

    incRoundNumber() {
        this.mRoundNumber++;
    }

    getHumanTurn() {
        return this.mHumanTurn;
    }

    changeHumanTurn() {
        if (this.mHumanTurn) {
            this.mHumanTurn = false;
        }
        else {
            this.mHumanTurn = true;
        }
    }

    setHumanTurn(turn) {
        this.mHumanTurn = turn;
    }

    setLastCapture(player) {
        this.mLastCapture = player;
    }

    getLastCapture() {
        return this.mLastCapture;
    }

    setCoinCall(call) {
        this.mCoinTossCall = call;
    }

    getCoinCall() {
        return this.mCoinTossCall;
    }

    getCoinResult() {
        return this.mCoinTossResult;
    }

    getCoinTossWinner() {
        return this.mCoinTossWinner;
    }

    runCoinToss(consoleLog) {
        var text = "Coin Toss:<br>";
        var coin = Math.floor(Math.random() * 2);
        this.mCoinTossResult = coin;

        console.log("Coin: " + coin);
        console.log("Call: " + this.mCoinTossCall);

        if (coin == 0) {
            text += "The Coin Was Heads<br>";
        }
        else {
            text += "The Coin Was Tails<br>";
        }

        if (this.mCoinTossCall == 0) {
            text += "The user called Heads<br>";
        }
        else {
            text += "The user called Tails<br>"
        }

        if (this.mCoinTossCall == coin) {
            this.mCurrentPlayer = "Human";
            this.mCoinTossWinner = true;
            this.mHumanTurn = true;
            text += "The Human won the coin toss";
        }
        else if (this.mCoinTossCall != coin) {
            this.mCurrentPlayer = "Computer";
            this.mCoinTossWinner = false;
            this.mHumanTurn = false;
            text += "The Computer won the coin toss";
        }

        consoleLog.addToLogText(text);
    }

    initalizeDeck() {
        this.mDeck.initializeDeck();
    }

    initalizeScores() {
        this.mHuman.setScore(0);
        this.mComputer.setScore(0);
    }

    boardToString() {
        var temp = "";
        var tab = "   ";

        temp = "------------------------------------------------------------------------------------------------------------------------------------------------------" + "<br>";
        temp += "Round: " + this.getRoundNumber() + "<br><br>";

        temp += "Computer:<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Score: " + this.mComputer.getTournamentScore() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Hand: " + this.mComputer.handToString() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Pile: " + this.mComputer.pileToString() + "<br><br>";

        temp += "Human:<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Score: " + this.mHuman.getTournamentScore() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Hand: " + this.mHuman.handToString() + "<br>";
        temp += "\u00A0\u00A0\u00A0\u00A0" + "Pile: " + this.mHuman.pileToString() + "<br><br>";

        temp += "Table: " + this.mTable.tableLooseCardsToString() + "<br><br>";

        temp += "Build Owner: " + "<br><br>";

        temp += "Last Capture: " + this.getLastCapture() + "<br><br>";

        temp += "Deck: " + this.mDeck.deckToString() + "<br><br>";

        temp += "Next Player: " + "<br>";
        temp += "------------------------------------------------------------------------------------------------------------------------------------------------------";

        return temp;
    }
}