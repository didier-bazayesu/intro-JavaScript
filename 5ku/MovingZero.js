function moveZeros(arr) {
    return [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)]
}

'https://www.codewars.com/kata/57fb017d9610ce369a0006ac'