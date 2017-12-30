import { Direction, w } from "global/constants";
import { addBinaryTuples, directionMatrix, isOutOfBounds, scaleBinaryTuple } from "global/functions";
import { Point } from "graphics/Graphics";

export default class Snake {
    points: Point[];
    size: number;
    direction: Direction;

    constructor(startingLength: number, size: number, direction: Direction) {
        this.points = [];
        this.size = size;
        this.direction = direction;

        for (let i = 0; i < startingLength; i++) {
            this.points.push(new Point(i * -size, size));
        }
    }

    draw() {
        this.points.forEach((point, index) => {
            w.stroke(255);
            const fillColor = index === 0 ? w.color(255, 0, 0) : w.color(0);
            w.fill(fillColor);
            w.rect(point.x, point.y, this.size, this.size);
        });
    }

    move(foodLocation?: Point, callback?: void => void) {
        const moveTuple = scaleBinaryTuple(directionMatrix(this.direction), this.size);
        const newPointTuple = addBinaryTuples(this.points[0].tupleValue, moveTuple);
        const newPoint = Point.fromTuple(newPointTuple);

        if (newPoint.isEqual(foodLocation)) {
            typeof callback === "function" && callback();
        } else {
            this.points.pop();
        }

        this.points.unshift(newPoint);
    }

    checkCollision(): boolean {
        const [head, ...tail] = this.points;
        return isOutOfBounds(head) || !!tail.find(point => point.isEqual(head));
    }
}