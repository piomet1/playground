Playground.Preloader = function(game) {

}

Playground.Preloader.prototype = {
    preload : function() {
        this.stage.backgroundColor = '#04305A';
        this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('grass-tiles', 'assets/images/grass-tiles-2-small.png');
        this.load.image('shrooms', 'assets/images/littleshrooms_0.png');
        this.load.image('bush', 'assets/images/qubodup-bush_0.png');
        this.load.image('berries', 'assets/images/qubodup-bush_berries_0.png');
        this.load.image('tree', 'assets/images/tree2-final.png');
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
