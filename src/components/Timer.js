// @flow

export default class Timer {
    _interval: number;
    _handler: void => void;
    _timerId: ?number;

    constructor(interval: number, handler: void => void) {
        this._interval = interval;
        this._handler = handler;
        this._timerId = null;
    }

    get isRunning(): boolean {
        return this._timerId !== null;
    }

    start() {
        if (this.isRunning) {
            console.log("Timer is already running!");
            return;
        }

        this._timerId = window.setInterval(this._handler, this._interval);
    }

    stop() {
        if (!this.isRunning) {
            console.log("Timer isn't running!");
            return;
        }

        window.clearInterval(this._timerId);
        this._timerId = null;
    }

    setInterval(interval: number) {
        this._update(timer => {
            timer._interval = interval;
        });
    }

    setHandler(handler: void => void) {
        this._update(timer => {
            timer._handler = handler;
        });
    }

    _update(updateFunc: Timer => void) {
        const isRunning = this.isRunning;
        isRunning && this.stop();
        updateFunc(this);
        isRunning && this.start();
    }
}