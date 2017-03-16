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

        this.game.load.image(
            "grass-tiles",
            "./assets/images/grass-tiles-2-small.png"
        );

        this.game.load.image(
            "tree",
            "./assets/images/tree2-final.png"
        );

        this.game.load.image(
            "tree2",
            "./assets/images/big_trees_by_schwarzenacht-d8y14re.png"
        );

        this.game.load.image(
            "mainMenuButton",
            "./assets/images/buttonStock1d.png"
        );

        this.game.load.spritesheet(
            "indiana",
            "./assets/images/indianajones.png",
            32,
            48,
            16
        );

        this.game.load.audio(
            "forest_bg1",
            "./assets/sounds/forest_background1.ogg"
        );

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
