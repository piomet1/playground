import Mushroom from "entity/mushroom/Mushroom"

export default class HoneyAgaricMushroom extends Mushroom {

    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: Phaser.ArrayUtils.getRandomItem([0,1])
        });
    }
}
