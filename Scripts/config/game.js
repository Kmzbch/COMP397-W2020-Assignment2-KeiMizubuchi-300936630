"use strict";
var config;
(function (config) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        // constants
        Game.GAME_TITLE = "THE GREAT BANDITS";
        Game.SCREEN_WIDTH = 640;
        Game.SCREEN_HEIGHT = 640;
        Game.FPS = 60; // 60 Frames per second
        Game.TRUCK_NUM = 4;
        Game.LIVES = 5;
        Game.SCORE = 0;
        Game.HIGH_SCORE = 0;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map