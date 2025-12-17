function findSpecfic(array){
    let numberFound = false ;
    let number = 4;
   for(let i = 0 ; i< array.length;i++) if(array[i] == number) return 'number found' ;
   return "number not found" 

}

console.log(findSpecfic([1,2,3,4,5,6,7]))