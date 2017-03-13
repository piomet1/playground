Playground.MainMenu = function(game) {

}

Playground.MainMenu.prototype = {
    preload : function() {
        var title = this.add.bitmapText(this.world.centerX, this.world.centerY - 100, "title-font", "Playground", 78);
        title.anchor.setTo(0.5);
    },
    create: function() {
        this.mainMenuButtons = this.add.group();

        var playButton = this.add.button(this.world.centerX, this.world.centerY, 'mainMenuButton', this.newGame);
        playButton.anchor.setTo(0.5);

        this.mainMenuButtons.add(playButton);
    },
    newGame: function() {
        this.game.state.start(
            'Game',
            Phaser.Plugin.StateTransition.Out.SlideBottom,
            Phaser.Plugin.StateTransition.In.SlideTop
        );
    }
}
