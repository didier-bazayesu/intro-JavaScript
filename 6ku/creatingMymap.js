

//setting My map

let array = [1, 2, 34, 5, 6, 4]
Array.prototype.myMap = function (callback) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }

    return arr;
}

console.log(array.myMap(e => e + 1))

