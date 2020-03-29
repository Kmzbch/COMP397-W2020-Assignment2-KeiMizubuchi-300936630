"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this._vulnerableCount = 300;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            var props = new createjs.PlayPropsConfig().set({ loop: -1, volume: 0.7 });
            var bgm = createjs.Sound.play("bgm", props);
            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;
            this.__road = new objects.Road();
            this._policeCar = new objects.PoliceCar();
            this._hole = new objects.Hole();
            this._truckNumber = config.Game.TRUCK_NUM;
            this._trucks = new Array();
            this._heart = new objects.Heart();
            console.log(this._heart);
            this.bullets = new Array();
            for (var index = 0; index < this._truckNumber; index++) {
                this._trucks[index] = new objects.Truck();
            }
            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;
            console.log(this._scoreBoard.Lives);
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            // get score as move
            if (Math.floor(createjs.Ticker.getTicks() % 300) === 0) {
                config.Game.SCORE += 100;
                config.Game.SCORE_BOARD.Score = config.Game.SCORE;
                var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                var bgm = createjs.Sound.play("score", props);
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
                var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                var bgm = createjs.Sound.play("lifeup", props);
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
                    var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                    var bgm = createjs.Sound.play("spin", props);
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
            this._trucks.forEach(function (truck) {
                if (truck.health <= 0) {
                    var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                    var bgm = createjs.Sound.play("explosion", props);
                    var bgm2 = createjs.Sound.play("score", { volume: 0.4 });
                    truck.health = 3;
                    truck.Reset();
                    config.Game.SCORE += 100;
                    config.Game.SCORE_BOARD.Score = config.Game.SCORE;
                    config.Game.HIGH_SCORE = config.Game.SCORE;
                }
                truck.Update();
                managers.Collision.squaredRadiusCheck(_this._policeCar, truck);
                _this._vulnerableCount += 1;
                if (truck.isColliding) {
                    if (_this._vulnerableCount > 300) {
                        var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                        var bgm = createjs.Sound.play("hit", props);
                        _this._vulnerableCount = 0;
                        config.Game.LIVES -= 1;
                        config.Game.SCORE_BOARD.Lives = config.Game.LIVES;
                        truck.isSpinning = true;
                        truck.velocity = new objects.Vector2(-truck.velocity.x * 6, -2);
                    }
                }
            });
            this.bullets.forEach(function (bullet) {
                bullet.Update();
                _this._trucks.forEach(function (truck) {
                    managers.Collision.squaredRadiusCheck(bullet, truck);
                    if (truck.isColliding) {
                        console.log(truck.health);
                        truck.health -= 1;
                        _this.removeChild(bullet);
                        _this.bullets.splice(_this.bullets.indexOf(bullet), 1); // remove the bullet from the list
                    }
                });
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            // detect player lives
            if (config.Game.LIVES <= 0) {
                var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                var bgm = createjs.Sound.play("explosion", props);
                //util.GameConfig.SCENE_STATE = scenes.State.END;
                config.Game.SCENE_STATE = scenes.State.GAMEOVER;
            }
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this.__road);
            this.addChild(this._hole);
            this.addChild(this._policeCar);
            this._trucks.forEach(function (t) {
                _this.addChild(t);
            });
            this.addChild(this._heart);
        };
        Play.prototype.Clean = function () {
            this.removeAllChildren();
        };
        //
        Play.prototype.DetectClickEvent = function () {
            var bullet = this._policeCar.shoot();
            this.bullets.push(bullet);
            this.addChild(bullet);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map