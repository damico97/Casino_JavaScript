/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class ViewsConsole {

    /**
     * setUpConsoleView(), Used to set up the views in the ConsoleLog page
     * @param consoleLog -> Access to the consoleLog to get the text to show the view
     */
    setUpConsoleView(consoleLog) {
        var textView = document.getElementById("consoleTextView");

        textView.innerHTML = "";
        textView.innerHTML = consoleLog.getLogText();
    }
}