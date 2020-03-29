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
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Menu() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Menu.prototype.Start = function () {
            // instantiate a new Text object
            this._gameTitle = new objects.Label(config.Game.GAME_TITLE, "60px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._playButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 320, 330, true);
            this._instructionsButton = new objects.Button(config.Game.ASSETS.getResult("instructionsButton"), 320, 400, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 320, 470, true);
            this._road = new objects.Road();
            this.Main();
        };
        Menu.prototype.Update = function () {
            this._road.Update();
        };
        Menu.prototype.Main = function () {
            this.addChild(this._road);
            this.addChild(this._gameTitle);
            this.addChild(this._playButton);
            this.addChild(this._instructionsButton);
            this.addChild(this._exitButton);
            this._playButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this._instructionsButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.INSTRUCTIONS;
            });
        };
        //
        Menu.prototype.DetectClickEvent = function () {
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=Menu.js.map