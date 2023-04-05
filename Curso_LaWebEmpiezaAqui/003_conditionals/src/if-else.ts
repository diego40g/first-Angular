var inputNum: number = 5;
var toPrint: boolean = true;

if(toPrint){
    if(inputNum > 10){
        console.log(`Numero ingresado mayor a ${inputNum}`)
        inputNum-=10;
        console.log(`Nuevo valor del numero ingresado es ${inputNum}`)
    } else {
        console.log(`Numero ingresado menor a ${inputNum}`)
    }
}