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

function decodeLetterViaCross(letter) {
    const allInputs = $(".cross-input");
    for(let i=1; i<allInputs.length; i+=2) {
        if (allInputs[i].value === letter) {
            return allInputs[i-1].value;
        }
    }
    return letter;
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

function translatePatternToKeyCodes(patternArray){
    let crossKeyCodes = [];
    for (let i = 0; i < patternArray.length; i++) {
        const tmp = patternArray[i].split(" => ");
        const precodedLetter = tmp[0].split("{")[1];
        const encodedLetter = tmp[1].split("}")[0];
        crossKeyCodes.push([precodedLetter, encodedLetter]);
    }
    return crossKeyCodes;
}

function fillCrossFromPattern(crossArray) {
    for (let i = 0; i < crossArray.length; i++) {
        const inputId = "#cross-" + crossArray[i][0];
        $(inputId).val(crossArray[i][1]);
    }
}

function checkIsCrossExist(letter, currentInputId) {
    let tmp = false;
    for (let i = 0; i < keyCodes.length; i++) {
        const inputId = "#cross-" + keyCodes[i]["letter"];
        if (inputId !== currentInputId && $(inputId).val() === letter) {
            tmp = true;
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
    const tmp = inputId.split("#");
    const preCrossedInputId = "#pre" + tmp[1];
    if ($(preCrossedInputId).val() === $(inputId).val()) {
        alert("Cannot make a pair with self");
        $(inputId).val("");
        return false;
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
    $(inputId).val("");
}

class CrossPanel {
    constructor() {
        this.pairs = [];
    }

    addPair(letter1, letter2) {
        this.pairs.push([letter1, letter2]);
    }

    removePair(pairId) {
        this.pairs.splice(pairId, 1);
    }

    findPair(letter) {
        const pairId = this.findPairId(letter);
        return this.pairs[pairId];
    }

    findPairId(letter) {
        for (let i = 0; i < this.pairs; i++) {
            if (this.pairs[i][0] === letter || this.pairs[i][1] === letter) {
                return i;
            }
        }
        return false;
    }

    findConflict(letter) {
        for (let i = 0; i < this.pairs.length; i++) {
            if (this.pairs[i][0] === letter || this.pairs[i][1] === letter) {
                return true;
            }
        }
        return false;
    }

    updateCrossPanelUI() {
        this.clearCrossPanelUI();
        for (let i = 0; i < this.pairs; i++) {
            $("#precross-" + this.pairs[i][0]).val(this.pairs[i][1]);
            $("#precross-" + this.pairs[i][1]).val(this.pairs[i][0]);
        }
    }

    clearCrossPanel() {
        this.pairs = [];
        this.clearCrossPanelUI();
    }

    clearCrossPanelUI() {
        for (let i = 0; i < letters.length; i++) {
            $("#cross-" + letters[i]).val("");
        }
    }

    updateCrossPanelFromPattern(crossArray) {
        for (let i = 0; i < crossArray.length; i++) {
            this.addPair(crossArray[i][0], crossArray[i][1]);
        }
    }

    generateCrossPanelUI() {
        for (let i = 0; i < letters.length; i++) {
            let newCrossTableInputPrecross = document.createElement("INPUT");
            newCrossTableInputPrecross.id = "precross-" + letters[i];
            newCrossTableInputPrecross.className = "cross-input";
            newCrossTableInputPrecross.setAttribute("type", "text");
            newCrossTableInputPrecross.setAttribute("value", letters[i]);
            newCrossTableInputPrecross.setAttribute("disabled", "true");

            let newCrossTableCellPrecross = document.createElement("TD");
            newCrossTableCellPrecross.appendChild(newCrossTableInputPrecross);

            let newCrossTableInputCross = document.createElement("INPUT");
            newCrossTableInputCross.id = "cross-" + letters[i];
            newCrossTableInputCross.className = "cross-input";
            newCrossTableInputCross.setAttribute("type", "text");

            let newCrossTableCellCross = document.createElement("TD");
            newCrossTableCellCross.appendChild(newCrossTableInputCross);

            let newCrossTableRow = document.createElement("TR");
            newCrossTableRow.appendChild(newCrossTableCellPrecross);
            newCrossTableRow.appendChild(newCrossTableCellCross);

            if (i < 13) {
                $("#tbody1").append(newCrossTableRow);
            } else {
                $("#tbody2").append(newCrossTableRow);
            }
        }
    }

}