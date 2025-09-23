function remove(string) {
    let str = ''
    let i = string.split('').reverse()
    for (let j = 0; j < i.length; j++) {
        if (i[j] == '!') {
            str += i[j]
        } else {
            break;
        }
    }
    return string.replace(/!/g, '').concat(str)
}