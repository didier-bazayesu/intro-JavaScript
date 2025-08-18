function maps(x) {

    //let us do it without map
    let newArray = []
    for (let i = 0; i < x.length; i++) {
        newArray.push(x[i] * 2)
    }
    return newArray;
}