function printMessage(message: string){
    console.log(`Su mensaje es: ${message}`)
}

printMessage("Este es un parametro");
printMessage("Esta funcionando");

function adding (num1: number, num2: number){
    const total = num1 + num2;
    console.log(`El total de ${num1} + ${num2} = ${total}`)
}
adding(4,5)
adding(12,32)