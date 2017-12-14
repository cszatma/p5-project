// @flow

import Enum from "../components/Enum";
import { Color, Point, Size } from "../graphics/Graphics";
import { isWithinRange } from "../global/functions";
import { w, canvasSize, Direction } from "../global/constants";
import ColorPicker from "../components/ColorPicker";
import FadingTrail from "../components/FadingTrail";

const Mode = Enum.create(["normal", "selectColor"]);

// Define variables
let currentMode = Mode.normal;
const trail = new FadingTrail(60, new Color(0));
const colorPicker = new ColorPicker(
    [new Color(255, 0, 0), new Color(250, 176, 5), new Color(50, 120, 255),
        new Color(25, 275, 25), new Color(0), new Color(255)],
    new Point(10, 10), new Size(45, 60), Direction.right
);

function handleClick(x: number, y: number, backgroundColor: Color) {
    if (isWithinRange(x, 390, 490) && isWithinRange(y, 460, 490)) {
        currentMode = currentMode === Mode.normal ? Mode.selectColor : Mode.normal;
    }

    if (currentMode === Mode.selectColor) {
        const selectedColor = Color.fromArray(w.get(x, y));
        if (!selectedColor.isEqual(backgroundColor)) {
            trail.color = selectedColor;
        }
    }
}

function drawSelectColorMode() {
    colorPicker.draw();
    w.fill(trail.color.p5Color);
    w.text("Current Color", 20, canvasSize.height - 20);
}

function drawModeSelector() {
    w.fill(170, 150, 125);
    w.rect(canvasSize.width - 110, canvasSize.height - 40, 100, 30);
    w.fill(25, 150, 250);
    w.textSize(15);
    w.text("Change Mode", canvasSize.width - 107, canvasSize.height - 20);
}

function draw(backgroundColor: Color) {
    w.background(backgroundColor.p5Color);
    w.noStroke();
    drawModeSelector();
    currentMode === Mode.normal ? trail.draw(w.mouseX, w.mouseY) : drawSelectColorMode();
}

export { draw, handleClick };