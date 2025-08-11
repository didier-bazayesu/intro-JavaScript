'https://www.codewars.com/kata/5768a693a3205e1cc100071f'


//this katas is for naming style for more than 3 names 

function initializeNames(name) {
    // Insert your brilliant code her

    let array = name.split(' ')
    if (array.length > 2) {

        let firstName = array.shift()
        let lastName = array.pop()

        let final = array.map(el => el.charAt(0) + '.')
        final.unshift(firstName)
        final.push(lastName)
        return final.join(' ')
    } else {
        return name;
    }
    //  

}