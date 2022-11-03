class Mammal extends Animal{
    private _pregnancyDurationInMonths : number

    constructor(name: string, food: Food, pregnancyDurationInMonths: number){
        super(name, food)
        this._pregnancyDurationInMonths = pregnancyDurationInMonths
    }

}