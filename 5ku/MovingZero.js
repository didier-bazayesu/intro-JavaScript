function moveZeros(arr) {
    return [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)]
}