class Enigma {
    constructor(rotorsNumber, rotors, buttons) {
        this.captureKeys = false;
        this.rotorsNumber = rotorsNumber;
        this.rotors = rotors;
    }
    startCoding() {
        this.resetMessage();
        changeConfigurationFieldsStatus();
        generateCodePattern();
        captureKeys = true;
        updateCodingWay("encode");
    }

    stopEncoding() {
        resetRotors();
        changeConfigurationFieldsStatus();
        captureKeys = false;
    }

    resetMessage() {
        $("#message").val("");
    }

    addLetterToMessage(letter) {
        $("#message").val($("#message").val() + letter);
    }

    encodeLetter(keyLetter) {
        let currentLetter = encodeLetterViaCross(keyLetter);
        for (let i = 0; i < rotors.length; i++) {
            currentLetter = encodeLetterViaRotor(i, currentLetter);
        }
        currentLetter = manipulateViaReverseCylinder(currentLetter);
        for (let i = rotors.length -1; i >= 0; i--) {
            currentLetter = decodeLetterViaRotor(i, currentLetter);
        }
        currentLetter = encodeLetterViaCross(currentLetter);
        return currentLetter;
    }

    parseFunctions(domElement, functionType, functionName, functionParametersArray) {
        let modifiedDOMElement = domElement;
        let functionHTMLString = functionName + "(";
        for (let i = 0; i < functionParametersArray.length; i++) {
            functionHTMLString = functionHTMLString + functionParametersArray[i];
            if (i !== functionParametersArray.length - 1) {
                functionHTMLString += ", ";
            }
        }
        functionHTMLString += ")";
        modifiedDOMElement.setAttribute(functionType, functionHTMLString);
        return modifiedDOMElement;
    }

    resetCross() {
        console.log("a");
    }
}