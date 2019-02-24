function generateCodePattern() {
    let codePattern = "";
    codePattern += generateCrossPattern();
    codePattern += generateRotorsPattern();
    $("#patternCode").val(codePattern);
    //fillInputsFromPattern();
}
function generateCrossPattern() {
    let crossPattern = [];
    for (let i = 0; i < keyCodes.length; i++) {
        const precodedLetter = $("#precross-" + keyCodes[i]["letter"]).val();
        const encodedLetter = $("#cross-" + keyCodes[i]["letter"]).val();
        if (encodedLetter !== "") {
            crossPattern.push({"precodedLetter" : precodedLetter, "encodedLetter" : encodedLetter});
        }
    }
    let crossPatternString = "[";
    for (let i = 0; i < crossPattern.length; i++) {
        crossPatternString = crossPatternString +
            "{" + crossPattern[i]["precodedLetter"] + " => " +
            crossPattern[i]["encodedLetter"] + "}";
        if (i !== crossPattern.length - 1) {
            crossPatternString += ", ";
        }
    }
    crossPatternString += "];";
    return crossPatternString;
}

function generateRotorsPattern() {
    let rotorsPattern = new Array(rotors.length);
    for (let i = 0; i < rotorsPattern.length; i++) {
        rotorsPattern[i] = rotors[i][0]["currentIndex"];
    }
    let rotorsPatternString = "[";
    for (let i = 0; i < rotorsPattern.length; i++) {
        rotorsPatternString += rotorsPattern[i];
        if (i !== rotorsPattern.length - 1) {
            rotorsPatternString += ", ";
        }
    }
    rotorsPatternString += "]";
    return rotorsPatternString;
}

function fillInputsFromPattern() {
    const patternString = $("#patternCode").val();
    const patternArray = patternString.split(";");

    let crossValues = patternArray[0];
    crossValues = crossValues.substring(1, crossValues.length - 1);
    if(crossValues !== "") {
        crossValues = crossValues.split(",");
        crossValues = translatePatternToKeyCodes(crossValues)
        fillCrossFromPattern(crossValues);
    }

    let rotorsValues = patternArray[1];
    rotorsValues = rotorsValues.substring(1, rotorsValues.length - 1);
    rotorsValues = rotorsValues.split(",");

    rotorsValues = translatePatternToRotorsShift(rotorsValues);
    adjustRotors(rotorsValues);
}