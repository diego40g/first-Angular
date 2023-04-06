interface Product {
    model: string,
    price: number
}

var productList: Array<Product> = [
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
]

for (const key in productList) {
    console.log(`The ${productList[key].model} is $${productList[key].price}`);
}