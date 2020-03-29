"use strict";
// Auther: Kei Mizubuchi
// Student Number: 300936630
// Creation Date: Mar 29, 2020
// Game App description:
//  Simple 2D Scrolling game built on Creatjs.
//  Poice Car chases and fight with bank robbers' car on the browser
// Revision History:
// Mar 29, 2020 Version 0.1
// Mar 29, 2020 Version 1.0
var Game = (function () {
    // variable declarations
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        // images
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "playButton", src: "./Assets/images/playButton.png" },
        { id: "playAgainButton", src: "./Assets/images/playAgainButton.png" },
        { id: "instructionsButton", src: "./Assets/images/instructionsButton.png" },
        { id: "exitButton", src: "./Assets/images/exitButton.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "road", src: "./Assets/images/road.png" },
        { id: "policeCar", src: "./Assets/images/policeCar.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "hole", src: "./Assets/images/hole.png" },
        { id: "truck", src: "./Assets/images/truck.png" },
        { id: "heart", src: "./Assets/images/heart.png" },
        // audio
        { id: "bgm", src: "./Assets/audio/bgm.mp3" },
        { id: "shot", src: "./Assets/audio/shot.wav" },
        { id: "score", src: "./Assets/audio/score.wav" },
        { id: "explosion", src: "./Assets/audio/explosion.mp3" },
        { id: "hit", src: "./Assets/audio/hit.wav" },
        { id: "spin", src: "./Assets/audio/spin.wav" },
        { id: "lifeup", src: "./Assets/audio/lifeup.wav" },
    ];
    function Preload() {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log("%c Game Started!", "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.MENU;
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log("%c Scene Switched...", "color: green; font-size: 16px;");
        // clean up
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        // switch to the new scene
        switch (config.Game.SCENE_STATE) {
            case scenes.State.MENU:
                console.log("switch to Menu Scene");
                currentScene = new scenes.Menu();
                break;
            case scenes.State.INSTRUCTIONS:
                console.log("switch to Instructions Scene");
                currentScene = new scenes.Instructions();
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                currentScene = new scenes.Play();
                break;
            case scenes.State.GAMEOVER:
                console.log("switch to Gameover Scene");
                currentScene = new scenes.Gameover();
                break;
        }
        currentSceneState = config.Game.SCENE_STATE;
        stage.addChild(currentScene);
    }
    window.addEventListener('load', Preload);
    // attach keydown and keyup event to the window
    window.addEventListener("click", function (event) {
        // mouse event detected in Play scene
        if (currentScene && currentSceneState === scenes.State.PLAY) {
            currentScene.DetectClickEvent();
        }
    });
})();
//# sourceMappingURL=game.js.map