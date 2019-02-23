let captureKeys = false;
let codingWay;
$(document).ready(function (){
    codingWay =  $("#codingWay").val();
    resetRotorsCounter();
    generateRotorsTableRows();
    generateCodePattern();
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

$(document).keydown(function (e) {
    if (captureKeys && getKeyLetter(e) !== false) {
        if(codingWay === "encode") {
            const newLetter = encodeLetter(getKeyLetter(e));
            changeKeyboardButtonHighlight(getButtonId(newLetter), true);
        }
        if(codingWay === "decode") {
            changeKeyboardButtonHighlight(getButtonId(getKeyLetter(e)), true);
        }
    }
});

$(document).keyup(function (e) {
    if (captureKeys && getKeyLetter(e) !== false) {
        if(codingWay === "encode") {
            const newLetter = encodeLetter(getKeyLetter(e));
            changeKeyboardButtonHighlight(getButtonId(newLetter), false);
            rotateRotors();
            addEncryptedLetter(newLetter);
            updateRotorsSequence();
        }
        if(codingWay === "decode") {
            changeKeyboardButtonHighlight(getButtonId(getKeyLetter(e)), false);
        }
    }
});

function startEncoding() {
    $("#startEncodingButton").css("display", "none");
    $("#stopEncodingButton").css("display", "inline");
    updateAllInputsStatus();
    generateCodePattern();
    resetMessage();
    captureKeys = true;
}

function stopEncoding() {
    $("#stopEncodingButton").css("display", "none");
    $("#startEncodingButton").css("display", "inline");
    updateAllInputsStatus();
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
    return currentLetter;
}

function updateAllInputsStatus() {
    $("thead").toggleClass("disabled-element");
    $("tbody").toggleClass("disabled-element");
}

function copyToClipboard(inputId) {
    const copyValue = $(inputId);
    copyValue.select();
    document.execCommand("copy");
    alert("Copied to clipboard");
}

function decodingMethodChange(method) {
    const currentClasses = $(".pattern-method")[0].classList;
    if(method === "pattern") {
        $(".manual-method").toggleClass("hidden-method");
    }
    if(method === "manual") {
        $(".pattern-method").toggleClass("hidden-method");
    }
    $(".pattern-method").toggleClass("hidden-method");
    $(".manual-method").toggleClass("hidden-method");
}

function startDecoding() {
    if(checkPatternCode()) {
        $(".decoding-methods").toggleClass("disabled-element");
        captureKeys = true;
    } else {
        alert("Your pattern is invalid");
        $("#patternCode").val("");
    }

}

function stopDecoding() {
    $(".decoding-methods").toggleClass("disabled-element");
    captureKeys = false;
}

function checkPatternCode() {
    if(!$("#patternCode").val().match(
        /^\[((\{[A-Z]\ \=\>\ [A-Z]\}\,\ )+\{[A-Z]\ \=\>\ [A-Z]\}){0,26}\]\;\[(\d{1,2}\,\ )+\d{1,2}\]$/)) {
        return false;
    }
    else {
        return true;
    }

}

function fillInputsFromPattern() {
    const patternString = $("#patternCode").val();
    const patternArray = patternString.split(";");
    let crossValues = patternArray[0];
    crossValues = crossValues.substring(1, crossValues.length - 1);
    crossValues = crossValues.split(",");
    let rotorsValues = patternArray[1];
    rotorsValues = rotorsValues.substring(1, rotorsValues.length - 1);
    rotorsValues = rotorsValues.split(",");

    crossValues = translatePatternToKeyCodes(crossValues)
    fillCrossFromPattern(crossValues);

    console.log(crossValues);
    console.log(rotorsValues);
}