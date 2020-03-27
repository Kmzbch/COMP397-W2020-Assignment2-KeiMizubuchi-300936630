module objects {
    export class Avatar extends GameObject {
        // PRIVATE INSTANCE MEMBERS
        private _verticalPosition: number;

        private _health: number = 2;

        // PUBLIC PROPERTIES


        get health(): number {
            return this._health;
        }

        set health(newNum: number) {
            this._health = newNum;
        }

        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("avatar"), 0, 0, true);

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


        private _checkHealth(): void {
            if (this.health <= 0) {
                console.log("You're already dead");
            }
        }


        // PUBLIC METHODS
        public Start(): void {
            this.name = "avatar";

            // this._verticalPosition = 430; // locked to the bottom of the screen
            this._verticalPosition = 550; // locked to the bottom of the screen
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {

        }

        public shoot() {
            console.log("Shoot!");
            console.log(this.x);
            let weapon = new Weapon(this.x, this.y, Vector2.up());
            return weapon;
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