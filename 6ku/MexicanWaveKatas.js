function wave(str) {
    // Code here
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        let final = str.split('').map((e, ind) => {
            return i == ind ? e.toUpperCase() : e
        }).join('')
        arr.push(final)
    }

    return arr
}