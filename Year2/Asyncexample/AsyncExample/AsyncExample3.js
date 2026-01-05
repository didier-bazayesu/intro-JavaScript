async function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

divide(10, 2).then(console.log).catch(console.error);

async function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Done waiting"), seconds * 1000);
    });
}

wait(2).then(console.log);
