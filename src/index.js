// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./components/Color";
import * as mouseMemory from "./components/mouseMemory";

const backgroundColor = new Color(0, 100, 200);
createSketch(500, 500, backgroundColor);

window.mouseClicked = () => {
    mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.draw = () => {
    window.background(backgroundColor.getP5Color());
    window.noStroke();
    mouseMemory.drawCurrentMode();
};