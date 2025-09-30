let handleObject = {
    name: 'didier',
    ages: 23
}

let object = Object.create(handleObject)
object.count = 20;
console.log(handleObject)
console.log(object.ages)