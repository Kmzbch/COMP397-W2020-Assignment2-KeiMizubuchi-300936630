//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function () {

    // variable declarations
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;

    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;

    let assets: createjs.LoadQueue;

    let assetManifest =
        [
            { id: "button", src: "./Assets/images/button.png" },
            { id: "placeholder", src: "./Assets/images/placeholder.png" },
            { id: "playButton", src: "./Assets/images/playButton.png" },
            { id: "instructionsButton", src: "./Assets/images/instructionsButton.png" },
            { id: "exitButton", src: "./Assets/images/exitButton.png" },
            { id: "nextButton", src: "./Assets/images/nextButton.png" },
            { id: "backButton", src: "./Assets/images/backButton.png" },
            // https://opengameart.org/content/toon-road-texture
            { id: "road", src: "./Assets/images/road.png" },
            // https://opengameart.org/content/top-down-pixel-police-car
            { id: "policeCar", src: "./Assets/images/policeCar.png" },
            // https://opengameart.org/content/bullets-game-asset
            { id: "bullet", src: "./Assets/images/bullet.png" },

            // https://flyclipart.com/crack-hole-png-png-image-hole-png-864547#
            { id: "hole", src: "./Assets/images/hole.png" },

            //            https://opengameart.org/content/top-view-car-truck-sprites
            { id: "truck", src: "./Assets/images/truck.png" },


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
            // https://freesound.org/people/Juandamb/sounds/430626/
            { id: "spin", src: "./Assets/audio/spin.wav" },
            // https://opengameart.org/content/heart-2
            { id: "heart", src: "./Assets/images/heart.png" },
            // https://freesound.org/people/Scrampunk/sounds/345297/
            { id: "lifeup", src: "./Assets/audio/lifeup.wav" },

        ];

    //https://opengameart.org/content/c64-style-racing-game
    function Preload(): void {
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
    function Start(): void {
        console.log(`%c Game Started!`, "color: blue; font-size: 20px; font-weight: bold;");
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
    function Update(): void {
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
    function Main(): void {
        console.log(`%c Scene Switched...`, "color: green; font-size: 16px;");

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
    window.addEventListener("click", (event: Event) => {
        if (currentScene && currentSceneState === scenes.State.PLAY) {
            currentScene.DetectClickEvent();
        }
    });


})();