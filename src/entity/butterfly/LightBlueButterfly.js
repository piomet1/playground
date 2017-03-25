import Butterfly from "entity/butterfly/Butterfly"

export default class LightBlueButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 51
        });

        this.speed = 10;

        this.animations.add("idle", [51,52,53,87,88,89], this.speed, true, true);
        this.animations.add("left", [63,64,65], this.speed, true, true);
        this.animations.add("right", [75,76,77], this.speed, true, true);
        this.animations.play("idle");
    }
}
