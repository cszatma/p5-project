// @flow

export default class Size {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    get tupleValue(): [number, number] {
        return [this.width, this.height];
    }

    set tupleValue(newValue: [number, number]) {
        this.width = newValue[0];
        this.height = newValue[1];
    }

    incrementBy(amount: number) {
        this.width += amount;
        this.height += amount;
    }

    isEqual(size: Size): boolean {
        return this.width === size.width && this.height === size.width;
    }

    clone(): Size {
        return new Size(this.width, this.height);
    }

    static withSide(side: number): Size {
        return new Size(side, side);
    }

    static fromTuple(tuple: [number, number]): Size {
        return new Size(tuple[0], tuple[1]);
    }
}