"use strict";
class Mammal extends Animal {
    constructor(name, food, pregnancyDurationInMonths) {
        super(name, food);
        this._pregnancyDurationInMonths = pregnancyDurationInMonths;
    }
}
