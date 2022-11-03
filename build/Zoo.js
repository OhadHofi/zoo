"use strict";
class Zoo {
    constructor(animals) {
        this._supply = {};
        this._supplyOrder = {
            meat: 40000,
            plankton: 2000000,
            algae: 50,
            seeds: 40,
            worms: 4000
        };
        this._animals = animals;
        this._supply = {
            meat: new Food("meat", this._supplyOrder.meat),
            plankton: new Food("plankton", this._supplyOrder.plankton),
            algae: new Food("algae", this._supplyOrder.algae),
            seeds: new Food("seeds", this._supplyOrder.seeds),
            worms: new Food("worms", this._supplyOrder.worms)
        };
    }
    dailyFeeding() {
        let food;
        this._animals.forEach((a) => {
            food = a.food;
            this.refillIfNeeded(food);
            this._supply[food.type].amountInGrams -= a.food.amountInGrams;
            a.feed();
        });
    }
    refillIfNeeded(food) {
        if (this._supply[food.type].amountInGrams < food.amountInGrams) {
            this._supply[food.type].amountInGrams += this._supplyOrder[food.type];
            console.log(`-- refill ${food.type} --`);
        }
    }
}
