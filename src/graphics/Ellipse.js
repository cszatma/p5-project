// @flow

import Color from "./Color";
import Point from "./Point";
import Size from "./Size";
import Shape from "./Shape";

export default class Ellipse extends Shape {
    constructor(origin: Point, size: Size, color: Color) {
        super(origin, size, color);
    }

    draw() {
        super.draw();
        window.ellipse(this.origin.x, this.origin.y, this.size.width, this.size.height);
    }

    isWithinBounds(point: Point): boolean {
        const { x, y } = this.origin;
        const deltaX = (point.x - x) ** 2, deltaY = (point.y - y) ** 2;
        return (deltaX / (this.radiusX ** 2)) + (deltaY / (this.radiusY ** 2)) <= 1;
    }

    get radiusX(): number {
        return this.size.width / 2;
    }

    get radiusY(): number {
        return this.size.height / 2;
    }

    static init(x: number, y: number, width: number, height: number, color: Color): Ellipse {
        return new Ellipse(new Point(x, y), new Size(width, height), color);
    }

    static p5Rect(origin: Point, size: Size, color?: Color) {
        color !== undefined && window.fill(color.p5Color);
        window.ellipse(origin.x, origin.y, size.width, size.height);
    }
}