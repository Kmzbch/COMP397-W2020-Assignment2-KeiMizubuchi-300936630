module objects {
    export class Cloud extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number;
        private _horizontalSpeed?: number;

        private _isRotating: boolean = false;

        private _health: number = 3;

        // PUBLIC PROPERTIES



        get health(): number {
            return this._health;
        }

        set health(newNum: number) {
            this._health = newNum;
        }

        get isRotating(): boolean {
            return this._isRotating;
        }

        set isRotating(newState: boolean) {
            this._isRotating = newState;
        }

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("cloud"), new Vector2(), true);

            this._health = 3;

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {

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
            this.name = "cloud";

            //            this.alpha = 0.5; // transparency set to 50%

            this.Reset();
        }

        public Update(): void {
            this._move();

            if (this._isRotating) {
                this.rotation += 10;
            }

            this._checkBounds();
        }

        public Reset(): void {
            this.isRotating = false;
            this.rotation = 0;
            // this._verticalSpeed = util.Mathf.RandomRange(5, 10); // speed ranges from 5 to 10 px per frame
            // this._horizontalSpeed = util.Mathf.RandomRange(-2, 2); // random horizontal draft
            this._verticalSpeed = util.Mathf.RandomRange(1, 2); // speed ranges from 5 to 10 px per frame
            this._horizontalSpeed = util.Mathf.RandomRange(0, 0); // random horizontal draft

            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);

            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);

            this.position = new Vector2(randomX, randomY, this);
        }
    }
}