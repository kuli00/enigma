const rotorsTemplate = [
    [
        {"in" : "A", "out" : "D", "currentIndex" : 0},
        {"in" : "B", "out" : "M", "currentIndex" : 1},
        {"in" : "C", "out" : "T", "currentIndex" : 2},
        {"in" : "D", "out" : "W", "currentIndex" : 3},
        {"in" : "E", "out" : "S", "currentIndex" : 4},
        {"in" : "F", "out" : "I", "currentIndex" : 5},
        {"in" : "G", "out" : "L", "currentIndex" : 6},
        {"in" : "H", "out" : "R", "currentIndex" : 7},
        {"in" : "I", "out" : "U", "currentIndex" : 8},
        {"in" : "J", "out" : "Y", "currentIndex" : 9},
        {"in" : "K", "out" : "Q", "currentIndex" : 10},
        {"in" : "L", "out" : "N", "currentIndex" : 11},
        {"in" : "M", "out" : "K", "currentIndex" : 12},
        {"in" : "N", "out" : "F", "currentIndex" : 13},
        {"in" : "O", "out" : "E", "currentIndex" : 14},
        {"in" : "P", "out" : "J", "currentIndex" : 15},
        {"in" : "Q", "out" : "C", "currentIndex" : 16},
        {"in" : "R", "out" : "A", "currentIndex" : 17},
        {"in" : "S", "out" : "Z", "currentIndex" : 18},
        {"in" : "T", "out" : "B", "currentIndex" : 19},
        {"in" : "U", "out" : "P", "currentIndex" : 20},
        {"in" : "V", "out" : "G", "currentIndex" : 21},
        {"in" : "W", "out" : "X", "currentIndex" : 22},
        {"in" : "X", "out" : "O", "currentIndex" : 23},
        {"in" : "Y", "out" : "H", "currentIndex" : 24},
        {"in" : "Z", "out" : "V", "currentIndex" : 25},
    ],
    [
        {"in" : "A", "out" : "H", "currentIndex" : 0},
        {"in" : "B", "out" : "Q", "currentIndex" : 1},
        {"in" : "C", "out" : "Z", "currentIndex" : 2},
        {"in" : "D", "out" : "G", "currentIndex" : 3},
        {"in" : "E", "out" : "P", "currentIndex" : 4},
        {"in" : "F", "out" : "J", "currentIndex" : 5},
        {"in" : "G", "out" : "T", "currentIndex" : 6},
        {"in" : "H", "out" : "M", "currentIndex" : 7},
        {"in" : "I", "out" : "O", "currentIndex" : 8},
        {"in" : "J", "out" : "B", "currentIndex" : 9},
        {"in" : "K", "out" : "L", "currentIndex" : 10},
        {"in" : "L", "out" : "N", "currentIndex" : 11},
        {"in" : "M", "out" : "C", "currentIndex" : 12},
        {"in" : "N", "out" : "I", "currentIndex" : 13},
        {"in" : "O", "out" : "F", "currentIndex" : 14},
        {"in" : "P", "out" : "D", "currentIndex" : 15},
        {"in" : "Q", "out" : "Y", "currentIndex" : 16},
        {"in" : "R", "out" : "A", "currentIndex" : 17},
        {"in" : "S", "out" : "W", "currentIndex" : 18},
        {"in" : "T", "out" : "V", "currentIndex" : 19},
        {"in" : "U", "out" : "E", "currentIndex" : 20},
        {"in" : "V", "out" : "U", "currentIndex" : 21},
        {"in" : "W", "out" : "S", "currentIndex" : 22},
        {"in" : "X", "out" : "R", "currentIndex" : 23},
        {"in" : "Y", "out" : "K", "currentIndex" : 24},
        {"in" : "Z", "out" : "X", "currentIndex" : 25},
    ],
    [
        {"in" : "A", "out" : "U", "currentIndex" : 0},
        {"in" : "B", "out" : "Q", "currentIndex" : 1},
        {"in" : "C", "out" : "N", "currentIndex" : 2},
        {"in" : "D", "out" : "T", "currentIndex" : 3},
        {"in" : "E", "out" : "L", "currentIndex" : 4},
        {"in" : "F", "out" : "S", "currentIndex" : 5},
        {"in" : "G", "out" : "Z", "currentIndex" : 6},
        {"in" : "H", "out" : "F", "currentIndex" : 7},
        {"in" : "I", "out" : "M", "currentIndex" : 8},
        {"in" : "J", "out" : "R", "currentIndex" : 9},
        {"in" : "K", "out" : "E", "currentIndex" : 10},
        {"in" : "L", "out" : "H", "currentIndex" : 11},
        {"in" : "M", "out" : "D", "currentIndex" : 12},
        {"in" : "N", "out" : "P", "currentIndex" : 13},
        {"in" : "O", "out" : "X", "currentIndex" : 14},
        {"in" : "P", "out" : "K", "currentIndex" : 15},
        {"in" : "Q", "out" : "I", "currentIndex" : 16},
        {"in" : "R", "out" : "B", "currentIndex" : 17},
        {"in" : "S", "out" : "V", "currentIndex" : 18},
        {"in" : "T", "out" : "Y", "currentIndex" : 19},
        {"in" : "U", "out" : "G", "currentIndex" : 20},
        {"in" : "V", "out" : "J", "currentIndex" : 21},
        {"in" : "W", "out" : "C", "currentIndex" : 22},
        {"in" : "X", "out" : "W", "currentIndex" : 23},
        {"in" : "Y", "out" : "O", "currentIndex" : 24},
        {"in" : "Z", "out" : "A", "currentIndex" : 25},
    ]
];

