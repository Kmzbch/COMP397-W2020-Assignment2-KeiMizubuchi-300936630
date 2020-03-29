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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // constructor
        function Bullet(x, y, direction) {
            if (direction === void 0) { direction = objects.Vector2.zero(); }
            var _this = _super.call(this, config.Game.ASSETS.getResult("bullet"), new objects.Vector2(x, y), true) || this;
            // set bullet velocity
            var speed = 10;
            direction.scale(speed);
            _this.velocity = direction; // velocity = direction * speed
            _this.Start();
            return _this;
        }
        // private method
        Bullet.prototype._checkBounds = function () {
        };
        Bullet.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Bullet.prototype.Start = function () {
            this.name = "bullet";
            // play sound
            var bgm = createjs.Sound.play("shot", { volume: 0.2 });
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map