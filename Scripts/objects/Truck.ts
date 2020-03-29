module objects {
    export class Truck extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;
        private _horizontalSpeed?: number;

        private _isSpinning: boolean = false;

        private _health: number = 3;

        // PUBLIC PROPERTIES
        get health(): number {
            return this._health;
        }

        set health(newNum: number) {
            this._health = newNum;
        }

        get isSpinning(): boolean {
            return this._isSpinning;
        }

        set isSpinning(newState: boolean) {
            this._isSpinning = newState;
        }

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("truck"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {

            // check each bound
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
            if (this.position.y < 0 - this.height) {
                this.Reset();
            }
            if (this.position.x > config.Game.SCREEN_WIDTH + this.width) {
                this.Reset();
            }
            if (this.position.x < 0 - + this.width) {
                this.Reset();
            }

        }

        private _move(): void {
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        public Start(): void {
            this.name = "truck";

            this.Reset();
        }

        public Update(): void {
            this._move();

            // when spinning
            if (this._isSpinning) {
                this.rotation += 10;
            }

            this._checkBounds();
        }

        public Reset(): void {
            // reset spinning state
            this.isSpinning = false;
            this.rotation = 0;
            this._health = 3;

            // set velocity
            this._verticalSpeed = util.Mathf.RandomRange(1, 2); // speed ranges from 5 to 10 px per frame
            this._horizontalSpeed = util.Mathf.RandomRange(0, 0); // random horizontal draft
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);

            // set start position
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);

            this.position = new Vector2(randomX, randomY, this);
        }
    }
}