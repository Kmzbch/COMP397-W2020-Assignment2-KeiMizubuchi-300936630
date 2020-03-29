module config {
    export class Game {
        // constants
        public static GAME_TITLE: string = "THE GREAT BANDITS";
        public static SCREEN_WIDTH: number = 640;
        public static SCREEN_HEIGHT: number = 640;
        public static SCENE_STATE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static FPS: number = 60; // 60 Frames per second
        public static TRUCK_NUM: number = 4;
        public static LIVES: number = 5;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;
        public static SCORE_BOARD: managers.ScoreBoard;
    }
}