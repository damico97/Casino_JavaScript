/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

 class ViewsTournamentEnd {
    setUpTournamentEndView(human, computer, consoleLog) {
        var text = "Tournament Over:<br>";

        document.getElementById("EndTournamentHumanPileSize").innerHTML = human.pileLength();
        text += "Human Pile Length: " + human.pileLength() + "<br>";
        
        document.getElementById("EndTournamentHumanNumSpades").innerHTML = human.getNumSpades();
        text += "Human Num Spades: " + human.getNumSpades() + "<br>";
        
        document.getElementById("EndTournamentHumanPoints").innerHTML = human.getRoundScore();
        text += "Human Round Points: " + human.getRoundScore() + "<br>";

        document.getElementById("EndTournamentHumanTotal").innerHTML = human.getTournamentScore();
        text += "HUMAN TOTAL SCORE: " + human.getTournamentScore() + "<br><br>";



        document.getElementById("EndTournamentComputerPileSize").innerHTML = computer.pileLength();
        text += "Computer Pile Length: " + computer.pileLength() + "<br>";

        document.getElementById("EndTournamentComputerNumSpades").innerHTML = computer.getNumSpades();
        text += "Computer Num Spades: " + computer.getNumSpades() + "<br>";

        document.getElementById("EndTournamentComputerPoints").innerHTML = computer.getRoundScore();
        text += "Computer Round Points: " + computer.getRoundScore() + "<br>";

        document.getElementById("EndTournamentComputerTotal").innerHTML = computer.getTournamentScore();
        text += "COMPUTER TOTAL SCORE: " + computer.getTournamentScore() + "<br><br>";



        if (human.getRoundScore() > computer.getRoundScore()) {
            document.getElementById("TournamentRoundWinner").innerHTML = "😃😃😃 You're The Round Winner!!! 😃😃😃";
            text += "The Human Won The Round <br><br>";
        }
        else if (human.getRoundScore() < computer.getRoundScore()) {
            document.getElementById("TournamentRoundWinner").innerHTML = "☹️☹️☹️ You've Lost The Round ️☹️☹️☹️️️️️";
            text += "The Computer Won The Round <br><br>";
        }
        else {
            document.getElementById("TournamentRoundWinner").innerHTML = "😐😐😐 You've Tied The Round 😐😐😐";
            text += "The Round Is Tied<br><br><br>";
        }


        if (human.getTournamentScore() > computer.getTournamentScore()) {
            document.getElementById("TournamentWinner").innerHTML = "😃😃😃 You Won The Game!!! 😃😃😃";
            text += "The Human Won The Game";
        }
        else if (human.getTournamentScore() < computer.getTournamentScore()) {
            document.getElementById("TournamentWinner").innerHTML = "☹️☹️☹️ You Lost The Game ️☹️☹️☹️️️️️";
            text += "The Computer Won The Game";
        }
        else {
            document.getElementById("TournamentWinner").innerHTML = "😐😐😐 You've Tied The Game 😐😐😐";
            text += "The Game Is Tied";
        }

        consoleLog.addToLogText(text);
    }
}