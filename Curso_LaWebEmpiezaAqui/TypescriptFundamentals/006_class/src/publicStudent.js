var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.create = function (nombre, apellido, edad) {
        this.firstName = nombre;
        this.lastName = apellido;
        this.age = edad;
    };
    Student.prototype.greeting = function () {
        console.log("Hi, ", this.firstName);
    };
    Student.prototype.toString = function () {
        console.log("{\n\n            firstName: ".concat(this.firstName, ",\n\n            lastName: ").concat(this.lastName, ",\n\n            age:  ").concat(this.age, "\n}"));
    };
    return Student;
}());
var alumno1 = new Student();
alumno1.firstName = "Diego";
alumno1.lastName = "Paz";
alumno1.age = 24;
alumno1.greeting();
alumno1.toString();
var alumno2 = new Student();
alumno2.create("Ana", "Rosero", 32);
alumno2.toString();
