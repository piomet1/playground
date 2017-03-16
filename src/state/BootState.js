export default class BootState extends Phaser.State {

    init() {
        this.stage.backgroundColor = "#000";

        //Skalowanie obszaru gry i wycentrowanie
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    }

    preload() {
        //Inicjalizacja tłumaczeń fraz
        this.game.load.json("i18n_pl", "./data/i18n/pl.json");
        this.game.load.json("i18n_en", "./data/i18n/en.json");

        this.game.load.bitmapFont(
            "title-font",
            "./assets/fonts/bitmapFonts/title-font.png",
            "./assets/fonts/bitmapFonts/title-font.xml"
        );
    }

    create() {
        this.game.translations = this.game.cache.getJSON("i18n_" + this.game.language);
        this.game.state.start("Preloader");
    }
}
