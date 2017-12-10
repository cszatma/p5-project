// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./components/Color";
import * as mouseMemory from "./components/mouseMemory";

const backgroundColor = new Color(0, 100, 200);
createSketch(backgroundColor);

window.mouseClicked = () => {
    mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.draw = () => {
    mouseMemory.drawCurrentMode(backgroundColor);
};