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
    var Hole = /** @class */ (function (_super) {
        __extends(Hole, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Hole() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("hole"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Hole.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Hole.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Hole.prototype.Start = function () {
            this.name = "hole";
            this._verticalSpeed = 10; // 10 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Hole.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Hole.prototype.Reset = function () {
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -this.height, this);
        };
        return Hole;
    }(objects.GameObject));
    objects.Hole = Hole;
})(objects || (objects = {}));
//# sourceMappingURL=Hole.js.map