import Butterfly from "entity/butterfly/Butterfly"

export default class PinkButterfly extends Butterfly {
    
    constructor({game, x, y}) {
        super({
            game: game,
            x: x,
            y: y,
            frame: 3
        });

        this.speed = 9

        this.animations.add("idle", [3,4,5,39,40,41], this.speed, true, true);
        this.animations.add("left", [15,16,17], this.speed, true, true);
        this.animations.add("right", [27,28,29], this.speed, true, true);
        this.animations.play("idle");
    }

}
