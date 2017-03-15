export default class MainMenuState extends Phaser.State {
    preload() {
        let title = this.game.add.bitmapText(
            this.game.world.centerX,
            this.game.world.centerY - 100,
            "title-font",
            this.game.title,
            78
        );

        title.anchor.setTo(0.5);
    }

    create() {
        this.mainMenuButtons = this.game.add.group();

        let playButton = this.game.add.button(
            this.game.world.centerX,
            this.game.world.centerY,
            'mainMenuButton',
            this.newGame
        );

        playButton.anchor.setTo(0.5);

        this.mainMenuButtons.add(playButton);
    }

    newGame() {
        this.game.state.start(
            'Game',
            Phaser.Plugin.StateTransition.Out.SlideBottom,
            Phaser.Plugin.StateTransition.In.SlideTop
        );
    }
}
