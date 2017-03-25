export default class Butterfly extends Phaser.Sprite {

    constructor({game, x, y, frame}) {
        super(game, x, y, "butterflies", frame);

        this.anchor.setTo(0.5);

        this.enableBody = true;
    }
}
