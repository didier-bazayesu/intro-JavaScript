


//square sequence

function squares(x, n) {
    let i = 0
    let arr = []
    while (i < n) {
        arr.push(x)
        x = Math.pow(x, 2)
        i++
    }
    return arr;
}