// @flow

import Color from "./Color";
import Point from "./Point";

export default class Text {
    stringValue: string;
    origin: Point;
    size: number;
    color: Color;

    constructor(stringValue: string, origin: Point, color: Color, size?: number) {
        this.stringValue = stringValue;
        this.origin = origin;
        this.size = size || Text.defaultSize;
        this.color = color;
    }

    draw() {
        Text.p5Text(this.stringValue, this.origin, this.color, this.size);
    }

    static get defaultSize(): number {
        return 12;
    }

    static p5Text(stringValue: string, origin: Point, color: Color, size?: number) {
        window.fill(color.p5Color);
        window.textSize(size || Text.defaultSize);
        window.text(stringValue, origin.x, origin.y);
    }
}