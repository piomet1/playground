Playground.Preloader = function(game) {
    this.ready = false;
}

Playground.Preloader.prototype = {
    preload : function() {
        var title = this.add.bitmapText(this.world.centerX, this.world.centerY, "title-font", "Playground", 48);
        title.anchor.setTo(0.5);

        this.preloadText = this.add.text(this.world.centerX, this.world.centerY + 60, '', {
            fill: '#ffffff',
            font: '18px'
        });
        this.preloadText.anchor.setTo(0.5);

        this.load.tilemap('level1', 'assets/data/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('grass-tiles', 'assets/images/grass-tiles-2-small.png');
        this.load.image('tree', 'assets/images/tree2-final.png');
        this.load.image('mainMenuButton', 'assets/images/buttonStock1d.png');
        this.load.spritesheet('indiana', 'assets/images/indianajones.png', 32, 48, 16);

        this.load.onLoadStart.add(this.loadStart, this);
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
    },
    create: function() {
    },
    update: function() {
        if (this.ready == true) {
            this.game.state.start(
                'MainMenu',
                Phaser.Plugin.StateTransition.Out.SlideBottom,
                Phaser.Plugin.StateTransition.In.SlideTop
            );
        }
    },
    loadStart: function() {
        this.preloadText.setText('Game assets loading...'); 
    },
    fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.preloadText.setText('Game loading: ' + progress + '% - ' + totalLoaded + ' out of ' + totalFiles);
    },
    loadComplete: function() {
        this.preloadText.setText('Load complete');
        this.ready = true;
    }
}
