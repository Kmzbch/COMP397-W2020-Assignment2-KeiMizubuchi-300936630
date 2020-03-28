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
    var Heart = /** @class */ (function (_super) {
        __extends(Heart, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Heart() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("heart"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Heart.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height + 1800) {
                this.Reset();
            }
        };
        Heart.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Heart.prototype.Start = function () {
            this.name = "heart";
            this._verticalSpeed = 10; // 10 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Heart.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Heart.prototype.Reset = function () {
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -1800, this);
        };
        return Heart;
    }(objects.GameObject));
    objects.Heart = Heart;
})(objects || (objects = {}));
//# sourceMappingURL=Heart.js.map