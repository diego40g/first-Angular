var edad: number, fechaNacimiento: number;

var total: number, puntos: number;

// edad=""  Asignation error type
puntos = 267;
edad = 25;
fechaNacimiento = new Date().getFullYear() - edad;

console.log("Edad = ", edad);
console.log("Año de nacimiento", fechaNacimiento);

total = puntos*2/edad;
console.log("Total", total)