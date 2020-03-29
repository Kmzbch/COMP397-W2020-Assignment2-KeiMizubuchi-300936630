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
    var PoliceCar = /** @class */ (function (_super) {
        __extends(PoliceCar, _super);
        // CONSTRUCTOR
        function PoliceCar() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("policeCar"), 0, 0, true) || this;
            _this._isSpinning = false;
            _this.Start();
            return _this;
        }
        Object.defineProperty(PoliceCar.prototype, "isSpinning", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._isSpinning;
            },
            set: function (newState) {
                this._isSpinning = newState;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        PoliceCar.prototype._checkBounds = function () {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        PoliceCar.prototype._move = function () {
            var newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            var newPositionY = util.Mathf.Lerp(this.position.y, this.stage.mouseY, 0.05);
            this.position = new objects.Vector2(newPositionX, newPositionY);
        };
        PoliceCar.prototype._spin = function () {
            this.position = objects.Vector2.add(this.position, new objects.Vector2(-5, -5));
        };
        // PUBLIC METHODS
        PoliceCar.prototype.Start = function () {
            this.name = "policeCar";
            // start position
            this._verticalPosition = 550;
            this.Reset();
        };
        PoliceCar.prototype.Update = function () {
            if (this._isSpinning) {
                this.rotation += 10;
                this._spin();
            }
            else {
                this._move();
            }
            this._checkBounds();
        };
        PoliceCar.prototype.Reset = function () {
        };
        PoliceCar.prototype.shoot = function () {
            return new objects.Bullet(this.x, this.y, objects.Vector2.up());
        };
        return PoliceCar;
    }(objects.GameObject));
    objects.PoliceCar = PoliceCar;
})(objects || (objects = {}));
//# sourceMappingURL=PoliceCar.js.map