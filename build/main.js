"use strict";
const TOW_WEEKS = 14;
const animals = [];
animals.push(new Lion("Simba"));
animals.push(new Lion("Nala"));
animals.push(new Whale("Willy"));
animals.push(new Goose("Akka"));
animals.push(new Owl("Hedwig"));
animals.push(new ClownFish("Nemo"));
animals.push(new ClownFish("Marlin"));
const zoo = new Zoo(animals);
for (let i = 0; i < TOW_WEEKS; i++) {
    zoo.dailyFeeding();
}
