module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private __road?: objects.Road;
        private _policeCar?: objects.PoliceCar;
        private _hole?: objects.Hole;

        private _truckNumber: number;
        private _trucks?: objects.Truck[];

        private bullets?: objects.Bullet[];

        private _scoreBoard: managers.ScoreBoard;

        private _vulnerableCount: number = 300;

        private _heart: objects.Heart;

        // PUBLIC PROPERTIES
        public keyPressedStates: boolean[]; // to detect which keys are down

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void {

            let props = new createjs.PlayPropsConfig().set({ loop: -1, volume: 0.7 })
            let bgm = createjs.Sound.play("bgm", props);

            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;




            this.__road = new objects.Road();
            this._policeCar = new objects.PoliceCar();
            this._hole = new objects.Hole();

            this._truckNumber = config.Game.TRUCK_NUM;
            this._trucks = new Array<objects.Truck>();

            this._heart = new objects.Heart();
            console.log(this._heart);

            this.bullets = new Array<objects.Bullet>();

            for (let index = 0; index < this._truckNumber; index++) {
                this._trucks[index] = new objects.Truck();
            }

            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;


            console.log(this._scoreBoard.Lives);
            this.Main();
        }

        public Update(): void {

            // get score as move
            if (Math.floor(createjs.Ticker.getTicks() % 300) === 0) {
                config.Game.SCORE += 100;
                config.Game.SCORE_BOARD.Score = config.Game.SCORE;

                let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                let bgm = createjs.Sound.play("score", props);

                console.log("Current Score: " + config.Game.SCORE_BOARD.Score);
                if (config.Game.SCORE > config.Game.HIGH_SCORE) {
                    config.Game.HIGH_SCORE = config.Game.SCORE;
                }
            }

            this.__road.Update();

            this._hole.Update();

            this._policeCar.Update();

            this._heart.Update();


            managers.Collision.squaredRadiusCheck(this._policeCar, this._heart);
            if (this._heart.isColliding) {
                let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                let bgm = createjs.Sound.play("lifeup", props);

                config.Game.LIVES += 1;
                config.Game.SCORE_BOARD.Lives = config.Game.LIVES;

                this._heart.Reset();
            }

            //
            managers.Collision.squaredRadiusCheck(this._policeCar, this._hole);
            this._vulnerableCount += 1;
            if (this._hole.isColliding) {
                if (this._vulnerableCount > 300) {
                    // let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                    // let bgm = createjs.Sound.play("hit", props);
                    let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                    let bgm = createjs.Sound.play("spin", props);

                    this._vulnerableCount = 0;
                    //                    config.Game.SCORE_BOARD.Lives -= 1;
                    this._policeCar.isSpinning = true;
                    this._policeCar.velocity = new objects.Vector2(-this._policeCar.velocity.x * 6, -2);
                }
            }
            if (this._vulnerableCount > 120) {
                this._policeCar.isSpinning = false;
                this._policeCar.rotation = 0;
            }


            this._trucks.forEach(truck => {
                if (truck.health <= 0) {
                    let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                    let bgm = createjs.Sound.play("explosion", props);
                    let bgm2 = createjs.Sound.play("score", { volume: 0.4 });



                    truck.health = 3;
                    truck.Reset();

                    config.Game.SCORE += 100;
                    config.Game.SCORE_BOARD.Score = config.Game.SCORE;
                    config.Game.HIGH_SCORE = config.Game.SCORE;
                }
                truck.Update();


                managers.Collision.squaredRadiusCheck(this._policeCar, truck);

                this._vulnerableCount += 1;
                if (truck.isColliding) {
                    if (this._vulnerableCount > 300) {
                        let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                        let bgm = createjs.Sound.play("hit", props);

                        this._vulnerableCount = 0;
                        config.Game.LIVES -= 1;
                        config.Game.SCORE_BOARD.Lives = config.Game.LIVES;

                        truck.isSpinning = true;
                        truck.velocity = new objects.Vector2(-truck.velocity.x * 6, -2);
                    }
                }
            });

            this.bullets.forEach(bullet => {
                bullet.Update();
                this._trucks.forEach(truck => {
                    managers.Collision.squaredRadiusCheck(bullet, truck);
                    if (truck.isColliding) {
                        console.log(truck.health);
                        truck.health -= 1;
                        this.removeChild(bullet);
                        this.bullets.splice(this.bullets.indexOf(bullet), 1); // remove the bullet from the list
                    }
                })
            })

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);


            // detect player lives
            if (config.Game.LIVES <= 0) {
                let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                let bgm = createjs.Sound.play("explosion", props);

                //util.GameConfig.SCENE_STATE = scenes.State.END;
                config.Game.SCENE_STATE = scenes.State.GAMEOVER;
            }

        }

        public Main(): void {
            this.addChild(this.__road);

            this.addChild(this._hole);

            this.addChild(this._policeCar);

            this._trucks.forEach(t => {
                this.addChild(t);
            });


            this.addChild(this._heart);
        }

        public Clean(): void {
            this.removeAllChildren();
        }


        //
        public DetectClickEvent(): void {
            let bullet = this._policeCar.shoot();
            this.bullets.push(bullet);
            this.addChild(bullet);
        }

    }
}