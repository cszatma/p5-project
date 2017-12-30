// @flow

import {setup} from "./Snake";

export default class Sketch<Args> {
    constructor() {
        // $FlowIgnore
        if (new.target === Sketch) {
            throw new TypeError("Sketch is an abstract class and cannot be instantiated directly.");
        } else if (typeof this.draw !== "function") {
            throw new TypeError("draw() must be overridden");
        }
    }

    /**
     * Required by every implementation of Sketch
     */
    draw(args?: Args) {}

    /**
     * Performs any necessary setup actions before the sketch is drawn.
     */
    setup(args?: Args) {}

    reset(args?: Args) {}

    handleClick(args?: Args) {}

    handleMousePressed(args?: Args) {}

    handleMouseReleased(args?: Args) {}

    handleKeyPressed(args?: Args) {}

    /**
     * Creates a Sketch from a given function.
     * Useful for creating basic sketches that only have a draw function.
     * @param drawFunction The function that will be used in the Sketch's draw function.
     * @param setup Optional function containing any required setup for the sketch.
     * @returns A Sketch class.
     */
    static createSketch(drawFunction: void => void, setup?: void => void): Object {
        return class extends Sketch<{}> {
            draw() {
                drawFunction();
            }

            setup() {
                setup !== undefined && setup();
            }
        };
    }
}