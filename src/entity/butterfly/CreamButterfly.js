import Butterfly from "entity/butterfly/Butterfly"

export default class CreamButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 6
        });

        this.speed = 7;

        this.animations.add("idle", [6,7,8,42,43,44], this.speed, true, true);
        this.animations.add("left", [18,19,20], this.speed, true, true);
        this.animations.add("right", [30,31,32], this.speed, true, true);
        this.animations.play("idle");
    }
}
