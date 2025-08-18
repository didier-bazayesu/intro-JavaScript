var summation = function (num) {

    let array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
    }
    return array.reduce((x, y) => x + y, 0)
    // Code here
}