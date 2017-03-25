export default class Mushroom extends Phaser.Sprite {

    constructor({game, x, y, frame}) {
        super(game, x, y, "mushrooms", frame);

        this.enableBody = true;
    }
}
