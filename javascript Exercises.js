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

    

//  }

