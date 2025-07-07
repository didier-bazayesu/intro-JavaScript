
// console.log(validate('078-4959-495'))
function compressing(string){
   let count = 1
   let final = ''
   for(let i = 0; i<string.length;i++){

    if(string[i] == string[i+1]){

        count++
    }else{
        final += string[i] +count
      count = 1
    }
  
   }

   return final
    
  
}

console.log(compressing("AAAABBBCCDAA"))  // return A4B3C2A2