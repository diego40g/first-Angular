var trueConditional = true;
var falseConditional = false;
var num1 = 15;
var num2 = 10;
var num3 = 30;
// Logica aritmetica
var greaterCase = (num1 + num2 >= num3);
console.log("".concat(num1, "+").concat(num2, " >= ").concat(num3), greaterCase);
var lessCase = (num1 + num2 <= num3);
console.log("".concat(num1, "+").concat(num2, " <= ").concat(num3), lessCase);
// Logica de comparación
var newString = 'ejemplo';
var otherString = 'otro ejemplo';
console.log("'".concat(newString, "' == '").concat(otherString, "' -> "), newString == otherString);
console.log("'".concat(newString, "' != '").concat(otherString, "' -> "), newString != otherString);
// AND &&
console.log("T AND T -> ", trueConditional && trueConditional);
console.log("T AND F -> ", trueConditional && falseConditional);
console.log("F AND T -> ", falseConditional && trueConditional);
console.log("F AND F -> ", falseConditional && falseConditional);
// OR ||
console.log("T OR T -> ", trueConditional || trueConditional);
console.log("T OR F -> ", trueConditional || falseConditional);
console.log("F OR T -> ", falseConditional || trueConditional);
console.log("F OR F -> ", falseConditional || falseConditional);
// NEGATIVE !
console.log("!T -> ", !trueConditional);
console.log("!F -> ", !falseConditional);
