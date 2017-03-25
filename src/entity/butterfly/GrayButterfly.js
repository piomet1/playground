import Butterfly from "entity/butterfly/Butterfly"

export default class GrayButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 48
        });

        this.speed = 6;

        this.animations.add("idle", [48,49,50,84,85,86], this.speed, true, true);
        this.animations.add("left", [60,61,62], this.speed, true, true);
        this.animations.add("right", [72,73,74], this.speed, true, true);
        this.animations.play("idle");
    }
}
