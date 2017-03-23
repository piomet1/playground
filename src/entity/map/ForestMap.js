import Mushroom from "entity/Mushroom"

export default class ForestMap extends Phaser.Tilemap {
    
    constructor({game, key}) {
        super(game, key);

        this.addTilesetImage("trees_by_ayene_chan", "trees");
        this.addTilesetImage("rtp_tileset_by_telles0808", "rtp_tileset");
        this.addTilesetImage("nature_tile_ii_by_ayene_chan", "natures_tiles");
        this.addTilesetImage("wood_tileset", "wood_tileset");
        this.addTilesetImage("mountain_landscape", "mountain_landscape");
    }

    init() {
        this.createLayer("Terrain4").resizeWorld();
        this.createLayer("Terrain3")
        this.createLayer("Terrain2")
        this.createLayer("Terrain1")

        this.collisionLayer = this.createLayer("Collision");
        this.collisionLayer.visible = false;
        this.setCollisionByExclusion([], true, this.collisionLayer);

        // Warstwa elementów nad graczem
        this.createLayer("Foreground5");
        this.createLayer("Foreground4");
        this.createLayer("Foreground3");
        this.createLayer("Foreground2");
        this.createLayer("Foreground1");

        this.startMarker = this.objects.Meta.filter(function(o) {
            return o.name == "Start";
        });

        if (!this.startMarker.length) {
            console.warn("Start position for player not defined");
            return;
        }

        this.startMarker = this.startMarker[0];

        this.sound = this.game.add.audio("forest_bg1");
        this.sound.loopFull();

        this.createMushrooms();
    }

    createMushrooms() {
        let mushroomsPlacements = this.objects.MushroomsPlacement;
        let mushroomsTiles = 0;
        let tileWidth = 32;
        let tileHeight = 32;
        let x = 0;
        let y = 0;
        for (let i = 0; i < mushroomsPlacements.length; i++) {
            x = mushroomsPlacements[i].width/tileWidth;
            y = mushroomsPlacements[i].height/tileHeight;

            if (mushroomsPlacements[i].rectangle) {
                mushroomsTiles += (x*y);
            } else {
                console.warn("Object " + i + " must be a rectangle");
            }
        }

        let mushroomsNumber = Math.floor(mushroomsTiles * (30/100));

        for(let i = 0; i < mushroomsNumber; i++) {
            let mushroom = new Mushroom();
        }
    }
}
