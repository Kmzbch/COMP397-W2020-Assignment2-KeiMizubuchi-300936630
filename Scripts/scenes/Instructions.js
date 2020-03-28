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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Instructions.prototype.Start = function () {
            var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis pharetra elit vel maximus. Curabitur vel libero elementum, dignissim odio sed, ultrices lacus. Etiam lobortis ipsum ac dui vulputate finibus. Quisque quis tortor id nulla laoreet aliquam at non dolor. Mauris pellentesque aliquam orci et scelerisque. Vivamus dignissim ex consequat, consequat mauris ut, mollis magna. Vestibulum maximus sit amet eros vel suscipit. Cras id urna blandit, elementum lectus nec, varius neque. Aenean rhoncus placerat venenatis. Nullam vestibulum ligula at mi rhoncus, vitae semper augue vehicula.";
            // instantiate a new Text object
            this._instructionLabel = new objects.Label(text, "10px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 330, true);
            this._road = new objects.Road();
            this.Main();
        };
        Instructions.prototype.Update = function () {
            this._road.Update();
        };
        Instructions.prototype.Main = function () {
            this.addChild(this._road);
            this.addChild(this._instructionLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.Menu;
            });
        };
        //
        Instructions.prototype.DetectClickEvent = function () {
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instructions.js.map