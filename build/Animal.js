"use strict";
class Animal {
    constructor(name, food) {
        this._name = name;
        this._food = food;
    }
    feed() {
        console.log(`${this._name} was feeden`);
    }
    get food() {
        return this._food;
    }
}
