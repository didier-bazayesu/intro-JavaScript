function findOutlier(integers) {
    //your code here
    let add = []
    let even = []
    for (let integer of integers) {

        if (integer % 2 !== 0) {
            add.push(integer)
        } else {
            even.push(integer)
        }

    }
    return add.length > even.length ? even[0] : add[0]
}