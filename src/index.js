// @flow

import "p5";
import createCanvas from "components/createCanvas";
import Color from "graphics/Color";
import "global/extensions";
import "styles/index.css";

// Import Sketches
import Sketch from "sketches/Sketch";
import * as Sketches from "sketches/Sketches";

const backgroundColor = new Color(0, 100, 200);
const sketch = Sketches.algaeGrowth;

createCanvas(backgroundColor, () => {
    sketch.setup();
}, () => {
    sketch.reset();
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
    sketch.handleKeyPressed({ keyCode: window.keyCode });
};

window.draw = () => {
    // sketch.draw({ backgroundColor });
    sketch.draw();
};