$(document).keydown(function(e){
    const keyId = e.keyCode;
    const keyCodesRow = keyCodes.filter(k => k.keyCode === keyId);
    const keyLetter = keyCodesRow[0]["letter"];
    const buttonId = "#" + keyLetter;
    $(buttonId).css("background-color", "#ffeeba");
    $(buttonId).css("color", "#000000");
});

$(document).keyup(function(e){
    const keyId = e.keyCode;
    const keyCodesRow = keyCodes.filter(k => k.keyCode === keyId);
    const keyLetter = keyCodesRow[0]["letter"];
    const buttonId = "#" + keyLetter;
    addEncryptedLetter(keyLetter);
    $(buttonId).css("background-color", "#5a6268");
    $(buttonId).css("color", "#ffffff");
});

function resetMessage() {
    $("#message").val("");
}

function addEncryptedLetter(letter) {
    const currentMessage = $("#message").val();
    $("#message").val(currentMessage + letter);
}