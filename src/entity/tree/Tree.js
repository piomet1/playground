export default class Tree extends Phaser.Sprite {

    constructor({game, x, y, frame}) {
        super(game, x, y, "trees", frame);

        this.enableBody = true;

        this.anchor.setTo(0.5, 0.94);
    }
}
