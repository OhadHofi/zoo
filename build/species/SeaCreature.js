"use strict";
class SeaCreature extends Animal {
    constructor(name, food, lowestDepth) {
        super(name, food);
        this._lowestDepth = lowestDepth;
    }
}
