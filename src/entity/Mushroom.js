export default class Mushroom extends Phaser.Sprite {

    constructor({game, x, y}) {
        super(game, x, y, "mushrooms", 0);

        this.anchor.setTo(0.5);

        this.frame = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }
}
