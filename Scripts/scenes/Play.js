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
            this._ocean = new objects.Ocean();
            this._avatar = new objects.Avatar();
            this._island = new objects.Island();
            this._cloudNumber = config.Game.CLOUD_NUM;
            this._clouds = new Array();
            this._weapons = new Array();
            // create an array of cloud objects
            for (var index = 0; index < this._cloudNumber; index++) {
                this._clouds[index] = new objects.Cloud();
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
                config.Game.SCORE_BOARD.Score += 100;
                var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                var bgm = createjs.Sound.play("score", props);
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
            this._clouds.forEach(function (cloud) {
                if (cloud.health <= 0) {
                    var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                    var bgm = createjs.Sound.play("explosion", props);
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
                managers.Collision.squaredRadiusCheck(_this._avatar, cloud);
                _this._vulnerableCount += 1;
                if (cloud.isColliding) {
                    if (_this._vulnerableCount > 300) {
                        var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                        var bgm = createjs.Sound.play("hit", props);
                        _this._vulnerableCount = 0;
                        config.Game.SCORE_BOARD.Lives -= 1;
                        cloud.isRotating = true;
                        cloud.velocity = new objects.Vector2(-cloud.velocity.x * 6, -2);
                    }
                }
            });
            this._weapons.forEach(function (weapon) {
                weapon.Update();
                _this._clouds.forEach(function (c) {
                    managers.Collision.squaredRadiusCheck(weapon, c);
                    if (c.isColliding) {
                        console.log(c.health);
                        c.health -= 1;
                        _this.removeChild(weapon);
                        _this._weapons.splice(_this._weapons.indexOf(weapon), 1); // remove the bullet from the list
                    }
                });
            });
            // alternative
            // for (const cloud of this._clouds) {
            // }
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            // detect player lives
            if (config.Game.LIVES <= 0) {
                var props = new createjs.PlayPropsConfig().set({ volume: 0.4 });
                var bgm = createjs.Sound.play("explosion", props);
                //util.GameConfig.SCENE_STATE = scenes.State.END;
                config.Game.SCENE = scenes.State.END;
            }
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._avatar);
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
        };
        Play.prototype.Clean = function () {
            this.removeAllChildren();
        };
        //
        Play.prototype.DetectClickEvent = function () {
            var weapon = this._avatar.shoot();
            this._weapons.push(weapon);
            this.addChild(weapon);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map