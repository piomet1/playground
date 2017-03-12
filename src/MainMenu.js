Playground.MainMenu = function(game) {

}

Playground.MainMenu.prototype = {
    preload : function() {
    },
    create: function() {

        this.playButton = this.add.button(this.world.centerX, this.world.centerY, 'mainMenuButton', this.newGame);
        this.playButton.anchor.setTo(0.5);
    },
    newGame: function() {
        this.game.state.start(
            'Game',
            Phaser.Plugin.StateTransition.Out.SlideBottom,
            Phaser.Plugin.StateTransition.In.SlideTop
        );
    }
}
