export default class Butterfly extends Phaser.Sprite {

    constructor({game, x, y}) {
        super(game, x, y, "butterflies", 0);

        this.anchor.setTo(0.5);

        this.enableBody = true;

        let colors = {
            "green": [0,1,2,36,37,38],
            "willow-green": [45,46,47,90,91,92],
            "pink": [3,4,5,39,40,41],
            "cream": [6,7,8,42,43,44],
            "blue": [9,10,11,45,46,47],
            "light-blue": [51,52,53,87,88,89],
            "gray": [48,49,50,93,94,95],
            "light-gray": [40,41,42,84,85,86]
        };

        this.animations.add("idle", colors["blue"], 6, true, true);

        this.frame = colors["blue"][0];
        this.animations.play("idle");
    }
}
