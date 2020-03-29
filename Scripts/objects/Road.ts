module objects {
    export class Road extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("road"));

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void {
            // display in loop
            if (this.y >= 0) {
                this.Reset();
            }
        }

        private _move(): void {
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        public Start(): void {
            // set velocity
            this._verticalSpeed = 10; // 10 px per frame
            this.velocity = new Vector2(0, this._verticalSpeed);

            this.Reset();
        }

        public Update(): void {
            if (config.Game.SCENE_STATE === scenes.State.PLAY || config.Game.SCENE_STATE === scenes.State.GAMEOVER) {
                this._move();

            }

            this._checkBounds();
        }

        public Reset(): void {
            // display in loop
            this.position = new Vector2(0, -874);
        }

    }
}