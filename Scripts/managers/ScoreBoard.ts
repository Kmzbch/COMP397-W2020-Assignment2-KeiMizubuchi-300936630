module managers {
    export class ScoreBoard {
        // private instance members
        private _lives: number;
        private _score: number;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;
        private _highScore: number;

        // PUBLIC PROPATIES
        public get LivesLabel(): objects.Label {
            return this._livesLabel;
        }

        public get ScoreLabel(): objects.Label {
            return this._scoreLabel;
        }

        public get HighScoreLabel(): objects.Label {
            return this._highScoreLabel;
        }

        public get HighScore(): number {
            return this._highScore;
        }

        public set HighScore(v: number) {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
            this._highScoreLabel.setText("High Score: " + this._highScore);
        }

        public get Lives(): number {
            return this._lives;
        }

        public set Lives(v: number) {
            this._lives = v;
            this.LivesLabel.text = "Lives: " + this._lives;

            // change text color depending on the number
            if (this._lives <= 1) {
                this.LivesLabel.color = "#FF0000";
            } else {
                this.LivesLabel.color = "#FFFF00";
            }
        }

        public get Score(): number {
            return this._score;
        }

        public set Score(v: number) {
            this._score = v;

            this.ScoreLabel.text = "Score: " + this._score;
        }

        // constructor
        constructor() {
            this._initialize();
        }

        // private methods
        private _initialize() {
            this._livesLabel = new objects.Label("Lives: 99", "20px", "Consolas", "#FFFF00", 20, 20);
            this._scoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 490, 20);
            this._highScoreLabel = new objects.Label("High Score: 99999", "20px", "Consolas", "#FFFF00", 320, 240, true);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
        }

        // public mtehods

    }
}