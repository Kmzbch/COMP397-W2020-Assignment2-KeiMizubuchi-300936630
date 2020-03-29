"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["MENU"] = 0] = "MENU";
        State[State["INSTRUCTIONS"] = 1] = "INSTRUCTIONS";
        State[State["PLAY"] = 2] = "PLAY";
        State[State["GAMEOVER"] = 3] = "GAMEOVER";
        State[State["NUM_OF_SCENES"] = 4] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map