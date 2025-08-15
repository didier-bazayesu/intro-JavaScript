function XO(str) {
    // code here
    let pattern = /[xo]/gi
    if (pattern.test(str)) {
        let x = str.match(/x/gi) || []
        let o = str.match(/o/gi) || []
        return x.length === o.length
    } else {
        return true
    }



}