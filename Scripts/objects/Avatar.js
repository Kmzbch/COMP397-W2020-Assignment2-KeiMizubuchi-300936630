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
    var Avatar = /** @class */ (function (_super) {
        __extends(Avatar, _super);
        // CONSTRUCTOR
        function Avatar() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("avatar"), 0, 0, true) || this;
            _this._health = 2;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Avatar.prototype, "health", {
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
        // PRIVATE METHODS
        Avatar.prototype._checkBounds = function () {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Avatar.prototype._move = function () {
            var newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            this.position = new objects.Vector2(newPositionX, this._verticalPosition);
        };
        Avatar.prototype._checkHealth = function () {
            if (this.health <= 0) {
                console.log("You're already dead");
            }
        };
        // PUBLIC METHODS
        Avatar.prototype.Start = function () {
            this.name = "avatar";
            // this._verticalPosition = 430; // locked to the bottom of the screen
            this._verticalPosition = 550; // locked to the bottom of the screen
        };
        Avatar.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Avatar.prototype.Reset = function () {
        };
        Avatar.prototype.shoot = function () {
            console.log("Shoot!");
            console.log(this.x);
            var weapon = new objects.Weapon(this.x, this.y, objects.Vector2.up());
            return weapon;
        };
        return Avatar;
    }(objects.GameObject));
    objects.Avatar = Avatar;
})(objects || (objects = {}));
//# sourceMappingURL=Avatar.js.map