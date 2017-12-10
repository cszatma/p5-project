// @flow

import Color from "./Color";
import Point from "./Point";
import Size from "./Size";
import { Direction } from "../global/constants";
import { directionMatrix } from "../global/functions";

class ColorPicker {
    colors: Color[];
    origin: Point;
    size: Size;
    direction: Direction;

    constructor(colors: Color[], origin: Point, size: Size, direction: Direction) {
        this.colors = colors;
        this.origin = origin;
        this.size = size;
        this.direction = direction;
    }

    draw() {
        let x = this.origin.x, y = this.origin.y;
        let [horizontal, vertical] = directionMatrix(this.direction);
        for (let i = 0; i < this.colors.length; i++) {
            window.fill(this.colors[i].getP5Color());
            window.rect(x, y, this.size.width, this.size.height);
            x += this.size.width * horizontal;
            y += this.size.height * vertical;
        }
    }
}

export default ColorPicker;