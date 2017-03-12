Playground.Game = function(game) {

}

Playground.Game.prototype = {
    preload : function() {

    },
    create: function() {
        this.map = this.game.add.tilemap('level1');

        this.map.addTilesetImage('grass-tiles-2-small', 'grass-tiles');
        this.map.addTilesetImage('tree2-final', 'tree');

        this.baseLayer = this.map.createLayer('Base');
        this.collisionLayer = this.map.createLayer('Collision');
        this.collisionLayer.visible = false;

        this.map.setCollisionByExclusion([], true, this.collisionLayer);

        this.baseLayer.resizeWorld();

        var enterMarker = this.map.objects.Meta.filter(function(o) {
            return o.name == 'Enter'
        });

        if (enterMarker.length == 1) {
            this.enterMarker = enterMarker[0];
        }

        this.player = this.add.sprite(0, 0, 'indiana', 0);
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(1.5);
        this.physics.enable(this.player);
        this.camera.follow(this.player);

        this.player.animations.add('bottom', [0,1,2,3], 6, true, true);
        this.player.animations.add('left', [4,5,6,7], 6, true, true);
        this.player.animations.add('right', [8,9,10,11], 6, true, true);
        this.player.animations.add('top', [12,13,14,15], 6, true, true);

        this.player.position.set(this.enterMarker.x, this.enterMarker.y);

        this.map.createLayer('Foreground');

        this.cursors = this.input.keyboard.createCursorKeys();
    },
    update: function() {
        this.physics.arcade.collide(this.player, this.collisionLayer);
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -60;
            this.player.animations.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 60;
            this.player.animations.play('right');
        } else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = 60;
            this.player.animations.play('bottom');
        } else if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -60;
            this.player.animations.play('top');
        } else {
            this.player.animations.stop();
            this.player.frame = 0;
        }
    }
}
