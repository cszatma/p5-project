// @flow

import type { ColorTuple } from "global/typealiases";
import { randomInt } from "global/functions";
import { w } from "global/constants";

export default class Color {
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

    /** Updates the object's RGBA values */
    setColor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /** Returns a p5 color using the Color object's RGBA values */
     get p5Color(): $FlowIgnore {
        return w.color(this.r, this.g, this.b, this.a);
    }

    /** Updates the object's RGBA values using a given p5 color */
    set p5Color(p5Color: $FlowIgnore) {
        this.setColor(w.red(p5Color), w.green(p5Color), w.blue(p5Color), w.alpha(p5Color));
    }

    /** Updates the object's RGBA values using a given Color object's RGBA values. */
    updateFromColor(color: Color) {
        this.setColor(color.r, color.g, color.b, color.a);
    }

    get tupleValue(): ColorTuple {
        return [this.r, this.g, this.b, this.a];
    }

    /** Updates the object's RBGA values using a given array */
    set tupleValue(array: ColorTuple) {
        this.setColor(array[0], array[1], array[2], array[3] || 255);
    }

    isEqual(color: Color): boolean {
        return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
    }

    clone(): Color {
        return new Color(this.r, this.g, this.b, this.a);
    }

    /* Static Methods */
    static randomRGBATuple(hasRandomAlpha: boolean = false): ColorTuple {
        return [randomInt(0, 256), randomInt(0, 256), randomInt(0, 256),
            hasRandomAlpha ? randomInt(0, 256) : 255];
    }

    /** Returns a Color object with random RGB values */
    static random(hasRandomAlpha: boolean = false): Color {
        return Color.fromTuple(Color.randomRGBATuple(hasRandomAlpha));
    }

    /** Returns a random p5 color */
    static randomP5Color(hasRandomAlpha: boolean = false): $FlowIgnore {
        return w.color(Color.randomRGBATuple(hasRandomAlpha));
    }

    /** Returns a Color object from a given p5 color */
    static fromP5Color(p5Color: $FlowIgnore): Color {
        return new Color(w.red(p5Color), w.green(p5Color), w.blue(p5Color), w.alpha(p5Color));
    }

    /** Returns a Color object from a given array */
    static fromTuple(array: ColorTuple): Color {
        return new Color(array[0], array[1], array[2], array[3] || 255);
    }

    /* Colors */
    static black(): Color {
        return new Color(0);
    }

    static white(): Color {
        return new Color(255);
    }

    static gray(): Color {
        return new Color(128);
    }

    static red(): Color {
        return new Color(255, 0, 0);
    }

    static green(): Color {
        return new Color(0, 255, 0);
    }

    static blue(): Color {
        return new Color(0, 0, 255);
    }
}