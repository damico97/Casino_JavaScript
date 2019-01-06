class ConsoleLog {
    ConsoleLog() {
        this.mLogText = "";
    }

    addToLogText(nEntry) {
        this.mLogText += nEntry + "\n\n";
    }

    getLogText() {
        return this.mLogText;
    }
}