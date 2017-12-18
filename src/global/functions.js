// @flow

import { canvasSize, Direction } from "./constants";

function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function isWithinRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
}

function checkBoundary(value: number, direction: Direction): boolean {
    switch (direction) {
        case Direction.left:
            return value < 0;
        case Direction.right:
            return value > canvasSize.width;
        case Direction.up:
            return value < 0;
        case Direction.down:
            return value > canvasSize.height;
        default:
            return false;
    }
}

function directionMatrix(direction: Direction): number[] {
    if (direction === Direction.left || direction === Direction.right) {
        return [direction === Direction.left ? -1 : 1, 0];
    } else {
        return [0, direction === direction.up ? -1 : 1];
    }
}

function addBinaryTuples(first: [number, number], second: [number, number]): [number, number] {
    return [first[0] + second[0], first[1] + second[1]];
}

export { randomInt, isWithinRange, checkBoundary, directionMatrix, addBinaryTuples };