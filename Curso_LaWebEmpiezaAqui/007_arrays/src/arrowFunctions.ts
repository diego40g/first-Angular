var students: string[] = ["Ana", "Diego", "Ismael", "Richard"]

students.forEach((firstName) => {
    if(firstName == "Diego"){
        console.log(`${firstName} ya no es estudiante`)
    }
    console.log(`El nombre del estudiante es ${firstName}`)
})

console.log(students)

interface Person{
    firstName: string;
    lastName: string;
}
var persons: Person[] = []

persons.push({firstName: "Diego", lastName: "Paz"})
persons.push({firstName: "Ismael", lastName: "Paz"})

persons.forEach((person) => {
    console.log(person.firstName)
})