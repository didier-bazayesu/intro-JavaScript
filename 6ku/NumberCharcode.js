
function charcode(n){

      return n.split('').map((ele,i)=>{
        let f = n.charCodeAt(i)
        return f-96
      }).join(' ')
}

console.log(charcode('abcdefghijklmnopqlstuvwxyz'))