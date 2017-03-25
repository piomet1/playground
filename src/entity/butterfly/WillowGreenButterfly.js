import Butterfly from "entity/butterfly/Butterfly"

export default class WillowGreenButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 54
        });

        this.speed = 11;

        this.animations.add("idle", [54,55,56,90,91,92], this.speed, true, true);
        this.animations.add("left", [66,67,68], this.speed, true, true);
        this.animations.add("right", [78,79,80], this.speed, true, true);
        this.animations.play("idle");
    }
}
