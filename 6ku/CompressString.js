     //your is to compress the string according the repetition of letter where order matter
     //example : 'AABBSS' => A2B2S2




function compressString(string) {
    let count = 1
    let str = ''
    let n = string.split('')
    for (let i = 0; i < n.length; i++) {
        if (n[i] === n[i + 1]) {
            count++
        } else {
            str += `${n[i]}${count}`
            count = 1;
        }
    }
    return str;
}

console.log(compressString('adddbd'))