// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./graphics/Color";
import "./global/extensions";
import "./styles/index.css";

// Import Sketches
import { apocalypse, drawFunctionMonster, mouseMemory, squareRandomDragger, Snake } from "./sketches/Sketch";

const backgroundColor = new Color(0, 100, 200);
createSketch(backgroundColor, () => {
    //squareRandomDragger.setupScene();
    Snake.setup();
}, () => {
    //apocalypse.reset();
    Snake.reset();
});

window.mouseClicked = () => {
    //mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.mousePressed = () => {
    //apocalypse.handleMousePressed();
};

window.mouseReleased = () => {
    //apocalypse.handleMouseReleased();
};

window.keyPressed = () => {
    Snake.handleKeyPressed(window.keyCode);
};

window.draw = () => {
    //mouseMemory.draw(backgroundColor);
    //squareRandomDragger.draw();
    //drawFunctionMonster();
    //apocalypse.run();
    Snake.run();
};