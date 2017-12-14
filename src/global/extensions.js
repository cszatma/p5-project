Array.prototype.isEqual = function(array) {
    return this.length === array.length && this.every((el, i) => el === array[i]);
};

Date.intervalSince = function(milliseconds) {
    return Date.now() - milliseconds;
};