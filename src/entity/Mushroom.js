export default class Mushroom extends Phaser.Sprite {

    constructor({game, x, y}) {
        super(game, x, y, "mushrooms", game.rnd.integerInRange(0, 11));

        this.enableBody = true;
    }
}
