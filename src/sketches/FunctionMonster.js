import Sketch from "./Sketch";
import { Arc, Color, Ellipse } from "graphics/Graphics";

const body = Ellipse.init(200, 200, 300, 300, new Color(152, 234, 175));
const mouth = Arc.init(200, 250, 100, 100, 0, Math.PI, Color.red());
const eyes = [createEye(150, 50), createEye(250, 50)];

const FunctionMonster = Sketch.createSketch(() => {
    body.draw();
    mouth.draw();
    eyes.forEach(eye => eye.forEach(part => part.draw()));
});

export default new FunctionMonster();

function createEye(x: number, y: number): [Ellipse, Ellipse] {
    return [
        Ellipse.init(x, y, 80, 80, Color.white()),
        Ellipse.init(x, y, 20, 20, Color.black())
    ];
}