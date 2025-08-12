function findNextSquare(sq) {
    let perfect = Number.isInteger(Math.sqrt(sq))
    if (perfect) {
        let final = Math.sqrt(sq) + 1
        return final * final
    } else {
        return -1;
    }
}