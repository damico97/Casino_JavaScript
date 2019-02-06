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

    getNextPlayer() {
        if (this.mHumanTurn) {
            return "Computer";
        }
        else {
            return "Human";
        }
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

        temp += "Table: " + this.mTable.tableBuildsToString() + "  " + this.mTable.tableLooseCardsToString() + "<br><br>";

        temp += "Build Owner: ";
        for (var i = 0; i < this.mTable.tableBuildLength(); i++) {
            temp += this.mTable.getTableBuildAtIndex(i).buildToString() + " ";
            temp += this.mTable.getTableBuildAtIndex(i).getBuildOwner() + "  ";
        }
        temp += "<br><br>";

        temp += "Last Capture: " + this.getLastCapture() + "<br><br>";

        temp += "Deck: " + this.mDeck.deckToString() + "<br><br>";

        temp += "Next Player: " + this.getNextPlayer() + "<br>";
        temp += "------------------------------------------------------------------------------------------------------------------------------------------------------";

        return temp;
    }

    saveGameToFile(fileName) {
        /*
        require(['./js/scripts/fs.js'], function (js) {
            //foo is now loaded.
            var fs = require('fs');

            fs.writeFile('./saveFiles/demo.txt', 'This is a test', function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("Success");
            });
        });
        */
        /*
        var fs = require('./js/scripts/fs.js');

        fs.writeFile('./saveFiles/demo.txt', 'This is a test', function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("Success");
        });
        */
    }

    loadDeckFile() {
        var cards = new Array();
        var shortLine = "";

        //var fileString = "Deck: S5 C2 DK C7 H3 H5 SJ S3 D5 D7 HJ S6 H4 SQ C8 D3 D9 HQ HK CA DQ S7 C9 HA CK H9 DA CJ C3 SX D2 HX CQ C4 D8 D4 S4 H2 S2 C6 SK C5 DX H6 SA H8 DJ S8 CX D6 H7 S9\n\n";
        //var fileString = "Deck: S5 C2 DK C7 H3 H5 SJ S3 C4 D8 D4 S4 H2 S2 C6 SK C5 DX H6 SA H8 DJ S8 CX D6 H7 S9\n\n";
        var fileString;

        var client = new XMLHttpRequest();
        client.open('GET', '/assets/deck.txt' , false);
        client.onreadystatechange = function() {
            fileString = client.responseText;
        };
        client.send();

        while(fileString) {
            if (fileString.substring(0, fileString.indexOf(":")) === "Deck") {
                shortLine = fileString.substring(fileString.indexOf(":") + 2);
                shortLine = shortLine.substring(0, shortLine.length - 2);
                //shortLine.replace("/\n/g", "\0");
                shortLine += " ";
                shortLine.replace("/\s/g", " ");

                if (!shortLine.match("/\S/g")) {
                    var card = "";

                    while (shortLine) {
                        card = shortLine.substring(0, shortLine.indexOf(" ", 0));

                        if (undefined === cards) {
                            cards = new Array();
                            cards[0] = card;
                        }
                        else {
                            cards.push(card);
                        }

                        shortLine = shortLine.substring(shortLine.indexOf(" ", 2) + 1, shortLine.length);

                        if (shortLine.match("/\s/")) {
                            shortLing = "";
                        }
                    }

                    for (var i = 0; i < cards.length; i++) {
                        console.log(cards[i]);
                        var nCard = new Card();
                        nCard.newCardFromAbbv(cards[i]);
                        this.mDeck.addCardToDeck(nCard);
                    }
                }
                fileString = "";
            }
        }

        return;
    }
}