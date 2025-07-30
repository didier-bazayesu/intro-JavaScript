function switchItUp(number){
//Write your own Code!
return number === 0 ? 'zero' : number === 1 ? 'one' :
number ===  2 ?  'two' : number === 3 ? 'three' : number === 4 ?
'four' : number === 5 ? 'five'  : number === 6 ? 'six' : number === 7 ? 'seven' : number === 8 ? 'eight' : 'nine'
}



//another way
function switchItUp(number){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number];
}

console.log(switchItUp(9))