Array.prototype.myFilter = function (callback) {

    let array = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array.push(this[i])
        }
    }

    return array;
}

let n = [1, 2, 3, 4]

console.log(n.myFilter((e) => e >= 3))