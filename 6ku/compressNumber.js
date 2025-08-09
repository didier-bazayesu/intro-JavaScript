function digitalRoot(n) {

    let f = n.toString().split('')
        .map(Number).reduce((x, y) => {
            return x + y
        })

    while (f > 9) {
        Number(
            f = f.toString().split('').map(Number)
                .reduce((x, y) => x + y))
    }

    return f;

 'djodfjofjogjgogjgjgo'

}