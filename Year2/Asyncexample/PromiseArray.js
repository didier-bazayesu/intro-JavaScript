const originalData = [1, 2, 3, 4, 5];
const promiseArray = originalData.map((item) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item);
        }, 1000);
    });
});
