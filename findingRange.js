// Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10




// Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

  //the first way
//my logic but works for small number 
function takeNumbers(x,y,k){
    let number = 0;
   for(x;x<=y;x++){
    if(x%k == 0) number++
    
   
   }

   return number


}

// second way

const  divisibleCounts  = (x, y, k) => {
  
   let count = 0;
   let first = x%k=== 0 ? x : x +(k-(x%k));
  for(first;first<=y ; first+=k){
     count ++;
    
  }
  
  return count;
   
}

console.log(divisibleCounts(6,11,2))


//other way 
function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k);
}

// i need more understanding for this method they used for.

