var Car = /** @class */ (function () {
    function Car(owner, type, year) {
        this.owner = owner;
        this.type = type;
        this.year = year;
        this.ownerCar();
    }
    Car.prototype.ownerCar = function () {
        console.log("El due\u00F1o del carro es: ".concat(this.owner));
    };
    return Car;
}());
var car1 = new Car("Ismael", "Jeep", 1995);
