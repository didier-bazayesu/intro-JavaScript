


function sumMul(n,m){
    
//your idea here
if(n>0 && m>0){
let c = n;
let array = [];
for(n;n<m;n++){
    if(n%c ==0 )
     array.push(n)

}
return array.reduce((cur,num)=> cur+num,0)

}else{
    return 'invalid'
}
}

 

console.log(sumMul(14,377006))

//if is (2,6) should return 6
//if is (2,9) should return 20
//if is (2,13) should return 30