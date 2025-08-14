function suffixSums(a) {
    let arr = []
    //coding and coding..
    for (let i = 0; i < a.length; i++) {
        let sum = 0
        for (let j = i; j < a.length; j++) {
            sum += a[j]

        }
        arr.push(sum)
    }
    return arr;


}
//example [1,2,3,4]=> [10,9,7,4]

//another way

function suffixSums(a) {
    let arr = []
    //coding and coding..
    while (a.length) {
        arr.push(a.reduce((x, y) => x + y, 0))
        a.shift()
    }

    return arr;


}
console.log(suffixSums([1, 2, 3, 4, 5]))

'https://www.codewars.com/kata/59f1fbfba5e12902ba000128'
