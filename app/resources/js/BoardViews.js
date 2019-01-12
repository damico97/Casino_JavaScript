/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class BoardViews {

	showComputerHand( computer) {
		var blankCard = "images/others/blank_card.png";

		document.getElementById("c_card_1").src = blankCard;
		document.getElementById("c_card_2").src = blankCard;
		document.getElementById("c_card_3").src = blankCard;
		document.getElementById("c_card_4").src = blankCard;

		for (var i = 0; i < computer.handLength(); i++) {
			var card_file = "images/cards/card_";
			var card_name = computer.getHandCardAtIndex(i).getAbbv();
			card_file += card_name.toLowerCase() + ".png";

			if (i == 0) {
				document.getElementById("c_card_1").src = card_file;
			}
			else if (i == 1) {
				document.getElementById("c_card_2").src = card_file;
			}
			else if (i == 2) {
				document.getElementById("c_card_3").src = card_file;
			}
			else if (i == 3) {
				document.getElementById("c_card_4").src = card_file;
			}
			else {

			}
		}
	}

	setUpComputerPileView(computer) {
		var computerPileView = document.getElementById("computerPileView");

		while (computerPileView.hasChildNodes()) {
			computerPileView.removeChild(computerPileView.lastChild);
		}

		for (var i = 0; i <computer.pileLength(); i++) {
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";

			var card = computer.getPileCardAtIndex(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";

			var card_image = document.createElement("img");
			card_image.src = card_name;
			computerPileView.appendChild(card_image);
		}
	}

	setUpHumanPileView(human) {
		var humanPileView = document.getElementById("humanPileView");

		while (humanPileView.hasChildNodes()) {
			humanPileView.removeChild(humanPileView.lastChild);
		}

		for (var i = 0; i < human.pileLength(); i++) {
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";

			var card = human.getPileCardAtIndex(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";

			var card_image = document.createElement("img");
			card_image.src = card_name;
			humanPileView.appendChild(card_image);
		}
	}

	setupHumanHandView(human, move) {
		var humanHandView = document.getElementById("humanHandView");

		while (humanHandView.hasChildNodes()) {
			humanHandView.removeChild(humanHandView.lastChild);
		}

		var cardSelected = [false, false, false, false];
		var humanCardViews
		var viewCount = 0;

		if (human.handLength() != 0) {
			for (var i = 0; i < human.handLength(); i++) {
				var card_path = "images/cards/";
				var card_prefix = "card_";
				var card_name = "";

				var card = human.getHandCardAtIndex(i).getAbbv();
				card_name += card_path + card_prefix;
				card_name += card.toLowerCase() + ".png";

				var card_image = document.createElement("img");
				card_image.src = card_name;
				card_image.setAttribute("id", i);
				viewCount++

				if (undefined == humanCardViews) {
					humanCardViews = new Array();
					humanCardViews[0] = card_image;
				}
				else {
					humanCardViews.push(card_image);
				}
			}


			var td;
			for (var i = 0; i < humanCardViews.length; i++) {
				td = document.getElementById("humanHandView").appendChild(humanCardViews[i]);
				if (typeof window.addEventListener === 'function') {
					(function (_td) {
						td.addEventListener('click', function() {
							if (cardSelected[_td.id] == false && !move.checkCardSelected()) {
								_td.style.backgroundColor = "rgb(37, 185, 154)";
								cardSelected[_td.id] = true;
								move.setHandCard(human.getHandCardAtIndex(_td.id));
							}
							else if (cardSelected[_td.id] == true) {
								_td.style.backgroundColor = "rgb(0, 80, 109)";
								cardSelected[_td.id] = false;
								move.resetHandCard();
							}
							else {
								// Do Nothing
							}
						});
					})(td);
				}
			}
		}
	}


	setupTableCardView(table, move, humanTurn) {
		var tableCardView = document.getElementById("tableView");

		while (tableCardView.hasChildNodes()) {
			tableCardView.removeChild(tableCardView.lastChild);
		}

		var cardSelected;
		var tableCardViews;
		var viewcount = 0
		for (var i = 0; i < table.tableCardLength(); i++) {
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";

			var card = table.getTableCardAtIndex(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";


			var card_image = document.createElement("img");
			card_image.src = card_name;
			card_image.setAttribute("id", i);
			viewcount++;

			if (undefined == tableCardViews) {
				tableCardViews = new Array();
				tableCardViews[0] = card_image;
			}
			else {
				tableCardViews.push(card_image);
			}

			if (undefined == cardSelected) {
				cardSelected = new Array();
				cardSelected[0] = false;
			}
			else {
				cardSelected.push(false);
			}
		}


		if (undefined != tableCardViews) {
			var td;
			for (var i = 0; i < tableCardViews.length; i++) {
				td = document.getElementById("tableView").appendChild(tableCardViews[i]);
				if (typeof window.addEventListener === 'function'){
					(function (_td) {
						td.addEventListener('click', function(){
							if (humanTurn) {
								if (cardSelected[_td.id] == false) {
									_td.style.backgroundColor = "rgb(37, 185, 154)";
									cardSelected[_td.id] = true;
									move.moveAddTableCard(table.getTableCardAtIndex(_td.id));
								}
								else {
									_td.style.backgroundColor = "rgb(0, 80, 109)";
									cardSelected[_td.id] = false;
								}
							}
						});
					})(td);
				}
			}
		}
	}


	setUpDeckView(deck) {
		// Show Deck
		var deckView = document.getElementById("deckView");

		while (deckView.hasChildNodes()) {
			deckView.removeChild(deckView.lastChild);
		}

		for (var i = 0; i < deck.deckSize(); i++) {
			var card_path = "images/cards/";
			var card_prefix = "card_";
			var card_name = "";

			var card = deck.get(i).getAbbv();
			card_name += card_path + card_prefix;
			card_name += card.toLowerCase() + ".png";


			var card_image = document.createElement("img");
			card_image.src = card_name;
			deckView.appendChild(card_image);
		}
	}
}