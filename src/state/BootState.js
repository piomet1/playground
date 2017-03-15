export default class BootState extends Phaser.State {

    init() {
        this.stage.backgroundColor = "#fff";

        //Skalowanie obszaru gry i wycentrowanie
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        //Szybkość animacji przejść pomiędzy stanami
        Phaser.Plugin.StateTransition.In.SlideLeft.duration = 1500;
        Phaser.Plugin.StateTransition.Out.SlideRight.duration = 1500;
    }

    preload() {
        //Inicjalizacja tłumaczeń fraz
        //this.game.load.json("i18n_pl", "./data/i18n/pl.json");
        //this.game.load.json("i18n_en", "./data/i18n/en.json");
        //this.game.translations = this.game.cache.getJSON("i18n_" + this.game.language);

        this.game.load.bitmapFont(
            "title-font",
            "./assets/fonts/bitmapFonts/title-font.png",
            "./assets/fonts/bitmapFonts/title-font.xml"
        );
    }

    create() {
        this.game.state.start(
            "Preloader",
            Phaser.Plugin.StateTransition.Out.SlideBottom
        );
    }
}
