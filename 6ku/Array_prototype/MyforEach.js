Array.prototype.myForEach = function (callback) {

    let array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }


}

let n = [1, 2, 3, 4]
n.myForEach(e => console.log(e * 2))

