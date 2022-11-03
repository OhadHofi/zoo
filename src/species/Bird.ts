

class Bird extends Animal{
    private _wingSpan : number

    constructor(name: string, food: Food, wingSpan: number){
        super(name, food)
        this._wingSpan = wingSpan
    }
}