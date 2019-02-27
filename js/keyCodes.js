const keyCodes = [
    {"letter" : "A", "keyCode" : 65},
    {"letter" : "B", "keyCode" : 66},
    {"letter" : "C", "keyCode" : 67},
    {"letter" : "D", "keyCode" : 68},
    {"letter" : "E", "keyCode" : 69},
    {"letter" : "F", "keyCode" : 70},
    {"letter" : "G", "keyCode" : 71},
    {"letter" : "H", "keyCode" : 72},
    {"letter" : "I", "keyCode" : 73},
    {"letter" : "J", "keyCode" : 74},
    {"letter" : "K", "keyCode" : 75},
    {"letter" : "L", "keyCode" : 76},
    {"letter" : "M", "keyCode" : 77},
    {"letter" : "N", "keyCode" : 78},
    {"letter" : "O", "keyCode" : 79},
    {"letter" : "P", "keyCode" : 80},
    {"letter" : "Q", "keyCode" : 81},
    {"letter" : "R", "keyCode" : 82},
    {"letter" : "S", "keyCode" : 83},
    {"letter" : "T", "keyCode" : 84},
    {"letter" : "U", "keyCode" : 85},
    {"letter" : "V", "keyCode" : 86},
    {"letter" : "W", "keyCode" : 87},
    {"letter" : "X", "keyCode" : 88},
    {"letter" : "Y", "keyCode" : 89},
    {"letter" : "Z", "keyCode" : 90},
];

const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
];

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function showkeys() {
    let str = "[";
    for (let i = 0; i < keyCodes.length; i++) {
        str = str + '\"' + keyCodes[i].letter + '\", ';
    }
    console.log(str);
}