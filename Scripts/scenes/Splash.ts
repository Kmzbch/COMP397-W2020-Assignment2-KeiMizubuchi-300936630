module scenes {
    export class Splash extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _splash: createjs.Bitmap;

        private _startTime: number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();

            this._startTime = createjs.Ticker.getTime();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void {
            this._splash = new createjs.Bitmap(config.Game.ASSETS.getResult("splash"));
            let props = new createjs.PlayPropsConfig().set({ delay: 500 })
            let bgm = createjs.Sound.play("splashSound", props);

            this.Main();
        }

        public Update(): void {
            if (createjs.Ticker.getTime() - this._startTime >= 4000) {
                config.Game.SCENE_STATE = scenes.State.MENU;
            }
        }

        public Main(): void {

            this.addChild(this._splash);

        }

        //
        public DetectClickEvent(): void {

        }

    }
}