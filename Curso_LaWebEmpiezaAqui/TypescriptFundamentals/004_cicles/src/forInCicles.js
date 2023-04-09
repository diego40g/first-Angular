var productList = [
    {
        model: "HP All one",
        price: 699.99
    },
    {
        model: "Asus pc gamer",
        price: 999.99
    },
    {
        model: "MSI custom model",
        price: 4999.99
    },
    {
        model: "HP laptop",
        price: 399.99
    }
];
for (var key in productList) {
    console.log("The ".concat(productList[key].model, " is $").concat(productList[key].price));
}
