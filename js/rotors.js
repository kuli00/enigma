let rotors = [
    [
        {"precodedLetter" : "A", "encodedLetter" : "D"},
        {"precodedLetter" : "B", "encodedLetter" : "M"},
        {"precodedLetter" : "C", "encodedLetter" : "T"},
        {"precodedLetter" : "D", "encodedLetter" : "W"},
        {"precodedLetter" : "E", "encodedLetter" : "S"},
        {"precodedLetter" : "F", "encodedLetter" : "I"},
        {"precodedLetter" : "G", "encodedLetter" : "L"},
        {"precodedLetter" : "H", "encodedLetter" : "R"},
        {"precodedLetter" : "I", "encodedLetter" : "U"},
        {"precodedLetter" : "J", "encodedLetter" : "Y"},
        {"precodedLetter" : "K", "encodedLetter" : "Q"},
        {"precodedLetter" : "L", "encodedLetter" : "N"},
        {"precodedLetter" : "M", "encodedLetter" : "K"},
        {"precodedLetter" : "N", "encodedLetter" : "F"},
        {"precodedLetter" : "O", "encodedLetter" : "E"},
        {"precodedLetter" : "P", "encodedLetter" : "J"},
        {"precodedLetter" : "Q", "encodedLetter" : "C"},
        {"precodedLetter" : "R", "encodedLetter" : "A"},
        {"precodedLetter" : "S", "encodedLetter" : "Z"},
        {"precodedLetter" : "T", "encodedLetter" : "B"},
        {"precodedLetter" : "U", "encodedLetter" : "P"},
        {"precodedLetter" : "V", "encodedLetter" : "G"},
        {"precodedLetter" : "W", "encodedLetter" : "X"},
        {"precodedLetter" : "X", "encodedLetter" : "O"},
        {"precodedLetter" : "Y", "encodedLetter" : "H"},
        {"precodedLetter" : "Z", "encodedLetter" : "V"},
    ],
    [
        {"precodedLetter" : "A", "encodedLetter" : "H"},
        {"precodedLetter" : "B", "encodedLetter" : "Q"},
        {"precodedLetter" : "C", "encodedLetter" : "Z"},
        {"precodedLetter" : "D", "encodedLetter" : "G"},
        {"precodedLetter" : "E", "encodedLetter" : "P"},
        {"precodedLetter" : "F", "encodedLetter" : "J"},
        {"precodedLetter" : "G", "encodedLetter" : "T"},
        {"precodedLetter" : "H", "encodedLetter" : "M"},
        {"precodedLetter" : "I", "encodedLetter" : "O"},
        {"precodedLetter" : "J", "encodedLetter" : "B"},
        {"precodedLetter" : "K", "encodedLetter" : "L"},
        {"precodedLetter" : "L", "encodedLetter" : "N"},
        {"precodedLetter" : "M", "encodedLetter" : "C"},
        {"precodedLetter" : "N", "encodedLetter" : "I"},
        {"precodedLetter" : "O", "encodedLetter" : "F"},
        {"precodedLetter" : "P", "encodedLetter" : "D"},
        {"precodedLetter" : "Q", "encodedLetter" : "Y"},
        {"precodedLetter" : "R", "encodedLetter" : "A"},
        {"precodedLetter" : "S", "encodedLetter" : "W"},
        {"precodedLetter" : "T", "encodedLetter" : "V"},
        {"precodedLetter" : "U", "encodedLetter" : "E"},
        {"precodedLetter" : "V", "encodedLetter" : "U"},
        {"precodedLetter" : "W", "encodedLetter" : "S"},
        {"precodedLetter" : "X", "encodedLetter" : "R"},
        {"precodedLetter" : "Y", "encodedLetter" : "K"},
        {"precodedLetter" : "Z", "encodedLetter" : "X"},
    ],
    [
        {"precodedLetter" : "A", "encodedLetter" : "U"},
        {"precodedLetter" : "B", "encodedLetter" : "Q"},
        {"precodedLetter" : "C", "encodedLetter" : "N"},
        {"precodedLetter" : "D", "encodedLetter" : "T"},
        {"precodedLetter" : "E", "encodedLetter" : "L"},
        {"precodedLetter" : "F", "encodedLetter" : "S"},
        {"precodedLetter" : "G", "encodedLetter" : "Z"},
        {"precodedLetter" : "H", "encodedLetter" : "F"},
        {"precodedLetter" : "I", "encodedLetter" : "M"},
        {"precodedLetter" : "J", "encodedLetter" : "R"},
        {"precodedLetter" : "K", "encodedLetter" : "E"},
        {"precodedLetter" : "L", "encodedLetter" : "H"},
        {"precodedLetter" : "M", "encodedLetter" : "D"},
        {"precodedLetter" : "N", "encodedLetter" : "P"},
        {"precodedLetter" : "O", "encodedLetter" : "X"},
        {"precodedLetter" : "P", "encodedLetter" : "K"},
        {"precodedLetter" : "Q", "encodedLetter" : "I"},
        {"precodedLetter" : "R", "encodedLetter" : "B"},
        {"precodedLetter" : "S", "encodedLetter" : "V"},
        {"precodedLetter" : "T", "encodedLetter" : "Y"},
        {"precodedLetter" : "U", "encodedLetter" : "G"},
        {"precodedLetter" : "V", "encodedLetter" : "J"},
        {"precodedLetter" : "W", "encodedLetter" : "C"},
        {"precodedLetter" : "X", "encodedLetter" : "W"},
        {"precodedLetter" : "Y", "encodedLetter" : "O"},
        {"precodedLetter" : "Z", "encodedLetter" : "A"},
    ]
];
let rotorsCounter = new Array(rotors.length);


