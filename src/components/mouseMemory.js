// @flow

import Enum from './Enum';
import Color from './Color';
import { isWithinRange } from '../global/functions';
import { w } from '../global/constants';

const Mode = Enum.create(["normal", "selectColor"]);

// Define variables
const maxTrailSize = 60;
let xPos = [];
let yPos = [];
const trailColor = new Color(0);
let currentMode = Mode.normal;


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

function drawColorPicker() {
    w.fill(255, 0, 0);
    w.rect(4, 10, 44, 60);
    w.fill(250, 176, 5);
    w.rect(48, 10, 44, 60);
    w.fill(50, 120, 255);
    w.rect(92, 10, 44, 60);
    w.fill(25, 275, 25);
    w.rect(136, 10, 44, 60);
    w.fill(0);
    w.rect(180, 10, 44, 60);
    w.fill(255);
    w.rect(224, 10, 44, 60);

    w.fill(trailColor.getP5Color());
    w.text("Current Color", 20, 480);
}

function createTrail() {
    w.fill(trailColor.getP5Color());
    saveLastPosition();
    saveTrailPositions();
    drawTrail();
}

function drawModeSelector() {
    w.fill(170, 150, 125);
    w.rect(390, 460, 100, 30);
    w.fill(25, 150, 250);
    w.textSize(15);
    w.text("Change Mode", 393, 480);
}

function drawCurrentMode() {
    drawModeSelector();
    currentMode === Mode.normal ? createTrail() : drawColorPicker();
}

export { drawCurrentMode, handleClick };