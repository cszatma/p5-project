// @flow

import Color from "./Color";
import Point from "./Point";
import Size from "./Size";

export default class Rectangle {
    origin: Point;
    size: Size;
    color: Color;

    constructor(origin: Point, size: Size, color: Color) {
        this.origin = origin;
        this.size = size;
        this.color = color;
    }

    draw() {
        window.fill(this.color.p5Color);
        window.rect(this.origin.x, this.origin.y, this.size.width, this.size.height)
    }

    static init(x: number, y: number, width: number, height: number, color: Color): Rectangle {
        return new Rectangle(new Point(x, y), new Size(width, height), color);
    }

    static p5Rect(origin: Point, size: Size) {
        window.rect(origin.x, origin.y, size.width, size.height);
    }
}