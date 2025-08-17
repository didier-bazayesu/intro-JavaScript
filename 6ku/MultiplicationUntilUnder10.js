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
//example 39 => 3*9 = 27 = 2*7 =>  14 = 1*4 => 4 result = 3 because they happen 3 times for reach to under
//10
'https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript'
function encode(str) {
    //   Write code here.
    return str.toLowerCase().split('').map((ele, i) => {
        let test1 = /[A-Z]/gi
        if (test1.test(ele)) {
            let code = str.charCodeAt(i)
            return code
        } else {
            return ele
        }
    })


}

console.log(encode('abAc5'))

let a = 'A'


