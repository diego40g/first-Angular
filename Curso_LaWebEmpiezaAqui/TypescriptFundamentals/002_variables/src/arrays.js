var nameList = ["Ana", "Diego", "Ismael"];
console.log(nameList);
console.log(nameList[1]);
nameList.pop();
nameList.push("Richard");
for (var _i = 0, nameList_1 = nameList; _i < nameList_1.length; _i++) {
    var item = nameList_1[_i];
    console.log(item);
}
var stundetList = [
    {
        firstName: "Diego",
        age: 25
    },
    {
        firstName: "Ismael",
        age: 22
    }
];
console.log(stundetList);
for (var _a = 0, stundetList_1 = stundetList; _a < stundetList_1.length; _a++) {
    var student = stundetList_1[_a];
    console.log(student.firstName);
}
