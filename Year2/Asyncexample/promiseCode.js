const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First operation completed");
    }, 1000);
});

const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second operation completed");
    }, 500);
});

const thirdPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Third operation completed");
    }, 800);
});

firstPromise
    .then((result) => {
        console.log(result); // Output: First operation completed
        return secondPromise;
    })
    .then((result) => {
        console.log(result); // Output: Second operation completed
        return thirdPromise;
    })
    .then((result) => {
        console.log(result); // Output: Third operation completed
    });