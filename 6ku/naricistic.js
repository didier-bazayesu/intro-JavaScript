
//learning to check narissitic js


function narcissistic(value) {
    // Code me to return true or false
    let sum = 0

    let array = value.toString().split('').map(Number)
    let length = array.length
    for (element of array) {
        sum += Math.pow(element, length)
    }
    return sum === value
}
