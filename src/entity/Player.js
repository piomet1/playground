export default class Player extends Phaser.Sprite {

    constructor({game, x, y}) {
        super(game, x, y, "indiana", 0);

        this.anchor.setTo(0.5);

        this.game.physics.enable(this);
        this.body.setSize(24, 7, 4, 41);

        this.game.camera.follow(this);

        this.animations.add("bottom", [0,1,2,3], 6, true, true);
        this.animations.add("left", [4,5,6,7], 6, true, true);
        this.animations.add("right", [8,9,10,11], 6, true, true);
        this.animations.add("top", [12,13,14,15], 6, true, true);
    }
}
