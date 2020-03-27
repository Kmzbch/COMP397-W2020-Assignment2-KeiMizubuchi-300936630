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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // CONSTRUCTOR
        function Cloud() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("cloud"), new objects.Vector2(), true) || this;
            _this._isRotating = false;
            _this._health = 3;
            _this._health = 3;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Cloud.prototype, "health", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._health;
            },
            set: function (newNum) {
                this._health = newNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cloud.prototype, "isRotating", {
            get: function () {
                return this._isRotating;
            },
            set: function (newState) {
                this._isRotating = newState;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Cloud.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
            if (this.position.y < 0 - this.height) {
                this.Reset();
            }
            if (this.position.x > config.Game.SCREEN_WIDTH + this.width) {
                this.Reset();
            }
            if (this.position.x < 0 - +this.width) {
                this.Reset();
            }
        };
        Cloud.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Cloud.prototype.Start = function () {
            this.name = "cloud";
            //            this.alpha = 0.5; // transparency set to 50%
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            this._move();
            if (this._isRotating) {
                this.rotation += 10;
            }
            this._checkBounds();
        };
        Cloud.prototype.Reset = function () {
            this.isRotating = false;
            this.rotation = 0;
            // this._verticalSpeed = util.Mathf.RandomRange(5, 10); // speed ranges from 5 to 10 px per frame
            // this._horizontalSpeed = util.Mathf.RandomRange(-2, 2); // random horizontal draft
            this._verticalSpeed = util.Mathf.RandomRange(1, 2); // speed ranges from 5 to 10 px per frame
            this._horizontalSpeed = util.Mathf.RandomRange(0, 0); // random horizontal draft
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new objects.Vector2(randomX, randomY, this);
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=Cloud.js.map