class Rotor {
    constructor(rotorId) {
        this.id = rotorId;
        this.values = JSON.parse(JSON.stringify( rotorsTemplate[rotorId]));
    }
}

let rotors = [];

const reverseCylinder = [
    {"in":"A", "out": "Y"},
    {"in":"B", "out": "R"},
    {"in":"C", "out": "U"},
    {"in":"D", "out": "H"},
    {"in":"E", "out": "Q"},
    {"in":"F", "out": "S"},
    {"in":"G", "out": "L"},
    {"in":"I", "out": "P"},
    {"in":"J", "out": "X"},
    {"in":"K", "out": "N"},
    {"in":"M", "out": "O"},
    {"in":"T", "out": "Z"},
    {"in":"V", "out": "W"}
];

let rotorsCounter = new Array(rotors.length);

function encodeLetterViaRotor(rotorId, letter) {
    const currentRotor = rotors[rotorId];
    const encodedLetter = currentRotor.filter(l => l.in === letter);
    return encodedLetter[0].out;
}

function decodeLetterViaRotor(rotorId, letter) {
    const currentRotor = rotors[rotorId];
    const decodedLetter = currentRotor.filter(l => l.out === letter);
    return decodedLetter[0].in;
}

function manipulateViaReverseCylinder(letter) {
    let tmp = reverseCylinder.filter(l => l.in === letter);
    if (tmp.length > 0) {
        return tmp[0].out;
    } else {
        tmp = reverseCylinder.filter(l => l.out === letter);
        return tmp[0].in;
    }
}

function resetRotorsCounter() {
    for (let i = 0; i < rotorsCounter.length; i++) {
        rotorsCounter[i] = 0;
    }
}

function changeRotorsAssignment(rotorId, direction) {
    let newRotor = rotors[rotorId];
    if (direction === "forward") {
        const tmpEncodedLetter = newRotor[newRotor.length - 1]["out"];
        const tmpLetterIndex = newRotor[newRotor.length - 1]["currentIndex"];
        for (let i = newRotor.length - 1; i > 0; i--) {
            newRotor[i]["out"] = newRotor[i - 1]["out"];
            newRotor[i]["currentIndex"] = newRotor[i - 1]["currentIndex"];
        }
        newRotor[0]["out"] = tmpEncodedLetter;
        newRotor[0]["currentIndex"] = tmpLetterIndex;
    }
    if (direction === "back") {
        const tmpEncodedLetter = newRotor[0]["out"];
        const tmpLetterIndex = newRotor[0]["currentIndex"];
        for (let i = 0 ; i < newRotor.length - 1; i++) {
            newRotor[i]["out"] = newRotor[i + 1]["out"];
            newRotor[i]["currentIndex"] = newRotor[i + 1]["currentIndex"];
        }
        newRotor[newRotor.length - 1]["out"] = tmpEncodedLetter;
        newRotor[newRotor.length - 1]["currentIndex"] = tmpLetterIndex;
    }
    rotors[rotorId] = newRotor;
}

