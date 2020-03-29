module scenes {
    export class Instructions extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _storyLabel: objects.Label;
        private _howToPlayLabel: objects.Label;

        private _backButton: objects.Button;

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
            this._storyLabel = new objects.Label(
                "The super police car shoots down the bandits trucks!",
                "20px", "Consolas", "#FFFF00", 320, 180, true);


            this._howToPlayLabel = new objects.Label(
                "Move Car: Mouse movement \n\n" +
                "Shoot Bullet: Left click\n\n" +
                "\n\n" +
                "- Holes make Police car spinning.\n\n" +
                "- Trucks are destroyed with 3 bullets or bumped out\n\n" +
                "- Player lose life when bumping\n\n" +
                "- Hearts: gains players' lives\n\n",
                "20px", "Consolas", "#FFFF00", 320, 250, true);

            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 550, true);

            this._road = new objects.Road();
            this.Main();
        }

        public Update(): void {
            this._road.Update();
        }

        public Main(): void {
            this.addChild(this._road);

            this.addChild(this._storyLabel);
            this.addChild(this._howToPlayLabel);

            this.addChild(this._backButton);

            this._backButton.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.MENU;
            });

        }

        //
        public DetectClickEvent(): void {

        }


    }
}