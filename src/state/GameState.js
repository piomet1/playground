import Player from "entity/Player"
import ForestMap from "entity/map/ForestMap"

export default class GameState extends Phaser.State {

    preload() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    create() {
        this.initMap();
        this.initPlayer();
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.map.collisionLayer);
    }

    initMap() {
        this.map = new ForestMap({game: this.game, key: "level1"});
        this.map.init();
    }

    initPlayer() {
        this.player = new Player({
            game: this.game,
            x: this.map.startMarker.x,
            y: this.map.startMarker.y
        });

        this.game.world.addAt(this.player, 5);

        this.game.camera.follow(this.player);
    }
}
