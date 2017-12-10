// @flow

function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function isWithinRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
}

Array.prototype.equals = function(array: Array<any>) {
    return this.length === array.length && this.every((el, i) => el === array[i]);
};

export { randomInt, isWithinRange };