function scramble(str, arr) {
  let output = [];  //array for storing the result 
  arr.forEach((charIdx, i) => output[charIdx] = str[i]) //looping through array and string
  return output.join('');  //   final result
};


//another way
// for each method has two parameter element and index 

function scramble(str, arr) {
  let final = [] //array for storing result

    arr.forEach((elem,index)=>{
        final[elem]  = str[index]
    })

    return final.join('');
};
console.log(scramble('didier',[3,1,0,2]))


