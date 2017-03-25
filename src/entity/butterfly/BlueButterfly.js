import Butterfly from "entity/butterfly/Butterfly"

export default class BlueButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 9
        });

        this.speed = 10;

        this.animations.add("idle", [9,10,11,45,46,47], this.speed, true, true);
        this.animations.add("left", [21,22,23], this.speed, true, true);
        this.animations.add("right", [33,34,35], this.speed, true, true);
        this.animations.play("idle");
    }

}
