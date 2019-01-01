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
		// Log
		console.log("Card Class - Card(): Called");

		// Variables for the card
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
		// Log
		console.log("Card Class - newCard(): Called");

		// Set the variables to the values passed int
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
		// Log
		console.log("Card Class - newCardFromAbbv(): Called");

		// Local variables to store the information for the card
		var suit;
		var value;

		// Check if the abbrevation is the correct size
		if (abbv.length == 2) {
			// Store the first character as the suite of the card
			suit = abbv.charAt(0);
			
			// Check which value the card is, and store the correct numerical representation of the value
			// Ace
			if (abbv.charAt(1) == "A") {
				value = 1;
			}
			// 2
			else if (abbv.charAt(1) == "2") {
				value = 2; 
			}
			// 3
			else if (abbv.charAt(1) == "3") {
				value = 3;
			} 
			// 4
			else if (abbv.charAt(1) == "4") {
				value = 4;
			}
			// 5
			else if (abbv.charAt(1) == "5") {
				value = 5;
			// 6
			else if (abbv.charAt(1) == "6") {
				value = 6;
			}
			// 7
			else if (abbv.charAt(1) == "7") {
				value = 7;
			}
			// 8
			else if (abbv.charAt(1) == "8") {
				value = 8;
			}
			// 9
			else if (abbv.charAt(1) == "9") {
				value = 9;
			}
			// 10
			else if (abbv.charAt(1) == "X") {
				value = 10;
			} 
			// Jack
			else if (abbv.charAt(1) == "J") {
				value = 11;
			}
			// Queen
			else if (abbv.charAt(1) == "Q") {
				value = 12;
			}
			// King
			else if (abbv.charAt(1) == "K") {
				value = 13;
			}
			// Error
			else {
				// Log the Error
				console.log("ERROR!! - In newCardFromAbbv()");
				// Set the value to -1 so we do not create the card
				value = -1;
			}

			// If no error, set the variables for the new card
			if (value != -1) {
				this.mSuit = suit;
				this.mValue = value;
				this.mAbbv = abbv;
			}
		}
		// Error
		else {
			// Log the Error
			console.log("ERROR!! - In newCardFromAbbv()");
		}
	}


	/**
     * getSuit(), returns the Suit of the card represented by a single character
     * @param None
     * @return char, which is the representation of the suit of the card
     */
	getSuit() {
		// Log
		console.log("Card Class - getSuit(): Called");

		// Return the suit of the card as a single character
		return this.mSuit;
	}


	/**
     * getValue(), returns the value of the card
     * @param None
     * @return int, which is the value of the card (1 = Ace, 11 = Jack, 12 = Queen, 13 = Jack)
     */
	getValue() {
		// Log
		console.log("Card Class - getValue(): Called");

		// Return the value of the card as a number
		return this.mValue;
	}


	/**
     * getAbbv(), returns the abbreviation of the card
     * @param None
     * @return String, which is the abbreviation of the card [i.e. SA]
     */
	getAbbv() {
		// Log
		console.log("Card Class - getAbbv(): Called");

		// Return the abbreviation of the card
		return this.mAbbv;
	}


	/**
     * getName(), returns the full name of the card
     * @param None
     * @return String, which is the full name of the card [i.e. Ace of Spades]
     */
	getName() {
		// Log
		console.log("Card Class - getName(): Called");

		// Local string to assemble the name of the card
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










