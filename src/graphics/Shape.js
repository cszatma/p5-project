// @flow

import Color from "./Color";
import Point from "./Point";
import Size from "./Size";

export default class Shape {
    origin: Point;
    size: Size;
    color: Color;

    constructor(origin: Point, size: Size, color: Color) {
        // $FlowIgnore
        if (new.target === Shape) {
            throw new TypeError("Shape is an abstract class and cannot be instantiated directly.");
        } else if (typeof this.draw !== "function") {
            throw new TypeError("draw() must be overridden");
        }

        this.origin = origin;
        this.size = size;
        this.color = color;
    }

    /**
     * Required by every implementation of Sketch
     */
    draw() {
        window.fill(this.color.p5Color);
    }

    onClick(handler: void => void, point: Point = window.mouse) {
        this.isWithinBounds(point) && handler();
    }

    isWithinBounds(point: Point): boolean {
        return false;
    }

    isEqual(shape: Shape): boolean {
        return this.origin.isEqual(shape.origin)
            && this.size.isEqual(shape.size)
            && this.color.isEqual(shape.color);
    }
}