// @flow

import Sketch from "./Sketch";
import { Color, Rectangle } from "graphics/Graphics";
import { randomInt } from "global/functions";

const algaSize = 10;
const test = 10;

class Alga {
    _rect: Rectangle;

    constructor(x: number, y: number, size: number, color: Color) {
        this._rect = Rectangle.init(x, y, size, size, color);
    }

    draw() {
        this._rect.draw();
    }

    get x() {
        return this._rect.origin.x;
    }

    get y() {
        return this._rect.origin.y;
    }
}

function createAlga(x: number, y: number): Alga {
    return new Alga(x, y, algaSize, new Color(51, randomInt(120, 180), 130));
}

class AlgaeGrowth extends Sketch<{}> {
    _algae: Alga[];
    _clicked: boolean;
    _counter: number;

    constructor() {
        super();
        this._algae = [];
        this._clicked = false;
        this._counter = 0;
    }

    draw() {
        if (this._counter < 2000 && this._clicked) {
            window.noStroke();
            this._algae.forEach(alga => alga.draw());
            this._growAlgae();
            this._counter++;
        }
    }

    handleMousePressed() {
        if (!this._clicked) {
            this._counter = 0;
            this._clicked = true;
            this._algae.push(createAlga(window.mouseX, window.mouseY));
        }
    }

    reset() {
        this._clicked = false;
        this._counter = 0;
        this._algae = [];
    }

    _algaAtPosition(x: number, y: number): boolean {
        return !!this._algae.find(alga => alga.x === x && alga.y === y);
    }

    _growAlgae() {
        this._algae.forEach(alga => {
            if (randomInt(0, test) < 1) {
                const x = alga.x + (randomInt(-1, 2) * algaSize);
                const y = alga.y + (randomInt(-1, 2) * algaSize);
                this._algaAtPosition(x,y) || this._algae.push(createAlga(x, y));
            }
        });
    }
}

export default new AlgaeGrowth();