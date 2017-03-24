export default class PreloaderState extends Phaser.State {

    init() {
        this.stage.backgroundColor = "#000";
    }

    preload() {
        this.ready = false;

        let title = this.game.add.bitmapText(
            this.game.world.centerX,
            this.game.world.centerY,
            "title-font",
            this.game.title,
            48
        );
            
        title.anchor.setTo(0.5);

        this.preloadText = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY + 60,
            "",
            {
                fill: "#ffffff",
                font: "18px"
            }
        );

        this.preloadText.anchor.setTo(0.5);

        this.game.load.tilemap(
            "level1",
            "./data/tilemaps/level1.json",
            null,
            Phaser.Tilemap.TILED_JSON
        );

        this.game.load.image("trees", "./assets/images/trees_by_ayene_chan.png");
        this.game.load.image("rtp_tileset", "./assets/images/rtp_tileset_by_telles0808.png");
        this.game.load.image("natures_tiles", "./assets/images/nature_tile_ii_by_ayene_chan.png");
        this.game.load.image("wood_tileset", "./assets/images/wood_tileset.png");
        this.game.load.image("mountain_landscape", "./assets/images/mountain_landscape.png");
        this.game.load.image("mainMenuButton", "./assets/images/buttonStock1d.png");
        this.game.load.spritesheet("indiana", "./assets/images/indianajones.png", 32, 48, 16);
        this.game.load.spritesheet("mushrooms", "./assets/images/shrooms_by_ayene_chan.png", 32, 32, 12);
        this.game.load.spritesheet("butterflies", "./assets/images/butterflies_by_qtpi.png", 32, 32, 96);
        this.game.load.audio("forest_bg1", "./assets/sounds/forest_background1.ogg");

        this.game.load.onLoadStart.add(
            this.loadStart,
            this
        );
        this.game.load.onFileComplete.add(
            this.fileComplete,
            this
        );
        this.game.load.onLoadComplete.add(
            this.loadComplete,
            this
        );
    }

    create() {}

    update() {
        if (this.ready == true) {
            this.game.state.start("MainMenu");
        }
    }

    loadStart() {
        this.preloadText.setText(
            this.game.getTranslation("assets_loading")
        ); 
    }

    fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.preloadText.setText(
            this.game.getTranslation("percent_loading", {
                "{percent}": progress,
                "{itemsLoaded}": totalLoaded,
                "{itemsTotal}": totalFiles
            })
        );
    }

    loadComplete() {
        this.ready = true;
    }
}
