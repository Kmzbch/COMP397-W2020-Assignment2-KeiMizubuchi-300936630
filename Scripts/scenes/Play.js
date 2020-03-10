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
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
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
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._island.Update();
            this._avatar.Update();
            //
            managers.Collision.squaredRadiusCheck(this._avatar, this._island);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.squaredRadiusCheck(_this._avatar, cloud);
            });
            this._weapons.forEach(function (weapon) {
                weapon.Update();
            });
            // alternative
            // for (const cloud of this._clouds) {
            // }
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._avatar);
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // weapon
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