import { addBinaryTuples, directionMatrix, isOutOfBounds, scaleBinaryTuple } from "../global/functions";
import { Direction } from "../global/constants";
import Point from "../graphics/Point";

test("(550, 78) should be out of bounds", () =>
    expect(isOutOfBounds(new Point(550, 78))).toBe(true));

test("(56, 148) should be within bounds", () =>
    expect(isOutOfBounds(new Point(56, 148))).toBe(false));

test("Direction.left tuple representation should be [-1, 0]", () =>
    expect(directionMatrix(Direction.left)).toEqual([-1, 0]));

test("adding tuples [2, 5], [3, 8] should return [5, 13]", () =>
    expect(addBinaryTuples([2, 5], [3, 8])).toEqual([5, 13]));

test("scaling [3, 5] by 3 should return [9, 15]", () =>
    expect(scaleBinaryTuple([3, 5], 3)).toEqual([9, 15]));