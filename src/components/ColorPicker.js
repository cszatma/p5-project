// @flow

import { Color, Point, Rectangle, Size } from  "../graphics/Graphics";
import { Direction } from "../global/constants";
import { directionMatrix } from "../global/functions";

class ColorPicker {
    _colorRects: Rectangle[];
    _origin: Point;
    _size: Size;
    _direction: Direction;

    constructor(colors: Color[], origin: Point, size: Size, direction: Direction) {
        this._colorRects = [];
        this._origin = origin;
        this._size = size;
        this._direction = direction;
        this._generateRects(colors);
    }

    _generateRects(colors: Color[]) {
        let x = this._origin.x, y = this._origin.y;
        let [horizontal, vertical] = directionMatrix(this._direction);
        for (let i = 0; i < colors.length; i++) {
            this._colorRects.push(new Rectangle(new Point(x, y), this._size, colors[i]));
            x += this._size.width * horizontal;
            y += this._size.height * vertical;
        }
    }

    draw() {
        this._colorRects.forEach(rect => rect.draw());
    }
}

export default ColorPicker;