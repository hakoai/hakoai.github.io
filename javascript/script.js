function CreateRandomText(text, initTime, doneTime) {
    var now = Date.now();
    var interval = (doneTime - initTime) / text.length;
    var randomText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?<>_+-*/;:#$%&[]{},.";
    var fixTextCount = (now > doneTime) ? text.length : (now - initTime) / interval;
    var result = text.slice(0, fixTextCount + 1);
    for (var index = fixTextCount; index < text.length; index++) {
        result += randomText[~~(Math.random() * randomText.length)];
    }
    return result;
}
var startTime = Date.now();
function Do() {
    var str = "hakoai";
    var output = CreateRandomText(str, startTime, startTime + 1000);
    document.getElementById("hakoainame").textContent = output;
    if (str != output) {
        setTimeout(function () { return Do(); }, 0);
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    Do();
});
