async function didier() {


    try{
        let n = await fetch('https://jsonplaceholder.typicode.com/posts')
        let f = await n.json()
        return f;


    }catch(error){
        console.log('you ara ')
    }


}

didier().then(console.log)
