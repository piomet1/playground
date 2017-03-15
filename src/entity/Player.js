export default class Player extends Phaser.Sprite {

    constructor({game, x, y}) {
        super(game, x, y, "indiana", 0);

        this.anchor.setTo(0.5);

        this.game.physics.enable(this);
        this.body.setSize(24, 7, 4, 41);

        this.animations.add("bottom", [0,1,2,3], 6, true, true);
        this.animations.add("left", [4,5,6,7], 6, true, true);
        this.animations.add("right", [8,9,10,11], 6, true, true);
        this.animations.add("top", [12,13,14,15], 6, true, true);

        this.keyboard = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (this.keyboard.left.isDown) {
            this.body.velocity.x = -60;
            this.animations.play("left");
        } else if (this.keyboard.right.isDown) {
            this.body.velocity.x = 60;
            this.animations.play("right");
        } else if (this.keyboard.down.isDown) {
            this.body.velocity.y = 60;
            this.animations.play("bottom");
        } else if (this.keyboard.up.isDown) {
            this.body.velocity.y = -60;
            this.animations.play("top");
        } else {
            this.animations.stop();
            this.frame = 0;
        }
    }
}
