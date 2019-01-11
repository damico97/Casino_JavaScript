/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class Card {

	/**
     * Card Class Default Constructor
     * @param None
     */
	Card() {
		// Initialize Variables to default values 
		this.mSuit = "";
		this.mValue = 0;
		this.mAbbv = "";
	}


	/**
     * newCard(), takes in the vlaues for the new card as assigns them
     * @param suit, char The suit of the card represented by a single character (S, H, C, D)
     * @param value, int The value of the card
     * @param abbv, String containing the abbreviation of the name of the card
     */
	newCard(suit, value, abbv) {
		// Initialize variables
		this.mSuit = suit;
		this.mValue = value;
		this.mAbbv = abbv;
	}


	/**
     * newCardFromAbbv(), uses just the abbreviation to create the card, used during serialization
     * @param abbv, String containing the abbreviation of the card name
     * @return An instance of the card class
     */
	newCardFromAbbv(abbv) {
		// Local variables to store the cards suit and value
		var suit;
		var value;

		// Check if the abbrevation is the correct length
		if (abbv.length == 2) {
			// Set the first character as the Suite of the card
			suit = abbv[0];
			
			// Check if an Ace
			if (abbv.charAt(1) == "A") {
				value = 1;
			}
			// Check if a 2
			else if (abbv.charAt(1) == "2") {
				value = 2; 
			}
			// Check if a 3
			else if (abbv.charAt(1) == "3") {
				value = 3;
			} 
			// Check if a 4
			else if (abbv.charAt(1) == "4") {
				value = 4;
			}
			// Check if a 5
			else if (abbv.charAt(1) == "5") {
				value = 5;
			}
			// Check if a 6
			else if (abbv.charAt(1) == "6") {
				value = 6;
			}
			// Check if a 7
			else if (abbv.charAt(1) == "7") {
				value = 7;
			}
			// Check if a 8
			else if (abbv.charAt(1) == "8") {
				value = 8;
			}
			// Check if a 9
			else if (abbv.charAt(1) == "9") {
				value = 9;
			}
			// Check if a 10
			else if (abbv.charAt(1) == "X") {
				value = 10;
			}
			// Check if an Jack
			else if (abbv.charAt(1) == "J") {
				value = 11;
			}
			// Check if a Queen
			else if (abbv.charAt(1) == "Q") {
				value = 12;
			}
			// Check if a King
			else if (abbv.charAt(1) == "K") {
				value = 13;
			}
			// Catch any Errors
			else {
				console.log("ERROR!! - In newCardFromAbbv()");
				value = -1;
			}

			// Catch the error flag set in the value
			if (value != -1) {
				this.mSuit = suit;
				this.mValue = value;
				this.mAbbv = abbv;
			}
		}
		// Catch any errors
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


	/**
     * getName(), returns the full name of the card
     * @param None
     * @return String, which is the full name of the card [i.e. Ace of Spades]
     */
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
            name += Number(value);
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