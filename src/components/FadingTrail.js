import Color from "./Color";

class FadingTrail {
    length: number;
    xPositions: number[];
    yPositions: number[];
    color: Color;

    constructor(length: number, color: Color) {
        this.length = length;
        this.color = color;
        this.xPositions = [];
        this.yPositions = [];
    }

    draw(x: number, y: number) {
        this.xPositions[this.length] = x;
        this.yPositions[this.length] = y;

        this.xPositions.shift();
        this.yPositions.shift();

        window.fill(this.color.getP5Color());
        this.xPositions.forEach((x, i) => {
            window.ellipse(x, this.yPositions[i], i / 2, i / 2); });
    }


}

export default FadingTrail;