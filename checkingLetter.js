
// Task
// Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

// The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

// Examples
//     "Across the rivers", "chris" --> true
//       ^      ^  ^^   ^
//       c      h  ri   s
                
//     Contains all of the letters in "chris", in order.
// ----------------------------------------------------------
//     "Next to a lake", "chris" --> false

//     Contains none of the letters in "chris".
// --------------------------------------------------------------------
//     "Under a sea", "chris" --> false
//          ^   ^
//          r   s

//solution

function checkName(str1,str2){

     str2 = str2.toLowerCase()
     str1 = str1.toLowerCase()

    let index = 0;
    for(let i in str1){

        if(str1[i] === str2[index]) index ++;
       
    }
    if(index === str2.length) return true;
    return false;

}

console.log(checkName( "A live son", "Allison" ));




