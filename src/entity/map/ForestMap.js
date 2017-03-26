import MushroomFactory from "entity/mushroom/MushroomFactory"
import ButterflyFactory from "entity/butterfly/ButterflyFactory"
import TreeFactory from "entity/tree/TreeFactory"

export default class ForestMap extends Phaser.Tilemap {

    constructor({game, key}) {
        super(game, key);

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

        this.placeTrees();
        this.placeMushrooms();
        this.spawnButterflies(5);
    }

    placeTrees() {
        let treesPlacements = this.objects.Trees;
        this.trees = this.game.add.group();

        let treesTypes = [
            "healthy-leafy",
            "sickle-leafy",
            "dead-leafy"
        ];

        for (let i = 0; i < treesPlacements.length; i++) {
            let placement = treesPlacements[i];
            let type = placement.type ? 
                placement.type : 
                Phaser.ArrayUtils.getRandomItem(treesTypes);

            let tree = TreeFactory.getInstance({
                game: this.game,
                x: (placement.x + placement.width/2),
                y: (placement.y + placement.height/2),
                type: type
            });

            this.trees.add(tree);
        }

        this.trees.sort();
    }

    placeMushrooms() {
        let tileWidth = 32;
        let tileHeight = 32;
        let mushroomsPercent = 30;

        let mushroomsPlacements = this.objects.Mushrooms;
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

        let mushroomTypes = [
            "porcini",
            "saffron-milk-cap",
            "shrimp",
            "honey-agaric",
            "death-cap"
        ];

        for (let i = 0; i < mushroomsNumber; i++) {
            let randomTile = Phaser.ArrayUtils
                .removeRandomItem(mushroomsTilesPositions);

            let mushroom = MushroomFactory.getInstance({
                game: this.game,
                x: randomTile.x,
                y: randomTile.y,
                type: Phaser.ArrayUtils.getRandomItem(mushroomTypes)
            });

            this.mushrooms.add(mushroom);
        }
    }

    spawnButterflies(butterfliesNumber) {
        this.butterflies = this.game.add.group();
        this.game.world.moveDown(this.butterflies);

        let butterflyColors = [
            "green",
            "willow-green",
            "gray",
            "light-gray",
            "blue",
            "light-blue",
            "pink",
            "cream"
        ];

        for (let i = 0; i < butterfliesNumber; i++) {
            let butterfly = ButterflyFactory.getInstance({
                game: this.game,
                x: this.game.rnd.integerInRange(0, this.game.world.width),
                y: this.game.rnd.integerInRange(0, this.game.world.height),
                color: Phaser.ArrayUtils.getRandomItem(butterflyColors)
            });

            this.butterflies.add(butterfly);
        }
    }
}
