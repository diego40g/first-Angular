function printMessage(message) {
    console.log("Su mensaje es: ".concat(message));
}
printMessage("Este es un parametro");
printMessage("Esta funcionando");
function adding(num1, num2) {
    var total = num1 + num2;
    console.log("El total de ".concat(num1, " + ").concat(num2, " = ").concat(total));
}
adding(4, 5);
adding(12, 32);
