// @flow

export default function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.equals = function(array: Array<any>) {
    return this.length === array.length && this.every((el, i) => el === array[i]);
};