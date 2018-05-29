function loneSum(a,b,c){
  if(a != b && b != c && a != c){
    return(a + b + c);
  }
     if(a == b && b == c && a == c){
  return(0);
  }
  if(a == b){
  return(c);
  }
    if(b == c){
  return(a);
  }
    if(a == c){
  return(b);
  }
   
}
var output = loneSum(3,2,3);
console.log(output);
