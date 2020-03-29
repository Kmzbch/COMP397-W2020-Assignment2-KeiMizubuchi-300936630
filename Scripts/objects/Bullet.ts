module objects {
    export class Bullet extends GameObject {

        // private fields
        private _verticalSpeed?: number;
        private _horizontalSpeed?: number;

        // constructor
        constructor(x: number, y: number, direction: Vector2 = Vector2.zero()) {
            super(config.Game.ASSETS.getResult("bullet"), new Vector2(x, y), true);

            // set bullet velocity
            let speed = 10;
            direction.scale(speed);
            this.velocity = direction; // velocity = direction * speed

            this.Start();
        }

        // private method
        protected _checkBounds(): void {

        }

        private _move(): void {
            this.position = Vector2.add(this.position, this.velocity);
        }


        // PUBLIC METHODS
        public Start(): void {
            this.name = "bullet";

            // play sound
            let bgm = createjs.Sound.play("shot", { volume: 0.2 });

            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {

        }

    }
}