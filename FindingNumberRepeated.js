

//finding the first number who repeated the add number in the array 
// and returning that number only
function findOdd(A) {
 let count = {}
 A.forEach(elem => {count[elem] = (count[elem]||0)+1

})

for(key in count){

    if(count[key]%2 !== 0 ){
        return Number(key)
    }
}
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


//another way of achieving those way
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}