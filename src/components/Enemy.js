// @flow

import { Color, Point, Size } from "graphics/Graphics";

class Enemy {
    origin: Point;
    size: Size;
    speed: [number, number];
    color: Color;

    constructor(origin: Point, size: Size, speed: [number, number], color: Color) {
        this.origin = origin;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }

    draw() {
        window.fill(this.color.p5Color);
        window.ellipse(this.origin.x, this.origin.y, this.size.width, this.size.height);
    }

    move() {
        this.origin.x += this.speed[0];
        this.origin.y += this.speed[1];
    }

    animate() {
        this.draw();
        this.move();
    }

    checkCollisionWith(point: Point): boolean {
        return Math.abs(this.origin.x - point.x) < this.size.width &&
            Math.abs(this.origin.y - point.y) < this.size.height;
    }

    modifySpeedBy(amount: [number, number]) {
        this.speed[0] += amount[0];
        this.speed[1] += amount[1];
    }
}

export default Enemy;