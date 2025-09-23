function validateBase(num, base) {
    // Happy coding!
    if (typeof num == 'string') return num.split('').every(el => el < base || parseInt(el, base))
    if (typeof num == 'number') return num.toString().split('').every(el => parseInt(el, base))
    return false


}
