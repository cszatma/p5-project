// @flow

export default class Sketch {
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
    draw() {}

    /**
     * Performs any necessary setup actions before the sketch is drawn.
     */
    setup() {}

    reset() {}

    handleClick(x: number, y: number) {}

    handleMousePressed() {}

    handleMouseReleased() {}

    handleKeyPressed(key: any) {}
}