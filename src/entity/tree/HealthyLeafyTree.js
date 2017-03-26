import Tree from "entity/tree/Tree"

export default class HealthyLeafyTree extends Tree {

    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: Phaser.ArrayUtils.getRandomItem([0,1,2])
        });
    }
}
