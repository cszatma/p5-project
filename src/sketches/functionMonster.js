import { w } from "global/constants";

export default function drawFunctionMonster() {
    function drawBody() {
        w.fill(152, 234, 175);
        w.ellipse(200, 200, 300, 300);
    }

    function drawMouth() {
        w.fill(255, 0, 0);
        w.arc(200, 250, 100, 100, 0, Math.PI);
    }

    function drawEye(x: number, y: number) {
        w.fill(255);
        w.ellipse(x, y, 80, 80);
        w.fill(0);
        w.ellipse(x, y, 20, 20);
    }

    (() => {
        drawBody();
        drawMouth();
        drawEye(150, 50);
        drawEye(250, 50);
    })();
}