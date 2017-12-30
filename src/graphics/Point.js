// @flow

import type { PointTuple } from "global/typealiases";
import { pythagoreanTheorem } from "global/functions";

export default class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get tupleValue(): PointTuple {
        return [this.x, this.y];
    }

    set tupleValue(newValue: PointTuple) {
        this.x = newValue[0];
        this.y = newValue[1];
    }

    isEqual(point: Point): boolean {
        return this.x === point.x && this.y === point.y;
    }

    clone(): Point {
        return new Point(this.x, this.y);
    }

    distanceTo(point: Point): number {
        return pythagoreanTheorem(point.x - this.x, point.y - this.y);
    }

    static fromTuple(tuple: PointTuple): Point {
        return new Point(tuple[0], tuple[1]);
    }

    static get zero(): Point {
        return new Point(0, 0);
    }
}