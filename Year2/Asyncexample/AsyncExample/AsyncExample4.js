async function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

divide(10, 2).then(console.log).catch(console.error);

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
}

getUsers().then(console.log).catch(console.error);
