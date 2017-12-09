// @flow

import Enum from './Enum';
import Color from './Color';
import { isWithinRange } from './functions';

const Mode = Enum.create(["normal", "selectColor"]);

// Define variables
const maxTrailSize = 60;
let xPos = [];
let yPos = [];
const trailColor = new Color(0);
let currentMode = Mode.normal;


function saveLastPosition() {
    xPos[maxTrailSize - 1] = mouseX;
    yPos[maxTrailSize - 1] = mouseY;
}

function saveTrailPositions() {
    for (let i = 1; i < maxTrailSize; i++) {
        xPos[i - 1] = xPos[i];
        yPos[i - 1] = yPos[i];
    }
}

function drawTrail() {
    for (let i = 0; i < maxTrailSize; i++) {
        ellipse(xPos[i], yPos[i], i / 2, i / 2);
    }
}

function handleClick(x, y, backgroundColor = color(255)) {
    if (isWithinRange(x, 390, 490) && isWithinRange(y, 460, 490)) {
        currentMode = currentMode === Mode.normal ? Mode.selectColor : Mode.normal;
    }

    if (currentMode === Mode.selectColor) {
        const selectedColor = get(x, y);
        if (!selectedColor.equals(backgroundColor.levels)) {
            trailColor.updateFromArray(selectedColor);
        }
    }
}

function drawColorPicker() {
    fill(255, 0, 0);
    rect(4, 10, 44, 60);
    fill(250, 176, 5);
    rect(48, 10, 44, 60);
    fill(50, 120, 255);
    rect(92, 10, 44, 60);
    fill(25, 275, 25);
    rect(136, 10, 44, 60);
    fill(0);
    rect(180, 10, 44, 60);
    fill(255);
    rect(224, 10, 44, 60);

    fill(trailColor.getP5Color());
    text("Current Color", 20, 480);
}

function createTrail() {
    fill(trailColor.getP5Color());
    saveLastPosition();
    saveTrailPositions();
    drawTrail();
}

function drawModeSelector() {
    fill(170, 150, 125);
    rect(390, 460, 100, 30);
    fill(25, 150, 250);
    textSize(15);
    text("Change Mode", 393, 480);
}

function drawCurrentMode() {
    drawModeSelector();
    currentMode === Mode.normal ? createTrail() : drawColorPicker();
}

export { drawCurrentMode, handleClick };