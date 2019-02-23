$(document).ready(function (){
    resetRotorsCounter();
    generateRotorsTableRows();
    const inputIdPrefix = "#cross-";
    for (let i = 0; i < keyCodes.length; i++) {
        let inputId = inputIdPrefix + keyCodes[i]["letter"];
        $(inputId).on("keyup", function(event) {
            if ((event.keyCode >= 48 && event.keyCode <= 90) ||
                (event.keyCode >= 96 && event.keyCode <= 111) ||
                (event.keyCode >= 186)) {
                autoFillCross(inputId);
            }
        });
        $(inputId).on("keydown", function(event) {
            if (event.keyCode === 8 || event.keyCode === 46) {
                removePair(inputId);
            }
        });

    }
});

let captureKeys = false;
$(document).keydown(function (e) {
    if (captureKeys && getKeyLetter(e) !== false) {
        changeKeyboardButtonHighlight(getButtonId(getKeyLetter(e)), true);
    }
});

$(document).keyup(function (e) {
    if (captureKeys && getKeyLetter(e) !== false) {
        changeKeyboardButtonHighlight(getButtonId(getKeyLetter(e)), false);
        encodeLetter(getKeyLetter(e));
    }
});

function startEncoding() {
    $("#startEncodingButton").css("display", "none");
    $("#stopEncodingButton").css("display", "inline");
    captureKeys = true;
}

function stopEncoding() {
    $("#stopEncodingButton").css("display", "none");
    $("#startEncodingButton").css("display", "inline");
    captureKeys = false;
}

function resetMessage() {
    $("#message").val("");
    resetRotorsCounter();
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
    if (keyCodesRow === undefined) {
        return false;
    }
    return keyCodesRow[0]["letter"];
}

function getButtonId(keyLetter) {
    const buttonId = "#" + keyLetter;
    return buttonId;
}

function encodeLetter(keyLetter) {
    let currentLetter;
    currentLetter = encodeLetterViaCross(keyLetter);
    for (let i = 0; i < rotors.length; i++) {
        currentLetter = encodeViaRotor(i, currentLetter);
    }
    rotateRotors();
    addEncryptedLetter(currentLetter);
    updateRotorsSequence();
}