//finding the highest number and the smallest number


function highAndLow(numbers){
  // ...numbers;
  const final =  numbers.split(" ").map(element => Number(element)).
  sort((a,b)=> b-a);
  const min = final[0]
  const max = final[final.length -1]
  const newArr = [min,max].map(element=> String(element)).join(" ")
  return newArr;

}

//adding the number from the array and discarding the highest and smallest number in the array with
// validation of undefined , null value and array with no more than two digits



function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }

  let sorted = array.slice().sort((a, b) => a - b); // copy the array
  sorted.pop();   // remove largest
  sorted.shift(); // remove smallest

  return sorted.reduce((a, b) => a + b, 0);
}



//getting the random number and providing the array of it


function digitize(n) {
  const c = n.toString()          
          .split('')           
          .reverse()           
        return c.map(e=> Number(e))       
}



//filtering the number in the string  example

const string = "i have born in 2025 november 16"
const split = string.split(" ").map(e=> Number(e)).filter(e => !Number.isNaN(e)).join(" ")
console.log(split)
