var inputNum = 5;
var toPrint = true;
if (toPrint) {
    if (inputNum > 10) {
        console.log("Numero ingresado mayor a ".concat(inputNum));
        inputNum -= 10;
        console.log("Nuevo valor del numero ingresado es ".concat(inputNum));
    }
    else {
        console.log("Numero ingresado menor a ".concat(inputNum));
    }
}
