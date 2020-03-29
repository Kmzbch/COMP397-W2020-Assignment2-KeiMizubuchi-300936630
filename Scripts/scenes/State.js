"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["SPLASH"] = 0] = "SPLASH";
        State[State["MENU"] = 1] = "MENU";
        State[State["INSTRUCTIONS"] = 2] = "INSTRUCTIONS";
        State[State["PLAY"] = 3] = "PLAY";
        State[State["GAMEOVER"] = 4] = "GAMEOVER";
        State[State["NUM_OF_SCENES"] = 5] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map