import PorciniMushroom from "entity/mushroom/PorciniMushroom"
import SaffronMilkCapMushroom from "entity/mushroom/SaffronMilkCapMushroom"
import ShrimpMushroom from "entity/mushroom/ShrimpMushroom"
import HoneyAgaricMushroom from "entity/mushroom/HoneyAgaricMushroom"
import DeathCapMushroom from "entity/mushroom/DeathCapMushroom"

export default class MushroomFactory {

    static getInstance({game, x, y, type}) {
        switch(type) {
            //Prawdziwek
            case "porcini":
                return new PorciniMushroom({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            //Rydz
            case "saffron-milk-cap":
                return new SaffronMilkCapMushroom({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            //Gołąbek winny
            case "shrimp":
                return new ShrimpMushroom({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            //Opieńka
            case "honey-agaric":
                return new HoneyAgaricMushroom({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            //Muchomor sromotnikowy
            case "death-cap":
                return new DeathCapMushroom({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            default:
                throw new TypeError("Unknown mushroom type: " + type);

        }
    }
}
