class Car{
    private owner: string;
    private type: string;
    private year: number;

    constructor(owner: string, type: string, year: number){
        this.owner = owner;
        this.type = type;
        this.year = year;

        this.ownerCar()
    }

    private ownerCar(): void {
        console.log(`El dueño del carro es: ${this.owner}`)
    }
}

let car1 = new Car("Ismael", "Jeep", 1995)