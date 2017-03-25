import Butterfly from "entity/butterfly/Butterfly"

export default class GreenButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 0
        });

        this.speed = 12;

        this.animations.add("idle", [0,1,2,36,37,38], this.speed, true, true);
        this.animations.add("left", [12,13,14], this.speed, true, true);
        this.animations.add("right", [24,25,26], this.speed, true, true);
        this.animations.play("idle");
    }
}
