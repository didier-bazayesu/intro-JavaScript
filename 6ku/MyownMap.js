String.prototype.Mymap = function (calback) {
    
    let arr = []
    for(let i=0 ;i<this.length;i++){

        arr.push(calback(this,i))
    }
    return arr;

}

let name = [1,2,3,4]
console.log(name.Mymap(elem=> elem*2))