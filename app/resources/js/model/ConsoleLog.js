/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class ConsoleLog {

    /**
     * ConsoleLog(), Constructor for the ConsoleLog Class
     */
    ConsoleLog() {
        this.mLogText = "";
    }


    /**
     * addToLogText(), Takes in a string and addes it to the ConsoleLog so it can be displayed when the user wants it 
     * @param nEntry, The string that is the new entry to be added to the console log
     */
    addToLogText(nEntry) {
        this.mLogText += nEntry + "<br><br>";
    }

    /**
     * initLogText(), Takes in a string and initializes the Console Log to it
     * @param nEntry, The string that is the new entry to be added to the console log
     */
    initLogText(nEntry) {
        this.mLogText = nEntry + "<br><br>";
    }


    /**
     * getLogText(), Returns the ConsoleLog text string
     * @param None
     * @return The String that holds the ConsoleLog Text
     */
    getLogText() {
        return this.mLogText;
    }
}