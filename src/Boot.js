var Playground = {
    GAME_WIDTH: 640,
    GAME_HEIGHT: 640,
    STATE_TRANSITION_DURATION: 1500
};

Playground.Boot = function(game) {}

Playground.Boot.prototype = {
    init: function() {
        //Skalowanie obszaru gry i wycentrowanie
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //Szybkość animacji przejść pomiędzy stanami
        Phaser.Plugin.StateTransition.In.SlideLeft.duration = Playground.STATE_TRANSITION_DURATION;
        Phaser.Plugin.StateTransition.Out.SlideRight.duration = Playground.STATE_TRANSITION_DURATION;
    },
    preload: function() {
        this.load.bitmapFont('title-font', 'assets/fonts/bitmapFonts/title-font.png', 'assets/fonts/bitmapFonts/title-font.xml');
    },
    create: function() {
        //Uruchamiamy stan preloader'a
        this.game.state.start(
            'Preloader',
            Phaser.Plugin.StateTransition.Out.SlideBottom
        );
    }
}
