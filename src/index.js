import Boot from 'states/Boot';
import Preloader from 'states/Preloader';
import MainMenu from 'states/MainMenu';
import Game from 'states/Game';

class Playground extends Phaser.Game {
    constructor(language) {
        super(
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio,
            Phaser.AUTO
        );

        this.language = language;

        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('Game', Game, false);

        this.state.start('Boot');
    }

    getTranslation(key, data) {
        if (this.translations[key]) {
            data = data ? data : {};
            var translations = this.translations;
            return this.translations[key].replace(/{\w+}/g, function(placeholder) {
                if (data[placeholder]) {
                    return data[placeholder];
                } else {
                    console.warn(placeholder + ' not passed for ' + translations[key]);
                    return placeholder;
                }
                return data[placeholder] || placeholder;
            });
        } else {
            console.error("Translation for key " + key + " doesn't exists");
            return key;
        }
    }
}

new Playground('pl');
