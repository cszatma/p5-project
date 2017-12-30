// @flow

import Sketch from "./Sketch";
import { randomInt } from "global/functions";
import { Direction, w, canvasSize } from "global/constants";
import Enemy from "components/Enemy";
import { Color, Ellipse, Point, Size, Text } from "graphics/Graphics";

type Game = {
    score: number,
    lives: number,
    reset: void => void;
}

class Apocalypse extends Sketch<{}> {
    _game: Game;
    _hero: Ellipse;
    _firstEnemy: Enemy;
    _secondEnemy: Enemy;
    _scoreText: Text;
    _livesText: Text;

    constructor() {
        super();
        this._game = { score: 0, lives: 5, reset() { this.score = 0; this.lives = 5; } };
        this._hero = new Ellipse(Point.zero, Size.withSide(50), Color.green());
        this._firstEnemy = new Enemy(Point.fromTuple(spawnPoint(Direction.left)),
            new Size(15, 15), [-10, 0], Color.red());

        this._secondEnemy = new Enemy(Point.fromTuple(spawnPoint(Direction.right)),
            new Size(25, 25), [10, 0.5], new Color(0, 50, 200));

        this._scoreText = new Text(`Score: 0`, new Point(10, 20), Color.black(), 20);
        this._livesText = new Text(`Lives: 5`, new Point(canvasSize.width - 80, 20), Color.black(), 20);
    }

    _resetEnemy(increaseScore: boolean) {
        if (!increaseScore) {
            this._firstEnemy.origin.tupleValue = spawnPoint(Direction.left);
            this._secondEnemy.origin.tupleValue = spawnPoint(Direction.right);
            return;
        }

        if (this._firstEnemy.origin.x < -15) {
            this._firstEnemy.origin.tupleValue = spawnPoint(Direction.left);
            this._firstEnemy.size.width < 50 && this._firstEnemy.size.incrementBy(1);
            this._firstEnemy.speed[0] > -15 && this._firstEnemy.modifySpeedBy([-0.3, 0]);
            increaseScore && this._game.score++
        }

        if (this._secondEnemy.origin.x > canvasSize.width + 15) {
            this._secondEnemy.origin.tupleValue = spawnPoint(Direction.right);
            this._secondEnemy.speed[1] = 1.5 * randomInt(-1, 2);
            increaseScore && this._game.score++
        }
    }

    _checkCollision() {
        const mouse = w.mouse;
        if (this._firstEnemy.checkCollisionWith(mouse)
            || this._secondEnemy.checkCollisionWith(mouse)) {
            this._game.lives--;
            this._resetEnemy(false);
        }
    }

    _displayStats() {
        this._scoreText.stringValue = `Score: ${this._game.score}`;
        this._livesText.stringValue = `Lives: ${this._game.lives}`;
        this._scoreText.draw();
        this._livesText.draw();
    }

    _run() {
        w.background(100, 150, 225);
        this._hero.origin = w.mouse;
        this._hero.draw();
        this._firstEnemy.animate();
        this._secondEnemy.animate();
        this._resetEnemy(true);
        this._checkCollision();
        this._displayStats();
    }

    _gameOver() {
        w.background(0);
        w.fill(255, 0, 0);
        w.textSize(40);
        w.text("GAME OVER", canvasSize.width / 4, canvasSize.height / 2);
        w.text(`Score: ${this._game.score}`, canvasSize.width / 3, canvasSize.height / 1.5);
    }

    handleMousePressed() {
        this._toggleSizes(true);
    }

    handleMouseReleased() {
        this._toggleSizes(false);
    }

    _toggleSizes(mousePressed: boolean) {
        this._hero.size.width *= mousePressed ? 1/2 : 2;
        this._hero.size.height *= mousePressed ? 1/2 : 2;
        const enemyIncrement = mousePressed ? 10 : -10;
        const speedIncrement = mousePressed ? 5 : -5;
        this._firstEnemy.size.incrementBy(enemyIncrement);
        this._secondEnemy.size.incrementBy(enemyIncrement);
        this._firstEnemy.speed[0] -= speedIncrement;
        this._secondEnemy.speed[0] += speedIncrement;
    }

    draw() {
        this._game.lives > 0 ? this._run() : this._gameOver();
    }

    reset() {
        this._game.reset();
    }
}

export default new Apocalypse();


function spawnPoint(direction: Direction): [number, number] {
    if (direction === Direction.up || direction === Direction.down) {
        throw new Error("Direction for spawnPoint() can only be left or right!");
    }

    return [direction === Direction.left ? canvasSize.width - 15 : 15,
        randomInt(0, 476)];
}