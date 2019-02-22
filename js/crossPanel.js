function encodeLetterViaCross(letter) {
    const crossInputId = "#cross-" + letter;
    let newLetter;
    if ($(crossInputId).val() !== "") {
        newLetter = $(crossInputId).val();
    } else {
        newLetter = letter;
    }
    return newLetter;
}

function autoFillCross(inputId) {
    if (validateCross(inputId) && checkIsCrossExist($(inputId).val(), inputId)) {
        $(inputId).val("");
        alert("Choosen cross already exist");
    } else {
        const crossLetterId = "#cross-" + $(inputId).val();
        const tmp = inputId.split("#");
        const choosenLetterId = "#pre" + tmp[1];
        $(crossLetterId).val($(choosenLetterId).val());
    }
}

function checkIsCrossExist(letter, currentInputId) {
    let tmp = false;
    for (let i = 0; i < keyCodes.length; i++) {
        const inputId = "#cross-" + keyCodes[i]["letter"];
        if (inputId !== currentInputId) {
            if ($(inputId).val() === letter) {
                tmp = true;
            }
        }
    }
    return tmp;
}

function validateCross(inputId) {
    if (!$(inputId).val().match(/^[a-zA-Z]+$/)) {
        alert("Please type only letters");
        $(inputId).val("");
        return false;
    }
    if ($(inputId).val().match(/^[a-z]+$/)) {
        const newValue = $(inputId).val().toUpperCase();
        $(inputId).val(newValue);
    }
    return true;
}

function resetCross() {
    const inputIdPrefix = "#cross-";
    for (let i = 0; i < keyCodes.length; i++) {
        let inputId = inputIdPrefix + keyCodes[i]["letter"];
        $(inputId).val("");
    }
}

function removePair(inputId) {
    const removeInputId = "#cross-" + $(inputId).val();
    $(removeInputId).val("");
}