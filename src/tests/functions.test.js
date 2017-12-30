import * as fn from "global/functions";
import { Direction } from "global/constants";
import Point from "graphics/Point";

describe("Test all global functions", () => {
    test("(550, 78) should be out of bounds", () =>
        expect(fn.isOutOfBounds(new Point(550, 78))).toBe(true));

    test("(56, 148) should be within bounds", () =>
        expect(fn.isOutOfBounds(new Point(56, 148))).toBe(false));

    test("Direction.left tuple representation should be [-1, 0]", () =>
        expect(fn.directionMatrix(Direction.left)).toEqual([-1, 0]));

    test("adding tuples [2, 5], [3, 8] should return [5, 13]", () =>
        expect(fn.addBinaryTuples([2, 5], [3, 8])).toEqual([5, 13]));

    test("scaling [3, 5] by 3 should return [9, 15]", () =>
        expect(fn.scaleBinaryTuple([3, 5], 3)).toEqual([9, 15]));

    test("3^2 + 4^2 = 5^2", () =>
        expect(fn.pythagoreanTheorem(3, 4)).toBe(5));

    test("39 should be Direction.right", () =>
        expect(fn.directionFromArrowKey(39)).toEqual(Direction.right));
});