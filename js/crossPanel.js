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

function generateLettersOnSVG() {
    for (let i = 1; i <= keyboardLayout.length; i++) {
        for (let j = 1; j <= keyboardLayout[i-1].length; j++) {
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newCircle.id = "crossCircle-" + keyboardLayout[i-1][j-1];
            $("#crossPanel").append(newCircle);
            /*
            newElement.setAttribute("cx", j*25);
            newElement.setAttribute("cy", i*25);
            newElement.setAttribute("r", 10);
            newElement.setAttribute("stroke", "white");
            newElement.setAttribute("stroke-width", 3);
            newElement.setAttribute("fill", "black"); */
            $("#crossCircle-" + keyboardLayout[i-1][j-1]).attr({
                "cx": j * 75,
                "cy": i * 75,
                "r": 21,
                "stroke": "white",
                "stroke-width": 3,
                "fill": "black",
            });
            let newLetter = document.createElementNS("http://www.w3.org/2000/svg", "text");
            newLetter.id = "crossLetter-" + keyboardLayout[i-1][j-1];
            $("#crossPanel").append(newLetter);
            $("#crossLetter-" + keyboardLayout[i-1][j-1]).attr({
                "x": j * 75 - 6,
                "y": i * 75 + 6,
                "font-family": "Verdana",
                "font-size": 20,
                "fill": "white"
            });
            $("#crossLetter-" + keyboardLayout[i-1][j-1])[0].innerHTML = keyboardLayout[i-1][j-1];
        }
    }
}

function changePosition(inputId) {
    let x = 0;
    let y = 0;
    $(inputId).onmousemove(function () {
        $(inputId).attr({
            "cx": "a"
        });
    });
}