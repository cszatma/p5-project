// @flow

import Color from "./Color";
import Point from "./Point";
import Size from "./Size";
import Shape from "./Shape";

export default class Arc extends Shape {
    startAngle: number;
    endAngle: number;

    constructor(origin: Point, size: Size, startAngle: number, endAngle: number, color: Color) {
        super(origin, size, color);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    draw() {
        super.draw();
        window.arc(this.origin.x, this.origin.y, this.size.width, this.size.height,
            this.startAngle, this.endAngle);
    }

    isWithinBounds(point: Point): boolean {
        const angle = Math.atan2(point.y, point.x);
        if (angle < this.startAngle || angle > this.endAngle) {
            return false;
        }

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

    static init(x: number, y: number, width: number, height: number,
                startAngle: number, endAngle: number, color: Color): Arc {
        return new Arc(new Point(x, y), new Size(width, height), startAngle, endAngle, color);
    }

    static p5Arc(origin: Point, size: Size, startAngle: number, endAngle: number, color?: Color) {
        color !== undefined && window.fill(color.p5Color);
        window.arc(origin.x, origin.y, size.width, size.height, startAngle, endAngle);
    }
}