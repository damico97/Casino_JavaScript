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
        //pileLength
        //getNumSpades
        //getRoundScore
        //getTournamentScore
        document.getElementById("EndRoundHumanPileSize").innerHTML = human.pileLength();
        document.getElementById("EndRoundHumanNumSpades").innerHTML = human.getNumSpades();
        document.getElementById("EndRoundHumanPoints").innerHTML = human.getRoundScore();

        document.getElementById("EndRoundHumanTotal").innerHTML = human.getTournamentScore();


        document.getElementById("EndRoundComputerPileSize").innerHTML = computer.pileLength();
        document.getElementById("EndRoundComputerNumSpades").innerHTML = computer.getNumSpades();
        document.getElementById("EndRoundComputerPoints").innerHTML = computer.getRoundScore();

        document.getElementById("EndRoundComputerTotal").innerHTML = computer.getTournamentScore();

        if (human.getRoundScore() > computer.getRoundScore()) {
            document.getElementById("RoundWinner").innerHTML = "😃😃😃 Your The Winner!!! 😃😃😃";
        }
        else {
            document.getElementById("RoundWinner").innerHTML = "☹️☹️☹️ You've Lost ️☹️☹️☹️️️️️";
        }
    }
}