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
    var Truck = /** @class */ (function (_super) {
        __extends(Truck, _super);
        // CONSTRUCTOR
        function Truck() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("truck"), new objects.Vector2(), true) || this;
            _this._isSpinning = false;
            _this._health = 3;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Truck.prototype, "health", {
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
        Object.defineProperty(Truck.prototype, "isSpinning", {
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
        Truck.prototype._checkBounds = function () {
            // check each bound
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
        Truck.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Truck.prototype.Start = function () {
            this.name = "truck";
            this.Reset();
        };
        Truck.prototype.Update = function () {
            this._move();
            // when spinning
            if (this._isSpinning) {
                this.rotation += 10;
            }
            this._checkBounds();
        };
        Truck.prototype.Reset = function () {
            // reset spinning state
            this.isSpinning = false;
            this.rotation = 0;
            // set velocity
            this._verticalSpeed = util.Mathf.RandomRange(1, 2); // speed ranges from 5 to 10 px per frame
            this._horizontalSpeed = util.Mathf.RandomRange(0, 0); // random horizontal draft
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            // set start position
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new objects.Vector2(randomX, randomY, this);
        };
        return Truck;
    }(objects.GameObject));
    objects.Truck = Truck;
})(objects || (objects = {}));
//# sourceMappingURL=Truck.js.map