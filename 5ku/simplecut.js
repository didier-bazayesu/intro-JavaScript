'https://www.codewars.com/kata/59cf17a9a25c8c08f400000b'


function numberToPower(number, power) {
    let arr = []
    for (let i = 0; i < power; i++) {
        arr.push(number)
    }
    return arr.reduce((x, y) => x * y, 1)
}