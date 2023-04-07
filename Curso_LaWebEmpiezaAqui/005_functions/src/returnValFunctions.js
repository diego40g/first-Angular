function multiplication(num1, num2) {
    var result = num1 * num2;
    return result;
}
function adding(num1, num2, num3) {
    var result = num1 + num2 + num3;
    return result;
}
function average(num1, num2, num3) {
    var result = adding(num1, num2, num3) / 3;
    return result;
}
var total = adding(7, 3, 5);
total += multiplication(5, 3);
var tax = average(7, 3, 5);
