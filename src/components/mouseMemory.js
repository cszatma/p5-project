// @flow

import Enum from "./Enum";
import Color from "./Color";
import { isWithinRange } from "../global/functions";
import { w, canvasSize, Direction } from "../global/constants";
import ColorPicker from "./ColorPicker";
import Point from "./Point";
import Size from "./Size";

const Mode = Enum.create(["normal", "selectColor"]);

// Define variables
const maxTrailSize = 60;
let xPos = [];
let yPos = [];
const trailColor = new Color(0);
let currentMode = Mode.normal;
const colorPicker = new ColorPicker(
    [new Color(255, 0, 0), new Color(250, 176, 5), new Color(50, 120, 255),
        new Color(25, 275, 25), new Color(0), new Color(255)],
    new Point(10, 10), new Size(45, 60), Direction.right
);

function saveLastPosition() {
    xPos[maxTrailSize - 1] = w.mouseX;
    yPos[maxTrailSize - 1] = w.mouseY;
}

function saveTrailPositions() {
    for (let i = 1; i < maxTrailSize; i++) {
        xPos[i - 1] = xPos[i];
        yPos[i - 1] = yPos[i];
    }
}

function drawTrail() {
    for (let i = 0; i < maxTrailSize; i++) {
        w.ellipse(xPos[i], yPos[i], i / 2, i / 2);
    }
}

function handleClick(x: number, y: number, backgroundColor: Color = new Color(255)) {
    if (isWithinRange(x, 390, 490) && isWithinRange(y, 460, 490)) {
        currentMode = currentMode === Mode.normal ? Mode.selectColor : Mode.normal;
    }

    if (currentMode === Mode.selectColor) {
        const selectedColor = Color.fromArray(w.get(x, y));
        if (!selectedColor.isEqual(backgroundColor)) {
            trailColor.updateFromColor(selectedColor);
        }
    }
}

function drawSelectColorMode() {
    colorPicker.draw();

    w.fill(trailColor.getP5Color());
    w.text("Current Color", 20, canvasSize.height - 20);
}

function createTrail() {
    w.fill(trailColor.getP5Color());
    saveLastPosition();
    saveTrailPositions();
    drawTrail();
}

function drawModeSelector() {
    w.fill(170, 150, 125);
    w.rect(canvasSize.width - 110, canvasSize.height - 40, 100, 30);
    w.fill(25, 150, 250);
    w.textSize(15);
    w.text("Change Mode", canvasSize.width - 107, canvasSize.height - 20);
}

function drawCurrentMode(backgroundColor: Color) {
    w.background(backgroundColor.getP5Color());
    w.noStroke();
    drawModeSelector();
    currentMode === Mode.normal ? createTrail() : drawSelectColorMode();
}

export { drawCurrentMode, handleClick };