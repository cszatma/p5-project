import Point from "graphics/Point";

Array.prototype.isEqual = function(array) {
    return this.length === array.length && this.every((el, i) => el === array[i]);
};

Date.intervalSince = function(milliseconds) {
    return Date.now() - milliseconds;
};

Object.defineProperty(window, "mouse", {
    get: function() {
        return new Point(mouseX, mouseY);
    }
});