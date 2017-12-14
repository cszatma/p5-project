// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./components/Color";
import "./global/extensions";
import "./styles/index.css";

// Import Sketches
import * as mouseMemory from "./sketches/mouseMemory";
import * as squareRandomDragger from "./sketches/squareRandomDragger";
import drawFunctionMonster from "./sketches/functionMonster";

const backgroundColor = new Color(0, 100, 200);
createSketch(backgroundColor, () => {
    squareRandomDragger.setupScene();
});

window.mouseClicked = () => {
    mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.keyPressed = () => {
  console.log(`key: ${window.key}`);
};

window.draw = () => {
    //mouseMemory.draw(backgroundColor);
    squareRandomDragger.draw();
    //drawFunctionMonster();
};