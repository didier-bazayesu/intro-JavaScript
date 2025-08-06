function sortProducts(array) {


    return array.sort((x, y) => x.price - y.price)
}

console.log(sortProducts([{ name: 'juice', price: 443 }, { name: 'potato', price: 130 }, { name: 'pizza', price: 340 }]))