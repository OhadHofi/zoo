class Whale extends SeaCreature{
    constructor(name: string){
        super(name, new Food("plankton", 2000000), 100)
    }
}