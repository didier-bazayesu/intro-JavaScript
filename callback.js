function handleCallBack(name, age, greet) {

    return greet(name, age);
}

const callback = (name, age) => {
    console.log(`${name.toUpperCase()} has ${age} Years old`);
};

handleCallBack('didier', 35, callback)