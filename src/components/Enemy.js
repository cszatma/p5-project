// @flow

import { Point, Size } from "../graphics/Graphics";

class Enemy {
    origin: Point;
    size: Size;
    speed: [number, number];

    constructor(origin: Point, size: Size, speed: [number, number]) {
        this.origin = origin;
        this.size = size;
        this.speed = speed;
    }

    draw(color: $FlowIgnore) {
        window.fill(color);
        window.ellipse(this.origin.x, this.origin.y, this.size.width, this.size.height);
    }

    move() {
        this.origin.x += this.speed[0];
        this.origin.y += this.speed[1];
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