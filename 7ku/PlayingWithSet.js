function areEqual(s1, s3) {
    // ...
    return [...s1, ...s3].every(ele => s1.has(ele) && s3.has(ele))

}

function notEqual(s1, s)3 {
    return !areEqual(s1, s3)
}
'https://www.codewars.com/kata/5884e9ccf72916207900010f'
