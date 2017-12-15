// @flow

import { randomInt } from "../global/functions";
import { Direction, w, canvasSize } from "../global/constants";
import Enemy from "../components/Enemy";
import { Point, Size } from "../graphics/Graphics";

const enemy = new Enemy(Point.fromTuple(spawnPoint(Direction.left)),
    new Size(15, 15), [-10, 0]);

const secondEnemy = new Enemy(Point.fromTuple(spawnPoint(Direction.right)),
    new Size(25, 25), [10, 0.5]);

const game = {
    score: 0,
    lives: 5,
    heroSize: 50
};

function spawnPoint(direction: Direction): [number, number] {
    if (direction === Direction.up || direction === Direction.down) {
        throw new Error("Direction for spawnPoint() can only be left or right!");
    }

    return [direction === Direction.left ? canvasSize.width - 15 : 15,
        randomInt(0, 476)];
}

function drawHero() {
    w.fill(0, 255, 0);
    w.ellipse(w.mouseX, w.mouseY, game.heroSize, game.heroSize);
}

function resetEnemy(increaseScore: boolean) {
    if (!increaseScore) {
        enemy.origin.tupleValue = spawnPoint(Direction.left);
        secondEnemy.origin.tupleValue = spawnPoint(Direction.right);
        return;
    }

    if (enemy.origin.x < -15) {
        enemy.origin.tupleValue = spawnPoint(Direction.left);
        enemy.size.width < 50 && enemy.size.incrementBy(1);
        enemy.speed > -15 && enemy.modifySpeedBy(-0.3);
        increaseScore && game.score++
    }

    if (secondEnemy.origin.x > canvasSize.width + 15) {
        secondEnemy.origin.tupleValue = spawnPoint(Direction.right);
        secondEnemy.speed[1] = 1.5 * randomInt(-1, 2);
        increaseScore && game.score++
    }
}

function checkCollision() {
    const mouse = w.mouse;
    if (enemy.checkCollisionWith(mouse) || secondEnemy.checkCollisionWith(mouse)) {
        game.lives--;
        resetEnemy(false);
    }
}

function runGame() {
    w.background(100, 150, 225);
    drawHero();
    enemy.draw(w.color(255, 0, 0));
    enemy.move();
    secondEnemy.draw(color(0, 50, 200));
    secondEnemy.move();
    resetEnemy(true);
    checkCollision();
    displayStats()
}

function displayStats() {
    w.fill(0);
    textSize(20);
    w.text(`Score: ${game.score}`, 10, 20);
    w.text(`Lives: ${game.lives}`, canvasSize.width - 80, 20);
}

function gameOver() {
    w.background(0);
    w.fill(255, 0, 0);
    w.textSize(40);
    w.text("GAME OVER", canvasSize.width / 4, canvasSize.height / 2);
    w.text(`Score: ${game.score}`, canvasSize.width / 3, canvasSize.height / 1.5);
}

function reset() {
    game.score = 0;
    game.lives = 5;
}

function handleMousePressed() {
    game.heroSize /= 2;
    enemy.size.incrementBy(10);
    secondEnemy.size.incrementBy(10);
    enemy.speed[0] -= 5;
    secondEnemy.speed[0] += 5;
}

function handleMouseReleased() {
    game.heroSize *= 2;
    enemy.size.incrementBy(-10);
    secondEnemy.size.incrementBy(-10);
    enemy.speed[0] += 5;
    secondEnemy.speed[0] -= 5;
}

function draw() {
    game.lives > 0 ? runGame() : gameOver();
}

export { draw, reset, handleMousePressed, handleMouseReleased };