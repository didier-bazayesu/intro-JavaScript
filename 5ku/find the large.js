function leastLarger(number, index) {
    let position = number[index]
    let minLarger = Infinity
    let result = -1

    number.forEach((el, ind) => {
        if (el > position && el < minLarger) {
            minLarger = el
            result = ind
        }
    })

    return result
}
