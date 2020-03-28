module objects {
    export class PoliceCar extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalPosition: number;

        private _health: number = 2;
        private _isRotating: boolean = false;

        // PUBLIC PROPERTIES

        get isRotating(): boolean {
            return this._isRotating;
        }

        set isRotating(newState: boolean) {
            this._isRotating = newState;
        }

        get health(): number {
            return this._health;
        }

        set health(newNum: number) {
            this._health = newNum;
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
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            // this.position = new Vector2(newPositionX, this._verticalPosition);
            let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            let newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, 0.05);
            this.position = new Vector2(newPositionX, newPositionY);

        }
        private _spin(): void {
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            // this.position = new Vector2(newPositionX, this._verticalPosition);
            // if (createjs.Ticker.getTicks() % 4 == 0) {
            //     this.position = Vector2.add(this.position, new Vector2(-5, -5));
            // } else if (createjs.Ticker.getTicks() % 4 == 1) {
            //     this.position = Vector2.add(this.position, new Vector2(-5, 5));
            // } else if (createjs.Ticker.getTicks() % 4 == 2) {
            //     this.position = Vector2.add(this.position, new Vector2(5, -5));
            // } else if (createjs.Ticker.getTicks() % 4 == 3) {
            //     this.position = Vector2.add(this.position, new Vector2(5, 5));
            // }
            this.position = Vector2.add(this.position, new Vector2(-5, -5));

        }


        private _checkHealth(): void {
            if (this.health <= 0) {
                console.log("You're already dead");
            }
        }


        // PUBLIC METHODS
        public Start(): void {
            this.name = "policeCar";

            // this._verticalPosition = 430; // locked to the bottom of the screen
            this._verticalPosition = 550; // locked to the bottom of the screen
        }

        public Update(): void {
            if (this._isRotating) {
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
            console.log("Shoot!");
            console.log(this.x);
            let bullet = new Bullet(this.x, this.y, Vector2.up());
            return bullet;
        }
        // public shoot(imagePath: string, aim: Vector2): objects.Bullet | null {
        //     // check if this player still have bullet or not
        //     if (this.bulletNum > 0) {
        //       let bullet = new Bullet(
        //         imagePath,
        //         this.position.x,
        //         this.position.y + 10,
        //         aim
        //       );
        //       this.bulletNum -= 1;
        //       return bullet;
        //     } else {
        //       return null; // nullable
        //     }
        //   }


    }

}