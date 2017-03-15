import Player from "entity/Player"

export default class GameState extends Phaser.State {

    preload() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    create() {
        this.initTilemap();
        this.initPlayer();
        this.map.createLayer("Foreground");
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.collisionLayer);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -60;
            this.player.animations.play("left");
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 60;
            this.player.animations.play("right");
        } else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = 60;
            this.player.animations.play("bottom");
        } else if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -60;
            this.player.animations.play("top");
        } else {
            this.player.animations.stop();
            this.player.frame = 0;
        }
    }

    initTilemap() {
        this.map = this.game.add.tilemap("level1");

        this.map.addTilesetImage("grass-tiles-2-small", "grass-tiles");
        this.map.addTilesetImage("tree2-final", "tree");

        this.baseLayer = this.map.createLayer("Base");
        this.map.createLayer("Trunks");
        this.collisionLayer = this.map.createLayer("Collision");
        this.collisionLayer.visible = false;

        this.map.setCollisionByExclusion([], true, this.collisionLayer);

        this.baseLayer.resizeWorld();

        this.enterMarker = this.map.objects.Meta.filter(function(o) {
            return o.name == "Enter"
        });

        if (this.enterMarker.length == 1) {
            this.enterMarker = this.enterMarker[0];
        }
    }

    initPlayer() {
        this.player = new Player({
            game: this,
            x: this.enterMarker.x,
            y: this.enterMarker.y
        });

        this.game.stage.addChild(this.player);
    }
}
