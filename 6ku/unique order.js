

//finding the unique order 


var uniqueInOrder = function (iterable) {
    let str = []
    let count = 1
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] == iterable[i + 1]) {
            count++
        } else {
            str.push(iterable[i])
        }
    }
    return str
}