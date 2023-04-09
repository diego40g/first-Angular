var requestAmount = 2;
if (requestAmount > 15) {
    console.log("Aplicar descuento");
}
else if (requestAmount <= 15 && requestAmount >= 10) {
    console.log("Descuento pequeño");
}
else {
    console.log("Sin descuento");
}
