import BootState from "state/BootState";
import PreloaderState from "state/PreloaderState";
import MainMenuState from "state/MainMenuState";
import GameState from "state/GameState";

class Playground extends Phaser.Game {

    constructor(language) {
        super(640, 480, Phaser.CANVAS, "content", false, false, null);

        this.language = language;
        this.title = "Playground";
        this.translations = {};

        // Inicjalizacja stanów
        this.state.add("Boot", BootState, false);
        this.state.add("Preloader", PreloaderState, false);
        this.state.add("MainMenu", MainMenuState, false);
        this.state.add("Game", GameState, false);

        this.state.start("Boot");
    }

    getTranslation(key, data) {
        if (this.translations[key]) {
            data = data ? data : {};
            var translations = this.translations;
            return this.translations[key].replace(/{\w+}/g, function(placeholder) {
                if (data[placeholder]) {
                    return data[placeholder];
                } else {
                    console.warn(placeholder + " not passed for " + translations[key]);
                    return placeholder;
                }
                return data[placeholder] || placeholder;
            });
        } else {
            console.warn("Translation for key " + key + " doesn't exists");
            return key;
        }
    }
}

new Playground("pl");
