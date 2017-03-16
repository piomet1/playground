export default class ForestMap extends Phaser.Tilemap {
    
    constructor({game, key}) {
        super(game, key);

        this.addTilesetImage("grass-tiles-2-small", "grass-tiles");
        this.addTilesetImage("tree2-final", "tree");
    }

    init() {
        this.createLayer("Base").resizeWorld();
        this.createLayer("Trunks");

        this.collisionLayer = this.createLayer("Collision");
        this.collisionLayer.visible = false;
        this.setCollisionByExclusion([], true, this.collisionLayer);

        // Warstwa elementów nad graczem
        this.createLayer("Foreground");

        this.startMarker = this.objects.Meta.filter(function(o) {
            return o.name == "Enter";
        });

        if (!this.startMarker.length) {
            console.warn("Start position for player not defined");
            return;
        }

        this.startMarker = this.startMarker[0];
    }
}
