class Food{
    private _type : string
    private _amountInGrams :number

    constructor(type: string, amountInGrams: number){
        this._type = type
        this._amountInGrams = amountInGrams
    }

    get type(): string{
        return this._type
    }

    get amountInGrams(): number{
        return this._amountInGrams
    }

    set amountInGrams(amountInGrams: number){
        this._amountInGrams = amountInGrams
    }
}