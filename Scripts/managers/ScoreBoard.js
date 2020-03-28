"use strict";
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // public properties
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (v) {
                this._highScore = v;
                config.Game.HIGH_SCORE = this._highScore;
                this._highScoreLabel.setText("High Score: " + this._highScore);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (v) {
                this._lives = v;
                if (this._lives <= 1) {
                    this.LivesLabel.color = "#FF0000";
                }
                else {
                    this.LivesLabel.color = "#FFFF00";
                }
                config.Game.LIVES = this._lives;
                this.LivesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (v) {
                this._score = v;
                config.Game.SCORE = this._score;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        ScoreBoard.prototype._initialize = function () {
            this._livesLabel = new objects.Label("Lives: 99", "20px", "Consolas", "#FFFF00", 20, 20);
            this._scoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 490, 20);
            this._highScoreLabel = new objects.Label("High Score: 99999", "20px", "Consolas", "#FFFF00", 320, 240, true);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=ScoreBoard.js.map