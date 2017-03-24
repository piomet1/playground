import Mushroom from "entity/Mushroom"
import Butterfly from "entity/Butterfly"

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
        this.background = this.game.add.group();

        let baseLayer = this.createLayer("Terrain4");
        baseLayer.resizeWorld();

        this.background.add(baseLayer);
        this.background.add(this.createLayer("Terrain3"));
        this.background.add(this.createLayer("Terrain2"));
        this.background.add(this.createLayer("Terrain1"));

        this.collisionLayer = this.createLayer("Collision");
        this.collisionLayer.visible = false;
        this.setCollisionByExclusion([], true, this.collisionLayer);

        this.foreground = this.game.add.group();

        // Warstwa elementów nad graczem
        this.foreground.add(this.createLayer("Foreground5"));
        this.foreground.add(this.createLayer("Foreground4"));
        this.foreground.add(this.createLayer("Foreground3"));
        this.foreground.add(this.createLayer("Foreground2"));
        this.foreground.add(this.createLayer("Foreground1"));

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

        this.placeMushrooms();
        this.spawnButterflies(5);
    }

    placeMushrooms() {
        let tileWidth = 32;
        let tileHeight = 32;
        let mushroomsPercent = 30;

        let mushroomsPlacements = this.objects.MushroomsPlacement;
        let mushroomsTilesPositions = [];

        for (let i = 0; i < mushroomsPlacements.length; i++) {
            let placement = mushroomsPlacements[i];

            if (!placement.rectangle) {
                console.warn("Object (" + i + ") must be a rectangle");
                continue;
            }

            if (placement.width%tileWidth) {
                console.warn("Object (" + i + ") width must be multiple of " + tileWidth );
                continue;
            }

            if (placement.height%tileHeight) {
                console.warn("Object (" + i + ") height must be multiple of " + tileHeight );
                continue;
            }

            let x = mushroomsPlacements[i].width/tileWidth;
            let y = mushroomsPlacements[i].height/tileHeight;
            let zoneStartX = mushroomsPlacements[i].x;
            let zoneStartY = mushroomsPlacements[i].y;

            for (let row = 0; row < x; row++) {
                for (let col = 0; col < y; col++) {
                    mushroomsTilesPositions.push({
                        x: zoneStartX + (row * tileWidth),
                        y: zoneStartY + (col * tileHeight)
                    });
                }
            }
        }

        let mushroomsNumber = Phaser.Math
            .floorTo(mushroomsTilesPositions.length * (mushroomsPercent/100));

        this.mushrooms = this.game.add.group();
        this.game.world.moveDown(this.mushrooms);

        for (let i = 0; i < mushroomsNumber; i++) {
            let randomTile = Phaser.ArrayUtils
                .removeRandomItem(mushroomsTilesPositions);

            let mushroom = new Mushroom({
                game: this.game,
                x: randomTile.x,
                y: randomTile.y
            });

            this.mushrooms.add(mushroom);
        }
    }

    spawnButterflies(butterfliesNumber) {
        this.butterflies = this.game.add.group();

        for (let i = 0; i < butterfliesNumber; i++) {
            let butterfly = new Butterfly({
                game: this.game,
                x: this.game.rnd.integerInRange(0, 800),
                y: this.game.rnd.integerInRange(0, 600)
            });

            this.butterflies.add(butterfly);
        }
    }
}
