import Tree from "entity/tree/Tree"

export default class SickleLeafyTree extends Tree {

    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: Phaser.ArrayUtils.getRandomItem([6,7,8])
        });
    }
}
