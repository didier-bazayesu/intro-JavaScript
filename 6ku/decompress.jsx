function compress(string) {
    let str = ''
    let number = []
    let n = ''

    for (let i = 0; i < string.length; i++) {

        if (i % 2 === 0) {
            str += string[i]
        } else {
            number.push(Number(string[i]))
        }
    }


    for (let i = 0; i < str.length; i++) {
        n += str[i].repeat(number[i])
    }

    return n;



}

console.log(compress('A5B6C6'))