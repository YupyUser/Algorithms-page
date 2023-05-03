function tax () {
    let price = +prompt('Enter price');
    let tax = +prompt('Enter tax');
    alert(price + price*0.01*tax + ' is price of product with tax');
}


export default ['TAX', tax, 'Enter price and tax(%) to get price with tax'];


