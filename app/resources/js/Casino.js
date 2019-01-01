

function showHands(human, computer) {
	var blankCard = "images/others/blank_card.png";

	document.getElementById("h_card_1").src = blankCard;
	document.getElementById("h_card_2").src = blankCard;
	document.getElementById("h_card_3").src = blankCard;
	document.getElementById("h_card_4").src = blankCard;

	document.getElementById("c_card_1").src = blankCard;
	document.getElementById("c_card_2").src = blankCard;
	document.getElementById("c_card_3").src = blankCard;
	document.getElementById("c_card_4").src = blankCard;


	for (var i = 0; i < human.handLength(); i++) {
		console.log("Human: " + human.getHandCardAtIndex(i).getName());
		var card_file = "images/cards/card_";
		var card_name = human.getHandCardAtIndex(i).getAbbv();
		card_file += card_name.toLowerCase() + ".png";

		if (i == 0) {
			document.getElementById("h_card_1").src = card_file;
		}
		else if (i == 1) {
			document.getElementById("h_card_2").src = card_file;
		}
		else if (i == 2) {
			document.getElementById("h_card_3").src = card_file;
		}
		else if (i == 3) {
			document.getElementById("h_card_4").src = card_file;
		}
		else {

		}
	}

	for (var i = 0; i < computer.handLength(); i++) {
		console.log("Computer: " + computer.getHandCardAtIndex(i).getName());
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


function handClickEvents(human, move) {
	var cardSelected = [false, false, false, false];

	document.getElementById("h_card_1").addEventListener('click', function() {
		var card = document.getElementById("h_card_1");

		if (cardSelected[0] == false && !move.checkCardSelected()) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[0] = true;
			move.setHandCard(human.getHandCardAtIndex(0));
			console.log("Human Card 1 Clicked");
		}
		else if (cardSelected[0] == true) {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[0] = false;
			move.resetHandCard();
		}
		else {
			// Do Nothing
		}
	});

	document.getElementById("h_card_2").addEventListener('click', function() {
		var card = document.getElementById("h_card_2");

		if (cardSelected[1] == false && !move.checkCardSelected()) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[1] = true;
			move.setHandCard(human.getHandCardAtIndex(1));
			console.log("Human Card 2 Clicked");
		}
		else if (cardSelected[1] == true) {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[1] = false;
			move.resetHandCard();
		}
		else {
			// Do Nothing
		}
	});

	document.getElementById("h_card_3").addEventListener('click', function() {
		var card = document.getElementById("h_card_3");

		if (cardSelected[2] == false && !move.checkCardSelected()) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[2] = true;
			move.setHandCard(human.getHandCardAtIndex(2));
			console.log("Human Card 3 Clicked");
		}
		else if (cardSelected[2] == true) {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[2] = false;
			move.resetHandCard();
		}
		else {
			// Do Nothing
		}
	});

	document.getElementById("h_card_4").addEventListener('click', function() {
		var card = document.getElementById("h_card_4")

		if (cardSelected[3] == false && !move.checkCardSelected()) {
			card.style.backgroundColor = "rgb(37, 185, 154)";
			cardSelected[3] = true;
			move.setHandCard(human.getHandCardAtIndex(3));
			console.log("Human Card 4 Clicked");
		}
		else if (cardSelected[3] == true) {
			card.style.backgroundColor = "rgb(0, 80, 109)";
			cardSelected[3] = false;
			move.resetHandCard();
		}
		else {
			// Do Nothing
		}
	});
}


function setupTableCardView(table) {
	var tableCardView = document.getElementById("tableView");

	while (tableCardView.hasChildNodes()) {
		tableCardView.removeChild(tableCardView.lastChild);
	}

	var cardSelected;
	var tableCardViews;
	var viewcount = 0
	for (var i = 0; i < table.tableCardLength(); i++) {
		var card_path = "images/cards/"
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
			console.log("=");
		}
		else {
			tableCardViews.push(card_image);
			console.log("push");
		}

		if (undefined == cardSelected) {
			cardSelected = new Array();
			cardSelected[0] = false;
		}
		else {
			cardSelected.push(false);
		}
	}


	var td
	for (var i = 0; i < tableCardViews.length; i++) {
		td = document.getElementById("tableView").appendChild(tableCardViews[i]);
	    if (typeof window.addEventListener === 'function'){
	        (function (_td) {
	            td.addEventListener('click', function(){
	            	if (cardSelected[_td.id] == false) {
	            		_td.style.backgroundColor = "rgb(37, 185, 154)";
	            		cardSelected[_td.id] = true;
	            		console.log(_td.id);
	            	}
	                else {
	                	_td.style.backgroundColor = "rgb(0, 80, 109)";
	                	cardSelected[_td.id] = false;
	                }
	            });
	        })(td);
	    }
	}
}


function updateView(deck, human, computer, table, move) {

	// Show Deck
	for (var i = 0; i < deck.deckSize(); i++) {
		var card_path = "images/cards/"
		var card_prefix = "card_";
		var card_name = "";

		var card = deck.get(i).getAbbv();
		card_name += card_path + card_prefix;
		card_name += card.toLowerCase() + ".png";


		var card_image = document.createElement("img");
		card_image.src = card_name;
		document.getElementById("deckView").appendChild(card_image);
	}




	showHands(human, computer);
	handClickEvents(human, move);

	setupTableCardView(table);
}

var humanTurn = true;

console.log("New Deck");

var deck = new Deck();
var human = new Player();
var computer = new Player();
var table = new Table();
var move = new Move();

deck.initializeDeck();

if (human.handLength() == 0 && computer.handLength() == 0) {
	// Deal Cards
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
			if (i == 0) {
				human.addCardToHand(deck.dealCard());
			}
			else if (i == 1) {
				computer.addCardToHand(deck.dealCard());
			}
			else if (i == 2) {
				table.addCardToTable(deck.dealCard());
			}
			else {
				console.log("ERROR - In Dealing Cards");
			}
		}
	}
}

updateView(deck, human, computer, table, move);


// document.getElementById("button_test").addEventListener('click', function()
document.getElementById("button_trail").addEventListener('click', function() {
	human.trailCard(move, table);
	updateView(deck, human, computer, table, move);
});










