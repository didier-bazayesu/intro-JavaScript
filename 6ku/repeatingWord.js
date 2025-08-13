

//learning js

function accum(s) {
    let str = []
    let count = 1

    for (let i of s) {
        str.push(i.repeat(count))
        count++
    }
    // your code
    let final = str.map(el => el[0].toUpperCase() + el.toLowerCase().slice(1))
    return final.join('-')
}
'https://www.codewars.com/kata/53417de006654f4171000587/train/javascript'

console.log(accum("ZpglnRxqenU"))