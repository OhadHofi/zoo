class Animal {
    private _name : string
    private _food : Food

     constructor(name : string, food: Food){
        this._name = name
        this._food = food
     }

     feed(){
        console.log(`${this._name} was feeden`)
     }

     get food(): Food{
        return this._food
     }

}

