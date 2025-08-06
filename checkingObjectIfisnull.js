

//checking the object has undefined or null
function sortProducts(array) {

    for (key in array) {
        array[key] === null ? array[key] = 0
            : array[key] === undefined ? array[key] = '' : array[key]


    }
    return array;
}

console.log(sortProducts({ name: undefined, price: 443, class: undefined }))