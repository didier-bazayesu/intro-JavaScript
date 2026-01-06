async function  fetch1(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data
}

fetch1().then(data => console.log(data));
