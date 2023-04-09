var students = [];
students.push({
    studentId: 1,
    firstName: "Ana",
    lastName: "Rosero"
});
students.push({
    studentId: 2,
    firstName: "Diego",
    lastName: "Paz"
});
students.push({
    studentId: 3,
    firstName: "Richard",
    lastName: "Maldonado"
});
var searchStudent = students.find(function (student) {
    return student.studentId == 2;
});
console.log(searchStudent);
