let captureKeys = false;
let codingWay;
$(document).ready(function (){
    resetRotorsCounter();
    generateRotorsTableRows();
    const inputIdPrefix = "#cross-";

    //filtering non-letter & backspace & delete keycodes
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
        let newLetter;
        if(codingWay === "encode") {
            newLetter = encodeLetter(getKeyLetter(e));
        }
        if(codingWay === "decode") {
            newLetter = decodeLetter(getKeyLetter(e));
        }
        changeKeyboardButtonHighlight(getButtonId(newLetter), true);
    }
});

$(document).keyup(function (e) {
    if (captureKeys && getKeyLetter(e) !== false) {
        let newLetter;
        if(codingWay === "encode") {
            newLetter = encodeLetter(getKeyLetter(e));
        }
        if(codingWay === "decode") {
            newLetter = decodeLetter(getKeyLetter(e));
        }
        changeKeyboardButtonHighlight(getButtonId(newLetter), false);
        rotateRotors("forward");
        addLetterToMessage(newLetter);
        updateRotorsSequence();
    }
});

function updateCodingWay(direction) {
    codingWay = direction;
}

function startEncoding() {
    resetMessage();
    $("#startEncodingButton").css("display", "none");
    $("#startDecodingButton").css("display", "none");
    $("#stopEncodingButton").css("display", "inline");
    changeConfigurationFieldsStatus();
    generateCodePattern();
    captureKeys = true;
    updateCodingWay("encode");
}

function stopEncoding() {
    resetRotors();
    $("#stopEncodingButton").css("display", "none");
    $("#startEncodingButton").css("display", "inline");
    $("#startDecodingButton").css("display", "inline");
    changeConfigurationFieldsStatus();
    captureKeys = false;
}

function startDecoding() {
    if(checkPatternCode()) {
        resetMessage();
        $("textarea").attr("readonly", true);
        changeConfigurationFieldsStatus();
        $("#startDecodingButton").css("display", "none");
        $("#startEncodingButton").css("display", "none");
        $("#stopDecodingButton").css("display", "inline");
        fillInputsFromPattern();
        captureKeys = true;
        updateCodingWay("decode");
    } else {
        alert("Your pattern is invalid");
        $("#patternCode").val("");
    }

}

function stopDecoding() {
    resetRotors();
    changeConfigurationFieldsStatus();
    $("#startDecodingButton").css("display", "inline");
    $("#startEncodingButton").css("display", "inline");
    $("#stopDecodingButton").css("display", "none");
    $("textarea").attr("readonly", false);
    captureKeys = false;
}

function resetMessage() {
    $("#message").val("");
}

function addLetterToMessage(letter) {
    $("#message").val($("#message").val() + letter);
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
    let currentLetter = encodeLetterViaCross(keyLetter);
    for (let i = 0; i < rotors.length; i++) {
        currentLetter = encodeLetterViaRotor(i, currentLetter);
    }
    return currentLetter;
}

function decodeLetter(keyLetter) {
    let currentLetter = keyLetter;
    for (let i = rotors.length; i > 0; i--) {
        currentLetter = decodeLetterViaRotor(i - 1, currentLetter);
    }
    currentLetter = decodeLetterViaCross(currentLetter);
    return currentLetter;
}

function changeConfigurationFieldsStatus() {
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
    $(".pattern-method").toggleClass("hidden-method");
    $(".manual-method").toggleClass("hidden-method");
    if(method === "pattern") {
        $(".manual-method").toggleClass("hidden-method");
    }
    if(method === "manual") {
        $(".pattern-method").toggleClass("hidden-method");
    }
}

function checkPatternCode() {
    if(!$("#patternCode").val().match(
        /^\[((\{[A-Z]\ \=\>\ [A-Z]\}\,\ )+\{[A-Z]\ \=\>\ [A-Z]\}){0,26}\]\;\[(\d{1,2}\,\ )+\d{1,2}\]$/)
        && $("#patternCode").val() !== "") {
        return false;
    }
    else {
        return true;
    }
}

function openEncodePage() {
    window.location.href = "encode.html";
}
function openDecodePage() {
    window.location.href = "decode.html";
}