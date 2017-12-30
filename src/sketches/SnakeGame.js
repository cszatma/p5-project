// @flow

import { Color, Point, Rectangle, Size } from "graphics/Graphics";
import { w, Direction } from "global/constants";
import { addBinaryTuples, directionMatrix, isOutOfBounds, randomInt, scaleBinaryTuple } from "global/functions";



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