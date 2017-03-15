import Player from "entity/Player"

export default class GameState extends Phaser.State {

    preload() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    create() {
        this.initTilemap();
        this.initPlayer();
        this.map.createLayer("Foreground");
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.collisionLayer);
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
            game: this.game,
            x: this.enterMarker.x,
            y: this.enterMarker.y
        });

        this.game.stage.addChild(this.player);

        this.game.camera.follow(this.player);
    }
}
