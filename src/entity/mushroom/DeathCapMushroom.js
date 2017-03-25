import Mushroom from "entity/mushroom/Mushroom"

export default class DeathCapMushroom extends Mushroom {

    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: Phaser.ArrayUtils.getRandomItem([8,11])
        });
    }
}
