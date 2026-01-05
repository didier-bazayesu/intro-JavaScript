async function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Done waiting"), seconds * 1000);
    });
}

wait(2).then(console.log);
