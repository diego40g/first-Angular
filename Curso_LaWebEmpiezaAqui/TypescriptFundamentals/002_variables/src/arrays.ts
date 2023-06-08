var nameList = ["Ana", "Diego", "Ismael"];
console.log(nameList);
console.log(nameList[1]);

nameList.pop()
nameList.push("Richard")
for (const item of nameList) {
    console.log(item)
}

interface Student {
    firstName: String,
    age: number
}
var stundetList: Array<Student> = [
    {
        firstName: "Diego",
        age: 25
    },
    {
        firstName: "Ismael",
        age: 22
    }
]

console.log(stundetList)
for(const student of stundetList){
    console.log(student.firstName)
}