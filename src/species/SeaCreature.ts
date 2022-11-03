 class SeaCreature extends Animal{
    private _lowestDepth : number

    constructor(name: string, food: Food, lowestDepth: number){
        super(name, food)
        this._lowestDepth = lowestDepth
    }
 }