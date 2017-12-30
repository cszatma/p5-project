// @flow

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
}