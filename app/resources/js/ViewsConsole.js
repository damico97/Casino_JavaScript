/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class ViewsConsole {
    setUpConsoleView(consoleLog) {
        var textView = document.getElementById("consoleTextView");

        textView.innerHTML = "";
        textView.innerHTML = consoleLog.getLogText();
    }
}