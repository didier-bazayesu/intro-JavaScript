function explode(x) {
    if (x.every(e => typeof e === 'number')) {
        let y = []
        for (let i = 0; i < x[0] + x[1]; i++) {
            y.push(x)
        }
        return y;
    } else if (typeof x[0] === 'number') {
        let y = []
        for (let i = 0; i < x[0]; i++) {
            y.push(x)
        }
        return y;
    } else if (typeof x[1] === 'number') {

        let y = []
        for (let i = 0; i < x[1]; i++) {
            y.push(x)
        }
        return y;
    } else {
        return 'Void!'
    }

}