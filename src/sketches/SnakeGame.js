// @flow

import Sketch from "./Sketch";
import { Color, Point, Rectangle, Size } from "graphics/Graphics";
import { w, Direction } from "global/constants";
import { randomInt, directionFromArrowKey } from "global/functions";
import Snake from "components/Snake";

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

type Args = {
    keyCode: number,
};

class SnakeGame extends Sketch<Args> {
    _snake: Snake;
    _cellSize: number;
    _food: Rectangle;

    constructor(cellSize: number) {
        super();
        this._cellSize = cellSize;
        this._snake = new Snake(5, cellSize, Direction.right);
        this._food = new Rectangle(Point.zero, Size.withSide(cellSize), Color.green());
    }

    draw() {
        if (game.isOver) {
            w.background(255, 0, 0);
            return;
        }

        w.background(255);
        this._snake.draw();
        this._food.draw();
        this._snake.move(this._food.origin, () => {
            game.speed++;
            this._createFood();
        });

        if (this._snake.checkCollision()) {
            game.isOver = true;
        }
    }

    setup() {
        w.frameRate(game.speed);
        this._createFood();
    }

    reset() {
        game.isOver = false;
        game.speed = 10;
        this._snake = new Snake(5, this._cellSize, Direction.right);
        this._createFood();
    }

    handleKeyPressed({ keyCode}: Args) {
        const direction = directionFromArrowKey(keyCode);
        if (direction) {
            this._snake.direction = direction;
        }
    }

    _createFood() {
        const cellSize = this._cellSize;
        let multiplier = Math.round((400 - cellSize) / cellSize);
        this._food.origin.x = Math.round(randomInt(0, multiplier)) * cellSize;
        this._food.origin.y = Math.round(randomInt(0, multiplier)) * cellSize;
    }
}

export default new SnakeGame(20);