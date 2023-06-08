var students = ["Ana", "Diego", "Ismael", "Richard"]

console.log(students)
students.push("Susana")
console.log(students)

var numbers = [1, 10, 11, 21]

console.log(numbers)
numbers.push(32)
console.log(numbers)

interface Person{
    firstName: string;
    lastName: string;
}

var persons: Person[] = []
console.log(persons)

persons.push({firstName: "Diego", lastName: "Paz"})
console.log(persons)

var personDemo: Person = {
    firstName: "Damian",
    lastName: "Paz"
}
persons.push(personDemo)
