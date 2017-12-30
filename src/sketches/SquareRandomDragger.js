// @flow

import { canvasSize, w } from "global/constants";
import Color from "graphics/Color";
import Sketch from "./Sketch";

const halfWidth = canvasSize.width / 2;
const halfHeight = canvasSize.height / 2;
let lastSquare = 0;
let currentSquare = 0;

const SquareRandomDragger = Sketch.createSketch(() => {
    changeColor();
    drawSquares();
}, () => {
    w.strokeWeight(5);
    w.line(halfWidth, 0, halfWidth, canvasSize.height);
    w.line(0, halfHeight, canvasSize.width, halfHeight);
});

export default new SquareRandomDragger();

function changeColor() {
    if (lastSquare !== currentSquare) {
        w.fill(Color.randomP5Color());
        lastSquare = currentSquare;
    }
}

function drawSquares() {
    const x = w.mouseX < halfWidth ? 0 : halfWidth;
    const y = w.mouseY < halfHeight ? 0 : halfHeight;

    if (w.mouseX < halfWidth) {
        currentSquare = y < halfHeight ? 0 : 1;
    } else {
        currentSquare = y < halfHeight ? 2 : 3;
    }

    w.rect(x, y, halfWidth, halfHeight);
}