function resetRotors() {
    rotors = JSON.parse(JSON.stringify( rotorsTemplate ));
    resetRotorsCounter();
    updateRotorsSequence();
}

function rotateRotors(direction) {
    changeRotorsAssignment(0, direction);
    rotorsCounter[0]++;
    for (let i = 0; i < rotors.length; i++){
        if (rotorsCounter[i] >= keyCodes.length) {
            rotorsCounter[i+1]++;
            rotorsCounter[i] = 0;
            if (i+1 < rotors.length) {
                changeRotorsAssignment(i+1, direction);
            }
        }
    }
}

function generateRotorSequence(rotorId) {
    let rotorString = "";
    for (let i = 0; i < rotors[rotorId].length; i++) {
        rotorString += rotors[rotorId][i]["out"];
    }
    return rotorString;
}

function generateRotorsTableRows() {
    for (let i = 0; i < rotors.length; i++) {
        let rotorChangeButtonFront = document.createElement("BUTTON");
        rotorChangeButtonFront.classList.add("rotor-button");
        rotorChangeButtonFront.innerHTML = "&#8656;";
        rotorChangeButtonFront.onclick = function() {
            changeRotorsAssignment(i, "back");
            updateRotorCounter(i, 1);
            updateRotorsSequence();
        };
        let rotorChangeButtonEnd = document.createElement("BUTTON");

        rotorChangeButtonEnd.classList.add("rotor-button");
        rotorChangeButtonEnd.innerHTML = "&#8658;";
        rotorChangeButtonEnd.onclick = function () {
            changeRotorsAssignment(i, "forward");
            updateRotorCounter(i, -1);
            updateRotorsSequence();
        };

        let headCell = document.createElement("TD");
        headCell.id = "rotor-head-cell-" + i;
        headCell.innerText = "Rotor #" + i;

        let sequenceSpan = document.createElement("SPAN");
        sequenceSpan.id = "rotor-sequence-span-" + i;
        sequenceSpan.innerText = generateRotorSequence(i);

        let sequenceCell = document.createElement("TD");
        sequenceCell.appendChild(rotorChangeButtonFront);
        sequenceCell.id = "rotor-sequence-cell-" + i;
        sequenceCell.appendChild(sequenceSpan);
        sequenceCell.appendChild(rotorChangeButtonEnd);

        let newRow = document.createElement("TR");
        newRow.id = "rotor-" + i;
        newRow.appendChild(headCell);
        newRow.appendChild(sequenceCell);
        $("#rotorsValues").append(newRow);
    }
}

function updateRotorsSequence() {
    for (let i = 0; i < rotors.length; i++) {
        const cellId = "#rotor-sequence-span-" + i;
        $(cellId).text(generateRotorSequence(i));
    }
}

function translatePatternToRotorsShift(rotorsValues) {
    let newValues = [];
    for (let i = 0; i < rotorsValues.length; i++) {
        newValues.push(parseInt(rotorsValues[i]));
    }
    return newValues;
}

function adjustRotors(rotorsValues) {
    for (let i = 0; i < rotorsValues.length; i++) {
        rotorsCounter[i] = rotorsValues[i];
        for (let j = 0; j < rotorsValues[i]; j++) {
            changeRotorsAssignment(i, "back");
        }
    }
    updateRotorsSequence();
}

function updateRotorCounter(rotorId, direction) {
    rotorsCounter[rotorId] += direction;
    if(rotorsCounter[rotorId] === -1) {
        rotorsCounter[rotorId] = 25;
    }
    if(rotorsCounter[rotorId] === 26) {
        rotorsCounter[rotorId] = 0;
    }
}