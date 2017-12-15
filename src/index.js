// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./graphics/Color";
import "./global/extensions";
import "./styles/index.css";

// Import Sketches
import * as mouseMemory from "./sketches/mouseMemory";
import * as squareRandomDragger from "./sketches/squareRandomDragger";
import drawFunctionMonster from "./sketches/functionMonster";
import * as apocalypse from "./sketches/apocalypse";

const backgroundColor = new Color(0, 100, 200);
createSketch(backgroundColor, () => {
    //squareRandomDragger.setupScene();
}, () => {
    apocalypse.reset();
});

window.mouseClicked = () => {
    //mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.mousePressed = () => {
    apocalypse.handleMousePressed();
};

window.mouseReleased = () => {
    apocalypse.handleMouseReleased();
};

window.keyPressed = () => {
  console.log(`key: ${window.key}`);
};

window.draw = () => {
    //mouseMemory.draw(backgroundColor);
    //squareRandomDragger.draw();
    //drawFunctionMonster();
    apocalypse.draw();
};