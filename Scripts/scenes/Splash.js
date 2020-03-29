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
    var Splash = /** @class */ (function (_super) {
        __extends(Splash, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Splash() {
            var _this = _super.call(this) || this;
            _this._startTime = createjs.Ticker.getTime();
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Splash.prototype.Start = function () {
            this._splash = new createjs.Bitmap(config.Game.ASSETS.getResult("splash"));
            var props = new createjs.PlayPropsConfig().set({ delay: 500 });
            var bgm = createjs.Sound.play("splashSound", props);
            this.Main();
        };
        Splash.prototype.Update = function () {
            if (createjs.Ticker.getTime() - this._startTime >= 4000) {
                config.Game.SCENE_STATE = scenes.State.MENU;
            }
        };
        Splash.prototype.Main = function () {
            this.addChild(this._splash);
        };
        //
        Splash.prototype.DetectClickEvent = function () {
        };
        return Splash;
    }(objects.Scene));
    scenes.Splash = Splash;
})(scenes || (scenes = {}));
//# sourceMappingURL=Splash.js.map