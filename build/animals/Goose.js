"use strict";
class Goose extends Mammal {
    constructor(name) {
        super(name, new Food("seeds", 1000), 5);
    }
}
