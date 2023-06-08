interface Person {
    firstName: string,
    lastName: string, 
    age: number,
    weight: number
}

var client1: Person = {
    firstName: 'Diego',
    lastName: "Paz",
    age: 25,
    weight: 120
};
var client2: Person = {
    firstName: 'Susana',
    lastName: "Rosero",
    age: 55,
    weight: 90
};
console.log(client1.firstName)
console.log(client2.firstName)