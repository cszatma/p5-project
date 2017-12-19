// @flow

import { Color, Point, Rectangle, Size } from "../graphics/Graphics";
import { w, Direction } from "../global/constants";
import { addBinaryTuples, directionMatrix, isOutOfBounds, randomInt, scaleBinaryTuple } from "../global/functions";

class Snake {
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
        const moveTuple = scaleBinaryTuple(directionMatrix(this.direction), cellSize);
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

const cellSize = 20;
const food = new Rectangle(Point.zero, new Size(cellSize, cellSize), new Color(0, 255, 0));
const game = {
    isOver: false,
    _speed: 10,
    get speed() {
        return this._speed;
    },
    set speed(newValue) {
        this._speed = newValue;
        w.frameRate(this._speed);
    }
};

let snake = new Snake(5, cellSize, Direction.right);

function createFood() {
    let multiplier = Math.round((400 - cellSize) / cellSize);
    food.origin.x = Math.round(randomInt(0, multiplier)) * cellSize;
    food.origin.y = Math.round(randomInt(0, multiplier)) * cellSize;
}

function setup() {
    w.frameRate(game.speed);
    createFood();
}

function run() {
    if (game.isOver) {
        w.background(255, 0, 0);
        return;
    }

    w.background(255);
    snake.draw();
    food.draw();
    snake.move(food.origin, () => {
        game.speed++;
        createFood();
    });

    if (snake.checkCollision()) {
        game.isOver = true;
    }
}

function reset() {
    game.isOver = false;
    game.speed = 10;
    snake = new Snake(5, cellSize, Direction.right);
    createFood();
}

function handleKeyPressed(keyCode: number) {
    switch (keyCode) {
        case w.LEFT_ARROW:
            snake.direction = Direction.left;
            break;
        case w.RIGHT_ARROW:
            snake.direction = Direction.right;
            break;
        case w.UP_ARROW:
            snake.direction = Direction.up;
            break;
        case w.DOWN_ARROW:
            snake.direction = Direction.down;
            break;
        default:
            return;
    }
}

export { setup, run, reset, handleKeyPressed };