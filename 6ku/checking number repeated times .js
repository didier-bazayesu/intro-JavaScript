function findEven(n) {
    let obj = {}
    let value = {}
    let key = []
    for (let key of n) {
        obj[key] = (obj[key] || 0) + 1
    }
    for (let keys in obj) {
        if (obj[keys] % 2 == 1) {
            value[keys] = obj[keys]
        }
    }

    let max = Object.values(value)
    let f = Math.max(...max)


    for (let i in value) {
        if (value[i] == f) {
            return i
        }
    }


}

console.log(findEven([1, 2, 2, 2, 2, 1, 1]))

//2
