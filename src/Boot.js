var Playground = {
    GAME_WIDTH: 640,
    GAME_HEIGHT: 640,
    STATE_TRANSITION_DURATION: 1500
};
Playground.Boot = function(game) {

}

Playground.Boot.prototype = {
    preload : function() {
        this.stage.backgroundColor = '#000000';
        this.physics.startSystem(Phaser.Physics.ARCADE);
        Phaser.Plugin.StateTransition.In.SlideLeft.duration = Playground.STATE_TRANSITION_DURATION;
        Phaser.Plugin.StateTransition.Out.SlideRight.duration = Playground.STATE_TRANSITION_DURATION;
    },
    create: function() {
        this.input.onTap.addOnce(function() {
            this.game.state.start(
                'Preloader',
                Phaser.Plugin.StateTransition.Out.SlideBottom
            );
        }, this);
    }
}
