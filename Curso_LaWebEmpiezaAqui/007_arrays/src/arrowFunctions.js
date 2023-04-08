var students = ["Ana", "Diego", "Ismael", "Richard"];
students.forEach(function (firstName) {
    if (firstName == "Diego") {
        console.log("".concat(firstName, " ya no es estudiante"));
    }
    console.log("El nombre del estudiante es ".concat(firstName));
});
console.log(students);
var persons = [];
persons.push({ firstName: "Diego", lastName: "Paz" });
persons.push({ firstName: "Ismael", lastName: "Paz" });
persons.forEach(function (person) {
    console.log(person.firstName);
});
