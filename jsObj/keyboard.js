class Keyboard {
    constructor() {
        this.buttons = JSON.parse(JSON.stringify(keyboardLayout));
        this.keyCodes = JSON.parse(JSON.stringify(keyCodes));
    }
    generateKeyboard() {
        for (let i = 0; i < this.buttons.length; i++) {
            for (let j = 0; j < this.buttons[i].length; j++) {
                let newKeyboardKey = document.createElement("BUTTON");
                newKeyboardKey.id = this.buttons[i][j];
                newKeyboardKey.className = "keyboard-key";
                newKeyboardKey.setAttribute("disabled", "true");
                newKeyboardKey.innerHTML = this.buttons[i][j];
                $("#keyboard-row-" + (i + 1)).append(newKeyboardKey);
            }
        }
    }

    changeKeyboardButtonHighlight(buttonId, highlighted) {
        if (highlighted === true) {
            $(buttonId).css("background-color", "#ffeeba");
            $(buttonId).css("color", "#000000");
        } else {
            $(buttonId).css("background-color", "#5a6268");
            $(buttonId).css("color", "#ffffff");
        }
    }

    getKeyLetter(e) {
        const keyId = e.keyCode;
        const keyCodesRow = this.keyCodes.filter(k => k.keyCode === keyId);
        if (keyCodesRow === undefined) {
            return false;
        }
        return keyCodesRow[0]["letter"];
    }

    getButtonId(keyLetter) {
        return "#" + keyLetter;
    }
}