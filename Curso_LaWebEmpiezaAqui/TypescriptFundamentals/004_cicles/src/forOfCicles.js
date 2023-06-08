var userList = [
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
];
//for of
for (var _i = 0, userList_1 = userList; _i < userList_1.length; _i++) {
    var user = userList_1[_i];
    console.log("".concat(user.firstName));
}
//Normal for
for (var counter = 0; counter < userList.length; counter++) {
    console.log("".concat(userList[counter].lastName));
}
