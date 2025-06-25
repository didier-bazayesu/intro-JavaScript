//You are given an array of product objects, each containing a name (string)
//  and a price (number). Your task is to implement a function called sortProducts that 
// sorts the products based on their prices in ascending order. 


const product = [
    {name : 'banana', price : 230},
    { name : 'rice', price : 200 },
    {name : 'juice' , price : 901}
]

console.log(product.filter(e => e.price%2 ===0).
forEach(e => e.name == 'banana' ? 
 console.log(e.price *100) :
 console.log(e) ))



 //  other question
 // you are given an object with properties that may contain null or undefined values. 
 // Your task is to implement a function called convertNullableValues that 
 // checks if any of the properties in the object contains null or undefined. 
 // If a property is null convert it to zero and if a property
 //  is undefined convert it to an empty string. Return the modified object. 

 const   removeNull = {
    name : null,
    price: undefined,
    id : 300,
    total : 5000
 }
for(property in removeNull){
   if(removeNull[property]=== undefined){
      removeNull[property] = 0
   }else if(removeNull[property] === null){
      removeNull[property] = ''
   }else{
      removeNull
   }
}

let obj = {name : 'didier',
           price : 244
}

    function highAndLow(numbers){
  // ...numbers;
  const final =  numbers.split(" ").map(element => Number(element)).
  sort((a,b)=> b-a);
  const min = final[0]
  const max = final[final.length -1]
  const newArr = [min,max].map(element=> String(element)).join(" ")
  return newArr;

}

console.log(highAndLow("1 2 8 9 0 12")); // return "5 1")

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if(array.length >2){

    
     array.sort((a,b)=>a-b).pop()
     array.shift()
     return array.reduce((a,b)=> a+b)
    }else{
        return 0
    }
  
}

console.log(sumArray([1,3]))

function digitize(n) {
  //code here
  
  return Number(String(n).split("").slice().sort((a,b)=> a-b).join(""))
}

console.log(digitize(32426))


// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(stringarray){

    return stringarray.map(Number)
}

console.log(toNumberArray(['1','2','3','4']))


function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}
greet('Didier', () => console.log('Welcome!'));



//understanding the call


function hey (){
    console.log('hello '+ this.name)
}
const person = {name : 'didier'};

hey.call(person)





function solution(number){
    let sum = [];
    for(let i = number - 1; i > 0; i--){
        if(i % 3 ===0 || i % 5 === 0){
            sum.push(i)
        }

    }
    return sum.reduce((a, b) => a +b);

}
console.log(solution(16))



//  }

