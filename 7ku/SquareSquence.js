


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
'https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript'