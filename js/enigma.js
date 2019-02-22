$(document).keydown(function(e){
    changeKeyboardButtonHighlight(getButtonId(getKeyLetter(e)), true);
});

$(document).keyup(function(e){
    changeKeyboardButtonHighlight(getButtonId(getKeyLetter(e)), false);
    encodeLetter(getKeyLetter(e));
});

function resetMessage() {
    $("#message").val("");
}

function addEncryptedLetter(letter) {
    const currentMessage = $("#message").val();
    $("#message").val(currentMessage + letter);
}

function changeKeyboardButtonHighlight(buttonId, highlighted) {
    if (highlighted === true) {
        $(buttonId).css("background-color", "#ffeeba");
        $(buttonId).css("color", "#000000");
    } else {
        $(buttonId).css("background-color", "#5a6268");
        $(buttonId).css("color", "#ffffff");
    }
}

function getKeyLetter(e) {
    const keyId = e.keyCode;
    const keyCodesRow = keyCodes.filter(k => k.keyCode === keyId);
    const keyLetter = keyCodesRow[0]["letter"];
    return keyLetter;
}

function getButtonId(keyLetter) {
    const buttonId = "#" + keyLetter;
    return buttonId;
}

function encodeLetter(keyLetter) {
    addEncryptedLetter(keyLetter);
}