module objects {
    export class PoliceCar extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalPosition: number;

        private _isSpinning: boolean = false;

        // PUBLIC PROPERTIES
        get isSpinning(): boolean {
            return this._isSpinning;
        }

        set isSpinning(newState: boolean) {
            this._isSpinning = newState;
        }

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("policeCar"), 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        }

        private _move(): void {
            let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, 0.05);
            this.position = new Vector2(newPositionX, newPositionY);
        }

        private _spin(): void {
            this.position = Vector2.add(this.position, new Vector2(-5, -5));
        }

        // PUBLIC METHODS
        public Start(): void {
            this.name = "policeCar";

            // start position
            this._verticalPosition = 550;

            this.Reset();
        }

        public Update(): void {
            if (this._isSpinning) {
                this.rotation += 10;
                this._spin();
            } else {
                this._move();
            }
            this._checkBounds();
        }

        public Reset(): void {

        }

        public shoot() {
            return new Bullet(this.x, this.y, Vector2.up());
        }

    }

}