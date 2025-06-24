function findSmallestInt(arr) {
  //your code here
   const number = arr.sort((a,b)=> b-a).slice(-1).join();
  return Number(number)
}


// removing the duplication number 

function findUniq(arr) {
  // do magic

  return arr.filter((element,index)=> 
       {
        if(arr.indexOf(element) === index   ){
            return element;
        }
       }
  
  )
}

console.log(findUniq([1,1,1,1,1,2,3]))



// returning the unique number

function findUniq(arr) {
  // do magic

  return arr.filter((element,index)=> 
       {
        if(arr.indexOf(element) === arr.lastIndexOf(element)  ){
            return element;
        }
       }
  
  )
}

console.log(findUniq([1,1,1,1,1,2,3]))


