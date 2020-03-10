module scenes {
    export class Instructions extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _instructionLabel: objects.Label;
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
        public Start(): void {
            let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis pharetra elit vel maximus. Curabitur vel libero elementum, dignissim odio sed, ultrices lacus. Etiam lobortis ipsum ac dui vulputate finibus. Quisque quis tortor id nulla laoreet aliquam at non dolor. Mauris pellentesque aliquam orci et scelerisque. Vivamus dignissim ex consequat, consequat mauris ut, mollis magna. Vestibulum maximus sit amet eros vel suscipit. Cras id urna blandit, elementum lectus nec, varius neque. Aenean rhoncus placerat venenatis. Nullam vestibulum ligula at mi rhoncus, vitae semper augue vehicula.";
            // instantiate a new Text object
            this._instructionLabel = new objects.Label(text, "10px", "Consolas", "#FFFF00", 320, 180, true);

            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 330, true);


            this._ocean = new objects.Ocean();
            this.Main();
        }

        public Update(): void {
            this._ocean.Update();
        }

        public Main(): void {
            this.addChild(this._ocean);

            this.addChild(this._instructionLabel);


            this.addChild(this._backButton);

            this._backButton.on("click", () => {
                config.Game.SCENE = scenes.State.Menu;
            });

        }

        //
        public DetectClickEvent(): void {

        }


    }
}