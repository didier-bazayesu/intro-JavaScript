function isSubsetOf(s1, s2) {
    // ...
    let arr = []
    for (let i of s1) {
        arr.push(s2.has(i))
    }
    return arr.every(el => el === true)
}

function isSupersetOf(s1, s2) {
    let arr = []
    for (let i of s2) {
        arr.push(s1.has(i))
    }
    return arr.every(el => el === true)
}

let A = new Set([1, 2]);
let B = new Set([1, 2, 3]);
console.log(isSubsetOf(B, A))
console.log(isSupersetOf(B, A))

