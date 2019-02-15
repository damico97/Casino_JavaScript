/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class ViewsRoundEnd {

    /**
     * setUpRoundEndView(), Used to initialize the view for the end of round page
     * @param human -> Access to the Human Player Class
     * @param computer -> Access to the Computer Player Class
     */
    setUpRoundEndView(human, computer) {
        // String to store the score information and record it in the ConsoleLog
        var text = "Round Over:<br>";

        // Displaying & Recording the Human's Pile Size
        document.getElementById("EndRoundHumanPileSize").innerHTML = human.pileLength();
        text += "Human Pile Length: " + human.pileLength() + "<br>";
        
        // Displaying & Recording the Humnan's Num of Spades
        document.getElementById("EndRoundHumanNumSpades").innerHTML = human.getNumSpades();
        text += "Human Num Spades: " + human.getNumSpades() + "<br>";
        
        // Displaying & Recording the Human's Round Points
        document.getElementById("EndRoundHumanPoints").innerHTML = human.getRoundScore();
        text += "Human Round Points: " + human.getRoundScore() + "<br>";

        // Displaying & Recording the Human's Tournament Score
        document.getElementById("EndRoundHumanTotal").innerHTML = human.getTournamentScore();
        text += "HUMAN TOTAL SCORE: " + human.getTournamentScore() + "<br><br>";


        // Displaying & Recording the Computer's Pile Size
        document.getElementById("EndRoundComputerPileSize").innerHTML = computer.pileLength();
        text += "Computer Pile Length: " + computer.pileLength() + "<br>";
        
        // Displaying & Recording the Computer's Num of Spades
        document.getElementById("EndRoundComputerNumSpades").innerHTML = computer.getNumSpades();
        text += "Computer Num Spades: " + computer.getNumSpades() + "<br>";

        // Displaying & Recording the Computer's Round Points 
        document.getElementById("EndRoundComputerPoints").innerHTML = computer.getRoundScore();
        text += "Computer Round Points: " + computer.getRoundScore() + "<br>";

        // Displaying & Recording the Computer's Tournament Points
        document.getElementById("EndRoundComputerTotal").innerHTML = computer.getTournamentScore();
        text += "COMPUTER TOTAL SCORE: " + computer.getTournamentScore() + "<br><br>";


        // Setting the Round Winner Prompt
        // If The Human Won
        if (human.getRoundScore() > computer.getRoundScore()) {
            document.getElementById("RoundWinner").innerHTML = "😃😃😃 Your The Winner!!! 😃😃😃";
            text += "The Human Won The Round";
        }
        // If The Human Lost
        else if (human.getRoundScore() < computer.getRoundScore()) {
            document.getElementById("RoundWinner").innerHTML = "☹️☹️☹️ You've Lost ️☹️☹️☹️️️️️";
            text += "The Computer Won The Round";
        }
        // If The Player's Tied
        else {
            document.getElementById("RoundWinner").innerHTML = "😐😐😐 You've Tied 😐😐😐";
            text += "The Round Is Tied";
        }

        // Record the Scoring to the ConsoleLog
        consoleLog.addToLogText(text);
    }
}