var firstName: string;
var age: number = 15;


if (age > 10){
    firstName = "Diego"
}
console.log(firstName);

firstName = age > 10 ? "Diego in ternary" : "No se cumple la condición"
console.log(firstName);