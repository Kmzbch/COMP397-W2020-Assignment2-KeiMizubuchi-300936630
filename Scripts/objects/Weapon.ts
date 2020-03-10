module objects {
    export class Weapon extends GameObject {

        private _verticalSpeed?: number;
        private _horizontalSpeed?: number;

        constructor(x: number, y: number, direction: Vector2 = Vector2.zero()) {
            super(config.Game.ASSETS.getResult("placeholder"), new Vector2(x, y), true);

            let speed = 10;
            direction.scale(speed);
            this.velocity = direction; // velocity = direction * speed

            this.Start();
        }

        // private method
        protected _checkBounds(): void {
            // if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
            //     this.Reset();
            // }
        }

        private _move(): void {
            this.position = Vector2.add(this.position, this.velocity);
        }


        // PUBLIC METHODS
        public Start(): void {
            this.name = "weapon";

            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {
            // this._verticalSpeed = util.Mathf.RandomRange(5, 10); // speed ranges from 5 to 10 px per frame
            // this._horizontalSpeed = util.Mathf.RandomRange(-2, 2); // random horizontal draft
            // this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);

            // let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            // let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);

            // this.position = new Vector2(randomX, randomY, this);
        }



    }
}