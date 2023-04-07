var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.create = function (nombre, apellido, peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
        this.greeting();
    };
    Alumno.prototype.greeting = function () {
        console.log("Hi, ", this.nombre);
    };
    Alumno.prototype.toString = function () {
        console.log("{\n\n            nombre: ".concat(this.nombre, ",\n\n            apellido: ").concat(this.apellido, ",\n\n            peso:  ").concat(this.peso, "\n}"));
    };
    return Alumno;
}());
var alumno2 = new Alumno();
alumno2.create("Damian", "Naula", 22);
alumno2.toString();
