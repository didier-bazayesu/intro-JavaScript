
function s (n){

for(let i=0;i<n;i++){
    

    setTimeout(()=>{
        console.log(this.n)
    },1000)
}

}

console.log(s(5))