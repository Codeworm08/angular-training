class Car{
    brand:string;
    model:string;
    year:number;
    constructor(brand:string,model:string,year:number){
        this.brand=brand;
        this.model=model;
        this.year=year;        
    }
    getDetails():string{
        return `${this.brand} ${this.model}, ${this.year}`
    }
}

let toyota:Car = new Car('Toyota','Corolla',2019)

console.log(toyota.getDetails())