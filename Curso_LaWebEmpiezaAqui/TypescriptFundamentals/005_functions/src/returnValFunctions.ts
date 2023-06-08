function multiplication(num1: number, num2: number): number {
    const result:number = num1 * num2;
    return result;
}
function adding(num1: number, num2: number, num3: number): number{
    const result: number = num1 + num2 + num3;
    return result;
}
function average(num1: number, num2:number, num3:number): number{
    const result: number = adding(num1, num2, num3) / 3;
    return result
}

var total = adding(7, 3, 5)
total += multiplication(5, 3)
var tax = average(7, 3, 5)