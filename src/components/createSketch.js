// @flow

import "p5/lib/addons/p5.dom";
import Color from "graphics/Color";
import { canvasSize } from "global/constants";

export default function createSketch(color: Color = new Color(255), additionalSetup?: void => void, resetHandler?: void => void) {
    window.setup = () => {
        window.createCanvas(canvasSize.width, canvasSize.height);
        window.background(color.p5Color);
        window.createButton("Reset").mousePressed(() => {
            window.clear();
            window.background(color.p5Color);
            typeof resetHandler === "function" && resetHandler();
        });
        typeof additionalSetup === "function" && additionalSetup();
    }
}