"use strict";
class Whale extends SeaCreature {
    constructor(name) {
        super(name, new Food("plankton", 2000000), 100);
    }
}
