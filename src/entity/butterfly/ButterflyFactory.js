import GreenButterfly from "entity/butterfly/GreenButterfly"
import BlueButterfly from "entity/butterfly/BlueButterfly"
import WillowGreenButterfly from "entity/butterfly/WillowGreenButterfly"
import PinkButterfly from "entity/butterfly/PinkButterfly"
import CreamButterfly from "entity/butterfly/CreamButterfly"
import LightBlueButterfly from "entity/butterfly/LightBlueButterfly"
import GrayButterfly from "entity/butterfly/GrayButterfly"
import LightGrayButterfly from "entity/butterfly/LightGrayButterfly"

export default class ButterflyFactory {

    static getInstance({game, x, y, color}) {
        switch (color) {
            case "green":
                return new GreenButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "blue":
                return new BlueButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "willow-green":
                return new WillowGreenButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "pink":
                return new PinkButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "cream":
                return new CreamButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "light-blue":
                return new LightBlueButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "gray":
                return new GrayButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            case "light-gray":
                return new LightGrayButterfly({
                    game: game,
                    x: x,
                    y: y
                });
                break;
            default:
                throw new TypeError("Unknown butterfly color: " + color);
            
        }
    }
}
