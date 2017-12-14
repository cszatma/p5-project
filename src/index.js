// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./components/Color";
import * as mouseMemory from "./components/mouseMemory";
import "./global/extensions";
import "./styles/index.css";

const backgroundColor = new Color(0, 100, 200);
const startTime = Date.now();
createSketch(backgroundColor);

window.mouseClicked = () => {
    mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.keyPressed = () => {
  console.log(`key: ${window.key}`);
};

window.draw = () => {
    mouseMemory.drawCurrentMode(backgroundColor);
    window.textSize(20);
    window.text(`${Math.floor((Date.now() - startTime) / 1000)}`, 200, 200);
    window.text(`${Math.floor(Date.intervalSince(startTime) / 1000)}`, 200, 230);
};