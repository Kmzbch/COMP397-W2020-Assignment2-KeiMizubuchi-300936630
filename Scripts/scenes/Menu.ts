module scenes {
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _gameTitle: objects.Label;
        private _playButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _exitButton: objects.Button;
        private _road: objects.Road;

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
            this._gameTitle = new objects.Label(config.Game.GAME_TITLE, "60px", "Consolas", "#FFFF00", 320, 180, true);

            // buttons
            this._playButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 320, 330, true);
            this._instructionsButton = new objects.Button(config.Game.ASSETS.getResult("instructionsButton"), 320, 400, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 320, 470, true);


            this._road = new objects.Road();
            this.Main();
        }

        public Update(): void {
            this._road.Update();
        }

        public Main(): void {

            this.addChild(this._road);

            this.addChild(this._gameTitle);


            this.addChild(this._playButton);
            this.addChild(this._instructionsButton);
            this.addChild(this._exitButton);

            this._playButton.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });

            this._instructionsButton.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.INSTRUCTIONS;
            });

            this._exitButton.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.SPLASH;
            });

        }

        //
        public DetectClickEvent(): void {

        }

    }
}