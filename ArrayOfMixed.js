

//getting the array of mixed number and strings of number for providing the sum

function sumMix(x){

  
  return x.map(Number).reduce((x,y)=> x+y,0)
}