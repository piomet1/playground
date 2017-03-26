import HealthyLeafyTree from "entity/tree/HealthyLeafyTree"
import SickleLeafyTree from "entity/tree/SickleLeafyTree"
import DeadLeafyTree from "entity/tree/DeadLeafyTree"
import MagicLeafyTree from "entity/tree/MagicLeafyTree"

export default class TreeFactory {

    static getInstance({game, x, y, type}) {
        switch(type) {
            case "healthy-leafy":
                return new HealthyLeafyTree({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "sickle-leafy":
                return new SickleLeafyTree({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "dead-leafy":
                return new DeadLeafyTree({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "magic-leafy":
                return new MagicLeafyTree({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            default:
                throw new TypeError("Unknown tree type: " + type);
        }
    }
}
