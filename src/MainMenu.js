Playground.MainMenu = function(game) {

}

Playground.MainMenu.prototype = {
    preload : function() {
        this.stage.backgroundColor = '#75BBFF';
    },
    create: function() {
        this.input.onTap.addOnce(function() {
            this.game.state.start(
                'Game',
                Phaser.Plugin.StateTransition.Out.SlideBottom,
                Phaser.Plugin.StateTransition.In.SlideTop
            );
        }, this);
    }
}
