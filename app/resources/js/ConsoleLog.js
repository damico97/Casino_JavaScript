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