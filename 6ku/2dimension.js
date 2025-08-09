


// 2 dimension array

function generatePairs(n) {
    let arr = [];

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            arr.push([j, i]);
        }
    }

    arr.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    return arr;
}
