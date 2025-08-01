//adding number based on condition

function getSum(a, b){  
    if(a !==b){ 
        if(a<b){
  let s = 0
   for(let i=a; i<=b;i++) s+=i;
  return s
}else{
       let s = 0
   for(let i=b; i<=a;i++) s+=i;
  return s
       
   }
    }
    return a;
}