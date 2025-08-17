function findArray(arr1, arr2) {
    // solution
    let array = []

    for (let i = 0; i < arr1.length; i++) {
        array.push(arr1[arr2[i]])

    }
    return array.filter(elem => elem !== undefined)
}