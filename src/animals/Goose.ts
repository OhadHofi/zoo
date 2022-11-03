class Goose extends Mammal{

    constructor(name: string){
        super(name, new Food("seeds", 1000), 5)
    }
}