



function isIsogram(str){
         let lower= str.toLowerCase()  // all lower letter
  
  let   st = lower.split('').filter((elem,index)=>{
        if(lower.indexOf(elem) ===  index){
            return true;  //removing duplicate
        }
     })
        
        return lower.length === st.length

}

//another way of checking duplicate
function isIsogram(str){
    let lower = str.split('')
    let final = new Set(lower)
    return final.size === lower.length
}
console.log(isIsogram('hellp'))

