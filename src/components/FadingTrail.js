import Color from "graphics/Color";

class FadingTrail {
    _length: number;
    _xPositions: number[];
    _yPositions: number[];
    _color: Color;

    constructor(length: number, color: Color) {
        this._length = length;
        this._color = color;
        this._xPositions = [];
        this._yPositions = [];
    }

    get length(): number {
        return this._length;
    }

    set length(length: number) {
        this._length = length;
        this._xPositions = [];
        this._yPositions = [];
    }

    get color(): Color {
        return this._color.clone();
    }

    set color(color: Color) {
        this._color.updateFromColor(color);
    }

    draw(x: number, y: number) {
        this._xPositions[this._length] = x;
        this._yPositions[this._length] = y;

        this._xPositions.shift();
        this._yPositions.shift();

        window.fill(this._color.p5Color);
        this._xPositions.forEach((x, i) => {
            window.ellipse(x, this._yPositions[i], i / 2, i / 2); });
    }


}

export default FadingTrail;