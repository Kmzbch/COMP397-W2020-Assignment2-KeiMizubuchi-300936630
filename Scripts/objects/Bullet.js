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
        function Bullet(x, y, direction) {
            if (direction === void 0) { direction = objects.Vector2.zero(); }
            var _this = _super.call(this, config.Game.ASSETS.getResult("bullet"), new objects.Vector2(x, y), true) || this;
            var props = new createjs.PlayPropsConfig().set({ volume: 1.5 });
            var bgm = createjs.Sound.play("shot", props);
            var speed = 10;
            direction.scale(speed);
            _this.velocity = direction; // velocity = direction * speed
            _this.Start();
            return _this;
        }
        // private method
        Bullet.prototype._checkBounds = function () {
            // if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
            //     this.Reset();
            // }
        };
        Bullet.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Bullet.prototype.Start = function () {
            this.name = "bullet";
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            // this._verticalSpeed = util.Mathf.RandomRange(5, 10); // speed ranges from 5 to 10 px per frame
            // this._horizontalSpeed = util.Mathf.RandomRange(-2, 2); // random horizontal draft
            // this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
            // let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            // let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            // this.position = new Vector2(randomX, randomY, this);
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map