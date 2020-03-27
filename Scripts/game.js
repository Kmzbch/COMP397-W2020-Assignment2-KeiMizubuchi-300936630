"use strict";
//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
var Game = (function () {
    // variable declarations
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "button", src: "./Assets/images/button.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "playButton", src: "./Assets/images/playButton.png" },
        { id: "instructionsButton", src: "./Assets/images/instructionsButton.png" },
        { id: "exitButton", src: "./Assets/images/exitButton.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        // https://opengameart.org/content/toon-road-texture
        { id: "ocean", src: "./Assets/images/ocean.png" },
        // https://opengameart.org/content/top-down-pixel-police-car
        { id: "avatar", src: "./Assets/images/avatar.png" },
        // https://opengameart.org/content/bullets-game-asset
        { id: "weapon", src: "./Assets/images/weapon.png" },
        // https://flyclipart.com/crack-hole-png-png-image-hole-png-864547#
        { id: "island", src: "./Assets/images/island.png" },
        //            https://opengameart.org/content/top-view-car-truck-sprites
        { id: "cloud", src: "./Assets/images/cloud.png" },
        // Sound
        // https://freemusicarchive.org/music/Komiku/Captain_Glouglous_Incredible_Week_Soundtrack/pog
        { id: "bgm", src: "./Assets/audio/bgm.mp3" },
        // https://freesound.org/people/Bird_man/sounds/275151/
        { id: "shot", src: "./Assets/audio/shot.wav" },
        //            https://freesound.org/people/MusicLegends/sounds/344307/
        { id: "score", src: "./Assets/audio/score.wav" },
        //            https://freesound.org/people/Iwiploppenisse/sounds/156031/
        { id: "explosion", src: "./Assets/audio/explosion.mp3" },
        // https://freesound.org/people/broumbroum/sounds/50549/
        { id: "hit", src: "./Assets/audio/hit.wav" },
    ];
    //https://opengameart.org/content/c64-style-racing-game
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
        config.Game.SCENE = scenes.State.Menu;
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        if (currentSceneState != config.Game.SCENE) {
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
        switch (config.Game.SCENE) {
            case scenes.State.Menu:
                console.log("switch to Menu Scene");
                currentScene = new scenes.Menu();
                break;
            case scenes.State.Instructions:
                console.log("switch to Instructions Scene");
                currentScene = new scenes.Instructions();
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
                currentScene = new scenes.End();
                break;
        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }
    window.addEventListener('load', Preload);
    // attach keydown and keyup event to the window
    window.addEventListener("click", function (event) {
        if (currentScene && currentSceneState === scenes.State.PLAY) {
            currentScene.DetectClickEvent();
        }
    });
})();
//# sourceMappingURL=game.js.map