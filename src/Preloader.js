Playground.Preloader = function(game) {

}

Playground.Preloader.prototype = {
    preload : function() {
        this.stage.backgroundColor = '#04305A';
    },
    create: function() {
        this.input.onTap.addOnce(function() {
            this.game.state.start(
                'MainMenu',
                Phaser.Plugin.StateTransition.Out.SlideBottom,
                Phaser.Plugin.StateTransition.In.SlideTop
            );
        }, this);
    }
}
