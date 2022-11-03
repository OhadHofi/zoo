"use strict";
class Food {
    constructor(type, amountInGrams) {
        this._type = type;
        this._amountInGrams = amountInGrams;
    }
    get type() {
        return this._type;
    }
    get amountInGrams() {
        return this._amountInGrams;
    }
    set amountInGrams(amountInGrams) {
        this._amountInGrams = amountInGrams;
    }
}
