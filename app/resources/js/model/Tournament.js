/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Tournament {

    /**
     * Tournament(), The constructor for the Tournament Class
     */
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


    /**
     * setMembers(), Set the memeber variables of the Tournament Class
     * @param deck -> The Deck class instance
     * @param human -> The Human Player instance
     * @param computer -> The Computer Player instance
     * @param table -> The Table class instance 
     * @param move -> The Move class instance
     * @param consoleLog -> The ConsoleLog class instance
     * @param roundNum -> The Round Number
     */
    setMembers(deck, human, computer, table, move, consoleLog, roundNum) {
        // Set Member Variables
        this.mDeck = deck;
        this.mHuman = human;
        this.mComputer = computer;
        this.mTable = table;
        this.mMove = move;
        this.mConsoleLog = consoleLog;

        this.mRoundNumber = roundNum;
    }


    /**
     * resetTournament(), resets the the Deck, Table, and Both Players
     */
    resetTournament() {
        // Reset Everything
        this.mDeck.deckClear();
        this.mTable.clearTable();
        this.mHuman.resetPlayer();
        this.mComputer.resetPlayer();
    }


    /**
     * getRoundNumber(), Returns the Round Number
     * @return The round number
     */
    getRoundNumber() {
        return this.mRoundNumber;
    }


    /**
     * setRoundNumber(), Takes in a number to set the Round Number As
     * @param num -> The New round number
     */
    setRoundNumber(num) {
        this.mRoundNumber = num;
    }

    
    /**
     * incRoundNumber(), Increases the Round Number by One
     */
    incRoundNumber() {
        this.mRoundNumber++;
    }


    /**
     * getHumanTurn(), Returns the boolean if it's the Human's turn or not
     * @return Boolean, True if it's the Human's Turn, FALSE if not
     */
    getHumanTurn() {
        return this.mHumanTurn;
    }


    /**
     * changeHumanTurn(), Changes the Human Turns Boolean
     */
    changeHumanTurn() {
        // If it's the human turn, set it false
        if (this.mHumanTurn) {
            this.mHumanTurn = false;
        }
        // Set human turn to true
        else {
            this.mHumanTurn = true;
        }
    }


    /**
     * setHumanTurn(), Takes in a boolean wether if it's the humans turn or not
     * @param turn -> Wether it's the human's turn or not
     */
    setHumanTurn(turn) {
        this.mHumanTurn = turn;
    }


    /**
     * getNextPlayer(), Returns who the next player is, used for serialization
     * @return The name of the next player
     */
    getNextPlayer() {
        // If it's the humans turn
        if (this.mHumanTurn) {
            return "Human";
        }
        // If it's the computer turn
        else {
            return "Computer";
        }
    }


    /**
     * setLastCaputre(), Takes in the name of the player who made the last capture move
     * @param player -> The name of the player that made the last capture
     */
    setLastCapture(player) {
        this.mLastCapture = player;
    }


    /**
     * getLastCapture(), Returns the name of the player that made the last capture move
     * @return The name of the player
     */
    getLastCapture() {
        return this.mLastCapture;
    }

    
    /**
     * setCoinCall(), Set which side of the coin the player called for the coin toss
     * @param call -> The side of the coin the player called
     */
    setCoinCall(call) {
        this.mCoinTossCall = call;
    }


    /**
     * getCoinCall(), Returns the side of the coin the player called
     * @return The side of the coin
     */
    getCoinCall() {
        return this.mCoinTossCall;
    }


    /**
     * getCoinResult(), Return the result of the coin toss call
     * @return The result of the coin toss
     */
    getCoinResult() {
        return this.mCoinTossResult;
    }


    /**
     * getCoinTossWinner(), Returns the name of the player who own the coin toss
     * @return The name of the player of the winner of the toss
     */
    getCoinTossWinner() {
        return this.mCoinTossWinner;
    }


    /**
     * runCoinToss(),  Excutes the coin toss
     */
    runCoinToss(consoleLog) {
        var text = "Coin Toss:<br>";
        var coin = Math.floor(Math.random() * 2);
        this.mCoinTossResult = coin;

        // Get the coin from the flip
        if (coin == 0) {
            text += "The Coin Was Heads<br>";
        }
        else {
            text += "The Coin Was Tails<br>";
        }

        // Check if the user called the correct side
        if (this.mCoinTossCall == 0) {
            text += "The user called Heads<br>";
        }
        else {
            text += "The user called Tails<br>";
        }

        // Player won the toss
        if (this.mCoinTossCall == coin) {
            this.mCurrentPlayer = "Human";
            this.mCoinTossWinner = true;
            this.mHumanTurn = true;
            text += "The Human won the coin toss";
        }
        // Player loss the toss
        else if (this.mCoinTossCall != coin) {
            this.mCurrentPlayer = "Computer";
            this.mCoinTossWinner = false;
            this.mHumanTurn = false;
            text += "The Computer won the coin toss";
        }

        // Record the coin toss in the ConsoleLog
        consoleLog.addToLogText(text);
    }


    /**
     * initalizeDeck(), Initialize the deck
     */
    initalizeDeck() {
        this.mDeck.initializeDeck();
    }


    /**
     * initalizeScore(), Set both players scores to 0
     */
    initalizeScores() {
        this.mHuman.setScore(0);
        this.mComputer.setScore(0);
    }


    /**
     * boardToString(), Converts the board to string for the ConsoleLog, using the serializeGame() function
     */
    boardToString() {
        var temp = "";

        temp = "------------------------------------------------------------------------------------------------------------------------------------------------------" + "<br>";
        temp += this.serializeGame();
        temp += "------------------------------------------------------------------------------------------------------------------------------------------------------";

        return temp;
    }


    /**
     * serializeGame(), Covnerts the board to a string to be used for serialization or the boardToStringFunction()
     */
    serializeGame() {
        var temp = "";

        // Get Round Information
        temp += "Round: " + this.getRoundNumber() + "<br><br>";

        // Get Computer's Information
        temp += "Computer:<br>";
        temp += "\t" + "Score: " + this.mComputer.getTournamentScore() + "<br>";
        temp += "\t" + "Hand: " + this.mComputer.handToString() + "<br>";
        temp += "\t" + "Pile: " + this.mComputer.pileToString() + "<br><br>";

        // Get Human's Information
        temp += "Human:<br>";
        temp += "\t" + "Score: " + this.mHuman.getTournamentScore() + "<br>";
        temp += "\t" + "Hand: " + this.mHuman.handToString() + "<br>";
        temp += "\t" + "Pile: " + this.mHuman.pileToString() + "<br><br>";

        // Get The Table Information
        temp += "Table: " + this.mTable.tableBuildsToString() + " " + this.mTable.tableLooseCardsToString() + "<br><br>";

        // Get The Build Information
        temp += "Build Owner: ";
        for (var i = 0; i < this.mTable.tableBuildLength(); i++) {
            temp += this.mTable.getTableBuildAtIndex(i).buildToString() + " ";
            temp += this.mTable.getTableBuildAtIndex(i).getBuildOwner() + "  ";
        }
        temp += "<br><br>";

        // Get The Deck Information
        temp += "Deck: " + this.mDeck.deckToString() + "<br><br>";

        // Get The Next Player
        temp += "Next Player: " + this.getNextPlayer() + "<br><br>";

        return temp;
    }


    /**
     * loadCaseFile(), Takes in the case file name and opens it
     * @param fileName -> The Name of the case file to load
     */
    loadCaseFile(fileName) {
        // String with the infomation in the file
        var fileString;

        // Open the File
        var client = new XMLHttpRequest();
        client.open('GET', fileName, false);
        client.onreadystatechange = function() {
            // Store the contents of the file
            fileString = client.responseText;
        };
        client.send();

        // Load the case file
        this.loadFile(fileString);
    }


    /**
     * loadFile(), Takes in the string with file contents and parses it, and loads the information into the tournament
     * @param fileString -> The contents of the file
     */
    loadFile(fileString) {
        var line = "";
        var shortLine = "";

        var buildCards = new Array();

        fileString = fileString.replace(/\t/g, "");

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
                    if (shortLine.substring(0, shortLine.indexOf(":")) === "Score") {
                        // Trim the string
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Set the Score
                        this.mComputer.setScore(parseInt(shortLine));

                        // Get the next line
                        line = line.substring(line.indexOf("\n") + 1, line.length);
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
                            line = line.substring(line.indexOf("\n") + 1, line.length);
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
                            line = line.substring(line.indexOf("\n") + 1, line.length);
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
                    if (shortLine.substring(0, shortLine.indexOf(":")) === "Score") {
                        // Trim the string
                        shortLine = shortLine.substring(shortLine.indexOf(":") + 1, shortLine.length);
                        shortLine = shortLine.replace(/\s/g, "");

                        // Set the Score
                        this.mHuman.setScore(parseInt(shortLine));

                        // Get the next line
                        line = line.substring(line.indexOf("\n") + 1, line.length);
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
                            line = line.substring(line.indexOf("\n") + 1, line.length);
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
                            line = line.substring(line.indexOf("\n") + 1, line.length);
                        }
                    }
                }
                // Load the Next Line from the File
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Loading the Table Information
            else if (line.substring(0, line.indexOf(":")) === "Table") {
                // Get the Next Line
                shortLine = line.substring(line.indexOf(":") + 3);

                // If the table includes builds, remove them
                if (shortLine.includes("[") && shortLine.includes("]")) {
                    shortLine = shortLine.substring(shortLine.lastIndexOf("]") + 2, shortLine.length);
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

                        // Set the new build
                        nBuild.setBuildFromString(buildCards);

                        // update the line
                        shortLine = shortLine.substring(shortLine.indexOf("] ]") + 4, shortLine.length);

                        // Get the build owner information
                        var owner = "";
                        if (shortLine.includes("[")) {
                            owner = shortLine.substring(0, shortLine.indexOf("["));
                        }
                        else {
                            owner = shortLine;
                        }

                        // Replace all new line characters and spaces
                        owner = owner.replace(/\n+/g, "");
                        owner = owner.replace(/\s+/g, "");

                        // Set the build variables
                        nBuild.setBuildOwner(owner);
                        nBuild.findBuildValue();

                        // Add the build to the table
                        this.mTable.addBuildToTable(nBuild);

                        // Reset build cards variable
                        buildCards = [];

                        // Check if theres another build
                        if (shortLine.includes("[")) {
                            // Load the next build
                            shortLine = shortLine.substring(shortLine.indexOf("["), shortLine.length);
                        }
                        else {
                            // empty the line
                            shortLine = "";
                        }
                    }
                }
                // Load the Next Line from the File
                fileString = fileString.substring(fileString.indexOf("\n\n") + 2, fileString.length);
            }
            // Loading the Last Capture Information
            else if (line.substring(0, line.indexOf(":")) === "Last Capture") {
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


    /**
     * loadDeckFile(), Loades the Deck file and enters the deck information into the deck
     */
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

        // While the fileString contains infomration
        while(fileString) {
            // Deck the deck information
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