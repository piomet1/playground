import Butterfly from "entity/butterfly/Butterfly"

export default class LightGrayButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 57
        });

        this.speed = 7;

        this.animations.add("idle", [57,58,59,93,94,95], this.speed, true, true);
        this.animations.add("left", [69,70,71], this.speed, true, true);
        this.animations.add("right", [81,82,83], this.speed, true, true);
        this.animations.play("idle");
    }
}
