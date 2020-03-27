module scenes {
    export class End extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _endLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        private _exitToMenuButton: objects.Button;
        private _backButton: objects.Button;
        private _ocean: objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void {


            //instantiate a new Text object
            this._endLabel = new objects.Label("GAME OVER", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            this._exitToMenuButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 530, true);

            this._scoreLabel = new objects.Label("SCORE: " + config.Game.SCORE.toString(), "24px", "Consolas", "#FFFF00", 320, 250, true);
            this._highScoreLabel = new objects.Label("HIGH SCORE: " + config.Game.HIGH_SCORE.toString(), "24px", "Consolas", "#FFFF00", 320, 300, true);


            this._ocean = new objects.Ocean();


            this.Main();
        }

        public Update(): void {
            this._ocean.Update();
        }

        public Main(): void {
            this.addChild(this._ocean);

            this.addChild(this._endLabel);

            this.addChild(this._scoreLabel);
            this.addChild(this._highScoreLabel);

            this.addChild(this._backButton);
            this.addChild(this._exitToMenuButton);

            this._backButton.on("click", () => {
                let bgm = createjs.Sound.stop();

                config.Game.LIVES = 5;
                config.Game.SCORE = 0;


                config.Game.SCENE = scenes.State.PLAY;
            });

            this._exitToMenuButton.on("click", () => {
                let bgm = createjs.Sound.stop();

                config.Game.LIVES = 5;
                config.Game.SCORE = 0;

                config.Game.SCENE = scenes.State.Menu;
            });

        }


        //
        public DetectClickEvent(): void {

        }

    }
}