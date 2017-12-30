// @flow

import Sketch from "./Sketch";
import Enum from "components/Enum";
import { Color, Point, Rectangle, Size, Text } from "graphics/Graphics";
import { w, canvasSize, Direction } from "global/constants";
import ColorPicker from "components/ColorPicker";
import FadingTrail from "components/FadingTrail";

const Mode = Enum.create(["normal", "selectColor"]);

type Args = {
    backgroundColor: Color,
};

class MouseMemory extends Sketch<Args> {
    _mode: Mode;
    _trail: FadingTrail;
    _colorPicker: ColorPicker;
    _modeSelector: Rectangle;

    constructor() {
        super();
        this._mode = Mode.normal;
        this._trail = new FadingTrail(60, new Color(0));
        this._colorPicker = new ColorPicker(
            [
                new Color(255, 0, 0),
                new Color(250, 176, 5),
                new Color(50, 120, 255),
                new Color(25, 275, 25),
                new Color(0),
                new Color(255)
            ],
            new Point(10, 10),
            new Size(45, 60),
            Direction.right
        );
        this._modeSelector = new Rectangle(
            new Point(canvasSize.width - 110, canvasSize.height - 40),
            new Size(100, 30),
            new Color(170, 150, 125)
        );
    }

    handleClick({ backgroundColor }: Args) {
        this._modeSelector.onClick(() => {
            this._mode = this._mode === Mode.normal ? Mode.selectColor : Mode.normal;
        });

        if (this._mode === Mode.selectColor) {
            const selectedColor = Color.fromTuple(w.get(w.mouseX, w.mouseY));
            if (!selectedColor.isEqual(backgroundColor)) {
                this._trail.color = selectedColor;
            }
        }
    }

    _drawSelectColorMode() {
        this._colorPicker.draw();
        Text.p5Text("Current Color", new Point(20, canvasSize.height - 20),
            this._trail.color, 15);
    }

    draw({ backgroundColor }: Args) {
        w.background(backgroundColor.p5Color);
        w.noStroke();
        this._modeSelector.draw();
        Text.p5Text("Change Mode", new Point(canvasSize.width - 107,
            canvasSize.height - 20), new Color(25, 150, 250), 15);
        this._mode === Mode.normal ? this._trail.draw(w.mouseX, w.mouseY) :
            this._drawSelectColorMode();
    }
}

export default new MouseMemory();