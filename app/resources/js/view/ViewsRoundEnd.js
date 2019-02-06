/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class ViewsRoundEnd {
    setUpRoundEndView(human, computer) {
        var text = "Round Over:<br>";

        document.getElementById("EndRoundHumanPileSize").innerHTML = human.pileLength();
        text += "Human Pile Length: " + human.pileLength() + "<br>";
        
        document.getElementById("EndRoundHumanNumSpades").innerHTML = human.getNumSpades();
        text += "Human Num Spades: " + human.getNumSpades() + "<br>";
        
        document.getElementById("EndRoundHumanPoints").innerHTML = human.getRoundScore();
        text += "Human Round Points: " + human.getRoundScore() + "<br>";

        document.getElementById("EndRoundHumanTotal").innerHTML = human.getTournamentScore();
        text += "HUMAN TOTAL SCORE: " + human.getTournamentScore() + "<br><br>";



        document.getElementById("EndRoundComputerPileSize").innerHTML = computer.pileLength();
        text += "Computer Pile Length: " + computer.pileLength() + "<br>";
        
        document.getElementById("EndRoundComputerNumSpades").innerHTML = computer.getNumSpades();
        text += "Computer Num Spades: " + computer.getNumSpades() + "<br>";

        document.getElementById("EndRoundComputerPoints").innerHTML = computer.getRoundScore();
        text += "Computer Round Points: " + computer.getRoundScore() + "<br>";

        document.getElementById("EndRoundComputerTotal").innerHTML = computer.getTournamentScore();
        text += "COMPUTER TOTAL SCORE: " + computer.getTournamentScore() + "<br><br>";



        if (human.getRoundScore() > computer.getRoundScore()) {
            document.getElementById("RoundWinner").innerHTML = "😃😃😃 Your The Winner!!! 😃😃😃";
            text += "The Human Won The Round";
        }
        else if (human.getRoundScore() < computer.getRoundScore()) {
            document.getElementById("RoundWinner").innerHTML = "☹️☹️☹️ You've Lost ️☹️☹️☹️️️️️";
            text += "The Computer Won The Round";
        }
        else {
            document.getElementById("RoundWinner").innerHTML = "😐😐😐 You've Tied 😐😐😐";
            text += "The Round Is Tied";
        }

        consoleLog.addToLogText(text);
    }
}