/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class ConsoleLog {
    ConsoleLog() {
        this.mLogText = "";
    }

    addToLogText(nEntry) {
        this.mLogText += nEntry + "<br><br>";
    }

    initLogText(nEntry) {
        this.mLogText = nEntry + "<br><br>";
    }

    getLogText() {
        return this.mLogText;
    }
}