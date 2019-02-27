$(document).ready(function() {
        let enigma = new Enigma(3, 1);
        let resetCrossButton = new Button("resetCrossButton", ["btn", "btn-warning"],
            [{"type": "onclick", "name": "enigma.resetCross", "parameters": []}],
            [],
            "configButtons",
            "Reset cross panel");
        let resetRotorsButton = new Button("resetRotorsButton", ["btn", "btn-warning"],
            [{"type": "onclick", "name": "resetRotors", "parameters": []}],
            [],
            "configButtons",
            "Reset rotors");
        resetCrossButton.addToUI(enigma);
        resetRotorsButton.addToUI(enigma);
    }
);

