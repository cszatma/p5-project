// @flow

import 'p5/lib/addons/p5.dom';
import Color from './Color';

export default function createSketch(width: number = 500, height: number = 500, color: Color = new Color(255)) {
    window.setup = function() {
        window.createCanvas(500, 500);
        window.background(color.getP5Color());
        window.createButton("Reset").mousePressed(() => {
            window.clear();
            window.background(color.getP5Color());
        });
    }
}