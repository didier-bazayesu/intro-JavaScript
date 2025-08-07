function longest(s1, s2) {
    let arr = []
    let combine = s1 + s2
    // your code
    for (let i = 0; i < combine.length; i++) {
        arr.push(combine[i])
    }

    return arr.filter((elem, index) => {
        return arr.indexOf(elem) == index
    }).sort().join('')}