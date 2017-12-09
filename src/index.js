import p5 from 'p5';
import createSketch from './components/createSketch';
import Color from './components/Color';

createSketch(window, 500, 500, new Color(0, 100, 200));

window.draw = function() {
    const c = new Color(100, 0, 0);
    fill(c.getP5Color());
    ellipse(200, 200, 50, 50);
};

