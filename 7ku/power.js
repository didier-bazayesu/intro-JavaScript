function numberToPower(number, power) {
    let arr = []
    for (let i = 0; i < power; i++) {
        arr.push(number)
    }
    return arr.reduce((x, y) => x * y, 1)
}