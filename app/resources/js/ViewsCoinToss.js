class ViewsCoinToss {
    displayWinner(coinCall, coinResult, winner) {
        if (coinResult == 0) {
            document.getElementById("coin_toss_tails").style.display = 'none';
            document.getElementById("coin_toss_tail_title").style.display = 'none';
        }
        else if (coinResult == 1) {
            document.getElementById("coin_toss_heads").style.display = 'none';
            document.getElementById("coin_toss_head_title").style.display = 'none';
        }
        else {

        }

        if (winner) {
            document.getElementById("coin_toss_box_title").innerHTML = "YAY!! You've Won The Toss!!!!";
            document.getElementById("coin_toss_box_prompt").innerHTML = "You Will Get The First Move!!!!";
        }
        else {
            document.getElementById("coin_toss_box_title").innerHTML = "Sorry, the Computer won the toss";
            document.getElementById("coin_toss_box_prompt").innerHTML = "The Computer will get the first move";
        }

        document.getElementById("coin_toss_controls").style.display = 'block'
    }
}