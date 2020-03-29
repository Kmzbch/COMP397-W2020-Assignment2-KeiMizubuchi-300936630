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
    var Gameover = /** @class */ (function (_super) {
        __extends(Gameover, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Gameover() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        Gameover.prototype.Start = function () {
            //instantiate a new Text object
            this._endLabel = new objects.Label("GAME OVER", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._playAgainButton = new objects.Button(config.Game.ASSETS.getResult("playAgainButton"), 320, 430, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 530, true);
            this._scoreLabel = new objects.Label("SCORE: " + config.Game.SCORE.toString(), "24px", "Consolas", "#FFFF00", 320, 250, true);
            this._highScoreLabel = new objects.Label("HIGH SCORE: " + config.Game.HIGH_SCORE.toString(), "24px", "Consolas", "#FFFF00", 320, 300, true);
            this._road = new objects.Road();
            this.Main();
        };
        Gameover.prototype.Update = function () {
            this._road.Update();
        };
        Gameover.prototype.Main = function () {
            this.addChild(this._road);
            this.addChild(this._endLabel);
            this.addChild(this._scoreLabel);
            this.addChild(this._highScoreLabel);
            this.addChild(this._playAgainButton);
            this.addChild(this._backButton);
            this._playAgainButton.on("click", function () {
                var bgm = createjs.Sound.stop();
                config.Game.LIVES = 5;
                config.Game.SCORE = 0;
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this._backButton.on("click", function () {
                var bgm = createjs.Sound.stop();
                config.Game.LIVES = 5;
                config.Game.SCORE = 0;
                config.Game.SCENE_STATE = scenes.State.MENU;
            });
        };
        //
        Gameover.prototype.DetectClickEvent = function () {
        };
        return Gameover;
    }(objects.Scene));
    scenes.Gameover = Gameover;
})(scenes || (scenes = {}));
//# sourceMappingURL=Gameover.js.map