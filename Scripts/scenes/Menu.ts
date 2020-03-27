module scenes {
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _gameTitle: objects.Label;
        private _playButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _exitButton: objects.Button;

        private _ocean: objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            // instantiate a new Text object
            this._gameTitle = new objects.Label("The Reckless", "80px", "Consolas", "#FFFF00", 320, 180, true);

            // buttons
            this._playButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 320, 330, true);
            this._instructionsButton = new objects.Button(config.Game.ASSETS.getResult("instructionsButton"), 320, 380, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 320, 430, true);


            this._ocean = new objects.Ocean();
            this.Main();
        }

        public Update(): void {
            this._ocean.Update();
        }

        public Main(): void {

            this.addChild(this._ocean);

            this.addChild(this._gameTitle);


            this.addChild(this._playButton);
            this.addChild(this._instructionsButton);
            this.addChild(this._exitButton);

            this._playButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });

            this._instructionsButton.on("click", () => {
                config.Game.SCENE = scenes.State.Instructions;
            });

        }

        //
        public DetectClickEvent(): void {

        }

    }
}