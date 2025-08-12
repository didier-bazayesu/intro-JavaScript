const findSquares = num => {
    if (num % 2 == 1) {
        let small = (num - 1) / 2
        let big = small + 1

        return `${Math.pow(big, 2)}-${Math.pow(small, 2)}`
    }

};