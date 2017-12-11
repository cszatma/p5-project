Array.prototype.isEqual = function(array) {
    return this.length === array.length && this.every((el, i) => el === array[i]);
};