function encodeViaRotor(rotorId, letter) {
    const currentRotor = rotors[rotorId];
    const encodedLetter = currentRotor.filter(l => l.precodedLetter === letter);
    return encodedLetter[0]["encodedLetter"];
}

function resetRotorsCounter() {
    for (let i = 0; i < rotorsCounter.length; i++) {
        rotorsCounter[i] = 0;
    }

}

function changeRotorsAssignment(rotorId) {
    let newRotor = rotors[rotorId];
    const tmp = newRotor[newRotor.length -1]["encodedLetter"];
    for (let i = newRotor.length - 1; i > 0; i--) {
        newRotor[i]["encodedLetter"] = newRotor[i-1]["encodedLetter"];
    }
    newRotor[0]["encodedLetter"] = tmp;
    rotors[rotorId] = newRotor;
}

function resetRotors() {
    location.reload();
}

function rotateRotors() {
    changeRotorsAssignment(0);
    rotorsCounter[0]++;
    for (let i = 0; i < rotors.length; i++){
        if (rotorsCounter[i] >= keyCodes.length) {
            rotorsCounter[i+1]++;
            rotorsCounter[i] = 0;
            if (i+1 < rotors.length) {
                changeRotorsAssignment(i+1);
            }
        }
    }
}

function generateRotorSequence(rotorId) {
    let rotorString = "";
    for (let i = 0; i < rotors[rotorId].length; i++) {
        rotorString += rotors[rotorId][i]["encodedLetter"];
    }
    return rotorString;
}

function generateRotorsTableRows() {
    for (let i = 0; i < rotors.length; i++) {
        var headCell = document.createElement("TD");
        headCell.id = "rotor-head-cell-" + i;
        headCell.innerText = "Rotor #" + i;

        var sequenceCell = document.createElement("TD");
        sequenceCell.id = "rotor-sequence-cell-" + i;
        sequenceCell.innerText = generateRotorSequence(i);

        var newRow = document.createElement("TR");
        newRow.id = "rotor-" + i;
        newRow.appendChild(headCell);
        newRow.appendChild(sequenceCell);
        $("#rotorsValues").append(newRow);
    }
}

function updateRotorsSequence() {
    for (let i = 0; i < rotors.length; i++) {
        const cellId = "#rotor-sequence-cell-" + i;
        $(cellId).text(generateRotorSequence(i));
    }
}

function printRotorsFromArray(rotorId) {
    for (let i = 0; i < 26; i++) {
        var tmp = '{"precodedLetter" : "' + keyCodes[i]["letter"] + '", "encodedLetter" : "' + rotors[rotorId][i] + '"}, ';
        console.log(tmp);
    }
}

function printRotors(rotorId) {
    for (let i = 0; i < 26; i++) {
        var tmp = '{"precodedLetter" : "' + keyCodes[i]["letter"] +
            '", "encodedLetter" : "' + rotors[rotorId][i]["encodedLetter"] +
            '", "currentIndex" : ' + i + '}, ';
        console.log(tmp);
    }
}