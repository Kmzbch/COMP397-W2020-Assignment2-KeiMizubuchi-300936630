module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _avatar?: objects.Avatar;
        private _island?: objects.Island;

        // private _cloud?: objects.Cloud;
        private _cloudNumber: number;
        private _clouds?: objects.Cloud[];

        private _weapons?: objects.Weapon[];

        private _scoreBoard: managers.ScoreBoard;

        private _vulnerableCount: number = 300;

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




            this._ocean = new objects.Ocean();
            this._avatar = new objects.Avatar();
            this._island = new objects.Island();

            this._cloudNumber = config.Game.CLOUD_NUM;
            this._clouds = new Array<objects.Cloud>();

            this._weapons = new Array<objects.Weapon>();

            // create an array of cloud objects
            for (let index = 0; index < this._cloudNumber; index++) {
                this._clouds[index] = new objects.Cloud();
            }

            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;


            console.log(this._scoreBoard.Lives);
            this.Main();
        }

        public Update(): void {

            // get score as move
            if (Math.floor(createjs.Ticker.getTicks() % 300) === 0) {
                config.Game.SCORE_BOARD.Score += 100;
                let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                let bgm = createjs.Sound.play("score", props);

                console.log("Current Score: " + config.Game.SCORE_BOARD.Score);
                if (config.Game.SCORE > config.Game.HIGH_SCORE) {
                    config.Game.HIGH_SCORE = config.Game.SCORE;
                }
            }

            this._ocean.Update();

            this._island.Update();

            this._avatar.Update();

            //
            managers.Collision.squaredRadiusCheck(this._avatar, this._island);



            this._clouds.forEach(cloud => {
                if (cloud.health <= 0) {
                    let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                    let bgm = createjs.Sound.play("explosion", props);

                    // this.removeChild(cloud);
                    // this._clouds.splice(this._clouds.indexOf(cloud), 1); // remove the bullet from the list

                    cloud.health = 3;
                    cloud.Reset();

                    config.Game.SCORE_BOARD.Score += 100;
                    config.Game.SCORE = config.Game.SCORE;
                    config.Game.HIGH_SCORE = config.Game.SCORE;
                    //                    config.Game.SCORE_BOARD
                }
                cloud.Update();


                managers.Collision.squaredRadiusCheck(this._avatar, cloud);

                this._vulnerableCount += 1;
                if (cloud.isColliding) {
                    if (this._vulnerableCount > 300) {
                        let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                        let bgm = createjs.Sound.play("hit", props);

                        this._vulnerableCount = 0;
                        config.Game.SCORE_BOARD.Lives -= 1;
                        cloud.isRotating = true;
                        cloud.velocity = new objects.Vector2(-cloud.velocity.x * 6, -2);
                    }
                }
            });

            this._weapons.forEach(weapon => {
                weapon.Update();
                this._clouds.forEach(c => {
                    managers.Collision.squaredRadiusCheck(weapon, c);
                    if (c.isColliding) {
                        console.log(c.health);
                        c.health -= 1;
                        this.removeChild(weapon);
                        this._weapons.splice(this._weapons.indexOf(weapon), 1); // remove the bullet from the list
                    }
                })
            })

            // alternative
            // for (const cloud of this._clouds) {

            // }

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);

            // detect player lives
            if (config.Game.LIVES <= 0) {
                let props = new createjs.PlayPropsConfig().set({ volume: 0.4 })
                let bgm = createjs.Sound.play("explosion", props);

                //util.GameConfig.SCENE_STATE = scenes.State.END;
                config.Game.SCENE = scenes.State.END;
            }

        }

        public Main(): void {
            this.addChild(this._ocean);

            this.addChild(this._island);

            this.addChild(this._avatar);

            this._clouds.forEach(cloud => {
                this.addChild(cloud);
            });


        }

        public Clean(): void {
            this.removeAllChildren();
        }


        //
        public DetectClickEvent(): void {
            let weapon = this._avatar.shoot();
            this._weapons.push(weapon);
            this.addChild(weapon);
        }

    }
}