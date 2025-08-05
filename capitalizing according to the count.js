function repeat(string) {
    let arr = []
    let count = 0

    for (let i = 0; i < string.length; i++) {
        let str = string.split('').map(e => string.charAt(count).toUpperCase() + string.slice(1))
        count++
        arr.push(str)

    }

    return arr


}

console.log(repeat('hello'))     // i will contiue latter
