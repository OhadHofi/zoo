"use strict";
class Lion extends Mammal {
    constructor(name) {
        super(name, new Food("meat", 6000), 3);
    }
}
