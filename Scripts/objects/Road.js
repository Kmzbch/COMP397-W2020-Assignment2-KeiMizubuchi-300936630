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
var objects;
(function (objects) {
    var Road = /** @class */ (function (_super) {
        __extends(Road, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Road() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("road")) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Road.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        Road.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Road.prototype.Start = function () {
            this._verticalSpeed = 10; // 10 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Road.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Road.prototype.Reset = function () {
            this.position = new objects.Vector2(0, -874);
        };
        return Road;
    }(objects.GameObject));
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=Road.js.map