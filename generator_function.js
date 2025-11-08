const handle_generator = ()=>{

    console.log("the execution already staarted ");
    let x = yield 4;
    let y = yield 7;

    console.log("the execution already ended")
}

console.log(handle_generator());