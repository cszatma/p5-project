import 'p5/lib/addons/p5.dom';
import Color from './Color';

export default function createSketch(view, width = 500, height = 500, color = new Color(255)) {
    view.setup = function() {
        createCanvas(500, 500);
        background(color.getP5Color());
        createButton("Reset").mousePressed(() =>{
            clear();
            background(color.getP5Color());
        });
    }
};