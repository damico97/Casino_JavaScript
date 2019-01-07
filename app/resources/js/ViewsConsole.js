class ViewsConsole {
    setUpConsoleView(consoleLog) {
        var textView = document.getElementById("consoleTextView");

        textView.innerHTML = "";
        textView.innerHTML = consoleLog.getLogText();
    }
}