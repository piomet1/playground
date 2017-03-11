Playground.Game = function(game) {

}

Playground.Game.prototype = {
    preload : function() {

    },
    create: function() {
        this.map = this.game.add.tilemap('level1');        
    }
}
