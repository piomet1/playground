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
        this.map.trees.sort('y', Phaser.Group.SORT_ASCENDING);
    }

    initMap() {
        this.map = new ForestMap({game: this.game, key: "forest"});
        this.map.init();
    }

    initPlayer() {
        this.player = new Player({
            game: this.game,
            x: this.map.startMarker.x,
            y: this.map.startMarker.y
        });

        this.map.trees.add(this.player);

        this.game.camera.follow(this.player);
    }
}
