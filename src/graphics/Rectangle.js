// @flow

import Color from "./Color";
import Point from "./Point";
import Size from "./Size";
import Shape from "./Shape";
import { isWithinRange } from "global/functions";

export default class Rectangle extends Shape {
    constructor(origin: Point, size: Size, color: Color) {
        super(origin, size, color);
    }

    draw() {
        super.draw();
        window.rect(this.origin.x, this.origin.y, this.size.width, this.size.height)
    }

    _isWithinBounds(): boolean {
        return isWithinRange(this.origin.x, 390, 490)
            && isWithinRange(this.origin.y, 460, 490);
    }

    static init(x: number, y: number, width: number, height: number, color: Color): Rectangle {
        return new Rectangle(new Point(x, y), new Size(width, height), color);
    }

    static p5Rect(origin: Point, size: Size, color?: Color) {
        color !== undefined && window.fill(color.p5Color);
        window.rect(origin.x, origin.y, size.width, size.height);
    }
}