import Tree from "entity/tree/Tree"

export default class DeadLeafyTree extends Tree {

    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: Phaser.ArrayUtils.getRandomItem([9,10,11])
        });
    }
}
