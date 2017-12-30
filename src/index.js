// @flow

import "p5";
import createSketch from "components/createSketch";
import Color from "graphics/Color";
import "global/extensions";
import "styles/index.css";

// Import Sketches
import type Sketch from "sketches/Sketch";
import { apocalypse, functionMonster, mouseMemory, squareRandomDragger, Snake } from "sketches/Sketches";

const backgroundColor = new Color(0, 100, 200);
const sketch = functionMonster;

createSketch(backgroundColor, () => {
    sketch.setup();
    //squareRandomDragger.setupScene();
    //Snake.setup();
}, () => {
    sketch.reset();
    //Snake.reset();
});

window.mouseClicked = () => {
    sketch.handleClick({ backgroundColor });
};

window.mousePressed = () => {
    sketch.handleMousePressed();
};

window.mouseReleased = () => {
    sketch.handleMouseReleased();
};

window.keyPressed = () => {
    //Snake.handleKeyPressed(window.keyCode);
};

window.draw = () => {
    // sketch.draw({ backgroundColor });
    sketch.draw();
};