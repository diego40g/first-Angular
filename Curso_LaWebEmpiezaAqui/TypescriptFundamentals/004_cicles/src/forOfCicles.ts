interface User {
    firstName: string,
    lastName: string
}

var userList: Array<User> = [
    {
        firstName: "Diego",
        lastName: "Paz"
    },
    {
        firstName: "Susana",
        lastName: "Naula"
    },
    {
        firstName: "Richard",
        lastName: "Maldonado"
    }
]

//for of
for(const user of userList){
    console.log(`${user.firstName}`)
}

//Normal for
for (let counter: number = 0; counter < userList.length; counter++){
    console.log(`${userList[counter].lastName}`)
}