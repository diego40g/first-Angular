var trueConditional: boolean = true;
var falseConditional: boolean = false;

var num1: number = 15;
var num2: number = 10;
var num3: number = 30;

// Logica aritmetica
var greaterCase: boolean = (num1+num2 >= num3);
console.log(`${num1}+${num2} >= ${num3}`, greaterCase)
var lessCase: boolean = (num1+num2 <= num3);
console.log(`${num1}+${num2} <= ${num3}`, lessCase)

// Logica de comparación
var newString: string = 'ejemplo';
var otherString: string = 'otro ejemplo';

console.log(`'${newString}' == '${otherString}' -> `, newString == otherString)
console.log(`'${newString}' != '${otherString}' -> `, newString != otherString)

// AND &&
console.log("T AND T -> ", trueConditional && trueConditional) 
console.log("T AND F -> ", trueConditional && falseConditional) 
console.log("F AND T -> ", falseConditional && trueConditional) 
console.log("F AND F -> ", falseConditional && falseConditional) 

// OR ||
console.log("T OR T -> ", trueConditional || trueConditional) 
console.log("T OR F -> ", trueConditional || falseConditional) 
console.log("F OR T -> ", falseConditional || trueConditional) 
console.log("F OR F -> ", falseConditional || falseConditional) 

// NEGATIVE !
console.log("!T -> ", !trueConditional)
console.log("!F -> ", !falseConditional)