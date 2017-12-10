// @flow

import { randomInt } from "../global/functions";

class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(r: number, g: number = r, b: number = r, a: number = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /** Returns a p5 color using the Color object's RGBA values */
    getP5Color(): $FlowIgnore {
        return window.color(this.r, this.g, this.b, this.a);
    }

    /** Updates the object's RGBA values */
    setColor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /** Updates the object's RGBA values using a given Color object's RGBA values. */
    updateFromColor(color: Color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this.a = color.a;
    }

    /** Updates the object's RGBA values using a given p5 color */
    updateFromP5Color(p5Color: $FlowIgnore) {
        this.r = p5Color._getRed();
        this.g = p5Color._getGreen();
        this.b = p5Color._getBlue();
        this.a = p5Color._getAlpha();
    }

    /** Updates the object's RBGA values using a given array */
    updateFromArray(array: number[]) {
        this.r = array[0];
        this.g = array[1];
        this.b = array[2];

        if (array[3] !== undefined) {
            this.a = array[3];
        }
    }

    isEqual(color: Color): boolean {
        return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
    }

    toArray(): number[] {
        return [this.r, this.g, this.b, this.a];
    }

    /* Static Methods */

    /** Returns a Color object with random RGB values */
    static randomColor(hasRandomAlpha: boolean): Color {
        return new Color(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), hasRandomAlpha ? randomInt(0, 256) : 255);
    }

    /** Returns a random p5 color */
    static p5RandomColor(hasRandomAlpha: boolean): $FlowIgnore {
        return window.color(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), hasRandomAlpha ? randomInt(0, 256) : 255);
    }

    /** Returns a Color object from a given p5 color */
    static fromP5Color(p5Color: $FlowIgnore): Color {
        return new Color(p5Color._getRed(), p5Color._getGreen(), p5Color._getBlue(), p5Color._getAlpha());
    }

    /** Returns a Color object from a given array */
    static fromArray(array: number[]): Color {
        return new Color(array[0], array[1], array[2], array[3] !== undefined ? array[3] : 255);
    }
}

export default Color;