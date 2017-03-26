import Tree from "entity/tree/Tree"

export default class MagicLeafyTree extends Tree {

    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: Phaser.ArrayUtils.getRandomItem([3,4,5])
        });
    }
}
