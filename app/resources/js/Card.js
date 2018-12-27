/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino Android-Java                            *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  December 12, 2018                                 *
 * ************************************************************
 */

class Card {

	/**
     * Card Class Default Constructor
     * @param None
     */
	Card() {
		this.mSuit = "";
		this.mValue = 0;
		this.mAbbv = "";
	}


	/**
     * Card Class Constructor
     * @param suit, char The suit of the card represented by a single character (S, H, C, D)
     * @param value, int The value of the card
     * @param abbv, String containing the abbreviation of the name of the card
     */
	newCard(suit, value, abbv) {
		this.mSuit = suit;
		this.mValue = value;
		this.mAbbv = abbv;
	}


	/**
     * Card Class Constructor that uses just the abbreviation to create the card, used during serialization
     * @param abbv, String containing the abbreviation of the card name
     * @return An instance of the card class
     */
	newCardFromAbbv(abbv) {
		var suit;
		var value;

		if (abbv.length == 2) {
			suit = abbv[0];
			
			if (abbv.charAt(1) == "A") {
				value = 1;
			}
			else if (abbv.charAt(1) == "2") {
				value = 2; 
			}
			else if (abbv.charAt(1) == "3") {
				value = 3;
			} 
			else if (abbv.charAt(1) == "4") {
				value = 4;
			}
			else if (abbv.charAt(1) == "5") {
				value = 5;
			}
			else if (abbv.charAt(1) == "6") {
				value = 6;
			}
			else if (abbv.charAt(1) == "7") {
				value = 7;
			}
			else if (abbv.charAt(1) == "8") {
				value = 8;
			}
			else if (abbv.charAt(1) == "9") {
				value = 9;
			}
			else if (abbv.charAt(1) == "X") {
				value = 10;
			}
			else if (abbv.charAt(1) == "J") {
				value = 11;
			}
			else if (abbv.charAt(1) == "Q") {
				value = 12;
			}
			else if (abbv.charAt(1) == "K") {
				value = 13;
			}
			else {
				console.log("ERROR!! - In newCardFromAbbv()");
				value = -1;
			}

			if (value != -1) {
				this.mSuit = suit;
				this.mValue = value;
				this.mAbbv = abbv;
			}
		}
		else {
			console.log("ERROR!! - In newCardFromAbbv()");
		}
	}


	/**
     * getSuit(), returns the Suit of the card represented by a single character
     * @param None
     * @return char, which is the representation of the suit of the card
     */
	getSuit() {
		return this.mSuit;
	}


	/**
     * getValue(), returns the value of the card
     * @param None
     * @return int, which is the value of the card (1 = Ace, 11 = Jack, 12 = Queen, 13 = Jack)
     */
	getValue() {
		return this.mValue;
	}


	/**
     * getAbbv(), returns the abbreviation of the card
     * @param None
     * @return String, which is the abbreviation of the card [i.e. SA]
     */
	getAbbv() {
		return this.mAbbv;
	}


	getName() {
		var name = "";

		// Adding the name / value to the name string
        // Check if card is an Ace
        if (this.mValue == 1) {
            name += "Ace";
        }
        // Check if card is a Jack
        else if (this.mValue == 11) {
            name += "Jack";
        }
        // Check if card is a Queen
        else if (this.mValue == 12) {
            name += "Queen";
        }
        // Check if card is a King
        else if (this.mValue == 13) {
            name += "King";
        }
        // Card is not a face card, use it's number
        else {
        	var value = this.mValue;
            name += String(value);
        }

        // Add "of" to the name string
        name += " of ";

        // Adding the suit of the card to the name string
        // Check if suit is spades
        if (this.mSuit == 'S') {
            name += "Spades";
        }
        // Check if suit is hearts
        else if (this.mSuit == 'H') {
            name += "Hearts";
        }
        // Check if suit is clubs
        else if (this.mSuit == 'C') {
            name += "Clubs";
        }
        // Suit must be diamonds
        else {
            name += "Diamonds";
        }

        // Return the name of the card
        return name;
	}
}










