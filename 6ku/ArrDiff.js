//checking all numbers

function arrayDiff(a, b) {
    return a.filter(elm => !b.includes(elm))
}