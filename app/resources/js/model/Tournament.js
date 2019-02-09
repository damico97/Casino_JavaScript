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

        temp = "------------------------------------------------------------------------------------------------------------------------------------------------------" + "<br>";
        temp += this.serializeGame();
        temp += "------------------------------------------------------------------------------------------------------------------------------------------------------";

        return temp;
    }

    serializeGame() {
        var temp = "";

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

        return temp;
    }

    loadCaseFile(fileName) {
        var fileString;

        var client = new XMLHttpRequest();
        client.open('GET', fileName, false);
        client.onreadystatechange = function() {
            fileString = client.responseText;
        };
        client.send();

        this.loadFile(fileString);
    }

    loadFile(fileString) {
        var line = "";
        var shortLine = "";

        var buildCards = new Array();

        // Loop while there still is information in the fileString
        while(fileString) {
            // Get the next line of the file
            line = fileString.substring(0, fileString.indexOf("\n\n"));

            // Getting and Setting the Round Number
            if (line.substring(0, line.indexOf(":")) === "Round") {
                // Trim the string
                shortLine = line.substring(line.indexOf(":") + 1);
                shortLine = shortLine.replace(/\s/g, "");
                shortLine = shortLine.replace(/\n/, "");

                // Set the Round Number
                this.setRoundNumber(parseInt(shortLine));

                // Reset the Local Strings
                line = "";
                shortLine = "";

                // Move the file up one line
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Getting and Setting the Computer's Information
            else if (line.substring(0, line.indexOf(":")) === "Computer") {
                // Get the next line
                line = line.substring(line.indexOf(":") + 2, line.length);
                line += "\n";
                
                // Loop through the 3 sub lins in the Computer's section
                for (var i = 0; i < 3; i++) {
                    // get the Next Line
                    shortLine = line.substring(0, line.indexOf("\n"));
                    
                    // Setting the Score
                    if (shortLine.substring(0, shortLine.indexOf(":")) === "   Score") {
                        // Trim the string
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Set the Score
                        this.mComputer.setScore(parseInt(shortLine));

                        // Get the next line
                        line = line.substring(line.indexOf("\n") + 4, line.length);
                    }
                    // Setting the Hand
                    else if (shortLine.substring(0, shortLine.indexOf(":")) === "Hand") {
                        // Trim the String
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Add a space between each card
                        shortLine = shortLine.replace(/(\w{2})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
                        shortLine += " ";

                        // Check if the Line is Blankd
                        if (shortLine.replace(/\s/g, '').length) {
                            var card;
                            while(shortLine) {
                                // Get the Abbrevation of the Card
                                card = shortLine.substring(0, shortLine.indexOf(" "));
                                
                                // Create the new card and add it to the Computer's Hand
                                var nCard = new Card();
                                nCard.newCardFromAbbv(card);
                                this.mComputer.addCardToHand(nCard);

                                // Remove the card that was just added from the line
                                shortLine = shortLine.substring(shortLine.indexOf(" ") + 1, shortLine.length);
                            }

                            // Get the next line
                            line = line.substring(line.indexOf("\n") + 4, line.length);
                        }
                    }
                    // Setting the Pile
                    else if (shortLine.substring(0, shortLine.indexOf(":")) === "Pile") {
                        // Trim the String
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Add a space between each card
                        shortLine = shortLine.replace(/(\w{2})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
                        shortLine += " ";

                        // Check if the Line is Blankd
                        if (shortLine.replace(/\s/g, '').length) {
                            var card;
                            while(shortLine) {
                                // Get the Abbrevation of the Card
                                card = shortLine.substring(0, shortLine.indexOf(" "));
                                
                                // Create the new card and add it to the Computer's Hand
                                var nCard = new Card();
                                nCard.newCardFromAbbv(card);
                                this.mComputer.addCardToPile(nCard);

                                // Remove the card that was just added from the line
                                shortLine = shortLine.substring(shortLine.indexOf(" ") + 1, shortLine.length);
                            }

                            // Get the next line
                            line = line.substring(line.indexOf("\n") + 4, line.length);
                        }
                    }
                }
                // Get the next line
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Getting and Setting the Human's Information
            else if (line.substring(0, line.indexOf(":")) === "Human") {
                // Get the next line
                line = line.substring(line.indexOf(":") + 2, line.length);
                line += "\n";
                
                // Loop through the 3 sub lins in the Computer's section
                for (var i = 0; i < 3; i++) {
                    // get the Next Line
                    shortLine = line.substring(0, line.indexOf("\n"));
                    
                    // Setting the Score
                    if (shortLine.substring(0, shortLine.indexOf(":")) === "   Score") {
                        // Trim the string
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Set the Score
                        this.mHuman.setScore(parseInt(shortLine));

                        // Get the next line
                        line = line.substring(line.indexOf("\n") + 4, line.length);
                    }
                    // Setting the Hand
                    else if (shortLine.substring(0, shortLine.indexOf(":")) === "Hand") {
                        // Trim the String
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Add a space between each card
                        shortLine = shortLine.replace(/(\w{2})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
                        shortLine += " ";

                        // Check if the Line is Blankd
                        if (shortLine.replace(/\s/g, '').length) {
                            var card;
                            while(shortLine) {
                                // Get the Abbrevation of the Card
                                card = shortLine.substring(0, shortLine.indexOf(" "));
                                
                                // Create the new card and add it to the Computer's Hand
                                var nCard = new Card();
                                nCard.newCardFromAbbv(card);
                                this.mHuman.addCardToHand(nCard);

                                // Remove the card that was just added from the line
                                shortLine = shortLine.substring(shortLine.indexOf(" ") + 1, shortLine.length);
                            }

                            // Get the next line
                            line = line.substring(line.indexOf("\n") + 4, line.length);
                        }
                    }
                    // Setting the Pile
                    else if (shortLine.substring(0, shortLine.indexOf(":")) === "Pile") {
                        // Trim the String
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Add a space between each card
                        shortLine = shortLine.replace(/(\w{2})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
                        shortLine += " ";

                        // Check if the Line is Blankd
                        if (shortLine.replace(/\s/g, '').length) {
                            var card;
                            while(shortLine) {
                                // Get the Abbrevation of the Card
                                card = shortLine.substring(0, shortLine.indexOf(" "));
                                
                                // Create the new card and add it to the Computer's Hand
                                var nCard = new Card();
                                nCard.newCardFromAbbv(card);
                                this.mHuman.addCardToPile(nCard);

                                // Remove the card that was just added from the line
                                shortLine = shortLine.substring(shortLine.indexOf(" ") + 1, shortLine.length);
                            }

                            // Get the next line
                            line = line.substring(line.indexOf("\n") + 4, line.length);
                        }
                    }
                }
                // Load the Next Line from the File
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Loading the Table Information
            else if (line.substring(0, line.indexOf(":")) === "Table") {
                // Get the Next Line
                shortLine = line.substring(line.indexOf(":") + 2);

                // If the table includes builds, remove them
                if (shortLine.includes("[") && shortLine.includes("]")) {
                    shortLine = shortLine.substring(shortLine.lastIndexOf("]") + 3, shortLine.length);
                }

                // Trim the string
                shortLine = shortLine.replace(/\n/g, "");
                shortLine += " ";
                shortLine = shortLine.replace(/\s/g, " ");

                // Check if the string doesn't contain any information
                if (shortLine.replace(/\s/g, '').length) {
                    // Local string for the cards
                    var card;
                    // Loop while there are cards left in the string create and load all the cards to the table
                    while (shortLine) {
                        // Get the abbrevation of the card
                        card = shortLine.substring(0, shortLine.indexOf(" "));

                        // Create and add the new card to the table
                        var nCard = new Card();
                        nCard.newCardFromAbbv(card);
                        this.mTable.addCardToTable(nCard);

                        // Remove the card that was just created
                        shortLine = shortLine.substring(shortLine.indexOf(" ") + 1, shortLine.length);
                    }
                }
                // Load the Next Line from the File
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Loading the Build Information
            else if (line.substring(0, line.indexOf(":")) === "Build Owner") {
                shortLine = line.substring(line.indexOf(":") + 2);

                if (shortLine.replace(/\s/g, '').length) {
                    var buildString = "";
                    var shortBuildString = "";
                    var card = "";
                    var count = 0;

                    while (shortLine) {
                        count = 0;

                        var nBuild = new Build();

                        buildString = shortLine.substring(shortLine.indexOf("[ ") + 2, shortLine.indexOf(" ]"));

                        while (buildString) {
                            shortBuildString = buildString.substring(buildString.indexOf("[") + 1, buildString.indexOf("]"));
                            shortBuildString += " ";
                            shortBuildString = shortBuildString.replace(/\s/g, " ");

                            buildCards.push(new Array());

                            while (shortBuildString) {
                                card = shortBuildString.substring(0, shortBuildString.indexOf(" "));

                                buildCards[count].push(card);

                                // Remove the card that was just added
                                shortBuildString = shortBuildString.substring(shortBuildString.indexOf(" ") + 1, shortBuildString.length);
                            }

                            // Increase the count
                            count++;
                            // Get the next section of information
                            buildString = buildString.substring(buildString.indexOf("]") + 1, buildString.length);
                        }

                        nBuild.setBuildFromString(buildCards);

                        shortLine = shortLine.substring(shortLine.indexOf("] ]") + 4, shortLine.length);

                        var owner = "";
                        if (shortLine.includes("[")) {
                            owner = shortLine.substring(0, shortLine.indexOf("["));
                        }
                        else {
                            owner = shortLine;
                        }

                        owner = owner.replace(/\n+/g, "");
                        owner = owner.replace(/\s+/g, "");

                        nBuild.setBuildOwner(owner);
                        nBuild.findBuildValue();

                        this.mTable.addBuildToTable(nBuild);

                        buildCards = [];

                        if (shortLine.includes("[")) {
                            shortLine = shortLine.substring(shortLine.indexOf("["), shortLine.length);
                        }
                        else {
                            shortLine = "";
                        }
                    }
                }
                // Load the Next Line from the File
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Loading the Last Capture Information
            else if (line.substring(0, line.indexOf(":")) === "Last Capturer") {
                // Parse and remove all the unneeded characters
                shortLine = line.substring(line.indexOf(":") + 1);
                shortLine = shortLine.replace(/\s+/g, "");
                shortLine = shortLine.replace(/\n+/g, "");

                //Set the Last Capture
                this.setLastCapture(shortLine);
                // Get the next line from the fileString
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
                break;
            }
            // Loading the Deck Information
            else if (line.substring(0, line.indexOf(":")) === "Deck") {
                // Parse and remove all the unneeded characters from the string
                shortLine = line.substring(line.indexOf(":") + 2);
                shortLine = shortLine.replace(/\n+/g, "");
                shortLine += " ";
                shortLine = shortLine.replace(/\s+/g, " ");

                // Check if the line is blank
                if (shortLine.replace(/\s/g, '').length) {
                    var card;
                    // Loop while the line is NOT empty
                    while (shortLine) {
                        // Get and add to the vector of the first Card in the line
                        card = shortLine.substring(0, shortLine.indexOf(" "));
                        
                        var nCard = new Card();
                        nCard.newCardFromAbbv(card);
                        this.mDeck.addCardToDeck(nCard);

                        // Remove the first card that was just added
                        shortLine = shortLine.substring(shortLine.indexOf(" ") + 1, shortLine.length);
                    }
                }
                // Get the next line from the fileString
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Load the next player information
            else if (line.substring(0, line.indexOf(":")) === "Next Player") {
                // Parse and clean the string so we only have the needed information
                shortLine = line.substring(line.indexOf(":") + 1);
                shortLine = shortLine.replace(/\s+/g, "");
                shortLine = shortLine.replace(/\n+/g, "");

                // Check if it's the human turn
                if (shortLine === "Human") {
                    // If so set the humanTurn
                    this.setHumanTurn(true);
                }
                else {
                    // Not the human's turn
                    this.setHumanTurn(false);
                }

                // Clear out the fileString to end the loop
                fileString = "";
            }
            else {
                console.log("ERROR");
            }
        }
    }

    loadDeckFile() {
        var cards = new Array();
        var shortLine = "";

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
                shortLine += " ";
                shortLine = shortLine.replace(/\s/g, " ");

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