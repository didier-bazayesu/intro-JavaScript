/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here

if(checkBalance){
    if(isActive&& balance >0){
        console.log("your balance is $",balance)
    } else if(!isActive){
        console.log("your account is no longer active")
    }else if(isActive&& balance === 0){
        console.log("your account is empty")
    }else{ console.log("your account is negative please contact the bank")}
    
}else{
    console.log("thankyou. hanve a nice day!")
}

/// the code from chartgpt
// Input values (you can change these to test different cases)
var balance = 325.00;
var isActive = true;
var checkBalance = true;

// Logic based on the flowchart
if (checkBalance) {
    if (isActive) {
        if (balance > 0) {
            console.log("Your balance is $" + balance.toFixed(2));
        } else if (balance === 0) {
            console.log("Your account is empty.");
        } else {
            console.log("Your balance is negative. Please contact bank.");
        }
    } else {
        console.log("Your account is no longer active.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}


//other conditionals with boolean values.

var eatAnimal = true;
var eatPlant = true;

eatAnimal && eatPlant ? console.log("omnivores") : eatAnimal ? console.log('carnivores') :
eatPlant ? console.log("herbivores") : "undefined"





// reverse function 

function reverse(n) {
  let reversed = 0;
  let isNegative = n < 0;

  // Make n positive for processing
//   n = Math.abs(n);

  while (n > 0) {
    let digit = n % 10;              
    reversed = reversed * 10 + digit; 
    n = Math.floor(n / 10);         
  }

  return isNegative ? -reversed : reversed;
}

console.log(reverse(123))





//  understanding Math.ceil, Math.round , Math.fllor


function roundIt(n){
  //coding here...
  const str = n.toString().split(".")
  let [left,right] = str;
  if(left.length < right.length ){
    return Math.ceil(n)
  }else if(left.length  > right.length  ){
    return Math.floor(n)
  }else{
   return Math.round(n)
  }
}

console.log(roundIt(345.235))


//making triangle with using javascript
let x = 4;
for(let i =0; i<=x;i++){
    let row = ""
    for(let j=0;j<=i;j++){
        row += "*"
    }
    console.log(row)

    
}