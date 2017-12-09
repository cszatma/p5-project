// @flow

import 'p5/lib/addons/p5.dom';
import Color from './Color';

export default function createSketch(view, width: number = 500, height: number = 500, color: Color = new Color(255)) {
    view.setup = function() {
        // $FlowIgnore
        createCanvas(500, 500);
        // $FlowIgnore
        background(color.getP5Color());
        // $FlowIgnore
        createButton("Reset").mousePressed(() =>{
            // $FlowIgnore
            clear();
            // $FlowIgnore
            background(color.getP5Color());
        });
    }
}