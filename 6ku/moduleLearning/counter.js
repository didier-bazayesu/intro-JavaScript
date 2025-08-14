export const sum = (a,b)=> {

    return a+b
}

export  const  counter = (a)=>{

   setInterval(()=>{
   console.log(a++)
   },2000)
   return;
}

function isVow(a) {


    let f = 'abuoi'
    return a.map(elem => {
        let n = String.fromCharCode(elem)
        if (f.includes(n)) {
            return n
        } else {
            return elem
        }
    })


}

console.log(isVow([100, 100, 116, 105, 114, 121]))
 