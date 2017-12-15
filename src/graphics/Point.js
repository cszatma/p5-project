// @flow

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get tupleValue(): [number, number] {
        return [this.x, this.y];
    }

    set tupleValue(newValue: [number, number]) {
        this.x = newValue[0];
        this.y = newValue[1];
    }

    isEqual(point: Point): boolean {
        return this.x === point.x && this.y === point.y;
    }

    static fromTuple(tuple: [number, number]): Point {
        return new Point(tuple[0], tuple[1]);
    }

    static get zero(): Point {
        return new Point(0, 0);
    }
}

export default Point;