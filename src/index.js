// @flow

import "p5";
import createSketch from "./components/createSketch";
import Color from "./graphics/Color";
import "./global/extensions";
import "./styles/index.css";

// Import Sketches
import { Apocalypse, drawFunctionMonster, mouseMemory, squareRandomDragger, Snake } from "./sketches/Sketch";

const backgroundColor = new Color(0, 100, 200);
createSketch(backgroundColor, () => {
    //squareRandomDragger.setupScene();
    Snake.setup();
}, () => {
    //Apocalypse.reset();
    Snake.reset();
});

window.mouseClicked = () => {
    //mouseMemory.handleClick(window.mouseX, window.mouseY, backgroundColor);
};

window.mousePressed = () => {
    //Apocalypse.handleMousePressed();
};

window.mouseReleased = () => {
    //Apocalypse.handleMouseReleased();
};

window.keyPressed = () => {
    Snake.handleKeyPressed(window.keyCode);
};

window.draw = () => {
    //mouseMemory.draw(backgroundColor);
    //squareRandomDragger.draw();
    //drawFunctionMonster();
    //Apocalypse.run();
    Snake.run();
};