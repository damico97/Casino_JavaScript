/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class ViewsTournamentEnd {

    /**
     * setUpTournamentEndView(), Used to initialize the view for the end of tournament page
     * @param human -> Access to the Human Player Class
     * @param computer -> Access to the Computer Player Class
     */
    setUpTournamentEndView(human, computer, consoleLog) {
        // String to store the score information and record it in the ConsoleLog
        var text = "Tournament Over:<br>";

        // Displaying & Recording the Human's Pile Size
        document.getElementById("EndTournamentHumanPileSize").innerHTML = human.pileLength();
        text += "Human Pile Length: " + human.pileLength() + "<br>";
        
        // Displaying & Recording the Humnan's Num of Spades
        document.getElementById("EndTournamentHumanNumSpades").innerHTML = human.getNumSpades();
        text += "Human Num Spades: " + human.getNumSpades() + "<br>";
        
        // Displaying & Recording the Human's Round Points
        document.getElementById("EndTournamentHumanPoints").innerHTML = human.getRoundScore();
        text += "Human Round Points: " + human.getRoundScore() + "<br>";

        // Displaying & Recording the Human's Tournament Score
        document.getElementById("EndTournamentHumanTotal").innerHTML = human.getTournamentScore();
        text += "HUMAN TOTAL SCORE: " + human.getTournamentScore() + "<br><br>";


        // Displaying & Recording the Computer's Pile Size
        document.getElementById("EndTournamentComputerPileSize").innerHTML = computer.pileLength();
        text += "Computer Pile Length: " + computer.pileLength() + "<br>";

        // Displaying & Recording the Computer's Num of Spades
        document.getElementById("EndTournamentComputerNumSpades").innerHTML = computer.getNumSpades();
        text += "Computer Num Spades: " + computer.getNumSpades() + "<br>";

        // Displaying & Recording the Computer's Round Points 
        document.getElementById("EndTournamentComputerPoints").innerHTML = computer.getRoundScore();
        text += "Computer Round Points: " + computer.getRoundScore() + "<br>";

        // Displaying & Recording the Computer's Tournament Points
        document.getElementById("EndTournamentComputerTotal").innerHTML = computer.getTournamentScore();
        text += "COMPUTER TOTAL SCORE: " + computer.getTournamentScore() + "<br><br>";


        // Setting the Round Winner Prompt
        // If The Human Won
        if (human.getRoundScore() > computer.getRoundScore()) {
            document.getElementById("TournamentRoundWinner").innerHTML = "😃😃😃 You're The Round Winner!!! 😃😃😃";
            text += "The Human Won The Round <br><br>";
        }
        // If The Human Lost
        else if (human.getRoundScore() < computer.getRoundScore()) {
            document.getElementById("TournamentRoundWinner").innerHTML = "☹️☹️☹️ You've Lost The Round ️☹️☹️☹️️️️️";
            text += "The Computer Won The Round <br><br>";
        }
        // If The Player's Tied
        else {
            document.getElementById("TournamentRoundWinner").innerHTML = "😐😐😐 You've Tied The Round 😐😐😐";
            text += "The Round Is Tied<br><br><br>";
        }


        // Setting the Tournament Winner Prompt
        // If The Human Won
        if (human.getTournamentScore() > computer.getTournamentScore()) {
            document.getElementById("TournamentWinner").innerHTML = "😃😃😃 You Won The Game!!! 😃😃😃";
            text += "The Human Won The Game";
        }
        // If The Human Lost
        else if (human.getTournamentScore() < computer.getTournamentScore()) {
            document.getElementById("TournamentWinner").innerHTML = "☹️☹️☹️ You Lost The Game ️☹️☹️☹️️️️️";
            text += "The Computer Won The Game";
        }
        // If The Player's Tied
        else {
            document.getElementById("TournamentWinner").innerHTML = "😐😐😐 You've Tied The Game 😐😐😐";
            text += "The Game Is Tied";
        }

        // Record the Scoring to the ConsoleLog
        consoleLog.addToLogText(text);
    }
}