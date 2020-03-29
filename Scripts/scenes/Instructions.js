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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Instructions.prototype.Start = function () {
            // instantiate a new Text object
            this._storyLabel = new objects.Label("The super police car shoots down the bandits trucks!", "20px", "Consolas", "#FFFF00", 320, 180, true);
            this._howToPlayLabel = new objects.Label("Move Car: Mouse movement \n\n" +
                "Shoot Bullet: Left click\n\n" +
                "\n\n" +
                "- Holes make Police car spinning.\n\n" +
                "- Trucks are destroyed with 3 bullets or bumped out\n\n" +
                "- Player lose life when bumping\n\n" +
                "- Hearts: gains players' lives\n\n", "20px", "Consolas", "#FFFF00", 320, 250, true);
            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 550, true);
            this._road = new objects.Road();
            this.Main();
        };
        Instructions.prototype.Update = function () {
            this._road.Update();
        };
        Instructions.prototype.Main = function () {
            this.addChild(this._road);
            this.addChild(this._storyLabel);
            this.addChild(this._howToPlayLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.MENU;
            });
        };
        //
        Instructions.prototype.DetectClickEvent = function () {
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instructions.js.map