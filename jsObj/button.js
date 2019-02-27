class Button {
    constructor(id, classArray, functionArray, attributes, parentId, text) {
        this.id = id;
        this.class = classArray;
        this.functions = functionArray;
        this.attributes = attributes;
        this.parentId = parentId;
        this.text = text;
    }

    addToUI(enigma) {
        let newButton = document.createElement("BUTTON");
        newButton.id = this.id;
        for (let i = 0; i < this.class.length; i++) {
            newButton.classList.add(this.class[i]);
        }
        for (let i = 0; i < this.attributes.length; i++) {
            newButton.setAttribute(this.attributes[i].name, this.attributes[i].value);
        }
        for (let i = 0; i < this.functions.length; i++) {
            newButton = enigma.parseFunctions(newButton, this.functions[i].type,
                this.functions[i].name, this.functions[i].parameters);
        }
        newButton.innerHTML = this.text;
        $("#" + this.parentId).append(newButton);
    }
}