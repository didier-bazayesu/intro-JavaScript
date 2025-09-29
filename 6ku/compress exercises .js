function compressString(str) {
    let count = 1;
    let string = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            string += `${str[i]}${count}`;
            count = 1;
        }

    }
    return string;
}
console.log(compressString('AAABBBBAA'))