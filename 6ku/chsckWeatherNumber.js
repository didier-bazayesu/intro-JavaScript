function validateBase(num, base) {
    // Happy coding!
    if (typeof num == 'string') return num.split('').every(el => el < base || parseInt(el, base))
    if (typeof num == 'number') return num.toString().split('').every(el => parseInt(el, base))
    return false


}

'https://www.codewars.com/kata/563a8656d52a79f06c00001f/train/javascript'