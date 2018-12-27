/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino Android-Java                            *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  December 12, 2018                                 *
 * ************************************************************
 */


 class Deck {

 	/**
 	 * Deck(), Constructor for the Deck Class
 	 */
 	Deck() {
 		this.mCardDeck = new Array();
 		this.mDeckSize = 0;
 	}


	/**
	 * get(), Return the card in the deck at given index
	 * @param None
	 * @return The card from the given index
	 */
 	get(index) {
 		return this.mCardDeck[index];
 	}


 	/**
 	 * deckSize(), Returns the size of the deck array
 	 * @param None
 	 * @return The size of the deck array
 	 */
 	deckSize() {
 		return this.mCardDeck.length;
 	}


 	/**
 	 * shffleDeck(), Shuffles the new deck so the cards are in a ramond order
 	 * @param None
 	 */
 	shuffleDeck() {
 		for (let i = this.mCardDeck.length - 1; i > 0; i--) {
        	const j = Math.floor(Math.random() * (i + 1));
        	[this.mCardDeck[i], this.mCardDeck[j]] = [this.mCardDeck[j], this.mCardDeck[i]];
    	}
 	}


 	/**
 	 * initializeDeck(), Creates a New Deck, fills the deck, and calls the shuffle function
 	 * @param None
 	 */
 	initializeDeck() {
 		// Create all the cards
 		// Spades Suite
 		// Ace of Spades
 		var card1 = new Card();
 		card1.newCard("S", 1, "SA");
 		// 2 of Spades
 		var card2 = new Card();
 		card2.newCard("S", 2, "S2")
 		// 3 of Spades
 		var card3 = new Card();
 		card3.newCard("S", 3, "S3");
 		// 4 of Spades
 		var card4 = new Card();
 		card4.newCard("S", 4, "S4");
 		// 5 of Spades
 		var card5 = new Card();
 		card5.newCard("S", 5, "S5");
 		// 6 of Spades
 		var card6 = new Card();
 		card6.newCard("S", 6, "S6");
 		// 7 of Spades
 		var card7 = new Card();
 		card7.newCard("S", 7, "S7");
 		// 8 of Spades
 		var card8 = new Card();
 		card8.newCard("S", 8, "S8");
 		// 9 of Spades
 		var card9 = new Card();
 		card9.newCard("S", 9, "S9");
 		// 10 of Spades
 		var card10 = new Card();
 		card10.newCard("S", 10, "SX");
 		// Jack of Spades
 		var card11 = new Card();
 		card11.newCard("S", 11, "SJ");
 		// Queen of Spades
 		var card12 = new Card();
 		card12.newCard("S", 12, "SQ");
 		// King of Spades
 		var card13 = new Card();
 		card13.newCard("S", 13, "SK");

 		// Hearts Suite
 		// Ace of Hearts
 		var card14 = new Card();
 		card14.newCard("H", 1, "HA");
 		// 2 of Hearts
 		var card15 = new Card();
 		card15.newCard("H", 2, "H2");
 		// 3 of Hearts
 		var card16 = new Card();
 		card16.newCard("H", 3, "H3");
 		// 4 of Hearts
 		var card17 = new Card();
 		card17.newCard("H", 4, "H4");
 		// 5 of Hearts
 		var card18 = new Card();
 		card18.newCard("H", 5, "H5");
 		// 6 of Hearts
 		var card19 = new Card();
 		card19.newCard("H", 6, "H6");
 		// 7 of Hearts
 		var card20 = new Card();
 		card20.newCard("H", 7, "H7");
 		// 8 of Hearts
 		var card21 = new Card();
 		card21.newCard("H", 8, "H8");
 		// 9 of Hearts
 		var card22 = new Card();
 		card22.newCard("H", 9, "H9");
 		// 10 of Hearts
 		var card23 = new Card();
 		card23.newCard("H", 10, "HX");
 		// Jack of Hearts
 		var card24 = new Card();
 		card24.newCard("H", 11, "HJ");
 		// Queen of Hearts
 		var card25 = new Card();
 		card25.newCard("H", 12, "HQ");
 		// King of Hearts
 		var card26 = new Card();
 		card26.newCard("H", 13, "HK");

 		// Clubs Suite
 		// Ace of Clubs
 		var card27 = new Card();
 		card27.newCard("C", 1, "CA");
 		// 2 of Clubs
 		var card28 = new Card();
 		card28.newCard("C", 2, "C2");
 		// 3 of Clubs
 		var card29 = new Card();
 		card29.newCard("C", 3, "C3");
 		// 4 of Clubs
 		var card30 = new Card();
 		card30.newCard("C", 4, "C4");
 		// 5 of Clubs
 		var card31 = new Card();
 		card31.newCard("C", 5, "C5");
 		// 6 of Clubs
 		var card32 = new Card();
 		card32.newCard("C", 6, "C6");
 		// 7 of Clubs
 		var card33 = new Card();
 		card33.newCard("C", 7, "C7");
 		// 8 of Clubs
 		var card34 = new Card();
 		card34.newCard("C", 8, "C8");
 		// 9 of Clubs
 		var card35 = new Card();
 		card35.newCard("C", 9, "C9");
 		// 10 of Clubs
 		var card36 = new Card();
 		card36.newCard("C", 10, "CX");
 		// Jack of Clubs
 		var card37 = new Card();
 		card37.newCard("C", 11, "CJ");
 		// Queen of Clubs
 		var card38 = new Card();
 		card38.newCard("C", 12, "CQ");
 		// King of Clubs
 		var card39 = new Card();
 		card39.newCard("C", 13, "CK");

 		// Diamonds Suite
 		// Ace of Diamonds
 		var card40 = new Card();
 		card40.newCard("D", 1, "DA");
 		// 2 of Diamonds
 		var card41 = new Card();
 		card41.newCard("D", 2, "D2");
 		// 3 of Diamonds
 		var card42 = new Card();
 		card42.newCard("D", 3, "D3");
 		// 4 of Diamonds
 		var card43 = new Card();
 		card43.newCard("D", 4, "D4");
 		// 5 of Diamonds
 		var card44 = new Card();
 		card44.newCard("D", 5, "D6");
 		// 6 of Diamonds
 		var card45 = new Card();
 		card45.newCard("D", 6, "D6");
 		// 7 of Diamonds
 		var card46 = new Card();
 		card46.newCard("D", 7, "D7");
 		// 8 of Diamonds
 		var card47 = new Card();
 		card47.newCard("D", 8, "D8");
 		// 9 of Diamonds
 		var card48 = new Card();
 		card48.newCard("D", 9, "D9");
 		// 10 of Diamonds
 		var card49 = new Card();
 		card49.newCard("D", 10, "DX");
 		// Jack of Diamonds
 		var card50 = new Card();
 		card50.newCard("D", 11, "DJ");
 		// Queen of Diamonds
 		var card51 = new Card();
 		card51.newCard("D", 12, "DQ");
 		// King of Diamonds
 		var card52 = new Card();
 		card52.newCard("D", 13, "DK");


 		// Add all the Card to the Deck Array
 		this.mCardDeck = [card1];
 		this.mCardDeck.push(card2);
 		this.mCardDeck.push(card3);
 		this.mCardDeck.push(card4);
 		this.mCardDeck.push(card5);
 		this.mCardDeck.push(card6);
 		this.mCardDeck.push(card7);
 		this.mCardDeck.push(card8);
 		this.mCardDeck.push(card9);
 		this.mCardDeck.push(card10);
 		this.mCardDeck.push(card11);
 		this.mCardDeck.push(card12);
 		this.mCardDeck.push(card13);
 		this.mCardDeck.push(card14);
 		this.mCardDeck.push(card15);
 		this.mCardDeck.push(card16);
 		this.mCardDeck.push(card17);
 		this.mCardDeck.push(card18);
 		this.mCardDeck.push(card19);
 		this.mCardDeck.push(card20);
 		this.mCardDeck.push(card21);
 		this.mCardDeck.push(card22);
 		this.mCardDeck.push(card23);
 		this.mCardDeck.push(card24);
 		this.mCardDeck.push(card25);
 		this.mCardDeck.push(card26);
 		this.mCardDeck.push(card27);
 		this.mCardDeck.push(card28);
 		this.mCardDeck.push(card29);
 		this.mCardDeck.push(card30);
 		this.mCardDeck.push(card31);
 		this.mCardDeck.push(card32);
 		this.mCardDeck.push(card33);
 		this.mCardDeck.push(card34);
 		this.mCardDeck.push(card35);
 		this.mCardDeck.push(card36);
 		this.mCardDeck.push(card37);
 		this.mCardDeck.push(card38);
 		this.mCardDeck.push(card39);
 		this.mCardDeck.push(card40);
 		this.mCardDeck.push(card41);
 		this.mCardDeck.push(card42);
 		this.mCardDeck.push(card43);
 		this.mCardDeck.push(card44);
 		this.mCardDeck.push(card45);
 		this.mCardDeck.push(card46);
 		this.mCardDeck.push(card47);
 		this.mCardDeck.push(card48);
 		this.mCardDeck.push(card49);
 		this.mCardDeck.push(card50);
 		this.mCardDeck.push(card51);
 		this.mCardDeck.push(card52);


 		// Shuffle the new Deck
 		this.shuffleDeck();
 	}
 }




