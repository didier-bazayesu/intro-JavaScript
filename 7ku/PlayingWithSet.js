function areEqual(s1, s2) {
    // ...
    return [...s1, ...s2].every(ele => s1.has(ele) && s2.has(ele))

}

function notEqual(s1, s2) {
    return !areEqual(s1, s2)
}
'https://www.codewars.com/kata/5884e9ccf72916207900010f'